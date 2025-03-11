"use strict";
(self["webpackChunknextcloud_mail"] = self["webpackChunknextcloud_mail"] || []).push([["new-message-modal"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_fp_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/fp/debounce.js */ "./node_modules/lodash/fp/debounce.js");
/* harmony import */ var lodash_fp_debounce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_debounce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_fp_uniqBy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp/uniqBy.js */ "./node_modules/lodash/fp/uniqBy.js");
/* harmony import */ var lodash_fp_uniqBy_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_uniqBy_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp/trimCharsStart.js */ "./node_modules/lodash/fp/trimCharsStart.js");
/* harmony import */ var lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-autosize */ "./node_modules/vue-autosize/src/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debounce-promise */ "./node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_ChevronLeft_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-material-design-icons/ChevronLeft.vue */ "./node_modules/vue-material-design-icons/ChevronLeft.vue");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var _ComposerAttachments_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ComposerAttachments.vue */ "./src/components/ComposerAttachments.vue");
/* harmony import */ var vue_material_design_icons_Download_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-material-design-icons/Download.vue */ "./node_modules/vue-material-design-icons/Download.vue");
/* harmony import */ var vue_material_design_icons_Upload_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-material-design-icons/Upload.vue */ "./node_modules/vue-material-design-icons/Upload.vue");
/* harmony import */ var vue_material_design_icons_Folder_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-material-design-icons/Folder.vue */ "./node_modules/vue-material-design-icons/Folder.vue");
/* harmony import */ var vue_material_design_icons_Link_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-material-design-icons/Link.vue */ "./node_modules/vue-material-design-icons/Link.vue");
/* harmony import */ var vue_material_design_icons_Shape_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-material-design-icons/Shape.vue */ "./node_modules/vue-material-design-icons/Shape.vue");
/* harmony import */ var _RecipientListItem_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RecipientListItem.vue */ "./src/components/RecipientListItem.vue");
/* harmony import */ var vue_material_design_icons_Paperclip_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-material-design-icons/Paperclip.vue */ "./node_modules/vue-material-design-icons/Paperclip.vue");
/* harmony import */ var vue_material_design_icons_FormatSize_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-material-design-icons/FormatSize.vue */ "./node_modules/vue-material-design-icons/FormatSize.vue");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.mjs");
/* harmony import */ var _service_AutocompleteService_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../service/AutocompleteService.js */ "./src/service/AutocompleteService.js");
/* harmony import */ var _util_text_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../util/text.js */ "./src/util/text.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _TextEditor_vue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./TextEditor.vue */ "./src/components/TextEditor.vue");
/* harmony import */ var _ReplyBuilder_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../ReplyBuilder.js */ "./src/ReplyBuilder.js");
/* harmony import */ var _MailvelopeEditor_vue__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./MailvelopeEditor.vue */ "./src/components/MailvelopeEditor.vue");
/* harmony import */ var _crypto_mailvelope_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../crypto/mailvelope.js */ "./src/crypto/mailvelope.js");
/* harmony import */ var _crypto_pgp_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../crypto/pgp.js */ "./src/crypto/pgp.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcRichText_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcRichText.js */ "./node_modules/@nextcloud/vue/dist/Components/NcRichText.mjs");
/* harmony import */ var vue_material_design_icons_Send_vue__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! vue-material-design-icons/Send.vue */ "./node_modules/vue-material-design-icons/Send.vue");
/* harmony import */ var vue_material_design_icons_SendClock_vue__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! vue-material-design-icons/SendClock.vue */ "./node_modules/vue-material-design-icons/SendClock.vue");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.mjs");
/* harmony import */ var _ckeditor_signature_InsertSignatureCommand_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../ckeditor/signature/InsertSignatureCommand.js */ "./src/ckeditor/signature/InsertSignatureCommand.js");
/* harmony import */ var _store_constants_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../store/constants.js */ "./src/store/constants.js");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





































