import ko from 'ko';
import { addObservablesTo, addComputablesTo, addSubscribablesTo } from 'External/ko';

import { UNUSED_OPTION_VALUE } from 'Common/Consts';
import { ScopeFolderList, ScopeMessageList, ScopeMessageView } from 'Common/Enums';

import {
	ComposeType,
	ClientSideKeyNameMessageHeaderFullInfo,
	ClientSideKeyNameMessageAttachmentControls,
	FolderType,
	MessageSetAction
} from 'Common/EnumsUser';
import { RFC822 } from 'Common/File';
import {
	elementById,
	keyScopeReal,
	Settings,
	SettingsCapa,
	fireEvent,
	stopEvent,
	addShortcut,
	registerShortcut,
	formFieldFocused
} from 'Common/Globals';

import { arrayLength } from 'Common/Utils';
import { downloadZip, mailToHelper, showMessageComposer, moveAction } from 'Common/UtilsUser';
import { isFullscreen, exitFullscreen, toggleFullscreen } from 'Common/Fullscreen';

import { SMAudio } from 'Common/Audio';

import { i18n } from 'Common/Translator';

import { AppUserStore } from 'Stores/User/App';
import { SettingsUserStore } from 'Stores/User/Settings';
import { AccountUserStore } from 'Stores/User/Account';
import { FolderUserStore, isAllowedKeyword } from 'Stores/User/Folder';
import { MessageUserStore } from 'Stores/User/Message';
import { MessagelistUserStore } from 'Stores/User/Messagelist';

import * as Local from 'Storage/Client';

import Remote from 'Remote/User/Fetch';

import { decorateKoCommands } from 'Knoin/Knoin';
import { AbstractViewRight } from 'Knoin/AbstractViews';

import { PgpUserStore } from 'Stores/User/Pgp';

import { MimeToMessage } from 'Mime/Utils';

import { MessageModel } from 'Model/Message';

import { showScreenPopup } from 'Knoin/Knoin';
import { OpenPgpImportPopupView } from 'View/Popup/OpenPgpImport';
import { GnuPGUserStore } from 'Stores/User/GnuPG';
import { OpenPGPUserStore } from 'Stores/User/OpenPGP';


const
	oMessageScrollerDom = () => elementById('messageItem') || {},

	currentMessage = MessageUserStore.message,

	setAction = action => {
		const message = currentMessage();
		message && MessagelistUserStore.setAction(message.folder, action, [message]);
	},

	fetchRaw = url => rl.fetch(url).then(response => response.ok && response.text());


/**
 * Асинхронная функция для получения Nextcloud CSRF токена.
 */
let nextcloudRequestToken = null; // Объявление переменной для хранения токена
const fetchNextcloudRequestToken = async () => {
	try {
		const baseUrl = window.location.origin;
		const response = await fetch(`${baseUrl}/index.php/csrftoken`);

		console.debug('SnappyMail: fetchNextcloudRequestToken - Получен ответ:', response);
		if (!response.ok) {
			console.error('SnappyMail: fetchNextcloudRequestToken - Не удалось получить CSRF токен. HTTP статус:',
				response.status);
			return null;
		}
		const data = await response.json();
		if (data && data.token) {
			nextcloudRequestToken = data.token;
			console.log('SnappyMail: fetchNextcloudRequestToken - CSRF токен Nextcloud успешно получен.');
			updateLogoutLink(data.token);
			return data.token;
		} else {
			console.error('SnappyMail: fetchNextcloudRequestToken - CSRF токен не найден в данных ответа.', data);
			return null;
		}
	} catch (error) {
		console.error('SnappyMail: fetchNextcloudRequestToken - Ошибка при получении CSRF токена Nextcloud:', error);
		return null;
	}
};

/**
 * Функция для обновления ссылки выхода с новым токеном
 */
const updateLogoutLink = (token) => {
	const logoutLink = document.getElementById('logout');
	const secureToken = encodeURIComponent(token);
	if (logoutLink) {
		// Обновляем href, сохраняя остальную часть URL
		logoutLink.href = `/logout?requesttoken=${secureToken}`;
		console.log('SnappyMail: updateLogoutLink - Ссылка выхода обновлена новым токеном.');
	} else {
		console.warn('SnappyMail: updateLogoutLink - Элемент ссылки выхода не найден.');
	}
};

// Запуск получения токена при загрузке модуля (выполняется один раз при загрузке файла)
fetchNextcloudRequestToken().then(token => {
	if (token) {
		nextcloudRequestToken = token;
		console.log('SnappyMail: Глобальная переменная nextcloudRequestToken обновлена полученным токеном.');
	}
});



