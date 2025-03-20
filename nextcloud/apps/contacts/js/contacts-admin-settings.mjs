/*! third party licenses: js/vendor.LICENSE.txt */
const appName = "contacts";
const appVersion = "7.1.0-dev.0";
import { n as normalizeComponent, l as loadState, b as cancelableClient, _, V as Vue } from "./index-C-qT-4FH.chunk.mjs";
const _sfc_main = {
  name: "AdminSettings",
  data() {
    return {
      allowSocialSync: loadState("contacts", "allowSocialSync") === "yes"
    };
  },
  methods: {
    updateSetting(setting) {
      cancelableClient.put(_("apps/contacts/api/v1/social/config/global/" + setting), {
        allow: this[setting] ? "yes" : "no"
      });
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "section", attrs: { "id": "contacts" } }, [_c("h2", [_vm._v(_vm._s(_vm.t("contacts", "Contacts")))]), _c("p", [_c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.allowSocialSync, expression: "allowSocialSync" }], staticClass: "checkbox", attrs: { "id": "allow-social-sync", "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.allowSocialSync) ? _vm._i(_vm.allowSocialSync, null) > -1 : _vm.allowSocialSync }, on: { "change": [function($event) {
    var $$a = _vm.allowSocialSync, $$el = $event.target, $$c = $$el.checked ? true : false;
    if (Array.isArray($$a)) {
      var $$v = null, $$i = _vm._i($$a, $$v);
      if ($$el.checked) {
        $$i < 0 && (_vm.allowSocialSync = $$a.concat([$$v]));
      } else {
        $$i > -1 && (_vm.allowSocialSync = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
      }
    } else {
      _vm.allowSocialSync = $$c;
    }
  }, function($event) {
    return _vm.updateSetting("allowSocialSync");
  }] } }), _c("label", { attrs: { "for": "allow-social-sync" } }, [_vm._v(_vm._s(_vm.t("contacts", "Allow updating avatars from social media")))])])]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null
);
const AdminSettings = __component__.exports;
document.addEventListener("DOMContentLoaded", main);
function main() {
  Vue.prototype.t = t;
  const View = Vue.extend(AdminSettings);
  const view = new View();
  view.$mount("#contacts-settings");
}
//# sourceMappingURL=contacts-admin-settings.mjs.map
