(self["webpackChunknextcloud_mail"] = self["webpackChunknextcloud_mail"] || []).push([["src_components_Navigation_vue-src_components_icons_MailIcon_vue-data_image_svg_xml_3c_21--_20-128a06"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_ReorderHorizontal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/ReorderHorizontal.vue */ "./node_modules/vue-material-design-icons/ReorderHorizontal.vue");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Plus.vue */ "./node_modules/vue-material-design-icons/Plus.vue");
/* harmony import */ var vue_material_design_icons_Email_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/Email.vue */ "./node_modules/vue-material-design-icons/Email.vue");
/* harmony import */ var vue_material_design_icons_Lock_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/Lock.vue */ "./node_modules/vue-material-design-icons/Lock.vue");
/* harmony import */ var vue_material_design_icons_FormatColumns_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/FormatColumns.vue */ "./node_modules/vue-material-design-icons/FormatColumns.vue");
/* harmony import */ var vue_material_design_icons_ViewSplitHorizontal_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/ViewSplitHorizontal.vue */ "./node_modules/vue-material-design-icons/ViewSplitHorizontal.vue");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _smime_SmimeCertificateModal_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./smime/SmimeCertificateModal.vue */ "./src/components/smime/SmimeCertificateModal.vue");
/* harmony import */ var _TrustedSenders_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TrustedSenders.vue */ "./src/components/TrustedSenders.vue");
/* harmony import */ var _InternalAddress_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InternalAddress.vue */ "./src/components/InternalAddress.vue");
/* harmony import */ var _nextcloud_vue_dist_Mixins_isMobile_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nextcloud/vue/dist/Mixins/isMobile.js */ "./node_modules/@nextcloud/vue/dist/Mixins/isMobile.mjs");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AppSettingsMenu',
  components: {
    TrustedSenders: _TrustedSenders_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    InternalAddress: _InternalAddress_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    NcButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_3__.NcButton,
    IconEmail: vue_material_design_icons_Email_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    IconAdd: vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    IconLoading: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_3__.NcLoadingIcon,
    IconLock: vue_material_design_icons_Lock_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    SmimeCertificateModal: _smime_SmimeCertificateModal_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    NcCheckboxRadioSwitch: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_3__.NcCheckboxRadioSwitch,
    NcAppSettingsDialog: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_3__.NcAppSettingsDialog,
    NcAppSettingsSection: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_3__.NcAppSettingsSection,
    CompactMode: vue_material_design_icons_ReorderHorizontal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VerticalSplit: vue_material_design_icons_FormatColumns_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    HorizontalSplit: vue_material_design_icons_ViewSplitHorizontal_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mixins: [_nextcloud_vue_dist_Mixins_isMobile_js__WEBPACK_IMPORTED_MODULE_13__["default"]],
  props: {
    open: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      loadingAvatarSettings: false,
      prioritySettingsText: t('mail', 'Search in the body of messages in priority Inbox'),
      loadingPrioritySettings: false,
      // eslint-disable-next-line
      optOutSettingsText: t('mail', 'Activate'),
      loadingOptOutSettings: false,
      // eslint-disable-next-line
      replySettingsText: t('mail', 'Put my text to the bottom of a reply instead of on top of it.'),
      loadingReplySettings: false,
      // eslint-disable-next-line
      autoTaggingText: t('mail', 'Mark as important'),
      // eslint-disable-next-line
      followUpReminderText: t('mail', 'Remind about messages that require a reply but received none'),
      internalAddressText: t('mail', 'Use internal addresses'),
      toggleAutoTagging: false,
      displaySmimeCertificateModal: false,
      sortOrder: 'newest',
      showSettings: false,
      showAccountSettings: false,
      showMailSettings: true,
      selectedAccount: null,
      mailvelopeIsAvailable: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_15__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_14__["default"])), (0,pinia__WEBPACK_IMPORTED_MODULE_15__.mapState)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_14__["default"], ['getAccounts', 'followUpFeatureAvailable'])), {}, {
    searchPriorityBody() {
      return this.mainStore.getPreference('search-priority-body', 'false') === 'true';
    },
    useBottomReplies() {
      return this.mainStore.getPreference('reply-mode', 'top') === 'bottom';
    },
    useExternalAvatars() {
      return this.mainStore.getPreference('external-avatars', 'true') === 'true';
    },
    useDataCollection() {
      return this.mainStore.getPreference('collect-data', 'true') === 'true';
    },
    useAutoTagging() {
      return this.mainStore.getPreference('tag-classified-messages', 'true') === 'true';
    },
    useInternalAddresses() {
      return this.mainStore.getPreference('internal-addresses', 'false') === 'true';
    },
    useFollowUpReminders() {
      return this.mainStore.getPreference('follow-up-reminders', 'true') === 'true';
    },
    allowNewMailAccounts() {
      return this.mainStore.getPreference('allow-new-accounts', true);
    },
    layoutMode() {
      return this.mainStore.getPreference('layout-mode', 'vertical-split');
    }
  }),
  watch: {
    showSettings(value) {
      if (!value) {
        this.$emit('update:open', value);
      }
    },
    async open(value) {
      if (value) {
        await this.onOpen();
      }
    }
  },
  mounted() {
    this.sortOrder = this.mainStore.getPreference('sort-order', 'newest');
    document.addEventListener.call(window, 'mailvelope', () => this.checkMailvelope());
  },
  updated() {
    this.checkMailvelope();
  },
  methods: {
    closeAccountSettings() {
      this.showAccountSettings = false;
    },
    openAccountSettings(accountId) {
      this.mainStore.showSettingsForAccountMutation(accountId);
      this.showSettings = false;
    },
    checkMailvelope() {
      this.mailvelopeIsAvailable = !!window.mailvelope;
    },
    async setLayout(layoutMode) {
      try {
        await this.mainStore.savePreference({
          key: 'layout-mode',
          value: layoutMode
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('Could not save preferences', {
          error
        });
      }
    },
    async onOpen() {
      this.showSettings = true;
    },
    onToggleButtonReplies(e) {
      this.loadingReplySettings = true;
      this.mainStore.savePreference({
        key: 'reply-mode',
        value: e.target.checked ? 'bottom' : 'top'
      }).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('could not save preferences', {
        error
      })).then(() => {
        this.loadingReplySettings = false;
      });
    },
    onToggleExternalAvatars(e) {
      this.loadingAvatarSettings = true;
      this.mainStore.savePreference({
        key: 'external-avatars',
        value: e.target.checked ? 'true' : 'false'
      }).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('could not save preferences', {
        error
      })).then(() => {
        this.loadingAvatarSettings = false;
      });
    },
    async onToggleSearchPriorityBody(e) {
      this.loadingPrioritySettings = true;
      try {
        await this.mainStore.savePreference({
          key: 'search-priority-body',
          value: e.target.checked ? 'true' : 'false'
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('could not save preferences', {
          error
        });
      } finally {
        this.loadingPrioritySettings = false;
      }
    },
    onToggleCollectData(e) {
      this.loadingOptOutSettings = true;
      this.mainStore.savePreference({
        key: 'collect-data',
        value: e.target.checked ? 'true' : 'false'
      }).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('could not save preferences', {
        error
      })).then(() => {
        this.loadingOptOutSettings = false;
      });
    },
    async onSortByDate(e) {
      const previousValue = this.sortOrder;
      try {
        this.sortOrder = e;
        await this.mainStore.savePreference({
          key: 'sort-order',
          value: e
        });
        this.mainStore.removeAllEnvelopesMutation();
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('could not save preferences', {
          error
        });
        this.sortOrder = previousValue;
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('mail', 'Could not update preference'));
      }
    },
    async onToggleAutoTagging(e) {
      this.toggleAutoTagging = true;
      try {
        await this.mainStore.savePreference({
          key: 'tag-classified-messages',
          value: e.target.checked ? 'true' : 'false'
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('could not save preferences', {
          error
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('mail', 'Could not update preference'));
      } finally {
        this.toggleAutoTagging = false;
      }
    },
    async onToggleFollowUpReminders(e) {
      try {
        await this.mainStore.savePreference({
          key: 'follow-up-reminders',
          value: e.target.checked ? 'true' : 'false'
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('Could not save preferences', {
          error
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('mail', 'Could not update preference'));
      }
    },
    async onToggleInternalAddress(e) {
      try {
        await this.mainStore.savePreference({
          key: 'internal-addresses',
          value: e.target.checked ? 'true' : 'false'
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('Could not save preferences', {
          error
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('mail', 'Could not update preference'));
      }
    },
    registerProtocolHandler() {
      if (window.navigator.registerProtocolHandler) {
        const url = window.location.protocol + '//' + window.location.host + (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('apps/mail/compose?uri=%s');
        try {
          window.navigator.registerProtocolHandler('mailto', url, OC.theme.name + ' Mail');
        } catch (err) {
          _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('could not register protocol handler', {
            err
          });
        }
      }
    },
    mailvelopeAuthorizeDomain() {
      const iframe = document.createElement('iframe');
      iframe.style = 'display: none';
      iframe.src = 'https://api.mailvelope.com/authorize-domain/?api=true';
      document.body.append(iframe);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp/prop.js */ "./node_modules/lodash/fp/prop.js");
/* harmony import */ var lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/sortBy.js */ "./node_modules/lodash/fp/sortBy.js");
/* harmony import */ var lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/Plus.vue */ "./node_modules/vue-material-design-icons/Plus.vue");
/* harmony import */ var _mdi_svg_svg_cancel_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/cancel.svg */ "./node_modules/@mdi/svg/svg/cancel.svg");
/* harmony import */ var _mdi_svg_svg_cancel_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mdi_svg_svg_cancel_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mdi_svg_svg_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/svg/svg/check.svg */ "./node_modules/@mdi/svg/svg/check.svg");
/* harmony import */ var _mdi_svg_svg_check_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mdi_svg_svg_check_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










const sortByAddress = lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_2___default()(lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_1___default()('address'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InternalAddress',
  components: {
    ButtonVue: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcButton,
    NcDialog: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcDialog,
    NcTextField: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcTextField,
    IconAdd: vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data() {
    return {
      openDialog: false,
      newAddress: '',
      buttons: [{
        label: 'Cancel',
        icon: (_mdi_svg_svg_cancel_svg__WEBPACK_IMPORTED_MODULE_4___default()),
        callback: () => {
          this.openDialog = false;
        }
      }, {
        label: 'Ok',
        type: 'primary',
        icon: (_mdi_svg_svg_check_svg__WEBPACK_IMPORTED_MODULE_5___default()),
        callback: () => {
          this.addInternalAddress();
        }
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_9__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_8__["default"])), {}, {
    list() {
      return this.mainStore.getInternalAddresses;
    },
    sortedDomains() {
      return sortByAddress(this.list.filter(a => a.type === 'domain'));
    },
    sortedEmails() {
      return sortByAddress(this.list.filter(a => a.type === 'individual'));
    }
  }),
  methods: {
    async removeInternalAddress(sender) {
      // Remove the item immediately
      try {
        await this.mainStore.removeInternalAddress({
          id: sender.id,
          address: sender.address,
          type: sender.type
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].error("Could not remove internal address ".concat(sender.email), {
          error
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_7__.showError)(t('mail', 'Could not remove internal address {sender}', {
          sender: sender.address
        }));
      }
    },
    async addInternalAddress() {
      const type = this.checkType();
      try {
        await this.mainStore.addInternalAddress({
          address: this.newAddress,
          type
        }).then(async () => {
          this.newAddress = '';
          this.openDialog = false;
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].error("Could not add internal address ".concat(this.newAddress), {
          error
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_7__.showError)(t('mail', 'Could not add internal address {address}', {
          address: this.newAddress
        }));
      }
    },
    checkType() {
      const parts = this.newAddress.split('@');
      if (parts.length !== 2) {
        return 'domain';
      }
      // remove '@'' from domain if added by mistake
      if (parts[0].length === 0) {
        this.newAddress = parts[1];
        return 'domain';
      }
      return 'individual';
    },
    senderType(type) {
      switch (type) {
        case 'individual':
          return t('mail', 'individual');
        case 'domain':
          return t('mail', 'domain');
      }
      return type;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/ChevronRight.vue */ "./node_modules/vue-material-design-icons/ChevronRight.vue");
/* harmony import */ var vue_material_design_icons_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/Home.vue */ "./node_modules/vue-material-design-icons/Home.vue");
/* harmony import */ var vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/Pencil.vue */ "./node_modules/vue-material-design-icons/Pencil.vue");
/* harmony import */ var vue_material_design_icons_Send_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Send.vue */ "./node_modules/vue-material-design-icons/Send.vue");
/* harmony import */ var vue_material_design_icons_PackageDown_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/PackageDown.vue */ "./node_modules/vue-material-design-icons/PackageDown.vue");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var vue_material_design_icons_Folder_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/Folder.vue */ "./node_modules/vue-material-design-icons/Folder.vue");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _i18n_MailboxTranslator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../i18n/MailboxTranslator.js */ "./src/i18n/MailboxTranslator.js");
/* harmony import */ var _util_acl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/acl.js */ "./src/util/acl.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }













/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MailboxPicker',
  components: {
    ButtonVue: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcButton,
    Modal: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcModal,
    IconInbox: vue_material_design_icons_Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconDraft: vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconSent: vue_material_design_icons_Send_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    IconArchive: vue_material_design_icons_PackageDown_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    IconTrash: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    IconFolder: vue_material_design_icons_Folder_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    IconBreadcrumb: vue_material_design_icons_ChevronRight_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconLoading: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcLoadingIcon
  },
  props: {
    account: {
      type: Object,
      required: true
    },
    selected: {
      type: Number,
      required: false,
      default: undefined
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    labelSelect: {
      type: String,
      default: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_8__.translate)('mail', 'Choose')
    },
    labelSelectLoading: {
      type: String,
      default: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_8__.translate)('mail', 'Choose')
    },
    pickedMailbox: {
      type: Object,
      required: false,
      default: () => undefined
    },
    allowRoot: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedMailboxId: undefined,
      mailboxCrumbs: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_12__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_11__["default"])), {}, {
    mailboxes() {
      if (!this.selectedMailboxId) {
        return this.mainStore.getMailboxes(this.account.accountId);
      } else {
        return this.mainStore.getSubMailboxes(this.selectedMailboxId);
      }
    },
    filteredMailboxes() {
      if (this.pickedMailbox) {
        return this.mailboxes.filter(mailbox => mailbox.databaseId !== this.pickedMailbox.databaseId && (0,_util_acl_js__WEBPACK_IMPORTED_MODULE_10__.mailboxHasRights)(mailbox, 'k'));
      }
      return this.mailboxes.filter(mailbox => (0,_util_acl_js__WEBPACK_IMPORTED_MODULE_10__.mailboxHasRights)(mailbox, 'i'));
    }
  }),
  methods: {
    getMailboxIcon(mailbox) {
      return mailbox.specialRole ? 'icon-' + mailbox.specialRole : 'icon-folder';
    },
    getMailboxTitle(mailbox) {
      return (0,_i18n_MailboxTranslator_js__WEBPACK_IMPORTED_MODULE_9__.translate)(mailbox);
    },
    onClickHome() {
      this.selectedMailboxId = undefined;
      this.$emit('update:selected', undefined);
      this.mailboxCrumbs = [];
    },
    onClickCrumb(index) {
      this.selectedMailboxId = this.mailboxCrumbs[index].databaseId;
      this.$emit('update:selected', this.selectedMailboxId);
      this.mailboxCrumbs = this.mailboxCrumbs.slice(0, index + 1);
    },
    onClickMailbox(mailbox) {
      this.selectedMailboxId = mailbox.databaseId;
      this.$emit('update:selected', this.selectedMailboxId);
      this.mailboxCrumbs.push(mailbox);
    },
    onSelect() {
      this.$emit('select', this.selectedMailboxId);
    },
    onClose() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MoveMailboxModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MoveMailboxModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _MailboxPicker_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailboxPicker.vue */ "./src/components/MailboxPicker.vue");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MoveMailboxModal',
  components: {
    MailboxPicker: _MailboxPicker_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    account: {
      type: Object,
      required: true
    },
    mailbox: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      moving: false,
      destMailboxId: undefined
    };
  },
  computed: _objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_3__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_2__["default"])),
  methods: {
    onClose() {
      this.$emit('close');
    },
    async onMove() {
      this.moving = true;
      if (this.mailbox.id !== this.destMailboxId) {
        try {
          if (!this.destMailboxId) {
            const newName = this.mailbox.displayName;
            await this.mainStore.renameMailbox({
              account: this.account,
              mailbox: this.mailbox,
              newName
            });
          } else {
            const destMailbox = this.mainStore.getMailbox(this.destMailboxId);
            const newName = destMailbox.name + this.mailbox.delimiter + this.mailbox.name;
            await this.mainStore.renameMailbox({
              account: this.account,
              mailbox: this.mailbox,
              newName
            });
          }
        } catch (error) {
          _logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].error('could not move mailbox', {
            error
          });
        } finally {
          this.moving = false;
          this.$emit('close');
        }
      }
    },
    genId(mailbox) {
      return 'mailbox-' + mailbox.databaseId;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _NewMessageButtonHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewMessageButtonHeader.vue */ "./src/components/NewMessageButtonHeader.vue");
/* harmony import */ var _NavigationAccount_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationAccount.vue */ "./src/components/NavigationAccount.vue");
/* harmony import */ var _NavigationAccountExpandCollapse_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationAccountExpandCollapse.vue */ "./src/components/NavigationAccountExpandCollapse.vue");
/* harmony import */ var _NavigationMailbox_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavigationMailbox.vue */ "./src/components/NavigationMailbox.vue");
/* harmony import */ var _NavigationOutbox_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavigationOutbox.vue */ "./src/components/NavigationOutbox.vue");
/* harmony import */ var vue_material_design_icons_Cog_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/Cog.vue */ "./node_modules/vue-material-design-icons/Cog.vue");
/* harmony import */ var _components_AppSettingsMenu_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AppSettingsMenu.vue */ "./src/components/AppSettingsMenu.vue");
/* harmony import */ var _store_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/constants.js */ "./src/store/constants.js");
/* harmony import */ var _store_outboxStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/outboxStore.js */ "./src/store/outboxStore.js");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Navigation',
  components: {
    AppNavigation: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcAppNavigation,
    AppSettingsMenu: _components_AppSettingsMenu_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    NavigationAccount: _NavigationAccount_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    NavigationAccountExpandCollapse: _NavigationAccountExpandCollapse_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    NavigationMailbox: _NavigationMailbox_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    NavigationOutbox: _NavigationOutbox_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    NewMessageButtonHeader: _NewMessageButtonHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconSetting: vue_material_design_icons_Cog_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    AppNavigationItem: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcAppNavigationItem
  },
  data() {
    return {
      refreshing: false,
      showSettings: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_11__.mapStores)(_store_outboxStore_js__WEBPACK_IMPORTED_MODULE_9__["default"], _store_mainStore_js__WEBPACK_IMPORTED_MODULE_10__["default"])), {}, {
    menu() {
      return this.mainStore.getAccounts.filter(account => account.id !== _store_constants_js__WEBPACK_IMPORTED_MODULE_8__.UNIFIED_ACCOUNT_ID).map(account => {
        const mailboxes = this.mainStore.getMailboxes(account.id);
        const nonSpecialRoleMailboxes = mailboxes.filter(mailbox => this.isCollapsed(account, mailbox));
        const isCollapsible = nonSpecialRoleMailboxes.length > 1;
        return {
          id: account.id,
          account,
          mailboxes,
          isCollapsible
        };
      });
    },
    unifiedAccount() {
      return this.mainStore.getAccount(_store_constants_js__WEBPACK_IMPORTED_MODULE_8__.UNIFIED_ACCOUNT_ID);
    },
    unifiedMailboxes() {
      return this.mainStore.getMailboxes(_store_constants_js__WEBPACK_IMPORTED_MODULE_8__.UNIFIED_ACCOUNT_ID);
    },
    /**
     * Whether the current session is using passwordless authentication.
     *
     * @return {boolean}
     */
    passwordIsUnavailable() {
      return this.mainStore.getPreference('password-is-unavailable', false);
    },
    outboxMessages() {
      return this.outboxStore.getAllMessages;
    }
  }),
  methods: {
    showMailSettings() {
      this.showSettings = true;
    },
    isCollapsed(account, mailbox) {
      if (mailbox.specialRole === 'inbox') {
        // INBOX is always visible
        return false;
      }
      if (mailbox.databaseId === account.draftsMailboxId || mailbox.databaseId === account.sentMailboxId || mailbox.databaseId === account.trashMailboxId) {
        // Special folders are always visible
        return false;
      }
      return true;
    },
    isFirst(account) {
      const accounts = this.mainStore.getAccounts;
      return account === accounts[1];
    },
    isLast(account) {
      const accounts = this.mainStore.getAccounts;
      return account === accounts[accounts.length - 1];
    },
    /**
     * Disable provisioned accounts when no password is available.
     * Loading messages of those accounts will fail and an endless spinner will be shown.
     *
     * @param {object} account Account object
     * @return {boolean} True if the account should be disabled
     */
    isDisabled(account) {
      return this.passwordIsUnavailable && !!account.provisioningId && !!this.mainStore.masterPasswordEnabled;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var vue_frag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-frag */ "./node_modules/vue-frag/dist/frag.esm.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _service_AccountService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/AccountService.js */ "./src/service/AccountService.js");
/* harmony import */ var vue_material_design_icons_Information_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/Information.vue */ "./node_modules/vue-material-design-icons/Information.vue");
/* harmony import */ var vue_material_design_icons_Cog_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/Cog.vue */ "./node_modules/vue-material-design-icons/Cog.vue");
/* harmony import */ var vue_material_design_icons_Folder_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/Folder.vue */ "./node_modules/vue-material-design-icons/Folder.vue");
/* harmony import */ var vue_material_design_icons_ChevronDown_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-material-design-icons/ChevronDown.vue */ "./node_modules/vue-material-design-icons/ChevronDown.vue");
/* harmony import */ var vue_material_design_icons_ChevronUp_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-material-design-icons/ChevronUp.vue */ "./node_modules/vue-material-design-icons/ChevronUp.vue");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NavigationAccount',
  components: {
    NcAppNavigationCaption: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcAppNavigationCaption,
    Fragment: vue_frag__WEBPACK_IMPORTED_MODULE_3__.Fragment,
    ActionButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcActionButton,
    ActionCheckbox: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcActionCheckbox,
    ActionInput: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcActionInput,
    ActionText: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcActionText,
    AccountSettings: () => Promise.all(/*! import() | account-settings */[__webpack_require__.e("vendors-node_modules_ckeditor_ckeditor5-alignment_src_alignment_js-node_modules_ckeditor_cked-768c79"), __webpack_require__.e("vendors-node_modules_vue-tabs-component_dist_index_js"), __webpack_require__.e("vendors-node_modules_riophae_vue-treeselect_dist_vue-treeselect_cjs_js-node_modules_lodash_fp-c7f46c"), __webpack_require__.e("src_components_AccountForm_vue"), __webpack_require__.e("src_components_TextEditor_vue"), __webpack_require__.e("account-settings")]).then(__webpack_require__.bind(__webpack_require__, /*! ./AccountSettings.vue */ "./src/components/AccountSettings.vue")),
    IconInfo: vue_material_design_icons_Information_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    IconSettings: vue_material_design_icons_Cog_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    IconFolderAdd: vue_material_design_icons_Folder_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    MenuDown: vue_material_design_icons_ChevronDown_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    MenuUp: vue_material_design_icons_ChevronUp_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    IconDelete: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    IconLoading: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcLoadingIcon
  },
  props: {
    account: {
      type: Object,
      required: true
    },
    firstMailbox: {
      type: Object,
      default: () => undefined
    },
    isFirst: {
      type: Boolean,
      default: false
    },
    isLast: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuOpen: false,
      loading: {
        delete: false
      },
      savingShowOnlySubscribed: false,
      quota: undefined,
      editing: false,
      showSaving: false,
      createMailboxName: '',
      showMailboxes: false,
      nameInput: false,
      nameLabel: true
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_14__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_13__["default"])), {}, {
    showSettings() {
      return this.mainStore.showSettingsForAccount(this.account.id);
    },
    visible() {
      return this.account.isUnified !== true && this.account.visible !== false;
    },
    id() {
      return 'account-' + this.account.id;
    },
    quotaText() {
      if (this.quota === undefined) {
        return t('mail', 'Loading …');
      }
      if (this.quota === false) {
        return t('mail', 'Not supported by the server');
      }
      return t('mail', '{usage} of {limit} used', {
        usage: (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.formatFileSize)(this.quota.usage),
        limit: (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.formatFileSize)(this.quota.limit)
      });
    }
  }),
  methods: {
    async createMailbox(e) {
      this.nameInput = false;
      this.showSaving = true;
      const name = this.createMailboxName;
      _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].info('creating mailbox ' + name);
      this.menuOpen = false;
      try {
        await this.mainStore.createMailbox({
          account: this.account,
          name
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].error('could not create mailbox', {
          error
        });
        throw error;
      } finally {
        this.showSaving = false;
        this.nameInput = false;
        this.editing = false;
        this.createMailboxName = '';
      }
      _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].info("mailbox ".concat(name, " created"));
    },
    openCreateMailbox() {
      this.editing = true;
      this.nameInput = true;
      this.showSaving = false;
    },
    async removeAccount() {
      const id = this.account.id;
      _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].info('delete account', {
        account: this.account
      });
      const dialog = new _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_12__.DialogBuilder().setName(t('mail', 'Remove account')).setText(t('mail', 'The account for {email} and cached email data will be removed from Nextcloud, but not from your email provider.', {
        email: this.account.emailAddress
      })).setButtons([{
        label: t('mail', 'Cancel')
      }, {
        label: t('mail', 'Remove {email}', {
          email: this.account.emailAddress
        }),
        type: 'error',
        callback: async () => {
          this.loading.delete = true;
          try {
            await this.mainStore.deleteAccount(this.account);
            _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].info("account ".concat(id, " deleted, redirecting \u2026"));

            // TODO: update store and handle this more efficiently
            location.href = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateUrl)('/apps/mail');
          } catch (error) {
            _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].error('could not delete account', {
              error
            });
          } finally {
            this.loading.delete = false;
          }
        }
      }]).build();
      await dialog.show();
    },
    changeAccountOrderUp() {
      this.mainStore.moveAccount({
        account: this.account,
        up: true
      }).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].error('could not move account up', {
        error
      }));
    },
    changeAccountOrderDown() {
      this.mainStore.moveAccount({
        account: this.account
      }).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].error('could not move account down', {
        error
      }));
    },
    changeShowSubscribedOnly(onlySubscribed) {
      this.savingShowOnlySubscribed = true;
      this.mainStore.patchAccount({
        account: this.account,
        data: {
          showSubscribedOnly: onlySubscribed
        }
      }).then(() => {
        this.savingShowOnlySubscribed = false;
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].info('show only subscribed mailboxes updated to ' + onlySubscribed);
      }).catch(error => {
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].error('could not update subscription mode', {
          error
        });
        this.savingShowOnlySubscribed = false;
        throw error;
      });
    },
    onMenuToggle(open) {
      if (open) {
        console.debug('accounts menu opened, fetching quota');
        this.fetchQuota();
      }
    },
    async fetchQuota() {
      const quota = await (0,_service_AccountService_js__WEBPACK_IMPORTED_MODULE_5__.fetchQuota)(this.account.id);
      console.debug('quota fetched', {
        quota
      });
      if (quota === undefined) {
        // Server does not support this
        this.quota = false;
      } else {
        this.quota = quota;
      }
    },
    /**
     * Show the settings for the given account
     *
     * @param {boolean} show true to show, false to hide
     */
    showAccountSettings(show) {
      if (show) {
        this.mainStore.showSettingsForAccountMutation(this.account.id);
      } else {
        this.mainStore.showSettingsForAccountMutation(null);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NavigationAccountExpandCollapse',
  components: {
    AppNavigationItem: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcAppNavigationItem
  },
  props: {
    account: {
      type: Object,
      required: true
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_3__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_2__["default"])), {}, {
    id() {
      return 'collapse-' + this.account.id;
    },
    title() {
      if (this.account.collapsed && this.account.showSubscribedOnly) {
        return t('mail', 'Show all subscribed mailboxes');
      } else if (this.account.collapsed && !this.account.showSubscribedOnly) {
        return t('mail', 'Show all mailboxes');
      }
      return t('mail', 'Collapse mailboxes');
    }
  }),
  methods: {
    async toggleCollapse() {
      _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('toggling collapsed mailboxes for account ' + this.account.id);
      try {
        await this.mainStore.toggleAccountCollapsedMutation(this.account.id);
        await this.mainStore.setAccountSetting({
          accountId: this.account.id,
          key: 'collapsed',
          value: this.account.collapsed
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error('could not update account settings', {
          error
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_EmailCheck_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/EmailCheck.vue */ "./node_modules/vue-material-design-icons/EmailCheck.vue");
/* harmony import */ var vue_material_design_icons_OpenInNew_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/OpenInNew.vue */ "./node_modules/vue-material-design-icons/OpenInNew.vue");
/* harmony import */ var vue_material_design_icons_Folder_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/Folder.vue */ "./node_modules/vue-material-design-icons/Folder.vue");
/* harmony import */ var vue_material_design_icons_FolderAccount_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/FolderAccount.vue */ "./node_modules/vue-material-design-icons/FolderAccount.vue");
/* harmony import */ var vue_material_design_icons_FolderMultiple_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/FolderMultiple.vue */ "./node_modules/vue-material-design-icons/FolderMultiple.vue");
/* harmony import */ var vue_material_design_icons_Star_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/Star.vue */ "./node_modules/vue-material-design-icons/Star.vue");
/* harmony import */ var vue_material_design_icons_FolderEdit_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/FolderEdit.vue */ "./node_modules/vue-material-design-icons/FolderEdit.vue");
/* harmony import */ var vue_material_design_icons_FolderSync_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-material-design-icons/FolderSync.vue */ "./node_modules/vue-material-design-icons/FolderSync.vue");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var vue_material_design_icons_Information_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-material-design-icons/Information.vue */ "./node_modules/vue-material-design-icons/Information.vue");
/* harmony import */ var vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-material-design-icons/Pencil.vue */ "./node_modules/vue-material-design-icons/Pencil.vue");
/* harmony import */ var vue_material_design_icons_PackageDown_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-material-design-icons/PackageDown.vue */ "./node_modules/vue-material-design-icons/PackageDown.vue");
/* harmony import */ var vue_material_design_icons_Home_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-material-design-icons/Home.vue */ "./node_modules/vue-material-design-icons/Home.vue");
/* harmony import */ var vue_material_design_icons_Fire_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-material-design-icons/Fire.vue */ "./node_modules/vue-material-design-icons/Fire.vue");
/* harmony import */ var vue_material_design_icons_InboxMultiple_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-material-design-icons/InboxMultiple.vue */ "./node_modules/vue-material-design-icons/InboxMultiple.vue");
/* harmony import */ var vue_material_design_icons_EraserVariant_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-material-design-icons/EraserVariant.vue */ "./node_modules/vue-material-design-icons/EraserVariant.vue");
/* harmony import */ var _icons_ImportantIcon_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/ImportantIcon.vue */ "./src/components/icons/ImportantIcon.vue");
/* harmony import */ var vue_material_design_icons_Send_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue-material-design-icons/Send.vue */ "./node_modules/vue-material-design-icons/Send.vue");
/* harmony import */ var vue_material_design_icons_Wrench_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue-material-design-icons/Wrench.vue */ "./node_modules/vue-material-design-icons/Wrench.vue");
/* harmony import */ var _MoveMailboxModal_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./MoveMailboxModal.vue */ "./src/components/MoveMailboxModal.vue");
/* harmony import */ var _store_constants_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../store/constants.js */ "./src/store/constants.js");
/* harmony import */ var _util_acl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../util/acl.js */ "./src/util/acl.js");
/* harmony import */ var _service_MessageService_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../service/MessageService.js */ "./src/service/MessageService.js");
/* harmony import */ var _service_MailboxService_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../service/MailboxService.js */ "./src/service/MailboxService.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _i18n_MailboxTranslator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../i18n/MailboxTranslator.js */ "./src/i18n/MailboxTranslator.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _directives_drag_and_drop_droppable_mailbox_index_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../directives/drag-and-drop/droppable-mailbox/index.js */ "./src/directives/drag-and-drop/droppable-mailbox/index.js");
/* harmony import */ var _directives_drag_and_drop_util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../directives/drag-and-drop/util/dragEventBus.js */ "./src/directives/drag-and-drop/util/dragEventBus.js");
/* harmony import */ var vue_material_design_icons_Alarm_vue__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! vue-material-design-icons/Alarm.vue */ "./node_modules/vue-material-design-icons/Alarm.vue");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NavigationMailbox',
  components: {
    AppNavigationItem: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcAppNavigationItem,
    CounterBubble: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcCounterBubble,
    ActionText: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcActionText,
    ActionButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcActionButton,
    ActionCheckbox: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcActionCheckbox,
    ActionInput: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcActionInput,
    IconSend: vue_material_design_icons_Send_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    IconDelete: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    IconEmailCheck: vue_material_design_icons_EmailCheck_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconExternal: vue_material_design_icons_OpenInNew_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconFolderAdd: vue_material_design_icons_FolderMultiple_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    IconFolderRename: vue_material_design_icons_FolderEdit_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    IconFolderSync: vue_material_design_icons_FolderSync_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    IconInfo: vue_material_design_icons_Information_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    IconAllInboxes: vue_material_design_icons_InboxMultiple_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    IconFavorite: vue_material_design_icons_Star_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    IconFolder: vue_material_design_icons_Folder_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    IconFolderShared: vue_material_design_icons_FolderAccount_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    IconDraft: vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    IconArchive: vue_material_design_icons_PackageDown_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    IconJunk: vue_material_design_icons_Fire_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    IconInbox: vue_material_design_icons_Home_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    IconWrench: vue_material_design_icons_Wrench_vue__WEBPACK_IMPORTED_MODULE_19__["default"],
    EraserVariant: vue_material_design_icons_EraserVariant_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    ImportantIcon: _icons_ImportantIcon_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    IconLoading: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcLoadingIcon,
    MoveMailboxModal: _MoveMailboxModal_vue__WEBPACK_IMPORTED_MODULE_20__["default"],
    AlarmIcon: vue_material_design_icons_Alarm_vue__WEBPACK_IMPORTED_MODULE_31__["default"]
  },
  directives: {
    droppableMailbox: _directives_drag_and_drop_droppable_mailbox_index_js__WEBPACK_IMPORTED_MODULE_29__.DroppableMailboxDirective
  },
  props: {
    account: {
      type: Object,
      required: true
    },
    mailbox: {
      type: Object,
      required: true
    },
    filter: {
      type: String,
      default: '',
      required: false
    }
  },
  data() {
    var _window;
    return {
      debug: ((_window = window) === null || _window === void 0 || (_window = _window.OC) === null || _window === void 0 ? void 0 : _window.debug) || false,
      mailboxStats: undefined,
      loadingMarkAsRead: false,
      clearingCache: false,
      showSaving: false,
      changeSubscription: false,
      changingSyncInBackground: false,
      editing: false,
      showSubMailboxes: false,
      menuOpen: false,
      renameLabel: true,
      renameInput: false,
      mailboxName: this.mailbox.displayName,
      showMoveModal: false,
      hasDelimiter: !!this.mailbox.delimiter,
      UNIFIED_INBOX_ID: _store_constants_js__WEBPACK_IMPORTED_MODULE_21__.UNIFIED_INBOX_ID,
      createMailboxName: '',
      repairing: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_33__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_32__["default"])), {}, {
    visible() {
      return (this.account.showSubscribedOnly === false || this.mailbox.attributes && this.mailbox.attributes.includes('\\subscribed')) && this.isUnifiedButOnlyInbox;
    },
    notInbox() {
      return this.mailbox.name.toLowerCase() !== 'inbox';
    },
    notVirtual() {
      return !this.account.isUnified && this.mailbox.specialRole !== 'flagged' && !this.filter;
    },
    title() {
      if (this.filter === 'starred') {
        // Little hack to trick the translation logic into a different path
        return (0,_i18n_MailboxTranslator_js__WEBPACK_IMPORTED_MODULE_27__.translate)(_objectSpread(_objectSpread({}, this.mailbox), {}, {
          specialUse: ['flagged']
        }));
      }
      return (0,_i18n_MailboxTranslator_js__WEBPACK_IMPORTED_MODULE_27__.translate)(this.mailbox);
    },
    to() {
      return {
        name: 'mailbox',
        params: {
          mailboxId: this.mailbox.databaseId,
          filter: this.filter ? this.filter : undefined
        }
      };
    },
    hasSubMailboxes() {
      return this.subMailboxes.length > 0;
    },
    subMailboxes() {
      return this.mainStore.getSubMailboxes(this.mailbox.databaseId);
    },
    statsText() {
      if (this.mailboxStats && 'total' in this.mailboxStats && 'unread' in this.mailboxStats) {
        if (this.mailboxStats.unread === 0) {
          return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_26__.translatePlural)('mail', '{total} message', '{total} messages', this.mailboxStats.total, {
            total: this.mailboxStats.total
          });
        } else {
          return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_26__.translatePlural)('mail', '{unread} unread of {total}', '{unread} unread of {total}', this.mailboxStats.unread, {
            total: this.mailboxStats.total,
            unread: this.mailboxStats.unread
          });
        }
      }
      return t('mail', 'Loading …');
    },
    isSubscribed() {
      return this.mailbox.attributes && this.mailbox.attributes.includes('\\subscribed');
    },
    isDroppableSpecialMailbox() {
      if (this.filter === 'starred') {
        return false;
      }
      return ![this.account.draftsMailboxId, this.account.sentMailboxId].includes(this.mailbox.databaseId);
    },
    isActive() {
      return this.$route.params.mailboxId === this.mailbox.databaseId;
    },
    isValidDropTarget() {
      if (this.isActive || !this.hasInsertAcl) {
        return false;
      }
      return this.isDroppableSpecialMailbox || !this.mailbox.specialRole && !this.account.isUnified;
    },
    isUnifiedButOnlyInbox() {
      if (!this.mailbox.isUnified) {
        return true;
      }
      return this.mailbox.specialUse.includes('inbox') && this.mainStore.getAccounts.length > 2;
    },
    showUnreadCounter() {
      if (this.filter === 'starred' || this.mailbox.specialRole === 'trash') {
        return false;
      }
      return this.mailbox.unread > 0 || this.subCounter > 0;
    },
    subCounter() {
      return this.subMailboxes.reduce((carry, mb) => carry + mb.unread, 0);
    },
    hasRenameAcl() {
      if (!this.mailbox.myAcls) {
        return true;
      }
      const parent = this.mainStore.getParentMailbox(this.mailbox.databaseId);
      if (!parent || !parent.myAcls) {
        return (0,_util_acl_js__WEBPACK_IMPORTED_MODULE_22__.mailboxHasRights)(this.mailbox, 'x');
      }
      return (0,_util_acl_js__WEBPACK_IMPORTED_MODULE_22__.mailboxHasRights)(this.mailbox, 'x') && (0,_util_acl_js__WEBPACK_IMPORTED_MODULE_22__.mailboxHasRights)(parent, 'k');
    },
    hasInsertAcl() {
      return (0,_util_acl_js__WEBPACK_IMPORTED_MODULE_22__.mailboxHasRights)(this.mailbox, 'i');
    },
    hasSeenAcl() {
      return (0,_util_acl_js__WEBPACK_IMPORTED_MODULE_22__.mailboxHasRights)(this.mailbox, 's');
    },
    hasSubmailboxActionAcl() {
      return (0,_util_acl_js__WEBPACK_IMPORTED_MODULE_22__.mailboxHasRights)(this.mailbox, 'k');
    },
    hasDeleteAcl() {
      return (0,_util_acl_js__WEBPACK_IMPORTED_MODULE_22__.mailboxHasRights)(this.mailbox, 'x');
    },
    hasClearMailboxAcl() {
      return (0,_util_acl_js__WEBPACK_IMPORTED_MODULE_22__.mailboxHasRights)(this.mailbox, 'te');
    }
  }),
  mounted() {
    _directives_drag_and_drop_util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_30__["default"].on('drag-start', this.onDragStart);
    _directives_drag_and_drop_util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_30__["default"].on('drag-end', this.onDragEnd);
    _directives_drag_and_drop_util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_30__["default"].on('envelopes-moved', this.onEnvelopesMoved);
  },
  beforeDestroy() {
    _directives_drag_and_drop_util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_30__["default"].off('drag-start', this.onDragStart);
    _directives_drag_and_drop_util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_30__["default"].off('drag-end', this.onDragEnd);
    _directives_drag_and_drop_util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_30__["default"].off('envelopes-moved', this.onEnvelopesMoved);
  },
  methods: {
    /**
     * Generate unique key id for a specific mailbox
     *
     * @param {object} mailbox the mailbox to gen id for
     * @return {string}
     */
    genId(mailbox) {
      return 'mailbox-' + mailbox.databaseId;
    },
    /**
     * On menu toggle, fetch stats
     *
     * @param {boolean} open menu opened state
     */
    onMenuToggle(open) {
      if (open) {
        this.fetchMailboxStats();
      }
    },
    /**
     * Fetch mailbox unread/read stats
     */
    async fetchMailboxStats() {
      this.mailboxStats = null;
      if (this.account.isUnified || this.mailbox.specialRole === 'flagged') {
        return;
      }
      try {
        const stats = await (0,_service_MailboxService_js__WEBPACK_IMPORTED_MODULE_24__.getMailboxStatus)(this.mailbox.databaseId);
        _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].debug("loaded mailbox stats for ".concat(this.mailbox.databaseId), {
          stats
        });
        this.mailboxStats = stats;
      } catch (error) {
        this.mailboxStats = {
          error: true
        };
        _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].error("could not load mailbox stats for ".concat(this.mailbox.databaseId), error);
      }
    },
    async createMailbox(e) {
      this.editing = true;
      const name = this.createMailboxName;
      const withPrefix = this.mailbox.name + this.mailbox.delimiter + name;
      _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].info("creating mailbox ".concat(withPrefix, " as submailbox of ").concat(this.mailbox.databaseId));
      this.menuOpen = false;
      try {
        await this.mainStore.createMailbox({
          account: this.account,
          name: withPrefix
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].error("could not create mailbox ".concat(withPrefix), {
          error
        });
        throw error;
      } finally {
        this.editing = false;
        this.showSaving = false;
      }
      _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].info("mailbox ".concat(withPrefix, " created"));
      this.showSubMailboxes = true;
    },
    openCreateMailbox() {
      this.editing = true;
      this.showSaving = false;
    },
    markAsRead() {
      this.loadingMarkAsRead = true;
      this.mainStore.markMailboxRead({
        accountId: this.account.id,
        mailboxId: this.mailbox.databaseId
      }).then(() => _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].info("mailbox ".concat(this.mailbox.databaseId, " marked as read"))).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].error("could not mark mailbox ".concat(this.mailbox.databaseId, " as read"), {
        error
      })).then(() => this.loadingMarkAsRead = false);
    },
    async changeFolderSubscription(subscribed) {
      try {
        this.changeSubscription = true;
        await this.mainStore.changeMailboxSubscription({
          mailbox: this.mailbox,
          subscribed
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].error("could not update subscription of mailbox ".concat(this.mailbox.databaseId), {
          error
        });
        throw error;
      } finally {
        this.changeSubscription = false;
      }
    },
    async changeSyncInBackground(syncInBackground) {
      try {
        this.changingSyncInBackground = true;
        await this.mainStore.patchMailbox({
          mailbox: this.mailbox,
          attributes: {
            syncInBackground
          }
        });
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].error("could not update background sync flag of mailbox ".concat(this.mailbox.databaseId), {
          error
        });
        throw error;
      } finally {
        this.changingSyncInBackground = false;
      }
    },
    async clearCache() {
      try {
        this.clearingCache = true;
        _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].debug('clearing message cache', {
          accountId: this.account.id,
          mailboxId: this.mailbox.databaseId
        });
        await (0,_service_MessageService_js__WEBPACK_IMPORTED_MODULE_23__.clearCache)(this.account.id, this.mailbox.databaseId);

        // TODO: there might be a nicer way to handle this
        window.location.reload(false);
      } finally {
        this.clearCache = false;
      }
    },
    clearMailbox() {
      const id = this.mailbox.databaseId;
      OC.dialogs.confirmDestructive(t('mail', 'All messages in mailbox will be deleted.'), t('mail', 'Clear mailbox {name}', {
        name: this.mailbox.displayName
      }), {
        type: OC.dialogs.YES_NO_BUTTONS,
        confirm: t('mail', 'Clear mailbox'),
        confirmClasses: 'error',
        cancel: t('mail', 'Cancel')
      }, result => {
        if (result) {
          return this.mainStore.clearMailbox({
            mailbox: this.mailbox
          }).then(() => {
            _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].info("mailbox ".concat(id, " cleared"));
          }).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].error('could not clear mailbox', {
            error
          }));
        }
      });
    },
    deleteMailbox() {
      const id = this.mailbox.databaseId;
      _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].info('delete mailbox', {
        mailbox: this.mailbox
      });
      OC.dialogs.confirmDestructive(t('mail', 'The mailbox and all messages in it will be deleted.'), t('mail', 'Delete mailbox'), {
        type: OC.dialogs.YES_NO_BUTTONS,
        confirm: t('mail', 'Delete mailbox {name}', {
          name: this.mailbox.displayName
        }),
        confirmClasses: 'error',
        cancel: t('mail', 'Cancel')
      }, result => {
        if (result) {
          return this.mainStore.deleteMailbox({
            mailbox: this.mailbox
          }).then(() => {
            _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].info("mailbox ".concat(id, " deleted"));
            if (parseInt(this.$route.params.mailboxId, 10) === this.mailbox.databaseId) {
              this.$router.push({
                name: 'mailbox',
                params: {
                  mailboxId: _store_constants_js__WEBPACK_IMPORTED_MODULE_21__.PRIORITY_INBOX_ID
                }
              });
            }
          }).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_25__["default"].error('could not delete mailbox', {
            error
          }));
        }
      });
    },
    async renameMailbox() {
      this.renameInput = false;
      this.showSaving = true;
      try {
        let newName = this.mailboxName;
        if (this.mailbox.path) {
          newName = this.mailbox.path + this.mailbox.delimiter + newName;
        }
        await this.mainStore.renameMailbox({
          account: this.account,
          mailbox: this.mailbox,
          newName
        });
        this.renameLabel = true;
        this.renameInput = false;
      } catch (error) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_28__.showInfo)(t('mail', 'An error occurred, unable to rename the mailbox.'));
        console.error(error);
      } finally {
        this.showSaving = false;
      }
    },
    openRenameInput() {
      // Hide label and show input
      this.renameLabel = false;
      this.renameInput = true;
      this.showSaving = false;
    },
    onOpenMoveModal() {
      this.showMoveModal = true;
    },
    onCloseMoveModal() {
      this.showMoveModal = false;
    },
    onDragStart(_ref) {
      let {
        accountId
      } = _ref;
      if (accountId !== this.mailbox.accountId) {
        return;
      }
      this.mainStore.expandAccountMutation(accountId);
      this.showSubMailboxes = true;
    },
    onDragEnd(_ref2) {
      let {
        accountId
      } = _ref2;
      if (accountId !== this.mailbox.accountId) {
        return;
      }
      this.showSubMailboxes = false;
    },
    onEnvelopesMoved(_ref3) {
      let {
        mailboxId,
        movedEnvelopes
      } = _ref3;
      if (this.mailbox.databaseId !== mailboxId) {
        return;
      }
      const openedMessageHasBeenMoved = movedEnvelopes.find(movedEnvelope => {
        return movedEnvelope.envelopeId === this.$route.params.threadId;
      });
      // navigate to the mailbox root
      // if the currently displayed message has been moved
      if (this.$route.name === 'message' && openedMessageHasBeenMoved) {
        var _this$$route$params;
        this.$router.push({
          name: 'mailbox',
          params: {
            mailboxId: this.$route.params.mailboxId,
            filter: (_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.filter
          }
        });
      }
    },
    /**
     * Delete all vanished emails that are still cached.
     *
     * @return {Promise<void>}
     */
    async repair() {
      this.repairing = true;
      const mailboxId = this.mailbox.databaseId;
      try {
        await (0,_service_MailboxService_js__WEBPACK_IMPORTED_MODULE_24__.repairMailbox)(mailboxId);

        // Reload the page to start with a clean mailbox state
        await this.$router.push({
          name: 'mailbox',
          params: {
            mailboxId: this.$route.params.mailboxId
          }
        });
        window.location.reload();
      } catch (error) {
        var _error$response;
        // Only reset state in case of an error because the page will be reloaded anyway
        this.repairing = false;

        // Handle rate limit: 429 Too Many Requests
        // Ref https://axios-http.com/docs/handling_errors
        if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 429) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_28__.showError)(t('mail', 'Please wait 10 minutes before repairing again'));
        } else {
          throw error;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_InboxArrowUp_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/InboxArrowUp.vue */ "./node_modules/vue-material-design-icons/InboxArrowUp.vue");