export class MailMessageView extends AbstractViewRight {
	constructor() {
		super();

		const
			/**
			 * @param {Function} fExecute
			 * @param {Function} fCanExecute = true
			 * @returns {Function}
			 */
			createCommand = (fExecute, fCanExecute) => {
				let fResult = () => {
					fCanExecute() && fExecute.call(null);
					return false;
				};
				fResult.canExecute = fCanExecute;
				return fResult;
			},

			createCommandReplyHelper = type =>
				createCommand(() => this.replyOrforward(type), this.canBeRepliedOrForwarded),

			createCommandActionHelper = (folderType, bDelete) =>
				createCommand(() => {
					const message = currentMessage();
					if (message) {
						currentMessage(null);
						rl.app.moveMessagesToFolderType(folderType, message.folder, new Set([message.uid]), bDelete);
					}
				}, this.messageVisible),
			createCommandSetHelper = action =>
				createCommand(() => setAction(action), this.messageVisible),
			createCommandDeleteHelper = () =>
				createCommand(() => {
					/**
					 * When FolderUserStore.trashFolder is set to "Do not use",
					 * flag as \Deleted for removal by later EXPUNGE
					 */
					if (UNUSED_OPTION_VALUE === FolderUserStore.trashFolder()) {
						setAction(MessageSetAction.SetDeleted);
					} else {
						const message = currentMessage();
						if (message) {
							currentMessage(null);
							rl.app.moveMessagesToFolderType(FolderType.Trash, message.folder, new Set([message.uid]));
						}
					}
				}, this.messageVisible);

		this.msgDefaultAction = SettingsUserStore.msgDefaultAction;
		this.simpleAttachmentsList = SettingsUserStore.simpleAttachmentsList;

		addObservablesTo(this, {
			showAttachmentControls: !!Local.get(ClientSideKeyNameMessageAttachmentControls),
			downloadAsZipLoading: false,
			showFullInfo: '1' === Local.get(ClientSideKeyNameMessageHeaderFullInfo),
			// bootstrap dropdown
			actionsMenu: null,
			// viewer
			viewFromShort: '',
			dkimData: ['none', '', ''],
			spfData: ['none', '', ''],
			dmarcData: ['none', '', ''],
			nowTracking: false
		});

		this.moveAction = moveAction;

		const attachmentsActions = Settings.app('attachmentsActions');
		this.attachmentsActions = ko.observableArray(arrayLength(attachmentsActions) ? attachmentsActions : []);

		this.hasCheckedMessages = MessagelistUserStore.hasChecked;
		this.archiveAllowed = MessagelistUserStore.archiveAllowed;
		this.canMarkAsSpam = MessagelistUserStore.canMarkAsSpam;
		this.isDraftFolder = MessagelistUserStore.isDraftFolder;
		this.isSpamFolder = MessagelistUserStore.isSpamFolder;

		this.message = currentMessage;
		this.messageLoadingThrottle = MessageUserStore.loading;
		this.messageError = MessageUserStore.error;

		this.fullScreenMode = isFullscreen;
		this.toggleFullScreen = toggleFullscreen;

		this.downloadAsZipError = ko.observable(false).extend({ falseTimeout: 7000 });

		this.messageDomFocused = ko.observable(false).extend({ rateLimit: 0 });

		// viewer
		this.viewHash = '';

		addComputablesTo(this, {
			allowAttachmentControls: () => arrayLength(attachmentsActions) && SettingsCapa('AttachmentsActions'),

			downloadAsZipAllowed: () => this.attachmentsActions.includes('zip')
				&& (currentMessage()?.attachments || [])
					.filter(item => item?.checked() && item?.download /*&& !item?.isLinked()*/)
					.length,

			tagsAllowed: () => FolderUserStore.currentFolder()?.tagsAllowed(),

			messageVisible: () => !MessageUserStore.loading() && !!currentMessage(),

			tagsToHTML: () => currentMessage()?.flags().map(value =>
				isAllowedKeyword(value)
					? '<span class="focused msgflag-'+value+'">' + i18n('MESSAGE_TAGS/'+value,0,value) + '</span>'
					: ''
			).join(' '),

			askReadReceipt: () => currentMessage()?.readReceipt
				&& !(MessagelistUserStore.isDraftFolder() || MessagelistUserStore.isSentFolder())
				&& !currentMessage()?.flags().includes('$mdnsent')
				&& !currentMessage()?.flags().includes('\\answered'),

			listAttachments: () => currentMessage()?.attachments()
				.filter(item => SettingsUserStore.listInlineAttachments() || !item.isLinked()),
//			hasAttachments: () => currentMessage()?.attachments()?.length,
			hasAttachments: () => currentMessage()?.attachments()
				.some(item => SettingsUserStore.listInlineAttachments() || !item.isLinked()),
//			listInline: () => currentMessage()?.attachments().filter(item => item.isLinked()),
//			hasInline: () => currentMessage()?.attachments().some(item => item.isLinked()),

			canBeRepliedOrForwarded: () => !MessagelistUserStore.isDraftFolder() && this.messageVisible(),

			dkimIcon: () => {
				switch (this.dkimData()[0]) {
					case 'none':
						return '🚫︎';
					case 'pass':
						return '✔';
					default:
						return '✖';
				}
			},
			dkimIconClass: () => 'pass' === this.dkimData()[0] ? 'iconcolor-green' : 'iconcolor-red',
			dkimTitle:() => {
				const dkim = this.dkimData();
				return dkim[0] ? dkim[2] || 'DKIM: ' + dkim[0] : '';
			},

			spfIcon: () => {
				switch (this.spfData()[0]) {
					case 'none':
						return '🚫︎';
					case 'pass':
						return '✔';
					default:
						return '✖';
				}
			},
			spfIconClass: () => 'pass' === this.spfData()[0] ? 'iconcolor-green' : 'iconcolor-red',
			spfTitle:() => {
				const spf = this.spfData();
				return spf[0] ? spf[2] || 'SPF: ' + spf[0] : '';
			},

			dmarcIcon: () => {
				switch (this.dmarcData()[0]) {
					case 'none':
						return '🚫︎';
					case 'pass':
						return '✔';
					default:
						return '✖';
				}
			},
			dmarcIconClass: () => 'pass' === this.dmarcData()[0] ? 'iconcolor-green' : 'iconcolor-red',
			dmarcTitle:() => {
				const dmarc = this.dmarcData();
				return dmarc[0] ? dmarc[2] || 'DMARC: ' + dmarc[0] : '';
			},

			showWhitelistOptions: () => 'match' === SettingsUserStore.viewImages(),

			firstUnsubsribeLink: () => currentMessage()?.unsubsribeLinks()[0] || '',

			pgpSupported: () => currentMessage() && PgpUserStore.isSupported(),

			canBeUndeleted: () => currentMessage()?.isDeleted(),

			messageListOrViewLoading:
				() => MessagelistUserStore.isLoading() | MessageUserStore.loading()
		});

		addSubscribablesTo(this, {
			message: message => {
				if (message) {
					if (this.viewHash !== message.hash) {
						this.scrollMessageToTop();
					}
					this.viewHash = message.hash;
					// TODO: make first param a user setting #683
					this.viewFromShort(message.from.toString(false, true));
					this.dkimData(message.dkim[0] || ['none', '', '']);
					this.spfData(message.spf[0] || ['none', '', '']);
					this.dmarcData(message.dmarc[0] || ['none', '', '']);
					this.nowTracking(false);
				} else {
					MessagelistUserStore.selectedMessage(null);

					this.viewHash = '';

					this.scrollMessageToTop();
				}
			},

			showFullInfo: value => Local.set(ClientSideKeyNameMessageHeaderFullInfo, value ? '1' : '0')
		});

		// commands
		this.replyCommand = createCommandReplyHelper(ComposeType.Reply);
		this.replyAllCommand = createCommandReplyHelper(ComposeType.ReplyAll);
		this.forwardCommand = createCommandReplyHelper(ComposeType.Forward);
		this.forwardAsAttachmentCommand = createCommandReplyHelper(ComposeType.ForwardAsAttachment);
		this.editAsNewCommand = createCommandReplyHelper(ComposeType.EditAsNew);

//		this.deleteCommand = createCommandActionHelper(FolderType.Trash);
		// User setting hideDeleted || immediatelyMoveToTrash ??
		this.deleteCommand = createCommandDeleteHelper();
		// User setting !hideDeleted && !immediatelyMoveToTrash ??
		this.undeleteCommand = createCommandSetHelper(MessageSetAction.UnsetDeleted);
		this.deleteWithoutMoveCommand = createCommandActionHelper(FolderType.Trash, true);
		this.archiveCommand = createCommandActionHelper(FolderType.Archive);
		this.spamCommand = createCommandActionHelper(FolderType.Junk);
		this.notSpamCommand = createCommandActionHelper(FolderType.Inbox);

		decorateKoCommands(this, {
			editCommand: self => self.messageVisible(),
			moveCommand: self => self.messageVisible(),
			copyCommand: self => self.messageVisible(),
			goUpCommand: self => !self.messageListOrViewLoading(),
			goDownCommand: self => !self.messageListOrViewLoading()
		});

		// === НОВЫЕ СВОЙСТВА ДЛЯ УПРАВЛЕНИЯ МОДАЛЬНЫМ ОКНОМ ===
		// Используйте ko.observable() для всех свойств, которые будут использоваться с () в HTML
		this.showOnlyOfficeModal = ko.observable(false);
		this.isOnlyOfficeLoading = ko.observable(false);
		this.onlyOfficeIframeSrc = ko.observable('');
		this.currentAttachmentFileName = ko.observable('');
		this.currentAttachmentSrc = ko.observable('');
		this.currentAttachmentMimeType = ko.observable('');

		this.currentTempFileInfo = ko.observable(null);

		this.isImageViewerVisible = ko.observable(false);
		this.isPdfTxtViewerVisible = ko.observable(false);
		this.isUnsupportedViewerVisible = ko.observable(false);
		// === КОНЕЦ НОВЫХ СВОЙСТВ ===

		// Константы OnlyOffice
		this.officeMimeTypes = [
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
			'application/msword', // doc
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // xlsx
			'application/vnd.ms-excel', // xls
			'application/vnd.openxmlformats-officedocument.presentationml.presentation', // pptx
			'application/vnd.ms-powerpoint', // ppt
			'text/rtf', // rtf
			'text/plain', // txt
			'application/rtf',
			'application/vnd.oasis.opendocument.text', // odt
			'application/vnd.oasis.opendocument.spreadsheet', // ods
			'application/vnd.oasis.opendocument.presentation', // odp
			'application/pdf'
		];

	} // End of constructor()

