/*! third party licenses: js/vendor.LICENSE.txt */
const appName = "contacts";
const appVersion = "7.1.0-dev.0";
import { v as translate, n as normalizeComponent$1, M as ActionGlobalMixin, O as GenRandomId, P as useModelMigration, Q as AlertCircle, R as Check, S as isMobileState, T as getLanguage, U as getLoggerBuilder, j as NcActionButton, I as ICALmodule, r as debounce, b as NcActions, z as NcSelect, F as NcTextField, W as NcDateTimePicker, A as getLocale$1 } from "./index-fSqcvS-W.chunk.mjs";
import { c as commonjsGlobal, a as getDefaultExportFromCjs, n as normalizeComponent$2, b as cancelableClient, f as v, V as Vue$1, _, l as loadState, i as global, U, j as getRequestToken, k as getCurrentInstance, m as effectScope, r as ref$1, o as markRaw, t as toRaw, w as watch, p as unref, q as inject, x as set$2, y as reactive, z as isRef, A as isReactive, C as getCurrentScope, D as onScopeDispose, E as nextTick, F as toRefs, G as computed } from "./index-C-qT-4FH.chunk.mjs";
var ShareType = /* @__PURE__ */ ((ShareType2) => {
  ShareType2[ShareType2["User"] = 0] = "User";
  ShareType2[ShareType2["Group"] = 1] = "Group";
  ShareType2[ShareType2["Link"] = 3] = "Link";
  ShareType2[ShareType2["Email"] = 4] = "Email";
  ShareType2[ShareType2["Remote"] = 6] = "Remote";
  ShareType2[ShareType2["Team"] = 7] = "Team";
  ShareType2[ShareType2["Guest"] = 8] = "Guest";
  ShareType2[ShareType2["RemoteGroup"] = 9] = "RemoteGroup";
  ShareType2[ShareType2["Room"] = 10] = "Room";
  ShareType2[ShareType2["Deck"] = 12] = "Deck";
  ShareType2[ShareType2["FederatedGroup"] = 14] = "FederatedGroup";
  ShareType2[ShareType2["ScienceMesh"] = 15] = "ScienceMesh";
  return ShareType2;
})(ShareType || {});
/*! third party licenses: js/vendor.LICENSE.txt */
const GROUP_ALL_CONTACTS = translate("contacts", "All contacts");
const GROUP_NO_GROUP_CONTACTS = translate("contacts", "Not grouped");
const GROUP_RECENTLY_CONTACTED = translate("contactsinteraction", "Recently contacted");
const CHART_ALL_CONTACTS = translate("contacts", "Organization chart");
const ROUTE_CIRCLE = "circle";
const ROUTE_CHART = "chart";
const CONTACTS_SETTINGS = translate("contacts", "Contacts settings");
const ELLIPSIS_COUNT = 5;
const MEMBER_LEVEL_NONE = 0;
const MEMBER_LEVEL_MEMBER = 1;
const MEMBER_LEVEL_MODERATOR = 4;
const MEMBER_LEVEL_ADMIN = 8;
const MEMBER_LEVEL_OWNER = 9;
const MEMBER_TYPE_USER = 1;
const MEMBER_TYPE_GROUP = 2;
const MEMBER_TYPE_MAIL = 4;
const MEMBER_TYPE_CONTACT = 8;
const MEMBER_TYPE_CIRCLE = 16;
const CIRCLE_DESC = translate("contacts", "Teams are groups of people that you can create yourself and with whom you can share data. They can be made up of other accounts or groups of accounts of the Nextcloud instance, but also of contacts from your address book or even external people by simply entering their e-mail addresses.");
const CIRCLE_CONFIG_PERSONAL = 2;
const CIRCLE_CONFIG_SYSTEM = 4;
const CIRCLE_CONFIG_VISIBLE = 8;
const CIRCLE_CONFIG_OPEN = 16;
const CIRCLE_CONFIG_INVITE = 32;
const CIRCLE_CONFIG_REQUEST = 64;
const CIRCLE_CONFIG_FRIEND = 128;
const CIRCLE_CONFIG_PROTECTED = 256;
const CIRCLE_CONFIG_NO_OWNER = 512;
const CIRCLE_CONFIG_HIDDEN = 1024;
const CIRCLE_CONFIG_BACKEND = 2048;
const CIRCLE_CONFIG_LOCAL = 4096;
const CIRCLE_CONFIG_ROOT = 8192;
const CIRCLE_CONFIG_CIRCLE_INVITE = 16384;
const CIRCLE_CONFIG_FEDERATED = 32768;
({
  [MEMBER_TYPE_CIRCLE]: translate("contacts", "Team"),
  [MEMBER_TYPE_USER]: translate("contacts", "User"),
  [MEMBER_TYPE_GROUP]: translate("contacts", "Group"),
  [MEMBER_TYPE_MAIL]: translate("contacts", "Email"),
  [MEMBER_TYPE_CONTACT]: translate("contacts", "Contact")
});
const CIRCLES_MEMBER_LEVELS = {
  // [MEMBER_LEVEL_NONE]: t('contacts', 'Pending'),
  [MEMBER_LEVEL_MEMBER]: translate("contacts", "Member"),
  [MEMBER_LEVEL_MODERATOR]: translate("contacts", "Moderator"),
  [MEMBER_LEVEL_ADMIN]: translate("contacts", "Admin"),
  [MEMBER_LEVEL_OWNER]: translate("contacts", "Owner")
};
const PUBLIC_CIRCLE_CONFIG = {
  [translate("contacts", "Invites")]: {
    [CIRCLE_CONFIG_OPEN]: translate("contacts", "Anyone can request membership"),
    [CIRCLE_CONFIG_INVITE]: translate("contacts", "Members need to accept invitation"),
    [CIRCLE_CONFIG_REQUEST]: translate("contacts", 'Memberships must be confirmed/accepted by a Moderator (requires "Anyone can request membership")'),
    [CIRCLE_CONFIG_FRIEND]: translate("contacts", "Members can also invite")
    // Let's manage password protection independently as we also need a password
    // [CIRCLE_CONFIG_PROTECTED]: t('contacts', 'Password protect'),
  },
  [translate("contacts", "Visibility")]: {
    [CIRCLE_CONFIG_VISIBLE]: translate("contacts", "Visible to everyone")
  },
  [translate("contacts", "Team membership")]: {
    // TODO: implement backend
    // [CIRCLE_CONFIG_CIRCLE_INVITE]: t('contacts', 'Team must confirm when invited in another circle'),
    [CIRCLE_CONFIG_ROOT]: translate("contacts", "Prevent teams from being a member of another team")
  }
};
const CIRCLES_MEMBER_GROUPING = [
  {
    id: `picker-${ShareType.User}`,
    label: translate("contacts", "users"),
    labelStandalone: translate("contacts", "Users"),
    share: ShareType.User,
    type: MEMBER_TYPE_USER
  },
  {
    id: `picker-${ShareType.Group}`,
    label: translate("contacts", "groups"),
    labelStandalone: translate("contacts", "Groups"),
    share: ShareType.Group,
    type: MEMBER_TYPE_GROUP
  },
  // TODO: implement federated
  // {
  // id: `picker-${ShareType.Remote}`,
  // label: t('contacts', 'federated users'),
  // share: ShareType.Remote,
  // type: MEMBER_TYPE_USER
  // },
  // {
  // id: `picker-${ShareType.RemoteGroup}`,
  // label: t('contacts', 'federated groups'),
  // share: ShareType.RemoteGroup,
  // type: MEMBER_TYPE_GROUP
  // },
  {
    id: `picker-${ShareType.Team}`,
    label: translate("contacts", "teams"),
    labelStandalone: translate("contacts", "Teams"),
    share: ShareType.Team,
    type: MEMBER_TYPE_CIRCLE
  },
  {
    id: `picker-${ShareType.Email}`,
    label: translate("contacts", "email addresses"),
    labelStandalone: translate("contacts", "Email addresses"),
    share: ShareType.Email,
    type: MEMBER_TYPE_MAIL
  },
  // TODO: implement SHARE_TYPE_CONTACT
  {
    id: "picker-contact",
    label: translate("contacts", "contacts"),
    labelStandalone: translate("contacts", "Contacts"),
    share: ShareType.Email,
    type: MEMBER_TYPE_CONTACT
  }
];
const SHARES_TYPES_MEMBER_MAP = CIRCLES_MEMBER_GROUPING.reduce((list, entry) => {
  if (!list[entry.share]) {
    list[entry.share] = entry.type;
  }
  return list;
}, {});
var MemberLevels = /* @__PURE__ */ ((MemberLevels2) => {
  MemberLevels2[MemberLevels2["NONE"] = MEMBER_LEVEL_NONE] = "NONE";
  MemberLevels2[MemberLevels2["MEMBER"] = MEMBER_LEVEL_MEMBER] = "MEMBER";
  MemberLevels2[MemberLevels2["MODERATOR"] = MEMBER_LEVEL_MODERATOR] = "MODERATOR";
  MemberLevels2[MemberLevels2["ADMIN"] = MEMBER_LEVEL_ADMIN] = "ADMIN";
  MemberLevels2[MemberLevels2["OWNER"] = MEMBER_LEVEL_OWNER] = "OWNER";
  return MemberLevels2;
})(MemberLevels || {});
var MemberTypes = /* @__PURE__ */ ((MemberTypes2) => {
  MemberTypes2[MemberTypes2["CIRCLE"] = MEMBER_TYPE_CIRCLE] = "CIRCLE";
  MemberTypes2[MemberTypes2["USER"] = MEMBER_TYPE_USER] = "USER";
  MemberTypes2[MemberTypes2["GROUP"] = MEMBER_TYPE_GROUP] = "GROUP";
  MemberTypes2[MemberTypes2["MAIL"] = MEMBER_TYPE_MAIL] = "MAIL";
  MemberTypes2[MemberTypes2["CONTACT"] = MEMBER_TYPE_CONTACT] = "CONTACT";
  return MemberTypes2;
})(MemberTypes || {});
var CircleConfigs = /* @__PURE__ */ ((CircleConfigs2) => {
  CircleConfigs2[CircleConfigs2["PERSONAL"] = CIRCLE_CONFIG_PERSONAL] = "PERSONAL";
  CircleConfigs2[CircleConfigs2["SYSTEM"] = CIRCLE_CONFIG_SYSTEM] = "SYSTEM";
  CircleConfigs2[CircleConfigs2["VISIBLE"] = CIRCLE_CONFIG_VISIBLE] = "VISIBLE";
  CircleConfigs2[CircleConfigs2["OPEN"] = CIRCLE_CONFIG_OPEN] = "OPEN";
  CircleConfigs2[CircleConfigs2["INVITE"] = CIRCLE_CONFIG_INVITE] = "INVITE";
  CircleConfigs2[CircleConfigs2["REQUEST"] = CIRCLE_CONFIG_REQUEST] = "REQUEST";
  CircleConfigs2[CircleConfigs2["FRIEND"] = CIRCLE_CONFIG_FRIEND] = "FRIEND";
  CircleConfigs2[CircleConfigs2["PROTECTED"] = CIRCLE_CONFIG_PROTECTED] = "PROTECTED";
  CircleConfigs2[CircleConfigs2["NO_OWNER"] = CIRCLE_CONFIG_NO_OWNER] = "NO_OWNER";
  CircleConfigs2[CircleConfigs2["HIDDEN"] = CIRCLE_CONFIG_HIDDEN] = "HIDDEN";
  CircleConfigs2[CircleConfigs2["BACKEND"] = CIRCLE_CONFIG_BACKEND] = "BACKEND";
  CircleConfigs2[CircleConfigs2["LOCAL"] = CIRCLE_CONFIG_LOCAL] = "LOCAL";
  CircleConfigs2[CircleConfigs2["ROOT"] = CIRCLE_CONFIG_ROOT] = "ROOT";
  CircleConfigs2[CircleConfigs2["CIRCLE_INVITE"] = CIRCLE_CONFIG_CIRCLE_INVITE] = "CIRCLE_INVITE";
  CircleConfigs2[CircleConfigs2["FEDERATED"] = CIRCLE_CONFIG_FEDERATED] = "FEDERATED";
  return CircleConfigs2;
})(CircleConfigs || {});
var MemberStatus = /* @__PURE__ */ ((MemberStatus2) => {
  MemberStatus2["INVITED"] = "Invited";
  MemberStatus2["MEMBER"] = "Member";
  MemberStatus2["REQUESTING"] = "Requesting";
  return MemberStatus2;
})(MemberStatus || {});
const _sfc_main$B = {
  name: "NcActionCheckbox",
  mixins: [ActionGlobalMixin],
  inject: {
    isInSemanticMenu: {
      from: "NcActions:isSemanticMenu",
      default: false
    }
  },
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    /**
     * id attribute of the checkbox element
     */
    id: {
      type: String,
      default: () => "action-" + GenRandomId(),
      validator: (id) => id.trim() !== ""
    },
    /**
     * Removed in v9 - use `modelValue` (`v-model`) instead
     * @deprecated
     */
    checked: {
      type: Boolean,
      default: void 0
    },
    /**
     * checked state of the the checkbox element
     */
    modelValue: {
      type: Boolean,
      default: false
    },
    /**
     * value of the checkbox input
     */
    value: {
      type: [String, Number],
      default: ""
    },
    /**
     * disabled state of the checkbox element
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "change",
    "check",
    "uncheck",
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "update:checked",
    /**
     * Emitted when the checkbox state is changed
     * @type {boolean}
     */
    "update:modelValue",
    /** Same as update:modelValue for Vue 2 compatibility */
    "update:model-value"
  ],
  setup() {
    const model = useModelMigration("checked", "update:checked");
    return {
      model
    };
  },
  computed: {
    /**
     * determines if the action is focusable
     *
     * @return {boolean} is the action focusable ?
     */
    isFocusable() {
      return !this.disabled;
    },
    /**
     * aria-checked attribute for role="menuitemcheckbox"
     *
     * @return {'true'|'false'|undefined} aria-checked value if needed
     */
    ariaChecked() {
      if (this.isInSemanticMenu) {
        return this.model ? "true" : "false";
      }
      return void 0;
    }
  },
  methods: {
    checkInput(event) {
      this.$refs.label.click();
    },
    onChange(event) {
      this.model = this.$refs.checkbox.checked;
      this.$emit("change", event);
      if (this.$refs.checkbox.checked) {
        this.$emit("check");
      } else {
        this.$emit("uncheck");
      }
    }
  }
};
var _sfc_render$B = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", { staticClass: "action", class: { "action--disabled": _vm.disabled }, attrs: { "role": _vm.isInSemanticMenu && "presentation" } }, [_c("span", { staticClass: "action-checkbox", attrs: { "role": _vm.isInSemanticMenu && "menuitemcheckbox", "aria-checked": _vm.ariaChecked } }, [_c("input", { ref: "checkbox", staticClass: "checkbox action-checkbox__checkbox", class: { focusable: _vm.isFocusable }, attrs: { "id": _vm.id, "disabled": _vm.disabled, "type": "checkbox" }, domProps: { "checked": _vm.model, "value": _vm.value }, on: { "keydown": function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
    if ($event.ctrlKey || $event.shiftKey || $event.altKey || $event.metaKey) return null;
    $event.preventDefault();
    return _vm.checkInput.apply(null, arguments);
  }, "change": _vm.onChange } }), _c("label", { ref: "label", staticClass: "action-checkbox__label", attrs: { "for": _vm.id } }, [_vm._v(_vm._s(_vm.text))]), _vm._e()], 2)]);
};
var _sfc_staticRenderFns$B = [];
var __component__$B = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$B,
  _sfc_render$B,
  _sfc_staticRenderFns$B,
  false,
  null,
  "96242645"
);
const NcActionCheckbox = __component__$B.exports;
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const _sfc_main$A = {
  name: "NcTextArea",
  components: {
    AlertCircle,
    Check
  },
  inheritAttrs: false,
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: {
    /**
     * Removed in v9 - use `modelValue` (`v-model`) instead
     * @deprecated
     */
    value: {
      type: String,
      default: void 0
    },
    /**
     * The value of the input field
     */
    modelValue: {
      type: String,
      default: void 0
    },
    /**
     * The input label, always provide one for accessibility purposes.
     * This will also be used as a placeholder unless the placeholder
     * prop is populated with a different string.
     */
    label: {
      type: String,
      default: void 0
    },
    /**
     * Pass in true if you want to use an external label. This is useful
     * if you need a label that looks different from the one provided by
     * this component
     */
    labelOutside: {
      type: Boolean,
      default: false
    },
    /**
     * The placeholder of the input. This defaults as the string that's
     * passed into the label prop. In order to remove the placeholder,
     * pass in an empty string.
     */
    placeholder: {
      type: String,
      default: void 0
    },
    /**
     * Toggles the success state of the component. Adds a checkmark icon.
     * this cannot be used together with canClear.
     */
    success: {
      type: Boolean,
      default: false
    },
    /**
     * Toggles the error state of the component. Adds an error icon.
     * this cannot be used together with canClear.
     */
    error: {
      type: Boolean,
      default: false
    },
    /**
     * Additional helper text message
     *
     * This will be displayed beneath the input field. In case the field is
     * also marked as having an error, the text will be displayed in red.
     */
    helperText: {
      type: String,
      default: ""
    },
    /**
     * Disable the input field
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Class to add to the input field.
     * Necessary to use NcInputField in the NcActionInput component.
     */
    inputClass: {
      type: [Object, String],
      default: ""
    },
    /**
     * The resize CSS property sets whether an element is resizable, and if
     * so, in which directions.
     */
    resize: {
      type: String,
      default: "both",
      validator: (value) => ["both", "vertical", "horizontal", "none"].includes(value)
    }
  },
  emits: [
    /**
     * Removed in v9 - use `update:modelValue` (`v-model`) instead
     * @deprecated
     */
    "update:value",
    "update:modelValue",
    /** Same as update:modelValue for Vue 2 compatibility */
    "update:model-value"
  ],
  setup() {
    const model = useModelMigration("value", "update:value", true);
    return {
      model
    };
  },
  computed: {
    computedId() {
      return this.$attrs.id && this.$attrs.id !== "" ? this.$attrs.id : this.inputName;
    },
    inputName() {
      return "input" + GenRandomId();
    },
    hasPlaceholder() {
      return this.placeholder !== "" && this.placeholder !== void 0;
    },
    computedPlaceholder() {
      return this.hasPlaceholder ? this.placeholder : this.label;
    },
    isValidLabel() {
      const isValidLabel = this.label || this.labelOutside;
      if (!isValidLabel) {
        console.warn("You need to add a label to the NcInputField component. Either use the prop label or use an external one, as per the example in the documentation.");
      }
      return isValidLabel;
    },
    ariaDescribedby() {
      const ariaDescribedby = [];
      if (this.helperText.length > 0) {
        ariaDescribedby.push(`${this.inputName}-helper-text`);
      }
      if (this.$attrs["aria-describedby"]) {
        ariaDescribedby.push(this.$attrs["aria-describedby"]);
      }
      return ariaDescribedby.join(" ") || null;
    }
  },
  methods: {
    /**
     * Focus the input element
     *
     * @public
     */
    focus() {
      this.$refs.input.focus();
    },
    /**
     * Select all the text in the input
     *
     * @public
     */
    select() {
      this.$refs.input.select();
    },
    handleInput(event) {
      this.model = event.target.value;
    }
  }
};
var _sfc_render$A = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "textarea", class: { "textarea--disabled": _vm.disabled } }, [_c("div", { staticClass: "textarea__main-wrapper" }, [_c("textarea", _vm._g(_vm._b({ ref: "input", staticClass: "textarea__input", class: [
    _vm.inputClass,
    {
      "textarea__input--label-outside": _vm.labelOutside,
      "textarea__input--success": _vm.success,
      "textarea__input--error": _vm.error
    }
  ], style: { resize: _vm.resize }, attrs: { "id": _vm.computedId, "disabled": _vm.disabled, "placeholder": _vm.computedPlaceholder, "aria-describedby": _vm.ariaDescribedby, "aria-live": "polite" }, domProps: { "value": _vm.model }, on: { "input": _vm.handleInput } }, "textarea", _vm.$attrs, false), _vm.$listeners)), _vm._v(" "), !_vm.labelOutside && _vm.isValidLabel ? _c("label", { staticClass: "textarea__label", attrs: { "for": _vm.computedId } }, [_vm._v(" " + _vm._s(_vm.label) + " ")]) : _vm._e()]), _vm.helperText.length > 0 ? _c("p", { staticClass: "textarea__helper-text-message", class: {
    "textarea__helper-text-message--error": _vm.error,
    "textarea__helper-text-message--success": _vm.success
  }, attrs: { "id": `${_vm.inputName}-helper-text` } }, [_vm.success ? _c("Check", { staticClass: "textarea__helper-text-message__icon", attrs: { "size": 18 } }) : _vm.error ? _c("AlertCircle", { staticClass: "textarea__helper-text-message__icon", attrs: { "size": 18 } }) : _vm._e(), _vm._v(" " + _vm._s(_vm.helperText) + " ")], 1) : _vm._e()]);
};
var _sfc_staticRenderFns$A = [];
var __component__$A = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$A,
  _sfc_render$A,
  _sfc_staticRenderFns$A,
  false,
  null,
  "c89174d0"
);
const NcTextArea = __component__$A.exports;
const index$1 = {
  computed: {
    /**
     * @deprecated Is to be removed in v9.0.0 with Vue 3 migration.
     *             Use `composables/useIsMobile` instead.
     */
    isMobile() {
      return isMobileState.value;
    }
  }
};
var toastify = { exports: {} };
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function(module2) {
  (function(root2, factory) {
    if (module2.exports) {
      module2.exports = factory();
    } else {
      root2.Toastify = factory();
    }
  })(commonjsGlobal, function(global2) {
    var Toastify2 = function(options) {
      return new Toastify2.lib.init(options);
    }, version = "1.12.0";
    Toastify2.defaults = {
      oldestFirst: true,
      text: "Toastify is awesome!",
      node: void 0,
      duration: 3e3,
      selector: void 0,
      callback: function() {
      },
      destination: void 0,
      newWindow: false,
      close: false,
      gravity: "toastify-top",
      positionLeft: false,
      position: "",
      backgroundColor: "",
      avatar: "",
      className: "",
      stopOnFocus: true,
      onClick: function() {
      },
      offset: { x: 0, y: 0 },
      escapeMarkup: true,
      ariaLive: "polite",
      style: { background: "" }
    };
    Toastify2.lib = Toastify2.prototype = {
      toastify: version,
      constructor: Toastify2,
      // Initializing the object with required parameters
      init: function(options) {
        if (!options) {
          options = {};
        }
        this.options = {};
        this.toastElement = null;
        this.options.text = options.text || Toastify2.defaults.text;
        this.options.node = options.node || Toastify2.defaults.node;
        this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify2.defaults.duration;
        this.options.selector = options.selector || Toastify2.defaults.selector;
        this.options.callback = options.callback || Toastify2.defaults.callback;
        this.options.destination = options.destination || Toastify2.defaults.destination;
        this.options.newWindow = options.newWindow || Toastify2.defaults.newWindow;
        this.options.close = options.close || Toastify2.defaults.close;
        this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify2.defaults.gravity;
        this.options.positionLeft = options.positionLeft || Toastify2.defaults.positionLeft;
        this.options.position = options.position || Toastify2.defaults.position;
        this.options.backgroundColor = options.backgroundColor || Toastify2.defaults.backgroundColor;
        this.options.avatar = options.avatar || Toastify2.defaults.avatar;
        this.options.className = options.className || Toastify2.defaults.className;
        this.options.stopOnFocus = options.stopOnFocus === void 0 ? Toastify2.defaults.stopOnFocus : options.stopOnFocus;
        this.options.onClick = options.onClick || Toastify2.defaults.onClick;
        this.options.offset = options.offset || Toastify2.defaults.offset;
        this.options.escapeMarkup = options.escapeMarkup !== void 0 ? options.escapeMarkup : Toastify2.defaults.escapeMarkup;
        this.options.ariaLive = options.ariaLive || Toastify2.defaults.ariaLive;
        this.options.style = options.style || Toastify2.defaults.style;
        if (options.backgroundColor) {
          this.options.style.background = options.backgroundColor;
        }
        return this;
      },
      // Building the DOM element
      buildToast: function() {
        if (!this.options) {
          throw "Toastify is not initialized";
        }
        var divElement = document.createElement("div");
        divElement.className = "toastify on " + this.options.className;
        if (!!this.options.position) {
          divElement.className += " toastify-" + this.options.position;
        } else {
          if (this.options.positionLeft === true) {
            divElement.className += " toastify-left";
            console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.");
          } else {
            divElement.className += " toastify-right";
          }
        }
        divElement.className += " " + this.options.gravity;
        if (this.options.backgroundColor) {
          console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
        }
        for (var property in this.options.style) {
          divElement.style[property] = this.options.style[property];
        }
        if (this.options.ariaLive) {
          divElement.setAttribute("aria-live", this.options.ariaLive);
        }
        if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
          divElement.appendChild(this.options.node);
        } else {
          if (this.options.escapeMarkup) {
            divElement.innerText = this.options.text;
          } else {
            divElement.innerHTML = this.options.text;
          }
          if (this.options.avatar !== "") {
            var avatarElement = document.createElement("img");
            avatarElement.src = this.options.avatar;
            avatarElement.className = "toastify-avatar";
            if (this.options.position == "left" || this.options.positionLeft === true) {
              divElement.appendChild(avatarElement);
            } else {
              divElement.insertAdjacentElement("afterbegin", avatarElement);
            }
          }
        }
        if (this.options.close === true) {
          var closeElement = document.createElement("button");
          closeElement.type = "button";
          closeElement.setAttribute("aria-label", "Close");
          closeElement.className = "toast-close";
          closeElement.innerHTML = "&#10006;";
          closeElement.addEventListener(
            "click",
            function(event) {
              event.stopPropagation();
              this.removeElement(this.toastElement);
              window.clearTimeout(this.toastElement.timeOutValue);
            }.bind(this)
          );
          var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
            divElement.insertAdjacentElement("afterbegin", closeElement);
          } else {
            divElement.appendChild(closeElement);
          }
        }
        if (this.options.stopOnFocus && this.options.duration > 0) {
          var self2 = this;
          divElement.addEventListener(
            "mouseover",
            function(event) {
              window.clearTimeout(divElement.timeOutValue);
            }
          );
          divElement.addEventListener(
            "mouseleave",
            function() {
              divElement.timeOutValue = window.setTimeout(
                function() {
                  self2.removeElement(divElement);
                },
                self2.options.duration
              );
            }
          );
        }
        if (typeof this.options.destination !== "undefined") {
          divElement.addEventListener(
            "click",
            function(event) {
              event.stopPropagation();
              if (this.options.newWindow === true) {
                window.open(this.options.destination, "_blank");
              } else {
                window.location = this.options.destination;
              }
            }.bind(this)
          );
        }
        if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
          divElement.addEventListener(
            "click",
            function(event) {
              event.stopPropagation();
              this.options.onClick();
            }.bind(this)
          );
        }
        if (typeof this.options.offset === "object") {
          var x = getAxisOffsetAValue("x", this.options);
          var y = getAxisOffsetAValue("y", this.options);
          var xOffset = this.options.position == "left" ? x : "-" + x;
          var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
          divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
        }
        return divElement;
      },
      // Displaying the toast
      showToast: function() {
        this.toastElement = this.buildToast();
        var rootElement;
        if (typeof this.options.selector === "string") {
          rootElement = document.getElementById(this.options.selector);
        } else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== "undefined" && this.options.selector instanceof ShadowRoot) {
          rootElement = this.options.selector;
        } else {
          rootElement = document.body;
        }
        if (!rootElement) {
          throw "Root element is not defined";
        }
        var elementToInsert = Toastify2.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
        rootElement.insertBefore(this.toastElement, elementToInsert);
        Toastify2.reposition();
        if (this.options.duration > 0) {
          this.toastElement.timeOutValue = window.setTimeout(
            function() {
              this.removeElement(this.toastElement);
            }.bind(this),
            this.options.duration
          );
        }
        return this;
      },
      hideToast: function() {
        if (this.toastElement.timeOutValue) {
          clearTimeout(this.toastElement.timeOutValue);
        }
        this.removeElement(this.toastElement);
      },
      // Removing the element from the DOM
      removeElement: function(toastElement) {
        toastElement.className = toastElement.className.replace(" on", "");
        window.setTimeout(
          function() {
            if (this.options.node && this.options.node.parentNode) {
              this.options.node.parentNode.removeChild(this.options.node);
            }
            if (toastElement.parentNode) {
              toastElement.parentNode.removeChild(toastElement);
            }
            this.options.callback.call(toastElement);
            Toastify2.reposition();
          }.bind(this),
          400
        );
      }
    };
    Toastify2.reposition = function() {
      var topLeftOffsetSize = {
        top: 15,
        bottom: 15
      };
      var topRightOffsetSize = {
        top: 15,
        bottom: 15
      };
      var offsetSize = {
        top: 15,
        bottom: 15
      };
      var allToasts = document.getElementsByClassName("toastify");
      var classUsed;
      for (var i = 0; i < allToasts.length; i++) {
        if (containsClass(allToasts[i], "toastify-top") === true) {
          classUsed = "toastify-top";
        } else {
          classUsed = "toastify-bottom";
        }
        var height = allToasts[i].offsetHeight;
        classUsed = classUsed.substr(9, classUsed.length - 1);
        var offset2 = 15;
        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
        if (width <= 360) {
          allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
          offsetSize[classUsed] += height + offset2;
        } else {
          if (containsClass(allToasts[i], "toastify-left") === true) {
            allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
            topLeftOffsetSize[classUsed] += height + offset2;
          } else {
            allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
            topRightOffsetSize[classUsed] += height + offset2;
          }
        }
      }
      return this;
    };
    function getAxisOffsetAValue(axis, options) {
      if (options.offset[axis]) {
        if (isNaN(options.offset[axis])) {
          return options.offset[axis];
        } else {
          return options.offset[axis] + "px";
        }
      }
      return "0px";
    }
    function containsClass(elem, yourClass) {
      if (!elem || typeof yourClass !== "string") {
        return false;
      } else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
        return true;
      } else {
        return false;
      }
    }
    Toastify2.lib.init.prototype = Toastify2.lib;
    return Toastify2;
  });
})(toastify);
var toastifyExports = toastify.exports;
const Toastify = /* @__PURE__ */ getDefaultExportFromCjs(toastifyExports);
var FUNC_ERROR_TEXT = "Expected a function";
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var INFINITY = 1 / 0;
var funcTag = "[object Function]", genTag = "[object GeneratorFunction]", symbolTag = "[object Symbol]";
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reEscapeChar = /\\(\\)?/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!(value + "");
    } catch (e) {
    }
  }
  return result;
}
var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
var Symbol$1 = root.Symbol, splice = arrayProto.splice;
var Map$1 = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function Hash(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : void 0;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
}
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear() {
  this.__data__ = [];
}
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear() {
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function mapCacheDelete(key) {
  return getMapData(this, key)["delete"](key);
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
function baseIsNative(value) {
  if (!isObject$2(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function castPath(value) {
  return isArray$1(value) ? value : stringToPath(value);
}
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var stringToPath = memoize(function(string) {
  string = toString$1(string);
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, string2) {
    result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
function memoize(func, resolver) {
  if (typeof func != "function" || resolver && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var isArray$1 = Array.isArray;
function isFunction$1(value) {
  var tag = isObject$2(value) ? objectToString.call(value) : "";
  return tag == funcTag || tag == genTag;
}
function isObject$2(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
function get$4(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var lodash_get = get$4;
var plurals$1 = {
  ach: {
    name: "Acholi",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  af: {
    name: "Afrikaans",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ak: {
    name: "Akan",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  am: {
    name: "Amharic",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  an: {
    name: "Aragonese",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ar: {
    name: "Arabic",
    examples: [{
      plural: 0,
      sample: 0
    }, {
      plural: 1,
      sample: 1
    }, {
      plural: 2,
      sample: 2
    }, {
      plural: 3,
      sample: 3
    }, {
      plural: 4,
      sample: 11
    }, {
      plural: 5,
      sample: 100
    }],
    nplurals: 6,
    pluralsText: "nplurals = 6; plural = (n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5)",
    pluralsFunc: function(n2) {
      return n2 === 0 ? 0 : n2 === 1 ? 1 : n2 === 2 ? 2 : n2 % 100 >= 3 && n2 % 100 <= 10 ? 3 : n2 % 100 >= 11 ? 4 : 5;
    }
  },
  arn: {
    name: "Mapudungun",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  ast: {
    name: "Asturian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ay: {
    name: "Aymará",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  az: {
    name: "Azerbaijani",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  be: {
    name: "Belarusian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 5
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 % 10 === 1 && n2 % 100 !== 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2;
    }
  },
  bg: {
    name: "Bulgarian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  bn: {
    name: "Bengali",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  bo: {
    name: "Tibetan",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  br: {
    name: "Breton",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  brx: {
    name: "Bodo",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  bs: {
    name: "Bosnian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 5
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 % 10 === 1 && n2 % 100 !== 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2;
    }
  },
  ca: {
    name: "Catalan",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  cgg: {
    name: "Chiga",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  cs: {
    name: "Czech",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 5
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n === 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 === 1 ? 0 : n2 >= 2 && n2 <= 4 ? 1 : 2;
    }
  },
  csb: {
    name: "Kashubian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 5
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 === 1 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2;
    }
  },
  cy: {
    name: "Welsh",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 3
    }, {
      plural: 3,
      sample: 8
    }],
    nplurals: 4,
    pluralsText: "nplurals = 4; plural = (n === 1 ? 0 : n === 2 ? 1 : (n !== 8 && n !== 11) ? 2 : 3)",
    pluralsFunc: function(n2) {
      return n2 === 1 ? 0 : n2 === 2 ? 1 : n2 !== 8 && n2 !== 11 ? 2 : 3;
    }
  },
  da: {
    name: "Danish",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  de: {
    name: "German",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  doi: {
    name: "Dogri",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  dz: {
    name: "Dzongkha",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  el: {
    name: "Greek",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  en: {
    name: "English",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  eo: {
    name: "Esperanto",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  es: {
    name: "Spanish",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  et: {
    name: "Estonian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  eu: {
    name: "Basque",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  fa: {
    name: "Persian",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  ff: {
    name: "Fulah",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  fi: {
    name: "Finnish",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  fil: {
    name: "Filipino",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  fo: {
    name: "Faroese",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  fr: {
    name: "French",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  fur: {
    name: "Friulian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  fy: {
    name: "Frisian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ga: {
    name: "Irish",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 3
    }, {
      plural: 3,
      sample: 7
    }, {
      plural: 4,
      sample: 11
    }],
    nplurals: 5,
    pluralsText: "nplurals = 5; plural = (n === 1 ? 0 : n === 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4)",
    pluralsFunc: function(n2) {
      return n2 === 1 ? 0 : n2 === 2 ? 1 : n2 < 7 ? 2 : n2 < 11 ? 3 : 4;
    }
  },
  gd: {
    name: "Scottish Gaelic",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 3
    }, {
      plural: 3,
      sample: 20
    }],
    nplurals: 4,
    pluralsText: "nplurals = 4; plural = ((n === 1 || n === 11) ? 0 : (n === 2 || n === 12) ? 1 : (n > 2 && n < 20) ? 2 : 3)",
    pluralsFunc: function(n2) {
      return n2 === 1 || n2 === 11 ? 0 : n2 === 2 || n2 === 12 ? 1 : n2 > 2 && n2 < 20 ? 2 : 3;
    }
  },
  gl: {
    name: "Galician",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  gu: {
    name: "Gujarati",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  gun: {
    name: "Gun",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  ha: {
    name: "Hausa",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  he: {
    name: "Hebrew",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  hi: {
    name: "Hindi",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  hne: {
    name: "Chhattisgarhi",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  hr: {
    name: "Croatian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 5
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 % 10 === 1 && n2 % 100 !== 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2;
    }
  },
  hu: {
    name: "Hungarian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  hy: {
    name: "Armenian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  id: {
    name: "Indonesian",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  is: {
    name: "Icelandic",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n % 10 !== 1 || n % 100 === 11)",
    pluralsFunc: function(n2) {
      return n2 % 10 !== 1 || n2 % 100 === 11;
    }
  },
  it: {
    name: "Italian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ja: {
    name: "Japanese",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  jbo: {
    name: "Lojban",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  jv: {
    name: "Javanese",
    examples: [{
      plural: 0,
      sample: 0
    }, {
      plural: 1,
      sample: 1
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 0)",
    pluralsFunc: function(n2) {
      return n2 !== 0;
    }
  },
  ka: {
    name: "Georgian",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  kk: {
    name: "Kazakh",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  km: {
    name: "Khmer",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  kn: {
    name: "Kannada",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ko: {
    name: "Korean",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  ku: {
    name: "Kurdish",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  kw: {
    name: "Cornish",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 3
    }, {
      plural: 3,
      sample: 4
    }],
    nplurals: 4,
    pluralsText: "nplurals = 4; plural = (n === 1 ? 0 : n === 2 ? 1 : n === 3 ? 2 : 3)",
    pluralsFunc: function(n2) {
      return n2 === 1 ? 0 : n2 === 2 ? 1 : n2 === 3 ? 2 : 3;
    }
  },
  ky: {
    name: "Kyrgyz",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  lb: {
    name: "Letzeburgesch",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ln: {
    name: "Lingala",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  lo: {
    name: "Lao",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  lt: {
    name: "Lithuanian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 10
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 % 10 === 1 && n2 % 100 !== 11 ? 0 : n2 % 10 >= 2 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2;
    }
  },
  lv: {
    name: "Latvian",
    examples: [{
      plural: 2,
      sample: 0
    }, {
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n !== 0 ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 % 10 === 1 && n2 % 100 !== 11 ? 0 : n2 !== 0 ? 1 : 2;
    }
  },
  mai: {
    name: "Maithili",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  mfe: {
    name: "Mauritian Creole",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  mg: {
    name: "Malagasy",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  mi: {
    name: "Maori",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  mk: {
    name: "Macedonian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n === 1 || n % 10 === 1 ? 0 : 1)",
    pluralsFunc: function(n2) {
      return n2 === 1 || n2 % 10 === 1 ? 0 : 1;
    }
  },
  ml: {
    name: "Malayalam",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  mn: {
    name: "Mongolian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  mni: {
    name: "Manipuri",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  mnk: {
    name: "Mandinka",
    examples: [{
      plural: 0,
      sample: 0
    }, {
      plural: 1,
      sample: 1
    }, {
      plural: 2,
      sample: 2
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n === 0 ? 0 : n === 1 ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 === 0 ? 0 : n2 === 1 ? 1 : 2;
    }
  },
  mr: {
    name: "Marathi",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ms: {
    name: "Malay",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  mt: {
    name: "Maltese",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 11
    }, {
      plural: 3,
      sample: 20
    }],
    nplurals: 4,
    pluralsText: "nplurals = 4; plural = (n === 1 ? 0 : n === 0 || ( n % 100 > 1 && n % 100 < 11) ? 1 : (n % 100 > 10 && n % 100 < 20 ) ? 2 : 3)",
    pluralsFunc: function(n2) {
      return n2 === 1 ? 0 : n2 === 0 || n2 % 100 > 1 && n2 % 100 < 11 ? 1 : n2 % 100 > 10 && n2 % 100 < 20 ? 2 : 3;
    }
  },
  my: {
    name: "Burmese",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  nah: {
    name: "Nahuatl",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  nap: {
    name: "Neapolitan",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  nb: {
    name: "Norwegian Bokmal",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ne: {
    name: "Nepali",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  nl: {
    name: "Dutch",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  nn: {
    name: "Norwegian Nynorsk",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  no: {
    name: "Norwegian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  nso: {
    name: "Northern Sotho",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  oc: {
    name: "Occitan",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  or: {
    name: "Oriya",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  pa: {
    name: "Punjabi",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  pap: {
    name: "Papiamento",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  pl: {
    name: "Polish",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 5
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 === 1 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2;
    }
  },
  pms: {
    name: "Piemontese",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ps: {
    name: "Pashto",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  pt: {
    name: "Portuguese",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  rm: {
    name: "Romansh",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ro: {
    name: "Romanian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 20
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n === 1 ? 0 : (n === 0 || (n % 100 > 0 && n % 100 < 20)) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 === 1 ? 0 : n2 === 0 || n2 % 100 > 0 && n2 % 100 < 20 ? 1 : 2;
    }
  },
  ru: {
    name: "Russian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 5
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 % 10 === 1 && n2 % 100 !== 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2;
    }
  },
  rw: {
    name: "Kinyarwanda",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  sah: {
    name: "Yakut",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  sat: {
    name: "Santali",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  sco: {
    name: "Scots",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  sd: {
    name: "Sindhi",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  se: {
    name: "Northern Sami",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  si: {
    name: "Sinhala",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  sk: {
    name: "Slovak",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 5
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n === 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 === 1 ? 0 : n2 >= 2 && n2 <= 4 ? 1 : 2;
    }
  },
  sl: {
    name: "Slovenian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 3
    }, {
      plural: 3,
      sample: 5
    }],
    nplurals: 4,
    pluralsText: "nplurals = 4; plural = (n % 100 === 1 ? 0 : n % 100 === 2 ? 1 : n % 100 === 3 || n % 100 === 4 ? 2 : 3)",
    pluralsFunc: function(n2) {
      return n2 % 100 === 1 ? 0 : n2 % 100 === 2 ? 1 : n2 % 100 === 3 || n2 % 100 === 4 ? 2 : 3;
    }
  },
  so: {
    name: "Somali",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  son: {
    name: "Songhay",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  sq: {
    name: "Albanian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  sr: {
    name: "Serbian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 5
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 % 10 === 1 && n2 % 100 !== 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2;
    }
  },
  su: {
    name: "Sundanese",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  sv: {
    name: "Swedish",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  sw: {
    name: "Swahili",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  ta: {
    name: "Tamil",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  te: {
    name: "Telugu",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  tg: {
    name: "Tajik",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  th: {
    name: "Thai",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  ti: {
    name: "Tigrinya",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  tk: {
    name: "Turkmen",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  tr: {
    name: "Turkish",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  tt: {
    name: "Tatar",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  ug: {
    name: "Uyghur",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  uk: {
    name: "Ukrainian",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }, {
      plural: 2,
      sample: 5
    }],
    nplurals: 3,
    pluralsText: "nplurals = 3; plural = (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)",
    pluralsFunc: function(n2) {
      return n2 % 10 === 1 && n2 % 100 !== 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2;
    }
  },
  ur: {
    name: "Urdu",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  uz: {
    name: "Uzbek",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  vi: {
    name: "Vietnamese",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  wa: {
    name: "Walloon",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n > 1)",
    pluralsFunc: function(n2) {
      return n2 > 1;
    }
  },
  wo: {
    name: "Wolof",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  },
  yo: {
    name: "Yoruba",
    examples: [{
      plural: 0,
      sample: 1
    }, {
      plural: 1,
      sample: 2
    }],
    nplurals: 2,
    pluralsText: "nplurals = 2; plural = (n !== 1)",
    pluralsFunc: function(n2) {
      return n2 !== 1;
    }
  },
  zh: {
    name: "Chinese",
    examples: [{
      plural: 0,
      sample: 1
    }],
    nplurals: 1,
    pluralsText: "nplurals = 1; plural = 0",
    pluralsFunc: function() {
      return 0;
    }
  }
};
var get$3 = lodash_get;
var plurals = plurals$1;
var gettext = Gettext;
function Gettext(options) {
  options = options || {};
  this.catalogs = {};
  this.locale = "";
  this.domain = "messages";
  this.listeners = [];
  this.sourceLocale = "";
  if (options.sourceLocale) {
    if (typeof options.sourceLocale === "string") {
      this.sourceLocale = options.sourceLocale;
    } else {
      this.warn("The `sourceLocale` option should be a string");
    }
  }
  this.debug = "debug" in options && options.debug === true;
}
Gettext.prototype.on = function(eventName, callback) {
  this.listeners.push({
    eventName,
    callback
  });
};
Gettext.prototype.off = function(eventName, callback) {
  this.listeners = this.listeners.filter(function(listener) {
    return (listener.eventName === eventName && listener.callback === callback) === false;
  });
};
Gettext.prototype.emit = function(eventName, eventData) {
  for (var i = 0; i < this.listeners.length; i++) {
    var listener = this.listeners[i];
    if (listener.eventName === eventName) {
      listener.callback(eventData);
    }
  }
};
Gettext.prototype.warn = function(message) {
  if (this.debug) {
    console.warn(message);
  }
  this.emit("error", new Error(message));
};
Gettext.prototype.addTranslations = function(locale2, domain, translations) {
  if (!this.catalogs[locale2]) {
    this.catalogs[locale2] = {};
  }
  this.catalogs[locale2][domain] = translations;
};
Gettext.prototype.setLocale = function(locale2) {
  if (typeof locale2 !== "string") {
    this.warn(
      "You called setLocale() with an argument of type " + typeof locale2 + ". The locale must be a string."
    );
    return;
  }
  if (locale2.trim() === "") {
    this.warn("You called setLocale() with an empty value, which makes little sense.");
  }
  if (locale2 !== this.sourceLocale && !this.catalogs[locale2]) {
    this.warn('You called setLocale() with "' + locale2 + '", but no translations for that locale has been added.');
  }
  this.locale = locale2;
};
Gettext.prototype.setTextDomain = function(domain) {
  if (typeof domain !== "string") {
    this.warn(
      "You called setTextDomain() with an argument of type " + typeof domain + ". The domain must be a string."
    );
    return;
  }
  if (domain.trim() === "") {
    this.warn("You called setTextDomain() with an empty `domain` value.");
  }
  this.domain = domain;
};
Gettext.prototype.gettext = function(msgid) {
  return this.dnpgettext(this.domain, "", msgid);
};
Gettext.prototype.dgettext = function(domain, msgid) {
  return this.dnpgettext(domain, "", msgid);
};
Gettext.prototype.ngettext = function(msgid, msgidPlural, count) {
  return this.dnpgettext(this.domain, "", msgid, msgidPlural, count);
};
Gettext.prototype.dngettext = function(domain, msgid, msgidPlural, count) {
  return this.dnpgettext(domain, "", msgid, msgidPlural, count);
};
Gettext.prototype.pgettext = function(msgctxt, msgid) {
  return this.dnpgettext(this.domain, msgctxt, msgid);
};
Gettext.prototype.dpgettext = function(domain, msgctxt, msgid) {
  return this.dnpgettext(domain, msgctxt, msgid);
};
Gettext.prototype.npgettext = function(msgctxt, msgid, msgidPlural, count) {
  return this.dnpgettext(this.domain, msgctxt, msgid, msgidPlural, count);
};
Gettext.prototype.dnpgettext = function(domain, msgctxt, msgid, msgidPlural, count) {
  var defaultTranslation = msgid;
  var translation;
  var index2;
  msgctxt = msgctxt || "";
  if (!isNaN(count) && count !== 1) {
    defaultTranslation = msgidPlural || msgid;
  }
  translation = this._getTranslation(domain, msgctxt, msgid);
  if (translation) {
    if (typeof count === "number") {
      var pluralsFunc = plurals[Gettext.getLanguageCode(this.locale)].pluralsFunc;
      index2 = pluralsFunc(count);
      if (typeof index2 === "boolean") {
        index2 = index2 ? 1 : 0;
      }
    } else {
      index2 = 0;
    }
    return translation.msgstr[index2] || defaultTranslation;
  } else if (!this.sourceLocale || this.locale !== this.sourceLocale) {
    this.warn('No translation was found for msgid "' + msgid + '" in msgctxt "' + msgctxt + '" and domain "' + domain + '"');
  }
  return defaultTranslation;
};
Gettext.prototype.getComment = function(domain, msgctxt, msgid) {
  var translation;
  translation = this._getTranslation(domain, msgctxt, msgid);
  if (translation) {
    return translation.comments || {};
  }
  return {};
};
Gettext.prototype._getTranslation = function(domain, msgctxt, msgid) {
  msgctxt = msgctxt || "";
  return get$3(this.catalogs, [this.locale, domain, "translations", msgctxt, msgid]);
};
Gettext.getLanguageCode = function(locale2) {
  return locale2.split(/[\-_]/)[0].toLowerCase();
};
Gettext.prototype.textdomain = function(domain) {
  if (this.debug) {
    console.warn("textdomain(domain) was used to set locales in node-gettext v1. Make sure you are using it for domains, and switch to setLocale(locale) if you are not.\n\n To read more about the migration from node-gettext v1 to v2, see https://github.com/alexanderwallin/node-gettext/#migrating-from-1x-to-2x\n\nThis warning will be removed in the final 2.0.0");
  }
  this.setTextDomain(domain);
};
Gettext.prototype.setlocale = function(locale2) {
  this.setLocale(locale2);
};
Gettext.prototype.addTextdomain = function() {
  console.error("addTextdomain() is deprecated.\n\n* To add translations, use addTranslations()\n* To set the default domain, use setTextDomain() (or its alias textdomain())\n\nTo read more about the migration from node-gettext v1 to v2, see https://github.com/alexanderwallin/node-gettext/#migrating-from-1x-to-2x");
};
const o = /* @__PURE__ */ getDefaultExportFromCjs(gettext);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class GettextBuilder {
  constructor() {
    __publicField(this, "locale");
    __publicField(this, "translations", {});
    __publicField(this, "debug", false);
  }
  setLanguage(language) {
    this.locale = language;
    return this;
  }
  /** Try to detect locale from context with `en` as fallback value */
  detectLocale() {
    return this.setLanguage(getLanguage().replace("-", "_"));
  }
  addTranslation(language, data) {
    this.translations[language] = data;
    return this;
  }
  enableDebugMode() {
    this.debug = true;
    return this;
  }
  build() {
    return new GettextWrapper(this.locale || "en", this.translations, this.debug);
  }
}
class GettextWrapper {
  constructor(locale2, data, debug2) {
    __publicField(this, "gt");
    this.gt = new o({
      debug: debug2,
      sourceLocale: "en"
    });
    for (const key in data) {
      this.gt.addTranslations(key, "messages", data[key]);
    }
    this.gt.setLocale(locale2);
  }
  subtitudePlaceholders(translated, vars) {
    return translated.replace(/{([^{}]*)}/g, (a, b) => {
      const r = vars[b];
      if (typeof r === "string" || typeof r === "number") {
        return r.toString();
      } else {
        return a;
      }
    });
  }
  /**
   * Get translated string (singular form), optionally with placeholders
   *
   * @param original original string to translate
   * @param placeholders map of placeholder key to value
   */
  gettext(original, placeholders = {}) {
    return this.subtitudePlaceholders(
      this.gt.gettext(original),
      placeholders
    );
  }
  /**
   * Get translated string with plural forms
   *
   * @param singular Singular text form
   * @param plural Plural text form to be used if `count` requires it
   * @param count The number to insert into the text
   * @param placeholders optional map of placeholder key to value
   */
  ngettext(singular, plural, count, placeholders = {}) {
    return this.subtitudePlaceholders(
      this.gt.ngettext(singular, plural, count).replace(/%n/g, count.toString()),
      placeholders
    );
  }
}
function getGettextBuilder() {
  return new GettextBuilder();
}
const gtBuilder = getGettextBuilder().detectLocale();
[{ "locale": "af", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Afrikaans (https://app.transifex.com/nextcloud/teams/64236/af/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "af", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Afrikaans (https://app.transifex.com/nextcloud/teams/64236/af/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: af\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ar", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Ali <alimahwer@yahoo.com>, 2024", "Language-Team": "Arabic (https://app.transifex.com/nextcloud/teams/64236/ar/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ar", "Plural-Forms": "nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nAli <alimahwer@yahoo.com>, 2024\n" }, "msgstr": ["Last-Translator: Ali <alimahwer@yahoo.com>, 2024\nLanguage-Team: Arabic (https://app.transifex.com/nextcloud/teams/64236/ar/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ar\nPlural-Forms: nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" لا يصلح كاسم مجلد.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" غير مسموح به كاسم مجلد'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" غير مسموح به داخل اسم مجلد.'] }, "All files": { "msgid": "All files", "msgstr": ["كل الملفات"] }, "Choose": { "msgid": "Choose", "msgstr": ["إختَر"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["إختَر {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["إختَر %n ملف", "إختَر %n ملف", "إختَر %n ملف", "إختَر %n ملفات", "إختَر %n ملف", "إختَر %n ملف"] }, "Copy": { "msgid": "Copy", "msgstr": ["نسخ"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["نسخٌ إلى {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["تعذّر إنشاء المجلد الجديد"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["يتعذّر تحميل إعدادات الملفات"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["يتعذّر تحميل مناظير views الملفات"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["أنشِيءْ مجلّداً"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["مُنتقِي المنظور الحالي"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["المُفضَّلة"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["الملفات و المجلدات التي تُميِّزُها كمٌفضَّلة ستظهر هنا."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["الملفات و المجلدات التي قمت مؤخراً بتعديلها سوف تظهر هنا."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["فلترة قائمة الملفات"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["اسم المجلد لا يمكن أن يكون فارغاً."] }, "Home": { "msgid": "Home", "msgstr": ["البداية"] }, "Modified": { "msgid": "Modified", "msgstr": ["مُعدَّل"] }, "Move": { "msgid": "Move", "msgstr": ["أُنقُل"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["أُنقُل إلى {target}"] }, "Name": { "msgid": "Name", "msgstr": ["الاسم"] }, "New": { "msgid": "New", "msgstr": ["جديد"] }, "New folder": { "msgid": "New folder", "msgstr": ["مٌجلّد جديد"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["اسم المجلد الجديد"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["لا توجد ملفات هنا"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["لا توجد ملفات تتطابق مع الفلتر الذي وضعته"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["لا توجد ملفات مُطابِقة"] }, "Recent": { "msgid": "Recent", "msgstr": ["الحالي"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["حدِّد كل المداخل"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["إختَر المدخل"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["إختر سطر الـ {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["الحجم"] }, "Undo": { "msgid": "Undo", "msgstr": ["تراجع"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["قُم برفع محتوىً أو قُم بمزامنة أجهزتك!"] } } } } }, { "locale": "ast", "json": { "charset": "utf-8", "headers": { "Last-Translator": "enolp <enolp@softastur.org>, 2024", "Language-Team": "Asturian (https://app.transifex.com/nextcloud/teams/64236/ast/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ast", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nenolp <enolp@softastur.org>, 2024\n" }, "msgstr": ["Last-Translator: enolp <enolp@softastur.org>, 2024\nLanguage-Team: Asturian (https://app.transifex.com/nextcloud/teams/64236/ast/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ast\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["«{name}» ye un nome de carpeta inválidu."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["«{name}» ye un nome de carpeta inválidu"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["Nun se permite'l caráuter «/» dientro'l nome de les carpetes."] }, "All files": { "msgid": "All files", "msgstr": ["Tolos ficheros"] }, "Choose": { "msgid": "Choose", "msgstr": ["Escoyer"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Escoyer «{ficheru}»"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Escoyer %n ficheru", "Escoyer %n ficheros"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar en: {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nun se pudo crear la carpeta"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Nun se pudo cargar la configuración de los ficheros"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Nun se pudieron cargar les vistes de los ficheros"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear un direutoriu"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de la vista actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Equí apaecen los ficheros y les carpetes que metas en Favoritos."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Equí apaecen los fichero y les carpetes que modificares apocayá."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Peñerar la llista de ficheros"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["El nome de la carpeta nun pue tar baleru."] }, "Home": { "msgid": "Home", "msgstr": ["Aniciu"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificóse"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nome"] }, "New": { "msgid": "New", "msgstr": ["Nuevu"] }, "New folder": { "msgid": "New folder", "msgstr": ["Carpeta nueva"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nome de carpeta nuevu"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Equí nun hai nengún ficheru"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nun s'atopó nengún ficheru que concasare cola peñera."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nun hai nengún ficheru que concase"] }, "Recent": { "msgid": "Recent", "msgstr": ["De recién"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Seleicionar toles entraes"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleicionar la entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleicionar la filera de: {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamañu"] }, "Undo": { "msgid": "Undo", "msgstr": ["Desfacer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["¡Xubi dalgún elementu o sincroniza colos tos preseos!"] } } } } }, { "locale": "az", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Azerbaijani (https://app.transifex.com/nextcloud/teams/64236/az/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "az", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Azerbaijani (https://app.transifex.com/nextcloud/teams/64236/az/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: az\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "be", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Belarusian (https://app.transifex.com/nextcloud/teams/64236/be/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "be", "Plural-Forms": "nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Belarusian (https://app.transifex.com/nextcloud/teams/64236/be/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: be\nPlural-Forms: nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "bg_BG", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Bulgarian (Bulgaria) (https://app.transifex.com/nextcloud/teams/64236/bg_BG/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "bg_BG", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Bulgarian (Bulgaria) (https://app.transifex.com/nextcloud/teams/64236/bg_BG/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: bg_BG\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "bn_BD", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Bengali (Bangladesh) (https://app.transifex.com/nextcloud/teams/64236/bn_BD/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "bn_BD", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Bengali (Bangladesh) (https://app.transifex.com/nextcloud/teams/64236/bn_BD/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: bn_BD\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "br", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Breton (https://app.transifex.com/nextcloud/teams/64236/br/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "br", "Plural-Forms": "nplurals=5; plural=((n%10 == 1) && (n%100 != 11) && (n%100 !=71) && (n%100 !=91) ? 0 :(n%10 == 2) && (n%100 != 12) && (n%100 !=72) && (n%100 !=92) ? 1 :(n%10 ==3 || n%10==4 || n%10==9) && (n%100 < 10 || n% 100 > 19) && (n%100 < 70 || n%100 > 79) && (n%100 < 90 || n%100 > 99) ? 2 :(n != 0 && n % 1000000 == 0) ? 3 : 4);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Breton (https://app.transifex.com/nextcloud/teams/64236/br/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: br\nPlural-Forms: nplurals=5; plural=((n%10 == 1) && (n%100 != 11) && (n%100 !=71) && (n%100 !=91) ? 0 :(n%10 == 2) && (n%100 != 12) && (n%100 !=72) && (n%100 !=92) ? 1 :(n%10 ==3 || n%10==4 || n%10==9) && (n%100 < 10 || n% 100 > 19) && (n%100 < 70 || n%100 > 79) && (n%100 < 90 || n%100 > 99) ? 2 :(n != 0 && n % 1000000 == 0) ? 3 : 4);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Disober"] } } } } }, { "locale": "bs", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Bosnian (https://app.transifex.com/nextcloud/teams/64236/bs/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "bs", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Bosnian (https://app.transifex.com/nextcloud/teams/64236/bs/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: bs\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ca", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Sergi Font, 2024", "Language-Team": "Catalan (https://app.transifex.com/nextcloud/teams/64236/ca/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ca", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nv v <e670006006@gmail.com>, 2024\nMarc Riera <marcriera@softcatala.org>, 2024\nSergi Font, 2024\n" }, "msgstr": ["Last-Translator: Sergi Font, 2024\nLanguage-Team: Catalan (https://app.transifex.com/nextcloud/teams/64236/ca/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ca\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" és un nom de carpeta no vàlid.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" no és permès en el nom de carpeta'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" no és permès en el nom de carpeta.'] }, "All files": { "msgid": "All files", "msgstr": ["Tots els fitxers"] }, "Choose": { "msgid": "Choose", "msgstr": ["Tria"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Tria {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Tria %n fitxer", "Tria %n fitxers"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copia"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copia a {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["No s'ha pogut crear la carpeta nova"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["No es poden carregar fitxers de configuració"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["No es poden carregar fitxers de vistes"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear directori"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de visualització actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Preferits"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Els fitxers i les carpetes que marqueu com a favorits es mostraran aquí."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Els fitxers i les carpetes recentment modificats es mostraran aquí."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar llistat de fitxers"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["El nom de la carpeta no pot estar buit."] }, "Home": { "msgid": "Home", "msgstr": ["Inici"] }, "Modified": { "msgid": "Modified", "msgstr": ["Data de modificació"] }, "Move": { "msgid": "Move", "msgstr": ["Desplaça"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Desplaça a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nom"] }, "New": { "msgid": "New", "msgstr": ["Crea"] }, "New folder": { "msgid": "New folder", "msgstr": ["Carpeta nova"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nom de la carpeta nova"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No hi ha cap fitxer"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["No s'ha trobat cap fitxer que coincideixi amb el filtre."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No hi ha cap fitxer que coincideixi"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recents"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Selecciona totes les entrades"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Selecciona l'entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Selecciona la fila per a {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Mida"] }, "Undo": { "msgid": "Undo", "msgstr": ["Desfés"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Pugeu contingut o sincronitzeu-lo amb els vostres dispositius!"] } } } } }, { "locale": "cs", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Pavel Borecki <pavel.borecki@gmail.com>, 2020", "Language-Team": "Czech (https://www.transifex.com/nextcloud/teams/64236/cs/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "cs", "Plural-Forms": "nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nPavel Borecki <pavel.borecki@gmail.com>, 2020\n" }, "msgstr": ["Last-Translator: Pavel Borecki <pavel.borecki@gmail.com>, 2020\nLanguage-Team: Czech (https://www.transifex.com/nextcloud/teams/64236/cs/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cs\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:187" }, "msgstr": ["Zpět"] } } } } }, { "locale": "cs_CZ", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Pavel Borecki <pavel.borecki@gmail.com>, 2024", "Language-Team": "Czech (Czech Republic) (https://app.transifex.com/nextcloud/teams/64236/cs_CZ/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "cs_CZ", "Plural-Forms": "nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nPavel Borecki <pavel.borecki@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Pavel Borecki <pavel.borecki@gmail.com>, 2024\nLanguage-Team: Czech (Czech Republic) (https://app.transifex.com/nextcloud/teams/64236/cs_CZ/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cs_CZ\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["„{name}“ není platný název složky."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["„{name}“ není povolený název složky."] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["znak „/“ (dopředné lomítko) není možné použít v názvu složky."] }, "All files": { "msgid": "All files", "msgstr": ["Veškeré soubory"] }, "Choose": { "msgid": "Choose", "msgstr": ["Zvolit"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Zvolit {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Zvolte %n soubor", "Zvolte %n soubory", "Zvolte %n souborů", "Zvolte %n soubory"] }, "Copy": { "msgid": "Copy", "msgstr": ["Zkopírovat"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Zkopírovat do {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Novou složku se nepodařilo vytvořit"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Nepodařilo se načíst nastavení pro soubory"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Nepodařilo se načíst pohledy souborů"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Vytvořit složku"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Výběr stávajícího zobrazení"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Oblíbené"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Zde se zobrazí soubory a složky, které označíte jako oblíbené."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Zde se zobrazí soubory a složky, které jste nedávno pozměnili."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrovat seznam souborů"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Složku je třeba nějak nazvat."] }, "Home": { "msgid": "Home", "msgstr": ["Domů"] }, "Modified": { "msgid": "Modified", "msgstr": ["Změněno"] }, "Move": { "msgid": "Move", "msgstr": ["Přesounout"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Přesunout do {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Název"] }, "New": { "msgid": "New", "msgstr": ["Nové"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nová složka"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Název pro novou složku"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Nejsou zde žádné soubory"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nenalezeny žádné soubory odpovídající vašemu filtru"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Žádné odpovídající soubory"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nedávné"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Vybrat všechny položky"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Vybrat položku"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Vybrat řádek pro {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Velikost"] }, "Undo": { "msgid": "Undo", "msgstr": ["Zpět"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Nahrajte nějaký obsah nebo proveďte synchronizaci se svými zařízeními!"] } } } } }, { "locale": "cy_GB", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Welsh (United Kingdom) (https://app.transifex.com/nextcloud/teams/64236/cy_GB/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "cy_GB", "Plural-Forms": "nplurals=4; plural=(n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Welsh (United Kingdom) (https://app.transifex.com/nextcloud/teams/64236/cy_GB/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cy_GB\nPlural-Forms: nplurals=4; plural=(n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "da", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Martin Bonde <Martin@maboni.dk>, 2024", "Language-Team": "Danish (https://app.transifex.com/nextcloud/teams/64236/da/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "da", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMartin Bonde <Martin@maboni.dk>, 2024\n" }, "msgstr": ["Last-Translator: Martin Bonde <Martin@maboni.dk>, 2024\nLanguage-Team: Danish (https://app.transifex.com/nextcloud/teams/64236/da/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: da\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" er et ugyldigt mappenavn.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" er ikke et tilladt mappenavn'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" er ikke tilladt i et mappenavn.'] }, "All files": { "msgid": "All files", "msgstr": ["Alle filer"] }, "Choose": { "msgid": "Choose", "msgstr": ["Vælg"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Vælg {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Vælg %n fil", "Vælg %n filer"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopier"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopier til {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Kunne ikke oprette den nye mappe"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Filindstillingerne kunne ikke indlæses"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Kunne ikke indlæse filvisninger"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Opret mappe"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Aktuel visningsvælger"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritter"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Filer og mapper, du markerer som foretrukne, vises her."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Filer og mapper, du for nylig har ændret, vises her."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrer fil liste"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Mappenavnet må ikke være tomt."] }, "Home": { "msgid": "Home", "msgstr": ["Hjem"] }, "Modified": { "msgid": "Modified", "msgstr": ["Ændret"] }, "Move": { "msgid": "Move", "msgstr": ["Flyt"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Flyt til {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Navn"] }, "New": { "msgid": "New", "msgstr": ["Ny"] }, "New folder": { "msgid": "New folder", "msgstr": ["Ny mappe"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Ny mappe navn"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Ingen filer here"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Der blev ikke fundet nogen filer, der matcher dit filter."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Ingen matchende filer"] }, "Recent": { "msgid": "Recent", "msgstr": ["Seneste"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Vælg alle poster"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Vælg post"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Vælg rækken for {nodenavn}"] }, "Size": { "msgid": "Size", "msgstr": ["Størelse"] }, "Undo": { "msgid": "Undo", "msgstr": ["Fortryd"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Upload noget indhold eller synkroniser med dine enheder!"] } } } } }, { "locale": "de", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Ettore Atalan <atalanttore@googlemail.com>, 2024", "Language-Team": "German (https://app.transifex.com/nextcloud/teams/64236/de/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "de", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMario Siegmann <mario_siegmann@web.de>, 2023\nMarkus Eckstein, 2023\nAndy Scherzinger <info@andy-scherzinger.de>, 2023\nJoachim Sokolowski, 2023\nEttore Atalan <atalanttore@googlemail.com>, 2024\n" }, "msgstr": ["Last-Translator: Ettore Atalan <atalanttore@googlemail.com>, 2024\nLanguage-Team: German (https://app.transifex.com/nextcloud/teams/64236/de/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: de\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" ist ein ungültiger Ordnername.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" ist kein zulässiger Ordnername'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" ist innerhalb eines Ordnernamens nicht zulässig.'] }, "All files": { "msgid": "All files", "msgstr": ["Alle Dateien"] }, "Choose": { "msgid": "Choose", "msgstr": ["Auswählen"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["{file} auswählen"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["%n Datei auswählen", "%n Dateien auswählen"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopieren"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Nach {target} kopieren"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Der neue Ordner konnte nicht erstellt werden."] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Dateieinstellungen konnten nicht geladen werden"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Dateiansichten konnten nicht geladen werden"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Verzeichnis erstellen"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Aktuelle Ansichtsauswahl"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoriten"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Dateien und Ordner, die du als Favorit markierst, werden hier angezeigt."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Dateien und Ordner, die du kürzlich geändert hast, werden hier angezeigt."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Dateiliste filtern"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Der Ordnername darf nicht leer sein."] }, "Home": { "msgid": "Home", "msgstr": ["Startseite"] }, "Modified": { "msgid": "Modified", "msgstr": ["Geändert"] }, "Move": { "msgid": "Move", "msgstr": ["Verschieben"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Nach {target} verschieben"] }, "Name": { "msgid": "Name", "msgstr": ["Name"] }, "New": { "msgid": "New", "msgstr": ["Neu"] }, "New folder": { "msgid": "New folder", "msgstr": ["Neuer Ordner"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Neuer Ordnername"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Keine Dateien vorhanden"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Es wurden keine Dateien gefunden, die deinem Filter entsprechen."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Keine passenden Dateien"] }, "Recent": { "msgid": "Recent", "msgstr": ["Jüngste"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Alle Einträge auswählen"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Eintrag auswählen"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Die Zeile für {nodename} auswählen."] }, "Size": { "msgid": "Size", "msgstr": ["Größe"] }, "Undo": { "msgid": "Undo", "msgstr": ["Rückgängig"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Lade Inhalte hoch oder synchronisieren diese mit deinen Geräten!"] } } } } }, { "locale": "de_DE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Mario Siegmann <mario_siegmann@web.de>, 2024", "Language-Team": "German (Germany) (https://app.transifex.com/nextcloud/teams/64236/de_DE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "de_DE", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMark Ziegler <mark.ziegler@rakekniven.de>, 2023\nMario Siegmann <mario_siegmann@web.de>, 2024\n" }, "msgstr": ["Last-Translator: Mario Siegmann <mario_siegmann@web.de>, 2024\nLanguage-Team: German (Germany) (https://app.transifex.com/nextcloud/teams/64236/de_DE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: de_DE\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" ist ein ungültiger Ordnername.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" ist kein zulässiger Ordnername'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" ist innerhalb eines Ordnernamens nicht zulässig.'] }, "All files": { "msgid": "All files", "msgstr": ["Alle Dateien"] }, "Choose": { "msgid": "Choose", "msgstr": ["Auswählen"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["{file} auswählen"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["%n Datei auswählen", "%n Dateien auswählen"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopieren"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Nach {target} kopieren"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Der neue Ordner konnte nicht erstellt werden"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Dateieinstellungen konnten nicht geladen werden"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Dateiansichten konnten nicht geladen werden"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Verzeichnis erstellen"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Aktuelle Ansichtsauswahl"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoriten"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Dateien und Ordner, die Sie als Favorit markieren, werden hier angezeigt."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Dateien und Ordner, die Sie kürzlich geändert haben, werden hier angezeigt."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Dateiliste filtern"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Der Ordnername darf nicht leer sein."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Geändert"] }, "Move": { "msgid": "Move", "msgstr": ["Verschieben"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Nach {target} verschieben"] }, "Name": { "msgid": "Name", "msgstr": ["Name"] }, "New": { "msgid": "New", "msgstr": ["Neu"] }, "New folder": { "msgid": "New folder", "msgstr": ["Neuer Ordner"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Neuer Ordnername"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Hier sind keine Dateien"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Es wurden keine Dateien gefunden, die Ihrem Filter entsprechen."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Keine passenden Dateien"] }, "Recent": { "msgid": "Recent", "msgstr": ["Neueste"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Alle Einträge auswählen"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Eintrag auswählen"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Die Zeile für {nodename} auswählen."] }, "Size": { "msgid": "Size", "msgstr": ["Größe"] }, "Undo": { "msgid": "Undo", "msgstr": ["Rückgängig machen"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Laden Sie Inhalte hoch oder synchronisieren Sie diese mit Ihren Geräten!"] } } } } }, { "locale": "el", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Greek (https://app.transifex.com/nextcloud/teams/64236/el/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "el", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Greek (https://app.transifex.com/nextcloud/teams/64236/el/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: el\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Αναίρεση"] } } } } }, { "locale": "en_GB", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Andi Chandler <andi@gowling.com>, 2024", "Language-Team": "English (United Kingdom) (https://app.transifex.com/nextcloud/teams/64236/en_GB/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "en_GB", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nCafé Tango, 2023\nAndi Chandler <andi@gowling.com>, 2024\n" }, "msgstr": ["Last-Translator: Andi Chandler <andi@gowling.com>, 2024\nLanguage-Team: English (United Kingdom) (https://app.transifex.com/nextcloud/teams/64236/en_GB/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: en_GB\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" is an invalid folder name.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" is not an allowed folder name'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" is not allowed inside a folder name.'] }, "All files": { "msgid": "All files", "msgstr": ["All files"] }, "Choose": { "msgid": "Choose", "msgstr": ["Choose"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Choose {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Choose %n file", "Choose %n files"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copy"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copy to {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Could not create the new folder"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Could not load files settings"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Could not load files views"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Create directory"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Current view selector"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favourites"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Files and folders you mark as favourite will show up here."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Files and folders you recently modified will show up here."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filter file list"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Folder name cannot be empty."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modified"] }, "Move": { "msgid": "Move", "msgstr": ["Move"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Move to {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Name"] }, "New": { "msgid": "New", "msgstr": ["New"] }, "New folder": { "msgid": "New folder", "msgstr": ["New folder"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["New folder name"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No files in here"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["No files matching your filter were found."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No matching files"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recent"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Select all entries"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Select entry"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Select the row for {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Size"] }, "Undo": { "msgid": "Undo", "msgstr": ["Undo"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Upload some content or sync with your devices!"] } } } } }, { "locale": "eo", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Esperanto (https://app.transifex.com/nextcloud/teams/64236/eo/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "eo", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Esperanto (https://app.transifex.com/nextcloud/teams/64236/eo/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: eo\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Malfari"] } } } } }, { "locale": "es", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Julio C. Ortega, 2024", "Language-Team": "Spanish (https://app.transifex.com/nextcloud/teams/64236/es/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nFranciscoFJ <dev-ooo@satel-sa.com>, 2023\nMark Ziegler <mark.ziegler@rakekniven.de>, 2024\nJulio C. Ortega, 2024\n" }, "msgstr": ["Last-Translator: Julio C. Ortega, 2024\nLanguage-Team: Spanish (https://app.transifex.com/nextcloud/teams/64236/es/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" es un nombre de carpeta no válido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" no es un nombre de carpeta permitido'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" no está permitido dentro del nombre de una carpeta.'] }, "All files": { "msgid": "All files", "msgstr": ["Todos los archivos"] }, "Choose": { "msgid": "Choose", "msgstr": ["Seleccionar"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Seleccionar {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Elige %n archivo", "Elige %n archivos", "Seleccione %n archivos"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar a {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["No se pudo crear la nueva carpeta"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["No se pudieron cargar los ajustes de archivos"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["No se pudieron cargar las vistas de los archivos"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear directorio"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de vista actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Los archivos y carpetas que marque como favoritos aparecerán aquí."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Los archivos y carpetas que modificó recientemente aparecerán aquí."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar lista de archivos"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["El nombre de la carpeta no puede estar vacío."] }, "Home": { "msgid": "Home", "msgstr": ["Inicio"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nombre"] }, "New": { "msgid": "New", "msgstr": ["Nuevo"] }, "New folder": { "msgid": "New folder", "msgstr": [" Nueva carpeta"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nuevo nombre de carpeta"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No hay archivos aquí"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["No se encontraron archivos que coincidiesen con su filtro."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No hay archivos coincidentes"] }, "Recent": { "msgid": "Recent", "msgstr": ["Reciente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Seleccionar todas las entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleccionar entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleccione la fila para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamaño"] }, "Undo": { "msgid": "Undo", "msgstr": ["Deshacer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["¡Cargue algún contenido o sincronice con sus dispositivos!"] } } } } }, { "locale": "es_419", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Latin America) (https://app.transifex.com/nextcloud/teams/64236/es_419/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_419", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Latin America) (https://app.transifex.com/nextcloud/teams/64236/es_419/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_419\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_AR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Matías Campo Hoet <matiascampo@gmail.com>, 2024", "Language-Team": "Spanish (Argentina) (https://app.transifex.com/nextcloud/teams/64236/es_AR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_AR", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMatías Campo Hoet <matiascampo@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Matías Campo Hoet <matiascampo@gmail.com>, 2024\nLanguage-Team: Spanish (Argentina) (https://app.transifex.com/nextcloud/teams/64236/es_AR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_AR\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" es un nombre de carpeta inválido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" no es un nombre de carpeta permitido'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" no está permitido en el nombre de una carpeta.'] }, "All files": { "msgid": "All files", "msgstr": ["Todos los archivos"] }, "Choose": { "msgid": "Choose", "msgstr": ["Elegir"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Elija {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Elija %n archivo", "Elija %n archivos", "Elija %n archivos"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar a {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["No se pudo crear la nueva carpeta"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["No se pudo cargar la configuración de archivos"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["No se pudieron cargar las vistas de los archivos"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear directorio"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de vista actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Los archivos y carpetas que marque como favoritos aparecerán aquí."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Los archivos y carpetas que modificó recientemente aparecerán aquí."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar lista de archivos"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["El nombre de la carpeta no puede estar vacío."] }, "Home": { "msgid": "Home", "msgstr": ["Inicio"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nombre"] }, "New": { "msgid": "New", "msgstr": ["Nuevo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nueva carpeta"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nombre de nueva carpeta"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No hay archivos aquí"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["No se encontraron archivos que coincidan con su filtro."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No hay archivos coincidentes"] }, "Recent": { "msgid": "Recent", "msgstr": ["Reciente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Seleccionar todas las entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleccionar entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleccione la fila para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamaño"] }, "Undo": { "msgid": "Undo", "msgstr": ["Deshacer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["¡Cargue algún contenido o sincronice con sus dispositivos!"] } } } } }, { "locale": "es_CL", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Chile) (https://app.transifex.com/nextcloud/teams/64236/es_CL/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_CL", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Chile) (https://app.transifex.com/nextcloud/teams/64236/es_CL/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_CL\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_CO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Colombia) (https://app.transifex.com/nextcloud/teams/64236/es_CO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_CO", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Colombia) (https://app.transifex.com/nextcloud/teams/64236/es_CO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_CO\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_CR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Costa Rica) (https://app.transifex.com/nextcloud/teams/64236/es_CR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_CR", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Costa Rica) (https://app.transifex.com/nextcloud/teams/64236/es_CR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_CR\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_DO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Dominican Republic) (https://app.transifex.com/nextcloud/teams/64236/es_DO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_DO", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Dominican Republic) (https://app.transifex.com/nextcloud/teams/64236/es_DO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_DO\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_EC", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Ecuador) (https://app.transifex.com/nextcloud/teams/64236/es_EC/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_EC", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Ecuador) (https://app.transifex.com/nextcloud/teams/64236/es_EC/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_EC\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_GT", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Guatemala) (https://app.transifex.com/nextcloud/teams/64236/es_GT/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_GT", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Guatemala) (https://app.transifex.com/nextcloud/teams/64236/es_GT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_GT\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_HN", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Honduras) (https://app.transifex.com/nextcloud/teams/64236/es_HN/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_HN", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Honduras) (https://app.transifex.com/nextcloud/teams/64236/es_HN/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_HN\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_MX", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Jehu Marcos Herrera Puentes, 2024", "Language-Team": "Spanish (Mexico) (https://app.transifex.com/nextcloud/teams/64236/es_MX/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_MX", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nJehu Marcos Herrera Puentes, 2024\n" }, "msgstr": ["Last-Translator: Jehu Marcos Herrera Puentes, 2024\nLanguage-Team: Spanish (Mexico) (https://app.transifex.com/nextcloud/teams/64236/es_MX/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_MX\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" es un nombre de carpeta inválido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" no es un nombre de carpeta permitido.'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" no está permitido en el nombre de la carpeta.'] }, "All files": { "msgid": "All files", "msgstr": ["Todos los archivos"] }, "Choose": { "msgid": "Choose", "msgstr": ["Seleccionar"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Seleccionar {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Seleccionar %n archivo", "Seleccionar %n archivos", "Seleccionar %n archivos"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar a {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["No se pudo crear la nueva carpeta"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["No se pudo cargar la configuración de archivos"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["No se pudieron cargar las vistas de los archivos"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear carpeta"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de vista actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Los archivos y carpetas que marque como favoritos aparecerán aquí."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Los archivos y carpetas que modificó recientemente aparecerán aquí."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar lista de archivos"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["El nombre de la carpeta no puede estar vacío."] }, "Home": { "msgid": "Home", "msgstr": ["Inicio"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nombre"] }, "New": { "msgid": "New", "msgstr": ["Nuevo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nueva carpeta"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nombre de nueva carpeta"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["No hay archivos aquí"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["No se encontraron archivos que coincidan con su filtro."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["No hay archivos coincidentes"] }, "Recent": { "msgid": "Recent", "msgstr": ["Reciente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Seleccionar todas las entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleccionar entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleccione la fila para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamaño"] }, "Undo": { "msgid": "Undo", "msgstr": ["Deshacer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["¡Suba algún contenido o sincronice con sus dispositivos!"] } } } } }, { "locale": "es_NI", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Nicaragua) (https://app.transifex.com/nextcloud/teams/64236/es_NI/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_NI", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Nicaragua) (https://app.transifex.com/nextcloud/teams/64236/es_NI/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_NI\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_PA", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Panama) (https://app.transifex.com/nextcloud/teams/64236/es_PA/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PA", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Panama) (https://app.transifex.com/nextcloud/teams/64236/es_PA/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PA\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_PE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Peru) (https://app.transifex.com/nextcloud/teams/64236/es_PE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PE", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Peru) (https://app.transifex.com/nextcloud/teams/64236/es_PE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PE\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_PR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Puerto Rico) (https://app.transifex.com/nextcloud/teams/64236/es_PR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PR", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Puerto Rico) (https://app.transifex.com/nextcloud/teams/64236/es_PR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PR\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_PY", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Paraguay) (https://app.transifex.com/nextcloud/teams/64236/es_PY/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PY", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Paraguay) (https://app.transifex.com/nextcloud/teams/64236/es_PY/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PY\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_SV", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (El Salvador) (https://app.transifex.com/nextcloud/teams/64236/es_SV/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_SV", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (El Salvador) (https://app.transifex.com/nextcloud/teams/64236/es_SV/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_SV\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "es_UY", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Spanish (Uruguay) (https://app.transifex.com/nextcloud/teams/64236/es_UY/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_UY", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Spanish (Uruguay) (https://app.transifex.com/nextcloud/teams/64236/es_UY/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_UY\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "et_EE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Estonian (Estonia) (https://app.transifex.com/nextcloud/teams/64236/et_EE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "et_EE", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Estonian (Estonia) (https://app.transifex.com/nextcloud/teams/64236/et_EE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: et_EE\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "eu", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Basque (https://app.transifex.com/nextcloud/teams/64236/eu/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "eu", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Basque (https://app.transifex.com/nextcloud/teams/64236/eu/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: eu\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Desegin"] } } } } }, { "locale": "fa", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Persian (https://app.transifex.com/nextcloud/teams/64236/fa/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fa", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Persian (https://app.transifex.com/nextcloud/teams/64236/fa/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fa\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["بازگردانی"] } } } } }, { "locale": "fi_FI", "json": { "charset": "utf-8", "headers": { "Last-Translator": "thingumy, 2024", "Language-Team": "Finnish (Finland) (https://app.transifex.com/nextcloud/teams/64236/fi_FI/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fi_FI", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nJiri Grönroos <jiri.gronroos@iki.fi>, 2024\nthingumy, 2024\n" }, "msgstr": ["Last-Translator: thingumy, 2024\nLanguage-Team: Finnish (Finland) (https://app.transifex.com/nextcloud/teams/64236/fi_FI/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fi_FI\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" on virheellinen kansion nimi.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" ei ole sallittu kansion nimi'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" ei ole sallittu kansion nimessä.'] }, "All files": { "msgid": "All files", "msgstr": ["Kaikki tiedostot"] }, "Choose": { "msgid": "Choose", "msgstr": ["Valitse"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Valitse {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Valitse %n tiedosto", "Valitse %n tiedostoa"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopioi"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopioi sijaintiin {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Uutta kansiota ei voitu luoda"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Tiedoston asetuksia ei saa ladattua"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Tiedoston näkymiä ei saa ladattua"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Luo kansio"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Nykyisen näkymän valinta"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Suosikit"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Tiedostot ja kansiot, jotka merkitset suosikkeihisi, näkyvät täällä."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Tiedostot ja kansiot, joita muokkasit äskettäin, näkyvät täällä."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Suodata tiedostolistaa"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Kansion nimi ei voi olla tyhjä."] }, "Home": { "msgid": "Home", "msgstr": ["Koti"] }, "Modified": { "msgid": "Modified", "msgstr": ["Muokattu"] }, "Move": { "msgid": "Move", "msgstr": ["Siirrä"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Siirrä sijaintiin {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nimi"] }, "New": { "msgid": "New", "msgstr": ["Uusi"] }, "New folder": { "msgid": "New folder", "msgstr": ["Uusi kansio"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Uuden kansion nimi"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Täällä ei ole tiedostoja"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Suodatinta vastaavia tiedostoja ei löytynyt."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Ei vastaavia tiedostoja"] }, "Recent": { "msgid": "Recent", "msgstr": ["Viimeisimmät"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Valitse kaikki tietueet"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Valitse tietue"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Valitse rivi {nodename}:lle"] }, "Size": { "msgid": "Size", "msgstr": ["Koko"] }, "Undo": { "msgid": "Undo", "msgstr": ["Kumoa"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Lähetä jotain sisältöä tai synkronoi laitteidesi kanssa!"] } } } } }, { "locale": "fo", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Faroese (https://app.transifex.com/nextcloud/teams/64236/fo/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fo", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Faroese (https://app.transifex.com/nextcloud/teams/64236/fo/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fo\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "fr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Benoit Pruneau, 2024", "Language-Team": "French (https://app.transifex.com/nextcloud/teams/64236/fr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fr", "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nRémi LEBLOND, 2023\nMordecai, 2023\nfleopaulD, 2023\nFrançois Ch., 2024\nJérôme HERBINET, 2024\nBenoit Pruneau, 2024\n" }, "msgstr": ["Last-Translator: Benoit Pruneau, 2024\nLanguage-Team: French (https://app.transifex.com/nextcloud/teams/64236/fr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fr\nPlural-Forms: nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["« {name} » n'est pas un nom de dossier valide."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["« {name} » n'est pas un nom de dossier autorisé."] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["Le caractère « / » n'est pas autorisé dans un nom de dossier."] }, "All files": { "msgid": "All files", "msgstr": ["Tous les fichiers"] }, "Choose": { "msgid": "Choose", "msgstr": ["Choisir"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Choisir {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Choisir %n fichier", "Choisir %n fichiers", "Choisir %n fichiers "] }, "Copy": { "msgid": "Copy", "msgstr": ["Copier"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copier vers {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Impossible de créer le nouveau dossier"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Les paramètres des fichiers n'ont pas pu être chargés"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Les aperçus des fichiers n'ont pas pu être chargés"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Créer un répertoire"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Sélecteur de vue courante"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoris"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Les fichiers et répertoires marqués en favoris apparaîtront ici."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Les fichiers et répertoires modifiés récemment apparaîtront ici."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrer la liste des fichiers"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Le nom du dossier ne peut pas être vide."] }, "Home": { "msgid": "Home", "msgstr": ["Accueil"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modifié"] }, "Move": { "msgid": "Move", "msgstr": ["Déplacer"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Déplacer vers {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nom"] }, "New": { "msgid": "New", "msgstr": ["Nouveau"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nouveau répertoire"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nom du nouveau répertoire"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Aucun fichier ici"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Aucun fichier trouvé correspondant à votre filtre."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Aucun fichier trouvé"] }, "Recent": { "msgid": "Recent", "msgstr": ["Récents"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Tous sélectionner"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Sélectionner une entrée"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Sélectionner l'enregistrement pour {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Taille"] }, "Undo": { "msgid": "Undo", "msgstr": ["Rétablir"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Charger du contenu ou synchroniser avec vos équipements !"] } } } } }, { "locale": "ga", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Aindriú Mac Giolla Eoin, 2024", "Language-Team": "Irish (https://app.transifex.com/nextcloud/teams/64236/ga/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ga", "Plural-Forms": "nplurals=5; plural=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nAindriú Mac Giolla Eoin, 2024\n" }, "msgstr": ["Last-Translator: Aindriú Mac Giolla Eoin, 2024\nLanguage-Team: Irish (https://app.transifex.com/nextcloud/teams/64236/ga/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ga\nPlural-Forms: nplurals=5; plural=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['Is ainm fillteáin neamhbhailí é "{name}".'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['Ní ainm fillteáin ceadaithe é "{name}".'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": [`Ní cheadaítear "/" taobh istigh d'ainm fillteáin.`] }, "All files": { "msgid": "All files", "msgstr": ["Gach comhad"] }, "Choose": { "msgid": "Choose", "msgstr": ["Roghnaigh"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Roghnaigh {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Roghnaigh %n comhad", "Roghnaigh %n comhaid", "Roghnaigh %n comhaid", "Roghnaigh %n comhaid", "Roghnaigh %n comhaid"] }, "Copy": { "msgid": "Copy", "msgstr": ["Cóip"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Cóipeáil chuig {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Níorbh fhéidir an fillteán nua a chruthú"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Níorbh fhéidir socruithe comhaid a lódáil"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Níorbh fhéidir radhairc comhad a lódáil"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Cruthaigh eolaire"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Roghnóir amhairc reatha"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Ceanáin"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Taispeánfar comhaid agus fillteáin a mharcálann tú mar is fearr leat anseo."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Taispeánfar comhaid agus fillteáin a d'athraigh tú le déanaí anseo."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Scag liosta comhad"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Ní féidir ainm fillteáin a bheith folamh."] }, "Home": { "msgid": "Home", "msgstr": ["Baile"] }, "Modified": { "msgid": "Modified", "msgstr": ["Athraithe"] }, "Move": { "msgid": "Move", "msgstr": ["Bog"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Bog go{target}"] }, "Name": { "msgid": "Name", "msgstr": ["Ainm"] }, "New": { "msgid": "New", "msgstr": ["Nua"] }, "New folder": { "msgid": "New folder", "msgstr": ["Fillteán nua"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Ainm fillteáin nua"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Níl aon chomhaid istigh anseo"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Níor aimsíodh aon chomhad a tháinig le do scagaire."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Gan comhaid meaitseála"] }, "Recent": { "msgid": "Recent", "msgstr": ["le déanaí"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Roghnaigh gach iontráil"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Roghnaigh iontráil"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Roghnaigh an ró do {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Méid"] }, "Undo": { "msgid": "Undo", "msgstr": ["Cealaigh"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Uaslódáil roinnt ábhair nó sioncronaigh le do ghléasanna!"] } } } } }, { "locale": "gd", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Gaelic, Scottish (https://app.transifex.com/nextcloud/teams/64236/gd/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "gd", "Plural-Forms": "nplurals=4; plural=(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Gaelic, Scottish (https://app.transifex.com/nextcloud/teams/64236/gd/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: gd\nPlural-Forms: nplurals=4; plural=(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "gl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Miguel Anxo Bouzada <mbouzada@gmail.com>, 2024", "Language-Team": "Galician (https://app.transifex.com/nextcloud/teams/64236/gl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "gl", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMiguel Anxo Bouzada <mbouzada@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Miguel Anxo Bouzada <mbouzada@gmail.com>, 2024\nLanguage-Team: Galician (https://app.transifex.com/nextcloud/teams/64236/gl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: gl\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["«{name}» non é un nome de cartafol válido."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["«{name}» non é un nome de cartafol permitido"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["A «/» non está permitida no nome dun cartafol."] }, "All files": { "msgid": "All files", "msgstr": ["Todos os ficheiros"] }, "Choose": { "msgid": "Choose", "msgstr": ["Escoller"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Escoller {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Escoller %n ficheiro", "Escoller %n ficheiros"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar en  {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Non foi posíbel crear o novo cartafol"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Non foi posíbel cargar os axustes dos ficheiros"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Non foi posíbel cargar as vistas dos ficheiros"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crear un directorio"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selector de vista actual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Os ficheiros e cartafoles que marque como favoritos aparecerán aquí."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Os ficheiros e cartafoles que modificou recentemente aparecerán aquí."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar a lista de ficheiros"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["O nome do cartafol non pode estar baleiro."] }, "Home": { "msgid": "Home", "msgstr": ["Inicio"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover cara a {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nome"] }, "New": { "msgid": "New", "msgstr": ["Novo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Novo cartafol"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Novo nome do cartafol"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Aquí non hai ficheiros"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Non se atopou ningún ficheiro que coincida co filtro."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Non hai ficheiros coincidentes"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Seleccionar todas as entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleccionar a entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleccionar a fila para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamaño"] }, "Undo": { "msgid": "Undo", "msgstr": ["Desfacer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Enviar algún contido ou sincronizalo cos seus dispositivos!"] } } } } }, { "locale": "he", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Hebrew (https://app.transifex.com/nextcloud/teams/64236/he/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "he", "Plural-Forms": "nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Hebrew (https://app.transifex.com/nextcloud/teams/64236/he/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: he\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["ביטול"] } } } } }, { "locale": "hi_IN", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Hindi (India) (https://app.transifex.com/nextcloud/teams/64236/hi_IN/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hi_IN", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Hindi (India) (https://app.transifex.com/nextcloud/teams/64236/hi_IN/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hi_IN\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "hr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Croatian (https://app.transifex.com/nextcloud/teams/64236/hr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hr", "Plural-Forms": "nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Croatian (https://app.transifex.com/nextcloud/teams/64236/hr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hr\nPlural-Forms: nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "hsb", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Upper Sorbian (https://app.transifex.com/nextcloud/teams/64236/hsb/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hsb", "Plural-Forms": "nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Upper Sorbian (https://app.transifex.com/nextcloud/teams/64236/hsb/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hsb\nPlural-Forms: nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "hu_HU", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Hungarian (Hungary) (https://app.transifex.com/nextcloud/teams/64236/hu_HU/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hu_HU", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Hungarian (Hungary) (https://app.transifex.com/nextcloud/teams/64236/hu_HU/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hu_HU\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Visszavonás"] } } } } }, { "locale": "hy", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Armenian (https://app.transifex.com/nextcloud/teams/64236/hy/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hy", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Armenian (https://app.transifex.com/nextcloud/teams/64236/hy/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hy\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ia", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Interlingua (https://app.transifex.com/nextcloud/teams/64236/ia/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ia", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Interlingua (https://app.transifex.com/nextcloud/teams/64236/ia/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ia\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "id", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Lun May, 2024", "Language-Team": "Indonesian (https://app.transifex.com/nextcloud/teams/64236/id/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "id", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nLinerly <linerly@proton.me>, 2023\nLun May, 2024\n" }, "msgstr": ["Last-Translator: Lun May, 2024\nLanguage-Team: Indonesian (https://app.transifex.com/nextcloud/teams/64236/id/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: id\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" bukan nama folder yang valid.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" merupakan nama folder yang tidak diperbolehkan'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" tidak diperbolehkan di dalam nama folder.'] }, "All files": { "msgid": "All files", "msgstr": ["Semua berkas"] }, "Choose": { "msgid": "Choose", "msgstr": ["Pilih"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Pilih {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Pilih %n file"] }, "Copy": { "msgid": "Copy", "msgstr": ["Salin"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Salin ke {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Tidak dapat membuat folder baru"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Tidak dapat memuat pengaturan file"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Tidak dapat memuat tampilan file"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Buat direktori"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Pemilih tampilan saat ini"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favorit"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Berkas dan folder yang Anda tandai sebagai favorit akan muncul di sini."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Berkas dan folder yang Anda ubah baru-baru ini akan muncul di sini."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Saring daftar berkas"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Name berkas tidak boleh kosong."] }, "Home": { "msgid": "Home", "msgstr": ["Beranda"] }, "Modified": { "msgid": "Modified", "msgstr": ["Diubah"] }, "Move": { "msgid": "Move", "msgstr": ["Pindahkan"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Pindahkan ke {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nama"] }, "New": { "msgid": "New", "msgstr": ["Baru"] }, "New folder": { "msgid": "New folder", "msgstr": ["Folder baru"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nama folder baru"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Tidak ada berkas di sini"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Tidak ada berkas yang cocok dengan penyaringan Anda."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Tidak ada berkas yang cocok"] }, "Recent": { "msgid": "Recent", "msgstr": ["Terkini"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Pilih semua entri"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Pilih entri"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Pilih baris untuk {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Ukuran"] }, "Undo": { "msgid": "Undo", "msgstr": ["Tidak jadi"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Unggah beberapa konten atau sinkronkan dengan perangkat Anda!"] } } } } }, { "locale": "ig", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Igbo (https://app.transifex.com/nextcloud/teams/64236/ig/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ig", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Igbo (https://app.transifex.com/nextcloud/teams/64236/ig/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ig\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "is", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Sveinn í Felli <sv1@fellsnet.is>, 2023", "Language-Team": "Icelandic (https://app.transifex.com/nextcloud/teams/64236/is/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "is", "Plural-Forms": "nplurals=2; plural=(n % 10 != 1 || n % 100 == 11);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nSveinn í Felli <sv1@fellsnet.is>, 2023\n" }, "msgstr": ["Last-Translator: Sveinn í Felli <sv1@fellsnet.is>, 2023\nLanguage-Team: Icelandic (https://app.transifex.com/nextcloud/teams/64236/is/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: is\nPlural-Forms: nplurals=2; plural=(n % 10 != 1 || n % 100 == 11);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" er ógilt möppuheiti.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" er ekki leyfilegt möppuheiti'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" er er ekki leyfilegt innan í skráarheiti.'] }, "All files": { "msgid": "All files", "msgstr": ["Allar skrár"] }, "Choose": { "msgid": "Choose", "msgstr": ["Veldu"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Veldu {file}"] }, "Copy": { "msgid": "Copy", "msgstr": ["Afrita"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Afrita í {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Get ekki búið til nýju möppuna"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Búa til möppu"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Núverandi val sýnar"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Eftirlæti"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Skrár og möppur sem þú merkir sem eftirlæti birtast hér."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Skrár og möppur sem þú breyttir nýlega birtast hér."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Sía skráalista"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Möppuheiti má ekki vera tómt."] }, "Home": { "msgid": "Home", "msgstr": ["Heim"] }, "Modified": { "msgid": "Modified", "msgstr": ["Breytt"] }, "Move": { "msgid": "Move", "msgstr": ["Færa"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Færa í {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Heiti"] }, "New": { "msgid": "New", "msgstr": ["Nýtt"] }, "New folder": { "msgid": "New folder", "msgstr": ["Ný mappa"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Heiti nýrrar möppu"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Engar skrár hér"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Engar skrár fundust sem passa við síuna."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Engar samsvarandi skrár"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nýlegt"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Velja allar færslur"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Velja færslu"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Veldu röðina fyrir {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Stærð"] }, "Undo": { "msgid": "Undo", "msgstr": ["Afturkalla"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Sendu inn eitthvað efni eða samstilltu við tækin þín!"] } } } } }, { "locale": "it", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Sebastiano Furlan, 2024", "Language-Team": "Italian (https://app.transifex.com/nextcloud/teams/64236/it/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "it", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nClaudio Scandella, 2023\nRaffaele Silano <raffaelone@gmail.com>, 2024\nSebastiano Furlan, 2024\n" }, "msgstr": ["Last-Translator: Sebastiano Furlan, 2024\nLanguage-Team: Italian (https://app.transifex.com/nextcloud/teams/64236/it/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: it\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" non è un nome di cartella valido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}"  non è un nome di cartella ammesso'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": [`"/" non è ammesso all'interno del nome di una cartella.`] }, "All files": { "msgid": "All files", "msgstr": ["Tutti i file"] }, "Choose": { "msgid": "Choose", "msgstr": ["Scegli"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Scegli {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Seleziona %n file", "Seleziona %n file", "Seleziona %n file"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copia"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copia in {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Impossibile creare la nuova cartella"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Impossibile caricare le impostazioni dei file"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Impossibile caricare le visualizzazioni dei file"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Crea directory"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selettore della vista corrente"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Preferiti"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["I file e le cartelle contrassegnate come preferite saranno mostrate qui."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["I file e le cartelle che hai modificato di recente saranno mostrate qui."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtra elenco file"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Il nome della cartella non può essere vuoto."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificato"] }, "Move": { "msgid": "Move", "msgstr": ["Sposta"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Sposta in {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nome"] }, "New": { "msgid": "New", "msgstr": ["Nuovo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nuova cartella"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nuovo nome cartella"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Nessun file qui"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nessun file che corrisponde al tuo filtro è stato trovato."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nessun file corrispondente"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Scegli tutte le voci"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Seleziona la voce"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Seleziona la riga per {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Taglia/dimensioni"] }, "Undo": { "msgid": "Undo", "msgstr": ["Annulla"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Carica qualche contenuto o sincronizza con i tuoi dispositivi!"] } } } } }, { "locale": "ja_JP", "json": { "charset": "utf-8", "headers": { "Last-Translator": "devi, 2024", "Language-Team": "Japanese (Japan) (https://app.transifex.com/nextcloud/teams/64236/ja_JP/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ja_JP", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nUchiyama Takuya <uchiyama@j-wmc.com>, 2023\ntakehito kondo, 2023\nkojima.imamura, 2024\nTakafumi AKAMATSU, 2024\ndevi, 2024\n" }, "msgstr": ["Last-Translator: devi, 2024\nLanguage-Team: Japanese (Japan) (https://app.transifex.com/nextcloud/teams/64236/ja_JP/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ja_JP\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" はフォルダー名に使用できません。'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}"は許可されたフォルダー名ではありません'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["フォルダー名に「/（スラッシュ）」は使用できません。"] }, "All files": { "msgid": "All files", "msgstr": ["すべてのファイル"] }, "Choose": { "msgid": "Choose", "msgstr": ["選択"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["{file} を選択"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["%n 個のファイルを選択"] }, "Copy": { "msgid": "Copy", "msgstr": ["コピー"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["{target} にコピー"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["新しいフォルダーを作成できませんでした"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["ファイル設定を読み込めませんでした"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["ファイルビューを読み込めませんでした"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["ディレクトリを作成"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["現在のビューセレクタ"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["お気に入り"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["お気に入りとしてマークしたファイルとフォルダがここに表示されます。"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["最近変更したファイルとフォルダがここに表示されます。"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["ファイルリストをフィルタ"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["フォルダ名は空にできません。"] }, "Home": { "msgid": "Home", "msgstr": ["ホーム"] }, "Modified": { "msgid": "Modified", "msgstr": ["変更済み"] }, "Move": { "msgid": "Move", "msgstr": ["移動"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["{target} に移動"] }, "Name": { "msgid": "Name", "msgstr": ["名前"] }, "New": { "msgid": "New", "msgstr": ["新規作成"] }, "New folder": { "msgid": "New folder", "msgstr": ["新しいフォルダー"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["新しいフォルダーの名前"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["ファイルがありません"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["フィルタに一致するファイルは見つかりませんでした。"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["一致するファイルはありません"] }, "Recent": { "msgid": "Recent", "msgstr": ["最近"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["すべてのエントリを選択"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["エントリを選択"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["{nodename} の行を選択"] }, "Size": { "msgid": "Size", "msgstr": ["サイズ"] }, "Undo": { "msgid": "Undo", "msgstr": ["元に戻す"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["コンテンツをアップロードするか、デバイスと同期してください！"] } } } } }, { "locale": "ka", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Georgian (https://app.transifex.com/nextcloud/teams/64236/ka/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ka", "Plural-Forms": "nplurals=2; plural=(n!=1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Georgian (https://app.transifex.com/nextcloud/teams/64236/ka/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ka\nPlural-Forms: nplurals=2; plural=(n!=1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ka_GE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Georgian (Georgia) (https://app.transifex.com/nextcloud/teams/64236/ka_GE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ka_GE", "Plural-Forms": "nplurals=2; plural=(n!=1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Georgian (Georgia) (https://app.transifex.com/nextcloud/teams/64236/ka_GE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ka_GE\nPlural-Forms: nplurals=2; plural=(n!=1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "kab", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Kabyle (https://app.transifex.com/nextcloud/teams/64236/kab/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "kab", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Kabyle (https://app.transifex.com/nextcloud/teams/64236/kab/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: kab\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Sefsex"] } } } } }, { "locale": "kk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Kazakh (https://app.transifex.com/nextcloud/teams/64236/kk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "kk", "Plural-Forms": "nplurals=2; plural=(n!=1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Kazakh (https://app.transifex.com/nextcloud/teams/64236/kk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: kk\nPlural-Forms: nplurals=2; plural=(n!=1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "km", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Khmer (https://app.transifex.com/nextcloud/teams/64236/km/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "km", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Khmer (https://app.transifex.com/nextcloud/teams/64236/km/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: km\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "kn", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Kannada (https://app.transifex.com/nextcloud/teams/64236/kn/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "kn", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Kannada (https://app.transifex.com/nextcloud/teams/64236/kn/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: kn\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ko", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Korean (https://app.transifex.com/nextcloud/teams/64236/ko/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ko", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Korean (https://app.transifex.com/nextcloud/teams/64236/ko/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ko\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["되돌리기"] } } } } }, { "locale": "la", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Latin (https://app.transifex.com/nextcloud/teams/64236/la/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "la", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Latin (https://app.transifex.com/nextcloud/teams/64236/la/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: la\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "lb", "json": { "charset": "utf-8", "headers": { "Last-Translator": "VoXaN24ch, 2024", "Language-Team": "Luxembourgish (https://app.transifex.com/nextcloud/teams/64236/lb/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lb", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nVoXaN24ch, 2024\n" }, "msgstr": ["Last-Translator: VoXaN24ch, 2024\nLanguage-Team: Luxembourgish (https://app.transifex.com/nextcloud/teams/64236/lb/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lb\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["{name} ass en ongëlteg Dossier"] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["{name} ass net en erlaabten Dossiernumm"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" ass net an engem Dossier Numm erlaabt'] }, "All files": { "msgid": "All files", "msgstr": ["All Dateien"] }, "Choose": { "msgid": "Choose", "msgstr": ["Wielt"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Wielt {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Wielt %n Fichieren", "Wielt %n Fichier"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopie"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopie op {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Konnt den neien Dossier net erstellen"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Konnt d'Dateienastellungen net lueden"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Konnt d'Dateien net lueden"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Erstellt Verzeechnes"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Aktuell Vue selector"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritten"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Dateien an Ordner, déi Dir als Favorit markéiert, ginn hei gewisen"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Dateien an Ordner déi Dir viru kuerzem geännert hutt ginn hei op"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filter Datei Lëscht"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Dossier Numm kann net eidel sinn"] }, "Home": { "msgid": "Home", "msgstr": ["Wëllkomm"] }, "Modified": { "msgid": "Modified", "msgstr": ["Geännert"] }, "Move": { "msgid": "Move", "msgstr": ["Plënne"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Plënneren {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Numm"] }, "New": { "msgid": "New", "msgstr": ["Nei"] }, "New folder": { "msgid": "New folder", "msgstr": ["Neien dossier"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Neien dossier numm"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Kee fichier hei"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Kee fichier deen äre filter passt gouf fonnt"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Keng passende dateien"] }, "Recent": { "msgid": "Recent", "msgstr": ["Rezent"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Wielt all entréen"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Wielt entrée"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Wielt d'zeil fir {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Gréisst"] }, "Undo": { "msgid": "Undo", "msgstr": ["Undoen"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Luet en inhalt erop oder synchroniséiert mat ären apparater"] } } } } }, { "locale": "lo", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Lao (https://app.transifex.com/nextcloud/teams/64236/lo/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lo", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Lao (https://app.transifex.com/nextcloud/teams/64236/lo/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lo\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "lt_LT", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Lithuanian (Lithuania) (https://app.transifex.com/nextcloud/teams/64236/lt_LT/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lt_LT", "Plural-Forms": "nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Lithuanian (Lithuania) (https://app.transifex.com/nextcloud/teams/64236/lt_LT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lt_LT\nPlural-Forms: nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Atšaukti"] } } } } }, { "locale": "lv", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Latvian (https://app.transifex.com/nextcloud/teams/64236/lv/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lv", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Latvian (https://app.transifex.com/nextcloud/teams/64236/lv/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lv\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "mk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Macedonian (https://app.transifex.com/nextcloud/teams/64236/mk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "mk", "Plural-Forms": "nplurals=2; plural=(n % 10 == 1 && n % 100 != 11) ? 0 : 1;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Macedonian (https://app.transifex.com/nextcloud/teams/64236/mk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mk\nPlural-Forms: nplurals=2; plural=(n % 10 == 1 && n % 100 != 11) ? 0 : 1;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Врати"] } } } } }, { "locale": "mn", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Mongolian (https://app.transifex.com/nextcloud/teams/64236/mn/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "mn", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Mongolian (https://app.transifex.com/nextcloud/teams/64236/mn/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mn\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Буцаах"] } } } } }, { "locale": "mr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Marathi (https://app.transifex.com/nextcloud/teams/64236/mr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "mr", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Marathi (https://app.transifex.com/nextcloud/teams/64236/mr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mr\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["पूर्ववत करा"] } } } } }, { "locale": "ms_MY", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Malay (Malaysia) (https://app.transifex.com/nextcloud/teams/64236/ms_MY/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ms_MY", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Malay (Malaysia) (https://app.transifex.com/nextcloud/teams/64236/ms_MY/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ms_MY\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "my", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Burmese (https://app.transifex.com/nextcloud/teams/64236/my/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "my", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Burmese (https://app.transifex.com/nextcloud/teams/64236/my/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: my\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["နဂိုအတိုင်းပြန်ထားရန်"] } } } } }, { "locale": "nb_NO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "armandg <geirawsm@pm.me>, 2024", "Language-Team": "Norwegian Bokmål (Norway) (https://app.transifex.com/nextcloud/teams/64236/nb_NO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "nb_NO", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nD PE, 2023\nSyvert Fossdal, 2024\narmandg <geirawsm@pm.me>, 2024\n" }, "msgstr": ["Last-Translator: armandg <geirawsm@pm.me>, 2024\nLanguage-Team: Norwegian Bokmål (Norway) (https://app.transifex.com/nextcloud/teams/64236/nb_NO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nb_NO\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" er et ugyldig mappenavn.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" er ikke et tillatt mappenavn.'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" er ikke tillatt inne i et mappenavn.'] }, "All files": { "msgid": "All files", "msgstr": ["Alle filer"] }, "Choose": { "msgid": "Choose", "msgstr": ["Velg"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Velg {fil}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Velg %n fil", "Velg %n filer"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopier"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopier til {destinasjon}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Kunne ikke opprette den nye mappen"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Kunne ikke laste filinnstillinger"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Kunne ikke laste filvisninger"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Opprett mappe"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Nåværende visningsvelger"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritter"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Filer og mapper du markerer som favoritter vil vises her."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Filer og mapper du nylig har endret, vil vises her."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrer filliste"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Mappenavn kan ikke være tomt."] }, "Home": { "msgid": "Home", "msgstr": ["Hjem"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modifisert"] }, "Move": { "msgid": "Move", "msgstr": ["Flytt"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Flytt til {destinasjon}"] }, "Name": { "msgid": "Name", "msgstr": ["Navn"] }, "New": { "msgid": "New", "msgstr": ["Ny"] }, "New folder": { "msgid": "New folder", "msgstr": ["Ny mappe"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nytt mappenavn"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Ingen filer her"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Ingen filer funnet med ditt filter."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Ingen treffende filer"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nylig"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Velg alle oppføringer"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Velg oppføring"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Velg raden for {nodenavn}"] }, "Size": { "msgid": "Size", "msgstr": ["Størrelse"] }, "Undo": { "msgid": "Undo", "msgstr": ["Angre"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Last opp innhold eller synkroniser med enhetene dine!"] } } } } }, { "locale": "ne", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Nepali (https://app.transifex.com/nextcloud/teams/64236/ne/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ne", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Nepali (https://app.transifex.com/nextcloud/teams/64236/ne/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ne\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "nl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Casper <casper@vrije-mens.org>, 2024", "Language-Team": "Dutch (https://app.transifex.com/nextcloud/teams/64236/nl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "nl", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nJoost <joho500@hotmail.com>, 2023\nJeroen Gui, 2023\nCasper <casper@vrije-mens.org>, 2024\n" }, "msgstr": ["Last-Translator: Casper <casper@vrije-mens.org>, 2024\nLanguage-Team: Dutch (https://app.transifex.com/nextcloud/teams/64236/nl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nl\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" is een ongeldige mapnaam.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" is geen toegestane mapnaam'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" is niet toegestaan binnen een bestandsnaam'] }, "All files": { "msgid": "All files", "msgstr": ["Alle bestanden"] }, "Choose": { "msgid": "Choose", "msgstr": ["Kies"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Kies {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Kies %n bestand", "Kies %n bestanden"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopieer"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopieer naar {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Kon de nieuwe map niet maken"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Kon de bestandsinstellingen niet laden"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Kon de bestandsweergaves niet laden"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Maak map"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Huidige weergave keuze"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favorieten"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Bestanden en mappen die je favoriet maakt, worden hier getoond."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Bestanden en mappen die je recent hebt gewijzigd, worden hier getoond."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filter bestandslijst"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Mapnaam mag niet leeg zijn."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Gewijzigd"] }, "Move": { "msgid": "Move", "msgstr": ["Verplaatsen"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Verplaats naar {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Naam"] }, "New": { "msgid": "New", "msgstr": ["Nieuw"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nieuwe map"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nieuwe mapnaam"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Geen bestanden hier"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Geen bestanden gevonden die voldoen aan je filter."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Geen gevonden bestanden"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recent"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Selecteer alle invoer"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Selecteer invoer"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Selecteer de rij voor {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Grootte"] }, "Undo": { "msgid": "Undo", "msgstr": ["Ongedaan maken"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Upload inhoud of synchroniseer met je apparaten!"] } } } } }, { "locale": "nn_NO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Norwegian Nynorsk (Norway) (https://app.transifex.com/nextcloud/teams/64236/nn_NO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "nn_NO", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Norwegian Nynorsk (Norway) (https://app.transifex.com/nextcloud/teams/64236/nn_NO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nn_NO\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "oc", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Occitan (post 1500) (https://app.transifex.com/nextcloud/teams/64236/oc/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "oc", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Occitan (post 1500) (https://app.transifex.com/nextcloud/teams/64236/oc/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: oc\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Anullar"] } } } } }, { "locale": "pl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Valdnet, 2024", "Language-Team": "Polish (https://app.transifex.com/nextcloud/teams/64236/pl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "pl", "Plural-Forms": "nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nJUJER wtf, 2023\nM H <haincu@o2.pl>, 2023\nValdnet, 2024\n" }, "msgstr": ["Last-Translator: Valdnet, 2024\nLanguage-Team: Polish (https://app.transifex.com/nextcloud/teams/64236/pl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pl\nPlural-Forms: nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" jest nieprawidłową nazwą folderu'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" nie jest dozwoloną nazwą folderu'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['Znak "/" nie jest dozwolony w nazwie folderu'] }, "All files": { "msgid": "All files", "msgstr": ["Wszystkie pliki"] }, "Choose": { "msgid": "Choose", "msgstr": ["Wybierz"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Wybierz {file}"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopiuj"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Skopiuj do {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nie można utworzyć nowego folderu"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Utwórz katalog"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Bieżący selektor widoku"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Ulubione"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Pliki i foldery które oznaczysz jako ulubione będą wyświetlały się tutaj"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Pliki i foldery które ostatnio modyfikowałeś będą wyświetlały się tutaj"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtruj listę plików"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Nazwa folderu nie może być pusta"] }, "Home": { "msgid": "Home", "msgstr": ["Strona główna"] }, "Modified": { "msgid": "Modified", "msgstr": ["Zmodyfikowano"] }, "Move": { "msgid": "Move", "msgstr": ["Przenieś"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Przejdź do {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nazwa"] }, "New": { "msgid": "New", "msgstr": ["Nowy"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nowy folder"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nowa nazwa folderu"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Brak plików"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nie znaleziono plików spełniających warunki filtru"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Brak pasujących plików"] }, "Recent": { "msgid": "Recent", "msgstr": ["Ostatni"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Wybierz wszystkie wpisy"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Wybierz wpis"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Wybierz wiersz dla {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Rozmiar"] }, "Undo": { "msgid": "Undo", "msgstr": ["Cofnij"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Wyślij zawartość lub zsynchronizuj ze swoimi urządzeniami!"] } } } } }, { "locale": "ps", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Pashto (https://app.transifex.com/nextcloud/teams/64236/ps/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ps", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Pashto (https://app.transifex.com/nextcloud/teams/64236/ps/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ps\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "pt_BR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Cauan Henrique Zorzenon <cauanzorzenon@gmail.com>, 2024", "Language-Team": "Portuguese (Brazil) (https://app.transifex.com/nextcloud/teams/64236/pt_BR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "pt_BR", "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nFlávio Veras <flaviove@gmail.com>, 2023\nCauan Henrique Zorzenon <cauanzorzenon@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Cauan Henrique Zorzenon <cauanzorzenon@gmail.com>, 2024\nLanguage-Team: Portuguese (Brazil) (https://app.transifex.com/nextcloud/teams/64236/pt_BR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pt_BR\nPlural-Forms: nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" é um nome de pasta inválido.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" não é um nome de pasta permitido'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" não é permitido dentro de um nome de pasta.'] }, "All files": { "msgid": "All files", "msgstr": ["Todos os arquivos"] }, "Choose": { "msgid": "Choose", "msgstr": ["Escolher"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Escolher arquivo}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Escolher %n arquivo", "Escolher %n arquivos", "Escolher %n arquivos"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiar"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiar para {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Não foi possível criar a nova pasta"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Não foi possível carregar configurações de arquivos"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Não foi possível carregar exibições de arquivos"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Criar diretório"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Seletor de visualização atual"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoritos"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Os arquivos e pastas marcados como favoritos aparecerão aqui."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Arquivos e pastas que você modificou recentemente aparecerão aqui."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrar lista de arquivos"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["O nome da pasta não pode ficar vazio."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificado"] }, "Move": { "msgid": "Move", "msgstr": ["Mover"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mover para {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nome"] }, "New": { "msgid": "New", "msgstr": ["Novo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Nova pasta"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Novo nome de pasta"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Nenhum arquivo aqui"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nenhum arquivo correspondente ao seu filtro foi encontrado."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nenhum arquivo correspondente"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Selecione todas as entradas"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Selecione a entrada"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Selecione a linha para {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Tamanho"] }, "Undo": { "msgid": "Undo", "msgstr": ["Desfazer"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Carregue algum conteúdo ou sincronize com seus dispositivos!"] } } } } }, { "locale": "pt_PT", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Portuguese (Portugal) (https://app.transifex.com/nextcloud/teams/64236/pt_PT/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "pt_PT", "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Portuguese (Portugal) (https://app.transifex.com/nextcloud/teams/64236/pt_PT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pt_PT\nPlural-Forms: nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Anular"] } } } } }, { "locale": "ro", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Daniel MD <dmihaidumitru@gmail.com>, 2023", "Language-Team": "Romanian (https://app.transifex.com/nextcloud/teams/64236/ro/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ro", "Plural-Forms": "nplurals=3; plural=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nDaniel MD <dmihaidumitru@gmail.com>, 2023\n" }, "msgstr": ["Last-Translator: Daniel MD <dmihaidumitru@gmail.com>, 2023\nLanguage-Team: Romanian (https://app.transifex.com/nextcloud/teams/64236/ro/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ro\nPlural-Forms: nplurals=3; plural=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" este un nume de director invalid.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" nu este un nume de director permis'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" nu este permis în numele unui director.'] }, "All files": { "msgid": "All files", "msgstr": ["Toate fișierele"] }, "Choose": { "msgid": "Choose", "msgstr": ["Alege"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Alege {file}"] }, "Copy": { "msgid": "Copy", "msgstr": ["Copiază"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Copiază în {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nu s-a putut crea noul director"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Creează director"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Selectorul curent al vizualizării"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favorite"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Fișiere și directoare pe care le marcați ca favorite vor apărea aici."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Fișiere și directoare pe care le-ați modificat recent vor apărea aici."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrează lista de fișiere"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Numele de director nu poate fi necompletat."] }, "Home": { "msgid": "Home", "msgstr": ["Acasă"] }, "Modified": { "msgid": "Modified", "msgstr": ["Modificat"] }, "Move": { "msgid": "Move", "msgstr": ["Mută"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Mută către {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Nume"] }, "New": { "msgid": "New", "msgstr": ["Nou"] }, "New folder": { "msgid": "New folder", "msgstr": ["Director nou"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Numele noului director"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Nu există fișiere"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nu există fișiere potrivite pentru filtrul selectat"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nu există fișiere potrivite"] }, "Recent": { "msgid": "Recent", "msgstr": ["Recente"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Selectează toate înregistrările"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Selectează înregistrarea"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Selectează rândul pentru {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Mărime"] }, "Undo": { "msgid": "Undo", "msgstr": ["Anulează"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Încărcați conținut sau sincronizați cu dispozitivele dumneavoastră!"] } } } } }, { "locale": "ru", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Влад, 2024", "Language-Team": "Russian (https://app.transifex.com/nextcloud/teams/64236/ru/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ru", "Plural-Forms": "nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMax Smith <sevinfolds@gmail.com>, 2023\nashed <craysy@gmail.com>, 2023\nAlex <kekcuha@gmail.com>, 2024\nR4SAS, 2024\nВлад, 2024\n" }, "msgstr": ["Last-Translator: Влад, 2024\nLanguage-Team: Russian (https://app.transifex.com/nextcloud/teams/64236/ru/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ru\nPlural-Forms: nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["«{name}» — недопустимое имя папки."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["«{name}» не является разрешенным именем папки"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["Символ «/» не допускается внутри имени папки."] }, "All files": { "msgid": "All files", "msgstr": ["Все файлы"] }, "Choose": { "msgid": "Choose", "msgstr": ["Выбрать"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Выбрать {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Выбрать %n файл", "Выбрать %n файла", "Выбрать %n файлов", "Выбрать %n файлов"] }, "Copy": { "msgid": "Copy", "msgstr": ["Копировать"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Копировать в «{target}»"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Не удалось создать новую папку"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Не удалось загрузить настройки файлов"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Не удалось загрузить файлы просмотров"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Создать папку"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Переключатель текущего вида"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Избранное"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Здесь появятся файлы и папки, которые вы пометили как избранные."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Здесь будут отображаться файлы и папки, которые вы недавно изменили."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Фильтровать список файлов"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Имя папки не может быть пустым."] }, "Home": { "msgid": "Home", "msgstr": ["Home"] }, "Modified": { "msgid": "Modified", "msgstr": ["Модифицированный"] }, "Move": { "msgid": "Move", "msgstr": ["Переместить"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Перейти к {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Имя"] }, "New": { "msgid": "New", "msgstr": ["Новый"] }, "New folder": { "msgid": "New folder", "msgstr": ["Новая папка"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Новое имя папки"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Здесь нет файлов"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Файлы, соответствующие вашему фильтру, не найдены."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Нет подходящих файлов"] }, "Recent": { "msgid": "Recent", "msgstr": ["Недавний"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Выбрать все записи"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Выберите запись"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Выберите строку для {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Размер"] }, "Undo": { "msgid": "Undo", "msgstr": ["Отменить"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Загрузите контент или синхронизируйте его со своими устройствами!"] } } } } }, { "locale": "sc", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Sardinian (https://app.transifex.com/nextcloud/teams/64236/sc/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sc", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Sardinian (https://app.transifex.com/nextcloud/teams/64236/sc/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sc\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "si", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Sinhala (https://app.transifex.com/nextcloud/teams/64236/si/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "si", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Sinhala (https://app.transifex.com/nextcloud/teams/64236/si/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: si\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["පෙරසේ"] } } } } }, { "locale": "sk_SK", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Tomas Rusnak <linkermail@gmail.com>, 2024", "Language-Team": "Slovak (Slovakia) (https://app.transifex.com/nextcloud/teams/64236/sk_SK/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sk_SK", "Plural-Forms": "nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nStanislav Prekop <prekop3@gmail.com>, 2024\nTomas Rusnak <linkermail@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Tomas Rusnak <linkermail@gmail.com>, 2024\nLanguage-Team: Slovak (Slovakia) (https://app.transifex.com/nextcloud/teams/64236/sk_SK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sk_SK\nPlural-Forms: nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" je neplatný názov pričinka.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" nie je povolený názov priečinka.'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" nie je povolené v názve priečinka.'] }, "All files": { "msgid": "All files", "msgstr": ["Všetky súbory"] }, "Choose": { "msgid": "Choose", "msgstr": ["Vybrať"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Vybrať {súbor}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Vybraný %n súbor", "Vybrané %n súbory", "Vybraných %n súborov", "Vybraných %n súborov"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopírovať"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopírovať do {umiestnenia}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Nepodarilo sa vytvoriť nový priečinok"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Nepodarilo sa načítať nastavenia súborov"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Nepodarilo sa načítať pohľady súborov"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Vytvoriť adresár"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Výber aktuálneho zobrazenia"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Obľúbené"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Tu sa zobrazia súbory a priečinky, ktoré označíte ako obľúbené."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Tu sa zobrazia súbory a priečinky, ktoré ste nedávno upravili."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrovať zoznam súborov"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Názov priečinka nemôže byť prázdny."] }, "Home": { "msgid": "Home", "msgstr": ["Domov"] }, "Modified": { "msgid": "Modified", "msgstr": ["Upravené"] }, "Move": { "msgid": "Move", "msgstr": ["Prejsť"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Prejsť na {umiestnenie}"] }, "Name": { "msgid": "Name", "msgstr": ["Názov"] }, "New": { "msgid": "New", "msgstr": ["Pridať"] }, "New folder": { "msgid": "New folder", "msgstr": ["Pridať priečinok"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Pridať názov priečinka"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Nie sú tu žiadne súbory"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nenašli sa žiadne súbory zodpovedajúce vášmu filtru."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Žiadne zodpovedajúce súbory"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nedávne"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Vybrať všetky položky"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Vybrať položku"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Vyberte riadok pre {názov uzla}"] }, "Size": { "msgid": "Size", "msgstr": ["Veľkosť"] }, "Undo": { "msgid": "Undo", "msgstr": ["Späť"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Nahrajte nejaký obsah alebo synchronizujte so svojimi zariadeniami!"] } } } } }, { "locale": "sl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Slovenian (https://app.transifex.com/nextcloud/teams/64236/sl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sl", "Plural-Forms": "nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Slovenian (https://app.transifex.com/nextcloud/teams/64236/sl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sl\nPlural-Forms: nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Razveljavi"] } } } } }, { "locale": "sq", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Albanian (https://app.transifex.com/nextcloud/teams/64236/sq/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sq", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Albanian (https://app.transifex.com/nextcloud/teams/64236/sq/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sq\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "sr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Иван Пешић, 2024", "Language-Team": "Serbian (https://app.transifex.com/nextcloud/teams/64236/sr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sr", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nИван Пешић, 2024\n" }, "msgstr": ["Last-Translator: Иван Пешић, 2024\nLanguage-Team: Serbian (https://app.transifex.com/nextcloud/teams/64236/sr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sr\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["„{name}” није исправно име фолдера."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["„{name}” није дозвољено име за фолдер."] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["„/” није дозвољено унутар имена фолдера."] }, "All files": { "msgid": "All files", "msgstr": ["Сви фајлови"] }, "Choose": { "msgid": "Choose", "msgstr": ["Изаберите"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Изаберите {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Изаберите %n фајл", "Изаберите %n фајла", "Изаберите %n фајлова"] }, "Copy": { "msgid": "Copy", "msgstr": ["Копирај"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Копирај у {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Није могао да се креира нови фолдер"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Не могу да се учитају подешавања фајлова"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Не могу да се учитају прикази фајлова"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Креирај директоријум"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Бирач тренутног приказа"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Омиљено"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Овде ће се појавити фајлови и фолдери које сте означили као омиљене."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Овде ће се појавити фајлови и фолдери који се се недавно изменили."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Фитрирање листе фајлова"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Име фолдера не може бити празно."] }, "Home": { "msgid": "Home", "msgstr": ["Почетак"] }, "Modified": { "msgid": "Modified", "msgstr": ["Измењено"] }, "Move": { "msgid": "Move", "msgstr": ["Премести"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Премести у {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Име"] }, "New": { "msgid": "New", "msgstr": ["Ново"] }, "New folder": { "msgid": "New folder", "msgstr": ["Нови фолдер"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Име новог фолдера"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Овде нема фајлова"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Није пронађен ниједан фајл који задовољава ваш филтер."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Нема таквих фајлова"] }, "Recent": { "msgid": "Recent", "msgstr": ["Скорашње"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Изаберите све ставке"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Изаберите ставку"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Изаберите ред за {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Величина"] }, "Undo": { "msgid": "Undo", "msgstr": ["Поништи"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Отпремите нешто или синхронизујте са својим уређајима!"] } } } } }, { "locale": "sr@latin", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Bogdan Vuković, 2024", "Language-Team": "Serbian (Latin) (https://app.transifex.com/nextcloud/teams/64236/sr@latin/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sr@latin", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nBogdan Vuković, 2024\n" }, "msgstr": ["Last-Translator: Bogdan Vuković, 2024\nLanguage-Team: Serbian (Latin) (https://app.transifex.com/nextcloud/teams/64236/sr@latin/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sr@latin\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["„{name}” je neispravan naziv foldera."] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["„{name}” je nedozvoljen naziv foldera."] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["„/” se ne može koristiti unutar naziva foldera."] }, "All files": { "msgid": "All files", "msgstr": ["Svi fajlovi"] }, "Choose": { "msgid": "Choose", "msgstr": ["Izaberite"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Izaberite {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Izaberite %n fajl", "Izaberite %n fajla", "Izaberite %n fajlova"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopiraj"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopiraj u {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Neuspešno kreiranje novog foldera"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Neuspešno učitavanje podešavanja fajlova"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Neuspešno učitavanje prikaza fajlova"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Kreiraj direktorijum"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Birač trenutnog prikaza"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Omiljeno"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Lista omiljenih fajlova i foldera."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Lista fajlova i foldera sa skorašnjim izmenama."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Fitriranje liste fajlova"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Naziv foldera ne može biti prazan."] }, "Home": { "msgid": "Home", "msgstr": ["Početak"] }, "Modified": { "msgid": "Modified", "msgstr": ["Izmenjeno"] }, "Move": { "msgid": "Move", "msgstr": ["Premesti"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Premesti u {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Naziv"] }, "New": { "msgid": "New", "msgstr": ["Novo"] }, "New folder": { "msgid": "New folder", "msgstr": ["Novi folder"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Naziv novog foldera"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Bez fajlova"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Nema fajlova koji zadovoljavaju uslove filtera."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Nema takvih fajlova"] }, "Recent": { "msgid": "Recent", "msgstr": ["Skorašnje"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Izaberite sve stavke"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Izaberite stavku"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Izaberite red za {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Veličina"] }, "Undo": { "msgid": "Undo", "msgstr": ["Vrati"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Otpremite sadržaj ili sinhronizujte sa svojim uređajima!"] } } } } }, { "locale": "sv", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Magnus Höglund, 2024", "Language-Team": "Swedish (https://app.transifex.com/nextcloud/teams/64236/sv/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sv", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nMagnus Höglund, 2024\n" }, "msgstr": ["Last-Translator: Magnus Höglund, 2024\nLanguage-Team: Swedish (https://app.transifex.com/nextcloud/teams/64236/sv/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sv\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" är ett ogiltigt mappnamn.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" är inte ett tillåtet mappnamn'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" är inte tillåtet i ett mappnamn.'] }, "All files": { "msgid": "All files", "msgstr": ["Alla filer"] }, "Choose": { "msgid": "Choose", "msgstr": ["Välj"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Välj {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Välj %n fil", "Välj %n filer"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopiera"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Kopiera till {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Kunde inte skapa den nya mappen"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Kunde inte ladda filinställningar"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Kunde inte ladda läsa in filvyer"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Skapa katalog"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Aktuell vyväljare"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Favoriter"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Filer och mappar som du markerar som favorit kommer att visas här."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Filer och mappar som du nyligen ändrat kommer att visas här."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Filtrera fillistan"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Mappnamnet får inte vara tomt."] }, "Home": { "msgid": "Home", "msgstr": ["Hem"] }, "Modified": { "msgid": "Modified", "msgstr": ["Ändrad"] }, "Move": { "msgid": "Move", "msgstr": ["Flytta"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Flytta till {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Namn"] }, "New": { "msgid": "New", "msgstr": ["Ny"] }, "New folder": { "msgid": "New folder", "msgstr": ["Ny mapp"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Nytt mappnamn"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Inga filer här"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Inga filer som matchar ditt filter hittades."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Inga matchande filer"] }, "Recent": { "msgid": "Recent", "msgstr": ["Nyligen"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Välj alla poster"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Välj post"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Välj raden för {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Storlek"] }, "Undo": { "msgid": "Undo", "msgstr": ["Ångra"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Ladda upp lite innehåll eller synkronisera med dina enheter!"] } } } } }, { "locale": "sw", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Swahili (https://app.transifex.com/nextcloud/teams/64236/sw/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sw", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Swahili (https://app.transifex.com/nextcloud/teams/64236/sw/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sw\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "ta", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Tamil (https://app.transifex.com/nextcloud/teams/64236/ta/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ta", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Tamil (https://app.transifex.com/nextcloud/teams/64236/ta/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ta\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["செயல்தவிர்"] } } } } }, { "locale": "th_TH", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Thai (Thailand) (https://app.transifex.com/nextcloud/teams/64236/th_TH/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "th_TH", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Thai (Thailand) (https://app.transifex.com/nextcloud/teams/64236/th_TH/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: th_TH\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["เลิกทำ"] } } } } }, { "locale": "tk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Turkmen (https://app.transifex.com/nextcloud/teams/64236/tk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "tk", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Turkmen (https://app.transifex.com/nextcloud/teams/64236/tk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: tk\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "tr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Kaya Zeren <kayazeren@gmail.com>, 2024", "Language-Team": "Turkish (https://app.transifex.com/nextcloud/teams/64236/tr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "tr", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nKaya Zeren <kayazeren@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Kaya Zeren <kayazeren@gmail.com>, 2024\nLanguage-Team: Turkish (https://app.transifex.com/nextcloud/teams/64236/tr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: tr\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" geçersiz bir klasör adı.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" izin verilen bir klasör adı değil'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" karakteri klasör adında kullanılamaz.'] }, "All files": { "msgid": "All files", "msgstr": ["Tüm dosyalar"] }, "Choose": { "msgid": "Choose", "msgstr": ["Seçin"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["{file} seçin"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["%n dosya seçin", "%n dosya seçin"] }, "Copy": { "msgid": "Copy", "msgstr": ["Kopyala"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["{target} üzerine kopyala"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Yeni klasör oluşturulamadı"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Dosyalar uygulamasının ayarları yüklenemedi"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Dosyalar uygulamasının görünümleri yüklenemedi"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Klasör oluştur"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Geçerli görünüm seçici"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Sık kullanılanlar"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Sık kullanılan olarak seçtiğiniz dosyalar burada görüntülenir."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Son zamanlarda değiştirdiğiniz dosya ve klasörler burada görüntülenir."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Dosya listesini süz"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Klasör adı boş olamaz."] }, "Home": { "msgid": "Home", "msgstr": ["Giriş"] }, "Modified": { "msgid": "Modified", "msgstr": ["Değiştirilme"] }, "Move": { "msgid": "Move", "msgstr": ["Taşı"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["{target} üzerine taşı"] }, "Name": { "msgid": "Name", "msgstr": ["Ad"] }, "New": { "msgid": "New", "msgstr": ["Yeni"] }, "New folder": { "msgid": "New folder", "msgstr": ["Yeni klasör"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Yeni klasör adı"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Burada herhangi bir dosya yok"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Süzgece uyan bir dosya bulunamadı."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Eşleşen bir dosya yok"] }, "Recent": { "msgid": "Recent", "msgstr": ["Son kullanılanlar"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Tüm kayıtları seç"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Kaydı seç"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["{nodename} satırını seçin"] }, "Size": { "msgid": "Size", "msgstr": ["Boyut"] }, "Undo": { "msgid": "Undo", "msgstr": ["Geri al"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Bazı içerikler yükleyin ya da aygıtlarınızla eşitleyin!"] } } } } }, { "locale": "ug", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Uyghur (https://app.transifex.com/nextcloud/teams/64236/ug/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ug", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Uyghur (https://app.transifex.com/nextcloud/teams/64236/ug/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ug\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "uk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "O St <oleksiy.stasevych@gmail.com>, 2024", "Language-Team": "Ukrainian (https://app.transifex.com/nextcloud/teams/64236/uk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "uk", "Plural-Forms": "nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nO St <oleksiy.stasevych@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: O St <oleksiy.stasevych@gmail.com>, 2024\nLanguage-Team: Ukrainian (https://app.transifex.com/nextcloud/teams/64236/uk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: uk\nPlural-Forms: nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ['"{name}" є недійсною назвою для каталогу.'] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ['"{name}" не є дозволеною назвою для каталогу.'] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['"/" не дозволено у назві каталогу.'] }, "All files": { "msgid": "All files", "msgstr": ["Всі файли"] }, "Choose": { "msgid": "Choose", "msgstr": ["Вибрати"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["Вибрати {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["Вибрати %n файл", "Вибрати %n файли", "Вибрати %n файлів", "Вибрати %n файлів"] }, "Copy": { "msgid": "Copy", "msgstr": ["Копіювати"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["Копіювати до {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["Не вдалося створити новий каталог"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["Не вдалося завантажити налаштування файлів"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["Не вдалося завантажити подання файлів"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["Створити каталог"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["Вибір подання"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["Із зірочкою"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["Тут показуватимуться файли та каталоги, які ви позначите зірочкою."] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["Тут показуватимуться файли та каталоги, які було нещодавно змінено."] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["Фільтрувати список файлів"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["Ім'я каталогу не може бути порожнім."] }, "Home": { "msgid": "Home", "msgstr": ["Домівка"] }, "Modified": { "msgid": "Modified", "msgstr": ["Змінено"] }, "Move": { "msgid": "Move", "msgstr": ["Перемістити"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["Перемістити до {target}"] }, "Name": { "msgid": "Name", "msgstr": ["Ім'я"] }, "New": { "msgid": "New", "msgstr": ["Новий"] }, "New folder": { "msgid": "New folder", "msgstr": ["Новий каталог"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["Ім'я нового каталогу"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["Тут відсутні файли"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["Відсутні збіги за фільтром."] }, "No matching files": { "msgid": "No matching files", "msgstr": ["Відсутні збіги файлів."] }, "Recent": { "msgid": "Recent", "msgstr": ["Останні"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["Вибрати всі записи"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["Вибрати запис"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["Вибрати рядок для {nodename}"] }, "Size": { "msgid": "Size", "msgstr": ["Розмір"] }, "Undo": { "msgid": "Undo", "msgstr": ["Повернути"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["Завантажте вміст або синхронізуйте з вашим пристроєм!"] } } } } }, { "locale": "ur_PK", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Urdu (Pakistan) (https://app.transifex.com/nextcloud/teams/64236/ur_PK/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ur_PK", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Urdu (Pakistan) (https://app.transifex.com/nextcloud/teams/64236/ur_PK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ur_PK\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "uz", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Uzbek (https://app.transifex.com/nextcloud/teams/64236/uz/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "uz", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Uzbek (https://app.transifex.com/nextcloud/teams/64236/uz/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: uz\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }, { "locale": "vi", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Joas Schilling, 2023", "Language-Team": "Vietnamese (https://app.transifex.com/nextcloud/teams/64236/vi/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "vi", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2023\n" }, "msgstr": ["Last-Translator: Joas Schilling, 2023\nLanguage-Team: Vietnamese (https://app.transifex.com/nextcloud/teams/64236/vi/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: vi\nPlural-Forms: nplurals=1; plural=0;\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": ["Hoàn tác"] } } } } }, { "locale": "zh_CN", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Eric, 2023", "Language-Team": "Chinese (China) (https://app.transifex.com/nextcloud/teams/64236/zh_CN/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zh_CN", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nken, 2023\nEric, 2023\n" }, "msgstr": ["Last-Translator: Eric, 2023\nLanguage-Team: Chinese (China) (https://app.transifex.com/nextcloud/teams/64236/zh_CN/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_CN\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["“{name}”是无效的文件夹名称。"] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["“{name}”不是允许的文件夹名称"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ["文件夹名称中不允许包含“/”。"] }, "All files": { "msgid": "All files", "msgstr": ["所有文件"] }, "Choose": { "msgid": "Choose", "msgstr": ["选择"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["选择 {file}"] }, "Copy": { "msgid": "Copy", "msgstr": ["复制"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["复制到 {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["无法创建新文件夹"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["创建目录"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["当前视图选择器"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["最爱"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["您标记为最爱的文件与文件夹会显示在这里"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["您最近修改的文件与文件夹会显示在这里"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["过滤文件列表"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["文件夹名称不能为空。"] }, "Home": { "msgid": "Home", "msgstr": ["主目录"] }, "Modified": { "msgid": "Modified", "msgstr": ["已修改"] }, "Move": { "msgid": "Move", "msgstr": ["移动"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["移动至 {target}"] }, "Name": { "msgid": "Name", "msgstr": ["名称"] }, "New": { "msgid": "New", "msgstr": ["新"] }, "New folder": { "msgid": "New folder", "msgstr": ["新文件夹"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["新文件夹名称"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["此处无文件"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["找不到符合您过滤条件的文件"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["无符合的文件"] }, "Recent": { "msgid": "Recent", "msgstr": ["最近"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["选择所有条目"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["选择条目"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["选择 {nodename} 的列"] }, "Size": { "msgid": "Size", "msgstr": ["大小"] }, "Undo": { "msgid": "Undo", "msgstr": [" 撤消"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["上传一些项目或与您的设备同步！"] } } } } }, { "locale": "zh_HK", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Café Tango, 2024", "Language-Team": "Chinese (Hong Kong) (https://app.transifex.com/nextcloud/teams/64236/zh_HK/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zh_HK", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nCafé Tango, 2024\n" }, "msgstr": ["Last-Translator: Café Tango, 2024\nLanguage-Team: Chinese (Hong Kong) (https://app.transifex.com/nextcloud/teams/64236/zh_HK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_HK\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid folder name.': { "msgid": '"{name}" is an invalid folder name.', "msgstr": ["「{name}」是無效的資料夾名稱。"] }, '"{name}" is not an allowed folder name': { "msgid": '"{name}" is not an allowed folder name', "msgstr": ["「{name}」是無效的資料夾名稱。"] }, '"/" is not allowed inside a folder name.': { "msgid": '"/" is not allowed inside a folder name.', "msgstr": ['資料夾名稱中不允許使用 "/"。'] }, "All files": { "msgid": "All files", "msgstr": ["所有檔案"] }, "Choose": { "msgid": "Choose", "msgstr": ["選擇"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["選擇 {file}"] }, "Choose %n file": { "msgid": "Choose %n file", "msgid_plural": "Choose %n files", "msgstr": ["選擇 %n 個檔案"] }, "Copy": { "msgid": "Copy", "msgstr": ["複製"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["複製到 {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["無法建立新資料夾"] }, "Could not load files settings": { "msgid": "Could not load files settings", "msgstr": ["無法載入檔案設定"] }, "Could not load files views": { "msgid": "Could not load files views", "msgstr": ["無法載入文件視圖"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["建立目錄"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["目前檢視選取器"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["最愛"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["您標記為最愛的檔案與資料夾將會顯示在此處。"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["您最近修改的檔案與資料夾將會顯示在此處。"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["過濾檔案清單"] }, "Folder name cannot be empty.": { "msgid": "Folder name cannot be empty.", "msgstr": ["資料夾名稱不能為空。"] }, "Home": { "msgid": "Home", "msgstr": ["首頁"] }, "Modified": { "msgid": "Modified", "msgstr": ["已修改"] }, "Move": { "msgid": "Move", "msgstr": ["移動"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["移動至 {target}"] }, "Name": { "msgid": "Name", "msgstr": ["名稱"] }, "New": { "msgid": "New", "msgstr": ["新"] }, "New folder": { "msgid": "New folder", "msgstr": ["新資料夾"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["新資料夾名稱"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["此處無檔案"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["找不到符合您過濾條件的檔案。"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["無符合的檔案"] }, "Recent": { "msgid": "Recent", "msgstr": ["最近"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["選取所有條目"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["選取條目"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["選取 {nodename} 的列"] }, "Size": { "msgid": "Size", "msgstr": ["大小"] }, "Undo": { "msgid": "Undo", "msgstr": ["還原"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["上傳一些內容或與您的裝置同步"] } } } } }, { "locale": "zh_TW", "json": { "charset": "utf-8", "headers": { "Last-Translator": "黃柏諺 <s8321414@gmail.com>, 2023", "Language-Team": "Chinese (Taiwan) (https://app.transifex.com/nextcloud/teams/64236/zh_TW/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zh_TW", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\n黃柏諺 <s8321414@gmail.com>, 2023\n" }, "msgstr": ["Last-Translator: 黃柏諺 <s8321414@gmail.com>, 2023\nLanguage-Team: Chinese (Taiwan) (https://app.transifex.com/nextcloud/teams/64236/zh_TW/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_TW\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{name}" is an invalid file name.': { "msgid": '"{name}" is an invalid file name.', "msgstr": ["「{name}」是無效的檔案名稱。"] }, '"{name}" is not an allowed filetype': { "msgid": '"{name}" is not an allowed filetype', "msgstr": ["「{name}」並非允許的檔案類型"] }, '"/" is not allowed inside a file name.': { "msgid": '"/" is not allowed inside a file name.', "msgstr": ["檔案名稱中不允許使用「/」。"] }, "All files": { "msgid": "All files", "msgstr": ["所有檔案"] }, "Choose": { "msgid": "Choose", "msgstr": ["選擇"] }, "Choose {file}": { "msgid": "Choose {file}", "msgstr": ["選擇 {file}"] }, "Copy": { "msgid": "Copy", "msgstr": ["複製"] }, "Copy to {target}": { "msgid": "Copy to {target}", "msgstr": ["複製到 {target}"] }, "Could not create the new folder": { "msgid": "Could not create the new folder", "msgstr": ["無法建立新資料夾"] }, "Create directory": { "msgid": "Create directory", "msgstr": ["建立目錄"] }, "Current view selector": { "msgid": "Current view selector", "msgstr": ["目前檢視選取器"] }, "Favorites": { "msgid": "Favorites", "msgstr": ["最愛"] }, "File name cannot be empty.": { "msgid": "File name cannot be empty.", "msgstr": ["檔案名稱不能為空。"] }, "Filepicker sections": { "msgid": "Filepicker sections", "msgstr": ["檔案挑選器選取"] }, "Files and folders you mark as favorite will show up here.": { "msgid": "Files and folders you mark as favorite will show up here.", "msgstr": ["您標記為最愛的檔案與資料夾將會顯示在此處。"] }, "Files and folders you recently modified will show up here.": { "msgid": "Files and folders you recently modified will show up here.", "msgstr": ["您最近修改的檔案與資料夾將會顯示在此處。"] }, "Filter file list": { "msgid": "Filter file list", "msgstr": ["過濾檔案清單"] }, "Home": { "msgid": "Home", "msgstr": ["家"] }, "Mime type {mime}": { "msgid": "Mime type {mime}", "msgstr": ["Mime type {mime}"] }, "Modified": { "msgid": "Modified", "msgstr": ["已修改"] }, "Move": { "msgid": "Move", "msgstr": ["移動"] }, "Move to {target}": { "msgid": "Move to {target}", "msgstr": ["移動至 {target}"] }, "Name": { "msgid": "Name", "msgstr": ["名稱"] }, "New": { "msgid": "New", "msgstr": ["新"] }, "New folder": { "msgid": "New folder", "msgstr": ["新資料夾"] }, "New folder name": { "msgid": "New folder name", "msgstr": ["新資料夾名稱"] }, "No files in here": { "msgid": "No files in here", "msgstr": ["此處無檔案"] }, "No files matching your filter were found.": { "msgid": "No files matching your filter were found.", "msgstr": ["找不到符合您過濾條件的檔案。"] }, "No matching files": { "msgid": "No matching files", "msgstr": ["無符合的檔案"] }, "Recent": { "msgid": "Recent", "msgstr": ["最近"] }, "Select all entries": { "msgid": "Select all entries", "msgstr": ["選取所有條目"] }, "Select entry": { "msgid": "Select entry", "msgstr": ["選取條目"] }, "Select the row for {nodename}": { "msgid": "Select the row for {nodename}", "msgstr": ["選取 {nodename} 的列"] }, "Size": { "msgid": "Size", "msgstr": ["大小"] }, "Undo": { "msgid": "Undo", "msgstr": ["復原"] }, "unknown": { "msgid": "unknown", "msgstr": ["未知"] }, "Upload some content or sync with your devices!": { "msgid": "Upload some content or sync with your devices!", "msgstr": ["上傳一些內容或與您的裝置同步"] } } } } }, { "locale": "zu_ZA", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2023", "Language-Team": "Zulu (South Africa) (https://app.transifex.com/nextcloud/teams/64236/zu_ZA/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zu_ZA", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2023\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2023\nLanguage-Team: Zulu (South Africa) (https://app.transifex.com/nextcloud/teams/64236/zu_ZA/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zu_ZA\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "Undo": { "msgid": "Undo", "comments": { "reference": "lib/toast.ts:223" }, "msgstr": [""] } } } } }].map((data) => gtBuilder.addTranslation(data.locale, data.json));
const gt = gtBuilder.build();
const n$1 = gt.ngettext.bind(gt);
const t$1 = gt.gettext.bind(gt);
const TOAST_ARIA_LIVE_OFF = "off";
const TOAST_ARIA_LIVE_POLITE = "polite";
const TOAST_ARIA_LIVE_ASSERTIVE = "assertive";
var ToastAriaLive = /* @__PURE__ */ ((ToastAriaLive2) => {
  ToastAriaLive2[ToastAriaLive2["OFF"] = TOAST_ARIA_LIVE_OFF] = "OFF";
  ToastAriaLive2[ToastAriaLive2["POLITE"] = TOAST_ARIA_LIVE_POLITE] = "POLITE";
  ToastAriaLive2[ToastAriaLive2["ASSERTIVE"] = TOAST_ARIA_LIVE_ASSERTIVE] = "ASSERTIVE";
  return ToastAriaLive2;
})(ToastAriaLive || {});
const TOAST_DEFAULT_TIMEOUT = 7e3;
function showMessage(data, options) {
  var _a;
  options = Object.assign({
    timeout: TOAST_DEFAULT_TIMEOUT,
    isHTML: false,
    type: void 0,
    // An undefined selector defaults to the body element
    selector: void 0,
    onRemove: () => {
    },
    onClick: void 0,
    close: true
  }, options);
  if (typeof data === "string" && !options.isHTML) {
    const element = document.createElement("div");
    element.innerHTML = data;
    data = element.innerText;
  }
  let classes = (_a = options.type) != null ? _a : "";
  if (typeof options.onClick === "function") {
    classes += " toast-with-click ";
  }
  const isNode = data instanceof Node;
  let ariaLive = ToastAriaLive.POLITE;
  if (options.ariaLive) {
    ariaLive = options.ariaLive;
  } else if (options.type === "toast-error" || options.type === "toast-undo") {
    ariaLive = ToastAriaLive.ASSERTIVE;
  }
  const toast = Toastify({
    [!isNode ? "text" : "node"]: data,
    duration: options.timeout,
    callback: options.onRemove,
    onClick: options.onClick,
    close: options.close,
    gravity: "top",
    selector: options.selector,
    position: "right",
    backgroundColor: "",
    className: "dialogs " + classes,
    escapeMarkup: !options.isHTML,
    ariaLive
  });
  toast.showToast();
  return toast;
}
function showError(text, options) {
  return showMessage(text, {
    ...options,
    type: "toast-error"
    /* ERROR */
  });
}
function showWarning(text, options) {
  return showMessage(text, {
    ...options,
    type: "toast-warning"
    /* WARNING */
  });
}
function showInfo(text, options) {
  return showMessage(text, {
    ...options,
    type: "toast-info"
    /* INFO */
  });
}
function showSuccess(text, options) {
  return showMessage(text, {
    ...options,
    type: "toast-success"
    /* SUCCESS */
  });
}
function normalizeComponent(scriptExports, render39, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render39) {
    options.render = render39;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  return {
    exports: scriptExports,
    options
  };
}
const _sfc_main$z = {
  name: "DeleteIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$z = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon delete-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$z = [];
var __component__$z = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$z,
  _sfc_render$z,
  _sfc_staticRenderFns$z,
  false,
  null,
  null
);
const IconDelete = __component__$z.exports;
/*! third party licenses: js/vendor.LICENSE.txt */
var CircleEdit = /* @__PURE__ */ ((CircleEdit2) => {
  CircleEdit2["Name"] = "name";
  CircleEdit2["Description"] = "description";
  CircleEdit2["Settings"] = "settings";
  CircleEdit2["Config"] = "config";
  return CircleEdit2;
})(CircleEdit || {});
const getCircles = async function() {
  const response = await cancelableClient.get(v("apps/circles/circles"));
  return response.data.ocs.data;
};
const getCircle = async function(circleId) {
  const response = await cancelableClient.get(v("apps/circles/circles/{circleId}", { circleId }));
  return response.data.ocs.data;
};
const createCircle = async function(name, personal, local) {
  const response = await cancelableClient.post(v("apps/circles/circles"), {
    name,
    personal,
    local
  });
  return response.data.ocs.data;
};
const deleteCircle = async function(circleId) {
  const response = await cancelableClient.delete(v("apps/circles/circles/{circleId}", { circleId }));
  return response.data.ocs.data;
};
const editCircle = async function(circleId, type, value) {
  const response = await cancelableClient.put(v("apps/circles/circles/{circleId}/{type}", { circleId, type }), { value });
  return response.data.ocs.data;
};
const joinCircle = async function(circleId) {
  const response = await cancelableClient.put(v("apps/circles/circles/{circleId}/join", { circleId }));
  return response.data.ocs.data;
};
const leaveCircle = async function(circleId) {
  const response = await cancelableClient.put(v("apps/circles/circles/{circleId}/leave", { circleId }));
  return response.data.ocs.data;
};
const getCircleMembers = async function(circleId) {
  const response = await cancelableClient.get(v("apps/circles/circles/{circleId}/members", { circleId }));
  return response.data.ocs.data;
};
const addMembers = async function(circleId, members) {
  const response = await cancelableClient.post(v("apps/circles/circles/{circleId}/members/multi", { circleId }), { members });
  return response.data.ocs.data;
};
const deleteMember = async function(circleId, memberId) {
  const response = await cancelableClient.delete(v("apps/circles/circles/{circleId}/members/{memberId}", { circleId, memberId }));
  return Object.values(response.data.ocs.data);
};
const changeMemberLevel = async function(circleId, memberId, level) {
  if (!(level in MemberLevels)) {
    throw new Error("Invalid level.");
  }
  const response = await cancelableClient.put(v("apps/circles/circles/{circleId}/members/{memberId}/level", { circleId, memberId }), {
    level
  });
  return Object.values(response.data.ocs.data);
};
const acceptMember = async function(circleId, memberId) {
  const response = await cancelableClient.put(v("apps/circles/circles/{circleId}/members/{memberId}", { circleId, memberId }));
  return response.data.ocs.data;
};
const editCircleSetting = async function(circleId, setting) {
  const response = await cancelableClient.put(
    v("apps/circles/circles/{circleId}/setting", { circleId }),
    setting
  );
  return response.data.ocs.data;
};
const logger = getLoggerBuilder().setApp(appName).detectUser().build();
/*! third party licenses: js/vendor.LICENSE.txt */
class Member {
  _data = {};
  _circle;
  /**
   * Creates an instance of Member
   *
   * @param data
   * @param circle
   */
  constructor(data, circle) {
    if (typeof data !== "object") {
      throw new Error("Invalid member");
    }
    if (data.id && typeof data.id !== "string") {
      logger.error("This member do not have a proper uid", data);
      throw new Error("This member do not have a proper uid");
    }
    this._circle = circle;
    this._data = data;
  }
  /**
   * Get the circle of this member
   */
  get circle() {
    return this._circle;
  }
  /**
   * Set the circle of this member
   */
  set circle(circle) {
    if (circle.constructor.name !== Circle.name) {
      throw new Error("circle must be a Circle type");
    }
    this._circle = circle;
  }
  /**
   * Member id
   */
  get id() {
    return this._data.id;
  }
  /**
   * Single uid
   */
  get singleId() {
    return this._data.singleId;
  }
  /**
   * Formatted display name
   */
  get displayName() {
    return this._data.displayName;
  }
  /**
   * Member userId
   */
  get userId() {
    return this._data.userId;
  }
  /**
   * Member type
   */
  get userType() {
    return this._data.userType !== MemberTypes.CIRCLE ? this._data.userType : this.basedOn.source;
  }
  /**
   * Member based on source
   */
  get basedOn() {
    return this._data.basedOn;
  }
  /**
   * Member level
   *
   */
  get level() {
    return this._data.level;
  }
  /**
   * Set member level
   */
  set level(level) {
    if (!(level in MemberLevels)) {
      throw new Error("Invalid level");
    }
    this._data.level = level;
  }
  /**
   * Member request status
   *
   */
  get status() {
    return this._data.status;
  }
  /**
   * Is the current member a user?
   */
  get isUser() {
    return this._data.userType === MemberLevels.MEMBER;
  }
  /**
   * Is the current member without a circle?
   */
  get isOrphan() {
    return this._circle?.constructor?.name !== Circle.name;
  }
  /**
   * Delete this member and any reference from its circle
   */
  delete() {
    if (this.isOrphan) {
      throw new Error("Cannot delete this member as it doesn't belong to any circle");
    }
    this.circle.deleteMember(this);
    this._data = void 0;
  }
}
/*! third party licenses: js/vendor.LICENSE.txt */
class Circle {
  _data = {};
  _members = {};
  _owner;
  _initiator;
  /**
   * Creates an instance of Circle
   *
   * @param data
   */
  constructor(data) {
    this.updateData(data);
  }
  /**
   * Update inner circle data, owner and initiator
   *
   * @param data
   */
  updateData(data) {
    if (typeof data !== "object") {
      throw new Error("Invalid circle");
    }
    if (!data.id) {
      throw new Error("This circle do not have a proper uid");
    }
    this._data = data;
    this._owner = new Member(data.owner, this);
    if (data.initiator) {
      this._initiator = new Member(data.initiator, this);
    }
  }
  // METADATA -----------------------------------------
  /**
   * Circle id
   */
  get id() {
    return this._data.id;
  }
  /**
   * Formatted display name
   */
  get displayName() {
    return this._data.displayName;
  }
  /**
   * Set the display name
   */
  set displayName(text) {
    this._data.displayName = text;
  }
  /**
   * Circle creation date
   */
  get creation() {
    return this._data.creation;
  }
  /**
   * Circle description
   */
  get description() {
    return this._data.description;
  }
  /**
   * Circle description
   */
  set description(text) {
    this._data.description = text;
  }
  /**
   * Circle member count
   */
  get population() {
    return this._data.population;
  }
  // MEMBERSHIP -----------------------------------------
  /**
   * Circle ini_initiator the current
   * user info for this circle
   * null if not a member
   */
  get initiator() {
    return this._initiator;
  }
  /**
   * Set new circle initiator
   * null if not a member
   */
  set initiator(initiator) {
    if (initiator && initiator.constructor.name !== Member.name) {
      throw new Error("Initiator must be a Member type");
    }
    Vue$1.set(this, "_initiator", initiator);
  }
  /**
   * Circle ownership
   */
  get owner() {
    return this._owner;
  }
  /**
   * Set new circle owner
   */
  set owner(owner) {
    if (owner.constructor.name !== Member.name) {
      throw new Error("Owner must be a Member type");
    }
    Vue$1.set(this, "_owner", owner);
  }
  /**
   * Circle members
   */
  get members() {
    return this._members;
  }
  /**
   * Define members circle
   */
  set members(members) {
    this._members = members;
  }
  /**
   * Add a member to this circle
   *
   * @param member
   */
  addMember(member) {
    if (member.constructor.name !== Member.name) {
      throw new Error("Member must be a Member type");
    }
    const singleId = member.singleId;
    if (this._members[singleId]) {
      console.warn("Replacing existing member data", member);
    }
    Vue$1.set(this._members, singleId, member);
  }
  /**
   * Remove a member from this circle
   *
   * @param member
   */
  deleteMember(member) {
    if (member.constructor.name !== Member.name) {
      throw new Error("Member must be a Member type");
    }
    const singleId = member.singleId;
    if (!this._members[singleId]) {
      console.warn("The member was not in this circle. Nothing was done.", member);
    }
    Vue$1.delete(this._members, singleId);
  }
  // CONFIGS --------------------------------------------
  get settings() {
    return this._data.settings;
  }
  /**
   * Circle config
   */
  get config() {
    return this._data.config;
  }
  /**
   * Define circle config
   */
  set config(config) {
    this._data.config = config;
  }
  /**
   * Circle is personal
   */
  get isPersonal() {
    return (this._data.config & CircleConfigs.PERSONAL) !== 0;
  }
  /**
   * Circle requires invite to be confirmed by moderator or above
   */
  get requireJoinAccept() {
    return (this._data.config & CircleConfigs.VISIBLE) !== 0;
  }
  /**
   * Circle can be requested to join
   */
  get canJoin() {
    return (this._data.config & CircleConfigs.OPEN) !== 0;
  }
  /**
   * Circle is visible to others
   */
  get isVisible() {
    return (this._data.config & CircleConfigs.VISIBLE) !== 0;
  }
  /**
   * Circle requires invite to be accepted by the member
   */
  get requireInviteAccept() {
    return (this._data.config & CircleConfigs.INVITE) !== 0;
  }
  // PERMISSIONS SHORTCUTS ------------------------------
  /**
   * Can the initiator add members to this circle?
   */
  get isOwner() {
    return this.initiator?.level === MemberLevels.OWNER;
  }
  // PERMISSIONS SHORTCUTS ------------------------------
  /**
   * Is the initiator an admin of this circle?
   */
  get isAdmin() {
    return this.initiator?.level === MemberLevels.ADMIN;
  }
  /**
   * Is the initiator a member of this circle?
   */
  get isMember() {
    return this.initiator?.level && this.initiator?.level > MemberLevels.NONE;
  }
  /**
   * Is the initiator a pending member of this circle?
   */
  get isPendingMember() {
    return this.initiator?.level === MemberLevels.NONE;
  }
  /**
   * Can the initiator delete this circle?
   */
  get canDelete() {
    return this.isOwner;
  }
  /**
   * Can the initiator leave this circle?
   */
  get canLeave() {
    return this.isMember && !this.isOwner;
  }
  /**
   * Can the initiator add/remove members to this circle?
   */
  get canManageMembers() {
    return this.initiator?.level && this.initiator?.level >= MemberLevels.MODERATOR || (this.config & CircleConfigs.FRIEND) !== 0;
  }
  // PARAMS ---------------------------------------------
  /**
   * Vue router param
   */
  get router() {
    return {
      name: "circle",
      params: { selectedCircle: this.id, selectedGroup: ROUTE_CIRCLE }
    };
  }
  /**
   * Default javascript fallback
   * Used for sorting as well
   */
  toString() {
    return this.displayName;
  }
}
const _sfc_main$y = {
  name: "AccountMultipleIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$y = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon account-multiple-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$y = [];
var __component__$y = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$y,
  _sfc_render$y,
  _sfc_staticRenderFns$y,
  false,
  null,
  null
);
const IconContact = __component__$y.exports;
const _sfc_main$x = {
  name: "PlusIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$x = function render5() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon plus-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$x = [];
var __component__$x = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$x,
  _sfc_render$x,
  _sfc_staticRenderFns$x,
  false,
  null,
  null
);
const IconAdd = __component__$x.exports;
const getChart = (allNodes, currentNode) => {
  const result = [currentNode];
  const children = allNodes.filter((node) => {
    return node.nodeId !== currentNode.nodeId && node.parentNodeId === currentNode.nodeId;
  });
  return [
    ...result,
    ...children.flatMap((child) => getChart(allNodes, child))
  ];
};
const transformNode = (contact) => {
  return {
    nodeId: contact.uid,
    key: contact.key,
    parentNodeId: contact.managersName,
    fullName: contact.displayName,
    org: contact.org,
    photoUrl: `${contact.url}?photo`,
    title: contact.title,
    link: _(`apps/contacts/${GROUP_ALL_CONTACTS}/${contact.key}`),
    expanded: !contact.managersName
  };
};
const otherContacts = ({ $store, self: self2 }) => {
  return $store.getters.getSortedContacts.filter(
    ({ key }) => {
      const contact = $store.getters.getContact(key);
      return contact.addressbook.id === self2.addressbook.id && contact.uid !== self2.uid;
    }
  );
};
function mitt(n2) {
  return { all: n2 = n2 || /* @__PURE__ */ new Map(), on: function(t2, e) {
    var i = n2.get(t2);
    i ? i.push(e) : n2.set(t2, [e]);
  }, off: function(t2, e) {
    var i = n2.get(t2);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n2.set(t2, []));
  }, emit: function(t2, e) {
    var i = n2.get(t2);
    i && i.slice().map(function(n3) {
      n3(e);
    }), (i = n2.get("*")) && i.slice().map(function(n3) {
      n3(t2, e);
    });
  } };
}
const _sfc_main$w = {
  name: "EmailIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$w = function render6() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon email-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$w = [];
var __component__$w = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$w,
  _sfc_render$w,
  _sfc_staticRenderFns$w,
  false,
  null,
  null
);
const IconEmail = __component__$w.exports;
const _sfc_main$v = {
  name: "PhoneIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$v = function render7() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon phone-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$v = [];
var __component__$v = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$v,
  _sfc_render$v,
  _sfc_staticRenderFns$v,
  false,
  null,
  null
);
const IconCall = __component__$v.exports;
const _sfc_main$u = {
  name: "MessageProcessingIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$u = function render8() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon message-processing-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M17,11H15V9H17M13,11H11V9H13M9,11H7V9H9M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$u = [];
var __component__$u = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$u,
  _sfc_render$u,
  _sfc_staticRenderFns$u,
  false,
  null,
  null
);
const IconMessage = __component__$u.exports;
const _sfc_main$t = {
  name: "AccountIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$t = function render9() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon account-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$t = [];
var __component__$t = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$t,
  _sfc_render$t,
  _sfc_staticRenderFns$t,
  false,
  null,
  null
);
const IconUser = __component__$t.exports;
const _sfc_main$s = {
  name: "ContentCopyIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$s = function render10() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon content-copy-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$s = [];
var __component__$s = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$s,
  _sfc_render$s,
  _sfc_staticRenderFns$s,
  false,
  null,
  null
);
const IconCopy = __component__$s.exports;
const _sfc_main$r = {
  name: "PencilIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$r = function render11() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon pencil-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$r = [];
var __component__$r = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$r,
  _sfc_render$r,
  _sfc_staticRenderFns$r,
  false,
  null,
  null
);
const IconRename = __component__$r.exports;
const ActionsMixin = {
  props: {
    // The current component root
    component: {
      type: Object,
      default: () => {
      },
      required: true
    }
  }
};
const _sfc_main$q = {
  name: "ActionCopyNtoFN",
  components: {
    ActionButton: NcActionButton,
    IconCopy
  },
  mixins: [ActionsMixin],
  methods: {
    copyNToFN() {
      if (this.component.localContact.vCard.hasProperty("n")) {
        const n2 = this.component.localContact.vCard.getFirstPropertyValue("n");
        this.component.localContact.fullName = n2.slice(0, 2).reverse().join(" ");
        this.component.$emit("update");
      }
    }
  }
};
var _sfc_render$q = function render12() {
  var _vm = this, _c = _vm._self._c;
  return _c("ActionButton", { on: { "click": _vm.copyNToFN }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("IconCopy", { attrs: { "size": 20 } })];
  }, proxy: true }]) }, [_vm._v(" " + _vm._s(_vm.t("contacts", "Copy to full name")) + " ")]);
};
var _sfc_staticRenderFns$q = [];
var __component__$q = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$q,
  _sfc_render$q,
  _sfc_staticRenderFns$q,
  false,
  null,
  null
);
const ActionCopyNtoFN = __component__$q.exports;
const _sfc_main$p = {
  name: "ActionToggleYear",
  components: {
    ActionCheckbox: NcActionCheckbox
  },
  mixins: [ActionsMixin],
  data() {
    return {
      omitYear: false
    };
  },
  beforeMount() {
    this.omitYear = !!this.component.property.getFirstParameter("x-apple-omit-year") || !this.component.value.year;
  },
  methods: {
    removeYear() {
      const dateObject = this.component.localValue.toJSON();
      if (this.component.localContact.version === "4.0") {
        dateObject.year = null;
        this.component.updateValue(dateObject);
      } else {
        const year = this.component.value.year;
        if (this.component.value.year) {
          this.component.property.setParameter("x-apple-omit-year", parseInt(year).toString());
          this.$nextTick(() => {
            this.component.updateValue(dateObject);
          });
        }
      }
      this.omitYear = !this.omitYear;
    },
    addYear() {
      const dateObject = this.component.localValue.toJSON();
      this.component.updateValue(dateObject, true);
      this.omitYear = !this.omitYear;
    }
  }
};
var _sfc_render$p = function render13() {
  var _vm = this, _c = _vm._self._c;
  return _c("ActionCheckbox", { attrs: { "checked": _vm.omitYear }, on: { "check": _vm.removeYear, "uncheck": _vm.addYear } }, [_vm._v(" " + _vm._s(_vm.t("contacts", "Omit year")) + " ")]);
};
var _sfc_staticRenderFns$p = [];
var __component__$p = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$p,
  _sfc_render$p,
  _sfc_staticRenderFns$p,
  false,
  null,
  null
);
const ActionToggleYear = __component__$p.exports;
const zones = [
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Addis_Ababa",
  "Africa/Algiers",
  "Africa/Asmara",
  "Africa/Bamako",
  "Africa/Bangui",
  "Africa/Banjul",
  "Africa/Bissau",
  "Africa/Blantyre",
  "Africa/Brazzaville",
  "Africa/Bujumbura",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/Conakry",
  "Africa/Dakar",
  "Africa/Dar_es_Salaam",
  "Africa/Djibouti",
  "Africa/Douala",
  "Africa/El_Aaiun",
  "Africa/Freetown",
  "Africa/Gaborone",
  "Africa/Harare",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Kampala",
  "Africa/Khartoum",
  "Africa/Kigali",
  "Africa/Kinshasa",
  "Africa/Lagos",
  "Africa/Libreville",
  "Africa/Lome",
  "Africa/Luanda",
  "Africa/Lubumbashi",
  "Africa/Lusaka",
  "Africa/Malabo",
  "Africa/Maputo",
  "Africa/Maseru",
  "Africa/Mbabane",
  "Africa/Mogadishu",
  "Africa/Monrovia",
  "Africa/Nairobi",
  "Africa/Ndjamena",
  "Africa/Niamey",
  "Africa/Nouakchott",
  "Africa/Ouagadougou",
  "Africa/Porto-Novo",
  "Africa/Sao_Tome",
  "Africa/Tripoli",
  "Africa/Tunis",
  "Africa/Windhoek",
  "America/Adak",
  "America/Anchorage",
  "America/Anguilla",
  "America/Antigua",
  "America/Araguaina",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca",
  "America/Argentina/Cordoba",
  "America/Argentina/Jujuy",
  "America/Argentina/La_Rioja",
  "America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta",
  "America/Argentina/San_Juan",
  "America/Argentina/San_Luis",
  "America/Argentina/Tucuman",
  "America/Argentina/Ushuaia",
  "America/Aruba",
  "America/Asuncion",
  "America/Atikokan",
  "America/Bahia",
  "America/Bahia_Banderas",
  "America/Barbados",
  "America/Belem",
  "America/Belize",
  "America/Blanc-Sablon",
  "America/Boa_Vista",
  "America/Bogota",
  "America/Boise",
  "America/Cambridge_Bay",
  "America/Campo_Grande",
  "America/Cancun",
  "America/Caracas",
  "America/Cayenne",
  "America/Cayman",
  "America/Chicago",
  "America/Chihuahua",
  "America/Costa_Rica",
  "America/Creston",
  "America/Cuiaba",
  "America/Curacao",
  "America/Danmarkshavn",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Denver",
  "America/Detroit",
  "America/Dominica",
  "America/Edmonton",
  "America/Eirunepe",
  "America/El_Salvador",
  "America/Fort_Nelson",
  "America/Fortaleza",
  "America/Glace_Bay",
  "America/Godthab",
  "America/Goose_Bay",
  "America/Grand_Turk",
  "America/Grenada",
  "America/Guadeloupe",
  "America/Guatemala",
  "America/Guayaquil",
  "America/Guyana",
  "America/Halifax",
  "America/Havana",
  "America/Hermosillo",
  "America/Indiana/Indianapolis",
  "America/Indiana/Knox",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Tell_City",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Inuvik",
  "America/Iqaluit",
  "America/Jamaica",
  "America/Juneau",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Kralendijk",
  "America/La_Paz",
  "America/Lima",
  "America/Los_Angeles",
  "America/Lower_Princes",
  "America/Maceio",
  "America/Managua",
  "America/Manaus",
  "America/Marigot",
  "America/Martinique",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Menominee",
  "America/Merida",
  "America/Metlakatla",
  "America/Mexico_City",
  "America/Miquelon",
  "America/Moncton",
  "America/Monterrey",
  "America/Montevideo",
  "America/Montserrat",
  "America/Nassau",
  "America/New_York",
  "America/Nipigon",
  "America/Nome",
  "America/Noronha",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Ojinaga",
  "America/Panama",
  "America/Pangnirtung",
  "America/Paramaribo",
  "America/Phoenix",
  "America/Port-au-Prince",
  "America/Port_of_Spain",
  "America/Porto_Velho",
  "America/Puerto_Rico",
  "America/Rainy_River",
  "America/Rankin_Inlet",
  "America/Recife",
  "America/Regina",
  "America/Resolute",
  "America/Rio_Branco",
  "America/Santarem",
  "America/Santiago",
  "America/Santo_Domingo",
  "America/Sao_Paulo",
  "America/Scoresbysund",
  "America/Sitka",
  "America/St_Barthelemy",
  "America/St_Johns",
  "America/St_Kitts",
  "America/St_Lucia",
  "America/St_Thomas",
  "America/St_Vincent",
  "America/Swift_Current",
  "America/Tegucigalpa",
  "America/Thule",
  "America/Thunder_Bay",
  "America/Tijuana",
  "America/Toronto",
  "America/Tortola",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Winnipeg",
  "America/Yakutat",
  "America/Yellowknife",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville",
  "Antarctica/Macquarie",
  "Antarctica/Mawson",
  "Antarctica/McMurdo",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "Arctic/Longyearbyen",
  "Asia/Aden",
  "Asia/Almaty",
  "Asia/Amman",
  "Asia/Anadyr",
  "Asia/Aqtau",
  "Asia/Aqtobe",
  "Asia/Ashgabat",
  "Asia/Atyrau",
  "Asia/Baghdad",
  "Asia/Bahrain",
  "Asia/Baku",
  "Asia/Bangkok",
  "Asia/Barnaul",
  "Asia/Beirut",
  "Asia/Bishkek",
  "Asia/Brunei",
  "Asia/Chita",
  "Asia/Choibalsan",
  "Asia/Colombo",
  "Asia/Damascus",
  "Asia/Dhaka",
  "Asia/Dili",
  "Asia/Dubai",
  "Asia/Dushanbe",
  "Asia/Famagusta",
  "Asia/Gaza",
  "Asia/Hebron",
  "Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong",
  "Asia/Hovd",
  "Asia/Irkutsk",
  "Asia/Istanbul",
  "Asia/Jakarta",
  "Asia/Jayapura",
  "Asia/Jerusalem",
  "Asia/Kabul",
  "Asia/Kamchatka",
  "Asia/Karachi",
  "Asia/Kathmandu",
  "Asia/Khandyga",
  "Asia/Kolkata",
  "Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Asia/Kuwait",
  "Asia/Macau",
  "Asia/Magadan",
  "Asia/Makassar",
  "Asia/Manila",
  "Asia/Muscat",
  "Asia/Nicosia",
  "Asia/Novokuznetsk",
  "Asia/Novosibirsk",
  "Asia/Omsk",
  "Asia/Oral",
  "Asia/Phnom_Penh",
  "Asia/Pontianak",
  "Asia/Pyongyang",
  "Asia/Qatar",
  "Asia/Qyzylorda",
  "Asia/Riyadh",
  "Asia/Sakhalin",
  "Asia/Samarkand",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Srednekolymsk",
  "Asia/Taipei",
  "Asia/Tashkent",
  "Asia/Tbilisi",
  "Asia/Tehran",
  "Asia/Thimphu",
  "Asia/Tokyo",
  "Asia/Tomsk",
  "Asia/Ulaanbaatar",
  "Asia/Urumqi",
  "Asia/Ust-Nera",
  "Asia/Vientiane",
  "Asia/Vladivostok",
  "Asia/Yakutsk",
  "Asia/Yangon",
  "Asia/Yekaterinburg",
  "Asia/Yerevan",
  "Atlantic/Azores",
  "Atlantic/Bermuda",
  "Atlantic/Canary",
  "Atlantic/Cape_Verde",
  "Atlantic/Faroe",
  "Atlantic/Madeira",
  "Atlantic/Reykjavik",
  "Atlantic/South_Georgia",
  "Atlantic/St_Helena",
  "Atlantic/Stanley",
  "Australia/Adelaide",
  "Australia/Brisbane",
  "Australia/Broken_Hill",
  "Australia/Currie",
  "Australia/Darwin",
  "Australia/Eucla",
  "Australia/Hobart",
  "Australia/Lindeman",
  "Australia/Lord_Howe",
  "Australia/Melbourne",
  "Australia/Perth",
  "Australia/Sydney",
  "Europe/Amsterdam",
  "Europe/Andorra",
  "Europe/Astrakhan",
  "Europe/Athens",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Bratislava",
  "Europe/Brussels",
  "Europe/Bucharest",
  "Europe/Budapest",
  "Europe/Busingen",
  "Europe/Chisinau",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Gibraltar",
  "Europe/Guernsey",
  "Europe/Helsinki",
  "Europe/Isle_of_Man",
  "Europe/Istanbul",
  "Europe/Jersey",
  "Europe/Kaliningrad",
  "Europe/Kiev",
  "Europe/Kirov",
  "Europe/Lisbon",
  "Europe/Ljubljana",
  "Europe/London",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Mariehamn",
  "Europe/Minsk",
  "Europe/Monaco",
  "Europe/Moscow",
  "Europe/Nicosia",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Podgorica",
  "Europe/Prague",
  "Europe/Riga",
  "Europe/Rome",
  "Europe/Samara",
  "Europe/San_Marino",
  "Europe/Sarajevo",
  "Europe/Saratov",
  "Europe/Simferopol",
  "Europe/Skopje",
  "Europe/Sofia",
  "Europe/Stockholm",
  "Europe/Tallinn",
  "Europe/Tirane",
  "Europe/Ulyanovsk",
  "Europe/Uzhgorod",
  "Europe/Vaduz",
  "Europe/Vatican",
  "Europe/Vienna",
  "Europe/Vilnius",
  "Europe/Volgograd",
  "Europe/Warsaw",
  "Europe/Zagreb",
  "Europe/Zaporozhye",
  "Europe/Zurich",
  "Indian/Antananarivo",
  "Indian/Chagos",
  "Indian/Christmas",
  "Indian/Cocos",
  "Indian/Comoro",
  "Indian/Kerguelen",
  "Indian/Mahe",
  "Indian/Maldives",
  "Indian/Mauritius",
  "Indian/Mayotte",
  "Indian/Reunion",
  "Pacific/Apia",
  "Pacific/Auckland",
  "Pacific/Bougainville",
  "Pacific/Chatham",
  "Pacific/Chuuk",
  "Pacific/Easter",
  "Pacific/Efate",
  "Pacific/Enderbury",
  "Pacific/Fakaofo",
  "Pacific/Fiji",
  "Pacific/Funafuti",
  "Pacific/Galapagos",
  "Pacific/Gambier",
  "Pacific/Guadalcanal",
  "Pacific/Guam",
  "Pacific/Honolulu",
  "Pacific/Johnston",
  "Pacific/Kiritimati",
  "Pacific/Kosrae",
  "Pacific/Kwajalein",
  "Pacific/Majuro",
  "Pacific/Marquesas",
  "Pacific/Midway",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Norfolk",
  "Pacific/Noumea",
  "Pacific/Pago_Pago",
  "Pacific/Palau",
  "Pacific/Pitcairn",
  "Pacific/Pohnpei",
  "Pacific/Port_Moresby",
  "Pacific/Rarotonga",
  "Pacific/Saipan",
  "Pacific/Tahiti",
  "Pacific/Tarawa",
  "Pacific/Tongatapu",
  "Pacific/Wake",
  "Pacific/Wallis"
];
const defaultProfileState = loadState("contacts", "defaultProfile", "HOME");
const localesState = loadState("contacts", "locales", false);
const locales$1 = localesState ? localesState.map(({ code, name }) => ({
  id: code.toLowerCase().replace("_", "-"),
  name
})) : [];
console.debug("Initial state loaded", "defaultProfileState", defaultProfileState);
console.debug("Initial state loaded", "localesState", localesState);
const properties = {
  n: {
    readableName: t("contacts", "Detailed name"),
    readableValues: [
      t("contacts", "Last name"),
      t("contacts", "First name"),
      t("contacts", "Additional names"),
      t("contacts", "Prefix"),
      t("contacts", "Suffix")
    ],
    displayOrder: [3, 1, 2, 0, 4],
    defaultValue: {
      value: ["", "", "", "", ""]
    },
    icon: "icon-detailed-name",
    actions: [
      ActionCopyNtoFN
    ],
    primary: false
  },
  nickname: {
    readableName: t("contacts", "Nickname"),
    icon: "icon-detailed-name",
    primary: false
  },
  "x-phonetic-first-name": {
    readableName: t("contacts", "Phonetic first name"),
    icon: "icon-detailed-name",
    force: "text",
    primary: false
  },
  "x-phonetic-last-name": {
    readableName: t("contacts", "Phonetic last name"),
    icon: "icon-detailed-name",
    force: "text",
    primary: false
  },
  note: {
    readableName: t("contacts", "Notes"),
    icon: "icon-note",
    primary: false
  },
  url: {
    multiple: true,
    readableName: t("contacts", "Website"),
    icon: "icon-public",
    primary: true
  },
  geo: {
    multiple: true,
    readableName: t("contacts", "Location"),
    icon: "icon-location",
    defaultjCal: {
      "3.0": [{}, "FLOAT", "90.000;0.000"],
      "4.0": [{}, "URI", "geo:90.000,0.000"]
    },
    primary: false
  },
  cloud: {
    multiple: true,
    icon: "icon-federated-cloud-id",
    readableName: t("contacts", "Federated Cloud ID"),
    force: "text",
    defaultValue: {
      value: [""],
      type: [defaultProfileState]
    },
    options: [
      { id: "HOME", name: t("contacts", "Home") },
      { id: "WORK", name: t("contacts", "Work") },
      { id: "OTHER", name: t("contacts", "Other") }
    ],
    primary: false
  },
  adr: {
    multiple: true,
    readableName: t("contacts", "Address"),
    readableValues: [
      t("contacts", "Post office box"),
      t("contacts", "Extended address"),
      t("contacts", "Address"),
      t("contacts", "City"),
      t("contacts", "State or province"),
      t("contacts", "Postal code"),
      t("contacts", "Country")
    ],
    displayOrder: [0, 2, 1, 5, 3, 4, 6],
    icon: "icon-address",
    default: true,
    defaultValue: {
      value: ["", "", "", "", "", "", ""],
      type: [defaultProfileState]
    },
    options: [
      { id: "HOME", name: t("contacts", "Home") },
      { id: "WORK", name: t("contacts", "Work") },
      { id: "OTHER", name: t("contacts", "Other") }
    ],
    primary: true
  },
  bday: {
    readableName: t("contacts", "Birthday"),
    icon: "icon-calendar-dark",
    force: "date",
    // most ppl prefer date for birthdays, time is usually irrelevant
    defaultValue: {
      value: new ICALmodule.VCardTime(null, null, "date").fromJSDate(/* @__PURE__ */ new Date())
    },
    actions: [
      ActionToggleYear
    ],
    primary: true
  },
  birthplace: {
    readableName: t("contacts", "Place of birth"),
    icon: "icon-location",
    force: "text",
    primary: false
  },
  anniversary: {
    readableName: t("contacts", "Anniversary"),
    icon: "icon-anniversary",
    force: "date",
    // most ppl prefer date for birthdays, time is usually irrelevant
    defaultValue: {
      value: new ICALmodule.VCardTime(null, null, "date").fromJSDate(/* @__PURE__ */ new Date())
    },
    primary: false
  },
  deathdate: {
    readableName: t("contacts", "Date of death"),
    icon: "icon-death-day",
    force: "date",
    // most ppl prefer date for birthdays, time is usually irrelevant
    defaultValue: {
      value: new ICALmodule.VCardTime(null, null, "date").fromJSDate(/* @__PURE__ */ new Date())
    },
    primary: false
  },
  deathplace: {
    readableName: t("contacts", "Place of death"),
    icon: "icon-location",
    force: "text",
    primary: false
  },
  email: {
    multiple: true,
    readableName: t("contacts", "Email"),
    icon: "icon-mail",
    default: true,
    defaultValue: {
      value: "",
      type: [defaultProfileState]
    },
    options: [
      { id: "HOME", name: t("contacts", "Home") },
      { id: "WORK", name: t("contacts", "Work") },
      { id: "OTHER", name: t("contacts", "Other") }
    ],
    primary: true
  },
  impp: {
    multiple: true,
    readableName: t("contacts", "Instant messaging"),
    icon: "icon-instant-message",
    defaultValue: {
      value: [""],
      type: ["SKYPE"]
    },
    options: [
      { id: "IRC", name: "IRC" },
      { id: "KAKAOTALK", name: "KakaoTalk" },
      { id: "KIK", name: "KiK" },
      { id: "LINE", name: "Line" },
      { id: "MATRIX", name: "Matrix" },
      { id: "QQ", name: "QQ" },
      { id: "SIGNAL", name: "Signal" },
      { id: "SIP", name: "SIP" },
      { id: "SKYPE", name: "Skype" },
      { id: "TELEGRAM", name: "Telegram" },
      { id: "THREEMA", name: "Threema" },
      { id: "WECHAT", name: "WeChat" },
      { id: "XMPP", name: "XMPP" },
      { id: "ZOOM", name: "Zoom" }
    ],
    primary: false
  },
  tel: {
    multiple: true,
    readableName: t("contacts", "Phone"),
    icon: "icon-phone",
    default: true,
    defaultValue: {
      value: "",
      type: [defaultProfileState, "VOICE"]
    },
    options: [
      { id: "HOME,VOICE", name: t("contacts", "Home") },
      { id: "HOME", name: t("contacts", "Home") },
      { id: "WORK,VOICE", name: t("contacts", "Work") },
      { id: "WORK", name: t("contacts", "Work") },
      { id: "CELL", name: t("contacts", "Mobile") },
      { id: "CELL,VOICE", name: t("contacts", "Mobile") },
      { id: "WORK,CELL", name: t("contacts", "Work mobile") },
      { id: "HOME,CELL", name: t("contacts", "Home mobile") },
      { id: "FAX", name: t("contacts", "Fax") },
      { id: "HOME,FAX", name: t("contacts", "Fax home") },
      { id: "WORK,FAX", name: t("contacts", "Fax work") },
      { id: "PAGER", name: t("contacts", "Pager") },
      { id: "VOICE", name: t("contacts", "Voice") },
      { id: "CAR", name: t("contacts", "Car") },
      { id: "WORK,PAGER", name: t("contacts", "Work pager") }
    ],
    primary: true
  },
  "x-managersname": {
    multiple: false,
    force: "select",
    // TRANSLATORS The supervisor of an employee
    readableName: t("contacts", "Line manager"),
    icon: "icon-manager",
    default: false,
    options({ contact, $store, selectType }) {
      const contacts2 = otherContacts({
        $store,
        self: contact
      });
      return Object.values(contacts2.reduce((prev, { key }) => {
        const contact2 = $store.getters.getContact(key);
        return {
          ...prev,
          [contact2.uid]: {
            id: contact2.key,
            name: contact2.displayName
          }
        };
      }, selectType ? { [selectType.value]: selectType } : {}));
    },
    primary: true
  },
  "x-socialprofile": {
    multiple: true,
    force: "text",
    icon: "icon-social",
    readableName: t("contacts", "Social network"),
    defaultValue: {
      value: "",
      type: ["facebook"]
    },
    options: [
      { id: "FACEBOOK", name: "Facebook", placeholder: "https://facebook.com/…" },
      { id: "GITHUB", name: "GitHub", placeholder: "https://github.com/…" },
      { id: "GOOGLEPLUS", name: "Google+", placeholder: "https://plus.google.com/…" },
      { id: "INSTAGRAM", name: "Instagram", placeholder: "https://instagram.com/…" },
      { id: "LINKEDIN", name: "LinkedIn", placeholder: "https://linkedin.com/…" },
      { id: "XING", name: "Xing", placeholder: "https://www.xing.com/profile/…" },
      { id: "PINTEREST", name: "Pinterest", placeholder: "https://pinterest.com/…" },
      { id: "QZONE", name: "QZone", placeholder: "https://qzone.com/…" },
      { id: "TUMBLR", name: "Tumblr", placeholder: "https://tumblr.com/…" },
      { id: "TWITTER", name: "Twitter", placeholder: "https://twitter.com/…" },
      { id: "WECHAT", name: "WeChat", placeholder: "https://wechat.com/…" },
      { id: "YOUTUBE", name: "YouTube", placeholder: "https://youtube.com/…" },
      { id: "MASTODON", name: "Mastodon", placeholder: "https://mastodon.social/…" },
      { id: "DIASPORA", name: "Diaspora", placeholder: "https://joindiaspora.com/…" },
      { id: "NEXTCLOUD", name: "Nextcloud", placeholder: "Link to profile page (https://nextcloud.example.com/…)" },
      { id: "OTHER", name: "Other", placeholder: "https://example.com/…" }
    ],
    primary: true
  },
  relationship: {
    readableName: t("contacts", "Relationship to you"),
    force: "select",
    icon: "icon-relation-to-you",
    options: [
      { id: "SPOUSE", name: t("contacts", "Spouse") },
      { id: "CHILD", name: t("contacts", "Child") },
      { id: "MOTHER", name: t("contacts", "Mother") },
      { id: "FATHER", name: t("contacts", "Father") },
      { id: "PARENT", name: t("contacts", "Parent") },
      { id: "BROTHER", name: t("contacts", "Brother") },
      { id: "SISTER", name: t("contacts", "Sister") },
      { id: "RELATIVE", name: t("contacts", "Relative") },
      { id: "FRIEND", name: t("contacts", "Friend") },
      { id: "COLLEAGUE", name: t("contacts", "Colleague") },
      // TRANSLATORS The supervisor of an employee
      { id: "MANAGER", name: t("contacts", "Line manager") },
      { id: "ASSISTANT", name: t("contacts", "Assistant") }
    ],
    primary: false
  },
  related: {
    multiple: true,
    readableName: t("contacts", "Related contacts"),
    icon: "icon-related-contact",
    defaultValue: {
      value: [""],
      type: ["CONTACT"]
    },
    options: [
      { id: "CONTACT", name: t("contacts", "Contact") },
      { id: "AGENT", name: t("contacts", "Agent") },
      { id: "EMERGENCY", name: t("contacts", "Emergency") },
      { id: "FRIEND", name: t("contacts", "Friend") },
      { id: "COLLEAGUE", name: t("contacts", "Colleague") },
      { id: "COWORKER", name: t("contacts", "Co-worker") },
      // TRANSLATORS The supervisor of an employee
      { id: "MANAGER", name: t("contacts", "Line manager") },
      { id: "ASSISTANT", name: t("contacts", "Assistant") },
      { id: "SPOUSE", name: t("contacts", "Spouse") },
      { id: "CHILD", name: t("contacts", "Child") },
      { id: "MOTHER", name: t("contacts", "Mother") },
      { id: "FATHER", name: t("contacts", "Father") },
      { id: "PARENT", name: t("contacts", "Parent") },
      { id: "BROTHER", name: t("contacts", "Brother") },
      { id: "SISTER", name: t("contacts", "Sister") },
      { id: "RELATIVE", name: t("contacts", "Relative") }
    ],
    primary: false
  },
  gender: {
    readableName: t("contacts", "Gender"),
    defaultValue: {
      // default to Female 🙋
      value: "F"
    },
    icon: "icon-gender",
    force: "select",
    options: [
      { id: "F", name: t("contacts", "Female") },
      { id: "M", name: t("contacts", "Male") },
      { id: "O", name: t("contacts", "Other") },
      { id: "N", name: t("contacts", "None") },
      { id: "U", name: t("contacts", "Unknown") }
    ],
    primary: false
  },
  tz: {
    readableName: t("contacts", "Time zone"),
    force: "select",
    icon: "icon-timezone",
    options: zones.map((zone) => ({
      id: zone,
      name: zone
    })),
    primary: false
  },
  lang: {
    readableName: t("contacts", "Spoken languages"),
    icon: "icon-spoken-lang",
    defaultValue: {
      value: "en"
    },
    multiple: true,
    primary: false
  }
};
if (locales$1.length > 0) {
  properties.lang.force = "select";
  properties.lang.options = locales$1;
  properties.lang.greedyMatch = function(value, options) {
    return options.find(({ id }) => {
      return id === value.split("-")[0];
    });
  };
}
const fieldOrder = [
  "title",
  "org",
  // primary fields
  "tel",
  "email",
  "adr",
  "bday",
  "url",
  "x-socialprofile",
  "x-managersname",
  // secondary fields
  "birthplace",
  "anniversary",
  "deathdate",
  "deathplace",
  "n",
  "nickname",
  "x-phonetic-first-name",
  "x-phonetic-last-name",
  "gender",
  "cloud",
  "impp",
  "geo",
  "note",
  "lang",
  "related",
  "relationship",
  "tz",
  "categories",
  "role"
];
const rfcProps = { properties, fieldOrder };
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset2 = 0) {
  return (byteToHex[arr[offset2 + 0]] + byteToHex[arr[offset2 + 1]] + byteToHex[arr[offset2 + 2]] + byteToHex[arr[offset2 + 3]] + "-" + byteToHex[arr[offset2 + 4]] + byteToHex[arr[offset2 + 5]] + "-" + byteToHex[arr[offset2 + 6]] + byteToHex[arr[offset2 + 7]] + "-" + byteToHex[arr[offset2 + 8]] + byteToHex[arr[offset2 + 9]] + "-" + byteToHex[arr[offset2 + 10]] + byteToHex[arr[offset2 + 11]] + byteToHex[arr[offset2 + 12]] + byteToHex[arr[offset2 + 13]] + byteToHex[arr[offset2 + 14]] + byteToHex[arr[offset2 + 15]]).toLowerCase();
}
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = { randomUUID };
function v4(options, buf, offset2) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
var b64toBlob$1 = { exports: {} };
(function(module2) {
  (function(root2, globalName, factory) {
    if (module2.exports) {
      module2.exports = factory();
      module2.exports.default = module2.exports;
    } else {
      window[globalName] = factory();
    }
  })(commonjsGlobal, "b64toBlob", function() {
    return function b64toBlob2(b64Data, contentType, sliceSize) {
      contentType = contentType || "";
      sliceSize = sliceSize || 512;
      var byteCharacters = atob(b64Data);
      var byteArrays = [];
      for (var offset2 = 0; offset2 < byteCharacters.length; offset2 += sliceSize) {
        var slice = byteCharacters.slice(offset2, offset2 + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      var blob = new Blob(byteArrays, { type: contentType });
      return blob;
    };
  });
})(b64toBlob$1);
var b64toBlobExports = b64toBlob$1.exports;
const b64toBlob = /* @__PURE__ */ getDefaultExportFromCjs(b64toBlobExports);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function applyMixin(Vue2) {
  var version = Number(Vue2.version.split(".")[0]);
  if (version >= 2) {
    Vue2.mixin({ beforeCreate: vuexInit });
  } else {
    var _init = Vue2.prototype._init;
    Vue2.prototype._init = function(options) {
      if (options === void 0) options = {};
      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
      _init.call(this, options);
    };
  }
  function vuexInit() {
    var options = this.$options;
    if (options.store) {
      this.$store = typeof options.store === "function" ? options.store() : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}
var target = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function devtoolPlugin(store2) {
  if (!devtoolHook) {
    return;
  }
  store2._devtoolHook = devtoolHook;
  devtoolHook.emit("vuex:init", store2);
  devtoolHook.on("vuex:travel-to-state", function(targetState) {
    store2.replaceState(targetState);
  });
  store2.subscribe(function(mutation, state2) {
    devtoolHook.emit("vuex:mutation", mutation, state2);
  }, { prepend: true });
  store2.subscribeAction(function(action, state2) {
    devtoolHook.emit("vuex:action", action, state2);
  }, { prepend: true });
}
function find(list, f) {
  return list.filter(f)[0];
}
function deepCopy(obj, cache) {
  if (cache === void 0) cache = [];
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  var hit = find(cache, function(c) {
    return c.original === obj;
  });
  if (hit) {
    return hit.copy;
  }
  var copy = Array.isArray(obj) ? [] : {};
  cache.push({
    original: obj,
    copy
  });
  Object.keys(obj).forEach(function(key) {
    copy[key] = deepCopy(obj[key], cache);
  });
  return copy;
}
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function(key) {
    return fn(obj[key], key);
  });
}
function isObject$1(obj) {
  return obj !== null && typeof obj === "object";
}
function isPromise(val) {
  return val && typeof val.then === "function";
}
function partial(fn, arg) {
  return function() {
    return fn(arg);
  };
}
var Module = function Module2(rawModule, runtime) {
  this.runtime = runtime;
  this._children = /* @__PURE__ */ Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
};
var prototypeAccessors = { namespaced: { configurable: true } };
prototypeAccessors.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Module.prototype.addChild = function addChild(key, module2) {
  this._children[key] = module2;
};
Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};
Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};
Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};
Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};
Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};
Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};
Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};
Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};
Object.defineProperties(Module.prototype, prototypeAccessors);
var ModuleCollection = function ModuleCollection2(rawRootModule) {
  this.register([], rawRootModule, false);
};
ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function(module2, key) {
    return module2.getChild(key);
  }, this.root);
};
ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module2 = this.root;
  return path.reduce(function(namespace, key) {
    module2 = module2.getChild(key);
    return namespace + (module2.namespaced ? key + "/" : "");
  }, "");
};
ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update2([], this.root, rawRootModule);
};
ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1$1 = this;
  if (runtime === void 0) runtime = true;
  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function(rawChildModule, key) {
      this$1$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};
ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);
  if (!child) {
    return;
  }
  if (!child.runtime) {
    return;
  }
  parent.removeChild(key);
};
ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (parent) {
    return parent.hasChild(key);
  }
  return false;
};
function update2(path, targetModule, newModule) {
  targetModule.update(newModule);
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        return;
      }
      update2(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}
var Vue;
var Store = function Store2(options) {
  var this$1$1 = this;
  if (options === void 0) options = {};
  if (!Vue && typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
  }
  var plugins = options.plugins;
  if (plugins === void 0) plugins = [];
  var strict = options.strict;
  if (strict === void 0) strict = false;
  this._committing = false;
  this._actions = /* @__PURE__ */ Object.create(null);
  this._actionSubscribers = [];
  this._mutations = /* @__PURE__ */ Object.create(null);
  this._wrappedGetters = /* @__PURE__ */ Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var store2 = this;
  var ref = this;
  var dispatch2 = ref.dispatch;
  var commit2 = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch2.call(store2, type, payload);
  };
  this.commit = function boundCommit(type, payload, options2) {
    return commit2.call(store2, type, payload, options2);
  };
  this.strict = strict;
  var state2 = this._modules.root.state;
  installModule(this, state2, [], this._modules.root);
  resetStoreVM(this, state2);
  plugins.forEach(function(plugin) {
    return plugin(this$1$1);
  });
  var useDevtools = options.devtools !== void 0 ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};
var prototypeAccessors$1 = { state: { configurable: true } };
prototypeAccessors$1.state.get = function() {
  return this._vm._data.$$state;
};
prototypeAccessors$1.state.set = function(v2) {
};
Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1$1 = this;
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var mutation = { type, payload };
  var entry = this._mutations[type];
  if (!entry) {
    return;
  }
  this._withCommit(function() {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.slice().forEach(function(sub) {
    return sub(mutation, this$1$1.state);
  });
};
Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1$1 = this;
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;
  var action = { type, payload };
  var entry = this._actions[type];
  if (!entry) {
    return;
  }
  try {
    this._actionSubscribers.slice().filter(function(sub) {
      return sub.before;
    }).forEach(function(sub) {
      return sub.before(action, this$1$1.state);
    });
  } catch (e) {
  }
  var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
    return handler(payload);
  })) : entry[0](payload);
  return new Promise(function(resolve2, reject) {
    result.then(function(res) {
      try {
        this$1$1._actionSubscribers.filter(function(sub) {
          return sub.after;
        }).forEach(function(sub) {
          return sub.after(action, this$1$1.state);
        });
      } catch (e) {
      }
      resolve2(res);
    }, function(error) {
      try {
        this$1$1._actionSubscribers.filter(function(sub) {
          return sub.error;
        }).forEach(function(sub) {
          return sub.error(action, this$1$1.state, error);
        });
      } catch (e) {
      }
      reject(error);
    });
  });
};
Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};
Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === "function" ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};
Store.prototype.watch = function watch2(getter, cb, options) {
  var this$1$1 = this;
  return this._watcherVM.$watch(function() {
    return getter(this$1$1.state, this$1$1.getters);
  }, cb, options);
};
Store.prototype.replaceState = function replaceState(state2) {
  var this$1$1 = this;
  this._withCommit(function() {
    this$1$1._vm._data.$$state = state2;
  });
};
Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};
  if (typeof path === "string") {
    path = [path];
  }
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  resetStoreVM(this, this.state);
};
Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1$1 = this;
  if (typeof path === "string") {
    path = [path];
  }
  this._modules.unregister(path);
  this._withCommit(function() {
    var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};
Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === "string") {
    path = [path];
  }
  return this._modules.isRegistered(path);
};
Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};
Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};
Object.defineProperties(Store.prototype, prototypeAccessors$1);
function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }
  return function() {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}
function resetStore(store2, hot) {
  store2._actions = /* @__PURE__ */ Object.create(null);
  store2._mutations = /* @__PURE__ */ Object.create(null);
  store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
  store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var state2 = store2.state;
  installModule(store2, state2, [], store2._modules.root, true);
  resetStoreVM(store2, state2, hot);
}
function resetStoreVM(store2, state2, hot) {
  var oldVm = store2._vm;
  store2.getters = {};
  store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var wrappedGetters = store2._wrappedGetters;
  var computed2 = {};
  forEachValue(wrappedGetters, function(fn, key) {
    computed2[key] = partial(fn, store2);
    Object.defineProperty(store2.getters, key, {
      get: function() {
        return store2._vm[key];
      },
      enumerable: true
      // for local getters
    });
  });
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store2._vm = new Vue({
    data: {
      $$state: state2
    },
    computed: computed2
  });
  Vue.config.silent = silent;
  if (store2.strict) {
    enableStrictMode(store2);
  }
  if (oldVm) {
    if (hot) {
      store2._withCommit(function() {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function() {
      return oldVm.$destroy();
    });
  }
}
function installModule(store2, rootState, path, module2, hot) {
  var isRoot = !path.length;
  var namespace = store2._modules.getNamespace(path);
  if (module2.namespaced) {
    if (store2._modulesNamespaceMap[namespace] && false) {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
    }
    store2._modulesNamespaceMap[namespace] = module2;
  }
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store2._withCommit(function() {
      Vue.set(parentState, moduleName, module2.state);
    });
  }
  var local = module2.context = makeLocalContext(store2, namespace, path);
  module2.forEachMutation(function(mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store2, namespacedType, mutation, local);
  });
  module2.forEachAction(function(action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store2, type, handler, local);
  });
  module2.forEachGetter(function(getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store2, namespacedType, getter, local);
  });
  module2.forEachChild(function(child, key) {
    installModule(store2, rootState, path.concat(key), child, hot);
  });
}
function makeLocalContext(store2, namespace, path) {
  var noNamespace = namespace === "";
  var local = {
    dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
      }
      return store2.dispatch(type, payload);
    },
    commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;
      if (!options || !options.root) {
        type = namespace + type;
      }
      store2.commit(type, payload, options);
    }
  };
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function() {
        return store2.getters;
      } : function() {
        return makeLocalGetters(store2, namespace);
      }
    },
    state: {
      get: function() {
        return getNestedState(store2.state, path);
      }
    }
  });
  return local;
}
function makeLocalGetters(store2, namespace) {
  if (!store2._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store2.getters).forEach(function(type) {
      if (type.slice(0, splitPos) !== namespace) {
        return;
      }
      var localType = type.slice(splitPos);
      Object.defineProperty(gettersProxy, localType, {
        get: function() {
          return store2.getters[type];
        },
        enumerable: true
      });
    });
    store2._makeLocalGettersCache[namespace] = gettersProxy;
  }
  return store2._makeLocalGettersCache[namespace];
}
function registerMutation(store2, type, handler, local) {
  var entry = store2._mutations[type] || (store2._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store2, local.state, payload);
  });
}
function registerAction(store2, type, handler, local) {
  var entry = store2._actions[type] || (store2._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store2, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store2.getters,
      rootState: store2.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store2._devtoolHook) {
      return res.catch(function(err) {
        store2._devtoolHook.emit("vuex:error", err);
        throw err;
      });
    } else {
      return res;
    }
  });
}
function registerGetter(store2, type, rawGetter, local) {
  if (store2._wrappedGetters[type]) {
    return;
  }
  store2._wrappedGetters[type] = function wrappedGetter(store22) {
    return rawGetter(
      local.state,
      // local state
      local.getters,
      // local getters
      store22.state,
      // root state
      store22.getters
      // root getters
    );
  };
}
function enableStrictMode(store2) {
  store2._vm.$watch(function() {
    return this._data.$$state;
  }, function() {
  }, { deep: true, sync: true });
}
function getNestedState(state2, path) {
  return path.reduce(function(state22, key) {
    return state22[key];
  }, state2);
}
function unifyObjectStyle(type, payload, options) {
  if (isObject$1(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }
  return { type, payload, options };
}
function install(_Vue) {
  if (Vue && _Vue === Vue) {
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}
var mapState = normalizeNamespace(function(namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function(ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedState() {
      var state2 = this.$store.state;
      var getters2 = this.$store.getters;
      if (namespace) {
        var module2 = getModuleByNamespace(this.$store, "mapState", namespace);
        if (!module2) {
          return;
        }
        state2 = module2.context.state;
        getters2 = module2.context.getters;
      }
      return typeof val === "function" ? val.call(this, state2, getters2) : state2[val];
    };
    res[key].vuex = true;
  });
  return res;
});
var mapMutations = normalizeNamespace(function(namespace, mutations2) {
  var res = {};
  normalizeMap(mutations2).forEach(function(ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedMutation() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      var commit2 = this.$store.commit;
      if (namespace) {
        var module2 = getModuleByNamespace(this.$store, "mapMutations", namespace);
        if (!module2) {
          return;
        }
        commit2 = module2.context.commit;
      }
      return typeof val === "function" ? val.apply(this, [commit2].concat(args)) : commit2.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});
var mapGetters = normalizeNamespace(function(namespace, getters2) {
  var res = {};
  normalizeMap(getters2).forEach(function(ref) {
    var key = ref.key;
    var val = ref.val;
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
        return;
      }
      return this.$store.getters[val];
    };
    res[key].vuex = true;
  });
  return res;
});
var mapActions = normalizeNamespace(function(namespace, actions2) {
  var res = {};
  normalizeMap(actions2).forEach(function(ref) {
    var key = ref.key;
    var val = ref.val;
    res[key] = function mappedAction() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      var dispatch2 = this.$store.dispatch;
      if (namespace) {
        var module2 = getModuleByNamespace(this.$store, "mapActions", namespace);
        if (!module2) {
          return;
        }
        dispatch2 = module2.context.dispatch;
      }
      return typeof val === "function" ? val.apply(this, [dispatch2].concat(args)) : dispatch2.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});
var createNamespacedHelpers = function(namespace) {
  return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace)
  };
};
function normalizeMap(map2) {
  if (!isValidMap(map2)) {
    return [];
  }
  return Array.isArray(map2) ? map2.map(function(key) {
    return { key, val: key };
  }) : Object.keys(map2).map(function(key) {
    return { key, val: map2[key] };
  });
}
function isValidMap(map2) {
  return Array.isArray(map2) || isObject$1(map2);
}
function normalizeNamespace(fn) {
  return function(namespace, map2) {
    if (typeof namespace !== "string") {
      map2 = namespace;
      namespace = "";
    } else if (namespace.charAt(namespace.length - 1) !== "/") {
      namespace += "/";
    }
    return fn(namespace, map2);
  };
}
function getModuleByNamespace(store2, helper, namespace) {
  var module2 = store2._modulesNamespaceMap[namespace];
  return module2;
}
function createLogger(ref) {
  if (ref === void 0) ref = {};
  var collapsed = ref.collapsed;
  if (collapsed === void 0) collapsed = true;
  var filter = ref.filter;
  if (filter === void 0) filter = function(mutation, stateBefore, stateAfter) {
    return true;
  };
  var transformer = ref.transformer;
  if (transformer === void 0) transformer = function(state2) {
    return state2;
  };
  var mutationTransformer = ref.mutationTransformer;
  if (mutationTransformer === void 0) mutationTransformer = function(mut) {
    return mut;
  };
  var actionFilter = ref.actionFilter;
  if (actionFilter === void 0) actionFilter = function(action, state2) {
    return true;
  };
  var actionTransformer = ref.actionTransformer;
  if (actionTransformer === void 0) actionTransformer = function(act) {
    return act;
  };
  var logMutations = ref.logMutations;
  if (logMutations === void 0) logMutations = true;
  var logActions = ref.logActions;
  if (logActions === void 0) logActions = true;
  var logger2 = ref.logger;
  if (logger2 === void 0) logger2 = console;
  return function(store2) {
    var prevState = deepCopy(store2.state);
    if (typeof logger2 === "undefined") {
      return;
    }
    if (logMutations) {
      store2.subscribe(function(mutation, state2) {
        var nextState = deepCopy(state2);
        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + mutation.type + formattedTime;
          startMessage(logger2, message, collapsed);
          logger2.log("%c prev state", "color: #9E9E9E; font-weight: bold", transformer(prevState));
          logger2.log("%c mutation", "color: #03A9F4; font-weight: bold", formattedMutation);
          logger2.log("%c next state", "color: #4CAF50; font-weight: bold", transformer(nextState));
          endMessage(logger2);
        }
        prevState = nextState;
      });
    }
    if (logActions) {
      store2.subscribeAction(function(action, state2) {
        if (actionFilter(action, state2)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + action.type + formattedTime;
          startMessage(logger2, message, collapsed);
          logger2.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
          endMessage(logger2);
        }
      });
    }
  };
}
function startMessage(logger2, message, collapsed) {
  var startMessage2 = collapsed ? logger2.groupCollapsed : logger2.group;
  try {
    startMessage2.call(logger2, message);
  } catch (e) {
    logger2.log(message);
  }
}
function endMessage(logger2) {
  try {
    logger2.groupEnd();
  } catch (e) {
    logger2.log("—— log end ——");
  }
}
function getFormattedTime() {
  var time = /* @__PURE__ */ new Date();
  return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
}
function repeat(str, times) {
  return new Array(times + 1).join(str);
}
function pad(num, maxLength) {
  return repeat("0", maxLength - num.toString().length) + num;
}
var index = {
  Store,
  install,
  version: "3.6.2",
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
};
let Node$1 = class Node2 {
  value;
  next;
  constructor(value) {
    this.value = value;
  }
};
class Queue {
  #head;
  #tail;
  #size;
  constructor() {
    this.clear();
  }
  enqueue(value) {
    const node = new Node$1(value);
    if (this.#head) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }
    this.#size++;
  }
  dequeue() {
    const current = this.#head;
    if (!current) {
      return;
    }
    this.#head = this.#head.next;
    this.#size--;
    return current.value;
  }
  peek() {
    if (!this.#head) {
      return;
    }
    return this.#head.value;
  }
  clear() {
    this.#head = void 0;
    this.#tail = void 0;
    this.#size = 0;
  }
  get size() {
    return this.#size;
  }
  *[Symbol.iterator]() {
    let current = this.#head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}
function pLimit(concurrency) {
  validateConcurrency(concurrency);
  const queue = new Queue();
  let activeCount = 0;
  const resumeNext = () => {
    if (activeCount < concurrency && queue.size > 0) {
      queue.dequeue()();
      activeCount++;
    }
  };
  const next = () => {
    activeCount--;
    resumeNext();
  };
  const run = async (function_, resolve2, arguments_) => {
    const result = (async () => function_(...arguments_))();
    resolve2(result);
    try {
      await result;
    } catch {
    }
    next();
  };
  const enqueue = (function_, resolve2, arguments_) => {
    new Promise((internalResolve) => {
      queue.enqueue(internalResolve);
    }).then(
      run.bind(void 0, function_, resolve2, arguments_)
    );
    (async () => {
      await Promise.resolve();
      if (activeCount < concurrency) {
        resumeNext();
      }
    })();
  };
  const generator = (function_, ...arguments_) => new Promise((resolve2) => {
    enqueue(function_, resolve2, arguments_);
  });
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.size
    },
    clearQueue: {
      value() {
        queue.clear();
      }
    },
    concurrency: {
      get: () => concurrency,
      set(newConcurrency) {
        validateConcurrency(newConcurrency);
        concurrency = newConcurrency;
        queueMicrotask(() => {
          while (activeCount < concurrency && queue.size > 0) {
            resumeNext();
          }
        });
      }
    }
  });
  return generator;
}
function validateConcurrency(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  }
}
class Parser {
  /**
   *
   */
  constructor() {
    this._parser = {};
    this._registerDefaultParsers();
  }
  /**
   * checks if a parser exists for a given property name
   *
   * @param {string} propertyName
   * @return {boolean}
   */
  canParse(propertyName) {
    return Object.prototype.hasOwnProperty.call(this._parser, propertyName);
  }
  /**
   * parses a single prop Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {*}
   */
  parse(document2, node, resolver) {
    const propertyName = "{".concat(node.namespaceURI, "}").concat(node.localName);
    if (!this.canParse(propertyName)) {
      throw new Error('Unable to parse unknown property "'.concat(propertyName, '"'));
    }
    return this._parser[propertyName](document2, node, resolver);
  }
  /**
   * registers a parser for propertyName
   *
   * @param {string} propertyName
   * @param {Function} parser
   */
  registerParser(propertyName, parser) {
    this._parser[propertyName] = parser;
  }
  /**
   * unregisters a parser for propertyName
   *
   * @param {string} propertyName
   */
  unregisterParser(propertyName) {
    delete this._parser[propertyName];
  }
  /**
   * registers the predefined parsers
   *
   * @private
   */
  _registerDefaultParsers() {
    this.registerParser("{DAV:}displayname", Parser.text);
    this.registerParser("{DAV:}creationdate", Parser.text);
    this.registerParser("{DAV:}getcontentlength", Parser.decInt);
    this.registerParser("{DAV:}getcontenttype", Parser.text);
    this.registerParser("{DAV:}getcontentlanguage", Parser.text);
    this.registerParser("{DAV:}getlastmodified", Parser.rfc1123Date);
    this.registerParser("{DAV:}getetag", Parser.text);
    this.registerParser("{DAV:}resourcetype", Parser.resourceType);
    this.registerParser("{DAV:}inherited-acl-set", Parser.hrefs);
    this.registerParser("{DAV:}group", Parser.href);
    this.registerParser("{DAV:}owner", Parser.href);
    this.registerParser("{DAV:}current-user-privilege-set", Parser.privileges);
    this.registerParser("{DAV:}principal-collection-set", Parser.hrefs);
    this.registerParser("{DAV:}principal-URL", Parser.href);
    this.registerParser("{DAV:}alternate-URI-set", Parser.hrefs);
    this.registerParser("{DAV:}group-member-set", Parser.hrefs);
    this.registerParser("{DAV:}group-membership", Parser.hrefs);
    this.registerParser("{DAV:}current-user-principal", Parser.currentUserPrincipal);
    this.registerParser("{DAV:}sync-token", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:carddav}address-data", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:carddav}addressbook-description", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:carddav}supported-address-data", Parser.addressDataTypes);
    this.registerParser("{urn:ietf:params:xml:ns:carddav}max-resource-size", Parser.decInt);
    this.registerParser("{urn:ietf:params:xml:ns:carddav}addressbook-home-set", Parser.hrefs);
    this.registerParser("{urn:ietf:params:xml:ns:carddav}principal-address", Parser.href);
    this.registerParser("{urn:ietf:params:xml:ns:carddav}supported-collation-set", Parser.supportedCardDAVCollations);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}calendar-data", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}calendar-home-set", Parser.hrefs);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}calendar-description", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}calendar-timezone", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}supported-calendar-component-set", Parser.calendarComps);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}supported-calendar-data", Parser.calendarDatas);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}max-resource-size", Parser.decInt);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}min-date-time", Parser.iCalendarTimestamp);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}max-date-time", Parser.iCalendarTimestamp);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}max-instances", Parser.decInt);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}max-attendees-per-instance", Parser.decInt);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}supported-collation-set", Parser.supportedCalDAVCollations);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}schedule-outbox-URL", Parser.href);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}schedule-inbox-URL", Parser.href);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}calendar-user-address-set", Parser.hrefs);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}calendar-user-type", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}schedule-calendar-transp", Parser.scheduleCalendarTransp);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}schedule-default-calendar-URL", Parser.href);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}schedule-tag", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}timezone-service-set", Parser.hrefs);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}calendar-timezone-id", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}calendar-availability", Parser.text);
    this.registerParser("{http://apple.com/ns/ical/}calendar-order", Parser.decInt);
    this.registerParser("{http://apple.com/ns/ical/}calendar-color", Parser.color);
    this.registerParser("{http://calendarserver.org/ns/}source", Parser.href);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}default-alarm-vevent-datetime", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}default-alarm-vevent-date", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}default-alarm-vtodo-datetime", Parser.text);
    this.registerParser("{urn:ietf:params:xml:ns:caldav}default-alarm-vtodo-date", Parser.text);
    this.registerParser("{http://calendarserver.org/ns/}getctag", Parser.text);
    this.registerParser("{http://calendarserver.org/ns/}calendar-proxy-read-for", Parser.hrefs);
    this.registerParser("{http://calendarserver.org/ns/}calendar-proxy-write-for", Parser.hrefs);
    this.registerParser("{http://calendarserver.org/ns/}allowed-sharing-modes", Parser.allowedSharingModes);
    this.registerParser("{http://calendarserver.org/ns/}shared-url", Parser.href);
    this.registerParser("{http://sabredav.org/ns}owner-principal", Parser.href);
    this.registerParser("{http://sabredav.org/ns}read-only", Parser.bool);
    this.registerParser("{http://calendarserver.org/ns/}pre-publish-url", Parser.href);
    this.registerParser("{http://calendarserver.org/ns/}publish-url", Parser.href);
    this.registerParser("{http://owncloud.org/ns}invite", Parser.ocInvite);
    this.registerParser("{http://owncloud.org/ns}calendar-enabled", Parser.bool);
    this.registerParser("{http://owncloud.org/ns}enabled", Parser.bool);
    this.registerParser("{http://owncloud.org/ns}read-only", Parser.bool);
    this.registerParser("{http://nextcloud.com/ns}owner-displayname", Parser.text);
    this.registerParser("{http://nextcloud.com/ns}deleted-at", Parser.iso8601DateTime);
    this.registerParser("{http://nextcloud.com/ns}calendar-uri", Parser.text);
    this.registerParser("{http://nextcloud.com/ns}has-photo", Parser.bool);
    this.registerParser("{http://nextcloud.com/ns}trash-bin-retention-duration", Parser.decInt);
    this.registerParser("{http://nextcloud.com/ns}language", Parser.text);
    this.registerParser("{http://nextcloud.com/ns}room-type", Parser.text);
    this.registerParser("{http://nextcloud.com/ns}room-seating-capacity", Parser.decInt);
    this.registerParser("{http://nextcloud.com/ns}room-building-address", Parser.text);
    this.registerParser("{http://nextcloud.com/ns}room-building-story", Parser.text);
    this.registerParser("{http://nextcloud.com/ns}room-building-room-number", Parser.text);
    this.registerParser("{http://nextcloud.com/ns}room-features", Parser.text);
    this.registerParser("{http://sabredav.org/ns}email-address", Parser.text);
  }
  /**
   * returns text value of Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {string}
   */
  static text(document2, node, resolver) {
    return document2.evaluate("string(.)", node, resolver, XPathResult.ANY_TYPE, null).stringValue;
  }
  /**
   * returns boolean value of Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {boolean}
   */
  static bool(document2, node, resolver) {
    return Parser.text(document2, node, resolver) === "1";
  }
  /**
   * returns decimal integer value of Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {number}
   */
  static decInt(document2, node, resolver) {
    return parseInt(Parser.text(document2, node, resolver), 10);
  }
  /**
   * returns Date value of Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {Date}
   */
  static rfc1123Date(document2, node, resolver) {
    const text = Parser.text(document2, node, resolver);
    return new Date(text);
  }
  /**
   * returns Date from an ISO8601 string
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {Date}
   */
  static iso8601DateTime(document2, node, resolver) {
    const text = Parser.text(document2, node, resolver);
    return new Date(text);
  }
  /**
   * returns Date value of Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {Date}
   */
  static iCalendarTimestamp(document2, node, resolver) {
    const text = Parser.text(document2, node, resolver);
    const year = parseInt(text.slice(0, 4), 10);
    const month = parseInt(text.slice(4, 6), 10) - 1;
    const date = parseInt(text.slice(6, 8), 10);
    const hour = parseInt(text.slice(9, 11), 10);
    const minute = parseInt(text.slice(11, 13), 10);
    const second = parseInt(text.slice(13, 15), 10);
    const dateObj = /* @__PURE__ */ new Date();
    dateObj.setUTCFullYear(year, month, date);
    dateObj.setUTCHours(hour, minute, second, 0);
    return dateObj;
  }
  /**
   * parses a {DAV:}resourcetype Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {string[]}
   */
  static resourceType(document2, node, resolver) {
    const result = [];
    const children = document2.evaluate("*", node, resolver, XPathResult.ANY_TYPE, null);
    let childNode;
    while ((childNode = children.iterateNext()) !== null) {
      const ns = document2.evaluate("namespace-uri(.)", childNode, resolver, XPathResult.ANY_TYPE, null).stringValue;
      const local = document2.evaluate("local-name(.)", childNode, resolver, XPathResult.ANY_TYPE, null).stringValue;
      result.push("{".concat(ns, "}").concat(local));
    }
    return result;
  }
  /**
   * parses a node with one href nodes as child
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {string}
   */
  static href(document2, node, resolver) {
    return document2.evaluate("string(d:href)", node, resolver, XPathResult.ANY_TYPE, null).stringValue;
  }
  /**
   * parses a node with multiple href nodes as children
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {string[]}
   */
  static hrefs(document2, node, resolver) {
    const result = [];
    const hrefs = document2.evaluate("d:href", node, resolver, XPathResult.ANY_TYPE, null);
    let hrefNode;
    while ((hrefNode = hrefs.iterateNext()) !== null) {
      result.push(document2.evaluate("string(.)", hrefNode, resolver, XPathResult.ANY_TYPE, null).stringValue);
    }
    return result;
  }
  /**
   * Parses a set of {DAV:}privilege Nodes
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {string[]}
   */
  static privileges(document2, node, resolver) {
    const result = [];
    const privileges = document2.evaluate("d:privilege/*", node, resolver, XPathResult.ANY_TYPE, null);
    let privilegeNode;
    while ((privilegeNode = privileges.iterateNext()) !== null) {
      const ns = document2.evaluate("namespace-uri(.)", privilegeNode, resolver, XPathResult.ANY_TYPE, null).stringValue;
      const local = document2.evaluate("local-name(.)", privilegeNode, resolver, XPathResult.ANY_TYPE, null).stringValue;
      result.push("{".concat(ns, "}").concat(local));
    }
    return result;
  }
  /**
   * parses the {DAV:}current-user-principal Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {object}
   * @property {string} type
   * @property {string} href
   */
  static currentUserPrincipal(document2, node, resolver) {
    const unauthenticatedCount = document2.evaluate("count(d:unauthenticated)", node, resolver, XPathResult.ANY_TYPE, null).numberValue;
    if (unauthenticatedCount !== 0) {
      return {
        type: "unauthenticated",
        href: null
      };
    } else {
      return {
        type: "href",
        href: Parser.href(...arguments)
      };
    }
  }
  /**
   * Parses a {urn:ietf:params:xml:ns:carddav}supported-address-data Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {*}
   */
  static addressDataTypes(document2, node, resolver) {
    const result = [];
    const addressDatas = document2.evaluate("cr:address-data-type", node, resolver, XPathResult.ANY_TYPE, null);
    let addressDataNode;
    while ((addressDataNode = addressDatas.iterateNext()) !== null) {
      result.push({
        "content-type": document2.evaluate("string(@content-type)", addressDataNode, resolver, XPathResult.ANY_TYPE, null).stringValue,
        version: document2.evaluate("string(@version)", addressDataNode, resolver, XPathResult.ANY_TYPE, null).stringValue
      });
    }
    return result;
  }
  /**
   * Parses a {urn:ietf:params:xml:ns:carddav}supported-collation-set Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {*}
   */
  static supportedCardDAVCollations(document2, node, resolver) {
    const result = [];
    const collations = document2.evaluate("cr:supported-collation", node, resolver, XPathResult.ANY_TYPE, null);
    let collationNode;
    while ((collationNode = collations.iterateNext()) !== null) {
      result.push(document2.evaluate("string(.)", collationNode, resolver, XPathResult.ANY_TYPE, null).stringValue);
    }
    return result;
  }
  /**
   * Parses a {urn:ietf:params:xml:ns:caldav}supported-collation-set Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {*}
   */
  static supportedCalDAVCollations(document2, node, resolver) {
    const result = [];
    const collations = document2.evaluate("cl:supported-collation", node, resolver, XPathResult.ANY_TYPE, null);
    let collationNode;
    while ((collationNode = collations.iterateNext()) !== null) {
      result.push(document2.evaluate("string(.)", collationNode, resolver, XPathResult.ANY_TYPE, null).stringValue);
    }
    return result;
  }
  /**
   * Parses a {urn:ietf:params:xml:ns:caldav}supported-calendar-component-set Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {string[]}
   */
  static calendarComps(document2, node, resolver) {
    const result = [];
    const comps = document2.evaluate("cl:comp", node, resolver, XPathResult.ANY_TYPE, null);
    let compNode;
    while ((compNode = comps.iterateNext()) !== null) {
      result.push(document2.evaluate("string(@name)", compNode, resolver, XPathResult.ANY_TYPE, null).stringValue);
    }
    return result;
  }
  /**
   * Parses a {urn:ietf:params:xml:ns:caldav}supported-calendar-data Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {*}
   */
  static calendarDatas(document2, node, resolver) {
    const result = [];
    const calendarDatas = document2.evaluate("cl:calendar-data", node, resolver, XPathResult.ANY_TYPE, null);
    let calendarDataNode;
    while ((calendarDataNode = calendarDatas.iterateNext()) !== null) {
      result.push({
        "content-type": document2.evaluate("string(@content-type)", calendarDataNode, resolver, XPathResult.ANY_TYPE, null).stringValue,
        version: document2.evaluate("string(@version)", calendarDataNode, resolver, XPathResult.ANY_TYPE, null).stringValue
      });
    }
    return result;
  }
  /**
   * Parses a {urn:ietf:params:xml:ns:caldav}schedule-calendar-transp Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {string}
   */
  static scheduleCalendarTransp(document2, node, resolver) {
    const children = document2.evaluate("cl:opaque | cl:transparent", node, resolver, XPathResult.ANY_TYPE, null);
    const childNode = children.iterateNext();
    if (childNode) {
      return document2.evaluate("local-name(.)", childNode, resolver, XPathResult.ANY_TYPE, null).stringValue;
    }
  }
  /**
   * Parses a {http://apple.com/ns/ical/}calendar-color Node
   * strips the alpha value of RGB values
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {string}
   */
  static color(document2, node, resolver) {
    const text = Parser.text(document2, node, resolver);
    if (text.length === 9) {
      return text.slice(0, 7);
    }
    return text;
  }
  /**
   * Parses a {http://calendarserver.org/ns/}allowed-sharing-modes Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {string[]}
   */
  static allowedSharingModes(document2, node, resolver) {
    const result = [];
    const children = document2.evaluate("cs:can-be-shared | cs:can-be-published", node, resolver, XPathResult.ANY_TYPE, null);
    let childNode;
    while ((childNode = children.iterateNext()) !== null) {
      const ns = document2.evaluate("namespace-uri(.)", childNode, resolver, XPathResult.ANY_TYPE, null).stringValue;
      const local = document2.evaluate("local-name(.)", childNode, resolver, XPathResult.ANY_TYPE, null).stringValue;
      result.push("{".concat(ns, "}").concat(local));
    }
    return result;
  }
  /**
   * Parses a {http://owncloud.org/ns}invite Node
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {*}
   */
  static ocInvite(document2, node, resolver) {
    const result = [];
    const users = document2.evaluate("oc:user", node, resolver, XPathResult.ANY_TYPE, null);
    let userNode;
    while ((userNode = users.iterateNext()) !== null) {
      result.push({
        href: Parser.href(document2, userNode, resolver),
        "common-name": document2.evaluate("string(oc:common-name)", userNode, resolver, XPathResult.ANY_TYPE, null).stringValue,
        "invite-accepted": document2.evaluate("count(oc:invite-accepted)", userNode, resolver, XPathResult.ANY_TYPE, null).numberValue === 1,
        access: Parser.ocAccess(document2, userNode, resolver)
      });
    }
    return result;
  }
  /**
   * Parses a set of {http://owncloud.org/ns}access Nodes
   *
   * @param {Document} document
   * @param {Node} node
   * @param {XPathNSResolver} resolver
   * @return {string[]}
   */
  static ocAccess(document2, node, resolver) {
    const result = [];
    const privileges = document2.evaluate("oc:access/*", node, resolver, XPathResult.ANY_TYPE, null);
    let privilegeNode;
    while ((privilegeNode = privileges.iterateNext()) !== null) {
      const ns = document2.evaluate("namespace-uri(.)", privilegeNode, resolver, XPathResult.ANY_TYPE, null).stringValue;
      const local = document2.evaluate("local-name(.)", privilegeNode, resolver, XPathResult.ANY_TYPE, null).stringValue;
      result.push("{".concat(ns, "}").concat(local));
    }
    return result;
  }
}
const DAV = "DAV:";
const IETF_CALDAV = "urn:ietf:params:xml:ns:caldav";
const IETF_CARDDAV = "urn:ietf:params:xml:ns:carddav";
const OWNCLOUD = "http://owncloud.org/ns";
const NEXTCLOUD = "http://nextcloud.com/ns";
const APPLE = "http://apple.com/ns/ical/";
const CALENDARSERVER = "http://calendarserver.org/ns/";
const SABREDAV = "http://sabredav.org/ns";
const NS_MAP = {
  d: DAV,
  cl: IETF_CALDAV,
  cr: IETF_CARDDAV,
  oc: OWNCLOUD,
  nc: NEXTCLOUD,
  aapl: APPLE,
  cs: CALENDARSERVER,
  sd: SABREDAV
};
function resolve(short) {
  return NS_MAP[short] || null;
}
const namespaceUtility = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  APPLE,
  CALENDARSERVER,
  DAV,
  IETF_CALDAV,
  IETF_CARDDAV,
  NEXTCLOUD,
  NS_MAP,
  OWNCLOUD,
  SABREDAV,
  resolve
}, Symbol.toStringTag, { value: "Module" }));
const serializer = new XMLSerializer();
let prefixMap = {};
function getRootSkeleton() {
  if (arguments.length === 0) {
    return [{}, null];
  }
  const skeleton = {
    name: arguments[0],
    children: []
  };
  let childrenWrapper = skeleton.children;
  const args = Array.prototype.slice.call(arguments, 1);
  args.forEach(function(argument) {
    const level = {
      name: argument,
      children: []
    };
    childrenWrapper.push(level);
    childrenWrapper = level.children;
  });
  return [skeleton, childrenWrapper];
}
function serialize(json) {
  json = json || {};
  if (typeof json !== "object" || !Object.prototype.hasOwnProperty.call(json, "name")) {
    return "";
  }
  const root2 = document.implementation.createDocument("", "", null);
  xmlify(root2, root2, json);
  return serializer.serializeToString(root2);
}
function xmlify(xmlDoc, parent, json) {
  const [ns, localName] = json.name;
  const element = xmlDoc.createElementNS(ns, getPrefixedNameForNamespace(ns, localName));
  json.attributes = json.attributes || [];
  json.attributes.forEach((attribute) => {
    if (attribute.length === 2) {
      const [name, value] = attribute;
      element.setAttribute(name, value);
    } else {
      const [namespace, localName2, value] = attribute;
      element.setAttributeNS(namespace, localName2, value);
    }
  });
  if (json.value) {
    element.textContent = json.value;
  } else if (json.children) {
    json.children.forEach((child) => {
      xmlify(xmlDoc, element, child);
    });
  }
  parent.appendChild(element);
}
function getPrefixedNameForNamespace(ns, localName) {
  if (!Object.prototype.hasOwnProperty.call(prefixMap, ns)) {
    prefixMap[ns] = "x" + Object.keys(prefixMap).length;
  }
  return prefixMap[ns] + ":" + localName;
}
class AttachError extends Error {
  /**
   *
   * @param {object} attach
   */
  constructor(attach) {
    super();
    Object.assign(this, attach);
  }
}
class NetworkRequestAbortedError extends AttachError {
}
class NetworkRequestError extends AttachError {
}
class NetworkRequestHttpError extends AttachError {
}
class NetworkRequestServerError extends NetworkRequestHttpError {
}
class NetworkRequestClientError extends NetworkRequestHttpError {
}
class Request {
  /**
   * Creates a new Request object
   *
   * @param {string} baseUrl - root url of DAV server, use OC.remote('dav')
   * @param {Parser} parser - instance of Parser class
   * @param {Function} xhrProvider - Function that returns new XMLHttpRequest objects
   */
  constructor(baseUrl, parser, xhrProvider2 = () => new XMLHttpRequest()) {
    this.baseUrl = baseUrl;
    this.parser = parser;
    this.xhrProvider = xhrProvider2;
  }
  /**
   * sends a GET request
   *
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async get(url, headers = {}, body = null, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    return this.request("GET", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a PATCH request
   *
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async patch(url, headers, body, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    return this.request("PATCH", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a POST request
   *
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async post(url, headers, body, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    return this.request("POST", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a PUT request
   *
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async put(url, headers, body, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    return this.request("PUT", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a DELETE request
   *
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async delete(url, headers = {}, body = null, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    return this.request("DELETE", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a COPY request
   * https://tools.ietf.org/html/rfc4918#section-9.8
   *
   * @param {string} url - URL to do the request on
   * @param {string} destination - place to copy the object/collection to
   * @param {number | string} depth - 0 = copy collection without content, Infinity = copy collection with content
   * @param {boolean} overwrite - whether or not to overwrite destination if existing
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async copy(url, destination, depth = 0, overwrite = false, headers = {}, body = null, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    headers.Destination = destination;
    headers.Depth = depth;
    headers.Overwrite = overwrite ? "T" : "F";
    return this.request("COPY", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a MOVE request
   * https://tools.ietf.org/html/rfc4918#section-9.9
   *
   * @param {string} url - URL to do the request on
   * @param {string} destination - place to move the object/collection to
   * @param {boolean} overwrite - whether or not to overwrite destination if existing
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async move(url, destination, overwrite = false, headers = {}, body = null, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    headers.Destination = destination;
    headers.Depth = "Infinity";
    headers.Overwrite = overwrite ? "T" : "F";
    return this.request("MOVE", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a LOCK request
   * https://tools.ietf.org/html/rfc4918#section-9.10
   *
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async lock(url, headers = {}, body = null, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    return this.request("LOCK", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends an UNLOCK request
   * https://tools.ietf.org/html/rfc4918#section-9.11
   *
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async unlock(url, headers = {}, body = null, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    return this.request("UNLOCK", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a PROPFIND request
   * https://tools.ietf.org/html/rfc4918#section-9.1
   *
   * @param {string} url - URL to do the request on
   * @param {string[][]} properties - list of properties to search for, formatted as [namespace, localName]
   * @param {number | string} depth - Depth header to send
   * @param {object} headers - additional HTTP headers to send
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async propFind(url, properties2, depth = 0, headers = {}, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    headers.Depth = depth;
    const [skeleton, dPropChildren] = getRootSkeleton([DAV, "propfind"], [DAV, "prop"]);
    dPropChildren.push(...properties2.map((p) => ({ name: p })));
    const body = serialize(skeleton);
    return this.request("PROPFIND", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a PROPPATCH request
   * https://tools.ietf.org/html/rfc4918#section-9.2
   *
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async propPatch(url, headers, body, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    return this.request("PROPPATCH", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a MKCOL request
   * https://tools.ietf.org/html/rfc4918#section-9.3
   * https://tools.ietf.org/html/rfc5689
   *
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async mkCol(url, headers, body, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    return this.request("MKCOL", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends a REPORT request
   * https://tools.ietf.org/html/rfc3253#section-3.6
   *
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async report(url, headers, body, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    return this.request("REPORT", url, headers, body, beforeRequestHandler, afterRequestHandler);
  }
  /**
   * sends generic request
   *
   * @param {string} method - HTTP Method name
   * @param {string} url - URL to do the request on
   * @param {object} headers - additional HTTP headers to send
   * @param {string} body - request body
   * @param {Function} beforeRequestHandler - custom function to be called before the request is made
   * @param {Function} afterRequestHandler - custom function to be called after the request was made
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async request(method, url, headers, body, beforeRequestHandler = () => null, afterRequestHandler = () => null) {
    const xhr = this.xhrProvider();
    const assignHeaders = Object.assign({}, getDefaultHeaders(), headers);
    xhr.open(method, this.absoluteUrl(url), true);
    for (const header in assignHeaders) {
      xhr.setRequestHeader(header, assignHeaders[header]);
    }
    beforeRequestHandler(xhr);
    if (body === null || body === void 0) {
      xhr.send();
    } else {
      xhr.send(body);
    }
    return new Promise((resolve2, reject) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return;
        }
        afterRequestHandler(xhr);
        let responseBody = xhr.response;
        if (!wasRequestSuccessful(xhr.status)) {
          if (xhr.status >= 400 && xhr.status < 500) {
            reject(new NetworkRequestClientError({
              body: responseBody,
              status: xhr.status,
              xhr
            }));
            return;
          }
          if (xhr.status >= 500 && xhr.status < 600) {
            reject(new NetworkRequestServerError({
              body: responseBody,
              status: xhr.status,
              xhr
            }));
            return;
          }
          reject(new NetworkRequestHttpError({
            body: responseBody,
            status: xhr.status,
            xhr
          }));
          return;
        }
        if (xhr.status === 207) {
          responseBody = this._parseMultiStatusResponse(responseBody);
          if (parseInt(assignHeaders.Depth, 10) === 0 && method === "PROPFIND") {
            responseBody = responseBody[Object.keys(responseBody)[0]];
          }
        }
        resolve2({
          body: responseBody,
          status: xhr.status,
          xhr
        });
      };
      xhr.onerror = () => reject(new NetworkRequestError({
        body: null,
        status: -1,
        xhr
      }));
      xhr.onabort = () => reject(new NetworkRequestAbortedError({
        body: null,
        status: -1,
        xhr
      }));
    });
  }
  /**
   * returns name of file / folder of a url
   *
   * @param url
   * @params {string} url
   * @return {string}
   */
  filename(url) {
    let pathname = this.pathname(url);
    if (pathname.slice(-1) === "/") {
      pathname = pathname.slice(0, -1);
    }
    const slashPos = pathname.lastIndexOf("/");
    return pathname.slice(slashPos);
  }
  /**
   * returns pathname for a URL
   *
   * @param url
   * @params {string} url
   * @return {string}
   */
  pathname(url) {
    const urlObject = new URL(url, this.baseUrl);
    return urlObject.pathname;
  }
  /**
   * returns absolute url
   *
   * @param {string} url
   * @return {string}
   */
  absoluteUrl(url) {
    const urlObject = new URL(url, this.baseUrl);
    return urlObject.href;
  }
  /**
   * parses a multi status response (207), sorts them by path
   * and drops all unsuccessful responses
   *
   * @param {string} body
   * @return {object}
   * @private
   */
  _parseMultiStatusResponse(body) {
    const result = {};
    const domParser = new DOMParser();
    const document2 = domParser.parseFromString(body, "application/xml");
    const responses = document2.evaluate("/d:multistatus/d:response", document2, resolve, XPathResult.ANY_TYPE, null);
    let responseNode;
    while ((responseNode = responses.iterateNext()) !== null) {
      const href = document2.evaluate("string(d:href)", responseNode, resolve, XPathResult.ANY_TYPE, null).stringValue;
      const parsedProperties = {};
      const propStats = document2.evaluate("d:propstat", responseNode, resolve, XPathResult.ANY_TYPE, null);
      let propStatNode;
      while ((propStatNode = propStats.iterateNext()) !== null) {
        const status = document2.evaluate("string(d:status)", propStatNode, resolve, XPathResult.ANY_TYPE, null).stringValue;
        if (!wasRequestSuccessful(getStatusCodeFromString(status))) {
          continue;
        }
        const props = document2.evaluate("d:prop/*", propStatNode, resolve, XPathResult.ANY_TYPE, null);
        let propNode;
        while ((propNode = props.iterateNext()) !== null) {
          if (this.parser.canParse("{".concat(propNode.namespaceURI, "}").concat(propNode.localName))) {
            parsedProperties["{".concat(propNode.namespaceURI, "}").concat(propNode.localName)] = this.parser.parse(document2, propNode, resolve);
          }
        }
      }
      result[href] = parsedProperties;
    }
    return result;
  }
}
function wasRequestSuccessful(status) {
  return status >= 200 && status < 300;
}
function getStatusCodeFromString(status) {
  return parseInt(status.split(" ")[1], 10);
}
function getDefaultHeaders() {
  return {
    Depth: "0",
    "Content-Type": "application/xml; charset=utf-8"
  };
}
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v2 = c === "x" ? r : r & 3 | 8;
    return v2.toString(16).toUpperCase();
  });
}
function uid(prefix, suffix) {
  prefix = prefix || "";
  suffix = suffix || "";
  if (prefix !== "") {
    prefix += "-";
  }
  if (suffix !== "") {
    suffix = "." + suffix;
  }
  return prefix + uuidv4() + suffix;
}
function uri(start, isAvailable) {
  start = start || "";
  let uri2 = start.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  if (uri2 === "") {
    uri2 = "-";
  }
  if (isAvailable(uri2)) {
    return uri2;
  }
  if (uri2.indexOf("-") === -1) {
    uri2 = uri2 + "-1";
    if (isAvailable(uri2)) {
      return uri2;
    }
  }
  do {
    const positionLastDash = uri2.lastIndexOf("-");
    const firstPart = uri2.slice(0, positionLastDash);
    let lastPart = uri2.slice(positionLastDash + 1);
    if (lastPart.match(/^\d+$/)) {
      lastPart = parseInt(lastPart);
      lastPart++;
      uri2 = firstPart + "-" + lastPart;
    } else {
      uri2 = uri2 + "-1";
    }
  } while (isAvailable(uri2) === false);
  return uri2;
}
class DAVEventListener {
  constructor() {
    this._eventListeners = {};
  }
  /**
   * adds an event listener
   *
   * @param {string} type
   * @param {Function} listener
   * @param {object} options
   */
  addEventListener(type, listener, options = null) {
    this._eventListeners[type] = this._eventListeners[type] || [];
    this._eventListeners[type].push({ listener, options });
  }
  /**
   * removes an event listener
   *
   * @param {string} type
   * @param {Function} dListener
   */
  removeEventListener(type, dListener) {
    if (!this._eventListeners[type]) {
      return;
    }
    const index2 = this._eventListeners[type].findIndex(({ listener }) => listener === dListener);
    if (index2 === -1) {
      return;
    }
    this._eventListeners[type].splice(index2, 1);
  }
  /**
   * dispatch event on object
   *
   * @param {string} type
   * @param {DAVEvent} event
   */
  dispatchEvent(type, event) {
    if (!this._eventListeners[type]) {
      return;
    }
    const listenersToCall = [];
    const listenersToCallAndRemove = [];
    this._eventListeners[type].forEach(({ listener, options }) => {
      if (options && options.once) {
        listenersToCallAndRemove.push(listener);
      } else {
        listenersToCall.push(listener);
      }
    });
    listenersToCallAndRemove.forEach((listener) => {
      this.removeEventListener(type, listener);
      listener(event);
    });
    listenersToCall.forEach((listener) => {
      listener(event);
    });
  }
}
function debugFactory(context) {
  return (...args) => {
    if (debugFactory.enabled) {
      console.debug(context, ...args);
    }
  };
}
debugFactory.enabled = false;
function davCollectionPropSet(props) {
  const xmlified = [];
  Object.entries(props).forEach(([key, value]) => {
    switch (key) {
      case "{DAV:}displayname":
        xmlified.push({
          name: [DAV, "displayname"],
          value
        });
        break;
    }
  });
  return xmlified;
}
const debug$8 = debugFactory("DavObject");
class DavObject extends DAVEventListener {
  /**
   * @param {DavCollection} parent - The parent collection this DavObject is a child of
   * @param {Request} request - The request object initialized by DavClient
   * @param {string} url - Full url of this DavObject
   * @param {object} props - Properties including etag, content-type, etc.
   * @param {boolean} isPartial - Are we dealing with the complete or just partial addressbook / calendar data
   */
  constructor(parent, request, url, props, isPartial = false) {
    super();
    Object.assign(this, {
      // parameters
      _parent: parent,
      _request: request,
      _url: url,
      _props: props,
      // housekeeping
      _isPartial: isPartial,
      _isDirty: false
    });
    this._exposeProperty("etag", DAV, "getetag", true);
    this._exposeProperty("contenttype", DAV, "getcontenttype");
    Object.defineProperty(this, "url", {
      get: () => this._url
    });
  }
  /**
   * gets unfiltered data for this object
   *
   * @param {boolean} forceReFetch Always refetch data, even if not partial
   * @return {Promise<void>}
   */
  async fetchCompleteData(forceReFetch = false) {
    if (!forceReFetch && !this.isPartial()) {
      return;
    }
    const request = await this._request.propFind(this._url, this.constructor.getPropFindList(), 0);
    this._props = request.body;
    this._isDirty = false;
    this._isPartial = false;
  }
  /**
   * copies a DavObject to a different DavCollection
   * @param {DavCollection} collection
   * @param {boolean} overwrite
   * @param headers
   * @return {Promise<DavObject>} Promise that resolves to the copied DavObject
   */
  async copy(collection, overwrite = false, headers = {}) {
    debug$8("copying ".concat(this.url, " from ").concat(this._parent.url, " to ").concat(collection.url));
    if (this._parent === collection) {
      throw new Error("Copying an object to the collection it's already part of is not supported");
    }
    if (!this._parent.isSameCollectionTypeAs(collection)) {
      throw new Error("Copying an object to a collection of a different type is not supported");
    }
    if (!collection.isWriteable()) {
      throw new Error("Can not copy object into read-only destination collection");
    }
    const uri2 = this.url.split("/").splice(-1, 1)[0];
    const destination = collection.url + uri2;
    await this._request.copy(this.url, destination, 0, overwrite, headers);
    return collection.find(uri2);
  }
  /**
   * moves a DavObject to a different DavCollection
   * @param {DavCollection} collection
   * @param {boolean} overwrite
   * @param headers
   * @return {Promise<void>}
   */
  async move(collection, overwrite = false, headers = {}) {
    debug$8("moving ".concat(this.url, " from ").concat(this._parent.url, " to ").concat(collection.url));
    if (this._parent === collection) {
      throw new Error("Moving an object to the collection it's already part of is not supported");
    }
    if (!this._parent.isSameCollectionTypeAs(collection)) {
      throw new Error("Moving an object to a collection of a different type is not supported");
    }
    if (!collection.isWriteable()) {
      throw new Error("Can not move object into read-only destination collection");
    }
    const uri2 = this.url.split("/").splice(-1, 1)[0];
    const destination = collection.url + uri2;
    await this._request.move(this.url, destination, overwrite, headers);
    this._parent = collection;
    this._url = destination;
  }
  /**
   * updates the DavObject on the server
   * @return {Promise<void>}
   */
  async update() {
    if (this.isPartial() || !this.isDirty() || !this.data) {
      return;
    }
    const headers = {};
    if (this.contenttype) {
      headers["Content-Type"] = "".concat(this.contenttype, "; charset=utf-8");
    }
    if (this.etag) {
      headers["If-Match"] = this.etag;
    }
    return this._request.put(this.url, headers, this.data).then((res) => {
      this._isDirty = false;
      this._props["{DAV:}getetag"] = res.xhr.getResponseHeader("etag");
    }).catch((ex) => {
      this._isDirty = true;
      if (ex instanceof NetworkRequestClientError && ex.status === 412) {
        this._isPartial = true;
      }
      throw ex;
    });
  }
  /**
   * deletes the DavObject on the server
   *
   * @param headers
   * @return {Promise<void>}
   */
  async delete(headers = {}) {
    return this._request.delete(this.url, headers);
  }
  /**
   * returns whether the data in this DavObject is the result of a partial retrieval
   *
   * @return {boolean}
   */
  isPartial() {
    return this._isPartial;
  }
  /**
   * returns whether the data in this DavObject contains unsynced changes
   *
   * @return {boolean}
   */
  isDirty() {
    return this._isDirty;
  }
  /**
   * @protected
   * @param {string} localName
   * @param {string} xmlNamespace
   * @param {string} xmlName
   * @param {boolean} mutable
   * @return void
   */
  _exposeProperty(localName, xmlNamespace, xmlName, mutable = false) {
    if (mutable) {
      Object.defineProperty(this, localName, {
        get: () => this._props["{".concat(xmlNamespace, "}").concat(xmlName)],
        set: (val) => {
          this._isDirty = true;
          this._props["{".concat(xmlNamespace, "}").concat(xmlName)] = val;
        }
      });
    } else {
      Object.defineProperty(this, localName, {
        get: () => this._props["{".concat(xmlNamespace, "}").concat(xmlName)]
      });
    }
  }
  /**
   * A list of all property names that should be included
   * in propfind requests that may include this object
   *
   * @return {string[][]}
   */
  static getPropFindList() {
    return [
      [DAV, "getcontenttype"],
      [DAV, "getetag"],
      [DAV, "resourcetype"]
    ];
  }
}
const debug$7 = debugFactory("DavCollection");
class DavCollection extends DAVEventListener {
  /**
   * @param {object} parent
   * @param {Request} request
   * @param {string} url
   * @param {object} props
   */
  constructor(parent, request, url, props) {
    super();
    if (url.slice(-1) !== "/") {
      url += "/";
    }
    Object.assign(this, {
      // parameters
      _parent: parent,
      _request: request,
      _url: url,
      _props: props,
      // constructors
      _collectionFactoryMapper: {},
      _objectFactoryMapper: {},
      // house keeping
      _updatedProperties: [],
      _childrenNames: [],
      // parsers / factories
      _propFindList: [],
      _propSetFactory: []
    });
    this._registerPropSetFactory(davCollectionPropSet);
    this._exposeProperty("displayname", DAV, "displayname", true);
    this._exposeProperty("owner", DAV, "owner");
    this._exposeProperty("resourcetype", DAV, "resourcetype");
    this._exposeProperty("syncToken", DAV, "sync-token");
    this._exposeProperty("currentUserPrivilegeSet", DAV, "current-user-privilege-set");
    Object.defineProperty(this, "url", {
      get: () => this._url
    });
    this._propFindList.push(...DavObject.getPropFindList());
    this._propFindList.push(...DavCollection.getPropFindList());
  }
  /**
   * finds all children of a collection
   *
   * @return {Promise<DavObject[]|DavCollection[]>}
   */
  async findAll() {
    const response = await this._request.propFind(this._url, this._propFindList, 1);
    return this._handleMultiStatusResponse(response, false);
  }
  /**
   * finds all children of a collection filtered by filter
   *
   * @param {Function} filter
   * @return {Promise<DavObject[]|DavCollection[]>}
   */
  async findAllByFilter(filter) {
    const all = await this.findAll();
    return all.filter(filter);
  }
  /**
   * find one object by its uri
   *
   * @param {string} uri
   * @return {Promise<DavObject|DavCollection>}
   */
  async find(uri2) {
    const response = await this._request.propFind(this._url + uri2, this._propFindList, 0);
    response.body = { [this._url + uri2]: response.body };
    return this._handleMultiStatusResponse(response, false)[0];
  }
  /**
   * creates a new webdav collection
   * https://tools.ietf.org/html/rfc5689
   *
   * You usually don't want to call this method directly
   * but instead use:
   * - AddressBookHome->createAddressBookCollection
   * - CalendarHome->createCalendarCollection
   * - CalendarHome->createSubscribedCollection
   *
   * @param {string} name
   * @param {?Array} props
   * @return {Promise<DavCollection>}
   */
  async createCollection(name, props = null) {
    debug$7("creating a collection");
    if (!props) {
      props = [{
        name: [DAV, "resourcetype"],
        children: [{
          name: [DAV, "collection"]
        }]
      }];
    }
    const [skeleton, dPropChildren] = getRootSkeleton(
      [DAV, "mkcol"],
      [DAV, "set"],
      [DAV, "prop"]
    );
    dPropChildren.push(...props);
    const uri2 = this._getAvailableNameFromToken(name);
    const data = serialize(skeleton);
    await this._request.mkCol(this.url + uri2, {}, data);
    return this.find(uri2 + "/");
  }
  /**
   * creates a new webdav object inside this collection
   *
   * You usually don't want to call this method directly
   * but instead use:
   * - AddressBook->createVCard
   * - Calendar->createVObject
   *
   * @param {string} name
   * @param {object} headers
   * @param {string} data
   * @return {Promise<DavObject>}
   */
  async createObject(name, headers, data) {
    debug$7("creating an object");
    await this._request.put(this.url + name, headers, data);
    return this.find(name);
  }
  /**
   * sends a PropPatch request to update the collections' properties
   * The request is only made if properties actually changed
   *
   * @return {Promise<void>}
   */
  async update() {
    if (this._updatedProperties.length === 0) {
      return;
    }
    const properties2 = {};
    this._updatedProperties.forEach((updatedProperty) => {
      properties2[updatedProperty] = this._props[updatedProperty];
    });
    const propSet = this._propSetFactory.reduce((arr, p) => [...arr, ...p(properties2)], []);
    const [skeleton, dPropSet] = getRootSkeleton(
      [DAV, "propertyupdate"],
      [DAV, "set"],
      [DAV, "prop"]
    );
    dPropSet.push(...propSet);
    const body = serialize(skeleton);
    await this._request.propPatch(this._url, {}, body);
  }
  /**
   * deletes the DavCollection on the server
   *
   * @param {object} headers - additional HTTP headers to send
   * @return {Promise<void>}
   */
  async delete(headers = {}) {
    await this._request.delete(this._url, headers);
  }
  /**
   *
   * @return {boolean}
   */
  isReadable() {
    return this.currentUserPrivilegeSet.includes("{DAV:}read");
  }
  /**
   *
   * @return {boolean}
   */
  isWriteable() {
    return this.currentUserPrivilegeSet.includes("{DAV:}write");
  }
  /**
   * checks whether this is of the same type as another collection
   * @param {DavCollection} collection
   */
  isSameCollectionTypeAs(collection) {
    const ownResourceType = this.resourcetype;
    const foreignResourceType = collection.resourcetype;
    const ownDiff = ownResourceType.find((r) => foreignResourceType.indexOf(r) === -1);
    const foreignDiff = foreignResourceType.find((r) => ownResourceType.indexOf(r) === -1);
    return ownDiff === void 0 && foreignDiff === void 0;
  }
  /**
   * @protected
   * @param {string} identifier
   * @param {Function} factory
   * @return void
   */
  _registerCollectionFactory(identifier, factory) {
    this._collectionFactoryMapper[identifier] = factory;
    if (typeof factory.getPropFindList === "function") {
      this._propFindList.push(...factory.getPropFindList());
    }
  }
  /**
   * @protected
   * @param {string} identifier
   * @param {Function} factory
   * @return void
   */
  _registerObjectFactory(identifier, factory) {
    this._objectFactoryMapper[identifier] = factory;
    if (typeof factory.getPropFindList === "function") {
      this._propFindList.push(...factory.getPropFindList());
    }
  }
  /**
   * @protected
   * @param factory
   * @return void
   */
  _registerPropSetFactory(factory) {
    this._propSetFactory.push(factory);
  }
  /**
   * @protected
   * @param {string} localName
   * @param {string} xmlNamespace
   * @param {string} xmlName
   * @param {boolean} mutable
   * @return void
   */
  _exposeProperty(localName, xmlNamespace, xmlName, mutable = false) {
    if (mutable) {
      Object.defineProperty(this, localName, {
        get: () => this._props["{".concat(xmlNamespace, "}").concat(xmlName)],
        set: (val) => {
          this._props["{".concat(xmlNamespace, "}").concat(xmlName)] = val;
          if (this._updatedProperties.indexOf("{".concat(xmlNamespace, "}").concat(xmlName)) === -1) {
            this._updatedProperties.push("{".concat(xmlNamespace, "}").concat(xmlName));
          }
        }
      });
    } else {
      Object.defineProperty(this, localName, {
        get: () => this._props["{".concat(xmlNamespace, "}").concat(xmlName)]
      });
    }
  }
  /**
   * @protected
   * @param {string} token
   * @return {string}
   */
  _getAvailableNameFromToken(token2) {
    return uri(token2, (name) => {
      return this._childrenNames.indexOf(this._url + name) === -1 && this._childrenNames.indexOf(this._url + name + "/") === -1;
    });
  }
  /**
   * get updated properties for this collection from server
   * @protected
   * @return {object}
   */
  async _updatePropsFromServer() {
    const response = await this._request.propFind(this.url, this.constructor.getPropFindList());
    this._props = response.body;
  }
  /**
   * @param {object} response
   * @param {boolean} isPartial
   * @return {DavObject[]|DavCollection[]}
   * @protected
   */
  _handleMultiStatusResponse(response, isPartial = false) {
    const index2 = [];
    const children = [];
    Object.entries(response.body).forEach(([path, props]) => {
      if (path === this._url || path + "/" === this.url) {
        return;
      }
      index2.push(path);
      const url = this._request.pathname(path);
      if ((!props["{DAV:}resourcetype"] || props["{DAV:}resourcetype"].length === 0) && props["{DAV:}getcontenttype"]) {
        debug$7("".concat(path, " was identified as a file"));
        const contentType = props["{DAV:}getcontenttype"].split(";")[0];
        if (!this._objectFactoryMapper[contentType]) {
          debug$7("No constructor for content-type ".concat(contentType, " (").concat(path, ") registered, treating as generic object"));
          children.push(new DavObject(this, this._request, url, props));
          return;
        }
        children.push(new this._objectFactoryMapper[contentType](this, this._request, url, props, isPartial));
      } else {
        debug$7("".concat(path, " was identified as a collection"));
        const collectionType = props["{DAV:}resourcetype"].find((r) => {
          return r !== "{".concat(DAV, "}collection");
        });
        if (!collectionType) {
          debug$7("Collection-type of ".concat(path, " was not specified, treating as generic collection"));
          children.push(new DavCollection(this, this._request, url, props));
          return;
        }
        if (!this._collectionFactoryMapper[collectionType]) {
          debug$7("No constructor for collection-type ".concat(collectionType, " (").concat(path, ") registered, treating as generic collection"));
          children.push(new DavCollection(this, this._request, url, props));
          return;
        }
        children.push(new this._collectionFactoryMapper[collectionType](this, this._request, url, props));
      }
    });
    this._childrenNames.push(...index2);
    return children;
  }
  /**
   * A list of all property names that should be included
   * in propfind requests that may include this collection
   *
   * @return {string[][]}
   */
  static getPropFindList() {
    return [
      [DAV, "displayname"],
      [DAV, "owner"],
      [DAV, "resourcetype"],
      [DAV, "sync-token"],
      [DAV, "current-user-privilege-set"]
    ];
  }
}
const debug$6 = debugFactory("DavCollectionPublishable");
function davCollectionPublishable(Base) {
  return class extends Base {
    /**
     * @inheritDoc
     */
    constructor(...args) {
      super(...args);
      super._exposeProperty("publishURL", CALENDARSERVER, "publish-url");
    }
    /**
     * publishes the DavCollection
     *
     * @return {Promise<void>}
     */
    async publish() {
      debug$6("Publishing ".concat(this.url));
      const [skeleton] = getRootSkeleton(
        [CALENDARSERVER, "publish-calendar"]
      );
      const xml = serialize(skeleton);
      await this._request.post(this._url, { "Content-Type": "application/xml; charset=utf-8" }, xml);
      await this._updatePropsFromServer();
    }
    /**
     * unpublishes the DavCollection
     *
     * @return {Promise<void>}
     */
    async unpublish() {
      debug$6("Unpublishing ".concat(this.url));
      const [skeleton] = getRootSkeleton(
        [CALENDARSERVER, "unpublish-calendar"]
      );
      const xml = serialize(skeleton);
      await this._request.post(this._url, { "Content-Type": "application/xml; charset=utf-8" }, xml);
      delete this._props["{http://calendarserver.org/ns/}publish-url"];
    }
    /**
     * @inheritDoc
     */
    static getPropFindList() {
      return super.getPropFindList().concat([
        [CALENDARSERVER, "publish-url"]
      ]);
    }
  };
}
const debug$5 = debugFactory("DavCollectionShareable");
function davCollectionShareable(Base) {
  return class extends Base {
    /**
     * @inheritDoc
     */
    constructor(...args) {
      super(...args);
      super._exposeProperty("shares", OWNCLOUD, "invite");
      super._exposeProperty("allowedSharingModes", CALENDARSERVER, "allowed-sharing-modes");
    }
    /**
     * shares a DavCollection
     *
     * @param {string} principalScheme
     * @param {boolean} writeable
     * @param {string} summary
     * @return {Promise<void>}
     */
    async share(principalScheme, writeable = false, summary = "") {
      debug$5("Sharing ".concat(this.url, " with ").concat(principalScheme));
      const [skeleton, setProp] = getRootSkeleton(
        [OWNCLOUD, "share"],
        [OWNCLOUD, "set"]
      );
      setProp.push({
        name: [DAV, "href"],
        value: principalScheme
      });
      if (writeable) {
        setProp.push({
          name: [OWNCLOUD, "read-write"]
        });
      }
      if (summary !== "") {
        setProp.push({
          name: [OWNCLOUD, "summary"],
          value: summary
        });
      }
      const xml = serialize(skeleton);
      return this._request.post(this._url, { "Content-Type": "application/xml; charset=utf-8" }, xml).then(() => {
        const index2 = this.shares.findIndex((e) => e.href === principalScheme);
        if (index2 === -1) {
          this.shares.push({
            href: principalScheme,
            access: [writeable ? "{http://owncloud.org/ns}read-write" : "{http://owncloud.org/ns}read"],
            "common-name": null,
            "invite-accepted": true
          });
        } else {
          this.shares[index2].access = [writeable ? "{http://owncloud.org/ns}read-write" : "{http://owncloud.org/ns}read"];
        }
      });
    }
    /**
     * unshares a DAVCollection
     *
     * @param {string} principalScheme
     * @return {Promise<void>}
     */
    async unshare(principalScheme) {
      debug$5("Unsharing ".concat(this.url, " with ").concat(principalScheme));
      const [skeleton, oSetChildren] = getRootSkeleton(
        [OWNCLOUD, "share"],
        [OWNCLOUD, "remove"]
      );
      oSetChildren.push({
        name: [DAV, "href"],
        value: principalScheme
      });
      const xml = serialize(skeleton);
      return this._request.post(this._url, { "Content-Type": "application/xml; charset=utf-8" }, xml).then(() => {
        const index2 = this.shares.findIndex((e) => e.href === principalScheme);
        if (index2 === -1) {
          return;
        }
        this.shares.splice(index2, 1);
      });
    }
    /**
     * checks whether a collection is shareable
     *
     * @return {boolean}
     */
    isShareable() {
      if (!Array.isArray(this.allowedSharingModes)) {
        return false;
      }
      return this.allowedSharingModes.includes("{".concat(CALENDARSERVER, "}can-be-shared"));
    }
    /**
     * checks whether a collection is publishable
     *
     * @return {boolean}
     */
    isPublishable() {
      if (!Array.isArray(this.allowedSharingModes)) {
        return false;
      }
      return this.allowedSharingModes.includes("{".concat(CALENDARSERVER, "}can-be-published"));
    }
    /**
     * @inheritDoc
     */
    static getPropFindList() {
      return super.getPropFindList().concat([
        [OWNCLOUD, "invite"],
        [CALENDARSERVER, "allowed-sharing-modes"]
      ]);
    }
  };
}
class VObject extends DavObject {
  /**
   * Creates a VObject that is supposed to store calendar-data
   * as specified in RFC 5545.
   *
   * https://tools.ietf.org/html/rfc5545
   *
   * @inheritDoc
   */
  constructor(...args) {
    super(...args);
    super._exposeProperty("data", IETF_CALDAV, "calendar-data", true);
  }
  /**
   * @inheritDoc
   */
  static getPropFindList() {
    return super.getPropFindList().concat([
      [IETF_CALDAV, "calendar-data"]
    ]);
  }
}
function calendarPropSet$1(props) {
  const xmlified = [];
  Object.entries(props).forEach(([key, value]) => {
    switch (key) {
      case "{http://apple.com/ns/ical/}calendar-order":
        xmlified.push({
          name: [APPLE, "calendar-order"],
          value: value.toString()
        });
        break;
      case "{http://apple.com/ns/ical/}calendar-color":
        xmlified.push({
          name: [APPLE, "calendar-color"],
          value
        });
        break;
      case "{http://calendarserver.org/ns/}source":
        xmlified.push({
          name: [CALENDARSERVER, "source"],
          children: [{
            name: [DAV, "href"],
            value
          }]
        });
        break;
      case "{urn:ietf:params:xml:ns:caldav}calendar-description":
        xmlified.push({
          name: [IETF_CALDAV, "calendar-description"],
          value
        });
        break;
      case "{urn:ietf:params:xml:ns:caldav}calendar-timezone":
        xmlified.push({
          name: [IETF_CALDAV, "calendar-timezone"],
          value
        });
        break;
      case "{http://owncloud.org/ns}calendar-enabled":
        xmlified.push({
          name: [OWNCLOUD, "calendar-enabled"],
          value: value ? "1" : "0"
        });
        break;
      case "{urn:ietf:params:xml:ns:caldav}schedule-calendar-transp":
        xmlified.push({
          name: [IETF_CALDAV, "schedule-calendar-transp"],
          children: [{
            name: [IETF_CALDAV, value]
          }]
        });
        break;
    }
  });
  return xmlified;
}
const debug$4 = debugFactory("Calendar");
class Calendar extends davCollectionPublishable(davCollectionShareable(DavCollection)) {
  /**
   * @inheritDoc
   */
  constructor(...args) {
    super(...args);
    super._registerObjectFactory("text/calendar", VObject);
    super._registerPropSetFactory(calendarPropSet$1);
    super._exposeProperty("color", APPLE, "calendar-color", true);
    super._exposeProperty("enabled", OWNCLOUD, "calendar-enabled", true);
    super._exposeProperty("order", APPLE, "calendar-order", true);
    super._exposeProperty("timezone", IETF_CALDAV, "calendar-timezone", true);
    super._exposeProperty("components", IETF_CALDAV, "supported-calendar-component-set");
    super._exposeProperty("transparency", IETF_CALDAV, "schedule-calendar-transp", true);
  }
  /**
   * finds all VObjects in this calendar
   *
   * @return {Promise<VObject[]>}
   */
  async findAllVObjects() {
    return super.findAllByFilter((elm) => elm instanceof VObject);
  }
  /**
   * find all VObjects filtered by type
   *
   * @param {string} type
   * @return {Promise<VObject[]>}
   */
  async findByType(type) {
    return this.calendarQuery([{
      name: [IETF_CALDAV, "comp-filter"],
      attributes: [
        ["name", "VCALENDAR"]
      ],
      children: [{
        name: [IETF_CALDAV, "comp-filter"],
        attributes: [
          ["name", type]
        ]
      }]
    }]);
  }
  /**
   * find all VObjects in a time-range filtered by type
   *
   * @param {number} type
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<VObject[]>}
   */
  async findByTypeInTimeRange(type, from2, to2) {
    return this.calendarQuery([{
      name: [IETF_CALDAV, "comp-filter"],
      attributes: [
        ["name", "VCALENDAR"]
      ],
      children: [{
        name: [IETF_CALDAV, "comp-filter"],
        attributes: [
          ["name", type]
        ],
        children: [{
          name: [IETF_CALDAV, "time-range"],
          attributes: [
            ["start", Calendar._getICalendarDateTimeFromDateObject(from2)],
            ["end", Calendar._getICalendarDateTimeFromDateObject(to2)]
          ]
        }]
      }]
    }]);
  }
  /**
   * create a VObject inside this calendar
   *
   * @param data
   * @return {Promise<VObject>}
   */
  async createVObject(data) {
    const name = uid("", "ics");
    const headers = {
      "Content-Type": "text/calendar; charset=utf-8"
    };
    return super.createObject(name, headers, data);
  }
  /**
   * sends a calendar query as defined in
   * https://tools.ietf.org/html/rfc4791#section-7.8
   *
   * @param {object[]} filter
   * @param {object[]} prop
   * @param {string} timezone
   * @return {Promise<VObject[]>}
   */
  async calendarQuery(filter, prop = null, timezone = null) {
    debug$4("sending an calendar-query request");
    const [skeleton] = getRootSkeleton(
      [IETF_CALDAV, "calendar-query"]
    );
    if (!prop) {
      skeleton.children.push({
        name: [DAV, "prop"],
        children: this._propFindList.map((p) => ({ name: p }))
      });
    } else {
      skeleton.children.push({
        name: [DAV, "prop"],
        children: prop
      });
    }
    if (filter) {
      skeleton.children.push({
        name: [IETF_CALDAV, "filter"],
        children: filter
      });
    }
    if (timezone) {
      skeleton.children.push({
        name: [IETF_CALDAV, "timezone"],
        value: timezone
      });
    }
    const headers = {
      Depth: "1"
    };
    const body = serialize(skeleton);
    const response = await this._request.report(this.url, headers, body);
    return super._handleMultiStatusResponse(response, Calendar._isRetrievalPartial(prop));
  }
  /**
   * sends a calendar multiget query as defined in
   * https://tools.ietf.org/html/rfc4791#section-7.9
   *
   * @param {string[]} hrefs
   * @param {object[]} prop
   * @return {Promise<VObject[]>}
   */
  async calendarMultiget(hrefs = [], prop) {
    debug$4("sending an calendar-multiget request");
    if (hrefs.length === 0) {
      return [];
    }
    const [skeleton] = getRootSkeleton(
      [IETF_CALDAV, "calendar-multiget"]
    );
    if (!prop) {
      skeleton.children.push({
        name: [DAV, "prop"],
        children: this._propFindList.map((p) => ({ name: p }))
      });
    } else {
      skeleton.children.push({
        name: [DAV, "prop"],
        children: prop
      });
    }
    hrefs.forEach((href) => {
      skeleton.children.push({
        name: [DAV, "href"],
        value: href
      });
    });
    const headers = {
      Depth: "1"
    };
    const body = serialize(skeleton);
    const response = await this._request.report(this.url, headers, body);
    return super._handleMultiStatusResponse(response, Calendar._isRetrievalPartial(prop));
  }
  /**
   * sends a calendar free-busy-query as defined in
   * https://tools.ietf.org/html/rfc4791#section-7.10
   *
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<string>}
   */
  async freeBusyQuery(from2, to2) {
  }
  /**
   * @inheritDoc
   */
  static getPropFindList() {
    return super.getPropFindList().concat([
      [APPLE, "calendar-order"],
      [APPLE, "calendar-color"],
      [CALENDARSERVER, "getctag"],
      [IETF_CALDAV, "calendar-description"],
      [IETF_CALDAV, "calendar-timezone"],
      [IETF_CALDAV, "supported-calendar-component-set"],
      [IETF_CALDAV, "supported-calendar-data"],
      [IETF_CALDAV, "max-resource-size"],
      [IETF_CALDAV, "min-date-time"],
      [IETF_CALDAV, "max-date-time"],
      [IETF_CALDAV, "max-instances"],
      [IETF_CALDAV, "max-attendees-per-instance"],
      [IETF_CALDAV, "supported-collation-set"],
      [IETF_CALDAV, "calendar-free-busy-set"],
      [IETF_CALDAV, "schedule-calendar-transp"],
      [IETF_CALDAV, "schedule-default-calendar-URL"],
      [OWNCLOUD, "calendar-enabled"],
      [NEXTCLOUD, "owner-displayname"],
      [NEXTCLOUD, "trash-bin-retention-duration"],
      [NEXTCLOUD, "deleted-at"]
    ]);
  }
  /**
   * checks if the prop part of a report requested partial data
   *
   * @param {object[]} prop
   * @return {boolean}
   * @private
   */
  static _isRetrievalPartial(prop) {
    if (!prop) {
      return false;
    }
    const addressBookDataProperty = prop.find((p) => {
      return p.name[0] === IETF_CALDAV && p.name[1] === "calendar-data";
    });
    if (!addressBookDataProperty) {
      return false;
    }
    return !!addressBookDataProperty.children;
  }
  /**
   * creates an iCalendar formatted DATE-TIME string from a date object
   *
   * @param {Date} date
   * @return {string}
   * @private
   */
  static _getICalendarDateTimeFromDateObject(date) {
    return [
      date.getUTCFullYear(),
      ("0" + (date.getUTCMonth() + 1)).slice(-2),
      ("0" + date.getUTCDate()).slice(-2),
      "T",
      ("0" + date.getUTCHours()).slice(-2),
      ("0" + date.getUTCMinutes()).slice(-2),
      ("0" + date.getUTCSeconds()).slice(-2),
      "Z"
    ].join("");
  }
}
class Subscription extends Calendar {
  /**
   * @inheritDoc
   */
  constructor(...args) {
    super(...args);
    super._exposeProperty("source", CALENDARSERVER, "source", true);
    super._exposeProperty("refreshRate", APPLE, "refreshrate", true);
    super._exposeProperty("stripTodos", CALENDARSERVER, "subscribed-strip-todos", true);
    super._exposeProperty("stripAlarms", CALENDARSERVER, "subscribed-strip-alarms", true);
    super._exposeProperty("stripAttachments", CALENDARSERVER, "subscribed-strip-attachments", true);
  }
  /**
   * @inheritDoc
   */
  static getPropFindList() {
    return super.getPropFindList().concat([
      [CALENDARSERVER, "source"],
      [APPLE, "refreshrate"],
      [CALENDARSERVER, "subscribed-strip-todos"],
      [CALENDARSERVER, "subscribed-strip-alarms"],
      [CALENDARSERVER, "subscribed-strip-attachments"]
    ]);
  }
}
function calendarPropSet(props) {
  const xmlified = [];
  Object.entries(props).forEach(([key, value]) => {
    switch (key) {
      case "{urn:ietf:params:xml:ns:caldav}calendar-availability":
        xmlified.push({
          name: [IETF_CALDAV, "calendar-availability"],
          value: value.toString()
        });
        break;
    }
  });
  return xmlified;
}
class ScheduleInbox extends Calendar {
  /**
   * @inheritDoc
   */
  constructor(...args) {
    super(...args);
    super._registerPropSetFactory(calendarPropSet);
    super._exposeProperty("availability", IETF_CALDAV, "calendar-availability", true);
  }
  /**
   * @inheritDoc
   */
  static getPropFindList() {
    return super.getPropFindList().concat([
      [IETF_CALDAV, "calendar-availability"]
    ]);
  }
}
class ScheduleOutbox extends DavCollection {
  /**
   * Sends a free-busy-request for the scheduling outbox
   * The data is required to be a valid iTIP data.
   * For an example, see https://tools.ietf.org/html/rfc6638#appendix-B.5
   *
   * @param {string} data iTIP with VFREEBUSY component and METHOD:REQUEST
   * @return {Promise<string[]>}
   */
  async freeBusyRequest(data) {
    const result = {};
    const response = await this._request.post(this.url, {
      "Content-Type": 'text/calendar; charset="utf-8"'
    }, data);
    const domParser = new DOMParser();
    const document2 = domParser.parseFromString(response.body, "application/xml");
    const responses = document2.evaluate("/cl:schedule-response/cl:response", document2, resolve, XPathResult.ANY_TYPE, null);
    let responseNode;
    while ((responseNode = responses.iterateNext()) !== null) {
      const recipient = document2.evaluate("string(cl:recipient/d:href)", responseNode, resolve, XPathResult.ANY_TYPE, null).stringValue;
      const status = document2.evaluate("string(cl:request-status)", responseNode, resolve, XPathResult.ANY_TYPE, null).stringValue;
      const calendarData = document2.evaluate("string(cl:calendar-data)", responseNode, resolve, XPathResult.ANY_TYPE, null).stringValue;
      const success = /^2.\d(;.+)?$/.test(status);
      result[recipient] = {
        calendarData,
        status,
        success
      };
    }
    return result;
  }
}
class CalendarTrashBin extends DavCollection {
  /**
   * @inheritDoc
   */
  constructor(...args) {
    super(...args);
    super._registerObjectFactory("text/calendar", VObject);
    super._exposeProperty("retentionDuration", NEXTCLOUD, "trash-bin-retention-duration");
  }
  async findDeletedObjects() {
    const [skeleton] = getRootSkeleton(
      [IETF_CALDAV, "calendar-query"]
    );
    skeleton.children.push({
      name: [DAV, "prop"],
      children: VObject.getPropFindList().map((p) => ({ name: p })).concat([
        { name: [NEXTCLOUD, "calendar-uri"] },
        { name: [NEXTCLOUD, "deleted-at"] }
      ])
    });
    skeleton.children.push({
      name: [IETF_CALDAV, "filter"],
      children: [{
        name: [IETF_CALDAV, "comp-filter"],
        attributes: [
          ["name", "VCALENDAR"]
        ],
        children: [{
          name: [IETF_CALDAV, "comp-filter"],
          attributes: [
            ["name", "VEVENT"]
          ],
          children: []
        }]
      }]
    });
    const headers = {
      Depth: "1"
    };
    const body = serialize(skeleton);
    const response = await this._request.report(this._url + "objects", headers, body);
    return super._handleMultiStatusResponse(response);
  }
  async restore(uri2) {
    await this._request.move(uri2, this._url + "restore/file");
  }
}
class DeletedCalendar extends Calendar {
}
const debug$3 = debugFactory("CalendarHome");
class CalendarHome extends DavCollection {
  /**
   * @inheritDoc
   */
  constructor(...args) {
    super(...args);
    super._registerCollectionFactory("{" + IETF_CALDAV + "}calendar", Calendar);
    super._registerCollectionFactory("{" + NEXTCLOUD + "}deleted-calendar", DeletedCalendar);
    super._registerCollectionFactory("{" + CALENDARSERVER + "}subscribed", Subscription);
    super._registerCollectionFactory("{" + IETF_CALDAV + "}schedule-inbox", ScheduleInbox);
    super._registerCollectionFactory("{" + IETF_CALDAV + "}schedule-outbox", ScheduleOutbox);
    super._registerCollectionFactory("{" + NEXTCLOUD + "}trash-bin", CalendarTrashBin);
  }
  /**
   * Finds all CalDAV-specific collections in this calendar home
   *
   * @return {Promise<(Calendar|Subscription|ScheduleInbox|ScheduleOutbox|CalendarTrashBin|DeletedCalendar)[]>}
   */
  async findAllCalDAVCollections() {
    return super.findAllByFilter((elm) => elm instanceof Calendar || elm instanceof CalendarTrashBin || elm instanceof Subscription || elm instanceof ScheduleInbox || elm instanceof ScheduleOutbox || elm instanceof DeletedCalendar);
  }
  /**
   * Finds all CalDAV-specific collections in this calendar home, grouped by type
   *
   * @return {Promise<{
  		calendars: Calendar[],
  		deletedCalendars: DeletedCalendar[],
  		trashBins: CalendarTrashBin[],
  		subscriptions: Subscription[],
  		scheduleInboxes: ScheduleInbox[],
  		scheduleOutboxes: ScheduleOutbox[],
  	}>}
   */
  async findAllCalDAVCollectionsGrouped() {
    const collections = await super.findAll();
    return {
      calendars: collections.filter((c) => c instanceof Calendar && !(c instanceof ScheduleInbox) && !(c instanceof Subscription) && !(c instanceof DeletedCalendar)),
      deletedCalendars: collections.filter((c) => c instanceof DeletedCalendar),
      trashBins: collections.filter((c) => c instanceof CalendarTrashBin),
      subscriptions: collections.filter((c) => c instanceof Subscription),
      scheduleInboxes: collections.filter((c) => c instanceof ScheduleInbox),
      scheduleOutboxes: collections.filter((c) => c instanceof ScheduleOutbox)
    };
  }
  /**
   * finds all calendars in this calendar home
   *
   * @return {Promise<Calendar[]>}
   */
  async findAllCalendars() {
    return super.findAllByFilter((elm) => elm instanceof Calendar && !(elm instanceof ScheduleInbox) && !(elm instanceof Subscription) && !(elm instanceof DeletedCalendar));
  }
  /**
   * Finds all deleted calendars in this calendar home
   *
   * @return {Promise<DeletedCalendar[]>}
   */
  async findAllDeletedCalendars() {
    return super.findAllByFilter((elm) => elm instanceof DeletedCalendar);
  }
  /**
   * finds all subscriptions in this calendar home
   *
   * @return {Promise<Subscription[]>}
   */
  async findAllSubscriptions() {
    return super.findAllByFilter((elm) => elm instanceof Subscription);
  }
  /**
   * finds all schedule inboxes in this calendar home
   *
   * @return {Promise<ScheduleInbox[]>}
   */
  async findAllScheduleInboxes() {
    return super.findAllByFilter((elm) => elm instanceof ScheduleInbox);
  }
  /**
   * finds all schedule outboxes in this calendar home
   *
   * @return {Promise<ScheduleOutbox[]>}
   */
  async findAllScheduleOutboxes() {
    return super.findAllByFilter((elm) => elm instanceof ScheduleOutbox);
  }
  /**
   * creates a new calendar collection
   *
   * @param {string} displayname
   * @param {string} color
   * @param {string[]} supportedComponentSet
   * @param {number} order
   * @param {string=} timezone
   * @return {Promise<Calendar>}
   */
  async createCalendarCollection(displayname, color, supportedComponentSet = null, order = null, timezone = null) {
    debug$3("creating a calendar collection");
    const props = [{
      name: [DAV, "resourcetype"],
      children: [{
        name: [DAV, "collection"]
      }, {
        name: [IETF_CALDAV, "calendar"]
      }]
    }, {
      name: [DAV, "displayname"],
      value: displayname
    }, {
      name: [APPLE, "calendar-color"],
      value: color
    }, {
      name: [OWNCLOUD, "calendar-enabled"],
      value: "1"
    }];
    if (timezone) {
      props.push({
        name: [IETF_CALDAV, "calendar-timezone"],
        value: timezone
      });
    }
    if (supportedComponentSet) {
      props.push({
        name: [IETF_CALDAV, "supported-calendar-component-set"],
        children: supportedComponentSet.map((supportedComponent) => {
          return {
            name: [IETF_CALDAV, "comp"],
            attributes: [
              ["name", supportedComponent]
            ]
          };
        })
      });
    }
    if (order) {
      props.push({
        name: [APPLE, "calendar-order"],
        value: order
      });
    }
    const name = super._getAvailableNameFromToken(displayname);
    return super.createCollection(name, props);
  }
  /**
   * creates a new subscription
   *
   * @param {string} displayname
   * @param {string} color
   * @param {string} source
   * @param {number} order
   * @return {Promise<Subscription>}
   */
  async createSubscribedCollection(displayname, color, source, order = null) {
    debug$3("creating a subscribed collection");
    const props = [{
      name: [DAV, "resourcetype"],
      children: [{
        name: [DAV, "collection"]
      }, {
        name: [CALENDARSERVER, "subscribed"]
      }]
    }, {
      name: [DAV, "displayname"],
      value: displayname
    }, {
      name: [APPLE, "calendar-color"],
      value: color
    }, {
      name: [OWNCLOUD, "calendar-enabled"],
      value: "1"
    }, {
      name: [CALENDARSERVER, "source"],
      children: [{
        name: [DAV, "href"],
        value: source
      }]
    }];
    if (order) {
      props.push({
        name: [APPLE, "calendar-order"],
        value: order
      });
    }
    const name = super._getAvailableNameFromToken(displayname);
    return super.createCollection(name, props);
  }
  /**
   * Search all calendars the user has access to
   * This method makes use of Nextcloud's custom
   * calendar Search API
   *
   * Documentation about that API can be found at: ...
   *
   * @return {Promise<VObject[]>}
   */
  async search() {
  }
  /**
   * enables the birthday calendar for the Calendar Home that belongs to this user
   *
   * @return {Promise<void>}
   */
  async enableBirthdayCalendar() {
    const [skeleton] = getRootSkeleton(
      [NEXTCLOUD, "enable-birthday-calendar"]
    );
    const xmlBody = serialize(skeleton);
    await this._request.post(this.url, {}, xmlBody);
  }
}
function addressBookPropSet(props) {
  const xmlified = [];
  Object.entries(props).forEach(([key, value]) => {
    switch (key) {
      case "{urn:ietf:params:xml:ns:carddav}addressbook-description":
        xmlified.push({
          name: [IETF_CARDDAV, "addressbook-description"],
          value
        });
        break;
      case "{http://owncloud.org/ns}enabled":
        xmlified.push({
          name: [OWNCLOUD, "enabled"],
          value: value ? "1" : "0"
        });
        break;
    }
  });
  return xmlified;
}
class VCard extends DavObject {
  /**
   * Creates a VCard that is supposed to store address-data
   * as specified in RFC 6350.
   *
   * https://tools.ietf.org/html/rfc6350
   *
   * @inheritDoc
   */
  constructor(...args) {
    super(...args);
    super._exposeProperty("data", IETF_CARDDAV, "address-data", true);
    super._exposeProperty("hasphoto", NEXTCLOUD, "has-photo", false);
  }
  /**
   * @inheritDoc
   */
  static getPropFindList() {
    return super.getPropFindList().concat([
      [IETF_CARDDAV, "address-data"]
    ]);
  }
}
const debug$2 = debugFactory("AddressBook");
class AddressBook extends davCollectionShareable(DavCollection) {
  /**
   * @inheritDoc
   */
  constructor(...args) {
    super(...args);
    super._registerObjectFactory("text/vcard", VCard);
    super._registerPropSetFactory(addressBookPropSet);
    super._exposeProperty("description", IETF_CARDDAV, "addressbook-description", true);
    super._exposeProperty("enabled", OWNCLOUD, "enabled", true);
    super._exposeProperty("readOnly", OWNCLOUD, "read-only");
  }
  /**
   * finds all VCards in this address book
   *
   * @return {Promise<VCard[]>}
   */
  findAllVCards() {
    return super.findAllByFilter((elm) => elm instanceof VCard);
  }
  /**
   * finds all contacts in an address-book, but with filtered data.
   *
   * Example use:
   * findAllAndFilterBySimpleProperties(['EMAIL', 'UID', 'CATEGORIES', 'FN', 'TEL', 'NICKNAME', 'N'])
   *
   * @param {string[]} props
   * @return {Promise<VCard[]>}
   */
  async findAllAndFilterBySimpleProperties(props) {
    const children = [];
    props.forEach((prop) => {
      children.push({
        name: [IETF_CARDDAV, "prop"],
        attributes: [["name", prop]]
      });
    });
    return this.addressbookQuery(null, [{
      name: [DAV, "getetag"]
    }, {
      name: [DAV, "getcontenttype"]
    }, {
      name: [DAV, "resourcetype"]
    }, {
      name: [IETF_CARDDAV, "address-data"],
      children
    }, {
      name: [NEXTCLOUD, "has-photo"]
    }]);
  }
  /**
   * creates a new VCard object in this address book
   *
   * @param {string} data
   * @return {Promise<VCard>}
   */
  async createVCard(data) {
    debug$2("creating VCard object");
    const name = uid("", "vcf");
    const headers = {
      "Content-Type": "text/vcard; charset=utf-8"
    };
    return super.createObject(name, headers, data);
  }
  /**
   * sends an addressbook query as defined in
   * https://tools.ietf.org/html/rfc6352#section-8.6
   *
   * @param {object[]} filter
   * @param {object[]} prop
   * @param {number} limit
   * @param {string} test Either anyof or allof
   * @return {Promise<VCard[]>}
   */
  async addressbookQuery(filter, prop = null, limit = null, test = "anyof") {
    debug$2("sending an addressbook-query request");
    const [skeleton] = getRootSkeleton(
      [IETF_CARDDAV, "addressbook-query"]
    );
    if (!prop) {
      skeleton.children.push({
        name: [DAV, "prop"],
        children: this._propFindList.map((p) => ({ name: p }))
      });
    } else {
      skeleton.children.push({
        name: [DAV, "prop"],
        children: prop
      });
    }
    if (filter) {
      skeleton.children.push({
        name: [IETF_CARDDAV, "filter"],
        attributes: [
          ["test", test]
        ],
        children: filter
      });
    }
    if (limit) {
      skeleton.children.push({
        name: [IETF_CARDDAV, "limit"],
        children: [{
          name: [IETF_CARDDAV, "nresults"],
          value: limit
        }]
      });
    }
    const headers = {
      Depth: "1"
    };
    const body = serialize(skeleton);
    const response = await this._request.report(this.url, headers, body);
    return super._handleMultiStatusResponse(response, AddressBook._isRetrievalPartial(prop));
  }
  /**
   * sends an addressbook multiget query as defined in
   * https://tools.ietf.org/html/rfc6352#section-8.7
   *
   * @param {string[]} hrefs
   * @param {object[]} prop
   * @return {Promise<VCard[]>}
   */
  async addressbookMultiget(hrefs = [], prop) {
    debug$2("sending an addressbook-multiget request");
    if (hrefs.length === 0) {
      return [];
    }
    const headers = {
      Depth: "1"
    };
    const body = this._buildMultiGetBody(hrefs, prop);
    const response = await this._request.report(this.url, headers, body);
    return super._handleMultiStatusResponse(response, AddressBook._isRetrievalPartial(prop));
  }
  /**
   * sends an addressbook multiget query as defined in
   * https://tools.ietf.org/html/rfc6352#section-8.7
   * and requests a download of the result
   *
   * @param {string[]} hrefs
   * @param {object[]} prop
   * @return {Promise<{Object}>}
   * @property {string | object} body
   * @property {number} status
   * @property {XMLHttpRequest} xhr
   */
  async addressbookMultigetExport(hrefs = [], prop) {
    debug$2("sending an addressbook-multiget request and request download");
    if (hrefs.length === 0) {
      return "";
    }
    const headers = {
      Depth: "1"
    };
    const body = this._buildMultiGetBody(hrefs, prop);
    return this._request.report(this.url + "?export", headers, body);
  }
  /**
   *
   * @param {string[]} hrefs
   * @param {object[]} prop
   * @return String
   * @private
   */
  _buildMultiGetBody(hrefs, prop) {
    const [skeleton] = getRootSkeleton(
      [IETF_CARDDAV, "addressbook-multiget"]
    );
    if (!prop) {
      skeleton.children.push({
        name: [DAV, "prop"],
        children: this._propFindList.map((p) => ({ name: p }))
      });
    } else {
      skeleton.children.push({
        name: [DAV, "prop"],
        children: prop
      });
    }
    hrefs.forEach((href) => {
      skeleton.children.push({
        name: [DAV, "href"],
        value: href
      });
    });
    return serialize(skeleton);
  }
  /**
   * @inheritDoc
   */
  static getPropFindList() {
    return super.getPropFindList().concat([
      [IETF_CARDDAV, "addressbook-description"],
      [IETF_CARDDAV, "supported-address-data"],
      [IETF_CARDDAV, "max-resource-size"],
      [CALENDARSERVER, "getctag"],
      [OWNCLOUD, "enabled"],
      [OWNCLOUD, "read-only"]
    ]);
  }
  /**
   * checks if the prop part of a report requested partial data
   *
   * @param {object[]} prop
   * @return {boolean}
   * @private
   */
  static _isRetrievalPartial(prop) {
    if (!prop) {
      return false;
    }
    const addressBookDataProperty = prop.find((p) => {
      return p.name[0] === IETF_CARDDAV && p.name[1] === "address-data";
    });
    if (!addressBookDataProperty) {
      return false;
    }
    return !!addressBookDataProperty.children;
  }
}
const debug$1 = debugFactory("AddressBookHome");
class AddressBookHome extends DavCollection {
  /**
   * @inheritDoc
   */
  constructor(...args) {
    super(...args);
    super._registerCollectionFactory("{" + IETF_CARDDAV + "}addressbook", AddressBook);
  }
  /**
   * finds all address books in this address book home
   *
   * @return {Promise<AddressBook[]>}
   */
  async findAllAddressBooks() {
    return super.findAllByFilter((elm) => elm instanceof AddressBook);
  }
  /**
   * creates a new address book collection
   *
   * @param {string} displayname
   * @return {Promise<AddressBook>}
   */
  async createAddressBookCollection(displayname) {
    debug$1("creating an addressbook collection");
    const props = [{
      name: [DAV, "resourcetype"],
      children: [{
        name: [DAV, "collection"]
      }, {
        name: [IETF_CARDDAV, "addressbook"]
      }]
    }, {
      name: [DAV, "displayname"],
      value: displayname
    }];
    const name = super._getAvailableNameFromToken(displayname);
    return super.createCollection(name, props);
  }
}
/**
 * CDAV Library
 *
 * This library is part of the Nextcloud project
 *
 * @copyright Copyright (c) 2024 Richard Steinmetz <richard@steinmetz.cloud>
 *
 * @author Richard Steinmetz <richard@steinmetz.cloud>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
function prinicipalPropSet(props) {
  const xmlified = [];
  Object.entries(props).forEach(([key, value]) => {
    switch (key) {
      case "{urn:ietf:params:xml:ns:caldav}schedule-default-calendar-URL":
        xmlified.push({
          name: [IETF_CALDAV, "schedule-default-calendar-URL"],
          children: [
            {
              name: ["DAV:", "href"],
              value
            }
          ]
        });
        break;
    }
  });
  return xmlified;
}
class Principal extends DavObject {
  /**
   * Creates an object that represents a single principal
   * as specified in RFC 3744
   *
   * https://tools.ietf.org/html/rfc3744#section-2
   *
   * @inheritDoc
   */
  constructor(...args) {
    super(...args);
    Object.assign(this, {
      // house keeping
      _updatedProperties: [],
      // parsers / factories
      _propSetFactory: []
    });
    this._registerPropSetFactory(prinicipalPropSet);
    this._exposeProperty("displayname", DAV, "displayname");
    this._exposeProperty("calendarUserType", IETF_CALDAV, "calendar-user-type");
    this._exposeProperty("calendarUserAddressSet", IETF_CALDAV, "calendar-user-address-set");
    this._exposeProperty("principalUrl", DAV, "principal-URL");
    this._exposeProperty("email", SABREDAV, "email-address");
    this._exposeProperty("language", NEXTCLOUD, "language");
    this._exposeProperty("calendarHomes", IETF_CALDAV, "calendar-home-set");
    this._exposeProperty("scheduleInbox", IETF_CALDAV, "schedule-inbox-URL");
    this._exposeProperty("scheduleOutbox", IETF_CALDAV, "schedule-outbox-URL");
    this._exposeProperty("scheduleDefaultCalendarUrl", IETF_CALDAV, "schedule-default-calendar-URL", true);
    this._exposeProperty("addressBookHomes", IETF_CARDDAV, "addressbook-home-set");
    this._exposeProperty("roomType", NEXTCLOUD, "room-type");
    this._exposeProperty("roomSeatingCapacity", NEXTCLOUD, "room-seating-capacity");
    this._exposeProperty("roomBuildingAddress", NEXTCLOUD, "room-building-address");
    this._exposeProperty("roomBuildingStory", NEXTCLOUD, "room-building-story");
    this._exposeProperty("roomBuildingRoomNumber", NEXTCLOUD, "room-building-room-number");
    this._exposeProperty("roomFeatures", NEXTCLOUD, "room-features");
    Object.defineProperties(this, {
      principalScheme: {
        get: () => {
          const baseUrl = this._request.pathname(this._request.baseUrl);
          let principalURI = this.url.slice(baseUrl.length);
          if (principalURI.slice(-1) === "/") {
            principalURI = principalURI.slice(0, -1);
          }
          return "principal:" + principalURI;
        }
      },
      userId: {
        get: () => {
          if (this.calendarUserType !== "INDIVIDUAL") {
            return null;
          }
          return this.url.split("/").splice(-2, 2)[this.url.endsWith("/") ? 0 : 1];
        }
      },
      groupId: {
        get: () => {
          if (this.calendarUserType !== "GROUP") {
            return null;
          }
          return this.url.split("/").splice(-2, 2)[this.url.endsWith("/") ? 0 : 1];
        }
      },
      resourceId: {
        get: () => {
          if (this.calendarUserType !== "RESOURCE") {
            return null;
          }
          return this.url.split("/").splice(-2, 2)[this.url.endsWith("/") ? 0 : 1];
        }
      },
      roomId: {
        get: () => {
          if (this.calendarUserType !== "ROOM") {
            return null;
          }
          return this.url.split("/").splice(-2, 2)[this.url.endsWith("/") ? 0 : 1];
        }
      },
      roomAddress: {
        get: () => {
          const data = [
            this.roomBuildingRoomNumber,
            this.roomBuildingStory,
            this.roomBuildingAddress
          ];
          return data.filter((value) => !!value).join(", ");
        }
      }
    });
  }
  /**
   * Expose property to the outside and track changes if it's mutable
   *
   * @protected
   * @param {string} localName
   * @param {string} xmlNamespace
   * @param {string} xmlName
   * @param {boolean} mutable
   * @return void
   */
  _exposeProperty(localName, xmlNamespace, xmlName, mutable = false) {
    if (mutable) {
      Object.defineProperty(this, localName, {
        get: () => this._props["{".concat(xmlNamespace, "}").concat(xmlName)],
        set: (val) => {
          this._props["{".concat(xmlNamespace, "}").concat(xmlName)] = val;
          if (this._updatedProperties.indexOf("{".concat(xmlNamespace, "}").concat(xmlName)) === -1) {
            this._updatedProperties.push("{".concat(xmlNamespace, "}").concat(xmlName));
          }
        }
      });
    } else {
      Object.defineProperty(this, localName, {
        get: () => this._props["{".concat(xmlNamespace, "}").concat(xmlName)]
      });
    }
  }
  /**
   * @protected
   * @param factory
   * @return void
   */
  _registerPropSetFactory(factory) {
    this._propSetFactory.push(factory);
  }
  /**
   * @inheritDoc
   *
   * @param {PrincipalPropfindOptions} options
   */
  static getPropFindList(options = {}) {
    const list = [
      [DAV, "displayname"],
      [IETF_CALDAV, "calendar-user-type"],
      [IETF_CALDAV, "calendar-user-address-set"],
      [DAV, "principal-URL"],
      [DAV, "alternate-URI-set"],
      [SABREDAV, "email-address"],
      [NEXTCLOUD, "language"]
    ];
    if (options.enableCalDAV) {
      list.push(
        [IETF_CALDAV, "calendar-home-set"],
        [IETF_CALDAV, "schedule-inbox-URL"],
        [IETF_CALDAV, "schedule-outbox-URL"],
        [IETF_CALDAV, "schedule-default-calendar-URL"]
      );
    }
    if (options.enableCalDAVResourceBooking || options.enableCalDAV) {
      list.push(
        // Room and Resource booking related
        [NEXTCLOUD, "resource-type"],
        [NEXTCLOUD, "resource-vehicle-type"],
        [NEXTCLOUD, "resource-vehicle-make"],
        [NEXTCLOUD, "resource-vehicle-model"],
        [NEXTCLOUD, "resource-vehicle-is-electric"],
        [NEXTCLOUD, "resource-vehicle-range"],
        [NEXTCLOUD, "resource-vehicle-seating-capacity"],
        [NEXTCLOUD, "resource-contact-person"],
        [NEXTCLOUD, "resource-contact-person-vcard"],
        [NEXTCLOUD, "room-type"],
        [NEXTCLOUD, "room-seating-capacity"],
        [NEXTCLOUD, "room-building-address"],
        [NEXTCLOUD, "room-building-story"],
        [NEXTCLOUD, "room-building-room-number"],
        [NEXTCLOUD, "room-features"]
      );
    }
    if (options.enableCardDAV) {
      list.push(
        [IETF_CARDDAV, "addressbook-home-set"]
      );
    }
    return list;
  }
  /**
   * Sends a PropPatch request to update the principal's properties.
   * The request is only made if properties actually changed.
   *
   * @return {Promise<void>}
   */
  async update() {
    if (this._updatedProperties.length === 0) {
      return;
    }
    const properties2 = {};
    this._updatedProperties.forEach((updatedProperty) => {
      properties2[updatedProperty] = this._props[updatedProperty];
    });
    const propSet = this._propSetFactory.reduce((arr, p) => [...arr, ...p(properties2)], []);
    const [skeleton, dPropSet] = getRootSkeleton(
      [DAV, "propertyupdate"],
      [DAV, "set"],
      [DAV, "prop"]
    );
    dPropSet.push(...propSet);
    const body = serialize(skeleton);
    await this._request.propPatch(this._url, {}, body);
  }
}
const debug = debugFactory("index.js");
class DavClient {
  /**
   * @param {object} options
   * @param {string} options.rootUrl
   * @param {Function} xhrProvider
   * @param {object} factories
   */
  constructor(options, xhrProvider2 = null, factories = {}) {
    this.rootUrl = null;
    if (options.rootUrl.slice(-1) !== "/") {
      options.rootUrl += "/";
    }
    Object.assign(this, options);
    this.advertisedFeatures = [];
    this.currentUserPrincipal = null;
    this.principalCollections = [];
    this.calendarHomes = [];
    this.publicCalendarHome = null;
    this.addressBookHomes = [];
    this.parser = new Parser();
    this._isConnected = false;
    this._request = new Request(this.rootUrl, this.parser, xhrProvider2);
  }
  /**
   * initializes the DAVClient
   * @param {object} options
   * @return {Promise<DavClient>}
   */
  async connect(options = { enableCalDAV: false, enableCardDAV: false }) {
    if (this._isConnected) {
      return this;
    }
    if (!this.rootUrl) {
      throw new Error("No rootUrl configured");
    }
    const principalUrl = await this._discoverPrincipalUri();
    debug("PrincipalURL: ".concat(principalUrl));
    const propFindList = Principal.getPropFindList(options);
    if (options.enableCalDAV || options.enableCardDAV) {
      propFindList.push(
        [DAV, "principal-collection-set"],
        [DAV, "supported-report-set"]
      );
    }
    const response = await this._request.propFind(principalUrl, propFindList);
    this.currentUserPrincipal = new Principal(null, this._request, principalUrl, response.body);
    this._extractAdvertisedDavFeatures(response.xhr);
    this._extractAddressBookHomes(response.body);
    this._extractCalendarHomes(response.body);
    this._extractPrincipalCollectionSets(response.body);
    this._createPublicCalendarHome();
    this._isConnected = true;
    return this;
  }
  // /**
  //  * @returns {Promise<[any , any , any , any , any , any , any , any , any , any]>}
  //  */
  // async sync() {
  //     const promises = [];
  //
  //     // Ideally we would also check for new calendar-homes and
  //     // new addressbook-homes as well, but then Nextcloud will
  //     // ever only send provide one each, so we omit this step
  //     // to cut down network traffic
  //
  //     this.calendarHomes.forEach((calendarHome) => {
  //         promises.push(calendarHome.sync());
  //     });
  //     this.addressbookHomes.forEach((addressbookHome) => {
  //         promises.push(addressbookHome.sync());
  //     });
  //
  //     return Promise.all(promises);
  // }
  /**
   * performs a principal property search based on a principal's displayname
   *
   * @param {string} name
   * @return {Promise<Principal[]>}
   */
  async principalPropertySearchByDisplayname(name) {
    return this.principalPropertySearch([
      { name: [DAV, "displayname"] }
    ], name);
  }
  /**
   * performs a principal property search based on a principal's displayname OR email address
   *
   * @param {string} value
   * @return {Promise<Principal[]>}
   */
  async principalPropertySearchByDisplaynameOrEmail(value) {
    return this.principalPropertySearch([
      { name: [DAV, "displayname"] },
      { name: [SABREDAV, "email-address"] }
    ], value, "anyof");
  }
  /**
   * Performs a principal property based on the address of a room
   *
   * @param {string} address Address of the building the room is in
   * @return {Promise<Principal[]>}
   */
  async principalPropertySearchByAddress(address) {
    return this.principalPropertySearch([
      { name: [NEXTCLOUD, "room-building-address"] }
    ], address);
  }
  /**
   * Performs a principal property search based on the address and story of a room
   *
   * @param {string} address Address of the building the room is in
   * @param {string} story Story inside the building the room is in
   * @return {Promise<[]>}
   */
  async principalPropertySearchByAddressAndStory(address, story) {
    const [skeleton] = getRootSkeleton(
      [DAV, "principal-property-search"]
    );
    skeleton.children.push({
      name: [DAV, "property-search"],
      children: [{
        name: [DAV, "prop"],
        children: [{
          name: [NEXTCLOUD, "room-building-address"]
        }]
      }, {
        name: [DAV, "match"],
        value: address
      }]
    });
    skeleton.children.push({
      name: [DAV, "property-search"],
      children: [{
        name: [DAV, "prop"],
        children: [{
          name: [NEXTCLOUD, "room-building-story"]
        }]
      }, {
        name: [DAV, "match"],
        value: story
      }]
    });
    skeleton.children.push({
      name: [DAV, "prop"],
      children: Principal.getPropFindList({ enableCalDAV: true }).map((propFindListItem) => ({ name: propFindListItem }))
    });
    skeleton.children.push({ name: [DAV, "apply-to-principal-collection-set"] });
    const xml = serialize(skeleton);
    return this._request.report(this.rootUrl, { Depth: 0 }, xml).then((response) => {
      const result = [];
      Object.entries(response.body).forEach(([path, props]) => {
        const url = this._request.pathname(path);
        result.push(new Principal(null, this._request, url, props));
      });
      return result;
    });
  }
  /**
   * Performs a principal property search based on multiple advanced filters
   *
   * @param {object} query The destructuring query object
   * @param {string=} query.displayName The display name to filter by
   * @param {number=} query.capacity The minimum required seating capacity
   * @param {string[]=} query.features The features to filter by
   * @param {string=} query.roomType The room type to filter by
   * @return {Promise<Principal[]>}
   */
  async advancedPrincipalPropertySearch(query) {
    const [skeleton] = getRootSkeleton([DAV, "principal-property-search"]);
    skeleton.attributes = [
      ["test", "allof"]
    ];
    const { displayName, capacity, features, roomType } = query;
    if (displayName) {
      skeleton.children.push({
        name: [DAV, "property-search"],
        children: [{
          name: [DAV, "prop"],
          children: [
            { name: [DAV, "displayname"] }
          ]
        }, {
          name: [DAV, "match"],
          value: displayName
        }]
      });
    }
    if (capacity) {
      skeleton.children.push({
        name: [DAV, "property-search"],
        children: [{
          name: [DAV, "prop"],
          children: [{
            name: [NEXTCLOUD, "room-seating-capacity"]
          }]
        }, {
          name: [DAV, "match"],
          value: capacity
        }]
      });
    }
    if (features && features.length > 0) {
      skeleton.children.push({
        name: [DAV, "property-search"],
        children: [{
          name: [DAV, "prop"],
          children: [{
            name: [NEXTCLOUD, "room-features"]
          }]
        }, {
          name: [DAV, "match"],
          value: features.join(",")
        }]
      });
    }
    if (roomType) {
      skeleton.children.push({
        name: [DAV, "property-search"],
        children: [{
          name: [DAV, "prop"],
          children: [{
            name: [NEXTCLOUD, "room-type"]
          }]
        }, {
          name: [DAV, "match"],
          value: roomType
        }]
      });
    }
    if (skeleton.children.length === 0) {
      return [];
    }
    skeleton.children.push({
      name: [DAV, "prop"],
      children: Principal.getPropFindList({ enableCalDAV: true }).map((propFindListItem) => ({ name: propFindListItem }))
    });
    skeleton.children.push({ name: [DAV, "apply-to-principal-collection-set"] });
    const xml = serialize(skeleton);
    const response = await this._request.report(this.rootUrl, { Depth: 0 }, xml);
    return Object.entries(response.body).map(([path, props]) => {
      const url = this._request.pathname(path);
      return new Principal(null, this._request, url, props);
    });
  }
  /**
   * performs a principal property search
   * @see https://tools.ietf.org/html/rfc3744#section-9.4
   *
   * @param {Array} props
   * @param {string} match
   * @param {string} test 'anyof', 'allof' or none
   * @return {Promise<Principal[]>}
   */
  async principalPropertySearch(props, match, test) {
    const [skeleton, propSearch] = getRootSkeleton(
      [DAV, "principal-property-search"],
      [DAV, "property-search"]
    );
    if (test) {
      skeleton.attributes = [
        ["test", test]
      ];
    }
    propSearch.push({
      name: [DAV, "prop"],
      children: props
    }, {
      name: [DAV, "match"],
      value: match
    });
    skeleton.children.push({
      name: [DAV, "prop"],
      children: Principal.getPropFindList({ enableCalDAV: true }).map((propFindListItem) => ({ name: propFindListItem }))
    });
    skeleton.children.push({ name: [DAV, "apply-to-principal-collection-set"] });
    const xml = serialize(skeleton);
    return this._request.report(this.rootUrl, { Depth: 0 }, xml).then((response) => {
      const result = [];
      Object.entries(response.body).forEach(([path, props2]) => {
        const url = this._request.pathname(path);
        result.push(new Principal(null, this._request, url, props2));
      });
      return result;
    });
  }
  /**
   * finds one principal at a given principalUrl
   *
   * @param {string} principalUrl
   * @return {Promise<Principal>}
   */
  async findPrincipal(principalUrl) {
    return this._request.propFind(principalUrl, Principal.getPropFindList()).then(({ body }) => {
      return new Principal(null, this._request, principalUrl, body);
    }).catch((err) => {
      console.debug(err);
    });
  }
  /**
   * finds all principals in a collection at a given principalCollectionUrl
   *
   * @param {string} principalCollectionUrl
   * @param {import('./models/principal.js').PrincipalPropfindOptions} options Passed to Principal.getPropFindList()
   * @return {Promise<Principal[]>}
   */
  async findPrincipalsInCollection(principalCollectionUrl, options = {}) {
    try {
      const { body } = await this._request.propFind(
        principalCollectionUrl,
        Principal.getPropFindList(options),
        1
      );
      const principals = Object.entries(body).filter(([principalUrl]) => !principalCollectionUrl.endsWith(principalUrl)).map(([principalUrl, principal]) => new Principal(
        null,
        this._request,
        principalUrl,
        principal
      ));
      return principals;
    } catch (err) {
      console.debug(err);
    }
  }
  /**
   * discovers the accounts principal uri solely based on rootURL
   *
   * @return {Promise<string>}
   * @private
   */
  async _discoverPrincipalUri() {
    const response = await this._request.propFind(this.rootUrl, [
      [DAV, "current-user-principal"]
    ], 0);
    if (!response.body["{DAV:}current-user-principal"]) {
      throw new Error("Error retrieving current user principal");
    }
    if (response.body["{DAV:}current-user-principal"].type === "unauthenticated") {
      throw new Error("Current user is not authenticated");
    }
    return this._request.pathname(response.body["{DAV:}current-user-principal"].href);
  }
  /**
   * discovers all calendar-homes in this account, all principal collections
   * and advertised features
   *
   * a user will most commonly only have one calendar-home,
   * the CalDAV standard allows multiple calendar-homes though
   *
   * @param {object} props
   * @return void
   * @private
   */
  async _extractCalendarHomes(props) {
    const calendarHomes = props["{".concat(IETF_CALDAV, "}calendar-home-set")];
    if (!calendarHomes) {
      return;
    }
    this.calendarHomes = calendarHomes.map((calendarHome) => {
      const url = this._request.pathname(calendarHome);
      return new CalendarHome(this, this._request, url, props);
    });
  }
  /**
   * discovers all address-book-homes in this account, all principal collections
   * and advertised features
   *
   * a user will most commonly only have one address-book-home,
   * the CardDAV standard allows multiple address-book-homes though
   *
   * @param {object} props
   * @return void
   * @private
   */
  async _extractAddressBookHomes(props) {
    const addressBookHomes = props["{".concat(IETF_CARDDAV, "}addressbook-home-set")];
    if (!addressBookHomes) {
      return;
    }
    this.addressBookHomes = addressBookHomes.map((addressbookHome) => {
      const url = this._request.pathname(addressbookHome);
      return new AddressBookHome(this, this._request, url, props);
    });
  }
  /**
   * extracts principalCollection Information from an existing props object
   * returned from the server
   *
   * @param {object} props
   * @return void
   * @private
   */
  _extractPrincipalCollectionSets(props) {
    const principalCollectionSets = props["{".concat(DAV, "}principal-collection-set")];
    this.principalCollections = principalCollectionSets.map((principalCollection) => {
      return this._request.pathname(principalCollection);
    });
  }
  /**
   * extracts the advertised features supported by the DAV server
   *
   * @param {XMLHttpRequest} xhr
   * @return void
   * @private
   */
  _extractAdvertisedDavFeatures(xhr) {
    const dav = xhr.getResponseHeader("DAV");
    this.advertisedFeatures.push(...dav.split(",").map((s) => s.trim()));
  }
  /**
   * Creates a public calendar home
   *
   * @return void
   * @private
   */
  _createPublicCalendarHome() {
    const url = this._request.pathname(this.rootUrl) + "public-calendars/";
    this.publicCalendarHome = new CalendarHome(this, this._request, url, {});
  }
}
function xhrProvider() {
  const headers = {
    "X-Requested-With": "XMLHttpRequest",
    requesttoken: getRequestToken()
  };
  const xhr = new XMLHttpRequest();
  const oldOpen = xhr.open;
  xhr.open = function() {
    const result = oldOpen.apply(this, arguments);
    for (const name in headers) {
      xhr.setRequestHeader(name, headers[name]);
    }
    return result;
  };
  window.OC.registerXHRForErrorProcessing(xhr);
  return xhr;
}
const client = new DavClient({
  rootUrl: U("dav")
}, xhrProvider);
function parseVcf(data, addressbook) {
  const regexp = /BEGIN:VCARD[\s\S]*?END:VCARD/mgi;
  const vCards = data.match(regexp);
  if (!vCards) {
    console.error("Error during the parsing of the following vcf file", data);
    return [];
  }
  if (!addressbook) {
    console.error("Invalid addressbook", addressbook);
    return [];
  }
  store.dispatch("setTotal", vCards.length);
  return vCards.reduce((contacts2, vCard) => {
    try {
      const contact = new Contact(vCard, addressbook);
      contacts2.push(contact);
    } catch (e) {
      store.dispatch("incrementDenied");
      console.error(e);
    }
    return contacts2;
  }, []);
}
const addressbookModel = {
  id: "",
  displayName: "",
  enabled: true,
  owner: "",
  shares: [],
  contacts: {},
  url: "",
  readOnly: false,
  dav: false
};
const state$4 = {
  addressbooks: []
};
function mapDavCollectionToAddressbook(addressbook) {
  return {
    // get last part of url
    id: addressbook.url.split("/").slice(-2, -1)[0],
    displayName: addressbook.displayname,
    enabled: addressbook.enabled !== false,
    owner: addressbook.owner,
    readOnly: addressbook.readOnly === true,
    writeProps: addressbook.currentUserPrivilegeSet.includes("{DAV:}write-properties") === true,
    url: addressbook.url,
    dav: addressbook,
    shares: addressbook.shares ? addressbook.shares.map((sharee) => Object.assign({}, mapDavShareeToSharee(sharee))) : []
  };
}
function mapDavShareeToSharee(sharee) {
  const id = sharee.href.split("/").slice(-1)[0];
  const name = sharee["common-name"] ? sharee["common-name"] : id;
  return {
    displayName: name,
    id,
    writeable: sharee.access[0].endsWith("read-write"),
    isGroup: sharee.href.startsWith("principal:principals/groups/"),
    uri: sharee.href
  };
}
const mutations$5 = {
  /**
   * Add addressbook into state
   *
   * @param {object} state the store data
   * @param {object} addressbook the addressbook to add
   */
  addAddressbook(state2, addressbook) {
    const newAddressbook = Object.assign({}, addressbookModel, addressbook);
    newAddressbook.contacts = {};
    state2.addressbooks.push(newAddressbook);
  },
  /**
   * Delete addressbook
   *
   * @param {object} state the store data
   * @param {object} addressbook the addressbook to delete
   */
  deleteAddressbook(state2, addressbook) {
    state2.addressbooks.splice(state2.addressbooks.indexOf(addressbook), 1);
  },
  /**
   * Toggle whether a Addressbook is Enabled
   *
   * @param {object} context the store mutations
   * @param {object} addressbook the addressbook to toggle
   */
  toggleAddressbookEnabled(context, addressbook) {
    addressbook = state$4.addressbooks.find((search) => search.id === addressbook.id);
    addressbook.enabled = !addressbook.enabled;
  },
  /**
   * Rename a Addressbook
   *
   * @param {object} context the store mutations
   * @param {object} data destructuring object
   * @param {object} data.addressbook the addressbook to rename
   * @param {string} data.newName the new name of the addressbook
   */
  renameAddressbook(context, { addressbook, newName }) {
    addressbook = state$4.addressbooks.find((search) => search.id === addressbook.id);
    addressbook.displayName = newName;
  },
  /**
   * Append a list of contacts to an addressbook
   * and remove duplicates
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param {object} data.addressbook the addressbook to add the contacts to
   * @param {Contact[]} data.contacts array of contacts to append
   */
  appendContactsToAddressbook(state2, { addressbook, contacts: contacts2 }) {
    addressbook = state2.addressbooks.find((search) => search.id === addressbook.id);
    addressbook.contacts = contacts2.reduce((list, contact) => {
      if (list[contact.uid]) {
        console.info("Duplicate contact overrided", list[contact.uid], contact);
      }
      Vue$1.set(list, contact.uid, contact);
      return list;
    }, addressbook.contacts);
  },
  /**
   * Add a contact to an addressbook and overwrite if duplicate uid
   *
   * @param {object} state the store data
   * @param {Contact} contact the contact to add
   */
  addContactToAddressbook(state2, contact) {
    const addressbook = state2.addressbooks.find((search) => search.id === contact.addressbook.id);
    Vue$1.set(addressbook.contacts, contact.uid, contact);
  },
  /**
   * Delete a contact in a specified addressbook
   *
   * @param {object} state the store data
   * @param {Contact} contact the contact to delete
   */
  deleteContactFromAddressbook(state2, contact) {
    const addressbook = state2.addressbooks.find((search) => search.id === contact.addressbook.id);
    Vue$1.delete(addressbook.contacts, contact.uid);
  },
  /**
   * Share addressbook with a user or group
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param {object} data.addressbook the addressbook
   * @param {string} data.user the userId
   * @param {string} data.displayName the displayName
   * @param {string} data.uri the sharing principalScheme uri
   * @param {boolean} data.isGroup is this a group ?
   */
  shareAddressbook(state2, { addressbook, user, displayName, uri: uri2, isGroup }) {
    addressbook = state2.addressbooks.find((search) => search.id === addressbook.id);
    const newSharee = {
      displayName,
      id: user,
      writeable: false,
      isGroup,
      uri: uri2
    };
    if (!addressbook.shares.some((share) => share.uri === uri2)) {
      addressbook.shares.push(newSharee);
    }
  },
  /**
   * Remove Sharee from addressbook shares list
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param {object} data.addressbook the addressbook
   * @param {string} data.uri the sharee uri
   */
  removeSharee(state2, { addressbook, uri: uri2 }) {
    addressbook = state2.addressbooks.find((search) => search.id === addressbook.id);
    const shareIndex = addressbook.shares.findIndex((sharee) => sharee.uri === uri2);
    addressbook.shares.splice(shareIndex, 1);
  },
  /**
   * Toggle sharee's writable permission
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param {object} data.addressbook the addressbook
   * @param {string} data.uri the sharee uri
   */
  updateShareeWritable(state2, { addressbook, uri: uri2 }) {
    addressbook = state2.addressbooks.find((search) => search.id === addressbook.id);
    const sharee = addressbook.shares.find((sharee2) => sharee2.uri === uri2);
    sharee.writeable = !sharee.writeable;
  }
};
const getters$4 = {
  getAddressbooks: (state2) => state2.addressbooks
};
const actions$4 = {
  /**
   * Retrieve and commit addressbooks
   *
   * @param {object} context the store mutations
   * @return {object[]} the addressbooks
   */
  async getAddressbooks(context) {
    const addressbooks2 = await client.addressBookHomes[0].findAllAddressBooks().then((addressbooks3) => {
      return addressbooks3.map((addressbook) => {
        return mapDavCollectionToAddressbook(addressbook);
      });
    });
    addressbooks2.forEach((addressbook) => {
      context.commit("addAddressbook", addressbook);
    });
    return addressbooks2;
  },
  /**
   * Append a new address book to array of existing address books
   *
   * @param {object} context the store mutations
   * @param {object} addressbook The address book to append
   * @return {Promise}
   */
  async appendAddressbook(context, addressbook) {
    return client.addressBookHomes[0].createAddressBookCollection(addressbook.displayName).then((response) => {
      addressbook = mapDavCollectionToAddressbook(response);
      context.commit("addAddressbook", addressbook);
    }).catch((error) => {
      throw error;
    });
  },
  /**
   * Delete Addressbook
   *
   * @param {object} context the store mutations Current context
   * @param {object} addressbook the addressbool to delete
   * @return {Promise}
   */
  async deleteAddressbook(context, addressbook) {
    return addressbook.dav.delete().then((response) => {
      Object.values(addressbook.contacts).forEach((contact) => context.commit("deleteContact", contact));
      context.commit("deleteAddressbook", addressbook);
    }).catch((error) => {
      throw error;
    });
  },
  /**
   * Toggle whether a Addressbook is Enabled
   *
   * @param {object} context the store mutations Current context
   * @param {object} addressbook the addressbook to toggle
   * @return {Promise}
   */
  async toggleAddressbookEnabled(context, addressbook) {
    addressbook.dav.enabled = !addressbook.enabled;
    return addressbook.dav.update().then((response) => {
      context.commit("toggleAddressbookEnabled", addressbook);
      if (addressbook.enabled) {
        Object.values(addressbook.contacts).forEach((contact) => {
          context.commit("addContact", contact);
        });
      } else {
        Object.values(addressbook.contacts).forEach((contact) => {
          context.commit("deleteContact", contact);
        });
      }
    }).catch((error) => {
      throw error;
    });
  },
  /**
   * Rename a Addressbook
   *
   * @param {object} context the store mutations Current context
   * @param {object} data.addressbook the addressbook to rename
   * @param {string} data.newName the new name of the addressbook
   * @param data.addressbook.addressbook
   * @param data.addressbook.newName
   * @return {Promise}
   */
  async renameAddressbook(context, { addressbook, newName }) {
    addressbook.dav.displayname = newName;
    return addressbook.dav.update().then((response) => context.commit("renameAddressbook", { addressbook, newName })).catch((error) => {
      throw error;
    });
  },
  /**
   * Retrieve the contacts of the specified addressbook
   * and commit the results
   *
   * @param {object} context the store mutations
   * @param {object} importDetails = { vcf, addressbook }
   * @param importDetails.addressbook
   * @return {Promise}
   */
  async getContactsFromAddressBook(context, { addressbook }) {
    return addressbook.dav.findAllAndFilterBySimpleProperties(MinimalContactProperties).then((response) => {
      let failed = 0;
      const contacts2 = response.reduce((contacts3, item) => {
        try {
          const contact = new Contact(item.data, addressbook);
          Vue$1.set(contact, "dav", item);
          contacts3.push(contact);
        } catch (error) {
          console.error("Error reading contact", item.url, item.data);
          console.error(error);
          failed++;
        }
        return contacts3;
      }, []);
      if (failed > 0) {
        showError(n(
          "contacts",
          "{failed} contact failed to be read",
          "{failed} contacts failed to be read",
          failed,
          { failed }
        ));
      }
      context.commit("appendContactsToAddressbook", { addressbook, contacts: contacts2 });
      context.commit("extractGroupsFromContacts", contacts2);
      if (addressbook.enabled) {
        context.commit("appendContacts", contacts2);
        context.commit("sortContacts");
      }
      return contacts2;
    }).catch((error) => {
      context.commit("deleteAddressbook", addressbook);
      console.error(error);
    });
  },
  /**
   *
   * @param {object} context the store mutations
   * @param {object} importDetails = { vcf, addressbook }
   * @param importDetails.vcf
   * @param importDetails.addressbook
   */
  async importContactsIntoAddressbook(context, { vcf, addressbook }) {
    const contacts2 = parseVcf(vcf, addressbook);
    context.commit("changeStage", "importing");
    const limit = pLimit(3);
    const requests = [];
    contacts2.map(async (contact) => {
      console.info(contact);
      try {
        const vData = contact.toStringStripQuotes();
        requests.push(limit(
          () => contact.addressbook.dav.createVCard(vData).then((response) => {
            Vue$1.set(contact, "dav", response);
            context.commit("addContact", contact);
            context.commit("addContactToAddressbook", contact);
            context.commit("extractGroupsFromContacts", [contact]);
            context.commit("incrementAccepted");
          }).catch((error) => {
            context.commit("incrementDenied");
            console.error(error);
          })
        ));
      } catch (e) {
        context.commit("incrementDenied");
      }
    });
    Promise.all(requests).then(() => {
      context.commit("changeStage", "done");
    });
  },
  /**
   * Remove sharee from Addressbook
   *
   * @param {object} context the store mutations Current context
   * @param {object} data destructuring object
   * @param {object} data.addressbook the addressbook
   * @param {string} data.uri the sharee uri
   */
  async removeSharee(context, { addressbook, uri: uri2 }) {
    try {
      await addressbook.dav.unshare(uri2);
      context.commit("removeSharee", { addressbook, uri: uri2 });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  /**
   * Toggle permissions of Addressbook Sharees writeable rights
   *
   * @param {object} context the store mutations Current context
   * @param {object} data destructuring object
   * @param {object} data.addressbook the addressbook
   * @param {string} data.uri the sharee uri
   * @param {boolean} data.writeable the sharee permission
   */
  async toggleShareeWritable(context, { addressbook, uri: uri2, writeable }) {
    try {
      await addressbook.dav.share(uri2, writeable);
      context.commit("updateShareeWritable", { addressbook, uri: uri2, writeable });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  /**
   * Share Adressbook with User or Group
   *
   * @param {object} context the store mutations Current context
   * @param {object} data.addressbook the addressbook
   * @param {string} data.user the userId
   * @param {string} data.displayName the displayName
   * @param {string} data.uri the sharing principalScheme uri
   * @param {boolean} data.isGroup is this a group ?
   * @param data.addressbook.addressbook
   * @param data.addressbook.user
   * @param data.addressbook.displayName
   * @param data.addressbook.uri
   * @param data.addressbook.isGroup
   */
  async shareAddressbook(context, { addressbook, user, displayName, uri: uri2, isGroup }) {
    try {
      await addressbook.dav.share(uri2);
      context.commit("shareAddressbook", { addressbook, user, displayName, uri: uri2, isGroup });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  /**
   * Move a contact to the provided addressbook
   *
   * @param {object} context the store mutations
   * @param {object} data destructuring object
   * @param {Contact} data.contact the contact to move
   * @param {object} data.addressbook the addressbook to move the contact to
   * @return {Contact} the new contact object
   */
  async moveContactToAddressbook(context, { contact, addressbook }) {
    if (contact.dav) {
      try {
        await contact.dav.move(addressbook.dav);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    await context.commit("deleteContactFromAddressbook", contact);
    await context.commit("updateContactAddressbook", { contact, addressbook });
    await context.commit("addContactToAddressbook", contact);
    return contact;
  },
  /**
   * Copy a contact to the provided addressbook
   *
   * @param {object} context the store mutations
   * @param {object} data destructuring object
   * @param {Contact} data.contact the contact to copy
   * @param {object} data.addressbook the addressbook to move the contact to
   * @return {Contact} the new contact object
   */
  async copyContactToAddressbook(context, { contact, addressbook }) {
    const vData = contact.vCard.toString().replace(/^UID.+/im, "");
    const newContact = new Contact(vData, addressbook);
    try {
      const response = await contact.dav.copy(addressbook.dav);
      Vue$1.set(newContact, "dav", response);
    } catch (error) {
      console.error(error);
      throw error;
    }
    await context.commit("addContact", newContact);
    await context.commit("addContactToAddressbook", newContact);
    return newContact;
  }
};
const addressbooks = { state: state$4, mutations: mutations$5, getters: getters$4, actions: actions$4 };
const state$3 = {
  /** @type {Object<string>} Circle */
  circles: {}
};
const mutations$4 = {
  /**
   * Add a circle into state
   *
   * @param {object} state the store data
   * @param {Circle} circle the circle to add
   */
  addCircle(state2, circle) {
    if (circle.constructor.name !== Circle.name) {
      throw new Error("circle must be a Circle type");
    }
    Vue$1.set(state2.circles, circle.id, circle);
  },
  /**
   * Delete circle
   *
   * @param {object} state the store data
   * @param {Circle} circle the circle to delete
   */
  deleteCircle(state2, circle) {
    if (!(circle.id in state2.circles)) {
      logger.warn("Skipping deletion of unknown circle", { circle });
    }
    Vue$1.delete(state2.circles, circle.id);
  },
  /**
   * Append a list of members to a circle
   * and remove duplicates
   *
   * @param {object} state the store data
   * @param {Members[]} members array of members to append
   */
  appendMembersToCircle(state2, members) {
    members.forEach((member) => member.circle.addMember(member));
  },
  /**
   * Add a member to a circle and overwrite if duplicate uid
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param {string} data.circleId the circle to add the members to
   * @param {Member} data.member array of contacts to append
   */
  addMemberToCircle(state2, { circleId, member }) {
    const circle = state2.circles[circleId];
    circle.addMember(member);
  },
  /**
   * Delete a contact in a specified circle
   *
   * @param {object} state the store data
   * @param {Member} member the member to add
   */
  deleteMemberFromCircle(state2, member) {
    member.delete();
  },
  setCircleSettings(state2, { circleId, settings }) {
    Vue$1.set(state2.circles[circleId]._data, "settings", settings);
  }
};
const getters$3 = {
  getCircles: (state2) => Object.values(state2.circles),
  getCircle: (state2) => (id) => state2.circles[id]
};
const actions$3 = {
  /**
   * Retrieve and commit circles
   *
   * @param {object} context the store mutations
   * @return {object[]} the circles
   */
  async getCircles(context) {
    const circles2 = await getCircles();
    logger.debug(`Retrieved ${circles2.length} circle(s)`, { circles: circles2 });
    let failure = false;
    circles2.forEach((circle) => {
      try {
        const newCircle = new Circle(circle);
        context.commit("addCircle", newCircle);
      } catch (error) {
        failure = true;
        logger.error("This circle failed to be processed", { circle, error });
      }
    });
    if (failure) {
      showError(t("contacts", "An error has occurred in team(s). Check the console for more details."));
    }
    return circles2;
  },
  /**
   * Retrieve and commit circles
   *
   * @param {object} context the store mutations
   * @param {string} circleId the circle id
   * @return {object[]} the circles
   */
  async getCircle(context, circleId) {
    const circle = await getCircle(circleId);
    logger.debug("Retrieved 1 circle", { circle });
    try {
      const newCircle = new Circle(circle);
      context.commit("addCircle", newCircle);
    } catch (error) {
      logger.error("This circle failed to be processed", { circle, error });
    }
    return circle;
  },
  /**
   * Retrieve and commit circle members
   *
   * @param {object} context the store mutations
   * @param {string} circleId the circle id
   */
  async getCircleMembers(context, circleId) {
    const circle = context.getters.getCircle(circleId);
    const members = await getCircleMembers(circleId);
    logger.debug(`${circleId} have ${members.length} member(s)`, { members });
    context.commit("appendMembersToCircle", members.map((member) => new Member(member, circle)));
  },
  /**
   * Create circle
   *
   * @param {object} context the store mutations Current context
   * @param {object} data destructuring object
   * @param {string} data.circleName the circle name
   * @param {boolean} data.isPersonal the circle is a personal one
   * @param {boolean} data.isLocal the circle is not distributed to the GlobalScale
   * @return {Circle} the new circle
   */
  async createCircle(context, { circleName, isPersonal, isLocal: isLocal2 }) {
    try {
      const response = await createCircle(circleName, isPersonal, isLocal2);
      const circle = new Circle(response);
      context.commit("addCircle", circle);
      logger.debug("Created circle", { circleName, circle });
      return circle;
    } catch (error) {
      console.error(error);
      showError(t("contacts", "Unable to create team {circleName}", { circleName }));
    }
  },
  /**
   * Delete circle
   *
   * @param {object} context the store mutations Current context
   * @param {Circle} circleId the circle to delete
   */
  async deleteCircle(context, circleId) {
    const circle = context.getters.getCircle(circleId);
    try {
      await deleteCircle(circleId);
      context.commit("deleteCircle", circle);
      logger.debug("Deleted circle", { circleId });
    } catch (error) {
      console.error(error);
      showError(t("contacts", "Unable to delete team {circleId}", circleId));
    }
  },
  /**
   * Add members to a circle
   *
   * @param {object} context the store mutations Current context
   * @param {object} data destructuring object
   * @param {string} data.circleId the circle to manage
   * @param {Array} data.selection the members to add, see addMembers service
   * @return {Member[]}
   */
  async addMembersToCircle(context, { circleId, selection }) {
    const circle = context.getters.getCircle(circleId);
    const results = await addMembers(circleId, selection);
    const members = results.map((member) => new Member(member, circle));
    logger.debug("Added members to circle", { circle, members });
    context.commit("appendMembersToCircle", members);
    return members;
  },
  /**
   * Delete a member from a circle
   *
   * @param {object} context the store mutations Current context
   * @param {Member} member the member to remove
   * @param {boolean} [leave] leave the circle instead of removing the member
   */
  async deleteMemberFromCircle(context, { member, leave = false }) {
    const circleId = member.circle.id;
    const memberId = member.id;
    if (leave) {
      const circle = await leaveCircle(circleId);
      member.circle.updateData(circle);
      if (!member.circle.isVisible && !member.circle.isMember) {
        await context.commit("deleteCircle", circle);
        logger.debug("Deleted circle", { circleId, memberId });
      }
    } else {
      await deleteMember(circleId, memberId);
    }
    context.commit("deleteMemberFromCircle", member);
    logger.debug("Deleted member", { circleId, memberId });
  },
  /**
   * Accept a circle member request
   *
   * @param {object} context the store mutations Current context
   * @param {object} data destructuring object
   * @param {string} data.circleId the circle id
   * @param {string} data.memberId the member id
   */
  async acceptCircleMember(context, { circleId, memberId }) {
    const circle = context.getters.getCircle(circleId);
    const result = await acceptMember(circleId, memberId);
    const member = new Member(result, circle);
    await context.commit("addMemberToCircle", { circleId, member });
  },
  async editCircleSetting(context, { circleId, setting }) {
    const { settings } = await editCircleSetting(circleId, setting);
    await context.commit("setCircleSettings", {
      circleId,
      settings
    });
  }
};
const circles = { state: state$3, mutations: mutations$4, getters: getters$3, actions: actions$3 };
ICALmodule.design.vcard3.param.type.multiValueSeparateDQuote = true;
ICALmodule.design.vcard.param.type.multiValueSeparateDQuote = true;
const sortData = (a, b) => {
  const nameA = typeof a.value === "string" ? a.value.toUpperCase() : a.value.toUnixTime();
  const nameB = typeof b.value === "string" ? b.value.toUpperCase() : b.value.toUnixTime();
  const score = nameA.localeCompare ? nameA.localeCompare(nameB) : nameB - nameA;
  return score !== 0 ? score : a.key.localeCompare(b.key);
};
const state$2 = {
  // Using objects for performance
  // https://codepen.io/skjnldsv/pen/ZmKvQo
  contacts: {},
  sortedContacts: [],
  orderKey: "displayName"
};
const mutations$3 = {
  /**
   * Store raw contacts into state
   * Used by the first contact fetch
   *
   * @param {object} state Default state
   * @param {Array<Contact>} contacts Contacts
   */
  appendContacts(state2, contacts2 = []) {
    state2.contacts = contacts2.reduce(function(list, contact) {
      if (contact instanceof Contact) {
        Vue$1.set(list, contact.key, contact);
      } else {
        console.error("Invalid contact object", contact);
      }
      return list;
    }, state2.contacts);
  },
  /**
   * Delete a contact from the global contacts list
   *
   * @param {object} state the store data
   * @param {Contact} contact the contact to delete
   */
  deleteContact(state2, contact) {
    if (state2.contacts[contact.key] && contact instanceof Contact) {
      const index2 = state2.sortedContacts.findIndex((search) => search.key === contact.key);
      state2.sortedContacts.splice(index2, 1);
      Vue$1.delete(state2.contacts, contact.key);
    } else {
      console.error("Error while deleting the following contact", contact);
    }
  },
  /**
   * Insert new contact into sorted array
   *
   * @param {object} state the store data
   * @param {Contact} contact the contact to add
   */
  addContact(state2, contact) {
    if (contact instanceof Contact) {
      validate(contact);
      const sortedContact = {
        key: contact.key,
        value: contact[state2.orderKey]
      };
      for (let i = 0, len = state2.sortedContacts.length; i < len; i++) {
        if (sortData(state2.sortedContacts[i], sortedContact) >= 0) {
          state2.sortedContacts.splice(i, 0, sortedContact);
          break;
        } else if (i + 1 === len) {
          state2.sortedContacts.push(sortedContact);
        }
      }
      if (state2.sortedContacts.length === 0) {
        state2.sortedContacts.push(sortedContact);
      }
      Vue$1.set(state2.contacts, contact.key, contact);
    } else {
      console.error("Error while adding the following contact", contact);
    }
  },
  /**
   * Update a contact
   *
   * @param {object} state the store data
   * @param {Contact} contact the contact to update
   */
  updateContact(state2, contact) {
    if (state2.contacts[contact.key] && contact instanceof Contact) {
      state2.contacts[contact.key].updateContact(contact.jCal);
      const sortedContact = state2.sortedContacts.find((search) => search.key === contact.key);
      const hasChanged = sortedContact.value !== contact[state2.orderKey];
      if (hasChanged) {
        sortedContact.value = contact[state2.orderKey];
        state2.sortedContacts.sort(sortData);
      }
    } else {
      console.error("Error while replacing the following contact", contact);
    }
  },
  /**
   * Update a contact addressbook
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param data.contact
   * @param {Contact} contact the contact to update
   * @param {object} addressbook the addressbook to set
   * @param data.addressbook
   */
  updateContactAddressbook(state2, { contact, addressbook }) {
    if (state2.contacts[contact.key] && contact instanceof Contact) {
      const oldKey = contact.key;
      const newContact = contact;
      Vue$1.delete(state2.contacts, oldKey);
      Vue$1.set(newContact, "addressbook", addressbook);
      Vue$1.set(state2.contacts, newContact.key, newContact);
      const index2 = state2.sortedContacts.findIndex((search) => search.key === oldKey);
      state2.sortedContacts[index2] = {
        key: newContact.key,
        value: newContact[state2.orderKey]
      };
    } else {
      console.error("Error while replacing the addressbook of following contact", contact);
    }
  },
  /**
   * Update a contact etag
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param data.contact
   * @param {Contact} contact the contact to update
   * @param {string} etag the contact etag
   * @param data.etag
   */
  updateContactEtag(state2, { contact, etag }) {
    if (state2.contacts[contact.key] && contact instanceof Contact) {
      state2.contacts[contact.key].dav.etag = etag;
    } else {
      console.error("Error while replacing the etag of following contact", contact);
    }
  },
  /**
   * Order the contacts list. Filters have terrible performances.
   * We do not want to run the sorting function every time.
   * Let's only run it on additions and create an index
   *
   * @param {object} state the store data
   */
  sortContacts(state2) {
    state2.sortedContacts = Object.values(state2.contacts).filter((contact) => contact.kind !== "group").map((contact) => {
      return { key: contact.key, value: contact[state2.orderKey] };
    }).sort(sortData);
  },
  /**
   * Set the order key
   *
   * @param {object} state the store data
   * @param {string} [orderKey] the order key to sort by
   */
  setOrder(state2, orderKey = "displayName") {
    state2.orderKey = orderKey;
  },
  /**
   * Set a contact as `in conflict` with the server data
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param {Contact} data.contact the contact to update
   * @param {string} data.etag the etag to set
   */
  setContactAsConflict(state2, { contact, etag }) {
    if (state2.contacts[contact.key] && contact instanceof Contact) {
      state2.contacts[contact.key].conflict = etag;
    } else {
      console.error("Error while handling the following contact", contact);
    }
  },
  /**
   * Set a contact dav property
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param {Contact} data.contact the contact to update
   * @param {object} data.dav the dav object returned by the cdav library
   */
  setContactDav(state2, { contact, dav }) {
    if (state2.contacts[contact.key] && contact instanceof Contact) {
      contact = state2.contacts[contact.key];
      Vue$1.set(contact, "dav", dav);
    } else {
      console.error("Error while handling the following contact", contact);
    }
  }
};
const getters$2 = {
  getContacts: (state2) => state2.contacts,
  getSortedContacts: (state2) => state2.sortedContacts,
  getContact: (state2) => (key) => state2.contacts[key],
  getOrderKey: (state2) => state2.orderKey
};
const actions$2 = {
  /**
   * Delete a contact from the list and from the associated addressbook
   *
   * @param {object} context the store mutations
   * @param {object} data destructuring object
   * @param {Contact} data.contact the contact to delete
   * @param {boolean} [data.dav] trigger a dav deletion
   */
  async deleteContact(context, { contact, dav = true }) {
    if (contact.dav && dav) {
      await contact.dav.delete().catch((error) => {
        console.error(error);
        showError(t("contacts", "Unable to delete contact"));
      });
    }
    context.commit("deleteContact", contact);
    context.commit("deleteContactFromAddressbook", contact);
    context.commit("removeContactFromGroups", contact);
  },
  /**
   * Add a contact to the list, the associated addressbook and to the groups
   *
   * @param {object} context the store mutations
   * @param {Contact} contact the contact to delete
   */
  async addContact(context, contact) {
    await context.commit("addContact", contact);
    await context.commit("addContactToAddressbook", contact);
    await context.commit("extractGroupsFromContacts", [contact]);
  },
  /**
   * Replace a contact by this new object
   *
   * @param {object} context the store mutations
   * @param {Contact} contact the contact to update
   * @return {Promise}
   */
  async updateContact(context, contact) {
    validate(contact);
    const rev = new ICALmodule.VCardTime();
    rev.fromUnixTime(Date.now() / 1e3);
    contact.rev = rev;
    const vData = contact.toStringStripQuotes();
    if (!contact.dav) {
      const dav = await contact.addressbook.dav.createVCard(vData);
      context.commit("setContactDav", { contact, dav });
      return;
    }
    if (!contact.conflict) {
      contact.dav.data = vData;
      try {
        await contact.dav.update();
        context.commit("updateContact", contact);
      } catch (error) {
        console.error(error);
        if (error && error?.status === 412) {
          context.commit("setContactAsConflict", { contact, etag: error.xhr.getResponseHeader("etag") });
          console.error("This contact is outdated, the server refused it", contact);
        }
        throw error;
      }
    } else {
      console.error("This contact is outdated, refusing to push", contact);
    }
  },
  /**
   * Fetch the full vCard from the dav server
   *
   * @param {object} context the store mutations
   * @param {object} data destructuring object
   * @param {Contact} data.contact the contact to fetch
   * @param {string} data.etag the contact etag to override in case of conflict
   * @param data.forceReFetch
   * @return {Promise}
   */
  async fetchFullContact(context, { contact, etag = "", forceReFetch = false }) {
    if (etag.trim() !== "") {
      await context.commit("updateContactEtag", { contact, etag });
    }
    return contact.dav.fetchCompleteData(forceReFetch).then((response) => {
      const newContact = new Contact(contact.dav.data, contact.addressbook);
      context.commit("updateContact", newContact);
    }).catch((error) => {
      throw error;
    });
  }
};
const contacts = { state: state$2, mutations: mutations$3, getters: getters$2, actions: actions$2 };
const state$1 = {
  groups: []
};
const mutations$2 = {
  /**
   * Extract all the groups from the provided contacts
   * and add the contacts to their respective groups
   *
   * @param {object} state the store data
   * @param {Contact[]} contacts the contacts to add
   */
  extractGroupsFromContacts(state2, contacts2) {
    contacts2.forEach((contact) => {
      if (contact.groups) {
        contact.groups.forEach((groupName) => {
          let group = state2.groups.find((search) => search.name === groupName);
          if (!group) {
            state2.groups.push({
              name: groupName,
              contacts: []
            });
            group = state2.groups.find((search) => search.name === groupName);
          }
          group.contacts.push(contact.key);
        });
      }
    });
  },
  /**
   * Add contact to group and create group if not existing
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param {Array<string>} data.groupNames the names of the group
   * @param {Contact} data.contact the contact
   */
  addContactToGroups(state2, { groupNames, contact }) {
    groupNames.forEach((groupName) => {
      let group = state2.groups.find((search) => search.name === groupName);
      if (!group) {
        state2.groups.push({
          name: groupName,
          contacts: []
        });
        group = state2.groups.find((search) => search.name === groupName);
      }
      group.contacts.push(contact.key);
    });
  },
  /**
   * Remove contact from group
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param {string} data.groupName the name of the group
   * @param {Contact} data.contact the contact
   */
  removeContactFromGroup(state2, { groupName, contact }) {
    if (!state2.groups.find((search) => search.name === groupName)) {
      return;
    }
    const contacts2 = state2.groups.find((search) => search.name === groupName).contacts;
    const index2 = contacts2.findIndex((search) => search === contact.key);
    if (index2 > -1) {
      contacts2.splice(index2, 1);
    }
  },
  /**
   * Rename contact from group
   *
   * @param {object} state the store data
   * @param {object} data destructuring object
   * @param {string} data.oldGroupName name that gets removed
   * @param {string} data.newGroupName name that gets added
   */
  renameGroup(state2, { oldGroupName, newGroupName }) {
    state2.groups.forEach((group) => {
      if (group.name === oldGroupName) {
        group.name = newGroupName;
      }
    });
  },
  /**
   * Remove contact from its groups
   *
   * @param {object} state the store data
   * @param {Contact} contact the contact
   */
  removeContactFromGroups(state2, contact) {
    state2.groups.forEach((group) => {
      const index2 = group.contacts.indexOf(contact.key);
      if (index2 !== -1) {
        group.contacts.splice(index2, 1);
      }
    });
  },
  /**
   * Add a group
   *
   * @param {object} state the store data
   * @param {string} groupName the name of the group
   */
  addGroup(state2, groupName) {
    state2.groups.push({
      name: groupName,
      contacts: []
    });
  },
  /**
   * Remove a group
   *
   * @param {object} state the store data
   * @param {string} groupName the name of the group
   */
  removeGroup(state2, groupName) {
    state2.groups = state2.groups.filter((group) => group.name !== groupName);
  }
};
const getters$1 = {
  getGroups: (state2) => state2.groups
};
const actions$1 = {
  updateContactGroups(context, { groupNames, contact }) {
    context.commit("removeContactFromGroups", contact);
    context.commit("addContactToGroups", { groupNames, contact });
  },
  /**
   * Add contact and to a group
   *
   * @param {object} context the store mutations
   * @param {object} data destructuring object
   * @param {string} data.groupName the name of the group
   * @param {Contact} data.contact the contact
   */
  addContactToGroup(context, { groupName, contact }) {
    context.commit("addContactToGroups", { groupNames: [groupName], contact });
  },
  /**
   * Remove contact from its groups
   *
   * @param {object} context the store mutations
   * @param {Contact} contact the contact
   */
  removeContactFromGroups(context, contact) {
    context.commit("removeContactFromGroups", contact);
  },
  /**
   * Remove contact from group
   *
   * @param {object} context the store mutations
   * @param {object} data destructuring object
   * @param {string} data.groupName the name of the group
   * @param {Contact} data.contact the contact
   */
  removeContactFromGroup(context, { groupName, contact }) {
    context.commit("removeContactFromGroup", { groupName, contact });
  },
  /**
   * Add a group
   *
   * @param {object} context the store mutations
   * @param {string} groupName the name of the group
   */
  addGroup(context, groupName) {
    if (!groupName || groupName.trim() === "") {
      throw new Error("Group name cannot be empty");
    }
    context.commit("addGroup", groupName);
  }
};
const groups = { state: state$1, mutations: mutations$2, getters: getters$1, actions: actions$1 };
const state = {
  importState: {
    total: 0,
    accepted: 0,
    denied: 0,
    stage: "default",
    addressbook: ""
  }
};
const mutations$1 = {
  /**
   * Increment the number of contacts accepted
   *
   * @param {object} state the store data
   */
  incrementAccepted(state2) {
    state2.importState.accepted++;
  },
  /**
   * Increment the number of contacts denied
   *
   * @param {object} state the store data
   */
  incrementDenied(state2) {
    state2.importState.denied++;
  },
  /**
   * Set the total number of contacts
   *
   * @param {object} state the store data
   * @param {string} total the total number of contacts to import
   */
  setTotal(state2, total) {
    state2.importState.total = total;
  },
  /**
   * Set the address book name
   *
   * @param {object} state the store data
   * @param {string} addressbook the name of the address book to import into
   */
  setAddressbook(state2, addressbook) {
    state2.importState.addressbook = addressbook;
  },
  /**
   * Change stage to the indicated one
   *
   * @param {object} state the store data
   * @param {string} stage the name of the stage ('default', 'importing', 'parsing', 'done')
   */
  changeStage(state2, stage) {
    state2.importState.stage = stage;
  },
  /**
   * Reset to the default state
   *
   * @param {object} state the store data
   */
  resetState(state2) {
    state2.importState.total = 0;
    state2.importState.accepted = 0;
    state2.importState.denied = 0;
  }
};
const getters = {
  getImportState: (state2) => state2.importState
};
const actions = {
  /**
   * Increment the number of contacts accepted
   *
   * @param {object} context the store mutations
   */
  incrementAccepted(context) {
    context.commit("incrementAccepted");
  },
  /**
   * Increment the number of contacts denied
   *
   * @param {object} context the store mutations
   */
  incrementDenied(context) {
    context.commit("incrementDenied");
  },
  /**
   * Set the total number of contacts
   *
   * @param {object} context the store mutations
   * @param {string} total the total number of contacts to import
   */
  setTotal(context, total) {
    context.commit("setTotal", total);
  },
  /**
   * Set the address book name
   *
   * @param {object} context the store mutations
   * @param {string} addressbook the name of the address book to import into
   */
  setAddressbook(context, addressbook) {
    context.commit("setAddressbook", addressbook);
  },
  /**
   * Change stage to the indicated one
   * and reset if the parsing starts
   *
   * @param {object} context the store mutations
   * @param {string} stage the name of the stage ('default', 'importing', 'parsing', 'done')
   */
  changeStage(context, stage) {
    context.commit("changeStage", stage);
    if (stage === "parsing") {
      context.commit("resetState");
    }
  }
};
const importState = { state, mutations: mutations$1, getters, actions };
const isCirclesEnabled = loadState("contacts", "isCirclesEnabled", false);
Vue$1.use(index);
const mutations = {};
const modules = {
  addressbooks,
  contacts,
  groups,
  importState
};
if (isCirclesEnabled) {
  modules.circles = circles;
}
const store = new Store({
  modules,
  mutations
  /**
   * the contat ical update itself on property getters
   * this is causing issues with the strict mode.
   * Since we're only getting the data for the contacts list
   * and considering we're initiating an independent contact
   * class for the details which replace itself into the
   * store by mutations we can ignore this and say that
   * the risk of losing track of changes is expandable.
   *
   * strict: process.env.NODE_ENV !== 'production'
   */
});
const removePhoneNumberValueType = () => {
  if (ICALmodule.design.vcard3.property.tel) {
    delete ICALmodule.design.vcard3.property.tel;
    return true;
  }
  return false;
};
const addGroupedProperties = (vCard) => {
  let madeChanges = false;
  vCard[1].forEach((prop) => {
    const propGroup = prop[0].split(".");
    if (propGroup.length === 2) {
      madeChanges = setPropertyAlias(propGroup[1], prop[0]);
    }
  });
  return madeChanges;
};
const setTypeMultiValueSeparateDQuote = () => {
  if (!ICALmodule.design.vcard.param.type || ICALmodule.design.vcard.param.type.multiValueSeparateDQuote !== false || !ICALmodule.design.vcard3.param.type || ICALmodule.design.vcard3.param.type.multiValueSeparateDQuote !== false) {
    ICALmodule.design.vcard.param.type.multiValueSeparateDQuote = false;
    ICALmodule.design.vcard3.param.type.multiValueSeparateDQuote = false;
    return true;
  }
  return false;
};
function updateDesignSet(vCard) {
  let madeChanges = false;
  madeChanges |= setTypeMultiValueSeparateDQuote();
  madeChanges |= removePhoneNumberValueType();
  madeChanges |= addGroupedProperties(vCard);
  return madeChanges;
}
function setPropertyAlias(original, alias) {
  let madeChanges = false;
  original = original.toLowerCase();
  alias = alias.toLowerCase();
  if (ICALmodule.design.vcard.property[original]) {
    ICALmodule.design.vcard.property[alias] = ICALmodule.design.vcard.property[original];
    madeChanges = true;
  }
  if (ICALmodule.design.vcard3.property[original]) {
    ICALmodule.design.vcard3.property[alias] = ICALmodule.design.vcard3.property[original];
    madeChanges = true;
  }
  return madeChanges;
}
var sanitizeSVG$1 = {};
Object.defineProperty(sanitizeSVG$1, "__esModule", { value: true });
const svgDisallowed = [
  "a",
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "fedropshadow",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
];
const getWindow = () => typeof window === "undefined" ? null : window;
const readAsText = (svg) => new Promise((resolve2) => {
  if (!isFile(svg)) {
    resolve2(svg.toString("utf-8"));
  } else {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve2(fileReader.result);
    };
    fileReader.readAsText(svg);
  }
});
const isFile = (obj) => {
  return obj.size !== void 0;
};
const sanitizeSVG = async (svg, window2 = getWindow()) => {
  if (!window2)
    throw new Error("DOM window required");
  if (isFile(svg) && svg.type !== "image/svg+xml")
    return svg;
  const svgText = await readAsText(svg);
  if (!svgText)
    throw new Error("Image corrupt");
  const playground = window2.document.createElement("template");
  playground.innerHTML = svgText;
  const svgEl = playground.content.firstElementChild;
  const attributes = Array.from(svgEl.attributes).map(({ name }) => name);
  const hasScriptAttr = !!attributes.find((attr) => attr.startsWith("on"));
  const disallowedSvgElements = svgEl.querySelectorAll(svgDisallowed.join(","));
  return disallowedSvgElements.length === 0 && !hasScriptAttr ? svg : null;
};
var _default = sanitizeSVG$1.default = sanitizeSVG;
const isEmpty = (value) => {
  return Array.isArray(value) && value.join("") === "" || !Array.isArray(value) && value === "";
};
const ContactKindProperties = ["KIND", "X-ADDRESSBOOKSERVER-KIND"];
const MinimalContactProperties = [
  "EMAIL",
  "UID",
  "CATEGORIES",
  "FN",
  "ORG",
  "N",
  "X-PHONETIC-FIRST-NAME",
  "X-PHONETIC-LAST-NAME",
  "X-MANAGERSNAME",
  "TITLE",
  "NOTES",
  "RELATED"
].concat(ContactKindProperties);
class Contact {
  /**
   * Creates an instance of Contact
   *
   * @param {string} vcard the vcard data as string with proper new lines
   * @param {object} addressbook the addressbook which the contat belongs to
   * @memberof Contact
   */
  constructor(vcard, addressbook) {
    if (typeof vcard !== "string" || vcard.length === 0) {
      throw new Error("Invalid vCard");
    }
    let jCal = ICALmodule.parse(vcard);
    if (jCal[0] !== "vcard") {
      throw new Error("Only one contact is allowed in the vcard data");
    }
    if (updateDesignSet(jCal)) {
      jCal = ICALmodule.parse(vcard);
    }
    this.jCal = jCal;
    this.addressbook = addressbook;
    this.vCard = new ICALmodule.Component(this.jCal);
    this.conflict = false;
    if (!this.vCard.hasProperty("uid")) {
      console.info("This contact did not have a proper uid. Setting a new one for ", this);
      this.vCard.addPropertyWithValue("uid", v4());
    }
    if (!this.vCard.hasProperty("rev")) {
      const rev = new ICALmodule.VCardTime(null, null, "date-time");
      rev.fromUnixTime(Date.now() / 1e3);
      this.vCard.addPropertyWithValue("rev", rev);
    }
  }
  /**
   * Update internal data of this contact
   *
   * @param {jCal} jCal jCal object from ICAL.js
   * @memberof Contact
   */
  updateContact(jCal) {
    this.jCal = jCal;
    this.vCard = new ICALmodule.Component(this.jCal);
  }
  /**
   * Update linked addressbook of this contact
   *
   * @param {object} addressbook the addressbook
   * @memberof Contact
   */
  updateAddressbook(addressbook) {
    this.addressbook = addressbook;
  }
  /**
   * Ensure we're normalizing the possible arrays
   * into a string by taking the first element
   * e.g. ORG:ABC\, Inc.; will output an array because of the semi-colon
   *
   * @param {Array|string} data the data to normalize
   * @return {string}
   * @memberof Contact
   */
  firstIfArray(data) {
    return Array.isArray(data) ? data[0] : data;
  }
  /**
   * Return the url
   *
   * @readonly
   * @memberof Contact
   */
  get url() {
    if (this.dav) {
      return this.dav.url;
    }
    return "";
  }
  /**
   * Return the version
   *
   * @readonly
   * @memberof Contact
   */
  get version() {
    return this.vCard.getFirstPropertyValue("version");
  }
  /**
   * Set the version
   *
   * @param {string} version the version to set
   * @memberof Contact
   */
  set version(version) {
    this.vCard.updatePropertyWithValue("version", version);
  }
  /**
   * Return the uid
   *
   * @readonly
   * @memberof Contact
   */
  get uid() {
    return this.vCard.getFirstPropertyValue("uid");
  }
  /**
   * Set the uid
   *
   * @param {string} uid the uid to set
   * @memberof Contact
   */
  set uid(uid2) {
    this.vCard.updatePropertyWithValue("uid", uid2);
  }
  /**
   * Return the rev
   *
   * @readonly
   * @memberof Contact
   */
  get rev() {
    return this.vCard.getFirstPropertyValue("rev");
  }
  /**
   * Set the rev
   *
   * @param {string} rev the rev to set
   * @memberof Contact
   */
  set rev(rev) {
    this.vCard.updatePropertyWithValue("rev", rev);
  }
  /**
   * Return the key
   *
   * @readonly
   * @memberof Contact
   */
  get key() {
    return this.uid + "~" + this.addressbook.id;
  }
  /**
   * Return the photo
   *
   * @readonly
   * @memberof Contact
   */
  get photo() {
    return this.vCard.getFirstPropertyValue("photo");
  }
  /**
   * Set the photo
   *
   * @param {string} photo the photo to set
   * @memberof Contact
   */
  set photo(photo) {
    this.vCard.updatePropertyWithValue("photo", photo);
  }
  /**
   * Return whether a photo is available
   *
   * @readonly
   * @memberof Contact
   */
  get hasPhoto() {
    return this.dav && this.dav.hasphoto;
  }
  /**
   * Return the photo usable url
   * We cannot fetch external url because of csp policies
   *
   * @memberof Contact
   */
  async getPhotoUrl() {
    const photo = this.vCard.getFirstProperty("photo");
    if (!photo) {
      return false;
    }
    const encoding = photo.getFirstParameter("encoding");
    let photoType = photo.getFirstParameter("type");
    const photoB64 = this.photo;
    const isBinary = photo.type === "binary" || encoding === "b";
    let photoB64Data = photoB64;
    if (photo && photoB64.startsWith("data") && !isBinary) {
      photoB64Data = photoB64.split(",").pop();
      photoType = photoB64.split(";")[0].split("/").pop();
    }
    if (photoType.toLowerCase().startsWith("svg")) {
      const imageSvg = atob(photoB64Data);
      const cleanSvg = await _default(imageSvg);
      if (!cleanSvg) {
        console.error("Invalid SVG for the following contact. Ignoring...", this.contact, { photoB64, photoType });
        return false;
      }
    }
    try {
      const blob = b64toBlob(photoB64Data, `image/${photoType}`);
      return URL.createObjectURL(blob);
    } catch {
      console.error("Invalid photo for the following contact. Ignoring...", this.contact, { photoB64, photoType });
      return false;
    }
  }
  /**
   * Return the groups
   *
   * @readonly
   * @memberof Contact
   */
  get groups() {
    const groupsProp = this.vCard.getFirstProperty("categories");
    if (groupsProp) {
      return groupsProp.getValues().filter((group) => typeof group === "string").filter((group) => group.trim() !== "");
    }
    return [];
  }
  /**
   * Set the groups
   *
   * @param {Array} groups the groups to set
   * @memberof Contact
   */
  set groups(groups2) {
    if (isEmpty(groups2)) {
      this.vCard.removeProperty("categories");
      return;
    }
    if (Array.isArray(groups2)) {
      let property = this.vCard.getFirstProperty("categories");
      if (!property) {
        property = this.vCard.addPropertyWithValue("categories", "");
      }
      property.setValues(groups2);
    } else {
      throw new Error("groups data is not an Array");
    }
  }
  /**
   * Return the groups
   *
   * @readonly
   * @memberof Contact
   */
  get kind() {
    return this.firstIfArray(
      ContactKindProperties.map((s) => s.toLowerCase()).map((s) => this.vCard.getFirstPropertyValue(s)).flat().filter((k) => k)
    );
  }
  /**
   * Return the first email
   *
   * @readonly
   * @memberof Contact
   */
  get email() {
    return this.firstIfArray(this.vCard.getFirstPropertyValue("email"));
  }
  /**
   * Return the first org
   *
   * @readonly
   * @memberof Contact
   */
  get org() {
    return this.firstIfArray(this.vCard.getFirstPropertyValue("org"));
  }
  /**
   * Set the org
   *
   * @param {string} org the org data
   * @memberof Contact
   */
  set org(org) {
    if (isEmpty(org)) {
      this.vCard.removeProperty("org");
      return;
    }
    this.vCard.updatePropertyWithValue("org", org);
  }
  /**
   * Return the first x-managersname
   *
   * @readonly
   * @memberof Contact
   */
  get managersName() {
    const prop = this.vCard.getFirstProperty("x-managersname");
    if (!prop) {
      return null;
    }
    return prop.getFirstParameter("uid") ?? null;
  }
  /**
   * Return the first title
   *
   * @readonly
   * @memberof Contact
   */
  get title() {
    return this.firstIfArray(this.vCard.getFirstPropertyValue("title"));
  }
  /**
   * Set the title
   *
   * @param {string} title the title
   * @memberof Contact
   */
  set title(title) {
    if (isEmpty(title)) {
      this.vCard.removeProperty("title");
      return;
    }
    this.vCard.updatePropertyWithValue("title", title);
  }
  /**
   * Return the full name
   *
   * @readonly
   * @memberof Contact
   */
  get fullName() {
    return this.vCard.getFirstPropertyValue("fn");
  }
  /**
   * Set the full name
   *
   * @param {string} name the fn data
   * @memberof Contact
   */
  set fullName(name) {
    this.vCard.updatePropertyWithValue("fn", name);
  }
  /**
   * Formatted display name based on the order key
   *
   * @readonly
   * @memberof Contact
   */
  get displayName() {
    const orderKey = store.getters.getOrderKey;
    const n2 = this.vCard.getFirstPropertyValue("n");
    const fn = this.vCard.getFirstPropertyValue("fn");
    const org = this.vCard.getFirstPropertyValue("org");
    if (orderKey && n2 && !isEmpty(n2)) {
      switch (orderKey) {
        case "firstName":
          if (isEmpty(n2[0])) {
            return n2[1];
          }
          return n2.slice(0, 2).reverse().join(" ");
        case "lastName":
          if (isEmpty(n2[0])) {
            return n2[1];
          }
          return n2.slice(0, 2).join(", ");
      }
    }
    if (fn) {
      return fn;
    }
    if (n2 && !isEmpty(n2)) {
      if (isEmpty(n2[0])) {
        return n2[1];
      }
      return n2.slice(0, 2).reverse().join(" ");
    }
    if (org && !isEmpty(org)) {
      return Array.isArray(org) ? org[0] : org;
    }
    return "";
  }
  /**
   * Return the first name if exists
   * Returns the displayName otherwise
   *
   * @readonly
   * @memberof Contact
   * @return {string} firstName|displayName
   */
  get firstName() {
    if (this.vCard.hasProperty("n")) {
      return this.vCard.getFirstPropertyValue("n")[1];
    }
    return this.displayName;
  }
  /**
   * Return the last name if exists
   * Returns the displayName otherwise
   *
   * @readonly
   * @memberof Contact
   * @return {string} lastName|displayName
   */
  get lastName() {
    if (this.vCard.hasProperty("n")) {
      return this.vCard.getFirstPropertyValue("n")[0];
    }
    return this.displayName;
  }
  /**
   * Return the phonetic first name if exists
   * Returns the first name or displayName otherwise
   *
   * @readonly
   * @memberof Contact
   * @return {string} phoneticFirstName|firstName|displayName
   */
  get phoneticFirstName() {
    if (this.vCard.hasProperty("x-phonetic-first-name")) {
      return this.vCard.getFirstPropertyValue("x-phonetic-first-name");
    }
    return this.firstName;
  }
  /**
   * Return first matching link for provided type
   * Returns empty string otherwise
   *
   * @param {string} type of social
   * @readonly
   * @memberof Contact
   * @return {string} firstMatchingLink|''
   */
  socialLink(type) {
    if (this.vCard.hasProperty("x-socialprofile")) {
      const x = this.vCard.getAllProperties("x-socialprofile").filter((a) => a.jCal[1].type.toString() === type);
      if (x.length > 0) {
        return x[0].jCal[3].toString();
      }
    }
    return "";
  }
  /**
   * Return the phonetic last name if exists
   * Returns the displayName otherwise
   *
   * @readonly
   * @memberof Contact
   * @return {string} lastName|displayName
   */
  get phoneticLastName() {
    if (this.vCard.hasProperty("x-phonetic-last-name")) {
      return this.vCard.getFirstPropertyValue("x-phonetic-last-name");
    }
    return this.lastName;
  }
  /**
   * Return all the properties as Property objects
   *
   * @readonly
   * @memberof Contact
   * @return {Property[]} http://mozilla-comm.github.io/ical.js/api/ICAL.Property.html
   */
  get properties() {
    return this.vCard.getAllProperties();
  }
  /**
   * Return an array of formatted properties for the search
   *
   * @readonly
   * @memberof Contact
   * @return {string[]}
   */
  get searchData() {
    return this.jCal[1].map((x) => x[0] + ":" + x[3]);
  }
  /**
   * Add the contact to the group
   *
   * @param {string} group the group to add the contact to
   * @memberof Contact
   */
  addToGroup(group) {
    if (this.groups.indexOf(group) === -1) {
      if (this.groups.length > 0) {
        this.vCard.getFirstProperty("categories").setValues(this.groups.concat(group));
      } else {
        this.vCard.updatePropertyWithValue("categories", [group]);
      }
    }
  }
  toStringStripQuotes() {
    const regexp = /TYPE="([a-zA-Z-,]+)"/gmi;
    const card = this.vCard.toString();
    return card.replace(regexp, "TYPE=$1");
  }
}
const badGenderType = {
  name: "bad gender type",
  run: (contact) => {
    return contact.vCard.hasProperty("gender") && contact.vCard.getFirstProperty("gender").getFirstParameter("type");
  },
  fix: (contact) => {
    const gender = contact.vCard.getFirstProperty("gender");
    const type = gender.getFirstParameter("type");
    const option = Object.values(rfcProps.properties.gender.options).find((opt) => opt.id === type);
    if (option) {
      gender.removeParameter("type");
      gender.setValue(option.id);
      return true;
    }
    return false;
  }
};
const duplicateTypes = {
  name: "duplicate types",
  run: (contact) => {
    try {
      const props = contact.vCard.getAllProperties().map((prop) => prop.getParameter("type")).filter((prop) => Array.isArray(prop));
      const fixed = props.map((prop) => [...new Set(prop)]);
      if (props.join("") !== fixed.join("")) {
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  },
  fix: (contact) => {
    let results = false;
    try {
      const props = contact.vCard.getAllProperties();
      props.forEach((prop) => {
        const icalString = prop.toICALString();
        const param = prop.getParameter("type");
        const fixed = [...new Set(param)];
        if (param && Array.isArray(param) && param.join("") !== fixed.join("")) {
          prop.setParameter("type", fixed);
          console.debug("Additional debug: duplicate types", { old: icalString, new: prop.toICALString() });
          results = true;
        }
      });
    } catch (error) {
      console.error(error);
    }
    return results;
  }
};
const invalidREV = {
  name: "invalid REV",
  silent: true,
  run: (contact) => {
    try {
      const hasRev = contact.vCard.hasProperty("rev");
      const rev = hasRev && contact.vCard.getFirstProperty("rev");
      const revValue = rev && rev.getFirstValue();
      if (revValue) {
        const version = contact.version;
        const type = revValue.icalclass;
        if (version === "3.0" && type === "vcardtime") {
          return false;
        }
        if (version === "4.0" && type === "icaltime") {
          return false;
        }
      }
    } catch (error) {
      return true;
    }
    return true;
  },
  fix: (contact) => {
    try {
      contact.vCard.removeProperty("rev");
      const rev = new ICALmodule.VCardTime(null, null, "date-time");
      rev.fromUnixTime(Date.now() / 1e3);
      contact.vCard.addPropertyWithValue("rev", rev);
      return true;
    } catch (error) {
      return false;
    }
  }
};
const missingFN = {
  name: "missing FN",
  run: (contact) => {
    return !contact.vCard.hasProperty("fn") || contact.vCard.getFirstPropertyValue("fn") === "" || // we don't want to fix newly created contacts
    contact.dav && contact.vCard.getFirstPropertyValue("fn").toLowerCase() === t("contacts", "New contact").toLowerCase();
  },
  fix: (contact) => {
    if (contact.vCard.hasProperty("n")) {
      const n2 = contact.vCard.getFirstPropertyValue("n");
      const fullName = n2.slice(0, 2).reverse().join(" ");
      if (fullName && fullName.trim() !== "") {
        contact.fullName = fullName;
        return true;
      }
      return false;
    }
    return false;
  }
};
const checks = [
  badGenderType,
  duplicateTypes,
  invalidREV,
  missingFN
];
function validate(contact) {
  let result = false;
  if (contact instanceof Contact) {
    checks.forEach((check) => {
      try {
        if (check.run(contact)) {
          if (!check.fix(contact)) {
            console.warn("The following contact needed a correction that failed:", check.name, contact);
          } else {
            if (!check.silent) {
              result = true;
            }
            console.info("The following contact has been repaired:", check.name, contact);
          }
        }
      } catch (error) {
        console.error("Error during the check:", check.name, contact, error);
      }
    });
    return result;
  } else {
    throw new Error("Invalid contact provided");
  }
}
const OrgChartsMixin = {
  methods: {
    // The current component root
    otherContacts(self2) {
      return otherContacts({
        $store: this.$store,
        self: self2
      });
    }
  }
};
const _sfc_main$o = {
  name: "IconAddressBook",
  props: {
    title: {
      type: String,
      default: ""
    },
    size: {
      type: Number,
      default: 20
    },
    fillColor: {
      type: String,
      default: "currentColor"
    }
  }
};
var _sfc_render$o = function render14(_c, _vm) {
  return _c("span", _vm._g(_vm._b({ staticClass: "material-design-icon icon-address-book", class: [_vm.data.class, _vm.data.staticClass], attrs: { "aria-hidden": !_vm.props.title, "aria-label": _vm.props.title, "role": "img" } }, "span", _vm.data.attrs, false), _vm.listeners), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.props.fillColor, "width": _vm.props.size, "height": _vm.props.size, "viewBox": "0 0 1792 1792" } }, [_c("path", { attrs: { "d": "M0 0h24v24H0V0z", "fill": "none" } }), _c("path", { attrs: { "d": "M1703 478q40 57 18 129l-275 906q-19 64-76.5 107.5t-122.5 43.5h-923q-77 0-148.5-53.5t-99.5-131.5q-24-67-2-127 0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5 16.5-23.5q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5t27.5-96.5q1-8-3-25.5t-2-26.5q2-8 9-18t18-23 17-21q8-12 16.5-30.5t15-35 16-36 19.5-32 26.5-23.5 36-11.5 47.5 5.5l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5t-128.5 34.5h-869q-27 0-38 15-11 16-1 43 24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57 38 15 59 43zm-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5t16.5-22.5l21-64q4-13-2-22.5t-20-9.5h-608q-13 0-25.5 9.5t-16.5 22.5z" } })])]);
};
var _sfc_staticRenderFns$o = [];
var __component__$o = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$o,
  _sfc_render$o,
  _sfc_staticRenderFns$o,
  true,
  null,
  null
);
const IconAddressBook = __component__$o.exports;
const _sfc_main$n = {
  name: "MapMarkerIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$n = function render15() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon map-marker-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$n = [];
var __component__$n = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$n,
  _sfc_render$n,
  _sfc_staticRenderFns$n,
  false,
  null,
  null
);
const IconMapMaker = __component__$n.exports;
const _sfc_main$m = {
  name: "WebIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$m = function render16() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon web-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$m = [];
var __component__$m = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$m,
  _sfc_render$m,
  _sfc_staticRenderFns$m,
  false,
  null,
  null
);
const IconWeb = __component__$m.exports;
const _sfc_main$l = {
  name: "CakeVariantIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$l = function render17() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon cake-variant-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$l = [];
var __component__$l = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$l,
  _sfc_render$l,
  _sfc_staticRenderFns$l,
  false,
  null,
  null
);
const IconCakeVariant = __component__$l.exports;
const _sfc_main$k = {
  name: "MessageReplyTextIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$k = function render18() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon message-reply-text-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$k = [];
var __component__$k = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$k,
  _sfc_render$k,
  _sfc_staticRenderFns$k,
  false,
  null,
  null
);
const IconMessageReplyText = __component__$k.exports;
const _sfc_main$j = {
  name: "HeartIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$j = function render19() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon heart-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$j = [];
var __component__$j = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$j,
  _sfc_render$j,
  _sfc_staticRenderFns$j,
  false,
  null,
  null
);
const IconHeart = __component__$j.exports;
const _sfc_main$i = {
  name: "AccountSupervisorIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$i = function render20() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon account-supervisor-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M16.5,12A2.5,2.5 0 0,0 19,9.5A2.5,2.5 0 0,0 16.5,7A2.5,2.5 0 0,0 14,9.5A2.5,2.5 0 0,0 16.5,12M9,11A3,3 0 0,0 12,8A3,3 0 0,0 9,5A3,3 0 0,0 6,8A3,3 0 0,0 9,11M16.5,14C14.67,14 11,14.92 11,16.75V19H22V16.75C22,14.92 18.33,14 16.5,14M9,13C6.67,13 2,14.17 2,16.5V19H9V16.75C9,15.9 9.33,14.41 11.37,13.28C10.5,13.1 9.66,13 9,13Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$i = [];
var __component__$i = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$i,
  _sfc_render$i,
  _sfc_staticRenderFns$i,
  false,
  null,
  null
);
const IconAccountSupervisor = __component__$i.exports;
const _sfc_main$h = {
  name: "CalendarHeartOutlineIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$h = function render21() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon calendar-heart-outline-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M16 12.2C16 13.71 14.64 14.94 12.58 16.81L12 17.34L11.42 16.81C9.36 14.94 8 13.71 8 12.2C8 10.97 8.97 10 10.2 10C10.9 10 11.56 10.32 12 10.83C12.44 10.32 13.1 10 13.8 10C15.03 10 16 10.97 16 12.2M21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5M5 5V7H19V5H5M19 19V9H5V19H19Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$h = [];
var __component__$h = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$h,
  _sfc_render$h,
  _sfc_staticRenderFns$h,
  false,
  null,
  null
);
const IconCalendarHeartOutline = __component__$h.exports;
const _sfc_main$g = {
  name: "CoffinIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$g = function render22() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon coffin-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M8,22L5,8L8,2H16L19,8L16,22H8M11,6V8H9V10H11V15H13V10H15V8H13V6H11Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$g = [];
var __component__$g = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$g,
  _sfc_render$g,
  _sfc_staticRenderFns$g,
  false,
  null,
  null
);
const IconCoffin = __component__$g.exports;
const _sfc_main$f = {
  name: "BadgeAccountHorizontalIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$f = function render23() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon badge-account-horizontal-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M22,4H14V7H10V4H2A2,2 0 0,0 0,6V20A2,2 0 0,0 2,22H22A2,2 0 0,0 24,20V6A2,2 0 0,0 22,4M8,9A2,2 0 0,1 10,11A2,2 0 0,1 8,13A2,2 0 0,1 6,11A2,2 0 0,1 8,9M12,17H4V16C4,14.67 6.67,14 8,14C9.33,14 12,14.67 12,16V17M20,18H14V16H20V18M20,14H14V12H20V14M20,10H14V8H20V10M13,6H11V2H13V6Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$f = [];
var __component__$f = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$f,
  _sfc_render$f,
  _sfc_staticRenderFns$f,
  false,
  null,
  null
);
const IconBadgeAccountHorizontal = __component__$f.exports;
const _sfc_main$e = {
  name: "CloudIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$e = function render24() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon cloud-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M6.5 20Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$e = [];
var __component__$e = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$e,
  _sfc_render$e,
  _sfc_staticRenderFns$e,
  false,
  null,
  null
);
const IconCloud = __component__$e.exports;
const _sfc_main$d = {
  name: "MapIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$d = function render25() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon map-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$d = [];
var __component__$d = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$d,
  _sfc_render$d,
  _sfc_staticRenderFns$d,
  false,
  null,
  null
);
const IconMap = __component__$d.exports;
const _sfc_main$c = {
  name: "TextIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$c = function render26() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon text-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$c = [];
var __component__$c = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$c,
  _sfc_render$c,
  _sfc_staticRenderFns$c,
  false,
  null,
  null
);
const IconText = __component__$c.exports;
const _sfc_main$b = {
  name: "TranslateVariantIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$b = function render27() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon translate-variant-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M11 1H3C1.9 1 1 1.9 1 3V15L4 12H9V11C9 8.8 10.79 7 13 7V3C13 1.9 12.1 1 11 1M11 4L9.5 4C9.16 5.19 8.54 6.3 7.68 7.26L7.66 7.28L8.92 8.53L8.55 9.54L7 8L4.5 10.5L3.81 9.77L6.34 7.28C5.72 6.59 5.22 5.82 4.86 5H5.85C6.16 5.6 6.54 6.17 7 6.68C7.72 5.88 8.24 4.97 8.57 4L3 4V3H6.5V2H7.5V3H11V4M21 9H13C11.9 9 11 9.9 11 11V18C11 19.1 11.9 20 13 20H20L23 23V11C23 9.9 22.1 9 21 9M19.63 19L18.78 16.75H15.22L14.38 19H12.88L16.25 10H17.75L21.13 19H19.63M17 12L18.22 15.25H15.79L17 12Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$b = [];
var __component__$b = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$b,
  _sfc_render$b,
  _sfc_staticRenderFns$b,
  false,
  null,
  null
);
const IconTranslateVariant = __component__$b.exports;
const _sfc_main$a = {
  name: "AccountBoxMultipleIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$a = function render28() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon account-box-multiple-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H8A2,2 0 0,1 6,16V4A2,2 0 0,1 8,2H20M17,7A3,3 0 0,0 14,4A3,3 0 0,0 11,7A3,3 0 0,0 14,10A3,3 0 0,0 17,7M8,15V16H20V15C20,13 16,11.9 14,11.9C12,11.9 8,13 8,15Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$a = [];
var __component__$a = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$a,
  _sfc_render$a,
  _sfc_staticRenderFns$a,
  false,
  null,
  null
);
const IconAccountBoxMultiple = __component__$a.exports;
const _sfc_main$9 = {
  name: "AccountSwitchIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$9 = function render29() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon account-switch-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M16 9C22 9 22 13 22 13V15H16V13C16 13 16 11.31 14.85 9.8C14.68 9.57 14.47 9.35 14.25 9.14C14.77 9.06 15.34 9 16 9M2 13C2 13 2 9 8 9S14 13 14 13V15H2V13M9 17V19H15V17L18 20L15 23V21H9V23L6 20L9 17M8 1C6.34 1 5 2.34 5 4S6.34 7 8 7 11 5.66 11 4 9.66 1 8 1M16 1C14.34 1 13 2.34 13 4S14.34 7 16 7 19 5.66 19 4 17.66 1 16 1Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$9 = [];
var __component__$9 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$9,
  _sfc_render$9,
  _sfc_staticRenderFns$9,
  false,
  null,
  null
);
const IconAccountSwitch = __component__$9.exports;
const _sfc_main$8 = {
  name: "PropertyTitleIcon",
  components: {
    IconPlus: IconAdd,
    IconAddressBook,
    IconEmail,
    IconPhone: IconCall,
    IconDelete,
    IconPencil: IconRename,
    IconMapMaker,
    IconMultiple: IconContact,
    IconWeb,
    IconCakeVariant,
    IconMessageReplyText,
    IconHeart,
    IconAccountSupervisor,
    IconAccount: IconUser,
    IconCalendarHeartOutline,
    IconCoffin,
    IconBadgeAccountHorizontal,
    IconCloud,
    IconMessageProcessing: IconMessage,
    IconMap,
    IconText,
    IconTranslateVariant,
    IconAccountBoxMultiple,
    IconAccountSwitch
  },
  props: {
    icon: {
      type: String,
      default: "",
      required: false
    }
  }
};
var _sfc_render$8 = function render30() {
  var _vm = this, _c = _vm._self._c;
  return _vm.icon === "icon-add" ? _c("IconPlus", { attrs: { "size": 20 } }) : _vm.icon === "icon-address-book" ? _c("IconAddressBook", { attrs: { "size": 20 } }) : _vm.icon === "icon-mail" ? _c("IconEmail", { attrs: { "size": 20 } }) : _vm.icon === "icon-phone" ? _c("IconPhone", { attrs: { "size": 20 } }) : _vm.icon === "icon-delete" ? _c("IconDelete", { attrs: { "size": 20 } }) : _vm.icon === "icon-rename" ? _c("IconPencil", { attrs: { "size": 20 } }) : _vm.icon === "icon-address" ? _c("IconMapMaker", { attrs: { "size": 20 } }) : _vm.icon === "icon-contacts-dark" ? _c("IconMultiple", { attrs: { "size": 20 } }) : _vm.icon === "icon-public" || _vm.icon === "icon-timezone" ? _c("IconWeb", { attrs: { "size": 20 } }) : _vm.icon === "icon-calendar-dark" ? _c("IconCakeVariant", { attrs: { "size": 20 } }) : _vm.icon === "icon-comment" ? _c("IconMessageReplyText", { attrs: { "size": 20 } }) : _vm.icon === "icon-social" ? _c("IconHeart", { attrs: { "size": 20 } }) : _vm.icon === "icon-group" || _vm.icon === "icon-manager" ? _c("IconAccountSupervisor", { attrs: { "size": 20 } }) : _vm.icon === "icon-gender" || _vm.icon === "icon-user" ? _c("IconAccount", { attrs: { "size": 20 } }) : _vm.icon === "icon-anniversary" ? _c("IconCalendarHeartOutline", { attrs: { "size": 20 } }) : _vm.icon === "icon-death-day" ? _c("IconCoffin", { attrs: { "size": 20 } }) : _vm.icon === "icon-detailed-name" ? _c("IconBadgeAccountHorizontal", { attrs: { "size": 20 } }) : _vm.icon === "icon-federated-cloud-id" ? _c("IconCloud", { attrs: { "size": 20 } }) : _vm.icon === "icon-instant-message" ? _c("IconMessageProcessing", { attrs: { "size": 20 } }) : _vm.icon === "icon-location" ? _c("IconMap", { attrs: { "size": 20 } }) : _vm.icon === "icon-note" ? _c("IconText", { attrs: { "size": 20 } }) : _vm.icon === "icon-spoken-lang" ? _c("IconTranslateVariant", { attrs: { "size": 20 } }) : _vm.icon === "icon-related-contact" ? _c("IconAccountBoxMultiple", { attrs: { "size": 20 } }) : _vm.icon === "icon-relation-to-you" ? _c("IconAccountSwitch", { attrs: { "size": 20 } }) : _vm._e();
};
var _sfc_staticRenderFns$8 = [];
var __component__$8 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$8,
  _sfc_render$8,
  _sfc_staticRenderFns$8,
  false,
  null,
  "4b68602d"
);
const PropertyTitleIcon = __component__$8.exports;
const PropertyMixin = {
  props: {
    // Default property type. e.g. "WORK,HOME"
    selectType: {
      type: [Object],
      default: () => {
      }
    },
    // Coming from the rfcProps Model
    propModel: {
      type: Object,
      default: () => {
      },
      required: true
    },
    propType: {
      type: String,
      default: "text"
    },
    // The current property passed as Object
    property: {
      type: Object,
      default: () => {
      },
      required: true
    },
    // Allows us to know if we need to
    // add the property header or not
    isFirstProperty: {
      type: Boolean,
      default: true
    },
    // Allows us to know if we need to
    // add an extra space at the end
    isLastProperty: {
      type: Boolean,
      default: true
    },
    // Is it read-only?
    isReadOnly: {
      type: Boolean,
      required: true
    },
    // The available TYPE options from the propModel
    // not used on the PropertySelect
    options: {
      type: Array,
      default: () => []
    },
    localContact: {
      type: Contact,
      default: null
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    bus: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      // INIT data when the contact change.
      // This is a simple copy that we can update as
      // many times as we can and debounce-fire the update
      // later
      localValue: this.value,
      localType: this.selectType
    };
  },
  computed: {
    actions() {
      return this.propModel.actions ? this.propModel.actions : [];
    },
    haveAction() {
      return this.actions && this.actions.length > 0;
    }
  },
  watch: {
    /**
     * Since we're updating a local data based on the value prop,
     * we need to make sure to update the local data on contact change
     * in case the v-Node is reused.
     */
    value() {
      this.localValue = this.value;
    },
    selectType() {
      this.localType = this.selectType;
    }
  },
  methods: {
    /**
     * Delete the property
     */
    deleteProperty() {
      this.$emit("delete");
    },
    /**
     * Debounce and send update event to parent
     */
    updateValue: debounce(function(e) {
      this.$emit("update:value", this.localValue);
    }, 500),
    updateType: debounce(function(e) {
      this.$emit("update:selectType", this.localType);
    }, 500),
    createLabel(label) {
      let propGroup = this.property.name;
      if (!this.property.name.startsWith("nextcloud")) {
        propGroup = `nextcloud${this.getNcGroupCount() + 1}.${this.property.name}`;
        this.property.jCal[0] = propGroup;
      }
      const group = propGroup.split(".")[0];
      const name = propGroup.split(".")[1];
      this.localContact.vCard.addPropertyWithValue(`${group}.x-ablabel`, label.name);
      setPropertyAlias(name, propGroup);
      this.$emit("update");
    },
    getNcGroupCount() {
      const props = this.localContact.jCal[1].map((prop) => prop[0].split(".")[0]).filter((name) => name.startsWith("nextcloud")).map((prop) => parseInt(prop.split("nextcloud")[1]));
      return props.length > 0 ? Math.max.apply(null, props) : 0;
    }
  }
};
const _sfc_main$7 = {
  name: "PropertyTitle",
  components: {
    IconPlus: IconAdd,
    Actions: NcActions,
    ActionButton: NcActionButton,
    PropertyTitleIcon
  },
  props: {
    icon: {
      type: String,
      default: "",
      required: true
    },
    readableName: {
      type: String,
      default: "",
      required: true
    },
    isReadOnly: {
      type: Boolean,
      required: true
    },
    property: {
      type: Object,
      default: () => {
      }
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    bus: {
      type: Object,
      required: false
    }
  },
  methods: {
    /**
     * Add prop of type id
     *
     * @param {string} id type of prop
     */
    onAddProp(id) {
      this.bus.emit("add-prop", id);
    }
  }
};
var _sfc_render$7 = function render31() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "property property--title" }, [_c("div", { staticClass: "property__label" }, [_c("PropertyTitleIcon", { attrs: { "icon": _vm.icon } })], 1), _c("h3", { staticClass: "property__value" }, [_vm._v(" " + _vm._s(_vm.readableName) + " ")]), _c("div", { staticClass: "property__actions" }, [_vm._t("actions", function() {
    return [!_vm.isReadOnly && _vm.isMultiple ? _c("Actions", { staticClass: "property__actions" }, [_c("ActionButton", { on: { "click": function($event) {
      return _vm.onAddProp(_vm.property.name);
    } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
      return [_c("IconPlus", { attrs: { "size": 20 } })];
    }, proxy: true }], null, false, 1991456921) }, [_vm._v(" " + _vm._s(_vm.t("contacts", "Add property of this type")) + " ")])], 1) : _vm._e()];
  })], 2)]);
};
var _sfc_staticRenderFns$7 = [];
var __component__$7 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$7,
  _sfc_render$7,
  _sfc_staticRenderFns$7,
  false,
  null,
  "4e94eacc"
);
const PropertyTitle = __component__$7.exports;
const _sfc_main$6 = {
  name: "PropertyActions",
  components: {
    Actions: NcActions,
    ActionButton: NcActionButton,
    IconDelete
  },
  props: {
    actions: {
      type: Array,
      default: () => []
    },
    propertyComponent: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteProperty() {
      this.$emit("delete");
    }
  }
};
var _sfc_render$6 = function render32() {
  var _vm = this, _c = _vm._self._c;
  return _c("Actions", [_c("ActionButton", { on: { "click": _vm.deleteProperty }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("IconDelete", { attrs: { "size": 20 } })];
  }, proxy: true }]) }, [_vm._v(" " + _vm._s(_vm.t("contacts", "Delete")) + " ")]), _vm._l(_vm.actions, function(action) {
    return _c(action, { key: action.name, tag: "component", attrs: { "component": _vm.propertyComponent } });
  })], 2);
};
var _sfc_staticRenderFns$6 = [];
var __component__$6 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$6,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  false,
  null,
  "f16d3fb5"
);
const PropertyActions = __component__$6.exports;
const _sfc_main$5 = {
  name: "OpenInNewIcon",
  emits: ["click"],
  props: {
    title: {
      type: String
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
};
var _sfc_render$5 = function render33() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon open-in-new-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$5 = [];
var __component__$5 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$5,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  false,
  null,
  null
);
const OpenInNewIcon = __component__$5.exports;
const _sfc_main$4 = {
  name: "PropertyText",
  components: {
    NcSelect,
    NcTextArea,
    NcTextField,
    PropertyTitle,
    PropertyActions,
    OpenInNewIcon
  },
  mixins: [PropertyMixin],
  props: {
    propName: {
      type: String,
      default: "text",
      required: true
    },
    value: {
      type: String,
      default: "",
      required: true
    }
  },
  computed: {
    showProperty() {
      return this.isReadOnly && this.localValue || !this.isReadOnly;
    },
    inputmode() {
      if (this.propName === "tel") {
        return "tel";
      } else if (this.propName === "email") {
        return "email";
      } else if (this.propType === "uri") {
        return "url";
      }
      return false;
    },
    URLScheme() {
      if (this.propName === "tel") {
        return "tel:";
      } else if (this.propName === "email") {
        return "mailto:";
      } else if (this.propType === "uri" && this.localValue && this.localValue.indexOf(":") === -1) {
        return "https://";
      } else if (this.propType === "uri") {
        return "";
      }
      return false;
    },
    // format external link
    externalHandler() {
      if (this.URLScheme !== false) {
        return `${this.URLScheme}${this.localValue}`;
      }
      return "";
    },
    haveExtHandler() {
      return this.externalHandler.trim() !== "" && this.localValue && this.localValue.length > 0;
    },
    /**
     * Return the selected type placeholder if any
     * or the propModel default placeholder
     *
     * @return {string}
     */
    placeholder() {
      if (this.localType?.placeholder) {
        return this.localType.placeholder;
      }
      return this.propModel.placeholder;
    }
  },
  mounted() {
    this.resizeHeight();
  },
  methods: {
    /**
     * Watch textarea resize and update the gridSize accordingly
     */
    resizeHeight: debounce(function() {
      if (this.$refs.textarea && this.$refs.textarea.offsetHeight) {
        this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight + 2}px`;
      }
    }, 100),
    /**
     * Since we want to also trigger a resize
     * but both of them have different debounce
     * let's use a standard methods and call them both
     *
     * @param {object} e event
     */
    updateValueNoDebounce(e) {
      this.resizeHeight(e);
      this.updateValue(e);
    }
  }
};
var _sfc_render$4 = function render34() {
  var _vm = this, _c = _vm._self._c;
  return _vm.propModel && _vm.showProperty ? _c("div", { staticClass: "property" }, [_vm.isFirstProperty && _vm.propModel.icon ? _c("PropertyTitle", { attrs: { "property": _vm.property, "is-multiple": _vm.isMultiple, "is-read-only": _vm.isReadOnly, "bus": _vm.bus, "icon": _vm.propModel.icon, "readable-name": _vm.propModel.readableName } }) : _vm._e(), _c("div", { staticClass: "property__row" }, [_c("div", { staticClass: "property__label" }, [_vm.isReadOnly && _vm.propModel.options ? _c("span", [_vm._v(" " + _vm._s(_vm.localType && _vm.localType.name || "") + " ")]) : !_vm.isReadOnly && _vm.propModel.options ? _c("NcSelect", { attrs: { "options": _vm.options, "placeholder": _vm.t("contacts", "Select type"), "taggable": true, "tag-placeholder": "create", "disabled": _vm.isReadOnly, "track-by": "id", "label": "name" }, on: { "option:created": _vm.createLabel, "input": _vm.updateType }, model: { value: _vm.localType, callback: function($$v) {
    _vm.localType = $$v;
  }, expression: "localType" } }) : _vm.selectType ? _c("span", [_vm._v(" " + _vm._s(_vm.selectType.name) + " ")]) : _c("span", [_vm._v(" " + _vm._s(_vm.propModel.readableName) + " ")])], 1), _c("div", { staticClass: "property__value" }, [_vm.propName === "note" ? _c("NcTextArea", { ref: "textarea", attrs: { "id": "textarea", "value": _vm.localValue, "inputmode": _vm.inputmode, "readonly": _vm.isReadOnly }, on: { "update:value": [function($event) {
    _vm.localValue = $event;
  }, _vm.updateValueNoDebounce], "mousemove": _vm.resizeHeight, "keypress": _vm.resizeHeight } }) : _c("NcTextField", { class: { "property__value--with-ext": _vm.haveExtHandler }, attrs: { "value": _vm.localValue, "inputmode": _vm.inputmode, "readonly": _vm.isReadOnly, "type": "text", "placeholder": _vm.placeholder }, on: { "update:value": [function($event) {
    _vm.localValue = $event;
  }, _vm.updateValue] } }), _vm.haveExtHandler && _vm.isReadOnly ? _c("a", { staticClass: "property__ext", attrs: { "href": _vm.externalHandler, "target": "_blank" } }, [_c("OpenInNewIcon", { attrs: { "size": 20 } })], 1) : _vm._e()], 1), _c("div", { staticClass: "property__actions" }, [!_vm.isReadOnly ? _c("PropertyActions", { attrs: { "actions": _vm.actions, "property-component": this }, on: { "delete": _vm.deleteProperty } }) : _vm._e()], 1)])], 1) : _vm._e();
};
var _sfc_staticRenderFns$4 = [];
var __component__$4 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  "a9a479d4"
);
const PropertyText = __component__$4.exports;
const _sfc_main$3 = {
  name: "PropertyMultipleText",
  components: {
    NcSelect,
    NcTextField,
    PropertyTitle,
    PropertyActions
  },
  mixins: [PropertyMixin],
  props: {
    value: {
      type: [Array, Object],
      default: () => [],
      required: true
    }
  },
  computed: {
    self() {
      return this;
    },
    filteredValue() {
      return this.localValue.filter((value, index2) => index2 > 0);
    },
    /**
     * Show the actions menu in the first row (instead of the title).
     * This is true for all props that either have a type select or a fixed/unknown type.
     * Otherwise, show the actions menu next to the title to prevent an empty row with just an
     * actions menu.
     *
     * @return {boolean}
     */
    showActionsInFirstRow() {
      return !!this.propModel.options || !!this.selectType || !this.property.isStructuredValue;
    }
  }
};
var _sfc_render$3 = function render35() {
  var _vm = this, _c = _vm._self._c;
  return _vm.propModel ? _c("div", { staticClass: "property property--multiple-text" }, [_vm.isFirstProperty && _vm.propModel.icon ? _c("PropertyTitle", { attrs: { "property": _vm.property, "is-multiple": _vm.isMultiple, "is-read-only": _vm.isReadOnly, "bus": _vm.bus, "icon": _vm.propModel.icon, "readable-name": _vm.propModel.readableName }, scopedSlots: _vm._u([{ key: "actions", fn: function() {
    return [!_vm.showActionsInFirstRow && !_vm.isReadOnly ? _c("PropertyActions", { staticClass: "property__actions", attrs: { "actions": _vm.actions, "property-component": _vm.self }, on: { "delete": _vm.deleteProperty } }) : _vm._e()];
  }, proxy: true }], null, false, 1302149392) }) : _vm._e(), _vm.showActionsInFirstRow ? _c("div", { staticClass: "property__row" }, [_c("div", { staticClass: "property__label" }, [_vm.isReadOnly && _vm.propModel.options ? _c("span", [_vm._v(" " + _vm._s(_vm.localType && _vm.localType.name || "") + " ")]) : !_vm.isReadOnly && _vm.propModel.options ? _c("NcSelect", { attrs: { "options": _vm.options, "placeholder": _vm.t("contacts", "Select type"), "taggable": true, "tag-placeholder": "create", "track-by": "id", "label": "name" }, on: { "option:created": _vm.createLabel, "input": _vm.updateType }, model: { value: _vm.localType, callback: function($$v) {
    _vm.localType = $$v;
  }, expression: "localType" } }) : _vm.selectType ? _c("span", [_vm._v(" " + _vm._s(_vm.selectType.name) + " ")]) : !_vm.property.isStructuredValue ? _c("span", [_vm._v(" " + _vm._s(_vm.isFirstProperty ? "" : _vm.propModel.readableName) + " ")]) : _vm._e()], 1), _c("div", { staticClass: "property__value" }, [!_vm.property.isStructuredValue ? _c("input", { directives: [{ name: "model", rawName: "v-model.trim", value: _vm.localValue[0], expression: "localValue[0]", modifiers: { "trim": true } }], attrs: { "readonly": _vm.isReadOnly, "type": "text" }, domProps: { "value": _vm.localValue[0] }, on: { "input": [function($event) {
    if ($event.target.composing) return;
    _vm.$set(_vm.localValue, 0, $event.target.value.trim());
  }, _vm.updateValue], "blur": function($event) {
    return _vm.$forceUpdate();
  } } }) : _vm._e()]), _c("div", { staticClass: "property__actions" }, [_vm.showActionsInFirstRow && !_vm.isReadOnly ? _c("PropertyActions", { attrs: { "actions": _vm.actions, "property-component": this }, on: { "delete": _vm.deleteProperty } }) : _vm._e()], 1)]) : _vm._e(), _vm.propModel.displayOrder && _vm.propModel.readableValues ? _vm._l(_vm.propModel.displayOrder, function(index2) {
    return _c("div", { key: index2, staticClass: "property__row" }, [_vm.isReadOnly && _vm.localValue[index2] || !_vm.isReadOnly ? [_c("div", { staticClass: "property__label" }, [_c("span", [_vm._v(_vm._s(_vm.propModel.readableValues[index2]))])]), _c("div", { staticClass: "property__value" }, [_c("NcTextField", { attrs: { "value": _vm.localValue[index2], "readonly": _vm.isReadOnly, "type": "text", "label-outside": true, "label": _vm.propModel.readableValues[index2] }, on: { "update:value": [function($event) {
      return _vm.$set(_vm.localValue, index2, $event);
    }, _vm.updateValue] } })], 1), _c("div", { staticClass: "property__actions" })] : _vm._e()], 2);
  }) : _vm._l(_vm.filteredValue, function(value, index2) {
    return _c("div", { key: index2, staticClass: "property__row" }, [_vm.isReadOnly && _vm.filteredValue[index2] || !_vm.isReadOnly ? [_c("div", { staticClass: "property__label" }), _c("div", { staticClass: "property__value" }, [_c("NcTextField", { attrs: { "value": _vm.filteredValue[index2], "readonly": _vm.isReadOnly, "label-outside": true, "label": _vm.propModel.readableValues[index2], "type": "text" }, on: { "update:value": [function($event) {
      return _vm.$set(_vm.filteredValue, index2, $event);
    }, _vm.updateValue] } })], 1), _c("div", { staticClass: "property__actions" })] : _vm._e()], 2);
  })], 2) : _vm._e();
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null
);
const PropertyMultipleText = __component__$3.exports;
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var hookCallback;
function hooks() {
  return hookCallback.apply(null, arguments);
}
function setHookCallback(callback) {
  hookCallback = callback;
}
function isArray(input) {
  return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
}
function isObject(input) {
  return input != null && Object.prototype.toString.call(input) === "[object Object]";
}
function hasOwnProp(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
function isObjectEmpty(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  } else {
    var k;
    for (k in obj) {
      if (hasOwnProp(obj, k)) {
        return false;
      }
    }
    return true;
  }
}
function isUndefined(input) {
  return input === void 0;
}
function isNumber(input) {
  return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
}
function isDate(input) {
  return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
}
function map(arr, fn) {
  var res = [], i, arrLen = arr.length;
  for (i = 0; i < arrLen; ++i) {
    res.push(fn(arr[i], i));
  }
  return res;
}
function extend(a, b) {
  for (var i in b) {
    if (hasOwnProp(b, i)) {
      a[i] = b[i];
    }
  }
  if (hasOwnProp(b, "toString")) {
    a.toString = b.toString;
  }
  if (hasOwnProp(b, "valueOf")) {
    a.valueOf = b.valueOf;
  }
  return a;
}
function createUTC(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, true).utc();
}
function defaultParsingFlags() {
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}
function getParsingFlags(m) {
  if (m._pf == null) {
    m._pf = defaultParsingFlags();
  }
  return m._pf;
}
var some;
if (Array.prototype.some) {
  some = Array.prototype.some;
} else {
  some = function(fun) {
    var t2 = Object(this), len = t2.length >>> 0, i;
    for (i = 0; i < len; i++) {
      if (i in t2 && fun.call(this, t2[i], i, t2)) {
        return true;
      }
    }
    return false;
  };
}
function isValid(m) {
  var flags = null, parsedParts = false, isNowValid = m._d && !isNaN(m._d.getTime());
  if (isNowValid) {
    flags = getParsingFlags(m);
    parsedParts = some.call(flags.parsedDateParts, function(i) {
      return i != null;
    });
    isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
    if (m._strict) {
      isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
    }
  }
  if (Object.isFrozen == null || !Object.isFrozen(m)) {
    m._isValid = isNowValid;
  } else {
    return isNowValid;
  }
  return m._isValid;
}
function createInvalid(flags) {
  var m = createUTC(NaN);
  if (flags != null) {
    extend(getParsingFlags(m), flags);
  } else {
    getParsingFlags(m).userInvalidated = true;
  }
  return m;
}
var momentProperties = hooks.momentProperties = [], updateInProgress = false;
function copyConfig(to2, from2) {
  var i, prop, val, momentPropertiesLen = momentProperties.length;
  if (!isUndefined(from2._isAMomentObject)) {
    to2._isAMomentObject = from2._isAMomentObject;
  }
  if (!isUndefined(from2._i)) {
    to2._i = from2._i;
  }
  if (!isUndefined(from2._f)) {
    to2._f = from2._f;
  }
  if (!isUndefined(from2._l)) {
    to2._l = from2._l;
  }
  if (!isUndefined(from2._strict)) {
    to2._strict = from2._strict;
  }
  if (!isUndefined(from2._tzm)) {
    to2._tzm = from2._tzm;
  }
  if (!isUndefined(from2._isUTC)) {
    to2._isUTC = from2._isUTC;
  }
  if (!isUndefined(from2._offset)) {
    to2._offset = from2._offset;
  }
  if (!isUndefined(from2._pf)) {
    to2._pf = getParsingFlags(from2);
  }
  if (!isUndefined(from2._locale)) {
    to2._locale = from2._locale;
  }
  if (momentPropertiesLen > 0) {
    for (i = 0; i < momentPropertiesLen; i++) {
      prop = momentProperties[i];
      val = from2[prop];
      if (!isUndefined(val)) {
        to2[prop] = val;
      }
    }
  }
  return to2;
}
function Moment(config) {
  copyConfig(this, config);
  this._d = new Date(config._d != null ? config._d.getTime() : NaN);
  if (!this.isValid()) {
    this._d = /* @__PURE__ */ new Date(NaN);
  }
  if (updateInProgress === false) {
    updateInProgress = true;
    hooks.updateOffset(this);
    updateInProgress = false;
  }
}
function isMoment(obj) {
  return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
}
function warn(msg) {
  if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
    console.warn("Deprecation warning: " + msg);
  }
}
function deprecate(msg, fn) {
  var firstTime = true;
  return extend(function() {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(null, msg);
    }
    if (firstTime) {
      var args = [], arg, i, key, argLen = arguments.length;
      for (i = 0; i < argLen; i++) {
        arg = "";
        if (typeof arguments[i] === "object") {
          arg += "\n[" + i + "] ";
          for (key in arguments[0]) {
            if (hasOwnProp(arguments[0], key)) {
              arg += key + ": " + arguments[0][key] + ", ";
            }
          }
          arg = arg.slice(0, -2);
        } else {
          arg = arguments[i];
        }
        args.push(arg);
      }
      warn(
        msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
      );
      firstTime = false;
    }
    return fn.apply(this, arguments);
  }, fn);
}
var deprecations = {};
function deprecateSimple(name, msg) {
  if (hooks.deprecationHandler != null) {
    hooks.deprecationHandler(name, msg);
  }
  if (!deprecations[name]) {
    warn(msg);
    deprecations[name] = true;
  }
}
hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;
function isFunction(input) {
  return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
}
function set(config) {
  var prop, i;
  for (i in config) {
    if (hasOwnProp(config, i)) {
      prop = config[i];
      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this["_" + i] = prop;
      }
    }
  }
  this._config = config;
  this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function mergeConfigs(parentConfig, childConfig) {
  var res = extend({}, parentConfig), prop;
  for (prop in childConfig) {
    if (hasOwnProp(childConfig, prop)) {
      if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
        res[prop] = {};
        extend(res[prop], parentConfig[prop]);
        extend(res[prop], childConfig[prop]);
      } else if (childConfig[prop] != null) {
        res[prop] = childConfig[prop];
      } else {
        delete res[prop];
      }
    }
  }
  for (prop in parentConfig) {
    if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
      res[prop] = extend({}, res[prop]);
    }
  }
  return res;
}
function Locale(config) {
  if (config != null) {
    this.set(config);
  }
}
var keys;
if (Object.keys) {
  keys = Object.keys;
} else {
  keys = function(obj) {
    var i, res = [];
    for (i in obj) {
      if (hasOwnProp(obj, i)) {
        res.push(i);
      }
    }
    return res;
  };
}
var defaultCalendar = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function calendar(key, mom, now2) {
  var output = this._calendar[key] || this._calendar["sameElse"];
  return isFunction(output) ? output.call(mom, now2) : output;
}
function zeroFill(number, targetLength, forceSign) {
  var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
  return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
function addFormatToken(token2, padded, ordinal2, callback) {
  var func = callback;
  if (typeof callback === "string") {
    func = function() {
      return this[callback]();
    };
  }
  if (token2) {
    formatTokenFunctions[token2] = func;
  }
  if (padded) {
    formatTokenFunctions[padded[0]] = function() {
      return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
    };
  }
  if (ordinal2) {
    formatTokenFunctions[ordinal2] = function() {
      return this.localeData().ordinal(
        func.apply(this, arguments),
        token2
      );
    };
  }
}
function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, "");
  }
  return input.replace(/\\/g, "");
}
function makeFormatFunction(format2) {
  var array = format2.match(formattingTokens), i, length;
  for (i = 0, length = array.length; i < length; i++) {
    if (formatTokenFunctions[array[i]]) {
      array[i] = formatTokenFunctions[array[i]];
    } else {
      array[i] = removeFormattingTokens(array[i]);
    }
  }
  return function(mom) {
    var output = "", i2;
    for (i2 = 0; i2 < length; i2++) {
      output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
    }
    return output;
  };
}
function formatMoment(m, format2) {
  if (!m.isValid()) {
    return m.localeData().invalidDate();
  }
  format2 = expandFormat(format2, m.localeData());
  formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
  return formatFunctions[format2](m);
}
function expandFormat(format2, locale2) {
  var i = 5;
  function replaceLongDateFormatTokens(input) {
    return locale2.longDateFormat(input) || input;
  }
  localFormattingTokens.lastIndex = 0;
  while (i >= 0 && localFormattingTokens.test(format2)) {
    format2 = format2.replace(
      localFormattingTokens,
      replaceLongDateFormatTokens
    );
    localFormattingTokens.lastIndex = 0;
    i -= 1;
  }
  return format2;
}
var defaultLongDateFormat = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function longDateFormat(key) {
  var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
  if (format2 || !formatUpper) {
    return format2;
  }
  this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
    if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
      return tok.slice(1);
    }
    return tok;
  }).join("");
  return this._longDateFormat[key];
}
var defaultInvalidDate = "Invalid date";
function invalidDate() {
  return this._invalidDate;
}
var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
function ordinal(number) {
  return this._ordinal.replace("%d", number);
}
var defaultRelativeTime = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function relativeTime(number, withoutSuffix, string, isFuture) {
  var output = this._relativeTime[string];
  return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
}
function pastFuture(diff2, output) {
  var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
  return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
}
var aliases = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function normalizeUnits(units) {
  return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
}
function normalizeObjectUnits(inputObject) {
  var normalizedInput = {}, normalizedProp, prop;
  for (prop in inputObject) {
    if (hasOwnProp(inputObject, prop)) {
      normalizedProp = normalizeUnits(prop);
      if (normalizedProp) {
        normalizedInput[normalizedProp] = inputObject[prop];
      }
    }
  }
  return normalizedInput;
}
var priorities = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function getPrioritizedUnits(unitsObj) {
  var units = [], u;
  for (u in unitsObj) {
    if (hasOwnProp(unitsObj, u)) {
      units.push({ unit: u, priority: priorities[u] });
    }
  }
  units.sort(function(a, b) {
    return a.priority - b.priority;
  });
  return units;
}
var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
regexes = {};
function addRegexToken(token2, regex, strictRegex) {
  regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
    return isStrict && strictRegex ? strictRegex : regex;
  };
}
function getParseRegexForToken(token2, config) {
  if (!hasOwnProp(regexes, token2)) {
    return new RegExp(unescapeFormat(token2));
  }
  return regexes[token2](config._strict, config._locale);
}
function unescapeFormat(s) {
  return regexEscape(
    s.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
      }
    )
  );
}
function regexEscape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function absFloor(number) {
  if (number < 0) {
    return Math.ceil(number) || 0;
  } else {
    return Math.floor(number);
  }
}
function toInt(argumentForCoercion) {
  var coercedNumber = +argumentForCoercion, value = 0;
  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
    value = absFloor(coercedNumber);
  }
  return value;
}
var tokens = {};
function addParseToken(token2, callback) {
  var i, func = callback, tokenLen;
  if (typeof token2 === "string") {
    token2 = [token2];
  }
  if (isNumber(callback)) {
    func = function(input, array) {
      array[callback] = toInt(input);
    };
  }
  tokenLen = token2.length;
  for (i = 0; i < tokenLen; i++) {
    tokens[token2[i]] = func;
  }
}
function addWeekParseToken(token2, callback) {
  addParseToken(token2, function(input, array, config, token3) {
    config._w = config._w || {};
    callback(input, config._w, config, token3);
  });
}
function addTimeToArrayFromToken(token2, input, config) {
  if (input != null && hasOwnProp(tokens, token2)) {
    tokens[token2](input, config._a, config, token2);
  }
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
addFormatToken("Y", 0, 0, function() {
  var y = this.year();
  return y <= 9999 ? zeroFill(y, 4) : "+" + y;
});
addFormatToken(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
addFormatToken(0, ["YYYY", 4], 0, "year");
addFormatToken(0, ["YYYYY", 5], 0, "year");
addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
addRegexToken("Y", matchSigned);
addRegexToken("YY", match1to2, match2);
addRegexToken("YYYY", match1to4, match4);
addRegexToken("YYYYY", match1to6, match6);
addRegexToken("YYYYYY", match1to6, match6);
addParseToken(["YYYYY", "YYYYYY"], YEAR);
addParseToken("YYYY", function(input, array) {
  array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken("YY", function(input, array) {
  array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken("Y", function(input, array) {
  array[YEAR] = parseInt(input, 10);
});
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
hooks.parseTwoDigitYear = function(input) {
  return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
};
var getSetYear = makeGetSet("FullYear", true);
function getIsLeapYear() {
  return isLeapYear(this.year());
}
function makeGetSet(unit, keepTime) {
  return function(value) {
    if (value != null) {
      set$1(this, unit, value);
      hooks.updateOffset(this, keepTime);
      return this;
    } else {
      return get2(this, unit);
    }
  };
}
function get2(mom, unit) {
  if (!mom.isValid()) {
    return NaN;
  }
  var d = mom._d, isUTC = mom._isUTC;
  switch (unit) {
    case "Milliseconds":
      return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
    case "Seconds":
      return isUTC ? d.getUTCSeconds() : d.getSeconds();
    case "Minutes":
      return isUTC ? d.getUTCMinutes() : d.getMinutes();
    case "Hours":
      return isUTC ? d.getUTCHours() : d.getHours();
    case "Date":
      return isUTC ? d.getUTCDate() : d.getDate();
    case "Day":
      return isUTC ? d.getUTCDay() : d.getDay();
    case "Month":
      return isUTC ? d.getUTCMonth() : d.getMonth();
    case "FullYear":
      return isUTC ? d.getUTCFullYear() : d.getFullYear();
    default:
      return NaN;
  }
}
function set$1(mom, unit, value) {
  var d, isUTC, year, month, date;
  if (!mom.isValid() || isNaN(value)) {
    return;
  }
  d = mom._d;
  isUTC = mom._isUTC;
  switch (unit) {
    case "Milliseconds":
      return void (isUTC ? d.setUTCMilliseconds(value) : d.setMilliseconds(value));
    case "Seconds":
      return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
    case "Minutes":
      return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
    case "Hours":
      return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
    case "Date":
      return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
    case "FullYear":
      break;
    default:
      return;
  }
  year = value;
  month = mom.month();
  date = mom.date();
  date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
  void (isUTC ? d.setUTCFullYear(year, month, date) : d.setFullYear(year, month, date));
}
function stringGet(units) {
  units = normalizeUnits(units);
  if (isFunction(this[units])) {
    return this[units]();
  }
  return this;
}
function stringSet(units, value) {
  if (typeof units === "object") {
    units = normalizeObjectUnits(units);
    var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
    for (i = 0; i < prioritizedLen; i++) {
      this[prioritized[i].unit](units[prioritized[i].unit]);
    }
  } else {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units](value);
    }
  }
  return this;
}
function mod(n2, x) {
  return (n2 % x + x) % x;
}
var indexOf;
if (Array.prototype.indexOf) {
  indexOf = Array.prototype.indexOf;
} else {
  indexOf = function(o2) {
    var i;
    for (i = 0; i < this.length; ++i) {
      if (this[i] === o2) {
        return i;
      }
    }
    return -1;
  };
}
function daysInMonth(year, month) {
  if (isNaN(year) || isNaN(month)) {
    return NaN;
  }
  var modMonth = mod(month, 12);
  year += (month - modMonth) / 12;
  return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
}
addFormatToken("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
addFormatToken("MMM", 0, 0, function(format2) {
  return this.localeData().monthsShort(this, format2);
});
addFormatToken("MMMM", 0, 0, function(format2) {
  return this.localeData().months(this, format2);
});
addRegexToken("M", match1to2, match1to2NoLeadingZero);
addRegexToken("MM", match1to2, match2);
addRegexToken("MMM", function(isStrict, locale2) {
  return locale2.monthsShortRegex(isStrict);
});
addRegexToken("MMMM", function(isStrict, locale2) {
  return locale2.monthsRegex(isStrict);
});
addParseToken(["M", "MM"], function(input, array) {
  array[MONTH] = toInt(input) - 1;
});
addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
  var month = config._locale.monthsParse(input, token2, config._strict);
  if (month != null) {
    array[MONTH] = month;
  } else {
    getParsingFlags(config).invalidMonth = input;
  }
});
var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
function localeMonths(m, format2) {
  if (!m) {
    return isArray(this._months) ? this._months : this._months["standalone"];
  }
  return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
}
function localeMonthsShort(m, format2) {
  if (!m) {
    return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
  }
  return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
}
function handleStrictParse(monthName, format2, strict) {
  var i, ii, mom, llc = monthName.toLocaleLowerCase();
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
    for (i = 0; i < 12; ++i) {
      mom = createUTC([2e3, i]);
      this._shortMonthsParse[i] = this.monthsShort(
        mom,
        ""
      ).toLocaleLowerCase();
      this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "MMM") {
      ii = indexOf.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format2 === "MMM") {
      ii = indexOf.call(this._shortMonthsParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._longMonthsParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}
function localeMonthsParse(monthName, format2, strict) {
  var i, mom, regex;
  if (this._monthsParseExact) {
    return handleStrictParse.call(this, monthName, format2, strict);
  }
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
  }
  for (i = 0; i < 12; i++) {
    mom = createUTC([2e3, i]);
    if (strict && !this._longMonthsParse[i]) {
      this._longMonthsParse[i] = new RegExp(
        "^" + this.months(mom, "").replace(".", "") + "$",
        "i"
      );
      this._shortMonthsParse[i] = new RegExp(
        "^" + this.monthsShort(mom, "").replace(".", "") + "$",
        "i"
      );
    }
    if (!strict && !this._monthsParse[i]) {
      regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
      this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
      return i;
    } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
      return i;
    } else if (!strict && this._monthsParse[i].test(monthName)) {
      return i;
    }
  }
}
function setMonth(mom, value) {
  if (!mom.isValid()) {
    return mom;
  }
  if (typeof value === "string") {
    if (/^\d+$/.test(value)) {
      value = toInt(value);
    } else {
      value = mom.localeData().monthsParse(value);
      if (!isNumber(value)) {
        return mom;
      }
    }
  }
  var month = value, date = mom.date();
  date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
  void (mom._isUTC ? mom._d.setUTCMonth(month, date) : mom._d.setMonth(month, date));
  return mom;
}
function getSetMonth(value) {
  if (value != null) {
    setMonth(this, value);
    hooks.updateOffset(this, true);
    return this;
  } else {
    return get2(this, "Month");
  }
}
function getDaysInMonth() {
  return daysInMonth(this.year(), this.month());
}
function monthsShortRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsShortStrictRegex;
    } else {
      return this._monthsShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsShortRegex")) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }
    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }
}
function monthsRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsStrictRegex;
    } else {
      return this._monthsRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsRegex")) {
      this._monthsRegex = defaultMonthsRegex;
    }
    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  }
}
function computeMonthsParse() {
  function cmpLenRev(a, b) {
    return b.length - a.length;
  }
  var shortPieces = [], longPieces = [], mixedPieces = [], i, mom, shortP, longP;
  for (i = 0; i < 12; i++) {
    mom = createUTC([2e3, i]);
    shortP = regexEscape(this.monthsShort(mom, ""));
    longP = regexEscape(this.months(mom, ""));
    shortPieces.push(shortP);
    longPieces.push(longP);
    mixedPieces.push(longP);
    mixedPieces.push(shortP);
  }
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._monthsShortRegex = this._monthsRegex;
  this._monthsStrictRegex = new RegExp(
    "^(" + longPieces.join("|") + ")",
    "i"
  );
  this._monthsShortStrictRegex = new RegExp(
    "^(" + shortPieces.join("|") + ")",
    "i"
  );
}
function createDate(y, m, d, h, M, s, ms) {
  var date;
  if (y < 100 && y >= 0) {
    date = new Date(y + 400, m, d, h, M, s, ms);
    if (isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
  } else {
    date = new Date(y, m, d, h, M, s, ms);
  }
  return date;
}
function createUTCDate(y) {
  var date, args;
  if (y < 100 && y >= 0) {
    args = Array.prototype.slice.call(arguments);
    args[0] = y + 400;
    date = new Date(Date.UTC.apply(null, args));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
  } else {
    date = new Date(Date.UTC.apply(null, arguments));
  }
  return date;
}
function firstWeekOffset(year, dow, doy) {
  var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
  var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
  if (dayOfYear <= 0) {
    resYear = year - 1;
    resDayOfYear = daysInYear(resYear) + dayOfYear;
  } else if (dayOfYear > daysInYear(year)) {
    resYear = year + 1;
    resDayOfYear = dayOfYear - daysInYear(year);
  } else {
    resYear = year;
    resDayOfYear = dayOfYear;
  }
  return {
    year: resYear,
    dayOfYear: resDayOfYear
  };
}
function weekOfYear(mom, dow, doy) {
  var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
  if (week < 1) {
    resYear = mom.year() - 1;
    resWeek = week + weeksInYear(resYear, dow, doy);
  } else if (week > weeksInYear(mom.year(), dow, doy)) {
    resWeek = week - weeksInYear(mom.year(), dow, doy);
    resYear = mom.year() + 1;
  } else {
    resYear = mom.year();
    resWeek = week;
  }
  return {
    week: resWeek,
    year: resYear
  };
}
function weeksInYear(year, dow, doy) {
  var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
addFormatToken("w", ["ww", 2], "wo", "week");
addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
addRegexToken("w", match1to2, match1to2NoLeadingZero);
addRegexToken("ww", match1to2, match2);
addRegexToken("W", match1to2, match1to2NoLeadingZero);
addRegexToken("WW", match1to2, match2);
addWeekParseToken(
  ["w", "ww", "W", "WW"],
  function(input, week, config, token2) {
    week[token2.substr(0, 1)] = toInt(input);
  }
);
function localeWeek(mom) {
  return weekOfYear(mom, this._week.dow, this._week.doy).week;
}
var defaultLocaleWeek = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function localeFirstDayOfWeek() {
  return this._week.dow;
}
function localeFirstDayOfYear() {
  return this._week.doy;
}
function getSetWeek(input) {
  var week = this.localeData().week(this);
  return input == null ? week : this.add((input - week) * 7, "d");
}
function getSetISOWeek(input) {
  var week = weekOfYear(this, 1, 4).week;
  return input == null ? week : this.add((input - week) * 7, "d");
}
addFormatToken("d", 0, "do", "day");
addFormatToken("dd", 0, 0, function(format2) {
  return this.localeData().weekdaysMin(this, format2);
});
addFormatToken("ddd", 0, 0, function(format2) {
  return this.localeData().weekdaysShort(this, format2);
});
addFormatToken("dddd", 0, 0, function(format2) {
  return this.localeData().weekdays(this, format2);
});
addFormatToken("e", 0, 0, "weekday");
addFormatToken("E", 0, 0, "isoWeekday");
addRegexToken("d", match1to2);
addRegexToken("e", match1to2);
addRegexToken("E", match1to2);
addRegexToken("dd", function(isStrict, locale2) {
  return locale2.weekdaysMinRegex(isStrict);
});
addRegexToken("ddd", function(isStrict, locale2) {
  return locale2.weekdaysShortRegex(isStrict);
});
addRegexToken("dddd", function(isStrict, locale2) {
  return locale2.weekdaysRegex(isStrict);
});
addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
  var weekday = config._locale.weekdaysParse(input, token2, config._strict);
  if (weekday != null) {
    week.d = weekday;
  } else {
    getParsingFlags(config).invalidWeekday = input;
  }
});
addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
  week[token2] = toInt(input);
});
function parseWeekday(input, locale2) {
  if (typeof input !== "string") {
    return input;
  }
  if (!isNaN(input)) {
    return parseInt(input, 10);
  }
  input = locale2.weekdaysParse(input);
  if (typeof input === "number") {
    return input;
  }
  return null;
}
function parseIsoWeekday(input, locale2) {
  if (typeof input === "string") {
    return locale2.weekdaysParse(input) % 7 || 7;
  }
  return isNaN(input) ? null : input;
}
function shiftWeekdays(ws, n2) {
  return ws.slice(n2, 7).concat(ws.slice(0, n2));
}
var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
function localeWeekdays(m, format2) {
  var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
  return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
}
function localeWeekdaysShort(m) {
  return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}
function localeWeekdaysMin(m) {
  return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}
function handleStrictParse$1(weekdayName, format2, strict) {
  var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._minWeekdaysParse = [];
    for (i = 0; i < 7; ++i) {
      mom = createUTC([2e3, 1]).day(i);
      this._minWeekdaysParse[i] = this.weekdaysMin(
        mom,
        ""
      ).toLocaleLowerCase();
      this._shortWeekdaysParse[i] = this.weekdaysShort(
        mom,
        ""
      ).toLocaleLowerCase();
      this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "dddd") {
      ii = indexOf.call(this._weekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format2 === "ddd") {
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format2 === "dddd") {
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format2 === "ddd") {
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = indexOf.call(this._minWeekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._weekdaysParse, llc);
      if (ii !== -1) {
        return ii;
      }
      ii = indexOf.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}
function localeWeekdaysParse(weekdayName, format2, strict) {
  var i, mom, regex;
  if (this._weekdaysParseExact) {
    return handleStrictParse$1.call(this, weekdayName, format2, strict);
  }
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._minWeekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._fullWeekdaysParse = [];
  }
  for (i = 0; i < 7; i++) {
    mom = createUTC([2e3, 1]).day(i);
    if (strict && !this._fullWeekdaysParse[i]) {
      this._fullWeekdaysParse[i] = new RegExp(
        "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
        "i"
      );
      this._shortWeekdaysParse[i] = new RegExp(
        "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
        "i"
      );
      this._minWeekdaysParse[i] = new RegExp(
        "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
        "i"
      );
    }
    if (!this._weekdaysParse[i]) {
      regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
      this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
      return i;
    }
  }
}
function getSetDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var day = get2(this, "Day");
  if (input != null) {
    input = parseWeekday(input, this.localeData());
    return this.add(input - day, "d");
  } else {
    return day;
  }
}
function getSetLocaleDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return input == null ? weekday : this.add(input - weekday, "d");
}
function getSetISODayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    var weekday = parseIsoWeekday(input, this.localeData());
    return this.day(this.day() % 7 ? weekday : weekday - 7);
  } else {
    return this.day() || 7;
  }
}
function weekdaysRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysStrictRegex;
    } else {
      return this._weekdaysRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      this._weekdaysRegex = defaultWeekdaysRegex;
    }
    return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
  }
}
function weekdaysShortRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysShortStrictRegex;
    } else {
      return this._weekdaysShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysShortRegex")) {
      this._weekdaysShortRegex = defaultWeekdaysShortRegex;
    }
    return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
  }
}
function weekdaysMinRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysMinStrictRegex;
    } else {
      return this._weekdaysMinRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysMinRegex")) {
      this._weekdaysMinRegex = defaultWeekdaysMinRegex;
    }
    return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
  }
}
function computeWeekdaysParse() {
  function cmpLenRev(a, b) {
    return b.length - a.length;
  }
  var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
  for (i = 0; i < 7; i++) {
    mom = createUTC([2e3, 1]).day(i);
    minp = regexEscape(this.weekdaysMin(mom, ""));
    shortp = regexEscape(this.weekdaysShort(mom, ""));
    longp = regexEscape(this.weekdays(mom, ""));
    minPieces.push(minp);
    shortPieces.push(shortp);
    longPieces.push(longp);
    mixedPieces.push(minp);
    mixedPieces.push(shortp);
    mixedPieces.push(longp);
  }
  minPieces.sort(cmpLenRev);
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._weekdaysShortRegex = this._weekdaysRegex;
  this._weekdaysMinRegex = this._weekdaysRegex;
  this._weekdaysStrictRegex = new RegExp(
    "^(" + longPieces.join("|") + ")",
    "i"
  );
  this._weekdaysShortStrictRegex = new RegExp(
    "^(" + shortPieces.join("|") + ")",
    "i"
  );
  this._weekdaysMinStrictRegex = new RegExp(
    "^(" + minPieces.join("|") + ")",
    "i"
  );
}
function hFormat() {
  return this.hours() % 12 || 12;
}
function kFormat() {
  return this.hours() || 24;
}
addFormatToken("H", ["HH", 2], 0, "hour");
addFormatToken("h", ["hh", 2], 0, hFormat);
addFormatToken("k", ["kk", 2], 0, kFormat);
addFormatToken("hmm", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});
addFormatToken("hmmss", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
addFormatToken("Hmm", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2);
});
addFormatToken("Hmmss", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
function meridiem(token2, lowercase) {
  addFormatToken(token2, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      lowercase
    );
  });
}
meridiem("a", true);
meridiem("A", false);
function matchMeridiem(isStrict, locale2) {
  return locale2._meridiemParse;
}
addRegexToken("a", matchMeridiem);
addRegexToken("A", matchMeridiem);
addRegexToken("H", match1to2, match1to2HasZero);
addRegexToken("h", match1to2, match1to2NoLeadingZero);
addRegexToken("k", match1to2, match1to2NoLeadingZero);
addRegexToken("HH", match1to2, match2);
addRegexToken("hh", match1to2, match2);
addRegexToken("kk", match1to2, match2);
addRegexToken("hmm", match3to4);
addRegexToken("hmmss", match5to6);
addRegexToken("Hmm", match3to4);
addRegexToken("Hmmss", match5to6);
addParseToken(["H", "HH"], HOUR);
addParseToken(["k", "kk"], function(input, array, config) {
  var kInput = toInt(input);
  array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(["a", "A"], function(input, array, config) {
  config._isPm = config._locale.isPM(input);
  config._meridiem = input;
});
addParseToken(["h", "hh"], function(input, array, config) {
  array[HOUR] = toInt(input);
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmm", function(input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmmss", function(input, array, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
  getParsingFlags(config).bigHour = true;
});
addParseToken("Hmm", function(input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
});
addParseToken("Hmmss", function(input, array, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
});
function localeIsPM(input) {
  return (input + "").toLowerCase().charAt(0) === "p";
}
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
function localeMeridiem(hours2, minutes2, isLower) {
  if (hours2 > 11) {
    return isLower ? "pm" : "PM";
  } else {
    return isLower ? "am" : "AM";
  }
}
var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  relativeTime: defaultRelativeTime,
  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,
  week: defaultLocaleWeek,
  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,
  meridiemParse: defaultLocaleMeridiemParse
};
var locales = {}, localeFamilies = {}, globalLocale;
function commonPrefix(arr1, arr2) {
  var i, minl = Math.min(arr1.length, arr2.length);
  for (i = 0; i < minl; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return i;
    }
  }
  return minl;
}
function normalizeLocale(key) {
  return key ? key.toLowerCase().replace("_", "-") : key;
}
function chooseLocale(names) {
  var i = 0, j, next, locale2, split;
  while (i < names.length) {
    split = normalizeLocale(names[i]).split("-");
    j = split.length;
    next = normalizeLocale(names[i + 1]);
    next = next ? next.split("-") : null;
    while (j > 0) {
      locale2 = loadLocale(split.slice(0, j).join("-"));
      if (locale2) {
        return locale2;
      }
      if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
        break;
      }
      j--;
    }
    i++;
  }
  return globalLocale;
}
function isLocaleNameSane(name) {
  return !!(name && name.match("^[^/\\\\]*$"));
}
function loadLocale(name) {
  var oldLocale = null, aliasedRequire;
  if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
    try {
      oldLocale = globalLocale._abbr;
      aliasedRequire = require;
      aliasedRequire("./locale/" + name);
      getSetGlobalLocale(oldLocale);
    } catch (e) {
      locales[name] = null;
    }
  }
  return locales[name];
}
function getSetGlobalLocale(key, values) {
  var data;
  if (key) {
    if (isUndefined(values)) {
      data = getLocale(key);
    } else {
      data = defineLocale(key, values);
    }
    if (data) {
      globalLocale = data;
    } else {
      if (typeof console !== "undefined" && console.warn) {
        console.warn(
          "Locale " + key + " not found. Did you forget to load it?"
        );
      }
    }
  }
  return globalLocale._abbr;
}
function defineLocale(name, config) {
  if (config !== null) {
    var locale2, parentConfig = baseConfig;
    config.abbr = name;
    if (locales[name] != null) {
      deprecateSimple(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      );
      parentConfig = locales[name]._config;
    } else if (config.parentLocale != null) {
      if (locales[config.parentLocale] != null) {
        parentConfig = locales[config.parentLocale]._config;
      } else {
        locale2 = loadLocale(config.parentLocale);
        if (locale2 != null) {
          parentConfig = locale2._config;
        } else {
          if (!localeFamilies[config.parentLocale]) {
            localeFamilies[config.parentLocale] = [];
          }
          localeFamilies[config.parentLocale].push({
            name,
            config
          });
          return null;
        }
      }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
      localeFamilies[name].forEach(function(x) {
        defineLocale(x.name, x.config);
      });
    }
    getSetGlobalLocale(name);
    return locales[name];
  } else {
    delete locales[name];
    return null;
  }
}
function updateLocale(name, config) {
  if (config != null) {
    var locale2, tmpLocale, parentConfig = baseConfig;
    if (locales[name] != null && locales[name].parentLocale != null) {
      locales[name].set(mergeConfigs(locales[name]._config, config));
    } else {
      tmpLocale = loadLocale(name);
      if (tmpLocale != null) {
        parentConfig = tmpLocale._config;
      }
      config = mergeConfigs(parentConfig, config);
      if (tmpLocale == null) {
        config.abbr = name;
      }
      locale2 = new Locale(config);
      locale2.parentLocale = locales[name];
      locales[name] = locale2;
    }
    getSetGlobalLocale(name);
  } else {
    if (locales[name] != null) {
      if (locales[name].parentLocale != null) {
        locales[name] = locales[name].parentLocale;
        if (name === getSetGlobalLocale()) {
          getSetGlobalLocale(name);
        }
      } else if (locales[name] != null) {
        delete locales[name];
      }
    }
  }
  return locales[name];
}
function getLocale(key) {
  var locale2;
  if (key && key._locale && key._locale._abbr) {
    key = key._locale._abbr;
  }
  if (!key) {
    return globalLocale;
  }
  if (!isArray(key)) {
    locale2 = loadLocale(key);
    if (locale2) {
      return locale2;
    }
    key = [key];
  }
  return chooseLocale(key);
}
function listLocales() {
  return keys(locales);
}
function checkOverflow(m) {
  var overflow, a = m._a;
  if (a && getParsingFlags(m).overflow === -2) {
    overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
    if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
      overflow = DATE;
    }
    if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
      overflow = WEEK;
    }
    if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
      overflow = WEEKDAY;
    }
    getParsingFlags(m).overflow = overflow;
  }
  return m;
}
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, false],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, false],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, false],
  ["YYYY", /\d{4}/, false]
], isoTimes = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function configFromISO(config) {
  var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
  if (match) {
    getParsingFlags(config).iso = true;
    for (i = 0, l = isoDatesLen; i < l; i++) {
      if (isoDates[i][1].exec(match[1])) {
        dateFormat = isoDates[i][0];
        allowTime = isoDates[i][2] !== false;
        break;
      }
    }
    if (dateFormat == null) {
      config._isValid = false;
      return;
    }
    if (match[3]) {
      for (i = 0, l = isoTimesLen; i < l; i++) {
        if (isoTimes[i][1].exec(match[3])) {
          timeFormat = (match[2] || " ") + isoTimes[i][0];
          break;
        }
      }
      if (timeFormat == null) {
        config._isValid = false;
        return;
      }
    }
    if (!allowTime && timeFormat != null) {
      config._isValid = false;
      return;
    }
    if (match[4]) {
      if (tzRegex.exec(match[4])) {
        tzFormat = "Z";
      } else {
        config._isValid = false;
        return;
      }
    }
    config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
    configFromStringAndFormat(config);
  } else {
    config._isValid = false;
  }
}
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = [
    untruncateYear(yearStr),
    defaultLocaleMonthsShort.indexOf(monthStr),
    parseInt(dayStr, 10),
    parseInt(hourStr, 10),
    parseInt(minuteStr, 10)
  ];
  if (secondStr) {
    result.push(parseInt(secondStr, 10));
  }
  return result;
}
function untruncateYear(yearStr) {
  var year = parseInt(yearStr, 10);
  if (year <= 49) {
    return 2e3 + year;
  } else if (year <= 999) {
    return 1900 + year;
  }
  return year;
}
function preprocessRFC2822(s) {
  return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function checkWeekday(weekdayStr, parsedInput, config) {
  if (weekdayStr) {
    var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
      parsedInput[0],
      parsedInput[1],
      parsedInput[2]
    ).getDay();
    if (weekdayProvided !== weekdayActual) {
      getParsingFlags(config).weekdayMismatch = true;
      config._isValid = false;
      return false;
    }
  }
  return true;
}
function calculateOffset(obsOffset, militaryOffset, numOffset) {
  if (obsOffset) {
    return obsOffsets[obsOffset];
  } else if (militaryOffset) {
    return 0;
  } else {
    var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
    return h * 60 + m;
  }
}
function configFromRFC2822(config) {
  var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
  if (match) {
    parsedArray = extractFromRFC2822Strings(
      match[4],
      match[3],
      match[2],
      match[5],
      match[6],
      match[7]
    );
    if (!checkWeekday(match[1], parsedArray, config)) {
      return;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = createUTCDate.apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    getParsingFlags(config).rfc2822 = true;
  } else {
    config._isValid = false;
  }
}
function configFromString(config) {
  var matched = aspNetJsonRegex.exec(config._i);
  if (matched !== null) {
    config._d = /* @__PURE__ */ new Date(+matched[1]);
    return;
  }
  configFromISO(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  configFromRFC2822(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  if (config._strict) {
    config._isValid = false;
  } else {
    hooks.createFromInputFallback(config);
  }
}
hooks.createFromInputFallback = deprecate(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(config) {
    config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
  }
);
function defaults(a, b, c) {
  if (a != null) {
    return a;
  }
  if (b != null) {
    return b;
  }
  return c;
}
function currentDateArray(config) {
  var nowValue = new Date(hooks.now());
  if (config._useUTC) {
    return [
      nowValue.getUTCFullYear(),
      nowValue.getUTCMonth(),
      nowValue.getUTCDate()
    ];
  }
  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
function configFromArray(config) {
  var i, date, input = [], currentDate, expectedWeekday, yearToUse;
  if (config._d) {
    return;
  }
  currentDate = currentDateArray(config);
  if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
    dayOfYearFromWeekInfo(config);
  }
  if (config._dayOfYear != null) {
    yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
    if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
      getParsingFlags(config)._overflowDayOfYear = true;
    }
    date = createUTCDate(yearToUse, 0, config._dayOfYear);
    config._a[MONTH] = date.getUTCMonth();
    config._a[DATE] = date.getUTCDate();
  }
  for (i = 0; i < 3 && config._a[i] == null; ++i) {
    config._a[i] = input[i] = currentDate[i];
  }
  for (; i < 7; i++) {
    config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
  }
  if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
    config._nextDay = true;
    config._a[HOUR] = 0;
  }
  config._d = (config._useUTC ? createUTCDate : createDate).apply(
    null,
    input
  );
  expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
  if (config._tzm != null) {
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }
  if (config._nextDay) {
    config._a[HOUR] = 24;
  }
  if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
    getParsingFlags(config).weekdayMismatch = true;
  }
}
function dayOfYearFromWeekInfo(config) {
  var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
  w = config._w;
  if (w.GG != null || w.W != null || w.E != null) {
    dow = 1;
    doy = 4;
    weekYear = defaults(
      w.GG,
      config._a[YEAR],
      weekOfYear(createLocal(), 1, 4).year
    );
    week = defaults(w.W, 1);
    weekday = defaults(w.E, 1);
    if (weekday < 1 || weekday > 7) {
      weekdayOverflow = true;
    }
  } else {
    dow = config._locale._week.dow;
    doy = config._locale._week.doy;
    curWeek = weekOfYear(createLocal(), dow, doy);
    weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
    week = defaults(w.w, curWeek.week);
    if (w.d != null) {
      weekday = w.d;
      if (weekday < 0 || weekday > 6) {
        weekdayOverflow = true;
      }
    } else if (w.e != null) {
      weekday = w.e + dow;
      if (w.e < 0 || w.e > 6) {
        weekdayOverflow = true;
      }
    } else {
      weekday = dow;
    }
  }
  if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
    getParsingFlags(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
    getParsingFlags(config)._overflowWeekday = true;
  } else {
    temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
}
hooks.ISO_8601 = function() {
};
hooks.RFC_2822 = function() {
};
function configFromStringAndFormat(config) {
  if (config._f === hooks.ISO_8601) {
    configFromISO(config);
    return;
  }
  if (config._f === hooks.RFC_2822) {
    configFromRFC2822(config);
    return;
  }
  config._a = [];
  getParsingFlags(config).empty = true;
  var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
  tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
  tokenLen = tokens2.length;
  for (i = 0; i < tokenLen; i++) {
    token2 = tokens2[i];
    parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
    if (parsedInput) {
      skipped = string.substr(0, string.indexOf(parsedInput));
      if (skipped.length > 0) {
        getParsingFlags(config).unusedInput.push(skipped);
      }
      string = string.slice(
        string.indexOf(parsedInput) + parsedInput.length
      );
      totalParsedInputLength += parsedInput.length;
    }
    if (formatTokenFunctions[token2]) {
      if (parsedInput) {
        getParsingFlags(config).empty = false;
      } else {
        getParsingFlags(config).unusedTokens.push(token2);
      }
      addTimeToArrayFromToken(token2, parsedInput, config);
    } else if (config._strict && !parsedInput) {
      getParsingFlags(config).unusedTokens.push(token2);
    }
  }
  getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
  if (string.length > 0) {
    getParsingFlags(config).unusedInput.push(string);
  }
  if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
    getParsingFlags(config).bigHour = void 0;
  }
  getParsingFlags(config).parsedDateParts = config._a.slice(0);
  getParsingFlags(config).meridiem = config._meridiem;
  config._a[HOUR] = meridiemFixWrap(
    config._locale,
    config._a[HOUR],
    config._meridiem
  );
  era = getParsingFlags(config).era;
  if (era !== null) {
    config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
  }
  configFromArray(config);
  checkOverflow(config);
}
function meridiemFixWrap(locale2, hour, meridiem2) {
  var isPm;
  if (meridiem2 == null) {
    return hour;
  }
  if (locale2.meridiemHour != null) {
    return locale2.meridiemHour(hour, meridiem2);
  } else if (locale2.isPM != null) {
    isPm = locale2.isPM(meridiem2);
    if (isPm && hour < 12) {
      hour += 12;
    }
    if (!isPm && hour === 12) {
      hour = 0;
    }
    return hour;
  } else {
    return hour;
  }
}
function configFromStringAndArray(config) {
  var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
  if (configfLen === 0) {
    getParsingFlags(config).invalidFormat = true;
    config._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (i = 0; i < configfLen; i++) {
    currentScore = 0;
    validFormatFound = false;
    tempConfig = copyConfig({}, config);
    if (config._useUTC != null) {
      tempConfig._useUTC = config._useUTC;
    }
    tempConfig._f = config._f[i];
    configFromStringAndFormat(tempConfig);
    if (isValid(tempConfig)) {
      validFormatFound = true;
    }
    currentScore += getParsingFlags(tempConfig).charsLeftOver;
    currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
    getParsingFlags(tempConfig).score = currentScore;
    if (!bestFormatIsValid) {
      if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
        if (validFormatFound) {
          bestFormatIsValid = true;
        }
      }
    } else {
      if (currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
  }
  extend(config, bestMoment || tempConfig);
}
function configFromObject(config) {
  if (config._d) {
    return;
  }
  var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
  config._a = map(
    [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
    function(obj) {
      return obj && parseInt(obj, 10);
    }
  );
  configFromArray(config);
}
function createFromConfig(config) {
  var res = new Moment(checkOverflow(prepareConfig(config)));
  if (res._nextDay) {
    res.add(1, "d");
    res._nextDay = void 0;
  }
  return res;
}
function prepareConfig(config) {
  var input = config._i, format2 = config._f;
  config._locale = config._locale || getLocale(config._l);
  if (input === null || format2 === void 0 && input === "") {
    return createInvalid({ nullInput: true });
  }
  if (typeof input === "string") {
    config._i = input = config._locale.preparse(input);
  }
  if (isMoment(input)) {
    return new Moment(checkOverflow(input));
  } else if (isDate(input)) {
    config._d = input;
  } else if (isArray(format2)) {
    configFromStringAndArray(config);
  } else if (format2) {
    configFromStringAndFormat(config);
  } else {
    configFromInput(config);
  }
  if (!isValid(config)) {
    config._d = null;
  }
  return config;
}
function configFromInput(config) {
  var input = config._i;
  if (isUndefined(input)) {
    config._d = new Date(hooks.now());
  } else if (isDate(input)) {
    config._d = new Date(input.valueOf());
  } else if (typeof input === "string") {
    configFromString(config);
  } else if (isArray(input)) {
    config._a = map(input.slice(0), function(obj) {
      return parseInt(obj, 10);
    });
    configFromArray(config);
  } else if (isObject(input)) {
    configFromObject(config);
  } else if (isNumber(input)) {
    config._d = new Date(input);
  } else {
    hooks.createFromInputFallback(config);
  }
}
function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
  var c = {};
  if (format2 === true || format2 === false) {
    strict = format2;
    format2 = void 0;
  }
  if (locale2 === true || locale2 === false) {
    strict = locale2;
    locale2 = void 0;
  }
  if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
    input = void 0;
  }
  c._isAMomentObject = true;
  c._useUTC = c._isUTC = isUTC;
  c._l = locale2;
  c._i = input;
  c._f = format2;
  c._strict = strict;
  return createFromConfig(c);
}
function createLocal(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, false);
}
var prototypeMin = deprecate(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return createInvalid();
    }
  }
), prototypeMax = deprecate(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return createInvalid();
    }
  }
);
function pickBy(fn, moments) {
  var res, i;
  if (moments.length === 1 && isArray(moments[0])) {
    moments = moments[0];
  }
  if (!moments.length) {
    return createLocal();
  }
  res = moments[0];
  for (i = 1; i < moments.length; ++i) {
    if (!moments[i].isValid() || moments[i][fn](res)) {
      res = moments[i];
    }
  }
  return res;
}
function min() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isBefore", args);
}
function max() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isAfter", args);
}
var now$1 = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
};
var ordering = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function isDurationValid(m) {
  var key, unitHasDecimal = false, i, orderLen = ordering.length;
  for (key in m) {
    if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
      return false;
    }
  }
  for (i = 0; i < orderLen; ++i) {
    if (m[ordering[i]]) {
      if (unitHasDecimal) {
        return false;
      }
      if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
        unitHasDecimal = true;
      }
    }
  }
  return true;
}
function isValid$1() {
  return this._isValid;
}
function createInvalid$1() {
  return createDuration(NaN);
}
function Duration(duration) {
  var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
  this._isValid = isDurationValid(normalizedInput);
  this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
  minutes2 * 6e4 + // 1000 * 60
  hours2 * 1e3 * 60 * 60;
  this._days = +days2 + weeks2 * 7;
  this._months = +months2 + quarters * 3 + years2 * 12;
  this._data = {};
  this._locale = getLocale();
  this._bubble();
}
function isDuration(obj) {
  return obj instanceof Duration;
}
function absRound(number) {
  if (number < 0) {
    return Math.round(-1 * number) * -1;
  } else {
    return Math.round(number);
  }
}
function compareArrays(array1, array2, dontConvert) {
  var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
  for (i = 0; i < len; i++) {
    if (toInt(array1[i]) !== toInt(array2[i])) {
      diffs++;
    }
  }
  return diffs + lengthDiff;
}
function offset(token2, separator) {
  addFormatToken(token2, 0, 0, function() {
    var offset2 = this.utcOffset(), sign2 = "+";
    if (offset2 < 0) {
      offset2 = -offset2;
      sign2 = "-";
    }
    return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
  });
}
offset("Z", ":");
offset("ZZ", "");
addRegexToken("Z", matchShortOffset);
addRegexToken("ZZ", matchShortOffset);
addParseToken(["Z", "ZZ"], function(input, array, config) {
  config._useUTC = true;
  config._tzm = offsetFromString(matchShortOffset, input);
});
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(matcher, string) {
  var matches = (string || "").match(matcher), chunk, parts, minutes2;
  if (matches === null) {
    return null;
  }
  chunk = matches[matches.length - 1] || [];
  parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
  minutes2 = +(parts[1] * 60) + toInt(parts[2]);
  return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
}
function cloneWithOffset(input, model) {
  var res, diff2;
  if (model._isUTC) {
    res = model.clone();
    diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
    res._d.setTime(res._d.valueOf() + diff2);
    hooks.updateOffset(res, false);
    return res;
  } else {
    return createLocal(input).local();
  }
}
function getDateOffset(m) {
  return -Math.round(m._d.getTimezoneOffset());
}
hooks.updateOffset = function() {
};
function getSetOffset(input, keepLocalTime, keepMinutes) {
  var offset2 = this._offset || 0, localAdjust;
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    if (typeof input === "string") {
      input = offsetFromString(matchShortOffset, input);
      if (input === null) {
        return this;
      }
    } else if (Math.abs(input) < 16 && !keepMinutes) {
      input = input * 60;
    }
    if (!this._isUTC && keepLocalTime) {
      localAdjust = getDateOffset(this);
    }
    this._offset = input;
    this._isUTC = true;
    if (localAdjust != null) {
      this.add(localAdjust, "m");
    }
    if (offset2 !== input) {
      if (!keepLocalTime || this._changeInProgress) {
        addSubtract(
          this,
          createDuration(input - offset2, "m"),
          1,
          false
        );
      } else if (!this._changeInProgress) {
        this._changeInProgress = true;
        hooks.updateOffset(this, true);
        this._changeInProgress = null;
      }
    }
    return this;
  } else {
    return this._isUTC ? offset2 : getDateOffset(this);
  }
}
function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== "string") {
      input = -input;
    }
    this.utcOffset(input, keepLocalTime);
    return this;
  } else {
    return -this.utcOffset();
  }
}
function setOffsetToUTC(keepLocalTime) {
  return this.utcOffset(0, keepLocalTime);
}
function setOffsetToLocal(keepLocalTime) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;
    if (keepLocalTime) {
      this.subtract(getDateOffset(this), "m");
    }
  }
  return this;
}
function setOffsetToParsedOffset() {
  if (this._tzm != null) {
    this.utcOffset(this._tzm, false, true);
  } else if (typeof this._i === "string") {
    var tZone = offsetFromString(matchOffset, this._i);
    if (tZone != null) {
      this.utcOffset(tZone);
    } else {
      this.utcOffset(0, true);
    }
  }
  return this;
}
function hasAlignedHourOffset(input) {
  if (!this.isValid()) {
    return false;
  }
  input = input ? createLocal(input).utcOffset() : 0;
  return (this.utcOffset() - input) % 60 === 0;
}
function isDaylightSavingTime() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted)) {
    return this._isDSTShifted;
  }
  var c = {}, other;
  copyConfig(c, this);
  c = prepareConfig(c);
  if (c._a) {
    other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
    this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }
  return this._isDSTShifted;
}
function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}
function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}
function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input, key) {
  var duration = input, match = null, sign2, ret, diffRes;
  if (isDuration(input)) {
    duration = {
      ms: input._milliseconds,
      d: input._days,
      M: input._months
    };
  } else if (isNumber(input) || !isNaN(+input)) {
    duration = {};
    if (key) {
      duration[key] = +input;
    } else {
      duration.milliseconds = +input;
    }
  } else if (match = aspNetRegex.exec(input)) {
    sign2 = match[1] === "-" ? -1 : 1;
    duration = {
      y: 0,
      d: toInt(match[DATE]) * sign2,
      h: toInt(match[HOUR]) * sign2,
      m: toInt(match[MINUTE]) * sign2,
      s: toInt(match[SECOND]) * sign2,
      ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
      // the millisecond decimal point is included in the match
    };
  } else if (match = isoRegex.exec(input)) {
    sign2 = match[1] === "-" ? -1 : 1;
    duration = {
      y: parseIso(match[2], sign2),
      M: parseIso(match[3], sign2),
      w: parseIso(match[4], sign2),
      d: parseIso(match[5], sign2),
      h: parseIso(match[6], sign2),
      m: parseIso(match[7], sign2),
      s: parseIso(match[8], sign2)
    };
  } else if (duration == null) {
    duration = {};
  } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
    diffRes = momentsDifference(
      createLocal(duration.from),
      createLocal(duration.to)
    );
    duration = {};
    duration.ms = diffRes.milliseconds;
    duration.M = diffRes.months;
  }
  ret = new Duration(duration);
  if (isDuration(input) && hasOwnProp(input, "_locale")) {
    ret._locale = input._locale;
  }
  if (isDuration(input) && hasOwnProp(input, "_isValid")) {
    ret._isValid = input._isValid;
  }
  return ret;
}
createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;
function parseIso(inp, sign2) {
  var res = inp && parseFloat(inp.replace(",", "."));
  return (isNaN(res) ? 0 : res) * sign2;
}
function positiveMomentsDifference(base, other) {
  var res = {};
  res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
  if (base.clone().add(res.months, "M").isAfter(other)) {
    --res.months;
  }
  res.milliseconds = +other - +base.clone().add(res.months, "M");
  return res;
}
function momentsDifference(base, other) {
  var res;
  if (!(base.isValid() && other.isValid())) {
    return { milliseconds: 0, months: 0 };
  }
  other = cloneWithOffset(other, base);
  if (base.isBefore(other)) {
    res = positiveMomentsDifference(base, other);
  } else {
    res = positiveMomentsDifference(other, base);
    res.milliseconds = -res.milliseconds;
    res.months = -res.months;
  }
  return res;
}
function createAdder(direction, name) {
  return function(val, period) {
    var dur, tmp;
    if (period !== null && !isNaN(+period)) {
      deprecateSimple(
        name,
        "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
      );
      tmp = val;
      val = period;
      period = tmp;
    }
    dur = createDuration(val, period);
    addSubtract(this, dur, direction);
    return this;
  };
}
function addSubtract(mom, duration, isAdding, updateOffset) {
  var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
  if (!mom.isValid()) {
    return;
  }
  updateOffset = updateOffset == null ? true : updateOffset;
  if (months2) {
    setMonth(mom, get2(mom, "Month") + months2 * isAdding);
  }
  if (days2) {
    set$1(mom, "Date", get2(mom, "Date") + days2 * isAdding);
  }
  if (milliseconds2) {
    mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
  }
  if (updateOffset) {
    hooks.updateOffset(mom, days2 || months2);
  }
}
var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
function isString(input) {
  return typeof input === "string" || input instanceof String;
}
function isMomentInput(input) {
  return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
}
function isMomentInputObject(input) {
  var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties2 = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i, property, propertyLen = properties2.length;
  for (i = 0; i < propertyLen; i += 1) {
    property = properties2[i];
    propertyTest = propertyTest || hasOwnProp(input, property);
  }
  return objectTest && propertyTest;
}
function isNumberOrStringArray(input) {
  var arrayTest = isArray(input), dataTypeTest = false;
  if (arrayTest) {
    dataTypeTest = input.filter(function(item) {
      return !isNumber(item) && isString(input);
    }).length === 0;
  }
  return arrayTest && dataTypeTest;
}
function isCalendarSpec(input) {
  var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties2 = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i, property;
  for (i = 0; i < properties2.length; i += 1) {
    property = properties2[i];
    propertyTest = propertyTest || hasOwnProp(input, property);
  }
  return objectTest && propertyTest;
}
function getCalendarFormat(myMoment, now2) {
  var diff2 = myMoment.diff(now2, "days", true);
  return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
}
function calendar$1(time, formats) {
  if (arguments.length === 1) {
    if (!arguments[0]) {
      time = void 0;
      formats = void 0;
    } else if (isMomentInput(arguments[0])) {
      time = arguments[0];
      formats = void 0;
    } else if (isCalendarSpec(arguments[0])) {
      formats = arguments[0];
      time = void 0;
    }
  }
  var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
  return this.format(
    output || this.localeData().calendar(format2, this, createLocal(now2))
  );
}
function clone() {
  return new Moment(this);
}
function isAfter(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() > localInput.valueOf();
  } else {
    return localInput.valueOf() < this.clone().startOf(units).valueOf();
  }
}
function isBefore(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() < localInput.valueOf();
  } else {
    return this.clone().endOf(units).valueOf() < localInput.valueOf();
  }
}
function isBetween(from2, to2, units, inclusivity) {
  var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
  if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
    return false;
  }
  inclusivity = inclusivity || "()";
  return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
}
function isSame(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input), inputMs;
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() === localInput.valueOf();
  } else {
    inputMs = localInput.valueOf();
    return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
  }
}
function isSameOrAfter(input, units) {
  return this.isSame(input, units) || this.isAfter(input, units);
}
function isSameOrBefore(input, units) {
  return this.isSame(input, units) || this.isBefore(input, units);
}
function diff(input, units, asFloat) {
  var that, zoneDelta, output;
  if (!this.isValid()) {
    return NaN;
  }
  that = cloneWithOffset(input, this);
  if (!that.isValid()) {
    return NaN;
  }
  zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
  units = normalizeUnits(units);
  switch (units) {
    case "year":
      output = monthDiff(this, that) / 12;
      break;
    case "month":
      output = monthDiff(this, that);
      break;
    case "quarter":
      output = monthDiff(this, that) / 3;
      break;
    case "second":
      output = (this - that) / 1e3;
      break;
    case "minute":
      output = (this - that) / 6e4;
      break;
    case "hour":
      output = (this - that) / 36e5;
      break;
    case "day":
      output = (this - that - zoneDelta) / 864e5;
      break;
    case "week":
      output = (this - that - zoneDelta) / 6048e5;
      break;
    default:
      output = this - that;
  }
  return asFloat ? output : absFloor(output);
}
function monthDiff(a, b) {
  if (a.date() < b.date()) {
    return -monthDiff(b, a);
  }
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
  if (b - anchor < 0) {
    anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
    adjust = (b - anchor) / (anchor - anchor2);
  } else {
    anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
    adjust = (b - anchor) / (anchor2 - anchor);
  }
  return -(wholeMonthDiff + adjust) || 0;
}
hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function toString() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function toISOString(keepOffset) {
  if (!this.isValid()) {
    return null;
  }
  var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
  if (m.year() < 0 || m.year() > 9999) {
    return formatMoment(
      m,
      utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  if (isFunction(Date.prototype.toISOString)) {
    if (utc) {
      return this.toDate().toISOString();
    } else {
      return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
    }
  }
  return formatMoment(
    m,
    utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function inspect() {
  if (!this.isValid()) {
    return "moment.invalid(/* " + this._i + " */)";
  }
  var func = "moment", zone = "", prefix, year, datetime, suffix;
  if (!this.isLocal()) {
    func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
    zone = "Z";
  }
  prefix = "[" + func + '("]';
  year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
  datetime = "-MM-DD[T]HH:mm:ss.SSS";
  suffix = zone + '[")]';
  return this.format(prefix + year + datetime + suffix);
}
function format(inputString) {
  if (!inputString) {
    inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
  }
  var output = formatMoment(this, inputString);
  return this.localeData().postformat(output);
}
function from(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function fromNow(withoutSuffix) {
  return this.from(createLocal(), withoutSuffix);
}
function to(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function toNow(withoutSuffix) {
  return this.to(createLocal(), withoutSuffix);
}
function locale(key) {
  var newLocaleData;
  if (key === void 0) {
    return this._locale._abbr;
  } else {
    newLocaleData = getLocale(key);
    if (newLocaleData != null) {
      this._locale = newLocaleData;
    }
    return this;
  }
}
var lang = deprecate(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(key) {
    if (key === void 0) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  }
);
function localeData() {
  return this._locale;
}
var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
function mod$1(dividend, divisor) {
  return (dividend % divisor + divisor) % divisor;
}
function localStartOfDate(y, m, d) {
  if (y < 100 && y >= 0) {
    return new Date(y + 400, m, d) - MS_PER_400_YEARS;
  } else {
    return new Date(y, m, d).valueOf();
  }
}
function utcStartOfDate(y, m, d) {
  if (y < 100 && y >= 0) {
    return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
  } else {
    return Date.UTC(y, m, d);
  }
}
function startOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year(), 0, 1);
      break;
    case "quarter":
      time = startOfDate(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      time = startOfDate(this.year(), this.month(), 1);
      break;
    case "week":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date());
      break;
    case "hour":
      time = this._d.valueOf();
      time -= mod$1(
        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
        MS_PER_HOUR
      );
      break;
    case "minute":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_MINUTE);
      break;
    case "second":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_SECOND);
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function endOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      time = startOfDate(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      time = startOfDate(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      time = startOfDate(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      time = this._d.valueOf();
      time += MS_PER_HOUR - mod$1(
        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
        MS_PER_HOUR
      ) - 1;
      break;
    case "minute":
      time = this._d.valueOf();
      time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
      break;
    case "second":
      time = this._d.valueOf();
      time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function valueOf() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function unix() {
  return Math.floor(this.valueOf() / 1e3);
}
function toDate() {
  return new Date(this.valueOf());
}
function toArray() {
  var m = this;
  return [
    m.year(),
    m.month(),
    m.date(),
    m.hour(),
    m.minute(),
    m.second(),
    m.millisecond()
  ];
}
function toObject() {
  var m = this;
  return {
    years: m.year(),
    months: m.month(),
    date: m.date(),
    hours: m.hours(),
    minutes: m.minutes(),
    seconds: m.seconds(),
    milliseconds: m.milliseconds()
  };
}
function toJSON() {
  return this.isValid() ? this.toISOString() : null;
}
function isValid$2() {
  return isValid(this);
}
function parsingFlags() {
  return extend({}, getParsingFlags(this));
}
function invalidAt() {
  return getParsingFlags(this).overflow;
}
function creationData() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
addFormatToken("N", 0, 0, "eraAbbr");
addFormatToken("NN", 0, 0, "eraAbbr");
addFormatToken("NNN", 0, 0, "eraAbbr");
addFormatToken("NNNN", 0, 0, "eraName");
addFormatToken("NNNNN", 0, 0, "eraNarrow");
addFormatToken("y", ["y", 1], "yo", "eraYear");
addFormatToken("y", ["yy", 2], 0, "eraYear");
addFormatToken("y", ["yyy", 3], 0, "eraYear");
addFormatToken("y", ["yyyy", 4], 0, "eraYear");
addRegexToken("N", matchEraAbbr);
addRegexToken("NN", matchEraAbbr);
addRegexToken("NNN", matchEraAbbr);
addRegexToken("NNNN", matchEraName);
addRegexToken("NNNNN", matchEraNarrow);
addParseToken(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(input, array, config, token2) {
    var era = config._locale.erasParse(input, token2, config._strict);
    if (era) {
      getParsingFlags(config).era = era;
    } else {
      getParsingFlags(config).invalidEra = input;
    }
  }
);
addRegexToken("y", matchUnsigned);
addRegexToken("yy", matchUnsigned);
addRegexToken("yyy", matchUnsigned);
addRegexToken("yyyy", matchUnsigned);
addRegexToken("yo", matchEraYearOrdinal);
addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
addParseToken(["yo"], function(input, array, config, token2) {
  var match;
  if (config._locale._eraYearOrdinalRegex) {
    match = input.match(config._locale._eraYearOrdinalRegex);
  }
  if (config._locale.eraYearOrdinalParse) {
    array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
  } else {
    array[YEAR] = parseInt(input, 10);
  }
});
function localeEras(m, format2) {
  var i, l, date, eras = this._eras || getLocale("en")._eras;
  for (i = 0, l = eras.length; i < l; ++i) {
    switch (typeof eras[i].since) {
      case "string":
        date = hooks(eras[i].since).startOf("day");
        eras[i].since = date.valueOf();
        break;
    }
    switch (typeof eras[i].until) {
      case "undefined":
        eras[i].until = Infinity;
        break;
      case "string":
        date = hooks(eras[i].until).startOf("day").valueOf();
        eras[i].until = date.valueOf();
        break;
    }
  }
  return eras;
}
function localeErasParse(eraName, format2, strict) {
  var i, l, eras = this.eras(), name, abbr, narrow;
  eraName = eraName.toUpperCase();
  for (i = 0, l = eras.length; i < l; ++i) {
    name = eras[i].name.toUpperCase();
    abbr = eras[i].abbr.toUpperCase();
    narrow = eras[i].narrow.toUpperCase();
    if (strict) {
      switch (format2) {
        case "N":
        case "NN":
        case "NNN":
          if (abbr === eraName) {
            return eras[i];
          }
          break;
        case "NNNN":
          if (name === eraName) {
            return eras[i];
          }
          break;
        case "NNNNN":
          if (narrow === eraName) {
            return eras[i];
          }
          break;
      }
    } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
      return eras[i];
    }
  }
}
function localeErasConvertYear(era, year) {
  var dir = era.since <= era.until ? 1 : -1;
  if (year === void 0) {
    return hooks(era.since).year();
  } else {
    return hooks(era.since).year() + (year - era.offset) * dir;
  }
}
function getEraName() {
  var i, l, val, eras = this.localeData().eras();
  for (i = 0, l = eras.length; i < l; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].name;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].name;
    }
  }
  return "";
}
function getEraNarrow() {
  var i, l, val, eras = this.localeData().eras();
  for (i = 0, l = eras.length; i < l; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].narrow;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].narrow;
    }
  }
  return "";
}
function getEraAbbr() {
  var i, l, val, eras = this.localeData().eras();
  for (i = 0, l = eras.length; i < l; ++i) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until) {
      return eras[i].abbr;
    }
    if (eras[i].until <= val && val <= eras[i].since) {
      return eras[i].abbr;
    }
  }
  return "";
}
function getEraYear() {
  var i, l, dir, val, eras = this.localeData().eras();
  for (i = 0, l = eras.length; i < l; ++i) {
    dir = eras[i].since <= eras[i].until ? 1 : -1;
    val = this.clone().startOf("day").valueOf();
    if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
      return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
    }
  }
  return this.year();
}
function erasNameRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNameRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNameRegex : this._erasRegex;
}
function erasAbbrRegex(isStrict) {
  if (!hasOwnProp(this, "_erasAbbrRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasAbbrRegex : this._erasRegex;
}
function erasNarrowRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNarrowRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNarrowRegex : this._erasRegex;
}
function matchEraAbbr(isStrict, locale2) {
  return locale2.erasAbbrRegex(isStrict);
}
function matchEraName(isStrict, locale2) {
  return locale2.erasNameRegex(isStrict);
}
function matchEraNarrow(isStrict, locale2) {
  return locale2.erasNarrowRegex(isStrict);
}
function matchEraYearOrdinal(isStrict, locale2) {
  return locale2._eraYearOrdinalRegex || matchUnsigned;
}
function computeErasParse() {
  var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, erasName, erasAbbr, erasNarrow, eras = this.eras();
  for (i = 0, l = eras.length; i < l; ++i) {
    erasName = regexEscape(eras[i].name);
    erasAbbr = regexEscape(eras[i].abbr);
    erasNarrow = regexEscape(eras[i].narrow);
    namePieces.push(erasName);
    abbrPieces.push(erasAbbr);
    narrowPieces.push(erasNarrow);
    mixedPieces.push(erasName);
    mixedPieces.push(erasAbbr);
    mixedPieces.push(erasNarrow);
  }
  this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
  this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
  this._erasNarrowRegex = new RegExp(
    "^(" + narrowPieces.join("|") + ")",
    "i"
  );
}
addFormatToken(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
addFormatToken(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function addWeekYearFormatToken(token2, getter) {
  addFormatToken(0, [token2, token2.length], 0, getter);
}
addWeekYearFormatToken("gggg", "weekYear");
addWeekYearFormatToken("ggggg", "weekYear");
addWeekYearFormatToken("GGGG", "isoWeekYear");
addWeekYearFormatToken("GGGGG", "isoWeekYear");
addRegexToken("G", matchSigned);
addRegexToken("g", matchSigned);
addRegexToken("GG", match1to2, match2);
addRegexToken("gg", match1to2, match2);
addRegexToken("GGGG", match1to4, match4);
addRegexToken("gggg", match1to4, match4);
addRegexToken("GGGGG", match1to6, match6);
addRegexToken("ggggg", match1to6, match6);
addWeekParseToken(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(input, week, config, token2) {
    week[token2.substr(0, 2)] = toInt(input);
  }
);
addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
  week[token2] = hooks.parseTwoDigitYear(input);
});
function getSetWeekYear(input) {
  return getSetWeekYearHelper.call(
    this,
    input,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function getSetISOWeekYear(input) {
  return getSetWeekYearHelper.call(
    this,
    input,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function getISOWeeksInYear() {
  return weeksInYear(this.year(), 1, 4);
}
function getISOWeeksInISOWeekYear() {
  return weeksInYear(this.isoWeekYear(), 1, 4);
}
function getWeeksInYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}
function getWeeksInWeekYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
}
function getSetWeekYearHelper(input, week, weekday, dow, doy) {
  var weeksTarget;
  if (input == null) {
    return weekOfYear(this, dow, doy).year;
  } else {
    weeksTarget = weeksInYear(input, dow, doy);
    if (week > weeksTarget) {
      week = weeksTarget;
    }
    return setWeekAll.call(this, input, week, weekday, dow, doy);
  }
}
function setWeekAll(weekYear, week, weekday, dow, doy) {
  var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
  this.year(date.getUTCFullYear());
  this.month(date.getUTCMonth());
  this.date(date.getUTCDate());
  return this;
}
addFormatToken("Q", 0, "Qo", "quarter");
addRegexToken("Q", match1);
addParseToken("Q", function(input, array) {
  array[MONTH] = (toInt(input) - 1) * 3;
});
function getSetQuarter(input) {
  return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}
addFormatToken("D", ["DD", 2], "Do", "date");
addRegexToken("D", match1to2, match1to2NoLeadingZero);
addRegexToken("DD", match1to2, match2);
addRegexToken("Do", function(isStrict, locale2) {
  return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
});
addParseToken(["D", "DD"], DATE);
addParseToken("Do", function(input, array) {
  array[DATE] = toInt(input.match(match1to2)[0]);
});
var getSetDayOfMonth = makeGetSet("Date", true);
addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
addRegexToken("DDD", match1to3);
addRegexToken("DDDD", match3);
addParseToken(["DDD", "DDDD"], function(input, array, config) {
  config._dayOfYear = toInt(input);
});
function getSetDayOfYear(input) {
  var dayOfYear = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
}
addFormatToken("m", ["mm", 2], 0, "minute");
addRegexToken("m", match1to2, match1to2HasZero);
addRegexToken("mm", match1to2, match2);
addParseToken(["m", "mm"], MINUTE);
var getSetMinute = makeGetSet("Minutes", false);
addFormatToken("s", ["ss", 2], 0, "second");
addRegexToken("s", match1to2, match1to2HasZero);
addRegexToken("ss", match1to2, match2);
addParseToken(["s", "ss"], SECOND);
var getSetSecond = makeGetSet("Seconds", false);
addFormatToken("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
addFormatToken(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
addFormatToken(0, ["SSS", 3], 0, "millisecond");
addFormatToken(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
addFormatToken(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
addFormatToken(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
addFormatToken(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
addRegexToken("S", match1to3, match1);
addRegexToken("SS", match1to3, match2);
addRegexToken("SSS", match1to3, match3);
var token, getSetMillisecond;
for (token = "SSSS"; token.length <= 9; token += "S") {
  addRegexToken(token, matchUnsigned);
}
function parseMs(input, array) {
  array[MILLISECOND] = toInt(("0." + input) * 1e3);
}
for (token = "S"; token.length <= 9; token += "S") {
  addParseToken(token, parseMs);
}
getSetMillisecond = makeGetSet("Milliseconds", false);
addFormatToken("z", 0, 0, "zoneAbbr");
addFormatToken("zz", 0, 0, "zoneName");
function getZoneAbbr() {
  return this._isUTC ? "UTC" : "";
}
function getZoneName() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var proto = Moment.prototype;
proto.add = add;
proto.calendar = calendar$1;
proto.clone = clone;
proto.diff = diff;
proto.endOf = endOf;
proto.format = format;
proto.from = from;
proto.fromNow = fromNow;
proto.to = to;
proto.toNow = toNow;
proto.get = stringGet;
proto.invalidAt = invalidAt;
proto.isAfter = isAfter;
proto.isBefore = isBefore;
proto.isBetween = isBetween;
proto.isSame = isSame;
proto.isSameOrAfter = isSameOrAfter;
proto.isSameOrBefore = isSameOrBefore;
proto.isValid = isValid$2;
proto.lang = lang;
proto.locale = locale;
proto.localeData = localeData;
proto.max = prototypeMax;
proto.min = prototypeMin;
proto.parsingFlags = parsingFlags;
proto.set = stringSet;
proto.startOf = startOf;
proto.subtract = subtract;
proto.toArray = toArray;
proto.toObject = toObject;
proto.toDate = toDate;
proto.toISOString = toISOString;
proto.inspect = inspect;
if (typeof Symbol !== "undefined" && Symbol.for != null) {
  proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  };
}
proto.toJSON = toJSON;
proto.toString = toString;
proto.unix = unix;
proto.valueOf = valueOf;
proto.creationData = creationData;
proto.eraName = getEraName;
proto.eraNarrow = getEraNarrow;
proto.eraAbbr = getEraAbbr;
proto.eraYear = getEraYear;
proto.year = getSetYear;
proto.isLeapYear = getIsLeapYear;
proto.weekYear = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;
proto.quarter = proto.quarters = getSetQuarter;
proto.month = getSetMonth;
proto.daysInMonth = getDaysInMonth;
proto.week = proto.weeks = getSetWeek;
proto.isoWeek = proto.isoWeeks = getSetISOWeek;
proto.weeksInYear = getWeeksInYear;
proto.weeksInWeekYear = getWeeksInWeekYear;
proto.isoWeeksInYear = getISOWeeksInYear;
proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
proto.date = getSetDayOfMonth;
proto.day = proto.days = getSetDayOfWeek;
proto.weekday = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear = getSetDayOfYear;
proto.hour = proto.hours = getSetHour;
proto.minute = proto.minutes = getSetMinute;
proto.second = proto.seconds = getSetSecond;
proto.millisecond = proto.milliseconds = getSetMillisecond;
proto.utcOffset = getSetOffset;
proto.utc = setOffsetToUTC;
proto.local = setOffsetToLocal;
proto.parseZone = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST = isDaylightSavingTime;
proto.isLocal = isLocal;
proto.isUtcOffset = isUtcOffset;
proto.isUtc = isUtc;
proto.isUTC = isUtc;
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;
proto.dates = deprecate(
  "dates accessor is deprecated. Use date instead.",
  getSetDayOfMonth
);
proto.months = deprecate(
  "months accessor is deprecated. Use month instead",
  getSetMonth
);
proto.years = deprecate(
  "years accessor is deprecated. Use year instead",
  getSetYear
);
proto.zone = deprecate(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  getSetZone
);
proto.isDSTShifted = deprecate(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  isDaylightSavingTimeShifted
);
function createUnix(input) {
  return createLocal(input * 1e3);
}
function createInZone() {
  return createLocal.apply(null, arguments).parseZone();
}
function preParsePostFormat(string) {
  return string;
}
var proto$1 = Locale.prototype;
proto$1.calendar = calendar;
proto$1.longDateFormat = longDateFormat;
proto$1.invalidDate = invalidDate;
proto$1.ordinal = ordinal;
proto$1.preparse = preParsePostFormat;
proto$1.postformat = preParsePostFormat;
proto$1.relativeTime = relativeTime;
proto$1.pastFuture = pastFuture;
proto$1.set = set;
proto$1.eras = localeEras;
proto$1.erasParse = localeErasParse;
proto$1.erasConvertYear = localeErasConvertYear;
proto$1.erasAbbrRegex = erasAbbrRegex;
proto$1.erasNameRegex = erasNameRegex;
proto$1.erasNarrowRegex = erasNarrowRegex;
proto$1.months = localeMonths;
proto$1.monthsShort = localeMonthsShort;
proto$1.monthsParse = localeMonthsParse;
proto$1.monthsRegex = monthsRegex;
proto$1.monthsShortRegex = monthsShortRegex;
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;
proto$1.weekdays = localeWeekdays;
proto$1.weekdaysMin = localeWeekdaysMin;
proto$1.weekdaysShort = localeWeekdaysShort;
proto$1.weekdaysParse = localeWeekdaysParse;
proto$1.weekdaysRegex = weekdaysRegex;
proto$1.weekdaysShortRegex = weekdaysShortRegex;
proto$1.weekdaysMinRegex = weekdaysMinRegex;
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;
function get$1(format2, index2, field, setter) {
  var locale2 = getLocale(), utc = createUTC().set(setter, index2);
  return locale2[field](utc, format2);
}
function listMonthsImpl(format2, index2, field) {
  if (isNumber(format2)) {
    index2 = format2;
    format2 = void 0;
  }
  format2 = format2 || "";
  if (index2 != null) {
    return get$1(format2, index2, field, "month");
  }
  var i, out = [];
  for (i = 0; i < 12; i++) {
    out[i] = get$1(format2, i, field, "month");
  }
  return out;
}
function listWeekdaysImpl(localeSorted, format2, index2, field) {
  if (typeof localeSorted === "boolean") {
    if (isNumber(format2)) {
      index2 = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  } else {
    format2 = localeSorted;
    index2 = format2;
    localeSorted = false;
    if (isNumber(format2)) {
      index2 = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  }
  var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
  if (index2 != null) {
    return get$1(format2, (index2 + shift) % 7, field, "day");
  }
  for (i = 0; i < 7; i++) {
    out[i] = get$1(format2, (i + shift) % 7, field, "day");
  }
  return out;
}
function listMonths(format2, index2) {
  return listMonthsImpl(format2, index2, "months");
}
function listMonthsShort(format2, index2) {
  return listMonthsImpl(format2, index2, "monthsShort");
}
function listWeekdays(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
}
function listWeekdaysShort(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
}
function listWeekdaysMin(localeSorted, format2, index2) {
  return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
}
getSetGlobalLocale("en", {
  eras: [
    {
      since: "0001-01-01",
      until: Infinity,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -Infinity,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(number) {
    var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
    return number + output;
  }
});
hooks.lang = deprecate(
  "moment.lang is deprecated. Use moment.locale instead.",
  getSetGlobalLocale
);
hooks.langData = deprecate(
  "moment.langData is deprecated. Use moment.localeData instead.",
  getLocale
);
var mathAbs = Math.abs;
function abs() {
  var data = this._data;
  this._milliseconds = mathAbs(this._milliseconds);
  this._days = mathAbs(this._days);
  this._months = mathAbs(this._months);
  data.milliseconds = mathAbs(data.milliseconds);
  data.seconds = mathAbs(data.seconds);
  data.minutes = mathAbs(data.minutes);
  data.hours = mathAbs(data.hours);
  data.months = mathAbs(data.months);
  data.years = mathAbs(data.years);
  return this;
}
function addSubtract$1(duration, input, value, direction) {
  var other = createDuration(input, value);
  duration._milliseconds += direction * other._milliseconds;
  duration._days += direction * other._days;
  duration._months += direction * other._months;
  return duration._bubble();
}
function add$1(input, value) {
  return addSubtract$1(this, input, value, 1);
}
function subtract$1(input, value) {
  return addSubtract$1(this, input, value, -1);
}
function absCeil(number) {
  if (number < 0) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
}
function bubble() {
  var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
  if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
    milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
    days2 = 0;
    months2 = 0;
  }
  data.milliseconds = milliseconds2 % 1e3;
  seconds2 = absFloor(milliseconds2 / 1e3);
  data.seconds = seconds2 % 60;
  minutes2 = absFloor(seconds2 / 60);
  data.minutes = minutes2 % 60;
  hours2 = absFloor(minutes2 / 60);
  data.hours = hours2 % 24;
  days2 += absFloor(hours2 / 24);
  monthsFromDays = absFloor(daysToMonths(days2));
  months2 += monthsFromDays;
  days2 -= absCeil(monthsToDays(monthsFromDays));
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  data.days = days2;
  data.months = months2;
  data.years = years2;
  return this;
}
function daysToMonths(days2) {
  return days2 * 4800 / 146097;
}
function monthsToDays(months2) {
  return months2 * 146097 / 4800;
}
function as(units) {
  if (!this.isValid()) {
    return NaN;
  }
  var days2, months2, milliseconds2 = this._milliseconds;
  units = normalizeUnits(units);
  if (units === "month" || units === "quarter" || units === "year") {
    days2 = this._days + milliseconds2 / 864e5;
    months2 = this._months + daysToMonths(days2);
    switch (units) {
      case "month":
        return months2;
      case "quarter":
        return months2 / 3;
      case "year":
        return months2 / 12;
    }
  } else {
    days2 = this._days + Math.round(monthsToDays(this._months));
    switch (units) {
      case "week":
        return days2 / 7 + milliseconds2 / 6048e5;
      case "day":
        return days2 + milliseconds2 / 864e5;
      case "hour":
        return days2 * 24 + milliseconds2 / 36e5;
      case "minute":
        return days2 * 1440 + milliseconds2 / 6e4;
      case "second":
        return days2 * 86400 + milliseconds2 / 1e3;
      case "millisecond":
        return Math.floor(days2 * 864e5) + milliseconds2;
      default:
        throw new Error("Unknown unit " + units);
    }
  }
}
function makeAs(alias) {
  return function() {
    return this.as(alias);
  };
}
var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
function clone$1() {
  return createDuration(this);
}
function get$2(units) {
  units = normalizeUnits(units);
  return this.isValid() ? this[units + "s"]() : NaN;
}
function makeGetter(name) {
  return function() {
    return this.isValid() ? this._data[name] : NaN;
  };
}
var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
function weeks() {
  return absFloor(this.days() / 7);
}
var round = Math.round, thresholds = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
  return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}
function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
  var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
  if (thresholds2.w != null) {
    a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
  }
  a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
  a[2] = withoutSuffix;
  a[3] = +posNegDuration > 0;
  a[4] = locale2;
  return substituteTimeAgo.apply(null, a);
}
function getSetRelativeTimeRounding(roundingFunction) {
  if (roundingFunction === void 0) {
    return round;
  }
  if (typeof roundingFunction === "function") {
    round = roundingFunction;
    return true;
  }
  return false;
}
function getSetRelativeTimeThreshold(threshold, limit) {
  if (thresholds[threshold] === void 0) {
    return false;
  }
  if (limit === void 0) {
    return thresholds[threshold];
  }
  thresholds[threshold] = limit;
  if (threshold === "s") {
    thresholds.ss = limit - 1;
  }
  return true;
}
function humanize(argWithSuffix, argThresholds) {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var withSuffix = false, th = thresholds, locale2, output;
  if (typeof argWithSuffix === "object") {
    argThresholds = argWithSuffix;
    argWithSuffix = false;
  }
  if (typeof argWithSuffix === "boolean") {
    withSuffix = argWithSuffix;
  }
  if (typeof argThresholds === "object") {
    th = Object.assign({}, thresholds, argThresholds);
    if (argThresholds.s != null && argThresholds.ss == null) {
      th.ss = argThresholds.s - 1;
    }
  }
  locale2 = this.localeData();
  output = relativeTime$1(this, !withSuffix, th, locale2);
  if (withSuffix) {
    output = locale2.pastFuture(+this, output);
  }
  return locale2.postformat(output);
}
var abs$1 = Math.abs;
function sign(x) {
  return (x > 0) - (x < 0) || +x;
}
function toISOString$1() {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
  if (!total) {
    return "P0D";
  }
  minutes2 = absFloor(seconds2 / 60);
  hours2 = absFloor(minutes2 / 60);
  seconds2 %= 60;
  minutes2 %= 60;
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
  totalSign = total < 0 ? "-" : "";
  ymSign = sign(this._months) !== sign(total) ? "-" : "";
  daysSign = sign(this._days) !== sign(total) ? "-" : "";
  hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
  return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
}
var proto$2 = Duration.prototype;
proto$2.isValid = isValid$1;
proto$2.abs = abs;
proto$2.add = add$1;
proto$2.subtract = subtract$1;
proto$2.as = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds = asSeconds;
proto$2.asMinutes = asMinutes;
proto$2.asHours = asHours;
proto$2.asDays = asDays;
proto$2.asWeeks = asWeeks;
proto$2.asMonths = asMonths;
proto$2.asQuarters = asQuarters;
proto$2.asYears = asYears;
proto$2.valueOf = valueOf$1;
proto$2._bubble = bubble;
proto$2.clone = clone$1;
proto$2.get = get$2;
proto$2.milliseconds = milliseconds;
proto$2.seconds = seconds;
proto$2.minutes = minutes;
proto$2.hours = hours;
proto$2.days = days;
proto$2.weeks = weeks;
proto$2.months = months;
proto$2.years = years;
proto$2.humanize = humanize;
proto$2.toISOString = toISOString$1;
proto$2.toString = toISOString$1;
proto$2.toJSON = toISOString$1;
proto$2.locale = locale;
proto$2.localeData = localeData;
proto$2.toIsoString = deprecate(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  toISOString$1
);
proto$2.lang = lang;
addFormatToken("X", 0, 0, "unix");
addFormatToken("x", 0, 0, "valueOf");
addRegexToken("x", matchSigned);
addRegexToken("X", matchTimestamp);
addParseToken("X", function(input, array, config) {
  config._d = new Date(parseFloat(input) * 1e3);
});
addParseToken("x", function(input, array, config) {
  config._d = new Date(toInt(input));
});
//! moment.js
hooks.version = "2.30.1";
setHookCallback(createLocal);
hooks.fn = proto;
hooks.min = min;
hooks.max = max;
hooks.now = now$1;
hooks.utc = createUTC;
hooks.unix = createUnix;
hooks.months = listMonths;
hooks.isDate = isDate;
hooks.locale = getSetGlobalLocale;
hooks.invalid = createInvalid;
hooks.duration = createDuration;
hooks.isMoment = isMoment;
hooks.weekdays = listWeekdays;
hooks.parseZone = createInZone;
hooks.localeData = getLocale;
hooks.isDuration = isDuration;
hooks.monthsShort = listMonthsShort;
hooks.weekdaysMin = listWeekdaysMin;
hooks.defineLocale = defineLocale;
hooks.updateLocale = updateLocale;
hooks.locales = listLocales;
hooks.weekdaysShort = listWeekdaysShort;
hooks.normalizeUnits = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat = getCalendarFormat;
hooks.prototype = proto;
hooks.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const _sfc_main$2 = {
  name: "PropertyDateTime",
  components: {
    NcSelect,
    DateTimePicker: NcDateTimePicker,
    PropertyTitle,
    PropertyActions
  },
  mixins: [PropertyMixin],
  props: {
    value: {
      type: [ICALmodule.VCardTime, String],
      default: "",
      required: true
    }
  },
  data() {
    return {
      // input type following DatePicker docs
      inputType: this.propType === "date-time" || this.propType === "date-and-or-time" ? "datetime" : this.propType === "date" ? "date" : "time",
      // locale and lang data
      locale: "en",
      firstDay: window.firstDay === 0 ? 7 : window.firstDay,
      // provided by nextcloud
      lang: {
        days: window.dayNamesShort,
        // provided by nextcloud
        months: window.monthNamesShort,
        // provided by nextcloud
        placeholder: {
          date: t("contacts", "Select Date")
        }
      },
      dateFormat: {
        stringify: (date) => {
          return date ? this.formatDateTime() : null;
        },
        parse: (value) => {
          return value ? hooks(value, ["LL", "L"]).toDate() : null;
        }
      }
    };
  },
  computed: {
    // make sure the property is valid
    vcardTimeLocalValue() {
      if (typeof this.localValue === "string") {
        return new ICALmodule.VCardTime.fromDateAndOrTimeString(this.localValue);
      }
      return this.localValue;
    }
  },
  async mounted() {
    let locale2 = getLocale$1().replace("_", "-").toLowerCase();
    try {
      await __vitePreload(() => import(
        /* webpackChunkName: 'moment' */
        "moment/locale/" + locale2
      ), true ? [] : void 0, import.meta.url);
      this.locale = locale2;
    } catch (e) {
      try {
        locale2 = locale2.split("-")[0];
        await __vitePreload(() => import(
          /* webpackChunkName: 'moment' */
          "moment/locale/" + locale2
        ), true ? [] : void 0, import.meta.url);
      } catch (e2) {
        console.debug("Fallback to locale", "en");
        locale2 = "en";
      }
    } finally {
      this.locale = locale2;
      console.debug("Locale used", locale2);
    }
  },
  methods: {
    /**
     * Debounce and send update event to parent
     */
    debounceUpdateValue: debounce(function(date) {
      const objMap = ["year", "month", "day", "hour", "minute", "second"];
      const rawArray = hooks(date).toArray();
      const dateObject = rawArray.reduce((acc, cur, index2) => {
        acc[objMap[index2]] = cur;
        return acc;
      }, {});
      dateObject.month++;
      this.updateValue(dateObject);
    }, 500),
    updateValue(dateObject, forceYear) {
      const ignoreYear = this.property.getParameter("x-apple-omit-year");
      if (forceYear) {
        this.property.removeParameter("x-apple-omit-year");
        dateObject.year = parseInt(ignoreYear) ? ignoreYear : hooks().year();
      } else if (!this.value.year) {
        dateObject.year = null;
      } else if (ignoreYear && dateObject.year) {
        this.property.setParameter("x-apple-omit-year", parseInt(dateObject.year).toString());
      }
      this.localValue = new ICALmodule.VCardTime(dateObject, null, this.propType);
      this.$emit("update:value", this.localValue);
    },
    /**
     * Format time with locale to display only
     * Using the Object as hared data since it's the only way
     * for us to forcefully omit some data (no year, or no time... etc)
     * and ths only common syntax between js Date, moment and VCardTime
     *
     * @return {string}
     */
    formatDateTime() {
      const datetimeData = this.vcardTimeLocalValue.toJSON();
      let datetime = "";
      const ignoreYear = this.property.getParameter("x-apple-omit-year");
      if (ignoreYear) {
        datetimeData.year = null;
      }
      datetimeData.month--;
      if (datetimeData.hour === null && datetimeData.minute === null && datetimeData.second === null) {
        datetime = hooks(datetimeData).locale(this.locale).format("LL");
      } else if (datetimeData.year === null && datetimeData.month === null && datetimeData.day === null) {
        datetime = hooks(datetimeData).locale(this.locale).format("LTS");
      }
      if (datetime === "") {
        datetime = hooks(datetimeData).locale(this.locale).format(
          this.inputType === "datetime" ? "llll" : this.inputType === "date" ? "ll" : "LTS"
          // only time
        );
      }
      return datetimeData.year === null ? datetime.replace(hooks(this.vcardTimeLocalValue).year(), "").replace(/\s\s+/g, " ") : datetime;
    }
  }
};
var _sfc_render$2 = function render36() {
  var _vm = this, _c = _vm._self._c;
  return _vm.propModel ? _c("div", { staticClass: "property" }, [_vm.isFirstProperty && _vm.propModel.icon ? _c("PropertyTitle", { attrs: { "property": _vm.property, "is-multiple": _vm.isMultiple, "is-read-only": _vm.isReadOnly, "bus": _vm.bus, "icon": _vm.propModel.icon, "readable-name": _vm.propModel.readableName } }) : _vm._e(), _c("div", { staticClass: "property__row" }, [_c("div", { staticClass: "property__label" }, [_vm.propModel.options ? _c("NcSelect", { attrs: { "options": _vm.options, "searchable": false, "placeholder": _vm.t("contacts", "Select type"), "disabled": _vm.isReadOnly, "track-by": "id", "label": "name" }, on: { "input": _vm.updateType }, model: { value: _vm.localType, callback: function($$v) {
    _vm.localType = $$v;
  }, expression: "localType" } }) : _vm.selectType ? _c("span", [_vm._v(" " + _vm._s(_vm.selectType.name) + " ")]) : _c("span", [_vm._v(" " + _vm._s(_vm.propModel.readableName) + " ")])], 1), _c("div", { staticClass: "property__value" }, [!_vm.isReadOnly ? _c("DateTimePicker", { attrs: { "value": _vm.vcardTimeLocalValue.toJSDate(), "minute-step": 10, "lang": _vm.lang, "clearable": false, "first-day-of-week": _vm.firstDay, "type": _vm.inputType, "readonly": _vm.isReadOnly, "formatter": _vm.dateFormat }, on: { "change": _vm.debounceUpdateValue } }) : _c("input", { attrs: { "readonly": true }, domProps: { "value": _vm.formatDateTime() } })], 1), _c("div", { staticClass: "property__actions" }, [!_vm.isReadOnly ? _c("PropertyActions", { attrs: { "actions": _vm.actions, "property-component": this }, on: { "delete": _vm.deleteProperty } }) : _vm._e()], 1)])], 1) : _vm._e();
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null
);
const PropertyDateTime = __component__$2.exports;
const _sfc_main$1 = {
  name: "PropertySelect",
  components: {
    NcSelect,
    PropertyTitle,
    PropertyActions
  },
  mixins: [PropertyMixin],
  props: {
    value: {
      type: [Object, String, Array],
      default: "",
      required: true
    },
    hideActions: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showProperty() {
      return this.isReadOnly && this.localValue || !this.isReadOnly;
    },
    /**
     * Store getters filtered and mapped to usable object
     * This is the list of addressbooks that are available to write
     *
     * @return {{id: string, name: string}[]}
     */
    selectableOptions() {
      return this.options.filter((option) => !option.readOnly).map((addressbook) => {
        return {
          id: addressbook.id,
          name: addressbook.name
        };
      });
    },
    // is there only one option available
    isSingleOption() {
      return this.selectableOptions.length <= 1;
    },
    // matching value to the options we provide
    matchedOptions: {
      get() {
        const options = this.options || this.propModel.options;
        let selected = options.find((option) => option.id === this.localValue || option.id === this.localValue.toLowerCase());
        if (!selected && this.propModel.greedyMatch) {
          selected = this.propModel.greedyMatch(this.localValue, options);
        }
        if (Array.isArray(this.localValue)) {
          return selected || {
            id: this.localValue.join(";"),
            name: this.localValue.join(";")
          };
        }
        return selected || {
          id: this.localValue,
          name: this.localValue
        };
      },
      set(value) {
        if (Array.isArray(this.localValue)) {
          this.localValue = value.id.split(";");
        } else {
          this.localValue = value.id;
        }
      }
    }
  }
};
var _sfc_render$1 = function render37() {
  var _vm = this, _c = _vm._self._c;
  return _vm.propModel && _vm.showProperty && !_vm.isSingleOption ? _c("div", { staticClass: "property" }, [_vm.isFirstProperty && _vm.propModel.icon ? _c("PropertyTitle", { attrs: { "property": _vm.property, "is-multiple": _vm.isMultiple, "is-read-only": _vm.isReadOnly, "bus": _vm.bus, "icon": _vm.propModel.icon, "readable-name": _vm.propModel.readableName } }) : _vm._e(), _c("div", { staticClass: "property__row" }, [_c("div", { staticClass: "property__label" }, [_vm.selectType ? _c("span", [_vm._v(" " + _vm._s(_vm.selectType.name) + " ")]) : _c("span", [_vm._v(" " + _vm._s(_vm.propModel.readableName) + " ")])]), _c("div", { staticClass: "property__value" }, [!_vm.isReadOnly ? _c("NcSelect", { attrs: { "options": _vm.selectableOptions, "no-wrap": true, "placeholder": _vm.t("contacts", "Select option"), "disabled": _vm.isSingleOption || _vm.isReadOnly, "track-by": "id", "label": "name" }, on: { "input": _vm.updateValue }, model: { value: _vm.matchedOptions, callback: function($$v) {
    _vm.matchedOptions = $$v;
  }, expression: "matchedOptions" } }) : _c("p", [_vm._v(" " + _vm._s(_vm.matchedOptions.name) + " ")])], 1), _c("div", { staticClass: "property__actions" }, [!_vm.isReadOnly && !_vm.hideActions ? _c("PropertyActions", { attrs: { "actions": _vm.actions, "property-component": this }, on: { "delete": _vm.deleteProperty } }) : _vm._e()], 1)])], 1) : _vm._e();
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null
);
const PropertySelect = __component__$1.exports;
/*! third party licenses: js/vendor.LICENSE.txt */
function matchTypes(selectedTypes, options) {
  const items = options.map((option) => {
    let score = 0;
    const types = option.id.split(",");
    const intersection = types.filter((value) => selectedTypes.includes(value));
    score = score + intersection.length;
    if (selectedTypes.length === types.length && selectedTypes.length === intersection.length) {
      score++;
    }
    return {
      type: option,
      score
    };
  });
  return items.filter((value) => value.score > 0).sort((a, b) => b.score - a.score).shift();
}
const _sfc_main = {
  name: "ContactDetailsProperty",
  mixins: [
    OrgChartsMixin
  ],
  props: {
    property: {
      type: ICALmodule.Property,
      default: true
    },
    /**
     * Is it the first property of its kind
     */
    isFirstProperty: {
      type: Boolean,
      default: false
    },
    /**
     * Is it the last property of its kind
     */
    isLastProperty: {
      type: Boolean,
      default: false
    },
    contact: {
      type: Contact,
      default: null
    },
    localContact: {
      type: Contact,
      default: null
    },
    contacts: {
      type: Array,
      default: () => []
    },
    bus: {
      type: Object,
      required: true
    },
    isReadOnly: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    // dynamically load component based on property type
    componentInstance() {
      if (this.property.isMultiValue && this.propType === "text") {
        return PropertyMultipleText;
      } else if (this.propType && ["date-and-or-time", "date-time", "time", "date"].indexOf(this.propType) > -1) {
        return PropertyDateTime;
      } else if (this.propType && this.propType === "select") {
        return PropertySelect;
      } else if (this.propType && this.propType !== "unknown") {
        return PropertyText;
      }
      return PropertyText;
    },
    // rfc properties list
    properties() {
      return rfcProps.properties;
    },
    /**
     * Return if property is multiple
     *
     * @return {boolean}
     */
    isMultiple() {
      return this.propModel.multiple;
    },
    /**
     * Return the type of the prop e.g. FN
     *
     * @return {string}
     */
    propName() {
      if (this.propGroup[1]) {
        return this.propGroup[1];
      }
      return this.property.name;
    },
    /**
     * Return the type or property
     *
     * @see src/models/rfcProps
     * @return {string}
     */
    propType() {
      if (this.propModel && this.propModel.force) {
        return this.propModel.force;
      }
      return this.property.getDefaultType();
    },
    /**
     * RFC template matching this property
     *
     * @see src/models/rfcProps
     * @return {object}
     */
    propModel() {
      return this.properties[this.propName];
    },
    /**
     * Remove duplicate name amongst options
     * but make sure to include the selected one
     * in the final list
     *
     * @return {object[]}
     */
    sortedModelOptions() {
      if (!this.propModel.options) {
        return [];
      }
      if (typeof this.propModel.options === "function") {
        return this.propModel.options({
          contact: this.contact,
          $store: this.$store,
          selectType: this.selectType
        });
      } else {
        return this.propModel.options.reduce((list, option) => {
          if (!list.find((search) => search.name === option.name)) {
            list.push(option);
          }
          return list;
        }, this.selectType ? [this.selectType] : []);
      }
    },
    /**
     * Return the id and type of a property group
     * e.g ITEMXX.tel => ['ITEMXX', 'tel']
     *
     * @return {Array}
     */
    propGroup() {
      return this.property.name.split(".");
    },
    /**
     * Return the associated X-ABLABEL if any
     *
     * @return {ICAL.Property}
     */
    propLabel() {
      return this.localContact.vCard.getFirstProperty(`${this.propGroup[0]}.x-ablabel`);
    },
    /**
     * Returns the closest match to the selected type
     * or return the default selected as a new object if
     * none exists
     *
     * @return Object|null
     */
    selectType: {
      get() {
        if (this.propLabel) {
          return {
            id: this.propLabel.name,
            name: this.propLabel.getFirstValue()
          };
        }
        if (this.propModel && this.propModel.options && this.type) {
          const selectedType = this.type.filter((type) => type !== "pref").map((str) => str.toUpperCase());
          const matchingType = matchTypes(
            selectedType,
            this.propModel.options
          );
          if (matchingType) {
            return matchingType.type;
          }
        }
        if (this.type) {
          const selectedType = this.type.filter((type) => type !== "pref").join(",");
          if (selectedType.trim() !== "") {
            return {
              id: selectedType,
              name: selectedType
            };
          }
        }
        return null;
      },
      set(data) {
        if (!data) {
          return;
        }
        if (this.propLabel && data.id === this.propLabel.name) {
          this.propLabel.setValue(data.name);
          this.type = [];
        } else {
          this.type = data.id.split(",");
          this.localContact.vCard.removeProperty(`${this.propGroup[0]}.x-ablabel`);
          const groups2 = this.localContact.jCal[1].map((prop) => prop[0]).filter((name) => name.startsWith(`${this.propGroup[0]}.`));
          if (groups2.length === 1) {
            this.property.jCal[0] = this.propGroup[1];
          }
        }
      }
    },
    // property value(s)
    value: {
      get() {
        if (this.property.isMultiValue) {
          return this.property.isStructuredValue ? this.property.getValues()[0] : this.property.getValues();
        }
        if (this.propName === "x-managersname") {
          if (this.property.getParameter("uid")) {
            return this.property.getParameter("uid") + "~" + this.contact.addressbook.id;
          }
          const displayName = this.property.getFirstValue();
          const other = this.otherContacts(this.contact).find((contact) => contact.displayName === displayName);
          return other?.key;
        }
        return this.property.getFirstValue();
      },
      set(data) {
        if (this.property.isMultiValue) {
          this.property.isStructuredValue ? this.property.setValues([data]) : this.property.setValues(data);
        } else {
          if (this.propName === "x-managersname") {
            const manager = this.$store.getters.getContact(data);
            this.property.setValue(manager.displayName);
            this.property.setParameter("uid", manager.uid);
          } else {
            this.property.setValue(data);
          }
        }
      }
    },
    // property meta type
    type: {
      get() {
        const type = this.property.getParameter("type");
        if (type) {
          return Array.isArray(type) ? type : [type];
        }
        return null;
      },
      set(data) {
        this.property.setParameter("type", data);
      }
    },
    // property meta pref
    pref: {
      get() {
        return this.property.getParameter("pref");
      },
      set(data) {
        this.property.setParameter("pref", data);
      }
    }
  },
  created() {
    this.bus.on("focus-prop", this.onFocusProp);
  },
  destroyed() {
    this.bus.off("focus-prop", this.onFocusProp);
  },
  methods: {
    /**
     * Focus first input element of the new prop
     *
     * @param {string} id the id of the property
     */
    onFocusProp(id) {
      if (id === this.propName && this.isLastProperty) {
        this.$nextTick(() => {
          const inputs = this.$refs.component.$el.querySelectorAll("input, textarea");
          if (inputs === void 0 || inputs.length === 0) {
            console.warn("no input to focus found");
          } else {
            inputs[0].focus();
          }
        });
      }
    },
    /**
     * Delete this property
     */
    onDelete() {
      this.localContact.vCard.removeProperty(this.property);
    }
  }
};
var _sfc_render = function render38() {
  var _vm = this, _c = _vm._self._c;
  return _c(_vm.componentInstance, { ref: "component", tag: "component", class: {
    "property--last": _vm.isLastProperty,
    [`property-${_vm.propName}`]: true
  }, attrs: { "select-type": _vm.selectType, "prop-model": _vm.propModel, "value": _vm.value, "is-first-property": _vm.isFirstProperty, "property": _vm.property, "is-last-property": _vm.isLastProperty, "local-contact": _vm.localContact, "prop-name": _vm.propName, "prop-type": _vm.propType, "options": _vm.sortedModelOptions, "is-read-only": _vm.isReadOnly, "bus": _vm.bus, "is-multiple": _vm.isMultiple }, on: { "update:selectType": function($event) {
    _vm.selectType = $event;
  }, "update:select-type": function($event) {
    _vm.selectType = $event;
  }, "update:value": function($event) {
    _vm.value = $event;
  }, "delete": _vm.onDelete } });
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent$2(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null
);
const ContactDetailsProperty = __component__.exports;
var isVue2 = true;
Vue$1.util.warn;
function hasInjectionContext() {
  return !!getCurrentInstance();
}
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : {};
}
const isProxyAvailable = typeof Proxy === "function";
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
let supported;
let perf;
function isPerformanceSupported() {
  var _a;
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else if (typeof globalThis !== "undefined" && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
    supported = true;
    perf = globalThis.perf_hooks.performance;
  } else {
    supported = false;
  }
  return supported;
}
function now() {
  return isPerformanceSupported() ? perf.now() : Date.now();
}
class ApiProxy {
  constructor(plugin, hook) {
    this.target = null;
    this.targetQueue = [];
    this.onQueue = [];
    this.plugin = plugin;
    this.hook = hook;
    const defaultSettings = {};
    if (plugin.settings) {
      for (const id in plugin.settings) {
        const item = plugin.settings[id];
        defaultSettings[id] = item.defaultValue;
      }
    }
    const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
    let currentSettings = Object.assign({}, defaultSettings);
    try {
      const raw = localStorage.getItem(localSettingsSaveId);
      const data = JSON.parse(raw);
      Object.assign(currentSettings, data);
    } catch (e) {
    }
    this.fallbacks = {
      getSettings() {
        return currentSettings;
      },
      setSettings(value) {
        try {
          localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
        } catch (e) {
        }
        currentSettings = value;
      },
      now() {
        return now();
      }
    };
    if (hook) {
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
    }
    this.proxiedOn = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target.on[prop];
        } else {
          return (...args) => {
            this.onQueue.push({
              method: prop,
              args
            });
          };
        }
      }
    });
    this.proxiedTarget = new Proxy({}, {
      get: (_target, prop) => {
        if (this.target) {
          return this.target[prop];
        } else if (prop === "on") {
          return this.proxiedOn;
        } else if (Object.keys(this.fallbacks).includes(prop)) {
          return (...args) => {
            this.targetQueue.push({
              method: prop,
              args,
              resolve: () => {
              }
            });
            return this.fallbacks[prop](...args);
          };
        } else {
          return (...args) => {
            return new Promise((resolve2) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: resolve2
              });
            });
          };
        }
      }
    });
  }
  async setRealTarget(target2) {
    this.target = target2;
    for (const item of this.onQueue) {
      this.target.on[item.method](...item.args);
    }
    for (const item of this.targetQueue) {
      item.resolve(await this.target[item.method](...item.args));
    }
  }
}
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  const descriptor = pluginDescriptor;
  const target2 = getTarget();
  const hook = getDevtoolsGlobalHook();
  const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
  if (hook && (target2.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
    hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
  } else {
    const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
    const list = target2.__VUE_DEVTOOLS_PLUGINS__ = target2.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: descriptor,
      setupFn,
      proxy
    });
    if (proxy) {
      setupFn(proxy.proxiedTarget);
    }
  }
}
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const IS_CLIENT = typeof window !== "undefined";
const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
function bom(blob, { autoBom = false } = {}) {
  if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
    return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
  }
  return blob;
}
function download(url, name, opts) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.onload = function() {
    saveAs(xhr.response, name, opts);
  };
  xhr.onerror = function() {
    console.error("could not download file");
  };
  xhr.send();
}
function corsEnabled(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("HEAD", url, false);
  try {
    xhr.send();
  } catch (e) {
  }
  return xhr.status >= 200 && xhr.status <= 299;
}
function click(node) {
  try {
    node.dispatchEvent(new MouseEvent("click"));
  } catch (e) {
    const evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
    node.dispatchEvent(evt);
  }
}
const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
const saveAs = !IS_CLIENT ? () => {
} : (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
      // Fallback to using FileReader and a popup
      fileSaverSaveAs
    )
  )
);
function downloadSaveAs(blob, name = "download", opts) {
  const a = document.createElement("a");
  a.download = name;
  a.rel = "noopener";
  if (typeof blob === "string") {
    a.href = blob;
    if (a.origin !== location.origin) {
      if (corsEnabled(a.href)) {
        download(blob, name, opts);
      } else {
        a.target = "_blank";
        click(a);
      }
    } else {
      click(a);
    }
  } else {
    a.href = URL.createObjectURL(blob);
    setTimeout(function() {
      URL.revokeObjectURL(a.href);
    }, 4e4);
    setTimeout(function() {
      click(a);
    }, 0);
  }
}
function msSaveAs(blob, name = "download", opts) {
  if (typeof blob === "string") {
    if (corsEnabled(blob)) {
      download(blob, name, opts);
    } else {
      const a = document.createElement("a");
      a.href = blob;
      a.target = "_blank";
      setTimeout(function() {
        click(a);
      });
    }
  } else {
    navigator.msSaveOrOpenBlob(bom(blob, opts), name);
  }
}
function fileSaverSaveAs(blob, name, opts, popup) {
  popup = popup || open("", "_blank");
  if (popup) {
    popup.document.title = popup.document.body.innerText = "downloading...";
  }
  if (typeof blob === "string")
    return download(blob, name, opts);
  const force = blob.type === "application/octet-stream";
  const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
  const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
    const reader = new FileReader();
    reader.onloadend = function() {
      let url = reader.result;
      if (typeof url !== "string") {
        popup = null;
        throw new Error("Wrong reader.result type");
      }
      url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
      if (popup) {
        popup.location.href = url;
      } else {
        location.assign(url);
      }
      popup = null;
    };
    reader.readAsDataURL(blob);
  } else {
    const url = URL.createObjectURL(blob);
    if (popup)
      popup.location.assign(url);
    else
      location.href = url;
    popup = null;
    setTimeout(function() {
      URL.revokeObjectURL(url);
    }, 4e4);
  }
}
function toastMessage(message, type) {
  const piniaMessage = "🍍 " + message;
  if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
    __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
  } else if (type === "error") {
    console.error(piniaMessage);
  } else if (type === "warn") {
    console.warn(piniaMessage);
  } else {
    console.log(piniaMessage);
  }
}
function isPinia(o2) {
  return "_a" in o2 && "install" in o2;
}
function checkClipboardAccess() {
  if (!("clipboard" in navigator)) {
    toastMessage(`Your browser doesn't support the Clipboard API`, "error");
    return true;
  }
}
function checkNotFocusedError(error) {
  if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
    toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
    return true;
  }
  return false;
}
async function actionGlobalCopyState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
    toastMessage("Global state copied to clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalPasteState(pinia) {
  if (checkClipboardAccess())
    return;
  try {
    loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
    toastMessage("Global state pasted from clipboard.");
  } catch (error) {
    if (checkNotFocusedError(error))
      return;
    toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
    console.error(error);
  }
}
async function actionGlobalSaveState(pinia) {
  try {
    saveAs(new Blob([JSON.stringify(pinia.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (error) {
    toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
let fileInput;
function getFileOpener() {
  if (!fileInput) {
    fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".json";
  }
  function openFile() {
    return new Promise((resolve2, reject) => {
      fileInput.onchange = async () => {
        const files = fileInput.files;
        if (!files)
          return resolve2(null);
        const file = files.item(0);
        if (!file)
          return resolve2(null);
        return resolve2({ text: await file.text(), file });
      };
      fileInput.oncancel = () => resolve2(null);
      fileInput.onerror = reject;
      fileInput.click();
    });
  }
  return openFile;
}
async function actionGlobalOpenStateFile(pinia) {
  try {
    const open2 = getFileOpener();
    const result = await open2();
    if (!result)
      return;
    const { text, file } = result;
    loadStoresState(pinia, JSON.parse(text));
    toastMessage(`Global state imported from "${file.name}".`);
  } catch (error) {
    toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
    console.error(error);
  }
}
function loadStoresState(pinia, state2) {
  for (const key in state2) {
    const storeState = pinia.state.value[key];
    if (storeState) {
      Object.assign(storeState, state2[key]);
    } else {
      pinia.state.value[key] = state2[key];
    }
  }
}
function formatDisplay(display) {
  return {
    _custom: {
      display
    }
  };
}
const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
const PINIA_ROOT_ID = "_root";
function formatStoreForInspectorTree(store2) {
  return isPinia(store2) ? {
    id: PINIA_ROOT_ID,
    label: PINIA_ROOT_LABEL
  } : {
    id: store2.$id,
    label: store2.$id
  };
}
function formatStoreForInspectorState(store2) {
  if (isPinia(store2)) {
    const storeNames = Array.from(store2._s.keys());
    const storeMap = store2._s;
    const state22 = {
      state: storeNames.map((storeId) => ({
        editable: true,
        key: storeId,
        value: store2.state.value[storeId]
      })),
      getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
        const store22 = storeMap.get(id);
        return {
          editable: false,
          key: id,
          value: store22._getters.reduce((getters2, key) => {
            getters2[key] = store22[key];
            return getters2;
          }, {})
        };
      })
    };
    return state22;
  }
  const state2 = {
    state: Object.keys(store2.$state).map((key) => ({
      editable: true,
      key,
      value: store2.$state[key]
    }))
  };
  if (store2._getters && store2._getters.length) {
    state2.getters = store2._getters.map((getterName) => ({
      editable: false,
      key: getterName,
      value: store2[getterName]
    }));
  }
  if (store2._customProperties.size) {
    state2.customProperties = Array.from(store2._customProperties).map((key) => ({
      editable: true,
      key,
      value: store2[key]
    }));
  }
  return state2;
}
function formatEventData(events) {
  if (!events)
    return {};
  if (Array.isArray(events)) {
    return events.reduce((data, event) => {
      data.keys.push(event.key);
      data.operations.push(event.type);
      data.oldValue[event.key] = event.oldValue;
      data.newValue[event.key] = event.newValue;
      return data;
    }, {
      oldValue: {},
      keys: [],
      operations: [],
      newValue: {}
    });
  } else {
    return {
      operation: formatDisplay(events.type),
      key: formatDisplay(events.key),
      oldValue: events.oldValue,
      newValue: events.newValue
    };
  }
}
function formatMutationType(type) {
  switch (type) {
    case MutationType.direct:
      return "mutation";
    case MutationType.patchFunction:
      return "$patch";
    case MutationType.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let isTimelineActive = true;
const componentStateTypes = [];
const MUTATIONS_LAYER_ID = "pinia:mutations";
const INSPECTOR_ID = "pinia";
const { assign: assign$1 } = Object;
const getStoreType = (id) => "🍍 " + id;
function registerPiniaDevtools(app, pinia) {
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app
  }, (api) => {
    if (typeof api.now !== "function") {
      toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
    }
    api.addTimelineLayer({
      id: MUTATIONS_LAYER_ID,
      label: `Pinia 🍍`,
      color: 15064968
    });
    api.addInspector({
      id: INSPECTOR_ID,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            actionGlobalCopyState(pinia);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await actionGlobalPasteState(pinia);
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            actionGlobalSaveState(pinia);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await actionGlobalOpenStateFile(pinia);
            api.sendInspectorTree(INSPECTOR_ID);
            api.sendInspectorState(INSPECTOR_ID);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (nodeId) => {
            const store2 = pinia._s.get(nodeId);
            if (!store2) {
              toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
            } else if (typeof store2.$reset !== "function") {
              toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
            } else {
              store2.$reset();
              toastMessage(`Store "${nodeId}" reset.`);
            }
          }
        }
      ]
    });
    api.on.inspectComponent((payload, ctx) => {
      const proxy = payload.componentInstance && payload.componentInstance.proxy;
      if (proxy && proxy._pStores) {
        const piniaStores = payload.componentInstance.proxy._pStores;
        Object.values(piniaStores).forEach((store2) => {
          payload.instanceData.state.push({
            type: getStoreType(store2.$id),
            key: "state",
            editable: true,
            value: store2._isOptionsAPI ? {
              _custom: {
                value: toRaw(store2.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => store2.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(store2.$state).reduce((state2, key) => {
                state2[key] = store2.$state[key];
                return state2;
              }, {})
            )
          });
          if (store2._getters && store2._getters.length) {
            payload.instanceData.state.push({
              type: getStoreType(store2.$id),
              key: "getters",
              editable: false,
              value: store2._getters.reduce((getters2, key) => {
                try {
                  getters2[key] = store2[key];
                } catch (error) {
                  getters2[key] = error;
                }
                return getters2;
              }, {})
            });
          }
        });
      }
    });
    api.on.getInspectorTree((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        let stores = [pinia];
        stores = stores.concat(Array.from(pinia._s.values()));
        payload.rootNodes = (payload.filter ? stores.filter((store2) => "$id" in store2 ? store2.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
      }
    });
    globalThis.$pinia = pinia;
    api.on.getInspectorState((payload) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return;
        }
        if (inspectedStore) {
          if (payload.nodeId !== PINIA_ROOT_ID)
            globalThis.$store = toRaw(inspectedStore);
          payload.state = formatStoreForInspectorState(inspectedStore);
        }
      }
    });
    api.on.editInspectorState((payload, ctx) => {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
        if (!inspectedStore) {
          return toastMessage(`store "${payload.nodeId}" not found`, "error");
        }
        const { path } = payload;
        if (!isPinia(inspectedStore)) {
          if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
            path.unshift("$state");
          }
        } else {
          path.unshift("state");
        }
        isTimelineActive = false;
        payload.set(inspectedStore, path, payload.state.value);
        isTimelineActive = true;
      }
    });
    api.on.editComponentState((payload) => {
      if (payload.type.startsWith("🍍")) {
        const storeId = payload.type.replace(/^🍍\s*/, "");
        const store2 = pinia._s.get(storeId);
        if (!store2) {
          return toastMessage(`store "${storeId}" not found`, "error");
        }
        const { path } = payload;
        if (path[0] !== "state") {
          return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
        }
        path[0] = "$state";
        isTimelineActive = false;
        payload.set(store2, path, payload.state.value);
        isTimelineActive = true;
      }
    });
  });
}
function addStoreToDevtools(app, store2) {
  if (!componentStateTypes.includes(getStoreType(store2.$id))) {
    componentStateTypes.push(getStoreType(store2.$id));
  }
  setupDevtoolsPlugin({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes,
    app,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: true
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (api) => {
    const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
    store2.$onAction(({ after, onError, name, args }) => {
      const groupId = runningActionId++;
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now2(),
          title: "🛫 " + name,
          subtitle: "start",
          data: {
            store: formatDisplay(store2.$id),
            action: formatDisplay(name),
            args
          },
          groupId
        }
      });
      after((result) => {
        activeAction = void 0;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛬 " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store2.$id),
              action: formatDisplay(name),
              args,
              result
            },
            groupId
          }
        });
      });
      onError((error) => {
        activeAction = void 0;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            logType: "error",
            title: "💥 " + name,
            subtitle: "end",
            data: {
              store: formatDisplay(store2.$id),
              action: formatDisplay(name),
              args,
              error
            },
            groupId
          }
        });
      });
    }, true);
    store2._customProperties.forEach((name) => {
      watch(() => unref(store2[name]), (newValue, oldValue) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (isTimelineActive) {
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "Change",
              subtitle: name,
              data: {
                newValue,
                oldValue
              },
              groupId: activeAction
            }
          });
        }
      }, { deep: true });
    });
    store2.$subscribe(({ events, type }, state2) => {
      api.notifyComponentUpdate();
      api.sendInspectorState(INSPECTOR_ID);
      if (!isTimelineActive)
        return;
      const eventData = {
        time: now2(),
        title: formatMutationType(type),
        data: assign$1({ store: formatDisplay(store2.$id) }, formatEventData(events)),
        groupId: activeAction
      };
      if (type === MutationType.patchFunction) {
        eventData.subtitle = "⤵️";
      } else if (type === MutationType.patchObject) {
        eventData.subtitle = "🧩";
      } else if (events && !Array.isArray(events)) {
        eventData.subtitle = events.type;
      }
      if (events) {
        eventData.data["rawEvent(s)"] = {
          _custom: {
            display: "DebuggerEvent",
            type: "object",
            tooltip: "raw DebuggerEvent[]",
            value: events
          }
        };
      }
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: eventData
      });
    }, { detached: true, flush: "sync" });
    const hotUpdate2 = store2._hotUpdate;
    store2._hotUpdate = markRaw((newStore) => {
      hotUpdate2(newStore);
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: now2(),
          title: "🔥 " + store2.$id,
          subtitle: "HMR update",
          data: {
            store: formatDisplay(store2.$id),
            info: formatDisplay(`HMR update`)
          }
        }
      });
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
    });
    const { $dispose } = store2;
    store2.$dispose = () => {
      $dispose();
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`Disposed "${store2.$id}" store 🗑`);
    };
    api.notifyComponentUpdate();
    api.sendInspectorTree(INSPECTOR_ID);
    api.sendInspectorState(INSPECTOR_ID);
    api.getSettings().logStoreChanges && toastMessage(`"${store2.$id}" store installed 🆕`);
  });
}
let runningActionId = 0;
let activeAction;
function patchActionForGrouping(store2, actionNames, wrapWithProxy) {
  const actions2 = actionNames.reduce((storeActions, actionName) => {
    storeActions[actionName] = toRaw(store2)[actionName];
    return storeActions;
  }, {});
  for (const actionName in actions2) {
    store2[actionName] = function() {
      const _actionId = runningActionId;
      const trackedStore = wrapWithProxy ? new Proxy(store2, {
        get(...args) {
          activeAction = _actionId;
          return Reflect.get(...args);
        },
        set(...args) {
          activeAction = _actionId;
          return Reflect.set(...args);
        }
      }) : store2;
      activeAction = _actionId;
      const retValue = actions2[actionName].apply(trackedStore, arguments);
      activeAction = void 0;
      return retValue;
    };
  }
}
function devtoolsPlugin({ app, store: store2, options }) {
  if (store2.$id.startsWith("__hot:")) {
    return;
  }
  store2._isOptionsAPI = !!options.state;
  if (!store2._p._testing) {
    patchActionForGrouping(store2, Object.keys(options.actions), store2._isOptionsAPI);
    const originalHotUpdate = store2._hotUpdate;
    toRaw(store2)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store2, Object.keys(newStore._hmrPayload.actions), !!store2._isOptionsAPI);
    };
  }
  addStoreToDevtools(
    app,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    store2
  );
}
function createPinia() {
  const scope = effectScope(true);
  const state2 = scope.run(() => ref$1({}));
  let _p = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
    },
    use(plugin) {
      if (!this._a && !isVue2) ;
      else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state: state2
  });
  if (typeof __VUE_PROD_DEVTOOLS__ !== "undefined" && __VUE_PROD_DEVTOOLS__ && true && IS_CLIENT && typeof Proxy !== "undefined") {
    pinia.use(devtoolsPlugin);
  }
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target2, patchToApply) {
  if (target2 instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target2.set(key, value));
  } else if (target2 instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target2.add, target2);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target2[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target2.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target2[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target2[key] = subPatch;
    }
  }
  return target2;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state: state2, actions: actions2, getters: getters2 } = options;
  const initialState = pinia.state.value[id];
  let store2;
  function setup() {
    if (!initialState && true) {
      {
        set$2(pinia.state.value, id, state2 ? state2() : {});
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions2, Object.keys(getters2 || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store22 = pinia._s.get(id);
        if (!store22._r)
          return;
        return getters2[name].call(store22, store22);
      }));
      return computedGetters;
    }, {}));
  }
  store2 = createSetupStore(id, setup, options, pinia, hot, true);
  return store2;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    {
      set$2(pinia.state.value, $id, {});
    }
  }
  const hotState = ref$1({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state: state2 } = options;
    const newState = state2 ? state2() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store: store2,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store2, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state2) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state2);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  {
    partialStore._r = false;
  }
  const store2 = reactive(typeof __VUE_PROD_DEVTOOLS__ !== "undefined" && __VUE_PROD_DEVTOOLS__ && true && IS_CLIENT ? assign(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    partialStore
    // must be added later
    // setupStore
  ) : partialStore);
  pinia._s.set($id, store2);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          set$2(pinia.state.value[$id], key, prop);
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      {
        set$2(setupStore, key, actionValue);
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    Object.keys(setupStore).forEach((key) => {
      set$2(store2, key, setupStore[key]);
    });
  }
  Object.defineProperty(store2, "$state", {
    get: () => pinia.state.value[$id],
    set: (state2) => {
      $patch(($state) => {
        assign($state, state2);
      });
    }
  });
  if (typeof __VUE_PROD_DEVTOOLS__ !== "undefined" && __VUE_PROD_DEVTOOLS__ && true && IS_CLIENT) {
    const nonEnumerable = {
      writable: true,
      configurable: true,
      // avoid warning on devtools trying to display this property
      enumerable: false
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
      Object.defineProperty(store2, p, assign({ value: store2[p] }, nonEnumerable));
    });
  }
  {
    store2._r = true;
  }
  pinia._p.forEach((extender) => {
    if (typeof __VUE_PROD_DEVTOOLS__ !== "undefined" && __VUE_PROD_DEVTOOLS__ && true && IS_CLIENT) {
      const extensions = scope.run(() => extender({
        store: store2,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      }));
      Object.keys(extensions || {}).forEach((key) => store2._customProperties.add(key));
      assign(store2, extensions);
    } else {
      assign(store2, scope.run(() => extender({
        store: store2,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store2.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store2;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    pinia || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store2 = pinia._s.get(id);
    return store2;
  }
  useStore.$id = id;
  return useStore;
}
const PiniaVuePlugin = function(_Vue) {
  _Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      if (options.pinia) {
        const pinia = options.pinia;
        if (!this._provided) {
          const provideCache = {};
          Object.defineProperty(this, "_provided", {
            get: () => provideCache,
            set: (v2) => Object.assign(provideCache, v2)
          });
        }
        this._provided[piniaSymbol] = pinia;
        if (!this.$pinia) {
          this.$pinia = pinia;
        }
        pinia._a = this;
        if (IS_CLIENT) {
          setActivePinia(pinia);
        }
        if (typeof __VUE_PROD_DEVTOOLS__ !== "undefined" && __VUE_PROD_DEVTOOLS__ && true && IS_CLIENT) {
          registerPiniaDevtools(pinia._a, pinia);
        }
      } else if (!this.$pinia && options.parent && options.parent.$pinia) {
        this.$pinia = options.parent.$pinia;
      }
    },
    destroyed() {
      delete this._pStores;
    }
  });
};
const usePrincipalsStore = /* @__PURE__ */ defineStore("principals", {
  state: () => ({
    currentUserPrincipal: null
  }),
  actions: {
    setCurrentUserPrincipal(client2) {
      this.currentUserPrincipal = client2?.currentUserPrincipal;
    }
  }
});
var vueClickOutside = { exports: {} };
(function(module2, exports) {
  function validate2(binding) {
    if (typeof binding.value !== "function") {
      console.warn("[Vue-click-outside:] provided expression", binding.expression, "is not a function.");
      return false;
    }
    return true;
  }
  function isPopup(popupItem, elements) {
    if (!popupItem || !elements)
      return false;
    for (var i = 0, len = elements.length; i < len; i++) {
      try {
        if (popupItem.contains(elements[i])) {
          return true;
        }
        if (elements[i].contains(popupItem)) {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function isServer(vNode) {
    return typeof vNode.componentInstance !== "undefined" && vNode.componentInstance.$isServer;
  }
  module2.exports = {
    bind: function(el, binding, vNode) {
      if (!validate2(binding)) return;
      function handler(e) {
        if (!vNode.context) return;
        var elements = e.path || e.composedPath && e.composedPath();
        elements && elements.length > 0 && elements.unshift(e.target);
        if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return;
        el.__vueClickOutside__.callback(e);
      }
      el.__vueClickOutside__ = {
        handler,
        callback: binding.value
      };
      const clickHandler = "ontouchstart" in document.documentElement ? "touchstart" : "click";
      !isServer(vNode) && document.addEventListener(clickHandler, handler);
    },
    update: function(el, binding) {
      if (validate2(binding)) el.__vueClickOutside__.callback = binding.value;
    },
    unbind: function(el, binding, vNode) {
      const clickHandler = "ontouchstart" in document.documentElement ? "touchstart" : "click";
      !isServer(vNode) && el.__vueClickOutside__ && document.removeEventListener(clickHandler, el.__vueClickOutside__.handler);
      delete el.__vueClickOutside__;
    }
  };
})(vueClickOutside);
var vueClickOutsideExports = vueClickOutside.exports;
const ClickOutside = /* @__PURE__ */ getDefaultExportFromCjs(vueClickOutsideExports);
export {
  GROUP_NO_GROUP_CONTACTS as $,
  ContactDetailsProperty as A,
  IconEmail as B,
  Circle as C,
  IconMessage as D,
  IconCall as E,
  IconUser as F,
  IconCopy as G,
  IconRename as H,
  IconDelete as I,
  PropertySelect as J,
  mitt as K,
  validate as L,
  Member as M,
  pLimit as N,
  OrgChartsMixin as O,
  PUBLIC_CIRCLE_CONFIG as P,
  client as Q,
  NcActionCheckbox as R,
  SHARES_TYPES_MEMBER_MAP as S,
  usePrincipalsStore as T,
  CONTACTS_SETTINGS as U,
  hooks as V,
  CIRCLE_DESC as W,
  ELLIPSIS_COUNT as X,
  GROUP_ALL_CONTACTS as Y,
  CHART_ALL_CONTACTS as Z,
  __vitePreload as _,
  showError as a,
  GROUP_RECENTLY_CONTACTED as a0,
  isCirclesEnabled as a1,
  ROUTE_CIRCLE as a2,
  ROUTE_CHART as a3,
  PiniaVuePlugin as a4,
  createPinia as a5,
  ClickOutside as a6,
  store as a7,
  namespaceUtility as a8,
  normalizeComponent as a9,
  CircleEdit as b,
  MemberLevels as c,
  CIRCLES_MEMBER_LEVELS as d,
  editCircle as e,
  MemberStatus as f,
  changeMemberLevel as g,
  IconContact as h,
  IconAdd as i,
  joinCircle as j,
  index$1 as k,
  CIRCLES_MEMBER_GROUPING as l,
  showWarning as m,
  n$1 as n,
  transformNode as o,
  getChart as p,
  PropertyTitleIcon as q,
  Contact as r,
  showSuccess as s,
  t$1 as t,
  rfcProps as u,
  _default as v,
  logger as w,
  showInfo as x,
  PropertyTitle as y,
  o as z
};
//# sourceMappingURL=style-NE2zwFZ0.chunk.mjs.map
