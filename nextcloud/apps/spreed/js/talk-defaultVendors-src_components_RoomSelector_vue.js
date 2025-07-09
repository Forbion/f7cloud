(self["webpackChunktalk"] = self["webpackChunktalk"] || []).push([["defaultVendors-src_components_RoomSelector_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* FIXME: remove after https://github.com/nextcloud-libraries/nextcloud-vue/pull/4959 is released */
/* Styles to be applied outside of Talk (Deck plugin, e.t.c) */
[data-v-1e6c35ec] .modal-wrapper * {
  box-sizing: border-box;
}
[data-v-1e6c35ec] .modal-wrapper .modal-container {
  height: 700px;
}
[data-v-1e6c35ec] .modal-wrapper .dialog__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.selector__heading[data-v-1e6c35ec] {
  margin-bottom: 4px;
}
.selector__subtitle[data-v-1e6c35ec] {
  color: var(--color-text-maxcontrast);
  margin-bottom: 8px;
}
.selector__search[data-v-1e6c35ec] {
  margin-bottom: 10px;
}
.selector__list[data-v-1e6c35ec] {
  height: 100%;
}
.selector__action[data-v-1e6c35ec] {
  flex-shrink: 0;
  margin-left: auto;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/** Messages list dimensions:
 * - text max width: ~750px (80 characters per line is recommended by W3C standard)
 * - avatar width: 32px (AVATAR.SIZE.SMALL) + 16px (paddings) = 48px
 * - info width: 8ch(~68px) (timestamp) + 40px (checkmark with paddings) = ~108px
 * - list max width: 48px (avatar width) + 1058px (text width with paddings) + ~108px (info width) = ~1214px
 * - input max width: ~1214px (list max width) - 100px (send button) = ~1114px
 */
.placeholder-list[data-v-744ebfe6] {
  width: 100%;
  transform: translateZ(0);
}
.placeholder-item[data-v-744ebfe6] {
  display: flex;
  gap: 8px;
  width: 100%;
}
.placeholder-item__avatar[data-v-744ebfe6] {
  flex-shrink: 0;
}
.placeholder-item__avatar-circle[data-v-744ebfe6] {
  height: var(--avatar-size);
  width: var(--avatar-size);
  border-radius: var(--avatar-size);
}
.placeholder-item__content[data-v-744ebfe6] {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.placeholder-item__content-line[data-v-744ebfe6] {
  margin: 5px 0 4px;
  width: 100%;
  height: 15px;
}
.placeholder-item__content-line[data-v-744ebfe6]:last-child {
  width: var(--last-line-width);
}
.placeholder-list--conversations .placeholder-item[data-v-744ebfe6] {
  margin: 2px 0;
  padding: 8px 10px;
}
.placeholder-list--conversations .placeholder-item__content[data-v-744ebfe6] {
  width: 70%;
}
.placeholder-list--messages[data-v-744ebfe6] {
  max-width: calc(32px + 4 * var(--default-grid-baseline) + 50 * var(--default-font-size) + 2 * var(--default-grid-baseline) + 8ch + var(--clickable-area-small, 24px) + 4 * var(--default-grid-baseline));
  margin: auto;
}
.placeholder-list--messages .placeholder-item[data-v-744ebfe6] {
  padding-right: 8px;
}
.placeholder-list--messages .placeholder-item__avatar[data-v-744ebfe6] {
  width: 48px;
  padding: 20px 8px 0;
}
.placeholder-list--messages .placeholder-item__content[data-v-744ebfe6] {
  max-width: calc(50 * var(--default-font-size));
  padding: 12px 0;
}
.placeholder-list--messages .placeholder-item__content-line[data-v-744ebfe6] {
  margin: 4px 0 3px;
}
.placeholder-list--messages .placeholder-item__content-line[data-v-744ebfe6]:first-child {
  margin-bottom: 9px;
  width: 20%;
}
.placeholder-list--messages .placeholder-item__info[data-v-744ebfe6] {
  width: 100px;
  height: 15px;
  margin: var(--default-clickable-area) var(--default-clickable-area) 0 8px;
  animation-delay: 0.8s;
}
.placeholder-list--participants .placeholder-item[data-v-744ebfe6] {
  --padding: calc(var(--default-grid-baseline) * 2);
  gap: calc(var(--default-grid-baseline) * 2);
  padding: calc(var(--padding) * 3 / 2) var(--padding) var(--padding);
  height: 59px;
  align-items: center;
}
.placeholder-list--participants .placeholder-item__avatar[data-v-744ebfe6] {
  margin: auto;
}
.placeholder-item__avatar-circle[data-v-744ebfe6],
.placeholder-item__content-line[data-v-744ebfe6],
.placeholder-item__info[data-v-744ebfe6] {
  background-size: 200vw;
  background-image: linear-gradient(90deg, var(--color-placeholder-dark) 65%, var(--color-placeholder-light) 70%, var(--color-placeholder-dark) 75%);
  animation: loading-animation-744ebfe6 3s forwards infinite linear;
  will-change: background-position;
}
@keyframes loading-animation-744ebfe6 {
0% {
    background-position: 0;
}
100% {
    background-position: 140vw;
}
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.vue-recycle-scroller{position:relative}.vue-recycle-scroller.direction-vertical:not(.page-mode){overflow-y:auto}.vue-recycle-scroller.direction-horizontal:not(.page-mode){overflow-x:auto}.vue-recycle-scroller.direction-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex}.vue-recycle-scroller__slot{-webkit-box-flex:1;-ms-flex:auto 0 0px;flex:auto 0 0}.vue-recycle-scroller__item-wrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;position:relative}.vue-recycle-scroller.ready .vue-recycle-scroller__item-view{position:absolute;top:0;left:0;will-change:transform}.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper{width:100%}.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper{height:100%}.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view{width:100%}.vue-recycle-scroller.ready.direction-horizontal .vue-recycle-scroller__item-view{height:100%}.resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcListItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcListItem.js */ "./node_modules/@nextcloud/vue/dist/Components/NcListItem.mjs");
/* harmony import */ var _ConversationIcon_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../ConversationIcon.vue */ "./src/components/ConversationIcon.vue");
/* harmony import */ var _composables_useConversationInfo_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../composables/useConversationInfo.ts */ "./src/composables/useConversationInfo.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ConversationSearchResult",
  components: {
    ConversationIcon: _ConversationIcon_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcListItem: _nextcloud_vue_dist_Components_NcListItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    item: {
      type: Object,
      default() {
        return {
          token: "",
          participants: [],
          participantType: 0,
          unreadMessages: 0,
          unreadMention: false,
          objectType: "",
          type: 0,
          displayName: "",
          isFavorite: false,
          notificationLevel: 0,
          lastMessage: {}
        };
      }
    }
  },
  emits: ["click"],
  setup(props) {
    const { item } = (0,vue__WEBPACK_IMPORTED_MODULE_3__.toRefs)(props);
    const selectedRoom = (0,vue__WEBPACK_IMPORTED_MODULE_3__.inject)("selectedRoom", null);
    const exposeDescriptionRef = (0,vue__WEBPACK_IMPORTED_MODULE_3__.inject)("exposeDescription", (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false));
    const exposeMessagesRef = (0,vue__WEBPACK_IMPORTED_MODULE_3__.inject)("exposeMessages", (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false));
    const { counterType, conversationInformation } = (0,_composables_useConversationInfo_ts__WEBPACK_IMPORTED_MODULE_2__.useConversationInfo)({
      item,
      exposeDescriptionRef,
      exposeMessagesRef
    });
    return {
      selectedRoom,
      counterType,
      conversationInformation,
      exposeMessagesRef
    };
  },
  methods: {
    onClick() {
      this.$emit("click", this.item);
    }
  }
});


/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-virtual-scroller */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js");
/* harmony import */ var _ConversationSearchResult_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConversationSearchResult.vue */ "./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue");
/* harmony import */ var _UIShared_LoadingPlaceholder_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UIShared/LoadingPlaceholder.vue */ "./src/components/UIShared/LoadingPlaceholder.vue");
/* harmony import */ var vue_virtual_scroller_dist_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-virtual-scroller/dist/vue-virtual-scroller.css */ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css");




const CONVERSATION_ITEM_SIZE = 66;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ConversationsSearchListVirtual",
  components: {
    LoadingPlaceholder: _UIShared_LoadingPlaceholder_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ConversationSearchResult: _ConversationSearchResult_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    RecycleScroller: vue_virtual_scroller__WEBPACK_IMPORTED_MODULE_0__.RecycleScroller
  },
  props: {
    conversations: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["select"],
  setup() {
    return {
      CONVERSATION_ITEM_SIZE
    };
  },
  methods: {
    onClick(item) {
      this.$emit("select", item);
    }
  }
});