	// --- НАЧАЛО МЕТОДОВ КЛАССА MAILMESSAGEVIEW ---

	/**
	 * Метод для асинхронного получения текущего пользователя Nextcloud через API.
	 * @returns {Promise<string|null>} Имя текущего пользователя Nextcloud.
	 */
	async getCurrentNextcloudUser() {
		try {
			console.log('SnappyMail: getCurrentNextcloudUser - Запрос на получение текущего пользователя Nextcloud.');
			const baseUrl = window.location.origin;
			const requestToken = await fetchNextcloudRequestToken(); // Убедимся, что токен доступен
			if (!requestToken) {
				console.error('SnappyMail: getCurrentNextcloudUser - Не удалось получить токен Nextcloud для API-запроса.');
				return null;
			}

			const apiUrl = `${baseUrl}/ocs/v2.php/cloud/user?format=json`;

			console.log('SnappyMail: getCurrentNextcloudUser - Выполнение API-запроса к:', apiUrl);

			const response = await fetch(apiUrl, {
				method: 'GET',
				headers: {
					'OCS-APIRequest': 'true',
					'requesttoken': requestToken,
					'Content-Type': 'application/json'
				},
				credentials: 'include'
			});

			if (!response.ok) {
				const errorText = await response.text();
				console.error(`SnappyMail: getCurrentNextcloudUser - API-запрос не удался: ${response.status} - ${errorText}`);
				return null;
			}

			const data = await response.json();
			console.log('SnappyMail: getCurrentNextcloudUser - Ответ API:', data);

			if (data && data.ocs && data.ocs.data && data.ocs.data.id) {
				// const userId = data.ocs.data.id;
				const displayName = data.ocs.data.displayname;
				console.log('SnappyMail: getCurrentNextcloudUser - Имя текущего пользователя Nextcloud получено' +
					' через API:', displayName);
				return displayName;
			}

			console.error('SnappyMail: getCurrentNextcloudUser - API-ответ не содержит ожидаемых данных пользователя (id).');
			return null;

		} catch (error) {
			console.error('SnappyMail: getCurrentNextcloudUser - Ошибка при выполнении API-запроса:', error);
			return null;
		}
	}