const debouncedSearch = debounce_promise__WEBPACK_IMPORTED_MODULE_4___default()(_service_AutocompleteService_js__WEBPACK_IMPORTED_MODULE_20__.findRecipient, 500);
const NO_ALIAS_SET = -1;
vue__WEBPACK_IMPORTED_MODULE_35__["default"].use(vue_autosize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Composer',
  components: {
    MailvelopeEditor: _MailvelopeEditor_vue__WEBPACK_IMPORTED_MODULE_25__["default"],
    Actions: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_5__.NcActions,
    ActionButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_5__.NcActionButton,
    ActionCheckbox: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_5__.NcActionCheckbox,
    ActionInput: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_5__.NcActionInput,
    ActionRadio: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_5__.NcActionRadio,
    ButtonVue: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_5__.NcButton,
    ComposerAttachments: _ComposerAttachments_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    ChevronLeft: vue_material_design_icons_ChevronLeft_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    Delete: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Download: vue_material_design_icons_Download_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    IconUpload: vue_material_design_icons_Upload_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    IconFolder: vue_material_design_icons_Folder_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    IconPublic: vue_material_design_icons_Link_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    IconLinkPicker: vue_material_design_icons_Shape_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    NcSelect: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_5__.NcSelect,
    Paperclip: vue_material_design_icons_Paperclip_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    TextEditor: _TextEditor_vue__WEBPACK_IMPORTED_MODULE_23__["default"],
    ListItemIcon: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_5__.NcListItemIcon,
    RecipientListItem: _RecipientListItem_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    Send: vue_material_design_icons_Send_vue__WEBPACK_IMPORTED_MODULE_29__["default"],
    SendClock: vue_material_design_icons_SendClock_vue__WEBPACK_IMPORTED_MODULE_30__["default"],
    IconFormat: vue_material_design_icons_FormatSize_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    NcReferencePickerModal: _nextcloud_vue_dist_Components_NcRichText_js__WEBPACK_IMPORTED_MODULE_28__.NcReferencePickerModal
  },
  props: {
    fromAccount: {
      type: Number,
      default: () => undefined
    },
    fromAlias: {
      type: Number,
      default: undefined
    },
    to: {
      type: Array,
      default: () => []
    },
    cc: {
      type: Array,
      default: () => []
    },
    bcc: {
      type: Array,
      default: () => []
    },
    subject: {
      type: String,
      default: ''
    },
    body: {
      type: Object,
      default: () => (0,_util_text_js__WEBPACK_IMPORTED_MODULE_21__.html)('')
    },
    editorBody: {
      type: String,
      default: ''
    },
    inReplyToMessageId: {
      type: String,
      default: undefined
    },
    replyTo: {
      type: Object,
      required: false,
      default: () => undefined
    },
    forwardFrom: {
      type: Object,
      required: false,
      default: () => undefined
    },
    forwardedMessages: {
      type: Array,
      required: false,
      default: () => []
    },
    smartReply: {
      type: String,
      required: false,
      default: undefined
    },
    sendAt: {
      type: Number,
      default: undefined
    },
    attachmentsData: {
      type: Array,
      default: () => []
    },
    error: {
      type: String,
      default: undefined
    },
    canSaveDraft: {
      type: Boolean,
      default: false
    },
    uploadingAttachments: {
      type: Boolean,
      default: false
    },
    savingDraft: {
      type: Boolean,
      default: false
    },
    draftSaved: {
      type: Boolean,
      default: false
    },
    smimeSign: {
      type: Boolean,
      default: false
    },
    smimeEncrypt: {
      type: Boolean,
      default: false
    },
    isFirstOpen: {
      type: Boolean,
      required: true
    },
    requestMdn: {
      type: Boolean,
      default: false
    },
    accounts: {
      type: Array,
      required: true
    }
  },
  data() {
    var _this$body;
    // Set default custom date time picker value to now + 1 hour
    const selectedDate = new Date();
    selectedDate.setHours(selectedDate.getHours() + 1);
    return {
      showCC: this.cc.length > 0,
      showBCC: this.bcc.length > 0,
      selectedAlias: NO_ALIAS_SET,
      // Fixed in `beforeMount`
      autocompleteRecipients: this.to.concat(this.cc).concat(this.bcc),
      newRecipients: [],
      subjectVal: this.subject,
      bodyVal: this.editorBody,
      attachments: this.attachmentsData,
      noReply: this.to.some(to => {
        var _to$email, _to$email2;
        return ((_to$email = to.email) === null || _to$email === void 0 ? void 0 : _to$email.startsWith('noreply@')) || ((_to$email2 = to.email) === null || _to$email2 === void 0 ? void 0 : _to$email2.startsWith('no-reply@'));
      }),
      saveDraftDebounced: lodash_fp_debounce_js__WEBPACK_IMPORTED_MODULE_0___default()(5 * 1000, this.saveDraft),
      selectTo: this.to,
      selectCc: this.cc,
      selectBcc: this.bcc,
      bus: (0,mitt__WEBPACK_IMPORTED_MODULE_19__["default"])(),
      encrypt: false,
      mailvelope: {
        available: false,
        keyRing: undefined,
        keysMissing: []
      },
      editorMode: ((_this$body = this.body) === null || _this$body === void 0 ? void 0 : _this$body.format) !== 'html' ? _store_constants_js__WEBPACK_IMPORTED_MODULE_33__.EDITOR_MODE_TEXT : _store_constants_js__WEBPACK_IMPORTED_MODULE_33__.EDITOR_MODE_HTML,
      requestMdnVal: this.requestMdn,
      changeSignature: false,
      loadingIndicatorTo: false,
      loadingIndicatorCc: false,
      loadingIndicatorBcc: false,
      isAddAttachmentsOpen: false,
      isActionsOpen: false,
      isMoreActionsOpen: false,
      selectedDate,
      sendAtVal: this.sendAt,
      firstDayDatetimePicker: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.getFirstDay)() === 0 ? 7 : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.getFirstDay)(),
      formatter: {
        stringify: date => {
          return date ? (0,_nextcloud_moment__WEBPACK_IMPORTED_MODULE_31__["default"])(date).format('LLL') : '';
        },
        parse: value => {
          return value ? (0,_nextcloud_moment__WEBPACK_IMPORTED_MODULE_31__["default"])(value, 'LLL').toDate() : null;
        }
      },
      autoLimit: true,
      wantsSmimeSign: this.smimeSign,
      wantsSmimeEncrypt: this.smimeEncrypt,
      isPickerOpen: false,
      recipientSearchTerms: {}
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_36__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_34__["default"])), (0,pinia__WEBPACK_IMPORTED_MODULE_36__.mapState)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_34__["default"], ['isScheduledSendingDisabled'])), {}, {
    isPickerAvailable() {
      return parseInt(this.mainStore.getNcVersion) >= 26;
    },
    aliases() {
      let cnt = 0;
      const accounts = this.accounts.filter(a => !a.isUnified);
      const aliases = accounts.flatMap(account => [{
        id: account.id,
        aliasId: null,
        selectId: cnt++,
        editorMode: account.editorMode,
        signature: account.signature,
        name: account.name,
        emailAddress: account.emailAddress,
        signatureAboveQuote: account.signatureAboveQuote,
        smimeCertificateId: account.smimeCertificateId,
        selectable: account.connectionStatus
      }, account.aliases.map(alias => {
        return {
          id: account.id,
          aliasId: alias.id,
          selectId: cnt++,
          editorMode: account.editorMode,
          signature: alias.signature,
          name: alias.name,
          emailAddress: alias.alias,
          signatureAboveQuote: account.signatureAboveQuote,
          smimeCertificateId: alias.smimeCertificateId,
          selectable: account.connectionStatus
        };
      })]);
      return aliases.flat();
    },
    allRecipients() {
      return this.selectTo.concat(this.selectCc).concat(this.selectBcc);
    },
    dateToday() {
      return new Date(new Date().setDate(new Date().getDate()));
    },
    attachmentSizeLimit() {
      return this.mainStore.getPreference('attachment-size-limit');
    },
    selectableRecipients() {
      return lodash_fp_uniqBy_js__WEBPACK_IMPORTED_MODULE_1___default()('email')(this.newRecipients.concat(this.autocompleteRecipients).map(recipient => _objectSpread(_objectSpread({}, recipient), {}, {
        label: recipient.label || recipient.email
      })));
    },
    isForward() {
      return this.forwardFrom !== undefined;
    },
    isReply() {
      return this.replyTo !== undefined;
    },
    canSend() {
      if (this.wantsSmimeEncrypt && (!this.smimeCertificateForCurrentAlias || this.missingSmimeCertificatesForRecipients.length)) {
        return false;
      }
      if (this.encrypt && this.mailvelope.keysMissing.length) {
        return false;
      }
      return this.selectTo.length > 0 || this.selectCc.length > 0 || this.selectBcc.length > 0;
    },
    editorPlainText() {
      return this.editorMode === _store_constants_js__WEBPACK_IMPORTED_MODULE_33__.EDITOR_MODE_TEXT;
    },
    submitButtonTitle() {
      if (this.wantsSmimeEncrypt) {
        if (this.sendAtVal) {
          return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Encrypt with S/MIME and send later') + " ".concat(this.convertToLocalDate(this.sendAtVal));
        }
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Encrypt with S/MIME and send');
      }
      if (this.mailvelope.available && this.encrypt) {
        if (this.sendAtVal) {
          return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Encrypt with Mailvelope and send later') + " ".concat(this.convertToLocalDate(this.sendAtVal));
        }
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Encrypt with Mailvelope and send');
      }
      if (this.sendAtVal) {
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Send later') + " ".concat(this.convertToLocalDate(this.sendAtVal));
      }
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Send');
    },
    dateTomorrowMorning() {
      const today = new Date();
      today.setTime(today.getTime() + 24 * 60 * 60 * 1000);
      return today.setHours(9, 0, 0, 0);
    },
    dateTomorrowAfternoon() {
      const today = new Date();
      today.setTime(today.getTime() + 24 * 60 * 60 * 1000);
      return today.setHours(14, 0, 0, 0);
    },
    dateMondayMorning() {
      const today = new Date();
      today.setHours(9, 0, 0, 0);
      return today.setDate(today.getDate() + (7 - today.getDay()) % 7 + 1);
    },
    customSendTime() {
      return new Date(this.selectedDate).getTime();
    },
    showAmPm() {
      const localeData = (0,_nextcloud_moment__WEBPACK_IMPORTED_MODULE_31__["default"])().locale((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.getLocale)()).localeData();
      const timeFormat = localeData.longDateFormat('LT').toLowerCase();
      return timeFormat.indexOf('a') !== -1;
    },
    isSendAtTomorrowMorning() {
      if (this.sendAtVal && Math.floor(this.dateTomorrowMorning / 1000) === Math.floor(this.sendAtVal / 1000)) {
        return true;
      } else {
        return false;
      }
    },
    isSendAtTomorrowAfternoon() {
      if (this.sendAtVal && Math.floor(this.dateTomorrowAfternoon / 1000) === Math.floor(this.sendAtVal / 1000)) {
        return true;
      } else {
        return false;
      }
    },
    isSendAtMondayMorning() {
      if (this.sendAtVal && Math.floor(this.dateMondayMorning / 1000) === Math.floor(this.sendAtVal / 1000)) {
        return true;
      } else {
        return false;
      }
    },
    isSendAtCustom() {
      if (this.sendAtVal && !this.isSendAtTomorrowMorning && !this.isSendAtTomorrowAfternoon && !this.isSendAtMondayMorning) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * The S/MIME certificate object of the current alias/account.
     *
     * @return {object|undefined} S/MIME certificate of current account or alias if one is selected
     */
    smimeCertificateForCurrentAlias() {
      if (this.selectedAlias === NO_ALIAS_SET) {
        return undefined;
      }
      return this.smimeCertificateForAlias(this.selectedAlias);
    },
    /**
     * Whether the outgoing message should be signed with S/MIME.
     *
     * @return {boolean} True if the message should be signed
     */
    shouldSmimeSign() {
      return this.wantsSmimeSign && !!this.smimeCertificateForCurrentAlias;
    },
    /**
     * Whether the outgoing message should be encrypted with S/MIME.
     *
     * @return {boolean} True if the message should be encrypted
     */
    shouldSmimeEncrypt() {
      return this.wantsSmimeEncrypt && !!this.smimeCertificateForCurrentAlias && this.missingSmimeCertificatesForRecipients.length === 0;
    },
    /**
     * Return a list of recipients without a matching S/MIME certificate.
     *
     * @return {Array} Recipients without matching certificate
     */
    missingSmimeCertificatesForRecipients() {
      const missingCertificates = [];
      this.allRecipients.forEach(recipient => {
        const recipientCertificate = this.mainStore.getSmimeCertificateByEmail(recipient.email);
        if (!recipientCertificate) {
          missingCertificates.push(recipient.email);
        }
      });
      return missingCertificates;
    }
  }),
  watch: {
    '$route.params.threadId'() {
      this.reset();
    },
    allRecipients() {
      this.checkRecipientsKeys();
    },
    aliases(newAliases) {
      console.debug('aliases changed');
      if (this.selectedAlias === NO_ALIAS_SET) {
        return;
      }
      const newAlias = newAliases.find(alias => alias.id === this.selectedAlias.id && alias.aliasId === this.selectedAlias.aliasId);
      if (newAlias === undefined) {
        // selected alias does not exist anymore.
        this.onAliasChange(newAliases[0]);
      } else {
        // update the selected alias
        this.onAliasChange(newAlias);
      }
    },
    selectTo(val) {
      this.$emit('update:to', val);
    },
    selectCc(val) {
      this.$emit('update:cc', val);
    },
    selectBcc(val) {
      this.$emit('update:bcc', val);
    },
    subjectVal(val) {
      this.$emit('update:subject', val);
    },
    bodyVal(val) {
      this.$emit('update:editor-body', val);
    },
    attachments(val) {
      this.$emit('update:attachments-data', val);
    },
    sendAtVal(val) {
      this.$emit('update:send-at', val);
    },
    wantsSmimeSign(val) {
      this.$emit('update:smime-sign', val);
    },
    wantsSmimeEncrypt(val) {
      this.$emit('update:smime-encrypt', val);
    },
    requestMdnVal(val) {
      this.$emit('update:request-mdn', val);
    }
  },
  async beforeMount() {
    this.setAlias();
    this.initBody();
    await this.onMailvelopeLoaded(await (0,_crypto_mailvelope_js__WEBPACK_IMPORTED_MODULE_26__.getMailvelope)());
  },
  mounted() {
    var _this$forwardFrom;
    if (!this.isReply && this.isFirstOpen) {
      this.$nextTick(() => this.$refs.toLabel.$el.focus());
    }

    // Add attachments in case of forward
    if (((_this$forwardFrom = this.forwardFrom) === null || _this$forwardFrom === void 0 ? void 0 : _this$forwardFrom.attachments) !== undefined) {
      this.forwardFrom.attachments.forEach(att => {
        this.attachments.push({
          fileName: att.fileName,
          displayName: lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_2___default()('/', att.fileName),
          id: att.id,
          messageId: this.forwardFrom.databaseId,
          type: 'message-attachment'
        });
      });
    }

    // Add messages forwarded as attachments
    for (const id of this.forwardedMessages) {
      const env = this.mainStore.getEnvelope(id);
      if (!env) {
        // TODO: also happens when the composer page is reloaded
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_17__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Message {id} could not be found', {
          id
        }));
        continue;
      }
      this.bus.emit('on-add-message-as-attachment', {
        id,
        fileName: env.subject + '.eml'
      });
    }

    // Set custom date and time picker value if initialized with custom send at value
    if (this.sendAt && this.isSendAtCustom) {
      this.selectedDate = new Date(this.sendAt);
    }
  },
  beforeDestroy() {
    window.removeEventListener('mailvelope', this.onMailvelopeLoaded);
  },
  methods: {
    clearOnBlur(event) {
      if (this.recipientSearchTerms[event]) {
        return this.recipientSearchTerms[event].includes('@');
      }
      return false;
    },
    handleShow(event) {
      this.$emit('show-toolbar', event);
    },
    openPicker() {
      this.isPickerOpen = true;
    },
    closePicker() {
      this.isPickerOpen = false;
    },
    filterOption(option, label, search, list) {
      let select = [];
      if (list === 'to') {
        select = this.selectTo;
      } else if (list === 'cc') {
        select = this.selectCc;
      } else if (list === 'bcc') {
        select = this.selectBcc;
      }
      return (label || '').toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1 && !select.some(item => item.email === option.email);
    },
    setAlias() {
      const previous = this.selectedAlias;
      if (this.fromAccount && this.fromAlias) {
        this.selectedAlias = this.aliases.find(alias => {
          return alias.id === this.fromAccount && alias.aliasId === this.fromAlias;
        });
      } else if (this.fromAccount) {
        // Default alias of account: aliasId === null
        this.selectedAlias = this.aliases.find(alias => {
          return alias.id === this.fromAccount && !alias.aliasId;
        });
      } else {
        var _this$mainStore$getMa;
        const currentAccountId = (_this$mainStore$getMa = this.mainStore.getMailbox(this.$route.params.mailboxId)) === null || _this$mainStore$getMa === void 0 ? void 0 : _this$mainStore$getMa.accountId;
        if (currentAccountId) {
          this.selectedAlias = this.aliases.find(alias => {
            return alias.id === currentAccountId;
          });
        } else {
          this.selectedAlias = this.aliases[0];
        }
      }
      // Only overwrite editormode if body is empty
      if (previous === NO_ALIAS_SET && (!this.body || this.body.value === '')) {
        this.editorMode = this.selectedAlias.editorMode;
      }
    },
    async checkRecipientsKeys() {
      if (!this.encrypt || !this.mailvelope.available) {
        return;
      }
      const recipients = this.allRecipients.map(r => r.email);
      const keysValid = await this.mailvelope.keyRing.validKeyForAddress(recipients);
      _logger_js__WEBPACK_IMPORTED_MODULE_22__["default"].debug('recipients keys validated', {
        recipients,
        keysValid
      });
      this.mailvelope.keysMissing = recipients.filter(r => keysValid[r] === false);
    },
    initBody() {
      /** @member {Text} body */
      let body;
      if (this.replyTo && this.isFirstOpen) {
        body = (0,_ReplyBuilder_js__WEBPACK_IMPORTED_MODULE_24__.buildReplyBody)(this.editorPlainText ? (0,_util_text_js__WEBPACK_IMPORTED_MODULE_21__.toPlain)(this.body) : (0,_util_text_js__WEBPACK_IMPORTED_MODULE_21__.toHtml)(this.body), this.replyTo.from[0], this.replyTo.dateInt, this.mainStore.getPreference('reply-mode', 'top') === 'top').value;
      } else if (this.forwardFrom && this.isFirstOpen) {
        body = (0,_ReplyBuilder_js__WEBPACK_IMPORTED_MODULE_24__.buildReplyBody)(this.editorPlainText ? (0,_util_text_js__WEBPACK_IMPORTED_MODULE_21__.toPlain)(this.body) : (0,_util_text_js__WEBPACK_IMPORTED_MODULE_21__.toHtml)(this.body), this.forwardFrom.from[0], this.forwardFrom.dateInt, this.mainStore.getPreference('reply-mode', 'top') === 'top').value;
      } else {
        body = this.bodyVal;
      }
      this.bodyVal = (0,_util_text_js__WEBPACK_IMPORTED_MODULE_21__.html)(body).value;
    },
    getMessageData() {
      var _this$inReplyToMessag, _this$smimeCertificat;
      return {
        // TODO: Rename account to accountId
        account: this.selectedAlias.id,
        accountId: this.selectedAlias.id,
        aliasId: this.selectedAlias.aliasId,
        to: this.selectTo,
        cc: this.selectCc,
        bcc: this.selectBcc,
        subject: this.subjectVal,
        body: this.encrypt ? (0,_util_text_js__WEBPACK_IMPORTED_MODULE_21__.plain)(this.bodyVal) : (0,_util_text_js__WEBPACK_IMPORTED_MODULE_21__.html)(this.bodyVal),
        attachments: this.attachments,
        inReplyToMessageId: (_this$inReplyToMessag = this.inReplyToMessageId) !== null && _this$inReplyToMessag !== void 0 ? _this$inReplyToMessag : this.replyTo ? this.replyTo.messageId : undefined,
        isHtml: !this.encrypt && !this.editorPlainText,
        requestMdn: this.requestMdnVal,
        sendAt: this.sendAtVal ? Math.floor(this.sendAtVal / 1000) : undefined,
        smimeSign: this.shouldSmimeSign,
        smimeEncrypt: this.shouldSmimeEncrypt,
        smimeCertificateId: (_this$smimeCertificat = this.smimeCertificateForCurrentAlias) === null || _this$smimeCertificat === void 0 ? void 0 : _this$smimeCertificat.id,
        isPgpMime: this.encrypt
      };
    },
    saveDraft() {
      var _draftData$body;
      const draftData = this.getMessageData();
      if (draftData.subject === '' && ((_draftData$body = draftData.body) === null || _draftData$body === void 0 ? void 0 : _draftData$body.value) === '' && draftData.cc.length === 0 && draftData.bcc.length === 0 && draftData.to.length === 0 && draftData.sendAt === undefined) {
        // this might happen after a call to reset()
        // where the text input gets reset as well
        // and fires an input event
        _logger_js__WEBPACK_IMPORTED_MODULE_22__["default"].debug('Nothing substantial to save, ignoring draft save');
        return;
      }
      this.$emit('draft', draftData);
    },
    insertSignature() {
      let trigger;
      if (this.changeSignature) {
        trigger = _ckeditor_signature_InsertSignatureCommand_js__WEBPACK_IMPORTED_MODULE_32__.TRIGGER_CHANGE_ALIAS;
      } else {
        trigger = _ckeditor_signature_InsertSignatureCommand_js__WEBPACK_IMPORTED_MODULE_32__.TRIGGER_EDITOR_READY;
      }
      this.$refs.editor.editorExecute('insertSignature', trigger, (0,_util_text_js__WEBPACK_IMPORTED_MODULE_21__.toHtml)((0,_util_text_js__WEBPACK_IMPORTED_MODULE_21__.detect)(this.selectedAlias.signature)).value, this.selectedAlias.signatureAboveQuote);
      this.changeSignature = false;
    },
    onPicked(content) {
      this.closePicker();
      this.bus.emit('append-to-body-at-cursor', content);
    },
    onEditorInput(text) {
      this.bodyVal = text;
      this.saveDraftDebounced();
    },
    onEditorReady(editor) {
      this.bodyVal = editor.getData();
      this.insertSignature();
      if (this.smartReply) {
        this.bus.emit('append-to-body-at-cursor', this.smartReply);
      }
    },
    onChangeSendLater(value) {
      this.sendAtVal = value ? Number.parseInt(value, 10) : undefined;
    },
    convertToLocalDate(timestamp) {
      const options = {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return new Date(timestamp).toLocaleString((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.getCanonicalLocale)(), options);
    },
    onAliasChange(alias) {
      _logger_js__WEBPACK_IMPORTED_MODULE_22__["default"].debug('changed alias', {
        alias
      });
      this.selectedAlias = alias;
      this.changeSignature = true;
      this.$emit('update:from-account', alias.id);
      if (alias.aliasId) {
        this.$emit('update:from-alias', alias.aliasId);
      }
      if (this.wantsSmimeSign || this.wantsSmimeEncrypt) {
        if (!this.smimeCertificateForAlias(alias)) {
          this.wantsSmimeSign = false;
          this.wantsSmimeEncrypt = false;
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_17__.showWarning)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Sign or Encrypt with S/MIME was selected, but we don\'t have a certificate for the selected alias. The message will not be signed or encrypted.'));
        }
      }

      /**
       * Alias change may change the editor mode as well.
       *
       * As editorMode is the key for the TextEditor component a change will destroy the current instance
       * and the signature for the alias is inserted via onEditorReady event.
       *
       * Otherwise (when editorMode is the same) call insertSignature directly.
       */
      if (this.editorMode === _store_constants_js__WEBPACK_IMPORTED_MODULE_33__.EDITOR_MODE_TEXT && alias.editorMode === _store_constants_js__WEBPACK_IMPORTED_MODULE_33__.EDITOR_MODE_HTML) {
        this.editorMode = _store_constants_js__WEBPACK_IMPORTED_MODULE_33__.EDITOR_MODE_HTML;
      } else {
        this.insertSignature();
      }
    },
    onAddLocalAttachment() {
      this.bus.emit('on-add-local-attachment');
      this.saveDraftDebounced();
    },
    onAddCloudAttachment() {
      this.bus.emit('on-add-cloud-attachment');
      this.saveDraftDebounced();
    },
    onAddCloudAttachmentLink() {
      this.bus.emit('on-add-cloud-attachment-link');
    },
    onAutocomplete(term, addressType) {
      if (term === undefined || term === '') {
        return;
      }
      this.loadingIndicatorTo = addressType === 'to';
      this.loadingIndicatorCc = addressType === 'cc';
      this.loadingIndicatorBcc = addressType === 'bcc';
      this.recipientSearchTerms[addressType] = term;
      debouncedSearch(term).then(results => {
        if (addressType === 'to') {
          this.loadingIndicatorTo = false;
        } else if (addressType === 'cc') {
          this.loadingIndicatorCc = false;
        } else if (addressType === 'bcc') {
          this.loadingIndicatorBcc = false;
        }

        // Search results might not have labels
        for (const result of results) {
          if (!result.label) {
            result.label = result.email;
          }
        }
        this.autocompleteRecipients = lodash_fp_uniqBy_js__WEBPACK_IMPORTED_MODULE_1___default()('email')(this.autocompleteRecipients.concat(results));
      });
    },
    async onMailvelopeLoaded(mailvelope) {
      this.encrypt = (0,_crypto_pgp_js__WEBPACK_IMPORTED_MODULE_27__.isPgpgMessage)(this.body);
      this.mailvelope.available = true;
      _logger_js__WEBPACK_IMPORTED_MODULE_22__["default"].info('Mailvelope loaded', {
        encrypt: this.encrypt,
        isPgpgMessage: (0,_crypto_pgp_js__WEBPACK_IMPORTED_MODULE_27__.isPgpgMessage)(this.body),
        keyRing: this.mailvelope.keyRing
      });
      this.mailvelope.keyRing = await mailvelope.getKeyring();
      await this.checkRecipientsKeys();
    },
    handleMention(option) {
      this.editorMode = _store_constants_js__WEBPACK_IMPORTED_MODULE_33__.EDITOR_MODE_HTML;
      this.onNewToAddr(option);
    },
    onNewToAddr(option) {
      this.onNewAddr(option, this.selectTo, 'to');
    },
    onNewCcAddr(option) {
      this.onNewAddr(option, this.selectCc, 'cc');
    },
    onNewBccAddr(option) {
      this.onNewAddr(option, this.selectBcc, 'bcc');
    },
    onNewAddr(option, list, type) {
      if ((option === null || option === undefined) && this.recipientSearchTerms[type] !== undefined && this.recipientSearchTerms[type] !== '') {
        if (!this.recipientSearchTerms[type].includes('@')) {
          return;
        }
        option = {};
        option.email = this.recipientSearchTerms[type];
        option.label = this.recipientSearchTerms[type];
        this.recipientSearchTerms[type] = '';
      }
      if (list.some(recipient => {
        var _option;
        return recipient.email === ((_option = option) === null || _option === void 0 ? void 0 : _option.email);
      }) || !option) {
        return;
      }
      const recipient = _objectSpread({}, option);
      this.newRecipients.push(recipient);
      list.push(recipient);
      this.saveDraftDebounced();
    },
    async onSend(_) {
      let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.encrypt) {
        _logger_js__WEBPACK_IMPORTED_MODULE_22__["default"].debug('get encrypted message from mailvelope');
        await this.$refs.mailvelopeEditor.pull();
      }
      this.$emit('send', _objectSpread(_objectSpread({}, this.getMessageData()), {}, {
        force
      }));
    },
    reset() {
      this.selectTo = [];
      this.selectCc = [];
      this.selectBcc = [];
      this.subjectVal = '';
      this.bodyVal = '<p></p><p></p>';
      this.attachments = [];
      this.autocompleteRecipients = [];
      this.newRecipients = [];
      this.requestMdnVal = false;
      this.changeSignature = false;
      this.sendAtVal = undefined;
      this.setAlias();
      this.initBody();
    },
    /**
     * Format aliases for the Multiselect
     *
     * @param {object} alias the alias to format
     * @return {string}
     */
    formatAliases(alias) {
      if (!alias.name) {
        return alias.emailAddress;
      }
      return "".concat(alias.name, " <").concat(alias.emailAddress, ">");
    },
    /**
     * Whether the date is acceptable
     *
     * @param {Date} date The date to compare to
     * @return {boolean}
     */
    disabledDatetimepickerDate(date) {
      const minimumDate = new Date();
      // Make it one sec before midnight so it shows the next full day as available
      minimumDate.setHours(0, 0, 0);
      minimumDate.setSeconds(minimumDate.getSeconds() - 1);
      return date.getTime() <= minimumDate;
    },
    /**
     * Whether the time for date is acceptable
     *
     * @param {Date} date The date to compare to
     * @return {boolean}
     */
    disabledDatetimepickerTime(date) {
      const now = new Date();
      const minimumDate = new Date(now.getTime());
      return date.getTime() <= minimumDate;
    },
    /**
     * Remove recipient from recipients array (To,Cc,Bcc)
     *
     * @param {Array} option Current option from Multiselect
     * @param {Array} field List of recipients (ex. this.selectTo)
     */
    onRemoveRecipient(option, field) {
      switch (field) {
        case 'to':
          this.removeRecipientTo(option);
          break;
        case 'cc':
          this.removeRecipientCc(option);
          break;
        case 'bcc':
          this.removeRecipientBcc(option);
          break;
      }
    },
    removeRecipient(option, list) {
      return list.filter(recipient => recipient.email !== option.email);
    },
    removeRecipientTo(option) {
      this.selectTo = this.removeRecipient(option, this.selectTo);
    },
    removeRecipientCc(option) {
      this.selectCc = this.removeRecipient(option, this.selectCc);
    },
    removeRecipientBcc(option) {
      this.selectBcc = this.removeRecipient(option, this.selectBcc);
    },
    toggleViewMode() {
      this.autoLimit = !this.autoLimit;
      this.showCC = !(this.showCC && this.selectCc.length === 0 && this.autoLimit);
      this.showBCC = !(this.showBCC && this.selectBcc.length === 0 && this.autoLimit);
    },
    setEditorModeHtml() {
      this.editorMode = _store_constants_js__WEBPACK_IMPORTED_MODULE_33__.EDITOR_MODE_HTML;
    },
    setEditorModeText() {
      OC.dialogs.confirmDestructive((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Any existing formatting (for example bold, italic, underline or inline images) will be removed.'), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Turn off formatting'), {
        type: OC.dialogs.YES_NO_BUTTONS,
        confirm: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Turn off and remove formatting'),
        confirmClasses: 'error',
        cancel: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_18__.translate)('mail', 'Keep formatting')
      }, decision => {
        if (decision) {
          this.editorMode = _store_constants_js__WEBPACK_IMPORTED_MODULE_33__.EDITOR_MODE_TEXT;
        }
      });
    },
    /**
     * The S/MIME certificate object for an alias/account.
     *
     * @param {object} alias object
     * @return {object|undefined} S/MIME certificate of account or alias if one is selected
     */
    smimeCertificateForAlias(alias) {
      const certificateId = alias.smimeCertificateId;
      if (!certificateId) {
        return undefined;
      }
      return this.mainStore.getSmimeCertificate(certificateId);
    },
    /**
     * Create a new option for the to, cc and bcc selects.
     *
     * @param {string} value The string (email) typed by the user
     * @return {{email: string, label: string}} The new option
     */
    createRecipientOption(value) {
      return {
        email: value,
        label: value
      };
    },
    /**
     * Return the subname for recipient suggestion.
     *
     * Empty if label and email are the same or
     * if the suggestion is a group.
     *
     * @param {{email: string, label: string}} option
     * @return string
     */
    getSubnameForRecipient(option) {
      if (option.source && option.source === 'groups') {
        return '';
      }
      if (option.label === option.email) {
        return '';
      }
      return option.email;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/Close.vue */ "./node_modules/vue-material-design-icons/Close.vue");
