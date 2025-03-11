<!--
  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div>
    <div class="input-wrapper">
      <input
          v-model.number="trashRetentionDays"
          type="number"
          min="0"
          @input="debouncedSave"
      />
      <div class="actions">
        <span class="minus" @click="decrement">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="16"
          viewBox="0 0 13 16"
          fill="none"
      >
        <path
            d="M4.03673 8.18438L4.03568 8.18332C3.99022 8.1373 3.95431 8.08275 3.93002 8.0228C3.90573 7.96285 3.89353 7.89869 3.89413 7.834C3.89473 7.76932 3.90812 7.7054 3.93352 7.64591C3.95892 7.58642 3.99584 7.53254 4.04215 7.48738L4.0433 7.48624L9.31205 2.31363C9.40879 2.21865 9.56421 2.22009 9.65918 2.31684C9.75413 2.41358 9.7527 2.56897 9.65597 2.66394L10.0063 3.02073L9.65597 2.66394L4.74346 7.48687L4.3867 7.83712L4.73692 8.19391L9.55931 13.1068C9.65446 13.2037 9.65298 13.3594 9.55599 13.4546C9.45909 13.5496 9.3035 13.5481 9.20841 13.4513L4.03673 8.18438Z"
            fill="black"
            stroke="black"
        />
      </svg>
    </span>
        <span class="plus" @click="increment">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
      >
        <g clip-path="url(#clip0_4452_2832)">
          <path
              d="M10.9633 7.81562L10.9643 7.81668C11.0098 7.8627 11.0457 7.91725 11.07 7.9772C11.0943 8.03715 11.1065 8.10131 11.1059 8.166C11.1053 8.23068 11.0919 8.2946 11.0665 8.35409C11.0411 8.41358 11.0042 8.46746 10.9579 8.51262L10.9567 8.51376L5.68795 13.6864C5.59121 13.7813 5.43579 13.7799 5.34082 13.6832C5.24587 13.5864 5.2473 13.431 5.34403 13.3361L4.99375 12.9793L5.34403 13.3361L10.2565 8.51313L10.6133 8.16288L10.2631 7.80609L5.44069 2.89323C5.34554 2.79629 5.34702 2.64056 5.44401 2.54545C5.54091 2.45041 5.6965 2.45188 5.79159 2.54873L10.9633 7.81562Z"
              fill="black"
              stroke="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_4452_2832">
            <rect
                width="16"
                height="16"
                fill="white"
                transform="matrix(0 -1 1 0 0 16)"
            />
          </clipPath>
        </defs>
      </svg>
    </span>
      </div>
    </div>
		<p>
			{{ t('mail', 'Disable trash retention by leaving the field empty or setting it to 0. Only mails deleted after enabling trash retention will be processed.') }}
		</p>
	</div>
</template>

<script>
import debounce from 'lodash/fp/debounce.js'
import useMainStore from '../store/mainStore.js'
import { mapStores } from 'pinia'

export default {
	name: 'TrashRetentionSettings',
	props: {
		account: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			trashRetentionDays: this.account.trashRetentionDays,
			debouncedSave: debounce(1000, this.save),
		}
	},
	computed: {
		...mapStores(useMainStore),
	},
	methods: {
		async save() {
			let trashRetentionDays = parseInt(this.trashRetentionDays)
			if (isNaN(trashRetentionDays)) {
				// NaN probably means an empty input field, so we disable retention
				trashRetentionDays = 0
			}

			await this.mainStore.patchAccount({
				account: this.account,
				data: { trashRetentionDays },
			})
		},
    increment() {
      this.trashRetentionDays++;
      this.debouncedSave();
    },
    decrement() {
      if (this.trashRetentionDays > 0) {
        this.trashRetentionDays--;
      }

      this.debouncedSave();
    }
	},
}
</script>
