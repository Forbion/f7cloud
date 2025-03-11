"use strict";
(self["webpackChunknextcloud_mail"] = self["webpackChunknextcloud_mail"] || []).push([["src_components_AccountForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-tabs-component */ "./node_modules/vue-tabs-component/dist/index.js");
/* harmony import */ var vue_tabs_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_tabs_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue */ "./node_modules/@nextcloud/vue/dist/index.mjs");
/* harmony import */ var vue_material_design_icons_Check_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/Check.vue */ "./node_modules/vue-material-design-icons/Check.vue");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/* harmony import */ var _service_AutoConfigService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/AutoConfigService.js */ "./src/service/AutoConfigService.js");
/* harmony import */ var _integration_oauth_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../integration/oauth.js */ "./src/integration/oauth.js");
/* harmony import */ var _store_mainStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/mainStore.js */ "./src/store/mainStore.js");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AccountForm',
  components: {
    NcPasswordField: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__.NcPasswordField,
    NcInputField: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__.NcInputField,
    NcCheckboxRadioSwitch: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__.NcCheckboxRadioSwitch,
    Tab: vue_tabs_component__WEBPACK_IMPORTED_MODULE_0__.Tab,
    Tabs: vue_tabs_component__WEBPACK_IMPORTED_MODULE_0__.Tabs,
    ButtonVue: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__.NcButton,
    IconLoading: _nextcloud_vue__WEBPACK_IMPORTED_MODULE_1__.NcLoadingIcon,
    IconCheck: vue_material_design_icons_Check_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    displayName: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    account: {
      type: Object,
      required: false,
      default: () => undefined
    }
  },
  data() {
    const fromAccountOr = (prop, def) => {
      if (this.account !== undefined) {
        return this.account[prop];
      } else {
        return def;
      }
    };
    return {
      loading: false,
      loadingMessage: undefined,
      mode: 'auto',
      accountName: this.displayName,
      emailAddress: this.email,
      autoConfig: {
        password: ''
      },
      manualConfig: {
        imapHost: fromAccountOr('imapHost', ''),
        imapPort: fromAccountOr('imapPort', 993),
        imapSslMode: fromAccountOr('imapSslMode', 'ssl'),
        imapUser: fromAccountOr('imapUser', ''),
        imapPassword: '',
        smtpHost: fromAccountOr('smtpHost', ''),
        smtpPort: fromAccountOr('smtpPort', 587),
        smtpSslMode: fromAccountOr('smtpSslMode', 'tls'),
        smtpUser: fromAccountOr('smtpUser', ''),
        smtpPassword: ''
      },
      feedback: null,
      password: ''
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,pinia__WEBPACK_IMPORTED_MODULE_8__.mapStores)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_7__["default"])), (0,pinia__WEBPACK_IMPORTED_MODULE_8__.mapState)(_store_mainStore_js__WEBPACK_IMPORTED_MODULE_7__["default"], ['googleOauthUrl', 'microsoftOauthUrl'])), {}, {
    settingsPage() {
      return this.account !== undefined;
    },
    isDisabledAuto() {
      if (this.loading) {
        return true;
      }
      if (this.mode !== 'auto') {
        return this.loading;
      }
      return !this.emailAddress || !this.isValidEmail(this.emailAddress) || !this.googleOauthUrl && !this.autoConfig.password;
    },
    isDisabledManual() {
      if (this.loading) {
        return true;
      }
      if (this.mode !== 'manual') {
        return this.loading;
      }
      return !this.emailAddress || !this.isValidEmail(this.emailAddress) || !this.manualConfig.imapHost || !this.manualConfig.imapPort || !this.manualConfig.imapUser || !this.useOauth && !this.manualConfig.imapPassword || !this.manualConfig.smtpHost || !this.manualConfig.smtpPort || !this.manualConfig.smtpUser || !this.useOauth && !this.manualConfig.smtpPassword;
    },
    isGoogleAccount() {
      return this.manualConfig.imapHost === 'imap.gmail.com' || this.manualConfig.smtpHost === 'smtp.gmail.com';
    },
    isMicrosoftAccount() {
      return this.manualConfig.imapHost === 'outlook.office365.com' || this.manualConfig.smtpHost === 'outlook.office365.com';
    },
    hasPasswordAlternatives() {
      return !!this.googleOauthUrl || !!this.microsoftOauthUrl;
    },
    useOauth() {
      return this.isGoogleAccount && this.googleOauthUrl || this.isMicrosoftAccount && this.microsoftOauthUrl;
    },
    submitButtonText() {
      if (this.loading) {
        var _this$loadingMessage;
        return (_this$loadingMessage = this.loadingMessage) !== null && _this$loadingMessage !== void 0 ? _this$loadingMessage : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Connecting');
      }
      if (this.mode === 'manual' && this.useOauth) {
        if (this.isGoogleAccount) {
          return this.account ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Reconnect Google account') : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Sign in with Google');
        } else {
          return this.account ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Reconnect Microsoft account') : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Sign in with Microsoft');
        }
      }
      return this.account ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Save') : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Connect');
    }
  }),
  methods: {
    onModeChanged(e) {
      this.mode = e.tab.id;
      if (this.mode === 'manual') {
        // IMAP
        if (this.manualConfig.imapUser === '') {
          this.manualConfig.imapUser = this.emailAddress;
        }
        if (this.manualConfig.imapPassword === '') {
          this.manualConfig.imapPassword = this.autoConfig.password;
        }

        // SMTP
        if (this.manualConfig.smtpUser === '') {
          this.manualConfig.smtpUser = this.emailAddress;
        }
        if (this.manualConfig.smtpPassword === '') {
          this.manualConfig.smtpPassword = this.autoConfig.password;
        }
      }
    },
    onImapSslModeChange(value) {
      this.clearFeedback();
      this.manualConfig.imapSslMode = value;
      switch (this.manualConfig.imapSslMode) {
        case 'none':
        case 'tls':
          this.manualConfig.imapPort = 143;
          break;
        case 'ssl':
          this.manualConfig.imapPort = 993;
          break;
      }
    },
    onSmtpSslModeChange(value) {
      this.clearFeedback();
      this.manualConfig.smtpSslMode = value;
      switch (this.manualConfig.smtpSslMode) {
        case 'none':
        case 'tls':
          this.manualConfig.smtpPort = 587;
          break;
        case 'ssl':
          this.manualConfig.smtpPort = 465;
          break;
      }
    },
    clearFeedback() {
      this.feedback = null;
    },
    applyAutoConfig(config) {
      if (!config) {
        return false;
      }
      if (config !== null && config !== void 0 && config.imapConfig) {
        this.manualConfig.imapUser = config.imapConfig.username;
        this.manualConfig.imapHost = config.imapConfig.host;
        this.manualConfig.imapPort = config.imapConfig.port;
        this.manualConfig.imapSslMode = config.imapConfig.security;
        this.manualConfig.imapPassword = this.autoConfig.password;
      }
      if (config !== null && config !== void 0 && config.smtpConfig) {
        this.manualConfig.smtpUser = config.smtpConfig.username;
        this.manualConfig.smtpHost = config.smtpConfig.host;
        this.manualConfig.smtpPort = config.smtpConfig.port;
        this.manualConfig.smtpSslMode = config.smtpConfig.security;
        this.manualConfig.smtpPassword = this.autoConfig.password;
      }
      return true;
    },
    async detectConfig() {
      this.loadingMessage = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Looking up configuration');
      const config = await (0,_service_AutoConfigService_js__WEBPACK_IMPORTED_MODULE_5__.queryIspdb)(this.emailAddress.split('@').pop(), this.emailAddress);
      _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].debug('fetched auto config', {
        config
      });
      // Apply settings to manual mode before submitting so the user
      // can make modifications if the config fails
      if (this.applyAutoConfig(config)) {
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].debug('ISP DB config applied');
        return true;
      } else {
        const mxHosts = await (0,_service_AutoConfigService_js__WEBPACK_IMPORTED_MODULE_5__.queryMx)(this.emailAddress);
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].debug('MX hosts fetched', {
          mxHosts
        });
        if (mxHosts.length) {
          // Try the TLD of the MX
          // FIXME: breaks with eTLDs like .co.uk
          const tldMx = mxHosts[0].split('.').splice(-2).join('.').toLowerCase();
          const mxConfig = await (0,_service_AutoConfigService_js__WEBPACK_IMPORTED_MODULE_5__.queryIspdb)(tldMx, this.emailAddress);
          _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].debug('fetched MX auto config', {
            mxConfig
          });
          if (mxConfig && this.applyAutoConfig(mxConfig)) {
            return true;
          }
        }

        // Test the highest priority MX for open IMAP/SMTP ports
        this.loadingMessage = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Checking mail host connectivity');
        const imapAndSmtpHosts = mxHosts.slice(0, 1).flatMap(host => {
          return [993, 143, 465, 587].map(port => ({
            host,
            port
          }));
        });
        const results = await Promise.all(imapAndSmtpHosts.map(async _ref => {
          let {
            host,
            port
          } = _ref;
          return {
            host,
            port,
            canConnect: await (0,_service_AutoConfigService_js__WEBPACK_IMPORTED_MODULE_5__.testConnectivity)(host, port)
          };
        }));
        const firstImapHost = results.filter(_ref2 => {
          let {
            canConnect,
            port
          } = _ref2;
          return canConnect && port === 993;
        })[0];
        const firstSmtpHost = results.filter(_ref3 => {
          let {
            canConnect,
            port
          } = _ref3;
          return canConnect && [465, 587].includes(port);
        })[0];
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].debug('MX connectivity tested', {
          firstImapHost,
          firstSmtpHost
        });
        if (firstImapHost && firstSmtpHost) {
          this.applyAutoConfig({
            imapConfig: {
              username: this.emailAddress,
              // Assumption
              host: firstImapHost.host,
              port: firstImapHost.port,
              security: firstImapHost.port === 993 ? 'ssl' : 'tls'
            },
            smtpConfig: {
              username: this.emailAddress,
              // Assumption
              host: firstSmtpHost.host,
              port: firstSmtpHost.port,
              security: firstSmtpHost.port === 465 ? 'ssl' : 'tls'
            }
          });
          return true;
        } else {
          this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Configuration discovery failed. Please use the manual settings');
        }
        return false;
      }
    },
    async onSubmit(event) {
      _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].debug('account form submitted', {
        event
      });
      if (this.isDisabledManual || this.isDisabledAuto) {
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].warn('submit is disabled');
        return;
      }
      this.clearFeedback();
      this.loading = true;
      try {
        if (this.mode === 'auto') {
          if (!(await this.detectConfig())) {
            _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].warn('Auto mode failed');
            return;
          }
        }
        if (!this.useOauth) {
          if (this.mode === 'auto' && this.autoConfig.password === '') {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Password required');
            return;
          }
          if (this.mode === 'manual' && (this.manualConfig.imapPassword === '' || this.manualConfig.smtpPassword === '')) {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Password required');
            return;
          }
        }
        this.loadingMessage = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Testing authentication');
        const data = _objectSpread(_objectSpread({}, this.manualConfig), {}, {
          accountName: this.accountName,
          emailAddress: this.emailAddress,
          imapHost: this.manualConfig.imapHost.trim(),
          smtpHost: this.manualConfig.smtpHost.trim(),
          authMethod: this.useOauth ? 'xoauth2' : 'password'
        });
        if (this.useOauth) {
          delete data.imapPassword;
          delete data.smtpPassword;
        }
        if (!this.account) {
          const account = await this.mainStore.startAccountSetup(data);
          if (this.useOauth) {
            this.loadingMessage = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Awaiting user consent');
            try {
              if (this.isGoogleAccount) {
                this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Account created. Please follow the pop-up instructions to link your Google account');
                await (0,_integration_oauth_js__WEBPACK_IMPORTED_MODULE_6__.getUserConsent)(this.googleOauthUrl.replace('_accountId_', account.id).replace('_email_', encodeURIComponent(account.emailAddress)));
              } else {
                this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Account created. Please follow the pop-up instructions to link your Microsoft account');
                await (0,_integration_oauth_js__WEBPACK_IMPORTED_MODULE_6__.getUserConsent)(this.microsoftOauthUrl.replace('_accountId_', account.id).replace('_email_', encodeURIComponent(account.emailAddress)));
              }
            } catch (e) {
              // Clean up the temporary account before we continue
              this.mainStore.deleteAccount(account);
              _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].info("Temporary account ".concat(account.id, " deleted"));
              throw e;
            }
            this.clearFeedback();
          }
          this.loadingMessage = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Loading account');
          await this.mainStore.finishAccountSetup({
            account
          });
          this.$emit('account-created', account);
        } else {
          const oldAccountData = this.account;
          const account = await this.mainStore.updateAccount(_objectSpread(_objectSpread({}, data), {}, {
            accountId: this.account.id
          }));
          if (this.useOauth) {
            this.loadingMessage = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Awaiting user consent');
            try {
              if (this.isGoogleAccount) {
                this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Account updated. Please follow the pop-up instructions to reconnect your Google account');
                await (0,_integration_oauth_js__WEBPACK_IMPORTED_MODULE_6__.getUserConsent)(this.googleOauthUrl.replace('_accountId_', account.id).replace('_email_', encodeURIComponent(account.emailAddress)));
              } else {
                this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Account updated. Please follow the pop-up instructions to reconnect your Microsoft account');
                await (0,_integration_oauth_js__WEBPACK_IMPORTED_MODULE_6__.getUserConsent)(this.microsoftOauthUrl.replace('_accountId_', account.id).replace('_email_', encodeURIComponent(account.emailAddress)));
              }
            } catch (e) {
              // Undo changes
              await this.mainStore.updateAccount(_objectSpread(_objectSpread({}, oldAccountData), {}, {
                accountId: oldAccountData.id
              }));
              _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].info("Account ".concat(account.id, " update undone"));
              throw e;
            }
            this.clearFeedback();
          }
          this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Account updated');
        }
      } catch (error) {
        var _error$data, _error$data2;
        _logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].error('could not save account details', {
          error
        });
        if (((_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.error) === 'CONNECTION_ERROR') {
          if (error.data.service === 'IMAP') {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'IMAP server is not reachable');
          } else if (error.data.service === 'SMTP') {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'SMTP server is not reachable');
          }
        } else if (((_error$data2 = error.data) === null || _error$data2 === void 0 ? void 0 : _error$data2.error) === 'AUTHENTICATION') {
          if (error.data.service === 'IMAP') {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'IMAP username or password is wrong');
          } else if (error.data.service === 'SMTP') {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'SMTP username or password is wrong');
          }
        } else {
          var _error$data3, _error$data4, _error$response;
          if (((_error$data3 = error.data) === null || _error$data3 === void 0 ? void 0 : _error$data3.service) === 'IMAP') {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'IMAP connection failed');
          } else if (((_error$data4 = error.data) === null || _error$data4 === void 0 ? void 0 : _error$data4.service) === 'SMTP') {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'SMTP connection failed');
          } else if (error.message === _integration_oauth_js__WEBPACK_IMPORTED_MODULE_6__.CONSENT_ABORTED) {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Authorization pop-up closed');
          } else if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 429) {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'Configuration discovery temporarily not available. Please try again later.');
          } else {
            this.feedback = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('mail', 'There was an error while setting up your account');
          }
        }
      } finally {
        this.loading = false;
        this.loadingMessage = undefined;
      }
    },
    isValidEmail(email) {
      const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regExpEmail.test(email);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=template&id=3d06ba11&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=template&id=3d06ba11&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("form", {
    attrs: {
      id: "account-form"
    },
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      }
    }
  }, [_c("Tabs", {
    attrs: {
      options: {
        useUrlFragment: false,
        defaultTabHash: _vm.settingsPage ? "manual" : "auto"
      },
      "cache-lifetime": "0"
    },
    on: {
      changed: _vm.onModeChanged
    }
  }, [_c("Tab", {
    key: "auto",
    attrs: {
      id: "auto",
      name: _vm.t("mail", "Auto")
    }
  }, [_c("NcInputField", {
    attrs: {
      id: "auto-name",
      value: _vm.accountName,
      label: _vm.t("mail", "Name"),
      type: "text",
      placeholder: _vm.t("mail", "Name"),
      disabled: _vm.loading,
      autofocus: ""
    },
    on: {
      "update:value": function ($event) {
        _vm.accountName = $event;
      }
    }
  }), _vm._v(" "), _c("NcInputField", {
    attrs: {
      id: "auto-address",
      value: _vm.emailAddress,
      label: _vm.t("mail", "Mail address"),
      disabled: _vm.loading,
      placeholder: _vm.t("mail", "name@example.org"),
      required: "",
      type: "email"
    },
    on: {
      "update:value": function ($event) {
        _vm.emailAddress = $event;
      },
      change: _vm.clearFeedback
    }
  }), _vm._v(" "), !_vm.isValidEmail(_vm.emailAddress) ? _c("p", {
    staticClass: "account-form--error"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Please enter an email of the format name@example.com")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c("NcPasswordField", {
    attrs: {
      id: "auto-password",
      value: _vm.autoConfig.password,
      disabled: _vm.loading,
      type: "password",
      label: _vm.t("mail", "Password"),
      required: !_vm.hasPasswordAlternatives
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.autoConfig, "password", $event);
      },
      change: _vm.clearFeedback
    }
  })], 1), _vm._v(" "), _c("Tab", {
    key: "manual",
    attrs: {
      id: "manual",
      name: _vm.t("mail", "Manual")
    }
  }, [_c("NcInputField", {
    attrs: {
      id: "man-name",
      value: _vm.accountName,
      label: _vm.t("mail", "Name"),
      type: "text",
      placeholder: _vm.t("mail", "Name"),
      disabled: _vm.loading
    },
    on: {
      "update:value": function ($event) {
        _vm.accountName = $event;
      }
    }
  }), _vm._v(" "), _c("NcInputField", {
    attrs: {
      id: "man-address",
      value: _vm.emailAddress,
      label: _vm.t("mail", "Mail address"),
      type: "email",
      placeholder: _vm.t("mail", "name@example.org"),
      disabled: _vm.loading,
      required: ""
    },
    on: {
      "update:value": function ($event) {
        _vm.emailAddress = $event;
      },
      change: _vm.clearFeedback
    }
  }), _vm._v(" "), !_vm.isValidEmail(_vm.emailAddress) ? _c("p", {
    staticClass: "account-form--error"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "Please enter an email of the format name@example.com")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.t("mail", "IMAP Settings")))]), _vm._v(" "), _c("NcInputField", {
    attrs: {
      id: "man-imap-host",
      value: _vm.manualConfig.imapHost,
      label: _vm.t("mail", "IMAP Host"),
      type: "text",
      placeholder: _vm.t("mail", "IMAP Host"),
      disabled: _vm.loading,
      required: ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.manualConfig, "imapHost", $event);
      },
      change: _vm.clearFeedback
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "account-form__heading--required"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "IMAP Security")) + "\n\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "flex-row"
  }, [_c("NcCheckboxRadioSwitch", {
    attrs: {
      id: "man-imap-sec-none",
      "button-variant": true,
      checked: _vm.manualConfig.imapSslMode,
      type: "radio",
      name: "man-imap-sec",
      disabled: _vm.loading,
      value: "none",
      "button-variant-grouped": "horizontal"
    },
    on: {
      "update:checked": _vm.onImapSslModeChange
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "None")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      id: "man-imap-sec-ssl",
      "button-variant": true,
      checked: _vm.manualConfig.imapSslMode,
      type: "radio",
      name: "man-imap-sec",
      disabled: _vm.loading,
      value: "ssl",
      "button-variant-grouped": "horizontal"
    },
    on: {
      "update:checked": _vm.onImapSslModeChange
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "SSL/TLS")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      id: "man-imap-sec-tls",
      "button-variant": true,
      checked: _vm.manualConfig.imapSslMode,
      type: "radio",
      name: "man-imap-sec",
      disabled: _vm.loading,
      value: "tls",
      "button-variant-grouped": "horizontal"
    },
    on: {
      "update:checked": _vm.onImapSslModeChange
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "STARTTLS")) + "\n\t\t\t\t")])], 1), _vm._v(" "), _c("NcInputField", {
    attrs: {
      id: "man-imap-port",
      value: _vm.manualConfig.imapPort,
      label: _vm.t("mail", "IMAP Port"),
      type: "number",
      placeholder: _vm.t("mail", "IMAP Port"),
      disabled: _vm.loading,
      required: ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.manualConfig, "imapPort", $event);
      },
      change: _vm.clearFeedback
    }
  }), _vm._v(" "), _c("NcInputField", {
    attrs: {
      id: "man-imap-user",
      value: _vm.manualConfig.imapUser,
      label: _vm.t("mail", "IMAP User"),
      type: "text",
      placeholder: _vm.t("mail", "IMAP User"),
      disabled: _vm.loading,
      required: ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.manualConfig, "imapUser", $event);
      },
      change: _vm.clearFeedback
    }
  }), _vm._v(" "), !_vm.useOauth ? _c("NcPasswordField", {
    attrs: {
      id: "man-imap-password",
      type: "password",
      value: _vm.manualConfig.imapPassword,
      label: _vm.t("mail", "IMAP Password"),
      disabled: _vm.loading,
      required: ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.manualConfig, "imapPassword", $event);
      },
      change: _vm.clearFeedback
    }
  }) : _vm._e(), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.t("mail", "SMTP Settings")))]), _vm._v(" "), _c("NcInputField", {
    ref: "smtpHost",
    attrs: {
      id: "man-smtp-host",
      value: _vm.manualConfig.smtpHost,
      label: _vm.t("mail", "SMTP Host"),
      type: "text",
      name: "smtp-host",
      placeholder: _vm.t("mail", "SMTP Host"),
      disabled: _vm.loading,
      required: ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.manualConfig, "smtpHost", $event);
      },
      change: _vm.clearFeedback
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "account-form__heading--required"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("mail", "SMTP Security")) + "\n\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "flex-row"
  }, [_c("NcCheckboxRadioSwitch", {
    attrs: {
      id: "man-imap-sec-none",
      "button-variant": true,
      checked: _vm.manualConfig.smtpSslMode,
      type: "radio",
      name: "man-smtp-sec",
      disabled: _vm.loading,
      value: "none",
      "button-variant-grouped": "horizontal"
    },
    on: {
      "update:checked": _vm.onSmtpSslModeChange
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "None")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      id: "man-imap-sec-ssl",
      "button-variant": true,
      checked: _vm.manualConfig.smtpSslMode,
      type: "radio",
      name: "man-smtp-sec",
      disabled: _vm.loading,
      value: "ssl",
      "button-variant-grouped": "horizontal"
    },
    on: {
      "update:checked": _vm.onSmtpSslModeChange
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "SSL/TLS")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    attrs: {
      id: "man-imap-sec-tls",
      "button-variant": true,
      checked: _vm.manualConfig.smtpSslMode,
      type: "radio",
      name: "man-smtp-sec",
      disabled: _vm.loading,
      value: "tls",
      "button-variant-grouped": "horizontal"
    },
    on: {
      "update:checked": _vm.onSmtpSslModeChange
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("mail", "STARTTLS")) + "\n\t\t\t\t")])], 1), _vm._v(" "), _c("NcInputField", {
    attrs: {
      id: "man-smtp-port",
      label: _vm.t("mail", "SMTP Port"),
      value: _vm.manualConfig.smtpPort,
      type: "number",
      placeholder: _vm.t("mail", "SMTP Port"),
      disabled: _vm.loading,
      required: ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.manualConfig, "smtpPort", $event);
      },
      change: _vm.clearFeedback
    }
  }), _vm._v(" "), _c("NcInputField", {
    attrs: {
      id: "man-smtp-user",
      value: _vm.manualConfig.smtpUser,
      label: _vm.t("mail", "SMTP User"),
      type: "text",
      placeholder: _vm.t("mail", "SMTP User"),
      disabled: _vm.loading,
      required: ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.manualConfig, "smtpUser", $event);
      },
      change: _vm.clearFeedback
    }
  }), _vm._v(" "), !_vm.useOauth ? _c("NcPasswordField", {
    attrs: {
      id: "man-smtp-password",
      label: _vm.t("mail", "SMTP Password"),
      type: "password",
      value: _vm.manualConfig.smtpPassword,
      disabled: _vm.loading,
      required: ""
    },
    on: {
      "update:value": function ($event) {
        return _vm.$set(_vm.manualConfig, "smtpPassword", $event);
      },
      change: _vm.clearFeedback
    }
  }) : _vm._e()], 1)], 1), _vm._v(" "), _vm.isGoogleAccount && !_vm.googleOauthUrl ? _c("div", {
    staticClass: "account-form__google-sso"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("mail", "For the Google account to work with this app you need to enable two-factor authentication for Google and generate an app password.")) + "\n\t")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "account-form__submit-buttons"
  }, [_vm.mode === "auto" ? _c("ButtonVue", {
    staticClass: "account-form__submit-button",
    attrs: {
      "aria-label": _vm.submitButtonText,
      type: "primary",
      "native-type": "submit",
      disabled: _vm.isDisabledAuto || _vm.loading
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_vm.loading ? _c("IconLoading", {
          attrs: {
            size: 16
          }
        }) : _c("IconCheck", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }], null, false, 98289116)
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.submitButtonText) + "\n\t\t")]) : _vm.mode === "manual" ? _c("ButtonVue", {
    staticClass: "account-form__submit-button",
    attrs: {
      "aria-label": _vm.submitButtonText,
      type: "primary",
      "native-type": "submit",
      disabled: _vm.isDisabledManual || _vm.loading
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      }
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_vm.loading ? _c("IconLoading", {
          attrs: {
            size: 16
          }
        }) : _c("IconCheck", {
          attrs: {
            size: 16
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.submitButtonText) + "\n\t\t")]) : _vm._e()], 1), _vm._v(" "), _vm.feedback ? _c("div", {
    staticClass: "account-form--feedback"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.feedback) + "\n\t")]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/integration/oauth.js":
