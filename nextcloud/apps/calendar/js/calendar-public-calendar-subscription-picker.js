(self["webpackChunkcalendar"] = self["webpackChunkcalendar"] || []).push([["public-calendar-subscription-picker"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_CalendarBlank_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/CalendarBlank.vue */ "./node_modules/vue-material-design-icons/CalendarBlank.vue");
/* harmony import */ var _services_caldavService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/caldavService.js */ "./src/services/caldavService.js");
/* harmony import */ var _resources_holiday_calendars_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/holiday_calendars.json */ "./src/resources/holiday_calendars.json");
/* harmony import */ var _utils_color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/color.js */ "./src/utils/color.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_calendars_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/calendars.js */ "./src/store/calendars.js");









const isValidString = function (str) {
  let allowNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return typeof str === 'string' || str instanceof String || allowNull && !str;
};
const isValidURL = str => {
  try {
    return Boolean(new URL(str));
  } catch {
    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PublicCalendarSubscriptionPicker',
  components: {
    CalendarBlank: vue_material_design_icons_CalendarBlank_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NcButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcButton,
    NcEmptyContent: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcEmptyContent,
    NcModal: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcModal
  },
  props: {
    showHolidays: Boolean
  },
  data() {
    let calendars = [];
    if (this.showHolidays) {
      calendars = _resources_holiday_calendars_json__WEBPACK_IMPORTED_MODULE_4__.map(calendar => ({
        ...calendar,
        displayName: t('calendar', 'Holidays in {region}', {
          region: calendar.country
        }),
        name: calendar.country,
        description: calendar.datespan,
        source: 'https://www.thunderbird.net/media/caldata/' + calendar.filename
      }));
    } else {
      try {
        const state = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_6__.loadState)('calendar', 'publicCalendars');
        calendars = JSON.parse(state).filter(calendar => {
          const isValid = isValidString(calendar.name) && isValidURL(calendar.source) && isValidString(calendar.displayName, true) && isValidString(calendar.description, true) && isValidString(calendar.authors, true);
          if (!isValid) {
            console.error('Invalid public calendar', calendar);
          }
          return isValid;
        });
      } catch (error) {
        console.error('Could not read public calendars', error);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(this.$t('calendar', 'An error occurred, unable to read public calendars.'));
      }
    }
    const subscribing = {};
    const subscribed = {};
    calendars.forEach(calendar => {
      subscribing[calendar.source] = false;
      subscribed[calendar.source] = false;
    });
    return {
      calendars,
      loading: true,
      subscribed,
      subscribing,
      subscriptions: []
    };
  },
  computed: {
    ...(0,pinia__WEBPACK_IMPORTED_MODULE_8__.mapStores)(_store_calendars_js__WEBPACK_IMPORTED_MODULE_7__["default"])
  },
  async mounted() {
    this.subscriptions = await (0,_services_caldavService_js__WEBPACK_IMPORTED_MODULE_3__.findAllSubscriptions)();
    this.subscriptions.map(sub => this.subscribed[sub.source] = true);
    this.loading = false;
  },
  methods: {
    async subscribe(calendar) {
      try {
        this.subscribing[calendar.source] = true;
        await this.calendarsStore.appendSubscription({
          displayName: calendar.displayName || calendar.name,
          color: (0,_utils_color_js__WEBPACK_IMPORTED_MODULE_5__.uidToHexColor)(calendar.source),
          source: calendar.source
        });
        this.subscribed[calendar.source] = true;
      } catch (error) {
        console.error('Could not add calendar subscription', error);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(this.$t('calendar', 'An error occurred, unable to subscribe to calendar.'));
      } finally {
        this.subscribing[calendar.source] = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=template&id=61d243f8&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=template&id=61d243f8&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("NcModal", {
    on: {
      close: function ($event) {
        return _vm.$emit("close", $event);
      }
    }
  }, [_c("div", {
    staticClass: "public-calendar-subscription-picker"
  }, [_vm.showHolidays ? _c("h2", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("calendar", "Public holiday calendars")) + "\n\t\t")]) : _c("h2", [_vm._v("\n\t\t\t" + _vm._s(_vm.t("calendar", "Public calendars")) + "\n\t\t")]), _vm._v(" "), !_vm.calendars.length ? _c("NcEmptyContent", {
    attrs: {
      title: _vm.$t("calendar", "No valid public calendars configured"),
      description: _vm.$t("calendar", "Speak to the server administrator to resolve this issue.")
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("CalendarBlank", {
          attrs: {
            size: 20,
            decorative: ""
          }
        })];
      },
      proxy: true
    }], null, false, 2920828918)
  }) : _vm.showHolidays ? _c("p", {
    staticClass: "holiday-subscription-picker__attribution"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("calendar", "Public holiday calendars are provided by Thunderbird. Calendar data will be downloaded from {website}", {
    website: "thunderbird.net"
  })) + "\n\t\t")]) : _c("p", {
    staticClass: "holiday-subscription-picker__attribution"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("calendar", "These public calendars are suggested by the sever administrator. Calendar data will be downloaded from the respective website.")) + "\n\t\t")]), _vm._v(" "), _vm._l(_vm.calendars, function (calendar) {
    return _c("div", {
      key: calendar.source,
      staticClass: "public-calendar-subscription-picker__region"
    }, [_c("div", {
      staticClass: "public-calendar-subscription-picker__region__name"
    }, [_c("h3", [_vm._v(_vm._s(calendar.name))]), _vm._v(" "), calendar.description ? _c("div", {
      staticClass: "public-calendar-subscription-picker__region__name__subline"
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(calendar.description) + "\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), calendar.authors ? _c("div", {
      staticClass: "public-calendar-subscription-picker__region__name__subline"
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("calendar", "By {authors}", {
      authors: calendar.authors
    })) + "\n\t\t\t\t")]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "public-calendar-subscription-picker__region__subcribe"
    }, [_c("NcButton", {
      attrs: {
        disabled: _vm.loading || _vm.subscribing[calendar.source] || _vm.subscribed[calendar.source]
      },
      on: {
        click: function ($event) {
          return _vm.subscribe(calendar);
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.subscribed[calendar.source] ? _vm.t("calendar", "Subscribed") : _vm.t("calendar", "Subscribe")) + "\n\t\t\t\t")])], 1)]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.public-calendar-subscription-picker[data-v-61d243f8] {
  padding: 20px;
}
.public-calendar-subscription-picker__attribution[data-v-61d243f8] {
  color: var(--color-text-maxcontrast);
}
.public-calendar-subscription-picker__region[data-v-61d243f8] {
  display: flex;
  margin-top: 20px;
  align-items: center;
}
.public-calendar-subscription-picker__region__name[data-v-61d243f8] {
  flex-grow: 1;
}
.public-calendar-subscription-picker__region__name h3[data-v-61d243f8] {
  font-weight: bold;
  margin-bottom: initial;
}
.public-calendar-subscription-picker__region__name__subline[data-v-61d243f8] {
  color: var(--color-text-maxcontrast);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Subscription/PublicCalendarSubscriptionPicker.vue":
/*!**************************************************************************!*\
  !*** ./src/components/Subscription/PublicCalendarSubscriptionPicker.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PublicCalendarSubscriptionPicker_vue_vue_type_template_id_61d243f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PublicCalendarSubscriptionPicker.vue?vue&type=template&id=61d243f8&scoped=true */ "./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=template&id=61d243f8&scoped=true");
/* harmony import */ var _PublicCalendarSubscriptionPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicCalendarSubscriptionPicker.vue?vue&type=script&lang=js */ "./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=script&lang=js");
/* harmony import */ var _PublicCalendarSubscriptionPicker_vue_vue_type_style_index_0_id_61d243f8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true */ "./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PublicCalendarSubscriptionPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PublicCalendarSubscriptionPicker_vue_vue_type_template_id_61d243f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PublicCalendarSubscriptionPicker_vue_vue_type_template_id_61d243f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "61d243f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Subscription/PublicCalendarSubscriptionPicker.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicCalendarSubscriptionPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PublicCalendarSubscriptionPicker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicCalendarSubscriptionPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=template&id=61d243f8&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=template&id=61d243f8&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicCalendarSubscriptionPicker_vue_vue_type_template_id_61d243f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicCalendarSubscriptionPicker_vue_vue_type_template_id_61d243f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicCalendarSubscriptionPicker_vue_vue_type_template_id_61d243f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PublicCalendarSubscriptionPicker.vue?vue&type=template&id=61d243f8&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=template&id=61d243f8&scoped=true");


/***/ }),