/* harmony import */ var vue_material_design_icons_Cloud_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/Cloud.vue */ "./node_modules/vue-material-design-icons/Cloud.vue");
/* harmony import */ var vue_material_design_icons_EmailArrowRightOutline_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/EmailArrowRightOutline.vue */ "./node_modules/vue-material-design-icons/EmailArrowRightOutline.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ComposerAttachment',
  components: {
    Close: vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Cloud: vue_material_design_icons_Cloud_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    EmailArrowRightOutlineIcon: vue_material_design_icons_EmailArrowRightOutline_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    attachment: {
      type: Object,
      required: true
    },
    uploading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      progress: 0,
      sizeString: '',
      finished: false
    };
  },
  computed: {
    previewURL() {
      if (this.attachment.hasPreview && this.attachment.id > 0) {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)("/core/preview?fileId=".concat(this.attachment.id, "&x=100&y=100&a=0"));
      }
      return '';
    },
    getIcon() {
      return OC.MimeType.getIconUrl(this.attachment.fileType);
    },
    extension() {
      return this.attachment.fileName.split('.').pop();
    }
  },
  methods: {
    onDelete(attachment) {
      this.$emit('on-delete-attachment', attachment);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_fp_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/fp/map.js */ "./node_modules/lodash/fp/map.js");
/* harmony import */ var lodash_fp_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp/trimCharsStart.js */ "./node_modules/lodash/fp/trimCharsStart.js");
/* harmony import */ var lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/fp/prop.js */ "./node_modules/lodash/fp/prop.js");
/* harmony import */ var lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs_filepicker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/dialogs/filepicker.js */ "./node_modules/@nextcloud/dialogs/dist/filepicker.mjs");
/* harmony import */ var lodash_fp_sumBy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/fp/sumBy.js */ "./node_modules/lodash/fp/sumBy.js");
/* harmony import */ var lodash_fp_sumBy_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_fp_sumBy_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _service_FileService_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/FileService.js */ "./src/service/FileService.js");
/* harmony import */ var _service_FileSharingService_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/FileSharingService.js */ "./src/service/FileSharingService.js");
/* harmony import */ var _service_AttachmentService_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/AttachmentService.js */ "./src/service/AttachmentService.js");
/* harmony import */ var _ComposerAttachment_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ComposerAttachment.vue */ "./src/components/ComposerAttachment.vue");
/* harmony import */ var vue_material_design_icons_ChevronDown_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-material-design-icons/ChevronDown.vue */ "./node_modules/vue-material-design-icons/ChevronDown.vue");
/* harmony import */ var vue_material_design_icons_ChevronUp_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-material-design-icons/ChevronUp.vue */ "./node_modules/vue-material-design-icons/ChevronUp.vue");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

















const mimes = ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/png', 'image/webp'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ComposerAttachments',
  components: {
    FilePicker: _nextcloud_dialogs_filepicker_js__WEBPACK_IMPORTED_MODULE_6__.FilePickerVue,
    ComposerAttachment: _ComposerAttachment_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    ChevronDown: vue_material_design_icons_ChevronDown_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    ChevronUp: vue_material_design_icons_ChevronUp_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    bus: {
      type: Object,
      required: true
    },
    uploadSizeLimit: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      uploading: false,
      uploads: {},
      // this need if we want to pass in value only corrected uploaded files
      attachments: [],
      isToggle: false,
      hasNextLine: false,
      isAttachementPickerOpen: false,
      isLinkPickerOpen: false,
      attachementPickerButtons: [{
        label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_8__.translate)('mail', 'Choose'),
        callback: this.onAddCloudAttachment,
        type: 'primary'
      }],
      linkPickerButtons: [{
        label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_8__.translate)('mail', 'Choose'),
        callback: this.onAddCloudAttachmentLink,
        type: 'primary'
      }]
    };
  },
  computed: {
    hasAttachmentErrors() {
      return this.attachments.some(attachment => attachment.error);
    },
    uploadProgress() {
      let uploaded = 0;
      let total = 0;
      for (const id in this.uploads) {
        uploaded += this.uploads[id].uploaded;
        total += this.uploads[id].total;
      }
      return (uploaded / total * 100).toFixed(1);
    },
    total() {
      let total = 0;
      for (const id in this.uploads) {
        total += this.uploads[id].total;
      }
      return total;
    }
  },
  watch: {
    attachments() {
      this.$nextTick(function () {
        let prevTop = null;
        this.$refs.attachments.some((attachment, i) => {
          const top = attachment.$el.getBoundingClientRect().top;
          if (prevTop !== null && prevTop !== top) {
            if (!this.hasNextLine) {
              this.isToggle = true;
              this.hasNextLine = true;
            }
            return true;
          } else {
            prevTop = top;
            if (this.$refs.attachments.length === i + 1) {
              this.hasNextLine = false;
              this.isToggle = false;
              return true;
            }
          }
          return false;
        });
      });
    }
  },
  created() {
    this.bus.on('on-add-local-attachment', this.onAddLocalAttachment);
    this.bus.on('on-add-cloud-attachment', this.openAttachementPicker);
    this.bus.on('on-add-cloud-attachment-link', this.OpenLinkPicker);
    this.bus.on('on-add-message-as-attachment', this.onAddMessageAsAttachment);
    this.value.map(attachment => {
      this.attachments.push({
        id: attachment.id,
        fileName: attachment.fileName,
        displayName: lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_1___default()('/', attachment.fileName),
        total: attachment.size,
        finished: true,
        sizeString: this.formatBytes(attachment.size),
        imageBlobURL: attachment.isImage ? attachment.downloadUrl : attachment.mimeUrl
      });
      return attachment;
    });
  },
  methods: {
    filterAttachements(node) {
      var _JSON$parse;
      const downloadShareAttribute = node.attributes['share-attributes'] ? (_JSON$parse = JSON.parse(node.attributes['share-attributes'])) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.find(shareAttribute => shareAttribute.key === 'download') : undefined;
      const downloadPermissions = downloadShareAttribute !== undefined ? downloadShareAttribute.enabled : true;
      return node.permissions & OC.PERMISSION_READ && downloadPermissions;
    },
    openAttachementPicker() {
      this.isAttachementPickerOpen = true;
    },
    OpenLinkPicker() {
      this.isLinkPickerOpen = true;
    },
    onAddLocalAttachment() {
      this.$refs.localAttachments.click();
    },
    emitNewAttachments(attachments) {
      this.$emit('input', this.value.concat(attachments));
    },
    totalSizeOfUpload() {
      return Object.values(this.value).reduce((acc, upload) => {
        if (!upload.type === 'local') {
          // Ignore link shares
          return acc;
        }
        return acc + upload.size;
      }, 0);
    },
    onLocalAttachmentSelected(e) {
      this.uploading = true;
      // BUG - if choose again - progress lost/ move to complete()
      vue__WEBPACK_IMPORTED_MODULE_16__["default"].set(this, 'uploads', {});
      const toUpload = lodash_fp_sumBy_js__WEBPACK_IMPORTED_MODULE_7___default()(lodash_fp_prop_js__WEBPACK_IMPORTED_MODULE_4___default()('size'), Object.values(e.target.files));
      const newTotal = toUpload + this.totalSizeOfUpload();
      _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].debug('checking upload size limit', {
        existingUploads: this.totalSizeOfUpload(),
        toUpload,
        limit: this.uploadSizeLimit,
        newTotal
      });
      if (this.uploadSizeLimit && newTotal > this.uploadSizeLimit) {
        this.showAttachmentFileSizeWarning(e.target.files.length);
        this.uploading = false;
        return;
      }
      const progress = id => (prog, uploaded) => {
        this.uploads[id].uploaded = uploaded;
        this.attachments.map((item, i) => {
          if (item.displayName === id) {
            this.attachments[i].progress = uploaded;
            this.changeProgress(item, uploaded);
          }
          return item;
        });
      };
      // TODO bug: cancel axios on close or delete attachment
      const promises = lodash_fp_map_js__WEBPACK_IMPORTED_MODULE_0___default()(file => {
        const controller = new AbortController();
        const attachment = {
          fileName: file.name,
          fileType: file.type,
          imageBlobURL: this.generatePreview(file),
          displayName: lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_1___default()('/', file.name),
          progress: null,
          percent: 0,
          total: file.size,
          finished: false,
          error: false,
          hasPreview: false,
          controller
        };
        this.attachments.push(attachment);
        vue__WEBPACK_IMPORTED_MODULE_16__["default"].set(this.uploads, file.name, {
          total: file.size,
          uploaded: 0
        });
        try {
          return (0,_service_AttachmentService_js__WEBPACK_IMPORTED_MODULE_12__.uploadLocalAttachment)(file, progress(file.name), controller).catch(() => {
            this.attachments.some(attachment => {
              if (attachment.displayName === file.name && !attachment.error) {
                this.$set(attachment, 'error', true);
                return true;
              }
              return false;
            });
          }).then(_ref => {
            let {
              file,
              id
            } = _ref;
            _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].info('local attachment uploaded', {
              file,
              id
            });
            attachment.id = id;
            this.emitNewAttachments([{
              fileName: file.name,
              displayName: lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_1___default()('/', file.name),
              id,
              size: file.size,
              type: 'local'
            }]);
          });
        } catch (error) {
          _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('Could not upload file', {
            file,
            error
          });
        }
      }, e.target.files);
      const done = Promise.all(promises).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('could not upload all attachments', {
        error
      })).then(() => this.uploading = false);
      this.$emit('upload', done);
      return done;
    },
    async onAddCloudAttachment(nodes) {
      try {
        const paths = nodes.map(node => node.path);
        this.cloudAttachement = false;
        // maybe fiiled front with placeholder loader...?
        const filesFromCloud = await Promise.all(paths.map(_service_FileService_js__WEBPACK_IMPORTED_MODULE_10__.getFileData));
        const sum = filesFromCloud.reduce((sum, item) => {
          return sum + item.size;
        }, 0);
        const newTotal = sum + this.totalSizeOfUpload();
        if (this.uploadSizeLimit && newTotal > this.uploadSizeLimit) {
          this.showAttachmentFileSizeWarning(paths.length);
          return;
        }
        this.emitNewAttachments(paths.map((name, i) => {
          const _cloudFile = {
            fileName: name,
            displayName: lodash_fp_trimCharsStart_js__WEBPACK_IMPORTED_MODULE_1___default()('/', name),
            type: 'cloud',
            size: filesFromCloud[i].size
          };
          const _toAttachmentData = {
            finished: true,
            imageBlobURL: this.generatePreview(_cloudFile),
            total: filesFromCloud[i].size,
            sizeString: this.formatBytes(filesFromCloud[i].size),
            hasPreview: filesFromCloud[i]['has-preview'],
            // dont know, may be it will be conflict if cloud & local has equal IDs?
            id: filesFromCloud[i].fileid,
            uploaded: 0
          };
          this.attachments.push(Object.assign(_toAttachmentData, _cloudFile));
          return _cloudFile;
        }));
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('could not choose a file as attachment', {
          error
        });
      }
    },
    async onAddCloudAttachmentLink(nodes) {
      try {
        this.cloudAttachementLink = false;
        const url = await (0,_service_FileSharingService_js__WEBPACK_IMPORTED_MODULE_11__.shareFile)(nodes[0].path, (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getRequestToken)());
        this.appendToBodyAtCursor("<a href=\"".concat(url, "\">").concat(url, "</a>"));
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].error('could not choose a file as attachment link', {
          error
        });
      }
    },
    /**
     * Add a forwarded message as an attachment
     *
     * @param {object} data Payload
     * @param {number} data.id Database id of the message to forward as an attachment
     * @param {string} data.fileName File name of the attachment
     */
    onAddMessageAsAttachment(_ref2) {
      let {
        id,
        fileName
      } = _ref2;
      const attachment = {
        type: 'message',
        id,
        fileName
      };
      this.attachments.push(_objectSpread(_objectSpread({}, attachment), {}, {
        finished: true
      }));
      this.emitNewAttachments([attachment]);
    },
    showAttachmentFileSizeWarning(num) {
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_5__.showWarning)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_8__.translatePlural)('mail', 'The attachment exceed the allowed attachments size of {size}. Please share the file via link instead.', 'The attachments exceed the allowed attachments size of {size}. Please share the files via link instead.', num, {
        size: (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.formatFileSize)(this.uploadSizeLimit)
      }));
    },
    onDelete(attachment) {
      // If the attachment is still uploading, abort the upload
      if (!attachment.finished && attachment.controller) {
        attachment.controller.abort();
      }
      const val = {
        fileName: attachment.fileName,
        displayName: attachment.displayName,
        id: attachment.id,
        size: attachment.total,
        type: attachment.type
      };
      this.attachments = this.attachments.filter(a => a !== attachment);
      this.$emit('input', this.value.filter(a => {
        if (val.type === 'cloud') {
          return a.fileName !== val.fileName;
        } else {
          return a.id !== val.id;
        }
      }));
      const updatedUploads = Object.keys(this.uploads).filter(fileName => fileName !== attachment.fileName).reduce((acc, fileName) => {
        acc[fileName] = this.uploads[fileName];
        return acc;
      }, {});
      this.uploads = updatedUploads;
      this.$emit('on-delete-attachment', attachment);
    },
    appendToBodyAtCursor(toAppend) {
      this.bus.emit('append-to-body-at-cursor', toAppend);
    },
    formatBytes(bytes) {
      let decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      if (bytes === 0) return '0 B';
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },
    changeProgress(item, progress) {
      this.attachments.map((attachment, i) => {
        if (item.fileName === attachment.fileName) {
          if (!attachment.finished) {
            const _progress = progress <= attachment.total ? progress : attachment.total;
            this.$set(attachment, 'progress', _progress);
            this.$set(attachment, 'sizeString', this.formatBytes(_progress));
            this.$set(attachment, 'percent', _progress / attachment.total * 100).toFixed(1);
            if (item.total <= _progress) {
              this.$set(attachment, 'finished', true);
            }
          }
        }
        return attachment;
      });
    },
    generatePreview(file) {
      if (this.isImage(file)) {
        return URL.createObjectURL(file);
      } else {
        return false;
      }
    },
    isImage(file) {
      return file.type && mimes.indexOf(file.type) !== -1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/DisplayContactDetails.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/DisplayContactDetails.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    email: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      vm: null
    };
  },
  async mounted() {
    var _window$OCA;
    const mountContactDetails = (_window$OCA = window.OCA) === null || _window$OCA === void 0 || (_window$OCA = _window$OCA.Contacts) === null || _window$OCA === void 0 ? void 0 : _window$OCA.mountContactDetails;
    if (mountContactDetails) {
      try {
        this.vm = await mountContactDetails(this.$refs.contactDetails, this.email);
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].error("Failed to mount contact details: ".concat(error));
      }
    }
  },
  async beforeDestroy() {
    if (this.vm) {
      this.vm.$destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _crypto_pgp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crypto/pgp.js */ "./src/crypto/pgp.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'MailvelopeEditor',
  props: {
    value: {
      type: String,
      required: true
    },
    recipients: {
      type: Array,
      required: true
    },
    quotedText: {
      type: Object,
      required: false,
      default: () => undefined
    },
    isReplyOrForward: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editor: undefined
    };
  },
  async mounted() {
    var _this$quotedText;
    const isEncrypted = this.quotedText ? (0,_crypto_pgp_js__WEBPACK_IMPORTED_MODULE_1__.isPgpgMessage)(this.quotedText) : false;
    const quotedMail = this.isReplyOrForward ? (_this$quotedText = this.quotedText) === null || _this$quotedText === void 0 ? void 0 : _this$quotedText.value : undefined;
    this.editor = await window.mailvelope.createEditorContainer('#mailvelope-composer', undefined, {
      quotedMail: isEncrypted ? quotedMail : undefined
    });
  },
  methods: {
    async pull() {
      const recipients = this.recipients.map(r => r.email);
      _logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].info('encrypting message', {
        recipients
      });
      const armored = await this.editor.encrypt(recipients);
      _logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].info('message encryted', {
        armored
      });
      this.$emit('input', armored);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _util_text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/text.js */ "./src/util/text.js");
