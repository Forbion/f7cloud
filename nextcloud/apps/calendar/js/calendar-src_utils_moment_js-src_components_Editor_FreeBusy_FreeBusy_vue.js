(self["webpackChunkcalendar"] = self["webpackChunkcalendar"] || []).push([["src_utils_moment_js-src_components_Editor_FreeBusy_FreeBusy_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fullcalendar/vue */ "./node_modules/@fullcalendar/vue/dist/index.js");
/* harmony import */ var _fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fullcalendar/resource-timeline */ "./node_modules/@fullcalendar/resource-timeline/index.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _fullcalendar_eventSources_freeBusyBlockedForAllEventSource_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../fullcalendar/eventSources/freeBusyBlockedForAllEventSource.js */ "./src/fullcalendar/eventSources/freeBusyBlockedForAllEventSource.js");
/* harmony import */ var _fullcalendar_eventSources_freeBusyFakeBlockingEventSource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../fullcalendar/eventSources/freeBusyFakeBlockingEventSource.js */ "./src/fullcalendar/eventSources/freeBusyFakeBlockingEventSource.js");
/* harmony import */ var _fullcalendar_eventSources_freeBusyResourceEventSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../fullcalendar/eventSources/freeBusyResourceEventSource.js */ "./src/fullcalendar/eventSources/freeBusyResourceEventSource.js");
/* harmony import */ var _fullcalendar_localization_dateFormattingConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../fullcalendar/localization/dateFormattingConfig.js */ "./src/fullcalendar/localization/dateFormattingConfig.js");
/* harmony import */ var _fullcalendar_localization_localeProvider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../fullcalendar/localization/localeProvider.js */ "./src/fullcalendar/localization/localeProvider.js");
/* harmony import */ var _fullcalendar_localization_momentPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../fullcalendar/localization/momentPlugin.js */ "./src/fullcalendar/localization/momentPlugin.js");
/* harmony import */ var _fullcalendar_timezones_vtimezoneNamedTimezoneImpl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../fullcalendar/timezones/vtimezoneNamedTimezoneImpl.js */ "./src/fullcalendar/timezones/vtimezoneNamedTimezoneImpl.js");
/* harmony import */ var vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/ChevronRight.vue */ "./node_modules/vue-material-design-icons/ChevronRight.vue");
/* harmony import */ var vue_material_design_icons_ChevronLeft_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-material-design-icons/ChevronLeft.vue */ "./node_modules/vue-material-design-icons/ChevronLeft.vue");
/* harmony import */ var vue_material_design_icons_Check_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-material-design-icons/Check.vue */ "./node_modules/vue-material-design-icons/Check.vue");
/* harmony import */ var vue_material_design_icons_HelpCircle_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-material-design-icons/HelpCircle.vue */ "./node_modules/vue-material-design-icons/HelpCircle.vue");
/* harmony import */ var _Invitees_InviteesListSearch_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Invitees/InviteesListSearch.vue */ "./src/components/Editor/Invitees/InviteesListSearch.vue");
/* harmony import */ var _utils_freebusy_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/freebusy.js */ "./src/utils/freebusy.js");
/* harmony import */ var _services_freeBusySlotService_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/freeBusySlotService.js */ "./src/services/freeBusySlotService.js");
/* harmony import */ var _filters_dateFormat_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../filters/dateFormat.js */ "./src/filters/dateFormat.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_settings_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../store/settings.js */ "./src/store/settings.js");
// Import FullCalendar itself




// Import event sources




// Import localization plugins




// Import timezone plugins











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'FreeBusy',
  components: {
    NcSelect: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcSelect,
    FullCalendar: _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    InviteesListSearch: _Invitees_InviteesListSearch_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    NcDateTimePickerNative: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcDateTimePickerNative,
    NcDialog: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcDialog,
    NcButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcButton,
    NcPopover: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcPopover,
    NcUserBubble: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcUserBubble,
    ChevronRightIcon: vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    ChevronLeftIcon: vue_material_design_icons_ChevronLeft_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    CheckIcon: vue_material_design_icons_Check_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    HelpCircleIcon: vue_material_design_icons_HelpCircle_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  props: {
    /**
     * The organizer object.
     * See /src/models/attendee.js for details
     */
    organizer: {
      type: Object,
      required: true
    },
    /**
     * The attendee objects.
     * See /src/models/attendee.js for details
     */
    attendees: {
      type: Array,
      required: true
    },
    /**
     * The start-date to query free-busy information from
     */
    startDate: {
      type: Date,
      required: true
    },
    /**
     * The end-date to query free-busy information from
     */
    endDate: {
      type: Date,
      required: true
    },
    eventTitle: {
      type: String,
      default: ''
    },
    alreadyInvitedEmails: {
      type: Array,
      default: () => []
    },
    dialogName: {
      type: String,
      required: false
    },
    disableFindTime: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loadingIndicator: true,
      currentDate: this.startDate,
      currentStart: this.startDate,
      currentEnd: this.endDate,
      lang: (0,_fullcalendar_localization_localeProvider_js__WEBPACK_IMPORTED_MODULE_5__.getFullCalendarLocale)().locale,
      formattingOptions: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      freeSlots: [],
      selectedSlot: null
    };
  },
  mounted() {
    const calendar = this.$refs.freeBusyFullCalendar.getApi();
    calendar.scrollToTime(this.scrollTime);
    this.findFreeSlots();
  },
  computed: {
    ...(0,pinia__WEBPACK_IMPORTED_MODULE_18__.mapState)(_store_settings_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      timezoneId: 'getResolvedTimezone'
    }),
    ...(0,pinia__WEBPACK_IMPORTED_MODULE_18__.mapState)(_store_settings_js__WEBPACK_IMPORTED_MODULE_16__["default"], ['showWeekends', 'showWeekNumbers', 'timezone']),
    placeholder() {
      return this.$t('calendar', 'Select automatic slot');
    },
    /**
     * FullCalendar Plugins
     *
     * @return {(PluginDef)[]}
     */
    plugins() {
      return [_fullcalendar_resource_timeline__WEBPACK_IMPORTED_MODULE_19__["default"], (0,_fullcalendar_localization_momentPlugin_js__WEBPACK_IMPORTED_MODULE_6__["default"])(), _fullcalendar_timezones_vtimezoneNamedTimezoneImpl_js__WEBPACK_IMPORTED_MODULE_7__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_20__["default"]];
    },
    formattedCurrentStart() {
      return this.currentDate.toLocaleDateString(this.lang, this.formattingOptions);
    },
    formattedCurrentTime() {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      const startTime = this.currentStart.toLocaleTimeString(this.lang, options);
      const endTime = this.currentEnd.toLocaleTimeString(this.lang, options);
      return `${startTime} - ${endTime} `;
    },
    scrollTime() {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        seconds: '2-digit',
        hour12: false
      };
      return this.currentDate.getHours() > 0 ? new Date(this.currentDate.getTime() - 60 * 60 * 1000).toLocaleTimeString(this.lang, options) : '10:00:00';
    },
    formattedTimeZone() {
      return this.timezoneId.replace('/', '-');
    },
    eventSources() {
      return [(0,_fullcalendar_eventSources_freeBusyResourceEventSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._uid, this.organizer.attendeeProperty, this.attendees.map(a => a.attendeeProperty)), (0,_fullcalendar_eventSources_freeBusyFakeBlockingEventSource_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this._uid, this.resources, this.currentStart, this.currentEnd), (0,_fullcalendar_eventSources_freeBusyBlockedForAllEventSource_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.organizer.attendeeProperty, this.attendees.map(a => a.attendeeProperty), this.resources)];
    },
    resources() {
      const resources = [];
      const roles = {
        CHAIR: this.$t('calendar', 'chairperson'),
        'REQ-PARTICIPANT': this.$t('calendar', 'required participant'),
        'NON-PARTICIPANT': this.$t('calendar', 'non-participant'),
        'OPT-PARTICIPANT': this.$t('calendar', 'optional participant')
      };
      for (const attendee of [this.organizer, ...this.attendees]) {
        let title = attendee.commonName || attendee.uri.slice(7);
        if (attendee === this.organizer) {
          title = this.$t('calendar', '{organizer} (organizer)', {
            organizer: title
          });
        } else {
          title = this.$t('calendar', '{attendee} ({role})', {
            attendee: title,
            role: roles[attendee.role]
          });
        }
        resources.push({
          id: attendee.attendeeProperty.email,
          title
        });
      }
      // Sort the resources by ID, just like fullcalendar does. This ensures that
      // the fake blocking event can know the first and last resource reliably
      // ref https://fullcalendar.io/docs/resourceOrder
      resources.sort((a, b) => (a.id > b.id) - (a.id < b.id));
      return resources;
    },
    /**
     * List of possible Free-Busy values.
     * This is used as legend.
     *
     * @return {({color: string, label: string})[]}
     */
    colorCaption() {
      return [{
        // TRANSLATORS: free as in available
        label: this.$t('calendar', 'Free'),
        color: (0,_utils_freebusy_js__WEBPACK_IMPORTED_MODULE_13__.getColorForFBType)('FREE')
      }, {
        label: this.$t('calendar', 'Busy (tentative)'),
        color: (0,_utils_freebusy_js__WEBPACK_IMPORTED_MODULE_13__.getColorForFBType)('BUSY-TENTATIVE')
      }, {
        label: this.$t('calendar', 'Busy'),
        color: (0,_utils_freebusy_js__WEBPACK_IMPORTED_MODULE_13__.getColorForFBType)('BUSY')
      }, {
        label: this.$t('calendar', 'Out of office'),
        color: (0,_utils_freebusy_js__WEBPACK_IMPORTED_MODULE_13__.getColorForFBType)('BUSY-UNAVAILABLE')
      }, {
        label: this.$t('calendar', 'Unknown'),
        color: (0,_utils_freebusy_js__WEBPACK_IMPORTED_MODULE_13__.getColorForFBType)('UNKNOWN')
      }];
    },
    /**
     * Configuration options for FullCalendar
     * Please see https://fullcalendar.io/docs#toc for details
     *
     * @return {object}
     */
    options() {
      return {
        // Initialization:
        initialView: 'resourceTimelineDay',
        initialDate: this.currentStart,
        schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
        // Data
        eventSources: this.eventSources,
        resources: this.resources,
        // Plugins
        plugins: this.plugins,
        // Interaction:
        editable: false,
        selectable: true,
        select: this.handleSelect,
        // Localization:
        ...(0,_fullcalendar_localization_dateFormattingConfig_js__WEBPACK_IMPORTED_MODULE_4__.getDateFormattingConfig)(),
        ...(0,_fullcalendar_localization_localeProvider_js__WEBPACK_IMPORTED_MODULE_5__.getFullCalendarLocale)(),
        // Rendering
        height: 'auto',
        loading: this.loading,
        headerToolbar: false,
        resourceAreaColumns: [{
          field: 'title',
          headerContent: 'Attendees'
        }],
        // Timezones:
        timeZone: this.timezoneId,
        // Formatting of the title
        // will produce something like "Tuesday, September 18, 2018"
        // ref https://fullcalendar.io/docs/date-formatting
        titleFormat: {
          month: 'long',
          year: 'numeric',
          day: 'numeric',
          weekday: 'long'
        },
        dateClick: this.findFreeSlots()
      };
    }
  },
  methods: {
    handleSelect(arg) {
      this.currentStart = arg.start;
      this.currentEnd = arg.end;
    },
    save() {
      this.$emit('update-dates', {
        start: this.currentStart,
        end: this.currentEnd
      });
    },
    addAttendee(attendee) {
      this.$emit('add-attendee', attendee);
      this.findFreeSlots();
    },
    removeAttendee(attendee) {
      this.$emit('remove-attendee', attendee);
      this.findFreeSlots();
    },
    loading(isLoading) {
      this.loadingIndicator = isLoading;
    },
    handleActions(action) {
      let date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      const calendar = this.$refs.freeBusyFullCalendar.getApi();
      switch (action) {
        case 'today':
          calendar.today();
          break;
        case 'left':
          calendar.prev();
          break;
        case 'right':
          calendar.next();
          break;
        case 'picker':
          calendar.gotoDate(date);
          break;
      }
      this.currentDate = calendar.getDate();
      calendar.scrollToTime(this.scrollTime);
      this.findFreeSlots();
    },
    async findFreeSlots() {
      // Doesn't make sense for multiple days
      if (this.currentStart.getDate() !== this.currentEnd.getDate()) {
        return;
      }

      // Needed to update with full calendar widget changes
      const startSearch = new Date(this.currentStart);
      startSearch.setDate(this.currentDate.getDate());
      startSearch.setMonth(this.currentDate.getMonth());
      startSearch.setYear(this.currentDate.getFullYear());
      const endSearch = new Date(this.currentEnd);
      endSearch.setDate(this.currentDate.getDate());
      endSearch.setMonth(this.currentDate.getMonth());
      endSearch.setYear(this.currentDate.getFullYear());
      try {
        // for now search slots only in the first week days
        const endSearchDate = new Date(startSearch);
        endSearchDate.setDate(startSearch.getDate() + 8);
        const eventResults = await (0,_services_freeBusySlotService_js__WEBPACK_IMPORTED_MODULE_14__.getBusySlots)(this.organizer.attendeeProperty, this.attendees.map(a => a.attendeeProperty), startSearch, endSearchDate, this.timezoneId);
        const freeSlots = (0,_services_freeBusySlotService_js__WEBPACK_IMPORTED_MODULE_14__.getFirstFreeSlot)(startSearch, endSearch, eventResults.events);
        freeSlots.forEach(slot => {
          slot.displayStart = (0,_filters_dateFormat_js__WEBPACK_IMPORTED_MODULE_15__["default"])(slot.start, false, (0,_fullcalendar_localization_localeProvider_js__WEBPACK_IMPORTED_MODULE_5__.getFullCalendarLocale)().locale);
        });
        this.freeSlots = freeSlots;
      } catch (error) {
        // Handle error here
        console.error('Error occurred while finding free slots:', error);
        throw error; // Re-throwing the error to handle it in the caller
      }
    },
    setSlotSuggestion(slot) {
      this.selectedSlot = slot;
      const calendar = this.$refs.freeBusyFullCalendar.getApi();
      calendar.gotoDate(slot.start);
      calendar.scrollToTime(this.scrollTime);

      // have to make these "selected" version of the props seeing as they can't be modified directly, and they aren't updated reactively when vuex is
      this.currentStart = slot.start;
      this.currentEnd = slot.end;
      const clonedDate = new Date(slot.start); // so as not to modify slot.start
      this.currentDate = new Date(clonedDate.setHours(0, 0, 0, 0));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _services_caldavService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/caldavService.js */ "./src/services/caldavService.js");
/* harmony import */ var _services_isCirclesEnabled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/isCirclesEnabled.js */ "./src/services/isCirclesEnabled.js");
/* harmony import */ var _services_circleService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/circleService.js */ "./src/services/circleService.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _utils_randomId_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/randomId.js */ "./src/utils/randomId.js");
/* harmony import */ var vue_material_design_icons_GoogleCirclesCommunities_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/GoogleCirclesCommunities.vue */ "./node_modules/vue-material-design-icons/GoogleCirclesCommunities.vue");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _utils_attendee_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/attendee.js */ "./src/utils/attendee.js");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InviteesListSearch',
  components: {
    Avatar: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcAvatar,
    NcSelect: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcSelect,
    GoogleCirclesCommunitiesIcon: vue_material_design_icons_GoogleCirclesCommunities_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    alreadyInvitedEmails: {
      type: Array,
      required: true
    },
    organizer: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      isLoading: false,
      inputGiven: false,
      matches: [],
      isCirclesEnabled: _services_isCirclesEnabled_js__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },
  computed: {
    placeholder() {
      return this.$t('calendar', 'Search for emails, users, contacts, teams or groups');
    },
    noResult() {
      return this.$t('calendar', 'No match found');
    }
  },
  methods: {
    findAttendees: debounce__WEBPACK_IMPORTED_MODULE_10___default()(async function (query) {
      this.isLoading = true;
      const matches = [];
      if (query.length > 0) {
        const promises = [this.findAttendeesFromContactsAPI(query), this.findAttendeesFromDAV(query)];
        if (_services_isCirclesEnabled_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          promises.push(this.findAttendeesFromCircles(query));
        }
        const [contactsResults, davResults, circleResults] = await Promise.all(promises);
        matches.push(...contactsResults);
        matches.push(...davResults);
        if (_services_isCirclesEnabled_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          matches.push(...circleResults);
        }

        // Source of the Regex: https://stackoverflow.com/a/46181
        // eslint-disable-next-line
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(query)) {
          const alreadyInList = matches.find(attendee => attendee.email.toLowerCase() === query.toLowerCase());
          if (!alreadyInList) {
            matches.unshift({
              calendarUserType: 'INDIVIDUAL',
              commonName: query,
              email: query,
              isUser: false,
              avatar: null,
              language: null,
              timezoneId: null,
              hasMultipleEMails: false,
              dropdownName: query
            });
          }
        }

        // Generate a unique id for every result to make the avatar components reactive
        for (const match of matches) {
          match.uid = (0,_utils_randomId_js__WEBPACK_IMPORTED_MODULE_6__.randomId)();
        }
        this.isLoading = false;
        this.inputGiven = true;
      } else {
        this.inputGiven = false;
        this.isLoading = false;
      }
      this.matches = matches;
    }, 500),
    addAttendee(selectedValue) {
      if (selectedValue.type === 'circle') {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_8__.showInfo)(this.$t('calendar', 'Note that members of circles get invited but are not synced yet.'));
        this.resolveCircleMembers(selectedValue.id, selectedValue.email);
      }
      if (selectedValue.type === 'contactsgroup') {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_8__.showInfo)(this.$t('calendar', 'Note that members of contact groups get invited but are not synced yet.'));
        this.getContactGroupMembers(selectedValue.commonName);
        const group = {
          calendarUserType: 'GROUP',
          commonName: selectedValue.commonName,
          dropdownName: selectedValue.dropdownName,
          email: selectedValue.email,
          isUser: false,
          subtitle: selectedValue.subtitle,
          type: 'contactsgroup'
        };
        this.$emit('add-attendee', group);
        return;
      }
      this.$emit('add-attendee', selectedValue);
    },
    async resolveCircleMembers(circleId, groupId) {
      let results;
      try {
        // Going to query custom backend to fetch Circle members since we're going to use
        // mail addresses of local circle members. The Circles API doesn't expose member
        // emails yet. Change approved by @miaulalala and @ChristophWurst.
        results = await (0,_services_circleService_js__WEBPACK_IMPORTED_MODULE_3__.circleGetMembers)(circleId);
      } catch (error) {
        console.debug(error);
        return [];
      }
      results.data.forEach(member => {
        if (!this.organizer || member.email !== this.organizer.uri) {
          this.$emit('add-attendee', member);
        }
      });
    },
    async getContactGroupMembers(groupName) {
      let results;
      try {
        results = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_5__.linkTo)('calendar', 'index.php') + '/v1/autocompletion/groupmembers', {
          groupName
        });
      } catch (error) {
        console.error('Failed to fetch contact group members', error);
        return [];
      }
      results.data.forEach(member => {
        if (!this.organizer || member.email !== this.organizer.uri) {
          this.$emit('add-attendee', member);
        }
      });
    },
    async findAttendeesFromContactsAPI(query) {
      let response;
      try {
        response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_5__.linkTo)('calendar', 'index.php') + '/v1/autocompletion/attendee', {
          search: query
        });
      } catch (error) {
        console.debug(error);
        return [];
      }
      const data = response.data;
      return data.reduce((arr, result) => {
        const hasMultipleEMails = result.emails.length > 1;
        result.emails.forEach(email => {
          let name;
          if (result.name && !hasMultipleEMails) {
            name = result.name;
          } else if (result.name && hasMultipleEMails) {
            name = `${result.name} (${email})`;
          } else {
            name = email;
          }
          if (email && this.alreadyInvitedEmails.includes((0,_utils_attendee_js__WEBPACK_IMPORTED_MODULE_9__.removeMailtoPrefix)(email))) {
            return;
          }
          if (result.type === 'contactsgroup') {
            arr.push({
              calendarUserType: 'GROUP',
              commonName: result.name,
              subtitle: this.$n('calendar', '%n member', '%n members', result.members),
              members: {
                length: result.members
              },
              email,
              isUser: false,
              avatar: result.photo,
              language: result.lang,
              timezoneId: result.tzid,
              hasMultipleEMails: false,
              dropdownName: name,
              type: 'contactsgroup'
            });
            return;
          }
          arr.push({
            calendarUserType: 'INDIVIDUAL',
            commonName: result.name,
            email,
            isUser: false,
            avatar: result.photo,
            language: result.lang,
            timezoneId: result.tzid,
            hasMultipleEMails,
            dropdownName: name
          });
        });
        return arr;
      }, []);
    },
    async findAttendeesFromDAV(query) {
      let results;
      try {
        results = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_1__.principalPropertySearchByDisplaynameOrEmail)(query);
      } catch (error) {
        console.debug(error);
        return [];
      }
      return results.filter(principal => {
        if (!principal.email) {
          return false;
        }
        if (this.alreadyInvitedEmails.includes(principal.email)) {
          return false;
        }

        // Do not include resources and rooms
        if (['ROOM', 'RESOURCE'].includes(principal.calendarUserType)) {
          return false;
        }
        return true;
      }).map(principal => {
        return {
          commonName: principal.displayname,
          calendarUserType: principal.calendarUserType,
          email: principal.email,
          language: principal.language,
          isUser: principal.calendarUserType === 'INDIVIDUAL',
          avatar: decodeURIComponent(principal.userId),
          hasMultipleEMails: false,
          dropdownName: principal.displayname ? [principal.displayname, principal.email].join(' ') : principal.email
        };
      });
    },
    async findAttendeesFromCircles(query) {
      let results;
      try {
        results = await (0,_services_circleService_js__WEBPACK_IMPORTED_MODULE_3__.circleSearchByName)(query);
      } catch (error) {
        console.debug(error);
        return [];
      }
      return results.filter(circle => {
        return true;
      }).map(circle => {
        return {
          commonName: circle.displayname,
          calendarUserType: 'GROUP',
          email: 'circle+' + circle.id + '@' + circle.instance,
          isUser: false,
          dropdownName: circle.displayname,
          type: 'circle',
          id: circle.id,
          subtitle: this.$n('calendar', '%n member', '%n members', circle.population)
        };
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=template&id=a60f3f46&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=template&id=a60f3f46&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("NcDialog", {
    attrs: {
      size: "large",
      name: _vm.dialogName || _vm.$t("calendar", "Availability of attendees, resources and rooms")
    },
    on: {
      closing: function ($event) {
        return _vm.$emit("close");
      }
    }
  }, [_c("div", {
    staticClass: "modal__content modal--scheduler"
  }, [_vm.loadingIndicator ? _c("div", {
    staticClass: "loading-indicator"
  }, [_c("div", {
    staticClass: "icon-loading"
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "modal__content__header"
  }, [_c("h2", [_vm._v(_vm._s(_vm.$t("calendar", "Find a time")))]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.eventTitle))]), _vm._v(" "), _c("div", {
    staticClass: "modal__content__header__attendees"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("calendar", "with")) + "\n\t\t\t\t"), _c("NcUserBubble", {
    attrs: {
      size: "24",
      "display-name": _vm.organizer.commonName
    }
  }), _vm._v(" "), _vm._l(_vm.attendees, function (attendee) {
    return _c("NcUserBubble", {
      key: attendee.id,
      staticClass: "modal__content__header__attendees__user-bubble",
      attrs: {
        size: "24",
        "display-name": attendee.commonName
      },
      scopedSlots: _vm._u([{
        key: "name",
        fn: function () {
          return [_c("a", {
            staticClass: "icon-close",
            attrs: {
              href: "#",
              title: "Remove user"
            },
            on: {
              click: function ($event) {
                return _vm.removeAttendee(attendee);
              }
            }
          })];
        },
        proxy: true
      }], null, true)
    });
  })], 2)]), _vm._v(" "), _c("div", {
    staticClass: "modal__content__actions"
  }, [_c("InviteesListSearch", {
    staticClass: "modal__content__actions__select",
    attrs: {
      "already-invited-emails": _vm.alreadyInvitedEmails,
      organizer: _vm.organizer
    },
    on: {
      "add-attendee": _vm.addAttendee
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "modal__content__actions__date"
  }, [_c("NcButton", {
    attrs: {
      type: "secondary"
    },
    on: {
      click: function ($event) {
        return _vm.handleActions("today");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.$t("calendar", "Today")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "secondary"
    },
    on: {
      click: function ($event) {
        return _vm.handleActions("left");
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("ChevronLeftIcon", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "secondary"
    },
    on: {
      click: function ($event) {
        return _vm.handleActions("right");
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("ChevronRightIcon", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("NcDateTimePickerNative", {
    attrs: {
      "hide-label": true,
      value: _vm.currentDate
    },
    on: {
      input: date => _vm.handleActions("picker", date)
    }
  }), _vm._v(" "), _c("NcPopover", {
    attrs: {
      "focus-trap": false
    },
    scopedSlots: _vm._u([{
      key: "trigger",
      fn: function () {
        return [_c("NcButton", {
          attrs: {
            type: "tertiary-no-background"
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("HelpCircleIcon", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }])
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), [_c("div", {
    staticClass: "freebusy-caption"
  }, [_c("div", {
    staticClass: "freebusy-caption__calendar-user-types"
  }), _vm._v(" "), _c("div", {
    staticClass: "freebusy-caption__colors"
  }, _vm._l(_vm.colorCaption, function (color) {
    return _c("div", {
      key: color.color,
      staticClass: "freebusy-caption-item"
    }, [_c("div", {
      staticClass: "freebusy-caption-item__color",
      style: {
        "background-color": color.color
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "freebusy-caption-item__label"
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t" + _vm._s(color.label) + "\n\t\t\t\t\t\t\t\t\t")])]);
  }), 0)])]], 2)], 1)], 1), _vm._v(" "), _c("FullCalendar", {
    ref: "freeBusyFullCalendar",
    attrs: {
      options: _vm.options
    }
  }), _vm._v(" "), !_vm.disableFindTime ? _c("div", {
    staticClass: "modal__content__footer"
  }, [_c("div", {
    staticClass: "modal__content__footer__title"
  }, [_vm.freeSlots ? _c("p", [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.$t("calendar", "Available times:")) + "\n\t\t\t\t\t"), _c("NcSelect", {
    staticClass: "available-slots__multiselect",
    attrs: {
      options: _vm.freeSlots,
      placeholder: _vm.placeholder,
      clearable: false,
      "input-id": "slot",
      label: "displayStart",
      "label-outside": true,
      value: _vm.selectedSlot
    },
    on: {
      "option:selected": _vm.setSlotSuggestion
    },
    scopedSlots: _vm._u([{
      key: "selected-option",
      fn: function (_ref) {
        let {} = _ref;
        return [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.$t("calendar", "Suggestion accepted")) + "\n\t\t\t\t\t\t")];
      }
    }], null, false, 1565055063)
  })], 1) : _vm._e(), _vm._v(" "), _c("h3", [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.formattedCurrentStart) + "\n\t\t\t\t")]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.formattedCurrentTime)), _c("span", {
    staticClass: "modal__content__footer__title__timezone"
  }, [_vm._v(_vm._s(_vm.formattedTimeZone))])])]), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "primary"
    },
    on: {
      click: _vm.save
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("CheckIcon", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }], null, false, 2630571749)
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.$t("calendar", "Done")) + "\n\t\t\t\t")])], 1) : _vm._e()], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=template&id=d74a293a&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=template&id=d74a293a&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("NcSelect", {
    staticClass: "invitees-search__multiselect",
    class: {
      showContent: _vm.inputGiven,
      "icon-loading": _vm.isLoading
    },
    attrs: {
      options: _vm.matches,
      searchable: true,
      "max-height": 600,
      placeholder: _vm.placeholder,
      clearable: false,
      "label-outside": true,
      "input-id": "uid",
      label: "dropdownName"
    },
    on: {
      search: _vm.findAttendees,
      "option:selected": _vm.addAttendee
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function (option) {
        return [_c("div", {
          staticClass: "invitees-search-list-item"
        }, [option.isUser ? _c("Avatar", {
          key: option.uid,
          attrs: {
            user: option.avatar,
            "display-name": option.dropdownName
          }
        }) : option.type === "circle" ? _c("Avatar", {
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("GoogleCirclesCommunitiesIcon", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }], null, true)
        }) : _vm._e(), _vm._v(" "), !option.isUser && option.type !== "circle" ? _c("Avatar", {
          key: option.uid,
          attrs: {
            url: option.avatar,
            "display-name": option.commonName
          }
        }) : _vm._e(), _vm._v(" "), _c("div", {
          staticClass: "invitees-search-list-item__label"
        }, [_c("div", [_vm._v("\n\t\t\t\t\t" + _vm._s(option.commonName) + "\n\t\t\t\t")]), _vm._v(" "), option.email !== option.commonName && option.type !== "circle" && option.type !== "contactsgroup" ? _c("div", [_vm._v("\n\t\t\t\t\t" + _vm._s(option.email) + "\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), option.type === "circle" || option.type === "contactsgroup" ? _c("div", [_vm._v("\n\t\t\t\t\t" + _vm._s(option.subtitle) + "\n\t\t\t\t")]) : _vm._e()])], 1)];
      }
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/defaults/defaultCategories.js":
/*!*******************************************!*\
  !*** ./src/defaults/defaultCategories.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDefaultCategories: () => (/* binding */ getDefaultCategories)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 *
 */
function getDefaultCategories() {
  // This list was taken from https://tools.ietf.org/html/rfc5545#section-5
  const values = [(0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Anniversary'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Appointment'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Business'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Education'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Holiday'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Meeting'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Miscellaneous'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Non-working hours'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Not in office'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Personal'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Phone call'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Sick day'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Special occasion'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Travel'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Vacation')];
  return values.map(value => ({
    value,
    label: value
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDefaultCategories);

/***/ }),

/***/ "./src/filters/dateFormat.js":
/*!***********************************!*\
  !*** ./src/filters/dateFormat.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 * Formats a date object
 *
 * @param {Date} value The date object to format
 * @param {boolean} isAllDay Whether or not to display only the date part
 * @param {string} locale The locale to format it in
 * @return {string}
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((value, isAllDay, locale) => {
  if (isAllDay) {
    return (0,_nextcloud_moment__WEBPACK_IMPORTED_MODULE_0__["default"])(value).locale(locale).format('ll');
  } else {
    return (0,_nextcloud_moment__WEBPACK_IMPORTED_MODULE_0__["default"])(value).locale(locale).format('lll');
  }
});

/***/ }),

/***/ "./src/fullcalendar/eventSources/freeBusyBlockedForAllEventSource.js":
/*!***************************************************************************!*\
  !*** ./src/fullcalendar/eventSources/freeBusyBlockedForAllEventSource.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/timezoneDataProviderService.js */ "./src/services/timezoneDataProviderService.js");
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _utils_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/logger.js */ "./src/utils/logger.js");
/* harmony import */ var _utils_freebusy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/freebusy.js */ "./src/utils/freebusy.js");
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */





/**
 * Returns an event source for free-busy
 *
 * @param {AttendeeProperty} organizer The organizer of the event
 * @param {AttendeeProperty[]} attendees Array of the event's attendees
 * @param {string[]} resources List of resources
 * @return {{startEditable: boolean, resourceEditable: boolean, editable: boolean, id: string, durationEditable: boolean, events: events}}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(organizer, attendees, resources) {
  const resourceIds = resources.map(resource => resource.id);
  return {
    id: 'free-busy-free-for-all',
    editable: false,
    startEditable: false,
    durationEditable: false,
    resourceEditable: false,
    events: async (_ref, successCallback, failureCallback) => {
      let {
        start,
        end,
        timeZone
      } = _ref;
      console.debug('freeBusyBlockedForAllEventSource', start, end, timeZone);
      let timezoneObject = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId(timeZone);
      if (!timezoneObject) {
        timezoneObject = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId('UTC');
        _utils_logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].error(`FreeBusyEventSource: Timezone ${timeZone} not found, falling back to UTC.`);
      }
      const startDateTime = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_1__.DateTimeValue.fromJSDate(start, true);
      const endDateTime = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_1__.DateTimeValue.fromJSDate(end, true);
      const organizerAsAttendee = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_1__.AttendeeProperty('ATTENDEE', organizer.email);
      const freeBusyIterator = await (0,_utils_freebusy_js__WEBPACK_IMPORTED_MODULE_3__.doFreeBusyRequest)(startDateTime, endDateTime, organizer, [organizerAsAttendee, ...attendees]);
      const slots = [];
      for await (const [, freeBusyProperty] of freeBusyIterator) {
        slots.push({
          start: freeBusyProperty.getFirstValue().start.getInTimezone(timezoneObject).jsDate,
          end: freeBusyProperty.getFirstValue().end.getInTimezone(timezoneObject).jsDate
        });
      }

      // Now that we have all the busy slots we try to combine them to iron
      // out any overlaps between them.
      // The algorithm below will sort the slots by their start time ane then
      // iteratively collapse anything that starts and stops within the same
      // time. The complexity of this algorithms is n^2, but assuming the
      // number of attendees of an event is relatively low, this should be
      // fine to calculate.
      slots.sort((a, b) => a.start - b.start);
      const slotsWithoutOverlap = [];
      if (slots.length) {
        let currentSlotStart = slots[0].start;
        slots.forEach(slot => {
          const combined = findNextCombinedSlot(slots, currentSlotStart) ?? slot;
          if (combined.start < currentSlotStart) {
            // This slot has already been combined with a former slot
            return;
          }
          slotsWithoutOverlap.push(combined);
          currentSlotStart = combined.end;
        });
      }
      console.debug('deduplicated slots', slots, slotsWithoutOverlap);
      const events = slotsWithoutOverlap.map(slot => {
        return {
          groupId: 'free-busy-blocked-for-all',
          start: slot.start.toISOString(),
          end: slot.end.toISOString(),
          resourceIds,
          display: 'background',
          allDay: false,
          backgroundColor: 'var(--color-text-maxcontrast)',
          borderColor: 'var(--color-text-maxcontrast)'
        };
      });
      console.debug('freeBusyBlockedForAllEventSource', slots, events);
      successCallback(events);
    }
  };
}

/**
 * @param {object} slots the slots
 * @param {Date} start the start
 */
function findNextCombinedSlot(slots, start) {
  const slot = slots.filter(slot => slot.start >= start).reduce((combined, slot) => {
    if (slot.start < combined.start) {
      // This slot starts too early
      return combined;
    }
    if (slot.end <= combined.end) {
      // This slots starts and ends within the combined one
      return combined;
    }
    if (slot.start > combined.end) {
      // This slots starts after the the combined one
      return combined;
    }

    // The slot is extended
    return {
      start: combined.start,
      end: slot.end
    };
  }, {
    start,
    end: start
  });
  if (slot.start === slot.end) {
    // Empty -> no slot
    return undefined;
  }
  return slot;
}

/***/ }),

/***/ "./src/fullcalendar/eventSources/freeBusyFakeBlockingEventSource.js":
/*!**************************************************************************!*\
  !*** ./src/fullcalendar/eventSources/freeBusyFakeBlockingEventSource.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Returns an event source for free-busy
 *
 * @param {string} id Identification for this source
 * @param {string[]} resources List of resources
 * @param {Date} eventStart Start of the event being edited / created
 * @param {Date} eventEnd End of the event being edited / created
 * @return {{startEditable: boolean, resourceEditable: boolean, editable: boolean, id: string, durationEditable: boolean, events: events}}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(id, resources, eventStart, eventEnd) {
  const resourceIds = resources.map(resource => resource.id);
  return {
    id: 'free-busy-fake-blocking-event-source-' + id,
    editable: false,
    startEditable: false,
    durationEditable: false,
    resourceEditable: false,
    events: async (_ref, successCallback, failureCallback) => {
      let {
        start,
        end,
        timeZone
      } = _ref;
      if (resources.length === 1) {
        successCallback([{
          id: Math.random().toString(36).substring(7),
          start: eventStart.toISOString(),
          end: eventEnd.toISOString(),
          allDay: false,
          display: 'background',
          classNames: ['blocking-event-free-busy', 'blocking-event-free-busy--first-row', 'blocking-event-free-busy--last-row'],
          resourceId: resourceIds[0]
        }]);
      } else if (resources.length === 2) {
        successCallback([{
          id: Math.random().toString(36).substring(7),
          start: eventStart.toISOString(),
          end: eventEnd.toISOString(),
          allDay: false,
          display: 'background',
          classNames: ['blocking-event-free-busy', 'blocking-event-free-busy--first-row'],
          resourceId: resourceIds[0]
        }, {
          id: Math.random().toString(36).substring(7),
          start: eventStart.toISOString(),
          end: eventEnd.toISOString(),
          allDay: false,
          display: 'background',
          classNames: ['blocking-event-free-busy', 'blocking-event-free-busy--last-row'],
          resourceId: resourceIds[1]
        }]);
      } else {
        successCallback([{
          id: Math.random().toString(36).substring(7),
          start: eventStart.toISOString(),
          end: eventEnd.toISOString(),
          allDay: false,
          display: 'background',
          classNames: ['blocking-event-free-busy', 'blocking-event-free-busy--first-row'],
          resourceIds: resourceIds.slice(0, 1)
        }, {
          id: Math.random().toString(36).substring(7),
          start: eventStart.toISOString(),
          end: eventEnd.toISOString(),
          allDay: false,
          display: 'background',
          classNames: ['blocking-event-free-busy'],
          resourceIds: resourceIds.slice(1, -1)
        }, {
          id: Math.random().toString(36).substring(7),
          start: eventStart.toISOString(),
          end: eventEnd.toISOString(),
          allDay: false,
          display: 'background',
          classNames: ['blocking-event-free-busy', 'blocking-event-free-busy--last-row'],
          resourceIds: resourceIds.slice(-1)
        }]);
      }
    }
  };
}

/***/ }),

/***/ "./src/fullcalendar/eventSources/freeBusyResourceEventSource.js":
/*!**********************************************************************!*\
  !*** ./src/fullcalendar/eventSources/freeBusyResourceEventSource.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _services_freeBusySlotService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/freeBusySlotService.js */ "./src/services/freeBusySlotService.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Returns an event source for free-busy
 *
 * @param {string} id Identification for this source
 * @param {AttendeeProperty} organizer The organizer of the event
 * @param {AttendeeProperty[]} attendees Array of the event's attendees
 * @return {{startEditable: boolean, resourceEditable: boolean, editable: boolean, id: string, durationEditable: boolean, events: events}}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(id, organizer, attendees) {
  return {
    id: 'free-busy-event-source-' + id,
    editable: false,
    startEditable: false,
    durationEditable: false,
    resourceEditable: false,
    events: async (_ref, successCallback, failureCallback) => {
      let {
        start,
        end,
        timeZone
      } = _ref;
      const result = await (0,_services_freeBusySlotService_js__WEBPACK_IMPORTED_MODULE_1__.getBusySlots)(organizer, attendees, start, end, timeZone);
      if (result.error) {
        failureCallback(result.error);
      } else {
        successCallback(result.events);
      }
    }
  };
}

/***/ }),

/***/ "./src/fullcalendar/eventSources/freeBusyResourceEventSourceFunction.js":
/*!******************************************************************************!*\
  !*** ./src/fullcalendar/eventSources/freeBusyResourceEventSourceFunction.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_freebusy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/freebusy.js */ "./src/utils/freebusy.js");
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




/**
 * Converts the response
 *
 * @param {string} uri URI of the resource
 * @param {string} calendarData Calendar-data containing free-busy data
 * @param {boolean} success Whether or not the free-busy request was successful
 * @param {DateTimeValue} start The start of the fetched time-range
 * @param {DateTimeValue} end The end of the fetched time-range
 * @param {Timezone} timezone Timezone of user viewing data
 * @return {object[]}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(uri, calendarData, success, start, end, timezone) {
  if (!success) {
    return [{
      id: Math.random().toString(36).substring(7),
      start: start.getInTimezone(timezone).jsDate.toISOString(),
      end: end.getInTimezone(timezone).jsDate.toISOString(),
      resourceId: uri,
      display: 'background',
      allDay: false,
      backgroundColor: (0,_utils_freebusy_js__WEBPACK_IMPORTED_MODULE_0__.getColorForFBType)('UNKNOWN'),
      borderColor: (0,_utils_freebusy_js__WEBPACK_IMPORTED_MODULE_0__.getColorForFBType)('UNKNOWN')
    }];
  }
  const parserManager = (0,_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_1__.getParserManager)();
  const parser = parserManager.getParserForFileType('text/calendar');
  parser.parse(calendarData);

  // TODO: fix me upstream, parser only exports VEVENT, VJOURNAL and VTODO at the moment
  const calendarComponent = parser._calendarComponent;
  const freeBusyComponent = calendarComponent.getFirstComponent('VFREEBUSY');
  if (!freeBusyComponent) {
    return [];
  }
  const events = [];
  for (const freeBusyProperty of freeBusyComponent.getPropertyIterator('FREEBUSY')) {
    /** @member {FreeBusyProperty} freeBusyProperty */
    events.push({
      id: Math.random().toString(36).substring(7),
      start: freeBusyProperty.getFirstValue().start.getInTimezone(timezone).jsDate.toISOString(),
      end: freeBusyProperty.getFirstValue().end.getInTimezone(timezone).jsDate.toISOString(),
      resourceId: uri,
      display: 'background',
      classNames: ['free-busy-block', 'free-busy-' + freeBusyProperty.type.toLowerCase()],
      backgroundColor: (0,_utils_freebusy_js__WEBPACK_IMPORTED_MODULE_0__.getColorForFBType)(freeBusyProperty.type)
    });
  }
  return events;
}

/***/ }),

/***/ "./src/fullcalendar/localization/dateFormattingConfig.js":
/*!***************************************************************!*\
  !*** ./src/fullcalendar/localization/dateFormattingConfig.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDateFormattingConfig: () => (/* binding */ getDateFormattingConfig)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Returns the date-formatting config for FullCalendar
 *
 * @return {object}
 */
const getDateFormattingConfig = () => {
  const defaultConfig = {
    dayHeaderFormat: 'ddd l',
    titleFormat: 'll',
    slotLabelFormat: 'LT'
  };
  return {
    // Date formatting:
    eventTimeFormat: 'LT',
    views: {
      dayGridMonth: {
        ...defaultConfig,
        dayHeaderFormat: 'ddd'
      },
      multiMonthYear: {
        ...defaultConfig,
        dayHeaderFormat: 'ddd',
        multiMonthMaxColumns: 4
      },
      timeGridDay: defaultConfig,
      timeGridWeek: defaultConfig,
      listMonth: {
        // Changes for the List View
        listDayFormat: 'LL, dddd',
        listDaySideFormat: false
      },
      resourceTimelineDay: defaultConfig
    }
  };
};


/***/ }),

/***/ "./src/fullcalendar/localization/localeProvider.js":
/*!*********************************************************!*\
  !*** ./src/fullcalendar/localization/localeProvider.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFullCalendarLocale: () => (/* binding */ getFullCalendarLocale)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 * Returns localization settings for the FullCalender package.
 *
 * @see https://fullcalendar.io/docs
 * @return {object}
 */
const getFullCalendarLocale = () => {
  return {
    firstDay: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.getFirstDay)(),
    locale: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.getLanguage)(),
    // TRANSLATORS W is an abbreviation for Week
    weekText: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'W'),
    allDayText: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'All day'),
    moreLinkText: n => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', '%n more', {}, n),
    noEventsText: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'No events to display')
  };
};


/***/ }),

/***/ "./src/fullcalendar/localization/momentPlugin.js":
/*!*******************************************************!*\
  !*** ./src/fullcalendar/localization/momentPlugin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ momentPluginFactory)
/* harmony export */ });
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.mjs");
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _store_settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/settings.js */ "./src/store/settings.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




// TODO: We don't really need to use a factory pattern here anymore. It was introduced to fix a
//       reactivity bug with Vuex. Since we use Pinia now and don't need to pass the store all the
//       way down it can be refactored/reverted.
//       Ref commit 207b7a13655ae7f1e01ee0e7d40b5109a37c6174

/**
 * Creates a new moment object using the locale from the given Pinia store
 *
 * @param {object[]} data FullCalendar object containing the date etc.
 * @param {number[]} data.array Input data to initialize moment
 * @return {moment.Moment}
 */
const momentFactory = _ref => {
  let {
    array
  } = _ref;
  const settingsStore = (0,_store_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return (0,_nextcloud_moment__WEBPACK_IMPORTED_MODULE_0__["default"])(array).locale(settingsStore.momentLocale);
};

/**
 * Construct a cmdFormatter that can be used to construct a FullCalendar plugin
 *
 * @return {function(string, string):string} cmdFormatter function
 */
const cmdFormatterFactory = () => (cmdStr, arg) => {
  // With our specific DateFormattingConfig,
  // cmdStr will always be a moment parsable string
  // like LT, etc.
  //
  // No need to manually parse it.
  //
  // This is not the case, if you use the standard FC
  // formatting config.

  // If arg.end is defined, this is a time-range
  if (arg.end) {
    const start = momentFactory(arg.start).format(cmdStr);
    const end = momentFactory(arg.end).format(cmdStr);
    if (start === end) {
      return start;
    }
    return start + arg.defaultSeparator + end;
  }
  return momentFactory(arg.start).format(cmdStr);
};

/**
 * Construct a moment plugin for FullCalendar using the locale from the given Vuex store
 *
 * @return {object} The FullCalendar plugin
 */
function momentPluginFactory() {
  return (0,_fullcalendar_core__WEBPACK_IMPORTED_MODULE_2__.createPlugin)({
    name: '@nextcloud/moment-plugin',
    cmdFormatter: cmdFormatterFactory()
  });
}

/***/ }),

/***/ "./src/fullcalendar/timezones/vtimezoneNamedTimezoneImpl.js":
/*!******************************************************************!*\
  !*** ./src/fullcalendar/timezones/vtimezoneNamedTimezoneImpl.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _fullcalendar_core_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/core/internal */ "./node_modules/@fullcalendar/core/internal-common.js");
/* harmony import */ var _services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/timezoneDataProviderService.js */ "./src/services/timezoneDataProviderService.js");
/* harmony import */ var _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/logger.js */ "./src/utils/logger.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */





/**
 * Our own FullCalendar Timezone implementation based on the VTimezones we ship
 */
class VTimezoneNamedTimezone extends _fullcalendar_core_internal__WEBPACK_IMPORTED_MODULE_2__.by {
  /**
   * gets UTC offset for given date of this timezone
   *
   * @param {number[]} date an array that mirrors the parameters from new Date()
   * @return {number} offset in minutes
   */
  offsetForArray(_ref) {
    let [year, month, day, hour, minute, second] = _ref;
    let timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId(this.timeZoneName);
    if (!timezone) {
      timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId('UTC');
      _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error(`VTimezoneNamedTimezoneImpl: Timezone ${this.timeZoneName} not found, falling back to UTC.`);
    }
    // calendar-js works with natural month numbers,
    // not the javascript 0-based ones
    month += 1;
    return timezone.offsetForArray(year, month, day, hour, minute, second) / 60;
  }

  /**
   * returns parameters for Date object in this timezone based on given timestamp
   *
   * @param {number} ms Timestamp in milliseconds
   * @return {number[]}
   */
  timestampToArray(ms) {
    let timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId(this.timeZoneName);
    if (!timezone) {
      timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId('UTC');
      _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error(`VTimezoneNamedTimezoneImpl: Timezone ${this.timeZoneName} not found, falling back to UTC.`);
    }
    const timestampArray = timezone.timestampToArray(ms);

    // calendar-js works with natural month numbers,
    // not the javascript 0-based ones
    timestampArray[1]--;
    return timestampArray;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_fullcalendar_core__WEBPACK_IMPORTED_MODULE_3__.createPlugin)({
  name: '@nextcloud/v-timezone-named-timezone-plugin',
  namedTimeZonedImpl: VTimezoneNamedTimezone
}));

/***/ }),

/***/ "./src/models/alarm.js":
/*!*****************************!*\
  !*** ./src/models/alarm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultAlarmObject: () => (/* binding */ getDefaultAlarmObject),
/* harmony export */   mapAlarmComponentToAlarmObject: () => (/* binding */ mapAlarmComponentToAlarmObject)
/* harmony export */ });
/* harmony import */ var _utils_alarms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/alarms.js */ "./src/utils/alarms.js");
/* harmony import */ var _utils_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date.js */ "./src/utils/date.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Creates a complete alarm object based on given props
 *
 * @param {object} props The alarm properties already provided
 * @return {object}
 */
const getDefaultAlarmObject = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.assign({}, {
    // The calendar-js alarm component
    alarmComponent: null,
    // Type of alarm: DISPLAY, EMAIL, AUDIO
    type: null,
    // Whether or not the alarm is relative
    isRelative: false,
    // Date object of an absolute alarm (if it's absolute, it must be DATE-TIME)
    absoluteDate: null,
    // The time zone id of for absolute alarms
    absoluteTimezoneId: null,
    // Whether or not the relative alarm is before the event,
    relativeIsBefore: null,
    // Whether or not the alarm is relative to the event's start
    relativeIsRelatedToStart: null,
    // TIMED EVENTS:
    // Unit (seconds, minutes, hours, ...) if this alarm is inside a timed event
    relativeUnitTimed: null,
    // The amount of unit if this alarm is inside a timed event
    relativeAmountTimed: null,
    // ALL-DAY EVENTS:
    // Unit (seconds, minutes, hours, ...) if this alarm is inside an all-day event
    relativeUnitAllDay: null,
    // The amount of unit if this alarm is inside a all-day event
    relativeAmountAllDay: null,
    // The hours to display alarm for in an all-day event (e.g. 1 day before at 9:00 am)
    relativeHoursAllDay: null,
    // The minutes to display alarm for in an all-day event (e.g. 1 day before at 9:30 am)
    relativeMinutesAllDay: null,
    // The total amount of seconds for a relative alarm
    relativeTrigger: null
  }, props);
};

/**
 * Map an alarm component to our alarm object
 *
 * @param {AlarmComponent} alarmComponent The calendar-js alarm-component to turn into an alarm object
 * @return {object}
 */
const mapAlarmComponentToAlarmObject = alarmComponent => {
  if (alarmComponent.trigger.isRelative()) {
    const relativeIsBefore = alarmComponent.trigger.value.isNegative;
    const relativeIsRelatedToStart = alarmComponent.trigger.related === 'START';
    const {
      amount: relativeAmountTimed,
      unit: relativeUnitTimed
    } = (0,_utils_alarms_js__WEBPACK_IMPORTED_MODULE_0__.getAmountAndUnitForTimedEvents)(alarmComponent.trigger.value.totalSeconds);
    const {
      unit: relativeUnitAllDay,
      amount: relativeAmountAllDay,
      hours: relativeHoursAllDay,
      minutes: relativeMinutesAllDay
    } = (0,_utils_alarms_js__WEBPACK_IMPORTED_MODULE_0__.getAmountHoursMinutesAndUnitForAllDayEvents)(alarmComponent.trigger.value.totalSeconds);
    const relativeTrigger = alarmComponent.trigger.value.totalSeconds;
    return getDefaultAlarmObject({
      alarmComponent,
      type: alarmComponent.action,
      isRelative: alarmComponent.trigger.isRelative(),
      relativeIsBefore,
      relativeIsRelatedToStart,
      relativeUnitTimed,
      relativeAmountTimed,
      relativeUnitAllDay,
      relativeAmountAllDay,
      relativeHoursAllDay,
      relativeMinutesAllDay,
      relativeTrigger
    });
  } else {
    const absoluteDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_1__.getDateFromDateTimeValue)(alarmComponent.trigger.value);
    return getDefaultAlarmObject({
      alarmComponent,
      type: alarmComponent.action,
      isRelative: alarmComponent.trigger.isRelative(),
      absoluteDate,
      absoluteTimezoneId: alarmComponent.trigger.value.timezoneId
    });
  }
};


/***/ }),

/***/ "./src/models/attachment.js":
/*!**********************************!*\
  !*** ./src/models/attachment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultAttachmentObject: () => (/* binding */ getDefaultAttachmentObject),
/* harmony export */   mapAttachmentPropertyToAttchmentObject: () => (/* binding */ mapAttachmentPropertyToAttchmentObject)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Creates a complete attachment object based on given props
 *
 * @param {object} props The attachment properties already provided
 * @return {object}
 */
const getDefaultAttachmentObject = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.assign({}, {
    // The calendar-js attachment property
    attachmentProperty: null,
    // The file name of the attachment
    fileName: null,
    // The attachment mime type
    formatType: null,
    // The uri of the attachment
    uri: null,
    // The value from calendar object
    value: null,
    // Preview of file
    xNcHasPreview: null,
    // File id in NC
    xNcFileId: null
  }, props);
};

/**
 * Maps a calendar-js attachment property to our attachment object
 *
 * @param {attachmentProperty} attachmentProperty The calendar-js attachmentProperty to turn into a attachment object
 * @return {object}
 */
const mapAttachmentPropertyToAttchmentObject = attachmentProperty => {
  return getDefaultAttachmentObject({
    attachmentProperty,
    fileName: attachmentProperty.getParameterFirstValue('FILENAME'),
    formatType: attachmentProperty.formatType,
    uri: attachmentProperty.uri,
    value: attachmentProperty.value,
    xNcHasPreview: attachmentProperty.getParameterFirstValue('X-NC-HAS-PREVIEW') === 'true',
    xNcFileId: attachmentProperty.getParameterFirstValue('X-NC-FILE-ID')
  });
};


/***/ }),

/***/ "./src/models/attendee.js":
/*!********************************!*\
  !*** ./src/models/attendee.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultAttendeeObject: () => (/* binding */ getDefaultAttendeeObject),
/* harmony export */   mapAttendeePropertyToAttendeeObject: () => (/* binding */ mapAttendeePropertyToAttendeeObject),
/* harmony export */   mapPrincipalObjectToAttendeeObject: () => (/* binding */ mapPrincipalObjectToAttendeeObject)
/* harmony export */ });
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Creates a complete attendee object based on given props
 *
 * TODO:
 *  - we should eventually support delegatedFrom and delegatedTo
 *
 * @param {object} props The attendee properties already provided
 * @return {object}
 */
const getDefaultAttendeeObject = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.assign({}, {
    // The calendar-js attendee property
    attendeeProperty: null,
    // The display-name of the attendee
    commonName: null,
    // The calendar-user-type of the attendee
    calendarUserType: 'INDIVIDUAL',
    // The participation status of the attendee
    participationStatus: 'NEEDS-ACTION',
    // The role of the attendee
    role: 'REQ-PARTICIPANT',
    // The RSVP for the attendee
    rsvp: false,
    // The uri of the attendee
    uri: null,
    // Member address of the attendee
    member: null
  }, props);
};

/**
 * Maps a calendar-js attendee property to our attendee object
 *
 * @param {AttendeeProperty} attendeeProperty The calendar-js attendeeProperty to turn into a attendee object
 * @return {object}
 */
const mapAttendeePropertyToAttendeeObject = attendeeProperty => {
  return getDefaultAttendeeObject({
    attendeeProperty,
    commonName: attendeeProperty.commonName,
    calendarUserType: attendeeProperty.userType,
    participationStatus: attendeeProperty.participationStatus,
    role: attendeeProperty.role,
    rsvp: attendeeProperty.rsvp,
    uri: attendeeProperty.email,
    member: attendeeProperty.member
  });
};

/**
 * Maps a principal object to to our attendee object
 *
 * @param {object} principalObject An attendee object created by mapDavToPrincipal()
 * @param {boolean} isOrganizer Should it be an attendee or an organizer?
 * @return {AttendeeProperty}
 */
const mapPrincipalObjectToAttendeeObject = function (principalObject) {
  let isOrganizer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const attendeeProperty = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.AttendeeProperty.fromNameAndEMail(principalObject.displayname, principalObject.emailAddress, isOrganizer);
  attendeeProperty.userType = principalObject.calendarUserType;
  return mapAttendeePropertyToAttendeeObject(attendeeProperty);
};


/***/ }),

/***/ "./src/models/calendar.js":
/*!********************************!*\
  !*** ./src/models/calendar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultCalendarObject: () => (/* binding */ getDefaultCalendarObject),
/* harmony export */   mapDavCollectionToCalendar: () => (/* binding */ mapDavCollectionToCalendar)
/* harmony export */ });
/* harmony import */ var _utils_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color.js */ "./src/utils/color.js");
/* harmony import */ var _calendarShare_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendarShare.js */ "./src/models/calendarShare.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Creates a complete calendar-object based on given props
 *
 * @param {object} props Calendar-props already provided
 * @return {object}
 */
const getDefaultCalendarObject = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.assign({}, {
    // Id of the calendar
    id: '',
    // Visible display name
    displayName: '',
    // Color of the calendar
    color: (0,_utils_color_js__WEBPACK_IMPORTED_MODULE_0__.uidToHexColor)(''),
    // Whether or not the calendar is visible in the grid
    enabled: true,
    // Whether or not the calendar is loading events at the moment
    loading: false,
    // Whether this calendar supports VEvents
    supportsEvents: true,
    // Whether this calendar supports VJournals
    supportsJournals: false,
    // Whether this calendar supports VTodos
    supportsTasks: false,
    // The principal uri of the owner
    owner: '',
    // Timezone set for this calendar
    timezone: null,
    // List of shares
    shares: [],
    // Published url
    publishURL: null,
    // Internal CalDAV url of this calendar
    url: '',
    // Whether this calendar is read-only
    readOnly: false,
    // The order of this calendar in the calendar-list
    order: 0,
    // Whether or not the calendar is shared with me
    isSharedWithMe: false,
    // Whether or not the calendar can be shared by me
    canBeShared: false,
    // Whether or not the calendar can be published by me
    canBePublished: false,
    // Reference to cdav-lib object
    dav: false,
    // All calendar-objects from this calendar that have already been fetched
    calendarObjects: [],
    // Time-ranges that have already been fetched for this calendar
    fetchedTimeRanges: [],
    // Scheduling transparency
    transparency: 'opaque'
  }, props);
};

/**
 * Map a dav collection to our calendar object model
 *
 * @param {object} calendar The calendar object from the cdav library
 * @param {object=} currentUserPrincipal The principal model of the current user principal
 * @return {object}
 */
const mapDavCollectionToCalendar = (calendar, currentUserPrincipal) => {
  const id = btoa(calendar.url);
  const displayName = calendar.displayname || getCalendarUriFromUrl(calendar.url);

  // calendar.color can be set to anything on the server,
  // so make sure it's something that remotely looks like a color
  let color = (0,_utils_color_js__WEBPACK_IMPORTED_MODULE_0__.detectColor)(calendar.color);
  if (!color) {
    // As fallback if we don't know what color that is supposed to be
    color = (0,_utils_color_js__WEBPACK_IMPORTED_MODULE_0__.uidToHexColor)(displayName);
  }
  const supportsEvents = calendar.components.includes('VEVENT');
  const supportsJournals = calendar.components.includes('VJOURNAL');
  const supportsTasks = calendar.components.includes('VTODO');
  const owner = calendar.owner;
  const readOnly = !calendar.isWriteable();
  const canBeShared = calendar.isShareable();
  const canBePublished = calendar.isPublishable();
  const order = calendar.order || 0;
  const url = calendar.url;
  const publishURL = calendar.publishURL || null;
  const timezone = calendar.timezone || null;
  // If this property is not present on a calendar collection,
  // then the default value CALDAV:opaque MUST be assumed.
  // https://datatracker.ietf.org/doc/html/rfc6638#section-9.1
  const transparency = calendar.transparency || 'opaque';
  let isSharedWithMe = false;
  if (!currentUserPrincipal) {
    // If the user is not authenticated, the calendar
    // will always be marked as shared with them
    isSharedWithMe = true;
  } else {
    isSharedWithMe = owner !== currentUserPrincipal.url;
  }
  let enabled;
  if (!currentUserPrincipal) {
    // If the user is not authenticated,
    // always enable the calendar
    enabled = true;
  } else if (typeof calendar.enabled === 'boolean') {
    // If calendar-enabled is set, we will just take that
    enabled = calendar.enabled;
  } else {
    // If there is no calendar-enabled,
    // we will display the calendar by default and set enabled
    enabled = true;
    calendar.enabled = true;
  }
  const shares = [];
  if (!!currentUserPrincipal && Array.isArray(calendar.shares)) {
    for (const share of calendar.shares) {
      if (share.href === currentUserPrincipal.principalScheme) {
        continue;
      }
      shares.push((0,_calendarShare_js__WEBPACK_IMPORTED_MODULE_1__.mapDavShareeToCalendarShareObject)(share));
    }
  }
  return getDefaultCalendarObject({
    id,
    displayName,
    color,
    order,
    url,
    enabled,
    supportsEvents,
    supportsJournals,
    supportsTasks,
    isSharedWithMe,
    owner,
    readOnly,
    publishURL,
    canBeShared,
    canBePublished,
    shares,
    timezone,
    transparency,
    dav: calendar
  });
};

/**
 * Gets the calendar uri from the url
 *
 * @param {string} url The url to get calendar uri from
 * @return {string}
 */
function getCalendarUriFromUrl(url) {
  if (url.endsWith('/')) {
    url = url.substring(0, url.length - 1);
  }
  return url.substring(url.lastIndexOf('/') + 1);
}


/***/ }),

/***/ "./src/models/calendarObject.js":
/*!**************************************!*\
  !*** ./src/models/calendarObject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultCalendarObjectObject: () => (/* binding */ getDefaultCalendarObjectObject),
/* harmony export */   mapCDavObjectToCalendarObject: () => (/* binding */ mapCDavObjectToCalendarObject),
/* harmony export */   mapCalendarJsToCalendarObject: () => (/* binding */ mapCalendarJsToCalendarObject)
/* harmony export */ });
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts.js */ "./src/models/consts.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Creates a complete calendar-object-object based on given props
 *
 * @param {object} props Calendar-object-props already provided
 * @return {object}
 */
const getDefaultCalendarObjectObject = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.assign({}, {
    // Id of this calendar-object
    id: null,
    // Id of the associated calendar
    calendarId: null,
    // The cdav-library object storing the calendar-object
    dav: null,
    // The parsed calendar-js object
    calendarComponent: null,
    // The uid of the calendar-object
    uid: null,
    // The uri of the calendar-object
    uri: null,
    // The type of calendar-object
    objectType: null,
    // Whether or not the calendar-object is an event
    isEvent: false,
    // Whether or not the calendar-object is a journal
    isJournal: false,
    // Whether or not the calendar-object is a task
    isTodo: false,
    // Whether or not the calendar-object exists on the server
    existsOnServer: false
  }, props);
};

/**
 * Maps a calendar-object from c-dav to our calendar-object object
 *
 * @param {VObject} dav The c-dav VObject
 * @param {string} calendarId The calendar-id this object is associated with
 * @return {object}
 */
const mapCDavObjectToCalendarObject = (dav, calendarId) => {
  const parserManager = (0,_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.getParserManager)();
  const parser = parserManager.getParserForFileType('text/calendar');

  // This should not be the case, but let's just be on the safe side
  if (typeof dav.data !== 'string' || dav.data.trim() === '') {
    throw new Error('Empty calendar object');
  }
  parser.parse(dav.data);
  const calendarComponentIterator = parser.getItemIterator();
  const calendarComponent = calendarComponentIterator.next().value;
  if (!calendarComponent) {
    throw new Error('Empty calendar object');
  }
  const vObjectIterator = calendarComponent.getVObjectIterator();
  const firstVObject = vObjectIterator.next().value;
  return getDefaultCalendarObjectObject({
    id: btoa(dav.url),
    calendarId,
    dav,
    calendarComponent,
    uid: firstVObject.uid,
    uri: dav.url,
    objectType: firstVObject.name,
    isEvent: firstVObject.name === _consts_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT_NAME_EVENT,
    isJournal: firstVObject.name === _consts_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT_NAME_JOURNAL,
    isTodo: firstVObject.name === _consts_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT_NAME_VTODO,
    existsOnServer: true
  });
};

/**
 * Maps a calendar-component from calendar-js to our calendar-object object
 *
 * @param {CalendarComponent} calendarComponent The calendarComponent to create the calendarObject from
 * @param {string=} calendarId The associated calendar if applicable
 * @return {object}
 */
const mapCalendarJsToCalendarObject = function (calendarComponent) {
  let calendarId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const vObjectIterator = calendarComponent.getVObjectIterator();
  const firstVObject = vObjectIterator.next().value;
  if (!firstVObject) {
    throw new Error('Calendar object without vobjects');
  }
  return getDefaultCalendarObjectObject({
    calendarId,
    calendarComponent,
    uid: firstVObject.uid,
    objectType: firstVObject.name,
    isEvent: firstVObject.name === _consts_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT_NAME_EVENT,
    isJournal: firstVObject.name === _consts_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT_NAME_JOURNAL,
    isTodo: firstVObject.name === _consts_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT_NAME_VTODO
  });
};


/***/ }),

/***/ "./src/models/calendarShare.js":
/*!*************************************!*\
  !*** ./src/models/calendarShare.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultCalendarShareObject: () => (/* binding */ getDefaultCalendarShareObject),
/* harmony export */   mapDavShareeToCalendarShareObject: () => (/* binding */ mapDavShareeToCalendarShareObject)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/models/consts.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 * Creates a complete calendar-share-object based on given props
 *
 * @param {object} props Calendar-share-props already provided
 * @return {object}
 */
const getDefaultCalendarShareObject = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.assign({}, {
    // Unique identifier
    id: null,
    // Displayname of the sharee
    displayName: null,
    // Whether or not share is writable
    writeable: false,
    // Whether or not sharee is an individual user
    isUser: false,
    // Whether or not sharee is an admin-defined group
    isGroup: false,
    // Whether or not sharee is a user-defined group
    isCircle: false,
    // Uri necessary for deleting / updating share
    uri: null
  }, props);
};

/**
 * Map a dav collection to our calendar object model
 *
 * @param {object} sharee The sharee object from the cdav library shares
 * @return {object}
 */
const mapDavShareeToCalendarShareObject = sharee => {
  // sharee.href might contain non-latin characters, so let's uri encode it first
  const id = btoa(encodeURI(sharee.href));
  let displayName;
  if (sharee['common-name'] && sharee['common-name'].trim() !== '') {
    displayName = sharee['common-name'];
  } else if (sharee.href.startsWith(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_GROUP)) {
    displayName = decodeURIComponent(sharee.href.slice(28));
  } else if (sharee.href.startsWith(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_USER)) {
    displayName = decodeURIComponent(sharee.href.slice(27));
  } else {
    displayName = sharee.href;
  }
  const writeable = sharee.access[0].endsWith('read-write');
  const isUser = sharee.href.startsWith(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_USER);
  const isGroup = sharee.href.startsWith(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_GROUP);
  const isCircle = sharee.href.startsWith(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_CIRCLE);
  const uri = sharee.href;
  return getDefaultCalendarShareObject({
    id,
    displayName,
    writeable,
    isUser,
    isGroup,
    isCircle,
    uri
  });
};


/***/ }),

/***/ "./src/models/consts.js":
/*!******************************!*\
  !*** ./src/models/consts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CALDAV_BIRTHDAY_CALENDAR: () => (/* binding */ CALDAV_BIRTHDAY_CALENDAR),
/* harmony export */   COMPONENT_NAME_EVENT: () => (/* binding */ COMPONENT_NAME_EVENT),
/* harmony export */   COMPONENT_NAME_JOURNAL: () => (/* binding */ COMPONENT_NAME_JOURNAL),
/* harmony export */   COMPONENT_NAME_VTODO: () => (/* binding */ COMPONENT_NAME_VTODO),
/* harmony export */   IMPORT_STAGE_AWAITING_USER_SELECT: () => (/* binding */ IMPORT_STAGE_AWAITING_USER_SELECT),
/* harmony export */   IMPORT_STAGE_DEFAULT: () => (/* binding */ IMPORT_STAGE_DEFAULT),
/* harmony export */   IMPORT_STAGE_IMPORTING: () => (/* binding */ IMPORT_STAGE_IMPORTING),
/* harmony export */   IMPORT_STAGE_PROCESSING: () => (/* binding */ IMPORT_STAGE_PROCESSING),
/* harmony export */   ITIP_MESSAGE_ADD: () => (/* binding */ ITIP_MESSAGE_ADD),
/* harmony export */   ITIP_MESSAGE_CANCEL: () => (/* binding */ ITIP_MESSAGE_CANCEL),
/* harmony export */   ITIP_MESSAGE_COUNTER: () => (/* binding */ ITIP_MESSAGE_COUNTER),
/* harmony export */   ITIP_MESSAGE_DECLINECOUNTER: () => (/* binding */ ITIP_MESSAGE_DECLINECOUNTER),
/* harmony export */   ITIP_MESSAGE_PUBLISH: () => (/* binding */ ITIP_MESSAGE_PUBLISH),
/* harmony export */   ITIP_MESSAGE_REFRESH: () => (/* binding */ ITIP_MESSAGE_REFRESH),
/* harmony export */   ITIP_MESSAGE_REPLY: () => (/* binding */ ITIP_MESSAGE_REPLY),
/* harmony export */   ITIP_MESSAGE_REQUEST: () => (/* binding */ ITIP_MESSAGE_REQUEST),
/* harmony export */   PRINCIPAL_PREFIX_CALENDAR_RESOURCE: () => (/* binding */ PRINCIPAL_PREFIX_CALENDAR_RESOURCE),
/* harmony export */   PRINCIPAL_PREFIX_CALENDAR_ROOM: () => (/* binding */ PRINCIPAL_PREFIX_CALENDAR_ROOM),
/* harmony export */   PRINCIPAL_PREFIX_CIRCLE: () => (/* binding */ PRINCIPAL_PREFIX_CIRCLE),
/* harmony export */   PRINCIPAL_PREFIX_GROUP: () => (/* binding */ PRINCIPAL_PREFIX_GROUP),
/* harmony export */   PRINCIPAL_PREFIX_USER: () => (/* binding */ PRINCIPAL_PREFIX_USER)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
const COMPONENT_NAME_EVENT = 'VEVENT';
const COMPONENT_NAME_JOURNAL = 'VJOURNAL';
const COMPONENT_NAME_VTODO = 'VTODO';
const ITIP_MESSAGE_ADD = 'ADD';
const ITIP_MESSAGE_CANCEL = 'CANCEL';
const ITIP_MESSAGE_COUNTER = 'COUNTER';
const ITIP_MESSAGE_DECLINECOUNTER = 'DECLINECOUNTER';
const ITIP_MESSAGE_PUBLISH = 'PUBLISH';
const ITIP_MESSAGE_REFRESH = 'REFRESH';
const ITIP_MESSAGE_REPLY = 'REPLY';
const ITIP_MESSAGE_REQUEST = 'REQUEST';
const PRINCIPAL_PREFIX_USER = 'principal:principals/users/';
const PRINCIPAL_PREFIX_GROUP = 'principal:principals/groups/';
const PRINCIPAL_PREFIX_CIRCLE = 'principal:principals/circles/';
const PRINCIPAL_PREFIX_CALENDAR_RESOURCE = 'principal:principals/calendar-resources/';
const PRINCIPAL_PREFIX_CALENDAR_ROOM = 'principal:principals/calendar-rooms/';
const CALDAV_BIRTHDAY_CALENDAR = 'contact_birthdays';
const IMPORT_STAGE_DEFAULT = 'default';
const IMPORT_STAGE_IMPORTING = 'importing';
const IMPORT_STAGE_AWAITING_USER_SELECT = 'awaitingUserSelect';
const IMPORT_STAGE_PROCESSING = 'processing';


/***/ }),

/***/ "./src/models/event.js":
/*!*****************************!*\
  !*** ./src/models/event.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyCalendarObjectInstanceIntoEventComponent: () => (/* binding */ copyCalendarObjectInstanceIntoEventComponent),
/* harmony export */   getDefaultEventObject: () => (/* binding */ getDefaultEventObject),
/* harmony export */   mapEventComponentToEventObject: () => (/* binding */ mapEventComponentToEventObject)
/* harmony export */ });
/* harmony import */ var _utils_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/date.js */ "./src/utils/date.js");
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _utils_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/color.js */ "./src/utils/color.js");
/* harmony import */ var _alarm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alarm.js */ "./src/models/alarm.js");
/* harmony import */ var _attendee_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attendee.js */ "./src/models/attendee.js");
/* harmony import */ var _attachment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attachment.js */ "./src/models/attachment.js");
/* harmony import */ var _recurrenceRule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recurrenceRule.js */ "./src/models/recurrenceRule.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */









/**
 * Creates a complete calendar-object-instance-object based on given props
 *
 * @param {object} props The props already provided
 * @return {object}
 */
const getDefaultEventObject = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.assign({}, {
    // The real event-component coming from calendar-js
    eventComponent: null,
    // Title of the event
    title: null,
    // Start date of the event
    startDate: null,
    // Timezone of the start date
    startTimezoneId: null,
    // End date of the event
    endDate: null,
    // Timezone of the end date
    endTimezoneId: null,
    // Indicator whether or not event is all-day
    isAllDay: false,
    // Whether or not the user is allowed to toggle the all-day checkbox
    canModifyAllDay: true,
    // Location that the event takes places in
    location: null,
    // description of the event
    description: null,
    // Access class of the event (PUBLIC, PRIVATE, CONFIDENTIAL)
    accessClass: null,
    // Status of the event (CONFIRMED, TENTATIVE, CANCELLED)
    status: null,
    // Whether or not to block this event in Free-Busy reports (TRANSPARENT, OPAQUE)
    timeTransparency: null,
    // The recurrence rule of this event. We only support one recurrence-rule
    recurrenceRule: (0,_recurrenceRule_js__WEBPACK_IMPORTED_MODULE_6__.getDefaultRecurrenceRuleObject)(),
    // Whether or not this event has multiple recurrence-rules
    hasMultipleRRules: false,
    // Whether or not this is the master item
    isMasterItem: false,
    // Whether or not this is a recurrence-exception
    isRecurrenceException: false,
    // Whether or not the applied modifications require to update this and all future
    forceThisAndAllFuture: false,
    // Whether or not it's possible to create a recurrence-exception for this event
    canCreateRecurrenceException: false,
    // Attendees of this event
    attendees: [],
    // Organizer of the event
    organizer: null,
    // Alarm of the event
    alarms: [],
    // Custom color of the event
    customColor: null,
    // Categories
    categories: [],
    // Attachments of this event
    attachments: []
  }, props);
};

/**
 *
 * @param {EventComponent} eventComponent The calendar-js eventComponent
 * @return {object}
 */
const mapEventComponentToEventObject = eventComponent => {
  const eventObject = getDefaultEventObject({
    eventComponent,
    title: eventComponent.title,
    isAllDay: eventComponent.isAllDay(),
    canModifyAllDay: eventComponent.canModifyAllDay(),
    location: eventComponent.location,
    description: eventComponent.description,
    accessClass: eventComponent.accessClass,
    status: eventComponent.status,
    timeTransparency: eventComponent.timeTransparency,
    categories: Array.from(eventComponent.getCategoryIterator()),
    isMasterItem: eventComponent.isMasterItem(),
    isRecurrenceException: eventComponent.isRecurrenceException(),
    canCreateRecurrenceException: eventComponent.canCreateRecurrenceExceptions()
  });

  /**
   * According to RFC5545, DTEND is exclusive. This is rather intuitive for timed-events
   * but rather unintuitive for all-day events
   *
   * That's why, when an event is all-day from 2019-10-03 to 2019-10-04,
   * it will be displayed as 2019-10-03 to 2019-10-03 in the editor.
   */
  eventObject.startDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_0__.getDateFromDateTimeValue)(eventComponent.startDate);
  eventObject.startTimezoneId = eventComponent.startDate.timezoneId;
  if (eventComponent.isAllDay()) {
    const endDate = eventComponent.endDate.clone();
    endDate.addDuration(_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_1__.DurationValue.fromSeconds(-1 * 60 * 60 * 24));
    eventObject.endDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_0__.getDateFromDateTimeValue)(endDate);
  } else {
    eventObject.endDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_0__.getDateFromDateTimeValue)(eventComponent.endDate);
  }
  eventObject.endTimezoneId = eventComponent.endDate.timezoneId;

  /**
   * Extract organizer if there is any
   */
  if (eventComponent.organizer) {
    const organizerProperty = eventComponent.getFirstProperty('ORGANIZER');
    eventObject.organizer = {
      commonName: organizerProperty.commonName,
      uri: organizerProperty.email,
      attendeeProperty: organizerProperty
    };
  }

  /**
   * Extract alarms
   */
  for (const alarm of eventComponent.getAlarmIterator()) {
    eventObject.alarms.push((0,_alarm_js__WEBPACK_IMPORTED_MODULE_3__.mapAlarmComponentToAlarmObject)(alarm));
  }

  /**
   * Extract attendees
   */
  for (const attendee of eventComponent.getAttendeeIterator()) {
    eventObject.attendees.push((0,_attendee_js__WEBPACK_IMPORTED_MODULE_4__.mapAttendeePropertyToAttendeeObject)(attendee));
  }

  /**
   * Extract attachments
   */

  for (const attachment of eventComponent.getPropertyIterator('ATTACH')) {
    eventObject.attachments.push((0,_attachment_js__WEBPACK_IMPORTED_MODULE_5__.mapAttachmentPropertyToAttchmentObject)(attachment));
  }

  /**
   * Extract recurrence-rule
   */
  const recurrenceRuleIterator = eventComponent.getPropertyIterator('RRULE');
  const recurrenceRuleFirstIteration = recurrenceRuleIterator.next();
  const firstRecurrenceRule = recurrenceRuleFirstIteration.value;
  if (firstRecurrenceRule) {
    eventObject.recurrenceRule = (0,_recurrenceRule_js__WEBPACK_IMPORTED_MODULE_6__.mapRecurrenceRuleValueToRecurrenceRuleObject)(firstRecurrenceRule.getFirstValue(), eventComponent.startDate);
    eventObject.hasMultipleRRules = !recurrenceRuleIterator.next().done;
  }

  /**
   * Convert the CSS 3 color name to a hex color
   */
  if (eventComponent.hasProperty('COLOR')) {
    const hexColor = (0,_utils_color_js__WEBPACK_IMPORTED_MODULE_2__.getHexForColorName)(eventComponent.getFirstPropertyFirstValue('COLOR'));
    if (hexColor !== null) {
      eventObject.customColor = hexColor;
    }
  }
  return eventObject;
};

/**
 * Copy data from a calendar-object-instance into a calendar-js event-component
 *
 * @param {object} eventObject The calendar-object-instance object
 * @param {EventComponent} eventComponent The calendar-js EventComponent object
 * @param {boolean} resetAttendeeStatus Whether or not to reset the attendee status
 */
const copyCalendarObjectInstanceIntoEventComponent = function (eventObject, eventComponent) {
  let resetAttendeeStatus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  eventComponent.title = eventObject.title;
  eventComponent.location = eventObject.location;
  eventComponent.description = eventObject.description;
  eventComponent.accessClass = eventObject.accessClass;
  eventComponent.status = eventObject.status;
  eventComponent.timeTransparency = eventObject.timeTransparency;
  for (const category of eventObject.categories) {
    eventComponent.addCategory(category);
  }
  if (eventObject.organizer) {
    eventComponent.setOrganizerFromNameAndEMail(eventObject.organizer.commonName, eventObject.organizer.uri);
  }
  for (const alarm of eventObject.alarms) {
    if (alarm.isRelative) {
      const duration = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_1__.DurationValue.fromSeconds(alarm.relativeTrigger);
      eventComponent.addRelativeAlarm(alarm.type, duration, alarm.relativeIsRelatedToStart);
    } else {
      const date = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_1__.DateTimeValue.fromJSDate(alarm.absoluteDate);
      eventComponent.addAbsoluteAlarm(alarm.type, date);
    }
  }
  for (const attendee of eventObject.attendees) {
    if (resetAttendeeStatus) {
      attendee.attendeeProperty.participationStatus = 'NEEDS-ACTION';
      attendee.attendeeProperty.rsvp = true;
    }
    eventComponent.addProperty(attendee.attendeeProperty);
  }
  for (const rule of eventObject.eventComponent.getPropertyIterator('RRULE')) {
    eventComponent.addProperty(rule);
  }
  if (eventObject.customColor) {
    eventComponent.color = (0,_utils_color_js__WEBPACK_IMPORTED_MODULE_2__.getClosestCSS3ColorNameForHex)(eventObject.customColor);
  }
};


/***/ }),

/***/ "./src/models/principal.js":
/*!*********************************!*\
  !*** ./src/models/principal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultPrincipalObject: () => (/* binding */ getDefaultPrincipalObject),
/* harmony export */   mapDavToPrincipal: () => (/* binding */ mapDavToPrincipal)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/models/consts.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Creates a complete principal-object based on given props
 *
 * @param {object} props Principal-props already provided
 * @return {any}
 */
const getDefaultPrincipalObject = props => Object.assign({}, {
  // Id of the principal
  id: null,
  // Calendar-user-type. This can be INDIVIDUAL, GROUP, RESOURCE or ROOM
  calendarUserType: 'INDIVIDUAL',
  // E-Mail address of principal used for scheduling
  emailAddress: null,
  // The principals display-name
  // TODO: this should be renamed to displayName
  displayname: null,
  // principalScheme
  principalScheme: null,
  // The internal user-id in case it is of type INDIVIDUAL and a user
  // TODO: userId is deprecrated, use principalId instead
  userId: null,
  // url to the DAV-principal-resource
  url: null,
  // The cdav-library object
  dav: null,
  // Whether or not this principal represents a circle
  isCircle: false,
  // Whether or not this principal represents a user
  isUser: false,
  // Whether or not this principal represents a group
  isGroup: false,
  // Whether or not this principal represents a calendar-resource
  isCalendarResource: false,
  // Whether or not this principal represents a calendar-room
  isCalendarRoom: false,
  // The id of the principal without prefix. e.g. userId / groupId / etc.
  principalId: null,
  // The url of the default calendar for invitations
  scheduleDefaultCalendarUrl: null
}, props);

/**
 * converts a dav principal into a vuex object
 *
 * @param {object} dav cdav-library Principal object
 * @return {object}
 */
const mapDavToPrincipal = dav => {
  const id = btoa(encodeURI(dav.url));
  const calendarUserType = dav.calendarUserType;
  const principalScheme = dav.principalScheme;
  const emailAddress = dav.email;
  const displayname = dav.displayname;
  const scheduleDefaultCalendarUrl = dav.scheduleDefaultCalendarUrl;
  const isUser = dav.principalScheme.startsWith(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_USER);
  const isGroup = dav.principalScheme.startsWith(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_GROUP);
  const isCircle = dav.principalScheme.startsWith(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_CIRCLE);
  const isCalendarResource = dav.principalScheme.startsWith(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_CALENDAR_RESOURCE);
  const isCalendarRoom = dav.principalScheme.startsWith(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_CALENDAR_ROOM);
  let principalId = null;
  if (isUser) {
    principalId = dav.principalScheme.substring(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_USER.length);
  } else if (isGroup) {
    principalId = dav.principalScheme.substring(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_GROUP.length);
  } else if (isCircle) {
    principalId = dav.principalScheme.substring(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_CIRCLE.length);
  } else if (isCalendarResource) {
    principalId = dav.principalScheme.substring(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_CALENDAR_RESOURCE.length);
  } else if (isCalendarRoom) {
    principalId = dav.principalScheme.substring(_consts_js__WEBPACK_IMPORTED_MODULE_0__.PRINCIPAL_PREFIX_CALENDAR_ROOM.length);
  }
  const url = dav.principalUrl;
  const userId = dav.userId;
  return getDefaultPrincipalObject({
    id,
    calendarUserType,
    principalScheme,
    emailAddress,
    displayname,
    url,
    dav,
    isUser,
    isGroup,
    isCircle,
    isCalendarResource,
    isCalendarRoom,
    principalId,
    userId,
    scheduleDefaultCalendarUrl
  });
};


/***/ }),

/***/ "./src/models/recurrenceRule.js":
/*!**************************************!*\
  !*** ./src/models/recurrenceRule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultRecurrenceRuleObject: () => (/* binding */ getDefaultRecurrenceRuleObject),
/* harmony export */   mapRecurrenceRuleValueToRecurrenceRuleObject: () => (/* binding */ mapRecurrenceRuleValueToRecurrenceRuleObject)
/* harmony export */ });
/* harmony import */ var _utils_recurrence_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/recurrence.js */ "./src/utils/recurrence.js");
/* harmony import */ var _utils_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date.js */ "./src/utils/date.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Creates a complete recurrence-rule-object based on given props
 *
 * @param {object} props Recurrence-rule-object-props already provided
 * @return {object}
 */
const getDefaultRecurrenceRuleObject = function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.assign({}, {
    // The calendar-js recurrence-rule value
    recurrenceRuleValue: null,
    // The frequency of the recurrence-rule (DAILY, WEEKLY, ...)
    frequency: 'NONE',
    // The interval of the recurrence-rule, must be a positive integer
    interval: 1,
    // Positive integer if recurrence-rule limited by count, null otherwise
    count: null,
    // Date if recurrence-rule limited by date, null otherwise
    // We do not store a timezone here, since we only care about the date part
    until: null,
    // List of byDay components to limit/expand the recurrence-rule
    byDay: [],
    // List of byMonth components to limit/expand the recurrence-rule
    byMonth: [],
    // List of byMonthDay components to limit/expand the recurrence-rule
    byMonthDay: [],
    // A position to limit the recurrence-rule (e.g. -1 for last Friday)
    bySetPosition: null,
    // Whether or not the rule is not supported for editing
    isUnsupported: false
  }, props);
};

/**
 * Maps a calendar-js recurrence-rule-value to an recurrence-rule-object
 *
 * @param {RecurValue} recurrenceRuleValue The calendar-js recurrence rule value
 * @param {DateTimeValue} baseDate The base-date used to fill unset values
 * @return {object}
 */
const mapRecurrenceRuleValueToRecurrenceRuleObject = (recurrenceRuleValue, baseDate) => {
  switch (recurrenceRuleValue.frequency) {
    case 'DAILY':
      return mapDailyRuleValueToRecurrenceRuleObject(recurrenceRuleValue);
    case 'WEEKLY':
      return mapWeeklyRuleValueToRecurrenceRuleObject(recurrenceRuleValue, baseDate);
    case 'MONTHLY':
      return mapMonthlyRuleValueToRecurrenceRuleObject(recurrenceRuleValue, baseDate);
    case 'YEARLY':
      return mapYearlyRuleValueToRecurrenceRuleObject(recurrenceRuleValue, baseDate);
    default:
      // SECONDLY, MINUTELY, HOURLY
      return getDefaultRecurrenceRuleObjectForRecurrenceValue(recurrenceRuleValue, {
        isUnsupported: true
      });
  }
};
const FORBIDDEN_BY_PARTS_DAILY = ['BYSECOND', 'BYMINUTE', 'BYHOUR', 'BYDAY', 'BYMONTHDAY', 'BYYEARDAY', 'BYWEEKNO', 'BYMONTH', 'BYSETPOS'];
const FORBIDDEN_BY_PARTS_WEEKLY = ['BYSECOND', 'BYMINUTE', 'BYHOUR', 'BYMONTHDAY', 'BYYEARDAY', 'BYWEEKNO', 'BYMONTH', 'BYSETPOS'];
const FORBIDDEN_BY_PARTS_MONTHLY = ['BYSECOND', 'BYMINUTE', 'BYHOUR', 'BYYEARDAY', 'BYWEEKNO', 'BYMONTH'];
const FORBIDDEN_BY_PARTS_YEARLY = ['BYSECOND', 'BYMINUTE', 'BYHOUR', 'BYMONTHDAY', 'BYYEARDAY', 'BYWEEKNO'];
const SUPPORTED_BY_DAY_WEEKLY = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

/**
 * Get all numbers between start and end as strings
 *
 * @param {number} start Lower end of range
 * @param {number} end Upper end of range
 * @return {string[]}
 */
const getRangeAsStrings = (start, end) => {
  return Array.apply(null, Array(end - start + 1)).map((_, n) => n + start).map(s => s.toString());
};
const SUPPORTED_BY_MONTHDAY_MONTHLY = getRangeAsStrings(1, 31);
const SUPPORTED_BY_MONTH_YEARLY = getRangeAsStrings(1, 12);

/**
 * Maps a daily calendar-js recurrence-rule-value to an recurrence-rule-object
 *
 * @param {RecurValue} recurrenceRuleValue The calendar-js recurrence rule value
 * @return {object}
 */
const mapDailyRuleValueToRecurrenceRuleObject = recurrenceRuleValue => {
  /**
   * We only support DAILY rules without any by-parts in the editor.
   * If the recurrence-rule contains any by-parts, mark it as unsupported.
   */
  const isUnsupported = containsRecurrenceComponent(recurrenceRuleValue, FORBIDDEN_BY_PARTS_DAILY);
  return getDefaultRecurrenceRuleObjectForRecurrenceValue(recurrenceRuleValue, {
    isUnsupported
  });
};

/**
 * Maps a weekly calendar-js recurrence-rule-value to an recurrence-rule-object
 *
 * @param {RecurValue} recurrenceRuleValue The calendar-js recurrence rule value
 * @param {DateTimeValue} baseDate The base-date used to fill unset values
 * @return {object}
 */
const mapWeeklyRuleValueToRecurrenceRuleObject = (recurrenceRuleValue, baseDate) => {
  /**
   * For WEEKLY recurrences, our editor only allows BYDAY
   *
   * As defined in RFC5545 3.3.10. Recurrence Rule:
   * > Each BYDAY value can also be preceded by a positive (+n) or
   * > negative (-n) integer.  If present, this indicates the nth
   * > occurrence of a specific day within the MONTHLY or YEARLY "RRULE".
   *
   * RFC 5545 specifies other components, which can be used along WEEKLY.
   * Among them are BYMONTH and BYSETPOS. We don't support those.
   */
  const containsUnsupportedByParts = containsRecurrenceComponent(recurrenceRuleValue, FORBIDDEN_BY_PARTS_WEEKLY);
  const containsInvalidByDayPart = recurrenceRuleValue.getComponent('BYDAY').some(weekday => !SUPPORTED_BY_DAY_WEEKLY.includes(weekday));
  const isUnsupported = containsUnsupportedByParts || containsInvalidByDayPart;
  const byDay = recurrenceRuleValue.getComponent('BYDAY').filter(weekday => SUPPORTED_BY_DAY_WEEKLY.includes(weekday));

  // If the BYDAY is empty, add the day that the event occurs in
  // E.g. if the event is on a Wednesday, automatically set BYDAY:WE
  if (byDay.length === 0) {
    byDay.push((0,_utils_recurrence_js__WEBPACK_IMPORTED_MODULE_0__.getWeekDayFromDate)(baseDate.jsDate));
  }
  return getDefaultRecurrenceRuleObjectForRecurrenceValue(recurrenceRuleValue, {
    byDay,
    isUnsupported
  });
};

/**
 * Maps a monthly calendar-js recurrence-rule-value to an recurrence-rule-object
 *
 * @param {RecurValue} recurrenceRuleValue The calendar-js recurrence rule value
 * @param {DateTimeValue} baseDate The base-date used to fill unset values
 * @return {object}
 */
const mapMonthlyRuleValueToRecurrenceRuleObject = (recurrenceRuleValue, baseDate) => {
  /**
   * We only supports BYMONTHDAY, BYDAY, BYSETPOS in order to expand the monthly rule.
   * It supports either BYMONTHDAY or the combination of BYDAY and BYSETPOS. They have to be used exclusively
   * and cannot be combined.
   *
   * We do not support other BY-parts like BYMONTH
   *
   * For monthly recurrence-rules, BYDAY components are allowed to be preceded by positive or negative integers.
   * The Nextcloud-editor supports at most one BYDAY component with an integer.
   * If it's presented with such a BYDAY component, it will internally be converted to BYDAY without integer and BYSETPOS.
   * e.g.
   * BYDAY=3WE => BYDAY=WE,BYSETPOS=3
   *
   * BYSETPOS is limited to -2, -1, 1, 2, 3, 4, 5
   * Other values are not supported
   *
   * BYDAY is limited to "MO", "TU", "WE", "TH", "FR", "SA", "SU",
   * "MO,TU,WE,TH,FR,SA,SU", "MO,TU,WE,TH,FR", "SA,SU"
   *
   * BYMONTHDAY is limited to "1", "2", ..., "31"
   */
  let isUnsupported = containsRecurrenceComponent(recurrenceRuleValue, FORBIDDEN_BY_PARTS_MONTHLY);
  let byDay = [];
  let bySetPosition = null;
  let byMonthDay = [];

  // This handles the first case, where we have a BYMONTHDAY rule
  if (containsRecurrenceComponent(recurrenceRuleValue, ['BYMONTHDAY'])) {
    // verify there is no BYDAY or BYSETPOS at the same time
    if (containsRecurrenceComponent(recurrenceRuleValue, ['BYDAY', 'BYSETPOS'])) {
      isUnsupported = true;
    }
    const containsInvalidByMonthDay = recurrenceRuleValue.getComponent('BYMONTHDAY').some(monthDay => !SUPPORTED_BY_MONTHDAY_MONTHLY.includes(monthDay.toString()));
    isUnsupported = isUnsupported || containsInvalidByMonthDay;
    byMonthDay = recurrenceRuleValue.getComponent('BYMONTHDAY').filter(monthDay => SUPPORTED_BY_MONTHDAY_MONTHLY.includes(monthDay.toString())).map(monthDay => monthDay.toString());

    // This handles cases where we have both BYDAY and BYSETPOS
  } else if (containsRecurrenceComponent(recurrenceRuleValue, ['BYDAY']) && containsRecurrenceComponent(recurrenceRuleValue, ['BYSETPOS'])) {
    if (isAllowedByDay(recurrenceRuleValue.getComponent('BYDAY'))) {
      byDay = recurrenceRuleValue.getComponent('BYDAY');
    } else {
      byDay = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
      isUnsupported = true;
    }
    const setPositionArray = recurrenceRuleValue.getComponent('BYSETPOS');
    if (setPositionArray.length === 1 && isAllowedBySetPos(setPositionArray[0])) {
      bySetPosition = setPositionArray[0];
    } else {
      bySetPosition = 1;
      isUnsupported = true;
    }

    // This handles cases where we only have a BYDAY
  } else if (containsRecurrenceComponent(recurrenceRuleValue, ['BYDAY'])) {
    const byDayArray = recurrenceRuleValue.getComponent('BYDAY');
    if (byDayArray.length > 1) {
      byMonthDay.push(baseDate.day.toString());
      isUnsupported = true;
    } else {
      const firstElement = byDayArray[0];
      const match = /^(-?\d)([A-Z]{2})$/.exec(firstElement);
      if (match) {
        const matchedBySetPosition = match[1];
        const matchedByDay = match[2];
        if (isAllowedBySetPos(matchedBySetPosition)) {
          byDay = [matchedByDay];
          bySetPosition = parseInt(matchedBySetPosition, 10);
        } else {
          byDay = [matchedByDay];
          bySetPosition = 1;
          isUnsupported = true;
        }
      } else {
        byMonthDay.push(baseDate.day.toString());
        isUnsupported = true;
      }
    }

    // This is a fallback where we just default BYMONTHDAY to the start date of the event
  } else {
    byMonthDay.push(baseDate.day.toString());
  }
  return getDefaultRecurrenceRuleObjectForRecurrenceValue(recurrenceRuleValue, {
    byDay,
    bySetPosition,
    byMonthDay,
    isUnsupported
  });
};

/**
 * Maps a yearly calendar-js recurrence-rule-value to an recurrence-rule-object
 *
 * @param {RecurValue} recurrenceRuleValue The calendar-js recurrence rule value
 * @param {DateTimeValue} baseDate The base-date used to fill unset values
 * @return {object}
 */
const mapYearlyRuleValueToRecurrenceRuleObject = (recurrenceRuleValue, baseDate) => {
  /**
   * We only supports BYMONTH, BYDAY, BYSETPOS in order to expand the yearly rule.
   * It supports a combination of them.
   *
   * We do not support other BY-parts.
   *
   * For yearly recurrence-rules, BYDAY components are allowed to be preceded by positive or negative integers.
   * The Nextcloud-editor supports at most one BYDAY component with an integer.
   * If it's presented with such a BYDAY component, it will internally be converted to BYDAY without integer and BYSETPOS.
   * e.g.
   * BYDAY=3WE => BYDAY=WE,BYSETPOS=3
   *
   * BYSETPOS is limited to -2, -1, 1, 2, 3, 4, 5
   * Other values are not supported
   *
   * BYDAY is limited to "MO", "TU", "WE", "TH", "FR", "SA", "SU",
   * "MO,TU,WE,TH,FR,SA,SU", "MO,TU,WE,TH,FR", "SA,SU"
   */
  let isUnsupported = containsRecurrenceComponent(recurrenceRuleValue, FORBIDDEN_BY_PARTS_YEARLY);
  let byDay = [];
  let bySetPosition = null;
  let byMonth = [];
  if (containsRecurrenceComponent(recurrenceRuleValue, ['BYMONTH'])) {
    const containsInvalidByMonthDay = recurrenceRuleValue.getComponent('BYMONTH').some(month => !SUPPORTED_BY_MONTH_YEARLY.includes(month.toString()));
    isUnsupported = isUnsupported || containsInvalidByMonthDay;
    byMonth = recurrenceRuleValue.getComponent('BYMONTH').filter(monthDay => SUPPORTED_BY_MONTH_YEARLY.includes(monthDay.toString())).map(month => month.toString());
  } else {
    byMonth.push(baseDate.month.toString());
  }
  if (containsRecurrenceComponent(recurrenceRuleValue, ['BYDAY']) && containsRecurrenceComponent(recurrenceRuleValue, ['BYSETPOS'])) {
    if (isAllowedByDay(recurrenceRuleValue.getComponent('BYDAY'))) {
      byDay = recurrenceRuleValue.getComponent('BYDAY');
    } else {
      byDay = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
      isUnsupported = true;
    }
    const setPositionArray = recurrenceRuleValue.getComponent('BYSETPOS');
    if (setPositionArray.length === 1 && isAllowedBySetPos(setPositionArray[0])) {
      bySetPosition = setPositionArray[0];
    } else {
      bySetPosition = 1;
      isUnsupported = true;
    }
  } else if (containsRecurrenceComponent(recurrenceRuleValue, ['BYDAY'])) {
    const byDayArray = recurrenceRuleValue.getComponent('BYDAY');
    if (byDayArray.length > 1) {
      isUnsupported = true;
    } else {
      const firstElement = byDayArray[0];
      const match = /^(-?\d)([A-Z]{2})$/.exec(firstElement);
      if (match) {
        const matchedBySetPosition = match[1];
        const matchedByDay = match[2];
        if (isAllowedBySetPos(matchedBySetPosition)) {
          byDay = [matchedByDay];
          bySetPosition = parseInt(matchedBySetPosition, 10);
        } else {
          byDay = [matchedByDay];
          bySetPosition = 1;
          isUnsupported = true;
        }
      } else {
        isUnsupported = true;
      }
    }
  }
  return getDefaultRecurrenceRuleObjectForRecurrenceValue(recurrenceRuleValue, {
    byDay,
    bySetPosition,
    byMonth,
    isUnsupported
  });
};

/**
 * Checks if the given parameter is a supported BYDAY value
 *
 * @param {string[]} byDay The byDay component to check
 * @return {boolean}
 */
const isAllowedByDay = byDay => {
  return ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU', 'FR,MO,SA,SU,TH,TU,WE', 'FR,MO,TH,TU,WE', 'SA,SU'].includes(byDay.slice().sort().join(','));
};

/**
 * Checks if the given parameter is a supported BYSETPOS value
 *
 * @param {string} bySetPos The bySetPos component to check
 * @return {boolean}
 */
const isAllowedBySetPos = bySetPos => {
  return ['-2', '-1', '1', '2', '3', '4', '5'].includes(bySetPos.toString());
};

/**
 * Checks if the recurrence-rule contains any of the given components
 *
 * @param {RecurValue} recurrenceRule The recurrence-rule value to check for the given components
 * @param {string[]} components List of components to check for
 * @return {boolean}
 */
const containsRecurrenceComponent = (recurrenceRule, components) => {
  for (const component of components) {
    const componentValue = recurrenceRule.getComponent(component);
    if (componentValue.length > 0) {
      return true;
    }
  }
  return false;
};

/**
 * Returns a full recurrence-rule-object with default values derived from recurrenceRuleValue
 * and additional props
 *
 * @param {RecurValue} recurrenceRuleValue The recurrence-rule value to get default values from
 * @param {object} props The properties to provide on top of default one
 * @return {object}
 */
const getDefaultRecurrenceRuleObjectForRecurrenceValue = (recurrenceRuleValue, props) => {
  const isUnsupported = recurrenceRuleValue.count !== null && recurrenceRuleValue.until !== null;
  let isUnsupportedProps = {};
  if (isUnsupported) {
    isUnsupportedProps = {
      isUnsupported
    };
  }
  return getDefaultRecurrenceRuleObject(Object.assign({}, {
    recurrenceRuleValue,
    frequency: recurrenceRuleValue.frequency,
    interval: parseInt(recurrenceRuleValue.interval, 10) || 1,
    count: recurrenceRuleValue.count,
    until: recurrenceRuleValue.until ? (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_1__.getDateFromDateTimeValue)(recurrenceRuleValue.until) : null
  }, props, isUnsupportedProps));
};


/***/ }),

/***/ "./src/models/rfcProps.js":
/*!********************************!*\
  !*** ./src/models/rfcProps.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRFCProperties: () => (/* binding */ getRFCProperties)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _defaults_defaultCategories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaults/defaultCategories.js */ "./src/defaults/defaultCategories.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Gets all supported RFC properties
 *
 * @return {{color: {readableName: *, icon: string, multiple: boolean, info: *}, timeTransparency: {readableName: *, defaultValue: string, icon: string, multiple: boolean, options: *[], info: *}, description: {readableName: *, icon: string, placeholder: *, defaultNumberOfRows: number}, location: {readableName: *, icon: string, placeholder: *}, categories: {readableName: *, icon: string, multiple: boolean, options: *, tagPlaceholder: *, placeholder: *, info: *}, accessClass: {readableName: *, defaultValue: string, icon: string, options: *[], multiple: boolean, info: *}, status: {readableName: *, defaultValue: string, icon: string, options: *[], multiple: boolean, info: *}}}
 */
const getRFCProperties = () => {
  return {
    /**
     * https://tools.ietf.org/html/rfc5545#section-3.8.1.3
     */
    accessClass: {
      readableName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'When shared show'),
      icon: 'Eye',
      options: [{
        value: 'PUBLIC',
        label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'When shared show full event')
      }, {
        value: 'CONFIDENTIAL',
        label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'When shared show only busy')
      }, {
        value: 'PRIVATE',
        label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'When shared hide this event')
      }],
      multiple: false,
      info: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'The visibility of this event in shared calendars.'),
      defaultValue: 'PUBLIC'
    },
    /**
     * https://tools.ietf.org/html/rfc5545#section-3.8.1.7
     */
    location: {
      readableName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Location'),
      placeholder: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Add a location'),
      icon: 'MapMarker'
    },
    /**
     * https://tools.ietf.org/html/rfc5545#section-3.8.1.5
     */
    description: {
      readableName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Description'),
      placeholder: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Add a description\n' + '\n' + '- What is this meeting about\n' + '- Agenda items\n' + '- Anything participants need to prepare'),
      icon: 'TextBoxOutline',
      defaultNumberOfRows: 2
    },
    /**
     * https://tools.ietf.org/html/rfc5545#section-3.8.1.11
     */
    status: {
      readableName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Status'),
      icon: 'Check',
      options: [{
        value: 'CONFIRMED',
        label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Confirmed')
      }, {
        value: 'TENTATIVE',
        label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Tentative')
      }, {
        value: 'CANCELLED',
        label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Canceled')
      }],
      multiple: false,
      info: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Confirmation about the overall status of the event.'),
      defaultValue: 'CONFIRMED'
    },
    /**
     * https://tools.ietf.org/html/rfc5545#section-3.8.2.7
     */
    timeTransparency: {
      readableName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Show as'),
      icon: 'Briefcase',
      multiple: false,
      info: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Take this event into account when calculating free-busy information.'),
      options: [{
        value: 'TRANSPARENT',
        label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Free')
      }, {
        value: 'OPAQUE',
        label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Busy')
      }],
      defaultValue: 'TRANSPARENT'
    },
    /**
     * https://tools.ietf.org/html/rfc5545#section-3.8.1.2
     */
    categories: {
      readableName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Categories'),
      icon: 'Tag',
      multiple: true,
      info: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Categories help you to structure and organize your events.'),
      placeholder: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Search or add categories'),
      tagPlaceholder: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Add this as a new category'),
      options: (0,_defaults_defaultCategories_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultCategories)()
    },
    /**
     * https://tools.ietf.org/html/rfc7986#section-5.9
     */
    color: {
      readableName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Custom color'),
      icon: 'EyedropperVariant',
      multiple: false,
      info: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('calendar', 'Special color of this event. Overrides the calendar-color.')
    }
  };
};


/***/ }),

/***/ "./src/services/attachmentService.js":
/*!*******************************************!*\
  !*** ./src/services/attachmentService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFolder: () => (/* binding */ createFolder),
/* harmony export */   getFileInfo: () => (/* binding */ getFileInfo),
/* harmony export */   shareFile: () => (/* binding */ shareFile),
/* harmony export */   shareFileWith: () => (/* binding */ shareFileWith),
/* harmony export */   uploadLocalAttachment: () => (/* binding */ uploadLocalAttachment)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var webdav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webdav */ "./node_modules/webdav/dist/web/index.js");
/* harmony import */ var _utils_propfindErrorParse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/propfindErrorParse.js */ "./src/utils/propfindErrorParse.js");
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */








/**
 * Makes a share link for a given file or directory.
 *
 * @param {string} path The file path from the user's root directory. e.g. `/myfile.txt`
 * @return {string} url share link
 */
const shareFile = async function (path) {
  try {
    const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/', 2) + 'shares', {
      shareType: OC.Share.SHARE_TYPE_LINK,
      path
    });
    return res.data.ocs.data;
  } catch (error) {
    if (error?.response?.data?.ocs?.meta?.message) {
      console.error(`Error while sharing file: ${error.response.data.ocs.meta.message}`);
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(error.response.data.ocs.meta.message);
      throw error;
    } else {
      console.error('Error while sharing file: Unknown error');
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('calendar', 'Error while sharing file'));
      throw error;
    }
  }
};

/**
 * Share file with a user with permissions
 *
 * @param path
 * @param sharedWith
 * @param permissions
 * @return {Promise<[{path: string, permissions, scope: string, name: string, backend: string, type: string},{path: string, permissions: *, scope: string, name: string, backend: string, type: string}]>}
 */
const shareFileWith = async function (path, sharedWith) {
  let permissions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 17;
  try {
    const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/', 2);
    const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${url}shares`, {
      password: null,
      shareType: OC.Share.SHARE_TYPE_USER,
      // WITH USERS,
      permissions,
      // 14 - edit, 17 - view
      path,
      shareWith: sharedWith
    });
    return res.data.ocs.data;
  } catch (error) {
    if (error?.response?.data?.ocs?.meta?.message) {
      console.error(`Error while sharing file with user: ${error.response.data.ocs.meta.message}`);
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(error.response.data.ocs.meta.message);
      throw error;
    } else {
      console.error('Error while sharing file with user: Unknown error');
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('calendar', 'Error while sharing file with user'));
      throw error;
    }
  }
};
const createFolder = async function (folderName, userId) {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)(`dav/files/${userId}/${folderName}`);
  try {
    await (0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: 'MKCOL',
      url
    });
  } catch (e) {
    if (e?.response?.status !== 405) {
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('calendar', 'Error creating a folder {folder}', {
        folder: folderName
      }));
      // Maybe the actual upload succeeds -> keep going
      return folderName;
    }

    // Folder already exists
    if (folderName !== '/') {
      folderName = await findFirstOwnedFolder(folderName, userId);
    }
  }
  return folderName;
};
const findFirstOwnedFolder = async function (path, userId) {
  const infoXml = await getFileInfo(path, userId);
  const info = await (0,webdav__WEBPACK_IMPORTED_MODULE_4__.parseXML)(infoXml);
  const mountType = info?.multistatus?.response[0]?.propstat?.prop?.['mount-type'];
  if (mountType !== 'shared') {
    return path;
  }
  const hierarchy = path.split('/');
  hierarchy.pop();
  if (hierarchy.length === 1) {
    return '/';
  }
  return findFirstOwnedFolder(hierarchy.join('/'), userId);
};
const uploadLocalAttachment = async function (folder, files, dav, componentAttachments) {
  const attachments = [];
  const promises = [];
  files.forEach(file => {
    // temp fix, until we decide where to save the attachments
    if (componentAttachments.map(attachment => attachment.fileName.split('/').pop()).indexOf(file.name) !== -1) {
      // TODO may be show user confirmation dialog to create a file named Existing_File_(2) ?
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('calendar', 'Attachment {fileName} already exists!', {
        fileName: file.name
      }));
    } else {
      const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)(`dav/files/${dav.userId}/${folder}/${file.name}`);
      const res = _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(url, file).then(resp => {
        const data = {
          fileName: file.name,
          formatType: file.type,
          uri: url,
          value: url,
          path: `/${file.name}`
        };
        if (resp.status === 204 || resp.status === 201) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showSuccess)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('calendar', 'Attachment {fileName} added!', {
            fileName: file.name
          }));
          attachments.push(data);
        }
      }).catch(async exception => {
        if (exception.response) {
          const message = await (0,_utils_propfindErrorParse_js__WEBPACK_IMPORTED_MODULE_5__.parseUploadError)(exception);
          if (message) {
            (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(message);
          } else {
            (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('calendar', 'An error occurred during uploading file {fileName}', {
              fileName: file.name
            }));
          }
        }
      });
      promises.push(res);
    }
  });
  await Promise.all(promises);
  return attachments;
};

// TODO is shared or not @share-types@
const getFileInfo = async function (path, userId) {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)(`dav/files/${userId}/${path}`);
  const res = await (0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: 'PROPFIND',
    url,
    data: `<?xml version="1.0"?>
			<d:propfind
			xmlns:d="DAV:"
			xmlns:oc="http://owncloud.org/ns"
			xmlns:nc="http://nextcloud.org/ns">
				<d:prop>
					<d:getcontenttype />
					<oc:size />
					<oc:fileid />
					<oc:share-types />
					<nc:has-preview />
					<nc:mount-type />
				</d:prop>
			</d:propfind>`
  }).catch(() => {
    (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('calendar', 'An error occurred during getting file information'));
  });
  return res.data;
};


/***/ }),

/***/ "./src/services/caldavService.js":
/*!***************************************!*\
  !*** ./src/services/caldavService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   advancedPrincipalPropertySearch: () => (/* binding */ advancedPrincipalPropertySearch),
/* harmony export */   createCalendar: () => (/* binding */ createCalendar),
/* harmony export */   createSubscription: () => (/* binding */ createSubscription),
/* harmony export */   enableBirthdayCalendar: () => (/* binding */ enableBirthdayCalendar),
/* harmony export */   findAll: () => (/* binding */ findAll),
/* harmony export */   findAllCalendars: () => (/* binding */ findAllCalendars),
/* harmony export */   findAllDeletedCalendars: () => (/* binding */ findAllDeletedCalendars),
/* harmony export */   findAllSubscriptions: () => (/* binding */ findAllSubscriptions),
/* harmony export */   findPrincipalByUrl: () => (/* binding */ findPrincipalByUrl),
/* harmony export */   findPrincipalsInCollection: () => (/* binding */ findPrincipalsInCollection),
/* harmony export */   findPublicCalendarsByTokens: () => (/* binding */ findPublicCalendarsByTokens),
/* harmony export */   findSchedulingInbox: () => (/* binding */ findSchedulingInbox),
/* harmony export */   findSchedulingOutbox: () => (/* binding */ findSchedulingOutbox),
/* harmony export */   getBirthdayCalendar: () => (/* binding */ getBirthdayCalendar),
/* harmony export */   getCurrentUserPrincipal: () => (/* binding */ getCurrentUserPrincipal),
/* harmony export */   initializeClientForPublicView: () => (/* binding */ initializeClientForPublicView),
/* harmony export */   initializeClientForUserView: () => (/* binding */ initializeClientForUserView),
/* harmony export */   principalPropertySearchByDisplaynameOrEmail: () => (/* binding */ principalPropertySearchByDisplaynameOrEmail)
/* harmony export */ });
/* harmony import */ var _nextcloud_cdav_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/cdav-library */ "./node_modules/@nextcloud/cdav-library/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _models_consts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/consts.js */ "./src/models/consts.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




const clients = {};
const getClientKey = headers => JSON.stringify(headers);
const getClient = function () {
  let headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const clientKey = getClientKey(headers);
  if (clients[clientKey]) {
    return clients[clientKey];
  }
  clients[clientKey] = new _nextcloud_cdav_library__WEBPACK_IMPORTED_MODULE_0__["default"]({
    rootUrl: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)('dav')
  }, () => {
    const mergedHeaders = {
      'X-Requested-With': 'XMLHttpRequest',
      requesttoken: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getRequestToken)(),
      'X-NC-CalDAV-Webcal-Caching': 'On',
      ...headers
    };
    const xhr = new XMLHttpRequest();
    const oldOpen = xhr.open;

    // override open() method to add headers
    xhr.open = function () {
      const result = oldOpen.apply(this, arguments);
      for (const name in mergedHeaders) {
        xhr.setRequestHeader(name, mergedHeaders[name]);
      }
      return result;
    };
    OC.registerXHRForErrorProcessing(xhr); // eslint-disable-line no-undef
    return xhr;
  });
  return clients[clientKey];
};

/**
 * Initializes the client for use in the user-view
 */
const initializeClientForUserView = async () => {
  await getClient().connect({
    enableCalDAV: true
  });
};

/**
 * Initializes the client for use in the public/embed-view
 */
const initializeClientForPublicView = async () => {
  await getClient()._createPublicCalendarHome();
};

/**
 * Fetch all calendars from the server
 *
 * @param {object} headers
 * @return {Promise<CalendarHome>}
 */
const getCalendarHome = headers => getClient(headers).calendarHomes[0];

/**
 * Fetch all collections in the calendar home from the server
 *
 * @return {Promise<Collection[]>}
 */
const findAll = () => {
  return getCalendarHome().findAllCalDAVCollectionsGrouped();
};

/**
 * Fetch all calendars in the calendar home from the server
 *
 * @return {Promise<Calendar[]>}
 */
const findAllCalendars = () => {
  return getCalendarHome().findAllCalendars();
};

/**
 * Fetch all subscriptions in the calendar home from the server
 */
const findAllSubscriptions = async () => {
  const headers = {
    'X-NC-CalDAV-Webcal-Caching': 'Off'
  };

  // Ensure the client is initialized once
  await getClient(headers).connect({
    enableCalDAV: true
  });
  return getCalendarHome(headers).findAllSubscriptions();
};

/**
 * Fetch all deleted calendars from the server
 *
 * @return {Promise<Calendar[]>}
 */
const findAllDeletedCalendars = () => {
  return getCalendarHome().findAllDeletedCalendars();
};

/**
 * Fetch public calendars by their token
 *
 * @param {string[]} tokens List of tokens
 * @return {Promise<Calendar[]>}
 */
const findPublicCalendarsByTokens = async tokens => {
  const findPromises = [];
  for (const token of tokens) {
    const promise = getClient().publicCalendarHome.find(token).catch(() => null); // Catch outdated tokens

    findPromises.push(promise);
  }
  const calendars = await Promise.all(findPromises);
  return calendars.filter(calendar => calendar !== null);
};

/**
 * Fetches all scheduling inboxes
 *
 * Nitpick detail: Technically, we shouldn't be querying all scheduling inboxes
 * in the calendar-home and just take the first one, but rather query the
 * "CALDAV:schedule-inbox-URL" property on the principal URL and take that one.
 * However, it doesn't make any difference for the Nextcloud CalDAV server
 * and saves us extraneous requests here.
 *
 * https://tools.ietf.org/html/rfc6638#section-2.2.1
 *
 * @return {Promise<ScheduleInbox[]>}
 */
const findSchedulingInbox = async () => {
  const inboxes = await getCalendarHome().findAllScheduleInboxes();
  return inboxes[0];
};

/**
 * Fetches all scheduling outboxes
 *
 * Nitpick detail: Technically, we shouldn't be querying all scheduling outboxes
 * in the calendar-home and just take the first one, but rather query the
 * "CALDAV:schedule-outbox-URL" property on the principal URL and take that one.
 * However, it doesn't make any difference for the Nextcloud CalDAV server
 * and saves us extraneous requests here.
 *
 * https://tools.ietf.org/html/rfc6638#section-2.1.1
 *
 * @return {Promise<ScheduleOutbox>}
 */
const findSchedulingOutbox = async () => {
  const outboxes = await getCalendarHome().findAllScheduleOutboxes();
  return outboxes[0];
};

/**
 * Creates a calendar
 *
 * @param {string} displayName Visible name
 * @param {string} color Color
 * @param {string[]} components Supported component set
 * @param {number} order Order of calendar in list
 * @param {string} timezoneIcs ICS representation of timezone
 * @return {Promise<Calendar>}
 */
const createCalendar = async (displayName, color, components, order, timezoneIcs) => {
  return getCalendarHome().createCalendarCollection(displayName, color, components, order, timezoneIcs);
};

/**
 * Creates a subscription
 *
 * This function does not return a subscription, but a cached calendar
 *
 * @param {string} displayName Visible name
 * @param {string} color Color
 * @param {string} source Link to WebCAL Source
 * @param {number} order Order of calendar in list
 * @return {Promise<Calendar>}
 */
const createSubscription = async (displayName, color, source, order) => {
  return getCalendarHome().createSubscribedCollection(displayName, color, source, order);
};

/**
 * Enables the birthday calendar
 *
 * @return {Promise<Calendar>}
 */
const enableBirthdayCalendar = async () => {
  await getCalendarHome().enableBirthdayCalendar();
  return getBirthdayCalendar();
};

/**
 * Gets the birthday calendar
 *
 * @return {Promise<Calendar>}
 */
const getBirthdayCalendar = async () => {
  return getCalendarHome().find(_models_consts_js__WEBPACK_IMPORTED_MODULE_3__.CALDAV_BIRTHDAY_CALENDAR);
};

/**
 * Returns the Current User Principal
 *
 * @return {Principal}
 */
const getCurrentUserPrincipal = () => {
  return getClient().currentUserPrincipal;
};

/**
 * Finds calendar principals by displayname
 *
 * @param {string} term The search-term
 * @return {Promise<void>}
 */
const principalPropertySearchByDisplaynameOrEmail = async term => {
  return getClient().principalPropertySearchByDisplaynameOrEmail(term);
};

/**
 * Performs a principal property search based on multiple advanced filters
 *
 * @param {object} query The destructuring query object
 * @param {string=} query.displayName The display name to search for
 * @param {number=} query.capacity The minimum required seating capacity
 * @param {string[]=} query.features The features to filter by
 * @param {string=} query.roomType The room type to filter by
 * @return {Promise<Principal[]>}
 */
const advancedPrincipalPropertySearch = async query => {
  return getClient().advancedPrincipalPropertySearch(query);
};

/**
 * Finds one principal by it's URL
 *
 * @param {string} url The principal-url
 * @return {Promise<Principal>}
 */
const findPrincipalByUrl = async url => {
  return getClient().findPrincipal(url);
};

/**
 * Finds all principals in a collection at the given URL
 *
 * @param {string} url The URL of the principal collection
 * @param {object} options Passed to cdav-library/Principal::getPropFindList()
 * @return {Promise<Principal[]>}
 */
const findPrincipalsInCollection = async function (url) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return getClient().findPrincipalsInCollection(url, options);
};


/***/ }),

/***/ "./src/services/circleService.js":
/*!***************************************!*\
  !*** ./src/services/circleService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circleGetMembers: () => (/* binding */ circleGetMembers),
/* harmony export */   circleSearchByName: () => (/* binding */ circleSearchByName)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Finds circles by displayname
 *
 * @param {string} query The search-term
 * @return {Promise<void>}
 */
const circleSearchByName = async query => {
  let results;
  try {
    results = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/') + 'sharees', {
      params: {
        format: 'json',
        search: query,
        perPage: 200,
        itemType: 'pringroucipals'
      }
    });
  } catch (error) {
    return [];
  }
  if (results.data.ocs.meta.status === 'failure') {
    return [];
  }
  let circles = [];
  if (Array.isArray(results.data.ocs.data.circles)) {
    circles = circles.concat(results.data.ocs.data.circles);
  }
  if (Array.isArray(results.data.ocs.data.exact.circles)) {
    circles = circles.concat(results.data.ocs.data.exact.circles);
  }
  if (circles.length === 0) {
    return [];
  }
  return circles.filter(circle => {
    return true;
  }).map(circle => ({
    displayname: circle.label,
    population: circle.value.circle.population,
    id: circle.value.circle.id,
    instance: circle.value.circle.owner.instance
  }));
};

/**
 * Get members of circle by id
 *
 * @param {string} circleId The circle id to query
 * @return {Promise<void>}
 */
const circleGetMembers = async circleId => {
  let results;
  try {
    results = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.linkTo)('calendar', 'index.php') + '/v1/circles/getmembers', {
      params: {
        format: 'json',
        circleId
      }
    });
  } catch (error) {
    console.debug(error);
    return [];
  }
  return results;
};


/***/ }),

/***/ "./src/services/freeBusySlotService.js":
/*!*********************************************!*\
  !*** ./src/services/freeBusySlotService.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBusySlots: () => (/* binding */ getBusySlots),
/* harmony export */   getFirstFreeSlot: () => (/* binding */ getFirstFreeSlot)
/* harmony export */ });
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _caldavService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caldavService.js */ "./src/services/caldavService.js");
/* harmony import */ var _fullcalendar_eventSources_freeBusyResourceEventSourceFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fullcalendar/eventSources/freeBusyResourceEventSourceFunction.js */ "./src/fullcalendar/eventSources/freeBusyResourceEventSourceFunction.js");
/* harmony import */ var _timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timezoneDataProviderService.js */ "./src/services/timezoneDataProviderService.js");
/* harmony import */ var _utils_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/logger.js */ "./src/utils/logger.js");
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */






const daysToSearch = 7;

/**
 * Get the first available slot for an event using freebusy API
 *
 * @param {Principal} organizer The organizer of the event
 * @param {AttendeeProperty[]} attendees Array of the event's attendees
 * @param {Date} start The start date and time of the event
 * @param {Date} end The end date and time of the event
 * @param timeZoneId
 * @return {Promise<>}
 */
async function getBusySlots(organizer, attendees, start, end, timeZoneId) {
  // We start searching a day earlier because if we don't availability events get cut off in weird ways
  const clonedStart = new Date(start.getTime());
  clonedStart.setDate(clonedStart.getDate() - 1);
  let timezoneObject = (0,_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_3__["default"])().getTimezoneForId(timeZoneId);
  if (!timezoneObject) {
    timezoneObject = (0,_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_3__["default"])().getTimezoneForId('UTC');
    _utils_logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].error(`FreeBusyEventSource: Timezone ${timeZoneId} not found, falling back to UTC.`);
  }
  const startDateTime = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.DateTimeValue.fromJSDate(clonedStart, true);
  const endDateTime = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.DateTimeValue.fromJSDate(end, true);
  const organizerAsAttendee = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.AttendeeProperty('ATTENDEE', organizer.email);
  const freeBusyComponent = (0,_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.createFreeBusyRequest)(startDateTime, endDateTime, organizer, [organizerAsAttendee, ...attendees]);
  const freeBusyICS = freeBusyComponent.toICS();
  let outbox;
  try {
    outbox = await (0,_caldavService_js__WEBPACK_IMPORTED_MODULE_1__.findSchedulingOutbox)();
  } catch (error) {
    return {
      error
    };
  }
  let freeBusyData;
  try {
    freeBusyData = await outbox.freeBusyRequest(freeBusyICS);
  } catch (error) {
    return {
      error
    };
  }
  const events = [];
  for (const [uri, data] of Object.entries(freeBusyData)) {
    events.push(...(0,_fullcalendar_eventSources_freeBusyResourceEventSourceFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(uri, data.calendarData, data.success, startDateTime, endDateTime, timezoneObject));
  }
  return {
    events
  };
}

/**
 * Get the first available slot for an event using the freebusy API
 *

 * @param {Date} start The start date and time of the event
 * @param {Date} end The end date and time of the event
 * @param retrievedEvents Events found by the freebusy API
 * @return []
 */
function getFirstFreeSlot(start, end, retrievedEvents) {
  // Here we are trying to understand the duration of the event, this is needed to check that the start and end points of a theoretical slot are free
  let duration = getDurationInSeconds(start, end);
  if (duration === 0) {
    duration = 86400; // One day
  }

  // We check all events in a weekly span from the start of the event
  const endSearchDate = new Date(start);
  endSearchDate.setDate(start.getDate() + daysToSearch);
  if (retrievedEvents.error) {
    return [{
      error: retrievedEvents.error
    }];
  }

  // Events have to be sorted to be checked cronologically
  let events = sortEvents(retrievedEvents);
  events = events.filter(function (event) {
    return new Date(start) < new Date(event.end);
  });
  const totalSlots = [];

  // Check times after every event
  for (let i = 0; i < events.length; i++) {
    const foundSlots = checkTime(new Date(events[i].end), duration, events);
    if (foundSlots) totalSlots.push(foundSlots);
  }

  // Check current time
  const foundSlots = checkTime(new Date(start), duration, events, false, false);
  if (foundSlots) {
    totalSlots.unshift(foundSlots);
  }
  return totalSlots;
}

/**
 *
 * @param start
 * @param end
 * @return {number}
 */
function getDurationInSeconds(start, end) {
  // Convert dates to UTC to account for daylight saving time
  const startUTC = new Date(start).toUTCString();
  const endUTC = new Date(end).toUTCString();
  const durationMs = new Date(endUTC) - new Date(startUTC);
  // Convert milliseconds to seconds
  return Math.floor(durationMs / 1000);
}

/**
 *
 * @param currentCheckedTime
 * @param duration
 * @param events
 * @param toRound
 * @parma toRound
 */
function checkTime(currentCheckedTime, duration, events) {
  let toRound = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  let timeValid = true;

  // We sometimes don't want to round, like when using the current time
  if (toRound) {
    currentCheckedTime = roundToNearestQuarter(currentCheckedTime);
  }
  const currentCheckedTimeEnd = new Date(currentCheckedTime);
  currentCheckedTimeEnd.setSeconds(currentCheckedTime.getSeconds() + duration);
  events.every(event => {
    const eventStart = new Date(event.start);
    const eventEnd = new Date(event.end);

    // Start of event is within the range that we are checking
    if (eventStart >= currentCheckedTime && eventStart <= currentCheckedTimeEnd) {
      timeValid = false;
      return false;
    }

    // End of event is within range that we are checking
    if (eventEnd >= currentCheckedTime && eventEnd <= currentCheckedTimeEnd) {
      timeValid = false;
      return false;
    }

    // Range that we are checking is within ends of event
    if (eventStart <= currentCheckedTime && eventEnd >= currentCheckedTimeEnd) {
      timeValid = false;
      return false;
    }
    return true;
  });
  if (timeValid) {
    return {
      start: currentCheckedTime,
      end: currentCheckedTimeEnd
    };
  } else {
    return false;
  }
}

/**
 *
 * @param events
 */
function sortEvents(events) {
  // Remove events that have the same start and end time, if not done causes problems
  const mappedEvents = new Map();
  for (const obj of events) {
    const key = obj.start.toString() + obj.end.toString();
    if (!mappedEvents.has(key)) {
      mappedEvents.set(key, obj);
    }
  }
  return Array.from(mappedEvents.values()).sort((a, b) => new Date(a.start) - new Date(b.start));
}

/**
 *
 * @param date
 */
function roundToNearestQuarter(date) {
  // Needed because it doesn't work with 0
  if (date.getMinutes() % 15 === 0) date.setMinutes(date.getMinutes() + 1);
  const roundedMinutes = Math.ceil(date.getMinutes() / 15) * 15;
  date.setMinutes(roundedMinutes);

  // Reset seconds and milliseconds
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

/***/ }),

/***/ "./src/services/isCirclesEnabled.js":
/*!******************************************!*\
  !*** ./src/services/isCirclesEnabled.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


const isCirclesEnabled = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_0__.loadState)('calendar', 'isCirclesEnabled', false);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isCirclesEnabled);

/***/ }),

/***/ "./src/services/settings.js":
/*!**********************************!*\
  !*** ./src/services/settings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setConfig: () => (/* binding */ setConfig)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _utils_settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/settings.js */ "./src/utils/settings.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 *
 * @param {string} key Config-key to set
 * @param {string | number | boolean} value Config-value to set
 * @return {Promise<void>}
 */
const setConfig = async (key, value) => {
  await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_utils_settings_js__WEBPACK_IMPORTED_MODULE_1__.getLinkToConfig)(key), {
    value
  });
};


/***/ }),

/***/ "./src/services/talkService.js":
/*!*************************************!*\
  !*** ./src/services/talkService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTalkRoom: () => (/* binding */ createTalkRoom),
/* harmony export */   doesContainTalkLink: () => (/* binding */ doesContainTalkLink),
/* harmony export */   extractCallTokenFromUrl: () => (/* binding */ extractCallTokenFromUrl),
/* harmony export */   generateURLForToken: () => (/* binding */ generateURLForToken),
/* harmony export */   updateTalkParticipants: () => (/* binding */ updateTalkParticipants)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _utils_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/logger.js */ "./src/utils/logger.js");
/* harmony import */ var _utils_attendee_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/attendee.js */ "./src/utils/attendee.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_7__);
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */









/**
 * Creates a new public talk room
 *
 * @param {?string} eventTitle Title of the event
 * @param {?string} eventDescription Description of the event
 * @param {?string[]} attendees Attendees of the event
 *
 * @return {Promise<string>}
 */
async function createTalkRoom() {
  let eventTitle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let eventDescription = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let attendees = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const apiVersion = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__.loadState)('calendar', 'talk_api_version');
  try {
    const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('apps/spreed/api/' + apiVersion + '/', 2) + 'room', {
      roomType: 3,
      roomName: eventTitle || (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('calendar', 'Talk conversation for event'),
      objectType: 'event',
      objectId: md5__WEBPACK_IMPORTED_MODULE_7___default()(new Date())
    });
    const conversation = response.data.ocs.data;
    const token = conversation.token;
    if (eventDescription) {
      await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('apps/spreed/api/' + apiVersion + '/', 2) + 'room/' + token + '/description', {
        description: eventDescription
      });
    }
    return generateURLForToken(token);
  } catch (error) {
    console.debug(error);
    throw error;
  }
}

/**
 *
 * @param eventComponent
 */
async function updateTalkParticipants(eventComponent) {
  const apiVersion = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__.loadState)('calendar', 'talk_api_version');
  const url = eventComponent.getConferenceList()[0]?.uri ?? eventComponent.location;
  if (!url || !url.startsWith(window.location.protocol + '//' + window.location.host)) {
    _utils_logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].debug('Event\'s conference/location is from another host', url);
    return;
  }
  const token = extractCallTokenFromUrl(url);
  if (!token) {
    _utils_logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].debug('URL ' + url + ' contains no call token');
    return;
  }
  try {
    const {
      data: {
        ocs: {
          data: room
        }
      }
    } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('apps/spreed/api/' + apiVersion + '/', 2) + 'room/' + token);
    const participantsResponse = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('apps/spreed/api/' + apiVersion + '/', 2) + 'room/' + token + '/participants');
    // Ignore if the actor isn't owner of the conversation
    if (!participantsResponse.data.ocs.data.some(participant => participant.actorId === (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__.getCurrentUser)().uid && participant.participantType <= 2)) {
      _utils_logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].debug('Current user is not a moderator or owner', {
        currentUser: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__.getCurrentUser)().uid,
        conversation: participantsResponse.data.ocs.data
      });
      return;
    }
    console.info('room', room);
    for (const attendee of eventComponent.getAttendeeIterator()) {
      _utils_logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].debug('Processing attendee', {
        attendee
      });
      if (['GROUP', 'RESOURCE', 'ROOM'].includes(attendee.userType)) {
        continue;
      }
      const participantId = (0,_utils_attendee_js__WEBPACK_IMPORTED_MODULE_6__.removeMailtoPrefix)(attendee.email);
      try {
        // Map attendee email to Nextcloud user uid
        const searchResult = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('core/autocomplete/', 2) + 'get?search=' + encodeURIComponent(participantId) + '&itemType=&itemId=%20&shareTypes[]=0&limit=2');
        // Only map if there is exactly one result
        if (searchResult.data.ocs.data.length === 1 && searchResult.data.ocs.data[0].id !== (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__.getCurrentUser)().uid) {
          await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('apps/spreed/api/' + apiVersion + '/', 2) + 'room/' + token + '/participants', {
            newParticipant: searchResult.data.ocs.data[0].id,
            source: 'users'
          });
        } else if (searchResult.data.ocs.data[0]?.id === (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_4__.getCurrentUser)().uid) {
          _utils_logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].debug('Skipping organizer ' + searchResult.data.ocs.data[0].id);
        } else if (room.type === 3) {
          await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('apps/spreed/api/' + apiVersion + '/', 2) + 'room/' + token + '/participants', {
            newParticipant: participantId,
            source: 'emails'
          });
        } else {
          _utils_logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].debug('Attendee ' + participantId + ' ignored as Talk participant');
        }
      } catch (error) {
        _utils_logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].info('Could not add attendee ' + participantId + ' as Talk participant', {
          error
        });
      }
    }
  } catch (error) {
    _utils_logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].warn('Could not update Talk room attendees', {
      error
    });
  }
}

/**
 * Checks whether the value contains a talk link
 *
 * @param {?string} text Haystack
 * @return {boolean}
 */
function doesContainTalkLink(text) {
  if (!text) {
    return false;
  }

  // TODO: there is most definitely a more reliable way,
  // but this works for now
  const fakeUrl = generateURLForToken();
  return text.includes(fakeUrl);
}

/**
 * Generates an absolute URL to the talk room based on the token
 *
 * @param {string} token The token to the call room
 * @return {string}
 */
function generateURLForToken() {
  let token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return window.location.protocol + '//' + window.location.host + (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateUrl)('/call/' + token);
}

/**
 * Extract a spreed call token from the given URL
 *
 * @param {string} callUrl URL of the spreed call
 * @return {string|undefined} Matched token or undefined if URL is invalid
 */
function extractCallTokenFromUrl(callUrl) {
  return callUrl.match(/\/call\/([a-z0-9]*)(\/|#.*)?$/)?.[1] ?? undefined;
}

/***/ }),

/***/ "./src/services/timezoneDataProviderService.js":
/*!*****************************************************!*\
  !*** ./src/services/timezoneDataProviderService.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_timezones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/timezones */ "./node_modules/@nextcloud/timezones/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const timezoneManager = (0,_nextcloud_timezones__WEBPACK_IMPORTED_MODULE_0__.getTimezoneManager)();
let initialized = false;

/**
 * Gets the timezone-manager
 * initializes it if necessary
 *
 * @return {TimezoneManager}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!initialized) {
    timezoneManager.registerDefaultTimezones();
    initialized = true;
  }
  return timezoneManager;
}

/***/ }),

/***/ "./src/services/timezoneDetectionService.js":
/*!**************************************************!*\
  !*** ./src/services/timezoneDetectionService.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   detectTimezone: () => (/* binding */ detectTimezone)
/* harmony export */ });
/* harmony import */ var jstz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jstz */ "./node_modules/jstz/index.js");
/* harmony import */ var jstz__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jstz__WEBPACK_IMPORTED_MODULE_0__);
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 * Returns the current timezone of the user
 *
 * @return {string} Current timezone of user
 */
const detectTimezone = () => {
  const determinedTimezone = jstz__WEBPACK_IMPORTED_MODULE_0___default().determine();
  if (!determinedTimezone) {
    return 'UTC';
  }
  const timezoneName = determinedTimezone.name();
  if (!timezoneName) {
    return 'UTC';
  }
  return timezoneName;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detectTimezone);


/***/ }),

/***/ "./src/store/calendarObjectInstance.js":
/*!*********************************************!*\
  !*** ./src/store/calendarObjectInstance.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/timezoneDataProviderService.js */ "./src/services/timezoneDataProviderService.js");
/* harmony import */ var _utils_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date.js */ "./src/utils/date.js");
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _utils_recurrence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/recurrence.js */ "./src/utils/recurrence.js");
/* harmony import */ var _models_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/event.js */ "./src/models/event.js");
/* harmony import */ var _utils_alarms_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/alarms.js */ "./src/utils/alarms.js");
/* harmony import */ var _models_alarm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/alarm.js */ "./src/models/alarm.js");
/* harmony import */ var _utils_calendarObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/calendarObject.js */ "./src/utils/calendarObject.js");
/* harmony import */ var _utils_logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/logger.js */ "./src/utils/logger.js");
/* harmony import */ var _models_rfcProps_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/rfcProps.js */ "./src/models/rfcProps.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _services_talkService_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/talkService.js */ "./src/services/talkService.js");
/* harmony import */ var _calendarObjects_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendarObjects.js */ "./src/store/calendarObjects.js");
/* harmony import */ var _calendars_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendars.js */ "./src/store/calendars.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings.js */ "./src/store/settings.js");
/* harmony import */ var _utils_color_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/color.js */ "./src/utils/color.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,pinia__WEBPACK_IMPORTED_MODULE_16__.defineStore)('calendarObjectInstance', {
  state: () => {
    return {
      isNew: null,
      calendarObject: null,
      calendarObjectInstance: null,
      existingEvent: {
        objectId: null,
        recurrenceId: null
      }
    };
  },
  actions: {
    /**
     * Set a calendar-object-instance that will be opened in the editor (existing event)
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObject The calendar-object currently being edited
     * @param {object} data.calendarObjectInstance The calendar-object-instance currently being edited
     * @param {string} data.objectId The objectId of the calendar-object
     * @param {number} data.recurrenceId The recurrence-id of the calendar-object-instance
     */
    setCalendarObjectInstanceForExistingEvent(_ref) {
      let {
        calendarObject,
        calendarObjectInstance,
        objectId,
        recurrenceId
      } = _ref;
      this.isNew = false;
      this.calendarObject = calendarObject;
      this.calendarObjectInstance = calendarObjectInstance;
      this.existingEvent.objectId = objectId;
      this.existingEvent.recurrenceId = recurrenceId;
    },
    /**
     * Set a calendar-object-instance that will be opened in the editor (new event)
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObject The calendar-object currently being created
     * @param {object} data.calendarObjectInstance The calendar-object-instance currently being crated
     */
    setCalendarObjectInstanceForNewEvent(_ref2) {
      let {
        calendarObject,
        calendarObjectInstance
      } = _ref2;
      this.isNew = true;
      this.calendarObject = calendarObject;
      this.calendarObjectInstance = calendarObjectInstance;
      this.existingEvent.objectId = null;
      this.existingEvent.recurrenceId = null;
    },
    resetCalendarObjectInstanceObjectIdAndRecurrenceId() {
      this.isNew = false;
      this.calendarObject = null;
      this.calendarObjectInstance = null;
      this.existingEvent.objectId = null;
      this.existingEvent.recurrenceId = null;
    },
    /**
     * Change the title of the event
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.title The new Title
     */
    changeTitle(_ref3) {
      let {
        calendarObjectInstance,
        title
      } = _ref3;
      calendarObjectInstance.eventComponent.title = title;
      calendarObjectInstance.title = title;
    },
    /**
     * Change the event's start
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {Date} data.startDate New start date to set
     */
    changeStartDateMutation(_ref4) {
      let {
        calendarObjectInstance,
        startDate
      } = _ref4;
      calendarObjectInstance.eventComponent.startDate.year = startDate.getFullYear();
      calendarObjectInstance.eventComponent.startDate.month = startDate.getMonth() + 1;
      calendarObjectInstance.eventComponent.startDate.day = startDate.getDate();
      calendarObjectInstance.eventComponent.startDate.hour = startDate.getHours();
      calendarObjectInstance.eventComponent.startDate.minute = startDate.getMinutes();
      calendarObjectInstance.eventComponent.startDate.second = 0;
      const isAllDay = calendarObjectInstance.eventComponent.isAllDay();
      const endDateObj = calendarObjectInstance.eventComponent.endDate.clone();
      const startDateObj = calendarObjectInstance.eventComponent.startDate.clone();
      if (isAllDay) {
        endDateObj.addDuration(_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DurationValue.fromSeconds(-1 * 60 * 60 * 24));
        if (endDateObj.compare(startDateObj) === -1) {
          const timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId(endDateObj.timezoneId);
          calendarObjectInstance.eventComponent.endDate = calendarObjectInstance.eventComponent.startDate.getInTimezone(timezone);
          calendarObjectInstance.endDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_1__.getDateFromDateTimeValue)(calendarObjectInstance.eventComponent.endDate);
          calendarObjectInstance.eventComponent.endDate.addDuration(_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DurationValue.fromSeconds(60 * 60 * 24));
        }
      } else {
        if (endDateObj.compare(startDateObj) === -1) {
          const timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId(endDateObj.timezoneId);
          calendarObjectInstance.eventComponent.endDate = calendarObjectInstance.eventComponent.startDate.getInTimezone(timezone);
          calendarObjectInstance.endDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_1__.getDateFromDateTimeValue)(calendarObjectInstance.eventComponent.endDate);
        }
      }
      calendarObjectInstance.startDate = startDate;
    },
    /**
     * Change the timezone of the event's start
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.startTimezone New timezone to set for start
     */
    changeStartTimezoneMutation(_ref5) {
      let {
        calendarObjectInstance,
        startTimezone
      } = _ref5;
      const timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId(startTimezone);
      calendarObjectInstance.eventComponent.startDate.replaceTimezone(timezone);
      calendarObjectInstance.startTimezoneId = startTimezone;

      // Either both are floating or both have a timezone, but it can't be mixed
      if (startTimezone === 'floating' || calendarObjectInstance.endTimezoneId === 'floating') {
        calendarObjectInstance.eventComponent.endDate.replaceTimezone(timezone);
        calendarObjectInstance.endTimezoneId = startTimezone;
      }
    },
    /**
     * Change the event's end
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {Date} data.endDate New end date to set
     */
    changeEndDateMutation(_ref6) {
      let {
        calendarObjectInstance,
        endDate
      } = _ref6;
      // If the event is using DURATION, endDate is dynamically generated.
      // In order to alter it, we need to explicitly set DTEND
      const endDateObject = calendarObjectInstance.eventComponent.endDate;
      calendarObjectInstance.eventComponent.endDate = endDateObject;
      calendarObjectInstance.eventComponent.endDate.year = endDate.getFullYear();
      calendarObjectInstance.eventComponent.endDate.month = endDate.getMonth() + 1;
      calendarObjectInstance.eventComponent.endDate.day = endDate.getDate();
      calendarObjectInstance.eventComponent.endDate.hour = endDate.getHours();
      calendarObjectInstance.eventComponent.endDate.minute = endDate.getMinutes();
      calendarObjectInstance.eventComponent.endDate.second = 0;
      const isAllDay = calendarObjectInstance.eventComponent.isAllDay();
      const endDateObj = calendarObjectInstance.eventComponent.endDate.clone();
      const startDateObj = calendarObjectInstance.eventComponent.startDate.clone();
      if (isAllDay) {
        if (endDateObj.compare(startDateObj) === -1) {
          const timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId(startDateObj.timezoneId);
          calendarObjectInstance.eventComponent.startDate = calendarObjectInstance.eventComponent.endDate.getInTimezone(timezone);
          calendarObjectInstance.startDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_1__.getDateFromDateTimeValue)(calendarObjectInstance.eventComponent.startDate);
        }

        // endDate is inclusive, but DTEND needs to be exclusive, so always add one day
        calendarObjectInstance.eventComponent.endDate.addDuration(_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DurationValue.fromSeconds(60 * 60 * 24));
      } else {
        // Is end before start?
        if (endDateObj.compare(startDateObj) === -1) {
          // Is end more than one day before start?
          endDateObj.addDuration(_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DurationValue.fromSeconds(60 * 60 * 24));
          if (endDateObj.compare(startDateObj) === -1) {
            const timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId(startDateObj.timezoneId);
            calendarObjectInstance.eventComponent.startDate = calendarObjectInstance.eventComponent.endDate.getInTimezone(timezone);
            calendarObjectInstance.startDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_1__.getDateFromDateTimeValue)(calendarObjectInstance.eventComponent.startDate);
          } else {
            // add one day to endDate if the endDate is before the startDate which allows to easily create events that reach over or to 0:00
            calendarObjectInstance.eventComponent.endDate.addDuration(_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DurationValue.fromSeconds(60 * 60 * 24));
            endDate = new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
          }
        }
      }
      calendarObjectInstance.endDate = endDate;
    },
    /**
     * Change the timezone of the event's end
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.endTimezone New timezone to set for end
     */
    changeEndTimezoneMutation(_ref7) {
      let {
        calendarObjectInstance,
        endTimezone
      } = _ref7;
      const timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId(endTimezone);
      calendarObjectInstance.eventComponent.endDate.replaceTimezone(timezone);
      calendarObjectInstance.endTimezoneId = endTimezone;

      // Either both are floating or both have a timezone, but it can't be mixed
      if (endTimezone === 'floating' || calendarObjectInstance.startTimezoneId === 'floating') {
        calendarObjectInstance.eventComponent.startDate.replaceTimezone(timezone);
        calendarObjectInstance.startTimezoneId = endTimezone;
      }
    },
    /**
     * Switch from a timed event to allday or vice versa
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     */
    toggleAllDayMutation(_ref8) {
      let {
        calendarObjectInstance
      } = _ref8;
      if (!calendarObjectInstance.eventComponent.canModifyAllDay()) {
        return;
      }
      const isAllDay = calendarObjectInstance.eventComponent.isAllDay();
      calendarObjectInstance.eventComponent.startDate.isDate = !isAllDay;
      calendarObjectInstance.eventComponent.endDate.isDate = !isAllDay;
      calendarObjectInstance.isAllDay = calendarObjectInstance.eventComponent.isAllDay();

      // isAllDay = old value
      if (isAllDay) {
        calendarObjectInstance.eventComponent.endDate.addDuration(_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DurationValue.fromSeconds(-1 * 60 * 60 * 24));
      } else {
        calendarObjectInstance.eventComponent.endDate.addDuration(_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DurationValue.fromSeconds(60 * 60 * 24));
      }
    },
    /**
     * Changes the time of a timed event to the default values
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     */
    changeTimeToDefaultForTimedEvents(_ref9) {
      let {
        calendarObjectInstance
      } = _ref9;
      const startDate = calendarObjectInstance.eventComponent.startDate;
      const endDate = calendarObjectInstance.eventComponent.endDate;
      if (startDate.hour === 0 && startDate.minute === 0 && endDate.hour === 0 && endDate.minute === 0) {
        startDate.hour = 10;
        endDate.hour = 11;
        calendarObjectInstance.startDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_1__.getDateFromDateTimeValue)(startDate);
        calendarObjectInstance.endDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_1__.getDateFromDateTimeValue)(endDate);
      }
    },
    /**
     * Change the location of an event
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.location New location to set
     */
    changeLocation(_ref10) {
      let {
        calendarObjectInstance,
        location
      } = _ref10;
      // Special case: delete Apple-specific location property to avoid inconsistencies
      calendarObjectInstance.eventComponent.deleteAllProperties('X-APPLE-STRUCTURED-LOCATION');
      calendarObjectInstance.eventComponent.location = location;
      calendarObjectInstance.location = location;
    },
    /**
     * Change the description of an event
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.description New description to set
     */
    changeDescription(_ref11) {
      let {
        calendarObjectInstance,
        description
      } = _ref11;
      // To avoid inconsistencies (bug #3863), remove all parameters (e.g., ALTREP) upon modification
      const descriptionProperty = calendarObjectInstance.eventComponent.getFirstProperty('Description');
      if (descriptionProperty) {
        for (const parameter of descriptionProperty.getParametersIterator()) {
          descriptionProperty.deleteParameter(parameter.name);
        }
      }

      // Delete custom description properties
      calendarObjectInstance.eventComponent.deleteAllProperties('X-ALT-DESC');
      calendarObjectInstance.eventComponent.description = description;
      calendarObjectInstance.description = description;
    },
    /**
     * Change the access class of an event
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.accessClass New access class to set
     */
    changeAccessClass(_ref12) {
      let {
        calendarObjectInstance,
        accessClass
      } = _ref12;
      calendarObjectInstance.eventComponent.accessClass = accessClass;
      calendarObjectInstance.accessClass = accessClass;
    },
    /**
     * Change the status of an event
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.status New status to set
     */
    changeStatus(_ref13) {
      let {
        calendarObjectInstance,
        status
      } = _ref13;
      calendarObjectInstance.eventComponent.status = status;
      calendarObjectInstance.status = status;
    },
    /**
     * Change the time-transparency of an event
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.timeTransparency New time-transparency to set
     */
    changeTimeTransparency(_ref14) {
      let {
        calendarObjectInstance,
        timeTransparency
      } = _ref14;
      calendarObjectInstance.eventComponent.timeTransparency = timeTransparency;
      calendarObjectInstance.timeTransparency = timeTransparency;
    },
    /**
     * Change the customized color of an event
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string | null} data.customColor New color to set
     */
    changeCustomColor(_ref15) {
      let {
        calendarObjectInstance,
        customColor
      } = _ref15;
      if (customColor === null) {
        calendarObjectInstance.eventComponent.deleteAllProperties('COLOR');
        // TODO: get rid of Vue.set in Vue 3
        vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(calendarObjectInstance, 'customColor', null);
        return;
      }
      const cssColorName = (0,_utils_color_js__WEBPACK_IMPORTED_MODULE_15__.getClosestCSS3ColorNameForHex)(customColor);
      const hexColorOfCssName = (0,_utils_color_js__WEBPACK_IMPORTED_MODULE_15__.getHexForColorName)(cssColorName);

      // Abort if either is undefined
      if (!cssColorName || !hexColorOfCssName) {
        console.error('Setting custom color failed');
        console.error('customColor: ', customColor);
        console.error('cssColorName: ', cssColorName);
        console.error('hexColorOfCssName: ', hexColorOfCssName);
        return;
      }
      calendarObjectInstance.eventComponent.color = cssColorName;
      // TODO: get rid of Vue.set in Vue 3
      vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(calendarObjectInstance, 'customColor', hexColorOfCssName);
    },
    /**
     * Adds an attendee to the event and sets the organizer if not present already
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.commonName Displayname of attendee
     * @param {string} data.uri Email address of attendee
     * @param {string} data.calendarUserType Calendar-user-type of attendee (INDIVIDUAL, GROUP, RESOURCE, ROOM)
     * @param {string} data.participationStatus Participation Status of attendee
     * @param {string} data.role Role of Attendee
     * @param {boolean} data.rsvp Whether or not to request a response from the attendee
     * @param {string=} data.language Preferred language of the attendee
     * @param {string=} data.timezoneId Preferred timezone of the attendee
     * @param {object=} data.organizer Principal of the organizer to be set if not present
     * @param {string | Array} data.member Group membership(s)
     */
    addAttendee(_ref16) {
      let {
        calendarObjectInstance,
        commonName,
        uri,
        calendarUserType = null,
        participationStatus = null,
        role = null,
        rsvp = null,
        language = null,
        timezoneId = null,
        organizer = null,
        member = null
      } = _ref16;
      const attendee = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.AttendeeProperty.fromNameAndEMail(commonName, uri);
      if (calendarUserType !== null) {
        attendee.userType = calendarUserType;
      }
      if (participationStatus !== null) {
        attendee.participationStatus = participationStatus;
      }
      if (role !== null) {
        attendee.role = role;
      }
      if (rsvp !== null) {
        attendee.rsvp = rsvp;
      }
      if (language !== null) {
        attendee.language = language;
      }
      if (timezoneId !== null) {
        attendee.updateParameterIfExist('TZID', timezoneId);
      }
      if (member !== null) {
        attendee.updateParameterIfExist('MEMBER', member);
      }

      // TODO - use real addAttendeeFrom method
      calendarObjectInstance.eventComponent.addProperty(attendee);
      calendarObjectInstance.attendees.push({
        commonName,
        participationStatus,
        role,
        rsvp,
        uri,
        attendeeProperty: attendee
      });
      if (!calendarObjectInstance.organizer && organizer) {
        this.setOrganizer({
          calendarObjectInstance,
          commonName: organizer.displayname,
          email: organizer.emailAddress
        });
      }
    },
    /**
     * Removes an attendee from the event
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.attendee The attendee object to remove
     */
    removeAttendee(_ref17) {
      let {
        calendarObjectInstance,
        attendee
      } = _ref17;
      calendarObjectInstance.eventComponent.removeAttendee(attendee.attendeeProperty);
      // Also remove members if attendee is a group
      if (attendee.attendeeProperty.userType === 'GROUP') {
        attendee.members.forEach(function (member) {
          if (Array.isArray(member.attendeeProperty.member) && member.attendeeProperty.member.length > 1) {
            const removeIndex = member.attendeeProperty.member.findIndex(function (groupname) {
              if (groupname === attendee.uri) {
                return true;
              }
              return false;
            });
            if (removeIndex !== -1) {
              member.attendeeProperty.member.splice(removeIndex, 1);
            }
          } else {
            calendarObjectInstance.eventComponent.removeAttendee(member.attendeeProperty);
            const index = calendarObjectInstance.attendees.indexOf(member);
            if (index !== -1) {
              calendarObjectInstance.attendees.splice(index, 1);
            }
          }
        });
      }
      const index = calendarObjectInstance.attendees.indexOf(attendee);
      if (index !== -1) {
        calendarObjectInstance.attendees.splice(index, 1);
      }
    },
    /**
     * Changes an attendees' participation status
     *
     * @param {object} data The destructuring object
     * @param {object} data.attendee The attendee object
     * @param {string} data.participationStatus New Participation Status of attendee
     */
    changeAttendeesParticipationStatus(_ref18) {
      let {
        attendee,
        participationStatus
      } = _ref18;
      attendee.attendeeProperty.participationStatus = participationStatus;
      attendee.participationStatus = participationStatus;
    },
    /**
     * Changes an attendees' role
     *
     * @param {object} data The destructuring object
     * @param {object} data.attendee The attendee object
     * @param {string} data.role New role of attendee
     */
    changeAttendeesRole(_ref19) {
      let {
        attendee,
        role
      } = _ref19;
      attendee.attendeeProperty.role = role;
      attendee.role = role;
    },
    /**
     * Changes an attendees' RVSP
     *
     * @param {object} data The destructuring object
     * @param {object} data.attendee The attendee object
     */
    toggleAttendeeRSVP(_ref20) {
      let {
        attendee
      } = _ref20;
      const oldRSVP = attendee.attendeeProperty.rsvp;
      attendee.attendeeProperty.rsvp = !oldRSVP;
      attendee.rsvp = !oldRSVP;
    },
    /**
     * Set the event's organizer
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string=} data.commonName Displayname of organizer
     * @param {string} data.email Email-address of organizer
     */
    setOrganizer(_ref21) {
      let {
        calendarObjectInstance,
        commonName = null,
        email
      } = _ref21;
      calendarObjectInstance.eventComponent.setOrganizerFromNameAndEMail(commonName, email);
      vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(calendarObjectInstance, 'organizer', {
        commonName,
        uri: email,
        attendeeProperty: calendarObjectInstance.eventComponent.getFirstProperty('ORGANIZER')
      });
    },
    /**
     * Adds a category to the event
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.category Category to add
     */
    addCategory(_ref22) {
      let {
        calendarObjectInstance,
        category
      } = _ref22;
      calendarObjectInstance.eventComponent.addCategory(category);
      calendarObjectInstance.categories.push(category);
    },
    /**
     * Removes a category from the event
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.category Category to remove
     */
    removeCategory(_ref23) {
      let {
        calendarObjectInstance,
        category
      } = _ref23;
      calendarObjectInstance.eventComponent.removeCategory(category);
      const index = calendarObjectInstance.categories.indexOf(category);
      if (index !== -1) {
        calendarObjectInstance.categories.splice(index, 1);
      }
    },
    /**
     * Change the interval of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.interval The new interval to set
     */
    changeRecurrenceInterval(_ref24) {
      let {
        recurrenceRule,
        interval
      } = _ref24;
      if (recurrenceRule.recurrenceRuleValue) {
        recurrenceRule.recurrenceRuleValue.interval = interval;
        recurrenceRule.interval = interval;
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Change the frequency of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.frequency The new frequency to set
     */
    changeRecurrenceFrequencyMutation(_ref25) {
      let {
        recurrenceRule,
        frequency
      } = _ref25;
      if (recurrenceRule.recurrenceRuleValue) {
        recurrenceRule.recurrenceRuleValue.frequency = frequency;
        recurrenceRule.frequency = frequency;
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Change the count limit of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.count The new count to set
     */
    changeRecurrenceCount(_ref26) {
      let {
        recurrenceRule,
        count
      } = _ref26;
      if (recurrenceRule.recurrenceRuleValue) {
        recurrenceRule.recurrenceRuleValue.count = count;
        recurrenceRule.count = count;
        recurrenceRule.until = null;
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Change the until limit of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {Date} data.until The new until to set
     */
    changeRecurrenceUntil(_ref27) {
      let {
        calendarObjectInstance,
        recurrenceRule,
        until
      } = _ref27;
      if (recurrenceRule.recurrenceRuleValue) {
        // RFC 5545, setion 3.3.10: until must be in UTC if the start time is timezone-aware
        if (calendarObjectInstance.startTimezoneId !== 'floating') {
          recurrenceRule.recurrenceRuleValue.until = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DateTimeValue.fromJSDate(until, {
            zone: 'utc'
          });
        } else {
          recurrenceRule.recurrenceRuleValue.until = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DateTimeValue.fromJSDate(until);
        }
        recurrenceRule.until = until;
        recurrenceRule.count = null;
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Changes the recurrence-rule to never end
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     */
    changeRecurrenceToInfinite(_ref28) {
      let {
        recurrenceRule
      } = _ref28;
      if (recurrenceRule.recurrenceRuleValue) {
        recurrenceRule.recurrenceRuleValue.setToInfinite();
        recurrenceRule.until = null;
        recurrenceRule.count = null;
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Reset the By-parts of the recurrence rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     */
    resetRecurrenceByParts(_ref29) {
      let {
        recurrenceRule
      } = _ref29;
      if (recurrenceRule.recurrenceRuleValue) {
        const parts = ['BYSECOND', 'BYMINUTE', 'BYHOUR', 'BYDAY', 'BYMONTHDAY', 'BYYEARDAY', 'BYWEEKNO', 'BYMONTH', 'BYSETPOS'];
        for (const part of parts) {
          recurrenceRule.recurrenceRuleValue.setComponent(part, []);
        }

        /* TODO
        recurrenceRule.byDay = []
        recurrenceRule.byMonth = []
        recurrenceRule.byMonthDay = []
        recurrenceRule.bySetPosition = null
        */

        vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(recurrenceRule, 'byDay', []);
        vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(recurrenceRule, 'byMonth', []);
        vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(recurrenceRule, 'byMonthDay', []);
        vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(recurrenceRule, 'bySetPosition', null);
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     */
    setDefaultRecurrenceByPartsForMonthlyBySetPosition(_ref30) {
      let {
        calendarObjectInstance,
        recurrenceRule
      } = _ref30;
      if (recurrenceRule.recurrenceRuleValue) {
        const {
          byDay,
          bySetPosition
        } = (0,_utils_recurrence_js__WEBPACK_IMPORTED_MODULE_3__.getBySetPositionAndBySetFromDate)(calendarObjectInstance.startDate);
        recurrenceRule.recurrenceRuleValue.setComponent('BYDAY', [byDay]);
        recurrenceRule.recurrenceRuleValue.setComponent('BYSETPOS', [bySetPosition]);
        recurrenceRule.byDay.push(byDay);
        recurrenceRule.bySetPosition = bySetPosition;
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Change the until limit of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.byDay The new until to set
     */
    addByDayToRecurrenceRule(_ref31) {
      let {
        recurrenceRule,
        byDay
      } = _ref31;
      if (recurrenceRule.recurrenceRuleValue) {
        const byDayList = recurrenceRule.recurrenceRuleValue.getComponent('BYDAY');
        const index = byDayList.indexOf(byDay);
        if (index === -1) {
          byDayList.push(byDay);
          recurrenceRule.recurrenceRuleValue.setComponent('BYDAY', byDayList);
        }
        const index2 = recurrenceRule.byDay.indexOf(byDay);
        if (index2 === -1) {
          recurrenceRule.byDay.push(byDay);
        }
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Change the until limit of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.byDay The new until to set
     */
    removeByDayFromRecurrenceRule(_ref32) {
      let {
        recurrenceRule,
        byDay
      } = _ref32;
      if (recurrenceRule.recurrenceRuleValue) {
        const byDayList = recurrenceRule.recurrenceRuleValue.getComponent('BYDAY');
        const index = byDayList.indexOf(byDay);
        if (index !== -1) {
          byDayList.splice(index, 1);
          recurrenceRule.recurrenceRuleValue.setComponent('BYDAY', byDayList);
        }
        const index2 = recurrenceRule.byDay.indexOf(byDay);
        if (index2 !== -1) {
          recurrenceRule.byDay.splice(index2, 1);
        }
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Change the until limit of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.byMonthDay The new until to set
     */
    addByMonthDayToRecurrenceRule(_ref33) {
      let {
        recurrenceRule,
        byMonthDay
      } = _ref33;
      if (recurrenceRule.recurrenceRuleValue) {
        const byMonthDayList = recurrenceRule.recurrenceRuleValue.getComponent('BYMONTHDAY');
        const index = byMonthDayList.indexOf(byMonthDay);
        if (index === -1) {
          byMonthDayList.push(byMonthDay);
          recurrenceRule.recurrenceRuleValue.setComponent('BYMONTHDAY', byMonthDayList);
        }
        const index2 = recurrenceRule.byMonthDay.indexOf(byMonthDay);
        if (index2 === -1) {
          recurrenceRule.byMonthDay.push(byMonthDay);
        }
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Change the until limit of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.byMonthDay The new until to set
     */
    removeByMonthDayFromRecurrenceRule(_ref34) {
      let {
        recurrenceRule,
        byMonthDay
      } = _ref34;
      if (recurrenceRule.recurrenceRuleValue) {
        const byMonthDayList = recurrenceRule.recurrenceRuleValue.getComponent('BYMONTHDAY');
        const index = byMonthDayList.indexOf(byMonthDay);
        if (index !== -1) {
          byMonthDayList.splice(index, 1);
          recurrenceRule.recurrenceRuleValue.setComponent('BYMONTHDAY', byMonthDayList);
        }
        const index2 = recurrenceRule.byMonthDay.indexOf(byMonthDay);
        if (index2 !== -1) {
          recurrenceRule.byMonthDay.splice(index2, 1);
        }
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Change the until limit of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.byMonth The new until to set
     */
    addByMonthToRecurrenceRule(_ref35) {
      let {
        recurrenceRule,
        byMonth
      } = _ref35;
      if (recurrenceRule.recurrenceRuleValue) {
        console.debug('addByMonthToRecurrenceRule', byMonth);
        const byMonthList = recurrenceRule.recurrenceRuleValue.getComponent('BYMONTH');
        const index = byMonthList.indexOf(byMonth);
        if (index === -1) {
          byMonthList.push(byMonth);
          recurrenceRule.recurrenceRuleValue.setComponent('BYMONTH', byMonthList);
        }
        const index2 = recurrenceRule.byMonth.indexOf(byMonth);
        if (index2 === -1) {
          recurrenceRule.byMonth.push(byMonth);
        }
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Change the until limit of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.byMonth The new until to set
     */
    removeByMonthFromRecurrenceRule(_ref36) {
      let {
        recurrenceRule,
        byMonth
      } = _ref36;
      if (recurrenceRule.recurrenceRuleValue) {
        console.debug('removeByMonthFromRecurrenceRule', byMonth);
        const byMonthList = recurrenceRule.recurrenceRuleValue.getComponent('BYMONTH');
        const index = byMonthList.indexOf(byMonth);
        if (index !== -1) {
          byMonthList.splice(index, 1);
          recurrenceRule.recurrenceRuleValue.setComponent('BYMONTH', byMonthList);
        }
        const index2 = recurrenceRule.byMonth.indexOf(byMonth);
        if (index2 !== -1) {
          recurrenceRule.byMonth.splice(index2, 1);
        }
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string[]} data.byDay The new until to set
     */
    changeRecurrenceByDay(_ref37) {
      let {
        recurrenceRule,
        byDay
      } = _ref37;
      if (recurrenceRule.recurrenceRuleValue) {
        recurrenceRule.recurrenceRuleValue.setComponent('BYDAY', byDay);
        // TODO recurrenceRule.byDay = byDay
        vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(recurrenceRule, 'byDay', byDay);
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     * Change the until limit of the recurrence-rule
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.bySetPosition The new until to set
     */
    changeRecurrenceBySetPosition(_ref38) {
      let {
        recurrenceRule,
        bySetPosition
      } = _ref38;
      if (recurrenceRule.recurrenceRuleValue) {
        recurrenceRule.recurrenceRuleValue.setComponent('BYSETPOS', [bySetPosition]);
        /// TODO recurrenceRule.bySetPosition = bySetPosition
        vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(recurrenceRule, 'bySetPosition', bySetPosition);
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     */
    markRecurrenceRuleAsSupported(_ref39) {
      let {
        recurrenceRule
      } = _ref39;
      recurrenceRule.isUnsupported = false;
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.alarm The alarm object
     * @param {string} data.type New type of alarm
     */
    changeAlarmType(_ref40) {
      let {
        alarm,
        type
      } = _ref40;
      if (alarm.alarmComponent) {
        alarm.alarmComponent.action = type;
        alarm.type = type;
        console.debug(alarm.alarmComponent.toICALJs().toString());
      }
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.alarm The alarm object
     * @param {Date} data.date New date object
     */
    changeAlarmAbsoluteDate(_ref41) {
      let {
        alarm,
        date
      } = _ref41;
      if (alarm.alarmComponent) {
        alarm.alarmComponent.trigger.value.year = date.getFullYear();
        alarm.alarmComponent.trigger.value.month = date.getMonth() + 1;
        alarm.alarmComponent.trigger.value.day = date.getDate();
        alarm.alarmComponent.trigger.value.hour = date.getHours();
        alarm.alarmComponent.trigger.value.minute = date.getMinutes();
        alarm.alarmComponent.trigger.value.second = 0;
        alarm.absoluteDate = date;
        console.debug(alarm.alarmComponent.toICALJs().toString());
      }
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.alarm The alarm object
     * @param {string} data.timezoneId New timezoneId
     */
    changeAlarmAbsoluteTimezoneId(_ref42) {
      let {
        alarm,
        timezoneId
      } = _ref42;
      if (alarm.alarmComponent) {
        const timezone = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_0__["default"])().getTimezoneForId(timezoneId);
        alarm.alarmComponent.trigger.value.replaceTimezone(timezone);
        alarm.absoluteTimezoneId = timezoneId;
        console.debug(alarm.alarmComponent.toICALJs().toString());
      }
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.alarm The alarm object
     */
    updateAlarmAllDayParts(_ref43) {
      let {
        alarm
      } = _ref43;
      if (alarm.alarmComponent) {
        const totalSeconds = alarm.alarmComponent.trigger.value.totalSeconds;
        const allDayParts = (0,_utils_alarms_js__WEBPACK_IMPORTED_MODULE_5__.getAmountHoursMinutesAndUnitForAllDayEvents)(totalSeconds);
        alarm.relativeUnitAllDay = allDayParts.unit;
        alarm.relativeAmountAllDay = allDayParts.amount;
        alarm.relativeHoursAllDay = allDayParts.hours;
        alarm.relativeMinutesAllDay = allDayParts.minutes;
      }
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.alarm The alarm object
     */
    updateAlarmTimedParts(_ref44) {
      let {
        alarm
      } = _ref44;
      if (alarm.alarmComponent) {
        const totalSeconds = alarm.alarmComponent.trigger.value.totalSeconds;
        const timedParts = (0,_utils_alarms_js__WEBPACK_IMPORTED_MODULE_5__.getAmountAndUnitForTimedEvents)(totalSeconds);
        alarm.relativeUnitTimed = timedParts.unit;
        alarm.relativeAmountTimed = timedParts.amount;
        console.debug(alarm.alarmComponent.toICALJs().toString());
      }
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.type Type of alarm
     * @param {number} data.totalSeconds Total amount of seconds for new alarm
     */
    addAlarmToCalendarObjectInstance(_ref45) {
      let {
        calendarObjectInstance,
        type,
        totalSeconds
      } = _ref45;
      if (calendarObjectInstance.eventComponent) {
        const eventComponent = calendarObjectInstance.eventComponent;
        const duration = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DurationValue.fromSeconds(totalSeconds);
        const alarmComponent = eventComponent.addRelativeAlarm(type, duration);
        const alarmObject = (0,_models_alarm_js__WEBPACK_IMPORTED_MODULE_6__.mapAlarmComponentToAlarmObject)(alarmComponent);
        calendarObjectInstance.alarms.push(alarmObject);
        console.debug(alarmObject.alarmComponent.toICALJs().toString());
      }
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.alarm The alarm object
     */
    removeAlarmFromCalendarObjectInstance(_ref46) {
      let {
        calendarObjectInstance,
        alarm
      } = _ref46;
      if (alarm.alarmComponent) {
        calendarObjectInstance.eventComponent.removeAlarm(alarm.alarmComponent);
        const index = calendarObjectInstance.alarms.indexOf(alarm);
        if (index !== -1) {
          calendarObjectInstance.alarms.splice(index, 1);
        }
      }
    },
    /**
     * @deprecated
     * @param calendarObjectInstance.calendarObjectInstance
     * @param calendarObjectInstance
     * @param calendarObjectInstance.sharedData
     * @param sharedData
     */
    addAttachmentBySharedData(_ref47) {
      let {
        calendarObjectInstance,
        sharedData
      } = _ref47;
      const attachment = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.AttachmentProperty.fromLink(sharedData.url);
      const fileName = sharedData.fileName;

      // hot-fix needed temporary, because calendar-js has no fileName get-setter
      const parameterFileName = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.Parameter('FILENAME', fileName);
      // custom has-preview parameter from dav file
      const xNcHasPreview = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.Parameter('X-NC-HAS-PREVIEW', sharedData['has-preview'].toString());
      // custom file id parameter from dav file
      const xNcFileId = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.Parameter('X-NC-FILE-ID', sharedData.fileid.toString());
      // custom share-types parameter from dav file
      const xNcSharedTypes = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.Parameter('X-NC-SHARED-TYPES', sharedData['share-types']['share-type'] ? sharedData['share-types']['share-type'].join(',') : '');
      attachment.setParameter(parameterFileName);
      attachment.setParameter(xNcFileId);
      attachment.setParameter(xNcHasPreview);
      attachment.setParameter(xNcSharedTypes);
      attachment.isNew = true;
      attachment.shareTypes = sharedData['share-types']['share-type'] ? sharedData['share-types']['share-type'].join(',') : '';
      attachment.fileName = fileName;
      attachment.xNcFileId = sharedData.fileid;
      attachment.xNcHasPreview = sharedData['has-preview'];
      attachment.formatType = sharedData.getcontenttype;
      attachment.uri = sharedData.url ? sharedData.url : (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_10__.generateUrl)(`/f/${sharedData.fileid}`);
      calendarObjectInstance.eventComponent.addProperty(attachment);
      calendarObjectInstance.attachments.push(attachment);
    },
    /**
     *
     * @param calendarObjectInstance.calendarObjectInstance
     * @param calendarObjectInstance
     * @param sharedData
     * @param calendarObjectInstance.sharedData
     */
    addAttachmentWithProperty(_ref48) {
      let {
        calendarObjectInstance,
        sharedData
      } = _ref48;
      const attachment = {};
      const fileName = sharedData.fileName;
      attachment.isNew = true;
      attachment.shareTypes = (typeof sharedData?.['share-types']?.['share-type'] === 'number' ? sharedData?.['share-types']?.['share-type']?.toString() : sharedData?.['share-types']?.['share-type']?.join(',')) ?? null;
      attachment.fileName = fileName;
      attachment.xNcFileId = sharedData.fileid;
      attachment.xNcHasPreview = sharedData['has-preview'];
      attachment.formatType = sharedData.getcontenttype;
      attachment.uri = sharedData.url ? sharedData.url : (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_10__.generateUrl)(`/f/${sharedData.fileid}`);
      const attachmentProperty = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.AttachmentProperty.fromLink(attachment.uri, attachment.formatType);
      const parameterFileName = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.Parameter('FILENAME', fileName);
      const xNcHasPreview = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.Parameter('X-NC-HAS-PREVIEW', attachment.xNcHasPreview.toString());
      const xNcFileId = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.Parameter('X-NC-FILE-ID', attachment.xNcFileId.toString());
      // ADD X-NC-SHARED-TYPES only if sharet-type not empty
      if (attachment.shareTypes !== null) {
        const xNcSharedTypes = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.Parameter('X-NC-SHARED-TYPES', attachment.shareTypes);
        attachmentProperty.setParameter(xNcSharedTypes);
      }
      attachmentProperty.setParameter(parameterFileName);
      attachmentProperty.setParameter(xNcFileId);
      attachmentProperty.setParameter(xNcHasPreview);
      attachmentProperty.uri = attachment.uri;
      attachment.attachmentProperty = attachmentProperty;
      calendarObjectInstance.eventComponent.addProperty(attachmentProperty);
      calendarObjectInstance.attachments.push(attachment);
    },
    /**
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.attachment The attachment object
     */
    deleteAttachment(_ref49) {
      let {
        calendarObjectInstance,
        attachment
      } = _ref49;
      try {
        const index = calendarObjectInstance.attachments.indexOf(attachment);
        if (index !== -1) {
          calendarObjectInstance.attachments.splice(index, 1);
        }
        calendarObjectInstance.eventComponent.removeAttachment(attachment.attachmentProperty);
      } catch {}
    },
    // start of actions
    /**
     * Returns the closest existing recurrence-id of a calendar-object
     * close to the given date.
     * This is either the next occurrence in the future or
     * in case there are no more future occurrences the closest
     * occurrence in the past
     *
     * @param {object} data The destructuring object
     * @param {string} data.objectId The objectId of the calendar-object to edit
     * @param {Date} data.closeToDate The date to get a close occurrence to
     * @return {Promise<number>}
     */
    async resolveClosestRecurrenceIdForCalendarObject(_ref50) {
      let {
        objectId,
        closeToDate
      } = _ref50;
      const calendarsStore = (0,_calendars_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
      const calendarObject = await calendarsStore.getEventByObjectId({
        objectId
      });
      const iterator = calendarObject.calendarComponent.getVObjectIterator();
      const firstVObject = iterator.next().value;
      const d = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DateTimeValue.fromJSDate(closeToDate, true);
      return firstVObject.recurrenceManager.getClosestOccurrence(d).getReferenceRecurrenceId().unixTime;
    },
    /**
     * Gets the calendar-object and calendar-object-instance
     * for a given objectId and recurrenceId.
     *
     * If the recurrenceId does not represent a valid instance,
     * an error will be thrown.
     *
     * @param {object} data The destructuring object
     * @param {string} data.objectId The objectId of the calendar-object to edit
     * @param {number} data.recurrenceId The recurrence-id to edit
     * @return {Promise<{calendarObject: object, calendarObjectInstance: object}>}
     */
    async getCalendarObjectInstanceByObjectIdAndRecurrenceId(_ref51) {
      let {
        objectId,
        recurrenceId
      } = _ref51;
      const calendarsStore = (0,_calendars_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
      if (this.existingEvent.objectId === objectId && this.existingEvent.recurrenceId === recurrenceId) {
        return Promise.resolve({
          calendarObject: this.calendarObject,
          calendarObjectInstance: this.calendarObjectInstance
        });
      }
      const recurrenceIdDate = new Date(recurrenceId * 1000);
      const calendarObject = await calendarsStore.getEventByObjectId({
        objectId
      });
      const eventComponent = (0,_utils_calendarObject_js__WEBPACK_IMPORTED_MODULE_7__.getObjectAtRecurrenceId)(calendarObject, recurrenceIdDate);
      if (eventComponent === null) {
        throw new Error('Not a valid recurrence-id');
      }
      const calendarObjectInstance = (0,_models_event_js__WEBPACK_IMPORTED_MODULE_4__.mapEventComponentToEventObject)(eventComponent);
      this.setCalendarObjectInstanceForExistingEvent({
        calendarObject,
        calendarObjectInstance,
        objectId,
        recurrenceId
      });
      return {
        calendarObject,
        calendarObjectInstance
      };
    },
    /**
     * Gets the new calendar-object-instance.
     *
     * @param {object} data The destructuring object
     * @param {boolean} data.isAllDay Whether or not the new event is supposed to be all-day
     * @param {number} data.start The start of the new event (unixtime)
     * @param {number} data.end The end of the new event (unixtime)
     * @param {string} data.timezoneId The timezoneId of the new event
     * @return {Promise<{calendarObject: object, calendarObjectInstance: object}>}
     */
    async getCalendarObjectInstanceForNewEvent(_ref52) {
      let {
        isAllDay,
        start,
        end,
        timezoneId
      } = _ref52;
      const calendarObjectsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_12__["default"])();
      const settingsStore = (0,_settings_js__WEBPACK_IMPORTED_MODULE_14__["default"])();
      if (this.isNew === true) {
        return Promise.resolve({
          calendarObject: this.calendarObject,
          calendarObjectInstance: this.calendarObjectInstance
        });
      }
      const calendarObject = await calendarObjectsStore.createNewEvent({
        start,
        end,
        isAllDay,
        timezoneId
      });
      const startDate = new Date(start * 1000);
      const eventComponent = (0,_utils_calendarObject_js__WEBPACK_IMPORTED_MODULE_7__.getObjectAtRecurrenceId)(calendarObject, startDate);
      const calendarObjectInstance = (0,_models_event_js__WEBPACK_IMPORTED_MODULE_4__.mapEventComponentToEventObject)(eventComponent);

      // Add an alarm if the user set a default one in the settings. If
      // not, defaultReminder will not be a number (rather the string "none").
      const defaultReminder = parseInt(settingsStore.defaultReminder);
      if (!isNaN(defaultReminder)) {
        this.addAlarmToCalendarObjectInstance({
          calendarObjectInstance,
          type: 'DISPLAY',
          totalSeconds: defaultReminder
        });
        _utils_logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].debug(`Added defaultReminder (${defaultReminder}s) to newly created event`);
      }

      // Add default status
      const rfcProps = (0,_models_rfcProps_js__WEBPACK_IMPORTED_MODULE_9__.getRFCProperties)();
      const status = rfcProps.status.defaultValue;
      calendarObjectInstance.eventComponent.status = status;
      calendarObjectInstance.status = status;
      this.setCalendarObjectInstanceForNewEvent({
        calendarObject,
        calendarObjectInstance
      });
      return {
        calendarObject,
        calendarObjectInstance
      };
    },
    /**
     * Updates the existing calendar-object-instance.
     *
     * @param {object} data The destructuring object
     * @param {boolean} data.isAllDay Whether or not the new event is supposed to be all-day
     * @param {number} data.start The start of the new event (unixtime)
     * @param {number} data.end The end of the new event (unixtime)
     * @param {string} data.timezoneId The timezoneId of the new event
     * @return {Promise<{calendarObject: object, calendarObjectInstance: object}>}
     */
    async updateCalendarObjectInstanceForNewEvent(_ref53) {
      let {
        isAllDay,
        start,
        end,
        timezoneId
      } = _ref53;
      const calendarObjectsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_12__["default"])();
      await calendarObjectsStore.updateTimeOfNewEvent({
        calendarObjectInstance: this.calendarObjectInstance,
        start,
        end,
        isAllDay,
        timezoneId
      });
      this.setCalendarObjectInstanceForNewEvent({
        calendarObject: this.calendarObject,
        calendarObjectInstance: this.calendarObjectInstance
      });
      return {
        calendarObject: this.calendarObject,
        calendarObjectInstance: this.calendarObjectInstance
      };
    },
    /**
     * Saves changes made to a single calendar-object-instance
     *
     * @param {object} data The destructuring object
     * @param {boolean} data.thisAndAllFuture Whether or not to save changes for all future occurrences or just this one
     * @param {string} data.calendarId The new calendar-id to store it in
     * @return {Promise<void>}
     */
    async saveCalendarObjectInstance(_ref54) {
      let {
        thisAndAllFuture,
        calendarId
      } = _ref54;
      const calendarObjectsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_12__["default"])();
      const eventComponent = this.calendarObjectInstance.eventComponent;
      const calendarObject = this.calendarObject;
      (0,_utils_alarms_js__WEBPACK_IMPORTED_MODULE_5__.updateAlarms)(eventComponent);
      await (0,_services_talkService_js__WEBPACK_IMPORTED_MODULE_11__.updateTalkParticipants)(eventComponent);
      if (eventComponent.isDirty()) {
        const isForkedItem = eventComponent.primaryItem !== null;
        let original = null;
        let fork = null;

        // We check if two things apply:
        // - primaryItem !== null -> Is this a fork or not?
        // - eventComponent.canCreateRecurrenceExceptions() - Can we create a recurrence-exception for this item
        if (isForkedItem && eventComponent.canCreateRecurrenceExceptions()) {
          [original, fork] = eventComponent.createRecurrenceException(thisAndAllFuture);
        }
        await calendarObjectsStore.updateCalendarObject({
          calendarObject
        });
        if (original !== null && fork !== null && original.root !== fork.root) {
          await calendarObjectsStore.createCalendarObjectFromFork({
            eventComponent: fork,
            calendarId
          });
        }
      }
      if (calendarId !== this.calendarObject.calendarId) {
        await calendarObjectsStore.moveCalendarObject({
          calendarObject,
          newCalendarId: calendarId
        });
      }
    },
    /**
     * Duplicate calendar-object-instance
     *
     * @return {Promise<void>}
     */
    async duplicateCalendarObjectInstance() {
      const calendarObjectsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_12__["default"])();
      const oldCalendarObjectInstance = this.calendarObjectInstance;
      const oldEventComponent = oldCalendarObjectInstance.eventComponent;
      const startDate = oldEventComponent.startDate.getInUTC();
      const endDate = oldEventComponent.endDate.getInUTC();
      const calendarObject = await calendarObjectsStore.createNewEvent({
        start: startDate.unixTime,
        end: endDate.unixTime,
        timezoneId: oldEventComponent.startDate.timezoneId,
        isAllDay: oldEventComponent.isAllDay()
      });
      const eventComponent = (0,_utils_calendarObject_js__WEBPACK_IMPORTED_MODULE_7__.getObjectAtRecurrenceId)(calendarObject, startDate.jsDate);
      (0,_models_event_js__WEBPACK_IMPORTED_MODULE_4__.copyCalendarObjectInstanceIntoEventComponent)(oldCalendarObjectInstance, eventComponent, true);
      const calendarObjectInstance = (0,_models_event_js__WEBPACK_IMPORTED_MODULE_4__.mapEventComponentToEventObject)(eventComponent);
      await this.setCalendarObjectInstanceForNewEvent({
        calendarObject,
        calendarObjectInstance
      });
    },
    /**
     * Deletes a calendar-object-instance
     *
     * @param {object} data The destructuring object
     * @param {boolean} data.thisAndAllFuture Whether or not to delete all future occurrences or just this one
     * @return {Promise<void>}
     */
    async deleteCalendarObjectInstance(_ref55) {
      let {
        thisAndAllFuture
      } = _ref55;
      const calendarObjectsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_12__["default"])();
      const eventComponent = this.calendarObjectInstance.eventComponent;
      const isRecurrenceSetEmpty = eventComponent.removeThisOccurrence(thisAndAllFuture);
      const calendarObject = this.calendarObject;
      if (isRecurrenceSetEmpty) {
        await calendarObjectsStore.deleteCalendarObject({
          calendarObject
        });
      } else {
        await calendarObjectsStore.updateCalendarObject({
          calendarObject
        });
      }
    },
    /**
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {Date} data.startDate The new start-date
     * @param {boolean} data.onlyTime Only update time
     * @param data.changeEndDate
     */
    changeStartDate(_ref56) {
      let {
        calendarObjectInstance,
        startDate,
        onlyTime = false,
        changeEndDate = true
      } = _ref56;
      if (onlyTime) {
        startDate.setFullYear(calendarObjectInstance.startDate.getFullYear(), calendarObjectInstance.startDate.getMonth(), calendarObjectInstance.startDate.getDate());
      }
      const difference = startDate.getTime() - calendarObjectInstance.startDate.getTime();
      const endDate = new Date(calendarObjectInstance.endDate.getTime() + difference);
      this.changeStartDateMutation({
        calendarObjectInstance,
        startDate
      });
      if (changeEndDate) {
        this.changeEndDateMutation({
          calendarObjectInstance,
          endDate
        });
      }
    },
    /**
     * Change the timezone of the event's start
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.startTimezone New timezone to set for start
     */
    changeStartTimezone(_ref57) {
      let {
        calendarObjectInstance,
        startTimezone
      } = _ref57;
      this.changeStartTimezoneMutation({
        calendarObjectInstance,
        startTimezone
      });

      // Simulate a change of the start time to trigger the comparison
      // of start and end and trigger an update of end if necessary
      this.changeStartDateMutation({
        calendarObjectInstance,
        startDate: calendarObjectInstance.startDate
      });
    },
    /**
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {Date} data.endDate The new end-date
     * @param {boolean} data.onlyTime Only update time
     */
    changeEndDate(_ref58) {
      let {
        calendarObjectInstance,
        endDate,
        onlyTime = false
      } = _ref58;
      if (onlyTime) {
        endDate.setFullYear(calendarObjectInstance.endDate.getFullYear(), calendarObjectInstance.endDate.getMonth(), calendarObjectInstance.endDate.getDate());
      }
      this.changeEndDateMutation({
        calendarObjectInstance,
        endDate
      });
    },
    /**
     * Change the timezone of the event's end
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {string} data.endTimezone New timezone to set for end
     */
    changeEndTimezone(_ref59) {
      let {
        calendarObjectInstance,
        endTimezone
      } = _ref59;
      this.changeEndTimezoneMutation({
        calendarObjectInstance,
        endTimezone
      });

      // Simulate a change of the end time to trigger the comparison
      // of start and end and trigger an update of start if necessary
      this.changeEndDateMutation({
        calendarObjectInstance,
        endDate: calendarObjectInstance.endDate
      });
    },
    /**
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.frequency The new frequency to set
     */
    changeRecurrenceFrequency(_ref60) {
      let {
        calendarObjectInstance,
        recurrenceRule,
        frequency
      } = _ref60;
      console.debug(calendarObjectInstance);
      console.debug(recurrenceRule);
      console.debug(frequency);
      if (recurrenceRule.frequency === 'NONE' && frequency !== 'NONE') {
        // Add a new recurrence-rule
        const recurrenceValue = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.RecurValue.fromData({});
        const recurrenceProperty = new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.Property('RRULE', recurrenceValue);
        calendarObjectInstance.eventComponent.addProperty(recurrenceProperty);
        calendarObjectInstance.recurrenceRule.recurrenceRuleValue = recurrenceValue;
        this.resetRecurrenceByParts({
          recurrenceRule
        });
        this.changeRecurrenceFrequencyMutation({
          calendarObjectInstance,
          recurrenceRule: calendarObjectInstance.recurrenceRule,
          frequency
        });
        this.changeRecurrenceInterval({
          calendarObjectInstance,
          recurrenceRule: calendarObjectInstance.recurrenceRule,
          interval: 1
        });
        this.changeRecurrenceToInfinite({
          recurrenceRule: calendarObjectInstance.recurrenceRule
        });
        this.setDefaultRecurrenceByParts({
          calendarObjectInstance,
          recurrenceRule,
          frequency
        });
        console.debug(`changed from none to ${frequency}`);
      } else if (recurrenceRule.frequency !== 'NONE' && frequency === 'NONE') {
        console.debug('calling removeRecurrenceRuleFromCalendarObjectInstance');
        // Remove the recurrence-rule
        if (recurrenceRule.recurrenceRuleValue) {
          calendarObjectInstance.eventComponent.deleteAllProperties('RRULE');
          /// TODO calendarObjectInstance.recurrenceRule = getDefaultEventObject().recurrenceRule
          vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(calendarObjectInstance, 'recurrenceRule', (0,_models_event_js__WEBPACK_IMPORTED_MODULE_4__.getDefaultEventObject)().recurrenceRule);
          console.debug(calendarObjectInstance);
          console.debug(recurrenceRule);
        }
      } else {
        // Change frequency of existing recurrence-rule
        this.resetRecurrenceByParts({
          recurrenceRule
        });
        this.changeRecurrenceFrequencyMutation({
          calendarObjectInstance,
          recurrenceRule: calendarObjectInstance.recurrenceRule,
          frequency
        });
        this.setDefaultRecurrenceByParts({
          calendarObjectInstance,
          recurrenceRule,
          frequency
        });
      }
    },
    /**
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     * @param {string} data.frequency The new frequency to set
     */
    setDefaultRecurrenceByParts(_ref61) {
      let {
        calendarObjectInstance,
        recurrenceRule,
        frequency
      } = _ref61;
      switch (frequency) {
        case 'WEEKLY':
          if (recurrenceRule.recurrenceRuleValue) {
            const byDay = (0,_utils_recurrence_js__WEBPACK_IMPORTED_MODULE_3__.getWeekDayFromDate)(calendarObjectInstance.startDate);
            recurrenceRule.recurrenceRuleValue.setComponent('BYDAY', [byDay]);
            recurrenceRule.byDay.push(byDay);
            console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
          }
          break;
        case 'MONTHLY':
          if (recurrenceRule.recurrenceRuleValue) {
            const byMonthDay = calendarObjectInstance.startDate.getDate().toString();
            recurrenceRule.recurrenceRuleValue.setComponent('BYMONTHDAY', [byMonthDay]);
            recurrenceRule.byMonthDay.push(byMonthDay);
            console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
          }
          break;
        case 'YEARLY':
          if (recurrenceRule.recurrenceRuleValue) {
            const byMonth = calendarObjectInstance.startDate.getMonth() + 1; // Javascript months are zero-based
            recurrenceRule.recurrenceRuleValue.setComponent('BYMONTH', [byMonth]);
            recurrenceRule.byMonth.push(byMonth);
            console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
          }
          break;
      }
    },
    /**
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     */
    changeMonthlyRecurrenceFromByDayToBySetPosition(_ref62) {
      let {
        calendarObjectInstance,
        recurrenceRule
      } = _ref62;
      console.debug('changeMonthlyRecurrenceFromByDayToBySetPosition');
      this.resetRecurrenceByParts({
        recurrenceRule
      });
      this.setDefaultRecurrenceByPartsForMonthlyBySetPosition({
        calendarObjectInstance,
        recurrenceRule
      });
    },
    /**
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     */
    changeMonthlyRecurrenceFromBySetPositionToByDay(_ref63) {
      let {
        calendarObjectInstance,
        recurrenceRule
      } = _ref63;
      console.debug('changeMonthlyRecurrenceFromBySetPositionToByDay');
      this.resetRecurrenceByParts({
        recurrenceRule
      });
      if (recurrenceRule.recurrenceRuleValue) {
        const byMonthDay = calendarObjectInstance.startDate.getDate().toString();
        recurrenceRule.recurrenceRuleValue.setComponent('BYMONTHDAY', [byMonthDay]);
        recurrenceRule.byMonthDay.push(byMonthDay);
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     */
    enableYearlyRecurrenceBySetPosition(_ref64) {
      let {
        calendarObjectInstance,
        recurrenceRule
      } = _ref64;
      this.setDefaultRecurrenceByPartsForMonthlyBySetPosition({
        calendarObjectInstance,
        recurrenceRule
      });
    },
    /**
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     */
    disableYearlyRecurrenceBySetPosition(_ref65) {
      let {
        recurrenceRule
      } = _ref65;
      this.changeRecurrenceByDay({
        recurrenceRule,
        byDay: []
      });
      if (recurrenceRule.recurrenceRuleValue) {
        recurrenceRule.recurrenceRuleValue.setComponent('BYSETPOS', []);
        /// TODO recurrenceRule.bySetPosition = null
        vue__WEBPACK_IMPORTED_MODULE_17__["default"].set(recurrenceRule, 'bySetPosition', null);
        console.debug(recurrenceRule.recurrenceRuleValue._innerValue.toString());
      }
    },
    /**
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.calendarObjectInstance The calendarObjectInstance object
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     */
    enableRecurrenceLimitByUntil(_ref66) {
      let {
        calendarObjectInstance,
        recurrenceRule
      } = _ref66;
      let until;
      switch (recurrenceRule.frequency) {
        // Defaults to 7 days
        case 'DAILY':
          until = new Date(calendarObjectInstance.startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
          break;

        // Defaults to 4 weeks
        case 'WEEKLY':
          until = new Date(calendarObjectInstance.startDate.getTime() + 4 * 7 * 24 * 60 * 60 * 1000);
          break;

        // Defaults to 10 year
        case 'YEARLY':
          until = new Date(calendarObjectInstance.startDate.getFullYear() + 10, calendarObjectInstance.startDate.getMonth(), calendarObjectInstance.startDate.getDate(), 23, 59, 59);
          break;

        // Defaults to 12 months
        case 'MONTHLY':
        default:
          until = new Date(calendarObjectInstance.startDate.getFullYear() + 1, calendarObjectInstance.startDate.getMonth(), calendarObjectInstance.startDate.getDate(), 23, 59, 59);
          break;
      }
      this.changeRecurrenceToInfinite({
        recurrenceRule
      });
      this.changeRecurrenceUntil({
        calendarObjectInstance,
        recurrenceRule,
        until
      });
    },
    /**
     *
     * @param {object} data The destructuring object for data
     * @param {object} data.recurrenceRule The recurrenceRule object to modify
     */
    enableRecurrenceLimitByCount(_ref67) {
      let {
        recurrenceRule
      } = _ref67;
      this.changeRecurrenceToInfinite({
        recurrenceRule
      });
      this.changeRecurrenceCount({
        recurrenceRule,
        count: 2 // Default value is two
      });
    },
    changeAlarmAmountTimed(_ref68) {
      let {
        alarm,
        amount
      } = _ref68;
      if (alarm.alarmComponent) {
        alarm.alarmComponent.trigger.value.totalSeconds = (0,_utils_alarms_js__WEBPACK_IMPORTED_MODULE_5__.getTotalSecondsFromAmountAndUnitForTimedEvents)(amount, alarm.relativeUnitTimed, alarm.relativeIsBefore);
        alarm.relativeAmountTimed = amount;
        alarm.relativeTrigger = alarm.alarmComponent.trigger.value.totalSeconds;
        console.debug(alarm.alarmComponent.toICALJs().toString());
      }
      this.updateAlarmAllDayParts({
        alarm
      });
    },
    changeAlarmUnitTimed(_ref69) {
      let {
        alarm,
        unit
      } = _ref69;
      if (alarm.alarmComponent) {
        alarm.alarmComponent.trigger.value.totalSeconds = (0,_utils_alarms_js__WEBPACK_IMPORTED_MODULE_5__.getTotalSecondsFromAmountAndUnitForTimedEvents)(alarm.relativeAmountTimed, unit, alarm.relativeIsBefore);
        alarm.relativeUnitTimed = unit;
        alarm.relativeTrigger = alarm.alarmComponent.trigger.value.totalSeconds;
        console.debug(alarm.alarmComponent.toICALJs().toString());
      }
      this.updateAlarmAllDayParts({
        alarm
      });
    },
    changeAlarmAmountAllDay(_ref70) {
      let {
        alarm,
        amount
      } = _ref70;
      if (alarm.alarmComponent) {
        alarm.alarmComponent.trigger.value.totalSeconds = (0,_utils_alarms_js__WEBPACK_IMPORTED_MODULE_5__.getTotalSecondsFromAmountHourMinutesAndUnitForAllDayEvents)(amount, alarm.relativeHoursAllDay, alarm.relativeMinutesAllDay, alarm.relativeUnitAllDay);
        alarm.relativeAmountAllDay = amount;
        alarm.relativeTrigger = alarm.alarmComponent.trigger.value.totalSeconds;
        console.debug(alarm.alarmComponent.toICALJs().toString());
      }
      this.updateAlarmTimedParts({
        alarm
      });
    },
    changeAlarmUnitAllDay(_ref71) {
      let {
        alarm,
        unit
      } = _ref71;
      if (alarm.alarmComponent) {
        alarm.alarmComponent.trigger.value.totalSeconds = (0,_utils_alarms_js__WEBPACK_IMPORTED_MODULE_5__.getTotalSecondsFromAmountHourMinutesAndUnitForAllDayEvents)(alarm.relativeAmountAllDay, alarm.relativeHoursAllDay, alarm.relativeMinutesAllDay, unit);
        alarm.relativeUnitAllDay = unit;
        alarm.relativeTrigger = alarm.alarmComponent.trigger.value.totalSeconds;
        console.debug(alarm.alarmComponent.toICALJs().toString());
      }
      this.updateAlarmTimedParts({
        alarm
      });
    },
    changeAlarmHoursMinutesAllDay(_ref72) {
      let {
        alarm,
        hours,
        minutes
      } = _ref72;
      if (alarm.alarmComponent) {
        alarm.alarmComponent.trigger.value.totalSeconds = (0,_utils_alarms_js__WEBPACK_IMPORTED_MODULE_5__.getTotalSecondsFromAmountHourMinutesAndUnitForAllDayEvents)(alarm.relativeAmountAllDay, hours, minutes, alarm.relativeUnitAllDay);
        alarm.relativeHoursAllDay = hours;
        alarm.relativeMinutesAllDay = minutes;
        alarm.relativeTrigger = alarm.alarmComponent.trigger.value.totalSeconds;
        console.debug(alarm.alarmComponent.toICALJs().toString());
      }
      this.updateAlarmTimedParts({
        alarm
      });
    },
    changeAlarmFromRelativeToAbsolute(_ref73) {
      let {
        calendarObjectInstance,
        alarm
      } = _ref73;
      if (alarm.alarmComponent) {
        const triggerDateTime = calendarObjectInstance.eventComponent.startDate.clone();
        // The trigger of an alarm must be DATE-TIME, startDate can be either.
        triggerDateTime.isDate = false;
        triggerDateTime.addDuration(alarm.alarmComponent.trigger.value);
        alarm.alarmComponent.setTriggerFromAbsolute(triggerDateTime);
        alarm.absoluteDate = (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_1__.getDateFromDateTimeValue)(alarm.alarmComponent.trigger.value);
        alarm.absoluteTimezoneId = alarm.alarmComponent.trigger.value.timezoneId;
        console.debug(alarm.alarmComponent.toICALJs().toString());
      }
      alarm.relativeIsBefore = null;
      alarm.relativeIsRelatedToStart = null;
      alarm.relativeUnitTimed = null;
      alarm.relativeAmountTimed = null;
      alarm.relativeUnitAllDay = null;
      alarm.relativeAmountAllDay = null;
      alarm.relativeHoursAllDay = null;
      alarm.relativeMinutesAllDay = null;
      alarm.relativeTrigger = null;
    },
    changeAlarmFromAbsoluteToRelative(_ref74) {
      let {
        calendarObjectInstance,
        alarm
      } = _ref74;
      if (alarm.alarmComponent) {
        const duration = alarm.alarmComponent.trigger.value.subtractDateWithTimezone(calendarObjectInstance.eventComponent.startDate);
        alarm.alarmComponent.setTriggerFromRelative(duration);
        alarm.relativeIsBefore = alarm.alarmComponent.trigger.value.isNegative;
        alarm.relativeIsRelatedToStart = true;
        alarm.relativeTrigger = duration.totalSeconds;
      }
      this.updateAlarmAllDayParts({
        alarm
      });
      this.updateAlarmTimedParts({
        alarm
      });
      alarm.absoluteDate = null;
      alarm.absoluteTimezoneId = null;
    },
    toggleAllDay(_ref75) {
      let {
        calendarObjectInstance
      } = _ref75;
      const settingsStore = (0,_settings_js__WEBPACK_IMPORTED_MODULE_14__["default"])();
      this.toggleAllDayMutation({
        calendarObjectInstance
      });
      if (!calendarObjectInstance.isAllDay) {
        if (calendarObjectInstance.startTimezoneId === 'floating') {
          const startTimezone = settingsStore.getResolvedTimezone;
          this.changeStartTimezoneMutation({
            calendarObjectInstance,
            startTimezone
          });
        }
        this.changeTimeToDefaultForTimedEvents({
          calendarObjectInstance
        });
      }
    }
  }
}));

/***/ }),

/***/ "./src/store/calendarObjects.js":
/*!**************************************!*\
  !*** ./src/store/calendarObjects.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_calendarObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/calendarObject.js */ "./src/models/calendarObject.js");
/* harmony import */ var _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger.js */ "./src/utils/logger.js");
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchedTimeRanges.js */ "./src/store/fetchedTimeRanges.js");
/* harmony import */ var _calendars_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendars.js */ "./src/store/calendars.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _calendarObjectInstance_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendarObjectInstance.js */ "./src/store/calendarObjectInstance.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_timezones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/timezones */ "./node_modules/@nextcloud/timezones/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,pinia__WEBPACK_IMPORTED_MODULE_7__.defineStore)('calendarObjects', {
  state: () => {
    return {
      calendarObjects: {},
      modificationCount: 0
    };
  },
  getters: {
    /**
     * Gets a calendar-object based on its id
     *
     * @param {object} state The store data
     * @return {function({String}): CalendarObject}
     */
    getCalendarObjectById: state => id => state.calendarObjects[id]
  },
  actions: {
    /**
     * Moves a calendar-object to a different calendar
     *
     * @param {object} data destructuring object
     * @param {CalendarObject} data.calendarObject Calendar-object to delete
     * @param {string} data.newCalendarId Calendar-Id of calendar to move this calendar-object to
     * @return {Promise<void>}
     */
    async moveCalendarObject(_ref) {
      let {
        calendarObject,
        newCalendarId
      } = _ref;
      if (!calendarObject.existsOnServer) {
        return;
      }
      const fetchedTimeRangesStore = (0,_fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      const calendarsStore = (0,_calendars_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
      const oldCalendarObjectId = calendarObject.id;
      const oldCalendarId = calendarObject.calendarId;
      if (oldCalendarId === newCalendarId) {
        _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error('Old calendar Id and new calendar Id are the same, nothing to move …');
        return;
      }
      const newCalendar = calendarsStore.getCalendarById(newCalendarId);
      if (!newCalendar) {
        _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error('Calendar to move to not found, aborting …');
        return;
      }
      await calendarObject.dav.move(newCalendar.dav);
      // Update calendarId in calendarObject manually as it is not stored in dav
      this.calendarObjects[calendarObject.id].calendarId = newCalendarId;
      calendarsStore.addCalendarObjectToCalendarMutation({
        calendar: {
          id: newCalendarId
        },
        calendarObjectId: calendarObject.id
      });
      fetchedTimeRangesStore.addCalendarObjectIdToAllTimeRangesOfCalendar({
        calendarId: newCalendarId,
        calendarObjectId: calendarObject.id
      });
      calendarsStore.deleteCalendarObjectFromCalendarMutation({
        calendar: {
          id: oldCalendarId
        },
        calendarObjectId: oldCalendarObjectId
      });
      fetchedTimeRangesStore.removeCalendarObjectIdFromAllTimeRangesOfCalendar({
        calendarId: oldCalendarId,
        calendarObjectId: oldCalendarObjectId
      });
      this.modificationCount++;
    },
    /**
     * Updates a calendar-object
     *
     * @param {object} data destructuring object
     * @param {CalendarObject} data.calendarObject Calendar-object to delete
     * @return {Promise<void>}
     */
    async updateCalendarObject(_ref2) {
      let {
        calendarObject
      } = _ref2;
      const fetchedTimeRangesStore = (0,_fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      const calendarsStore = (0,_calendars_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
      if (calendarObject.existsOnServer) {
        calendarObject.dav.data = calendarObject.calendarComponent.toICS();
        await calendarObject.dav.update();
        fetchedTimeRangesStore.addCalendarObjectIdToAllTimeRangesOfCalendar({
          calendarId: calendarObject.calendarId,
          calendarObjectId: calendarObject.id
        });
        this.modificationCount++;
        return;

        // TODO - catch conflicts
      }
      const calendar = calendarsStore.getCalendarById(calendarObject.calendarId);
      calendarObject.dav = await calendar.dav.createVObject(calendarObject.calendarComponent.toICS());
      calendarObject.existsOnServer = true;
      this.updateCalendarObjectIdMutation({
        calendarObject
      });
      this.appendCalendarObjectMutation({
        calendarObject
      });
      calendarsStore.addCalendarObjectToCalendarMutation({
        calendar: {
          id: calendarObject.calendarId
        },
        calendarObjectId: calendarObject.id
      });
      fetchedTimeRangesStore.addCalendarObjectIdToAllTimeRangesOfCalendar({
        calendarId: calendarObject.calendarId,
        calendarObjectId: calendarObject.id
      });
      this.resetCalendarObjectToDavMutation({
        calendarObject
      });
      this.modificationCount++;
    },
    /**
     * Creates a new calendar-object from an recurrence-exception fork
     *
     * @param {object} data destructuring object
     * @param {EventComponent} data.eventComponent EventComponent to store
     * @param {string} data.calendarId The calendar-id to store it in
     * @return {Promise<void>}
     */
    async createCalendarObjectFromFork(_ref3) {
      let {
        eventComponent,
        calendarId
      } = _ref3;
      const calendarsStore = (0,_calendars_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
      const fetchedTimeRangesStore = (0,_fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      const calendar = calendarsStore.getCalendarById(calendarId);
      const calendarObject = (0,_models_calendarObject_js__WEBPACK_IMPORTED_MODULE_0__.mapCalendarJsToCalendarObject)(eventComponent.root, calendar.id);
      calendarObject.dav = await calendar.dav.createVObject(calendarObject.calendarComponent.toICS());
      calendarObject.existsOnServer = true;
      this.updateCalendarObjectIdMutation({
        calendarObject
      });
      this.appendCalendarObjectMutation({
        calendarObject
      });
      calendarsStore.addCalendarObjectToCalendarMutation({
        calendar: {
          id: calendarObject.calendarId
        },
        calendarObjectId: calendarObject.id
      });
      fetchedTimeRangesStore.addCalendarObjectIdToAllTimeRangesOfCalendar({
        calendarId: calendar.id,
        calendarObjectId: calendarObject.id
      });
      this.modificationCount++;
    },
    /**
     * Deletes a calendar-object
     *
     * @param {object} data destructuring object
     * @param {CalendarObject} data.calendarObject Calendar-object to delete
     * @return {Promise<void>}
     */
    async deleteCalendarObject(_ref4) {
      let {
        calendarObject
      } = _ref4;
      const calendarsStore = (0,_calendars_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
      const fetchedTimeRangesStore = (0,_fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

      // If this calendar-object was not created on the server yet,
      // no need to send requests to the server
      if (calendarObject.existsOnServer) {
        await calendarObject.dav.delete();
      }

      /// TODO: delete this.calendarObjects[calendarObject.id]
      vue__WEBPACK_IMPORTED_MODULE_8__["default"].delete(this.calendarObjects, calendarObject.id);
      calendarsStore.deleteCalendarObjectFromCalendarMutation({
        calendar: {
          id: calendarObject.calendarId
        },
        calendarObjectId: calendarObject.id
      });
      fetchedTimeRangesStore.removeCalendarObjectIdFromAnyTimeRange({
        calendarObjectId: calendarObject.id
      });
      this.modificationCount++;
    },
    /**
     * Creates a new calendar object based on start, end, timezone and isAllDay
     *
     * @param {object} data destructuring object
     * @param {number} data.start Timestamp for start of new event
     * @param {number} data.end Timestamp for end of new event
     * @param {string} data.timezoneId asd
     * @param {boolean} data.isAllDay foo
     * @return {Promise<CalendarObject>}
     */
    createNewEvent(_ref5) {
      let {
        start,
        end,
        timezoneId,
        isAllDay
      } = _ref5;
      const calendarsStore = (0,_calendars_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
      const timezoneManager = (0,_nextcloud_timezones__WEBPACK_IMPORTED_MODULE_6__.getTimezoneManager)();
      const timezone = timezoneManager.getTimezoneForId(timezoneId);
      const startDate = new Date(start * 1000);
      const endDate = new Date(end * 1000);
      const startDateTime = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DateTimeValue.fromJSDate(startDate, true).getInTimezone(timezone);
      const endDateTime = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.DateTimeValue.fromJSDate(endDate, true).getInTimezone(timezone);
      if (isAllDay) {
        startDateTime.isDate = true;
        endDateTime.isDate = true;
      }
      const calendar = (0,_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.createEvent)(startDateTime, endDateTime);
      for (const vObject of calendar.getVObjectIterator()) {
        vObject.undirtify();
      }
      const firstCalendar = calendarsStore.sortedCalendars[0].id;
      return Promise.resolve((0,_models_calendarObject_js__WEBPACK_IMPORTED_MODULE_0__.mapCalendarJsToCalendarObject)(calendar, firstCalendar));
    },
    /**
     * Updates the time of the new calendar object
     *
     * @param {object} data destructuring object
     * @param {CalendarObject} data.calendarObjectInstance Calendar-object to
     * @param {number} data.start Timestamp for start of new event
     * @param {number} data.end Timestamp for end of new event
     * @param {string} data.timezoneId asd
     * @param {boolean} data.isAllDay foo
     */
    updateTimeOfNewEvent(_ref6) {
      let {
        calendarObjectInstance,
        start,
        end,
        timezoneId,
        isAllDay
      } = _ref6;
      const calendarObjectInstanceStore = (0,_calendarObjectInstance_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
      const isDirty = calendarObjectInstanceStore.calendarObjectInstance.eventComponent.isDirty();
      const startDate = new Date(start * 1000);
      const endDate = new Date(end * 1000);
      if (calendarObjectInstance.isAllDay !== isAllDay) {
        calendarObjectInstanceStore.toggleAllDayMutation({
          calendarObjectInstance
        });
      }
      calendarObjectInstanceStore.changeStartTimezone({
        calendarObjectInstance,
        startTimezone: timezoneId
      });
      calendarObjectInstanceStore.changeEndTimezone({
        calendarObjectInstance,
        endTimezone: timezoneId
      });
      calendarObjectInstanceStore.changeStartDateMutation({
        calendarObjectInstance,
        startDate
      });
      if (isAllDay) {
        // The full-calendar end date is exclusive, but the end-date
        // that changeEndDate expects is inclusive, so we have to deduct one day.
        calendarObjectInstanceStore.changeEndDateMutation({
          calendarObjectInstance,
          endDate: new Date(endDate.getTime() - 24 * 60 * 60 * 1000)
        });
      } else {
        calendarObjectInstanceStore.changeEndDateMutation({
          calendarObjectInstance,
          endDate
        });
      }
      if (!isDirty) {
        calendarObjectInstance.eventComponent.undirtify();
      }
    },
    /**
     * Adds an array of calendar-objects to the store or update them if they already exist
     *
     * @param {object} data The destructuring object
     * @param {object[]} data.calendarObjects Calendar-objects to add
     */
    appendOrUpdateCalendarObjectsMutation(_ref7) {
      let {
        calendarObjects = []
      } = _ref7;
      for (const calendarObject of calendarObjects) {
        /// TODO this.calendarObjects[calendarObject.id] = calendarObject
        vue__WEBPACK_IMPORTED_MODULE_8__["default"].set(this.calendarObjects, calendarObject.id, calendarObject);
      }
    },
    /**
     * Adds one calendar-object to the store
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObject Calendar-object to add
     */
    appendCalendarObjectMutation(_ref8) {
      let {
        calendarObject
      } = _ref8;
      if (!this.calendarObjects[calendarObject.id]) {
        /// TODO this.calendarObjects[calendarObject.id] = calendarObject
        vue__WEBPACK_IMPORTED_MODULE_8__["default"].set(this.calendarObjects, calendarObject.id, calendarObject);
      }
    },
    /**
     * Updates a calendar-object id
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObject Calendar-object to update
     */
    updateCalendarObjectIdMutation(_ref9) {
      let {
        calendarObject
      } = _ref9;
      if (calendarObject.dav === null) {
        calendarObject.id = null;
      } else {
        calendarObject.id = btoa(calendarObject.dav.url);
      }
    },
    /**
     * Resets a calendar-object to its original server state
     *
     * @param {object} data The destructuring object
     * @param {object} data.calendarObject Calendar-object to reset
     */
    resetCalendarObjectToDavMutation(_ref10) {
      let {
        calendarObject
      } = _ref10;
      calendarObject = this.calendarObjects[calendarObject.id];

      // If this object does not exist on the server yet, there is nothing to do
      if (!calendarObject || !calendarObject.existsOnServer) {
        return;
      }
      const parserManager = (0,_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_2__.getParserManager)();
      const parser = parserManager.getParserForFileType('text/calendar');
      parser.parse(calendarObject.dav.data);
      const itemIterator = parser.getItemIterator();
      const firstVCalendar = itemIterator.next().value;
      if (firstVCalendar) {
        calendarObject.calendarComponent = firstVCalendar;
      }
    }
  }
}));

/***/ }),

/***/ "./src/store/calendars.js":
/*!********************************!*\
  !*** ./src/store/calendars.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/caldavService.js */ "./src/services/caldavService.js");
/* harmony import */ var _models_calendarObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/calendarObject.js */ "./src/models/calendarObject.js");
/* harmony import */ var _utils_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/date.js */ "./src/utils/date.js");
/* harmony import */ var _models_calendar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/calendar.js */ "./src/models/calendar.js");
/* harmony import */ var p_limit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! p-limit */ "./node_modules/p-limit/index.js");
/* harmony import */ var _utils_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/color.js */ "./src/utils/color.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/timezoneDataProviderService.js */ "./src/services/timezoneDataProviderService.js");
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _nextcloud_timezones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/timezones */ "./node_modules/@nextcloud/timezones/dist/index.mjs");
/* harmony import */ var _models_consts_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/consts.js */ "./src/models/consts.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _importState_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./importState.js */ "./src/store/importState.js");
/* harmony import */ var _importFiles_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./importFiles.js */ "./src/store/importFiles.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings.js */ "./src/store/settings.js");
/* harmony import */ var _fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fetchedTimeRanges.js */ "./src/store/fetchedTimeRanges.js");
/* harmony import */ var _principals_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./principals.js */ "./src/store/principals.js");
/* harmony import */ var _calendarObjects_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./calendarObjects.js */ "./src/store/calendarObjects.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,pinia__WEBPACK_IMPORTED_MODULE_17__.defineStore)('calendars', {
  state: () => {
    return {
      calendars: [],
      trashBin: undefined,
      scheduleInbox: undefined,
      deletedCalendars: [],
      deletedCalendarObjects: [],
      calendarsById: {},
      initialCalendarsLoaded: false,
      editCalendarModal: undefined,
      syncTokens: new Map()
    };
  },
  getters: {
    /**
     * List of sorted calendars and subscriptions
     *
     * @param {object} state the store data
     * @param {object} store the store
     * @return {Array}
     */
    sortedCalendarsSubscriptions(state) {
      const settingsStore = (0,_settings_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
      return state.calendars.filter(calendar => calendar.supportsEvents || settingsStore.showTasks && calendar.supportsTasks).sort((a, b) => a.order - b.order);
    },
    /**
     * List of sorted calendars
     *
     * @param {object} state the store data
     * @return {Array}
     */
    sortedCalendars(state) {
      return state.calendars.filter(calendar => calendar.supportsEvents).filter(calendar => !calendar.readOnly).sort((a, b) => a.order - b.order);
    },
    /**
     * List of sorted calendars owned by the principal
     *
     * @param {object} state the store data
     * @return {Array}
     */
    ownSortedCalendars(state) {
      return state.calendars.filter(calendar => calendar.supportsEvents).filter(calendar => !calendar.readOnly).filter(calendar => !calendar.isSharedWithMe).sort((a, b) => a.order - b.order);
    },
    hasTrashBin(state) {
      return state.trashBin !== undefined && state.trashBin.retentionDuration !== 0;
    },
    /**
     * List of deleted sorted calendars
     *
     * @param {object} state the store data
     * @return {Array}
     */
    sortedDeletedCalendars(state) {
      return state.deletedCalendars.sort((a, b) => a.deletedAt - b.deletedAt);
    },
    /**
     * List of deleted calendars objects
     *
     * @param {object} state the store data
     * @return {Array}
     */
    allDeletedCalendarObjects(state) {
      const calendarUriMap = {};
      state.calendars.forEach(calendar => {
        const withoutTrail = calendar.url.replace(/\/$/, '');
        const uri = withoutTrail.slice(withoutTrail.lastIndexOf('/') + 1);
        calendarUriMap[uri] = calendar;
      });
      return state.deletedCalendarObjects.map(obj => ({
        calendar: calendarUriMap[obj.dav._props['{http://nextcloud.com/ns}calendar-uri']],
        ...obj
      }));
    },
    /**
     * List of sorted subscriptions
     *
     * @param {object} state the store data
     * @return {Array}
     */
    sortedSubscriptions(state) {
      return state.calendars.filter(calendar => calendar.supportsEvents).filter(calendar => calendar.readOnly).sort((a, b) => a.order - b.order);
    },
    /**
     * List of enabled calendars and subscriptions
     *
     * @param {object} state the store data
     * @return {Array}
     */
    enabledCalendars(state) {
      const settingsStore = (0,_settings_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
      return state.calendars.filter(calendar => calendar.supportsEvents || settingsStore.showTasks && calendar.supportsTasks).filter(calendar => calendar.enabled);
    },
    /**
     * Gets a calendar by its Id
     *
     * @param {object} state the store data
     * @return {function({String}): {Object}}
     */
    getCalendarById: state => calendarId => state.calendarsById[calendarId],
    /**
     * Gets a calendar by its url
     *
     * @param {object} state the store data
     * @return {function({String}): {Object}}
     */
    getCalendarByUrl: state => url => state.calendars.find(calendar => calendar.url === url),
    /**
     * Gets the contact's birthday calendar or null
     *
     * @param {object} state the store data
     * @return {object | null}
     */
    getBirthdayCalendar: state => {
      for (const calendar of state.calendars) {
        const url = calendar.url.slice(0, -1);
        const lastSlash = url.lastIndexOf('/');
        const uri = url.slice(lastSlash + 1);
        if (uri === _models_consts_js__WEBPACK_IMPORTED_MODULE_9__.CALDAV_BIRTHDAY_CALENDAR) {
          return calendar;
        }
      }
      return null;
    },
    /**
     * @return {function({Boolean}, {Boolean}, {Boolean}): {Object}[]}
     */
    sortedCalendarFilteredByComponents() {
      return (vevent, vjournal, vtodo) => {
        return this.sortedCalendars.filter(calendar => {
          if (vevent && !calendar.supportsEvents) {
            return false;
          }
          if (vjournal && !calendar.supportsJournals) {
            return false;
          }
          if (vtodo && !calendar.supportsTasks) {
            return false;
          }
          return true;
        });
      };
    },
    /**
     * Get the current sync token of a calendar or undefined it the calendar is not present
     *
     * @param {object} state The pinia state object
     * @return {function({id: string}): string | undefined}
     */
    getCalendarSyncToken: state => calendar => {
      const existingCalendar = state.calendarsById[calendar.id];
      if (!existingCalendar) {
        return undefined;
      }
      return state.syncTokens.get(calendar.id) ?? existingCalendar.dav.syncToken;
    }
  },
  actions: {
    /**
     * Retrieve and commit calendars and other collections
     *
     * @return {Promise<object>} the results
     */
    async loadCollections() {
      const principalsStore = (0,_principals_js__WEBPACK_IMPORTED_MODULE_15__["default"])();
      const {
        calendars,
        trashBins,
        scheduleInboxes,
        subscriptions
      } = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.findAll)();
      console.info('calendar home scanned', calendars, trashBins, subscriptions);
      calendars.map(calendar => (0,_models_calendar_js__WEBPACK_IMPORTED_MODULE_3__.mapDavCollectionToCalendar)(calendar, principalsStore.getCurrentUserPrincipal)).forEach(calendar => {
        this.addCalendarMutation({
          calendar
        });
      });
      if (trashBins.length) {
        this.trashBin = trashBins[0];
      }
      if (scheduleInboxes.length) {
        this.scheduleInbox = scheduleInboxes[0];
      }
      this.initialCalendarsLoaded = true;
      return {
        calendars: this.calendars,
        trashBin: this.trashBin
      };
    },
    /**
     * Retrieve and commit deleted calendars
     *
     * @return {Promise<Array>} the calendars
     */
    async loadDeletedCalendars() {
      const calendars = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.findAllDeletedCalendars)();
      calendars.forEach(calendar => {
        if (this.deletedCalendars.some(c => c.url === calendar.url)) {
          // This calendar is already known
          return;
        }
        this.deletedCalendars.push(calendar);
      });
    },
    /**
     * Retrieve and commit deleted calendar objects
     */
    async loadDeletedCalendarObjects() {
      const vobjects = await this.trashBin.findDeletedObjects(); /// TODO what is this?
      console.info('vobjects loaded', {
        vobjects
      });
      vobjects.forEach(vobject => {
        try {
          const calendarObject = (0,_models_calendarObject_js__WEBPACK_IMPORTED_MODULE_1__.mapCDavObjectToCalendarObject)(vobject, undefined);
          if (this.deletedCalendarObjects.some(c => c.uri === calendarObject.uri)) {
            // This vobject is already known
            return;
          }
          this.deletedCalendarObjects.push(calendarObject);
        } catch (error) {
          console.error('could not convert calendar object', vobject, error);
        }
      });
    },
    /**
     * Retrieve and commit public calendars
     *
     * @param {object} data The data destructuring object
     * @param {string[]} data.tokens The tokens to load
     * @return {Promise<object[]>}
     */
    async getPublicCalendars(_ref) {
      let {
        tokens
      } = _ref;
      const calendars = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.findPublicCalendarsByTokens)(tokens);
      const calendarObjects = [];
      for (const davCalendar of calendars) {
        const calendar = (0,_models_calendar_js__WEBPACK_IMPORTED_MODULE_3__.mapDavCollectionToCalendar)(davCalendar);
        this.addCalendarMutation({
          calendar
        });
        calendarObjects.push(calendar);
      }
      this.initialCalendarsLoaded = true;
      return calendarObjects;
    },
    /**
     * Append a new calendar to array of existing calendars
     *
     * @param {object} data destructuring object
     * @param {object} data.displayName The name of the new calendar
     * @param {object} data.color The color of the new calendar
     * @param {object} data.order The order of the new calendar
     * @param {string[]} data.components The supported components of the calendar
     * @param {string=} data.timezone The timezoneId
     * @return {Promise}
     */
    async appendCalendar(_ref2) {
      let {
        displayName,
        color,
        order,
        components = ['VEVENT'],
        timezone = null
      } = _ref2;
      const principalsStore = (0,_principals_js__WEBPACK_IMPORTED_MODULE_15__["default"])();
      const settingsStore = (0,_settings_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
      if (timezone === null) {
        timezone = settingsStore.getResolvedTimezone;
      }
      let timezoneIcs = null;
      const timezoneObject = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_6__["default"])().getTimezoneForId(timezone);
      if (timezoneObject !== _nextcloud_timezones__WEBPACK_IMPORTED_MODULE_8__.Timezone.utc && timezoneObject !== _nextcloud_timezones__WEBPACK_IMPORTED_MODULE_8__.Timezone.floating) {
        const calendar = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_7__.CalendarComponent.fromEmpty();
        calendar.addComponent(_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_7__.TimezoneComponent.fromICALJs(timezoneObject.toICALJs()));
        timezoneIcs = calendar.toICS(false);
      }
      const response = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.createCalendar)(displayName, color, components, order, timezoneIcs);
      const calendar = (0,_models_calendar_js__WEBPACK_IMPORTED_MODULE_3__.mapDavCollectionToCalendar)(response, principalsStore.getCurrentUserPrincipal);
      this.addCalendarMutation({
        calendar
      });
    },
    /**
     * Append a new subscription to array of existing calendars
     *
     * @param {object} data destructuring object
     * @param {string} data.displayName Name of new subscription
     * @param {string} data.color Color of new subscription
     * @param {string} data.order Order of new subscription
     * @param {string} data.source Source of new subscription
     * @return {Promise}
     */
    async appendSubscription(_ref3) {
      let {
        displayName,
        color,
        order,
        source
      } = _ref3;
      const principalsStore = (0,_principals_js__WEBPACK_IMPORTED_MODULE_15__["default"])();
      const response = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.createSubscription)(displayName, color, source, order);
      const calendar = (0,_models_calendar_js__WEBPACK_IMPORTED_MODULE_3__.mapDavCollectionToCalendar)(response, principalsStore.getCurrentUserPrincipal);
      this.addCalendarMutation({
        calendar
      });
    },
    /**
     * Delete a calendar
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to delete
     * @return {Promise}
     */
    async deleteCalendar(_ref4) {
      let {
        calendar
      } = _ref4;
      await calendar.dav.delete();
      this.calendars.splice(this.calendars.indexOf(calendar), 1);
      /// TODO this.calendarsById.delete(calendar.id)
      vue__WEBPACK_IMPORTED_MODULE_18__["default"].delete(this.calendarsById, calendar.id);
      this.syncTokens.delete(calendar.id);
    },
    /**
     * Delete a calendar in the trash bin
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to delete
     * @return {Promise}
     */
    async deleteCalendarPermanently(_ref5) {
      let {
        calendar
      } = _ref5;
      await calendar.delete({
        'X-NC-CalDAV-No-Trashbin': 1
      });
      this.deletedCalendars = this.deletedCalendars.filter(c => c !== calendar);
    },
    deleteCalendarAfterTimeout(_ref6) {
      let {
        calendar,
        countdown = 7
      } = _ref6;
      /// TODO this.calendarsById[calendar.id].countdown = countdown
      vue__WEBPACK_IMPORTED_MODULE_18__["default"].set(this.calendarsById[calendar.id], 'countdown', countdown);
      const deleteInterval = setInterval(() => {
        countdown--;
        if (countdown < 0) {
          countdown = 0;
        }

        /// TODO this.calendarsById[calendar.id].countdown = countdown
        vue__WEBPACK_IMPORTED_MODULE_18__["default"].set(this.calendarsById[calendar.id], 'countdown', countdown);
      }, 1000);
      const deleteTimeout = setTimeout(async () => {
        try {
          await this.deleteCalendar({
            calendar
          });
        } catch (error) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_10__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('calendar', 'An error occurred, unable to delete the calendar.'));
          console.error(error);
        } finally {
          clearInterval(deleteInterval);
        }
      }, 7000);
      /// TODO this.calendarsById[calendar.id].deleteInterval = deleteInterval
      /// TODO this.calendarsById[calendar.id].deleteTimeout = deleteTimeout
      vue__WEBPACK_IMPORTED_MODULE_18__["default"].set(this.calendarsById[calendar.id], 'deleteInterval', deleteInterval);
      vue__WEBPACK_IMPORTED_MODULE_18__["default"].set(this.calendarsById[calendar.id], 'deleteTimeout', deleteTimeout);
    },
    cancelCalendarDeletion(_ref7) {
      let {
        calendar
      } = _ref7;
      if (calendar.deleteInterval) clearInterval(calendar.deleteInterval);
      if (calendar.deleteTimeout) clearTimeout(calendar.deleteTimeout);
      this.calendarsById[calendar.id].deleteInterval = undefined;
      this.calendarsById[calendar.id].deleteTimeout = undefined;
    },
    async restoreCalendar(_ref8) {
      let {
        calendar
      } = _ref8;
      await this.trashBin.restore(calendar.url);
      this.deletedCalendars = this.deletedCalendars.filter(c => c !== calendar);
    },
    async restoreCalendarObject(_ref9) {
      let {
        vobject
      } = _ref9;
      const fetchedTimeRangesStore = (0,_fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_14__["default"])();
      const calendarObjectsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_16__["default"])();
      await this.trashBin.restore(vobject.uri);

      // Clean up the data locally
      this.deletedCalendarObjects = this.deletedCalendarObjects.filter(vo => vo.id !== vobject.id);

      // Delete cached time range that includes the restored event
      const calendarObject = (0,_models_calendarObject_js__WEBPACK_IMPORTED_MODULE_1__.mapCDavObjectToCalendarObject)(vobject.dav, undefined);
      const component = calendarObject.calendarComponent.getFirstComponent(vobject.objectType);
      const timeRange = fetchedTimeRangesStore.getTimeRangeForCalendarCoveringRange(vobject.calendar.id, component.startDate?.unixTime, component.endDate?.unixTime);
      if (timeRange) {
        this.deleteFetchedTimeRangeFromCalendarMutation({
          calendar: vobject.calendar,
          fetchedTimeRangeId: timeRange.id
        });
        fetchedTimeRangesStore.removeTimeRange({
          timeRangeId: timeRange.id
        });
      }

      // Trigger calendar refresh
      calendarObjectsStore.modificationCount++;
    },
    /**
     * Deletes a calendar-object permanently
     *
     * @param {object} data destructuring object
     * @param {vobject} data.vobject Calendar-object to delete
     * @return {Promise<void>}
     */
    async deleteCalendarObjectPermanently(_ref10) {
      let {
        vobject
      } = _ref10;
      await vobject.dav.delete({
        'X-NC-CalDAV-No-Trashbin': 1
      });
      this.deletedCalendarObjects = this.deletedCalendarObjects.filter(vo => vo.id !== vobject.id);
    },
    /**
     * Toggle whether a calendar is enabled
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to modify
     * @param {boolean} data.updateDav whether to persist changes to the CalDAV backend (default: true)
     * @return {Promise}
     */
    async toggleCalendarEnabled(_ref11) {
      let {
        calendar,
        updateDav = true
      } = _ref11;
      this.calendarsById[calendar.id].loading = true;
      calendar.dav.enabled = !calendar.dav.enabled;
      try {
        if (updateDav) {
          await calendar.dav.update();
        }
        this.calendarsById[calendar.id].loading = false;
        this.calendarsById[calendar.id].enabled = !this.calendarsById[calendar.id].enabled;
      } catch (error) {
        this.calendarsById[calendar.id].loading = false;
        throw error;
      }
    },
    /**
     * Rename a calendar
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to modify
     * @param {string} data.newName the new name of the calendar
     * @return {Promise}
     */
    async renameCalendar(_ref12) {
      let {
        calendar,
        newName
      } = _ref12;
      calendar.dav.displayname = newName;
      await calendar.dav.update();
      this.calendarsById[calendar.id].displayName = newName;
    },
    /**
     * Change a calendar's color
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to modify
     * @param {string} data.newColor the new color of the calendar
     * @return {Promise}
     */
    async changeCalendarColor(_ref13) {
      let {
        calendar,
        newColor
      } = _ref13;
      calendar.dav.color = newColor;
      await calendar.dav.update();
      this.calendarsById[calendar.id].color = newColor;
    },
    /**
     * Change a calendars transparency
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to modify
     * @param {string} data.transparency the new transparency
     * @return {Promise}
     */
    async changeCalendarTransparency(_ref14) {
      let {
        calendar,
        transparency
      } = _ref14;
      if (calendar.dav.transparency === transparency) {
        return;
      }
      calendar.dav.transparency = transparency;
      await calendar.dav.update();
      this.calendarsById[calendar.id].transparency = transparency;
    },
    /**
     * Share calendar with User or Group
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to share
     * @param {string} data.user the userId
     * @param {string} data.displayName the displayName
     * @param {string} data.uri the sharing principalScheme uri
     * @param {boolean} data.isGroup is this a group?
     * @param {boolean} data.isCircle is this a circle?
     */
    async shareCalendar(_ref15) {
      let {
        calendar,
        user,
        displayName,
        uri,
        isGroup,
        isCircle
      } = _ref15;
      // Share calendar with entered group or user
      await calendar.dav.share(uri);
      const newSharee = {
        displayName,
        id: user,
        writeable: false,
        isGroup,
        isCircle,
        uri
      };
      this.calendarsById[calendar.id].shares.push(newSharee);
    },
    /**
     * Toggle permissions of calendar Sharees writeable rights
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to change
     * @param {string} data.uri the sharing principalScheme uri
     */
    async toggleCalendarShareWritable(_ref16) {
      let {
        calendar,
        uri
      } = _ref16;
      const sharee = calendar.shares.find(sharee => sharee.uri === uri);
      await calendar.dav.share(uri, !sharee.writeable);
      /// TODO test this not sure what it does
      calendar = this.calendars.find(search => search.id === calendar.id);
      sharee.writeable = !sharee.writeable;
    },
    /**
     * Remove sharee from calendar
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to change
     * @param {string} data.uri the sharing principalScheme uri
     */
    async unshareCalendar(_ref17) {
      let {
        calendar,
        uri
      } = _ref17;
      await calendar.dav.unshare(uri);
      calendar = this.calendars.find(search => search.id === calendar.id);
      const shareIndex = calendar.shares.findIndex(sharee => sharee.uri === uri);
      calendar.shares.splice(shareIndex, 1);
    },
    /**
     * Publish a calendar
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to change
     * @return {Promise<void>}
     */
    async publishCalendar(_ref18) {
      let {
        calendar
      } = _ref18;
      await calendar.dav.publish();
      const publishURL = calendar.dav.publishURL;
      calendar = this.calendars.find(search => search.id === calendar.id);
      calendar.publishURL = publishURL;
    },
    /**
     * Unpublish a calendar
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to change
     * @return {Promise<void>}
     */
    async unpublishCalendar(_ref19) {
      let {
        calendar
      } = _ref19;
      await calendar.dav.unpublish();
      calendar = this.calendars.find(search => search.id === calendar.id);
      calendar.publishURL = null;
    },
    /**
     * Retrieve the events of the specified calendar
     * and commit the results
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to get events from
     * @param {Date} data.from the date to start querying events from
     * @param {Date} data.to the last date to query events from
     * @return {Promise<void>}
     */
    async getEventsFromCalendarInTimeRange(_ref20) {
      let {
        calendar,
        from,
        to
      } = _ref20;
      const fetchedTimeRangesStore = (0,_fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_14__["default"])();
      const settingsStore = (0,_settings_js__WEBPACK_IMPORTED_MODULE_13__["default"])();
      const calendarObjectsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_16__["default"])();
      this.calendarsById[calendar.id].loading = true;
      const response = await calendar.dav.findByTypeInTimeRange('VEVENT', from, to);
      let responseTodo = [];
      if (settingsStore.showTasks) {
        responseTodo = await calendar.dav.findByTypeInTimeRange('VTODO', from, to);
      }
      fetchedTimeRangesStore.addTimeRange({
        calendarId: calendar.id,
        from: (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_2__.getUnixTimestampFromDate)(from),
        to: (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_2__.getUnixTimestampFromDate)(to),
        lastFetched: (0,_utils_date_js__WEBPACK_IMPORTED_MODULE_2__.getUnixTimestampFromDate)((0,_utils_date_js__WEBPACK_IMPORTED_MODULE_2__.dateFactory)()),
        calendarObjectIds: []
      });
      const insertId = fetchedTimeRangesStore.lastTimeRangeInsertId;
      this.calendarsById[calendar.id].fetchedTimeRanges.push(insertId);
      const calendarObjects = [];
      const calendarObjectIds = [];
      for (const r of response.concat(responseTodo)) {
        try {
          const calendarObject = (0,_models_calendarObject_js__WEBPACK_IMPORTED_MODULE_1__.mapCDavObjectToCalendarObject)(r, calendar.id);
          calendarObjects.push(calendarObject);
          calendarObjectIds.push(calendarObject.id);
        } catch (e) {
          console.error(`could not convert calendar object of calendar ${calendar.id}`, e, {
            response: r
          });
        }
      }
      calendarObjectsStore.appendOrUpdateCalendarObjectsMutation({
        calendarObjects
      });
      for (const calendarObjectId of calendarObjectIds) {
        if (this.calendarsById[calendar.id].calendarObjects.indexOf(calendarObjectId) === -1) {
          this.calendarsById[calendar.id].calendarObjects.push(calendarObjectId);
        }
      }
      fetchedTimeRangesStore.appendCalendarObjectIdsToTimeFrame({
        timeRangeId: insertId,
        calendarObjectIds
      });
      this.calendarsById[calendar.id].loading = false;
      return fetchedTimeRangesStore.lastTimeRangeInsertId;
    },
    /**
     * Retrieve one object
     *
     * @param {object} data destructuring object
     * @param {string} data.objectId Id of the object to fetch
     * @return {Promise<CalendarObject>}
     */
    async getEventByObjectId(_ref21) {
      let {
        objectId
      } = _ref21;
      const calendarObjectsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_16__["default"])();
      // TODO - we should still check if the calendar-object is up to date
      //  - Just send head and compare etags
      if (calendarObjectsStore.getCalendarObjectById(objectId)) {
        return Promise.resolve(calendarObjectsStore.getCalendarObjectById(objectId));
      }

      // This might throw an exception, but we will leave it up to the methods
      // calling this action to properly handle it
      const objectPath = atob(objectId);
      const lastSlashIndex = objectPath.lastIndexOf('/');
      const calendarPath = objectPath.slice(0, lastSlashIndex + 1);
      const objectFileName = objectPath.slice(lastSlashIndex + 1);
      const calendarId = btoa(calendarPath);
      if (!this.calendarsById[calendarId]) {
        return Promise.reject(new Error(''));
      }
      const calendar = this.calendarsById[calendarId];
      const vObject = await calendar.dav.find(objectFileName);
      const calendarObject = (0,_models_calendarObject_js__WEBPACK_IMPORTED_MODULE_1__.mapCDavObjectToCalendarObject)(vObject, calendar.id);
      calendarObjectsStore.appendCalendarObjectMutation({
        calendarObject
      });
      this.addCalendarObjectToCalendarMutation({
        calendar: {
          id: calendarId
        },
        calendarObjectId: calendarObject.id
      });
      return calendarObject;
    },
    /**
     * Import events into calendar
     *
     */
    async importEventsIntoCalendar() {
      const importStateStore = (0,_importState_js__WEBPACK_IMPORTED_MODULE_11__["default"])();
      const importFilesStore = (0,_importFiles_js__WEBPACK_IMPORTED_MODULE_12__["default"])();
      const principalsStore = (0,_principals_js__WEBPACK_IMPORTED_MODULE_15__["default"])();
      const fetchedTimeRangesStore = (0,_fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_14__["default"])();
      const calendarObjectsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_16__["default"])();
      importStateStore.stage = _models_consts_js__WEBPACK_IMPORTED_MODULE_9__.IMPORT_STAGE_IMPORTING;

      // Create a copy
      const files = importFilesStore.importFiles.slice();
      let totalCount = 0;
      for (const file of files) {
        totalCount += file.parser.getItemCount();
        const calendarId = importFilesStore.importCalendarRelation[file.id];
        if (calendarId === 'new') {
          const displayName = file.parser.getName() || (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('calendar', 'Imported {filename}', {
            filename: file.name
          });
          const color = file.parser.getColor() || (0,_utils_color_js__WEBPACK_IMPORTED_MODULE_4__.uidToHexColor)(displayName);
          const components = [];
          if (file.parser.containsVEvents()) {
            components.push('VEVENT');
          }
          if (file.parser.containsVJournals()) {
            components.push('VJOURNAL');
          }
          if (file.parser.containsVTodos()) {
            components.push('VTODO');
          }
          const response = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.createCalendar)(displayName, color, components, 0);
          const calendar = (0,_models_calendar_js__WEBPACK_IMPORTED_MODULE_3__.mapDavCollectionToCalendar)(response, principalsStore.getCurrentUserPrincipal);
          this.addCalendarMutation({
            calendar
          });
          importFilesStore.setCalendarForFileId({
            fileId: file.id,
            calendarId: calendar.id
          });
        }
      }
      importStateStore.total = totalCount;
      const limit = (0,p_limit__WEBPACK_IMPORTED_MODULE_19__["default"])(3);
      const requests = [];
      for (const file of files) {
        const calendarId = importFilesStore.importCalendarRelation[file.id];
        const calendar = this.getCalendarById(calendarId);
        for (const item of file.parser.getItemIterator()) {
          requests.push(limit(async () => {
            const ics = item.toICS();
            let davObject;
            try {
              davObject = await calendar.dav.createVObject(ics);
            } catch (error) {
              importStateStore.denied++;
              console.error(error);
              return;
            }
            const calendarObject = (0,_models_calendarObject_js__WEBPACK_IMPORTED_MODULE_1__.mapCDavObjectToCalendarObject)(davObject, calendarId);
            calendarObjectsStore.appendCalendarObjectMutation({
              calendarObject
            });
            this.addCalendarObjectToCalendarMutation({
              calendar,
              calendarObjectId: calendarObject.id
            });
            fetchedTimeRangesStore.addCalendarObjectIdToAllTimeRangesOfCalendar({
              calendarId: calendar.id,
              calendarObjectId: calendarObject.id
            });
            importStateStore.accepted++;
          }));
        }
      }
      await Promise.all(requests);
      importStateStore.stage = _models_consts_js__WEBPACK_IMPORTED_MODULE_9__.IMPORT_STAGE_PROCESSING;
    },
    /**
     *
     * @param {object} data The data destructuring object
     * @param {object} data.newOrder The object containing String => Number with the new order
     * @return {Promise<void>}
     */
    async updateCalendarListOrder(_ref22) {
      let {
        newOrder
      } = _ref22;
      // keep a record of the original order in case we need to do a rollback

      const limit = (0,p_limit__WEBPACK_IMPORTED_MODULE_19__["default"])(3);
      const requests = [];
      const calendarsToUpdate = [];
      for (const key in newOrder) {
        requests.push(limit(async () => {
          const calendar = this.calendarsById[key];

          // Do not update unless necessary
          if (calendar.dav.order === newOrder[key]) {
            return;
          }
          calendar.dav.order = newOrder[key];
          await calendar.dav.update();
          calendarsToUpdate.push({
            calendar,
            newOrder: newOrder[key]
          });
        }));
      }
      await Promise.all(requests);
      for (const {
        calendar,
        newOrder
      } of calendarsToUpdate) {
        console.debug(calendar, newOrder);
        this.calendarsById[calendar.id].order = newOrder;
      }
    },
    /**
     * Adds calendar into state
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar the calendar to add
     */
    addCalendarMutation(_ref23) {
      let {
        calendar
      } = _ref23;
      const object = (0,_models_calendar_js__WEBPACK_IMPORTED_MODULE_3__.getDefaultCalendarObject)(calendar);
      if (!this.calendars.some(existing => existing.id === object.id)) {
        this.calendars.push(object);
        vue__WEBPACK_IMPORTED_MODULE_18__["default"].set(this.calendars, 0, this.calendars[0]); /// TODO remove with vue 3
      }
      /// TODO this.calendarsById[object.id] = object
      vue__WEBPACK_IMPORTED_MODULE_18__["default"].set(this.calendarsById, object.id, object);
    },
    /**
     * Removes fetched time-range from calendar
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar The calendar to remove a time-range from
     * @param {number} data.fetchedTimeRangeId The time-range-id to remove
     */
    deleteFetchedTimeRangeFromCalendarMutation(_ref24) {
      let {
        calendar,
        fetchedTimeRangeId
      } = _ref24;
      const index = this.calendarsById[calendar.id]?.fetchedTimeRanges.indexOf(fetchedTimeRangeId);
      if (index !== -1) {
        this.calendarsById[calendar.id].fetchedTimeRanges.splice(index, 1);
      }
    },
    /**
     * Adds calendar-object to calendar
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar The calendar to append objects to
     * @param {string} data.calendarObjectId The calendar object id to append
     */
    addCalendarObjectToCalendarMutation(_ref25) {
      let {
        calendar,
        calendarObjectId
      } = _ref25;
      if (this.calendarsById[calendar.id].calendarObjects.indexOf(calendarObjectId) === -1) {
        this.calendarsById[calendar.id].calendarObjects.push(calendarObjectId);
      }
    },
    /**
     * Removes calendar-object from calendar
     *
     * @param {object} data destructuring object
     * @param {object} data.calendar The calendar to delete objects from
     * @param {string} data.calendarObjectId The calendar object ids to delete
     */
    deleteCalendarObjectFromCalendarMutation(_ref26) {
      let {
        calendar,
        calendarObjectId
      } = _ref26;
      const index = this.calendarsById[calendar.id].calendarObjects.indexOf(calendarObjectId);
      if (index !== -1) {
        this.calendarsById[calendar.id].calendarObjects.slice(index, 1);
      }
    },
    /**
     * Update the sync token of a given calendar locally
     *
     * @param {object} data destructuring object
     * @param {{id: string}} data.calendar Calendar from the store
     * @param {string} data.syncToken New sync token value
     */
    updateCalendarSyncToken(_ref27) {
      let {
        calendar,
        syncToken
      } = _ref27;
      if (!this.getCalendarById(calendar.id)) {
        return;
      }
      this.syncTokens.set(calendar.id, syncToken);
    }
  }
}));

/***/ }),

/***/ "./src/store/fetchedTimeRanges.js":
/*!****************************************!*\
  !*** ./src/store/fetchedTimeRanges.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _calendarObjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendarObjects.js */ "./src/store/calendarObjects.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)('fetchedTimeRanges', {
  state: () => {
    return {
      lastTimeRangeInsertId: -1,
      fetchedTimeRanges: [],
      fetchedTimeRangesById: {}
    };
  },
  getters: {
    /**
     * Get all time-ranges for a calendar
     *
     * @param {object} state The Pinia state
     * @return {function({String}): {Object}[]}
     */
    getAllTimeRangesForCalendar: state => calendarId => state.fetchedTimeRanges.filter(f => f.calendarId === calendarId),
    /**
     * Get time-range covering
     *
     * @param {object} state The Pinia state
     * @return {function({Number}, {Number}, {Number}): {Object}|false}
     */
    getTimeRangeForCalendarCoveringRange: state => (calendarId, requestedFrom, requestedTo) => {
      return state.fetchedTimeRanges.find(f => {
        return f.calendarId === calendarId && f.from <= requestedFrom && f.to >= requestedTo;
      });
    },
    /**
     * Get all time-ranges that have been last fetched before a given time
     *
     * @param {object} state The Pinia state
     * @return {function({Number}): {Object}[]}
     */
    getAllTimeRangesOlderThan: state => olderThan => state.fetchedTimeRanges.filter(f => f.lastFetched <= olderThan),
    /**
     *
     * @param {object} state The Pinia state
     * @return {function({Number}): {CalendarObject}[]}
     */
    getCalendarObjectsByTimeRangeId: state => timeRangeId => {
      const calendarObjecstsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
      if (!state.fetchedTimeRangesById[timeRangeId]) {
        return [];
      }
      return state.fetchedTimeRangesById[timeRangeId].calendarObjectIds.map(calendarObjectId => {
        return calendarObjecstsStore.getCalendarObjectById(calendarObjectId);
      });
    }
  },
  actions: {
    /**
     * Adds a fetched time-range to the state
     *
     * @param {object} data The destructuring object
     * @param {string} data.calendarId Calendar-id which objects have been fetched
     * @param {number} data.from timestamp of start
     * @param {number} data.to timestamp of end
     * @param {number} data.lastFetched timestamp of last-fetched
     * @param {string[]} data.calendarObjectIds array of calendarObjectIds
     */
    addTimeRange(_ref) {
      let {
        calendarId,
        from,
        to,
        lastFetched,
        calendarObjectIds
      } = _ref;
      const fetchedTimeRange = {
        id: ++this.lastTimeRangeInsertId,
        calendarId,
        from,
        to,
        lastFetched,
        calendarObjectIds
      };
      this.fetchedTimeRanges.push(fetchedTimeRange);
      /// TODO this.fetchedTimeRangesById[fetchedTimeRange.id] = fetchedTimeRange
      vue__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.fetchedTimeRangesById, fetchedTimeRange.id, fetchedTimeRange);
    },
    /**
     * Removes a fetched time-range from the state
     *
     * @param {object} data The destructuring object
     * @param {number} data.timeRangeId Id of time-range to remove
     */
    removeTimeRange(_ref2) {
      let {
        timeRangeId
      } = _ref2;
      vue__WEBPACK_IMPORTED_MODULE_2__["default"].delete(this.fetchedTimeRangesById, timeRangeId);
      this.fetchedTimeRanges = this.fetchedTimeRanges.filter(timeRange => timeRange.id !== timeRangeId);
    },
    /**
     * Adds a calendar-object-id to an already fetched time-range
     *
     * @param {object} data The destructuring object
     * @param {number} data.timeRangeId The id of the time-range
     * @param {string[]} data.calendarObjectIds The array of ids of the calendar-object to add
     */
    appendCalendarObjectIdsToTimeFrame(_ref3) {
      let {
        timeRangeId,
        calendarObjectIds
      } = _ref3;
      for (const calendarObjectId of calendarObjectIds) {
        if (this.fetchedTimeRangesById[timeRangeId].calendarObjectIds.indexOf(calendarObjectId) === -1) {
          this.fetchedTimeRangesById[timeRangeId].calendarObjectIds.push(calendarObjectId);
        }
      }
    },
    /**
     * Adds a calendar-object-id to an already fetched time-range
     *
     * @param {object} data The destructuring object
     * @param {number} data.timeRangeId The id of the time-range
     * @param {string} data.calendarObjectId The id of the calendar-object to add
     */
    appendCalendarObjectIdToTimeRange(_ref4) {
      let {
        timeRangeId,
        calendarObjectId
      } = _ref4;
      this.fetchedTimeRangesById[timeRangeId].calendarObjectIds.push(calendarObjectId);
    },
    /**
     * Removes a calendar-object-id from an already fetched time-range
     *
     * @param {object} data The destructuring object
     * @param {number} data.timeRangeId The id of the timerange
     * @param {string} data.calendarObjectId The id of the calendar-object to remove
     */
    removeCalendarObjectIdFromTimeRange(_ref5) {
      let {
        timeRangeId,
        calendarObjectId
      } = _ref5;
      const index = this.fetchedTimeRangesById[timeRangeId].calendarObjectIds.indexOf(calendarObjectId);
      if (index !== -1) {
        this.fetchedTimeRangesById[timeRangeId].calendarObjectIds.splice(index, 1);
      }
    },
    /**
     * Removes a calendar-object-id from any time-range it may occur in
     *
     * @param {object} data The destructuring object
     * @param {string} data.calendarObjectId The id of the calendar-object to remove
     */
    removeCalendarObjectIdFromAnyTimeRange(_ref6) {
      let {
        calendarObjectId
      } = _ref6;
      for (const timeRange of this.fetchedTimeRanges) {
        const index = timeRange.calendarObjectIds.indexOf(calendarObjectId);
        if (index !== -1) {
          timeRange.calendarObjectIds.splice(index, 1);
        }
      }
    },
    /**
     * Adds a calendar-object-id to all time-ranges of a given caloendar
     *
     * @param {object} data The destructuring object
     * @param {string} data.calendarObjectId The id of the calendar-object
     * @param {string} data.calendarId The id of the calendar
     */
    addCalendarObjectIdToAllTimeRangesOfCalendar(_ref7) {
      let {
        calendarObjectId,
        calendarId
      } = _ref7;
      for (const timeRange of this.fetchedTimeRanges) {
        if (timeRange.calendarId !== calendarId) {
          continue;
        }
        if (timeRange.calendarObjectIds.indexOf(calendarObjectId) === -1) {
          timeRange.calendarObjectIds.push(calendarObjectId);
        }
      }
    },
    /**
     * Removes a calendar-object-id to all time-ranges of a given calendar
     *
     * @param {object} data The destructuring object
     * @param {string} data.calendarObjectId The id of the calendar-object
     * @param {string} data.calendarId The id of the calendar
     */
    removeCalendarObjectIdFromAllTimeRangesOfCalendar(_ref8) {
      let {
        calendarObjectId,
        calendarId
      } = _ref8;
      for (const timeRange of this.fetchedTimeRanges) {
        if (timeRange.calendarId !== calendarId) {
          continue;
        }
        const index = timeRange.calendarObjectIds.indexOf(calendarObjectId);
        if (index !== -1) {
          timeRange.calendarObjectIds.splice(index, 1);
        }
      }
    },
    /**
     * clear FetchedTimeRanges Store
     */
    clearFetchedTimeRanges() {
      this.lastTimeRangeInsertId = -1;
      this.fetchedTimeRanges = [];
      this.fetchedTimeRangesById = {};
    }
  }
}));

/***/ }),

/***/ "./src/store/importFiles.js":
/*!**********************************!*\
  !*** ./src/store/importFiles.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)('importFiles', {
  state: () => {
    return {
      lastFileInsertId: -1,
      importFiles: [],
      importFilesById: {},
      importCalendarRelation: {}
    };
  },
  actions: {
    /**
     * Adds a file to the state
     *
     * @param {object} data The destructuring object
     * @param {string} data.contents Contents of file
     * @param {number} data.lastModified Timestamp of last modification
     * @param {string} data.name Name of file
     * @param {AbstractParser} data.parser The parser
     * @param {number} data.size Size of file
     * @param {string} data.type mime-type of file
     */
    addFile(_ref) {
      let {
        contents,
        lastModified,
        name,
        parser,
        size,
        type
      } = _ref;
      const file = {
        id: ++this.lastFileInsertId,
        contents,
        lastModified,
        name,
        parser,
        size,
        type
      };

      // TODO: use this.importFiles.push(file) directly in Vue 3 (reactive by default)
      this.importFiles = [...this.importFiles, file];
      /// TODO this.importFilesById[file.id] = file
      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.importFilesById, file.id, file);
    },
    /**
     * Sets a calendar for the file
     *
     * @param {object} data The destructuring object
     * @param {number} data.fileId Id of file to select calendar for
     * @param {string} data.calendarId Id of calendar to import file into
     */
    setCalendarForFileId(_ref2) {
      let {
        fileId,
        calendarId
      } = _ref2;
      // TODO: remove Vue.set when migrating to Vue 3 (reactive by default)
      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.importCalendarRelation, fileId, calendarId);
    },
    /**
     * Removes all files from state
     */
    removeAllFiles() {
      /// TODO this.importFiles = []
      /// TODO this.importFilesById = {}
      /// TODO this.importCalendarRelation = {}

      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'importFiles', []);
      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'importFilesById', {});
      vue__WEBPACK_IMPORTED_MODULE_1__["default"].set(this, 'importCalendarRelation', {});
    }
  }
}));

/***/ }),

/***/ "./src/store/importState.js":
/*!**********************************!*\
  !*** ./src/store/importState.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/consts.js */ "./src/models/consts.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)('importState', {
  state: () => {
    return {
      total: 0,
      accepted: 0,
      denied: 0,
      stage: _models_consts_js__WEBPACK_IMPORTED_MODULE_0__.IMPORT_STAGE_DEFAULT
    };
  },
  actions: {
    /**
     * Reset to the default state
     */
    resetState() {
      this.total = 0;
      this.accepted = 0;
      this.denied = 0;
      this.stage = _models_consts_js__WEBPACK_IMPORTED_MODULE_0__.IMPORT_STAGE_DEFAULT;
    }
  }
}));

/***/ }),

/***/ "./src/store/principals.js":
/*!*********************************!*\
  !*** ./src/store/principals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/caldavService.js */ "./src/services/caldavService.js");
/* harmony import */ var _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger.js */ "./src/utils/logger.js");
/* harmony import */ var _models_principal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/principal.js */ "./src/models/principal.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,pinia__WEBPACK_IMPORTED_MODULE_4__.defineStore)('principals', {
  state: () => {
    return {
      principals: [],
      principalsById: {},
      currentUserPrincipal: null
    };
  },
  getters: {
    /**
     * Gets a principal object by its url
     *
     * @param {object} state the store data
     * @return {function({String}): {Object}}
     */
    getPrincipalByUrl: state => url => state.principals.find(principal => principal.url === url),
    /**
     * Gets a principal object by its id
     *
     * @param {object} state the store data
     * @return {function({String}): {Object}}
     */
    getPrincipalById: state => id => state.principalsById[id],
    /**
     * Gets the principal object of the current-user-principal
     *
     * @param {object} state the store data
     * @return {{Object}}
     */
    getCurrentUserPrincipal: state => state.principalsById[state.currentUserPrincipal],
    /**
     * Gets the email-address of the current-user-principal
     *
     * @param {object} state the store data
     * @return {string|undefined}
     */
    getCurrentUserPrincipalEmail: state => state.principalsById[state.currentUserPrincipal]?.emailAddress,
    /**
     * Gets all room principals
     *
     * @param {object} state the store data
     * @return {object[]}
     */
    getRoomPrincipals: state => state.principals.filter(principal => principal.isCalendarRoom),
    /**
     * Gets all resource principals
     *
     * @param {object} state the store data
     * @return {object[]}
     */
    getResourcePrincipals: state => state.principals.filter(principal => principal.isCalendarResource)
  },
  actions: {
    /**
     * Fetches a principal from the DAV server and commits it to the state
     *
     * @param {string} url The URL of the principal
     * @return {Promise<void>}
     */
    async fetchPrincipalByUrl(_ref) {
      let {
        url
      } = _ref;
      // Don't refetch principals we already have
      if (this.getPrincipalByUrl(url)) {
        return;
      }
      const principal = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.findPrincipalByUrl)(url);
      if (!principal) {
        // TODO - handle error
        return;
      }
      this.addPrincipalMutation({
        principal: (0,_models_principal_js__WEBPACK_IMPORTED_MODULE_2__.mapDavToPrincipal)(principal)
      });
    },
    /**
     * Fetches all principals of all rooms and resources from the DAV server and commits it to the state
     *
     * @return {Promise<void>}
     */
    async fetchRoomAndResourcePrincipals() {
      const options = {
        enableCalDAVResourceBooking: true
      };
      const principalCollections = await Promise.all([(0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.findPrincipalsInCollection)((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateRemoteUrl)('dav/principals/calendar-rooms/'), options), (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.findPrincipalsInCollection)((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateRemoteUrl)('dav/principals/calendar-resources/'), options)]);
      for (const principals of principalCollections) {
        if (!principals) {
          // TODO - handle error
          continue;
        }
        _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('Fetched principals', {
          principals
        });
        for (const principal of principals) {
          this.addPrincipalMutation({
            principal: (0,_models_principal_js__WEBPACK_IMPORTED_MODULE_2__.mapDavToPrincipal)(principal)
          });
        }
      }
    },
    /**
     * Fetches the current-user-principal
     *
     * @return {Promise<void>}
     */
    async fetchCurrentUserPrincipal() {
      const currentUserPrincipal = (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentUserPrincipal)();
      if (!currentUserPrincipal) {
        // TODO - handle error
        return;
      }
      const principal = (0,_models_principal_js__WEBPACK_IMPORTED_MODULE_2__.mapDavToPrincipal)(currentUserPrincipal);
      this.addPrincipalMutation({
        principal
      });
      this.currentUserPrincipal = principal.id;
      _utils_logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug(`Current user principal is ${principal.url}`);
    },
    /**
     * Adds a principal to the state
     *
     * @param {object} data The destructuring object
     * @param {object} data.principal The principal to add
     */
    addPrincipalMutation(_ref2) {
      let {
        principal
      } = _ref2;
      const object = (0,_models_principal_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultPrincipalObject)(principal);
      if (this.principalsById[object.id]) {
        return;
      }
      this.principals.push(object);
      /// TODO this.principalsById[object.id] = object
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.principalsById, object.id, object);
    },
    /**
     * Changes the schedule-default-calendar-URL of a principal
     *
     * @param {object} data The destructuring object
     * @param {object} data.principal The principal to modify
     * @param {string} data.scheduleDefaultCalendarUrl The new schedule-default-calendar-URL
     * @return {Promise<void>}
     */
    async changePrincipalScheduleDefaultCalendarUrl(_ref3) {
      let {
        principal,
        scheduleDefaultCalendarUrl
      } = _ref3;
      principal.dav.scheduleDefaultCalendarUrl = scheduleDefaultCalendarUrl;
      await principal.dav.update();
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.principalsById[principal.id], 'scheduleDefaultCalendarUrl', scheduleDefaultCalendarUrl);
    }
  }
}));

/***/ }),

/***/ "./src/store/settings.js":
/*!*******************************!*\
  !*** ./src/store/settings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/caldavService.js */ "./src/services/caldavService.js");
/* harmony import */ var _models_calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/calendar.js */ "./src/models/calendar.js");
/* harmony import */ var _services_timezoneDetectionService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/timezoneDetectionService.js */ "./src/services/timezoneDetectionService.js");
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _services_settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/settings.js */ "./src/services/settings.js");
/* harmony import */ var _utils_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/logger.js */ "./src/utils/logger.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/timezoneDataProviderService.js */ "./src/services/timezoneDataProviderService.js");
/* harmony import */ var _services_attachmentService_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/attachmentService.js */ "./src/services/attachmentService.js");
/* harmony import */ var _principals_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./principals.js */ "./src/store/principals.js");
/* harmony import */ var _fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetchedTimeRanges.js */ "./src/store/fetchedTimeRanges.js");
/* harmony import */ var _calendars_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendars.js */ "./src/store/calendars.js");
/* harmony import */ var _calendarObjects_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendarObjects.js */ "./src/store/calendarObjects.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,pinia__WEBPACK_IMPORTED_MODULE_12__.defineStore)('settings', {
  state: () => {
    return {
      // env
      appVersion: null,
      firstRun: null,
      talkEnabled: false,
      disableAppointments: false,
      publicCalendars: null,
      // user-defined calendar settings
      eventLimit: null,
      showTasks: null,
      showWeekends: null,
      showWeekNumbers: null,
      skipPopover: null,
      slotDuration: null,
      defaultReminder: null,
      tasksEnabled: false,
      timezone: 'automatic',
      hideEventExport: false,
      forceEventAlarmType: false,
      canSubscribeLink: true,
      showResources: true,
      // user-defined Nextcloud settings
      momentLocale: 'en',
      attachmentsFolder: '/Calendar',
      attachmentsFolderCreated: false
    };
  },
  getters: {
    /**
     * Gets the resolved timezone.
     * If the timezone is set to automatic, it returns the user's current timezone
     * Otherwise, it returns the Olsen timezone stored
     *
     * @param {object} state The pinia state
     * @return {string}
     */
    getResolvedTimezone: state => state.timezone === 'automatic' ? (0,_services_timezoneDetectionService_js__WEBPACK_IMPORTED_MODULE_2__.detectTimezone)() : state.timezone,
    /**
     * Gets the resolved timezone object.
     * Falls back to UTC if timezone is invalid.
     *
     * @return {object} The calendar-js timezone object
     */
    getResolvedTimezoneObject() {
      const timezone = this.getResolvedTimezone;
      let timezoneObject = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_6__["default"])().getTimezoneForId(timezone);
      if (!timezoneObject) {
        timezoneObject = (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_6__["default"])().getTimezoneForId('UTC');
      }
      return timezoneObject;
    }
  },
  actions: {
    /**
     * Updates the user's setting for visibility of birthday calendar
     *
     * @return {Promise<void>}
     */
    async toggleBirthdayCalendarEnabled() {
      const calendarsStore = (0,_calendars_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
      const hasBirthdayCalendar = !!calendarsStore.getBirthdayCalendar;
      if (hasBirthdayCalendar) {
        const calendar = calendarsStore.getBirthdayCalendar;
        await calendarsStore.deleteCalendar({
          calendar
        });
      } else {
        const davCalendar = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_0__.enableBirthdayCalendar)();
        const calendar = (0,_models_calendar_js__WEBPACK_IMPORTED_MODULE_1__.mapDavCollectionToCalendar)(davCalendar);
        calendarsStore.addCalendarMutation({
          calendar
        });
      }
    },
    /**
     * Updates the user's setting for event limit
     *
     * @return {Promise<void>}
     */
    async toggleEventLimitEnabled() {
      const newState = !this.eventLimit;
      const value = newState ? 'yes' : 'no';
      await (0,_services_settings_js__WEBPACK_IMPORTED_MODULE_4__.setConfig)('eventLimit', value);
      this.eventLimit = !this.eventLimit;
    },
    /**
     * Updates the user's setting for visibility of event popover
     *
     * @return {Promise<void>}
     */
    async togglePopoverEnabled() {
      const newState = !this.skipPopover;
      const value = newState ? 'yes' : 'no';
      await (0,_services_settings_js__WEBPACK_IMPORTED_MODULE_4__.setConfig)('skipPopover', value);
      this.skipPopover = !this.skipPopover;
    },
    /**
     * Updates the user's setting for visibility of weekends
     *
     * @return {Promise<void>}
     */
    async toggleWeekendsEnabled() {
      const newState = !this.showWeekends;
      const value = newState ? 'yes' : 'no';
      await (0,_services_settings_js__WEBPACK_IMPORTED_MODULE_4__.setConfig)('showWeekends', value);
      this.showWeekends = !this.showWeekends;
    },
    /**
     * Updates the user's setting for visibility of tasks
     *
     * @return {Promise<void>}
     */
    async toggleTasksEnabled() {
      const fetchedTimeRangesStore = (0,_fetchedTimeRanges_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
      const calendarObjectsStore = (0,_calendarObjects_js__WEBPACK_IMPORTED_MODULE_11__["default"])();
      const newState = !this.showTasks;
      const value = newState ? 'yes' : 'no';
      await (0,_services_settings_js__WEBPACK_IMPORTED_MODULE_4__.setConfig)('showTasks', value);
      this.showTasks = !this.showTasks;
      fetchedTimeRangesStore.clearFetchedTimeRanges();
      calendarObjectsStore.modificationCount++;
    },
    /**
     * Updates the user's setting for visibility of week numbers
     *
     * @return {Promise<void>}
     */
    async toggleWeekNumberEnabled() {
      const newState = !this.showWeekNumbers;
      const value = newState ? 'yes' : 'no';
      await (0,_services_settings_js__WEBPACK_IMPORTED_MODULE_4__.setConfig)('showWeekNr', value);
      this.showWeekNumbers = !this.showWeekNumbers;
    },
    /**
     * Updates the view to be used as initial view when opening
     * the calendar app again
     *
     * @param {object} data The destructuring object
     * @param {string} data.initialView New view to be used as initial view
     * @return {Promise<void>}
     */
    async setInitialView(_ref) {
      let {
        initialView
      } = _ref;
      await (0,_services_settings_js__WEBPACK_IMPORTED_MODULE_4__.setConfig)('view', initialView);
    },
    /**
     * Updates the user's preferred slotDuration
     *
     * @param {object} data The destructuring object
     * @param {string} data.slotDuration The new slot duration
     */
    async setSlotDuration(_ref2) {
      let {
        slotDuration
      } = _ref2;
      if (this.slotDuration === slotDuration) {
        return;
      }
      await (0,_services_settings_js__WEBPACK_IMPORTED_MODULE_4__.setConfig)('slotDuration', slotDuration);
      this.slotDuration = slotDuration;
    },
    /**
     * Updates the user's preferred defaultReminder
     *
     * @param {object} data The destructuring object
     * @param {string} data.defaultReminder The new default reminder
     */
    async setDefaultReminder(_ref3) {
      let {
        defaultReminder
      } = _ref3;
      if (this.defaultReminder === defaultReminder) {
        return;
      }
      await (0,_services_settings_js__WEBPACK_IMPORTED_MODULE_4__.setConfig)('defaultReminder', defaultReminder);
      this.defaultReminder = defaultReminder;
    },
    /**
     * Updates the user's timezone
     *
     * @param {object} data The destructuring object
     * @param {string} data.timezoneId The new timezone
     * @return {Promise<void>}
     */
    async setTimezone(_ref4) {
      let {
        timezoneId
      } = _ref4;
      if (this.timezone === timezoneId) {
        return;
      }
      await (0,_services_settings_js__WEBPACK_IMPORTED_MODULE_4__.setConfig)('timezone', timezoneId);
      this.timezone = timezoneId;
    },
    /**
     * Updates the user's attachments folder
     *
     * @param {object} data The destructuring object
     * @param {string} data.attachmentsFolder The new attachments folder
     * @return {Promise<void>}
     */
    async setAttachmentsFolder(_ref5) {
      let {
        attachmentsFolder
      } = _ref5;
      if (this.attachmentsFolder === attachmentsFolder) {
        return;
      }
      await (0,_services_settings_js__WEBPACK_IMPORTED_MODULE_4__.setConfig)('attachmentsFolder', attachmentsFolder);
      this.attachmentsFolder = attachmentsFolder;
      this.attachmentsFolderCreated = false;
    },
    /**
     * Create the user's attachment folder if it doesn't exist and return its path
     *
     * @return {Promise<string>} The path of the user's attachments folder
     */
    async createAttachmentsFolder() {
      const principalsStore = (0,_principals_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
      if (this.attachmentsFolderCreated) {
        return this.attachmentsFolder;
      }
      const userId = principalsStore.getCurrentUserPrincipal.dav.userId; /// TODO make work with new eventual principals.js
      const path = await _services_attachmentService_js__WEBPACK_IMPORTED_MODULE_7__.createFolder(this.attachmentsFolder, userId);
      if (path !== this.attachmentsFolder) {
        await this.setAttachmentsFolder({
          attachmentsFolder: path
        });
      }
      this.attachmentsFolderCreated = true;
      return path;
    },
    /**
     * Initializes the calendar-js configuration
     */
    initializeCalendarJsConfig() {
      (0,_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_3__.setConfig)('PRODID', `-//IDN nextcloud.com//Calendar app ${this.appVersion}//EN`);
      (0,_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_3__.setConfig)('property-list-significant-change', ['SUMMARY', 'LOCATION', 'DESCRIPTION']);
    },
    /**
     * Initialize settings
     *
     * @param {object} data The destructuring object
     * @param {string} data.appVersion The version of the Nextcloud app
     * @param {boolean} data.eventLimit Whether or not to limit number of visible events in grid view
     * @param {boolean} data.firstRun Whether or not this is the first run
     * @param {boolean} data.showWeekNumbers Whether or not to show week numbers
     * @param {boolean} data.showTasks Whether or not to display tasks with a due-date
     * @param {boolean} data.showWeekends Whether or not to display weekends
     * @param {boolean} data.skipPopover Whether or not to skip the simple event popover
     * @param {string} data.slotDuration The duration of one slot in the agendaView
     * @param {string} data.defaultReminder The default reminder to set on newly created events
     * @param {boolean} data.talkEnabled Whether or not the talk app is enabled
     * @param {boolean} data.tasksEnabled Whether ot not the tasks app is enabled
     * @param {string} data.timezone The timezone to view the calendar in. Either an Olsen timezone or "automatic"
     * @param {boolean} data.hideEventExport
     * @param {string} data.forceEventAlarmType
     * @param {boolean} data.disableAppointments Allow to disable the appointments feature
     * @param {boolean} data.canSubscribeLink
     * @param {string} data.attachmentsFolder Default user's attachments folder
     * @param {boolean} data.showResources Show or hide the resources tab
     * @param {string} data.publicCalendars
     */
    loadSettingsFromServer(_ref6) {
      let {
        appVersion,
        eventLimit,
        firstRun,
        showWeekNumbers,
        showTasks,
        showWeekends,
        skipPopover,
        slotDuration,
        defaultReminder,
        talkEnabled,
        tasksEnabled,
        timezone,
        hideEventExport,
        forceEventAlarmType,
        disableAppointments,
        canSubscribeLink,
        attachmentsFolder,
        showResources,
        publicCalendars
      } = _ref6;
      (0,_utils_logger_js__WEBPACK_IMPORTED_MODULE_5__.logInfo)(`
Initial settings:
	- AppVersion: ${appVersion}
	- EventLimit: ${eventLimit}
	- FirstRun: ${firstRun}
	- ShowWeekNumbers: ${showWeekNumbers}
	- ShowTasks: ${showTasks}
	- ShowWeekends: ${showWeekends}
	- SkipPopover: ${skipPopover}
	- SlotDuration: ${slotDuration}
	- DefaultReminder: ${defaultReminder}
	- TalkEnabled: ${talkEnabled}
	- TasksEnabled: ${tasksEnabled}
	- Timezone: ${timezone}
	- HideEventExport: ${hideEventExport}
	- ForceEventAlarmType: ${forceEventAlarmType}
	- disableAppointments: ${disableAppointments}
	- CanSubscribeLink: ${canSubscribeLink}
	- attachmentsFolder: ${attachmentsFolder}
	- ShowResources: ${showResources}
	- PublicCalendars: ${publicCalendars}
`);
      this.appVersion = appVersion;
      this.eventLimit = eventLimit;
      this.firstRun = firstRun;
      this.showWeekNumbers = showWeekNumbers;
      this.showTasks = showTasks;
      this.showWeekends = showWeekends;
      this.skipPopover = skipPopover;
      this.slotDuration = slotDuration;
      this.defaultReminder = defaultReminder;
      this.talkEnabled = talkEnabled;
      this.tasksEnabled = tasksEnabled;
      this.timezone = timezone;
      this.hideEventExport = hideEventExport;
      this.forceEventAlarmType = forceEventAlarmType;
      this.disableAppointments = disableAppointments;
      this.canSubscribeLink = canSubscribeLink;
      this.attachmentsFolder = attachmentsFolder;
      this.showResources = showResources;
      this.publicCalendars = publicCalendars;
    },
    /**
     * Sets the name of the moment.js locale to be used
     *
     * @param {object} data The destructuring object
     * @param {string} data.locale The moment.js locale to be used
     */
    setMomentLocale(_ref7) {
      let {
        locale
      } = _ref7;
      (0,_utils_logger_js__WEBPACK_IMPORTED_MODULE_5__.logInfo)(`Updated moment locale: ${locale}`);
      this.momentLocale = locale;
    }
  }
}));

/***/ }),

/***/ "./src/utils/alarms.js":
/*!*****************************!*\
  !*** ./src/utils/alarms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAmountAndUnitForTimedEvents: () => (/* binding */ getAmountAndUnitForTimedEvents),
/* harmony export */   getAmountHoursMinutesAndUnitForAllDayEvents: () => (/* binding */ getAmountHoursMinutesAndUnitForAllDayEvents),
/* harmony export */   getFactorForAlarmUnit: () => (/* binding */ getFactorForAlarmUnit),
/* harmony export */   getTotalSecondsFromAmountAndUnitForTimedEvents: () => (/* binding */ getTotalSecondsFromAmountAndUnitForTimedEvents),
/* harmony export */   getTotalSecondsFromAmountHourMinutesAndUnitForAllDayEvents: () => (/* binding */ getTotalSecondsFromAmountHourMinutesAndUnitForAllDayEvents),
/* harmony export */   updateAlarms: () => (/* binding */ updateAlarms)
/* harmony export */ });
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




/**
 * Get the factor for a given unit
 *
 * @param {string} unit The name of the unit to get the factor of
 * @return {number}
 */
function getFactorForAlarmUnit(unit) {
  switch (unit) {
    case 'seconds':
      return 1;
    case 'minutes':
      return 60;
    case 'hours':
      return 60 * 60;
    case 'days':
      return 24 * 60 * 60;
    case 'weeks':
      return 7 * 24 * 60 * 60;
    default:
      return 1;
  }
}

/**
 * Gets the amount of days / weeks, unit from total seconds
 *
 * @param {number} totalSeconds Total amount of seconds
 * @return {{amount: number, unit: string}}
 */
function getAmountAndUnitForTimedEvents(totalSeconds) {
  // Before or after the event is handled somewhere else,
  // so make sure totalSeconds is positive
  totalSeconds = Math.abs(totalSeconds);

  // Handle the special case of 0, so we don't show 0 weeks
  if (totalSeconds === 0) {
    return {
      amount: 0,
      unit: 'minutes'
    };
  }
  if (totalSeconds % (7 * 24 * 60 * 60) === 0) {
    return {
      amount: totalSeconds / (7 * 24 * 60 * 60),
      unit: 'weeks'
    };
  }
  if (totalSeconds % (24 * 60 * 60) === 0) {
    return {
      amount: totalSeconds / (24 * 60 * 60),
      unit: 'days'
    };
  }
  if (totalSeconds % (60 * 60) === 0) {
    return {
      amount: totalSeconds / (60 * 60),
      unit: 'hours'
    };
  }
  if (totalSeconds % 60 === 0) {
    return {
      amount: totalSeconds / 60,
      unit: 'minutes'
    };
  }
  return {
    amount: totalSeconds,
    unit: 'seconds'
  };
}

/**
 * Get the total amount of seconds based on amount and unit for timed events
 *
 * @param {number} amount Amount of unit
 * @param {string} unit Minutes/Hours/Days/Weeks
 * @param {boolean=} isBefore Whether the reminder is before or after the event
 * @return {number}
 */
function getTotalSecondsFromAmountAndUnitForTimedEvents(amount, unit) {
  let isBefore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return amount * getFactorForAlarmUnit(unit) * (isBefore ? -1 : 1);
}

/**
 * Gets the amount of days / weeks, unit, hours and minutes from total seconds
 *
 * @param {number} totalSeconds Total amount of seconds
 * @return {{amount: *, unit: *, hours: *, minutes: *}}
 */
function getAmountHoursMinutesAndUnitForAllDayEvents(totalSeconds) {
  const dayFactor = getFactorForAlarmUnit('days');
  const hourFactor = getFactorForAlarmUnit('hours');
  const minuteFactor = getFactorForAlarmUnit('minutes');
  const isNegative = totalSeconds < 0;
  totalSeconds = Math.abs(totalSeconds);
  let dayPart = Math.floor(totalSeconds / dayFactor);
  const hourPart = totalSeconds % dayFactor;
  if (hourPart !== 0) {
    if (isNegative) {
      dayPart++;
    }
  }
  let amount = 0;
  let unit = null;
  if (dayPart === 0) {
    unit = 'days';
  } else if (dayPart % 7 === 0) {
    amount = dayPart / 7;
    unit = 'weeks';
  } else {
    amount = dayPart;
    unit = 'days';
  }
  let hours = Math.floor(hourPart / hourFactor);
  const minutePart = hourPart % hourFactor;
  let minutes = Math.floor(minutePart / minuteFactor);
  if (isNegative) {
    hours = 24 - hours;
    if (minutes !== 0) {
      hours--;
      minutes = 60 - minutes;
    }
  }
  return {
    amount,
    unit,
    hours,
    minutes
  };
}

/**
 * Get the total amount of seconds for all-day events
 *
 * @param {number} amount amount of unit
 * @param {number} hours Time of reminder
 * @param {number} minutes Time of reminder
 * @param {string} unit days/weeks
 * @return {number}
 */
function getTotalSecondsFromAmountHourMinutesAndUnitForAllDayEvents(amount, hours, minutes, unit) {
  if (unit === 'weeks') {
    amount *= 7;
    unit = 'days';
  }

  // 0 is on the same day of the all-day event => positive
  // 1 ... n before the event is negative
  const isNegative = amount > 0;
  if (isNegative) {
    // If it's negative, we need to subtract one day
    amount--;
    // Convert days to seconds
    amount *= getFactorForAlarmUnit(unit);
    let invertedHours = 24 - hours;
    let invertedMinutes = 0;
    if (minutes !== 0) {
      invertedHours--;
      invertedMinutes = 60 - minutes;
    }
    amount += invertedHours * getFactorForAlarmUnit('hours');
    amount += invertedMinutes * getFactorForAlarmUnit('minutes');
    amount *= -1;
  } else {
    // Convert days to seconds
    amount *= getFactorForAlarmUnit('days');
    amount += hours * getFactorForAlarmUnit('hours');
    amount += minutes * getFactorForAlarmUnit('minutes');
  }
  return amount;
}

/**
 * Propagate data from an event component to all EMAIL alarm components.
 * An alarm component must contain a description, summary and all attendees to be notified.
 * We don't have a separate UI for maintaining attendees of an alarm, so we just copy them from the event.
 *
 * https://www.rfc-editor.org/rfc/rfc5545#section-3.6.6
 *
 * @param {AbstractRecurringComponent} eventComponent
 */
function updateAlarms(eventComponent) {
  for (const alarmComponent of eventComponent.getAlarmIterator()) {
    if (alarmComponent.action !== 'EMAIL' && alarmComponent.action !== 'DISPLAY') {
      continue;
    }
    alarmComponent.deleteAllProperties('SUMMARY');
    const summaryProperty = eventComponent.getFirstProperty('SUMMARY');
    if (summaryProperty) {
      alarmComponent.addProperty(summaryProperty.clone());
    } else {
      const defaultSummary = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('calendar', 'Untitled event');
      alarmComponent.addProperty(new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.Property('SUMMARY', defaultSummary));
    }
    if (!alarmComponent.hasProperty('DESCRIPTION')) {
      const defaultDescription = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('calendar', 'This is an event reminder.');
      alarmComponent.addProperty(new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.Property('DESCRIPTION', defaultDescription));
    }
    alarmComponent.deleteAllProperties('ATTENDEE');
    for (const attendee of eventComponent.getAttendeeIterator()) {
      if (['RESOURCE', 'ROOM'].includes(attendee.userType)) {
        continue;
      }

      // Only copy the email address (value) of the attendee
      alarmComponent.addProperty(new _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.AttendeeProperty('ATTENDEE', attendee.value));
    }
  }
}

/***/ }),

/***/ "./src/utils/attendee.js":
/*!*******************************!*\
  !*** ./src/utils/attendee.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMailtoPrefix: () => (/* binding */ addMailtoPrefix),
/* harmony export */   isOrganizer: () => (/* binding */ isOrganizer),
/* harmony export */   organizerDisplayName: () => (/* binding */ organizerDisplayName),
/* harmony export */   removeMailtoPrefix: () => (/* binding */ removeMailtoPrefix)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Remove the mailto prefix from a URI and return it
 *
 * @param {string} uri URI to remove the prefix from
 * @return {string} URI without a mailto prefix
 */
function removeMailtoPrefix(uri) {
  if (typeof uri !== 'string') {
    return '';
  }
  if (uri.startsWith('mailto:')) {
    return uri.slice(7);
  }
  return uri;
}

/**
 * Add the mailto prefix to a URI if it doesn't have one yet and return it
 *
 * @param {string} uri URI to add the prefix to
 * @return {string} URI with a mailto prefix
 */
function addMailtoPrefix(uri) {
  if (typeof uri !== 'string') {
    return 'mailto:';
  }
  if (uri.startsWith('mailto:')) {
    return uri;
  }
  return `mailto:${uri}`;
}

/**
 * Get the display name of an organizer
 *
 * @param {?object} organizer Organizer object to extract a display name from
 * @return {string} Display name of given organizer
 */
function organizerDisplayName(organizer) {
  if (!organizer) {
    return '';
  }
  if (organizer.commonName) {
    return organizer.commonName;
  }
  return removeMailtoPrefix(organizer.uri);
}

/**
 * Check if the current user is an attendee
 *
 * @param {string} currentUserPrincipalEmail Email address of the current user
 * @param {string} organizer Email address of the organizer with prefix
 * @return {boolean} True if the current user is an attendee
 */
function isOrganizer(currentUserPrincipalEmail, organizer) {
  if (!organizer || !currentUserPrincipalEmail) {
    return true;
  }
  return removeMailtoPrefix(organizer) === currentUserPrincipalEmail;
}

/***/ }),

/***/ "./src/utils/calendarObject.js":
/*!*************************************!*\
  !*** ./src/utils/calendarObject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllObjectsInTimeRange: () => (/* binding */ getAllObjectsInTimeRange),
/* harmony export */   getObjectAtRecurrenceId: () => (/* binding */ getObjectAtRecurrenceId)
/* harmony export */ });
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 * Get all recurrence-items in given range
 *
 * @param {object} calendarObject Calendar-object model
 * @param {Date} start Begin of time-range
 * @param {Date} end End of time-range
 * @return {Array}
 */
const getAllObjectsInTimeRange = (calendarObject, start, end) => {
  const iterator = calendarObject.calendarComponent.getVObjectIterator();
  const firstVObject = iterator.next().value;
  if (!firstVObject) {
    return [];
  }
  const s = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.DateTimeValue.fromJSDate(start, true);
  const e = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.DateTimeValue.fromJSDate(end, true);
  return firstVObject.recurrenceManager.getAllOccurrencesBetween(s, e);
};

/**
 * Get recurrence-item at exactly a given recurrence-Id
 *
 * @param {object} calendarObject Calendar-object model
 * @param {Date} recurrenceId RecurrenceId to retrieve
 * @return {AbstractRecurringComponent|null}
 */
const getObjectAtRecurrenceId = (calendarObject, recurrenceId) => {
  const iterator = calendarObject.calendarComponent.getVObjectIterator();
  const firstVObject = iterator.next().value;
  if (!firstVObject) {
    return null;
  }
  const d = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.DateTimeValue.fromJSDate(recurrenceId, true);
  return firstVObject.recurrenceManager.getOccurrenceAtExactly(d);
};


/***/ }),

/***/ "./src/utils/closestColor.js":
/*!***********************************!*\
  !*** ./src/utils/closestColor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closestColor)
/* harmony export */ });
/* harmony import */ var css_color_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-color-names */ "./node_modules/css-color-names/css-color-names.json");
/* harmony import */ var lodash_sortBy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/sortBy.js */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_pick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/pick.js */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_pick_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_uniqBy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/uniqBy.js */ "./node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var color_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// Code was taken from:
//   - https://github.com/juliuste/closest-css-color
//   - https://github.com/gausie/colour-proximity
//   - https://github.com/gausie/colour-proximity/pull/3






const uniqColorKeys = lodash_uniqBy_js__WEBPACK_IMPORTED_MODULE_3___default()(Object.keys(css_color_names__WEBPACK_IMPORTED_MODULE_0__), c => css_color_names__WEBPACK_IMPORTED_MODULE_0__[c]);
const filteredColors = lodash_pick_js__WEBPACK_IMPORTED_MODULE_2___default()(css_color_names__WEBPACK_IMPORTED_MODULE_0__, uniqColorKeys);
const colors = lodash_sortBy_js__WEBPACK_IMPORTED_MODULE_1___default()(Object.keys(filteredColors).map(name => ({
  name,
  hex: filteredColors[name]
})), c => c.hex);
const defaults = {
  detailed: false
};

/**
 * Find the closest CSS color to a given hex color.
 *
 * Adapted from https://github.com/juliuste/closest-css-color
 *
 * Copyright (c) 2021, Julius Tens
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without
 * fee is hereby granted, provided that the above copyright notice and this permission notice
 * appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS
 * SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
 * AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT,
 * NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE
 * OF THIS SOFTWARE.
 *
 * @param {string} hex Hex color string
 * @param {object} opt Options
 * @param {boolean=} opt.detailed Return color object instead of just the name
 * @return {string|{name: string, hex: string}} Closest color name or object
 */
function closestColor(hex) {
  let opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const options = {
    ...defaults,
    ...opt
  };
  const sortedColors = lodash_sortBy_js__WEBPACK_IMPORTED_MODULE_1___default()(colors, c => proximity(hex, c.hex));
  if (options.detailed) {
    return sortedColors[0];
  }
  return sortedColors[0].name;
}

/**
 * Calculate the proximity between two colors.
 *
 * Adapted from https://github.com/gausie/colour-proximity
 *
 * Copyright (c) 2013, Samuel Gaus
 *
 * @param {string} s1 Hex color string 1
 * @param {string} s2 Hex color string 2
 * @return {number}
 */
function proximity(s1, s2) {
  const c1 = rgb2lab(color_string__WEBPACK_IMPORTED_MODULE_4__["default"].get.rgb(s1));
  const c2 = rgb2lab(color_string__WEBPACK_IMPORTED_MODULE_4__["default"].get.rgb(s2));
  return Math.sqrt(Math.pow(c1[0] - c2[0], 2) + Math.pow(c1[1] - c2[1], 2) + Math.pow(c1[2] - c2[2], 2));
}

/**
 * Adapted from https://github.com/gausie/colour-proximity
 *
 * Copyright (c) 2013, Samuel Gaus
 *
 * @param {number[]} input RGB array
 */
function rgb2lab(input) {
  // This code is adapted from various functions at http://www.easyrgb.com/index.php?X=MATH

  const rgb = [0, 0, 0];
  const xyz = [0, 0, 0];
  const Lab = [0, 0, 0];
  for (let i = 0; i < input.length; i++) {
    let value = input[i] / 255;
    if (value > 0.04045) {
      value = Math.pow((value + 0.055) / 1.055, 2.4);
    } else {
      value = value / 12.92;
    }
    rgb[i] = value * 100;
  }
  xyz[0] = (rgb[0] * 0.4124 + rgb[1] * 0.3576 + rgb[2] * 0.1805) / 95.047; // ref_X =  95.047   Observer= 2°, Illuminant= D65
  xyz[1] = (rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722) / 100.0; // ref_Y = 100.000
  xyz[2] = (rgb[0] * 0.0193 + rgb[1] * 0.1192 + rgb[2] * 0.9505) / 108.883; // ref_Z = 108.883

  for (let i = 0; i < 3; i++) {
    let value = xyz[i];
    if (value > 0.008856) {
      value = Math.pow(value, 1 / 3);
    } else {
      value = 7.787 * value + 16 / 116;
    }
    xyz[i] = value;
  }
  Lab[0] = parseFloat((116 * xyz[1] - 16).toFixed(3));
  Lab[1] = parseFloat((500 * (xyz[0] - xyz[1])).toFixed(3));
  Lab[2] = parseFloat((200 * (xyz[1] - xyz[2])).toFixed(3));
  return Lab;
}

/***/ }),

/***/ "./src/utils/color.js":
/*!****************************!*\
  !*** ./src/utils/color.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   detectColor: () => (/* binding */ detectColor),
/* harmony export */   generateTextColorForHex: () => (/* binding */ generateTextColorForHex),
/* harmony export */   generateTextColorForRGB: () => (/* binding */ generateTextColorForRGB),
/* harmony export */   getClosestCSS3ColorNameForHex: () => (/* binding */ getClosestCSS3ColorNameForHex),
/* harmony export */   getHexForColorName: () => (/* binding */ getHexForColorName),
/* harmony export */   hexToRGB: () => (/* binding */ hexToRGB),
/* harmony export */   isLight: () => (/* binding */ isLight),
/* harmony export */   uidToHexColor: () => (/* binding */ uidToHexColor)
/* harmony export */ });
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
/* harmony import */ var _uidToColor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uidToColor.js */ "./src/utils/uidToColor.js");
/* harmony import */ var css_color_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-color-names */ "./node_modules/css-color-names/css-color-names.json");
/* harmony import */ var _closestColor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./closestColor.js */ "./src/utils/closestColor.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */





/**
 * Detect if a color is light or dark
 *
 * @param {object} data The destructuring object
 * @param {number} data.red Red part of the RGB
 * @param {number} data.green Green part of the RGB
 * @param {number} data.blue Blue part of the RGB
 * @return {boolean} true if color is light, false if color is dark
 */
function isLight(_ref) {
  let {
    red,
    green,
    blue
  } = _ref;
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness > 130;
}

/**
 * Get a text-color that's readable on a given background color
 *
 * @param {string} hexColor The hex color to get a text color for
 * @return {string} the matching text color
 */
function generateTextColorForHex(hexColor) {
  return generateTextColorForRGB(hexToRGB(hexColor));
}

/**
 * Get a text-color that's readable on a given background color
 *
 * @param {object} data The destructuring object
 * @param {number} data.red Red part of the RGB
 * @param {number} data.green Green part of the RGB
 * @param {number} data.blue Blue part of the RGB
 * @return {string}
 */
function generateTextColorForRGB(_ref2) {
  let {
    red,
    green,
    blue
  } = _ref2;
  return isLight({
    red,
    green,
    blue
  }) ? '#000000' : '#FAFAFA';
}

/**
 * Convert hex string to RGB
 *
 * @param {string} hexColor The hex color to convert
 * @return {string} the RGB result
 */
function hexToRGB(hexColor) {
  if (hexColor == null) {
    return {
      red: 0,
      green: 0,
      blue: 0
    };
  }
  const [red, green, blue] = color_convert__WEBPACK_IMPORTED_MODULE_0__["default"].hex.rgb(hexColor.slice(1));
  return {
    red,
    green,
    blue
  };
}

/**
 * Generates a hex color based on RGB string
 *
 * @param {string} uid The string to generate a color from
 * @return {string} The hex color
 */
function uidToHexColor(uid) {
  const color = (0,_uidToColor_js__WEBPACK_IMPORTED_MODULE_1__.uidToColor)(uid);
  return '#' + color_convert__WEBPACK_IMPORTED_MODULE_0__["default"].rgb.hex(color.r, color.g, color.b);
}

/**
 * Detects a color from a given string
 *
 * @param {string} color The color to get the real RGB hex string from
 * @return {string|boolean|*} String if color detected, boolean if not
 */
function detectColor(color) {
  if (/^(#)((?:[A-Fa-f0-9]{3}){1,2})$/.test(color)) {
    // #ff00ff and #f0f
    return color;
  } else if (/^((?:[A-Fa-f0-9]{3}){1,2})$/.test(color)) {
    // ff00ff and f0f
    return '#' + color;
  } else if (/^(#)((?:[A-Fa-f0-9]{8}))$/.test(color)) {
    // #ff00ffff and #f0ff
    return color.slice(0, 7);
  } else if (/^((?:[A-Fa-f0-9]{8}))$/.test(color)) {
    // ff00ffff and f0ff
    return '#' + color.slice(0, 6);
  }
  return false;
}

/**
 * Gets the HEX code for a css3 color name
 *
 * @param {string} colorName The name of the css3 color
 * @return {string | null} string of HEX if valid color, null if not
 */
function getHexForColorName(colorName) {
  return css_color_names__WEBPACK_IMPORTED_MODULE_2__[colorName] || null;
}

/**
 * Gets the closest css3 color name for a given HEX code
 *
 * @param {string} hex The HEX code to get a css3 color name for
 * @return {string}
 */
function getClosestCSS3ColorNameForHex(hex) {
  return (0,_closestColor_js__WEBPACK_IMPORTED_MODULE_3__["default"])(hex);
}

/***/ }),

/***/ "./src/utils/date.js":
/*!***************************!*\
  !*** ./src/utils/date.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateFactory: () => (/* binding */ dateFactory),
/* harmony export */   getDateFromDateTimeValue: () => (/* binding */ getDateFromDateTimeValue),
/* harmony export */   getDateFromFirstdayParam: () => (/* binding */ getDateFromFirstdayParam),
/* harmony export */   getUnixTimestampFromDate: () => (/* binding */ getUnixTimestampFromDate),
/* harmony export */   getYYYYMMDDFromDate: () => (/* binding */ getYYYYMMDDFromDate),
/* harmony export */   getYYYYMMDDFromFirstdayParam: () => (/* binding */ getYYYYMMDDFromFirstdayParam),
/* harmony export */   modifyDate: () => (/* binding */ modifyDate)
/* harmony export */ });
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ "./src/utils/logger.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * returns a new Date object
 *
 * @return {Date}
 */
function dateFactory() {
  return new Date();
}

/**
 * formats a Date object as YYYYMMDD
 *
 * @param {Date} date Date to format
 * @return {string}
 */
function getYYYYMMDDFromDate(date) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
}

/**
 * get unix time from date object
 *
 * @param {Date} date Date to format
 * @return {number}
 */
function getUnixTimestampFromDate(date) {
  return Math.floor(date.getTime() / 1000);
}

/**
 * Gets a Date-object based on the firstday param used in routes
 *
 * @param {string} firstDayParam The firstday param from the router
 * @return {Date}
 */
function getDateFromFirstdayParam(firstDayParam) {
  if (firstDayParam === 'now') {
    return dateFactory();
  }
  const [year, month, date] = firstDayParam.split('-').map(str => parseInt(str, 10));
  if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(date)) {
    _logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].error('First day parameter contains non-numerical components, falling back to today');
    return dateFactory();
  }
  const dateObject = dateFactory();
  dateObject.setFullYear(year, month - 1, date);
  dateObject.setHours(0, 0, 0, 0);
  return dateObject;
}

/**
 * formats firstday param as YYYYMMDD
 *
 * @param {string} firstDayParam The firstday param from the router
 * @return {string}
 */
function getYYYYMMDDFromFirstdayParam(firstDayParam) {
  if (firstDayParam === 'now') {
    return getYYYYMMDDFromDate(dateFactory());
  }
  return firstDayParam;
}

/**
 * Gets a date object based on the given DateTimeValue
 * Ignores given timezone-information
 *
 * @param {DateTimeValue} dateTimeValue Value to get date from
 * @return {Date}
 */
function getDateFromDateTimeValue(dateTimeValue) {
  return new Date(dateTimeValue.year, dateTimeValue.month - 1, dateTimeValue.day, dateTimeValue.hour, dateTimeValue.minute, 0, 0);
}

/**
 * modifies a date
 *
 * @param {Date} date Date object to modify
 * @param {object} data The destructuring object
 * @param {number} data.day Number of days to add
 * @param {number} data.week Number of weeks to add
 * @param {number} data.month Number of months to add
 * @param data.year
 * @return {Date}
 */
function modifyDate(date, _ref) {
  let {
    day = 0,
    week = 0,
    month = 0,
    year = 0
  } = _ref;
  date = new Date(date.getTime());
  date.setDate(date.getDate() + day);
  date.setDate(date.getDate() + week * 7);
  date.setMonth(date.getMonth() + month);
  date.setFullYear(date.getFullYear() + year);
  return date;
}

/***/ }),

/***/ "./src/utils/freebusy.js":
/*!*******************************!*\
  !*** ./src/utils/freebusy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   doFreeBusyRequest: () => (/* binding */ doFreeBusyRequest),
/* harmony export */   getColorForFBType: () => (/* binding */ getColorForFBType)
/* harmony export */ });
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");
/* harmony import */ var _services_caldavService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/caldavService.js */ "./src/services/caldavService.js");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




/**
 * Gets the corresponding color for a given Free/Busy type
 *
 * @param {string} type The type of the FreeBusy property
 * @return {string}
 */
function getColorForFBType() {
  let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'BUSY';
  switch (type) {
    case 'FREE':
      return 'rgba(255,255,255,0)';
    case 'BUSY-TENTATIVE':
      return 'rgba(184,129,0,0.3)';
    case 'BUSY':
      return 'rgba(217,24,18,0.3)';
    case 'BUSY-UNAVAILABLE':
      return 'rgba(219,219,219)';
    default:
      return 'rgba(0,113,173,0.3)';
  }
}

// TODO: Tuple types (mixed array) will be added in jsdoc 4
/* eslint-disable jsdoc/valid-types */
/**
 * Generator that yields tuples of an attendee property and the corresponding free busy property
 * Only yields tuples where the attendee is actually blocked
 *
 * @generator
 * @param {DateTimeValue} start Start date
 * @param {DateTimeValue} end End date
 * @param {AttendeeProperty} organizer The organizer whose scheduling outbox to use
 * @param {AttendeeProperty[]} attendees Attendees to request the free busy times from
 * @yields {[AttendeeProperty, FreeBusyProperty]} Tuples of attendee property and free busy property where the attendee is blocked
 * @return {AsyncGenerator<[AttendeeProperty, FreeBusyProperty], void, void>} Generator that yields tuples of attendee property and free busy property where the attendee is blocked
 */
async function* doFreeBusyRequest(start, end, organizer, attendees) {
  const freeBusyComponent = (0,_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.createFreeBusyRequest)(start, end, organizer, attendees);
  const freeBusyICS = freeBusyComponent.toICS();
  const outbox = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_1__.findSchedulingOutbox)();
  const freeBusyData = await outbox.freeBusyRequest(freeBusyICS);
  for (const [, data] of Object.entries(freeBusyData)) {
    if (!data.success) {
      continue;
    }
    const parserManager = (0,_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_0__.getParserManager)();
    const parser = parserManager.getParserForFileType('text/calendar');
    parser.parse(data.calendarData);

    // TODO: fix me upstream, parser only exports VEVENT, VJOURNAL and VTODO at the moment
    const calendarComponent = parser._calendarComponent;
    const freeBusyComponent = calendarComponent.getFirstComponent('VFREEBUSY');
    if (!freeBusyComponent) {
      continue;
    }
    for (const attendeeProperty of freeBusyComponent.getPropertyIterator('ATTENDEE')) {
      for (const freeBusyProperty of freeBusyComponent.getPropertyIterator('FREEBUSY')) {
        if (freeBusyProperty.type === 'FREE') {
          // We care about anything BUT free slots
          continue;
        }
        yield [attendeeProperty, freeBusyProperty];
      }
    }
  }
}
/* eslint-disable jsdoc/valid-types */

/***/ }),

/***/ "./src/utils/logger.js":
/*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   logDebug: () => (/* binding */ logDebug),
/* harmony export */   logError: () => (/* binding */ logError),
/* harmony export */   logFatal: () => (/* binding */ logFatal),
/* harmony export */   logInfo: () => (/* binding */ logInfo),
/* harmony export */   logWarn: () => (/* binding */ logWarn)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('calendar').detectUser().build();

/**
 * Logs a debug message
 *
 * @param {string} message The message to log
 * @param {object=} context Additional context if needed
 */
const logDebug = function (message) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  logger.debug(message, context);
};

/**
 * Logs an error message
 *
 * @param {string} message The message to log
 * @param {object=} context Additional context if needed
 */
const logError = function (message) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  logger.error(message, context);
};

/**
 * Logs a fatal message
 *
 * @param {string} message The message to log
 * @param {object=} context Additional context if needed
 */
const logFatal = function (message) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  logger.fatal(message, context);
};

/**
 * Logs an info message
 *
 * @param {string} message The message to log
 * @param {object=} context Additional context if needed
 */
const logInfo = function (message) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  logger.info(message, context);
};

/**
 * Logs a warn message
 *
 * @param {string} message The message to log
 * @param {object=} context Additional context if needed
 */
const logWarn = function (message) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  logger.warn(message, context);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);


/***/ }),

/***/ "./src/utils/moment.js":
/*!*****************************!*\
  !*** ./src/utils/moment.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMomentLocalization)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 *
 * @return {Promise<string>}
 */
async function loadMomentLocalization() {
  const locale = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.getLocale)().replace('_', '-').toLowerCase();
  const language = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.getLanguage)().replace('_', '-').toLowerCase();
  if (locale === language) {
    return getLocaleFor(locale);
  }
  const [realLocale, realLanguage] = await Promise.all([getLocaleFor(locale), getLocaleFor(language)]);
  if (realLocale === realLanguage) {
    return realLocale;
  }
  const name = `nextcloud-calendar-fake-locale-${realLocale}-${realLanguage}`;
  _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].defineLocale(name, {
    parentLocale: realLanguage,
    longDateFormat: {
      LT: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).longDateFormat('LT'),
      LTS: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).longDateFormat('LTS'),
      L: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).longDateFormat('L'),
      LL: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).longDateFormat('LL'),
      LLL: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).longDateFormat('LLL'),
      LLLL: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).longDateFormat('LLLL'),
      l: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).longDateFormat('l'),
      ll: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).longDateFormat('ll'),
      lll: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).longDateFormat('lll'),
      llll: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).longDateFormat('llll')
    },
    week: {
      dow: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.getFirstDay)(),
      doy: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_1__["default"].localeData(realLocale).firstDayOfYear()
    }
  });
  return name;
}

/**
 * Dynamically loads the requested locale and returns the actually loaded locale
 *
 * @param {string} locale Name of locale to load
 * @return {Promise<string>}
 */
async function getLocaleFor(locale) {
  // IMPORTANT: Keep each '/moment/local/...' string as is. Otherwise, webpack might not bundle
  //            locale data because the contentRegExp fails to detect any files.
  try {
    // default load e.g. en-de
    await __webpack_require__("./node_modules/moment/locale ../../node_modules/moment/locale lazy recursive ^\\.\\/.*\\.js$")(`./${locale}.js`);
    return locale;
  } catch (error) {
    const splitLocale = locale.split('-');
    try {
      // failure: fallback to first part of locale, which
      // should be language
      locale = splitLocale[0];
      await __webpack_require__("./node_modules/moment/locale ../../node_modules/moment/locale lazy recursive ^\\.\\/.*\\.js$")(`./${locale}.js`);
      return locale;
    } catch (e) {
      // failure, fallback to english
      console.debug('Fallback to locale', 'en');
      // English is the default locale and doesn't need to imported.
      // It is already included in moment.js.
    }
  }
  return 'en';
}

/***/ }),

/***/ "./src/utils/propfindErrorParse.js":
/*!*****************************************!*\
  !*** ./src/utils/propfindErrorParse.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseUploadError: () => (/* binding */ parseUploadError)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Parse PROPFIND error when uploading a file and return a readable message.
 *
 * @param exception the error object
 */
async function parseUploadError(exception) {
  try {
    const responseText = await exception.response.data;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(responseText, 'application/xml');
    const messageElement = xmlDoc.getElementsByTagName('s:message')[0];
    return messageElement?.textContent;
  } catch (parseError) {
    console.error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.t)('calendar', 'Error while parsing a PROPFIND error'), parseError);
  }
}


/***/ }),

/***/ "./src/utils/randomId.js":
/*!*******************************!*\
  !*** ./src/utils/randomId.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomId: () => (/* binding */ randomId)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Generate a random hex id to use with vue components.
 *
 * WARNING: This method does not use a secure random generator and isn't suited for
 * cryptographic purposes.
 *
 * @return {string} A random hex id
 */
function randomId() {
  return Math.random().toString(16).slice(2);
}

/***/ }),

/***/ "./src/utils/recurrence.js":
/*!*********************************!*\
  !*** ./src/utils/recurrence.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBySetPositionAndBySetFromDate: () => (/* binding */ getBySetPositionAndBySetFromDate),
/* harmony export */   getWeekDayFromDate: () => (/* binding */ getWeekDayFromDate)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Gets the ByDay and BySetPosition
 *
 * @param {Date} jsDate The date to get the weekday of
 * @return {object}
 */
function getBySetPositionAndBySetFromDate(jsDate) {
  const byDay = getWeekDayFromDate(jsDate);
  let bySetPosition = 1;
  let dayOfMonth = jsDate.getDate();
  for (; dayOfMonth > 7; dayOfMonth -= 7) {
    bySetPosition++;
  }
  return {
    byDay,
    bySetPosition
  };
}

/**
 * Gets the string-representation of the weekday of a given date
 *
 * @param {Date} jsDate The date to get the weekday of
 * @return {string}
 */
function getWeekDayFromDate(jsDate) {
  switch (jsDate.getDay()) {
    case 0:
      return 'SU';
    case 1:
      return 'MO';
    case 2:
      return 'TU';
    case 3:
      return 'WE';
    case 4:
      return 'TH';
    case 5:
      return 'FR';
    case 6:
      return 'SA';
    default:
      throw TypeError('Invalid date-object given');
  }
}

/***/ }),

/***/ "./src/utils/settings.js":
/*!*******************************!*\
  !*** ./src/utils/settings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLinkToConfig: () => (/* binding */ getLinkToConfig)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 * Get URL to modify config-key
 *
 * @param {string} key URL of config-key to modify
 * @return {string}
 */
function getLinkToConfig(key) {
  return [(0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.linkTo)('calendar', 'index.php'), 'v1/config', key].join('/');
}

/***/ }),

/***/ "./src/utils/uidToColor.js":
/*!*********************************!*\
  !*** ./src/utils/uidToColor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   uidToColor: () => (/* binding */ uidToColor)
/* harmony export */ });
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__);
/**
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 * This is copied from nextcloud-vue for now, until it is exposed upstream.
 */

const uidToColor = uid => {
  // Normalize hash
  let hash = uid.toLowerCase();

  // Already a md5 hash?
  if (hash.match(/^([0-9a-f]{4}-?){8}$/) === null) {
    hash = md5__WEBPACK_IMPORTED_MODULE_0___default()(hash);
  }
  hash = hash.replace(/[^0-9a-f]/g, '');
  const steps = 6;
  const finalPalette = GenColors(steps);

  /**
   * Convert a string to an integer evenly
   *
   * @param {string} hash The string to convert
   * @param {number} maximum The maximum value
   * @return {number} The integer calculated
   */
  function hashToInt(hash, maximum) {
    let finalInt = 0;
    const result = [];

    // Splitting evenly the string
    for (let i = 0; i < hash.length; i++) {
      // chars in md5 goes up to f, hex:16
      result.push(parseInt(hash.charAt(i), 16) % 16);
    }

    // Adds up all results
    for (const j in result) {
      finalInt += result[j];
    }

    // chars in md5 goes up to f, hex:16
    // make sure we're always using int in our operation
    return parseInt(parseInt(finalInt, 10) % maximum, 10);
  }
  return finalPalette[hashToInt(hash, steps * 3)];
};

/**
 * Color object
 *
 * @param {number} r The red value
 * @param {number} g The green value
 * @param {number} b The blue value
 */
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

/**
 * Calculate the number of steps
 *
 * @param {number} steps The number of steps
 * @param {Array} ends The ends
 * @return {Array} Array containing the number of steps per color
 */
function stepCalc(steps, ends) {
  const step = new Array(3);
  step[0] = (ends[1].r - ends[0].r) / steps;
  step[1] = (ends[1].g - ends[0].g) / steps;
  step[2] = (ends[1].b - ends[0].b) / steps;
  return step;
}

/**
 * Create a color palette from two colors
 *
 * @param {number} steps The number of steps the palette has
 * @param {string} color1 The first color
 * @param {string} color2 The second color
 * @return {Array} The created palette array
 */
function mixPalette(steps, color1, color2) {
  const palette = [];
  palette.push(color1);
  const step = stepCalc(steps, [color1, color2]);
  for (let i = 1; i < steps; i++) {
    const r = parseInt(color1.r + step[0] * i, 10);
    const g = parseInt(color1.g + step[1] * i, 10);
    const b = parseInt(color1.b + step[2] * i, 10);
    palette.push(new Color(r, g, b));
  }
  return palette;
}

/**
 * Generate colors from the official nextcloud color
 * You can provide how many colors you want (multiplied by 3)
 * if step = 6
 * 3 colors * 6 will result in 18 generated colors
 *
 * @param {number} [steps] Number of steps to go from a color to another
 * @return {object[]}
 */
function GenColors(steps) {
  if (!steps) {
    steps = 6;
  }
  const red = new Color(182, 70, 157);
  const yellow = new Color(221, 203, 85);
  const blue = new Color(0, 130, 201); // Nextcloud blue

  const palette1 = mixPalette(steps, red, yellow);
  const palette2 = mixPalette(steps, yellow, blue);
  const palette3 = mixPalette(steps, blue, red);
  return palette1.concat(palette2).concat(palette3);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uidToColor);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon-close[data-v-a60f3f46] {
  display: block;
  height: 100%;
}
.modal__content[data-v-a60f3f46] {
  padding: 50px;
  margin-bottom: 95px;
}
.modal__content__actions[data-v-a60f3f46] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.modal__content__actions__select[data-v-a60f3f46] {
  width: 260px;
}
.modal__content__actions__date[data-v-a60f3f46] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal__content__actions__date > *[data-v-a60f3f46] {
  margin-left: 5px;
}
.modal__content__header[data-v-a60f3f46] {
  margin-bottom: 20px;
}
.modal__content__header h3[data-v-a60f3f46] {
  font-weight: 500;
}
.modal__content__header__attendees__user-bubble[data-v-a60f3f46] {
  margin-right: 5px;
}
.modal__content__footer[data-v-a60f3f46] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.modal__content__footer__title h3[data-v-a60f3f46] {
  font-weight: 500;
}
.modal__content__footer__title__timezone[data-v-a60f3f46] {
  color: var(--color-text-lighter);
}
[data-v-a60f3f46] .vs__search {
  text-overflow: ellipsis;
}
[data-v-a60f3f46] .mx-input {
  height: 38px !important;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.blocking-event-free-busy {
  z-index: 3 !important;
}
.free-busy-block {
  opacity: 0.7 !important;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
[data-v-d74a293a] .avatardiv {
	overflow: visible !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/moment/locale ../../node_modules/moment/locale lazy recursive ^\\.\\/.*\\.js$":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/moment/locale/ ../../node_modules/moment/locale/ lazy ^\.\/.*\.js$ namespace object ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af.js": [
		"./node_modules/moment/locale/af.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ar-dz.js": [
		"./node_modules/moment/locale/ar-dz.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ar-kw.js": [
		"./node_modules/moment/locale/ar-kw.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ar-ly.js": [
		"./node_modules/moment/locale/ar-ly.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ar-ma.js": [
		"./node_modules/moment/locale/ar-ma.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ar-ps.js": [
		"./node_modules/moment/locale/ar-ps.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ar-sa.js": [
		"./node_modules/moment/locale/ar-sa.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ar-tn.js": [
		"./node_modules/moment/locale/ar-tn.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ar.js": [
		"./node_modules/moment/locale/ar.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./az.js": [
		"./node_modules/moment/locale/az.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./be.js": [
		"./node_modules/moment/locale/be.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./bg.js": [
		"./node_modules/moment/locale/bg.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./bm.js": [
		"./node_modules/moment/locale/bm.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./bn-bd.js": [
		"./node_modules/moment/locale/bn-bd.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./bn.js": [
		"./node_modules/moment/locale/bn.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./bo.js": [
		"./node_modules/moment/locale/bo.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./br.js": [
		"./node_modules/moment/locale/br.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./bs.js": [
		"./node_modules/moment/locale/bs.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ca.js": [
		"./node_modules/moment/locale/ca.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./cs.js": [
		"./node_modules/moment/locale/cs.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./cv.js": [
		"./node_modules/moment/locale/cv.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./cy.js": [
		"./node_modules/moment/locale/cy.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./da.js": [
		"./node_modules/moment/locale/da.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./de-at.js": [
		"./node_modules/moment/locale/de-at.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./de-ch.js": [
		"./node_modules/moment/locale/de-ch.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./de.js": [
		"./node_modules/moment/locale/de.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./dv.js": [
		"./node_modules/moment/locale/dv.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./el.js": [
		"./node_modules/moment/locale/el.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./en-au.js": [
		"./node_modules/moment/locale/en-au.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./en-ca.js": [
		"./node_modules/moment/locale/en-ca.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./en-gb.js": [
		"./node_modules/moment/locale/en-gb.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./en-ie.js": [
		"./node_modules/moment/locale/en-ie.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./en-il.js": [
		"./node_modules/moment/locale/en-il.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./en-in.js": [
		"./node_modules/moment/locale/en-in.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./en-nz.js": [
		"./node_modules/moment/locale/en-nz.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./en-sg.js": [
		"./node_modules/moment/locale/en-sg.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./eo.js": [
		"./node_modules/moment/locale/eo.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./es-do.js": [
		"./node_modules/moment/locale/es-do.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./es-mx.js": [
		"./node_modules/moment/locale/es-mx.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./es-us.js": [
		"./node_modules/moment/locale/es-us.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./es.js": [
		"./node_modules/moment/locale/es.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./et.js": [
		"./node_modules/moment/locale/et.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./eu.js": [
		"./node_modules/moment/locale/eu.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./fa.js": [
		"./node_modules/moment/locale/fa.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./fi.js": [
		"./node_modules/moment/locale/fi.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./fil.js": [
		"./node_modules/moment/locale/fil.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./fo.js": [
		"./node_modules/moment/locale/fo.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./fr-ca.js": [
		"./node_modules/moment/locale/fr-ca.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./fr-ch.js": [
		"./node_modules/moment/locale/fr-ch.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./fr.js": [
		"./node_modules/moment/locale/fr.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./fy.js": [
		"./node_modules/moment/locale/fy.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ga.js": [
		"./node_modules/moment/locale/ga.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./gd.js": [
		"./node_modules/moment/locale/gd.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./gl.js": [
		"./node_modules/moment/locale/gl.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./gom-deva.js": [
		"./node_modules/moment/locale/gom-deva.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./gom-latn.js": [
		"./node_modules/moment/locale/gom-latn.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./gu.js": [
		"./node_modules/moment/locale/gu.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./he.js": [
		"./node_modules/moment/locale/he.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./hi.js": [
		"./node_modules/moment/locale/hi.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./hr.js": [
		"./node_modules/moment/locale/hr.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./hu.js": [
		"./node_modules/moment/locale/hu.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./hy-am.js": [
		"./node_modules/moment/locale/hy-am.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./id.js": [
		"./node_modules/moment/locale/id.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./is.js": [
		"./node_modules/moment/locale/is.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./it-ch.js": [
		"./node_modules/moment/locale/it-ch.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./it.js": [
		"./node_modules/moment/locale/it.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ja.js": [
		"./node_modules/moment/locale/ja.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./jv.js": [
		"./node_modules/moment/locale/jv.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ka.js": [
		"./node_modules/moment/locale/ka.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./kk.js": [
		"./node_modules/moment/locale/kk.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./km.js": [
		"./node_modules/moment/locale/km.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./kn.js": [
		"./node_modules/moment/locale/kn.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ko.js": [
		"./node_modules/moment/locale/ko.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ku-kmr.js": [
		"./node_modules/moment/locale/ku-kmr.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ku.js": [
		"./node_modules/moment/locale/ku.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ky.js": [
		"./node_modules/moment/locale/ky.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./lb.js": [
		"./node_modules/moment/locale/lb.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./lo.js": [
		"./node_modules/moment/locale/lo.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./lt.js": [
		"./node_modules/moment/locale/lt.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./lv.js": [
		"./node_modules/moment/locale/lv.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./me.js": [
		"./node_modules/moment/locale/me.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./mi.js": [
		"./node_modules/moment/locale/mi.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./mk.js": [
		"./node_modules/moment/locale/mk.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ml.js": [
		"./node_modules/moment/locale/ml.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./mn.js": [
		"./node_modules/moment/locale/mn.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./mr.js": [
		"./node_modules/moment/locale/mr.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ms-my.js": [
		"./node_modules/moment/locale/ms-my.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ms.js": [
		"./node_modules/moment/locale/ms.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./mt.js": [
		"./node_modules/moment/locale/mt.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./my.js": [
		"./node_modules/moment/locale/my.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./nb.js": [
		"./node_modules/moment/locale/nb.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ne.js": [
		"./node_modules/moment/locale/ne.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./nl-be.js": [
		"./node_modules/moment/locale/nl-be.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./nl.js": [
		"./node_modules/moment/locale/nl.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./nn.js": [
		"./node_modules/moment/locale/nn.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./oc-lnc.js": [
		"./node_modules/moment/locale/oc-lnc.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./pa-in.js": [
		"./node_modules/moment/locale/pa-in.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./pl.js": [
		"./node_modules/moment/locale/pl.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./pt-br.js": [
		"./node_modules/moment/locale/pt-br.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./pt.js": [
		"./node_modules/moment/locale/pt.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ro.js": [
		"./node_modules/moment/locale/ro.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ru.js": [
		"./node_modules/moment/locale/ru.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./sd.js": [
		"./node_modules/moment/locale/sd.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./se.js": [
		"./node_modules/moment/locale/se.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./si.js": [
		"./node_modules/moment/locale/si.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./sk.js": [
		"./node_modules/moment/locale/sk.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./sl.js": [
		"./node_modules/moment/locale/sl.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./sq.js": [
		"./node_modules/moment/locale/sq.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./sr-cyrl.js": [
		"./node_modules/moment/locale/sr-cyrl.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./sr.js": [
		"./node_modules/moment/locale/sr.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ss.js": [
		"./node_modules/moment/locale/ss.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./sv.js": [
		"./node_modules/moment/locale/sv.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./sw.js": [
		"./node_modules/moment/locale/sw.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ta.js": [
		"./node_modules/moment/locale/ta.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./te.js": [
		"./node_modules/moment/locale/te.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./tet.js": [
		"./node_modules/moment/locale/tet.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./tg.js": [
		"./node_modules/moment/locale/tg.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./th.js": [
		"./node_modules/moment/locale/th.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./tk.js": [
		"./node_modules/moment/locale/tk.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./tl-ph.js": [
		"./node_modules/moment/locale/tl-ph.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./tlh.js": [
		"./node_modules/moment/locale/tlh.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./tr.js": [
		"./node_modules/moment/locale/tr.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./tzl.js": [
		"./node_modules/moment/locale/tzl.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./tzm-latn.js": [
		"./node_modules/moment/locale/tzm-latn.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./tzm.js": [
		"./node_modules/moment/locale/tzm.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ug-cn.js": [
		"./node_modules/moment/locale/ug-cn.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./uk.js": [
		"./node_modules/moment/locale/uk.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./ur.js": [
		"./node_modules/moment/locale/ur.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./uz-latn.js": [
		"./node_modules/moment/locale/uz-latn.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./uz.js": [
		"./node_modules/moment/locale/uz.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./vi.js": [
		"./node_modules/moment/locale/vi.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./x-pseudo.js": [
		"./node_modules/moment/locale/x-pseudo.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./yo.js": [
		"./node_modules/moment/locale/yo.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./zh-cn.js": [
		"./node_modules/moment/locale/zh-cn.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./zh-hk.js": [
		"./node_modules/moment/locale/zh-hk.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./zh-mo.js": [
		"./node_modules/moment/locale/zh-mo.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	],
	"./zh-tw.js": [
		"./node_modules/moment/locale/zh-tw.js",
		"vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96",
		"node_modules_moment_locale_sync_recursive_"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./node_modules/moment/locale ../../node_modules/moment/locale lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_style_index_0_id_d74a293a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_style_index_0_id_d74a293a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_style_index_0_id_d74a293a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_style_index_0_id_d74a293a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_style_index_0_id_d74a293a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Editor/FreeBusy/FreeBusy.vue":
/*!*****************************************************!*\
  !*** ./src/components/Editor/FreeBusy/FreeBusy.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FreeBusy_vue_vue_type_template_id_a60f3f46_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreeBusy.vue?vue&type=template&id=a60f3f46&scoped=true */ "./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=template&id=a60f3f46&scoped=true");
/* harmony import */ var _FreeBusy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FreeBusy.vue?vue&type=script&lang=js */ "./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=script&lang=js");
/* harmony import */ var _FreeBusy_vue_vue_type_style_index_0_id_a60f3f46_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true */ "./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true");
/* harmony import */ var _FreeBusy_vue_vue_type_style_index_1_id_a60f3f46_lang_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss */ "./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _FreeBusy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FreeBusy_vue_vue_type_template_id_a60f3f46_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FreeBusy_vue_vue_type_template_id_a60f3f46_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a60f3f46",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Editor/FreeBusy/FreeBusy.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Editor/Invitees/InviteesListSearch.vue":
/*!***************************************************************!*\
  !*** ./src/components/Editor/Invitees/InviteesListSearch.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InviteesListSearch_vue_vue_type_template_id_d74a293a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InviteesListSearch.vue?vue&type=template&id=d74a293a&scoped=true */ "./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=template&id=d74a293a&scoped=true");
/* harmony import */ var _InviteesListSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InviteesListSearch.vue?vue&type=script&lang=js */ "./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=script&lang=js");
/* harmony import */ var _InviteesListSearch_vue_vue_type_style_index_0_id_d74a293a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css */ "./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InviteesListSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _InviteesListSearch_vue_vue_type_template_id_d74a293a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _InviteesListSearch_vue_vue_type_template_id_d74a293a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d74a293a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Editor/Invitees/InviteesListSearch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FreeBusy.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InviteesListSearch.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=template&id=a60f3f46&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=template&id=a60f3f46&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_template_id_a60f3f46_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_template_id_a60f3f46_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_template_id_a60f3f46_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FreeBusy.vue?vue&type=template&id=a60f3f46&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=template&id=a60f3f46&scoped=true");


/***/ }),

/***/ "./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=template&id=d74a293a&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=template&id=d74a293a&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_template_id_d74a293a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_template_id_d74a293a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_template_id_d74a293a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InviteesListSearch.vue?vue&type=template&id=d74a293a&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=template&id=d74a293a&scoped=true");


/***/ }),

/***/ "./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css":
/*!***********************************************************************************************************************!*\
  !*** ./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InviteesListSearch_vue_vue_type_style_index_0_id_d74a293a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/Invitees/InviteesListSearch.vue?vue&type=style&index=0&id=d74a293a&scoped=true&lang=css");


/***/ }),

/***/ "./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_style_index_0_id_a60f3f46_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_style_index_0_id_a60f3f46_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_style_index_0_id_a60f3f46_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_style_index_0_id_a60f3f46_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_style_index_0_id_a60f3f46_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss":
/*!**************************************************************************************************!*\
  !*** ./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_style_index_1_id_a60f3f46_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_style_index_1_id_a60f3f46_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_style_index_1_id_a60f3f46_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_style_index_1_id_a60f3f46_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FreeBusy_vue_vue_type_style_index_1_id_a60f3f46_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=0&id=a60f3f46&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("799e1154", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Editor/FreeBusy/FreeBusy.vue?vue&type=style&index=1&id=a60f3f46&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("3855a3c0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=calendar-src_utils_moment_js-src_components_Editor_FreeBusy_FreeBusy_vue.js.map?v=98997bc942d3bf9807fd