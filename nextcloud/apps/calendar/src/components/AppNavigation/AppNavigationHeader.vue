<template>
	<header class="app-navigation-header">
		<div class="app-navigation-header-primary-buttons" v-if="!isPublic" >
			<div class="app-navigation-header-primary-buttons-NewEvent">
				<AppNavigationHeaderNewEvent v-if="!isPublic" />
				<AppNavigationHeaderTodayButton  v-if="isPublic" />
			</div>
			<div class="app-navigation-header-primary-buttons-ViewMenu">
				<AppNavigationHeaderViewMenu />
			</div>
		</div>

		<div class="inline-datepicker-section" v-if="!isWidget">
			<div style="background: orange; padding: 10px; color: black; margin-bottom: 10px; display: none;">
				DEBUG: AppNavigationHeader<br>
				currentDate: {{ currentDate }}<br>
				currentView: {{ currentView }}<br>
				isWidget: {{ isWidget }}
			</div>
			<InlineDatePicker
				:selected-date="currentDate"
				:view="currentView"
				@date-change="onDateChange"
			/>
		</div>

	</header>
</template>

<script>
import AppNavigationHeaderDatePicker from './AppNavigationHeader/AppNavigationHeaderDatePicker.vue'
import AppNavigationHeaderTodayButton from './AppNavigationHeader/AppNavigationHeaderTodayButton.vue'
import AppNavigationHeaderNewEvent from './AppNavigationHeader/AppNavigationHeaderNewEvent.vue'
import AppNavigationHeaderViewMenu from './AppNavigationHeader/AppNavigationHeaderViewMenu.vue'
import InlineDatePicker from './AppNavigationHeader/InlineDatePicker.vue'
import { getDateFromFirstdayParam, getYYYYMMDDFromDate } from '../../utils/date.js'

export default {
	name: 'AppNavigationHeader',
	components: {
		AppNavigationHeaderDatePicker,
		AppNavigationHeaderTodayButton,
		AppNavigationHeaderNewEvent,
		AppNavigationHeaderViewMenu,
		InlineDatePicker,
	},
	props: {
		isPublic: {
			type: Boolean,
			required: true,
		},
		isWidget: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		currentDate() {
			return getDateFromFirstdayParam(this.$route.params?.firstDay ?? 'now')
		},
		currentView() {
			return this.$route.params.view
		},
	},
	methods: {
		onDateChange(date) {
			console.log('Date changed:', date)
			const name = this.$route.name
			const params = {
				...this.$route.params,
				firstDay: getYYYYMMDDFromDate(date),
			}

			if (this.$route.params.firstDay !== getYYYYMMDDFromDate(date)) {
				this.$router.push({ name, params })
			}
		},
	},
	mounted() {
		console.log('AppNavigationHeader mounted with props:', {
			isPublic: this.isPublic,
			isWidget: this.isWidget,
			currentDate: this.currentDate,
			currentView: this.currentView
		})
	},
}
</script>

<style lang="scss">
.app-navigation-header {
	display: flex;
	flex-direction: column;
}

.inline-datepicker-section {
	margin-top: 5px;
}

.new-event-today-view-section {
	display: flex;
	align-items: center;
	gap: 8px;
}

.app-navigation-header-primary-buttons {
	display: flex;
	justify-content: flex-end;
	background: transparent !important;

	& .app-navigation-header-primary-buttons-NewEvent {
		display: flex;

		& > button{
			width: 213px;

			& .material-design-icon:before {
				content: none;
			}

			& .button-vue__text {
				font-family: Raleway !important;
				font-weight: 500 !important;
				font-style: Medium !important;
				font-size: 14px !important;
				leading-trim: NONE !important;
				line-height: 20px !important;
				letter-spacing: 0 !important;

			}
		}
	}

	& .app-navigation-header-primary-buttons-ViewMenu {
		display: flex;
		--button-size: 40px !important;

		.action-item {
			width: 40px;
		}
	}
}
</style>
