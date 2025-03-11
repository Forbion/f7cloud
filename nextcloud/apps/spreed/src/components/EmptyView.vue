<!--
  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
  <div class="empty-view-wrapper">
    <NcEmptyContent class="empty-view" :name="name" :description="description">
      <template #icon>
        <slot name="icon" />
      </template>
    </NcEmptyContent>
    <div class="emptyTopBar">&nbsp;</div>
  </div>
</template>

<script>
import NcEmptyContent from '@nextcloud/vue/dist/Components/NcEmptyContent.js'

export default {
	name: 'EmptyView',

	components: {
		NcEmptyContent,
	},

	props: {
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>.empty-view-wrapper {
  height: calc(100% - 8px);
  display: flex;
  flex-direction: column-reverse;
}

.empty-view {
	height: 100%;
	padding: calc(var(--default-grid-baseline) * 4);
}
</style>