/* harmony import */ var _Composer_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Composer.vue */ "./src/components/Composer.vue");
/* harmony import */ var _store_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/constants.js */ "./src/store/constants.js");
/* harmony import */ var _errors_match_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors/match.js */ "./src/errors/match.js");
/* harmony import */ var _errors_NoSentMailboxConfiguredError_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../errors/NoSentMailboxConfiguredError.js */ "./src/errors/NoSentMailboxConfiguredError.js");
/* harmony import */ var _errors_ManyRecipientsError_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../errors/ManyRecipientsError.js */ "./src/errors/ManyRecipientsError.js");
/* harmony import */ var _errors_AttachmentMissingError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../errors/AttachmentMissingError.js */ "./src/errors/AttachmentMissingError.js");
/* harmony import */ var _Loading_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loading.vue */ "./src/components/Loading.vue");
/* harmony import */ var vue_material_design_icons_Minus_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-material-design-icons/Minus.vue */ "./node_modules/vue-material-design-icons/Minus.vue");
/* harmony import */ var vue_material_design_icons_ArrowExpand_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-material-design-icons/ArrowExpand.vue */ "./node_modules/vue-material-design-icons/ArrowExpand.vue");
/* harmony import */ var vue_material_design_icons_ArrowCollapse_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-material-design-icons/ArrowCollapse.vue */ "./node_modules/vue-material-design-icons/ArrowCollapse.vue");
/* harmony import */ var _service_DraftService_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../service/DraftService.js */ "./src/service/DraftService.js");
/* harmony import */ var _store_outboxStore_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/outboxStore.js */ "./src/store/outboxStore.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _RecipientInfo_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RecipientInfo.vue */ "./src/components/RecipientInfo.vue");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NewMessageModal',
  components: {
    NcButton: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcButton,
    Composer: _Composer_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    EmptyContent: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcEmptyContent,
    Loading: _Loading_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    Modal: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcModal,
    MinimizeIcon: vue_material_design_icons_Minus_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    MaximizeIcon: vue_material_design_icons_ArrowExpand_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    DefaultComposerIcon: vue_material_design_icons_ArrowCollapse_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    RecipientInfo: _RecipientInfo_vue__WEBPACK_IMPORTED_MODULE_17__["default"]
  },
  props: {
    accounts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      additionalTrapElements: ['#reference-picker'],
      original: undefined,
      draftsPromise: Promise.resolve(),
      attachmentsPromise: Promise.resolve(),
      canSaveDraft: true,
      savingDraft: false,
      draftSaved: false,
      uploadingAttachments: false,
      sending: false,
      error: undefined,
      warning: undefined,
      modalFirstOpen: true,
      cookedComposerData: undefined,
      changed: false,
      largerModal: false,
      isLargeScreen: window.innerWidth >= 1024,
      isMaximized: false,
      recipient: {
        name: '',
        email: ''
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_19__.mapStores)(_store_outboxStore_js__WEBPACK_IMPORTED_MODULE_16__["default"], _store_mainStore_js__WEBPACK_IMPORTED_MODULE_18__["default"])), (0,pinia__WEBPACK_IMPORTED_MODULE_19__.mapState)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_18__["default"], ['showMessageComposer'])), (0,pinia__WEBPACK_IMPORTED_MODULE_19__.mapActions)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_18__["default"], ['getPreference'])), {}, {
    modalTitle() {
      if (this.composerMessage.type === 'outbox') {
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'Edit message');
      }
      if (this.composerData.draftId !== undefined) {
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'Draft');
      }
      if (this.composerData.replyTo) {
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'Reply');
      }
      if (this.composerData.forwardFrom) {
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'Forward');
      }
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'New message');
    },
    hasContactDetailsApi() {
      var _window$OCA;
      return !!((_window$OCA = window.OCA) !== null && _window$OCA !== void 0 && (_window$OCA = _window$OCA.Contacts) !== null && _window$OCA !== void 0 && _window$OCA.mountContactDetails);
    },
    showRecipientPane() {
      return this.hasContactDetailsApi && this.composerData.to && this.composerData.to.length > 0 && !this.isMaximized;
    },
    composerMessage() {
      return this.mainStore.composerMessage;
    },
    composerData() {
      var _this$mainStore$compo, _this$mainStore$compo2;
      return (_this$mainStore$compo = (_this$mainStore$compo2 = this.mainStore.composerMessage) === null || _this$mainStore$compo2 === void 0 ? void 0 : _this$mainStore$compo2.data) !== null && _this$mainStore$compo !== void 0 ? _this$mainStore$compo : {};
    },
    forwardedMessages() {
      var _this$composerMessage, _this$composerMessage2;
      return (_this$composerMessage = (_this$composerMessage2 = this.composerMessage) === null || _this$composerMessage2 === void 0 || (_this$composerMessage2 = _this$composerMessage2.options) === null || _this$composerMessage2 === void 0 ? void 0 : _this$composerMessage2.forwardedMessages) !== null && _this$composerMessage !== void 0 ? _this$composerMessage : [];
    },
    smartReply() {
      var _this$composerData$sm, _this$composerData;
      return (_this$composerData$sm = (_this$composerData = this.composerData) === null || _this$composerData === void 0 ? void 0 : _this$composerData.smartReply) !== null && _this$composerData$sm !== void 0 ? _this$composerData$sm : null;
    },
    modalSize() {
      return this.isLargeScreen && this.hasContactDetailsApi && this.composerData.to && this.composerData.to.length > 0 ? 'large' : this.largerModal ? 'large' : 'normal';
    }
  }),
  created() {
    var _this$composerData2;
    const id = (_this$composerData2 = this.composerData) === null || _this$composerData2 === void 0 ? void 0 : _this$composerData2.id;
    if (id) {
      this.draftsPromise = Promise.resolve(id);
    }
    window.addEventListener('beforeunload', this.onBeforeUnload);
  },
  async mounted() {
    await this.$nextTick();
    this.updateCookedComposerData();
    await this.openModalSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.onBeforeUnload);
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isLargeScreen = window.innerWidth >= 1024;
    },
    async openModalSize() {
      try {
        const sizePreference = this.mainStore.getPreference('modalSize');
        this.largerModal = sizePreference === 'large';
      } catch (error) {
        console.error('Error getting modal size preference', error);
      }
    },
    async onMaximize() {
      this.isMaximized = !this.isMaximized;
      this.largerModal = !this.largerModal;
      try {
        await this.mainStore.savePreference({
          key: 'modalSize',
          value: this.largerModal ? 'large' : 'normal'
        });
      } catch (error) {
        console.error('Failed to save preference', error);
      }
    },
    async onMinimize() {
      this.isMaximized = false;
      this.modalFirstOpen = false;
      await this.mainStore.hideMessageComposerMutation();
      if (!this.mainStore.composerMessageIsSaved && this.changed) {
        await this.onDraft(this.cookedComposerData, {
          showToast: true
        });
      }
    },
    handleShow(element) {
      this.additionalTrapElements.push(element);
    },
    toHtml: _util_text_js__WEBPACK_IMPORTED_MODULE_4__.toHtml,
    plain: _util_text_js__WEBPACK_IMPORTED_MODULE_4__.plain,
    /**
     * @param data Message data
     * @param {object=} opts Options
     * @param {boolean=} opts.showToast Show a toast after saving
     * @return {Promise<number>} Draft id promise
     */
    // TODO: when there's no draft is saved, Cloing wont move ie case 2 doesn't work
    onDraft(data) {
      let {
        showToast = false
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.composerMessage) {
        _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].info('Ignoring draft because there is no message anymore', {
          data
        });
        return this.draftsPromise;
      }
      this.changed = true;
      this.draftsPromise = this.draftsPromise.then(async id => {
        this.savingDraft = true;
        this.draftSaved = false;
        try {
          let idToReturn;
          const dataForServer = this.getDataForServer(data, true);
          if (!id) {
            const {
              id
            } = await (0,_service_DraftService_js__WEBPACK_IMPORTED_MODULE_15__.saveDraft)(dataForServer);
            dataForServer.id = id;
            await this.mainStore.patchComposerData({
              id,
              draftId: dataForServer.draftId
            });
            this.canSaveDraft = true;
            this.draftSaved = true;
            idToReturn = id;
          } else {
            dataForServer.id = id;
            await (0,_service_DraftService_js__WEBPACK_IMPORTED_MODULE_15__.updateDraft)(dataForServer);
            this.canSaveDraft = true;
            this.draftSaved = true;
            idToReturn = id;
          }
          this.mainStore.setComposerMessageSavedMutation(true);
          if (showToast) {
            if (this.composerMessage.type === 'outbox') {
              (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'Message saved'));
            } else {
              (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'Draft saved'));
            }
          }
          if (idToReturn !== undefined) {
            return idToReturn;
          }
        } catch (error) {
          _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error('Could not save draft', {
            error
          });
          this.canSaveDraft = false;
          this.mainStore.setComposerIndicatorDisabledMutation(false);
          if (showToast) {
            if (this.composerMessage.type === 'outbox') {
              (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'Failed to save message'));
            } else {
              (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'Failed to save draft'));
            }
          }
        } finally {
          this.savingDraft = false;
        }
      });
      return this.draftsPromise;
    },
    getDataForServer(data) {
      var _this$composerData3;
      const dataForServer = _objectSpread(_objectSpread({}, data), {}, {
        id: data.id,
        accountId: data.accountId,
        editorBody: data.body.value,
        to: data.to,
        cc: data.cc,
        bcc: data.bcc,
        attachments: data.attachments,
        aliasId: data.aliasId,
        inReplyToMessageId: data.inReplyToMessageId,
        sendAt: data.sendAt,
        draftId: (_this$composerData3 = this.composerData) === null || _this$composerData3 === void 0 ? void 0 : _this$composerData3.draftId
      });
      if (data.isHtml) {
        dataForServer.bodyHtml = data.body.value;
      } else {
        dataForServer.bodyPlain = (0,_util_text_js__WEBPACK_IMPORTED_MODULE_4__.toPlain)(data.body).value;
      }
      return dataForServer;
    },
    onAttachmentUploading(done, data) {
      this.attachmentsPromise = this.attachmentsPromise.then(done).then(() => this.onDraft(data)).then(() => _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].debug('attachments uploaded')).catch(error => _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error('could not upload attachments', {
        error
      }));
    },
    async onSend(data) {
      let force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].debug('sending message', {
        data
      });
      await this.attachmentsPromise;
      this.uploadingAttachments = false;
      this.sending = true;
      try {
        const now = new Date().getTime();
        for (const attachment of data.attachments) {
          if (!attachment.type) {
            // todo move to backend: https://github.com/nextcloud/mail/issues/6227
            attachment.type = 'local';
          }
        }
        const dataForServer = this.getDataForServer(_objectSpread(_objectSpread({}, data), {}, {
          id: await this.draftsPromise,
          sendAt: data.sendAt ? data.sendAt : Math.floor((now + _store_constants_js__WEBPACK_IMPORTED_MODULE_6__.UNDO_DELAY) / 1000)
        }));
        if (dataForServer.sendAt < Math.floor((now + _store_constants_js__WEBPACK_IMPORTED_MODULE_6__.UNDO_DELAY) / 1000)) {
          dataForServer.sendAt = Math.floor((now + _store_constants_js__WEBPACK_IMPORTED_MODULE_6__.UNDO_DELAY) / 1000);
        }
        if (!force && data.attachments.length === 0) {
          const lines = (0,_util_text_js__WEBPACK_IMPORTED_MODULE_4__.toPlain)(data.body).value.toLowerCase().split('\n');
          const wordAttachment = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'attachment').toLowerCase();
          const wordAttached = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'attached').toLowerCase();
          for (const line of lines) {
            if (line.startsWith('>') || line.startsWith('--')) {
              break;
            }
            if (line.includes(wordAttachment) || line.includes(wordAttached)) {
              throw new _errors_AttachmentMissingError_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
            }
          }
        }
        if (!this.composerData.id) {
          // This is a new message
          const {
            id
          } = await (0,_service_DraftService_js__WEBPACK_IMPORTED_MODULE_15__.saveDraft)(dataForServer);
          dataForServer.id = id;
          await this.outboxStore.enqueueFromDraft({
            draftMessage: dataForServer,
            id
          });
        } else if (this.composerData.type === 0) {
          // This is an outbox message
          dataForServer.id = this.composerData.id;
          await this.outboxStore.updateMessage({
            message: dataForServer,
            id: this.composerData.id
          });
        } else {
          // This is a draft
          await (0,_service_DraftService_js__WEBPACK_IMPORTED_MODULE_15__.updateDraft)(dataForServer);
          dataForServer.id = this.composerData.id;
          await this.outboxStore.enqueueFromDraft({
            draftMessage: dataForServer,
            id: this.composerData.id
          });
        }
        if (!data.sendAt || data.sendAt < Math.floor((now + _store_constants_js__WEBPACK_IMPORTED_MODULE_6__.UNDO_DELAY) / 1000)) {
          // Awaiting here would keep the modal open for a long time and thus block the user
          this.outboxStore.sendMessageWithUndo({
            id: dataForServer.id
          }).catch(error => {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].debug('Could not send message', {
              error
            });
          });
        }
        if (dataForServer.id) {
          // Remove old draft envelope
          this.mainStore.removeMessageMutation({
            id: dataForServer.id
          });
        }
        await this.mainStore.stopComposerSession();
        this.$emit('close');
      } catch (error) {
        this.error = await (0,_errors_match_js__WEBPACK_IMPORTED_MODULE_7__.matchError)(error, {
          [_errors_NoSentMailboxConfiguredError_js__WEBPACK_IMPORTED_MODULE_8__["default"].getName()]() {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error('could not send message', {
              error
            });
            return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'No sent mailbox configured. Please pick one in the account settings.');
          },
          [_errors_ManyRecipientsError_js__WEBPACK_IMPORTED_MODULE_9__["default"].getName()]() {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error('could not send message', {
              error
            });
            return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'You are trying to send to many recipients in To and/or Cc. Consider using Bcc to hide recipient addresses.');
          },
          // eslint-disable-next-line n/handle-callback-err
          default(error) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error('could not send message', {
              error
            });
          }
        });
        this.warning = await (0,_errors_match_js__WEBPACK_IMPORTED_MODULE_7__.matchError)(error, {
          [_errors_AttachmentMissingError_js__WEBPACK_IMPORTED_MODULE_10__["default"].getName()]() {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].info('showing the did you forgot an attachment warning', {
              error
            });
            return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'You mentioned an attachment. Did you forget to add it?');
          },
          // eslint-disable-next-line n/handle-callback-err
          default(error) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].warn('could not send message', {
              error
            });
          }
        });
      } finally {
        this.sending = false;
      }

      // Sync sent mailbox when it's currently open
      const account = this.mainStore.getAccount(data.accountId);
      if (account && parseInt(this.$route.params.mailboxId, 10) === account.sentMailboxId) {
        setTimeout(() => {
          this.mainStore.syncEnvelopes({
            mailboxId: account.sentMailboxId,
            query: '',
            init: false
          });
        }, 500);
      }
    },
    async onForceSend() {
      await this.onSend(this.cookedComposerData, true);
    },
    recipientToRfc822(recipient) {
      if (recipient.email === recipient.label) {
        // From mailto or sender without proper label
        return recipient.email;
      } else if (recipient.label === '') {
        // Invalid label
        return recipient.email;
      } else if (recipient.email.search(/^[a-zA-Z]+:/) === 0) {
        // Group integration
        return recipient.email;
      } else {
        // Proper layout with label
        return "\"".concat(recipient.label, "\" <").concat(recipient.email, ">");
      }
    },
    async discardDraft() {
      let id = await this.draftsPromise;
      const isOutbox = this.composerMessage.type === 'outbox';
      if (isOutbox) {
        id = this.composerMessage.data.id;
      }

      // It's safe to stop the session and ultimately destroy this component as only data
      // local this this function is accessed afterwards
      await this.mainStore.stopComposerSession();
      try {
        if (isOutbox) {
          await this.outboxStore.deleteMessage({
            id
          });
        } else {
          (0,_service_DraftService_js__WEBPACK_IMPORTED_MODULE_15__.deleteDraft)(id);
        }
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showSuccess)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'Message discarded'));
      } catch (error) {
        _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error('Could not discard draft', {
          error
        });
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('mail', 'Could not discard message'));
      }
    },
    convertEditorBody(composerData) {
      if (composerData.editorBody) {
        return composerData.editorBody;
      }
      if (!composerData.body) {
        return '';
      }
      return (0,_util_text_js__WEBPACK_IMPORTED_MODULE_4__.toHtml)(composerData.body).value;
    },
    updateCookedComposerData() {
      if (!this.$refs.composer) {
        // Composer is not rendered yet
        return;
      }

      // Extract data to save drafts while the composer is not rendered.
      // This is hacky but there is no other way for now.
      this.cookedComposerData = this.$refs.composer.getMessageData();
    },
    async patchComposerData(data) {
      this.changed = true;
      this.updateCookedComposerData();
      await this.mainStore.patchComposerData(data);
    },
    onBeforeUnload(e) {
      if (this.canSaveDraft && this.changed) {
        e.preventDefault();
        e.returnValue = true;
        this.mainStore.showMessageComposerMutation();
      } else {
        console.info('No unsaved changes. See you!');
      }
    },
    async onClose() {
      this.mainStore.setComposerIndicatorDisabledMutation(true);
      await this.onMinimize();

      // End the session only if all unsaved changes have been saved
      if (this.canSaveDraft && (this.changed && this.draftSaved || !this.changed)) {
        _logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].debug('Closing composer session due to close button click');
        await this.mainStore.stopComposerSession({
          restoreOriginalSendAt: true,
          moveToImap: this.changed,
          id: this.composerData.id
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var vue_material_design_icons_ArrowDown_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/ArrowDown.vue */ "./node_modules/vue-material-design-icons/ArrowDown.vue");
/* harmony import */ var vue_material_design_icons_ArrowUp_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/ArrowUp.vue */ "./node_modules/vue-material-design-icons/ArrowUp.vue");
/* harmony import */ var _Avatar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar.vue */ "./src/components/Avatar.vue");
/* harmony import */ var _DisplayContactDetails_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayContactDetails.vue */ "./src/components/DisplayContactDetails.vue");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Avatar: _Avatar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    IconArrowDown: vue_material_design_icons_ArrowDown_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    IconArrowUp: vue_material_design_icons_ArrowUp_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    DisplayContactDetails: _DisplayContactDetails_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data() {
    return {
      expandedRecipients: []
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_4__["default"], ['composerMessage'])), {}, {
    recipients() {
      return this.composerMessage.data.to;
    }
  }),
  watch: {
    recipients: {
      immediate: true,
      handler() {
        this.expandedRecipients = this.recipients.map(() => false);
      }
    }
  },
  methods: {
    toggleExpand(index) {
      this.$set(this.expandedRecipients, index, !this.expandedRecipients[index]);
    },
    isExpanded(index) {
      return this.expandedRecipients[index];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/Close.vue */ "./node_modules/vue-material-design-icons/Close.vue");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RecipientListItem',
  components: {
    ListItemIcon: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__.NcListItemIcon,
    Close: vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isInternal: true
    };
  },
  computed: _objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_3__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_2__["default"])),
  async mounted() {
    if (this.mainStore.getPreference('internal-addresses', 'false') === 'true') {
      this.isInternal = this.mainStore.isInternalAddress(this.option.email);
    }
  },
  methods: {
    removeRecipient(option, field) {
      this.$emit('remove-recipient', option, field);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=template&id=12b95150&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=template&id=12b95150&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "message-composer"
  }, [_vm.isPickerAvailable && _vm.isPickerOpen ? _c("NcReferencePickerModal", {
    attrs: {
      id: "reference-picker"
    },
    on: {
      submit: _vm.onPicked,
      cancel: _vm.closePicker
    }
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "composer-fields composer-fields__from mail-account"
  }, [_c("label", {
    staticClass: "from-label",
    attrs: {
      for: "from"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "From")) + "\n\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "composer-fields--custom"
  }, [_c("NcSelect", {
    attrs: {
      id: "from",
      value: _vm.selectedAlias,
      options: _vm.aliases,
      label: "name",
      "get-option-key": option => option.selectId,
      searchable: false,
      placeholder: _vm.t("mail", "Select account"),
      "aria-label-combobox": _vm.t("mail", "Select account"),
      "clear-on-select": false,
      "append-to-body": false,
      selectable: option => {
        return option.selectable;
      }
    },
    on: {
      "option:selected": _vm.onAliasChange
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function (option) {
        return [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.formatAliases(option)) + "\n\t\t\t\t\t")];
      }
    }, {
      key: "selected-option",
      fn: function (option) {
        return [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.formatAliases(option)) + "\n\t\t\t\t\t")];
      }
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "composer-fields"
  }, [_c("div", {
    staticClass: "composer-fields__label"
  }, [_c("label", {
    staticClass: "to-label",
    attrs: {
      for: "to"
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "To")) + "\n\t\t\t\t")])]), _vm._v(" "), _c("div", {
    staticClass: "composer-fields--custom"
  }, [_c("NcSelect", {
    ref: "toLabel",
    attrs: {
      id: "to",
      value: _vm.selectTo,
      options: _vm.selectableRecipients.filter(recipient => !_vm.selectTo.some(to => to.email === recipient.email)),
      "get-option-key": option => option.email,
      taggable: true,
      "aria-label-combobox": _vm.t("mail", "Select recipient"),
      "filter-by": (option, label, search) => _vm.filterOption(option, label, search, "to"),
      multiple: true,
      "close-on-select": true,
      "clear-search-on-select": true,
      loading: _vm.loadingIndicatorTo,
      reducible: true,
      clearable: true,
      "no-wrap": false,
      "append-to-body": false,
      "create-option": _vm.createRecipientOption,
      "clear-search-on-blur": () => _vm.clearOnBlur("to")
    },
    on: {
      input: _vm.saveDraftDebounced,
      "option:selecting": _vm.onNewToAddr,
      "search:blur": _vm.onNewToAddr,
      search: function ($event) {
        return _vm.onAutocomplete($event, "to");
      }
    },
    scopedSlots: _vm._u([{
      key: "search",
      fn: function (_ref) {
        let {
          events,
          attributes
        } = _ref;
        return [_c("input", _vm._g(_vm._b({
          staticClass: "vs__search",
          attrs: {
            placeholder: _vm.t("mail", "Contact or email address …"),
            type: "search"
          }
        }, "input", attributes, false), events))];
      }
    }, {
      key: "selected-option-container",
      fn: function (_ref2) {
        let {
          option
        } = _ref2;
        return [_c("RecipientListItem", {
          staticClass: "vs__selected selected",
          attrs: {
            option: option
          },
          on: {
            "remove-recipient": function ($event) {
              return _vm.onRemoveRecipient(option, "to");
            }
          }
        })];
      }
    }, {
      key: "option",
      fn: function (option) {
        return [_c("div", [_c("ListItemIcon", {
          attrs: {
            "no-margin": true,
            name: option.label,
            subname: _vm.getSubnameForRecipient(option),
            "icon-class": !option.id ? "icon-user" : null,
            url: option.photo
          }
        })], 1)];
      }
    }])
  })], 1)]), _vm._v(" "), _vm.showCC ? _c("div", {
    staticClass: "composer-fields"
  }, [_c("label", {
    staticClass: "cc-label",
    attrs: {
      for: "cc"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Cc")) + "\n\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "composer-fields--custom"
  }, [_c("NcSelect", {
    ref: "toLabel",
    class: {
      opened: !_vm.autoLimit,
      select: true
    },
    attrs: {
      id: "cc",
      value: _vm.selectCc,
      options: _vm.selectableRecipients.filter(recipient => !_vm.selectCc.some(cc => cc.email === recipient.email)),
      "get-option-key": option => option.email,
      "no-wrap": false,
      "filter-by": (option, label, search) => _vm.filterOption(option, label, search, "cc"),
      taggable: true,
      "close-on-select": true,
      "clear-search-on-blur": () => _vm.clearOnBlur("cc"),
      "append-to-body": false,
      multiple: true,
      placeholder: _vm.t("mail", "Contact or email address …"),
      "aria-label-combobox": _vm.t("mail", "Contact or email address …"),
      "clear-search-on-select": true,
      loading: _vm.loadingIndicatorCc,
      reducible: true,
      clearable: true,
      "create-option": _vm.createRecipientOption
    },
    on: {
      input: _vm.saveDraftDebounced,
      "option:selecting": _vm.onNewCcAddr,
      "search:blur": _vm.onNewCcAddr,
      search: function ($event) {
        return _vm.onAutocomplete($event, "cc");
      }
    },
    scopedSlots: _vm._u([{
      key: "search",
      fn: function (_ref3) {
        let {
          events,
          attributes
        } = _ref3;
        return [_c("input", _vm._g(_vm._b({
          staticClass: "vs__search",
          attrs: {
            placeholder: _vm.t("mail", "Contact or email address …"),
            type: "search"
          }
        }, "input", attributes, false), events))];
      }
    }, {
      key: "selected-option-container",
      fn: function (_ref4) {
        let {
          option
        } = _ref4;
        return [_c("RecipientListItem", {
          staticClass: "vs__selected",
          attrs: {
            option: option
          },
          on: {
            "remove-recipient": function ($event) {
              return _vm.onRemoveRecipient(option, "cc");
            }
          }
        })];
      }
    }, {
      key: "option",
      fn: function (option) {
        return [_c("div", [_c("ListItemIcon", {
          attrs: {
            "no-margin": true,
            name: option.label,
            subname: _vm.getSubnameForRecipient(option),
            url: option.photo,
            "icon-class": !option.id ? "icon-user" : null
          }
        })], 1)];
      }
    }], null, false, 2538260560)
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.showBCC ? _c("div", {
    staticClass: "composer-fields"
  }, [_c("label", {
    staticClass: "bcc-label",
    attrs: {
      for: "bcc"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Bcc")) + "\n\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "composer-fields--custom"
  }, [_c("NcSelect", {
    ref: "toLabel",
    class: {
      opened: !_vm.autoLimit,
      select: true
    },
    attrs: {
      id: "bcc",
      value: _vm.selectBcc,
      "no-wrap": false,
      "filter-by": (option, label, search) => _vm.filterOption(option, label, search, "bcc"),
      options: _vm.selectableRecipients.filter(recipient => !_vm.selectBcc.some(bcc => bcc.email === recipient.email)),
      "get-option-key": option => option.email,
      taggable: true,
      "close-on-select": true,
      "clear-search-on-blur": () => _vm.clearOnBlur("bcc"),
      "append-to-body": false,
      multiple: true,
      placeholder: _vm.t("mail", "Contact or email address …"),
      "aria-label-combobox": _vm.t("mail", "Contact or email address …"),
      "clear-search-on-select": true,
      "reset-on-options-change": true,
      loading: _vm.loadingIndicatorBcc,
      clearable: true,
      "create-option": _vm.createRecipientOption
    },
    on: {
      input: _vm.saveDraftDebounced,
      "option:selecting": _vm.onNewBccAddr,
      "search:blur": _vm.onNewBccAddr,
      search: function ($event) {
        return _vm.onAutocomplete($event, "bcc");
      }
    },
    scopedSlots: _vm._u([{
      key: "search",
      fn: function (_ref5) {
        let {
          events,
          attributes
        } = _ref5;
        return [_c("input", _vm._g(_vm._b({
          staticClass: "vs__search",
          attrs: {
            placeholder: _vm.t("mail", "Contact or email address …"),
            type: "search"
          }
        }, "input", attributes, false), events))];
      }
    }, {
      key: "selected-option-container",
      fn: function (_ref6) {
        let {
          option
        } = _ref6;
        return [_c("RecipientListItem", {
          staticClass: "vs__selected",
          attrs: {
            option: option
          },
          on: {
            "remove-recipient": function ($event) {
              return _vm.onRemoveRecipient(option, "bcc");
            }
          }
        })];
      }
    }, {
      key: "option",
      fn: function (option) {
        return [_c("div", [_c("ListItemIcon", {
          attrs: {
            "no-margin": true,
            name: option.label,
            subname: _vm.getSubnameForRecipient(option),
            url: option.photo,
            "icon-class": !option.id ? "icon-user" : null
          }
        })], 1)];
      }
    }], null, false, 1459034866)
  })], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "composer-fields"
  }, [_c("label", {
    staticClass: "subject-label hidden-visually",
    attrs: {
      for: "subject"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Subject")) + "\n\t\t\t")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.subjectVal,
      expression: "subjectVal"
    }],
    staticClass: "subject",
    attrs: {
      id: "subject",
      type: "text",
      name: "subject",
      autocomplete: "off",
      placeholder: _vm.t("mail", "Subject …")
    },
    domProps: {
      value: _vm.subjectVal
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.subjectVal = $event.target.value;
      }, _vm.saveDraftDebounced]
    }
  })]), _vm._v(" "), _vm.noReply ? _c("div", {
    staticClass: "warning noreply-warning"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "This message came from a noreply address so your reply will probably not be read.")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.wantsSmimeEncrypt && _vm.missingSmimeCertificatesForRecipients.length ? _c("div", {
    staticClass: "warning noreply-warning"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "The following recipients do not have a S/MIME certificate: {recipients}.", {
    recipients: _vm.missingSmimeCertificatesForRecipients.join(", ")
  })) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _vm.encrypt && _vm.mailvelope.keysMissing.length ? _c("div", {
    staticClass: "warning noreply-warning"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("mail", "The following recipients do not have a PGP key: {recipients}.", {
    recipients: _vm.mailvelope.keysMissing.join(", ")
  })) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "composer-fields message-editor"
  }, [!_vm.encrypt ? _c("TextEditor", {
    key: _vm.editorMode,
    ref: "editor",
    staticClass: "message-body",
    attrs: {
      value: _vm.bodyVal,
      html: !_vm.editorPlainText,
      name: "body",
      placeholder: _vm.t("mail", "Write message new …"),
      focus: _vm.isReply || !_vm.isFirstOpen,
      bus: _vm.bus
    },
    on: {
      input: _vm.onEditorInput,
      ready: _vm.onEditorReady,
      mention: _vm.handleMention,
      "show-toolbar": _vm.handleShow
    }
  }) : _c("MailvelopeEditor", {
    ref: "mailvelopeEditor",
    attrs: {
      value: _vm.bodyVal,
      recipients: _vm.allRecipients,
      "quoted-text": _vm.body,
      "is-reply-or-forward": _vm.isReply || _vm.isForward
    },
    on: {
      input: _vm.onEditorInput
    }
  })], 1), _vm._v(" "), _c("ComposerAttachments", {
    attrs: {
      bus: _vm.bus,
      "upload-size-limit": _vm.attachmentSizeLimit
    },
    on: {
      upload: function ($event) {
        _vm.$emit("upload-attachment", $event, _vm.getMessageData());
      }
    },
    model: {
      value: _vm.attachments,
      callback: function ($$v) {
        _vm.attachments = $$v;
      },
      expression: "attachments"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "composer-actions-right composer-actions"
  }, [_c("div", {
    staticClass: "composer-actions--primary-actions"
  }, [_c("p", {
    staticClass: "composer-actions-draft-status"
  }, [_vm.savingDraft ? _c("span", {
    staticClass: "draft-status"
  }, [_vm._v(_vm._s(_vm.t("mail", "Saving draft …")))]) : !_vm.canSaveDraft ? _c("span", {
    staticClass: "draft-status"
  }, [_vm._v(_vm._s(_vm.t("mail", "Error saving draft")))]) : _vm.draftSaved ? _c("span", {
    staticClass: "draft-status"
  }, [_vm._v(_vm._s(_vm.t("mail", "Draft saved")))]) : _vm._e()]), _vm._v(" "), !_vm.savingDraft && !_vm.canSaveDraft ? _c("ButtonVue", {
    staticClass: "button",
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("mail", "Save draft")
    },
    on: {
      click: _vm.saveDraft
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Download", {
          attrs: {
            size: 16,
            title: _vm.t("mail", "Save draft")
          }
        })];
      },
      proxy: true
    }], null, false, 3704612859)
  }) : _vm._e(), _vm._v(" "), !_vm.savingDraft && _vm.draftSaved ? _c("ButtonVue", {
    staticClass: "button",
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("mail", "Discard & close draft")
    },
    on: {
      click: function ($event) {
        return _vm.$emit("discard-draft");
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Delete", {
          attrs: {
            size: 16,
            title: _vm.t("mail", "Discard & close draft")
          }
        })];
      },
      proxy: true
    }], null, false, 206334893)
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "composer-actions--secondary-actions"
  }, [!_vm.encrypt && _vm.editorPlainText ? _c("ButtonVue", {
    attrs: {
      type: "tertiary",
      "aria-label": _vm.t("mail", "Enable formatting")
    },
    on: {
      click: function ($event) {
        return _vm.setEditorModeHtml();
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconFormat", {
          attrs: {
            size: 16,
            title: _vm.t("mail", "Enable formatting")
          }
        })];
      },
      proxy: true
    }], null, false, 3458154325)
  }) : _vm._e(), _vm._v(" "), !_vm.encrypt && !_vm.editorPlainText ? _c("ButtonVue", {
    attrs: {
      type: "tertiary",
      pressed: true,
      "aria-label": _vm.t("mail", "Disable formatting")
    },
    on: {
      click: function ($event) {
        return _vm.setEditorModeText();
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconFormat", {
          attrs: {
            size: 16,
            title: _vm.t("mail", "Disable formatting")
          }
        })];
      },
      proxy: true
    }], null, false, 765879520)
  }) : _vm._e(), _vm._v(" "), _c("Actions", {
    attrs: {
      open: _vm.isAddAttachmentsOpen
    },
    on: {
      "update:open": function ($event) {
        _vm.isAddAttachmentsOpen = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Paperclip", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("ActionButton", {
    attrs: {
      "close-after-click": true
    },
    on: {
      click: _vm.onAddLocalAttachment
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconUpload", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Upload attachment")) + "\n\t\t\t\t\t")]), _vm._v(" "), _c("ActionButton", {
    attrs: {
      "close-after-click": true
    },
    on: {
      click: _vm.onAddCloudAttachment
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconFolder", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Add attachment from Files")) + "\n\t\t\t\t\t")]), _vm._v(" "), _c("ActionButton", {
    attrs: {
      "close-after-click": true,
      disabled: _vm.encrypt
    },
    on: {
      click: _vm.onAddCloudAttachmentLink
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconPublic", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Add share link from Files")) + "\n\t\t\t\t\t")])], 1), _vm._v(" "), _c("Actions", {
    attrs: {
      open: _vm.isActionsOpen
    },
    on: {
      "update:open": function ($event) {
        _vm.isActionsOpen = $event;
      },
      close: function ($event) {
        _vm.isMoreActionsOpen = false;
      }
    }
  }, [!_vm.isMoreActionsOpen ? [_vm.isPickerAvailable ? _c("ActionButton", {
    attrs: {
      "close-after-click": true
    },
    on: {
      click: _vm.openPicker
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconLinkPicker", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }], null, false, 2568963296)
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Smart picker")) + "\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.isScheduledSendingDisabled ? _c("ActionButton", {
    attrs: {
      "close-after-click": false
    },
    on: {
      click: function ($event) {
        _vm.isMoreActionsOpen = true;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("SendClock", {
          attrs: {
            size: 16,
            title: _vm.t("mail", "Send later")
          }
        })];
      },
      proxy: true
    }], null, false, 98292781)
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Send later")) + "\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _c("ActionCheckbox", {
    attrs: {
      checked: _vm.requestMdnVal
    },
    on: {
      check: function ($event) {
        _vm.requestMdnVal = true;
      },
      uncheck: function ($event) {
        _vm.requestMdnVal = false;
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Request a read receipt")) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _vm.smimeCertificateForCurrentAlias ? _c("ActionCheckbox", {
    attrs: {
      checked: _vm.wantsSmimeSign
    },
    on: {
      check: function ($event) {
        _vm.wantsSmimeSign = true;
      },
      uncheck: function ($event) {
        _vm.wantsSmimeSign = false;
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Sign message with S/MIME")) + "\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.smimeCertificateForCurrentAlias ? _c("ActionCheckbox", {
    attrs: {
      checked: _vm.wantsSmimeEncrypt,
      disabled: _vm.encrypt
    },
    on: {
      check: function ($event) {
        _vm.wantsSmimeEncrypt = true;
      },
      uncheck: function ($event) {
        _vm.wantsSmimeEncrypt = false;
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Encrypt message with S/MIME")) + "\n\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.mailvelope.available ? _c("ActionCheckbox", {
    attrs: {
      checked: _vm.encrypt,
      disabled: _vm.wantsSmimeEncrypt
    },
    on: {
      change: function ($event) {
        _vm.isActionsOpen = false;
      },
      check: function ($event) {
        _vm.encrypt = true;
      },
      uncheck: function ($event) {
        _vm.encrypt = false;
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Encrypt message with Mailvelope")) + "\n\t\t\t\t\t\t")]) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.isMoreActionsOpen ? [_c("ActionButton", {
    attrs: {
      "close-after-click": false
    },
    on: {
      click: function ($event) {
        _vm.isMoreActionsOpen = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("ChevronLeft", {
          attrs: {
            title: _vm.t("mail", "Send later"),
            size: 16
          }
        }), _vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Send later")) + "\n\t\t\t\t\t\t\t")];
      },
      proxy: true
    }], null, false, 2626740362)
  }), _vm._v(" "), _c("ActionRadio", {
    staticClass: "send-action-radio",
    attrs: {
      value: undefined,
      name: "sendLater",
      checked: !_vm.sendAtVal
    },
    on: {
      change: function ($event) {
        return _vm.onChangeSendLater(undefined);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Send now")) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("ActionRadio", {
    staticClass: "send-action-radio send-action-radio--multiline",
    attrs: {
      value: _vm.dateTomorrowMorning,
      name: "sendLater",
      checked: _vm.isSendAtTomorrowMorning
    },
    on: {
      change: function ($event) {
        return _vm.onChangeSendLater(_vm.dateTomorrowMorning);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Tomorrow morning")) + " - " + _vm._s(_vm.convertToLocalDate(_vm.dateTomorrowMorning)) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("ActionRadio", {
    staticClass: "send-action-radio send-action-radio--multiline",
    attrs: {
      value: _vm.dateTomorrowAfternoon,
      name: "sendLater",
      checked: _vm.isSendAtTomorrowAfternoon
    },
    on: {
      change: function ($event) {
        return _vm.onChangeSendLater(_vm.dateTomorrowAfternoon);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Tomorrow afternoon")) + " - " + _vm._s(_vm.convertToLocalDate(_vm.dateTomorrowAfternoon)) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("ActionRadio", {
    staticClass: "send-action-radio send-action-radio--multiline",
    attrs: {
      value: _vm.dateMondayMorning,
      name: "sendLater",
      checked: _vm.isSendAtMondayMorning
    },
    on: {
      change: function ($event) {
        return _vm.onChangeSendLater(_vm.dateMondayMorning);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Monday morning")) + " - " + _vm._s(_vm.convertToLocalDate(_vm.dateMondayMorning)) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("ActionRadio", {
    staticClass: "send-action-radio",
    attrs: {
      name: "sendLater",
      checked: _vm.isSendAtCustom,
      value: _vm.customSendTime
    },
    on: {
      change: function ($event) {
        return _vm.onChangeSendLater(_vm.customSendTime);
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Custom date and time")) + "\n\t\t\t\t\t\t")]), _vm._v(" "), _c("ActionInput", {
    attrs: {
      "is-native-picker": true,
      min: _vm.dateToday,
      type: "datetime-local",
      "first-day-of-week": _vm.firstDayDatetimePicker,
      use12h: _vm.showAmPm,
      formatter: _vm.formatter,
      format: "YYYY-MM-DD HH:mm",
      icon: "",
      "minute-step": 5
    },
    on: {
      change: function ($event) {
        return _vm.onChangeSendLater(_vm.customSendTime);
      }
    },
    model: {
      value: _vm.selectedDate,
      callback: function ($$v) {
        _vm.selectedDate = $$v;
      },
      expression: "selectedDate"
    }
  }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("mail", "Enter a date")) + "\n\t\t\t\t\t\t")])] : _vm._e()], 2), _vm._v(" "), _c("ButtonVue", {
    attrs: {
      disabled: !_vm.canSend,
      "native-type": "submit",
      type: "primary",
      "aria-label": _vm.submitButtonTitle
    },
    on: {
      click: _vm.onSend
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Send", {
          attrs: {
            title: _vm.submitButtonTitle,
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.submitButtonTitle) + "\n\t\t\t\t")])], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=template&id=8279b1da&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=template&id=8279b1da&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "composer-attachment",
    class: {
      "composer-attachment--with-error": _vm.attachment.error
    }
  }, [_c("div", {
    staticClass: "attachment-preview"
  }, [_vm.attachment.imageBlobURL !== false ? _c("img", {
    staticClass: "attachment-preview-image",
    attrs: {
      src: _vm.attachment.imageBlobURL
    }
  }) : _vm.attachment.hasPreview ? _c("img", {
    staticClass: "attachment-preview-image",
    attrs: {
      src: _vm.previewURL
    }
  }) : _c("img", {
    staticClass: "attachment-preview-image",
    attrs: {
      src: _vm.getIcon
    }
  }), _vm._v(" "), _vm.attachment.type === "cloud" ? _c("span", {
    staticClass: "cloud-attachment-icon"
  }, [_c("Cloud", {
    attrs: {
      size: 16
    }
  })], 1) : _vm.attachment.type === "message" ? _c("span", [_c("EmailArrowRightOutlineIcon")], 1) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "attachment-inner"
  }, [_c("span", {
    staticClass: "new-message-attachment-name"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.attachment.displayName ? _vm.attachment.displayName : _vm.attachment.fileName) + "\n\t\t")]), _vm._v(" "), !_vm.attachment.finished ? _c("span", {
    staticClass: "attachments-upload-progress"
  }, [_c("span", {
    staticClass: "attachments-upload-progress--bar",
    style: "width:" + _vm.attachment.percent + "%"
  })]) : _vm.attachment.sizeString ? _c("span", {
    staticClass: "new-message-attachment-size"
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.attachment.sizeString) + "\n\t\t")]) : _vm._e()]), _vm._v(" "), _c("button", {
    on: {
      click: function ($event) {
        return _vm.onDelete(_vm.attachment);
      }
    }
  }, [_c("Close", {
    attrs: {
      size: 24
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=template&id=1d4d5c70&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=template&id=1d4d5c70&scoped=true ***!
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
  return _c("div", {
    staticClass: "new-message-attachments"
  }, [_vm.hasNextLine ? _c("div", {
    staticClass: "new-message-attachments--counter",
    class: {
      "new-message-attachments--counter--with-errors": _vm.hasAttachmentErrors
    },
    on: {
      click: function ($event) {
        _vm.isToggle = !_vm.isToggle;
      }
    }
  }, [_c("span", [_vm._v("\n\t\t\t" + _vm._s(_vm.n("mail", "{count} attachment", "{count} attachments", _vm.attachments.length, {
    count: _vm.attachments.length
  })) + " (" + _vm._s(_vm.formatBytes(_vm.totalSizeOfUpload())) + ")\n\t\t")]), _vm._v(" "), _vm.isToggle ? _c("ChevronUp", {
    attrs: {
      size: 24
    }
  }) : _vm._e(), _vm._v(" "), !_vm.isToggle ? _c("ChevronDown", {
    attrs: {
      size: 24
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("ul", {
    staticClass: "new-message-attachments--list",
    class: {
      hide: _vm.isToggle,
      active: !_vm.isToggle && _vm.hasNextLine
    }
  }, _vm._l(_vm.attachments, function (attachment) {
    return _c("ComposerAttachment", {
      key: attachment.id,
      ref: "attachments",
      refInFor: true,
      attrs: {
        attachment: attachment,
        uploading: _vm.uploading
      },
      on: {
        "on-delete-attachment": function ($event) {
          return _vm.onDelete(attachment);
        }
      }
    });
  }), 1), _vm._v(" "), _c("input", {
    ref: "localAttachments",
    staticStyle: {
      display: "none"
    },
    attrs: {
      type: "file",
      multiple: ""
    },
    on: {
      change: _vm.onLocalAttachmentSelected
    }
  }), _vm._v(" "), _vm.isAttachementPickerOpen ? _c("FilePicker", {
    attrs: {
      title: _vm.t("mail", "Choose a file to add as attachment"),
      buttons: _vm.attachementPickerButtons,
      "filter-fn": _vm.filterAttachements
    },
    on: {
      close: () => _vm.isAttachementPickerOpen = false
    }
  }) : _vm._e(), _vm._v(" "), _vm.isLinkPickerOpen ? _c("FilePicker", {
    attrs: {
      title: _vm.t("mail", "Choose a file to share as a link"),
      multiselect: false,
      buttons: _vm.linkPickerButtons,
      "filter-fn": _vm.filterAttachements
    },
    on: {
      close: () => _vm.isLinkPickerOpen = false
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/DisplayContactDetails.vue?vue&type=template&id=8d6c9538":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/DisplayContactDetails.vue?vue&type=template&id=8d6c9538 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    ref: "contactDetails"
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=template&id=6eda301b&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=template&id=6eda301b&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "mailvelope-composer"
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=template&id=76780ba6&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=template&id=76780ba6&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.showMessageComposer ? _c("Modal", {
    attrs: {
      size: _vm.modalSize,
      name: _vm.modalTitle,
      "additional-trap-elements": _vm.additionalTrapElements
    },
    on: {
      close: function ($event) {
        $event.type === "click" ? _vm.onClose() : _vm.onMinimize();
      }
    }
  }, [_vm.error ? _c("EmptyContent", {
    staticClass: "empty-content",
    attrs: {
      name: _vm.t("mail", "Error sending your message"),
      role: "alert"
    },
    scopedSlots: _vm._u([{
      key: "action",
      fn: function () {
        return [_c("NcButton", {
          attrs: {
            type: "tertiary",
            "aria-label": _vm.t("mail", "Go back")
          },
          on: {
            click: function ($event) {
              _vm.error = undefined;
            }
          }
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Go back")) + "\n\t\t\t")]), _vm._v(" "), _c("NcButton", {
          attrs: {
            type: "tertiary",
            "aria-label": _vm.t("mail", "Retry")
          },
          on: {
            click: _vm.onSend
          }
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Retry")) + "\n\t\t\t")])];
      },
      proxy: true
    }], null, false, 663649868)
  }, [_c("p", [_vm._v(_vm._s(_vm.error))])]) : _vm.uploadingAttachments ? _c("Loading", {
    attrs: {
      hint: _vm.t("mail", "Uploading attachments …"),
      role: "alert"
    }
  }) : _vm.sending ? _c("Loading", {
    attrs: {
      hint: _vm.t("mail", "Sending …"),
      role: "alert"
    }
  }) : _vm.warning ? _c("EmptyContent", {
    staticClass: "empty-content",
    attrs: {
      name: _vm.t("mail", "Warning sending your message"),
      role: "alert"
    },
    scopedSlots: _vm._u([{
      key: "description",
      fn: function () {
        return [_vm._v("\n\t\t\t" + _vm._s(_vm.warning) + "\n\t\t")];
      },
      proxy: true
    }, {
      key: "action",
      fn: function () {
        return [_c("NcButton", {
          attrs: {
            type: "tertiary",
            "aria-label": _vm.t("mail", "Go back")
          },
          on: {
            click: function ($event) {
              _vm.warning = undefined;
            }
          }
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Go back")) + "\n\t\t\t")]), _vm._v(" "), _c("NcButton", {
          attrs: {
            type: "tertiary",
            "aria-label": _vm.t("mail", "Send anyway")
          },
          on: {
            click: _vm.onForceSend
          }
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Send anyway")) + "\n\t\t\t")])];
      },
      proxy: true
    }], null, false, 1727726206)
  }) : [_c("div", {
    class: ["modal-content", {
      "with-recipient": _vm.composerData.to && _vm.composerData.to.length > 0
    }]
  }, [_c("div", {
    staticClass: "left-pane"
  }, [_c("NcButton", {
    staticClass: "maximize-button",
    attrs: {
      type: "tertiary-no-background",
      "aria-label": _vm.t("mail", "Maximize composer")
    },
    on: {
      click: _vm.onMaximize
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [!_vm.largerModal ? _c("MaximizeIcon", {
          attrs: {
            size: 20
          }
        }) : _c("DefaultComposerIcon", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }], null, false, 2562889512)
  }), _vm._v(" "), _c("NcButton", {
    staticClass: "minimize-button",
    attrs: {
      type: "tertiary-no-background",
      "aria-label": _vm.t("mail", "Minimize composer")
    },
    on: {
      click: _vm.onMinimize
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("MinimizeIcon", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }], null, false, 1222194427)
  }), _vm._v(" "), _c("Composer", {
    ref: "composer",
    attrs: {
      "from-account": _vm.composerData.accountId,
      "from-alias": _vm.composerData.aliasId,
      to: _vm.composerData.to,
      cc: _vm.composerData.cc,
      bcc: _vm.composerData.bcc,
      subject: _vm.composerData.subject,
      "attachments-data": _vm.composerData.attachments,
      body: _vm.composerData.body,
      "editor-body": _vm.convertEditorBody(_vm.composerData),
      "in-reply-to-message-id": _vm.composerData.inReplyToMessageId,
      "reply-to": _vm.composerData.replyTo,
      "forward-from": _vm.composerData.forwardFrom,
      "send-at": _vm.composerData.sendAt * 1000,
      "forwarded-messages": _vm.forwardedMessages,
      "smart-reply": _vm.smartReply,
      "can-save-draft": _vm.canSaveDraft,
      "saving-draft": _vm.savingDraft,
      "draft-saved": _vm.draftSaved,
      "smime-sign": _vm.composerData.smimeSign,
      "smime-encrypt": _vm.composerData.smimeEncrypt,
      "is-first-open": _vm.modalFirstOpen,
      "request-mdn": _vm.composerData.requestMdn,
      accounts: _vm.accounts
    },
    on: {
      "update:from-account": function ($event) {
        return _vm.patchComposerData({
          accountId: $event
        });
      },
      "update:from-alias": function ($event) {
        return _vm.patchComposerData({
          aliasId: $event
        });
      },
      "update:to": function ($event) {
        return _vm.patchComposerData({
          to: $event
        });
      },
      "update:cc": function ($event) {
        return _vm.patchComposerData({
          cc: $event
        });
      },
      "update:bcc": function ($event) {
        return _vm.patchComposerData({
          bcc: $event
        });
      },
      "update:subject": function ($event) {
        return _vm.patchComposerData({
          subject: $event
        });
      },
      "update:attachments-data": function ($event) {
        return _vm.patchComposerData({
          attachments: $event
        });
      },
      "update:editor-body": function ($event) {
        return _vm.patchComposerData({
          editorBody: $event
        });
      },
      "update:send-at": function ($event) {
        return _vm.patchComposerData({
          sendAt: $event / 1000
        });
      },
      "update:smime-sign": function ($event) {
        return _vm.patchComposerData({
          smimeSign: $event
        });
      },
      "update:smime-encrypt": function ($event) {
        return _vm.patchComposerData({
          smimeSign: $event
        });
      },
      "update:request-mdn": function ($event) {
        return _vm.patchComposerData({
          requestMdn: $event
        });
      },
      draft: _vm.onDraft,
      "discard-draft": _vm.discardDraft,
      "upload-attachment": _vm.onAttachmentUploading,
      send: _vm.onSend,
      "show-toolbar": _vm.handleShow
    }
  })], 1), _vm._v(" "), _vm.showRecipientPane ? _c("div", {
    staticClass: "right-pane"
  }, [_c("RecipientInfo")], 1) : _vm._e()])]], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=template&id=62be0ee7&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=template&id=62be0ee7&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "recipient-info"
  }, [_vm.recipients.length === 1 ? _c("div", {
    staticClass: "recipient-info__single"
  }, [_c("div", {
    staticClass: "recipient-info__header"
  }, [_c("div", {
    staticClass: "recipient-info__avatar"
  }, [_c("Avatar", {
    attrs: {
      "display-name": _vm.recipients[0].label,
      email: _vm.recipients[0].email,
      size: 55,
      "disable-tooltip": true,
      "disable-menu": true
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "recipient-info__details"
  }, [_c("DisplayContactDetails", {
    attrs: {
      email: _vm.recipients[0].email
    }
  })], 1)])]) : _c("div", {
    staticClass: "recipient-info__multiple"
  }, _vm._l(_vm.recipients, function (recipient, index) {
    return _c("div", {
      key: recipient.email,
      staticClass: "recipient-info__item"
    }, [_c("div", {
      staticClass: "recipient-info__header"
    }, [_c("div", {
      staticClass: "recipient-info__avatar"
    }, [_c("Avatar", {
      attrs: {
        "display-name": recipient.label,
        email: recipient.email,
        size: 55,
        "disable-tooltip": true,
        "disable-menu": true
      }
    })], 1), _vm._v(" "), !_vm.expandedRecipients[index] ? _c("div", {
      staticClass: "recipient-info__name"
    }, [_c("h6", [_vm._v(_vm._s(recipient.email))])]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "recipient-info__expand-toggle",
      on: {
        click: function ($event) {
          return _vm.toggleExpand(index);
        }
      }
    }, [_vm.isExpanded(index) ? [_c("div", {
      staticClass: "recipient-info__show-less"
    }, [_c("IconArrowUp", {
      attrs: {
        size: 16
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.t("mail", "Show less")))])], 1)] : [_c("IconArrowDown", {
      attrs: {
        size: 16
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.t("mail", "Show more")))])]], 2)]), _vm._v(" "), _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.expandedRecipients[index],
        expression: "expandedRecipients[index]"
      }],
      staticClass: "recipient-info__details"
    }, [_c("DisplayContactDetails", {
      attrs: {
        email: recipient.email
      }
    })], 1)]);
  }), 0)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=template&id=dccc6dec&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=template&id=dccc6dec&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    class: _vm.isInternal ? "ncselect__tag--recipient" : "ncselect__tag--recipient external",
    attrs: {
      title: _vm.option.email
    }
  }, [_c("ListItemIcon", {
    attrs: {
      "no-margin": true,
      name: _vm.option.label,
      url: _vm.option.photo,
      "avatar-size": 24
    }
  }), _vm._v(" "), _c("Close", {
    staticClass: "delete-recipient",
    attrs: {
      size: 16
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.removeRecipient(_vm.option);
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/errors/AttachmentMissingError.js":
/*!**********************************************!*\
  !*** ./src/errors/AttachmentMissingError.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttachmentMissingError)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
class AttachmentMissingError extends Error {
  constructor(message) {
    super(message);
    this.name = AttachmentMissingError.getName();
    this.message = message;
  }
  static getName() {
    return 'AttachmentMissingError';
  }
}

/***/ }),

/***/ "./src/service/FileService.js":
/*!************************************!*\
  !*** ./src/service/FileService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFileData: () => (/* binding */ getFileData),
/* harmony export */   getFileSize: () => (/* binding */ getFileSize)
/* harmony export */ });
/* harmony import */ var _dav_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dav/client.js */ "./src/dav/client.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


async function getFileSize(path) {
  var _response$data;
  const response = await (0,_dav_client_js__WEBPACK_IMPORTED_MODULE_0__.getClient)('files').stat(path, {
    data: "<?xml version=\"1.0\"?>\n\t\t\t<d:propfind  xmlns:d=\"DAV:\"\n\t\t\t\txmlns:oc=\"http://owncloud.org/ns\">\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:size />\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>",
    details: true
  });
  return response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 || (_response$data = _response$data.props) === null || _response$data === void 0 ? void 0 : _response$data.size;
}
async function getFileData(path) {
  var _response$data2;
  const response = await (0,_dav_client_js__WEBPACK_IMPORTED_MODULE_0__.getClient)('files').stat(path, {
    data: "<?xml version=\"1.0\"?>\n\t\t\t<d:propfind\n\t\t\txmlns:d=\"DAV:\"\n\t\t\txmlns:oc=\"http://owncloud.org/ns\"\n\t\t\txmlns:nc=\"http://nextcloud.org/ns\">\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:size />\n\t\t\t\t\t<oc:fileid />\n\t\t\t\t\t<nc:has-preview />\n\t\t\t\t</d:prop>\n\t\t\t</d:propfind>",
    details: true
  });
  return response === null || response === void 0 || (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.props;
}

/***/ }),

/***/ "./src/service/FileSharingService.js":
/*!*******************************************!*\
  !*** ./src/service/FileSharingService.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareFile: () => (/* binding */ shareFile)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

// File originally from https://github.com/nextcloud/spreed/blob/bc22c21cf70a6243e7df7d838d49018c61468050/src/services/filesSharingServices.js
// Slightly modified for use in Mail





/**
 * Makes a share link for a given file or directory.
 *
 * @param {string} path The file path from the user's root directory. e.g. `/myfile.txt`
 * @param {string} token The conversation's token
 * @return {string} url share link
 */
const shareFile = async function (path, token) {
  try {
    const res = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files_sharing/api/v1/', 2) + 'shares', {
      shareType: 3,
      // OC.Share.SHARE_TYPE_LINK,
      path,
      shareWith: token
    });
    return res.data.ocs.data.url;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.ocs && error.response.data.ocs.meta && error.response.data.ocs.meta.message) {
      console.error("Error while sharing file: ".concat(error.response.data.ocs.meta.message || 'Unknown error'));
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(error.response.data.ocs.meta.message);
      throw error;
    } else {
      console.error('Error while sharing file: Unknown error');
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(t('mail', 'Error while sharing file'));
      throw error;
    }
  }
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `.message-composer[data-v-12b95150] {
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
}
.composer-actions[data-v-12b95150] {
  position: sticky;
  background: linear-gradient(rgba(255, 255, 255, 0), var(--color-main-background-translucent) 50%);
}
.composer-fields[data-v-12b95150] {
  padding: var(--default-grid-baseline) calc(var(--default-grid-baseline) * 2) 0 calc(var(--default-grid-baseline) * 2);
}
.composer-fields__label[data-v-12b95150] {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  /** NcButton does not allow font weight styling */
}
.composer-fields__label[data-v-12b95150] .button-vue__text {
  font-weight: normal;
}
.composer-fields.mail-account[data-v-12b95150] {
  border-top: none;
  padding-top: 10px;
}
.composer-fields input[data-v-12b95150],
.composer-fields TextEditor[data-v-12b95150] {
  flex-grow: 1;
  max-width: none;
  border: none;
  border-radius: 0;
}
.composer-fields .composer-fields--custom[data-v-12b95150] {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 2px;
}
.composer-fields .composer-fields--custom button[data-v-12b95150] {
  margin-top: 0;
  margin-bottom: 0;
  background-color: transparent;
  border: none;
  opacity: 0.5;
  padding: 10px 16px;
}
.composer-fields .composer-fields--custom .select[data-v-12b95150] {
  width: 100%;
}
.composer-fields .composer-fields--custom .vs__search[data-v-12b95150] {
  width: 100%;
}
.composer-fields .composer-fields--custom .v-select[data-v-12b95150] {
  flex-grow: 0.95;
}
.composer-fields .subject[data-v-12b95150] {
  font-size: 15px;
  font-weight: bold;
  margin: 3px 0 !important;
  padding: 0 !important;
  width: 100%;
}
.composer-fields .subject[data-v-12b95150]:focus-visible {
  box-shadow: none !important;
}
.composer-fields .message-body[data-v-12b95150] {
  height: 100%;
  width: 100%;
  margin: 0;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  -webkit-user-select: text;
  user-select: text;
}
.message-editor[data-v-12b95150] {
  flex: 1 1 100%;
  min-height: 0;
  border-top: 1px solid var(--color-border);
}
.draft-status[data-v-12b95150] {
  padding: 2px;
  opacity: 0.5;
  font-size: small;
  display: block;
}
.from-label[data-v-12b95150],
.to-label[data-v-12b95150],
.copy-toggle[data-v-12b95150],
.cc-label[data-v-12b95150],
.bcc-label[data-v-12b95150] {
  color: var(--color-text-maxcontrast);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcc-label[data-v-12b95150] {
  top: initial;
  bottom: 0;
}
.copy-toggle[data-v-12b95150] {
  cursor: pointer;
  width: initial;
}
.copy-toggle[data-v-12b95150]:hover, .copy-toggle[data-v-12b95150]:focus {
  color: var(--color-main-text);
}
.reply[data-v-12b95150] {
  min-height: 100px;
}
.subject[data-v-12b95150] {
  border: none !important;
}
[data-v-12b95150] [data-select="create"] .avatardiv--unknown {
  background: var(--color-text-maxcontrast) !important;
}
#from[data-v-12b95150] {
  width: 100%;
  cursor: pointer;
}
[data-v-12b95150] .vs__actions {
  display: none;
}
[data-v-12b95150] .v-select.select {
  left: 0 !important;
}
[data-v-12b95150] .vs__dropdown-menu {
  padding: 0 !important;
}
[data-v-12b95150] .vs__dropdown-option {
  border-radius: 0 !important;
}
.submit-message.send.primary.icon-confirm-white[data-v-12b95150] {
  color: var(--color-main-background);
}
.button[data-v-12b95150] {
  background-color: transparent;
  border: none;
}
.send-button[data-v-12b95150] {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-left: 5px;
}
.send-button .send-icon[data-v-12b95150] {
  padding-right: 5px;
}
.centered-content[data-v-12b95150] {
  margin-top: 0 !important;
}
.composer-actions-right[data-v-12b95150] {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  bottom: 5px;
}
.composer-actions--primary-actions[data-v-12b95150] {
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  align-items: center;
}
.composer-actions--secondary-actions[data-v-12b95150] {
  display: flex;
  flex-direction: row;
  padding: 12px;
  gap: 5px;
}
.composer-actions--primary-actions .button[data-v-12b95150] {
  padding: 2px;
}
.composer-actions--secondary-actions .button[data-v-12b95150] {
  flex-shrink: 0;
}
.composer-actions-draft-status[data-v-12b95150] {
  padding-left: 10px;
}
[data-v-12b95150] .vs__selected-options .vs__dropdown-toggle .vs--multiple {
  width: 100%;
}
@media only screen and (max-width: 580px) {
.composer-actions-right[data-v-12b95150] {
    align-items: end;
    flex-direction: column-reverse;
}
.composer-actions-draft-status[data-v-12b95150] {
    text-align: end;
    padding-right: 15px;
}
.composer-actions--primary-actions[data-v-12b95150] {
    padding-right: 5px;
}
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `.composer-attachment[data-v-8279b1da] {
  width: calc(50% - 20px);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
  flex-wrap: wrap;
}
.composer-attachment--with-error[data-v-8279b1da] {
  color: red;
  opacity: 0.5;
}
.composer-attachment .cloud-attachment-icon[data-v-8279b1da] {
  position: absolute;
  z-index: 2;
  right: 2px;
  top: 2px;
  color: rgb(0, 0, 0);
}
.composer-attachment .attachment-preview[data-v-8279b1da] {
  display: inline-flex;
  flex-wrap: wrap;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  position: relative;
}
.composer-attachment .attachment-preview img[data-v-8279b1da] {
  display: block;
  min-width: 50px;
  min-height: 50px;
  max-width: 72px;
  max-height: 72px;
  position: absolute;
}
.composer-attachment .attachment-preview span[data-v-8279b1da] {
  color: rgba(0, 0, 0, 0.3);
  font-size: 13px;
  text-transform: uppercase;
  font-weight: bold;
}
.composer-attachment button[data-v-8279b1da] {
  padding: 0;
  background: transparent;
  border: none;
  margin: 6px -2px 0 0;
}
.attachments-upload-progress[data-v-8279b1da] {
  display: block;
  height: 5px;
  width: 100%;
  position: relative;
  border-radius: 5px;
  background: var(--color-background-dark);
  margin-top: 7px;
}
.attachments-upload-progress .attachments-upload-progress--bar[data-v-8279b1da] {
  height: 5px;
  background: var(--color-primary-element-light);
  position: absolute;
  z-index: 1;
  left: 0;
  border-radius: 5px;
}
.attachments-upload-progress > div[data-v-8279b1da] {
  padding-left: 3px;
}
.new-message-attachments-action[data-v-8279b1da] {
  display: inline-block;
  vertical-align: middle;
  padding: 18px;
  opacity: 0.5;
}
.attachment-inner[data-v-8279b1da] {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 90px);
  position: relative;
}

/* attachment filenames */
.new-message-attachment-name[data-v-8279b1da] {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 3px;
}
.new-message-attachment-size[data-v-8279b1da] {
  color: #6a6a6a;
  width: 100%;
}

/* Colour the filename with a different color during attachment upload */
.new-message-attachment-name.upload-ongoing[data-v-8279b1da] {
  color: #0082c9;
}

/* Colour the filename in red if the attachment upload failed */
.new-message-attachment-name.upload-warning[data-v-8279b1da] {
  color: #d2322d;
}

/* Red ProgressBar for failed attachment uploads */
.new-message-attachment-name.upload-warning .ui-progressbar-value[data-v-8279b1da] {
  border: 1px solid #e9322d;
  background: #e9322d;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `.new-message-attachments--counter[data-v-1d4d5c70] {
  color: var(--color-text-maxcontrast);
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.new-message-attachments--counter--with-errors[data-v-1d4d5c70] {
  color: red;
}
.new-message-attachments--list[data-v-1d4d5c70] {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  padding: 0 10px;
}
.new-message-attachments--list.hide[data-v-1d4d5c70] {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
}
.new-message-attachments--list.active[data-v-1d4d5c70] {
  overflow: auto;
  max-height: 287px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `@media only screen and (max-width: 600px) {
[data-v-76780ba6] .modal-container {
    max-width: 80%;
}
}
[data-v-76780ba6] .modal-wrapper .modal-container {
  overflow-y: auto !important;
  overflow-x: auto !important;
  height: 90%;
  max-height: 700px !important;
}
.minimize-button[data-v-76780ba6] {
  float: right;
  position: absolute;
  top: 4px;
  inset-inline-end: 63px;
}
.maximize-button[data-v-76780ba6] {
  float: right;
  position: absolute;
  top: 4px;
  inset-inline-end: 33px;
}
.empty-content[data-v-76780ba6] {
  height: 100%;
  display: flex;
}
.modal-content[data-v-76780ba6] {
  display: flex;
  height: 100%;
  flex-direction: row;
  width: 100%;
}
.left-pane[data-v-76780ba6] {
  flex: 1;
  overflow-y: auto;
}
.right-pane[data-v-76780ba6] {
  flex: 0 0 400px;
  overflow-y: auto;
  padding-left: 5px;
  border-left: 1px solid #ccc;
}
@media (max-width: 1024px) {
.right-pane[data-v-76780ba6] {
    display: none;
}
}
.modal-content.with-recipient .left-pane[data-v-76780ba6] {
  flex: 1;
}
.modal-content .left-pane[data-v-76780ba6] {
  width: 100%;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `.recipient-info[data-v-62be0ee7] {
  display: inline;
  width: 100%;
}
.recipient-info__single[data-v-62be0ee7] {
  width: 400px;
  display: inline-block;
}
.recipient-info__avatar[data-v-62be0ee7] {
  margin-top: 20px;
  display: inline;
  float: left;
  padding: 20px;
}
.recipient-info__details[data-v-62be0ee7] {
  max-width: 100%;
}
.recipient-info__multiple[data-v-62be0ee7] {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.recipient-info__item[data-v-62be0ee7] {
  margin-bottom: 10px;
}
.recipient-info__expand-toggle[data-v-62be0ee7] {
  cursor: pointer;
  display: flex;
  gap: 5px;
}
.recipient-info__header[data-v-62be0ee7] {
  display: contents;
}
.recipient-info__name[data-v-62be0ee7] {
  margin-top: 50px;
}
.recipient-info__show-less[data-v-62be0ee7] {
  margin-top: 40px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `.external[data-v-dccc6dec] {
  background-color: var(--color-error) !important;
}
.external[data-v-dccc6dec] .option__lineone {
  color: var(--color-primary-text) !important;
}
.ncselect__tag--recipient[data-v-dccc6dec] {
  padding: 0;
  border-radius: 25px;
  border-color: transparent;
  background-color: var(--color-background-dark);
  height: 24px;
  max-width: 100%;
  display: flex;
}
.ncselect__tag--recipient > span.option[data-v-dccc6dec] {
  margin-left: 0;
}
.delete-recipient[data-v-dccc6dec] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 24px;
  width: 24px;
  min-width: 24px;
  margin-left: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}
.delete-recipient[data-v-dccc6dec]:hover {
  background: var(--color-background-darker);
}
.option[data-v-dccc6dec] {
  flex-shrink: 1;
  overflow: hidden;
  width: unset;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `
#mailvelope-composer[data-v-6eda301b] {
	width: 100%;
	height: 450px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_style_index_0_id_12b95150_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_style_index_0_id_12b95150_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_style_index_0_id_12b95150_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_style_index_0_id_12b95150_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_style_index_0_id_12b95150_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_style_index_0_id_8279b1da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_style_index_0_id_8279b1da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_style_index_0_id_8279b1da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_style_index_0_id_8279b1da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_style_index_0_id_8279b1da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_style_index_0_id_1d4d5c70_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_style_index_0_id_1d4d5c70_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_style_index_0_id_1d4d5c70_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_style_index_0_id_1d4d5c70_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_style_index_0_id_1d4d5c70_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_style_index_0_id_76780ba6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_style_index_0_id_76780ba6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_style_index_0_id_76780ba6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_style_index_0_id_76780ba6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_style_index_0_id_76780ba6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_style_index_0_id_62be0ee7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_style_index_0_id_62be0ee7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_style_index_0_id_62be0ee7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_style_index_0_id_62be0ee7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_style_index_0_id_62be0ee7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_style_index_0_id_dccc6dec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_style_index_0_id_dccc6dec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_style_index_0_id_dccc6dec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_style_index_0_id_dccc6dec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_style_index_0_id_dccc6dec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_style_index_0_id_6eda301b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_style_index_0_id_6eda301b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_style_index_0_id_6eda301b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_style_index_0_id_6eda301b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_style_index_0_id_6eda301b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Composer.vue":
/*!*************************************!*\
  !*** ./src/components/Composer.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Composer_vue_vue_type_template_id_12b95150_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Composer.vue?vue&type=template&id=12b95150&scoped=true */ "./src/components/Composer.vue?vue&type=template&id=12b95150&scoped=true");
/* harmony import */ var _Composer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Composer.vue?vue&type=script&lang=js */ "./src/components/Composer.vue?vue&type=script&lang=js");
/* harmony import */ var _Composer_vue_vue_type_style_index_0_id_12b95150_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true */ "./src/components/Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Composer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Composer_vue_vue_type_template_id_12b95150_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Composer_vue_vue_type_template_id_12b95150_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "12b95150",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Composer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/ComposerAttachment.vue":
/*!***********************************************!*\
  !*** ./src/components/ComposerAttachment.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ComposerAttachment_vue_vue_type_template_id_8279b1da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComposerAttachment.vue?vue&type=template&id=8279b1da&scoped=true */ "./src/components/ComposerAttachment.vue?vue&type=template&id=8279b1da&scoped=true");
/* harmony import */ var _ComposerAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComposerAttachment.vue?vue&type=script&lang=js */ "./src/components/ComposerAttachment.vue?vue&type=script&lang=js");
/* harmony import */ var _ComposerAttachment_vue_vue_type_style_index_0_id_8279b1da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true */ "./src/components/ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComposerAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComposerAttachment_vue_vue_type_template_id_8279b1da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ComposerAttachment_vue_vue_type_template_id_8279b1da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8279b1da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ComposerAttachment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/ComposerAttachments.vue":
/*!************************************************!*\
  !*** ./src/components/ComposerAttachments.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ComposerAttachments_vue_vue_type_template_id_1d4d5c70_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComposerAttachments.vue?vue&type=template&id=1d4d5c70&scoped=true */ "./src/components/ComposerAttachments.vue?vue&type=template&id=1d4d5c70&scoped=true");
/* harmony import */ var _ComposerAttachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComposerAttachments.vue?vue&type=script&lang=js */ "./src/components/ComposerAttachments.vue?vue&type=script&lang=js");
/* harmony import */ var _ComposerAttachments_vue_vue_type_style_index_0_id_1d4d5c70_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss */ "./src/components/ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComposerAttachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComposerAttachments_vue_vue_type_template_id_1d4d5c70_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _ComposerAttachments_vue_vue_type_template_id_1d4d5c70_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1d4d5c70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ComposerAttachments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/DisplayContactDetails.vue":
/*!**************************************************!*\
  !*** ./src/components/DisplayContactDetails.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DisplayContactDetails_vue_vue_type_template_id_8d6c9538__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayContactDetails.vue?vue&type=template&id=8d6c9538 */ "./src/components/DisplayContactDetails.vue?vue&type=template&id=8d6c9538");
/* harmony import */ var _DisplayContactDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayContactDetails.vue?vue&type=script&lang=js */ "./src/components/DisplayContactDetails.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DisplayContactDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DisplayContactDetails_vue_vue_type_template_id_8d6c9538__WEBPACK_IMPORTED_MODULE_0__.render,
  _DisplayContactDetails_vue_vue_type_template_id_8d6c9538__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DisplayContactDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/MailvelopeEditor.vue":
/*!*********************************************!*\
  !*** ./src/components/MailvelopeEditor.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MailvelopeEditor_vue_vue_type_template_id_6eda301b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailvelopeEditor.vue?vue&type=template&id=6eda301b&scoped=true */ "./src/components/MailvelopeEditor.vue?vue&type=template&id=6eda301b&scoped=true");
/* harmony import */ var _MailvelopeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailvelopeEditor.vue?vue&type=script&lang=js */ "./src/components/MailvelopeEditor.vue?vue&type=script&lang=js");
/* harmony import */ var _MailvelopeEditor_vue_vue_type_style_index_0_id_6eda301b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css */ "./src/components/MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MailvelopeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MailvelopeEditor_vue_vue_type_template_id_6eda301b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _MailvelopeEditor_vue_vue_type_template_id_6eda301b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6eda301b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MailvelopeEditor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/NewMessageModal.vue":
/*!********************************************!*\
  !*** ./src/components/NewMessageModal.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewMessageModal_vue_vue_type_template_id_76780ba6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewMessageModal.vue?vue&type=template&id=76780ba6&scoped=true */ "./src/components/NewMessageModal.vue?vue&type=template&id=76780ba6&scoped=true");
/* harmony import */ var _NewMessageModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewMessageModal.vue?vue&type=script&lang=js */ "./src/components/NewMessageModal.vue?vue&type=script&lang=js");
/* harmony import */ var _NewMessageModal_vue_vue_type_style_index_0_id_76780ba6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true */ "./src/components/NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewMessageModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewMessageModal_vue_vue_type_template_id_76780ba6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NewMessageModal_vue_vue_type_template_id_76780ba6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76780ba6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NewMessageModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/RecipientInfo.vue":
/*!******************************************!*\
  !*** ./src/components/RecipientInfo.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecipientInfo_vue_vue_type_template_id_62be0ee7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecipientInfo.vue?vue&type=template&id=62be0ee7&scoped=true */ "./src/components/RecipientInfo.vue?vue&type=template&id=62be0ee7&scoped=true");
/* harmony import */ var _RecipientInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipientInfo.vue?vue&type=script&lang=js */ "./src/components/RecipientInfo.vue?vue&type=script&lang=js");
/* harmony import */ var _RecipientInfo_vue_vue_type_style_index_0_id_62be0ee7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss */ "./src/components/RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecipientInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecipientInfo_vue_vue_type_template_id_62be0ee7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecipientInfo_vue_vue_type_template_id_62be0ee7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "62be0ee7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/RecipientInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/RecipientListItem.vue":
/*!**********************************************!*\
  !*** ./src/components/RecipientListItem.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecipientListItem_vue_vue_type_template_id_dccc6dec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecipientListItem.vue?vue&type=template&id=dccc6dec&scoped=true */ "./src/components/RecipientListItem.vue?vue&type=template&id=dccc6dec&scoped=true");
/* harmony import */ var _RecipientListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipientListItem.vue?vue&type=script&lang=js */ "./src/components/RecipientListItem.vue?vue&type=script&lang=js");
/* harmony import */ var _RecipientListItem_vue_vue_type_style_index_0_id_dccc6dec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss */ "./src/components/RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecipientListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecipientListItem_vue_vue_type_template_id_dccc6dec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RecipientListItem_vue_vue_type_template_id_dccc6dec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "dccc6dec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/RecipientListItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/Composer.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/Composer.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Composer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ComposerAttachment.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/components/ComposerAttachment.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComposerAttachment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ComposerAttachments.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/components/ComposerAttachments.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComposerAttachments.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/DisplayContactDetails.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/components/DisplayContactDetails.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayContactDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayContactDetails.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/DisplayContactDetails.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayContactDetails_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MailvelopeEditor.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/components/MailvelopeEditor.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailvelopeEditor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/NewMessageModal.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./src/components/NewMessageModal.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMessageModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/RecipientInfo.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./src/components/RecipientInfo.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecipientInfo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/RecipientListItem.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/RecipientListItem.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecipientListItem.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Composer.vue?vue&type=template&id=12b95150&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/components/Composer.vue?vue&type=template&id=12b95150&scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_template_id_12b95150_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_template_id_12b95150_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_template_id_12b95150_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Composer.vue?vue&type=template&id=12b95150&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=template&id=12b95150&scoped=true");


/***/ }),

/***/ "./src/components/ComposerAttachment.vue?vue&type=template&id=8279b1da&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./src/components/ComposerAttachment.vue?vue&type=template&id=8279b1da&scoped=true ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_template_id_8279b1da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_template_id_8279b1da_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_template_id_8279b1da_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComposerAttachment.vue?vue&type=template&id=8279b1da&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=template&id=8279b1da&scoped=true");


/***/ }),

/***/ "./src/components/ComposerAttachments.vue?vue&type=template&id=1d4d5c70&scoped=true":
/*!******************************************************************************************!*\
  !*** ./src/components/ComposerAttachments.vue?vue&type=template&id=1d4d5c70&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_template_id_1d4d5c70_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_template_id_1d4d5c70_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_template_id_1d4d5c70_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComposerAttachments.vue?vue&type=template&id=1d4d5c70&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=template&id=1d4d5c70&scoped=true");


/***/ }),

/***/ "./src/components/DisplayContactDetails.vue?vue&type=template&id=8d6c9538":
/*!********************************************************************************!*\
  !*** ./src/components/DisplayContactDetails.vue?vue&type=template&id=8d6c9538 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayContactDetails_vue_vue_type_template_id_8d6c9538__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayContactDetails_vue_vue_type_template_id_8d6c9538__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DisplayContactDetails_vue_vue_type_template_id_8d6c9538__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DisplayContactDetails.vue?vue&type=template&id=8d6c9538 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/DisplayContactDetails.vue?vue&type=template&id=8d6c9538");


/***/ }),

/***/ "./src/components/MailvelopeEditor.vue?vue&type=template&id=6eda301b&scoped=true":
/*!***************************************************************************************!*\
  !*** ./src/components/MailvelopeEditor.vue?vue&type=template&id=6eda301b&scoped=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_template_id_6eda301b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_template_id_6eda301b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_template_id_6eda301b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailvelopeEditor.vue?vue&type=template&id=6eda301b&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=template&id=6eda301b&scoped=true");


/***/ }),

/***/ "./src/components/NewMessageModal.vue?vue&type=template&id=76780ba6&scoped=true":
/*!**************************************************************************************!*\
  !*** ./src/components/NewMessageModal.vue?vue&type=template&id=76780ba6&scoped=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_template_id_76780ba6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_template_id_76780ba6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_template_id_76780ba6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMessageModal.vue?vue&type=template&id=76780ba6&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=template&id=76780ba6&scoped=true");


/***/ }),

