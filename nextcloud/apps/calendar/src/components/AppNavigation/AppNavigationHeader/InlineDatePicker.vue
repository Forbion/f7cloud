<!-- InlineDatePicker.vue -->
<template>
  <div class="inline-datepicker-container">
		<DatePicker
			ref="datepicker"
			:date="selectedDate"
			:is-all-day="true"
			:open="true"
			:type="viewType"
			:append-to-body="false"
			:inline="true"
			:show-button-bar="false"
		@pick="handleDateClick"
		@change="handleDateClick"
		/>
  </div>
</template>

<script>
import DatePicker from '../../Shared/DatePickerOld.vue'
import { getDateFromFirstdayParam, getYYYYMMDDFromDate } from '../../../utils/date.js'

export default {
  name: 'InlineDatePicker',
  components: {
    DatePicker,
  },
  props: {
    selectedDate: {
      type: Date,
      required: true,
    },
    view: {
      type: String,
      default: 'dayGridMonth',
    },
  },
  data() {
    return {
      isDatepickerOpen: true,
			lastSelectedDate: null,
    }
  },
  computed: {
    viewType() {
      return this.view === 'multiMonthYear' ? 'year' : 'date'
    },
  },
	methods: {
		handleDateClick(date) {
			if (this.lastSelectedDate && this.lastSelectedDate.getTime() === date.getTime()) {
				return
			}
			this.lastSelectedDate = date
			console.log('Date clicked:', date)
			this.$emit('date-change', date)
		},
	},
  mounted() {
    console.log('InlineDatePicker mounted', {
      selectedDate: this.selectedDate,
      view: this.view,
      viewType: this.viewType
    })
  },
}
</script>

<style lang="scss">
.inline-datepicker-container {
  //margin: 10px 0;

	.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-left, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-left, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-left, .mx-datepicker-main .mx-time-header button.mx-btn-icon-left, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right {
		width: 26px;
		height: 26px;
		min-height: 26px;
		min-width: 26px;
	}
	.mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-left, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-left, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-left, .mx-datepicker-main .mx-time-header button.mx-btn-icon-left, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-right, .mx-datepicker-main .mx-calendar-header button.mx-btn-icon-double-right, .mx-datepicker-main .mx-time-header button.mx-btn-icon-double-right{
		width: 26px;
		height: 26px;
		min-height: 26px;
		min-width: 26px;
	}
	.mx-datepicker-main .mx-table.mx-table-date thead th, .mx-datepicker-main .mx-table.mx-table-date thead td, .mx-datepicker-main .mx-table.mx-table-date tbody th, .mx-datepicker-main .mx-table.mx-table-date tbody td, .mx-datepicker-main .mx-table.mx-table-year th, .mx-datepicker-main .mx-table.mx-table-year td, .mx-datepicker-main .mx-table.mx-table-month th, .mx-datepicker-main .mx-table.mx-table-month td {
		flex-basis: 26px !important;
		min-width: 27px !important;
		min-height: 22px !important;
		height: 22px !important;
		width: 27px !important;
	}

	.mx-datepicker-main .mx-table.mx-table-date thead tr, .mx-datepicker-main .mx-table.mx-table-date tbody tr, .mx-datepicker-main .mx-table.mx-table-year tr, .mx-datepicker-main .mx-table.mx-table-month tr {
		flex: 1 1 24px !important;
		min-height: 22px !important;
		justify-content: space-evenly !important;
	}

	.mx-datepicker-main .mx-table .cell:not(.not-current-month):not(.active) {
		background-color: #FFFFFF;
	}

	.mx-datepicker-main .mx-calendar {
		width: 230px !important;
		height: 235px !important;
		background-color: #F5F5F5 !important;
		padding-inline: 12px;
		margin-top: 16px;
		margin-inline: 0;
		border-radius: 8px;
	}

  .mx-datepicker {
    width: 100% !important;

    .mx-input-wrapper {
      display: none !important;
    }

    .mx-datepicker-main {
      position: static !important;
      width: 100% !important;
      border: none !important;
      box-shadow: none !important;
      background: var(--color-main-background) !important;

			.mx-calendar-content {
				height: unset !important;
			}

			.mx-calendar-header {
				margin-bottom: 4px !important;
				height: 26px !important;
			}

			.mx-datepicker-footer {
				display: none !important;
			}
    }
  }
}
</style>