/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_material_design_icons_Magnify_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/Magnify.vue */ "./node_modules/vue-material-design-icons/Magnify.vue");
/* harmony import */ var vue_material_design_icons_MessageOutline_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/MessageOutline.vue */ "./node_modules/vue-material-design-icons/MessageOutline.vue");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcDialog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcDialog.js */ "./node_modules/@nextcloud/vue/dist/Components/NcDialog.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcEmptyContent.js */ "./node_modules/@nextcloud/vue/dist/Components/NcEmptyContent.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTextField.mjs");
/* harmony import */ var _LeftSidebar_ConversationsList_ConversationsSearchListVirtual_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue */ "./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants.js */ "./src/constants.js");
/* harmony import */ var _services_conversationsService_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/conversationsService.js */ "./src/services/conversationsService.js");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RoomSelector",
  components: {
    ConversationsSearchListVirtual: _LeftSidebar_ConversationsList_ConversationsSearchListVirtual_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcDialog: _nextcloud_vue_dist_Components_NcDialog_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    NcEmptyContent: _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcTextField: _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    // Icons
    Magnify: vue_material_design_icons_Magnify_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    MessageOutline: vue_material_design_icons_MessageOutline_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    dialogTitle: {
      type: String,
      default: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t)("spreed", "Link to a conversation")
    },
    dialogSubtitle: {
      type: String,
      default: ""
    },
    /**
     * Whether to only show conversations to which the user can post messages.
     */
    showPostableOnly: {
      type: Boolean,
      default: false
    },
    /**
     * Whether interacting with federated conversations is allowed for this component.
     */
    allowFederation: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to only show open conversations to which the user can join.
     */
    listOpenConversations: {
      type: Boolean,
      default: false
    },
    /**
     * Whether component is used as plugin and should emit on $root.
     */
    isPlugin: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close", "select"],
  setup() {
    const selectedRoom = (0,vue__WEBPACK_IMPORTED_MODULE_10__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_10__.provide)("selectedRoom", selectedRoom);
    return {
      selectedRoom
    };
  },
  data() {
    return {
      rooms: [],
      currentRoom: null,
      searchText: "",
      loading: true
    };
  },
  computed: {
    availableRooms() {
      return this.rooms.filter(
        (room) => room.type !== _constants_js__WEBPACK_IMPORTED_MODULE_8__.CONVERSATION.TYPE.CHANGELOG && room.objectType !== _constants_js__WEBPACK_IMPORTED_MODULE_8__.CONVERSATION.OBJECT_TYPE.FILE && room.objectType !== _constants_js__WEBPACK_IMPORTED_MODULE_8__.CONVERSATION.OBJECT_TYPE.VIDEO_VERIFICATION && (!this.currentRoom || this.currentRoom !== room.token) && (!this.showPostableOnly || room.readOnly === _constants_js__WEBPACK_IMPORTED_MODULE_8__.CONVERSATION.STATE.READ_WRITE) && (!this.searchText || room.displayName.toLowerCase().includes(this.searchText.toLowerCase()))
      );
    },
    noMatchFoundTitle() {
      return this.listOpenConversations ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t)("spreed", "No open conversations found") : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t)("spreed", "No conversations found");
    },
    noMatchFoundSubtitle() {
      return this.listOpenConversations ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t)("spreed", "Either there are no open conversations or you joined all of them.") : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t)("spreed", "Check spelling or use complete words.");
    }
  },
  beforeMount() {
    this.fetchRooms();
    const $store = OCA.Talk?.instance?.$store;
    if ($store) {
      this.currentRoom = $store.getters.getToken();
    }
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t,
    async fetchRooms() {
      const response = this.listOpenConversations ? await (0,_services_conversationsService_js__WEBPACK_IMPORTED_MODULE_9__.searchListedConversations)({ searchText: "" }, {}) : await (0,_services_conversationsService_js__WEBPACK_IMPORTED_MODULE_9__.fetchConversations)({});
      this.rooms = response.data.ocs.data.sort(this.sortConversations).filter((conversation) => this.allowFederation || !conversation.remoteServer);
      this.loading = false;
    },
    sortConversations(conversation1, conversation2) {
      if (conversation1.isFavorite !== conversation2.isFavorite) {
        return conversation1.isFavorite ? -1 : 1;
      }
      return conversation2.lastActivity - conversation1.lastActivity;
    },
    clearText() {
      this.searchText = "";
    },
    close() {
      if (this.isPlugin) {
        this.$root.$emit("close");
      } else {
        this.$emit("close");
      }
    },
    onSelect(item) {
      this.selectedRoom = item;
    },
    onSubmit() {
      if (this.isPlugin) {
        this.$root.$emit("select", this.selectedRoom);
      } else {
        this.$emit("select", this.selectedRoom);
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants.js */ "./src/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LoadingPlaceholder",
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["conversations", "messages", "participants"].includes(value);
      }
    },
    count: {
      type: Number,
      default: 5
    }
  },
  computed: {
    placeholderData() {
      const data = [];
      for (let i = 0; i < this.count; i++) {
        data.push({
          amount: this.type === "messages" ? 4 : this.type === "conversations" ? 2 : 1,
          width: this.type === "participants" ? "60%" : Math.floor(Math.random() * 40) + 30 + "%",
          avatarSize: (this.type === "messages" ? _constants_js__WEBPACK_IMPORTED_MODULE_0__.AVATAR.SIZE.SMALL : _constants_js__WEBPACK_IMPORTED_MODULE_0__.AVATAR.SIZE.DEFAULT) + "px"
        });
      }
      return data;
    }
  }
});


/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=template&id=d840c05a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=template&id=d840c05a ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcListItem", {
    key: _vm.item.token,
    attrs: {
      name: _vm.item.displayName,
      title: _vm.item.displayName,
      active: _vm.item.token === _vm.selectedRoom?.token,
      bold: _vm.exposeMessagesRef && !!_vm.item.unreadMessages,
      "counter-number": _vm.exposeMessagesRef ? _vm.item.unreadMessages : 0,
      "counter-type": _vm.counterType
    },
    on: { click: _vm.onClick },
    scopedSlots: _vm._u(
      [
        {
          key: "icon",
          fn: function() {
            return [
              _c("ConversationIcon", {
                attrs: {
                  item: _vm.item,
                  "hide-favorite": !_vm.item?.attendeeId,
                  "hide-call": !_vm.item?.attendeeId
                }
              })
            ];
          },
          proxy: true
        },
        _vm.conversationInformation ? {
          key: "subname",
          fn: function() {
            return [
              _c("span", {
                domProps: { innerHTML: _vm._s(_vm.conversationInformation) }
              })
            ];
          },
          proxy: true
        } : null
      ],
      null,
      true
    )
  });
};
var staticRenderFns = [];
render._withStripped = true;



/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=template&id=b8a0d340":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=template&id=b8a0d340 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("RecycleScroller", {
    ref: "scroller",
    attrs: {
      "item-tag": "ul",
      items: _vm.conversations,
      "item-size": _vm.CONVERSATION_ITEM_SIZE,
      "key-field": "token"
    },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function({ item }) {
          return [
            _c("ConversationSearchResult", {
              attrs: { item },
              on: { click: _vm.onClick }
            })
          ];
        }
      },
      {
        key: "after",
        fn: function() {
          return [
            _vm.loading ? _c("LoadingPlaceholder", { attrs: { type: "conversations" } }) : _vm._e()
          ];
        },
        proxy: true
      }
    ])
  });
};
var staticRenderFns = [];
render._withStripped = true;



/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=template&id=1e6c35ec&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=template&id=1e6c35ec&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("NcDialog", {
    attrs: { name: _vm.dialogTitle, "close-on-click-outside": "" },
    on: { "update:open": _vm.close },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function() {
          return [
            _vm.dialogSubtitle ? _c("p", { staticClass: "selector__subtitle" }, [
              _vm._v("\n			" + _vm._s(_vm.dialogSubtitle) + "\n		")
            ]) : _vm._e(),
            _vm._v(" "),
            _c(
              "NcTextField",
              {
                staticClass: "selector__search",
                attrs: {
                  "trailing-button-icon": "close",
                  label: _vm.t("spreed", "Search conversations or users"),
                  "show-trailing-button": _vm.searchText !== ""
                },
                on: { "trailing-button-click": _vm.clearText },
                model: {
                  value: _vm.searchText,
                  callback: function($$v) {
                    _vm.searchText = $$v;
                  },
                  expression: "searchText"
                }
              },
              [_c("Magnify", { attrs: { size: 16 } })],
              1
            ),
            _vm._v(" "),
            _vm.loading || _vm.availableRooms.length > 0 ? _c("ConversationsSearchListVirtual", {
              staticClass: "selector__list",
              attrs: {
                conversations: _vm.availableRooms,
                loading: _vm.loading
              },
              on: { select: _vm.onSelect }
            }) : _c("NcEmptyContent", {
              attrs: {
                name: _vm.noMatchFoundTitle,
                description: _vm.noMatchFoundSubtitle
              },
              scopedSlots: _vm._u([
                {
                  key: "icon",
                  fn: function() {
                    return [_c("MessageOutline", { attrs: { size: 64 } })];
                  },
                  proxy: true
                }
              ])
            })
          ];
        },
        proxy: true
      },
      {
        key: "actions",
        fn: function() {
          return [
            !_vm.loading && _vm.availableRooms.length > 0 ? _c(
              "NcButton",
              {
                staticClass: "selector__action",
                attrs: { type: "primary", disabled: !_vm.selectedRoom },
                on: { click: _vm.onSubmit }
              },
              [
                _vm._v(
                  "\n			" + _vm._s(_vm.t("spreed", "Select conversation")) + "\n		"
                )
              ]
            ) : _vm._e()
          ];
        },
        proxy: true
      }
    ])
  });
};
var staticRenderFns = [];
render._withStripped = true;



