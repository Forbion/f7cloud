<!--
  - SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div class="attachment" :class="{'message-attachment--can-preview': canPreview || isOfficeDocument }">
		<div class="mail-attachment-img--wrapper" @click="openAttachment">
			<img v-if="isImage"
				 class="mail-attached-image"
				 :src="url">
			<img v-else class="attachment-icon" :src="mimeUrl">
		</div>
		<div class="mail-attached--content" @click="openAttachment">
			<span class="attachment-name"
				  :title="label">{{ name }}
			</span>
			<span class="attachment-size">{{ humanReadable(size) }}</span>
		</div>
		<FilePicker v-if="isFilePickerOpen"
					:title="t('mail', 'Choose a folder to store the attachment in')"
					:buttons="saveAttachementButtons"
					:allow-pick-directory="true"
					:multiselect="false"
					:mimetype-filter="['httpd/unix-directory']"
					@close="()=>isFilePickerOpen = false" />
		<Actions :boundaries-element="boundariesElement">
			<template v-if="!showCalendarPopover">
				<ActionButton v-if="isCalendarEvent"
							  class="attachment-import calendar"
							  :disabled="loadingCalendars"
							  @click.stop="loadCalendars">
					<template #icon>
						<IconAdd v-if="!loadingCalendars" :size="16" />
						<IconLoading v-else-if="loadingCalendars" :size="16" />
					</template>
					{{ t('mail', 'Import into calendar') }}
				</ActionButton>
				<ActionButton class="attachment-download"
							  @click="download">
					<template #icon>
						<IconDownload :size="16" />
					</template>
					{{ t('mail', 'Download attachment') }}
				</ActionButton>
				<ActionButton class="attachment-save-to-cloud"
							  :disabled="savingToCloud"
							  @click.stop="()=>isFilePickerOpen = true">
					<template #icon>
						<IconSave v-if="!savingToCloud" :size="16" />
						<IconLoading v-else-if="savingToCloud" :size="16" />
					</template>
					{{ t('mail', 'Save to Files') }}
				</ActionButton>
			</template>
			<template v-else>
				<ActionButton @click="closeCalendarPopover">
					<template #icon>
						<IconArrow :size="16" />
					</template>
					{{ t('mail', 'Go back') }}
				</ActionButton>
				<ActionButton v-for="entry in calendarMenuEntries"
							  :key="entry.text"
							  @click="entry.action">
					{{ entry.text }}
				</ActionButton>
			</template>
		</Actions>
		<NcModal v-if="showOnlyOfficeModal"
				 @close="closeOnlyOfficeModal"
				 :title="name"
				 size="large">
			<div class="onlyoffice-modal__container">
				<div v-if="isOnlyOfficeLoading" class="onlyoffice-modal__loading">
					<IconLoading :size="32" />
					<span>{{ t('mail', 'Loading document...') }}</span>
				</div>

				<iframe v-if="tempFileInfo && !isOnlyOfficeLoading"
						:src="getFileUrl(tempFileInfo.id)"
						class="onlyoffice-modal__frame"
						@load="handleOnlyOfficeLoaded"
						allow="clipboard-write; clipboard-read"
						allowfullscreen
				></iframe>
			</div>
		</NcModal>
	</div>
</template>

<script>

import { formatFileSize } from '@nextcloud/files'
import { translate as t } from '@nextcloud/l10n'
import { showError, showSuccess } from '@nextcloud/dialogs'
import { FilePickerVue as FilePicker } from '@nextcloud/dialogs/filepicker.js'
import { mixin as onClickOutside } from 'vue-on-click-outside'

import { NcActions as Actions, NcActionButton as ActionButton, NcLoadingIcon as IconLoading } from '@nextcloud/vue'

import IconAdd from 'vue-material-design-icons/Plus.vue'
import IconArrow from 'vue-material-design-icons/ArrowLeft.vue'
import IconSave from 'vue-material-design-icons/Folder.vue'
import IconDownload from 'vue-material-design-icons/Download.vue'
import Logger from '../logger.js'

import { downloadAttachment, saveAttachmentToFiles } from '../service/AttachmentService.js'
import { getUserCalendars, importCalendarEvent } from '../service/DAVService.js'

import { NcModal } from '@nextcloud/vue'
import { generateUrl } from '@nextcloud/router'

import { getRequestToken } from '@nextcloud/auth'
import axios from '@nextcloud/axios'

