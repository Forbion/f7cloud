<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<AppContentDetails class="app-content">
		<NcEmptyContent class="app-content__empty"
			:name="t('mail', 'Добро пожаловать в Forbion F7 Mail', { productName }, null, {escape: false})"
			:description="t('mail', '')">
      <template #icon>
        <MailIcon />
      </template>
			<template #action>
				<NewMessageButtonHeaderNew />
			</template>
		</NcEmptyContent>
	</AppContentDetails>
</template>

<script>
import { NcAppContentDetails as AppContentDetails, NcEmptyContent } from '@nextcloud/vue'
import NewMessageButtonHeaderNew from './NewMessageButtonHeaderNew.vue'
import MailIcon from './icons/MailIcon.vue'

export default {
	name: 'NoMessageSelected',
	components: {
    NewMessageButtonHeaderNew,
		AppContentDetails,
		NcEmptyContent,
    MailIcon
	},

	computed: {
		productName() {
			return window?.OC?.theme?.name ?? 'Forbion F7'
		},
	},
}
</script>
<style lang="scss" scoped>
:deep(.refresh__button) {
	display: none !important;
}
.header {
	display: grid !important;
	justify-content: center !important;
}
.app-content {
	display: flex;
	height: 100%;
	justify-content: center;
	&__empty {
		flex-grow: unset;
	}
}
</style>