/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=template&id=744ebfe6&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=template&id=744ebfe6&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c(
    "ul",
    { class: "placeholder-list placeholder-list--" + _vm.type },
    _vm._l(_vm.placeholderData, function(item, index) {
      return _c("li", { key: index, staticClass: "placeholder-item" }, [
        _c(
          "div",
          {
            staticClass: "placeholder-item__avatar",
            style: { "--avatar-size": item.avatarSize }
          },
          [_c("div", { staticClass: "placeholder-item__avatar-circle" })]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "placeholder-item__content",
            style: { "--last-line-width": item.width }
          },
          _vm._l(item.amount, function(idx) {
            return _c("div", {
              key: idx,
              staticClass: "placeholder-item__content-line"
            });
          }),
          0
        ),
        _vm._v(" "),
        _vm.type === "messages" ? _c("div", { staticClass: "placeholder-item__info" }) : _vm._e()
      ]);
    }),
    0
  );
};
var staticRenderFns = [];
render._withStripped = true;



/***/ }),

/***/ "./node_modules/scrollparent/scrollparent.js":
/*!***************************************************!*\
  !*** ./node_modules/scrollparent/scrollparent.js ***!
  \***************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  function isScrolling(node) {
    var overflow = getComputedStyle(node, null).getPropertyValue("overflow");

    return overflow.indexOf("scroll") > -1 || overflow.indexOf("auto") > - 1;
  }

  function scrollParent(node) {
    if (!(node instanceof HTMLElement || node instanceof SVGElement)) {
      return undefined;
    }

    var current = node.parentNode;
    while (current.parentNode) {
      if (isScrolling(current)) {
        return current;
      }

      current = current.parentNode;
    }

    return document.scrollingElement || document.documentElement;
  }

  return scrollParent;
}));

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_style_index_0_id_1e6c35ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_style_index_0_id_1e6c35ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_style_index_0_id_1e6c35ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_style_index_0_id_1e6c35ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_style_index_0_id_1e6c35ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_style_index_0_id_744ebfe6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_style_index_0_id_744ebfe6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_style_index_0_id_744ebfe6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_style_index_0_id_744ebfe6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_style_index_0_id_744ebfe6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./vue-virtual-scroller.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_vue_virtual_scroller_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Magnify.vue":
/*!************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Magnify.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Magnify_vue_vue_type_template_id_1d382cb6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Magnify.vue?vue&type=template&id=1d382cb6 */ "./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6");
/* harmony import */ var _Magnify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Magnify.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Magnify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Magnify_vue_vue_type_template_id_1d382cb6__WEBPACK_IMPORTED_MODULE_0__.render,
  _Magnify_vue_vue_type_template_id_1d382cb6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Magnify.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MagnifyIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ }),

/***/ "./node_modules/vue-material-design-icons/MessageOutline.vue":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/MessageOutline.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessageOutline_vue_vue_type_template_id_00e13c32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageOutline.vue?vue&type=template&id=00e13c32 */ "./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=template&id=00e13c32");
/* harmony import */ var _MessageOutline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageOutline.vue?vue&type=script&lang=js */ "./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MessageOutline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageOutline_vue_vue_type_template_id_00e13c32__WEBPACK_IMPORTED_MODULE_0__.render,
  _MessageOutline_vue_vue_type_template_id_00e13c32__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/MessageOutline.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MessageOutlineIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
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
});


/***/ }),

/***/ "./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue":
/*!***********************************************************************************!*\
  !*** ./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConversationSearchResult_vue_vue_type_template_id_d840c05a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConversationSearchResult.vue?vue&type=template&id=d840c05a */ "./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=template&id=d840c05a");
/* harmony import */ var _ConversationSearchResult_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConversationSearchResult.vue?vue&type=script&lang=js */ "./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConversationSearchResult_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConversationSearchResult_vue_vue_type_template_id_d840c05a__WEBPACK_IMPORTED_MODULE_0__.render,
  _ConversationSearchResult_vue_vue_type_template_id_d840c05a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue":
/*!*****************************************************************************************!*\
  !*** ./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConversationsSearchListVirtual_vue_vue_type_template_id_b8a0d340__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConversationsSearchListVirtual.vue?vue&type=template&id=b8a0d340 */ "./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=template&id=b8a0d340");
/* harmony import */ var _ConversationsSearchListVirtual_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConversationsSearchListVirtual.vue?vue&type=script&lang=js */ "./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ConversationsSearchListVirtual_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConversationsSearchListVirtual_vue_vue_type_template_id_b8a0d340__WEBPACK_IMPORTED_MODULE_0__.render,
  _ConversationsSearchListVirtual_vue_vue_type_template_id_b8a0d340__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/RoomSelector.vue":
/*!*****************************************!*\
  !*** ./src/components/RoomSelector.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RoomSelector_vue_vue_type_template_id_1e6c35ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomSelector.vue?vue&type=template&id=1e6c35ec&scoped=true */ "./src/components/RoomSelector.vue?vue&type=template&id=1e6c35ec&scoped=true");
/* harmony import */ var _RoomSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomSelector.vue?vue&type=script&lang=js */ "./src/components/RoomSelector.vue?vue&type=script&lang=js");
/* harmony import */ var _RoomSelector_vue_vue_type_style_index_0_id_1e6c35ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true */ "./src/components/RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RoomSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomSelector_vue_vue_type_template_id_1e6c35ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _RoomSelector_vue_vue_type_template_id_1e6c35ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1e6c35ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/RoomSelector.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/UIShared/LoadingPlaceholder.vue":
/*!********************************************************!*\
  !*** ./src/components/UIShared/LoadingPlaceholder.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingPlaceholder_vue_vue_type_template_id_744ebfe6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingPlaceholder.vue?vue&type=template&id=744ebfe6&scoped=true */ "./src/components/UIShared/LoadingPlaceholder.vue?vue&type=template&id=744ebfe6&scoped=true");
/* harmony import */ var _LoadingPlaceholder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingPlaceholder.vue?vue&type=script&lang=js */ "./src/components/UIShared/LoadingPlaceholder.vue?vue&type=script&lang=js");
/* harmony import */ var _LoadingPlaceholder_vue_vue_type_style_index_0_id_744ebfe6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true */ "./src/components/UIShared/LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadingPlaceholder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadingPlaceholder_vue_vue_type_template_id_744ebfe6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _LoadingPlaceholder_vue_vue_type_template_id_744ebfe6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "744ebfe6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/UIShared/LoadingPlaceholder.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationSearchResult_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConversationSearchResult.vue?vue&type=script&lang=js */ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationSearchResult_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationsSearchListVirtual_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConversationsSearchListVirtual.vue?vue&type=script&lang=js */ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationsSearchListVirtual_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/RoomSelector.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/RoomSelector.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoomSelector.vue?vue&type=script&lang=js */ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/UIShared/LoadingPlaceholder.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./src/components/UIShared/LoadingPlaceholder.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingPlaceholder.vue?vue&type=script&lang=js */ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=template&id=d840c05a":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=template&id=d840c05a ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationSearchResult_vue_vue_type_template_id_d840c05a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationSearchResult_vue_vue_type_template_id_d840c05a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationSearchResult_vue_vue_type_template_id_d840c05a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConversationSearchResult.vue?vue&type=template&id=d840c05a */ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationSearchResult.vue?vue&type=template&id=d840c05a");


/***/ }),

/***/ "./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=template&id=b8a0d340":
/*!***********************************************************************************************************************!*\
  !*** ./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=template&id=b8a0d340 ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationsSearchListVirtual_vue_vue_type_template_id_b8a0d340__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationsSearchListVirtual_vue_vue_type_template_id_b8a0d340__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ConversationsSearchListVirtual_vue_vue_type_template_id_b8a0d340__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConversationsSearchListVirtual.vue?vue&type=template&id=b8a0d340 */ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/LeftSidebar/ConversationsList/ConversationsSearchListVirtual.vue?vue&type=template&id=b8a0d340");


/***/ }),

/***/ "./src/components/RoomSelector.vue?vue&type=template&id=1e6c35ec&scoped=true":
/*!***********************************************************************************!*\
  !*** ./src/components/RoomSelector.vue?vue&type=template&id=1e6c35ec&scoped=true ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_template_id_1e6c35ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_template_id_1e6c35ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_template_id_1e6c35ec_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoomSelector.vue?vue&type=template&id=1e6c35ec&scoped=true */ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=template&id=1e6c35ec&scoped=true");


/***/ }),