	/**
	 * Убеждается, что временный каталог для OnlyOffice существует.
	 * Создает его, если не существует.
	 * @param {string} folderPath Путь к временному каталогу (например, '/temp/snappymail/').
	 * @returns {Promise<void>}
	 */
	async ensureTempDirectoryExists(folderPath) {
		const currentUser = await this.getCurrentNextcloudUser();
		if (!currentUser) {
			console.error('SnappyMail: ensureTempDirectoryExists - Не удалось получить текущего пользователя Nextcloud. ' +
				'Отмена создания каталога.');
			throw new Error('Nextcloud user not found.');
		}

		if (!nextcloudRequestToken) {
			console.error('SnappyMail: ensureTempDirectoryExists - Nextcloud request token is not available. ' +
				'Отмена создания каталога.');
			throw new Error('Nextcloud request token not found.');
		}

		const nextcloudDavBaseUrl = `/remote.php/dav/files/${currentUser}/`;
		const fullDirPath = `${nextcloudDavBaseUrl}${folderPath}`;

		console.log('SnappyMail: ensureTempDirectoryExists - Проверка существования каталога:', fullDirPath);

		try {
			// Попытка проверить существование каталога с помощью PROPFIND
			const response = await fetch(fullDirPath, {
				method: 'PROPFIND',
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'requesttoken': nextcloudRequestToken,
				},
				credentials: 'include'
			});
			console.log('SnappyMail: ensureTempDirectoryExists - PROPFIND response status:', response.status);

			if (response.status === 207) { // 207 Multi-Status - каталог существует
				console.log('SnappyMail: ensureTempDirectoryExists - Каталог уже существует.');
				return;
			} else if (response.status === 404) {
				console.log('SnappyMail: ensureTempDirectoryExists - Каталог не найден, попытка создать.');
			} else {
				// Обработка других статусов ошибок, кроме 404 при PROPFIND
				const errorText = await response.text();
				console.error('SnappyMail: ensureTempDirectoryExists - Неожиданный статус PROPFIND при проверке каталога:',
					response.status, errorText);
				throw new Error(`PROPFIND failed with status ${response.status}`);
			}
		} catch (error) {
			console.error('SnappyMail: ensureTempDirectoryExists - Ошибка PROPFIND при проверке каталога:', error);
			// Если произошла сетевая ошибка или другой вид ошибки fetch, перебрасываем ее
			throw error;
		}

		// Если каталог не существует (или PROPFIND выдал 404), создаем его с помощью MKCOL
		try {
			console.log('SnappyMail: ensureTempDirectoryExists - Попытка создать каталог:', fullDirPath);
			const createResponse = await fetch(fullDirPath, {
				method: 'MKCOL',
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'requesttoken': nextcloudRequestToken,
				},
				credentials: 'include'
			});
			console.log('SnappyMail: ensureTempDirectoryExists - MKCOL response status:', createResponse.status);