/* harmony import */ var _store_outboxStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/outboxStore.js */ "./src/store/outboxStore.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NavigationOutbox',
  components: {
    AppNavigationItem: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcAppNavigationItem,
    CounterBubble: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcCounterBubble,
    IconOutbox: vue_material_design_icons_InboxArrowUp_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_3__.mapStores)(_store_outboxStore_js__WEBPACK_IMPORTED_MODULE_2__["default"])), {}, {
    count() {
      return this.outboxStore.getAllMessages.length;
    },
    to() {
      return {
        name: 'outbox'
      };
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/Plus.vue */ "./node_modules/vue-material-design-icons/Plus.vue");
/* harmony import */ var vue_material_design_icons_Refresh_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/Refresh.vue */ "./node_modules/vue-material-design-icons/Refresh.vue");
/* harmony import */ var _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcLoadingIcon.js */ "./node_modules/@nextcloud/vue/dist/Components/NcLoadingIcon.mjs");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NewMessageButtonHeader',
  components: {
    ButtonVue: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcButton,
    IconAdd: vue_material_design_icons_Plus_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    IconRefresh: vue_material_design_icons_Refresh_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconLoading: _nextcloud_vue_dist_Components_NcLoadingIcon_js__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data() {
    return {
      refreshing: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_6__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_5__["default"])), {}, {
    currentMailbox() {
      if (this.$route.name === 'message' || this.$route.name === 'mailbox') {
        return this.mainStore.getMailbox(this.$route.params.mailboxId);
      }
      return undefined;
    }
  }),
  methods: {
    async refreshMailbox() {
      if (this.refreshing === true) {
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].debug('already sync\'ing mailbox.. aborting');
        return;
      }
      this.refreshing = true;
      try {
        await this.mainStore.syncEnvelopes({
          mailboxId: this.currentMailbox.databaseId
        });
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].debug('Current mailbox is sync\'ing ');
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].error('could not sync current mailbox', {
          error
        });
      } finally {
        this.refreshing = false;
      }
    },
    async onNewMessage() {
      await this.mainStore.startComposerSession({
        isBlankMessage: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_TrustedSenderService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/TrustedSenderService.js */ "./src/service/TrustedSenderService.js");
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/prop.js */ "./node_modules/lodash/fp/prop.js");
/* harmony import */ var lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/fp/sortBy.js */ "./node_modules/lodash/fp/sortBy.js");
/* harmony import */ var lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");