export default {
	name: 'MessageAttachment',
	components: {
		FilePicker,
		NcModal,
		Actions,
		ActionButton,
		IconAdd,
		IconArrow,
		IconLoading,
		IconSave,
		IconDownload,
	},
	mixins: [onClickOutside],
	props: {
		id: {
			type: String,
			required: true,
		},
		fileName: {
			type: String,
			default: t('mail', 'Unnamed'),
			required: false,
		},
		url: {
			type: String,
			required: true,
		},
		size: {
			type: Number,
			required: true,
		},
		mime: {
			type: String,
			required: true,
		},
		mimeUrl: {
			type: String,
			required: true,
		},
		isImage: {
			type: Boolean,
			default: false,
		},
		isCalendarEvent: {
			type: Boolean,
			default: false,
		},
		canPreview: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			savingToCloud: false,
			loadingCalendars: false,
			calendars: [],
			showCalendarPopover: false,
			saveAttachementButtons: [
				{
					label: t('mail', 'Choose'),
					callback: this.saveToCloud,
					type: 'primary',
				},
			],
			isFilePickerOpen: false,
			showOnlyOfficeModal: false,
			isOnlyOfficeLoading: false,
			tempFileId: null,
			tempFileUrl: null,
			tempFileInfo: null,
		}
	},
	computed: {
		isOfficeDocument() { //this
			const officeMimeTypes = [
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				'application/msword',
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				'application/vnd.ms-excel',
				'application/vnd.openxmlformats-officedocument.presentationml.presentation',
				'application/vnd.ms-powerpoint',
				'text/rtf',
				'text/plain',
				'application/rtf',
			]
			return officeMimeTypes.includes(this.mime)
		},
		name() {
			if (this.mime === 'message/rfc822') {
				return t('mail', 'Embedded message')
			}
			return this.fileName
		},
		label() {
			if (this.mime === 'message/rfc822') {
				return t('mail', 'Embedded message') + ' (' + formatFileSize(this.size) + ')'
			}
			return this.fileName + ' (' + formatFileSize(this.size) + ')'
		},
		calendarMenuEntries() {
			return this.calendars.map((cal) => {
				return {
					text: cal.displayname,
					action: this.importCalendar(cal.url),
				}
			})
		},
		boundariesElement() {
			return document.querySelector('#content-vue')
		},
	},
	methods: {
		getFileUrl(fileId) {
			return generateUrl(`/apps/files/files/${fileId}?dir=/Temp&openfile=true&iframe=true`)
		},
		async ensureTempDirectoryExists() {
			try {
				// Просто проверяем существование папки
				await axios.request({
					method: 'PROPFIND',
					url: generateUrl(`/remote.php/dav/files/${OC.currentUser}/Temp`),
					headers: {
						'Depth': '0',
						'Authorization': `Bearer ${getRequestToken()}`
					}
				});
			} catch (e) {
				// Если папки нет, создаем ее
				if (e.response?.status === 404) {
					await axios.request({
						method: 'MKCOL',
						url: generateUrl(`/remote.php/dav/files/${OC.currentUser}/Temp`),
						headers: {
							'Authorization': `Bearer ${getRequestToken()}`
						}
					});
				}
			}
		},
		async getOnlyOfficeFrameUrl() {
			if (!this.isOfficeDocument) return null;

			try {
				// 1. Загружаем файл как blob
				const response = await axios.get(this.url, {
					responseType: 'blob',
					headers: {
						'Authorization': `Bearer ${getRequestToken()}`
					}
				});

				// 2. Создаем временный файл через DAV API
				const tempFileName = `temp_${Date.now()}_${this.fileName}`;
				const tempPath = `/Temp/${tempFileName}`;

				// 3. Загружаем файл через WebDAV PUT
				await axios.put(
					generateUrl(`/remote.php/dav/files/${OC.currentUser}${tempPath}`),
					response.data,
					{
						headers: {
							'Content-Type': this.mime,
							'Authorization': `Bearer ${getRequestToken()}`,
							'X-Requested-With': 'XMLHttpRequest'
						}
					}
				);

				// 4. Получаем fileid через PROPFIND
				const propfindResponse = await axios.request({
					method: 'PROPFIND',
					url: generateUrl(`/remote.php/dav/files/${OC.currentUser}${tempPath}`),
					headers: {
						'Depth': '0',
						'Authorization': `Bearer ${getRequestToken()}`,
						'Content-Type': 'application/xml; charset=utf-8'
					},
					data: `<?xml version="1.0"?>
                <d:propfind xmlns:d="DAV:">
                    <d:prop>
                        <oc:fileid xmlns:oc="http://owncloud.org/ns"/>
                    </d:prop>
                </d:propfind>`
				});

				// 5. Парсим fileid из XML
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(propfindResponse.data, "text/xml");
				const fileId = xmlDoc.getElementsByTagName('oc:fileid')[0].textContent;

				// После парсинга XML
				if (!fileId) {
					throw new Error('Could not get file ID from server response');
				}

				console.log('File uploaded successfully:', {
					id: fileId,
					path: tempPath,
					url: generateUrl(`/apps/files/?fileid=${fileId}&openfile=true`)
				});

				// Сохраняем информацию о файле
				this.tempFileInfo = {
					id: fileId,
					path: tempPath
				};

				return generateUrl(`/apps/files/?fileid=${fileId}&openfile=true`);

			} catch (error) {
				console.error('File upload error:', error);
				showError(t('mail', 'Failed to prepare document for editing'));
				return null;
			}
		},

		openAttachment() {
			if (this.isImage || this.mime === 'application/pdf') {
				this.$emit('open')
			} else if (this.isOfficeDocument) {
				this.openInOnlyOfficeModal()
			} else {
				this.download()
			}
		},
		async openInOnlyOfficeModal() {
			if (!this.isOfficeDocument) {
				showError(t('mail', 'This document type cannot be opened in OnlyOffice'));
				return;
			}

			this.isOnlyOfficeLoading = true;
			this.showOnlyOfficeModal = true;

			try {
				// Сначала создаем временную папку
				await this.ensureTempDirectoryExists();

				// Затем получаем URL
				const frameUrl = await this.getOnlyOfficeFrameUrl();
				if (!frameUrl) {
					this.closeOnlyOfficeModal();
					return;
				}

				// Обновляем состояние, чтобы показать iframe
				this.$nextTick(() => {
					this.isOnlyOfficeLoading = false;
				});

			} catch (error) {
				console.error('Error:', error);
				this.closeOnlyOfficeModal();
				showError(t('mail', 'Failed to open document'));
			}
		},

		handleOnlyOfficeLoaded() {
			this.isOnlyOfficeLoading = false
		},

		closeOnlyOfficeModal() {
			this.showOnlyOfficeModal = false
			this.isOnlyOfficeLoading = false
			// Можно добавить здесь удаление временного файла, если нужно
		},
		humanReadable(size) {
			return formatFileSize(size)
		},
		saveToCloud(dest) {
			const path = dest[0].path
			this.savingToCloud = true
			const id = this.$route.params.threadId

			try {
				saveAttachmentToFiles(id, this.id, path)
				Logger.info('saved')
				showSuccess(t('mail', 'Attachment saved to Files'))
			} catch (e) {
				Logger.error('not saved', { error: e })
				showError(t('mail', 'Attachment could not be saved'))
			} finally {
				this.savingToCloud = false
			}
		},
		download() {
			window.location = this.url
		},
		loadCalendars() {
			this.loadingCalendars = true
			getUserCalendars().then((calendars) => {
				this.calendars = calendars
				this.showCalendarPopover = true
				this.loadingCalendars = false
			})
		},
		closeCalendarPopover() {
			this.showCalendarPopover = false
		},
		importCalendar(url) {
			return () => {
				downloadAttachment(this.url)
					.then(importCalendarEvent(url))
					.then(() => {
						showSuccess(t('mail', 'calendar imported'))
					})
					.catch((error) => {
						Logger.error('Could not import event', { error })
						showError(t('mail', 'Could not create event'))
					})
					.then(() => (this.showCalendarPopover = false))
			}
		},
	},
}
</script>