/***/ "./src/components/UIShared/LoadingPlaceholder.vue?vue&type=template&id=744ebfe6&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/components/UIShared/LoadingPlaceholder.vue?vue&type=template&id=744ebfe6&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_template_id_744ebfe6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_template_id_744ebfe6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_esbuild_loader_dist_index_cjs_clonedRuleSet_3_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_template_id_744ebfe6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingPlaceholder.vue?vue&type=template&id=744ebfe6&scoped=true */ "./node_modules/esbuild-loader/dist/index.cjs??clonedRuleSet-3!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=template&id=744ebfe6&scoped=true");


/***/ }),

/***/ "./src/components/RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/components/RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomSelector_vue_vue_type_style_index_0_id_1e6c35ec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/RoomSelector.vue?vue&type=style&index=0&id=1e6c35ec&lang=scss&scoped=true");


/***/ }),

/***/ "./src/components/UIShared/LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true":
/*!*****************************************************************************************************************!*\
  !*** ./src/components/UIShared/LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingPlaceholder_vue_vue_type_style_index_0_id_744ebfe6_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/UIShared/LoadingPlaceholder.vue?vue&type=style&index=0&id=744ebfe6&lang=scss&scoped=true");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Magnify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Magnify.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Magnify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_MessageOutline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./MessageOutline.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_MessageOutline_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Magnify_vue_vue_type_template_id_1d382cb6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Magnify_vue_vue_type_template_id_1d382cb6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Magnify_vue_vue_type_template_id_1d382cb6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Magnify.vue?vue&type=template&id=1d382cb6 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=template&id=00e13c32":
/*!*************************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=template&id=00e13c32 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_MessageOutline_vue_vue_type_template_id_00e13c32__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_MessageOutline_vue_vue_type_template_id_00e13c32__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_MessageOutline_vue_vue_type_template_id_00e13c32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./MessageOutline.vue?vue&type=template&id=00e13c32 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=template&id=00e13c32");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6 ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon magnify-icon",
        attrs: {
          "aria-hidden": _vm.title ? null : "true",
          "aria-label": _vm.title,
          role: "img"
        },
        on: {
          click: function($event) {
            return _vm.$emit("click", $event)
          }
        }
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24"
          }
        },
        [
          _c(
            "path",
            {
              attrs: {
                d:
                  "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              }
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=template&id=00e13c32":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/MessageOutline.vue?vue&type=template&id=00e13c32 ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon message-outline-icon",
        attrs: {
          "aria-hidden": _vm.title ? null : "true",
          "aria-label": _vm.title,
          role: "img"
        },
        on: {
          click: function($event) {
            return _vm.$emit("click", $event)
          }
        }
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24"
          }
        },
        [
          _c(
            "path",
            {
              attrs: {
                d:
                  "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16Z"
              }
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.esm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicScroller: () => (/* binding */ __vue_component__$1),
/* harmony export */   DynamicScrollerItem: () => (/* binding */ __vue_component__),
/* harmony export */   IdState: () => (/* binding */ IdState),
/* harmony export */   RecycleScroller: () => (/* binding */ __vue_component__$2),
/* harmony export */   "default": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var vue_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-resize */ "./node_modules/vue-virtual-scroller/node_modules/vue-resize/dist/vue-resize.esm.js");
/* harmony import */ var vue_observe_visibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-observe-visibility */ "./node_modules/vue-virtual-scroller/node_modules/vue-observe-visibility/dist/vue-observe-visibility.esm.js");
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scrollparent */ "./node_modules/scrollparent/scrollparent.js");
/* harmony import */ var scrollparent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scrollparent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");





var config = {
  itemsLimit: 1000
};

const props = {
  items: {
    type: Array,
    required: true
  },
  keyField: {
    type: String,
    default: 'id'
  },
  direction: {
    type: String,
    default: 'vertical',
    validator: value => ['vertical', 'horizontal'].includes(value)
  },
  listTag: {
    type: String,
    default: 'div'
  },
  itemTag: {
    type: String,
    default: 'div'
  }
};
function simpleArray() {
  return this.items.length && typeof this.items[0] !== 'object';
}

let supportsPassive = false;
if (typeof window !== 'undefined') {
  supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
}

