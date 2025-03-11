"use strict";
(self["webpackChunkcalendar"] = self["webpackChunkcalendar"] || []).push([["src_views_ContactsMenuAvailability_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/ContactsMenuAvailability.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/ContactsMenuAvailability.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_principals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/principals.js */ "./src/store/principals.js");
/* harmony import */ var _store_settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/settings.js */ "./src/store/settings.js");
/* harmony import */ var _models_attendee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/attendee.js */ "./src/models/attendee.js");
/* harmony import */ var _utils_moment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/moment.js */ "./src/utils/moment.js");
/* harmony import */ var _services_caldavService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/caldavService.js */ "./src/services/caldavService.js");
/* harmony import */ var _services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/timezoneDataProviderService.js */ "./src/services/timezoneDataProviderService.js");
/* harmony import */ var _components_Editor_FreeBusy_FreeBusy_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Editor/FreeBusy/FreeBusy.vue */ "./src/components/Editor/FreeBusy/FreeBusy.vue");
/* harmony import */ var _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/calendar-js */ "./node_modules/@nextcloud/calendar-js/dist/index.mjs");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ContactsMenuAvailability',
  components: {
    FreeBusy: _components_Editor_FreeBusy_FreeBusy_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    userId: {
      type: String,
      required: true
    },
    userDisplayName: {
      type: String,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    }
  },
  data() {
    const initialAttendee = _nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_7__.AttendeeProperty.fromNameAndEMail(this.userDisplayName, this.userEmail);
    const attendees = [(0,_models_attendee_js__WEBPACK_IMPORTED_MODULE_2__.mapAttendeePropertyToAttendeeObject)(initialAttendee)];
    return {
      initialized: false,
      attendees
    };
  },
  computed: {
    ...(0,pinia__WEBPACK_IMPORTED_MODULE_8__.mapStores)(_store_principals_js__WEBPACK_IMPORTED_MODULE_0__["default"], _store_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    dialogName() {
      return t('calendar', 'Availability of {displayName}', {
        displayName: this.userDisplayName
      });
    },
    startDate() {
      return new Date();
    },
    endDate() {
      // Let's assign a slot of one hour as a default for now
      const date = new Date(this.startDate);
      date.setHours(date.getHours() + 1);
      return date;
    },
    organizer() {
      if (!this.principalsStore.getCurrentUserPrincipal) {
        throw new Error('No principal available for current user');
      }
      return (0,_models_attendee_js__WEBPACK_IMPORTED_MODULE_2__.mapPrincipalObjectToAttendeeObject)(this.principalsStore.getCurrentUserPrincipal, true);
    }
  },
  async created() {
    this.initSettings();
    await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_4__.initializeClientForUserView)();
    await this.principalsStore.fetchCurrentUserPrincipal();
    (0,_services_timezoneDataProviderService_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    await this.loadMomentLocale();
    this.initialized = true;
  },
  methods: {
    initSettings() {
      this.settingsStore.loadSettingsFromServer({
        timezone: 'automatic'
      });
      this.settingsStore.initializeCalendarJsConfig();
    },
    async loadMomentLocale() {
      const locale = await (0,_utils_moment_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      this.settingsStore.setMomentLocale({
        locale
      });
    },
    addAttendee(_ref) {
      let {
        commonName,
        email
      } = _ref;
      this.attendees.push((0,_models_attendee_js__WEBPACK_IMPORTED_MODULE_2__.mapAttendeePropertyToAttendeeObject)(_nextcloud_calendar_js__WEBPACK_IMPORTED_MODULE_7__.AttendeeProperty.fromNameAndEMail(commonName, email)));
    },
    removeAttendee(_ref2) {
      let {
        email
      } = _ref2;
      this.attendees = this.attendees.filter(att => att.uri !== email);
    },
    close() {
      this.$destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/ContactsMenuAvailability.vue?vue&type=template&id=516832f2&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/ContactsMenuAvailability.vue?vue&type=template&id=516832f2&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.initialized ? _c("FreeBusy", {
    attrs: {
      "dialog-name": _vm.dialogName,
      "start-date": _vm.startDate,
      "end-date": _vm.endDate,
      organizer: _vm.organizer,
      attendees: _vm.attendees,
      "disable-find-time": true
    },
    on: {
      "add-attendee": _vm.addAttendee,
      "remove-attendee": _vm.removeAttendee,
      close: _vm.close
    }
  }) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/views/ContactsMenuAvailability.vue":
/*!************************************************!*\
  !*** ./src/views/ContactsMenuAvailability.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContactsMenuAvailability_vue_vue_type_template_id_516832f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactsMenuAvailability.vue?vue&type=template&id=516832f2&scoped=true */ "./src/views/ContactsMenuAvailability.vue?vue&type=template&id=516832f2&scoped=true");
/* harmony import */ var _ContactsMenuAvailability_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactsMenuAvailability.vue?vue&type=script&lang=js */ "./src/views/ContactsMenuAvailability.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactsMenuAvailability_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactsMenuAvailability_vue_vue_type_template_id_516832f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ContactsMenuAvailability_vue_vue_type_template_id_516832f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "516832f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/ContactsMenuAvailability.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/views/ContactsMenuAvailability.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/views/ContactsMenuAvailability.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsMenuAvailability_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactsMenuAvailability.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/ContactsMenuAvailability.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsMenuAvailability_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/ContactsMenuAvailability.vue?vue&type=template&id=516832f2&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/views/ContactsMenuAvailability.vue?vue&type=template&id=516832f2&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsMenuAvailability_vue_vue_type_template_id_516832f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsMenuAvailability_vue_vue_type_template_id_516832f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactsMenuAvailability_vue_vue_type_template_id_516832f2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContactsMenuAvailability.vue?vue&type=template&id=516832f2&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/ContactsMenuAvailability.vue?vue&type=template&id=516832f2&scoped=true");


/***/ })

}]);
//# sourceMappingURL=calendar-src_views_ContactsMenuAvailability_vue.js.map?v=8cbd75be1dc48ce898d1