/***/ "./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true":
/*!***********************************************************************************************************************************!*\
  !*** ./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicCalendarSubscriptionPicker_vue_vue_type_style_index_0_id_61d243f8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicCalendarSubscriptionPicker_vue_vue_type_style_index_0_id_61d243f8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicCalendarSubscriptionPicker_vue_vue_type_style_index_0_id_61d243f8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicCalendarSubscriptionPicker_vue_vue_type_style_index_0_id_61d243f8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_2_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PublicCalendarSubscriptionPicker_vue_vue_type_style_index_0_id_61d243f8_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Subscription/PublicCalendarSubscriptionPicker.vue?vue&type=style&index=0&id=61d243f8&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("170e1bda", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/resources/holiday_calendars.json":
/*!**********************************************!*\
  !*** ./src/resources/holiday_calendars.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"country":"Albania","locale":"AL","language":"sq","filename":"autogen/AlbaniaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Algeria (Arabic)","locale":"DZ","language":"ar","filename":"autogen/AlgeriaHolidaysArabic.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Algeria (French)","locale":"DZ","language":"fr","filename":"autogen/AlgeriaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Argentina","locale":"AR","language":"es","filename":"autogen/ArgentinaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Armenia","locale":"AM","language":"hy","filename":"autogen/ArmeniaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Australia","locale":"AU","language":"en","filename":"autogen/AustraliaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Austrian","locale":"AT","language":"de","filename":"autogen/AustrianHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Belgian (French)","locale":"BE","language":"fr","filename":"autogen/BelgianHolidaysFrench.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Belgian (Dutch)","locale":"BE","language":"nl","filename":"autogen/BelgianHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Bolivia","locale":"BO","language":"es","filename":"autogen/BoliviaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Brazil","locale":"BR","language":"pt","filename":"autogen/BrazilHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Bulgaria","locale":"BG","language":"bg","filename":"autogen/BulgarianHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Canada (English)","locale":"CA","language":"en","filename":"autogen/CanadaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Canada (French)","locale":"CA","language":"fr","filename":"autogen/CanadaHolidaysFrench.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Chile","locale":"CL","language":"es","filename":"autogen/ChileHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"China","locale":"CN","language":"zh","filename":"autogen/ChinaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Colombia","locale":"CO","language":"es","filename":"autogen/ColombianHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Costa Rica","locale":"CR","language":"es","filename":"autogen/CostaRicaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Croatia","locale":"HR","language":"hr","filename":"autogen/CroatiaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Czech","locale":"CZ","language":"cs","filename":"autogen/CzechHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Denmark","locale":"DK","language":"da","filename":"autogen/DenmarkHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Dominican Republic","locale":"DO","language":"es","filename":"autogen/DominicanRepublicHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Netherlands (Dutch)","locale":"NL","language":"nl","filename":"autogen/DutchHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Netherlands (English)","locale":"NL","language":"en","filename":"autogen/DutchHolidaysEnglish.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Netherlands (German)","locale":"NL","language":"de","filename":"autogen/DutchHolidaysGerman.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Netherlands (French)","locale":"NL","language":"fr","filename":"autogen/DutchHolidaysFrench.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Estonia","locale":"EE","language":"et","filename":"autogen/EstoniaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Finland (Finnish)","locale":"FI","language":"fi","filename":"autogen/FinlandHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Finland (Swedish)","locale":"FI","language":"sv","filename":"autogen/FinlandHolidaysSwedish.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"France","locale":"FR","language":"fr","filename":"autogen/FrenchHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Germany","locale":"DE","language":"de","filename":"autogen/GermanHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Greece","locale":"GR","language":"el","filename":"autogen/GreeceHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Guyana","locale":"GY","language":"en","filename":"autogen/GuyanaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Haiti","locale":"HT","language":"ht","filename":"autogen/HaitiHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Hong Kong","locale":"HK","language":"zh","filename":"autogen/HongKongHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Hungary","locale":"HU","language":"hu","filename":"autogen/HungarianHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Iceland","locale":"IS","language":"is","filename":"autogen/IcelandHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"India","locale":"IN","language":"hi","filename":"autogen/IndiaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Indonesia","locale":"ID","language":"id","filename":"autogen/IndonesiaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Ireland (Irish)","locale":"IE","language":"ga","filename":"autogen/IrelandHolidaysIrish.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Ireland (English)","locale":"IE","language":"en","filename":"autogen/IrelandHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Israel","locale":"IL","language":"en","filename":"autogen/IsraelHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Italy","locale":"IT","language":"it","filename":"autogen/ItalianHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Japan","locale":"JP","language":"ja","filename":"autogen/JapanHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Kazakhstan","locale":"KZ","language":"kk","filename":"autogen/KazakhstanHolidaysEnglish.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Kenya","locale":"KE","language":"sw","filename":"autogen/KenyaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Latvia","locale":"LV","language":"lv","filename":"autogen/LatviaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Lebanon","locale":"LB","language":"ar","filename":"autogen/LebanonHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Liechtenstein","locale":"LI","language":"de","filename":"autogen/LiechtensteinHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Lithuania","locale":"LT","language":"lt","filename":"autogen/LithuanianHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Luxembourg (French)","locale":"LU","language":"fr","filename":"autogen/LuxembourgHolidaysFrench.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Luxembourg (German)","locale":"LU","language":"de","filename":"autogen/LuxembourgHolidaysGerman.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Malaysia","locale":"MY","language":"ms","filename":"autogen/MalaysiaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Malta","locale":"MT","language":"mt","filename":"autogen/MaltaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Mexico","locale":"MX","language":"es","filename":"autogen/MexicoHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Morocco","locale":"MA","language":"ar","filename":"autogen/MoroccoHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Namibia","locale":"NA","language":"en","filename":"autogen/NamibiaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"New Zealand","locale":"NZ","language":"en","filename":"autogen/NewZealandHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Nicaragua","locale":"NI","language":"en","filename":"autogen/NicaraguaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Norway","locale":"NO","language":"no","filename":"autogen/NorwegianHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Pakistan","locale":"PK","language":"ur","filename":"autogen/PakistanHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Peru","locale":"PE","language":"es","filename":"autogen/PeruHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Philippines","locale":"PH","language":"en","filename":"autogen/PhilippinesHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Polish","locale":"PL","language":"pl","filename":"autogen/PolishHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Portugal","locale":"PT","language":"pt","filename":"autogen/PortugalHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Puerto Rico","locale":"PR","language":"en","filename":"autogen/PuertoRicoHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Romania","locale":"RO","language":"ro","filename":"autogen/RomaniaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Russia","locale":"RU","language":"ru","filename":"autogen/RussiaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Singapore","locale":"SG","language":"ms","filename":"autogen/SingaporeHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Slovakia","locale":"SK","language":"sk","filename":"autogen/SlovakHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Slovenia","locale":"SI","language":"sl","filename":"autogen/SlovenianHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"South Africa","locale":"ZA","language":"en","filename":"autogen/SouthAfricaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"South Korea","locale":"KR","language":"ko","filename":"autogen/SouthKoreaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Spain","locale":"ES","language":"es","filename":"autogen/SpainHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Sri Lanka","locale":"LK","language":"en","filename":"autogen/SriLankaHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Swedish","locale":"SE","language":"sv","filename":"autogen/SwedishHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Switzerland","locale":"CH","language":"en","filename":"autogen/SwissHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Taiwan","locale":"TW","language":"zh","filename":"autogen/TaiwanHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Thailand","locale":"TH","language":"th","filename":"autogen/ThailandHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Trinidad and Tobago","locale":"TT","language":"en","filename":"autogen/TrinidadandTobagoHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Turkey","locale":"TR","language":"tr","filename":"autogen/TurkeyHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"United Kingdom","locale":"GB","language":"en","filename":"autogen/UKHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Ukraine","locale":"UA","language":"uk","filename":"autogen/UkraineHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Uruguay","locale":"UY","language":"es","filename":"autogen/UruguayHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"United States","locale":"US","language":"en","filename":"autogen/USHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"},{"country":"Vietnam","locale":"VN","language":"vi","filename":"autogen/VietnamHolidays.ics","datespan":"2024-2027","authors":"Thunderbird","updated":"2024-04-01T16:00:03+00:00"}]');

/***/ })

}]);
//# sourceMappingURL=calendar-public-calendar-subscription-picker.js.map?v=e2a389b3b03bbf3848b4