//
let uid = 0;
var script$2 = {
  name: 'RecycleScroller',
  components: {
    ResizeObserver: vue_resize__WEBPACK_IMPORTED_MODULE_0__.ResizeObserver
  },
  directives: {
    ObserveVisibility: vue_observe_visibility__WEBPACK_IMPORTED_MODULE_1__.ObserveVisibility
  },
  props: {
    ...props,
    itemSize: {
      type: Number,
      default: null
    },
    gridItems: {
      type: Number,
      default: undefined
    },
    itemSecondarySize: {
      type: Number,
      default: undefined
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: 'size'
    },
    typeField: {
      type: String,
      default: 'type'
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: false
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: false
    },
    skipHover: {
      type: Boolean,
      default: false
    },
    listTag: {
      type: String,
      default: 'div'
    },
    itemTag: {
      type: String,
      default: 'div'
    },
    listClass: {
      type: [String, Object, Array],
      default: ''
    },
    itemClass: {
      type: [String, Object, Array],
      default: ''
    }
  },
  data() {
    return {
      pool: [],
      totalSize: 0,
      ready: false,
      hoverKey: null
    };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const sizes = {
          '-1': {
            accumulator: 0
          }
        };
        const items = this.items;
        const field = this.sizeField;
        const minItemSize = this.minItemSize;
        let computedMinSize = 10000;
        let accumulator = 0;
        let current;
        for (let i = 0, l = items.length; i < l; i++) {
          current = items[i][field] || minItemSize;
          if (current < computedMinSize) {
            computedMinSize = current;
          }
          accumulator += current;
          sizes[i] = {
            accumulator,
            size: current
          };
        }
        // eslint-disable-next-line
        this.$_computedMinItemSize = computedMinSize;
        return sizes;
      }
      return [];
    },
    simpleArray
  },
  watch: {
    items() {
      this.updateVisibleItems(true);
    },
    pageMode() {
      this.applyPageMode();
      this.updateVisibleItems(false);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(false);
      },
      deep: true
    },
    gridItems() {
      this.updateVisibleItems(true);
    },
    itemSecondarySize() {
      this.updateVisibleItems(true);
    }
  },
  created() {
    this.$_startIndex = 0;
    this.$_endIndex = 0;
    this.$_views = new Map();
    this.$_unusedViews = new Map();
    this.$_scrollDirty = false;
    this.$_lastUpdateScrollPosition = 0;

    // In SSR mode, we also prerender the same number of item for the first render
    // to avoir mismatch between server and client templates
    if (this.prerender) {
      this.$_prerender = true;
      this.updateVisibleItems(false);
    }
    if (this.gridItems && !this.itemSize) {
      console.error('[vue-recycle-scroller] You must provide an itemSize when using gridItems');
    }
  },
  mounted() {
    this.applyPageMode();
    this.$nextTick(() => {
      // In SSR mode, render the real number of visible items
      this.$_prerender = false;
      this.updateVisibleItems(true);
      this.ready = true;
    });
  },
  activated() {
    const lastPosition = this.$_lastUpdateScrollPosition;
    if (typeof lastPosition === 'number') {
      this.$nextTick(() => {
        this.scrollToPosition(lastPosition);
      });
    }
  },
  beforeDestroy() {
    this.removeListeners();
  },
  methods: {
    addView(pool, index, item, key, type) {
      const view = {
        item,
        position: 0
      };
      const nonReactive = {
        id: uid++,
        index,
        used: true,
        key,
        type
      };
      Object.defineProperty(view, 'nr', {
        configurable: false,
        value: nonReactive
      });
      pool.push(view);
      return view;
    },
    unuseView(view, fake = false) {
      const unusedViews = this.$_unusedViews;
      const type = view.nr.type;
      let unusedPool = unusedViews.get(type);
      if (!unusedPool) {
        unusedPool = [];
        unusedViews.set(type, unusedPool);
      }
      unusedPool.push(view);
      if (!fake) {
        view.nr.used = false;
        view.position = -9999;
        this.$_views.delete(view.nr.key);
      }
    },
    handleResize() {
      this.$emit('resize');
      if (this.ready) this.updateVisibleItems(false);
    },
    handleScroll(event) {
      if (!this.$_scrollDirty) {
        this.$_scrollDirty = true;
        requestAnimationFrame(() => {
          this.$_scrollDirty = false;
          const {
            continuous
          } = this.updateVisibleItems(false, true);

          // It seems sometimes chrome doesn't fire scroll event :/
          // When non continous scrolling is ending, we force a refresh
          if (!continuous) {
            clearTimeout(this.$_refreshTimout);
            this.$_refreshTimout = setTimeout(this.handleScroll, 100);
          }
        });
      }
    },
    handleVisibilityChange(isVisible, entry) {
      if (this.ready) {
        if (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0) {
          this.$emit('visible');
          requestAnimationFrame(() => {
            this.updateVisibleItems(false);
          });
        } else {
          this.$emit('hidden');
        }
      }
    },
    updateVisibleItems(checkItem, checkPositionDiff = false) {
      const itemSize = this.itemSize;
      const gridItems = this.gridItems || 1;
      const itemSecondarySize = this.itemSecondarySize || itemSize;
      const minItemSize = this.$_computedMinItemSize;
      const typeField = this.typeField;
      const keyField = this.simpleArray ? null : this.keyField;
      const items = this.items;
      const count = items.length;
      const sizes = this.sizes;
      const views = this.$_views;
      const unusedViews = this.$_unusedViews;
      const pool = this.pool;
      let startIndex, endIndex;
      let totalSize;
      let visibleStartIndex, visibleEndIndex;
      if (!count) {
        startIndex = endIndex = visibleStartIndex = visibleEndIndex = totalSize = 0;
      } else if (this.$_prerender) {
        startIndex = visibleStartIndex = 0;
        endIndex = visibleEndIndex = Math.min(this.prerender, items.length);
        totalSize = null;
      } else {
        const scroll = this.getScroll();

        // Skip update if use hasn't scrolled enough
        if (checkPositionDiff) {
          let positionDiff = scroll.start - this.$_lastUpdateScrollPosition;
          if (positionDiff < 0) positionDiff = -positionDiff;
          if (itemSize === null && positionDiff < minItemSize || positionDiff < itemSize) {
            return {
              continuous: true
            };
          }
        }
        this.$_lastUpdateScrollPosition = scroll.start;
        const buffer = this.buffer;
        scroll.start -= buffer;
        scroll.end += buffer;

        // account for leading slot
        let beforeSize = 0;
        if (this.$refs.before) {
          beforeSize = this.$refs.before.scrollHeight;
          scroll.start -= beforeSize;
        }

        // account for trailing slot
        if (this.$refs.after) {
          const afterSize = this.$refs.after.scrollHeight;
          scroll.end += afterSize;
        }

        // Variable size mode
        if (itemSize === null) {
          let h;
          let a = 0;
          let b = count - 1;
          let i = ~~(count / 2);
          let oldI;

          // Searching for startIndex
          do {
            oldI = i;
            h = sizes[i].accumulator;
            if (h < scroll.start) {
              a = i;
            } else if (i < count - 1 && sizes[i + 1].accumulator > scroll.start) {
              b = i;
            }
            i = ~~((a + b) / 2);
          } while (i !== oldI);
          i < 0 && (i = 0);
          startIndex = i;

          // For container style
          totalSize = sizes[count - 1].accumulator;

          // Searching for endIndex
          for (endIndex = i; endIndex < count && sizes[endIndex].accumulator < scroll.end; endIndex++);
          if (endIndex === -1) {
            endIndex = items.length - 1;
          } else {
            endIndex++;
            // Bounds
            endIndex > count && (endIndex = count);
          }

          // search visible startIndex
          for (visibleStartIndex = startIndex; visibleStartIndex < count && beforeSize + sizes[visibleStartIndex].accumulator < scroll.start; visibleStartIndex++);

          // search visible endIndex
          for (visibleEndIndex = visibleStartIndex; visibleEndIndex < count && beforeSize + sizes[visibleEndIndex].accumulator < scroll.end; visibleEndIndex++);
        } else {
          // Fixed size mode
          startIndex = ~~(scroll.start / itemSize * gridItems);
          const remainer = startIndex % gridItems;
          startIndex -= remainer;
          endIndex = Math.ceil(scroll.end / itemSize * gridItems);
          visibleStartIndex = Math.max(0, Math.floor((scroll.start - beforeSize) / itemSize * gridItems));
          visibleEndIndex = Math.floor((scroll.end - beforeSize) / itemSize * gridItems);

          // Bounds
          startIndex < 0 && (startIndex = 0);
          endIndex > count && (endIndex = count);
          visibleStartIndex < 0 && (visibleStartIndex = 0);
          visibleEndIndex > count && (visibleEndIndex = count);
          totalSize = Math.ceil(count / gridItems) * itemSize;
        }
      }
      if (endIndex - startIndex > config.itemsLimit) {
        this.itemsLimitError();
      }
      this.totalSize = totalSize;
      let view;
      const continuous = startIndex <= this.$_endIndex && endIndex >= this.$_startIndex;
      if (this.$_continuous !== continuous) {
        if (continuous) {
          views.clear();
          unusedViews.clear();
          for (let i = 0, l = pool.length; i < l; i++) {
            view = pool[i];
            this.unuseView(view);
          }
        }
        this.$_continuous = continuous;
      } else if (continuous) {
        for (let i = 0, l = pool.length; i < l; i++) {
          view = pool[i];
          if (view.nr.used) {
            // Update view item index
            if (checkItem) {
              view.nr.index = items.indexOf(view.item);
            }

            // Check if index is still in visible range
            if (view.nr.index === -1 || view.nr.index < startIndex || view.nr.index >= endIndex) {
              this.unuseView(view);
            }
          }
        }
      }
      const unusedIndex = continuous ? null : new Map();
      let item, type, unusedPool;
      let v;
      for (let i = startIndex; i < endIndex; i++) {
        item = items[i];
        const key = keyField ? item[keyField] : item;
        if (key == null) {
          throw new Error(`Key is ${key} on item (keyField is '${keyField}')`);
        }
        view = views.get(key);
        if (!itemSize && !sizes[i].size) {
          if (view) this.unuseView(view);
          continue;
        }

        // No view assigned to item
        if (!view) {
          if (i === items.length - 1) this.$emit('scroll-end');
          if (i === 0) this.$emit('scroll-start');
          type = item[typeField];
          unusedPool = unusedViews.get(type);
          if (continuous) {
            // Reuse existing view
            if (unusedPool && unusedPool.length) {
              view = unusedPool.pop();
              view.item = item;
              view.nr.used = true;
              view.nr.index = i;
              view.nr.key = key;
              view.nr.type = type;
            } else {
              view = this.addView(pool, i, item, key, type);
            }
          } else {
            // Use existing view
            // We don't care if they are already used
            // because we are not in continous scrolling
            v = unusedIndex.get(type) || 0;
            if (!unusedPool || v >= unusedPool.length) {
              view = this.addView(pool, i, item, key, type);
              this.unuseView(view, true);
              unusedPool = unusedViews.get(type);
            }
            view = unusedPool[v];
            view.item = item;
            view.nr.used = true;
            view.nr.index = i;
            view.nr.key = key;
            view.nr.type = type;
            unusedIndex.set(type, v + 1);
            v++;
          }
          views.set(key, view);
        } else {
          view.nr.used = true;
          view.item = item;
        }

        // Update position
        if (itemSize === null) {
          view.position = sizes[i - 1].accumulator;
          view.offset = 0;
        } else {
          view.position = Math.floor(i / gridItems) * itemSize;
          view.offset = i % gridItems * itemSecondarySize;
        }
      }
      this.$_startIndex = startIndex;
      this.$_endIndex = endIndex;
      if (this.emitUpdate) this.$emit('update', startIndex, endIndex, visibleStartIndex, visibleEndIndex);

      // After the user has finished scrolling
      // Sort views so text selection is correct
      clearTimeout(this.$_sortTimer);
      this.$_sortTimer = setTimeout(this.sortViews, 300);
      return {
        continuous
      };
    },
    getListenerTarget() {
      let target = scrollparent__WEBPACK_IMPORTED_MODULE_2___default()(this.$el);
      // Fix global scroll target for Chrome and Safari
      if (window.document && (target === window.document.documentElement || target === window.document.body)) {
        target = window;
      }
      return target;
    },
    getScroll() {
      const {
        $el: el,
        direction
      } = this;
      const isVertical = direction === 'vertical';
      let scrollState;
      if (this.pageMode) {
        const bounds = el.getBoundingClientRect();
        const boundsSize = isVertical ? bounds.height : bounds.width;
        let start = -(isVertical ? bounds.top : bounds.left);
        let size = isVertical ? window.innerHeight : window.innerWidth;
        if (start < 0) {
          size += start;
          start = 0;
        }
        if (start + size > boundsSize) {
          size = boundsSize - start;
        }
        scrollState = {
          start,
          end: start + size
        };
      } else if (isVertical) {
        scrollState = {
          start: el.scrollTop,
          end: el.scrollTop + el.clientHeight
        };
      } else {
        scrollState = {
          start: el.scrollLeft,
          end: el.scrollLeft + el.clientWidth
        };
      }
      return scrollState;
    },
    applyPageMode() {
      if (this.pageMode) {
        this.addListeners();
      } else {
        this.removeListeners();
      }
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget();
      this.listenerTarget.addEventListener('scroll', this.handleScroll, supportsPassive ? {
        passive: true
      } : false);
      this.listenerTarget.addEventListener('resize', this.handleResize);
    },
    removeListeners() {
      if (!this.listenerTarget) {
        return;
      }
      this.listenerTarget.removeEventListener('scroll', this.handleScroll);
      this.listenerTarget.removeEventListener('resize', this.handleResize);
      this.listenerTarget = null;
    },
    scrollToItem(index) {
      let scroll;
      if (this.itemSize === null) {
        scroll = index > 0 ? this.sizes[index - 1].accumulator : 0;
      } else {
        scroll = Math.floor(index / this.gridItems) * this.itemSize;
      }
      this.scrollToPosition(scroll);
    },
    scrollToPosition(position) {
      const direction = this.direction === 'vertical' ? {
        scroll: 'scrollTop',
        start: 'top'
      } : {
        scroll: 'scrollLeft',
        start: 'left'
      };
      let viewport;
      let scrollDirection;
      let scrollDistance;
      if (this.pageMode) {
        const viewportEl = scrollparent__WEBPACK_IMPORTED_MODULE_2___default()(this.$el);
        // HTML doesn't overflow like other elements
        const scrollTop = viewportEl.tagName === 'HTML' ? 0 : viewportEl[direction.scroll];
        const bounds = viewportEl.getBoundingClientRect();
        const scroller = this.$el.getBoundingClientRect();
        const scrollerPosition = scroller[direction.start] - bounds[direction.start];
        viewport = viewportEl;
        scrollDirection = direction.scroll;
        scrollDistance = position + scrollTop + scrollerPosition;
      } else {
        viewport = this.$el;
        scrollDirection = direction.scroll;
        scrollDistance = position;
      }
      viewport[scrollDirection] = scrollDistance;
    },
    itemsLimitError() {
      setTimeout(() => {
        console.log('It seems the scroller element isn\'t scrolling, so it tries to render all the items at once.', 'Scroller:', this.$el);
        console.log('Make sure the scroller has a fixed height (or width) and \'overflow-y\' (or \'overflow-x\') set to \'auto\' so it can scroll correctly and only render the items visible in the scroll viewport.');
      });
      throw new Error('Rendered items limit reached');
    },
    sortViews() {
      this.pool.sort((viewA, viewB) => viewA.nr.index - viewB.nr.index);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }
  // Vue.extend constructor export interop.
  const options = typeof script === 'function' ? script.options : script;
  // render functions
  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true;
    // functional template
    if (isFunctionalTemplate) {
      options.functional = true;
    }
  }
  // scopedId
  if (scopeId) {
    options._scopeId = scopeId;
  }
  let hook;
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context = context ||
      // cached call
      this.$vnode && this.$vnode.ssrContext ||
      // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }
      // inject component styles
      if (style) {
        style.call(this, createInjectorSSR(context));
      }
      // register component module identifier for async chunk inference
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }
  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      const originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      const existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return script;
}