			if (createResponse.status === 201) { // 201 Created - каталог успешно создан
				console.log('SnappyMail: ensureTempDirectoryExists - Каталог успешно создан.');
			} else if (createResponse.status === 405) { // 405 Method Not Allowed - каталог уже существует
				console.log('SnappyMail: ensureTempDirectoryExists - Каталог уже существует (получен 405 при MKCOL).');
			} else {
				const errorText = await createResponse.text();
				console.error('SnappyMail: ensureTempDirectoryExists - Неизвестный статус при создании каталога:',
					createResponse.status, errorText);
				throw new Error('Не удалось создать временный каталог.');
			}
		} catch (error) {
			console.error('SnappyMail: ensureTempDirectoryExists - Ошибка при создании временного каталога:', error);
			throw error;
		}
	}


	/**
	 * Генерирует URL для просмотра файла через Nextcloud Files (который может использовать OnlyOffice).
	 * Этот метод включает загрузку файла в Nextcloud и получение его fileId.
	 * @param {AttachmentModel} attachmentItem
	 * @returns {Promise<string|null>} URL для iframe OnlyOffice, или null в случае ошибки.
	 */
	async getOnlyOfficeFrameUrl(attachmentItem) {
		console.log('SnappyMail: getOnlyOfficeFrameUrl - Начало процесса загрузки и получения fileId для:',
			attachmentItem.fileName);
		const fileDownloadUrl = attachmentItem.linkDownload();
		const originalFileName = attachmentItem.fileName;
		const fileMimeType = attachmentItem.mimeType;

		if (!nextcloudRequestToken) {
			console.error('SnappyMail: getOnlyOfficeFrameUrl - Не удалось получить токен ' +
				'Отмена операции.');
			return null;
		}

		const currentUser = await this.getCurrentNextcloudUser();
		if (!currentUser) {
			console.error('SnappyMail: getOnlyOfficeFrameUrl - Не удалось получить текущего ' +
				'пользователя Nextcloud. Отмена операции.');
			return null;
		}

		const tempPathPrefix = 'Temp';

		try {
			// 1. Загружаем файл как blob из SnappyMail
			console.debug('SnappyMail: getOnlyOfficeFrameUrl - Шаг 1/5 - Загрузка файла вложения как Blob из:',
				fileDownloadUrl);

			const downloadResponse = await fetch(fileDownloadUrl, {
				method: 'GET',
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'requesttoken': nextcloudRequestToken,
				},
				credentials: 'include'
			});

			if (!downloadResponse.ok) {
				const errorText = await downloadResponse.text();
				throw new Error(`Failed to download attachment: ${downloadResponse.status} - ${errorText}`);
			}
			const fileBlob = await downloadResponse.blob();
			console.log('SnappyMail: getOnlyOfficeFrameUrl - Шаг 1/5 - Файл вложения успешно загружен в Blob. Размер:',
				fileBlob.size, 'байт.');

			// 2. Создаем временное имя файла для Nextcloud и полный путь
			const tempFileName = `snappymail_${Date.now()}_${originalFileName.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`;
			const fullTempFilePath = `${tempPathPrefix}/${tempFileName}`;
			console.debug('SnappyMail: getOnlyOfficeFrameUrl - Шаг 2/5 - Сформировано временное' +
				' имя файла и путь:', fullTempFilePath);

			// Проверка и создание временной папки /Temp, если она не существует
			await this.ensureTempDirectoryExists(tempPathPrefix);

			// 3. Загружаем файл через WebDAV PUT в Nextcloud
			const uploadUrl = `/remote.php/dav/files/${currentUser}/${fullTempFilePath}`; // Используем currentUser
			console.debug('SnappyMail: getOnlyOfficeFrameUrl - Шаг 3/5 - Загрузка файла в Nextcloud по ' +
				'PUT запросу на URL:', uploadUrl);

			const uploadResponse = await fetch(
				uploadUrl,
				{
					method: 'PUT',
					headers: {
						'Content-Type': fileMimeType,
						'X-Requested-With': 'XMLHttpRequest',
						'requesttoken': nextcloudRequestToken,
					},
					body: fileBlob,
					credentials: 'include'
				}
			);

			if (!uploadResponse.ok) {
				const errorText = await uploadResponse.text();
				throw new Error(`Failed to upload file to Nextcloud: ${uploadResponse.status} - ${errorText}`);
			}
			console.log('SnappyMail: getOnlyOfficeFrameUrl - Шаг 3/5 - Файл успешно загружен во временную папку Nextcloud.');

			// 4. Получаем fileid через PROPFIND для только что загруженного файла
			const propfindUrl = `/remote.php/dav/files/${currentUser}/${fullTempFilePath}`; // Используем currentUser
			console.debug('SnappyMail: getOnlyOfficeFrameUrl - Шаг 4/5 - Получение fileId через PROPFIND запрос к:',
				propfindUrl);

			const propfindResponse = await fetch(propfindUrl, {
				method: 'PROPFIND',
				headers: {
					'Content-Type': 'application/xml',
					'X-Requested-With': 'XMLHttpRequest',
					'requesttoken': nextcloudRequestToken,
				},
				body: `<?xml version="1.0"?>
                        <d:propfind xmlns:d="DAV:">
                            <d:prop>
                                <oc:fileid xmlns:oc="http://owncloud.org/ns"/>
                            </d:prop>
                        </d:propfind>`
			});

			if (!propfindResponse.ok) {
				const errorText = await propfindResponse.text();
				throw new Error(`Failed PROPFIND for fileId: ${propfindResponse.status} - ${errorText}`);
			}
			const propfindText = await propfindResponse.text();
			console.log('SnappyMail: getOnlyOfficeFrameUrl - Шаг 4/5 - PROPFIND запрос выполнен. Статус:',
				propfindResponse.status, 'Ответ:', propfindText);

			// 5. Парсим fileid из XML-ответа
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(propfindText, "text/xml");
			const fileIdNode = xmlDoc.getElementsByTagName('oc:fileid')[0]; // Находим первый элемент с тегом oc:fileid
			const fileId = fileIdNode ? fileIdNode.textContent : null;

			if (!fileId) {
				console.error('SnappyMail: getOnlyOfficeFrameUrl - Шаг 5/5 - ОШИБКА: ' +
					'Не удалось получить file ID из ответа PROPFIND. ' +
					'Ответ:', propfindText);
				throw new Error('Could not get file ID from server response');
			}
			console.debug('SnappyMail: getOnlyOfficeFrameUrl - Шаг 5/5 - fileId успешно получен:', fileId);

			// Сохраняем информацию о временном файле в модели
			this.currentTempFileInfo( {
				id: fileId,
				path: fullTempFilePath // Сохраняем полный WebDAV путь для удобства
			});
			console.log('SnappyMail: getOnlyOfficeFrameUrl - Сохранена информация о временном файле:',
				this.currentTempFileInfo());

			// Конечный URL для отображения в iframe FILES
			// const encodedTempPathPrefix = encodeURIComponent(tempPathPrefix);
			// const finalViewerUrl =
			// 	`/apps/files/files/${fileId}` +
			// 	`?dir=/${currentUser}/${encodedTempPathPrefix}` +
			// 	`&iframe=true&openfile=true`
			// ;


			//Код для открытия напрямую в ONLYOFFICE
			const finalViewerUrl =
				`/apps/onlyoffice/${fileId}` +
				`?inframe=true&filePath=` + this.currentTempFileInfo().path;

			console.log('SnappyMail: getOnlyOfficeFrameUrl - Успех! Сформирован конечный URL Nextcloud Files Viewer:',
				finalViewerUrl);

			return finalViewerUrl;

		} catch (error) {
			console.error('SnappyMail: getOnlyOfficeFrameUrl - Общая ошибка в процессе интеграции OnlyOffice:', error);
			if (error.response) { // axios-specific, for fetch use error.message or check response.ok
				console.error('SnappyMail: getOnlyOfficeFrameUrl - Ошибка ответа сервера (возможно,' +
					' из-за axios, который удален):',
					error.response.status,
					error.response.data);
			} else if (error.request) { // axios-specific
				console.error('SnappyMail: getOnlyOfficeFrameUrl - Нет ответа от сервера (возможно,' +
					' из-за axios, который удален):',
					error.request);
			} else {
				console.error('SnappyMail: getOnlyOfficeFrameUrl - Ошибка при настройке запроса или ' +
					'выполнении fetch:', error.message);
			}
			// Скрываем индикатор загрузки и показываем сообщение о неподдерживаемом файле в случае ошибки
			this.isUnsupportedViewerVisible(true);
			this.isOnlyOfficeLoading(false);
			return null;
		}
	}


	/**
	 * Основной метод для открытия просмотрщика вложения.
	 * @param {AttachmentModel} attachmentItem Экземпляр AttachmentModel для просмотра.
	 * @returns {Promise<void>}
	 */
	async openAttachmentInViewer(attachmentItem) {
		console.trace('SnappyMail: openAttachmentInViewer - Вызов openAttachmentInViewer');
		console.log('SnappyMail: openAttachmentInViewer - Клик по вложению для предпросмотра ~');
		console.log('SnappyMail: openAttachmentInViewer - Вызов openAttachmentInViewer. Имя файла:',
			attachmentItem.fileName, 'MIME-тип:', attachmentItem.mimeType);

		this.currentAttachmentFileName(attachmentItem.fileName);
		this.currentAttachmentSrc(attachmentItem.linkDownload());
		this.currentAttachmentMimeType(attachmentItem.mimeType);

		this.isOnlyOfficeLoading(true);
		this.showOnlyOfficeModal(true); // Показываем модальное окно загрузки OnlyOffice

		this.isImageViewerVisible(false);
		this.isPdfTxtViewerVisible(false);
		this.isUnsupportedViewerVisible(false);
		this.onlyOfficeIframeSrc('');

		const fileName = attachmentItem.fileName.toLowerCase();
		const fileExtension = fileName.split('.').pop();
		const mimeType = attachmentItem.mimeType.toLowerCase();

		const supportedImageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
		const supportedPdfTxtExtensions = ['pdf', 'txt']; // txt можно открывать как текст, но и в OO

		console.log('SnappyMail: openAttachmentInViewer - Проверка условий OnlyOffice/Nextcloud Files.');
		console.log('SnappyMail: openAttachmentInViewer - officeMimeTypes:', this.officeMimeTypes);
		console.log('SnappyMail: openAttachmentInViewer - current MIME-type:', mimeType);

		// Встроенный просмотрщик для изображений
		if (supportedImageExtensions.includes(fileExtension) || mimeType.startsWith('image/')) {
			console.log('SnappyMail: openAttachmentInViewer - Открытие встроенного предпросмотра изображения для:',
				attachmentItem.fileName);
			this.isImageViewerVisible(true);
			this.isOnlyOfficeLoading(false);

		}
		// Встроенный просмотрщик для PDF/текста
		else if (supportedPdfTxtExtensions.includes(fileExtension) || mimeType.includes('pdf') ||
			mimeType.includes('text/plain')) {
			console.log('SnappyMail: openAttachmentInViewer - Открытие встроенного предпросмотра PDF/текста для:',
				attachmentItem.fileName);
			this.isPdfTxtViewerVisible(true);
			this.onlyOfficeIframeSrc(attachmentItem.linkPreviewMain()); // или attachmentItem.linkPreviewMain()
			this.isOnlyOfficeLoading(false);
		}
		// Логика для OnlyOffice через Nextcloud Files
		else if (this.officeMimeTypes.includes(mimeType)) {
			console.log('SnappyMail: openAttachmentInViewer - Офисный документ обнаружен для просмотра ' +
				'через Nextcloud Files. MIME-тип:', mimeType);

			try {
				const viewerUrl = await this.getOnlyOfficeFrameUrl(attachmentItem);

				if (viewerUrl) {
					console.log('SnappyMail: openAttachmentInViewer - Получен URL для просмотра Nextcloud Files:', viewerUrl);
					this.onlyOfficeIframeSrc(viewerUrl);
					this.isOnlyOfficeLoading(false);
				} else {
					console.warn('SnappyMail: openAttachmentInViewer - Не удалось получить' +
						' URL для просмотра через Nextcloud Files. ' +
						'Будет показано сообщение о неподдерживаемом файле.');
					this.isUnsupportedViewerVisible(true);
					this.isOnlyOfficeLoading(false);
				}
			} catch (error) {
				console.error('SnappyMail: openAttachmentInViewer - Ошибка при генерации или использовании ' +
					'URL Nextcloud Files/OnlyOffice:', error);
				this.isUnsupportedViewerVisible(true);
				this.isOnlyOfficeLoading(false);
			}
		}
		// Если ни один из вышеперечисленных случаев не сработал
		else {
			console.log('SnappyMail: openAttachmentInViewer - Предпросмотр не поддерживается для MIME-типа:', mimeType);
			this.isUnsupportedViewerVisible(true);
			this.isOnlyOfficeLoading(false);
		}
	}

	/**
	 * Метод, который будет вызван, когда iframe Nextcloud Files Viewer загрузится.
	 */
	handleOnlyOfficeLoaded() {
		console.log('SnappyMail: handleOnlyOfficeLoaded - Nextcloud Files iframe (возможно, с OnlyOffice) загружен.');
		this.isOnlyOfficeLoading(false);
	}

	/**
	 * Метод для закрытия модального окна ONLYOFFICE и очистки временного файла.
	 * @returns {Promise<void>}
	 */
	async closeOnlyOfficeModal() {
		this.showOnlyOfficeModal(false);
		this.isOnlyOfficeLoading(false);
		this.onlyOfficeIframeSrc(''); // Очищаем URL iframe
		this.isImageViewerVisible(false);
		this.isPdfTxtViewerVisible(false);
		this.isUnsupportedViewerVisible(false);
		this.currentAttachmentFileName('');
		this.currentAttachmentSrc('');
		this.currentAttachmentMimeType('');

		// Логика удаления временного файла
		const tempFileInfo = this.currentTempFileInfo();
		if (tempFileInfo && tempFileInfo.path) { // Проверяем наличие tempFileInfo и его path
			try {
				const currentUser = await this.getCurrentNextcloudUser();
				if (!currentUser) {
					console.error('SnappyMail: closeOnlyOfficeModal - Не удалось получить текущего пользователя ' +
						'Nextcloud для удаления файла.');
					return;
				}

				if (!nextcloudRequestToken) {
					console.error('SnappyMail: closeOnlyOfficeModal - Nextcloud request token ' +
						'is not available для удаления файла.');
					return;
				}

				console.log(`SnappyMail: closeOnlyOfficeModal - Попытка удалить временный файл: ${tempFileInfo.path} ` +
					`для пользователя ${currentUser}`);

				const deleteResponse = await fetch(
					`/remote.php/dav/files/${currentUser}/${tempFileInfo.path}`,
					{
						method: 'DELETE',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'requesttoken': nextcloudRequestToken,
						},
						credentials: 'include'
					}
				);

				if (!deleteResponse.ok) {
					const errorText = await deleteResponse.text();
					throw new Error(`Failed to delete temporary file: ${deleteResponse.status} - ${errorText}`);
				}
				console.log(`SnappyMail: closeOnlyOfficeModal - Временный файл ${tempFileInfo.path} 
				успешно удален из Nextcloud.`);
			} catch (deleteError) {
				console.error('SnappyMail: closeOnlyOfficeModal - Ошибка при удалении временного файла:', deleteError);
				// Для fetch, check `deleteError.message` or `deleteError.response`
			} finally {
				this.currentTempFileInfo(null); // Сбрасываем информацию о файле
			}
		} else {
			console.log('SnappyMail: closeOnlyOfficeModal - Временный файл для удаления не найден или информация неполна.');
		}
	}

	toggleFullInfo() {
		this.showFullInfo(!this.showFullInfo());
	}

	closeMessage() {
		currentMessage(null);
	}

	editCommand() {
		currentMessage() && showMessageComposer([ComposeType.Draft, currentMessage()]);
	}

	moveOrCopy(vm, event, mode) {
		if (vm && event?.preventDefault) {
			stopEvent(event);
		}
		this.actionsMenu().ddBtn.hide();
		AppUserStore.focusedState(ScopeFolderList);
		moveAction(mode);
	}

	moveCommand(vm, event) {
		this.moveOrCopy(vm, event, 1);
	}

	copyCommand(vm, event) {
		this.moveOrCopy(vm, event, 2);
	}

	setUnseen() {
		setAction(MessageSetAction.UnsetSeen);
		currentMessage(null);
	}

	goUpCommand() {
		fireEvent('mailbox.message-list.selector.go-up',
			!!currentMessage() // bForceSelect
		);
	}

	goDownCommand() {
		fireEvent('mailbox.message-list.selector.go-down',
			!!currentMessage() // bForceSelect
		);
	}

	/**
	 * @param {string} sType
	 * @returns {void}
	 */
	replyOrforward(sType) {
		showMessageComposer([sType, currentMessage()]);
	}

	onBuild(dom) {
		console.log('SnappyMail: onBuild - Метод onBuild вызван.');

		const wrapperBlock = document.querySelector('.rl-wrapper');
		if (wrapperBlock) {
			wrapperBlock.classList.add('active');
			console.log('SnappyMail: onBuild - Класс "active" добавлен к .rl-wrapper.');
		} else {
			console.warn('SnappyMail: onBuild - Элемент .rl-wrapper не найден.');
		}

		// Получение и отображение имени пользователя Nextcloud
		this.getCurrentNextcloudUser().then(username => {
			const usernameDisplayElement = elementById('username-display');
			if (usernameDisplayElement) {
				if (username) {
					usernameDisplayElement.textContent = username;
					usernameDisplayElement.title = username;
					console.log(`SnappyMail: onBuild - Имя пользователя "${username}" успешно установлено в #username-display.`);
				} else {
					usernameDisplayElement.textContent = 'Неизвестный пользователь';
					console.warn('SnappyMail: onBuild - Имя пользователя не получено, установлено "Неизвестный пользователь".');
				}
			} else {
				console.error('SnappyMail: onBuild - Элемент #username-display не найден в DOM.');
			}
		}).catch(error => {
			console.error('SnappyMail: onBuild - Ошибка при получении имени пользователя Nextcloud:', error);
			const usernameDisplayElement = elementById('username-display');
			if (usernameDisplayElement) {
				usernameDisplayElement.textContent = 'Ошибка загрузки имени';
			}
		});


		const eqs = (ev, s) => ev.target.closestWithin(s, dom);
		dom.addEventListener('click', event => {
			let el = eqs(event, 'a');
			if (el && 0 === event.button && mailToHelper(el.href)) {
				stopEvent(event);
				return;
			}

			el = eqs(event, '.attachmentsPlace .showPreview');
			if (el) {
				const attachment = ko.dataFor(el), url = attachment?.linkDownload();
//				if (url && FileType.Eml === attachment.fileType) {
				if (url && RFC822 == attachment.mimeType) {
					stopEvent(event);
					fetchRaw(url).then(text => {
						const oMessage = new MessageModel();
						MimeToMessage(text, oMessage);
						// cleanHTML
						oMessage.popupMessage();
					});
				}
				return;
			}

			el = eqs(event, '.attachmentsPlace .showPreplay');
			if (el) {
				stopEvent(event);
				const attachment = ko.dataFor(el);
				if (attachment && SMAudio.supported) {
					switch (true) {
						case SMAudio.supportedMp3 && attachment.isMp3():
							SMAudio.playMp3(attachment.linkDownload(), attachment.fileName);
							break;
						case SMAudio.supportedOgg && attachment.isOgg():
							SMAudio.playOgg(attachment.linkDownload(), attachment.fileName);
							break;
						case SMAudio.supportedWav && attachment.isWav():
							SMAudio.playWav(attachment.linkDownload(), attachment.fileName);
							break;
						// no default
					}
				}
				return;
			}

			el = eqs(event, '.attachmentItem');
			if (el) {
				const attachment = ko.dataFor(el), url = attachment?.linkDownload();
				if (url) {
					if ('application/pgp-keys' == attachment.mimeType
						&& (OpenPGPUserStore.isSupported() || GnuPGUserStore.isSupported())) {
						fetchRaw(url).then(text =>
							showScreenPopup(OpenPgpImportPopupView, [text])
						);
					} else {
						// download(url, attachment.fileName);
						// this.openAttachmentInViewer(attachment);
					}
				}
			}

			if (eqs(event, '.messageItemHeader .subjectParent .flagParent')) {
				setAction(currentMessage()?.isFlagged() ? MessageSetAction.UnsetFlag : MessageSetAction.SetFlag);
			}
		});

		keyScopeReal.subscribe(value => this.messageDomFocused(ScopeMessageView === value));

		// initShortcuts

		// exit fullscreen, back
		addShortcut('escape', '', ScopeMessageView, () => {
			if (!this.viewModelDom.hidden && currentMessage()) {
				const preview = SettingsUserStore.usePreviewPane();
				if (isFullscreen()) {
					exitFullscreen();
					if (preview) {
						AppUserStore.focusedState(ScopeMessageList);
					}
				} else if (!preview) {
					currentMessage(null);
				} else {
					AppUserStore.focusedState(ScopeMessageList);
				}

				return false;
			}
		});

		// fullscreen
		addShortcut('enter,open', '', ScopeMessageView, () => {
			isFullscreen() || toggleFullscreen();
			return false;
		});

		// reply
		registerShortcut('r,mailreply', '', [ScopeMessageList, ScopeMessageView], () => {
			if (currentMessage()) {
				this.replyCommand();
				return false;
			}
			return true;
		});

		// replyAll
		registerShortcut('a', '', [ScopeMessageList, ScopeMessageView], () => {
			if (currentMessage()) {
				this.replyAllCommand();
				return false;
			}
		});
		registerShortcut('mailreply', 'shift', [ScopeMessageList, ScopeMessageView], () => {
			if (currentMessage()) {
				this.replyAllCommand();
				return false;
			}
		});

		// forward
		registerShortcut('f,mailforward', '', [ScopeMessageList, ScopeMessageView], () => {
			if (currentMessage()) {
				this.forwardCommand();
				return false;
			}
		});

		// message information
		registerShortcut('i', 'meta', [ScopeMessageList, ScopeMessageView], () => {
			currentMessage() && this.toggleFullInfo();
			return false;
		});

		// toggle message blockquotes
		registerShortcut('b', '', [ScopeMessageList, ScopeMessageView], () => {
			const message = currentMessage();
			if (message?.body) {
				message.body.querySelectorAll('details').forEach(node => node.open = !node.open);
				return false;
			}
		});

		addShortcut('b', 'shift', [ScopeMessageList, ScopeMessageView], () => {
			if (!formFieldFocused()) {
				currentMessage()?.swapColors?.();
				return false;
			}
		});

		addShortcut('arrowup,arrowleft', 'meta', [ScopeMessageList, ScopeMessageView], () => {
			this.goUpCommand();
			return false;
		});

		addShortcut('arrowdown,arrowright', 'meta', [ScopeMessageList, ScopeMessageView], () => {
			this.goDownCommand();
			return false;
		});

		// delete
		addShortcut('delete', '', ScopeMessageView, () => {
			this.deleteCommand();
			return false;
		});
		addShortcut('delete', 'shift', ScopeMessageView, () => {
			this.deleteWithoutMoveCommand();
			return false;
		});

		// change focused state
		addShortcut('arrowleft', '', ScopeMessageView, () => {
			if (!isFullscreen() && currentMessage() && SettingsUserStore.usePreviewPane()
				&& !oMessageScrollerDom().scrollLeft) {
				AppUserStore.focusedState(ScopeMessageList);
				return false;
			}
		});
		addShortcut('tab', 'shift', ScopeMessageView, () => {
			if (!isFullscreen() && currentMessage() && SettingsUserStore.usePreviewPane()) {
				AppUserStore.focusedState(ScopeMessageList);
			}
			return false;
		});

		MessageUserStore.bodiesDom(dom.querySelector('.bodyText'));
	} // End of onBuild(dom)

	scrollMessageToTop() {
		oMessageScrollerDom().scrollTop = 0;
	}

	scrollMessageToLeft() {
		oMessageScrollerDom().scrollLeft = 0;
	}

	toggleAttachmentControls() {
		const b = !this.showAttachmentControls();
		this.showAttachmentControls(b);
		Local.set(ClientSideKeyNameMessageAttachmentControls, b);
	}

	downloadAsZip() {
		const hashes = (currentMessage()?.attachments || [])
			.map(item => item?.checked() /*&& !item?.isLinked()*/ ? item.download : '')
			.filter(v => v);
		downloadZip(
			currentMessage().subject(),
			hashes,
			() => this.downloadAsZipError(true),
			this.downloadAsZipLoading
		);
	}

	/**
	 * @param {MessageModel} oMessage
	 * @returns {void}
	 */
	showImages() {
		currentMessage().showExternalImages();
	}

	showTracking() {
		const msg = currentMessage(), body = msg?.body;
		if (body && msg.hasTracking()) {
			let attr = 'data-x-href-tracking';
			body.querySelectorAll('a['+attr+']').forEach(node => node.href = node.getAttribute(attr));
//			attr = 'data-x-src-tracking';
//			body.querySelectorAll('img['+attr+']').forEach(node => node.src = node.getAttribute(attr));
			this.nowTracking(true);
		}
	}

	whitelistText(txt) {
		let value = (SettingsUserStore.viewImagesWhitelist().trim() + '\n' + txt).trim();
		/*
                if ('pass' === currentMessage().spf[0]?.[0]) value += '+spf';
                if ('pass' === currentMessage().dkim[0]?.[0]) value += '+dkim';
                if ('pass' === currentMessage().dmarc[0]?.[0]) value += '+dmarc';
        */
		SettingsUserStore.viewImagesWhitelist(value);
		Remote.saveSetting('ViewImagesWhitelist', value);
		currentMessage().showExternalImages(1);
	}

	/**
	 * @returns {string}
	 */
	printableCheckedMessageCount() {
		const cnt = MessagelistUserStore.listCheckedOrSelectedUidsWithSubMails().size;
		return 0 < cnt ? (100 > cnt ? cnt : '99+') : '';
	}

	/**
	 * @param {MessageModel} oMessage
	 * @returns {void}
	 */
	readReceipt() {
		let oMessage = currentMessage();
		if (oMessage.readReceipt) {
			oMessage.flags.push('$mdnsent');
			Remote.request('SendReadReceiptMessage',
				iError => iError && oMessage.flags.remove('$mdnsent'),
				{
					messageFolder: oMessage.folder,
					messageUid: oMessage.uid,
					readReceipt: oMessage.readReceipt,
					subject: i18n('READ_RECEIPT/SUBJECT', { SUBJECT: oMessage.subject() }),
					plain: i18n('READ_RECEIPT/BODY', { 'READ-RECEIPT': AccountUserStore.email() })
				}
			);
		}
	}

	newTag() {
		let message = currentMessage();
		if (message) {
			let keyword = prompt(i18n('MESSAGE/NEW_TAG'), '')?.replace(/[\s\\]+/g, '');
			if (keyword.length && isAllowedKeyword(keyword)) {
				message.toggleTag(keyword);
				FolderUserStore.currentFolder().permanentFlags.push(keyword);
			}
		}
	}

	pgpDecrypt() {
		currentMessage().decrypt();
	}

	pgpVerify(/*self, event*/) {
		currentMessage().pgpVerify();
	}

	async smimeDecrypt() {
		currentMessage().decrypt();
	}

	smimeVerify(/*self, event*/) {
		currentMessage().smimeVerify();
	}
}
