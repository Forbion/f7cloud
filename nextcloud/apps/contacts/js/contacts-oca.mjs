/*! third party licenses: js/vendor.LICENSE.txt */
const appName = "contacts";
const appVersion = "7.1.0-dev.0";
import { l as loadState, n as normalizeComponent, V as Vue } from "./index-C-qT-4FH.chunk.mjs";
import { A as ContactDetailsProperty, h as IconContact, k as index, K as mitt, u as rfcProps, Q as client, T as usePrincipalsStore, a8 as namespaceUtility, r as Contact, L as validate, a4 as PiniaVuePlugin, a5 as createPinia, a6 as ClickOutside, w as logger, a7 as store } from "./style-NE2zwFZ0.chunk.mjs";
import { m as NcEmptyContent, o as NcLoadingIcon, K as VTooltip } from "./index-fSqcvS-W.chunk.mjs";
const { profileEnabled } = loadState("user_status", "profileEnabled", false);
const _sfc_main = {
  name: "ReadOnlyContactDetails",
  components: {
    ContactDetailsProperty,
    NcEmptyContent,
    IconContact,
    NcLoadingIcon
  },
  mixins: [index],
  props: {
    contactEmailAddress: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      contactDetailsSelector: ".contact-details",
      excludeFromBirthdayKey: "x-nc-exclude-from-birthday-calendar",
      bus: mitt(),
      showMenuPopover: false,
      profileEnabled,
      contact: void 0,
      localContact: void 0,
      loading: true
    };
  },
  computed: {
    /**
     * Read-only representation of the contact title and organization.
     *
     * @return {string}
     */
    formattedSubtitle() {
      const title = this.contact.title;
      const organization = this.contact.org;
      if (title && organization) {
        return t("contacts", "{title} at {organization}", {
          title,
          organization
        });
      } else if (title) {
        return title;
      } else if (organization) {
        return organization;
      }
      return "";
    },
    addressbooks() {
      return this.$store.getters.getAddressbooks;
    },
    /**
     * Contact properties copied and sorted by rfcProps.fieldOrder
     *
     * @return {Array}
     */
    sortedProperties() {
      if (!this.localContact || !this.localContact.properties) {
        return [];
      }
      return this.localContact.properties.toSorted((a, b) => {
        const nameA = a.name.split(".").pop();
        const nameB = b.name.split(".").pop();
        return rfcProps.fieldOrder.indexOf(nameA) - rfcProps.fieldOrder.indexOf(nameB);
      });
    },
    /**
     * Contact properties filtered and grouped by rfcProps.fieldOrder
     *
     * @return {object}
     */
    groupedProperties() {
      if (!this.sortedProperties) {
        return {};
      }
      return this.sortedProperties.reduce((list, property) => {
        if (!this.canDisplay(property)) {
          return list;
        }
        if (!list[property.name]) {
          list[property.name] = [];
        }
        list[property.name].push(property);
        return list;
      }, {});
    },
    /**
     * The address book is read-only (e.g. shared with me).
     *
     * @return {boolean}
     */
    addressbookIsReadOnly() {
      return this.contact.addressbook?.readOnly;
    },
    /**
     * Usable addressbook object linked to the local contact
     *
     * @return {string}
     */
    addressbook() {
      return this.contact.addressbook.id;
    },
    /**
     * Fake model to use the propertyGroups component
     *
     * @return {object}
     */
    groupsModel() {
      return {
        readableName: t("mail", "Contact groups"),
        icon: "icon-contacts-dark"
      };
    }
  },
  watch: {
    contact: {
      handler(contact) {
        this.updateLocalContact(contact);
      },
      immediate: true
    }
  },
  async beforeMount() {
    await client.connect({ enableCardDAV: true });
    const principalsStore = usePrincipalsStore();
    principalsStore.setCurrentUserPrincipal(client);
    await this.$store.dispatch("getAddressbooks");
    await this.fetchContact();
  },
  methods: {
    async fetchContact() {
      try {
        const email = this.contactEmailAddress;
        const result = await Promise.all(
          this.addressbooks.map(async (addressBook) => [
            addressBook.dav,
            await addressBook.dav.addressbookQuery([
              {
                name: [namespaceUtility.IETF_CARDDAV, "prop-filter"],
                attributes: [["name", "EMAIL"]],
                children: [
                  {
                    name: [namespaceUtility.IETF_CARDDAV, "text-match"],
                    value: email
                  }
                ]
              }
            ])
          ])
        );
        const contacts = result.flatMap(
          ([addressBook, vcards]) => vcards.map((vcard) => new Contact(vcard.data, addressBook))
        );
        this.contact = contacts.find((contact) => contact.email === email);
      } catch (error) {
        console.error("Error fetching contact:", error);
      } finally {
        this.loading = false;
      }
    },
    updateGroups(value) {
      this.newGroupsValue = value;
    },
    /**
     *  Update this.localContact
     *
     * @param {Contact} contact the contact to clone
     */
    async updateLocalContact(contact) {
      if (!contact) {
        this.localContact = void 0;
        return;
      }
      const localContact = Object.assign(
        Object.create(Object.getPrototypeOf(contact)),
        contact
      );
      validate(localContact);
      this.localContact = localContact;
      this.newGroupsValue = [...this.localContact.groups];
    },
    /**
     * Should display the property
     *
     * @param {Property} property the property to check
     * @return {boolean}
     */
    canDisplay(property) {
      const propModel = rfcProps.properties[property.name.split(".").pop()];
      const propType = propModel && propModel.force ? propModel.force : property.getDefaultType();
      return propModel && propType !== "unknown";
    }
  }
};
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "display-contact-details" }, [_vm.loading ? _c("div", { staticClass: "recipient-details-loading" }, [_c("NcLoadingIcon")], 1) : !_vm.contact ? _c("NcEmptyContent", { staticClass: "empty-content", attrs: { "name": _vm.t("mail", "No data for this contact"), "description": _vm.t("mail", "No data for this contact on their profile") }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("IconContact", { attrs: { "size": 20 } })];
  }, proxy: true }]) }) : _c("div", { staticClass: "recipient-details-content" }, [_c("div", { staticClass: "contact-title" }, [_c("h6", [_vm._v(_vm._s(_vm.contact.fullName))]), _c("span", { domProps: { "innerHTML": _vm._s(_vm.formattedSubtitle) } })]), _c("div", { staticClass: "contact-details-wrapper" }, _vm._l(_vm.groupedProperties, function(properties, name) {
    return _c("div", { key: name }, _vm._l(properties, function(property, index2) {
      return _c("ContactDetailsProperty", { key: `${index2}-${_vm.contact.key}-${property.name}`, attrs: { "is-first-property": index2 === 0, "is-last-property": index2 === properties.length - 1, "property": property, "contact": _vm.contact, "local-contact": _vm.localContact, "contacts": [_vm.contact], "is-read-only": true, "bus": _vm.bus } });
    }), 1);
  }), 0)])], 1);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "19ba1512"
);
const ReadOnlyContactDetails = __component__.exports;
function mountContactDetails(el, contactEmailAddress) {
  Vue.use(PiniaVuePlugin);
  const pinia = createPinia();
  Vue.directive("ClickOutside", ClickOutside);
  Vue.directive("Tooltip", VTooltip);
  Vue.prototype.t = t;
  Vue.prototype.n = n;
  Vue.prototype.appName = appName;
  Vue.prototype.appVersion = appVersion;
  Vue.prototype.logger = logger;
  Vue.prototype.OC = window.OC;
  Vue.prototype.OCA = window.OCA;
  const Component = Vue.extend(ReadOnlyContactDetails);
  const vueElement = new Component({
    pinia,
    store,
    propsData: {
      contactEmailAddress
    }
  }).$mount(el);
  return vueElement;
}
window.OCA ??= {};
window.OCA.Contacts = {
  /**
   * @param {HTMLElement} el Html element to mount the component at
   * @param {string} contactEmailAddress Email address of the contact whose details to display
   * @return {Promise<object>} Mounted Vue instance (vm)
   */
  async mountContactDetails(el, contactEmailAddress) {
    return mountContactDetails(el, contactEmailAddress);
  }
};
//# sourceMappingURL=contacts-oca.mjs.map