/* script */
const __vue_script__$2 = script$2;
/* template */
var __vue_render__$1 = function () {
  var _obj, _obj$1;
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "observe-visibility",
          rawName: "v-observe-visibility",
          value: _vm.handleVisibilityChange,
          expression: "handleVisibilityChange",
        },
      ],
      staticClass: "vue-recycle-scroller",
      class:
        ((_obj = {
          ready: _vm.ready,
          "page-mode": _vm.pageMode,
        }),
        (_obj["direction-" + _vm.direction] = true),
        _obj),
      on: {
        "&scroll": function ($event) {
          return _vm.handleScroll.apply(null, arguments)
        },
      },
    },
    [
      _vm.$slots.before
        ? _c(
            "div",
            { ref: "before", staticClass: "vue-recycle-scroller__slot" },
            [_vm._t("before")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        _vm.listTag,
        {
          ref: "wrapper",
          tag: "component",
          staticClass: "vue-recycle-scroller__item-wrapper",
          class: _vm.listClass,
          style:
            ((_obj$1 = {}),
            (_obj$1[_vm.direction === "vertical" ? "minHeight" : "minWidth"] =
              _vm.totalSize + "px"),
            _obj$1),
        },
        [
          _vm._l(_vm.pool, function (view) {
            return _c(
              _vm.itemTag,
              _vm._g(
                {
                  key: view.nr.id,
                  tag: "component",
                  staticClass: "vue-recycle-scroller__item-view",
                  class: [
                    _vm.itemClass,
                    {
                      hover: !_vm.skipHover && _vm.hoverKey === view.nr.key,
                    },
                  ],
                  style: _vm.ready
                    ? {
                        transform:
                          "translate" +
                          (_vm.direction === "vertical" ? "Y" : "X") +
                          "(" +
                          view.position +
                          "px) translate" +
                          (_vm.direction === "vertical" ? "X" : "Y") +
                          "(" +
                          view.offset +
                          "px)",
                        width: _vm.gridItems
                          ? (_vm.direction === "vertical"
                              ? _vm.itemSecondarySize || _vm.itemSize
                              : _vm.itemSize) + "px"
                          : undefined,
                        height: _vm.gridItems
                          ? (_vm.direction === "horizontal"
                              ? _vm.itemSecondarySize || _vm.itemSize
                              : _vm.itemSize) + "px"
                          : undefined,
                      }
                    : null,
                },
                _vm.skipHover
                  ? {}
                  : {
                      mouseenter: function () {
                        _vm.hoverKey = view.nr.key;
                      },
                      mouseleave: function () {
                        _vm.hoverKey = null;
                      },
                    }
              ),
              [
                _vm._t("default", null, {
                  item: view.item,
                  index: view.nr.index,
                  active: view.nr.used,
                }),
              ],
              2
            )
          }),
          _vm._v(" "),
          _vm._t("empty"),
        ],
        2
      ),
      _vm._v(" "),
      _vm.$slots.after
        ? _c(
            "div",
            { ref: "after", staticClass: "vue-recycle-scroller__slot" },
            [_vm._t("after")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("ResizeObserver", { on: { notify: _vm.handleResize } }),
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

//
var script$1 = {
  name: 'DynamicScroller',
  components: {
    RecycleScroller: __vue_component__$2
  },
  provide() {
    if (typeof ResizeObserver !== 'undefined') {
      this.$_resizeObserver = new ResizeObserver(entries => {
        requestAnimationFrame(() => {
          if (!Array.isArray(entries)) {
            return;
          }
          for (const entry of entries) {
            if (entry.target) {
              const event = new CustomEvent('resize', {
                detail: {
                  contentRect: entry.contentRect
                }
              });
              entry.target.dispatchEvent(event);
            }
          }
        });
      });
    }
    return {
      vscrollData: this.vscrollData,
      vscrollParent: this,
      vscrollResizeObserver: this.$_resizeObserver
    };
  },
  inheritAttrs: false,
  props: {
    ...props,
    minItemSize: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      vscrollData: {
        active: true,
        sizes: {},
        validSizes: {},
        keyField: this.keyField,
        simpleArray: false
      }
    };
  },
  computed: {
    simpleArray,
    itemsWithSize() {
      const result = [];
      const {
        items,
        keyField,
        simpleArray
      } = this;
      const sizes = this.vscrollData.sizes;
      const l = items.length;
      for (let i = 0; i < l; i++) {
        const item = items[i];
        const id = simpleArray ? i : item[keyField];
        let size = sizes[id];
        if (typeof size === 'undefined' && !this.$_undefinedMap[id]) {
          size = 0;
        }
        result.push({
          item,
          id,
          size
        });
      }
      return result;
    },
    listeners() {
      const listeners = {};
      for (const key in this.$listeners) {
        if (key !== 'resize' && key !== 'visible') {
          listeners[key] = this.$listeners[key];
        }
      }
      return listeners;
    }
  },
  watch: {
    items() {
      this.forceUpdate(false);
    },
    simpleArray: {
      handler(value) {
        this.vscrollData.simpleArray = value;
      },
      immediate: true
    },
    direction(value) {
      this.forceUpdate(true);
    },
    itemsWithSize(next, prev) {
      const scrollTop = this.$el.scrollTop;

      // Calculate total diff between prev and next sizes
      // over current scroll top. Then add it to scrollTop to
      // avoid jumping the contents that the user is seeing.
      let prevActiveTop = 0;
      let activeTop = 0;
      const length = Math.min(next.length, prev.length);
      for (let i = 0; i < length; i++) {
        if (prevActiveTop >= scrollTop) {
          break;
        }
        prevActiveTop += prev[i].size || this.minItemSize;
        activeTop += next[i].size || this.minItemSize;
      }
      const offset = activeTop - prevActiveTop;
      if (offset === 0) {
        return;
      }
      this.$el.scrollTop += offset;
    }
  },
  beforeCreate() {
    this.$_updates = [];
    this.$_undefinedSizes = 0;
    this.$_undefinedMap = {};
  },
  activated() {
    this.vscrollData.active = true;
  },
  deactivated() {
    this.vscrollData.active = false;
  },
  methods: {
    onScrollerResize() {
      const scroller = this.$refs.scroller;
      if (scroller) {
        this.forceUpdate();
      }
      this.$emit('resize');
    },
    onScrollerVisible() {
      this.$emit('vscroll:update', {
        force: false
      });
      this.$emit('visible');
    },
    forceUpdate(clear = true) {
      if (clear || this.simpleArray) {
        this.vscrollData.validSizes = {};
      }
      this.$emit('vscroll:update', {
        force: true
      });
    },
    scrollToItem(index) {
      const scroller = this.$refs.scroller;
      if (scroller) scroller.scrollToItem(index);
    },
    getItemSize(item, index = undefined) {
      const id = this.simpleArray ? index != null ? index : this.items.indexOf(item) : item[this.keyField];
      return this.vscrollData.sizes[id] || 0;
    },
    scrollToBottom() {
      if (this.$_scrollingToBottom) return;
      this.$_scrollingToBottom = true;
      const el = this.$el;
      // Item is inserted to the DOM
      this.$nextTick(() => {
        el.scrollTop = el.scrollHeight + 5000;
        // Item sizes are computed
        const cb = () => {
          el.scrollTop = el.scrollHeight + 5000;
          requestAnimationFrame(() => {
            el.scrollTop = el.scrollHeight + 5000;
            if (this.$_undefinedSizes === 0) {
              this.$_scrollingToBottom = false;
            } else {
              requestAnimationFrame(cb);
            }
          });
        };
        requestAnimationFrame(cb);
      });
    }
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "RecycleScroller",
    _vm._g(
      _vm._b(
        {
          ref: "scroller",
          attrs: {
            items: _vm.itemsWithSize,
            "min-item-size": _vm.minItemSize,
            direction: _vm.direction,
            "key-field": "id",
            "list-tag": _vm.listTag,
            "item-tag": _vm.itemTag,
          },
          on: { resize: _vm.onScrollerResize, visible: _vm.onScrollerVisible },
          scopedSlots: _vm._u(
            [
              {
                key: "default",
                fn: function (ref) {
                  var itemWithSize = ref.item;
                  var index = ref.index;
                  var active = ref.active;
                  return [
                    _vm._t("default", null, null, {
                      item: itemWithSize.item,
                      index: index,
                      active: active,
                      itemWithSize: itemWithSize,
                    }),
                  ]
                },
              },
            ],
            null,
            true
          ),
        },
        "RecycleScroller",
        _vm.$attrs,
        false
      ),
      _vm.listeners
    ),
    [
      _vm._v(" "),
      _c("template", { slot: "before" }, [_vm._t("before")], 2),
      _vm._v(" "),
      _c("template", { slot: "after" }, [_vm._t("after")], 2),
      _vm._v(" "),
      _c("template", { slot: "empty" }, [_vm._t("empty")], 2),
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

var script = {
  name: 'DynamicScrollerItem',
  inject: ['vscrollData', 'vscrollParent', 'vscrollResizeObserver'],
  props: {
    // eslint-disable-next-line vue/require-prop-types
    item: {
      required: true
    },
    watchData: {
      type: Boolean,
      default: false
    },
    /**
     * Indicates if the view is actively used to display an item.
     */
    active: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      default: undefined
    },
    sizeDependencies: {
      type: [Array, Object],
      default: null
    },
    emitResize: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    id() {
      if (this.vscrollData.simpleArray) return this.index;
      // eslint-disable-next-line no-prototype-builtins
      if (this.item.hasOwnProperty(this.vscrollData.keyField)) return this.item[this.vscrollData.keyField];
      throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
    },
    size() {
      return this.vscrollData.validSizes[this.id] && this.vscrollData.sizes[this.id] || 0;
    },
    finalActive() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: 'updateWatchData',
    id() {
      if (!this.size) {
        this.onDataUpdate();
      }
    },
    finalActive(value) {
      if (!this.size) {
        if (value) {
          if (!this.vscrollParent.$_undefinedMap[this.id]) {
            this.vscrollParent.$_undefinedSizes++;
            this.vscrollParent.$_undefinedMap[this.id] = true;
          }
        } else {
          if (this.vscrollParent.$_undefinedMap[this.id]) {
            this.vscrollParent.$_undefinedSizes--;
            this.vscrollParent.$_undefinedMap[this.id] = false;
          }
        }
      }
      if (this.vscrollResizeObserver) {
        if (value) {
          this.observeSize();
        } else {
          this.unobserveSize();
        }
      } else if (value && this.$_pendingVScrollUpdate === this.id) {
        this.updateSize();
      }
    }
  },
  created() {
    if (this.$isServer) return;
    this.$_forceNextVScrollUpdate = null;
    this.updateWatchData();
    if (!this.vscrollResizeObserver) {
      for (const k in this.sizeDependencies) {
        this.$watch(() => this.sizeDependencies[k], this.onDataUpdate);
      }
      this.vscrollParent.$on('vscroll:update', this.onVscrollUpdate);
      this.vscrollParent.$on('vscroll:update-size', this.onVscrollUpdateSize);
    }
  },
  mounted() {
    if (this.vscrollData.active) {
      this.updateSize();
      this.observeSize();
    }
  },
  beforeDestroy() {
    this.vscrollParent.$off('vscroll:update', this.onVscrollUpdate);
    this.vscrollParent.$off('vscroll:update-size', this.onVscrollUpdateSize);
    this.unobserveSize();
  },
  methods: {
    updateSize() {
      if (this.finalActive) {
        if (this.$_pendingSizeUpdate !== this.id) {
          this.$_pendingSizeUpdate = this.id;
          this.$_forceNextVScrollUpdate = null;
          this.$_pendingVScrollUpdate = null;
          this.computeSize(this.id);
        }
      } else {
        this.$_forceNextVScrollUpdate = this.id;
      }
    },
    updateWatchData() {
      if (this.watchData && !this.vscrollResizeObserver) {
        this.$_watchData = this.$watch('item', () => {
          this.onDataUpdate();
        }, {
          deep: true
        });
      } else if (this.$_watchData) {
        this.$_watchData();
        this.$_watchData = null;
      }
    },
    onVscrollUpdate({
      force
    }) {
      // If not active, sechedule a size update when it becomes active
      if (!this.finalActive && force) {
        this.$_pendingVScrollUpdate = this.id;
      }
      if (this.$_forceNextVScrollUpdate === this.id || force || !this.size) {
        this.updateSize();
      }
    },
    onDataUpdate() {
      this.updateSize();
    },
    computeSize(id) {
      this.$nextTick(() => {
        if (this.id === id) {
          const width = this.$el.offsetWidth;
          const height = this.$el.offsetHeight;
          this.applySize(width, height);
        }
        this.$_pendingSizeUpdate = null;
      });
    },
    applySize(width, height) {
      const size = ~~(this.vscrollParent.direction === 'vertical' ? height : width);
      if (size && this.size !== size) {
        if (this.vscrollParent.$_undefinedMap[this.id]) {
          this.vscrollParent.$_undefinedSizes--;
          this.vscrollParent.$_undefinedMap[this.id] = undefined;
        }
        this.$set(this.vscrollData.sizes, this.id, size);
        this.$set(this.vscrollData.validSizes, this.id, true);
        if (this.emitResize) this.$emit('resize', this.id);
      }
    },
    observeSize() {
      if (!this.vscrollResizeObserver || !this.$el.parentNode) return;
      this.vscrollResizeObserver.observe(this.$el.parentNode);
      this.$el.parentNode.addEventListener('resize', this.onResize);
    },
    unobserveSize() {
      if (!this.vscrollResizeObserver) return;
      this.vscrollResizeObserver.unobserve(this.$el.parentNode);
      this.$el.parentNode.removeEventListener('resize', this.onResize);
    },
    onResize(event) {
      const {
        width,
        height
      } = event.detail.contentRect;
      this.applySize(width, height);
    }
  },
  render(h) {
    return h(this.tag, this.$slots.default);
  }
};

/* script */
const __vue_script__ = script;

/* template */

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

function IdState ({
  idProp = vm => vm.item.id
} = {}) {
  const store = {};
  const vm = new vue__WEBPACK_IMPORTED_MODULE_3__["default"]({
    data() {
      return {
        store
      };
    }
  });

  // @vue/component
  return {
    data() {
      return {
        idState: null
      };
    },
    created() {
      this.$_id = null;
      if (typeof idProp === 'function') {
        this.$_getId = () => idProp.call(this, this);
      } else {
        this.$_getId = () => this[idProp];
      }
      this.$watch(this.$_getId, {
        handler(value) {
          this.$nextTick(() => {
            this.$_id = value;
          });
        },
        immediate: true
      });
      this.$_updateIdState();
    },
    beforeUpdate() {
      this.$_updateIdState();
    },
    methods: {
      /**
       * Initialize an idState
       * @param {number|string} id Unique id for the data
       */
      $_idStateInit(id) {
        const factory = this.$options.idState;
        if (typeof factory === 'function') {
          const data = factory.call(this, this);
          vm.$set(store, id, data);
          this.$_id = id;
          return data;
        } else {
          throw new Error('[mixin IdState] Missing `idState` function on component definition.');
        }
      },
      /**
       * Ensure idState is created and up-to-date
       */
      $_updateIdState() {
        const id = this.$_getId();
        if (id == null) {
          console.warn(`No id found for IdState with idProp: '${idProp}'.`);
        }
        if (id !== this.$_id) {
          if (!store[id]) {
            this.$_idStateInit(id);
          }
          this.idState = store[id];
        }
      }
    }
  };
}

function registerComponents(Vue, prefix) {
  Vue.component(`${prefix}recycle-scroller`, __vue_component__$2);
  Vue.component(`${prefix}RecycleScroller`, __vue_component__$2);
  Vue.component(`${prefix}dynamic-scroller`, __vue_component__$1);
  Vue.component(`${prefix}DynamicScroller`, __vue_component__$1);
  Vue.component(`${prefix}dynamic-scroller-item`, __vue_component__);
  Vue.component(`${prefix}DynamicScrollerItem`, __vue_component__);
}
const plugin = {
  // eslint-disable-next-line no-undef
  version: "1.1.2",
  install(Vue, options) {
    const finalOptions = Object.assign({}, {
      installComponents: true,
      componentsPrefix: ''
    }, options);
    for (const key in finalOptions) {
      if (typeof finalOptions[key] !== 'undefined') {
        config[key] = finalOptions[key];
      }
    }
    if (finalOptions.installComponents) {
      registerComponents(Vue, finalOptions.componentsPrefix);
    }
  }
};

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof __webpack_require__.g !== 'undefined') {
  GlobalVue = __webpack_require__.g.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}


//# sourceMappingURL=vue-virtual-scroller.esm.js.map


/***/ }),

/***/ "./node_modules/vue-virtual-scroller/node_modules/vue-observe-visibility/dist/vue-observe-visibility.esm.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-virtual-scroller/node_modules/vue-observe-visibility/dist/vue-observe-visibility.esm.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObserveVisibility: () => (/* binding */ ObserveVisibility),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   install: () => (/* binding */ install)
/* harmony export */ });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function processOptions(value) {
  var options;

  if (typeof value === 'function') {
    // Simple options (callback-only)
    options = {
      callback: value
    };
  } else {
    // Options object
    options = value;
  }

  return options;
}
function throttle(callback, delay) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timeout;
  var lastState;
  var currentArgs;

  var throttled = function throttled(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    currentArgs = args;
    if (timeout && state === lastState) return;
    var leading = options.leading;

    if (typeof leading === 'function') {
      leading = leading(state, lastState);
    }

    if ((!timeout || state !== lastState) && leading) {
      callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
    }

    lastState = state;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(void 0, [state].concat(_toConsumableArray(currentArgs)));
      timeout = 0;
    }, delay);
  };

  throttled._clear = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return throttled;
}
function deepEqual(val1, val2) {
  if (val1 === val2) return true;

  if (_typeof(val1) === 'object') {
    for (var key in val1) {
      if (!deepEqual(val1[key], val2[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

var VisibilityState =
/*#__PURE__*/
function () {
  function VisibilityState(el, options, vnode) {
    _classCallCheck(this, VisibilityState);

    this.el = el;
    this.observer = null;
    this.frozen = false;
    this.createObserver(options, vnode);
  }

  _createClass(VisibilityState, [{
    key: "createObserver",
    value: function createObserver(options, vnode) {
      var _this = this;

      if (this.observer) {
        this.destroyObserver();
      }

      if (this.frozen) return;
      this.options = processOptions(options);

      this.callback = function (result, entry) {
        _this.options.callback(result, entry);

        if (result && _this.options.once) {
          _this.frozen = true;

          _this.destroyObserver();
        }
      }; // Throttle


      if (this.callback && this.options.throttle) {
        var _ref = this.options.throttleOptions || {},
            _leading = _ref.leading;

        this.callback = throttle(this.callback, this.options.throttle, {
          leading: function leading(state) {
            return _leading === 'both' || _leading === 'visible' && state || _leading === 'hidden' && !state;
          }
        });
      }

      this.oldResult = undefined;
      this.observer = new IntersectionObserver(function (entries) {
        var entry = entries[0];

        if (entries.length > 1) {
          var intersectingEntry = entries.find(function (e) {
            return e.isIntersecting;
          });

          if (intersectingEntry) {
            entry = intersectingEntry;
          }
        }

        if (_this.callback) {
          // Use isIntersecting if possible because browsers can report isIntersecting as true, but intersectionRatio as 0, when something very slowly enters the viewport.
          var result = entry.isIntersecting && entry.intersectionRatio >= _this.threshold;
          if (result === _this.oldResult) return;
          _this.oldResult = result;

          _this.callback(result, entry);
        }
      }, this.options.intersection); // Wait for the element to be in document

      vnode.context.$nextTick(function () {
        if (_this.observer) {
          _this.observer.observe(_this.el);
        }
      });
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      } // Cancel throttled call


      if (this.callback && this.callback._clear) {
        this.callback._clear();

        this.callback = null;
      }
    }
  }, {
    key: "threshold",
    get: function get() {
      return this.options.intersection && this.options.intersection.threshold || 0;
    }
  }]);

  return VisibilityState;
}();

function bind(el, _ref2, vnode) {
  var value = _ref2.value;
  if (!value) return;

  if (typeof IntersectionObserver === 'undefined') {
    console.warn('[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill');
  } else {
    var state = new VisibilityState(el, value, vnode);
    el._vue_visibilityState = state;
  }
}

function update(el, _ref3, vnode) {
  var value = _ref3.value,
      oldValue = _ref3.oldValue;
  if (deepEqual(value, oldValue)) return;
  var state = el._vue_visibilityState;

  if (!value) {
    unbind(el);
    return;
  }

  if (state) {
    state.createObserver(value, vnode);
  } else {
    bind(el, {
      value: value
    }, vnode);
  }
}

function unbind(el) {
  var state = el._vue_visibilityState;

  if (state) {
    state.destroyObserver();
    delete el._vue_visibilityState;
  }
}

var ObserveVisibility = {
  bind: bind,
  update: update,
  unbind: unbind
};

function install(Vue) {
  Vue.directive('observe-visibility', ObserveVisibility);
  /* -- Add more components here -- */
}
/* -- Plugin definition & Auto-install -- */

/* You shouldn't have to modify the code below */
// Plugin

var plugin = {
  // eslint-disable-next-line no-undef
  version: "0.4.6",
  install: install
};

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof __webpack_require__.g !== 'undefined') {
  GlobalVue = __webpack_require__.g.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);



/***/ }),

/***/ "./node_modules/vue-virtual-scroller/node_modules/vue-resize/dist/vue-resize.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-virtual-scroller/node_modules/vue-resize/dist/vue-resize.esm.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResizeObserver: () => (/* binding */ ResizeObserver),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   install: () => (/* binding */ install)
/* harmony export */ });
function getInternetExplorerVersion() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return -1;
}