<style lang="scss" scoped>


.onlyoffice-modal {
	&__container {
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 880px;
		margin-bottom: -110px;
	}

	&__loading {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		background-color: var(--color-main-background);
	}

	&__frame {
		width: 100%;
		height: 100%;
		border: none;
		background: transparent;
	}
}

// Увеличим размер модального окна для OnlyOffice
:deep(.modal-container--large) {
	max-width: 90%;
	width: 1200px;
	height: 90%;
}
@media screen and (max-width: 1024px) {
	.attachment{
		width: 100% !important;
	}
}

@media screen and (min-width: 1025px) and (max-width: 1500px) {
	.attachment{
		width: calc(50% - 4px)!important;
	}
}

.attachment {
	height: auto;
	display: inline-flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: calc(33.3334% - 4px);
	margin: 2px;
	padding: 5px;
	position: relative;
	align-items: center;
	flex-grow: 1;

	&:hover {
		border-radius: 6px;
	}
}

.attachment:hover,
.attachment span:hover {
	background-color: var(--color-background-hover);

	&.message-attachment--can-preview * {
		cursor: pointer;
	}
}

.mail-attachment-img--wrapper {
	height: 44px;
	width: 44px;
	overflow: hidden;
	display:flex;
	justify-content: center;
	position: relative;
	border-radius: 6px;

	img {
		transition: 0.3s;
		opacity: 1;
		width: 44px;
		height: 44px;
	}

	.mail-attached-image {
		width: 100px;
	}
}

.mail-attached--content {
	width: calc(100% - 100px);
	display: flex;
	flex-direction: column;
}

.mail-attached-image {
	display: block;
	max-width: 100%;
	border-radius: var(--border-radius);
}
.attachment-import-popover {
	right: 32px;
	top: 42px;
}
.mail-attached-image:hover {
	opacity: 0.8;
}
.attachment-name {
	display: inline-block;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	vertical-align: middle;
}

/* show attachment size less prominent */
.attachment-size {
	-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
	opacity: 0.5;
	font-size: 12px;
	line-height: 14px;
}

.attachment-icon {
	vertical-align: middle;
	text-align: left;
	margin-bottom: 20px;
}
.action-item {
	transition: 0.4s;
}
.mail-message-attachments {
	overflow-x: auto;
	overflow-y: auto;
}
</style>
