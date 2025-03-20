/*! third party licenses: js/vendor.LICENSE.txt */
const appName = "contacts";
const appVersion = "7.1.0-dev.0";
import { s as subscribe, u as unsubscribe, V as Vue, p as unref, a as getDefaultExportFromCjs, d as defineComponent, r as ref$1, G as computed, X as shallowRef, w as watch, J as toRef, H as onMounted, l as loadState, b as cancelableClient, _, U, e as emit, R as onUnmounted, h as getCurrentUser, E as nextTick, I as watchEffect } from "./index-C-qT-4FH.chunk.mjs";
import { a9 as normalizeComponent$1, t, a as showError } from "./style-NE2zwFZ0.chunk.mjs";
import { i as isPublicShare, d as defaultRemoteURL, g as getClient, a as getDefaultPropfind, b as getFavoriteNodes, s as sortNodes, c as FileType, e as defaultRootPath, f as resultToNode, C as CancelablePromise, h as getRecentSearch, j as formatFileSize } from "./index-CdOlRS1N.chunk.mjs";
import { n as normalizeComponent, b as NcActions, X as ChevronRight, s as NcButton, O as GenRandomId, j as NcActionButton, Y as NcActionRouter, B as NcActionLink, r as debounce, Z as NcDialog, m as NcEmptyContent, p as pathBrowserify, i as NcCheckboxRadioSwitch, E as NcActionInput, _ as NcIconSvgWrapper, z as NcSelect, F as NcTextField, $ as NcDateTime } from "./index-fSqcvS-W.chunk.mjs";
import "./index-ghM_rkL4.chunk.mjs";
const _sfc_main$g = {
  name: "NcBreadcrumb",
  components: {
    NcActions,
    ChevronRight,
    NcButton
  },
  inheritAttrs: false,
  props: {
    /**
     * The main text content of the entry.
     */
    name: {
      type: String,
      required: true
    },
    /**
     * The title attribute of the element.
     */
    title: {
      type: String,
      default: null
    },
    /**
     * Route Location the link should navigate to when clicked on.
     *
     * @see https://v3.router.vuejs.org/api/#to
     */
    to: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Match the complete route attributes (query and hash included)
     *
     * @see https://v3.router.vuejs.org/api/#exact
     */
    exact: {
      type: Boolean,
      default: false
    },
    /**
     * Set this prop if your app doesn't use vue-router, breadcrumbs will show as normal links.
     */
    href: {
      type: String,
      default: void 0
    },
    /**
     * Set a css icon-class to show an icon along name text (if forceIconText is provided, otherwise just icon).
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Enables text to accompany the icon, if the icon was provided. The text that will be displayed is the name prop.
     */
    forceIconText: {
      type: Boolean,
      default: false
    },
    /**
     * Disable dropping on this breadcrumb.
     */
    disableDrop: {
      type: Boolean,
      default: false
    },
    /**
     * Force the actions to display in a three dot menu
     */
    forceMenu: {
      type: Boolean,
      default: false
    },
    /**
     * Open state of the Actions menu
     */
    open: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "update:open",
    "dropped"
  ],
  data() {
    return {
      /**
       * Variable to track if we hover over the breadcrumb
       */
      hovering: false,
      /**
       * The unique id of the breadcrumb. Necessary to append the
       * Actions menu to the correct crumb.
       */
      crumbId: `crumb-id-${GenRandomId()}`
    };
  },
  computed: {
    /**
     * The attributes to pass to `router-link` or `a`
     */
    linkAttributes() {
      return this.to ? { to: this.to, exact: this.exact, ...this.$attrs } : this.href ? { href: this.href, ...this.$attrs } : this.$attrs;
    }
  },
  methods: {
    /**
     * Function to handle changing the open state of the Actions menu
     * $emit the open state.
     *
     * @param {boolean} open The open state of the Actions menu
     */
    onOpenChange(open) {
      this.$emit("update:open", open);
    },
    /**
     * Function to handle a drop on the breadcrumb.
     * $emit the event and the path, remove the hovering state.
     *
     * @param {object} e The drop event
     * @return {boolean}
     */
    dropped(e) {
      if (this.disableDrop) {
        return false;
      }
      this.$emit("dropped", e, this.to || this.href);
      this.$parent.$emit("dropped", e, this.to || this.href);
      this.hovering = false;
      return false;
    },
    /**
     * Add the hovering state on drag enter
     *
     * @param {object} e The drag enter event
     */
    dragEnter(e) {
      if (this.disableDrop) {
        return;
      }
      this.hovering = true;
    },
    /**
     * Remove the hovering state on drag leave
     *
     * @param {object} e The drag leave event
     */
    dragLeave(e) {
      if (this.disableDrop) {
        return;
      }
      if (e.target.contains(e.relatedTarget) || this.$refs.crumb.contains(e.relatedTarget)) {
        return;
      }
      this.hovering = false;
    }
  }
};
var _sfc_render$g = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("li", _vm._b({ ref: "crumb", staticClass: "vue-crumb", class: { "vue-crumb--hovered": _vm.hovering }, attrs: { "draggable": "false" }, on: { "dragstart": function($event) {
    $event.preventDefault();
    return (() => {
    }).apply(null, arguments);
  }, "drop": function($event) {
    $event.preventDefault();
    return _vm.dropped.apply(null, arguments);
  }, "dragover": function($event) {
    $event.preventDefault();
    return (() => {
    }).apply(null, arguments);
  }, "dragenter": _vm.dragEnter, "dragleave": _vm.dragLeave } }, "li", _vm._d({}, [_vm.crumbId, ""])), [(_vm.name || _vm.icon || _vm.$slots.icon) && !_vm.$slots.default ? _c("NcButton", _vm._g(_vm._b({ attrs: { "title": _vm.title, "aria-label": _vm.icon ? _vm.name : void 0, "type": "tertiary" }, scopedSlots: _vm._u([_vm.$slots.icon || _vm.icon ? { key: "icon", fn: function() {
    return [_vm._t("icon", function() {
      return [_c("span", { staticClass: "icon", class: _vm.icon })];
    })];
  }, proxy: true } : null, !(_vm.$slots.icon || _vm.icon) || _vm.forceIconText ? { key: "default", fn: function() {
    return [_vm._v(" " + _vm._s(_vm.name) + " ")];
  }, proxy: true } : null], null, true) }, "NcButton", _vm.linkAttributes, false), _vm.$listeners)) : _vm._e(), _vm.$slots.default ? _c("NcActions", { ref: "actions", attrs: { "type": "tertiary", "force-menu": _vm.forceMenu, "open": _vm.open, "menu-name": _vm.name, "title": _vm.title, "force-name": true, "container": `.vue-crumb[${_vm.crumbId}]` }, on: { "update:open": _vm.onOpenChange }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_vm._t("menu-icon")];
  }, proxy: true }], null, true) }, [_vm._t("default")], 2) : _vm._e(), _c("ChevronRight", { staticClass: "vue-crumb__separator", attrs: { "size": 20 } })], 1);
};
var _sfc_staticRenderFns$g = [];
var __component__$g = /* @__PURE__ */ normalizeComponent(
  _sfc_main$g,
  _sfc_render$g,
  _sfc_staticRenderFns$g,
  false,
  null,
  "cfe13af3"
);
const NcBreadcrumb = __component__$g.exports;
var $placeholder = Symbol();
var $fakeParent = Symbol();
var $nextSiblingPatched = Symbol();
var $childNodesPatched = Symbol();
var isFrag = function isFrag2(node) {
  return "frag" in node;
};
var parentNodeDescriptor = {
  get: function get() {
    return this[$fakeParent] || this.parentElement;
  },
  configurable: true
};
var patchParentNode = function patchParentNode2(node, fakeParent) {
  if ($fakeParent in node) {
    return;
  }
  node[$fakeParent] = fakeParent;
  Object.defineProperty(node, "parentNode", parentNodeDescriptor);
};
var nextSiblingDescriptor = {
  get: function get2() {
    var childNodes = this.parentNode.childNodes;
    var index = childNodes.indexOf(this);
    if (index > -1) {
      return childNodes[index + 1] || null;
    }
    return null;
  }
};
var patchNextSibling = function patchNextSibling2(node) {
  if ($nextSiblingPatched in node) {
    return;
  }
  node[$nextSiblingPatched] = true;
  Object.defineProperty(node, "nextSibling", nextSiblingDescriptor);
};
var getTopFragment = function getTopFragment2(node, fromParent) {
  while (node.parentNode !== fromParent) {
    var _node = node, parentNode = _node.parentNode;
    if (parentNode) {
      node = parentNode;
    }
  }
  return node;
};
var getChildNodes;
var getChildNodesWithFragments = function getChildNodesWithFragments2(node) {
  if (!getChildNodes) {
    var _childNodesDescriptor = Object.getOwnPropertyDescriptor(Node.prototype, "childNodes");
    getChildNodes = _childNodesDescriptor.get;
  }
  var realChildNodes = getChildNodes.apply(node);
  var childNodes = Array.from(realChildNodes).map(function(childNode) {
    return getTopFragment(childNode, node);
  });
  return childNodes.filter(function(childNode, index) {
    return childNode !== childNodes[index - 1];
  });
};
var childNodesDescriptor = {
  get: function get3() {
    return this.frag || getChildNodesWithFragments(this);
  }
};
var firstChildDescriptor = {
  get: function get4() {
    return this.childNodes[0] || null;
  }
};
function hasChildNodes() {
  return this.childNodes.length > 0;
}
var patchChildNodes = function patchChildNodes2(node) {
  if ($childNodesPatched in node) {
    return;
  }
  node[$childNodesPatched] = true;
  Object.defineProperties(node, {
    childNodes: childNodesDescriptor,
    firstChild: firstChildDescriptor
  });
  node.hasChildNodes = hasChildNodes;
};
function before() {
  var _this$frag$;
  (_this$frag$ = this.frag[0]).before.apply(_this$frag$, arguments);
}
function remove() {
  var frag2 = this.frag;
  var removed = frag2.splice(0, frag2.length);
  removed.forEach(function(node) {
    node.remove();
  });
}
var getFragmentLeafNodes = function getFragmentLeafNodes2(children) {
  var _Array$prototype;
  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, children.map(function(childNode) {
    return isFrag(childNode) ? getFragmentLeafNodes2(childNode.frag) : childNode;
  }));
};
var addPlaceholder = function addPlaceholder2(node, insertBeforeNode) {
  var placeholder = node[$placeholder];
  insertBeforeNode.before(placeholder);
  patchParentNode(placeholder, node);
  node.frag.unshift(placeholder);
};
function removeChild(node) {
  if (isFrag(this)) {
    var hasChildInFragment = this.frag.indexOf(node);
    if (hasChildInFragment > -1) {
      var _this$frag$splice = this.frag.splice(hasChildInFragment, 1), removedNode = _this$frag$splice[0];
      if (this.frag.length === 0) {
        addPlaceholder(this, removedNode);
      }
      node.remove();
    }
  } else {
    var children = getChildNodesWithFragments(this);
    var hasChild = children.indexOf(node);
    if (hasChild > -1) {
      node.remove();
    }
  }
  return node;
}
function insertBefore(insertNode, insertBeforeNode) {
  var _this = this;
  var insertNodes = insertNode.frag || [insertNode];
  if (isFrag(this)) {
    if (insertNode[$fakeParent] === this && insertNode.parentElement) {
      return insertNode;
    }
    var _frag = this.frag;
    if (insertBeforeNode) {
      var index = _frag.indexOf(insertBeforeNode);
      if (index > -1) {
        _frag.splice.apply(_frag, [index, 0].concat(insertNodes));
        insertBeforeNode.before.apply(insertBeforeNode, insertNodes);
      }
    } else {
      var _lastNode = _frag[_frag.length - 1];
      _frag.push.apply(_frag, insertNodes);
      _lastNode.after.apply(_lastNode, insertNodes);
    }
    removePlaceholder(this);
  } else if (insertBeforeNode) {
    if (this.childNodes.includes(insertBeforeNode)) {
      insertBeforeNode.before.apply(insertBeforeNode, insertNodes);
    }
  } else {
    this.append.apply(this, insertNodes);
  }
  insertNodes.forEach(function(node) {
    patchParentNode(node, _this);
  });
  var lastNode = insertNodes[insertNodes.length - 1];
  patchNextSibling(lastNode);
  return insertNode;
}
function appendChild(node) {
  if (node[$fakeParent] === this && node.parentElement) {
    return node;
  }
  var frag2 = this.frag;
  var lastChild = frag2[frag2.length - 1];
  lastChild.after(node);
  patchParentNode(node, this);
  removePlaceholder(this);
  frag2.push(node);
  return node;
}
var removePlaceholder = function removePlaceholder2(node) {
  var placeholder = node[$placeholder];
  if (node.frag[0] === placeholder) {
    node.frag.shift();
    placeholder.remove();
  }
};
var innerHTMLDescriptor = {
  set: function set(htmlString) {
    var _this2 = this;
    if (this.frag[0] !== this[$placeholder]) {
      this.frag.slice().forEach(function(child) {
        return _this2.removeChild(child);
      });
    }
    if (htmlString) {
      var domify = document.createElement("div");
      domify.innerHTML = htmlString;
      Array.from(domify.childNodes).forEach(function(node) {
        _this2.appendChild(node);
      });
    }
  },
  get: function get5() {
    return "";
  }
};
var frag = {
  inserted: function inserted(element) {
    var parentNode = element.parentNode, nextSibling = element.nextSibling, previousSibling = element.previousSibling;
    var childNodes = Array.from(element.childNodes);
    var placeholder = document.createComment("");
    if (childNodes.length === 0) {
      childNodes.push(placeholder);
    }
    element.frag = childNodes;
    element[$placeholder] = placeholder;
    var fragment2 = document.createDocumentFragment();
    fragment2.append.apply(fragment2, getFragmentLeafNodes(childNodes));
    element.replaceWith(fragment2);
    childNodes.forEach(function(node) {
      patchParentNode(node, element);
      patchNextSibling(node);
    });
    patchChildNodes(element);
    Object.assign(element, {
      remove,
      appendChild,
      insertBefore,
      removeChild,
      before
    });
    Object.defineProperty(element, "innerHTML", innerHTMLDescriptor);
    if (parentNode) {
      Object.assign(parentNode, {
        removeChild,
        insertBefore
      });
      patchParentNode(element, parentNode);
      patchChildNodes(parentNode);
    }
    if (nextSibling) {
      patchNextSibling(element);
    }
    if (previousSibling) {
      patchNextSibling(previousSibling);
    }
  },
  unbind: function unbind(element) {
    element.remove();
  }
};
var fragment = {
  name: "Fragment",
  directives: {
    frag
  },
  render: function render2(h) {
    return h("div", {
      directives: [{
        name: "frag"
      }]
    }, this.$slots["default"]);
  }
};
const ValidateSlot = (slots, allowed, vm) => {
  if (slots === void 0) {
    return;
  }
  for (let index = slots.length - 1; index >= 0; index--) {
    const node = slots[index];
    const isHtmlElement = !node.componentOptions && node.tag && allowed.indexOf(node.tag) === -1;
    const isVueComponent = !!node.componentOptions && typeof node.componentOptions.tag === "string";
    const isForbiddenComponent = isVueComponent && allowed.indexOf(node.componentOptions.tag) === -1;
    if (isHtmlElement || !isVueComponent || isForbiddenComponent) {
      if (isHtmlElement || isForbiddenComponent) {
        Vue.util.warn(`${isHtmlElement ? node.tag : node.componentOptions.tag} is not allowed inside the ${vm.$options.name} component`, vm);
      }
      slots.splice(index, 1);
    }
  }
};
const _sfc_main$1$1 = {
  name: "FolderIcon",
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
var _sfc_render$1$1 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon folder-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1$1 = [];
var __component__$1$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1$1,
  _sfc_render$1$1,
  _sfc_staticRenderFns$1$1,
  false,
  null,
  null
);
const IconFolder$1 = __component__$1$1.exports;
const crumbClass = "vue-crumb";
const _sfc_main$f = {
  name: "NcBreadcrumbs",
  components: {
    NcActions,
    NcActionButton,
    NcActionRouter,
    NcActionLink,
    NcBreadcrumb,
    IconFolder: IconFolder$1
  },
  props: {
    /**
     * Set a css icon-class for the icon of the root breadcrumb to be used.
     */
    rootIcon: {
      type: String,
      default: "icon-home"
    },
    /**
     * Set the aria-label of the nav element.
     */
    ariaLabel: {
      type: String,
      default: null
    }
  },
  emits: ["dropped"],
  data() {
    return {
      /**
       * Array to track the hidden breadcrumbs by their index.
       * Comparing two crumbs somehow does not work, so we use the indices.
       */
      hiddenIndices: [],
      /**
       * This is the props of the middle Action menu
       * that show the ellipsised breadcrumbs
       */
      menuBreadcrumbProps: {
        // Don't show a name for this breadcrumb, only the Actions menu
        name: "",
        forceMenu: true,
        // Don't allow dropping directly on the actions breadcrumb
        disableDrop: true,
        // Is the menu open or not
        open: false
      },
      breadcrumbsRefs: {}
    };
  },
  beforeMount() {
    ValidateSlot(this.$slots.default, ["NcBreadcrumb"], this);
  },
  beforeUpdate() {
    ValidateSlot(this.$slots.default, ["NcBreadcrumb"], this);
  },
  created() {
    window.addEventListener("resize", debounce(() => {
      this.handleWindowResize();
    }, 100));
    subscribe("navigation-toggled", this.delayedResize);
  },
  mounted() {
    this.handleWindowResize();
  },
  updated() {
    this.delayedResize();
    this.$nextTick(() => {
      this.hideCrumbs();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
    unsubscribe("navigation-toggled", this.delayedResize);
  },
  methods: {
    /**
     * Close the actions menu
     *
     * @param {object} e The event
     */
    closeActions(e) {
      if (this.$refs.actionsBreadcrumb.$el.contains(e.relatedTarget)) {
        return;
      }
      this.menuBreadcrumbProps.open = false;
    },
    /**
     * Call the resize function after a delay
     */
    async delayedResize() {
      await this.$nextTick();
      this.handleWindowResize();
    },
    /**
     * Check the width of the breadcrumb and hide breadcrumbs
     * if we overflow otherwise.
     */
    handleWindowResize() {
      if (!this.$refs.container) {
        return;
      }
      const breadcrumbs = Object.values(this.breadcrumbsRefs);
      const nrCrumbs = breadcrumbs.length;
      const hiddenIndices = [];
      const availableWidth = this.$refs.container.offsetWidth;
      let totalWidth = this.getTotalWidth(breadcrumbs);
      if (this.$refs.breadcrumb__actions) {
        totalWidth += this.$refs.breadcrumb__actions.offsetWidth;
      }
      let overflow = totalWidth - availableWidth;
      overflow += overflow > 0 ? 64 : 0;
      let i = 0;
      const startIndex = Math.floor(nrCrumbs / 2);
      while (overflow > 0 && i < nrCrumbs - 2) {
        const currentIndex = startIndex + (i % 2 ? i + 1 : i) / 2 * Math.pow(-1, i + nrCrumbs % 2);
        overflow -= this.getWidth(breadcrumbs[currentIndex]?.elm, currentIndex === breadcrumbs.length - 1);
        hiddenIndices.push(currentIndex);
        i++;
      }
      if (!this.arraysEqual(this.hiddenIndices, hiddenIndices.sort((a, b) => a - b))) {
        this.hiddenIndices = hiddenIndices;
      }
    },
    /**
     * Checks if two arrays are equal.
     * Only works for primitive arrays, but that's enough here.
     *
     * @param {Array} a The first array
     * @param {Array} b The second array
     * @return {boolean} Wether the arrays are equal
     */
    arraysEqual(a, b) {
      if (a.length !== b.length) return false;
      if (a === b) return true;
      if (a === null || b === null) return false;
      for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    },
    /**
     * Calculates the total width of all breadcrumbs
     *
     * @param {Array} breadcrumbs All breadcrumbs
     * @return {number} The total width
     */
    getTotalWidth(breadcrumbs) {
      return breadcrumbs.reduce((width, crumb, index) => width + this.getWidth(crumb?.elm, index === breadcrumbs.length - 1), 0);
    },
    /**
     * Calculates the width of the provided element
     *
     * @param {object} el The element
     * @param {boolean} isLast Is this the last crumb
     * @return {number} The width
     */
    getWidth(el, isLast) {
      if (!el?.classList) return 0;
      const hide = el.classList.contains(`${crumbClass}--hidden`);
      el.style.minWidth = "auto";
      if (isLast) {
        el.style.maxWidth = "210px";
      }
      el.classList.remove(`${crumbClass}--hidden`);
      const w = el.offsetWidth;
      if (hide) {
        el.classList.add(`${crumbClass}--hidden`);
      }
      el.style.minWidth = "";
      el.style.maxWidth = "";
      return w;
    },
    /**
     * Prevents the default of a provided event
     *
     * @param {object} e The event
     * @return {boolean}
     */
    preventDefault(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      return false;
    },
    /**
     * Handles the drag start.
     * Prevents a breadcrumb from being draggable.
     *
     * @param {object} e The event
     * @return {boolean}
     */
    dragStart(e) {
      return this.preventDefault(e);
    },
    /**
     * Handles when something is dropped on the breadcrumb.
     *
     * @param {object} e The drop event
     * @param {string} path The path of the breadcrumb
     * @param {boolean} disabled Whether dropping is disabled for this breadcrumb
     * @return {boolean}
     */
    dropped(e, path, disabled) {
      if (!disabled) {
        this.$emit("dropped", e, path);
      }
      this.menuBreadcrumbProps.open = false;
      const crumbs = document.querySelectorAll(`.${crumbClass}`);
      crumbs.forEach((f) => {
        f.classList.remove(`${crumbClass}--hovered`);
      });
      return this.preventDefault(e);
    },
    /**
     * Handles the drag over event
     *
     * @param {object} e The drag over event
     * @return {boolean}
     */
    dragOver(e) {
      return this.preventDefault(e);
    },
    /**
     * Handles the drag enter event
     *
     * @param {object} e The drag over event
     * @param {boolean} disabled Whether dropping is disabled for this breadcrumb
     */
    dragEnter(e, disabled) {
      if (disabled) {
        return;
      }
      if (e.target.closest) {
        const target = e.target.closest(`.${crumbClass}`);
        if (target.classList && target.classList.contains(crumbClass)) {
          const crumbs = document.querySelectorAll(`.${crumbClass}`);
          crumbs.forEach((f) => {
            f.classList.remove(`${crumbClass}--hovered`);
          });
          target.classList.add(`${crumbClass}--hovered`);
        }
      }
    },
    /**
     * Handles the drag leave event
     *
     * @param {object} e The drag leave event
     * @param {boolean} disabled Whether dropping is disabled for this breadcrumb
     */
    dragLeave(e, disabled) {
      if (disabled) {
        return;
      }
      if (e.target.contains(e.relatedTarget)) {
        return;
      }
      if (e.target.closest) {
        const target = e.target.closest(`.${crumbClass}`);
        if (target.contains(e.relatedTarget)) {
          return;
        }
        if (target.classList && target.classList.contains(crumbClass)) {
          target.classList.remove(`${crumbClass}--hovered`);
        }
      }
    },
    /**
     * Check for each crumb if we have to hide it and
     * add it to the array of all crumbs.
     */
    hideCrumbs() {
      const crumbs = Object.values(this.breadcrumbsRefs);
      crumbs.forEach((crumb, i) => {
        if (crumb?.elm?.classList) {
          if (this.hiddenIndices.includes(i)) {
            crumb.elm.classList.add(`${crumbClass}--hidden`);
          } else {
            crumb.elm.classList.remove(`${crumbClass}--hidden`);
          }
        }
      });
    },
    isBreadcrumb(vnode) {
      return (vnode?.componentOptions?.tag || vnode?.tag || "").includes("NcBreadcrumb");
    }
  },
  /**
   * The render function to display the component
   *
   * @param {Function} h The function to create VNodes
   * @return {object|undefined} The created VNode
   */
  render(h) {
    const breadcrumbs = [];
    this.$slots.default.forEach((vnode) => {
      if (this.isBreadcrumb(vnode)) {
        breadcrumbs.push(vnode);
        return;
      }
      if (vnode?.type === fragment) {
        vnode?.children?.forEach?.((child) => {
          if (this.isBreadcrumb(child)) {
            breadcrumbs.push(child);
          }
        });
      }
    });
    if (breadcrumbs.length === 0) {
      return;
    }
    Vue.set(breadcrumbs[0].componentOptions.propsData, "icon", this.rootIcon);
    Vue.set(breadcrumbs[0].componentOptions.propsData, "ref", "breadcrumbs");
    const breadcrumbsRefs = {};
    breadcrumbs.forEach((crumb, index) => {
      Vue.set(crumb, "ref", `crumb-${index}`);
      breadcrumbsRefs[index] = crumb;
    });
    let crumbs = [];
    if (!this.hiddenIndices.length) {
      crumbs = breadcrumbs;
    } else {
      crumbs = breadcrumbs.slice(0, Math.round(breadcrumbs.length / 2));
      crumbs.push(
        h("NcBreadcrumb", {
          class: "dropdown",
          props: this.menuBreadcrumbProps,
          attrs: {
            // Hide the dropdown menu from screen-readers,
            // since the crumbs in the menu are still in the list.
            "aria-hidden": true
          },
          // Add a ref to the Actions menu
          ref: "actionsBreadcrumb",
          key: "actions-breadcrumb-1",
          // Add handlers so the Actions menu opens on hover
          nativeOn: {
            dragstart: this.dragStart,
            dragenter: () => {
              this.menuBreadcrumbProps.open = true;
            },
            dragleave: this.closeActions
          },
          on: {
            // Make sure we keep the same open state
            // as the Actions component
            "update:open": (open) => {
              this.menuBreadcrumbProps.open = open;
            }
          }
          // Add all hidden breadcrumbs as ActionRouter or ActionLink
        }, this.hiddenIndices.filter((index) => index <= breadcrumbs.length - 1).map((index) => {
          const crumb = breadcrumbs[index];
          const to = crumb.componentOptions.propsData.to;
          const href = crumb.componentOptions.propsData.href;
          const disabled = crumb.componentOptions.propsData.disableDrop;
          const title = crumb.componentOptions.propsData.title;
          const name = crumb.componentOptions.propsData.name;
          let element = "NcActionButton";
          let path = "";
          if (href) {
            element = "NcActionLink";
            path = href;
          }
          if (to) {
            element = "NcActionRouter";
            path = to;
          }
          const folderIcon = h("IconFolder", {
            props: {
              size: 20
            },
            slot: "icon"
          });
          return h(
            element,
            {
              class: crumbClass,
              props: {
                href: href || null,
                title,
                to: to || null
              },
              // Prevent the breadcrumbs from being draggable
              attrs: {
                draggable: false
              },
              on: {
                ...crumb.componentOptions.listeners
              },
              // Add the drag and drop handlers
              nativeOn: {
                dragstart: this.dragStart,
                drop: ($event) => this.dropped($event, path, disabled),
                dragover: this.dragOver,
                dragenter: ($event) => this.dragEnter($event, disabled),
                dragleave: ($event) => this.dragLeave($event, disabled)
              }
            },
            [folderIcon, name]
          );
        }))
      );
      const crumbs2 = breadcrumbs.slice(Math.round(breadcrumbs.length / 2));
      crumbs = crumbs.concat(crumbs2);
    }
    const wrapper = [h("nav", { attrs: { "aria-label": this.ariaLabel } }, [h("ul", { class: "breadcrumb__crumbs" }, [crumbs])])];
    if (this.$slots.actions) {
      wrapper.push(h("div", { class: "breadcrumb__actions", ref: "breadcrumb__actions" }, this.$slots.actions));
    }
    this.breadcrumbsRefs = breadcrumbsRefs;
    return h("div", { class: ["breadcrumb", { "breadcrumb--collapsed": this.hiddenIndices.length === breadcrumbs.length - 2 }], ref: "container" }, wrapper);
  }
};
const _sfc_render$f = null;
const _sfc_staticRenderFns$f = null;
var __component__$f = /* @__PURE__ */ normalizeComponent(
  _sfc_main$f,
  _sfc_render$f,
  _sfc_staticRenderFns$f,
  false,
  null,
  "629bf30f"
);
const NcBreadcrumbs = __component__$f.exports;
Vue.util.warn;
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var eventemitter3 = { exports: {} };
(function(module) {
  var has = Object.prototype.hasOwnProperty, prefix = "~";
  function Events() {
  }
  if (Object.create) {
    Events.prototype = /* @__PURE__ */ Object.create(null);
    if (!new Events().__proto__) prefix = false;
  }
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") {
      throw new TypeError("The listener must be a function");
    }
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [emitter._events[evt], listener];
    return emitter;
  }
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
  }
  function EventEmitter2() {
    this._events = new Events();
    this._eventsCount = 0;
  }
  EventEmitter2.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for (name in events = this._events) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }
    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }
    return names;
  };
  EventEmitter2.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }
    return ee;
  };
  EventEmitter2.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  };
  EventEmitter2.prototype.emit = function emit2(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length, j;
      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          case 4:
            listeners[i].fn.call(listeners[i].context, a1, a2, a3);
            break;
          default:
            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
              args[j - 1] = arguments[j];
            }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter2.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };
  EventEmitter2.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };
  EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
      if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
          events.push(listeners[i]);
        }
      }
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
      else clearEvent(this, evt);
    }
    return this;
  };
  EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }
    return this;
  };
  EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
  EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
  EventEmitter2.prefixed = prefix;
  EventEmitter2.EventEmitter = EventEmitter2;
  {
    module.exports = EventEmitter2;
  }
})(eventemitter3);
var eventemitter3Exports = eventemitter3.exports;
const EventEmitter = /* @__PURE__ */ getDefaultExportFromCjs(eventemitter3Exports);
class TimeoutError extends Error {
  constructor(message) {
    super(message);
    this.name = "TimeoutError";
  }
}
class AbortError extends Error {
  constructor(message) {
    super();
    this.name = "AbortError";
    this.message = message;
  }
}
const getDOMException = (errorMessage) => globalThis.DOMException === void 0 ? new AbortError(errorMessage) : new DOMException(errorMessage);
const getAbortedReason = (signal) => {
  const reason = signal.reason === void 0 ? getDOMException("This operation was aborted.") : signal.reason;
  return reason instanceof Error ? reason : getDOMException(reason);
};
function pTimeout(promise, options) {
  const {
    milliseconds,
    fallback,
    message,
    customTimers = { setTimeout, clearTimeout }
  } = options;
  let timer;
  const wrappedPromise = new Promise((resolve, reject) => {
    if (typeof milliseconds !== "number" || Math.sign(milliseconds) !== 1) {
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${milliseconds}\``);
    }
    if (options.signal) {
      const { signal } = options;
      if (signal.aborted) {
        reject(getAbortedReason(signal));
      }
      const abortHandler = () => {
        reject(getAbortedReason(signal));
      };
      signal.addEventListener("abort", abortHandler, { once: true });
      promise.finally(() => {
        signal.removeEventListener("abort", abortHandler);
      });
    }
    if (milliseconds === Number.POSITIVE_INFINITY) {
      promise.then(resolve, reject);
      return;
    }
    const timeoutError = new TimeoutError();
    timer = customTimers.setTimeout.call(void 0, () => {
      if (fallback) {
        try {
          resolve(fallback());
        } catch (error) {
          reject(error);
        }
        return;
      }
      if (typeof promise.cancel === "function") {
        promise.cancel();
      }
      if (message === false) {
        resolve();
      } else if (message instanceof Error) {
        reject(message);
      } else {
        timeoutError.message = message ?? `Promise timed out after ${milliseconds} milliseconds`;
        reject(timeoutError);
      }
    }, milliseconds);
    (async () => {
      try {
        resolve(await promise);
      } catch (error) {
        reject(error);
      }
    })();
  });
  const cancelablePromise = wrappedPromise.finally(() => {
    cancelablePromise.clear();
  });
  cancelablePromise.clear = () => {
    customTimers.clearTimeout.call(void 0, timer);
    timer = void 0;
  };
  return cancelablePromise;
}
function lowerBound(array, value, comparator) {
  let first = 0;
  let count = array.length;
  while (count > 0) {
    const step = Math.trunc(count / 2);
    let it = first + step;
    if (comparator(array[it], value) <= 0) {
      first = ++it;
      count -= step + 1;
    } else {
      count = step;
    }
  }
  return first;
}
class PriorityQueue {
  #queue = [];
  enqueue(run, options) {
    options = {
      priority: 0,
      ...options
    };
    const element = {
      priority: options.priority,
      run
    };
    if (this.size && this.#queue[this.size - 1].priority >= options.priority) {
      this.#queue.push(element);
      return;
    }
    const index = lowerBound(this.#queue, element, (a, b) => b.priority - a.priority);
    this.#queue.splice(index, 0, element);
  }
  dequeue() {
    const item = this.#queue.shift();
    return item?.run;
  }
  filter(options) {
    return this.#queue.filter((element) => element.priority === options.priority).map((element) => element.run);
  }
  get size() {
    return this.#queue.length;
  }
}
class PQueue extends EventEmitter {
  #carryoverConcurrencyCount;
  #isIntervalIgnored;
  #intervalCount = 0;
  #intervalCap;
  #interval;
  #intervalEnd = 0;
  #intervalId;
  #timeoutId;
  #queue;
  #queueClass;
  #pending = 0;
  // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194
  #concurrency;
  #isPaused;
  #throwOnTimeout;
  /**
      Per-operation timeout in milliseconds. Operations fulfill once `timeout` elapses if they haven't already.
  
      Applies to each future operation.
      */
  timeout;
  // TODO: The `throwOnTimeout` option should affect the return types of `add()` and `addAll()`
  constructor(options) {
    super();
    options = {
      carryoverConcurrencyCount: false,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: true,
      queueClass: PriorityQueue,
      ...options
    };
    if (!(typeof options.intervalCap === "number" && options.intervalCap >= 1)) {
      throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${options.intervalCap?.toString() ?? ""}\` (${typeof options.intervalCap})`);
    }
    if (options.interval === void 0 || !(Number.isFinite(options.interval) && options.interval >= 0)) {
      throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${options.interval?.toString() ?? ""}\` (${typeof options.interval})`);
    }
    this.#carryoverConcurrencyCount = options.carryoverConcurrencyCount;
    this.#isIntervalIgnored = options.intervalCap === Number.POSITIVE_INFINITY || options.interval === 0;
    this.#intervalCap = options.intervalCap;
    this.#interval = options.interval;
    this.#queue = new options.queueClass();
    this.#queueClass = options.queueClass;
    this.concurrency = options.concurrency;
    this.timeout = options.timeout;
    this.#throwOnTimeout = options.throwOnTimeout === true;
    this.#isPaused = options.autoStart === false;
  }
  get #doesIntervalAllowAnother() {
    return this.#isIntervalIgnored || this.#intervalCount < this.#intervalCap;
  }
  get #doesConcurrentAllowAnother() {
    return this.#pending < this.#concurrency;
  }
  #next() {
    this.#pending--;
    this.#tryToStartAnother();
    this.emit("next");
  }
  #onResumeInterval() {
    this.#onInterval();
    this.#initializeIntervalIfNeeded();
    this.#timeoutId = void 0;
  }
  get #isIntervalPaused() {
    const now = Date.now();
    if (this.#intervalId === void 0) {
      const delay = this.#intervalEnd - now;
      if (delay < 0) {
        this.#intervalCount = this.#carryoverConcurrencyCount ? this.#pending : 0;
      } else {
        if (this.#timeoutId === void 0) {
          this.#timeoutId = setTimeout(() => {
            this.#onResumeInterval();
          }, delay);
        }
        return true;
      }
    }
    return false;
  }
  #tryToStartAnother() {
    if (this.#queue.size === 0) {
      if (this.#intervalId) {
        clearInterval(this.#intervalId);
      }
      this.#intervalId = void 0;
      this.emit("empty");
      if (this.#pending === 0) {
        this.emit("idle");
      }
      return false;
    }
    if (!this.#isPaused) {
      const canInitializeInterval = !this.#isIntervalPaused;
      if (this.#doesIntervalAllowAnother && this.#doesConcurrentAllowAnother) {
        const job = this.#queue.dequeue();
        if (!job) {
          return false;
        }
        this.emit("active");
        job();
        if (canInitializeInterval) {
          this.#initializeIntervalIfNeeded();
        }
        return true;
      }
    }
    return false;
  }
  #initializeIntervalIfNeeded() {
    if (this.#isIntervalIgnored || this.#intervalId !== void 0) {
      return;
    }
    this.#intervalId = setInterval(() => {
      this.#onInterval();
    }, this.#interval);
    this.#intervalEnd = Date.now() + this.#interval;
  }
  #onInterval() {
    if (this.#intervalCount === 0 && this.#pending === 0 && this.#intervalId) {
      clearInterval(this.#intervalId);
      this.#intervalId = void 0;
    }
    this.#intervalCount = this.#carryoverConcurrencyCount ? this.#pending : 0;
    this.#processQueue();
  }
  /**
  Executes all queued functions until it reaches the limit.
  */
  #processQueue() {
    while (this.#tryToStartAnother()) {
    }
  }
  get concurrency() {
    return this.#concurrency;
  }
  set concurrency(newConcurrency) {
    if (!(typeof newConcurrency === "number" && newConcurrency >= 1)) {
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
    }
    this.#concurrency = newConcurrency;
    this.#processQueue();
  }
  async #throwOnAbort(signal) {
    return new Promise((_resolve, reject) => {
      signal.addEventListener("abort", () => {
        reject(signal.reason);
      }, { once: true });
    });
  }
  async add(function_, options = {}) {
    options = {
      timeout: this.timeout,
      throwOnTimeout: this.#throwOnTimeout,
      ...options
    };
    return new Promise((resolve, reject) => {
      this.#queue.enqueue(async () => {
        this.#pending++;
        this.#intervalCount++;
        try {
          options.signal?.throwIfAborted();
          let operation = function_({ signal: options.signal });
          if (options.timeout) {
            operation = pTimeout(Promise.resolve(operation), { milliseconds: options.timeout });
          }
          if (options.signal) {
            operation = Promise.race([operation, this.#throwOnAbort(options.signal)]);
          }
          const result = await operation;
          resolve(result);
          this.emit("completed", result);
        } catch (error) {
          if (error instanceof TimeoutError && !options.throwOnTimeout) {
            resolve();
            return;
          }
          reject(error);
          this.emit("error", error);
        } finally {
          this.#next();
        }
      }, options);
      this.emit("add");
      this.#tryToStartAnother();
    });
  }
  async addAll(functions, options) {
    return Promise.all(functions.map(async (function_) => this.add(function_, options)));
  }
  /**
  Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
  */
  start() {
    if (!this.#isPaused) {
      return this;
    }
    this.#isPaused = false;
    this.#processQueue();
    return this;
  }
  /**
  Put queue execution on hold.
  */
  pause() {
    this.#isPaused = true;
  }
  /**
  Clear the queue.
  */
  clear() {
    this.#queue = new this.#queueClass();
  }
  /**
      Can be called multiple times. Useful if you for example add additional items at a later time.
  
      @returns A promise that settles when the queue becomes empty.
      */
  async onEmpty() {
    if (this.#queue.size === 0) {
      return;
    }
    await this.#onEvent("empty");
  }
  /**
      @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.
  
      If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.
  
      Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
      */
  async onSizeLessThan(limit) {
    if (this.#queue.size < limit) {
      return;
    }
    await this.#onEvent("next", () => this.#queue.size < limit);
  }
  /**
      The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
  
      @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
      */
  async onIdle() {
    if (this.#pending === 0 && this.#queue.size === 0) {
      return;
    }
    await this.#onEvent("idle");
  }
  async #onEvent(event, filter) {
    return new Promise((resolve) => {
      const listener = () => {
        if (filter && !filter()) {
          return;
        }
        this.off(event, listener);
        resolve();
      };
      this.on(event, listener);
    });
  }
  /**
  Size of the queue, the number of queued items waiting to run.
  */
  get size() {
    return this.#queue.size;
  }
  /**
      Size of the queue, filtered by the given options.
  
      For example, this can be used to find the number of items remaining in the queue with a specific priority level.
      */
  sizeBy(options) {
    return this.#queue.filter(options).length;
  }
  /**
  Number of running items (no longer in the queue).
  */
  get pending() {
    return this.#pending;
  }
  /**
  Whether the queue is currently paused.
  */
  get isPaused() {
    return this.#isPaused;
  }
}
var mdiClock = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z";
var mdiFolder = "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z";
var mdiStar = "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";
const _sfc_main$e = {
  name: "FileIcon",
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
var _sfc_render$e = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon file-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$e = [];
var __component__$e = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$e,
  _sfc_render$e,
  _sfc_staticRenderFns$e,
  false,
  null,
  null
);
const IconFile = __component__$e.exports;
const useFilesSettings = () => {
  var _a, _b, _c;
  const filesUserState = loadState("files", "config", null);
  const showHiddenFiles = ref$1((_a = filesUserState == null ? void 0 : filesUserState.show_hidden) != null ? _a : true);
  const sortFavoritesFirst = ref$1((_b = filesUserState == null ? void 0 : filesUserState.sort_favorites_first) != null ? _b : true);
  const cropImagePreviews = ref$1((_c = filesUserState == null ? void 0 : filesUserState.crop_image_previews) != null ? _c : true);
  onMounted(async () => {
    var _a2, _b2, _c2, _d, _e, _f;
    if (!isPublicShare()) {
      try {
        const { data } = await cancelableClient.get(_("/apps/files/api/v1/configs"));
        showHiddenFiles.value = (_b2 = (_a2 = data == null ? void 0 : data.data) == null ? void 0 : _a2.show_hidden) != null ? _b2 : false;
        sortFavoritesFirst.value = (_d = (_c2 = data == null ? void 0 : data.data) == null ? void 0 : _c2.sort_favorites_first) != null ? _d : true;
        cropImagePreviews.value = (_f = (_e = data == null ? void 0 : data.data) == null ? void 0 : _e.crop_image_previews) != null ? _f : true;
      } catch (error) {
        console.error("Could not load files settings", error);
        showError(t("Could not load files settings"));
      }
    } else {
      console.debug("Skip loading files settings - currently on public share");
    }
  });
  return {
    showHiddenFiles,
    sortFavoritesFirst,
    cropImagePreviews
  };
};
const useFilesViews = (currentView) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const convertOrder = (order2) => order2 === "asc" ? "ascending" : order2 === "desc" ? "descending" : "none";
  const filesViewsState = loadState("files", "viewConfigs", null);
  const filesViewConfig = ref$1({
    sortBy: (_b = (_a = filesViewsState == null ? void 0 : filesViewsState.files) == null ? void 0 : _a.sorting_mode) != null ? _b : "basename",
    order: convertOrder((_d = (_c = filesViewsState == null ? void 0 : filesViewsState.files) == null ? void 0 : _c.sorting_direction) != null ? _d : "asc")
  });
  const recentViewConfig = ref$1({
    sortBy: (_f = (_e = filesViewsState == null ? void 0 : filesViewsState.recent) == null ? void 0 : _e.sorting_mode) != null ? _f : "basename",
    order: convertOrder((_h = (_g = filesViewsState == null ? void 0 : filesViewsState.recent) == null ? void 0 : _g.sorting_direction) != null ? _h : "asc")
  });
  const favoritesViewConfig = ref$1({
    sortBy: (_j = (_i = filesViewsState == null ? void 0 : filesViewsState.favorites) == null ? void 0 : _i.sorting_mode) != null ? _j : "basename",
    order: convertOrder((_l = (_k = filesViewsState == null ? void 0 : filesViewsState.favorites) == null ? void 0 : _k.sorting_direction) != null ? _l : "asc")
  });
  onMounted(async () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m, _n, _o;
    if (!isPublicShare()) {
      try {
        const { data } = await cancelableClient.get(_("/apps/files/api/v1/views"));
        filesViewConfig.value = {
          sortBy: (_c2 = (_b2 = (_a2 = data == null ? void 0 : data.data) == null ? void 0 : _a2.files) == null ? void 0 : _b2.sorting_mode) != null ? _c2 : "basename",
          order: convertOrder((_e2 = (_d2 = data == null ? void 0 : data.data) == null ? void 0 : _d2.files) == null ? void 0 : _e2.sorting_direction)
        };
        favoritesViewConfig.value = {
          sortBy: (_h2 = (_g2 = (_f2 = data == null ? void 0 : data.data) == null ? void 0 : _f2.favorites) == null ? void 0 : _g2.sorting_mode) != null ? _h2 : "basename",
          order: convertOrder((_j2 = (_i2 = data == null ? void 0 : data.data) == null ? void 0 : _i2.favorites) == null ? void 0 : _j2.sorting_direction)
        };
        recentViewConfig.value = {
          sortBy: (_m = (_l2 = (_k2 = data == null ? void 0 : data.data) == null ? void 0 : _k2.recent) == null ? void 0 : _l2.sorting_mode) != null ? _m : "basename",
          order: convertOrder((_o = (_n = data == null ? void 0 : data.data) == null ? void 0 : _n.recent) == null ? void 0 : _o.sorting_direction)
        };
      } catch (error) {
        console.error("Could not load files views", error);
        showError(t("Could not load files views"));
      }
    } else {
      console.debug("Skip loading files views - currently on public share");
    }
  });
  const currentConfig = computed(() => toValue(currentView || "files") === "files" ? filesViewConfig.value : toValue(currentView) === "recent" ? recentViewConfig.value : favoritesViewConfig.value);
  const sortBy = computed(() => currentConfig.value.sortBy);
  const order = computed(() => currentConfig.value.order);
  return {
    filesViewConfig,
    favoritesViewConfig,
    recentViewConfig,
    currentConfig,
    sortBy,
    order
  };
};
const _sfc_main$d = {
  name: "MenuUpIcon",
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
var _sfc_render$d = function render22() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon menu-up-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M7,15L12,10L17,15H7Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$d = [];
var __component__$d = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$d,
  _sfc_render$d,
  _sfc_staticRenderFns$d,
  false,
  null,
  null
);
const IconSortAscending = __component__$d.exports;
const _sfc_main$c = {
  name: "MenuDownIcon",
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
var _sfc_render$c = function render32() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon menu-down-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M7,10L12,15L17,10H7Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$c = [];
var __component__$c = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$c,
  _sfc_render$c,
  _sfc_staticRenderFns$c,
  false,
  null,
  null
);
const IconSortDescending = __component__$c.exports;
const fileListIconStylesModule = {
  "file-picker__file-icon": "_file-picker__file-icon_19mjt_9"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "LoadingTableRow",
  props: {
    showCheckbox: { type: Boolean }
  },
  setup(__props) {
    return { __sfc: true, fileListIconStyles: fileListIconStylesModule };
  }
});
var _sfc_render$b = function render42() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c("tr", { staticClass: "file-picker__row loading-row", attrs: { "aria-hidden": "true" } }, [_vm.showCheckbox ? _c("td", { staticClass: "row-checkbox" }, [_c("span")]) : _vm._e(), _c("td", { staticClass: "row-name" }, [_c("div", { staticClass: "row-wrapper" }, [_c("span", { class: _setup.fileListIconStyles["file-picker__file-icon"] }), _c("span")])]), _vm._m(0), _vm._m(1)]);
};
var _sfc_staticRenderFns$b = [function() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("td", { staticClass: "row-size" }, [_c("span")]);
}, function() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("td", { staticClass: "row-modified" }, [_c("span")]);
}];
var __component__$b = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$b,
  _sfc_render$b,
  _sfc_staticRenderFns$b,
  false,
  null,
  "15187afc"
);
const LoadingTableRow = __component__$b.exports;
const queue = new PQueue({ concurrency: 5 });
function preloadImage(url) {
  const { resolve, promise } = Promise.withResolvers();
  queue.add(() => {
    const image = new Image();
    image.onerror = () => resolve(false);
    image.onload = () => resolve(true);
    image.src = url;
    return promise;
  });
  return promise;
}
function getPreviewURL(node, options = {}) {
  var _a;
  options = { size: 32, cropPreview: false, mimeFallback: true, ...options };
  try {
    const previewUrl = ((_a = node.attributes) == null ? void 0 : _a.previewUrl) || _("/core/preview?fileId={fileid}", {
      fileid: node.fileid
    });
    let url;
    try {
      url = new URL(previewUrl);
    } catch (e) {
      url = new URL(previewUrl, window.location.origin);
    }
    url.searchParams.set("x", "".concat(options.size));
    url.searchParams.set("y", "".concat(options.size));
    url.searchParams.set("mimeFallback", "".concat(options.mimeFallback));
    url.searchParams.set("a", options.cropPreview === true ? "0" : "1");
    url.searchParams.set("c", "".concat(node.attributes.etag));
    return url;
  } catch (e) {
    return null;
  }
}
const usePreviewURL = (node, options) => {
  const previewURL = ref$1(null);
  const previewLoaded = ref$1(false);
  watchEffect(() => {
    previewLoaded.value = false;
    previewURL.value = getPreviewURL(toValue(node), toValue(options || {}));
    if (previewURL.value) {
      preloadImage(previewURL.value.href).then((success) => {
        previewLoaded.value = success;
      });
    }
  });
  return {
    previewURL,
    previewLoaded
  };
};
const _sfc_main$a = {
  name: "FolderIcon",
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
var _sfc_render$a = function render5() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon folder-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$a = [];
var __component__$a = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$a,
  _sfc_render$a,
  _sfc_staticRenderFns$a,
  false,
  null,
  null
);
const IconFolder = __component__$a.exports;
const __default__$1 = {
  name: "FilePreview"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    node: null,
    cropImagePreviews: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const fileListIconStyles = ref$1(fileListIconStylesModule);
    const {
      previewURL,
      previewLoaded
    } = usePreviewURL(toRef(props, "node"), computed(() => ({ cropPreview: props.cropImagePreviews })));
    const isFile = computed(() => props.node.type === FileType.File);
    return { __sfc: true, fileListIconStyles, props, previewURL, previewLoaded, isFile, IconFile, IconFolder };
  }
});
var _sfc_render$9 = function render6() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c("div", { class: _setup.fileListIconStyles["file-picker__file-icon"], style: _setup.previewLoaded ? { backgroundImage: "url(".concat(_setup.previewURL, ")") } : void 0 }, [!_setup.previewLoaded ? [_setup.isFile ? _c(_setup.IconFile, { attrs: { "size": 20 } }) : _c(_setup.IconFolder, { attrs: { "size": 20 } })] : _vm._e()], 2);
};
var _sfc_staticRenderFns$9 = [];
var __component__$9 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$9,
  _sfc_render$9,
  _sfc_staticRenderFns$9,
  false,
  null,
  null
);
const FilePreview = __component__$9.exports;
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "FileListRow",
  props: {
    allowPickDirectory: { type: Boolean },
    selected: { type: Boolean },
    showCheckbox: { type: Boolean },
    canPick: { type: Boolean },
    node: null,
    cropImagePreviews: { type: Boolean }
  },
  emits: ["update:selected", "enter-directory"],
  setup(__props, { emit: emit2 }) {
    const props = __props;
    const displayName = computed(() => {
      var _a;
      return ((_a = props.node.attributes) == null ? void 0 : _a.displayName) || props.node.basename.slice(0, props.node.extension ? -props.node.extension.length : void 0);
    });
    const fileExtension = computed(() => props.node.extension);
    const isDirectory = computed(() => props.node.type === FileType.Folder);
    const isPickable = computed(() => props.canPick && (props.allowPickDirectory || !isDirectory.value));
    function toggleSelected() {
      emit2("update:selected", !props.selected);
    }
    function handleClick() {
      if (isDirectory.value) {
        emit2("enter-directory", props.node);
      } else {
        toggleSelected();
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        handleClick();
      }
    }
    return { __sfc: true, props, emit: emit2, displayName, fileExtension, isDirectory, isPickable, toggleSelected, handleClick, handleKeyDown, formatFileSize, NcCheckboxRadioSwitch, NcDateTime, t, FilePreview };
  }
});
var _sfc_render$8 = function render7() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c("tr", _vm._g({ class: ["file-picker__row", {
    "file-picker__row--selected": _vm.selected && !_vm.showCheckbox
  }], attrs: { "tabindex": _vm.showCheckbox && !_setup.isDirectory ? void 0 : 0, "aria-selected": !_setup.isPickable ? void 0 : _vm.selected, "data-filename": _vm.node.basename, "data-testid": "file-list-row" } }, {
    click: _setup.handleClick,
    /* same as tabindex -> if we hide the checkbox or this is a directory we need keyboard access to enter the directory or select the node */
    ...!_vm.showCheckbox || _setup.isDirectory ? { keydown: _setup.handleKeyDown } : {}
  }), [_vm.showCheckbox ? _c("td", { staticClass: "row-checkbox", on: { "click": function($event) {
    $event.stopPropagation();
    return (() => {
    }).apply(null, arguments);
  } } }, [_c(_setup.NcCheckboxRadioSwitch, { attrs: { "aria-label": _setup.t("Select the row for {nodename}", { nodename: _setup.displayName }), "checked": _vm.selected, "disabled": !_setup.isPickable, "data-testid": "row-checkbox" }, on: { "update:checked": _setup.toggleSelected } })], 1) : _vm._e(), _c("td", { staticClass: "row-name" }, [_c("div", { staticClass: "file-picker__name-container", attrs: { "data-testid": "row-name" } }, [_c(_setup.FilePreview, { attrs: { "node": _vm.node, "crop-image-previews": _vm.cropImagePreviews } }), _c("div", { staticClass: "file-picker__file-name", attrs: { "title": _setup.displayName }, domProps: { "textContent": _vm._s(_setup.displayName) } }), _c("div", { staticClass: "file-picker__file-extension", domProps: { "textContent": _vm._s(_setup.fileExtension) } })], 1)]), _c("td", { staticClass: "row-size" }, [_vm._v(" " + _vm._s(_setup.formatFileSize(_vm.node.size || 0)) + " ")]), _c("td", { staticClass: "row-modified" }, [_c(_setup.NcDateTime, { attrs: { "timestamp": _vm.node.mtime, "ignore-seconds": true } })], 1)]);
};
var _sfc_staticRenderFns$8 = [];
var __component__$8 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$8,
  _sfc_render$8,
  _sfc_staticRenderFns$8,
  false,
  null,
  "cb12dccb"
);
const FileListRow = __component__$8.exports;
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FileList",
  props: {
    currentView: null,
    multiselect: { type: Boolean },
    allowPickDirectory: { type: Boolean },
    loading: { type: Boolean },
    files: null,
    selectedFiles: null,
    path: null
  },
  emits: ["update:path", "update:selectedFiles"],
  setup(__props, { emit: emit2 }) {
    const props = __props;
    const customSortingConfig = ref$1();
    const { currentConfig: filesAppSorting } = useFilesViews(props.currentView);
    const sortingConfig = computed(() => {
      var _a;
      return (_a = customSortingConfig.value) != null ? _a : filesAppSorting.value;
    });
    const sortByName = computed(() => sortingConfig.value.sortBy === "basename" ? sortingConfig.value.order === "none" ? void 0 : sortingConfig.value.order : void 0);
    const sortBySize = computed(() => sortingConfig.value.sortBy === "size" ? sortingConfig.value.order === "none" ? void 0 : sortingConfig.value.order : void 0);
    const sortByModified = computed(() => sortingConfig.value.sortBy === "mtime" ? sortingConfig.value.order === "none" ? void 0 : sortingConfig.value.order : void 0);
    const toggleSorting = (sortBy) => {
      if (sortingConfig.value.sortBy === sortBy) {
        if (sortingConfig.value.order === "ascending") {
          customSortingConfig.value = { sortBy: sortingConfig.value.sortBy, order: "descending" };
        } else {
          customSortingConfig.value = { sortBy: sortingConfig.value.sortBy, order: "ascending" };
        }
      } else {
        customSortingConfig.value = { sortBy, order: "ascending" };
      }
    };
    const { sortFavoritesFirst, cropImagePreviews } = useFilesSettings();
    const sortedFiles = computed(() => {
      return sortNodes(props.files, {
        sortFoldersFirst: true,
        sortFavoritesFirst: sortFavoritesFirst.value,
        sortingOrder: sortingConfig.value.order === "descending" ? "desc" : "asc",
        sortingMode: sortingConfig.value.sortBy
      });
    });
    const selectableFiles = computed(() => props.files.filter((file) => props.allowPickDirectory || file.type !== FileType.Folder));
    const allSelected = computed(() => !props.loading && props.selectedFiles.length > 0 && props.selectedFiles.length >= selectableFiles.value.length);
    function onSelectAll() {
      if (props.selectedFiles.length < selectableFiles.value.length) {
        emit2("update:selectedFiles", selectableFiles.value);
      } else {
        emit2("update:selectedFiles", []);
      }
    }
    function onNodeSelected(file) {
      if (props.selectedFiles.includes(file)) {
        emit2("update:selectedFiles", props.selectedFiles.filter((f) => f.path !== file.path));
      } else {
        if (props.multiselect) {
          emit2("update:selectedFiles", [...props.selectedFiles, file]);
        } else {
          emit2("update:selectedFiles", [file]);
        }
      }
    }
    function onChangeDirectory(dir) {
      emit2("update:path", dir.path);
    }
    const skeletonNumber = ref$1(4);
    const fileContainer = ref$1();
    {
      const resize = () => nextTick(() => {
        var _a, _b, _c, _d, _e;
        const nodes = ((_b = (_a = fileContainer.value) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.children) || [];
        let height = ((_d = (_c = fileContainer.value) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.clientHeight) || 450;
        for (let index = 0; index < nodes.length; index++) {
          if (!((_e = fileContainer.value) == null ? void 0 : _e.isSameNode(nodes[index]))) {
            height -= nodes[index].clientHeight;
          }
        }
        skeletonNumber.value = Math.max(1, Math.floor((height - 50) / 50));
      });
      onMounted(() => {
        window.addEventListener("resize", resize);
        resize();
      });
      onUnmounted(() => {
        window.removeEventListener("resize", resize);
      });
    }
    return { __sfc: true, props, emit: emit2, customSortingConfig, filesAppSorting, sortingConfig, sortByName, sortBySize, sortByModified, toggleSorting, sortFavoritesFirst, cropImagePreviews, sortedFiles, selectableFiles, allSelected, onSelectAll, onNodeSelected, onChangeDirectory, skeletonNumber, fileContainer, NcButton, NcCheckboxRadioSwitch, t, IconSortAscending, IconSortDescending, LoadingTableRow, FileListRow };
  }
});
var _sfc_render$7 = function render8() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c("div", { ref: "fileContainer", staticClass: "file-picker__files" }, [_c("table", [_c("thead", [_c("tr", [_vm.multiselect ? _c("th", { staticClass: "row-checkbox" }, [_c("span", { staticClass: "hidden-visually" }, [_vm._v(" " + _vm._s(_setup.t("Select entry")) + " ")]), _vm.multiselect ? _c(_setup.NcCheckboxRadioSwitch, { attrs: { "aria-label": _setup.t("Select all entries"), "checked": _setup.allSelected, "data-testid": "select-all-checkbox" }, on: { "update:checked": _setup.onSelectAll } }) : _vm._e()], 1) : _vm._e(), _c("th", { staticClass: "row-name", attrs: { "aria-sort": _setup.sortByName } }, [_c("div", { staticClass: "header-wrapper" }, [_c("span", { staticClass: "file-picker__header-preview" }), _c(_setup.NcButton, { attrs: { "wide": true, "type": "tertiary", "data-test": "file-picker_sort-name" }, on: { "click": function($event) {
    return _setup.toggleSorting("basename");
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_setup.sortByName === "ascending" ? _c(_setup.IconSortAscending, { attrs: { "size": 20 } }) : _setup.sortByName === "descending" ? _c(_setup.IconSortDescending, { attrs: { "size": 20 } }) : _c("span", { staticStyle: { "width": "44px" } })];
  }, proxy: true }]) }, [_vm._v(" " + _vm._s(_setup.t("Name")) + " ")])], 1)]), _c("th", { staticClass: "row-size", attrs: { "aria-sort": _setup.sortBySize } }, [_c(_setup.NcButton, { attrs: { "wide": true, "type": "tertiary" }, on: { "click": function($event) {
    return _setup.toggleSorting("size");
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_setup.sortBySize === "ascending" ? _c(_setup.IconSortAscending, { attrs: { "size": 20 } }) : _setup.sortBySize === "descending" ? _c(_setup.IconSortDescending, { attrs: { "size": 20 } }) : _c("span", { staticStyle: { "width": "44px" } })];
  }, proxy: true }]) }, [_vm._v(" " + _vm._s(_setup.t("Size")) + " ")])], 1), _c("th", { staticClass: "row-modified", attrs: { "aria-sort": _setup.sortByModified } }, [_c(_setup.NcButton, { attrs: { "wide": true, "type": "tertiary" }, on: { "click": function($event) {
    return _setup.toggleSorting("mtime");
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_setup.sortByModified === "ascending" ? _c(_setup.IconSortAscending, { attrs: { "size": 20 } }) : _setup.sortByModified === "descending" ? _c(_setup.IconSortDescending, { attrs: { "size": 20 } }) : _c("span", { staticStyle: { "width": "44px" } })];
  }, proxy: true }]) }, [_vm._v(" " + _vm._s(_setup.t("Modified")) + " ")])], 1)])]), _c("tbody", [_vm.loading ? _vm._l(_setup.skeletonNumber, function(index) {
    return _c(_setup.LoadingTableRow, { key: index, attrs: { "show-checkbox": _vm.multiselect } });
  }) : _vm._l(_setup.sortedFiles, function(file) {
    return _c(_setup.FileListRow, { key: file.fileid || file.path, attrs: { "allow-pick-directory": _vm.allowPickDirectory, "show-checkbox": _vm.multiselect, "can-pick": _vm.multiselect || _vm.selectedFiles.length === 0 || _vm.selectedFiles.includes(file), "selected": _vm.selectedFiles.includes(file), "node": file, "crop-image-previews": _setup.cropImagePreviews }, on: { "update:selected": function($event) {
      return _setup.onNodeSelected(file);
    }, "enter-directory": _setup.onChangeDirectory } });
  })], 2)])]);
};
var _sfc_staticRenderFns$7 = [];
var __component__$7 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$7,
  _sfc_render$7,
  _sfc_staticRenderFns$7,
  false,
  null,
  "006fdbd0"
);
const FileList = __component__$7.exports;
const _sfc_main$6 = {
  name: "HomeIcon",
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
var _sfc_render$6 = function render9() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon home-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$6 = [];
var __component__$6 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$6,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  false,
  null,
  null
);
const IconHome = __component__$6.exports;
const _sfc_main$5 = {
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
var _sfc_render$5 = function render10() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon plus-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$5 = [];
var __component__$5 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$5,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  false,
  null,
  null
);
const IconPlus = __component__$5.exports;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FilePickerBreadcrumbs",
  props: {
    path: null,
    showMenu: { type: Boolean }
  },
  emits: ["update:path", "create-node"],
  setup(__props, { emit: emit2 }) {
    const props = __props;
    const actionsOpen = ref$1(false);
    const newNodeName = ref$1("");
    const nameInput = ref$1();
    function validateInput() {
      var _a, _b, _c, _d;
      const name = newNodeName.value.trim();
      const input = (_b = (_a = nameInput.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.querySelector("input");
      let validity = "";
      if (name.length === 0) {
        validity = t("Folder name cannot be empty.");
      } else if (name.includes("/")) {
        validity = t('"/" is not allowed inside a folder name.');
      } else if (["..", "."].includes(name)) {
        validity = t('"{name}" is an invalid folder name.', { name });
      } else if (((_c = window.OC.config) == null ? void 0 : _c.blacklist_files_regex) && name.match((_d = window.OC.config) == null ? void 0 : _d.blacklist_files_regex)) {
        validity = t('"{name}" is not an allowed folder name', { name });
      }
      if (input) {
        input.setCustomValidity(validity);
      }
      return validity === "";
    }
    const onSubmit = function() {
      const name = newNodeName.value.trim();
      if (validateInput()) {
        actionsOpen.value = false;
        emit2("create-node", name);
        newNodeName.value = "";
      }
    };
    const pathElements = computed(
      () => props.path.split("/").filter((v) => v !== "").map((v, i, elements) => ({
        name: v,
        path: "/" + elements.slice(0, i + 1).join("/")
      }))
    );
    return { __sfc: true, props, emit: emit2, actionsOpen, newNodeName, nameInput, validateInput, onSubmit, pathElements, IconFolder, IconHome, IconPlus, NcActions, NcActionInput, NcBreadcrumbs, NcBreadcrumb, t };
  }
});
var _sfc_render$4 = function render11() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c(_setup.NcBreadcrumbs, { staticClass: "file-picker__breadcrumbs", scopedSlots: _vm._u([{ key: "default", fn: function() {
    return [_c(_setup.NcBreadcrumb, { attrs: { "name": _setup.t("All files"), "title": _setup.t("Home") }, on: { "click": function($event) {
      return _setup.emit("update:path", "/");
    } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
      return [_c(_setup.IconHome, { attrs: { "size": 20 } })];
    }, proxy: true }]) }), _vm._l(_setup.pathElements, function(dir) {
      return _c(_setup.NcBreadcrumb, { key: dir.path, attrs: { "name": dir.name, "title": dir.path }, on: { "click": function($event) {
        return _setup.emit("update:path", dir.path);
      } } });
    })];
  }, proxy: true }, _vm.showMenu ? { key: "actions", fn: function() {
    return [_c(_setup.NcActions, { attrs: { "aria-label": _setup.t("Create directory"), "force-menu": true, "force-name": true, "menu-name": _setup.t("New"), "open": _setup.actionsOpen, "type": "secondary" }, on: { "update:open": function($event) {
      _setup.actionsOpen = $event;
    }, "close": function($event) {
      _setup.newNodeName = "";
    } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
      return [_c(_setup.IconPlus, { attrs: { "size": 20 } })];
    }, proxy: true }], null, false, 2971667417) }, [_c(_setup.NcActionInput, { ref: "nameInput", attrs: { "value": _setup.newNodeName, "label": _setup.t("New folder"), "placeholder": _setup.t("New folder name") }, on: { "update:value": function($event) {
      _setup.newNodeName = $event;
    }, "submit": _setup.onSubmit, "input": _setup.validateInput }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
      return [_c(_setup.IconFolder, { attrs: { "size": 20 } })];
    }, proxy: true }], null, false, 1614167509) })], 1)];
  }, proxy: true } : null], null, true) });
};
var _sfc_staticRenderFns$4 = [];
var __component__$4 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  "b357227a"
);
const FilePickerBreadcrumbs = __component__$4.exports;
const _sfc_main$3 = {
  name: "CloseIcon",
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
var _sfc_render$3 = function render12() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon close-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null
);
const IconClose = __component__$3.exports;
const _sfc_main$2 = {
  name: "MagnifyIcon",
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
var _sfc_render$2 = function render13() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon magnify-icon", attrs: { "aria-hidden": _vm.title ? null : true, "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null
);
const IconMagnify = __component__$2.exports;
const useViews = (isAnonymous) => {
  const allViews = [
    {
      id: "files",
      label: t("All files"),
      icon: mdiFolder
    },
    {
      id: "recent",
      label: t("Recent"),
      icon: mdiClock
    },
    {
      id: "favorites",
      label: t("Favorites"),
      icon: mdiStar
    }
  ];
  const availableViews = isAnonymous.value ? allViews.filter(({ id }) => id === "files") : allViews;
  return {
    allViews,
    availableViews
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FilePickerNavigation",
  props: {
    currentView: null,
    filterString: null,
    isCollapsed: { type: Boolean },
    disabledNavigation: { type: Boolean }
  },
  emits: ["update:currentView", "update:filterString"],
  setup(__props, { emit: emit2 }) {
    const props = __props;
    const { availableViews } = useViews(ref$1(getCurrentUser() === null));
    const currentViewObject = computed(() => {
      var _a;
      return (_a = availableViews.filter((v) => v.id === props.currentView)[0]) != null ? _a : availableViews[0];
    });
    const updateFilterValue = (value) => emit2("update:filterString", value);
    return { __sfc: true, props, emit: emit2, availableViews, currentViewObject, updateFilterValue, IconClose, IconMagnify, NcButton, NcIconSvgWrapper, NcSelect, NcTextField, Fragment: fragment, t };
  }
});
var _sfc_render$1 = function render14() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c(_setup.Fragment, [_c(_setup.NcTextField, { staticClass: "file-picker__filter-input", attrs: { "value": _vm.filterString, "label": _setup.t("Filter file list"), "show-trailing-button": !!_vm.filterString }, on: { "update:value": _setup.updateFilterValue, "trailing-button-click": function($event) {
    return _setup.updateFilterValue("");
  } }, scopedSlots: _vm._u([{ key: "trailing-button-icon", fn: function() {
    return [_c(_setup.IconClose, { attrs: { "size": 16 } })];
  }, proxy: true }]) }, [_c(_setup.IconMagnify, { attrs: { "size": 16 } })], 1), _setup.availableViews.length > 1 && !_vm.disabledNavigation ? [!_vm.isCollapsed ? _c("ul", { staticClass: "file-picker__side" }, _vm._l(_setup.availableViews, function(view) {
    return _c("li", { key: view.id }, [_c(_setup.NcButton, { attrs: { "type": _vm.currentView === view.id ? "primary" : "tertiary", "wide": true }, on: { "click": function($event) {
      return _vm.$emit("update:currentView", view.id);
    } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
      return [_c(_setup.NcIconSvgWrapper, { attrs: { "path": view.icon, "size": 20 } })];
    }, proxy: true }], null, true) }, [_vm._v(" " + _vm._s(view.label) + " ")])], 1);
  }), 0) : _c(_setup.NcSelect, { attrs: { "aria-label": _setup.t("Current view selector"), "clearable": false, "searchable": false, "options": _setup.availableViews, "value": _setup.currentViewObject }, on: { "input": (v) => _setup.emit("update:currentView", v.id) } })] : _vm._e()], 2);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  "b42054b8"
);
const FilePickerNavigation = __component__$1.exports;
const useDAVFiles = function(currentView, currentPath) {
  const isPublicEndpoint = isPublicShare();
  const defaultRootPath$1 = isPublicEndpoint ? "/" : defaultRootPath;
  const defaultRemoteUrl = computed(() => {
    if (isPublicEndpoint) {
      return U("webdav").replace("/remote.php", "/public.php");
    }
    return defaultRemoteURL;
  });
  const client = computed(() => {
    if (isPublicEndpoint) {
      const token = document.getElementById("sharingToken").value;
      const authorization = btoa("".concat(token, ":null"));
      return getClient(defaultRemoteUrl.value, {
        Authorization: "Basic ".concat(authorization)
      });
    }
    return getClient();
  });
  const resultToNode$1 = (result) => resultToNode(result, defaultRootPath$1, defaultRemoteUrl.value);
  const getRecentNodes = () => {
    const controller = new AbortController();
    const lastTwoWeek = Math.round(Date.now() / 1e3) - 60 * 60 * 24 * 14;
    return new CancelablePromise(async (resolve, reject, onCancel) => {
      onCancel(() => controller.abort());
      try {
        const { data } = await client.value.search("/", {
          signal: controller.signal,
          details: true,
          data: getRecentSearch(lastTwoWeek)
        });
        const nodes = data.results.map(resultToNode$1);
        resolve(nodes);
      } catch (error) {
        reject(error);
      }
    });
  };
  const getNodes = () => {
    const controller = new AbortController();
    return new CancelablePromise(async (resolve, reject, onCancel) => {
      onCancel(() => controller.abort());
      try {
        const results = await client.value.getDirectoryContents("".concat(defaultRootPath$1).concat(currentPath.value), {
          signal: controller.signal,
          details: true,
          includeSelf: true,
          data: getDefaultPropfind()
        });
        const nodes = results.data.map(resultToNode$1);
        resolve({
          folder: nodes.find((file) => file.path === currentPath.value),
          contents: nodes.filter((file) => file.path !== currentPath.value)
        });
      } catch (error) {
        reject(error);
      }
    });
  };
  const files = shallowRef([]);
  const folder = shallowRef(null);
  const isLoading = ref$1(true);
  const promise = ref$1(null);
  async function createDirectory(name) {
    const path = pathBrowserify.join(currentPath.value, name);
    await client.value.createDirectory(pathBrowserify.join(defaultRootPath$1, path));
    const directory = await getFile(path);
    files.value = [...files.value, directory];
    return directory;
  }
  async function getFile(path, rootPath = void 0) {
    rootPath = rootPath != null ? rootPath : defaultRootPath$1;
    const { data } = await client.value.stat("".concat(rootPath).concat(path), {
      details: true,
      data: getDefaultPropfind()
    });
    return resultToNode$1(data);
  }
  async function loadDAVFiles() {
    if (promise.value) {
      promise.value.cancel();
    }
    isLoading.value = true;
    if (currentView.value === "favorites") {
      promise.value = getFavoriteNodes(client.value, currentPath.value, defaultRootPath$1);
    } else if (currentView.value === "recent") {
      promise.value = getRecentNodes();
    } else {
      promise.value = getNodes();
    }
    const content = await promise.value;
    if ("folder" in content) {
      folder.value = content.folder;
      files.value = content.contents;
    } else {
      folder.value = null;
      files.value = content;
    }
    promise.value = null;
    isLoading.value = false;
  }
  watch([currentView, currentPath], () => loadDAVFiles());
  onMounted(() => loadDAVFiles());
  return {
    isLoading,
    files,
    folder,
    loadFiles: loadDAVFiles,
    createDirectory
  };
};
const useMimeFilter = function(allowedMIMETypes) {
  const splittedTypes = computed(() => allowedMIMETypes.value.map((filter) => filter.split("/")));
  const isSupportedMimeType = (mime) => {
    const mimeTypeArray = mime.split("/");
    return splittedTypes.value.some(
      ([type, subtype]) => (
        // check mime type matches or is wildcard
        (mimeTypeArray[0] === type || type === "*") && (mimeTypeArray[1] === subtype || subtype === "*")
      )
    );
  };
  return {
    isSupportedMimeType
  };
};
const __default__ = {
  name: "FilePicker"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    buttons: null,
    name: null,
    allowPickDirectory: { type: Boolean, default: false },
    disabledNavigation: { type: Boolean, default: false },
    container: { default: "body" },
    filterFn: { default: void 0 },
    mimetypeFilter: { default: () => [] },
    multiselect: { type: Boolean, default: true },
    path: { default: void 0 }
  },
  emits: ["close"],
  setup(__props, { emit: emit$1 }) {
    const props = __props;
    const isOpen = ref$1(true);
    const dialogButtons = computed(() => {
      const nodes = selectedFiles.value.length === 0 && props.allowPickDirectory && currentFolder.value ? [currentFolder.value] : selectedFiles.value;
      const buttons = typeof props.buttons === "function" ? props.buttons(nodes, currentPath.value, currentView.value) : props.buttons;
      return buttons.map((button) => ({
        ...button,
        disabled: button.disabled || isLoading.value,
        callback: () => {
          isHandlingCallback = true;
          handleButtonClick(button.callback, nodes);
        }
      }));
    });
    let isHandlingCallback = false;
    const handleButtonClick = async (callback, nodes) => {
      callback(nodes);
      emit$1("close", nodes);
      isHandlingCallback = false;
    };
    const currentView = ref$1("files");
    const viewHeadline = computed(() => currentView.value === "favorites" ? t("Favorites") : currentView.value === "recent" ? t("Recent") : "");
    const selectedFiles = shallowRef([]);
    const savedPath = ref$1((window == null ? void 0 : window.sessionStorage.getItem("NC.FilePicker.LastPath")) || "/");
    const navigatedPath = ref$1("");
    watch([navigatedPath], () => {
      if (props.path === void 0 && navigatedPath.value) {
        window.sessionStorage.setItem("NC.FilePicker.LastPath", navigatedPath.value);
      }
      selectedFiles.value = [];
    });
    const currentPath = computed({
      get: () => {
        return currentView.value === "files" ? navigatedPath.value || props.path || savedPath.value : "/";
      },
      set: (path) => {
        navigatedPath.value = path;
      }
    });
    const filterString = ref$1("");
    const { isSupportedMimeType } = useMimeFilter(toRef(props, "mimetypeFilter"));
    const {
      files,
      folder: currentFolder,
      isLoading,
      loadFiles,
      createDirectory
    } = useDAVFiles(currentView, currentPath);
    onMounted(() => loadFiles());
    const { showHiddenFiles } = useFilesSettings();
    const filteredFiles = computed(() => {
      let filtered = files.value;
      if (!showHiddenFiles.value) {
        filtered = filtered.filter((file) => !file.basename.startsWith("."));
      }
      if (props.mimetypeFilter.length > 0) {
        filtered = filtered.filter((file) => file.type === "folder" || file.mime && isSupportedMimeType(file.mime));
      }
      if (filterString.value) {
        filtered = filtered.filter((file) => file.basename.toLowerCase().includes(filterString.value.toLowerCase()));
      }
      if (props.filterFn) {
        filtered = filtered.filter((f) => props.filterFn(f));
      }
      return filtered;
    });
    const noFilesDescription = computed(() => {
      if (currentView.value === "files") {
        return t("Upload some content or sync with your devices!");
      } else if (currentView.value === "recent") {
        return t("Files and folders you recently modified will show up here.");
      } else {
        return t("Files and folders you mark as favorite will show up here.");
      }
    });
    const onCreateFolder = async (name) => {
      try {
        const folder = await createDirectory(name);
        navigatedPath.value = folder.path;
        emit("files:node:created", files.value.filter((file) => file.basename === name)[0]);
      } catch (error) {
        console.warn("Could not create new folder", { name, error });
        showError(t("Could not create the new folder"));
      }
    };
    const handleClose = (open) => {
      if (!open && !isHandlingCallback) {
        emit$1("close");
      }
    };
    return { __sfc: true, props, emit: emit$1, isOpen, dialogButtons, isHandlingCallback, handleButtonClick, currentView, viewHeadline, selectedFiles, savedPath, navigatedPath, currentPath, filterString, isSupportedMimeType, files, currentFolder, isLoading, loadFiles, createDirectory, showHiddenFiles, filteredFiles, noFilesDescription, onCreateFolder, handleClose, IconFile, FileList, FilePickerBreadcrumbs, FilePickerNavigation, NcDialog, NcEmptyContent, t };
  }
});
var _sfc_render = function render15() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c(_setup.NcDialog, { attrs: { "container": _vm.container, "buttons": _setup.dialogButtons, "name": _vm.name, "size": "large", "content-classes": "file-picker__content", "dialog-classes": "file-picker", "navigation-classes": "file-picker__navigation", "open": _setup.isOpen }, on: { "update:open": [function($event) {
    _setup.isOpen = $event;
  }, _setup.handleClose] }, scopedSlots: _vm._u([{ key: "navigation", fn: function({ isCollapsed }) {
    return [_c(_setup.FilePickerNavigation, { attrs: { "is-collapsed": isCollapsed, "current-view": _setup.currentView, "filter-string": _setup.filterString, "disabled-navigation": _vm.disabledNavigation }, on: { "update:currentView": function($event) {
      _setup.currentView = $event;
    }, "update:current-view": function($event) {
      _setup.currentView = $event;
    }, "update:filterString": function($event) {
      _setup.filterString = $event;
    }, "update:filter-string": function($event) {
      _setup.filterString = $event;
    } } })];
  } }]) }, [_c("div", { staticClass: "file-picker__main" }, [_setup.currentView === "files" ? _c(_setup.FilePickerBreadcrumbs, { attrs: { "path": _setup.currentPath, "show-menu": _vm.allowPickDirectory }, on: { "update:path": function($event) {
    _setup.currentPath = $event;
  }, "create-node": _setup.onCreateFolder } }) : _c("div", { staticClass: "file-picker__view" }, [_c("h3", [_vm._v(_vm._s(_setup.viewHeadline))])]), _setup.isLoading || _setup.filteredFiles.length > 0 ? _c(_setup.FileList, { attrs: { "allow-pick-directory": _vm.allowPickDirectory, "current-view": _setup.currentView, "files": _setup.filteredFiles, "multiselect": _vm.multiselect, "loading": _setup.isLoading, "path": _setup.currentPath, "selected-files": _setup.selectedFiles, "name": _setup.viewHeadline }, on: { "update:path": [function($event) {
    _setup.currentPath = $event;
  }, function($event) {
    _setup.currentView = "files";
  }], "update:selectedFiles": function($event) {
    _setup.selectedFiles = $event;
  }, "update:selected-files": function($event) {
    _setup.selectedFiles = $event;
  } } }) : _setup.filterString ? _c(_setup.NcEmptyContent, { attrs: { "name": _setup.t("No matching files"), "description": _setup.t("No files matching your filter were found.") }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c(_setup.IconFile)];
  }, proxy: true }]) }) : _c(_setup.NcEmptyContent, { attrs: { "name": _setup.t("No files in here"), "description": _setup.noFilesDescription }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c(_setup.IconFile)];
  }, proxy: true }]) })], 1)]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent$1(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "20b719ba"
);
const FilePicker = __component__.exports;
export {
  FilePicker as default
};
//# sourceMappingURL=FilePicker-ajWx2Snh-BeV0Qr8g.chunk.mjs.map