var isIE = void 0;

function initCompat() {
	if (!initCompat.init) {
		initCompat.init = true;
		isIE = getInternetExplorerVersion() !== -1;
	}
}

var ResizeObserver = { render: function render() {
		var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "resize-observer", attrs: { "tabindex": "-1" } });
	}, staticRenderFns: [], _scopeId: 'data-v-b329ee4c',
	name: 'resize-observer',

	methods: {
		compareAndNotify: function compareAndNotify() {
			if (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) {
				this._w = this.$el.offsetWidth;
				this._h = this.$el.offsetHeight;
				this.$emit('notify');
			}
		},
		addResizeHandlers: function addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify);
			this.compareAndNotify();
		},
		removeResizeHandlers: function removeResizeHandlers() {
			if (this._resizeObject && this._resizeObject.onload) {
				if (!isIE && this._resizeObject.contentDocument) {
					this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify);
				}
				delete this._resizeObject.onload;
			}
		}
	},

	mounted: function mounted() {
		var _this = this;

		initCompat();
		this.$nextTick(function () {
			_this._w = _this.$el.offsetWidth;
			_this._h = _this.$el.offsetHeight;
		});
		var object = document.createElement('object');
		this._resizeObject = object;
		object.setAttribute('aria-hidden', 'true');
		object.setAttribute('tabindex', -1);
		object.onload = this.addResizeHandlers;
		object.type = 'text/html';
		if (isIE) {
			this.$el.appendChild(object);
		}
		object.data = 'about:blank';
		if (!isIE) {
			this.$el.appendChild(object);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeResizeHandlers();
	}
};

// Install the components
function install(Vue) {
	Vue.component('resize-observer', ResizeObserver);
	Vue.component('ResizeObserver', ResizeObserver);
}

// Plugin
var plugin = {
	// eslint-disable-next-line no-undef
	version: "0.4.5",
	install: install
};

// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof __webpack_require__.g !== 'undefined') {
	GlobalVue = __webpack_require__.g.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcListItem.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcListItem.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_NcListItem_CA4CzIW8_mjs__WEBPACK_IMPORTED_MODULE_0__.N)
/* harmony export */ });
/* harmony import */ var _chunks_NcListItem_CA4CzIW8_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/NcListItem-CA4CzIW8.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/NcListItem-CA4CzIW8.mjs");


//# sourceMappingURL=NcListItem.mjs.map


/***/ })

}]);
//# sourceMappingURL=talk-defaultVendors-src_components_RoomSelector_vue.js.map?v=daa2d93030dfd0f6041f