/*!**********************************!*\
  !*** ./src/integration/oauth.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSENT_ABORTED: () => (/* binding */ CONSENT_ABORTED),
/* harmony export */   getUserConsent: () => (/* binding */ getUserConsent)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger.js */ "./src/logger.js");
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



const CONSENT_ABORTED = 'OAUTH_CONSENT_ABORTED';
async function getUserConsent(redirectUrl) {
  const ssoWindow = window.open(redirectUrl, (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('mail', 'Connect OAUTH2 account'), 'toolbar=no, menubar=no, width=600, height=700');
  ssoWindow.focus();
  await new Promise((resolve, reject) => {
    window.addEventListener('message', event => {
      const {
        data
      } = event;
      _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].debug('Child window message received', {
        event
      });
      if (data === 'DONE') {
        _logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].info('OAUTH2 user consent given');
        resolve();
      }
    });
    const windowClosedTimer = setInterval(() => {
      if (ssoWindow.closed) {
        clearInterval(windowClosedTimer);
        reject(new Error(CONSENT_ABORTED));
      }
    }, 200);
  });
}

/***/ }),

/***/ "./src/service/AutoConfigService.js":
/*!******************************************!*\
  !*** ./src/service/AutoConfigService.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryIspdb: () => (/* binding */ queryIspdb),