const sortByEmail = lodash_fp_sortBy_js__WEBPACK_IMPORTED_MODULE_3___default()(lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_2___default()('email'));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TrustedSenders',
  components: {
    ButtonVue: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__.NcButton
  },
  data() {
    return {
      list: []
    };
  },
  computed: {
    sortedSenders() {
      return sortByEmail(this.list);
    }
  },
  async mounted() {
    this.list = await (0,_service_TrustedSenderService_js__WEBPACK_IMPORTED_MODULE_0__.fetchTrustedSenders)();
  },
  methods: {
    async removeSender(sender) {
      // Remove the item immediately
      this.list = this.list.filter(s => s.id !== sender.id);
      try {
        await (0,_service_TrustedSenderService_js__WEBPACK_IMPORTED_MODULE_0__.trustSender)(sender.email, sender.type, false);
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].error("Could not remove trusted sender ".concat(sender.email), {
          error
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_5__.showError)(t('mail', 'Could not remove trusted sender {sender}', {
          sender: sender.email
        }));
        // Put the sender back
        this.list.push(sender);
      }
    },
    senderType(type) {
      switch (type) {
        case 'individual':
          return t('mail', 'individual');
        case 'domain':
          return t('mail', 'domain');
      }
      return type;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/ImportantIcon.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/ImportantIcon.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ImportantIcon',
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 20
    },
    fillColor: {
      type: String,
      default: 'currentColor'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/MailIcon.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/MailIcon.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MailIcon',
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 20
    },
    fillColor: {
      type: String,
      default: 'currentColor'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logger.js */ "./src/logger.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var _util_pkcs12_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/pkcs12.js */ "./src/util/pkcs12.js");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/mainStore.js */ "./src/store/mainStore.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








const TYPE_PKCS12 = 'pkcs12';
const TYPE_PEM = 'pem';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SmimeCertificateModal',
  components: {
    NcModal: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcModal,
    NcButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcButton,
    NcPasswordField: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcPasswordField,
    NcEmptyContent: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcEmptyContent,
    DeleteIcon: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data() {
    return {
      TYPE_PKCS12,
      TYPE_PEM,
      moment: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_3__["default"],
      showImportScreen: false,
      loading: false,
      certificateType: TYPE_PKCS12,
      certificate: undefined,
      privateKey: undefined,
      password: ''
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_7__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_6__["default"])), (0,pinia__WEBPACK_IMPORTED_MODULE_7__.mapState)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    certificates: 'getSmimeCertificates'
  })), {}, {
    inputFormIsValid() {
      return !!this.certificate;
    }
  }),
  async mounted() {
    // Refresh S/MIME certificates for good measure
    await this.mainStore.fetchSmimeCertificates();
  },
  methods: {
    async deleteCertificate(id) {
      await this.mainStore.deleteSmimeCertificate(id);
    },
    async uploadCertificate() {
      let certificate = this.$refs.certificate.files[0];
      let privateKey;
      if (this.certificateType === TYPE_PKCS12) {
        try {
          const result = (0,_util_pkcs12_js__WEBPACK_IMPORTED_MODULE_5__.convertPkcs12ToPem)(await certificate.arrayBuffer(), this.password);
          certificate = new Blob([result.certificate]);
          privateKey = new Blob([result.privateKey]);
        } catch (error) {
          if (error.name === _util_pkcs12_js__WEBPACK_IMPORTED_MODULE_5__.InvalidPkcs12CertificateError.name) {
            _logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].error('PKCS #12 certificate contains multiple certs or keys', {
              error
            });
            (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('mail', 'The provided PKCS #12 certificate must contain at least one certificate and exactly one private key.'));
          } else {
            _logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].debug('Is probably not a PKCS #12 certificate or the password is wrong', {
              error
            });
            (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('mail', 'Failed to import the certificate. Please check the password.'));
          }
          return;
        }
      } else if (this.certificateType === TYPE_PEM) {
        privateKey = this.$refs.privateKey.files[0];
      } else {
        return;
      }
      this.loading = true;
      try {
        await this.mainStore.createSmimeCertificate({
          certificate,
          privateKey
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)(t('mail', 'Certificate imported successfully'));
        this.resetImportForm();
      } catch (error) {
        var _error$response;
        _logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].error("Failed to import a S/MIME certificate: ".concat((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.data), {
          error
        });
        if (privateKey) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('mail', 'Failed to import the certificate. Please make sure that the private key matches the certificate and is not protected by a passphrase.'));
        } else {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(t('mail', 'Failed to import the certificate'));
        }
      } finally {
        this.loading = false;
      }
    },
    resetImportForm() {
      this.certificateType = TYPE_PKCS12;
      this.showImportScreen = false;
      this.certificate = undefined;
      this.privateKey = undefined;
      this.password = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=template&id=16724163&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=template&id=16724163&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    staticClass: "app-settings"
  }, [_c("NcAppSettingsDialog", {
    attrs: {
      id: "app-settings-dialog",
      name: _vm.t("mail", "Mail settings"),
      "show-navigation": true,
      open: _vm.showSettings
    },
    on: {
      "update:open": function ($event) {
        _vm.showSettings = $event;
      }
    }
  }, [_c("NcAppSettingsSection", {
    attrs: {
      id: "account-creation",
      name: _vm.t("mail", "Accounts")
    }
  }, [_vm.allowNewMailAccounts ? _c("NcButton", {
    staticClass: "app-settings-button",
    attrs: {
      type: "primary",
      to: "/setup",
      "aria-label": _vm.t("mail", "Add mail account")
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconAdd", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }], null, false, 2399017255)
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Add mail account")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.t("mail", "Account settings")))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.t("mail", "Settings for:")))]), _vm._v(" "), _vm._l(_vm.getAccounts, function (account) {
    return _c("li", {
      key: account.id
    }, [account && account.emailAddress ? _c("NcButton", {
      staticClass: "app-settings-button",
      attrs: {
        type: "secondary",
        "aria-label": _vm.t("mail", "Account settings")
      },
      on: {
        click: function ($event) {
          return _vm.openAccountSettings(account.id);
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(account.emailAddress) + "\n\t\t\t\t")]) : _vm._e()], 1);
  })], 2), _vm._v(" "), _c("NcAppSettingsSection", {
    attrs: {
      id: "appearance-and-accessibility",
      name: _vm.t("mail", "General")
    }
  }, [_c("h6", [_vm._v(_vm._s(_vm.t("mail", "Layout")))]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      value: "no-split",
      "button-variant": true,
      name: "mail-layout",
      type: "radio",
      checked: _vm.layoutMode,
      "button-variant-grouped": "vertical"
    },
    on: {
      "update:checked": function ($event) {
        return _vm.setLayout("no-split");
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("CompactMode", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "List")) + "\n\t\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      value: "vertical-split",
      "button-variant": true,
      name: "mail-layout",
      type: "radio",
      checked: _vm.layoutMode,
      "button-variant-grouped": "vertical"
    },
    on: {
      "update:checked": function ($event) {
        return _vm.setLayout("vertical-split");
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("VerticalSplit", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Vertical split")) + "\n\t\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      value: "horizontal-split",
      "button-variant": true,
      name: "mail-layout",
      type: "radio",
      checked: _vm.layoutMode,
      "button-variant-grouped": "vertical"
    },
    on: {
      "update:checked": function ($event) {
        return _vm.setLayout("horizontal-split");
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("HorizontalSplit", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Horizontal split")) + "\n\t\t\t")]), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.t("mail", "Sorting")))]), _vm._v(" "), _c("div", {
    staticClass: "sorting"
  }, [_c("NcCheckboxRadioSwitch", {
    staticClass: "sorting__switch",
    attrs: {
      checked: _vm.sortOrder,
      value: "newest",
      name: "order_radio",
      type: "radio"
    },
    on: {
      "update:checked": _vm.onSortByDate
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "Newest")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    staticClass: "sorting__switch",
    attrs: {
      checked: _vm.sortOrder,
      value: "oldest",
      name: "order_radio",
      type: "radio"
    },
    on: {
      "update:checked": _vm.onSortByDate
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "Oldest")) + "\n\t\t\t\t")])], 1), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.t("mail", "Search in body")))]), _vm._v(" "), _vm.loadingPrioritySettings ? _c("p", {
    staticClass: "app-settings"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.prioritySettingsText) + "\n\t\t\t")]) : _c("p", {
    staticClass: "app-settings"
  }, [_c("input", {
    staticClass: "checkbox",
    attrs: {
      id: "priority-inbox-toggle",
      type: "checkbox"
    },
    domProps: {
      checked: _vm.searchPriorityBody
    },
    on: {
      change: _vm.onToggleSearchPriorityBody
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "priority-inbox-toggle"
    }
  }, [_vm._v(_vm._s(_vm.prioritySettingsText))])]), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.t("mail", "Reply text position")))]), _vm._v(" "), _vm.loadingReplySettings ? _c("p", {
    staticClass: "app-settings reply-settings"
  }, [_c("IconLoading", {
    attrs: {
      size: 16
    }
  }), _vm._v("\n\t\t\t\t" + _vm._s(_vm.replySettingsText) + "\n\t\t\t")], 1) : _c("p", {
    staticClass: "app-settings"
  }, [_c("input", {
    staticClass: "checkbox",
    attrs: {
      id: "bottom-reply-enabled",
      type: "checkbox"
    },
    domProps: {
      checked: _vm.useBottomReplies
    },
    on: {
      change: _vm.onToggleButtonReplies
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "bottom-reply-enabled"
    }
  }, [_vm._v(_vm._s(_vm.replySettingsText))])]), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.t("mail", "Gravatar settings")))]), _vm._v(" "), _vm.loadingAvatarSettings ? _c("p", {
    staticClass: "app-settings avatar-settings"
  }, [_c("IconLoading", {
    attrs: {
      size: 16
    }
  }), _vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Use Gravatar and favicon avatars")) + "\n\t\t\t")], 1) : _c("p", {
    staticClass: "app-settings"
  }, [_c("input", {
    staticClass: "checkbox",
    attrs: {
      id: "gravatar-enabled",
      type: "checkbox"
    },
    domProps: {
      checked: _vm.useExternalAvatars
    },
    on: {
      change: _vm.onToggleExternalAvatars
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "gravatar-enabled"
    }
  }, [_vm._v(_vm._s(_vm.t("mail", "Use Gravatar and favicon avatars")))])]), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.t("mail", "Mailto")))]), _vm._v(" "), _c("p", {
    staticClass: "settings-hint"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Register as application for mail links")) + "\n\t\t\t")]), _vm._v(" "), _c("NcButton", {
    staticClass: "app-settings-button",
    attrs: {
      type: "secondary",
      "aria-label": _vm.t("mail", "Register as application for mail links")
    },
    on: {
      click: _vm.registerProtocolHandler
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconEmail", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Register")) + "\n\t\t\t")])], 1), _vm._v(" "), _c("NcAppSettingsSection", {
    attrs: {
      id: "privacy-and-security",
      name: _vm.t("mail", "Privacy and security")
    }
  }, [_c("h6", [_vm._v(_vm._s(_vm.t("mail", "Data collection consent")))]), _vm._v(" "), _c("p", {
    staticClass: "settings-hint"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Allow the app to collect data about your interactions. Based on this data, the app will adapt to your preferences. The data will only be stored locally.")) + "\n\t\t\t")]), _vm._v(" "), _vm.loadingOptOutSettings ? _c("p", {
    staticClass: "app-settings"
  }, [_c("IconLoading", {
    attrs: {
      size: 16
    }
  }), _vm._v("\n\t\t\t\t" + _vm._s(_vm.optOutSettingsText) + "\n\t\t\t")], 1) : _c("p", {
    staticClass: "app-settings"
  }, [_c("input", {
    staticClass: "checkbox",
    attrs: {
      id: "data-collection-toggle",
      type: "checkbox"
    },
    domProps: {
      checked: _vm.useDataCollection
    },
    on: {
      change: _vm.onToggleCollectData
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "data-collection-toggle"
    }
  }, [_vm._v(_vm._s(_vm.optOutSettingsText))])]), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.t("mail", "Trusted senders")))]), _vm._v(" "), _c("TrustedSenders"), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.t("mail", "Internal addresses")))]), _vm._v(" "), _c("p", {
    staticClass: "settings-hint"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Highlight external email addresses by enabling this feature, manage your internal addresses and domains to ensure recognized contacts stay unmarked.")) + "\n\t\t\t")]), _vm._v(" "), _c("p", {
    staticClass: "app-settings"
  }, [_c("input", {
    staticClass: "checkbox",
    attrs: {
      id: "internal-address-toggle",
      type: "checkbox"
    },
    domProps: {
      checked: _vm.useInternalAddresses
    },
    on: {
      change: _vm.onToggleInternalAddress
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "internal-address-toggle"
    }
  }, [_vm._v(_vm._s(_vm.internalAddressText))])]), _vm._v(" "), _c("InternalAddress"), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.t("mail", "S/MIME")))]), _vm._v(" "), _c("NcButton", {
    staticClass: "app-settings-button",
    attrs: {
      type: "secondary",
      "aria-label": _vm.t("mail", "Manage S/MIME certificates")
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.displaySmimeCertificateModal = true;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconLock", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Manage S/MIME certificates")) + "\n\t\t\t")]), _vm._v(" "), _vm.displaySmimeCertificateModal ? _c("SmimeCertificateModal", {
    on: {
      close: function ($event) {
        _vm.displaySmimeCertificateModal = false;
      }
    }
  }) : _vm._e(), _vm._v(" "), _c("h6", [_vm._v(_vm._s(_vm.t("mail", "Mailvelope")))]), _vm._v(" "), _c("div", {
    staticClass: "mailvelope-section"
  }, [_vm.mailvelopeIsAvailable ? _c("div", [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "Mailvelope is enabled for the current domain!")) + "\n\t\t\t\t")]) : _c("div", [_c("p", [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Looking for a way to encrypt your emails?")) + "\n\t\t\t\t\t")]), _vm._v(" "), _c("p", [_c("a", {
    staticClass: "button",
    attrs: {
      href: "https://www.mailvelope.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Install Mailvelope browser extension by clicking here")) + "\n\t\t\t\t\t\t")])]), _vm._v(" "), _c("p", [_c("a", {
    staticClass: "button",
    on: {
      click: _vm.mailvelopeAuthorizeDomain
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Enable Mailvelope for the current domain")) + "\n\t\t\t\t\t\t")])])])])], 1), _vm._v(" "), _c("NcAppSettingsSection", {
    attrs: {
      id: "autotagging-settings",
      name: _vm.t("mail", "Assistance features")
    }
  }, [_vm.toggleAutoTagging ? _c("p", {
    staticClass: "app-settings"
  }, [_c("IconLoading", {
    attrs: {
      size: 16
    }
  })], 1) : _c("p", {
    staticClass: "app-settings"
  }, [_c("input", {
    staticClass: "checkbox",
    attrs: {
      id: "auto-tagging-toggle",
      type: "checkbox"
    },
    domProps: {
      checked: _vm.useAutoTagging
    },
    on: {
      change: _vm.onToggleAutoTagging
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "auto-tagging-toggle"
    }
  }, [_vm._v(_vm._s(_vm.autoTaggingText))])]), _vm._v(" "), _vm.followUpFeatureAvailable ? _c("p", {
    staticClass: "app-settings"
  }, [_c("input", {
    staticClass: "checkbox",
    attrs: {
      id: "follow-up-reminder-toggle",
      type: "checkbox"
    },
    domProps: {
      checked: _vm.useFollowUpReminders
    },
    on: {
      change: _vm.onToggleFollowUpReminders
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "follow-up-reminder-toggle"
    }
  }, [_vm._v(_vm._s(_vm.followUpReminderText))])]) : _vm._e()]), _vm._v(" "), _c("NcAppSettingsSection", {
    attrs: {
      id: "keyboard-shortcut-settings",
      name: _vm.t("mail", "Keyboard shortcuts")
    }
  }, [_c("dl", [_c("div", [_c("dt", [_c("kbd", [_vm._v("C")])]), _vm._v(" "), _c("dd", [_vm._v(_vm._s(_vm.t("mail", "Compose new message")))])]), _vm._v(" "), _c("div", [_c("dt", [_c("kbd", [_vm._v("←")])]), _vm._v(" "), _c("dd", [_vm._v(_vm._s(_vm.t("mail", "Newer message")))])]), _vm._v(" "), _c("div", [_c("dt", [_c("kbd", [_vm._v("→")])]), _vm._v(" "), _c("dd", [_vm._v(_vm._s(_vm.t("mail", "Older message")))])]), _vm._v(" "), _c("div", [_c("dt", [_c("kbd", [_vm._v("S")])]), _vm._v(" "), _c("dd", [_vm._v(_vm._s(_vm.t("mail", "Toggle star")))])]), _vm._v(" "), _c("div", [_c("dt", [_c("kbd", [_vm._v("U")])]), _vm._v(" "), _c("dd", [_vm._v(_vm._s(_vm.t("mail", "Toggle unread")))])]), _vm._v(" "), _c("div", [_c("dt", [_c("kbd", [_vm._v("A")])]), _vm._v(" "), _c("dd", [_vm._v(_vm._s(_vm.t("mail", "Archive")))])]), _vm._v(" "), _c("div", [_c("dt", [_c("kbd", [_vm._v("Del")])]), _vm._v(" "), _c("dd", [_vm._v(_vm._s(_vm.t("mail", "Delete")))])]), _vm._v(" "), _c("div", [_c("dt", [_c("kbd", [_vm._v("Ctrl")]), _vm._v(" + "), _c("kbd", [_vm._v("F")])]), _vm._v(" "), _c("dd", [_vm._v(_vm._s(_vm.t("mail", "Search")))])]), _vm._v(" "), _c("div", [_c("dt", [_c("kbd", [_vm._v("Ctrl")]), _vm._v(" + "), _c("kbd", [_vm._v("Enter")])]), _vm._v(" "), _c("dd", [_vm._v(_vm._s(_vm.t("mail", "Send")))])]), _vm._v(" "), _c("div", [_c("dt", [_c("kbd", [_vm._v("R")])]), _vm._v(" "), _c("dd", [_vm._v(_vm._s(_vm.t("mail", "Refresh")))])])])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=template&id=14bd04f7&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=template&id=14bd04f7&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_vm._l(_vm.sortedDomains, function (domain) {
    return _c("div", {
      key: domain.address,
      staticClass: "address"
    }, [_vm._v("\n\t\t" + _vm._s(domain.address) + "\n\t\t"), _c("p", {
      staticClass: "address__type"
    }, [_vm._v("\n\t\t\t(" + _vm._s(_vm.t("mail", "domain")) + ")\n\t\t")]), _vm._v(" "), _c("ButtonVue", {
      staticClass: "button",
      attrs: {
        type: "tertiary",
        "aria-label": _vm.t("mail", "Remove")
      },
      on: {
        click: function ($event) {
          return _vm.removeInternalAddress(domain);
        }
      }
    }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Remove")) + "\n\t\t")])], 1);
  }), _vm._v(" "), _vm._l(_vm.sortedEmails, function (email) {
    return _c("div", {
      key: email.address,
      staticClass: "address"
    }, [_vm._v("\n\t\t" + _vm._s(email.address) + "\n\t\t"), _c("p", {
      staticClass: "address__type"
    }, [_vm._v("\n\t\t\t(" + _vm._s(_vm.t("mail", "email")) + ")\n\t\t")]), _vm._v(" "), _c("ButtonVue", {
      staticClass: "button",
      attrs: {
        type: "tertiary",
        "aria-label": _vm.t("mail", "Remove")
      },
      on: {
        click: function ($event) {
          return _vm.removeInternalAddress(email);
        }
      }
    }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Remove")) + "\n\t\t")])], 1);
  }), _vm._v(" "), _c("ButtonVue", {
    attrs: {
      type: "primary"
    },
    on: {
      click: function ($event) {
        _vm.openDialog = true;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconAdd", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("mail", "Add internal address")) + "\n\t")]), _vm._v(" "), _c("NcDialog", {
    attrs: {
      open: _vm.openDialog,
      buttons: _vm.buttons,
      name: _vm.t("mail", "Add internal address")
    },
    on: {
      "update:open": function ($event) {
        _vm.openDialog = $event;
      },
      close: function ($event) {
        _vm.openDialog = false;
      }
    }
  }, [_c("NcTextField", {
    staticClass: "input",
    attrs: {
      label: _vm.t("mail", "Add internal email or domain"),
      value: _vm.newAddress
    },
    on: {
      "update:value": function ($event) {
        _vm.newAddress = $event;
      }
    }
  })], 1)], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=template&id=26f12962&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=template&id=26f12962&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("Modal", {
    on: {
      close: _vm.onClose
    }
  }, [_c("div", {
    ref: "content",
    staticClass: "modal-content"
  }, [_c("h2", {
    staticClass: "oc-dialog-title"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Choose target mailbox")) + "\n\t\t")]), _vm._v(" "), _c("span", {
    staticClass: "crumbs"
  }, [_c("div", {
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.onClickHome.apply(null, arguments);
      }
    }
  }, [_c("IconInbox", {
    attrs: {
      size: 16
    }
  })], 1), _vm._v(" "), _vm._l(_vm.mailboxCrumbs, function (box, index) {
    return _c("div", {
      key: box.databaseId,
      staticClass: "level"
    }, [_c("IconBreadcrumb", {
      attrs: {
        size: 16
      }
    }), _vm._v(" "), _c("a", {
      on: {
        click: function ($event) {
          $event.preventDefault();
          return _vm.onClickCrumb(index);
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.getMailboxTitle(box)) + "\n\t\t\t\t")])], 1);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "mailbox-list"
  }, [_vm.filteredMailboxes.length > 0 ? _c("ul", _vm._l(_vm.filteredMailboxes, function (box) {
    return _c("li", {
      key: box.databaseId,
      on: {
        click: function ($event) {
          $event.preventDefault();
          return _vm.onClickMailbox(box);
        }
      }
    }, [box.specialRole === "inbox" ? _c("IconInbox", {
      attrs: {
        size: 16
      }
    }) : box.specialRole === "drafts" ? _c("IconDraft", {
      attrs: {
        size: 16
      }
    }) : box.specialRole === "sent" ? _c("IconSent", {
      attrs: {
        size: 16
      }
    }) : box.specialRole === "archive" ? _c("IconArchive", {
      attrs: {
        size: 16
      }
    }) : box.specialRole === "trash" ? _c("IconTrash", {
      attrs: {
        size: 16
      }
    }) : _c("IconFolder", {
      attrs: {
        size: 16
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "mailbox-title"
    }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.getMailboxTitle(box)) + "\n\t\t\t\t\t")])], 1);
  }), 0) : _c("IconFolder", {
    attrs: {
      size: 65
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "empty-icon empty"
  }), _vm._v(" "), _c("h2", [_vm._v(_vm._s(_vm.t("mail", "No more submailboxes in here")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "buttons"
  }, [_c("ButtonVue", {
    attrs: {
      type: "primary",
      disabled: _vm.loading || !_vm.allowRoot && !_vm.selectedMailboxId,
      "aria-label": _vm.loading ? _vm.labelSelectLoading : _vm.labelSelect
    },
    on: {
      click: _vm.onSelect
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_vm.loading ? _c("IconLoading", {
          attrs: {
            size: 16
          }
        }) : _vm._e()];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.loading ? _vm.labelSelectLoading : _vm.labelSelect) + "\n\t\t\t")])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MoveMailboxModal.vue?vue&type=template&id=4260c3fa":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MoveMailboxModal.vue?vue&type=template&id=4260c3fa ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("MailboxPicker", {
    attrs: {
      account: _vm.account,
      selected: _vm.destMailboxId,
      loading: _vm.moving,
      "picked-mailbox": _vm.mailbox,
      "allow-root": true,
      "label-select": _vm.t("mail", "Move"),
      "label-select-loading": _vm.t("mail", "Moving")
    },
    on: {
      "update:selected": function ($event) {
        _vm.destMailboxId = $event;
      },
      select: _vm.onMove,
      close: _vm.onClose
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("AppNavigation", {
    scopedSlots: _vm._u([{
      key: "search",
      fn: function () {
        return [_c("NewMessageButtonHeader")];
      },
      proxy: true
    }, {
      key: "list",
      fn: function () {
        return [_vm._l(_vm.unifiedMailboxes, function (mailbox) {
          return _c("NavigationMailbox", {
            key: "mailbox-" + mailbox.databaseId,
            attrs: {
              account: _vm.unifiedAccount,
              mailbox: mailbox
            }
          });
        }), _vm._v(" "), _vm._l(_vm.menu, function (group) {
          return [group.account ? _c("NavigationAccount", {
            key: group.account.id,
            attrs: {
              account: group.account,
              "first-mailbox": group.mailboxes[0],
              "is-first": _vm.isFirst(group.account),
              "is-last": _vm.isLast(group.account),
              "is-disabled": _vm.isDisabled(group.account)
            }
          }) : _vm._e(), _vm._v(" "), !_vm.isDisabled(group.account) ? [_vm._l(group.mailboxes, function (item) {
            return [_c("NavigationMailbox", {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: !group.isCollapsible || !group.account.collapsed || !_vm.isCollapsed(group.account, item),
                expression: "\n\t\t\t\t\t\t\t!group.isCollapsible ||\n\t\t\t\t\t\t\t\t!group.account.collapsed ||\n\t\t\t\t\t\t\t\t!isCollapsed(group.account, item)\n\t\t\t\t\t\t"
              }],
              key: "mailbox-" + item.databaseId,
              attrs: {
                account: group.account,
                mailbox: item
              }
            }), _vm._v(" "), !group.account.isUnified && item.specialRole === "inbox" ? _c("NavigationMailbox", {
              key: item.databaseId + "-starred",
              attrs: {
                account: group.account,
                mailbox: item,
                filter: "starred"
              }
            }) : _vm._e()];
          }), _vm._v(" "), !group.account.isUnified && group.isCollapsible ? _c("NavigationAccountExpandCollapse", {
            key: "collapse-" + group.account.id,
            attrs: {
              account: group.account
            }
          }) : _vm._e()] : _vm._e()];
        })];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function () {
        return [_vm.outboxMessages.length !== 0 ? _c("div", {
          staticClass: "outbox__border"
        }, [_c("NavigationOutbox", {
          staticClass: "outbox"
        })], 1) : _vm._e(), _vm._v(" "), _c("div", {
          staticClass: "mail-settings"
        }, [_c("AppNavigationItem", {
          staticClass: "mail-settings__button",
          attrs: {
            "close-after-click": true,
            name: _vm.t("mail", "Mail settings")
          },
          on: {
            click: _vm.showMailSettings
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconSetting", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }])
        })], 1)];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._v(" "), _vm._v(" "), _c("AppSettingsMenu", {
    attrs: {
      open: _vm.showSettings
    },
    on: {
      "update:open": function ($event) {
        _vm.showSettings = $event;
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=template&id=aee3f60e":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=template&id=aee3f60e ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("Fragment", [_vm.visible ? _c("NcAppNavigationCaption", {
    key: _vm.id,
    attrs: {
      id: _vm.id,
      name: _vm.account.emailAddress
    },
    on: {
      "update:open": _vm.onMenuToggle
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function () {
        return [_vm.isDisabled ? [_c("ActionText", {
          attrs: {
            name: _vm.t("mail", "Provisioned account is disabled")
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconInfo", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 3625221864)
        }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Please login using a password to enable this account. The current session is using passwordless authentication, e.g. SSO or WebAuthn.")) + "\n\t\t\t\t\t")])] : [_c("ActionButton", {
          attrs: {
            "close-after-click": true
          },
          on: {
            click: function ($event) {
              return _vm.showAccountSettings(true);
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconSettings", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 2580691459)
        }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Account settings")) + "\n\t\t\t\t\t")]), _vm._v(" "), _c("ActionCheckbox", {
          attrs: {
            checked: _vm.account.showSubscribedOnly,
            disabled: _vm.savingShowOnlySubscribed
          },
          on: {
            "update:checked": _vm.changeShowSubscribedOnly
          }
        }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Show only subscribed mailboxes")) + "\n\t\t\t\t\t")]), _vm._v(" "), !_vm.editing && _vm.nameLabel ? _c("ActionButton", {
          on: {
            click: _vm.openCreateMailbox
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconFolderAdd", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 1502609841)
        }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Add mailbox")) + "\n\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.editing && _vm.nameInput ? _c("ActionInput", {
          attrs: {
            value: _vm.createMailboxName
          },
          on: {
            "update:value": function ($event) {
              _vm.createMailboxName = $event;
            },
            submit: function ($event) {
              $event.preventDefault();
              $event.stopPropagation();
              return _vm.createMailbox.apply(null, arguments);
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconFolderAdd", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 1502609841)
        }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Mailbox name")) + "\n\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.showSaving ? _c("ActionText", {
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconLoading", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 4291381056)
        }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Saving")) + "\n\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.isFirst ? _c("ActionButton", {
          on: {
            click: _vm.changeAccountOrderUp
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("MenuUp", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 882525435)
        }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Move up")) + "\n\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.isLast ? _c("ActionButton", {
          on: {
            click: _vm.changeAccountOrderDown
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("MenuDown", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 2631425228)
        }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Move down")) + "\n\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.account.provisioningId ? _c("ActionButton", {
          on: {
            click: _vm.removeAccount
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconDelete", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 3099325823)
        }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Remove account")) + "\n\t\t\t\t\t")]) : _vm._e()]];
      },
      proxy: true
    }], null, false, 2329264469)
  }) : _vm._e(), _vm._v(" "), _c("AccountSettings", {
    attrs: {
      open: _vm.showSettings,
      account: _vm.account
    },
    on: {
      "update:open": function ($event) {
        return _vm.showAccountSettings($event);
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=template&id=cd93b780&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=template&id=cd93b780&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("AppNavigationItem", {
    attrs: {
      name: _vm.title
    },
    on: {
      click: _vm.toggleCollapse
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=template&id=11816800&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=template&id=11816800&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.visible ? _c("AppNavigationItem", {
    directives: [{
      name: "droppable-mailbox",
      rawName: "v-droppable-mailbox",
      value: {
        mailboxId: _vm.mailbox.databaseId,
        accountId: _vm.mailbox.accountId,
        isValidDropTarget: _vm.isValidDropTarget
      },
      expression: "{\n\t\tmailboxId: mailbox.databaseId,\n\t\taccountId: mailbox.accountId,\n\t\tisValidDropTarget,\n\t}"
    }],
    key: _vm.genId(_vm.mailbox),
    attrs: {
      id: _vm.genId(_vm.mailbox),
      "allow-collapse": _vm.hasSubMailboxes,
      "menu-open": _vm.menuOpen,
      "force-menu": true,
      name: _vm.title,
      to: _vm.to,
      open: _vm.showSubMailboxes
    },
    on: {
      "update:menuOpen": [function ($event) {
        _vm.menuOpen = $event;
      }, _vm.onMenuToggle],
      "update:menu-open": function ($event) {
        _vm.menuOpen = $event;
      },
      "update:open": function ($event) {
        _vm.showSubMailboxes = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("div", [_vm.mailbox.isPriorityInbox ? _c("ImportantIcon", {
          attrs: {
            size: 16
          }
        }) : _vm.mailbox.id === _vm.UNIFIED_INBOX_ID ? _c("IconAllInboxes", {
          attrs: {
            size: 16
          }
        }) : _vm.mailbox.specialRole === "inbox" && !_vm.mailbox.isPriorityInbox && _vm.filter !== "starred" ? _c("IconInbox", {
          attrs: {
            size: 16
          }
        }) : _vm.filter === "starred" ? _c("IconFavorite", {
          attrs: {
            size: 16
          }
        }) : _vm.mailbox.databaseId === _vm.account.draftsMailboxId ? _c("IconDraft", {
          attrs: {
            size: 16
          }
        }) : _vm.mailbox.databaseId === _vm.account.sentMailboxId ? _c("IconSend", {
          attrs: {
            size: 16
          }
        }) : _vm.mailbox.databaseId === _vm.account.archiveMailboxId ? _c("IconArchive", {
          attrs: {
            size: 16
          }
        }) : _vm.mailbox.databaseId === _vm.account.trashMailboxId ? _c("IconDelete", {
          attrs: {
            size: 16
          }
        }) : _vm.mailbox.databaseId === _vm.account.junkMailboxId ? _c("IconJunk", {
          attrs: {
            size: 16
          }
        }) : _vm.mailbox.databaseId === _vm.account.snoozeMailboxId ? _c("AlarmIcon", {
          attrs: {
            size: 16
          }
        }) : _vm.mailbox.shared ? _c("IconFolderShared", {
          attrs: {
            size: 16
          }
        }) : _c("IconFolder", {
          attrs: {
            size: 16
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "actions",
      fn: function () {
        return [!_vm.account.isUnified && _vm.mailbox.specialRole !== "flagged" ? _c("ActionText", {
          attrs: {
            name: _vm.mailbox.name
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconInfo", {
                attrs: {
                  title: _vm.statsText,
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 2435065698)
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.statsText) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.mailbox.specialRole !== "flagged" && !_vm.account.isUnified && _vm.hasSeenAcl ? _c("ActionButton", {
          attrs: {
            name: _vm.t("mail", "Mark all as read"),
            disabled: _vm.loadingMarkAsRead
          },
          on: {
            click: _vm.markAsRead
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconEmailCheck", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 598907980)
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Mark all messages of this mailbox as read")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), !_vm.editing && !_vm.account.isUnified && _vm.hasDelimiter && _vm.mailbox.specialRole !== "flagged" && _vm.hasSubmailboxActionAcl ? _c("ActionButton", {
          on: {
            click: _vm.openCreateMailbox
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconFolderAdd", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 1502609841)
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Add submailbox")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.editing ? _c("ActionInput", {
          attrs: {
            value: _vm.createMailboxName
          },
          on: {
            "update:value": function ($event) {
              _vm.createMailboxName = $event;
            },
            submit: function ($event) {
              $event.preventDefault();
              $event.stopPropagation();
              return _vm.createMailbox.apply(null, arguments);
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconFolderAdd", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 1502609841)
        }) : _vm._e(), _vm._v(" "), _vm.renameLabel && !_vm.hasSubMailboxes && !_vm.account.isUnified && _vm.hasRenameAcl ? _c("ActionButton", {
          on: {
            click: function ($event) {
              $event.preventDefault();
              $event.stopPropagation();
              return _vm.openRenameInput.apply(null, arguments);
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconFolderRename", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 3513914528)
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Rename")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.renameInput ? _c("ActionInput", {
          attrs: {
            value: _vm.mailboxName
          },
          on: {
            "update:value": function ($event) {
              _vm.mailboxName = $event;
            },
            submit: function ($event) {
              $event.preventDefault();
              $event.stopPropagation();
              return _vm.renameMailbox.apply(null, arguments);
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconFolderRename", {
                attrs: {
                  title: _vm.t("mail", "Rename"),
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 2300758806)
        }) : _vm._e(), _vm._v(" "), _vm.showSaving ? _c("ActionText", {
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconLoading", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 4291381056)
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Saving")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), !_vm.account.isUnified && _vm.hasDelimiter && !_vm.mailbox.specialRole && !_vm.hasSubMailboxes && _vm.hasDeleteAcl ? _c("ActionButton", {
          attrs: {
            id: _vm.genId(_vm.mailbox),
            "close-after-click": true
          },
          on: {
            click: function ($event) {
              $event.preventDefault();
              return _vm.onOpenMoveModal.apply(null, arguments);
            }
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconExternal", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 553833851)
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Move mailbox")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), !_vm.account.isUnified && _vm.mailbox.specialRole !== "flagged" ? _c("ActionButton", {
          attrs: {
            disabled: _vm.repairing
          },
          on: {
            click: _vm.repair
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconWrench", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 2197471619)
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Repair mailbox")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.debug && !_vm.account.isUnified && _vm.mailbox.specialRole !== "flagged" ? _c("ActionButton", {
          attrs: {
            name: _vm.t("mail", "Clear cache"),
            disabled: _vm.clearingCache
          },
          on: {
            click: _vm.clearCache
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconFolderSync", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 3002918039)
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Clear locally cached data, in case there are issues with synchronization.")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.notVirtual ? _c("ActionCheckbox", {
          attrs: {
            checked: _vm.isSubscribed,
            disabled: _vm.changeSubscription
          },
          on: {
            "update:checked": _vm.changeFolderSubscription
          }
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Subscribed")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.notVirtual && _vm.notInbox ? _c("ActionCheckbox", {
          attrs: {
            checked: _vm.mailbox.syncInBackground,
            disabled: _vm.changingSyncInBackground
          },
          on: {
            "update:checked": _vm.changeSyncInBackground
          }
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Sync in background")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.mailbox.specialRole !== "flagged" && !_vm.account.isUnified && _vm.hasClearMailboxAcl ? _c("ActionButton", {
          attrs: {
            "close-after-click": true
          },
          on: {
            click: _vm.clearMailbox
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("EraserVariant", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 3179343720)
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Clear mailbox")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), !_vm.account.isUnified && !_vm.mailbox.specialRole && !_vm.hasSubMailboxes && _vm.hasDeleteAcl ? _c("ActionButton", {
          on: {
            click: _vm.deleteMailbox
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconDelete", {
                attrs: {
                  size: 16
                }
              })];
            },
            proxy: true
          }], null, false, 3099325823)
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Delete mailbox")) + "\n\t\t")]) : _vm._e()];
      },
      proxy: true
    }, {
      key: "counter",
      fn: function () {
        return [_vm.showUnreadCounter && _vm.subCounter ? _c("CounterBubble", [_vm._v("\n\t\t\t" + _vm._s(_vm.mailbox.unread) + " (" + _vm._s(_vm.subCounter) + ")\n\t\t")]) : _vm.showUnreadCounter ? _c("CounterBubble", [_vm._v("\n\t\t\t" + _vm._s(_vm.mailbox.unread) + "\n\t\t")]) : _vm._e()];
      },
      proxy: true
    }, {
      key: "extra",
      fn: function () {
        return [_vm.showMoveModal ? _c("MoveMailboxModal", {
          attrs: {
            account: _vm.account,
            mailbox: _vm.mailbox
          },
          on: {
            close: _vm.onCloseMoveModal
          }
        }) : _vm._e()];
      },
      proxy: true
    }], null, false, 467124025)
  }, [_vm._v(" "), _vm._v(" "), _vm._v(" "), _vm._v(" "), _vm._l(_vm.subMailboxes, function (subMailbox) {
    return _c("NavigationMailbox", {
      key: _vm.genId(subMailbox),
      attrs: {
        account: _vm.account,
        mailbox: subMailbox
      }
    });
  })], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=template&id=e145babe&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=template&id=e145babe&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("AppNavigationItem", {
    key: "navigation-outbox",
    attrs: {
      id: "navigation-outbox",
      name: _vm.t("mail", "Outbox"),
      to: _vm.to
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconOutbox", {
          staticClass: "outbox-opacity-icon",
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }, {
      key: "counter",
      fn: function () {
        return [_vm.count ? _c("CounterBubble", {
          staticClass: "navigation-outbox__unread-counter"
        }, [_vm._v("\n\t\t\t" + _vm._s(_vm.count) + "\n\t\t")]) : _vm._e()];
      },
      proxy: true
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=template&id=0a4fb114&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=template&id=0a4fb114&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    staticClass: "header"
  }, [_c("ButtonVue", {
    attrs: {
      "aria-label": _vm.t("mail", "New message"),
      type: "secondary",
      "button-id": "mail_new_message",
      role: "complementary",
      wide: true
    },
    on: {
      click: _vm.onNewMessage
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconAdd", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("mail", "New message")) + "\n\t")]), _vm._v(" "), _vm.currentMailbox ? _c("ButtonVue", {
    staticClass: "refresh__button",
    attrs: {
      "aria-label": _vm.t("mail", "Refresh"),
      type: "tertiary-no-background",
      disabled: _vm.refreshing
    },
    on: {
      click: _vm.refreshMailbox
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [!_vm.refreshing ? _c("IconRefresh", {
          attrs: {
            size: 16
          }
        }) : _vm._e(), _vm._v(" "), _vm.refreshing ? _c("IconLoading", {
          attrs: {
            size: 16
          }
        }) : _vm._e()];
      },
      proxy: true
    }], null, false, 2775302732)
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=template&id=2c3682d2&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=template&id=2c3682d2&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_vm._l(_vm.sortedSenders, function (sender) {
    return _c("div", {
      key: sender.email
    }, [_vm._v("\n\t\t" + _vm._s(sender.email) + "\n\t\t" + _vm._s(_vm.senderType(sender.type)) + "\n\t\t"), _c("ButtonVue", {
      staticClass: "button",
      attrs: {
        type: "tertiary",
        "aria-label": _vm.t("mail", "Remove")
      },
      on: {
        click: function ($event) {
          return _vm.removeSender(sender);
        }
      }
    }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "Remove")) + "\n\t\t")])], 1);
  }), _vm._v(" "), !_vm.sortedSenders.length ? _c("span", [_vm._v(" " + _vm._s(_vm.t("mail", "No senders are trusted at the moment.")))]) : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/ImportantIcon.vue?vue&type=template&id=c13336f4&functional=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/ImportantIcon.vue?vue&type=template&id=c13336f4&functional=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render(_c, _vm) {
  return _c("span", _vm._g(_vm._b({
    staticClass: "material-design-icon important-icon",
    class: [_vm.data.class, _vm.data.staticClass],
    attrs: {
      "aria-hidden": !_vm.props.title,
      "aria-label": _vm.props.title,
      role: "img"
    }
  }, "span", _vm.data.attrs, false), _vm.listeners), [_c("svg", {
    staticClass: "material-design-icon__svg",
    attrs: {
      fill: _vm.props.fillColor,
      width: _vm.props.size,
      height: _vm.props.size,
      viewBox: "0 0 16 16"
    }
  }, [_c("path", {
    attrs: {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M2 13h7.8a1.4 1.4 0 001.1-.6L14 8l-3.1-4.4A1.4 1.4 0 009.8 3H2l3.4 5z"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/MailIcon.vue?vue&type=template&id=682b0c56&functional=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/MailIcon.vue?vue&type=template&id=682b0c56&functional=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render(_c, _vm) {
  return _c("span", {
    staticClass: "material-design-icon email-icon",
    attrs: {
      role: "img"
    }
  }, [_c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "31",
      height: "25",
      viewBox: "0 0 31 25",
      fill: "none"
    }
  }, [_c("path", {
    attrs: {
      d: "M1 3.33195V22.2722C1 22.8812 1.36501 23.4309 1.92631 23.6671C2.11218 23.7454 2.31181 23.7857 2.51347 23.7857H14.2872H21.3335H28.1001C28.2854 23.7857 28.4696 23.7573 28.6463 23.7015L28.7223 23.6775C29.4771 23.4392 29.9903 22.7391 29.9903 21.9476V3.33195C29.9903 2.33004 29.1781 1.51782 28.1761 1.51782H15.4951H2.81413C1.81221 1.51782 1 2.33004 1 3.33195Z",
      fill: "#F5F5F5",
      stroke: "black",
      "stroke-width": "0.907066"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M29.5785 20.5535L17.4516 8.17127C16.3816 7.07877 14.6218 7.08216 13.5561 8.17876L1.75937 20.3169C1.27243 20.8179 1.00003 21.4891 1.00003 22.1877V22.6527C1.00003 23.0415 1.1994 23.4031 1.52818 23.6107C1.70922 23.725 1.91896 23.7857 2.13308 23.7857H3.41589L8.16288 23.7857L21.7535 23.7857L28.3797 23.7857C30.0271 23.7857 30.4021 21.643 29.5785 20.5535Z",
      stroke: "black",
      "stroke-width": "0.907066"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M1.63846 4.39857L14.8989 16.0094C15.2425 16.3102 15.7562 16.3087 16.098 16.0058L29.54 4.09441C29.8325 3.83517 30 3.46302 30 3.07214C30 2.7761 29.9038 2.48808 29.7259 2.25144L29.582 2.06001C29.33 1.72469 28.9826 1.47328 28.5853 1.33869L28.0101 1.14386C27.7289 1.0486 27.434 1 27.1371 1H22.841H16.0351H12.4121H8.78904H2.57812C1.03955 1 0.661144 2.87867 1.28989 3.99863C1.37708 4.15393 1.50446 4.28124 1.63846 4.39857Z",
      fill: "#F5F5F5",
      stroke: "black",
      "stroke-width": "0.907066"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M15.0422 6.5331C14.7955 6.5331 14.5681 6.62806 14.3593 6.81946C14.1506 7.01087 13.9925 7.28302 13.8867 7.63592C13.7815 7.98882 13.7279 8.3021 13.7279 8.575C13.7279 8.93912 13.8017 9.20828 13.9485 9.38024C14.0962 9.55221 14.2788 9.63894 14.4965 9.63894L14.668 10.3791C14.5397 10.4113 14.407 10.427 14.2691 10.427C13.7935 10.427 13.3991 10.2625 13.0852 9.93352C12.9876 9.83109 12.9048 9.71744 12.8377 9.59333C12.6894 9.32043 12.6148 8.99669 12.6148 8.62136C12.6148 7.94621 12.8042 7.33012 13.1821 6.77385C13.6406 6.09571 14.2274 5.75702 14.9438 5.75702C14.999 5.75702 15.0527 5.75926 15.1041 5.7645L15.0422 6.53236V6.5331Z",
      fill: "#70B62B"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M17.5203 5.50581C17.0104 5.03029 16.2984 4.79253 15.3852 4.79253C14.6091 4.79253 13.9515 4.95179 13.4118 5.2688C12.872 5.58581 12.4649 6.03218 12.1913 6.60863C11.9177 7.18434 11.7813 7.78397 11.7813 8.40679C11.7813 8.89876 11.882 9.35558 12.0832 9.77652C12.1295 9.87372 12.1817 9.96868 12.2383 10.0621C12.5432 10.5593 12.9719 10.9212 13.5228 11.1493C14.0738 11.3773 14.7045 11.4917 15.415 11.4917C16.1255 11.4917 16.6883 11.396 17.1804 11.2053C17.6732 11.0147 18.0698 10.7276 18.371 10.3463H19.2857C18.9994 10.9294 18.5603 11.3855 17.9669 11.7167C17.2877 12.0958 16.4602 12.2857 15.4836 12.2857C14.5069 12.2857 13.7219 12.1257 13.0353 11.8057C12.3479 11.485 11.8372 11.0132 11.5017 10.3881C11.167 9.76232 11 9.08193 11 8.34697C11 7.53948 11.1901 6.78807 11.5711 6.09124C11.952 5.39516 12.4739 4.87179 13.1352 4.52262C13.7964 4.17496 14.5524 4 15.403 4C16.1247 4 16.7659 4.14131 17.328 4.42244C17.8894 4.70356 18.318 5.10431 18.614 5.62245C18.9107 6.14059 19.0591 6.70732 19.0591 7.32191C19.0591 8.05388 18.8339 8.71632 18.3844 9.30773C17.82 10.0547 17.0969 10.4277 16.2149 10.4277C15.9778 10.4277 15.7982 10.3866 15.6774 10.3029C15.5574 10.2199 15.4769 10.098 15.4373 9.93727C15.2047 10.1623 14.9475 10.3096 14.6672 10.3799L14.4957 9.6397C14.659 9.6397 14.8118 9.59932 14.955 9.51858C15.0638 9.46175 15.1712 9.37128 15.2771 9.24717C15.4291 9.07222 15.5596 8.81651 15.6707 8.48006C15.781 8.14435 15.8362 7.83183 15.8362 7.54098C15.8362 7.21724 15.7609 6.96751 15.611 6.79405C15.4604 6.61985 15.2711 6.53312 15.0422 6.53312L15.1041 5.76526C15.5328 5.80264 15.8563 5.99554 16.0733 6.34396L16.1806 5.86544H17.3146L16.666 8.95408C16.6264 9.14997 16.6056 9.27633 16.6056 9.33315C16.6056 9.40493 16.622 9.45876 16.6555 9.49465C16.6891 9.53054 16.7278 9.54848 16.7733 9.54848C16.9105 9.54848 17.0887 9.46549 17.3056 9.29876C17.5979 9.08044 17.8342 8.7881 18.0146 8.42024C18.195 8.05239 18.2852 7.67182 18.2852 7.27855C18.2852 6.61611 18.0608 6.0561 17.6135 5.59628C17.5837 5.56563 17.5524 5.53572 17.5203 5.50581Z",
      fill: "#70B62B"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=template&id=aaa40996&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=template&id=aaa40996&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
        return _vm.$emit("close");
      }
    }
  }, [_c("div", {
    staticClass: "certificate-modal"
  }, [!_vm.showImportScreen ? _c("div", {
    staticClass: "certificate-modal__list"
  }, [_c("h2", [_vm._v(_vm._s(_vm.t("mail", "S/MIME certificates")))]), _vm._v(" "), _c("table", {
    staticClass: "certificate-modal__list__table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v(_vm._s(_vm.t("mail", "Certificate name")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.t("mail", "E-mail address")))]), _vm._v(" "), _c("th", [_vm._v(_vm._s(_vm.t("mail", "Valid until")))]), _vm._v(" "), _c("th")])]), _vm._v(" "), _c("tbody", _vm._l(_vm.certificates, function (certificate) {
    return _c("tr", {
      key: certificate.id
    }, [_c("td", {
      attrs: {
        title: certificate.info.commonName
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(certificate.info.commonName) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("td", {
      attrs: {
        title: certificate.info.emailAddress
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(certificate.info.emailAddress) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("td", {
      attrs: {
        title: _vm.moment.unix(certificate.info.notAfter).format("LL")
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.moment.unix(certificate.info.notAfter).format("LL")) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("td", [_c("NcButton", {
      attrs: {
        type: "tertiary-no-background",
        "aria-label": _vm.t("mail", "Delete certificate")
      },
      on: {
        click: function ($event) {
          return _vm.deleteCertificate(certificate.id);
        }
      },
      scopedSlots: _vm._u([{
        key: "icon",
        fn: function () {
          return [_c("DeleteIcon", {
            attrs: {
              title: _vm.t("mail", "Delete certificate"),
              size: 16
            }
          })];
        },
        proxy: true
      }], null, true)
    })], 1)]);
  }), 0)]), _vm._v(" "), _vm.certificates.length === 0 ? _c("NcEmptyContent", {
    staticClass: "certificate__empty",
    attrs: {
      name: _vm.t("mail", "No certificate imported yet")
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "certificate-modal__list__actions"
  }, [_c("NcButton", {
    attrs: {
      type: "primary",
      "aria-label": _vm.t("mail", "Import certificate")
    },
    on: {
      click: function ($event) {
        _vm.showImportScreen = true;
      }
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "Import certificate")) + "\n\t\t\t\t")])], 1)], 1) : _c("form", {
    staticClass: "certificate-modal__import",
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.uploadCertificate.apply(null, arguments);
      }
    }
  }, [_c("h2", [_vm._v(_vm._s(_vm.t("mail", "Import S/MIME certificate")))]), _vm._v(" "), _c("fieldset", {
    staticClass: "certificate-modal__import__type"
  }, [_c("div", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.certificateType,
      expression: "certificateType"
    }],
    attrs: {
      id: "certificate-type-pkcs12",
      name: "certificate-type",
      type: "radio"
    },
    domProps: {
      value: _vm.TYPE_PKCS12,
      checked: _vm._q(_vm.certificateType, _vm.TYPE_PKCS12)
    },
    on: {
      change: function ($event) {
        _vm.certificateType = _vm.TYPE_PKCS12;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "certificate-type-pkcs12"
    }
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "PKCS #12 Certificate")) + "\n\t\t\t\t\t")])]), _vm._v(" "), _c("div", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.certificateType,
      expression: "certificateType"
    }],
    attrs: {
      id: "certificate-type-pem",
      name: "certificate-type",
      type: "radio"
    },
    domProps: {
      value: _vm.TYPE_PEM,
      checked: _vm._q(_vm.certificateType, _vm.TYPE_PEM)
    },
    on: {
      change: function ($event) {
        _vm.certificateType = _vm.TYPE_PEM;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "certificate-type-pem"
    }
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "PEM Certificate")) + "\n\t\t\t\t\t")])])]), _vm._v(" "), _c("fieldset", [_c("label", {
    attrs: {
      for: "certificate"
    }
  }, [_vm._v(_vm._s(_vm.t("mail", "Certificate")))]), _vm._v(" "), _c("input", {
    ref: "certificate",
    attrs: {
      id: "certificate",
      type: "file",
      required: ""
    },
    on: {
      change: function ($event) {
        _vm.certificate = $event.target.files[0];
      }
    }
  })]), _vm._v(" "), _vm.certificateType === _vm.TYPE_PEM ? _c("fieldset", [_c("label", {
    attrs: {
      for: "private-key"
    }
  }, [_vm._v(_vm._s(_vm.t("mail", "Private key (optional)")))]), _vm._v(" "), _c("input", {
    ref: "privateKey",
    attrs: {
      id: "private-key",
      type: "file"
    },
    on: {
      change: function ($event) {
        _vm.privateKey = $event.target.files[0];
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.certificateType === _vm.TYPE_PKCS12 ? _c("fieldset", [_c("label", {
    attrs: {
      for: "password"
    }
  }, [_vm._v(_vm._s(_vm.t("mail", "Password")))]), _vm._v(" "), _c("NcPasswordField", {
    attrs: {
      value: _vm.password,
      label: _vm.t("mail", "Password")
    },
    on: {
      "update:value": function ($event) {
        _vm.password = $event;
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "certificate-modal__import__hints"
  }, [_vm.certificateType === _vm.TYPE_PEM ? _c("p", [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "The private key is only required if you intend to send signed and encrypted emails using this certificate.")) + "\n\t\t\t\t")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "certificate-modal__import__actions"
  }, [_c("NcButton", {
    attrs: {
      type: "tertiary-no-background",
      "aria-label": _vm.t("mail", "Back")
    },
    on: {
      click: _vm.resetImportForm
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "Back")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "primary",
      "aria-label": _vm.t("mail", "Submit"),
      "native-type": "submit",
      disabled: _vm.loading || !_vm.inputFormIsValid
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "Submit")) + "\n\t\t\t\t")])], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/directives/drag-and-drop/droppable-mailbox/droppable-mailbox.js":
/*!*****************************************************************************!*\
  !*** ./src/directives/drag-and-drop/droppable-mailbox/droppable-mailbox.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DroppableMailbox: () => (/* binding */ DroppableMailbox)
/* harmony export */ });
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/mainStore.js */ "./src/store/mainStore.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../logger.js */ "./src/logger.js");
/* harmony import */ var _util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dragEventBus.js */ "./src/directives/drag-and-drop/util/dragEventBus.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




(0,pinia__WEBPACK_IMPORTED_MODULE_3__.setActivePinia)((0,pinia__WEBPACK_IMPORTED_MODULE_3__.createPinia)());
const mainStore = (0,_store_mainStore_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
class DroppableMailbox {
  constructor(el, componentInstance, options) {
    this.el = el;
    this.options = options;
    this.registerListeners.bind(this)(el);
    this.setInitialAttributes();
  }
  setInitialAttributes() {
    this.draggableInfo = {};
    this.setStatus('enabled');
  }
  update(el, instance) {
    this.setInitialAttributes();
    this.options = instance.options;
  }
  registerListeners(el) {
    _util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_2__["default"].on('drag-start', this.onDragStart.bind(this));
    _util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_2__["default"].on('drag-end', this.onDragEnd.bind(this));

    // event listeners need to be attached to the first child element
    // (a button or an anchor tag) instead of the root el, because there
    // can be sub-mailboxes within the root element of the directive
    el.firstChild.addEventListener('dragover', this.onDragOver.bind(this));
    el.firstChild.addEventListener('dragleave', this.onDragLeave.bind(this));
    el.firstChild.addEventListener('drop', this.onDrop.bind(this));
  }
  removeListeners(el) {
    _util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_2__["default"].off('drag-start', this.onDragStart);
    _util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_2__["default"].off('drag-end', this.onDragEnd);
    el.firstChild.removeEventListener('dragover', this.onDragOver);
    el.firstChild.removeEventListener('dragleave', this.onDragLeave);
    el.firstChild.removeEventListener('drop', this.onDrop);
  }
  setStatus(status) {
    this.el.setAttribute('droppable-mailbox', status);
  }
  onDragStart(draggableInfo) {
    this.draggableInfo = draggableInfo;
    if (!this.canBeDropped()) {
      this.setStatus('disabled');
    }
  }
  canBeDropped() {
    return this.isSameAccount() && this.options.isValidDropTarget;
  }
  isSameAccount() {
    return this.draggableInfo.accountId === this.options.accountId;
  }
  onDragEnd() {
    this.setInitialAttributes();
  }
  onDragOver(event) {
    event.preventDefault();

    // Prevent dropping into current folder
    if (this.draggableInfo.mailboxId === this.options.mailboxId) {
      return;
    }
    if (this.options.isValidDropTarget) {
      this.setStatus('dragover');
    }
    event.dataTransfer.dropEffect = 'move';
  }
  onDragLeave(event) {
    event.preventDefault();
    this.setStatus('enabled');
  }
  async onDrop(event) {
    event.preventDefault();

    // Prevent dropping into current folder
    if (this.draggableInfo.mailboxId === this.options.mailboxId) {
      return;
    }
    this.setInitialAttributes();
    const envelopesBeingDragged = JSON.parse(event.dataTransfer.getData('text'));
    _util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_2__["default"].emit('envelopes-dropped', {
      envelopes: envelopesBeingDragged
    });
    try {
      const processedEnvelopes = envelopesBeingDragged.map(async envelope => {
        const processed = await this.processDroppedItem(envelope);
        return processed;
      });
      await Promise.all(processedEnvelopes);
    } catch (error) {
      _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error('could not process dropped messages', error);
    } finally {
      _util_dragEventBus_js__WEBPACK_IMPORTED_MODULE_2__["default"].emit('envelopes-moved', {
        mailboxId: this.options.mailboxId,
        movedEnvelopes: envelopesBeingDragged
      });
    }
  }
  async processDroppedItem(envelope) {
    const item = document.querySelector("[data-envelope-id=\"".concat(envelope.databaseId, "\"]"));
    item.setAttribute('draggable-envelope', 'pending');
    try {
      await mainStore.moveThread({
        envelope,
        destMailboxId: this.options.mailboxId
      });
    } catch (error) {
      item.removeAttribute('draggable-envelope');
      _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].error('could not move messages', error);
    }
  }
}

/***/ }),

/***/ "./src/directives/drag-and-drop/droppable-mailbox/index.js":
/*!*****************************************************************!*\
  !*** ./src/directives/drag-and-drop/droppable-mailbox/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DroppableMailboxDirective: () => (/* binding */ DroppableMailboxDirective),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _droppable_mailbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./droppable-mailbox.js */ "./src/directives/drag-and-drop/droppable-mailbox/droppable-mailbox.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

let instance;
const DroppableMailboxDirective = {
  bind(el, binding, vnode) {
    instance = new _droppable_mailbox_js__WEBPACK_IMPORTED_MODULE_0__.DroppableMailbox(el, vnode.context, binding.value);
  },
  componentUpdated(el, binding) {
    instance.options = binding.value;
    instance.update(el, instance);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_droppable_mailbox_js__WEBPACK_IMPORTED_MODULE_0__.DroppableMailbox);

/***/ }),

/***/ "./src/directives/drag-and-drop/util/dragEventBus.js":
/*!***********************************************************!*\
  !*** ./src/directives/drag-and-drop/util/dragEventBus.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.mjs");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const dragEventBus = (0,mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragEventBus);

/***/ }),

/***/ "./src/i18n/MailboxTranslator.js":
/*!***************************************!*\
  !*** ./src/i18n/MailboxTranslator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


const translateSpecial = mailbox => {
  if (mailbox.specialUse.includes('all')) {
    // TRANSLATORS: translated mail box name
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'All');
  }
  if (mailbox.specialUse.includes('archive')) {
    // TRANSLATORS: translated mail box name
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'Archive');
  }
  if (mailbox.specialUse.includes('drafts')) {
    // TRANSLATORS: translated mail box name
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'Drafts');
  }
  if (mailbox.specialUse.includes('flagged')) {
    // TRANSLATORS: translated mail box name
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'Favorites');
  }
  if (mailbox.specialUse.includes('inbox')) {
    if (mailbox.isPriorityInbox) {
      // TRANSLATORS: translated mail box name
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'Priority inbox');
    } else if (mailbox.isUnified) {
      // TRANSLATORS: translated mail box name
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'All inboxes');
    } else {
      // TRANSLATORS: translated mail box name
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'Inbox');
    }
  }
  if (mailbox.specialUse.includes('junk')) {
    // TRANSLATORS: translated mail box name
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'Junk');
  }
  if (mailbox.specialUse.includes('sent')) {
    // TRANSLATORS: translated mail box name
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'Sent');
  }
  if (mailbox.specialUse.includes('trash')) {
    // TRANSLATORS: translated mail box name
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'Trash');
  }
  throw new Error("unknown special use ".concat(mailbox.specialUse));
};
const translate = mailbox => {
  if (mailbox.specialUse.length > 0) {
    try {
      return translateSpecial(mailbox);
    } catch (e) {
      console.error('could not translate special mailbox', e);
    }
  }
  return mailbox.displayName;
};

/***/ }),

/***/ "./src/service/TrustedSenderService.js":
/*!*********************************************!*\
  !*** ./src/service/TrustedSenderService.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchTrustedSenders: () => (/* binding */ fetchTrustedSenders),
/* harmony export */   trustSender: () => (/* binding */ trustSender)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


async function trustSender(email, type, trustFlag) {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/mail/api/trustedsenders/{email}?type={type}', {
    email,
    type
  });
  if (trustFlag) {
    await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(url);
  } else {
    await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].delete(url);
  }
}
async function fetchTrustedSenders() {
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/mail/api/trustedsenders');
  const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(url);
  return response.data.data;
}

/***/ }),

/***/ "./src/util/acl.js":
/*!*************************!*\
  !*** ./src/util/acl.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mailboxHasRights: () => (/* binding */ mailboxHasRights)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * @param {object} mailbox object
 * @param {string} rights list of rights to check
 * @return {boolean}
 */
function mailboxHasRights(mailbox, rights) {
  if (!mailbox.myAcls) {
    return true;
  }
  const acls = [...mailbox.myAcls];
  for (const right of [...rights]) {
    if (!acls.includes(right)) {
      return false;
    }
  }
  return true;
}

/***/ }),

/***/ "./src/util/pkcs12.js":
/*!****************************!*\
  !*** ./src/util/pkcs12.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvalidPkcs12CertificateError: () => (/* binding */ InvalidPkcs12CertificateError),
/* harmony export */   convertPkcs12ToPem: () => (/* binding */ convertPkcs12ToPem)
/* harmony export */ });
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
/* harmony import */ var node_forge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_forge__WEBPACK_IMPORTED_MODULE_0__);
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



/**
 * Convert a PKCS #12 certificate from DER to PEM format.
 * This function will extract the certificate and private key.
 *
 * It will fail if the given certificate contains more than one certificate or private key which is
 * not very common as OpenSSL does not support it.
 *
 * @param {ArrayBuffer} pkcs12Der The PKCS #12 certificate in DER format
 * @param {string=} password Password to use for decrypting the certificate
 * @return {{certificate: string, privateKey: string}} The certificate and private key in PEM format
 */
function convertPkcs12ToPem(pkcs12Der, password) {
  const der = new (node_forge__WEBPACK_IMPORTED_MODULE_0___default().util).ByteBuffer(pkcs12Der);
  const asn1 = node_forge__WEBPACK_IMPORTED_MODULE_0___default().asn1.fromDer(der);
  const p12 = node_forge__WEBPACK_IMPORTED_MODULE_0___default().pkcs12.pkcs12FromAsn1(asn1, password);
  const getBags = bagType => p12.getBags({
    bagType
  })[bagType];
  const certBags = getBags((node_forge__WEBPACK_IMPORTED_MODULE_0___default().pki).oids.certBag);
  const keyBags = getBags((node_forge__WEBPACK_IMPORTED_MODULE_0___default().pki).oids.pkcs8ShroudedKeyBag);
  if (certBags.length === 0) {
    throw new InvalidPkcs12CertificateError('The PKCS #12 certificate must contain at least one certificate');
  }
  if (keyBags.length !== 1) {
    throw new InvalidPkcs12CertificateError('The PKCS #12 certificate must contain a single key');
  }
  return {
    certificate: certBags.map(certBag => node_forge__WEBPACK_IMPORTED_MODULE_0___default().pki.certificateToPem(certBag.cert)).join('\r\n'),
    privateKey: node_forge__WEBPACK_IMPORTED_MODULE_0___default().pki.privateKeyToPem(keyBags[0].key)
  };
}
class InvalidPkcs12CertificateError extends Error {
  constructor() {
    super();
    this.name = InvalidPkcs12CertificateError.name;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `p.app-settings span.loading-icon[data-v-16724163] {
  display: inline-block;
  vertical-align: middle;
  padding: 5px 0;
}
p.app-settings[data-v-16724163] {
  padding: 10px 0;
}
.app-settings-button[data-v-16724163] {
  display: inline-flex;
  background-position: 10px center;
  text-align: left;
  margin-top: 6px;
}
.app-settings-button.button.primary.new-button[data-v-16724163] {
  color: var(--color-primary-element-text);
  padding-left: 34px;
  gap: 4px;
  width: fit-content;
}
.app-settings-link[data-v-16724163] {
  text-decoration: underline;
}
[data-v-16724163] .button-vue__text {
  text-overflow: clip;
  white-space: normal;
}
[data-v-16724163] .button-vue__wrapper {
  justify-content: flex-start;
}
.mailvelope-section[data-v-16724163] {
  padding-top: 15px;
}
.mailvelope-section a.button[data-v-16724163] {
  display: flex;
  align-items: center;
  line-height: normal;
  min-height: 44px;
  font-size: unset;
}
.mailvelope-section a.button[data-v-16724163]:focus-visible, .mailvelope-section a.button[data-v-16724163]:hover {
  box-shadow: 0 0 0 1px var(--color-primary-element);
}
.material-design-icon.lock-icon[data-v-16724163] {
  margin-right: 10px;
}
.section-title[data-v-16724163] {
  margin-top: 20px;
  margin-bottom: 10px;
}
.sorting[data-v-16724163] {
  display: flex;
  width: 100%;
}
.sorting__switch[data-v-16724163] {
  width: 50%;
}
.mail-creation-button[data-v-16724163] {
  width: 100%;
}
.settings-hint[data-v-16724163] {
  margin-top: -12px;
  margin-bottom: 6px;
  color: var(--color-text-maxcontrast);
}
.app-settings-section[data-v-16724163] {
  list-style: none;
}
.internal_address[data-v-16724163] {
  margin-left: 3px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.address[data-v-14bd04f7] {
  display: flex;
  align-items: center;
}
.address__type[data-v-14bd04f7] {
  color: var(--color-text-maxcontrast);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-v-26f12962] .modal-container {
  width: calc(100vw - 120px) !important;
  height: calc(100vh - 120px) !important;
  max-width: 600px !important;
  max-height: 500px !important;
}
.modal-content[data-v-26f12962] {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 15px;
}
.crumbs[data-v-26f12962] {
  display: inline-flex;
  padding-right: 0px;
  flex-wrap: wrap;
}
.crumbs .level[data-v-26f12962] {
  display: inline-flex;
  height: 44px;
  min-width: 0px;
  flex: 0 0 auto;
  order: 1;
  padding-right: 7px;
  background-position: right center;
  background-size: auto 24px;
  margin-top: -10px;
}
.crumbs a[data-v-26f12962] {
  position: relative;
  padding: 12px;
  opacity: 0.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 0 0 auto;
  min-width: 0px;
  max-width: 200px;
}
.crumbs a[data-v-26f12962]:hover {
  opacity: 0.7;
}
.crumbs a.icon-home[data-v-26f12962] {
  width: 0px;
  background-position: left center;
}
.mailbox-list[data-v-26f12962] {
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  flex: 1;
}
.mailbox-list li[data-v-26f12962] {
  display: flex;
  cursor: pointer;
}
.mailbox-list li[data-v-26f12962]:hover {
  background-color: var(--color-background-hover);
}
.mailbox-list li[data-v-26f12962]:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
}
.mailbox-list h2[data-v-26f12962] {
  width: 100%;
  color: var(--color-text-maxcontrast);
  text-align: center;
  margin-top: 80px;
  opacity: 0.4;
  background-size: 64px;
  height: 64px;
}
.mailbox-list .mailbox-icon[data-v-26f12962] {
  width: 24px;
  height: 24px;
  padding: 14px;
  opacity: 0.9;
  background-size: 24px;
}
.mailbox-list .mailbox-title[data-v-26f12962] {
  padding: 14px 14px 14px 0;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.buttons[data-v-26f12962] {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}
.buttons .spinner[data-v-26f12962] {
  margin-right: 5px;
}
.material-design-icon[data-v-26f12962] {
  opacity: 0.7;
  margin-right: 6px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes rotation-81440b78 {
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(-360deg);
}
}
.outbox[data-v-81440b78] {
  padding: calc(var(--default-grid-baseline, 4px) * 2);
  padding-bottom: 0;
  width: auto;
}
.outbox__border[data-v-81440b78] {
  border-top: 1px solid var(--color-background-darker);
}
.mail-settings[data-v-81440b78] {
  padding: calc(var(--default-grid-baseline, 4px) * 2);
  padding-top: 0;
}
.mail-settings__button[data-v-81440b78] {
  display: flex;
  width: 100% !important;
  justify-content: start !important;
}
.v-popper__inner[data-v-81440b78] {
  height: unset !important;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dialog__actions {
  flex-wrap: wrap;
}
.dialog__actions > button {
  flex: 1 auto;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-v-cd93b780] .app-navigation-entry__title {
  color: var(--color-text-maxcontrast);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.counter-bubble__counter[data-v-11816800] {
  max-width: initial;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.navigation-outbox__unread-counter[data-v-e145babe] {
  margin-right: calc(var(--default-grid-baseline) * 2);
}
.outbox-opacity-icon[data-v-e145babe] {
  opacity: 0.7;
}
.outbox-opacity-icon[data-v-e145babe]:hover {
  opacity: 1;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header[data-v-0a4fb114] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(var(--default-grid-baseline, 4px) * 2);
  gap: 4px;
}
.refresh__button[data-v-0a4fb114] {
  background-color: transparent;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button-vue[data-v-2c3682d2]  {
  display: inline-block !important;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.empty-content[data-v-aaa40996] {
  height: 100%;
  display: flex;
}
.certificate-modal[data-v-aaa40996] {
  padding: 20px;
}
.certificate-modal__list table[data-v-aaa40996] {
  table-layout: fixed;
  width: 100%;
}
.certificate-modal__list table th[data-v-aaa40996] {
  color: var(--color-text-maxcontrast);
}
.certificate-modal__list table th[data-v-aaa40996], .certificate-modal__list table td[data-v-aaa40996] {
  padding: 2.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 5 1 0px;
}
.certificate-modal__list table th[data-v-aaa40996]:last-child, .certificate-modal__list table td[data-v-aaa40996]:last-child {
  flex: 1 1 0px;
}
.certificate-modal__list table span[data-v-aaa40996] {
  text-overflow: ellipsis;
}
.certificate-modal__list table tr[data-v-aaa40996] {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.certificate-modal__list table tr[data-v-aaa40996]:hover {
  background-color: unset;
}
.certificate-modal__list__actions[data-v-aaa40996] {
  margin: 12px;
  float: right;
}
.certificate-modal__import[data-v-aaa40996] {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.certificate-modal__import input[type=file][data-v-aaa40996] {
  display: flex;
  width: 100%;
}
.certificate-modal__import__type[data-v-aaa40996] {
  display: flex;
  gap: 0 20px;
  flex-wrap: wrap;
}
.certificate-modal__import__type > div[data-v-aaa40996] {
  display: flex;
  gap: 5px;
  align-items: center;
}
.certificate-modal__import__hints[data-v-aaa40996] {
  color: var(--color-text-maxcontrast);
}
.certificate-modal__import__actions[data-v-aaa40996] {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_style_index_0_id_16724163_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_style_index_0_id_16724163_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_style_index_0_id_16724163_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_style_index_0_id_16724163_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_style_index_0_id_16724163_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_style_index_0_id_14bd04f7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_style_index_0_id_14bd04f7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_style_index_0_id_14bd04f7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_style_index_0_id_14bd04f7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_style_index_0_id_14bd04f7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_style_index_0_id_26f12962_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_style_index_0_id_26f12962_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_style_index_0_id_26f12962_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_style_index_0_id_26f12962_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_style_index_0_id_26f12962_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_style_index_0_id_aee3f60e_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_style_index_0_id_aee3f60e_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_style_index_0_id_aee3f60e_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_style_index_0_id_aee3f60e_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_style_index_0_id_aee3f60e_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_style_index_0_id_cd93b780_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_style_index_0_id_cd93b780_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_style_index_0_id_cd93b780_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_style_index_0_id_cd93b780_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_style_index_0_id_cd93b780_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_style_index_0_id_11816800_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_style_index_0_id_11816800_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_style_index_0_id_11816800_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_style_index_0_id_11816800_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_style_index_0_id_11816800_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_style_index_0_id_e145babe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_style_index_0_id_e145babe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_style_index_0_id_e145babe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_style_index_0_id_e145babe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_style_index_0_id_e145babe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_style_index_0_id_0a4fb114_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_style_index_0_id_0a4fb114_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_style_index_0_id_0a4fb114_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_style_index_0_id_0a4fb114_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_style_index_0_id_0a4fb114_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_style_index_0_id_2c3682d2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_style_index_0_id_2c3682d2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_style_index_0_id_2c3682d2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_style_index_0_id_2c3682d2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_style_index_0_id_2c3682d2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_style_index_0_id_aaa40996_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_style_index_0_id_aaa40996_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_style_index_0_id_aaa40996_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_style_index_0_id_aaa40996_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_style_index_0_id_aaa40996_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/AppSettingsMenu.vue":
/*!********************************************!*\
  !*** ./src/components/AppSettingsMenu.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppSettingsMenu_vue_vue_type_template_id_16724163_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSettingsMenu.vue?vue&type=template&id=16724163&scoped=true */ "./src/components/AppSettingsMenu.vue?vue&type=template&id=16724163&scoped=true");
/* harmony import */ var _AppSettingsMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSettingsMenu.vue?vue&type=script&lang=js */ "./src/components/AppSettingsMenu.vue?vue&type=script&lang=js");
/* harmony import */ var _AppSettingsMenu_vue_vue_type_style_index_0_id_16724163_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true */ "./src/components/AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppSettingsMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppSettingsMenu_vue_vue_type_template_id_16724163_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AppSettingsMenu_vue_vue_type_template_id_16724163_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "16724163",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/AppSettingsMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/InternalAddress.vue":
/*!********************************************!*\
  !*** ./src/components/InternalAddress.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InternalAddress_vue_vue_type_template_id_14bd04f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InternalAddress.vue?vue&type=template&id=14bd04f7&scoped=true */ "./src/components/InternalAddress.vue?vue&type=template&id=14bd04f7&scoped=true");
/* harmony import */ var _InternalAddress_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InternalAddress.vue?vue&type=script&lang=js */ "./src/components/InternalAddress.vue?vue&type=script&lang=js");
/* harmony import */ var _InternalAddress_vue_vue_type_style_index_0_id_14bd04f7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true */ "./src/components/InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InternalAddress_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _InternalAddress_vue_vue_type_template_id_14bd04f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _InternalAddress_vue_vue_type_template_id_14bd04f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "14bd04f7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/InternalAddress.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/MailboxPicker.vue":
/*!******************************************!*\
  !*** ./src/components/MailboxPicker.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MailboxPicker_vue_vue_type_template_id_26f12962_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailboxPicker.vue?vue&type=template&id=26f12962&scoped=true */ "./src/components/MailboxPicker.vue?vue&type=template&id=26f12962&scoped=true");
/* harmony import */ var _MailboxPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailboxPicker.vue?vue&type=script&lang=js */ "./src/components/MailboxPicker.vue?vue&type=script&lang=js");
/* harmony import */ var _MailboxPicker_vue_vue_type_style_index_0_id_26f12962_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true */ "./src/components/MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MailboxPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailboxPicker_vue_vue_type_template_id_26f12962_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _MailboxPicker_vue_vue_type_template_id_26f12962_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "26f12962",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MailboxPicker.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/MoveMailboxModal.vue":
/*!*********************************************!*\
  !*** ./src/components/MoveMailboxModal.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MoveMailboxModal_vue_vue_type_template_id_4260c3fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoveMailboxModal.vue?vue&type=template&id=4260c3fa */ "./src/components/MoveMailboxModal.vue?vue&type=template&id=4260c3fa");
/* harmony import */ var _MoveMailboxModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoveMailboxModal.vue?vue&type=script&lang=js */ "./src/components/MoveMailboxModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MoveMailboxModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MoveMailboxModal_vue_vue_type_template_id_4260c3fa__WEBPACK_IMPORTED_MODULE_0__.render,
  _MoveMailboxModal_vue_vue_type_template_id_4260c3fa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MoveMailboxModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Navigation.vue":
/*!***************************************!*\
  !*** ./src/components/Navigation.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_81440b78_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=81440b78&scoped=true */ "./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js */ "./src/components/Navigation.vue?vue&type=script&lang=js");
/* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true */ "./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_81440b78_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_81440b78_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "81440b78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/NavigationAccount.vue":
/*!**********************************************!*\
  !*** ./src/components/NavigationAccount.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationAccount_vue_vue_type_template_id_aee3f60e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationAccount.vue?vue&type=template&id=aee3f60e */ "./src/components/NavigationAccount.vue?vue&type=template&id=aee3f60e");
/* harmony import */ var _NavigationAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationAccount.vue?vue&type=script&lang=js */ "./src/components/NavigationAccount.vue?vue&type=script&lang=js");
/* harmony import */ var _NavigationAccount_vue_vue_type_style_index_0_id_aee3f60e_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss */ "./src/components/NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavigationAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationAccount_vue_vue_type_template_id_aee3f60e__WEBPACK_IMPORTED_MODULE_0__.render,
  _NavigationAccount_vue_vue_type_template_id_aee3f60e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NavigationAccount.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/NavigationAccountExpandCollapse.vue":
/*!************************************************************!*\
  !*** ./src/components/NavigationAccountExpandCollapse.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationAccountExpandCollapse_vue_vue_type_template_id_cd93b780_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationAccountExpandCollapse.vue?vue&type=template&id=cd93b780&scoped=true */ "./src/components/NavigationAccountExpandCollapse.vue?vue&type=template&id=cd93b780&scoped=true");
/* harmony import */ var _NavigationAccountExpandCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationAccountExpandCollapse.vue?vue&type=script&lang=js */ "./src/components/NavigationAccountExpandCollapse.vue?vue&type=script&lang=js");
/* harmony import */ var _NavigationAccountExpandCollapse_vue_vue_type_style_index_0_id_cd93b780_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true */ "./src/components/NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavigationAccountExpandCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationAccountExpandCollapse_vue_vue_type_template_id_cd93b780_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NavigationAccountExpandCollapse_vue_vue_type_template_id_cd93b780_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cd93b780",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NavigationAccountExpandCollapse.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/NavigationMailbox.vue":
/*!**********************************************!*\
  !*** ./src/components/NavigationMailbox.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationMailbox_vue_vue_type_template_id_11816800_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationMailbox.vue?vue&type=template&id=11816800&scoped=true */ "./src/components/NavigationMailbox.vue?vue&type=template&id=11816800&scoped=true");
/* harmony import */ var _NavigationMailbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationMailbox.vue?vue&type=script&lang=js */ "./src/components/NavigationMailbox.vue?vue&type=script&lang=js");
/* harmony import */ var _NavigationMailbox_vue_vue_type_style_index_0_id_11816800_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true */ "./src/components/NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavigationMailbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationMailbox_vue_vue_type_template_id_11816800_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NavigationMailbox_vue_vue_type_template_id_11816800_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11816800",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NavigationMailbox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/NavigationOutbox.vue":
/*!*********************************************!*\
  !*** ./src/components/NavigationOutbox.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavigationOutbox_vue_vue_type_template_id_e145babe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationOutbox.vue?vue&type=template&id=e145babe&scoped=true */ "./src/components/NavigationOutbox.vue?vue&type=template&id=e145babe&scoped=true");
/* harmony import */ var _NavigationOutbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationOutbox.vue?vue&type=script&lang=js */ "./src/components/NavigationOutbox.vue?vue&type=script&lang=js");
/* harmony import */ var _NavigationOutbox_vue_vue_type_style_index_0_id_e145babe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true */ "./src/components/NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavigationOutbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationOutbox_vue_vue_type_template_id_e145babe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NavigationOutbox_vue_vue_type_template_id_e145babe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e145babe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NavigationOutbox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/NewMessageButtonHeader.vue":
/*!***************************************************!*\
  !*** ./src/components/NewMessageButtonHeader.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewMessageButtonHeader_vue_vue_type_template_id_0a4fb114_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewMessageButtonHeader.vue?vue&type=template&id=0a4fb114&scoped=true */ "./src/components/NewMessageButtonHeader.vue?vue&type=template&id=0a4fb114&scoped=true");
/* harmony import */ var _NewMessageButtonHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewMessageButtonHeader.vue?vue&type=script&lang=js */ "./src/components/NewMessageButtonHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _NewMessageButtonHeader_vue_vue_type_style_index_0_id_0a4fb114_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true */ "./src/components/NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewMessageButtonHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewMessageButtonHeader_vue_vue_type_template_id_0a4fb114_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NewMessageButtonHeader_vue_vue_type_template_id_0a4fb114_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0a4fb114",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NewMessageButtonHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/TrustedSenders.vue":
/*!*******************************************!*\
  !*** ./src/components/TrustedSenders.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TrustedSenders_vue_vue_type_template_id_2c3682d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrustedSenders.vue?vue&type=template&id=2c3682d2&scoped=true */ "./src/components/TrustedSenders.vue?vue&type=template&id=2c3682d2&scoped=true");
/* harmony import */ var _TrustedSenders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrustedSenders.vue?vue&type=script&lang=js */ "./src/components/TrustedSenders.vue?vue&type=script&lang=js");
/* harmony import */ var _TrustedSenders_vue_vue_type_style_index_0_id_2c3682d2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true */ "./src/components/TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TrustedSenders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrustedSenders_vue_vue_type_template_id_2c3682d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _TrustedSenders_vue_vue_type_template_id_2c3682d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c3682d2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TrustedSenders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/icons/ImportantIcon.vue":
/*!************************************************!*\
  !*** ./src/components/icons/ImportantIcon.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImportantIcon_vue_vue_type_template_id_c13336f4_functional_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImportantIcon.vue?vue&type=template&id=c13336f4&functional=true */ "./src/components/icons/ImportantIcon.vue?vue&type=template&id=c13336f4&functional=true");
/* harmony import */ var _ImportantIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportantIcon.vue?vue&type=script&lang=js */ "./src/components/icons/ImportantIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImportantIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImportantIcon_vue_vue_type_template_id_c13336f4_functional_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ImportantIcon_vue_vue_type_template_id_c13336f4_functional_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/icons/ImportantIcon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/icons/MailIcon.vue":
/*!*******************************************!*\
  !*** ./src/components/icons/MailIcon.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MailIcon_vue_vue_type_template_id_682b0c56_functional_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailIcon.vue?vue&type=template&id=682b0c56&functional=true */ "./src/components/icons/MailIcon.vue?vue&type=template&id=682b0c56&functional=true");
/* harmony import */ var _MailIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailIcon.vue?vue&type=script&lang=js */ "./src/components/icons/MailIcon.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MailIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailIcon_vue_vue_type_template_id_682b0c56_functional_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _MailIcon_vue_vue_type_template_id_682b0c56_functional_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/icons/MailIcon.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/smime/SmimeCertificateModal.vue":
/*!********************************************************!*\
  !*** ./src/components/smime/SmimeCertificateModal.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SmimeCertificateModal_vue_vue_type_template_id_aaa40996_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SmimeCertificateModal.vue?vue&type=template&id=aaa40996&scoped=true */ "./src/components/smime/SmimeCertificateModal.vue?vue&type=template&id=aaa40996&scoped=true");
/* harmony import */ var _SmimeCertificateModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmimeCertificateModal.vue?vue&type=script&lang=js */ "./src/components/smime/SmimeCertificateModal.vue?vue&type=script&lang=js");
/* harmony import */ var _SmimeCertificateModal_vue_vue_type_style_index_0_id_aaa40996_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true */ "./src/components/smime/SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SmimeCertificateModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SmimeCertificateModal_vue_vue_type_template_id_aaa40996_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SmimeCertificateModal_vue_vue_type_template_id_aaa40996_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "aaa40996",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/smime/SmimeCertificateModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/AppSettingsMenu.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/components/AppSettingsMenu.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppSettingsMenu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/InternalAddress.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/components/InternalAddress.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InternalAddress.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MailboxPicker.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/MailboxPicker.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailboxPicker.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MoveMailboxModal.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/MoveMailboxModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoveMailboxModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MoveMailboxModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MoveMailboxModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MoveMailboxModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Navigation.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/Navigation.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/NavigationAccount.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/NavigationAccount.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationAccount.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/NavigationAccountExpandCollapse.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./src/components/NavigationAccountExpandCollapse.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationAccountExpandCollapse.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/NavigationMailbox.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/NavigationMailbox.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationMailbox.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/NavigationOutbox.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/NavigationOutbox.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationOutbox.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/NewMessageButtonHeader.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/components/NewMessageButtonHeader.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMessageButtonHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TrustedSenders.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/TrustedSenders.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TrustedSenders.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/icons/ImportantIcon.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/components/icons/ImportantIcon.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportantIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImportantIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/ImportantIcon.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportantIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/icons/MailIcon.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/icons/MailIcon.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailIcon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/MailIcon.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailIcon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/smime/SmimeCertificateModal.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./src/components/smime/SmimeCertificateModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SmimeCertificateModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/AppSettingsMenu.vue?vue&type=template&id=16724163&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/components/AppSettingsMenu.vue?vue&type=template&id=16724163&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_template_id_16724163_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_template_id_16724163_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_template_id_16724163_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppSettingsMenu.vue?vue&type=template&id=16724163&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=template&id=16724163&scoped=true");


/***/ }),

/***/ "./src/components/InternalAddress.vue?vue&type=template&id=14bd04f7&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/components/InternalAddress.vue?vue&type=template&id=14bd04f7&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_template_id_14bd04f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_template_id_14bd04f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_template_id_14bd04f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InternalAddress.vue?vue&type=template&id=14bd04f7&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=template&id=14bd04f7&scoped=true");


/***/ }),

/***/ "./src/components/MailboxPicker.vue?vue&type=template&id=26f12962&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/MailboxPicker.vue?vue&type=template&id=26f12962&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_template_id_26f12962_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_template_id_26f12962_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_template_id_26f12962_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailboxPicker.vue?vue&type=template&id=26f12962&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=template&id=26f12962&scoped=true");


/***/ }),

/***/ "./src/components/MoveMailboxModal.vue?vue&type=template&id=4260c3fa":
/*!***************************************************************************!*\
  !*** ./src/components/MoveMailboxModal.vue?vue&type=template&id=4260c3fa ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MoveMailboxModal_vue_vue_type_template_id_4260c3fa__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MoveMailboxModal_vue_vue_type_template_id_4260c3fa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MoveMailboxModal_vue_vue_type_template_id_4260c3fa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MoveMailboxModal.vue?vue&type=template&id=4260c3fa */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MoveMailboxModal.vue?vue&type=template&id=4260c3fa");


/***/ }),

/***/ "./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_81440b78_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_81440b78_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_81440b78_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=81440b78&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true");


/***/ }),

/***/ "./src/components/NavigationAccount.vue?vue&type=template&id=aee3f60e":
/*!****************************************************************************!*\
  !*** ./src/components/NavigationAccount.vue?vue&type=template&id=aee3f60e ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_template_id_aee3f60e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_template_id_aee3f60e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_template_id_aee3f60e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationAccount.vue?vue&type=template&id=aee3f60e */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=template&id=aee3f60e");


/***/ }),

/***/ "./src/components/NavigationAccountExpandCollapse.vue?vue&type=template&id=cd93b780&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./src/components/NavigationAccountExpandCollapse.vue?vue&type=template&id=cd93b780&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_template_id_cd93b780_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_template_id_cd93b780_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_template_id_cd93b780_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationAccountExpandCollapse.vue?vue&type=template&id=cd93b780&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=template&id=cd93b780&scoped=true");


/***/ }),

/***/ "./src/components/NavigationMailbox.vue?vue&type=template&id=11816800&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/components/NavigationMailbox.vue?vue&type=template&id=11816800&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_template_id_11816800_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_template_id_11816800_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_template_id_11816800_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationMailbox.vue?vue&type=template&id=11816800&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=template&id=11816800&scoped=true");


/***/ }),

/***/ "./src/components/NavigationOutbox.vue?vue&type=template&id=e145babe&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/components/NavigationOutbox.vue?vue&type=template&id=e145babe&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_template_id_e145babe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_template_id_e145babe_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_template_id_e145babe_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationOutbox.vue?vue&type=template&id=e145babe&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=template&id=e145babe&scoped=true");


/***/ }),

/***/ "./src/components/NewMessageButtonHeader.vue?vue&type=template&id=0a4fb114&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/components/NewMessageButtonHeader.vue?vue&type=template&id=0a4fb114&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_template_id_0a4fb114_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_template_id_0a4fb114_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_template_id_0a4fb114_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMessageButtonHeader.vue?vue&type=template&id=0a4fb114&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=template&id=0a4fb114&scoped=true");


/***/ }),

/***/ "./src/components/TrustedSenders.vue?vue&type=template&id=2c3682d2&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/components/TrustedSenders.vue?vue&type=template&id=2c3682d2&scoped=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_template_id_2c3682d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_template_id_2c3682d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_template_id_2c3682d2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TrustedSenders.vue?vue&type=template&id=2c3682d2&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=template&id=2c3682d2&scoped=true");


/***/ }),

/***/ "./src/components/icons/ImportantIcon.vue?vue&type=template&id=c13336f4&functional=true":
/*!**********************************************************************************************!*\
  !*** ./src/components/icons/ImportantIcon.vue?vue&type=template&id=c13336f4&functional=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportantIcon_vue_vue_type_template_id_c13336f4_functional_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportantIcon_vue_vue_type_template_id_c13336f4_functional_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportantIcon_vue_vue_type_template_id_c13336f4_functional_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImportantIcon.vue?vue&type=template&id=c13336f4&functional=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/ImportantIcon.vue?vue&type=template&id=c13336f4&functional=true");


/***/ }),

/***/ "./src/components/icons/MailIcon.vue?vue&type=template&id=682b0c56&functional=true":
/*!*****************************************************************************************!*\
  !*** ./src/components/icons/MailIcon.vue?vue&type=template&id=682b0c56&functional=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailIcon_vue_vue_type_template_id_682b0c56_functional_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailIcon_vue_vue_type_template_id_682b0c56_functional_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailIcon_vue_vue_type_template_id_682b0c56_functional_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailIcon.vue?vue&type=template&id=682b0c56&functional=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/icons/MailIcon.vue?vue&type=template&id=682b0c56&functional=true");


/***/ }),

/***/ "./src/components/smime/SmimeCertificateModal.vue?vue&type=template&id=aaa40996&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/components/smime/SmimeCertificateModal.vue?vue&type=template&id=aaa40996&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_template_id_aaa40996_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_template_id_aaa40996_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_template_id_aaa40996_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SmimeCertificateModal.vue?vue&type=template&id=aaa40996&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=template&id=aaa40996&scoped=true");


/***/ }),

/***/ "./src/components/AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/components/AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSettingsMenu_vue_vue_type_style_index_0_id_16724163_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AppSettingsMenu.vue?vue&type=style&index=0&id=16724163&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/components/InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalAddress_vue_vue_type_style_index_0_id_14bd04f7_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/InternalAddress.vue?vue&type=style&index=0&id=14bd04f7&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./src/components/MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailboxPicker_vue_vue_type_style_index_0_id_26f12962_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailboxPicker.vue?vue&type=style&index=0&id=26f12962&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true":
/*!************************************************************************************************!*\
  !*** ./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss":
/*!*******************************************************************************************!*\
  !*** ./src/components/NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccount_vue_vue_type_style_index_0_id_aee3f60e_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccount.vue?vue&type=style&index=0&id=aee3f60e&lang=scss");


/***/ }),

/***/ "./src/components/NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./src/components/NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationAccountExpandCollapse_vue_vue_type_style_index_0_id_cd93b780_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationAccountExpandCollapse.vue?vue&type=style&index=0&id=cd93b780&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./src/components/NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationMailbox_vue_vue_type_style_index_0_id_11816800_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationMailbox.vue?vue&type=style&index=0&id=11816800&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./src/components/NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationOutbox_vue_vue_type_style_index_0_id_e145babe_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NavigationOutbox.vue?vue&type=style&index=0&id=e145babe&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./src/components/NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageButtonHeader_vue_vue_type_style_index_0_id_0a4fb114_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageButtonHeader.vue?vue&type=style&index=0&id=0a4fb114&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/components/TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TrustedSenders_vue_vue_type_style_index_0_id_2c3682d2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TrustedSenders.vue?vue&type=style&index=0&id=2c3682d2&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/smime/SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/smime/SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SmimeCertificateModal_vue_vue_type_style_index_0_id_aaa40996_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/smime/SmimeCertificateModal.vue?vue&type=style&index=0&id=aaa40996&lang=scss&scoped=true");


/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M15.4%2016.6L10.8%2012l4.6-4.6L14%206l-6%206%206%206%201.4-1.4z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M18.4%207.4L17%206l-6%206%206%206%201.4-1.4-4.6-4.6%204.6-4.6m-6%200L11%206l-6%206%206%206%201.4-1.4L7.8%2012l4.6-4.6z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M5.6%207.4L7%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6m6%200L13%206l6%206-6%206-1.4-1.4%204.6-4.6-4.6-4.6z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3c%21--%20-%20SPDX-FileCopyrightText:%202020%20Google%20Inc.%20-%20SPDX-License-Identifier:%20Apache-2.0%20--%3e%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2724%27%20height=%2724%27%20fill=%27%23222%27%3e%3cpath%20d=%27M8.6%2016.6l4.6-4.6-4.6-4.6L10%206l6%206-6%206-1.4-1.4z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "?b254":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=mail.src_components_Navigation_vue-src_components_icons_MailIcon_vue-data_image_svg_xml_3c_21--_20-128a06.5d7e35b9ccdce9cd43b6.js.map