/***/ "./src/components/RecipientInfo.vue?vue&type=template&id=62be0ee7&scoped=true":
/*!************************************************************************************!*\
  !*** ./src/components/RecipientInfo.vue?vue&type=template&id=62be0ee7&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_template_id_62be0ee7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_template_id_62be0ee7_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_template_id_62be0ee7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecipientInfo.vue?vue&type=template&id=62be0ee7&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=template&id=62be0ee7&scoped=true");


/***/ }),

/***/ "./src/components/RecipientListItem.vue?vue&type=template&id=dccc6dec&scoped=true":
/*!****************************************************************************************!*\
  !*** ./src/components/RecipientListItem.vue?vue&type=template&id=dccc6dec&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_template_id_dccc6dec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_template_id_dccc6dec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_template_id_dccc6dec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecipientListItem.vue?vue&type=template&id=dccc6dec&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=template&id=dccc6dec&scoped=true");


/***/ }),

/***/ "./src/components/Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/components/Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Composer_vue_vue_type_style_index_0_id_12b95150_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Composer.vue?vue&type=style&index=0&id=12b95150&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./src/components/ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachment_vue_vue_type_style_index_0_id_8279b1da_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachment.vue?vue&type=style&index=0&id=8279b1da&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss":
/*!*********************************************************************************************************!*\
  !*** ./src/components/ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComposerAttachments_vue_vue_type_style_index_0_id_1d4d5c70_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/ComposerAttachments.vue?vue&type=style&index=0&id=1d4d5c70&scoped=true&lang=scss");


/***/ }),

/***/ "./src/components/NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./src/components/NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMessageModal_vue_vue_type_style_index_0_id_76780ba6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/NewMessageModal.vue?vue&type=style&index=0&id=76780ba6&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss":
/*!***************************************************************************************************!*\
  !*** ./src/components/RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientInfo_vue_vue_type_style_index_0_id_62be0ee7_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientInfo.vue?vue&type=style&index=0&id=62be0ee7&scoped=true&lang=scss");


/***/ }),

/***/ "./src/components/RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss":
/*!*******************************************************************************************************!*\
  !*** ./src/components/RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipientListItem_vue_vue_type_style_index_0_id_dccc6dec_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RecipientListItem.vue?vue&type=style&index=0&id=dccc6dec&scoped=true&lang=scss");


/***/ }),

/***/ "./src/components/MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css":
/*!*****************************************************************************************************!*\
  !*** ./src/components/MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MailvelopeEditor_vue_vue_type_style_index_0_id_6eda301b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/MailvelopeEditor.vue?vue&type=style&index=0&id=6eda301b&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=mail.new-message-modal.69245c9888c45af83880.js.map