/*! third party licenses: js/vendor.LICENSE.txt */
const appName = "contacts";
const appVersion = "7.1.0-dev.0";
import { n as normalizeComponent, V as Vue, _ } from "./index-C-qT-4FH.chunk.mjs";
import { s as NcButton, q as NcModal, v as translate } from "./index-fSqcvS-W.chunk.mjs";
import { r as registerFileAction, F as FileAction, D as DefaultType, P as Permission } from "./index-CdOlRS1N.chunk.mjs";
import "./index-ghM_rkL4.chunk.mjs";
const _sfc_main = {
  name: "ConfirmationDialog",
  components: {
    NcButton,
    NcModal
  },
  props: {
    title: {
      type: String,
      required: true
    },
    resolve: {
      type: Function,
      required: true
    },
    reject: {
      type: Function,
      required: true
    },
    confirmText: {
      type: String,
      default: translate("contacts", "Confirm")
    },
    disabled: {
      type: Boolean,
      default: void 0
    }
  },
  methods: {
    confirm() {
      this.resolve();
    },
    cancel() {
      this.reject();
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcModal", { staticClass: "confirm-modal", on: { "close": _vm.cancel } }, [_c("div", { staticClass: "confirm-modal" }, [_c("h2", [_vm._v(_vm._s(_vm.title))]), _vm._t("default"), _c("div", { staticClass: "confirm-modal__buttons" }, [_c("NcButton", { attrs: { "type": "tertiary", "disabled": _vm.disabled }, on: { "click": _vm.cancel } }, [_vm._v(" " + _vm._s(_vm.t("contacts", "Cancel")) + " ")]), _vm.resolve ? _c("NcButton", { attrs: { "disabled": _vm.disabled, "type": "primary" }, on: { "click": _vm.confirm } }, [_vm._v(" " + _vm._s(_vm.confirmText) + " ")]) : _vm._e()], 1)], 2)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "18f78670"
);
const ConfirmationDialog = __component__.exports;
const ContactSvg = '<svg xmlns="http://www.w3.org/2000/svg" id="mdi-account-multiple" viewBox="0 0 24 24"><path d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z" /></svg>';
Vue.prototype.t = translate;
const mime = "text/vcard";
const name = "contacts-import";
registerFileAction(new FileAction({
  id: name,
  displayName: () => translate("contacts", "Import"),
  default: DefaultType.DEFAULT,
  enabled: (nodes) => {
    if (nodes.length !== 1) {
      return false;
    }
    const node = nodes[0];
    return node.mime === mime && node.permissions & Permission.READ;
  },
  iconSvgInline: () => ContactSvg,
  async exec(file) {
    let dialog;
    try {
      const containerId = "confirmation-" + Math.random().toString(16).slice(2);
      const container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container);
      await new Promise((resolve, reject) => {
        const ImportConfirmationDialog = Vue.extend(ConfirmationDialog);
        dialog = new ImportConfirmationDialog({
          propsData: {
            title: translate("contacts", "Are you sure you want to import this contact file?"),
            resolve,
            reject
          }
        });
        dialog.$mount(`#${containerId}`);
      });
      window.location = _(`/apps/contacts/import?file=${file.path}`);
    } catch (e) {
    }
    dialog.$destroy();
  }
}));
//# sourceMappingURL=contacts-files-action.mjs.map