/* harmony export */   queryMx: () => (/* binding */ queryMx),
/* harmony export */   testConnectivity: () => (/* binding */ testConnectivity)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



async function queryIspdb(host, email) {
  return (await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/mail/api/autoconfig/ispdb/{host}/{email}', {
    host,
    email
  }))).data.data;
}
async function queryMx(email) {
  return (await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/mail/api/autoconfig/mx/{email}', {
    email
  }))).data.data;
}
async function testConnectivity(host, port) {
  return (await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/mail/api/autoconfig/test?host={host}&port={port}', {
    host,
    port
  }))).data.data;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `[data-v-3d06ba11] .tabs-component-tabs {
  display: flex;
}
[data-v-3d06ba11] .tabs-component-tab {
  flex-grow: 1;
  text-align: center;
  color: var(--color-text-lighter);
  margin-bottom: 10px;
}
[data-v-3d06ba11] .tabs-component-tab.is-active {
  border-bottom: 1px solid black;
  font-weight: bold;
}
[data-v-3d06ba11] .input-field {
  margin: calc(var(--default-grid-baseline) * 3) 0;
}
.tabs-component-panels[data-v-3d06ba11] {
  padding-top: 20px;
}
.tabs-component-panels label[data-v-3d06ba11] {
  text-align: start;
  width: 100%;
  display: inline-block;
}
.tabs-component-panels input[data-v-3d06ba11],
.tabs-component-panels select[data-v-3d06ba11] {
  margin-bottom: 10px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
h4[data-v-3d06ba11] {
	text-align: start;
}
.flex-row[data-v-3d06ba11] {
	display: flex;
}
input.primary[data-v-3d06ba11] {
	color: var(--color-main-background);
}
input[type='radio'][data-v-3d06ba11] {
	display: none;
}
input[type='radio'][disabled] + label[data-v-3d06ba11] {
	cursor: default;
	opacity: 0.5;
}
.account-form__label--required[data-v-3d06ba11]:after {
	content:" *";
}
.account-form__heading--required[data-v-3d06ba11]:after {
	content:" *";
}
.account-form__submit-buttons[data-v-3d06ba11] {
	display: flex;
	justify-content: center;
	margin-top: 5px;
}
.account-form__submit-button[data-v-3d06ba11] {
	display: flex;
	align-items: center;
}
.account-form--feedback[data-v-3d06ba11] {
	color: var(--color-text-maxcontrast);
	margin-top: 5px;
	text-align: center;
}
.account-form--error[data-v-3d06ba11] {
	text-align: start;
	font-size: 14px;
}
#account-form[data-v-3d06ba11] {
	z-index: 1001;
	width: 300px;
	top: 15%;
	padding-bottom: 50px;
	margin: 0 auto;
	padding-top: 30px;
}
#account-form input[data-v-3d06ba11] {
	width: 100%;
	box-sizing: border-box;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_0_id_3d06ba11_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_0_id_3d06ba11_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_0_id_3d06ba11_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_0_id_3d06ba11_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_0_id_3d06ba11_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_1_id_3d06ba11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_1_id_3d06ba11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_1_id_3d06ba11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_1_id_3d06ba11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_1_id_3d06ba11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/AccountForm.vue":
/*!****************************************!*\
  !*** ./src/components/AccountForm.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AccountForm_vue_vue_type_template_id_3d06ba11_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountForm.vue?vue&type=template&id=3d06ba11&scoped=true */ "./src/components/AccountForm.vue?vue&type=template&id=3d06ba11&scoped=true");
/* harmony import */ var _AccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountForm.vue?vue&type=script&lang=js */ "./src/components/AccountForm.vue?vue&type=script&lang=js");
/* harmony import */ var _AccountForm_vue_vue_type_style_index_0_id_3d06ba11_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true */ "./src/components/AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true");
/* harmony import */ var _AccountForm_vue_vue_type_style_index_1_id_3d06ba11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css */ "./src/components/AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _AccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountForm_vue_vue_type_template_id_3d06ba11_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountForm_vue_vue_type_template_id_3d06ba11_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3d06ba11",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/AccountForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/AccountForm.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/AccountForm.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/AccountForm.vue?vue&type=template&id=3d06ba11&scoped=true":
/*!**********************************************************************************!*\
  !*** ./src/components/AccountForm.vue?vue&type=template&id=3d06ba11&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_template_id_3d06ba11_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_template_id_3d06ba11_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_template_id_3d06ba11_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountForm.vue?vue&type=template&id=3d06ba11&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=template&id=3d06ba11&scoped=true");


/***/ }),

/***/ "./src/components/AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true":
/*!*************************************************************************************************!*\
  !*** ./src/components/AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_0_id_3d06ba11_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=0&id=3d06ba11&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./src/components/AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountForm_vue_vue_type_style_index_1_id_3d06ba11_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/AccountForm.vue?vue&type=style&index=1&id=3d06ba11&scoped=true&lang=css");


/***/ })

}]);
//# sourceMappingURL=mail.src_components_AccountForm_vue.b8c97a1a084bf9e9d24a.js.map