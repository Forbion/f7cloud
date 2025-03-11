<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div>
		<input id="searchBody"
			v-model="searchBody"
			type="checkbox">
    <div class="icon">
      <span class="material-design-icon checkbox-blank-outline-icon">
        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"></path>
        </svg>
      </span>
      <span class="checkbox-content__icon checkbox-content__icon--checked checkbox-radio-switch__icon">
      <span class="material-design-icon checkbox-marked-icon">
        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" class="material-design-icon__svg">
          <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"></path>
        </svg>
      </span>
    </span>
    </div>
		<label for="searchBody">
			{{ t('mail', 'Включить поиск') }}
		</label>
	</div>
</template>

<script>
import Logger from '../logger.js'
import useMainStore from '../store/mainStore.js'
import { mapStores } from 'pinia'

export default {
	name: 'SearchSettings',
	props: {
		account: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			searchBody: this.account.searchBody,
		}
	},
	computed: {
		...mapStores(useMainStore),
	},
	watch: {
		searchBody(val, oldVal) {
			this.mainStore.patchAccount({
				account: this.account,
				data: {
					searchBody: val,
				},
			})
				.then(() => {
					Logger.info(`Body search ${val ? 'enabled' : 'disabled'}`)
				})
				.catch((error) => {
					Logger.error(`could not ${val ? 'enable' : 'disable'} body search`, { error })
					this.searchBody = oldVal
					throw error
				})
		},
	},
}
</script>

<style lang="scss" scoped>

label {
	padding-right: 12px;
}

div{
	display: flex;
	align-items: center;
}
</style>
