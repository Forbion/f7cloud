/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/files/src/actions/deleteAction.ts":
/*!************************************************!*\
  !*** ./apps/files/src/actions/deleteAction.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! p-queue */ "./node_modules/p-queue/dist/index.js");
/* harmony import */ var _mdi_svg_svg_close_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/close.svg?raw */ "./node_modules/@mdi/svg/svg/close.svg?raw");
/* harmony import */ var _mdi_svg_svg_network_off_svg_raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/svg/svg/network-off.svg?raw */ "./node_modules/@mdi/svg/svg/network-off.svg?raw");
/* harmony import */ var _mdi_svg_svg_trash_can_svg_raw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdi/svg/svg/trash-can.svg?raw */ "./node_modules/@mdi/svg/svg/trash-can.svg?raw");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../logger.ts */ "./apps/files/src/logger.ts");
/* harmony import */ var _deleteUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deleteUtils */ "./apps/files/src/actions/deleteUtils.ts");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */









const queue = new p_queue__WEBPACK_IMPORTED_MODULE_3__["default"]({
  concurrency: 5
});
const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileAction({
  id: 'delete',
  displayName: _deleteUtils__WEBPACK_IMPORTED_MODULE_8__.displayName,
  iconSvgInline: nodes => {
    if ((0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.canUnshareOnly)(nodes)) {
      return _mdi_svg_svg_close_svg_raw__WEBPACK_IMPORTED_MODULE_4__;
    }
    if ((0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.canDisconnectOnly)(nodes)) {
      return _mdi_svg_svg_network_off_svg_raw__WEBPACK_IMPORTED_MODULE_5__;
    }
    return _mdi_svg_svg_trash_can_svg_raw__WEBPACK_IMPORTED_MODULE_6__;
  },
  enabled(nodes) {
    return nodes.length > 0 && nodes.map(node => node.permissions).every(permission => (permission & _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.DELETE) !== 0);
  },
  async exec(node, view) {
    try {
      let confirm = true;
      // If trashbin is disabled, we need to ask for confirmation
      if (!(0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.isTrashbinEnabled)()) {
        confirm = await (0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.askConfirmation)([node], view);
      }
      // If the user cancels the deletion, we don't want to do anything
      if (confirm === false) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showInfo)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Deletion cancelled'));
        return null;
      }
      await (0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.deleteNode)(node);
      return true;
    } catch (error) {
      _logger_ts__WEBPACK_IMPORTED_MODULE_7__["default"].error('Error while deleting a file', {
        error,
        source: node.source,
        node
      });
      return false;
    }
  },
  async execBatch(nodes, view) {
    let confirm = true;
    // If trashbin is disabled, we need to ask for confirmation
    if (!(0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.isTrashbinEnabled)()) {
      confirm = await (0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.askConfirmation)(nodes, view);
    } else if (nodes.length >= 5 && !(0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.canUnshareOnly)(nodes) && !(0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.canDisconnectOnly)(nodes)) {
      confirm = await (0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.askConfirmation)(nodes, view);
    }
    // If the user cancels the deletion, we don't want to do anything
    if (confirm === false) {
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showInfo)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Deletion cancelled'));
      return Promise.all(nodes.map(() => null));
    }
    // Map each node to a promise that resolves with the result of exec(node)
    const promises = nodes.map(node => {
      // Create a promise that resolves with the result of exec(node)
      const promise = new Promise(resolve => {
        queue.add(async () => {
          try {
            await (0,_deleteUtils__WEBPACK_IMPORTED_MODULE_8__.deleteNode)(node);
            resolve(true);
          } catch (error) {
            _logger_ts__WEBPACK_IMPORTED_MODULE_7__["default"].error('Error while deleting a file', {
              error,
              source: node.source,
              node
            });
            resolve(false);
          }
        });
      });
      return promise;
    });
    return Promise.all(promises);
  },
  order: 100
});

/***/ }),

/***/ "./apps/files/src/actions/deleteUtils.ts":
/*!***********************************************!*\
  !*** ./apps/files/src/actions/deleteUtils.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   askConfirmation: () => (/* binding */ askConfirmation),
/* harmony export */   canDisconnectOnly: () => (/* binding */ canDisconnectOnly),
/* harmony export */   canUnshareOnly: () => (/* binding */ canUnshareOnly),
/* harmony export */   deleteNode: () => (/* binding */ deleteNode),
/* harmony export */   displayName: () => (/* binding */ displayName),
/* harmony export */   isAllFiles: () => (/* binding */ isAllFiles),
/* harmony export */   isAllFolders: () => (/* binding */ isAllFolders),
/* harmony export */   isMixedUnshareAndDelete: () => (/* binding */ isMixedUnshareAndDelete),
/* harmony export */   isTrashbinEnabled: () => (/* binding */ isTrashbinEnabled)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/capabilities */ "./node_modules/@nextcloud/capabilities/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");





const isTrashbinEnabled = () => (0,_nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_2__.getCapabilities)()?.files?.undelete === true;
const canUnshareOnly = nodes => {
  return nodes.every(node => node.attributes['is-mount-root'] === true && node.attributes['mount-type'] === 'shared');
};
const canDisconnectOnly = nodes => {
  return nodes.every(node => node.attributes['is-mount-root'] === true && node.attributes['mount-type'] === 'external');
};
const isMixedUnshareAndDelete = nodes => {
  if (nodes.length === 1) {
    return false;
  }
  const hasSharedItems = nodes.some(node => canUnshareOnly([node]));
  const hasDeleteItems = nodes.some(node => !canUnshareOnly([node]));
  return hasSharedItems && hasDeleteItems;
};
const isAllFiles = nodes => {
  return !nodes.some(node => node.type !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.FileType.File);
};
const isAllFolders = nodes => {
  return !nodes.some(node => node.type !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.FileType.Folder);
};
const displayName = (nodes, view) => {
  /**
   * If those nodes are all the root node of a
   * share, we can only unshare them.
   */
  if (canUnshareOnly(nodes)) {
    if (nodes.length === 1) {
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Leave this share');
    }
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Leave these shares');
  }
  /**
   * If those nodes are all the root node of an
   * external storage, we can only disconnect it.
   */
  if (canDisconnectOnly(nodes)) {
    if (nodes.length === 1) {
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Disconnect storage');
    }
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Disconnect storages');
  }
  /**
   * If we're in the trashbin, we can only delete permanently
   */
  if (view.id === 'trashbin' || !isTrashbinEnabled()) {
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Delete permanently');
  }
  /**
   * If we're in the sharing view, we can only unshare
   */
  if (isMixedUnshareAndDelete(nodes)) {
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Delete and unshare');
  }
  /**
   * If we're only selecting files, use proper wording
   */
  if (isAllFiles(nodes)) {
    if (nodes.length === 1) {
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Delete file');
    }
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Delete files');
  }
  /**
   * If we're only selecting folders, use proper wording
   */
  if (isAllFolders(nodes)) {
    if (nodes.length === 1) {
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Delete folder');
    }
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Delete folders');
  }
  return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Delete');
};
const askConfirmation = async (nodes, view) => {
  const message = view.id === 'trashbin' || !isTrashbinEnabled() ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.n)('files', 'You are about to permanently delete {count} item', 'You are about to permanently delete {count} items', nodes.length, {
    count: nodes.length
  }) : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.n)('files', 'You are about to delete {count} item', 'You are about to delete {count} items', nodes.length, {
    count: nodes.length
  });
  return new Promise(resolve => {
    // TODO: Use the new dialog API
    window.OC.dialogs.confirmDestructive(message, (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Confirm deletion'), {
      type: window.OC.dialogs.YES_NO_BUTTONS,
      confirm: displayName(nodes, view),
      confirmClasses: 'error',
      cancel: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.t)('files', 'Cancel')
    }, decision => {
      resolve(decision);
    });
  });
};
const deleteNode = async node => {
  await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].delete(node.encodedSource);
  // Let's delete even if it's moved to the trashbin
  // since it has been removed from the current view
  // and changing the view will trigger a reload anyway.
  (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:node:deleted', node);
};

/***/ }),

/***/ "./apps/files/src/actions/downloadAction.ts":
/*!**************************************************!*\
  !*** ./apps/files/src/actions/downloadAction.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_arrow_down_svg_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/svg/svg/arrow-down.svg?raw */ "./node_modules/@mdi/svg/svg/arrow-down.svg?raw");




const triggerDownload = function (url) {
  const hiddenElement = document.createElement('a');
  hiddenElement.download = '';
  hiddenElement.href = url;
  hiddenElement.click();
};
/**
 * Find the longest common path prefix of both input paths
 * @param first The first path
 * @param second The second path
 */
function longestCommonPath(first, second) {
  const firstSegments = first.split('/').filter(Boolean);
  const secondSegments = second.split('/').filter(Boolean);
  let base = '/';
  for (const [index, segment] of firstSegments.entries()) {
    if (index >= second.length) {
      break;
    }
    if (segment !== secondSegments[index]) {
      break;
    }
    const sep = base === '/' ? '' : '/';
    base = `${base}${sep}${segment}`;
  }
  return base;
}
/**
 * Handle downloading multiple nodes
 * @param nodes The nodes to download
 */
function downloadNodes(nodes) {
  // Remove nodes that are already included in parent folders
  // Example: Download A/foo.txt and A will only return A as A/foo.txt is already included
  const filteredNodes = nodes.filter(node => {
    const parent = nodes.find(other => other.type === _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileType.Folder && node.path.startsWith(`${other.path}/`));
    return parent === undefined;
  });
  let base = filteredNodes[0].dirname;
  for (const node of filteredNodes.slice(1)) {
    base = longestCommonPath(base, node.dirname);
  }
  base = base || '/';
  // Remove the common prefix
  const filenames = filteredNodes.map(node => node.path.slice(base === '/' ? 1 : base.length + 1));
  const secret = Math.random().toString(36).substring(2);
  const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateUrl)('/apps/files/ajax/download.php?dir={base}&files={files}&downloadStartSecret={secret}', {
    base,
    secret,
    files: JSON.stringify(filenames)
  });
  triggerDownload(url);
}
const isDownloadable = function (node) {
  if ((node.permissions & _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.READ) === 0) {
    return false;
  }
  // If the mount type is a share, ensure it got download permissions.
  if (node.attributes['mount-type'] === 'shared') {
    const shareAttributes = JSON.parse(node.attributes['share-attributes'] ?? '[]');
    const downloadAttribute = shareAttributes?.find?.(attribute => attribute.scope === 'permissions' && attribute.key === 'download');
    if (downloadAttribute !== undefined && downloadAttribute.value === false) {
      return false;
    }
  }
  return true;
};
const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileAction({
  id: 'download',
  default: _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.DefaultType.DEFAULT,
  displayName: () => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Download'),
  iconSvgInline: () => _mdi_svg_svg_arrow_down_svg_raw__WEBPACK_IMPORTED_MODULE_3__,
  enabled(nodes) {
    if (nodes.length === 0) {
      return false;
    }
    // We can download direct dav files. But if we have
    // some folders, we need to use the /apps/files/ajax/download.php
    // endpoint, which only supports user root folder.
    if (nodes.some(node => node.type === _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileType.Folder) && nodes.some(node => !node.root?.startsWith('/files'))) {
      return false;
    }
    return nodes.every(isDownloadable);
  },
  async exec(node) {
    if (node.type === _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileType.Folder) {
      downloadNodes([node]);
      return null;
    }
    triggerDownload(node.encodedSource);
    return null;
  },
  async execBatch(nodes, view, dir) {
    if (nodes.length === 1) {
      this.exec(nodes[0], view, dir);
      return [null];
    }
    downloadNodes(nodes);
    return new Array(nodes.length).fill(null);
  },
  order: 30
});

/***/ }),

/***/ "./apps/files/src/actions/editLocallyAction.ts":
/*!*****************************************************!*\
  !*** ./apps/files/src/actions/editLocallyAction.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_web_svg_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mdi/svg/svg/web.svg?raw */ "./node_modules/@mdi/svg/svg/web.svg?raw");
/* harmony import */ var _mdi_svg_svg_laptop_svg_raw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mdi/svg/svg/laptop.svg?raw */ "./node_modules/@mdi/svg/svg/laptop.svg?raw");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */









const confirmLocalEditDialog = function () {
  let localEditCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};
  let callbackCalled = false;
  return new _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.DialogBuilder().setName((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('files', 'Edit file locally')).setText((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('files', 'The file should now open on your device. If it doesn\'t, please check that you have the desktop app installed.')).setButtons([{
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('files', 'Retry and close'),
    type: 'secondary',
    callback: () => {
      callbackCalled = true;
      localEditCallback(true);
    }
  }, {
    label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('files', 'Edit online'),
    icon: _mdi_svg_svg_web_svg_raw__WEBPACK_IMPORTED_MODULE_7__,
    type: 'primary',
    callback: () => {
      callbackCalled = true;
      localEditCallback(false);
    }
  }]).build().show().then(() => {
    // Ensure the callback is called even if the dialog is dismissed in other ways
    if (!callbackCalled) {
      localEditCallback(false);
    }
  });
};
const attemptOpenLocalClient = async path => {
  openLocalClient(path);
  confirmLocalEditDialog(openLocally => {
    if (!openLocally) {
      window.OCA.Viewer.open({
        path
      });
      return;
    }
    openLocalClient(path);
  });
};
const openLocalClient = async function (path) {
  const link = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateOcsUrl)('apps/files/api/v1') + '/openlocaleditor?format=json';
  try {
    const result = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__["default"].post(link, {
      path
    });
    const uid = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()?.uid;
    let url = `nc://open/${uid}@` + window.location.host + (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_0__.encodePath)(path);
    url += '?token=' + result.data.ocs.data.token;
    window.location.href = url;
  } catch (error) {
    (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('files', 'Failed to redirect to client'));
  }
};
const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.FileAction({
  id: 'edit-locally',
  displayName: () => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('files', 'Edit locally'),
  iconSvgInline: () => _mdi_svg_svg_laptop_svg_raw__WEBPACK_IMPORTED_MODULE_8__,
  // Only works on single files
  enabled(nodes) {
    // Only works on single node
    if (nodes.length !== 1) {
      return false;
    }
    return (nodes[0].permissions & _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.Permission.UPDATE) !== 0;
  },
  async exec(node) {
    attemptOpenLocalClient(node.path);
    return null;
  },
  order: 25
});

/***/ }),

/***/ "./apps/files/src/actions/favoriteAction.ts":
/*!**************************************************!*\
  !*** ./apps/files/src/actions/favoriteAction.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action),
/* harmony export */   favoriteNode: () => (/* binding */ favoriteNode)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! p-queue */ "./node_modules/p-queue/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _mdi_svg_svg_star_outline_svg_raw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdi/svg/svg/star-outline.svg?raw */ "./node_modules/@mdi/svg/svg/star-outline.svg?raw");
/* harmony import */ var _mdi_svg_svg_star_svg_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mdi/svg/svg/star.svg?raw */ "./node_modules/@mdi/svg/svg/star.svg?raw");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logger.ts */ "./apps/files/src/logger.ts");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */











const queue = new p_queue__WEBPACK_IMPORTED_MODULE_5__["default"]({
  concurrency: 5
});
// If any of the nodes is not favorited, we display the favorite action.
const shouldFavorite = nodes => {
  return nodes.some(node => node.attributes.favorite !== 1);
};
const favoriteNode = async (node, view, willFavorite) => {
  try {
    // TODO: migrate to webdav tags plugin
    const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/files/api/v1/files') + (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_9__.encodePath)(node.path);
    await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post(url, {
      tags: willFavorite ? [window.OC.TAG_FAVORITE] : []
    });
    // Let's delete if we are in the favourites view
    // AND if it is removed from the user favorites
    // AND it's in the root of the favorites view
    if (view.id === 'favorites' && !willFavorite && node.dirname === '/') {
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:node:deleted', node);
    }
    // Update the node webdav attribute
    vue__WEBPACK_IMPORTED_MODULE_10__["default"].set(node.attributes, 'favorite', willFavorite ? 1 : 0);
    // Dispatch event to whoever is interested
    if (willFavorite) {
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:favorites:added', node);
    } else {
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:favorites:removed', node);
    }
    return true;
  } catch (error) {
    const action = willFavorite ? 'adding a file to favourites' : 'removing a file from favourites';
    _logger_ts__WEBPACK_IMPORTED_MODULE_8__["default"].error('Error while ' + action, {
      error,
      source: node.source,
      node
    });
    return false;
  }
};
const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_2__.FileAction({
  id: 'favorite',
  displayName(nodes) {
    return shouldFavorite(nodes) ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('files', 'Add to favorites') : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('files', 'Remove from favorites');
  },
  iconSvgInline: nodes => {
    return shouldFavorite(nodes) ? _mdi_svg_svg_star_outline_svg_raw__WEBPACK_IMPORTED_MODULE_6__ : _mdi_svg_svg_star_svg_raw__WEBPACK_IMPORTED_MODULE_7__;
  },
  enabled(nodes) {
    // We can only favorite nodes within files and with permissions
    return !nodes.some(node => !node.root?.startsWith?.('/files')) && nodes.every(node => node.permissions !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_2__.Permission.NONE);
  },
  async exec(node, view) {
    const willFavorite = shouldFavorite([node]);
    return await favoriteNode(node, view, willFavorite);
  },
  async execBatch(nodes, view) {
    const willFavorite = shouldFavorite(nodes);
    // Map each node to a promise that resolves with the result of exec(node)
    const promises = nodes.map(node => {
      // Create a promise that resolves with the result of exec(node)
      const promise = new Promise(resolve => {
        queue.add(async () => {
          try {
            await favoriteNode(node, view, willFavorite);
            resolve(true);
          } catch (error) {
            _logger_ts__WEBPACK_IMPORTED_MODULE_8__["default"].error('Error while adding file to favorite', {
              error,
              source: node.source,
              node
            });
            resolve(false);
          }
        });
      });
      return promise;
    });
    return Promise.all(promises);
  },
  order: -50
});

/***/ }),

/***/ "./apps/files/src/actions/moveOrCopyAction.ts":
/*!****************************************************!*\
  !*** ./apps/files/src/actions/moveOrCopyAction.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action),
/* harmony export */   handleCopyMoveNodeTo: () => (/* binding */ handleCopyMoveNodeTo)
/* harmony export */ });
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/upload */ "./node_modules/@nextcloud/upload/dist/index.mjs");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _mdi_svg_svg_folder_multiple_svg_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mdi/svg/svg/folder-multiple.svg?raw */ "./node_modules/@mdi/svg/svg/folder-multiple.svg?raw");
/* harmony import */ var _mdi_svg_svg_folder_move_svg_raw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mdi/svg/svg/folder-move.svg?raw */ "./node_modules/@mdi/svg/svg/folder-move.svg?raw");
/* harmony import */ var _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./moveOrCopyActionUtils */ "./apps/files/src/actions/moveOrCopyActionUtils.ts");
/* harmony import */ var _services_Files__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/Files */ "./apps/files/src/services/Files.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../logger */ "./apps/files/src/logger.ts");













/**
 * Return the action that is possible for the given nodes
 * @param {Node[]} nodes The nodes to check against
 * @return {MoveCopyAction} The action that is possible for the given nodes
 */
const getActionForNodes = nodes => {
  if ((0,_moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.canMove)(nodes)) {
    if ((0,_moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.canCopy)(nodes)) {
      return _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE_OR_COPY;
    }
    return _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE;
  }
  // Assuming we can copy as the enabled checks for copy permissions
  return _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.COPY;
};
/**
 * Create a loading notification toast
 * @param mode The move or copy mode
 * @param source Name of the node that is copied / moved
 * @param destination Destination path
 * @return {() => void} Function to hide the notification
 */
function createLoadingNotification(mode, source, destination) {
  const text = mode === _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Moving "{source}" to "{destination}" …', {
    source,
    destination
  }) : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Copying "{source}" to "{destination}" …', {
    source,
    destination
  });
  let toast;
  toast = (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showInfo)(`<span class="icon icon-loading-small toast-loading-icon"></span> ${text}`, {
    isHTML: true,
    timeout: _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.TOAST_PERMANENT_TIMEOUT,
    onRemove: () => {
      toast?.hideToast();
      toast = undefined;
    }
  });
  return () => toast && toast.hideToast();
}
/**
 * Handle the copy/move of a node to a destination
 * This can be imported and used by other scripts/components on server
 * @param {Node} node The node to copy/move
 * @param {Folder} destination The destination to copy/move the node to
 * @param {MoveCopyAction} method The method to use for the copy/move
 * @param {boolean} overwrite Whether to overwrite the destination if it exists
 * @return {Promise<void>} A promise that resolves when the copy/move is done
 */
const handleCopyMoveNodeTo = async function (node, destination, method) {
  let overwrite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!destination) {
    return;
  }
  if (destination.type !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.FileType.Folder) {
    throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Destination is not a folder'));
  }
  // Do not allow to MOVE a node to the same folder it is already located
  if (method === _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE && node.dirname === destination.path) {
    throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'This file/folder is already in that directory'));
  }
  /**
   * Example:
   * - node: /foo/bar/file.txt -> path = /foo/bar/file.txt, destination: /foo
   *   Allow move of /foo does not start with /foo/bar/file.txt so allow
   * - node: /foo , destination: /foo/bar
   *   Do not allow as it would copy foo within itself
   * - node: /foo/bar.txt, destination: /foo
   *   Allow copy a file to the same directory
   * - node: "/foo/bar", destination: "/foo/bar 1"
   *   Allow to move or copy but we need to check with trailing / otherwise it would report false positive
   */
  if (`${destination.path}/`.startsWith(`${node.path}/`)) {
    throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'You cannot move a file/folder onto itself or into a subfolder of itself'));
  }
  // Set loading state
  vue__WEBPACK_IMPORTED_MODULE_12__["default"].set(node, 'status', _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.NodeStatus.LOADING);
  const actionFinished = createLoadingNotification(method, node.basename, destination.path);
  const queue = (0,_moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.getQueue)();
  return await queue.add(async () => {
    const copySuffix = index => {
      if (index === 1) {
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', '(copy)'); // TRANSLATORS: Mark a file as a copy of another file
      }
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', '(copy %n)', undefined, index); // TRANSLATORS: Meaning it is the n'th copy of a file
    };
    try {
      const client = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.davGetClient)();
      const currentPath = (0,path__WEBPACK_IMPORTED_MODULE_6__.join)(_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.davRootPath, node.path);
      const destinationPath = (0,path__WEBPACK_IMPORTED_MODULE_6__.join)(_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.davRootPath, destination.path);
      if (method === _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.COPY) {
        let target = node.basename;
        // If we do not allow overwriting then find an unique name
        if (!overwrite) {
          const otherNodes = await client.getDirectoryContents(destinationPath);
          target = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.getUniqueName)(node.basename, otherNodes.map(n => n.basename), {
            suffix: copySuffix,
            ignoreFileExtension: node.type === _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.FileType.Folder
          });
        }
        await client.copyFile(currentPath, (0,path__WEBPACK_IMPORTED_MODULE_6__.join)(destinationPath, target));
        // If the node is copied into current directory the view needs to be updated
        if (node.dirname === destination.path) {
          const {
            data
          } = await client.stat((0,path__WEBPACK_IMPORTED_MODULE_6__.join)(destinationPath, target), {
            details: true,
            data: (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.davGetDefaultPropfind)()
          });
          (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__.emit)('files:node:created', (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.davResultToNode)(data));
        }
      } else {
        // show conflict file popup if we do not allow overwriting
        if (!overwrite) {
          const otherNodes = await (0,_services_Files__WEBPACK_IMPORTED_MODULE_10__.getContents)(destination.path);
          if ((0,_nextcloud_upload__WEBPACK_IMPORTED_MODULE_5__.hasConflict)([node], otherNodes.contents)) {
            try {
              // Let the user choose what to do with the conflicting files
              const {
                selected,
                renamed
              } = await (0,_nextcloud_upload__WEBPACK_IMPORTED_MODULE_5__.openConflictPicker)(destination.path, [node], otherNodes.contents);
              // two empty arrays: either only old files or conflict skipped -> no action required
              if (!selected.length && !renamed.length) {
                return;
              }
            } catch (error) {
              // User cancelled
              (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Move cancelled'));
              return;
            }
          }
        }
        // getting here means either no conflict, file was renamed to keep both files
        // in a conflict, or the selected file was chosen to be kept during the conflict
        try {
          await client.moveFile(currentPath, (0,path__WEBPACK_IMPORTED_MODULE_6__.join)(destinationPath, node.basename));
        } catch (error) {
          const parser = new DOMParser();
          const text = await error.response?.text();
          const message = parser.parseFromString(text ?? '', 'text/xml').querySelector('message')?.textContent;
          if (message) {
            (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(message);
          }
          throw error;
        }
        // Delete the node as it will be fetched again
        // when navigating to the destination folder
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_2__.emit)('files:node:deleted', node);
      }
    } catch (error) {
      if ((0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_0__.isAxiosError)(error)) {
        if (error.response?.status === 412) {
          throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'A file or folder with that name already exists in this folder'));
        } else if (error.response?.status === 423) {
          throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'The files are locked'));
        } else if (error.response?.status === 404) {
          throw new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'The file does not exist anymore'));
        } else if (error.message) {
          throw new Error(error.message);
        }
      }
      _logger__WEBPACK_IMPORTED_MODULE_11__["default"].debug(error);
      throw new Error();
    } finally {
      vue__WEBPACK_IMPORTED_MODULE_12__["default"].set(node, 'status', '');
      actionFinished();
    }
  });
};
/**
 * Open a file picker for the given action
 * @param action The action to open the file picker for
 * @param dir The directory to start the file picker in
 * @param nodes The nodes to move/copy
 * @return The picked destination or false if cancelled by user
 */
async function openFilePickerForAction(action) {
  let dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  let nodes = arguments.length > 2 ? arguments[2] : undefined;
  const {
    resolve,
    reject,
    promise
  } = Promise.withResolvers();
  const fileIDs = nodes.map(node => node.fileid).filter(Boolean);
  const filePicker = (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.getFilePickerBuilder)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Choose destination')).allowDirectories(true).setFilter(n => {
    // We don't want to show the current nodes in the file picker
    return !fileIDs.includes(n.fileid);
  }).setMimeTypeFilter([]).setMultiSelect(false).startAt(dir).setButtonFactory((selection, path) => {
    const buttons = [];
    const target = (0,path__WEBPACK_IMPORTED_MODULE_6__.basename)(path);
    const dirnames = nodes.map(node => node.dirname);
    const paths = nodes.map(node => node.path);
    if (action === _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.COPY || action === _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE_OR_COPY) {
      buttons.push({
        label: target ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Copy to {target}', {
          target
        }, undefined, {
          escape: false,
          sanitize: false
        }) : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Copy'),
        type: 'primary',
        icon: _mdi_svg_svg_folder_multiple_svg_raw__WEBPACK_IMPORTED_MODULE_7__,
        disabled: selection.some(node => (node.permissions & _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.Permission.CREATE) === 0),
        async callback(destination) {
          resolve({
            destination: destination[0],
            action: _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.COPY
          });
        }
      });
    }
    // Invalid MOVE targets (but valid copy targets)
    if (dirnames.includes(path)) {
      // This file/folder is already in that directory
      return buttons;
    }
    if (paths.includes(path)) {
      // You cannot move a file/folder onto itself
      return buttons;
    }
    if (selection.some(node => (node.permissions & _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.Permission.CREATE) === 0)) {
      // Missing 'CREATE' permissions for selected destination
      return buttons;
    }
    if (action === _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE || action === _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE_OR_COPY) {
      buttons.push({
        label: target ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Move to {target}', {
          target
        }, undefined, {
          escape: false,
          sanitize: false
        }) : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Move'),
        type: action === _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE ? 'primary' : 'secondary',
        icon: _mdi_svg_svg_folder_move_svg_raw__WEBPACK_IMPORTED_MODULE_8__,
        async callback(destination) {
          resolve({
            destination: destination[0],
            action: _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE
          });
        }
      });
    }
    return buttons;
  }).build();
  filePicker.pick().catch(error => {
    _logger__WEBPACK_IMPORTED_MODULE_11__["default"].debug(error);
    if (error instanceof _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.FilePickerClosed) {
      resolve(false);
    } else {
      reject(new Error((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Move or copy operation failed')));
    }
  });
  return promise;
}
const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.FileAction({
  id: 'move-copy',
  displayName(nodes) {
    switch (getActionForNodes(nodes)) {
      case _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE:
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Move');
      case _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.COPY:
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Copy');
      case _moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.MoveCopyAction.MOVE_OR_COPY:
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Move or copy');
    }
  },
  iconSvgInline: () => _mdi_svg_svg_folder_move_svg_raw__WEBPACK_IMPORTED_MODULE_8__,
  enabled(nodes) {
    // We only support moving/copying files within the user folder
    if (!nodes.every(node => node.root?.startsWith('/files/'))) {
      return false;
    }
    return nodes.length > 0 && ((0,_moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.canMove)(nodes) || (0,_moveOrCopyActionUtils__WEBPACK_IMPORTED_MODULE_9__.canCopy)(nodes));
  },
  async exec(node, view, dir) {
    const action = getActionForNodes([node]);
    let result;
    try {
      result = await openFilePickerForAction(action, dir, [node]);
    } catch (e) {
      _logger__WEBPACK_IMPORTED_MODULE_11__["default"].error(e);
      return false;
    }
    if (result === false) {
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showInfo)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Cancelled move or copy of "{filename}".', {
        filename: node.displayname
      }));
      return null;
    }
    try {
      await handleCopyMoveNodeTo(node, result.destination, result.action);
      return true;
    } catch (error) {
      if (error instanceof Error && !!error.message) {
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)(error.message);
        // Silent action as we handle the toast
        return null;
      }
      return false;
    }
  },
  async execBatch(nodes, view, dir) {
    const action = getActionForNodes(nodes);
    const result = await openFilePickerForAction(action, dir, nodes);
    // Handle cancellation silently
    if (result === false) {
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showInfo)(nodes.length === 1 ? (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Cancelled move or copy of "{filename}".', {
        filename: nodes[0].displayname
      }) : (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Cancelled move or copy operation'));
      return nodes.map(() => null);
    }
    const promises = nodes.map(async node => {
      try {
        await handleCopyMoveNodeTo(node, result.destination, result.action);
        return true;
      } catch (error) {
        _logger__WEBPACK_IMPORTED_MODULE_11__["default"].error(`Failed to ${result.action} node`, {
          node,
          error
        });
        return false;
      }
    });
    // We need to keep the selection on error!
    // So we do not return null, and for batch action
    // we let the front handle the error.
    return await Promise.all(promises);
  },
  order: 15
});

/***/ }),

/***/ "./apps/files/src/actions/moveOrCopyActionUtils.ts":
/*!*********************************************************!*\
  !*** ./apps/files/src/actions/moveOrCopyActionUtils.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoveCopyAction: () => (/* binding */ MoveCopyAction),
/* harmony export */   canCopy: () => (/* binding */ canCopy),
/* harmony export */   canDownload: () => (/* binding */ canDownload),
/* harmony export */   canMove: () => (/* binding */ canMove),
/* harmony export */   getQueue: () => (/* binding */ getQueue)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-queue */ "./node_modules/p-queue/dist/index.js");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


// This is the processing queue. We only want to allow 3 concurrent requests
let queue;
// Maximum number of concurrent operations
const MAX_CONCURRENCY = 5;
/**
 * Get the processing queue
 */
const getQueue = () => {
  if (!queue) {
    queue = new p_queue__WEBPACK_IMPORTED_MODULE_1__["default"]({
      concurrency: MAX_CONCURRENCY
    });
  }
  return queue;
};
var MoveCopyAction;
(function (MoveCopyAction) {
  MoveCopyAction["MOVE"] = "Move";
  MoveCopyAction["COPY"] = "Copy";
  MoveCopyAction["MOVE_OR_COPY"] = "move-or-copy";
})(MoveCopyAction || (MoveCopyAction = {}));
const canMove = nodes => {
  const minPermission = nodes.reduce((min, node) => Math.min(min, node.permissions), _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.ALL);
  return Boolean(minPermission & _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.DELETE);
};
const canDownload = nodes => {
  return nodes.every(node => {
    const shareAttributes = JSON.parse(node.attributes?.['share-attributes'] ?? '[]');
    return !shareAttributes.some(attribute => attribute.scope === 'permissions' && attribute.value === false && attribute.key === 'download');
  });
};
const canCopy = nodes => {
  // a shared file cannot be copied if the download is disabled
  // it can be copied if the user has at least read permissions
  return canDownload(nodes) && !nodes.some(node => node.permissions === _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.NONE);
};

/***/ }),

/***/ "./apps/files/src/actions/openFolderAction.ts":
/*!****************************************************!*\
  !*** ./apps/files/src/actions/openFolderAction.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/svg/svg/folder.svg?raw */ "./node_modules/@mdi/svg/svg/folder.svg?raw");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileAction({
  id: 'open-folder',
  displayName(files) {
    // Only works on single node
    const displayName = files[0].displayname;
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'Open folder {displayName}', {
      displayName
    });
  },
  iconSvgInline: () => _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_2__,
  enabled(nodes) {
    // Only works on single node
    if (nodes.length !== 1) {
      return false;
    }
    const node = nodes[0];
    if (!node.isDavRessource) {
      return false;
    }
    return node.type === _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileType.Folder && (node.permissions & _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.READ) !== 0;
  },
  async exec(node, view) {
    if (!node || node.type !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileType.Folder) {
      return false;
    }
    window.OCP.Files.Router.goToRoute(null, {
      view: view.id,
      fileid: String(node.fileid)
    }, {
      dir: node.path
    });
    return null;
  },
  // Main action if enabled, meaning folders only
  default: _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.DefaultType.HIDDEN,
  order: -100
});

/***/ }),

/***/ "./apps/files/src/actions/openInFilesAction.ts":
/*!*****************************************************!*\
  !*** ./apps/files/src/actions/openInFilesAction.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 * TODO: Move away from a redirect and handle
 * navigation straight out of the recent view
 */
const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.FileAction({
  id: 'open-in-files-recent',
  displayName: () => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files', 'Open in Files'),
  iconSvgInline: () => '',
  enabled: (nodes, view) => view.id === 'recent',
  async exec(node) {
    let dir = node.dirname;
    if (node.type === _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.FileType.Folder) {
      dir = dir + '/' + node.basename;
    }
    window.OCP.Files.Router.goToRoute(null,
    // use default route
    {
      view: 'files',
      fileid: String(node.fileid)
    }, {
      dir,
      openfile: 'true'
    });
    return null;
  },
  // Before openFolderAction
  order: -1000,
  default: _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.DefaultType.HIDDEN
});

/***/ }),

/***/ "./apps/files/src/actions/renameAction.ts":
/*!************************************************!*\
  !*** ./apps/files/src/actions/renameAction.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_DETAILS: () => (/* binding */ ACTION_DETAILS),
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_pencil_svg_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/svg/svg/pencil.svg?raw */ "./node_modules/@mdi/svg/svg/pencil.svg?raw");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




const ACTION_DETAILS = 'details';
const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.FileAction({
  id: 'rename',
  displayName: () => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Rename'),
  iconSvgInline: () => _mdi_svg_svg_pencil_svg_raw__WEBPACK_IMPORTED_MODULE_3__,
  enabled: nodes => {
    return nodes.length > 0 && nodes.map(node => node.permissions).every(permission => Boolean(permission & _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.Permission.DELETE));
  },
  async exec(node) {
    // Renaming is a built-in feature of the files app
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:node:rename', node);
    return null;
  },
  order: 10
});

/***/ }),

/***/ "./apps/files/src/actions/sidebarAction.ts":
/*!*************************************************!*\
  !*** ./apps/files/src/actions/sidebarAction.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_DETAILS: () => (/* binding */ ACTION_DETAILS),
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_information_variant_svg_raw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/svg/svg/information-variant.svg?raw */ "./node_modules/@mdi/svg/svg/information-variant.svg?raw");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.ts */ "./apps/files/src/logger.ts");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




const ACTION_DETAILS = 'details';
const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileAction({
  id: ACTION_DETAILS,
  displayName: () => (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'Open details'),
  iconSvgInline: () => _mdi_svg_svg_information_variant_svg_raw__WEBPACK_IMPORTED_MODULE_2__,
  // Sidebar currently supports user folder only, /files/USER
  enabled: nodes => {
    // Only works on single node
    if (nodes.length !== 1) {
      return false;
    }
    if (!nodes[0]) {
      return false;
    }
    // Only work if the sidebar is available
    if (!window?.OCA?.Files?.Sidebar) {
      return false;
    }
    return (nodes[0].root?.startsWith('/files/') && nodes[0].permissions !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.NONE) ?? false;
  },
  async exec(node, view, dir) {
    try {
      // Open sidebar and set active tab to sharing by default
      window.OCA.Files.Sidebar.setActiveTab('sharing');
      // TODO: migrate Sidebar to use a Node instead
      await window.OCA.Files.Sidebar.open(node.path);
      // Silently update current fileid
      window.OCP.Files.Router.goToRoute(null, {
        view: view.id,
        fileid: String(node.fileid)
      }, {
        ...window.OCP.Files.Router.query,
        dir
      }, true);
      return null;
    } catch (error) {
      _logger_ts__WEBPACK_IMPORTED_MODULE_3__["default"].error('Error while opening sidebar', {
        error
      });
      return false;
    }
  },
  order: -50
});

/***/ }),

/***/ "./apps/files/src/actions/viewInFolderAction.ts":
/*!******************************************************!*\
  !*** ./apps/files/src/actions/viewInFolderAction.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   action: () => (/* binding */ action)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_folder_move_svg_raw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/svg/svg/folder-move.svg?raw */ "./node_modules/@mdi/svg/svg/folder-move.svg?raw");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



const action = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileAction({
  id: 'view-in-folder',
  displayName() {
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'View in folder');
  },
  iconSvgInline: () => _mdi_svg_svg_folder_move_svg_raw__WEBPACK_IMPORTED_MODULE_2__,
  enabled(nodes, view) {
    // Only works outside of the main files view
    if (view.id === 'files') {
      return false;
    }
    // Only works on single node
    if (nodes.length !== 1) {
      return false;
    }
    const node = nodes[0];
    if (!node.isDavRessource) {
      return false;
    }
    // Can only view files that are in the user root folder
    if (!node.root?.startsWith('/files')) {
      return false;
    }
    if (node.permissions === _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.NONE) {
      return false;
    }
    return node.type === _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileType.File;
  },
  async exec(node) {
    if (!node || node.type !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileType.File) {
      return false;
    }
    window.OCP.Files.Router.goToRoute(null, {
      view: 'files',
      fileid: String(node.fileid)
    }, {
      dir: node.dirname
    });
    return null;
  },
  order: 80
});

/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilter.vue":
/*!*********************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilter.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileListFilter_vue_vue_type_template_id_5c291778_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileListFilter.vue?vue&type=template&id=5c291778&scoped=true */ "./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=template&id=5c291778&scoped=true");
/* harmony import */ var _FileListFilter_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileListFilter.vue?vue&type=script&setup=true&lang=ts */ "./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _FileListFilter_vue_vue_type_style_index_0_id_5c291778_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css */ "./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileListFilter_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileListFilter_vue_vue_type_template_id_5c291778_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FileListFilter_vue_vue_type_template_id_5c291778_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5c291778",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "apps/files/src/components/FileListFilter/FileListFilter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilter.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=script&setup=true&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css":
/*!*****************************************************************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_style_index_0_id_5c291778_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css");


/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=template&id=5c291778&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=template&id=5c291778&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_template_id_5c291778_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_template_id_5c291778_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_template_id_5c291778_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilter.vue?vue&type=template&id=5c291778&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=template&id=5c291778&scoped=true");


/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilterModified.vue":
/*!*****************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilterModified.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileListFilterModified_vue_vue_type_template_id_f47dfc3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileListFilterModified.vue?vue&type=template&id=f47dfc3e&scoped=true */ "./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=template&id=f47dfc3e&scoped=true");
/* harmony import */ var _FileListFilterModified_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileListFilterModified.vue?vue&type=script&lang=ts */ "./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=script&lang=ts");
/* harmony import */ var _FileListFilterModified_vue_vue_type_style_index_0_id_f47dfc3e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss */ "./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileListFilterModified_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileListFilterModified_vue_vue_type_template_id_f47dfc3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _FileListFilterModified_vue_vue_type_template_id_f47dfc3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f47dfc3e",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "apps/files/src/components/FileListFilter/FileListFilterModified.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilterModified.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss":
/*!**************************************************************************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_style_index_0_id_f47dfc3e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss");


/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=template&id=f47dfc3e&scoped=true":
/*!***********************************************************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=template&id=f47dfc3e&scoped=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_template_id_f47dfc3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_template_id_f47dfc3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_template_id_f47dfc3e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilterModified.vue?vue&type=template&id=f47dfc3e&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=template&id=f47dfc3e&scoped=true");


/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilterType.vue":
/*!*************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilterType.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileListFilterType_vue_vue_type_template_id_6c0e6dd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileListFilterType.vue?vue&type=template&id=6c0e6dd2 */ "./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=template&id=6c0e6dd2");
/* harmony import */ var _FileListFilterType_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileListFilterType.vue?vue&type=script&lang=ts */ "./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=script&lang=ts");
/* harmony import */ var _FileListFilterType_vue_vue_type_style_index_0_id_6c0e6dd2_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css */ "./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileListFilterType_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileListFilterType_vue_vue_type_template_id_6c0e6dd2__WEBPACK_IMPORTED_MODULE_0__.render,
  _FileListFilterType_vue_vue_type_template_id_6c0e6dd2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "apps/files/src/components/FileListFilter/FileListFilterType.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilterType.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=script&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_style_index_0_id_6c0e6dd2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css");


/***/ }),

/***/ "./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=template&id=6c0e6dd2":
/*!*******************************************************************************************************!*\
  !*** ./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=template&id=6c0e6dd2 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_template_id_6c0e6dd2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_template_id_6c0e6dd2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_template_id_6c0e6dd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilterType.vue?vue&type=template&id=6c0e6dd2 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=template&id=6c0e6dd2");


/***/ }),

/***/ "./apps/files/src/components/NewNodeDialog.vue":
/*!*****************************************************!*\
  !*** ./apps/files/src/components/NewNodeDialog.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewNodeDialog_vue_vue_type_template_id_e6b9c05a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewNodeDialog.vue?vue&type=template&id=e6b9c05a&scoped=true */ "./apps/files/src/components/NewNodeDialog.vue?vue&type=template&id=e6b9c05a&scoped=true");
/* harmony import */ var _NewNodeDialog_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewNodeDialog.vue?vue&type=script&setup=true&lang=ts */ "./apps/files/src/components/NewNodeDialog.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _NewNodeDialog_vue_vue_type_style_index_0_id_e6b9c05a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css */ "./apps/files/src/components/NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewNodeDialog_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewNodeDialog_vue_vue_type_template_id_e6b9c05a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _NewNodeDialog_vue_vue_type_template_id_e6b9c05a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e6b9c05a",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "apps/files/src/components/NewNodeDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files/src/components/NewNodeDialog.vue?vue&type=script&setup=true&lang=ts":
/*!****************************************************************************************!*\
  !*** ./apps/files/src/components/NewNodeDialog.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewNodeDialog.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=script&setup=true&lang=ts");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_4_use_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files/src/components/NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./apps/files/src/components/NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_style_index_0_id_e6b9c05a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css");


/***/ }),

/***/ "./apps/files/src/components/NewNodeDialog.vue?vue&type=template&id=e6b9c05a&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./apps/files/src/components/NewNodeDialog.vue?vue&type=template&id=e6b9c05a&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_template_id_e6b9c05a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_template_id_e6b9c05a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_template_id_e6b9c05a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewNodeDialog.vue?vue&type=template&id=e6b9c05a&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=template&id=e6b9c05a&scoped=true");


/***/ }),

/***/ "./apps/files/src/filters/HiddenFilesFilter.ts":
/*!*****************************************************!*\
  !*** ./apps/files/src/filters/HiddenFilesFilter.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerHiddenFilesFilter: () => (/* binding */ registerHiddenFilesFilter)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */



class HiddenFilesFilter extends _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileListFilter {
  constructor() {
    super('files:hidden', 0);
    _defineProperty(this, "showHidden", void 0);
    this.showHidden = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('files', 'config', {
      show_hidden: false
    }).show_hidden;
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.subscribe)('files:config:updated', _ref => {
      let {
        key,
        value
      } = _ref;
      if (key === 'show_hidden') {
        this.showHidden = Boolean(value);
        this.filterUpdated();
      }
    });
  }
  filter(nodes) {
    if (this.showHidden) {
      return nodes;
    }
    return nodes.filter(node => node.attributes.hidden !== true && !node.basename.startsWith('.'));
  }
}
/**
 * Register a file list filter to only show hidden files if enabled by user config
 */
function registerHiddenFilesFilter() {
  (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileListFilter)(new HiddenFilesFilter());
}

/***/ }),

/***/ "./apps/files/src/filters/ModifiedFilter.ts":
/*!**************************************************!*\
  !*** ./apps/files/src/filters/ModifiedFilter.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerModifiedFilter: () => (/* binding */ registerModifiedFilter)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_FileListFilter_FileListFilterModified_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FileListFilter/FileListFilterModified.vue */ "./apps/files/src/components/FileListFilter/FileListFilterModified.vue");
/* harmony import */ var _mdi_svg_svg_calendar_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/calendar.svg?raw */ "./node_modules/@mdi/svg/svg/calendar.svg?raw");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






const startOfToday = () => new Date().setHours(0, 0, 0, 0);
/**
 * Available presets
 */
const timePresets = [{
  id: 'today',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t)('files', 'Today'),
  filter: time => time > startOfToday()
}, {
  id: 'last-7',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t)('files', 'Last 7 days'),
  filter: time => time > startOfToday() - 7 * 24 * 60 * 60 * 1000
}, {
  id: 'last-30',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t)('files', 'Last 30 days'),
  filter: time => time > startOfToday() - 30 * 24 * 60 * 60 * 1000
}, {
  id: 'this-year',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t)('files', 'This year ({year})', {
    year: new Date().getFullYear()
  }),
  filter: time => time > new Date(startOfToday()).setMonth(0, 1)
}, {
  id: 'last-year',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.t)('files', 'Last year ({year})', {
    year: new Date().getFullYear() - 1
  }),
  filter: time => time > new Date(startOfToday()).setFullYear(new Date().getFullYear() - 1, 0, 1) && time < new Date(startOfToday()).setMonth(0, 1)
}];
class ModifiedFilter extends _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.FileListFilter {
  constructor() {
    super('files:modified', 50);
    _defineProperty(this, "currentInstance", void 0);
    _defineProperty(this, "currentPreset", void 0);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('files:navigation:changed', () => this.setPreset());
  }
  mount(el) {
    if (this.currentInstance) {
      this.currentInstance.$destroy();
    }
    const View = vue__WEBPACK_IMPORTED_MODULE_5__["default"].extend(_components_FileListFilter_FileListFilterModified_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.currentInstance = new View({
      propsData: {
        timePresets
      },
      el
    }).$on('update:preset', this.setPreset.bind(this)).$mount();
  }
  filter(nodes) {
    if (!this.currentPreset) {
      return nodes;
    }
    return nodes.filter(node => node.mtime === undefined || this.currentPreset.filter(node.mtime.getTime()));
  }
  setPreset(preset) {
    this.currentPreset = preset;
    this.filterUpdated();
    const chips = [];
    if (preset) {
      chips.push({
        icon: _mdi_svg_svg_calendar_svg_raw__WEBPACK_IMPORTED_MODULE_4__,
        text: preset.label,
        onclick: () => this.setPreset()
      });
    } else {
      this.currentInstance?.resetFilter();
    }
    this.updateChips(chips);
  }
}
/**
 * Register the file list filter by modification date
 */
function registerModifiedFilter() {
  (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.registerFileListFilter)(new ModifiedFilter());
}

/***/ }),

/***/ "./apps/files/src/filters/TypeFilter.ts":
/*!**********************************************!*\
  !*** ./apps/files/src/filters/TypeFilter.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerTypeFilter: () => (/* binding */ registerTypeFilter)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_FileListFilter_FileListFilterType_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FileListFilter/FileListFilterType.vue */ "./apps/files/src/components/FileListFilter/FileListFilterType.vue");
/* harmony import */ var _mdi_svg_svg_file_document_svg_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/svg/svg/file-document.svg?raw */ "./node_modules/@mdi/svg/svg/file-document.svg?raw");
/* harmony import */ var _mdi_svg_svg_file_table_box_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/file-table-box.svg?raw */ "./node_modules/@mdi/svg/svg/file-table-box.svg?raw");
/* harmony import */ var _mdi_svg_svg_file_presentation_box_svg_raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/svg/svg/file-presentation-box.svg?raw */ "./node_modules/@mdi/svg/svg/file-presentation-box.svg?raw");
/* harmony import */ var _mdi_svg_svg_file_pdf_box_svg_raw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdi/svg/svg/file-pdf-box.svg?raw */ "./node_modules/@mdi/svg/svg/file-pdf-box.svg?raw");
/* harmony import */ var _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mdi/svg/svg/folder.svg?raw */ "./node_modules/@mdi/svg/svg/folder.svg?raw");
/* harmony import */ var _mdi_svg_svg_music_svg_raw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mdi/svg/svg/music.svg?raw */ "./node_modules/@mdi/svg/svg/music.svg?raw");
/* harmony import */ var _mdi_svg_svg_image_svg_raw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mdi/svg/svg/image.svg?raw */ "./node_modules/@mdi/svg/svg/image.svg?raw");
/* harmony import */ var _mdi_svg_svg_movie_svg_raw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mdi/svg/svg/movie.svg?raw */ "./node_modules/@mdi/svg/svg/movie.svg?raw");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




// TODO: Create a modern replacement for OC.MimeType...








const colorize = (svg, color) => {
  return svg.replace('<path ', `<path fill="${color}" `);
};
/**
 * Available presets
 */
const getTypePresets = async () => [{
  id: 'document',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Documents'),
  icon: colorize(_mdi_svg_svg_file_document_svg_raw__WEBPACK_IMPORTED_MODULE_3__, '#49abea'),
  mime: ['x-office/document']
}, {
  id: 'spreadsheet',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Spreadsheets'),
  icon: colorize(_mdi_svg_svg_file_table_box_svg_raw__WEBPACK_IMPORTED_MODULE_4__, '#9abd4e'),
  mime: ['x-office/spreadsheet']
}, {
  id: 'presentation',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Presentations'),
  icon: colorize(_mdi_svg_svg_file_presentation_box_svg_raw__WEBPACK_IMPORTED_MODULE_5__, '#f0965f'),
  mime: ['x-office/presentation']
}, {
  id: 'pdf',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'PDFs'),
  icon: colorize(_mdi_svg_svg_file_pdf_box_svg_raw__WEBPACK_IMPORTED_MODULE_6__, '#dc5047'),
  mime: ['application/pdf']
}, {
  id: 'folder',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Folders'),
  icon: colorize(_mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_7__, window.getComputedStyle(document.body).getPropertyValue('--color-primary-element')),
  mime: ['httpd/unix-directory']
}, {
  id: 'audio',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Audio'),
  icon: _mdi_svg_svg_music_svg_raw__WEBPACK_IMPORTED_MODULE_8__,
  mime: ['audio']
}, {
  id: 'image',
  // TRANSLATORS: This is for filtering files, e.g. PNG or JPEG, so photos, drawings, or images in general
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Photos and images'),
  icon: _mdi_svg_svg_image_svg_raw__WEBPACK_IMPORTED_MODULE_9__,
  mime: ['image']
}, {
  id: 'video',
  label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Videos'),
  icon: _mdi_svg_svg_movie_svg_raw__WEBPACK_IMPORTED_MODULE_10__,
  mime: ['video']
}];
class TypeFilter extends _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.FileListFilter {
  constructor() {
    super('files:type', 10);
    _defineProperty(this, "currentInstance", void 0);
    _defineProperty(this, "currentPresets", void 0);
    _defineProperty(this, "allPresets", void 0);
    this.currentPresets = [];
  }
  async mount(el) {
    // We need to defer this as on init script this is not available:
    if (this.allPresets === undefined) {
      this.allPresets = await getTypePresets();
    }
    // Already mounted
    if (this.currentInstance) {
      this.currentInstance.$destroy();
      delete this.currentInstance;
    }
    const View = vue__WEBPACK_IMPORTED_MODULE_11__["default"].extend(_components_FileListFilter_FileListFilterType_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
    this.currentInstance = new View({
      propsData: {
        presets: this.currentPresets,
        typePresets: this.allPresets
      },
      el
    }).$on('update:presets', this.setPresets.bind(this)).$mount();
  }
  filter(nodes) {
    if (!this.currentPresets || this.currentPresets.length === 0) {
      return nodes;
    }
    const mimeList = this.currentPresets.reduce((previous, current) => [...previous, ...current.mime], []);
    return nodes.filter(node => {
      if (!node.mime) {
        return false;
      }
      const mime = node.mime.toLowerCase();
      if (mimeList.includes(mime)) {
        return true;
      } else if (mimeList.includes(window.OC.MimeTypeList.aliases[mime])) {
        return true;
      } else if (mimeList.includes(mime.split('/')[0])) {
        return true;
      }
      return false;
    });
  }
  setPresets(presets) {
    this.currentPresets = presets ?? [];
    this.currentInstance.$props.presets = presets;
    this.filterUpdated();
    const chips = [];
    if (presets && presets.length > 0) {
      for (const preset of presets) {
        chips.push({
          icon: preset.icon,
          text: preset.label,
          onclick: () => this.removeFilterPreset(preset.id)
        });
      }
    } else {
      this.currentInstance?.resetFilter();
    }
    this.updateChips(chips);
  }
  /**
   * Helper callback that removed a preset from selected.
   * This is used when clicking on "remove" on a filter-chip.
   * @param presetId Id of preset to remove
   */
  removeFilterPreset(presetId) {
    const filtered = this.currentPresets.filter(_ref => {
      let {
        id
      } = _ref;
      return id !== presetId;
    });
    this.setPresets(filtered);
  }
}
/**
 * Register the file list filter by file type
 */
function registerTypeFilter() {
  (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileListFilter)(new TypeFilter());
}

/***/ }),

/***/ "./apps/files/src/init.ts":
/*!********************************!*\
  !*** ./apps/files/src/init.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _actions_deleteAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/deleteAction */ "./apps/files/src/actions/deleteAction.ts");
/* harmony import */ var _actions_downloadAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/downloadAction */ "./apps/files/src/actions/downloadAction.ts");
/* harmony import */ var _actions_editLocallyAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/editLocallyAction */ "./apps/files/src/actions/editLocallyAction.ts");
/* harmony import */ var _actions_favoriteAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/favoriteAction */ "./apps/files/src/actions/favoriteAction.ts");
/* harmony import */ var _actions_moveOrCopyAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/moveOrCopyAction */ "./apps/files/src/actions/moveOrCopyAction.ts");
/* harmony import */ var _actions_openFolderAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/openFolderAction */ "./apps/files/src/actions/openFolderAction.ts");
/* harmony import */ var _actions_openInFilesAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/openInFilesAction */ "./apps/files/src/actions/openInFilesAction.ts");
/* harmony import */ var _actions_renameAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actions/renameAction */ "./apps/files/src/actions/renameAction.ts");
/* harmony import */ var _actions_sidebarAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/sidebarAction */ "./apps/files/src/actions/sidebarAction.ts");
/* harmony import */ var _actions_viewInFolderAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/viewInFolderAction */ "./apps/files/src/actions/viewInFolderAction.ts");
/* harmony import */ var _filters_HiddenFilesFilter_ts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filters/HiddenFilesFilter.ts */ "./apps/files/src/filters/HiddenFilesFilter.ts");
/* harmony import */ var _filters_TypeFilter_ts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/TypeFilter.ts */ "./apps/files/src/filters/TypeFilter.ts");
/* harmony import */ var _filters_ModifiedFilter_ts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filters/ModifiedFilter.ts */ "./apps/files/src/filters/ModifiedFilter.ts");
/* harmony import */ var _newMenu_newFolder_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./newMenu/newFolder.ts */ "./apps/files/src/newMenu/newFolder.ts");
/* harmony import */ var _newMenu_newTemplatesFolder_ts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./newMenu/newTemplatesFolder.ts */ "./apps/files/src/newMenu/newTemplatesFolder.ts");
/* harmony import */ var _newMenu_newFromTemplate_ts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./newMenu/newFromTemplate.ts */ "./apps/files/src/newMenu/newFromTemplate.ts");
/* harmony import */ var _views_favorites_ts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/favorites.ts */ "./apps/files/src/views/favorites.ts");
/* harmony import */ var _views_recent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/recent */ "./apps/files/src/views/recent.ts");
/* harmony import */ var _views_personal_files__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/personal-files */ "./apps/files/src/views/personal-files.ts");
/* harmony import */ var _views_files__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/files */ "./apps/files/src/views/files.ts");
/* harmony import */ var _views_folderTree_ts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/folderTree.ts */ "./apps/files/src/views/folderTree.ts");
/* harmony import */ var _services_ServiceWorker_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/ServiceWorker.js */ "./apps/files/src/services/ServiceWorker.js");
/* harmony import */ var _services_LivePhotos__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/LivePhotos */ "./apps/files/src/services/LivePhotos.ts");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
























// Register file actions
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(_actions_deleteAction__WEBPACK_IMPORTED_MODULE_1__.action);
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(_actions_downloadAction__WEBPACK_IMPORTED_MODULE_2__.action);
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(_actions_editLocallyAction__WEBPACK_IMPORTED_MODULE_3__.action);
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(_actions_favoriteAction__WEBPACK_IMPORTED_MODULE_4__.action);
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(_actions_moveOrCopyAction__WEBPACK_IMPORTED_MODULE_5__.action);
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(_actions_openFolderAction__WEBPACK_IMPORTED_MODULE_6__.action);
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(_actions_openInFilesAction__WEBPACK_IMPORTED_MODULE_7__.action);
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(_actions_renameAction__WEBPACK_IMPORTED_MODULE_8__.action);
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(_actions_sidebarAction__WEBPACK_IMPORTED_MODULE_9__.action);
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerFileAction)(_actions_viewInFolderAction__WEBPACK_IMPORTED_MODULE_10__.action);
// Register new menu entry
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.addNewFileMenuEntry)(_newMenu_newFolder_ts__WEBPACK_IMPORTED_MODULE_14__.entry);
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.addNewFileMenuEntry)(_newMenu_newTemplatesFolder_ts__WEBPACK_IMPORTED_MODULE_15__.entry);
(0,_newMenu_newFromTemplate_ts__WEBPACK_IMPORTED_MODULE_16__.registerTemplateEntries)();
// Register files views
(0,_views_favorites_ts__WEBPACK_IMPORTED_MODULE_17__.registerFavoritesView)();
(0,_views_files__WEBPACK_IMPORTED_MODULE_20__["default"])();
(0,_views_recent__WEBPACK_IMPORTED_MODULE_18__["default"])();
(0,_views_personal_files__WEBPACK_IMPORTED_MODULE_19__["default"])();
(0,_views_folderTree_ts__WEBPACK_IMPORTED_MODULE_21__.registerFolderTreeView)();
// Register file list filters
(0,_filters_HiddenFilesFilter_ts__WEBPACK_IMPORTED_MODULE_11__.registerHiddenFilesFilter)();
(0,_filters_TypeFilter_ts__WEBPACK_IMPORTED_MODULE_12__.registerTypeFilter)();
(0,_filters_ModifiedFilter_ts__WEBPACK_IMPORTED_MODULE_13__.registerModifiedFilter)();
// Register preview service worker
(0,_services_ServiceWorker_js__WEBPACK_IMPORTED_MODULE_22__["default"])();
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerDavProperty)('nc:hidden', {
  nc: 'http://nextcloud.org/ns'
});
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerDavProperty)('nc:is-mount-root', {
  nc: 'http://nextcloud.org/ns'
});
(0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerDavProperty)('nc:is-federated', {
  nc: 'http://nextcloud.org/ns'
});
(0,_services_LivePhotos__WEBPACK_IMPORTED_MODULE_23__.initLivePhotos)();

/***/ }),

/***/ "./apps/files/src/logger.ts":
/*!**********************************!*\
  !*** ./apps/files/src/logger.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('files').detectUser().build());

/***/ }),

/***/ "./apps/files/src/newMenu/newFolder.ts":
/*!*********************************************!*\
  !*** ./apps/files/src/newMenu/newFolder.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   entry: () => (/* binding */ entry)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_folder_plus_svg_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mdi/svg/svg/folder-plus.svg?raw */ "./node_modules/@mdi/svg/svg/folder-plus.svg?raw");
/* harmony import */ var _utils_newNodeDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/newNodeDialog */ "./apps/files/src/utils/newNodeDialog.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../logger */ "./apps/files/src/logger.ts");










const createNewFolder = async (root, name) => {
  const source = root.source + '/' + name;
  const encodedSource = root.encodedSource + '/' + encodeURIComponent(name);
  const response = await (0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_6__["default"])({
    method: 'MKCOL',
    url: encodedSource,
    headers: {
      Overwrite: 'F'
    }
  });
  return {
    fileid: parseInt(response.headers['oc-fileid']),
    source
  };
};
const entry = {
  id: 'newFolder',
  displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('files', 'New folder'),
  enabled: context => (context.permissions & _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.Permission.CREATE) !== 0,
  iconSvgInline: _mdi_svg_svg_folder_plus_svg_raw__WEBPACK_IMPORTED_MODULE_7__,
  order: 0,
  async handler(context, content) {
    const name = await (0,_utils_newNodeDialog__WEBPACK_IMPORTED_MODULE_8__.newNodeName)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('files', 'New folder'), content);
    if (name === null) {
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.showInfo)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('files', 'New folder creation cancelled'));
      return;
    }
    try {
      const {
        fileid,
        source
      } = await createNewFolder(context, name.trim());
      // Create the folder in the store
      const folder = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.Folder({
        source,
        id: fileid,
        mtime: new Date(),
        owner: context.owner,
        permissions: _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.Permission.ALL,
        root: context?.root || '/files/' + (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()?.uid,
        // Include mount-type from parent folder as this is inherited
        attributes: {
          'mount-type': context.attributes?.['mount-type'],
          'owner-id': context.attributes?.['owner-id'],
          'owner-display-name': context.attributes?.['owner-display-name']
        }
      });
      // Show success
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.emit)('files:node:created', folder);
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.showSuccess)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.translate)('files', 'Created new folder "{name}"', {
        name: (0,path__WEBPACK_IMPORTED_MODULE_0__.basename)(source)
      }));
      _logger__WEBPACK_IMPORTED_MODULE_9__["default"].debug('Created new folder', {
        folder,
        source
      });
      // Navigate to the new folder
      window.OCP.Files.Router.goToRoute(null,
      // use default route
      {
        view: 'files',
        fileid: String(fileid)
      }, {
        dir: context.path
      });
    } catch (error) {
      _logger__WEBPACK_IMPORTED_MODULE_9__["default"].error('Creating new folder failed', {
        error
      });
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_4__.showError)('Creating new folder failed');
    }
  }
};

/***/ }),

/***/ "./apps/files/src/newMenu/newFromTemplate.ts":
/*!***************************************************!*\
  !*** ./apps/files/src/newMenu/newFromTemplate.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerTemplateEntries: () => (/* binding */ registerTemplateEntries)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var _utils_newNodeDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/newNodeDialog */ "./apps/files/src/utils/newNodeDialog.ts");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */





// async to reduce bundle size
const TemplatePickerVue = (0,vue__WEBPACK_IMPORTED_MODULE_4__.defineAsyncComponent)(() => Promise.all(/*! import() */[__webpack_require__.e("core-common"), __webpack_require__.e("apps_files_src_views_TemplatePicker_vue-data_image_svg_xml_3c_21--_20-_20SPDX-FileCopyrightTe-15ea2e")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/TemplatePicker.vue */ "./apps/files/src/views/TemplatePicker.vue")));
let TemplatePicker = null;
const getTemplatePicker = async context => {
  if (TemplatePicker === null) {
    // Create document root
    const mountingPoint = document.createElement('div');
    mountingPoint.id = 'template-picker';
    document.body.appendChild(mountingPoint);
    // Init vue app
    TemplatePicker = new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
      render: h => h(TemplatePickerVue, {
        ref: 'picker',
        props: {
          parent: context
        }
      }),
      methods: {
        open() {
          this.$refs.picker.open(...arguments);
        }
      },
      el: mountingPoint
    });
  }
  return TemplatePicker;
};
/**
 * Register all new-file-menu entries for all template providers
 */
function registerTemplateEntries() {
  const templates = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('files', 'templates', []);
  // Init template files menu
  templates.forEach((provider, index) => {
    (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.addNewFileMenuEntry)({
      id: `template-new-${provider.app}-${index}`,
      displayName: provider.label,
      iconClass: provider.iconClass || 'icon-file',
      iconSvgInline: provider.iconSvgInline,
      enabled(context) {
        return (context.permissions & _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.Permission.CREATE) !== 0;
      },
      order: 11,
      async handler(context, content) {
        const templatePicker = getTemplatePicker(context);
        const name = await (0,_utils_newNodeDialog__WEBPACK_IMPORTED_MODULE_2__.newNodeName)(`${provider.label}${provider.extension}`, content, {
          label: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate)('files', 'Filename'),
          name: provider.label
        });
        if (name !== null) {
          // Create the file
          const picker = await templatePicker;
          picker.open(name.trim(), provider);
        }
      }
    });
  });
}

/***/ }),

/***/ "./apps/files/src/newMenu/newTemplatesFolder.ts":
/*!******************************************************!*\
  !*** ./apps/files/src/newMenu/newTemplatesFolder.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   entry: () => (/* binding */ entry)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_newNodeDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/newNodeDialog */ "./apps/files/src/utils/newNodeDialog.ts");
/* harmony import */ var _mdi_svg_svg_plus_svg_raw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mdi/svg/svg/plus.svg?raw */ "./node_modules/@mdi/svg/svg/plus.svg?raw");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../logger.ts */ "./apps/files/src/logger.ts");











let templatesPath = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_3__.loadState)('files', 'templates_path', false);
_logger_ts__WEBPACK_IMPORTED_MODULE_10__["default"].debug('Initial templates folder', {
  templatesPath
});
/**
 * Init template folder
 * @param directory Folder where to create the templates folder
 * @param name Name to use or the templates folder
 */
const initTemplatesFolder = async function (directory, name) {
  const templatePath = (0,path__WEBPACK_IMPORTED_MODULE_6__.join)(directory.path, name);
  try {
    _logger_ts__WEBPACK_IMPORTED_MODULE_10__["default"].debug('Initializing the templates directory', {
      templatePath
    });
    const {
      data
    } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_9__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_5__.generateOcsUrl)('apps/files/api/v1/templates/path'), {
      templatePath,
      copySystemTemplates: true
    });
    // Go to template directory
    window.OCP.Files.Router.goToRoute(null,
    // use default route
    {
      view: 'files',
      fileid: undefined
    }, {
      dir: templatePath
    });
    _logger_ts__WEBPACK_IMPORTED_MODULE_10__["default"].info('Created new templates folder', {
      ...data.ocs.data
    });
    templatesPath = data.ocs.data.templates_path;
  } catch (error) {
    _logger_ts__WEBPACK_IMPORTED_MODULE_10__["default"].error('Unable to initialize the templates directory');
    (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_1__.showError)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Unable to initialize the templates directory'));
  }
};
const entry = {
  id: 'template-picker',
  displayName: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Create templates folder'),
  iconSvgInline: _mdi_svg_svg_plus_svg_raw__WEBPACK_IMPORTED_MODULE_8__,
  order: 30,
  enabled(context) {
    // Templates folder already initialized
    if (templatesPath) {
      return false;
    }
    // Allow creation on your own folders only
    if (context.owner !== (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()?.uid) {
      return false;
    }
    return (context.permissions & _nextcloud_files__WEBPACK_IMPORTED_MODULE_2__.Permission.CREATE) !== 0;
  },
  async handler(context, content) {
    const name = await (0,_utils_newNodeDialog__WEBPACK_IMPORTED_MODULE_7__.newNodeName)((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'Templates'), content, {
      name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_4__.translate)('files', 'New template folder')
    });
    if (name !== null) {
      // Create the template folder
      initTemplatesFolder(context, name);
      // Remove the menu entry
      (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_2__.removeNewFileMenuEntry)('template-picker');
    }
  }
};

/***/ }),

/***/ "./apps/files/src/services/Favorites.ts":
/*!**********************************************!*\
  !*** ./apps/files/src/services/Favorites.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContents: () => (/* binding */ getContents)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cancelable-promise */ "./node_modules/cancelable-promise/umd/CancelablePromise.js");
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cancelable_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Files_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Files.ts */ "./apps/files/src/services/Files.ts");
/* harmony import */ var _WebdavClient_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebdavClient.ts */ "./apps/files/src/services/WebdavClient.ts");





const getContents = function () {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  // We only filter root files for favorites, for subfolders we can simply reuse the files contents
  if (path !== '/') {
    return (0,_Files_ts__WEBPACK_IMPORTED_MODULE_3__.getContents)(path);
  }
  return new cancelable_promise__WEBPACK_IMPORTED_MODULE_2__.CancelablePromise((resolve, reject, cancel) => {
    const promise = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.getFavoriteNodes)(_WebdavClient_ts__WEBPACK_IMPORTED_MODULE_4__.client).catch(reject).then(contents => {
      if (!contents) {
        reject();
        return;
      }
      resolve({
        contents,
        folder: new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.Folder({
          id: 0,
          source: `${_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davRemoteURL}${_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davRootPath}`,
          root: _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davRootPath,
          owner: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()?.uid || null,
          permissions: _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.Permission.READ
        })
      });
    });
    cancel(() => promise.cancel());
  });
};

/***/ }),

/***/ "./apps/files/src/services/Files.ts":
/*!******************************************!*\
  !*** ./apps/files/src/services/Files.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContents: () => (/* binding */ getContents),
/* harmony export */   resultToNode: () => (/* binding */ resultToNode)
/* harmony export */ });
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cancelable-promise */ "./node_modules/cancelable-promise/umd/CancelablePromise.js");
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cancelable_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _WebdavClient_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebdavClient.ts */ "./apps/files/src/services/WebdavClient.ts");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.ts */ "./apps/files/src/logger.ts");




/**
 * Slim wrapper over `@nextcloud/files` `davResultToNode` to allow using the function with `Array.map`
 * @param node The node returned by the webdav library
 */
const resultToNode = node => (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davResultToNode)(node);
const getContents = function () {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  const controller = new AbortController();
  const propfindPayload = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davGetDefaultPropfind)();
  path = `${_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davRootPath}${path}`;
  return new cancelable_promise__WEBPACK_IMPORTED_MODULE_0__.CancelablePromise(async (resolve, reject, onCancel) => {
    onCancel(() => controller.abort());
    try {
      const contentsResponse = await _WebdavClient_ts__WEBPACK_IMPORTED_MODULE_2__.client.getDirectoryContents(path, {
        details: true,
        data: propfindPayload,
        includeSelf: true,
        signal: controller.signal
      });
      const root = contentsResponse.data[0];
      const contents = contentsResponse.data.slice(1);
      if (root.filename !== path && `${root.filename}/` !== path) {
        _logger_ts__WEBPACK_IMPORTED_MODULE_3__["default"].debug(`Exepected "${path}" but got filename "${root.filename}" instead.`);
        throw new Error('Root node does not match requested path');
      }
      resolve({
        folder: resultToNode(root),
        contents: contents.map(result => {
          try {
            return resultToNode(result);
          } catch (error) {
            _logger_ts__WEBPACK_IMPORTED_MODULE_3__["default"].error(`Invalid node detected '${result.basename}'`, {
              error
            });
            return null;
          }
        }).filter(Boolean)
      });
    } catch (error) {
      reject(error);
    }
  });
};

/***/ }),

/***/ "./apps/files/src/services/FolderTree.ts":
/*!***********************************************!*\
  !*** ./apps/files/src/services/FolderTree.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeSource: () => (/* binding */ encodeSource),
/* harmony export */   folderTreeId: () => (/* binding */ folderTreeId),
/* harmony export */   getContents: () => (/* binding */ getContents),
/* harmony export */   getFolderTreeNodes: () => (/* binding */ getFolderTreeNodes),
/* harmony export */   getSourceParent: () => (/* binding */ getSourceParent),
/* harmony export */   sourceRoot: () => (/* binding */ sourceRoot)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _Files_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Files.ts */ "./apps/files/src/services/Files.ts");
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */








const folderTreeId = 'folders';
const sourceRoot = `${_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.davRemoteURL}/files/${(0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_3__.getCurrentUser)()?.uid}`;
const collator = Intl.Collator([(0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.getLanguage)(), (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_5__.getCanonicalLocale)()], {
  numeric: true,
  usage: 'sort'
});
const compareNodes = (a, b) => collator.compare(a.displayName ?? a.basename, b.displayName ?? b.basename);
const getTreeNodes = function (tree) {
  let currentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  let nodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const sortedTree = tree.toSorted(compareNodes);
  for (const {
    id,
    basename,
    displayName,
    children
  } of sortedTree) {
    const path = (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.joinPaths)(currentPath, basename);
    const source = `${sourceRoot}${path}`;
    const node = {
      source,
      encodedSource: encodeSource(source),
      path,
      fileid: id,
      basename
    };
    if (displayName) {
      node.displayName = displayName;
    }
    nodes.push(node);
    if (children.length > 0) {
      getTreeNodes(children, path, nodes);
    }
  }
  return nodes;
};
const getFolderTreeNodes = async function () {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  const {
    data: tree
  } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_1__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_2__.generateOcsUrl)('/apps/files/api/v1/folder-tree'), {
    params: new URLSearchParams({
      path,
      depth: String(depth)
    })
  });
  const nodes = getTreeNodes(tree, path);
  return nodes;
};
const getContents = path => (0,_Files_ts__WEBPACK_IMPORTED_MODULE_6__.getContents)(path);
const encodeSource = source => {
  const {
    origin
  } = new URL(source);
  return origin + (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.encodePath)(source.slice(origin.length));
};
const getSourceParent = source => {
  const parent = (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.dirname)(source);
  if (parent === sourceRoot) {
    return folderTreeId;
  }
  return encodeSource(parent);
};

/***/ }),

/***/ "./apps/files/src/services/LivePhotos.ts":
/*!***********************************************!*\
  !*** ./apps/files/src/services/LivePhotos.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initLivePhotos: () => (/* binding */ initLivePhotos),
/* harmony export */   isLivePhoto: () => (/* binding */ isLivePhoto)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 *
 */
function initLivePhotos() {
  (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.registerDavProperty)('nc:metadata-files-live-photo', {
    nc: 'http://nextcloud.org/ns'
  });
}
/**
 * @param {Node} node - The node
 */
function isLivePhoto(node) {
  return node.attributes['metadata-files-live-photo'] !== undefined;
}

/***/ }),

/***/ "./apps/files/src/services/PersonalFiles.ts":
/*!**************************************************!*\
  !*** ./apps/files/src/services/PersonalFiles.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContents: () => (/* binding */ getContents),
/* harmony export */   isPersonalFile: () => (/* binding */ isPersonalFile)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _Files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Files */ "./apps/files/src/services/Files.ts");


const currentUserId = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()?.uid;
/**
 * Filters each file/folder on its shared status
 *
 * A personal file is considered a file that has all of the following properties:
 * 1. the current user owns
 * 2. the file is not shared with anyone
 * 3. the file is not a group folder
 * @todo Move to `@nextcloud/files`
 * @param node The node to check
 */
const isPersonalFile = function (node) {
  // the type of mounts that determine whether the file is shared
  const sharedMountTypes = ['group', 'shared'];
  const mountType = node.attributes['mount-type'];
  return currentUserId === node.owner && !sharedMountTypes.includes(mountType);
};
const getContents = function () {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  // get all the files from the current path as a cancellable promise
  // then filter the files that the user does not own, or has shared / is a group folder
  return (0,_Files__WEBPACK_IMPORTED_MODULE_1__.getContents)(path).then(content => {
    content.contents = content.contents.filter(isPersonalFile);
    return content;
  });
};

/***/ }),

/***/ "./apps/files/src/services/Recent.ts":
/*!*******************************************!*\
  !*** ./apps/files/src/services/Recent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContents: () => (/* binding */ getContents)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cancelable-promise */ "./node_modules/cancelable-promise/umd/CancelablePromise.js");
/* harmony import */ var cancelable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cancelable_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_userconfig_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/userconfig.ts */ "./apps/files/src/store/userconfig.ts");
/* harmony import */ var _store_index_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/index.ts */ "./apps/files/src/store/index.ts");
/* harmony import */ var _WebdavClient_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebdavClient.ts */ "./apps/files/src/services/WebdavClient.ts");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");







const lastTwoWeeksTimestamp = Math.round(Date.now() / 1000 - 60 * 60 * 24 * 14);
/**
 * Helper to map a WebDAV result to a Nextcloud node
 * The search endpoint already includes the dav remote URL so we must not include it in the source
 *
 * @param stat the WebDAV result
 */
const resultToNode = stat => (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davResultToNode)(stat, _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davRootPath, (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_6__.getBaseUrl)());
/**
 * Get recently changed nodes
 *
 * This takes the users preference about hidden files into account.
 * If hidden files are not shown, then also recently changed files *in* hidden directories are filtered.
 *
 * @param path Path to search for recent changes
 */
const getContents = function () {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  const store = (0,_store_userconfig_ts__WEBPACK_IMPORTED_MODULE_3__.useUserConfigStore)(_store_index_ts__WEBPACK_IMPORTED_MODULE_4__.pinia);
  /**
   * Filter function that returns only the visible nodes - or hidden if explicitly configured
   * @param node The node to check
   */
  const filterHidden = node => path !== '/' // We need to hide files from hidden directories in the root if not configured to show
  || store.userConfig.show_hidden // If configured to show hidden files we can early return
  || !node.dirname.split('/').some(dir => dir.startsWith('.')); // otherwise only include the file if non of the parent directories is hidden
  const controller = new AbortController();
  const handler = async () => {
    const contentsResponse = await _WebdavClient_ts__WEBPACK_IMPORTED_MODULE_5__.client.search('/', {
      signal: controller.signal,
      details: true,
      data: (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davGetRecentSearch)(lastTwoWeeksTimestamp)
    });
    const contents = contentsResponse.data.results.map(resultToNode).filter(filterHidden);
    return {
      folder: new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.Folder({
        id: 0,
        source: `${_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davRemoteURL}${_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davRootPath}`,
        root: _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.davRootPath,
        owner: (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()?.uid || null,
        permissions: _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.Permission.READ
      }),
      contents
    };
  };
  return new cancelable_promise__WEBPACK_IMPORTED_MODULE_2__.CancelablePromise(async (resolve, reject, cancel) => {
    cancel(() => controller.abort());
    resolve(handler());
  });
};

/***/ }),

/***/ "./apps/files/src/services/ServiceWorker.js":
/*!**************************************************!*\
  !*** ./apps/files/src/services/ServiceWorker.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger.ts */ "./apps/files/src/logger.ts");
/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', async () => {
      try {
        const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/files/preview-service-worker.js', {}, {
          noRewrite: true
        });
        let scope = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.getRootUrl)();
        // If the instance is not in a subfolder an empty string will be returned.
        // The service worker registration will use the current path if it receives an empty string,
        // which will result in a service worker registration for every single path the user visits.
        if (scope === '') {
          scope = '/';
        }
        const registration = await navigator.serviceWorker.register(url, {
          scope
        });
        _logger_ts__WEBPACK_IMPORTED_MODULE_1__["default"].debug('SW registered: ', {
          registration
        });
      } catch (error) {
        _logger_ts__WEBPACK_IMPORTED_MODULE_1__["default"].error('SW registration failed: ', {
          error
        });
      }
    });
  } else {
    _logger_ts__WEBPACK_IMPORTED_MODULE_1__["default"].debug('Service Worker is not enabled on this browser.');
  }
});

/***/ }),

/***/ "./apps/files/src/services/WebdavClient.ts":
/*!*************************************************!*\
  !*** ./apps/files/src/services/WebdavClient.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   client: () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const client = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.davGetClient)();

/***/ }),

/***/ "./apps/files/src/store/index.ts":
/*!***************************************!*\
  !*** ./apps/files/src/store/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pinia: () => (/* binding */ pinia)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.createPinia)();

/***/ }),

/***/ "./apps/files/src/store/userconfig.ts":
/*!********************************************!*\
  !*** ./apps/files/src/store/userconfig.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUserConfigStore: () => (/* binding */ useUserConfigStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.mjs");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");






const userConfig = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_2__.loadState)('files', 'config', {
  show_hidden: false,
  crop_image_previews: true,
  sort_favorites_first: true,
  sort_folders_first: true,
  grid_view: false
});
const useUserConfigStore = function () {
  const store = (0,pinia__WEBPACK_IMPORTED_MODULE_4__.defineStore)('userconfig', {
    state: () => ({
      userConfig
    }),
    actions: {
      /**
       * Update the user config local store
       * @param key
       * @param value
       */
      onUpdate(key, value) {
        vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.userConfig, key, value);
      },
      /**
       * Update the user config local store AND on server side
       * @param key
       * @param value
       */
      async update(key, value) {
        await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_3__["default"].put((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateUrl)('/apps/files/api/v1/config/' + key), {
          value
        });
        (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)('files:config:updated', {
          key,
          value
        });
      }
    }
  });
  const userConfigStore = store(...arguments);
  // Make sure we only register the listeners once
  if (!userConfigStore._initialized) {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('files:config:updated', function (_ref) {
      let {
        key,
        value
      } = _ref;
      userConfigStore.onUpdate(key, value);
    });
    userConfigStore._initialized = true;
  }
  return userConfigStore;
};

/***/ }),

/***/ "./apps/files/src/utils/filenameValidity.ts":
/*!**************************************************!*\
  !*** ./apps/files/src/utils/filenameValidity.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFilenameValidity: () => (/* binding */ getFilenameValidity)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/*!
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 * Get the validity of a filename (empty if valid).
 * This can be used for `setCustomValidity` on input elements
 * @param name The filename
 * @param escape Escape the matched string in the error (only set when used in HTML)
 */
function getFilenameValidity(name) {
  let escape = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (name.trim() === '') {
    return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Filename must not be empty.');
  }
  try {
    (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.validateFilename)(name);
    return '';
  } catch (error) {
    if (!(error instanceof _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.InvalidFilenameError)) {
      throw error;
    }
    switch (error.reason) {
      case _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.InvalidFilenameErrorReason.Character:
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', '"{char}" is not allowed inside a filename.', {
          char: error.segment
        }, undefined, {
          escape
        });
      case _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.InvalidFilenameErrorReason.ReservedName:
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', '"{segment}" is a reserved name and not allowed for filenames.', {
          segment: error.segment
        }, undefined, {
          escape: false
        });
      case _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.InvalidFilenameErrorReason.Extension:
        if (error.segment.match(/\.[a-z]/i)) {
          return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', '"{extension}" is not an allowed filetype.', {
            extension: error.segment
          }, undefined, {
            escape: false
          });
        }
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Filenames must not end with "{extension}".', {
          extension: error.segment
        }, undefined, {
          escape: false
        });
      default:
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Invalid filename.');
    }
  }
}

/***/ }),

/***/ "./apps/files/src/utils/hashUtils.ts":
/*!*******************************************!*\
  !*** ./apps/files/src/utils/hashUtils.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hashCode: () => (/* binding */ hashCode)
/* harmony export */ });
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * Simple non-secure hashing function similar to Java's `hashCode`
 * @param str The string to hash
 * @return {number} a non secure hash of the string
 */
const hashCode = function (str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i) | 0;
  }
  return hash >>> 0;
};

/***/ }),

/***/ "./apps/files/src/utils/newNodeDialog.ts":
/*!***********************************************!*\
  !*** ./apps/files/src/utils/newNodeDialog.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newNodeName: () => (/* binding */ newNodeName)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _components_NewNodeDialog_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NewNodeDialog.vue */ "./apps/files/src/components/NewNodeDialog.vue");
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */


/**
 * Ask user for file or folder name
 * @param defaultName Default name to use
 * @param folderContent Nodes with in the current folder to check for unique name
 * @param labels Labels to set on the dialog
 * @return string if successful otherwise null if aborted
 */
function newNodeName(defaultName, folderContent) {
  let labels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const contentNames = folderContent.map(node => node.basename);
  return new Promise(resolve => {
    (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.spawnDialog)(_components_NewNodeDialog_vue__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ...labels,
      defaultName,
      otherNames: contentNames
    }, folderName => {
      resolve(folderName);
    });
  });
}

/***/ }),

/***/ "./apps/files/src/views/favorites.ts":
/*!*******************************************!*\
  !*** ./apps/files/src/views/favorites.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerFavoritesView: () => (/* binding */ registerFavoritesView)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _services_WebdavClient_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/WebdavClient.ts */ "./apps/files/src/services/WebdavClient.ts");
/* harmony import */ var _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/svg/svg/folder.svg?raw */ "./node_modules/@mdi/svg/svg/folder.svg?raw");
/* harmony import */ var _mdi_svg_svg_star_svg_raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/svg/svg/star.svg?raw */ "./node_modules/@mdi/svg/svg/star.svg?raw");
/* harmony import */ var _services_Favorites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/Favorites */ "./apps/files/src/services/Favorites.ts");
/* harmony import */ var _utils_hashUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hashUtils */ "./apps/files/src/utils/hashUtils.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../logger */ "./apps/files/src/logger.ts");









const generateFavoriteFolderView = function (folder) {
  let index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.View({
    id: generateIdFromPath(folder.path),
    name: folder.displayname,
    icon: _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_4__,
    order: index,
    params: {
      dir: folder.path,
      fileid: String(folder.fileid),
      view: 'favorites'
    },
    parent: 'favorites',
    columns: [],
    getContents: _services_Favorites__WEBPACK_IMPORTED_MODULE_6__.getContents
  });
};
const generateIdFromPath = function (path) {
  return `favorite-${(0,_utils_hashUtils__WEBPACK_IMPORTED_MODULE_7__.hashCode)(path)}`;
};
const registerFavoritesView = async () => {
  const Navigation = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.getNavigation)();
  Navigation.register(new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.View({
    id: 'favorites',
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Favorites'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'List of favorite files and folders.'),
    emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'No favorites yet'),
    emptyCaption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'Files and folders you mark as favorite will show up here'),
    icon: _mdi_svg_svg_star_svg_raw__WEBPACK_IMPORTED_MODULE_5__,
    order: 15,
    columns: [],
    getContents: _services_Favorites__WEBPACK_IMPORTED_MODULE_6__.getContents
  }));
  const favoriteFolders = (await (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.getFavoriteNodes)(_services_WebdavClient_ts__WEBPACK_IMPORTED_MODULE_3__.client)).filter(node => node.type === _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.FileType.Folder);
  const favoriteFoldersViews = favoriteFolders.map((folder, index) => generateFavoriteFolderView(folder, index));
  _logger__WEBPACK_IMPORTED_MODULE_8__["default"].debug('Generating favorites view', {
    favoriteFolders
  });
  favoriteFoldersViews.forEach(view => Navigation.register(view));
  /**
   * Update favorites navigation when a new folder is added
   */
  (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('files:favorites:added', node => {
    if (node.type !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.FileType.Folder) {
      return;
    }
    // Sanity check
    if (node.path === null || !node.root?.startsWith('/files')) {
      _logger__WEBPACK_IMPORTED_MODULE_8__["default"].error('Favorite folder is not within user files root', {
        node
      });
      return;
    }
    addToFavorites(node);
  });
  /**
   * Remove favourites navigation when a folder is removed
   */
  (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('files:favorites:removed', node => {
    if (node.type !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.FileType.Folder) {
      return;
    }
    // Sanity check
    if (node.path === null || !node.root?.startsWith('/files')) {
      _logger__WEBPACK_IMPORTED_MODULE_8__["default"].error('Favorite folder is not within user files root', {
        node
      });
      return;
    }
    removePathFromFavorites(node.path);
  });
  /**
   * Update favorites navigation when a folder is renamed
   */
  (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)('files:node:renamed', node => {
    if (node.type !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.FileType.Folder) {
      return;
    }
    if (node.attributes.favorite !== 1) {
      return;
    }
    updateNodeFromFavorites(node);
  });
  /**
   * Sort the favorites paths array and
   * update the order property of the existing views
   */
  const updateAndSortViews = function () {
    favoriteFolders.sort((a, b) => a.path.localeCompare(b.path, (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.getLanguage)(), {
      ignorePunctuation: true
    }));
    favoriteFolders.forEach((folder, index) => {
      const view = favoriteFoldersViews.find(view => view.id === generateIdFromPath(folder.path));
      if (view) {
        view.order = index;
      }
    });
  };
  // Add a folder to the favorites paths array and update the views
  const addToFavorites = function (node) {
    const view = generateFavoriteFolderView(node);
    // Skip if already exists
    if (favoriteFolders.find(folder => folder.path === node.path)) {
      return;
    }
    // Update arrays
    favoriteFolders.push(node);
    favoriteFoldersViews.push(view);
    // Update and sort views
    updateAndSortViews();
    Navigation.register(view);
  };
  // Remove a folder from the favorites paths array and update the views
  const removePathFromFavorites = function (path) {
    const id = generateIdFromPath(path);
    const index = favoriteFolders.findIndex(folder => folder.path === path);
    // Skip if not exists
    if (index === -1) {
      return;
    }
    // Update arrays
    favoriteFolders.splice(index, 1);
    favoriteFoldersViews.splice(index, 1);
    // Update and sort views
    Navigation.remove(id);
    updateAndSortViews();
  };
  // Update a folder from the favorites paths array and update the views
  const updateNodeFromFavorites = function (node) {
    const favoriteFolder = favoriteFolders.find(folder => folder.fileid === node.fileid);
    // Skip if it does not exists
    if (favoriteFolder === undefined) {
      return;
    }
    removePathFromFavorites(favoriteFolder.path);
    addToFavorites(node);
  };
};

/***/ }),

/***/ "./apps/files/src/views/files.ts":
/*!***************************************!*\
  !*** ./apps/files/src/views/files.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdi/svg/svg/folder.svg?raw */ "./node_modules/@mdi/svg/svg/folder.svg?raw");
/* harmony import */ var _services_Files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Files */ "./apps/files/src/services/Files.ts");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const Navigation = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.getNavigation)();
  Navigation.register(new _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.View({
    id: 'files',
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files', 'All files'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files', 'List of your files and folders.'),
    icon: _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_1__,
    order: 0,
    getContents: _services_Files__WEBPACK_IMPORTED_MODULE_2__.getContents
  }));
});

/***/ }),

/***/ "./apps/files/src/views/folderTree.ts":
/*!********************************************!*\
  !*** ./apps/files/src/views/folderTree.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerFolderTreeView: () => (/* binding */ registerFolderTreeView)
/* harmony export */ });
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p-queue */ "./node_modules/p-queue/dist/index.js");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mdi/svg/svg/folder.svg?raw */ "./node_modules/@mdi/svg/svg/folder.svg?raw");
/* harmony import */ var _mdi_svg_svg_folder_multiple_svg_raw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mdi/svg/svg/folder-multiple.svg?raw */ "./node_modules/@mdi/svg/svg/folder-multiple.svg?raw");
/* harmony import */ var _services_FolderTree_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/FolderTree.ts */ "./apps/files/src/services/FolderTree.ts");
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */









const isFolderTreeEnabled = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__.loadState)('files', 'config', {
  folder_tree: true
}).folder_tree;
let showHiddenFiles = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_5__.loadState)('files', 'config', {
  show_hidden: false
}).show_hidden;
const Navigation = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.getNavigation)();
const queue = new p_queue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  concurrency: 5,
  intervalCap: 5,
  interval: 200
});
const registerQueue = new p_queue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  concurrency: 5,
  intervalCap: 5,
  interval: 200
});
const registerTreeChildren = async function () {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  await queue.add(async () => {
    const nodes = await (0,_services_FolderTree_ts__WEBPACK_IMPORTED_MODULE_8__.getFolderTreeNodes)(path);
    const promises = nodes.map(node => registerQueue.add(() => registerNodeView(node)));
    await Promise.allSettled(promises);
  });
};
const getLoadChildViews = node => {
  return async view => {
    // @ts-expect-error Custom property on View instance
    if (view.loading || view.loaded) {
      return;
    }
    // @ts-expect-error Custom property
    view.loading = true;
    await registerTreeChildren(node.path);
    // @ts-expect-error Custom property
    view.loading = false;
    // @ts-expect-error Custom property
    view.loaded = true;
    // @ts-expect-error No payload
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.emit)('files:navigation:updated');
    // @ts-expect-error No payload
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.emit)('files:folder-tree:expanded');
  };
};
const registerNodeView = node => {
  const registeredView = Navigation.views.find(view => view.id === node.encodedSource);
  if (registeredView) {
    Navigation.remove(registeredView.id);
  }
  if (!showHiddenFiles && node.basename.startsWith('.')) {
    return;
  }
  Navigation.register(new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.View({
    id: node.encodedSource,
    parent: (0,_services_FolderTree_ts__WEBPACK_IMPORTED_MODULE_8__.getSourceParent)(node.source),
    // @ts-expect-error Casing differences
    name: node.displayName ?? node.displayname ?? node.basename,
    icon: _mdi_svg_svg_folder_svg_raw__WEBPACK_IMPORTED_MODULE_6__,
    getContents: _services_FolderTree_ts__WEBPACK_IMPORTED_MODULE_8__.getContents,
    loadChildViews: getLoadChildViews(node),
    params: {
      view: _services_FolderTree_ts__WEBPACK_IMPORTED_MODULE_8__.folderTreeId,
      fileid: String(node.fileid),
      // Needed for matching exact routes
      dir: node.path
    }
  }));
};
const removeFolderView = folder => {
  const viewId = folder.encodedSource;
  Navigation.remove(viewId);
};
const removeFolderViewSource = source => {
  Navigation.remove(source);
};
const onCreateNode = node => {
  if (!(node instanceof _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.Folder)) {
    return;
  }
  registerNodeView(node);
};
const onDeleteNode = node => {
  if (!(node instanceof _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.Folder)) {
    return;
  }
  removeFolderView(node);
};
const onMoveNode = _ref => {
  let {
    node,
    oldSource
  } = _ref;
  if (!(node instanceof _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.Folder)) {
    return;
  }
  removeFolderViewSource(oldSource);
  registerNodeView(node);
  const newPath = node.source.replace(_services_FolderTree_ts__WEBPACK_IMPORTED_MODULE_8__.sourceRoot, '');
  const oldPath = oldSource.replace(_services_FolderTree_ts__WEBPACK_IMPORTED_MODULE_8__.sourceRoot, '');
  const childViews = Navigation.views.filter(view => {
    if (!view.params?.dir) {
      return false;
    }
    if ((0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.isSamePath)(view.params.dir, oldPath)) {
      return false;
    }
    return view.params.dir.startsWith(oldPath);
  });
  for (const view of childViews) {
    // @ts-expect-error FIXME Allow setting parent
    view.parent = (0,_services_FolderTree_ts__WEBPACK_IMPORTED_MODULE_8__.getSourceParent)(node.source);
    // @ts-expect-error dir param is defined
    view.params.dir = view.params.dir.replace(oldPath, newPath);
  }
};
const onUserConfigUpdated = async _ref2 => {
  let {
    key,
    value
  } = _ref2;
  if (key === 'show_hidden') {
    showHiddenFiles = value;
    await registerTreeChildren();
    // @ts-expect-error No payload
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.emit)('files:folder-tree:initialized');
  }
};
const registerTreeRoot = () => {
  Navigation.register(new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.View({
    id: _services_FolderTree_ts__WEBPACK_IMPORTED_MODULE_8__.folderTreeId,
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'All folders'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate)('files', 'List of your files and folders.'),
    icon: _mdi_svg_svg_folder_multiple_svg_raw__WEBPACK_IMPORTED_MODULE_7__,
    order: 50,
    // Below all other views
    getContents: _services_FolderTree_ts__WEBPACK_IMPORTED_MODULE_8__.getContents
  }));
};
const registerFolderTreeView = async () => {
  if (!isFolderTreeEnabled) {
    return;
  }
  registerTreeRoot();
  await registerTreeChildren();
  (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.subscribe)('files:node:created', onCreateNode);
  (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.subscribe)('files:node:deleted', onDeleteNode);
  (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.subscribe)('files:node:moved', onMoveNode);
  (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.subscribe)('files:config:updated', onUserConfigUpdated);
  // @ts-expect-error No payload
  (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_3__.emit)('files:folder-tree:initialized');
};

/***/ }),

/***/ "./apps/files/src/views/personal-files.ts":
/*!************************************************!*\
  !*** ./apps/files/src/views/personal-files.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _services_PersonalFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/PersonalFiles */ "./apps/files/src/services/PersonalFiles.ts");
/* harmony import */ var _mdi_svg_svg_account_svg_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/svg/svg/account.svg?raw */ "./node_modules/@mdi/svg/svg/account.svg?raw");
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const Navigation = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.getNavigation)();
  Navigation.register(new _nextcloud_files__WEBPACK_IMPORTED_MODULE_1__.View({
    id: 'personal',
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files', 'Personal Files'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files', 'List of your files and folders that are not shared.'),
    emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files', 'No personal files found'),
    emptyCaption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files', 'Files that are not shared will show up here.'),
    icon: _mdi_svg_svg_account_svg_raw__WEBPACK_IMPORTED_MODULE_3__,
    order: 5,
    getContents: _services_PersonalFiles__WEBPACK_IMPORTED_MODULE_2__.getContents
  }));
});

/***/ }),

/***/ "./apps/files/src/views/recent.ts":
/*!****************************************!*\
  !*** ./apps/files/src/views/recent.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _mdi_svg_svg_history_svg_raw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdi/svg/svg/history.svg?raw */ "./node_modules/@mdi/svg/svg/history.svg?raw");
/* harmony import */ var _services_Recent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Recent */ "./apps/files/src/services/Recent.ts");
/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const Navigation = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.getNavigation)();
  Navigation.register(new _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.View({
    id: 'recent',
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'Recent'),
    caption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'List of recently modified files and folders.'),
    emptyTitle: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'No recently modified files'),
    emptyCaption: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.translate)('files', 'Files and folders you recently modified will show up here.'),
    icon: _mdi_svg_svg_history_svg_raw__WEBPACK_IMPORTED_MODULE_2__,
    order: 10,
    defaultSortKey: 'mtime',
    getContents: _services_Recent__WEBPACK_IMPORTED_MODULE_3__.getContents
  }));
});

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/account.svg?raw":
/*!***************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/account.svg?raw ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-account\" viewBox=\"0 0 24 24\"><path d=\"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/arrow-down.svg?raw":
/*!******************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/arrow-down.svg?raw ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-arrow-down\" viewBox=\"0 0 24 24\"><path d=\"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/calendar.svg?raw":
/*!****************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/calendar.svg?raw ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-calendar\" viewBox=\"0 0 24 24\"><path d=\"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/close.svg?raw":
/*!*************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/close.svg?raw ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-close\" viewBox=\"0 0 24 24\"><path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/file-document.svg?raw":
/*!*********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/file-document.svg?raw ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-file-document\" viewBox=\"0 0 24 24\"><path d=\"M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/file-pdf-box.svg?raw":
/*!********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/file-pdf-box.svg?raw ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-file-pdf-box\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9.5 11.5C9.5 12.3 8.8 13 8 13H7V15H5.5V9H8C8.8 9 9.5 9.7 9.5 10.5V11.5M14.5 13.5C14.5 14.3 13.8 15 13 15H10.5V9H13C13.8 9 14.5 9.7 14.5 10.5V13.5M18.5 10.5H17V11.5H18.5V13H17V15H15.5V9H18.5V10.5M12 10.5H13V13.5H12V10.5M7 10.5H8V11.5H7V10.5Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/file-presentation-box.svg?raw":
/*!*****************************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/file-presentation-box.svg?raw ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-file-presentation-box\" viewBox=\"0 0 24 24\"><path d=\"M19,16H5V8H19M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/file-table-box.svg?raw":
/*!**********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/file-table-box.svg?raw ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-file-table-box\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M9 18H6V16H9V18M9 15H6V13H9V15M9 12H6V10H9V12M13 18H10V16H13V18M13 15H10V13H13V15M13 12H10V10H13V12Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/folder-plus.svg?raw":
/*!*******************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/folder-plus.svg?raw ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-folder-plus\" viewBox=\"0 0 24 24\"><path d=\"M13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V13.81C21.12 13.3 20.1 13 19 13C15.69 13 13 15.69 13 19M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/folder.svg?raw":
/*!**************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/folder.svg?raw ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-folder\" viewBox=\"0 0 24 24\"><path d=\"M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/history.svg?raw":
/*!***************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/history.svg?raw ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-history\" viewBox=\"0 0 24 24\"><path d=\"M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/image.svg?raw":
/*!*************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/image.svg?raw ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-image\" viewBox=\"0 0 24 24\"><path d=\"M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/laptop.svg?raw":
/*!**************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/laptop.svg?raw ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-laptop\" viewBox=\"0 0 24 24\"><path d=\"M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/movie.svg?raw":
/*!*************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/movie.svg?raw ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-movie\" viewBox=\"0 0 24 24\"><path d=\"M18,4L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V4H18Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/music.svg?raw":
/*!*************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/music.svg?raw ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-music\" viewBox=\"0 0 24 24\"><path d=\"M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/network-off.svg?raw":
/*!*******************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/network-off.svg?raw ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-network-off\" viewBox=\"0 0 24 24\"><path d=\"M1,5.27L5,9.27V15A2,2 0 0,0 7,17H11V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H17.73L19.73,24L21,22.72L2.28,4L1,5.27M15,20A1,1 0 0,0 14,19H13V17.27L15.73,20H15M17.69,16.87L5.13,4.31C5.41,3.55 6.14,3 7,3H17A2,2 0 0,1 19,5V15C19,15.86 18.45,16.59 17.69,16.87M22,20V21.18L20.82,20H22Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/pencil.svg?raw":
/*!**************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/pencil.svg?raw ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-pencil\" viewBox=\"0 0 24 24\"><path d=\"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/plus.svg?raw":
/*!************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/plus.svg?raw ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-plus\" viewBox=\"0 0 24 24\"><path d=\"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/star-outline.svg?raw":
/*!********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/star-outline.svg?raw ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-star-outline\" viewBox=\"0 0 24 24\"><path d=\"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/star.svg?raw":
/*!************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/star.svg?raw ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-star\" viewBox=\"0 0 24 24\"><path d=\"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/trash-can.svg?raw":
/*!*****************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/trash-can.svg?raw ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-trash-can\" viewBox=\"0 0 24 24\"><path d=\"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@mdi/svg/svg/web.svg?raw":
/*!***********************************************!*\
  !*** ./node_modules/@mdi/svg/svg/web.svg?raw ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-web\" viewBox=\"0 0 24 24\"><path d=\"M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\" /></svg>";

/***/ }),

/***/ "./node_modules/@nextcloud/upload/dist/assets/index-CdLjHZZ_.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@nextcloud/upload/dist/assets/index-CdLjHZZ_.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_index_CdLjHZZ_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js!./index-CdLjHZZ_.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/upload/dist/assets/index-CdLjHZZ_.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_index_CdLjHZZ_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_index_CdLjHZZ_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_index_CdLjHZZ_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_index_CdLjHZZ_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@nextcloud/upload/dist/chunks/index-DUD0fqDs.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@nextcloud/upload/dist/chunks/index-DUD0fqDs.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Status$1),
/* harmony export */   U: () => (/* binding */ UploadPicker),
/* harmony export */   a: () => (/* binding */ isFileSystemEntry),
/* harmony export */   b: () => (/* binding */ n),
/* harmony export */   c: () => (/* binding */ getConflicts),
/* harmony export */   d: () => (/* binding */ uploadConflictHandler),
/* harmony export */   e: () => (/* binding */ Upload),
/* harmony export */   f: () => (/* binding */ Uploader),
/* harmony export */   g: () => (/* binding */ getUploader),
/* harmony export */   h: () => (/* binding */ hasConflict),
/* harmony export */   i: () => (/* binding */ isFileSystemFileEntry),
/* harmony export */   j: () => (/* binding */ Status),
/* harmony export */   l: () => (/* binding */ logger),
/* harmony export */   n: () => (/* binding */ normalizeComponent),
/* harmony export */   o: () => (/* binding */ openConflictPicker),
/* harmony export */   t: () => (/* binding */ t),
/* harmony export */   u: () => (/* binding */ upload)
/* harmony export */ });
/* harmony import */ var _assets_index_CdLjHZZ_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/index-CdLjHZZ_.css */ "./node_modules/@nextcloud/upload/dist/assets/index-CdLjHZZ_.css");
/* harmony import */ var _nextcloud_sharing_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/sharing/public */ "./node_modules/@nextcloud/sharing/dist/public.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.mjs");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var _nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/capabilities */ "./node_modules/@nextcloud/capabilities/dist/index.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.mjs");
/* harmony import */ var p_cancelable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! p-cancelable */ "./node_modules/p-cancelable/index.js");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! p-queue */ "./node_modules/@nextcloud/upload/node_modules/p-queue/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var axios_retry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios-retry */ "./node_modules/axios-retry/dist/esm/index.js");
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n_gettext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextcloud/l10n/gettext */ "./node_modules/@nextcloud/l10n/dist/gettext.mjs");
/* harmony import */ var _nextcloud_vue_dist_Composables_useHotKey_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nextcloud/vue/dist/Composables/useHotKey.js */ "./node_modules/@nextcloud/vue/dist/Composables/useHotKey.mjs");
/* harmony import */ var simple_eta__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! simple-eta */ "./node_modules/simple-eta/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionCaption_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionCaption.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionCaption.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionSeparator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionSeparator.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionSeparator.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActions.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActions.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcIconSvgWrapper.js */ "./node_modules/@nextcloud/vue/dist/Components/NcIconSvgWrapper.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcProgressBar_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcProgressBar.js */ "./node_modules/@nextcloud/vue/dist/Components/NcProgressBar.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");

























const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_11__.getLoggerBuilder)().setApp("@nextcloud/upload").detectUser().build();
(0,axios_retry__WEBPACK_IMPORTED_MODULE_10__["default"])(_nextcloud_axios__WEBPACK_IMPORTED_MODULE_7__["default"], { retries: 0 });
const uploadData = async function(url, uploadData2, signal, onUploadProgress = () => {
}, destinationFile = void 0, headers = {}, retries = 5) {
  let data;
  if (uploadData2 instanceof Blob) {
    data = uploadData2;
  } else {
    data = await uploadData2();
  }
  if (destinationFile) {
    headers.Destination = destinationFile;
  }
  if (!headers["Content-Type"]) {
    headers["Content-Type"] = "application/octet-stream";
  }
  return await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_7__["default"].request({
    method: "PUT",
    url,
    data,
    signal,
    onUploadProgress,
    headers,
    "axios-retry": {
      retries,
      retryDelay: (retryCount, error) => (0,axios_retry__WEBPACK_IMPORTED_MODULE_10__.exponentialDelay)(retryCount, error, 1e3)
    }
  });
};
const getChunk = function(file, start, length) {
  if (start === 0 && file.size <= length) {
    return Promise.resolve(new Blob([file], { type: file.type || "application/octet-stream" }));
  }
  return Promise.resolve(new Blob([file.slice(start, start + length)], { type: "application/octet-stream" }));
};
const initChunkWorkspace = async function(destinationFile = void 0, retries = 5) {
  const chunksWorkspace = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_9__.generateRemoteUrl)(`dav/uploads/${(0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()?.uid}`);
  const hash = [...Array(16)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
  const tempWorkspace = `web-file-upload-${hash}`;
  const url = `${chunksWorkspace}/${tempWorkspace}`;
  const headers = destinationFile ? { Destination: destinationFile } : void 0;
  await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_7__["default"].request({
    method: "MKCOL",
    url,
    headers,
    "axios-retry": {
      retries,
      retryDelay: (retryCount, error) => (0,axios_retry__WEBPACK_IMPORTED_MODULE_10__.exponentialDelay)(retryCount, error, 1e3)
    }
  });
  logger.debug("Created temporary upload workspace", { url });
  return url;
};
const getMaxChunksSize = function(fileSize = void 0) {
  const maxChunkSize = window.OC?.appConfig?.files?.max_chunk_size;
  if (maxChunkSize <= 0) {
    return 0;
  }
  if (!Number(maxChunkSize)) {
    return 10 * 1024 * 1024;
  }
  const minimumChunkSize = Math.max(Number(maxChunkSize), 5 * 1024 * 1024);
  if (fileSize === void 0) {
    return minimumChunkSize;
  }
  return Math.max(minimumChunkSize, Math.ceil(fileSize / 1e4));
};
var Status$1 = /* @__PURE__ */ ((Status2) => {
  Status2[Status2["INITIALIZED"] = 0] = "INITIALIZED";
  Status2[Status2["UPLOADING"] = 1] = "UPLOADING";
  Status2[Status2["ASSEMBLING"] = 2] = "ASSEMBLING";
  Status2[Status2["FINISHED"] = 3] = "FINISHED";
  Status2[Status2["CANCELLED"] = 4] = "CANCELLED";
  Status2[Status2["FAILED"] = 5] = "FAILED";
  return Status2;
})(Status$1 || {});
class Upload {
  _source;
  _file;
  _isChunked;
  _chunks;
  _size;
  _uploaded = 0;
  _startTime = 0;
  _status = 0;
  _controller;
  _response = null;
  constructor(source, chunked = false, size, file) {
    const chunks = Math.min(getMaxChunksSize() > 0 ? Math.ceil(size / getMaxChunksSize()) : 1, 1e4);
    this._source = source;
    this._isChunked = chunked && getMaxChunksSize() > 0 && chunks > 1;
    this._chunks = this._isChunked ? chunks : 1;
    this._size = size;
    this._file = file;
    this._controller = new AbortController();
  }
  get source() {
    return this._source;
  }
  get file() {
    return this._file;
  }
  get isChunked() {
    return this._isChunked;
  }
  get chunks() {
    return this._chunks;
  }
  get size() {
    return this._size;
  }
  get startTime() {
    return this._startTime;
  }
  set response(response) {
    this._response = response;
  }
  get response() {
    return this._response;
  }
  get uploaded() {
    return this._uploaded;
  }
  /**
   * Update the uploaded bytes of this upload
   */
  set uploaded(length) {
    if (length >= this._size) {
      this._status = this._isChunked ? 2 : 3;
      this._uploaded = this._size;
      return;
    }
    this._status = 1;
    this._uploaded = length;
    if (this._startTime === 0) {
      this._startTime = (/* @__PURE__ */ new Date()).getTime();
    }
  }
  get status() {
    return this._status;
  }
  /**
   * Update this upload status
   */
  set status(status) {
    this._status = status;
  }
  /**
   * Returns the axios cancel token source
   */
  get signal() {
    return this._controller.signal;
  }
  /**
   * Cancel any ongoing requests linked to this upload
   */
  cancel() {
    this._controller.abort();
    this._status = 4;
  }
}
const isFileSystemDirectoryEntry = (o) => "FileSystemDirectoryEntry" in window && o instanceof FileSystemDirectoryEntry;
const isFileSystemFileEntry = (o) => "FileSystemFileEntry" in window && o instanceof FileSystemFileEntry;
const isFileSystemEntry = (o) => "FileSystemEntry" in window && o instanceof FileSystemEntry;
class Directory extends File {
  _originalName;
  _path;
  _children;
  constructor(path) {
    super([], (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.basename)(path), { type: "httpd/unix-directory", lastModified: 0 });
    this._children = /* @__PURE__ */ new Map();
    this._originalName = (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.basename)(path);
    this._path = path;
  }
  get size() {
    return this.children.reduce((sum, file) => sum + file.size, 0);
  }
  get lastModified() {
    return this.children.reduce((latest, file) => Math.max(latest, file.lastModified), 0);
  }
  // We need this to keep track of renamed files
  get originalName() {
    return this._originalName;
  }
  get children() {
    return Array.from(this._children.values());
  }
  get webkitRelativePath() {
    return this._path;
  }
  getChild(name) {
    return this._children.get(name) ?? null;
  }
  /**
   * Add multiple children at once
   * @param files The files to add
   */
  async addChildren(files) {
    for (const file of files) {
      await this.addChild(file);
    }
  }
  /**
   * Add a child to the directory.
   * If it is a nested child the parents will be created if not already exist.
   * @param file The child to add
   */
  async addChild(file) {
    const rootPath = this._path && `${this._path}/`;
    if (isFileSystemFileEntry(file)) {
      file = await new Promise((resolve, reject) => file.file(resolve, reject));
    } else if (isFileSystemDirectoryEntry(file)) {
      const reader = file.createReader();
      const entries = await new Promise((resolve, reject) => reader.readEntries(resolve, reject));
      const child = new Directory(`${rootPath}${file.name}`);
      await child.addChildren(entries);
      this._children.set(file.name, child);
      return;
    }
    file = file;
    const filePath = file.webkitRelativePath ?? file.name;
    if (!filePath.includes("/")) {
      this._children.set(file.name, file);
    } else {
      if (!filePath.startsWith(this._path)) {
        throw new Error(`File ${filePath} is not a child of ${this._path}`);
      }
      const relPath = filePath.slice(rootPath.length);
      const name = (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.basename)(relPath);
      if (name === relPath) {
        this._children.set(name, file);
      } else {
        const base = relPath.slice(0, relPath.indexOf("/"));
        if (this._children.has(base)) {
          await this._children.get(base).addChild(file);
        } else {
          const child = new Directory(`${rootPath}${base}`);
          await child.addChild(file);
          this._children.set(base, child);
        }
      }
    }
  }
}
const gtBuilder = (0,_nextcloud_l10n_gettext__WEBPACK_IMPORTED_MODULE_12__.getGettextBuilder)().detectLocale();
[{ "locale": "af", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Afrikaans (https://www.transifex.com/nextcloud/teams/64236/af/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "af", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Afrikaans (https://www.transifex.com/nextcloud/teams/64236/af/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: af\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "ar", "json": { "charset": "utf-8", "headers": { "Last-Translator": "abusaud, 2024", "Language-Team": "Arabic (https://app.transifex.com/nextcloud/teams/64236/ar/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ar", "Plural-Forms": "nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nAli <alimahwer@yahoo.com>, 2024\nabusaud, 2024\n" }, "msgstr": ["Last-Translator: abusaud, 2024\nLanguage-Team: Arabic (https://app.transifex.com/nextcloud/teams/64236/ar/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ar\nPlural-Forms: nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" هو اسم ممنوع لملف أو مجلد.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" هو نوع ممنوع أن يكون لملف.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" هو غير مسموح به في اسم ملف أو مجلد.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} ملف متعارض", "{count} ملف متعارض", "{count} ملفان متعارضان", "{count} ملف متعارض", "{count} ملفات متعارضة", "{count} ملفات متعارضة"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} ملف متعارض في {dirname}", "{count} ملف متعارض في {dirname}", "{count} ملفان متعارضان في {dirname}", "{count} ملف متعارض في {dirname}", "{count} ملفات متعارضة في {dirname}", "{count} ملفات متعارضة في {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} ثانية متبقية"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} متبقية"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["بضع ثوانٍ متبقية"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["إلغاء"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["إلغِ العملية بالكامل"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["إلغاء عمليات رفع الملفات"] }, "Continue": { "msgid": "Continue", "msgstr": ["إستمر"] }, "Create new": { "msgid": "Create new", "msgstr": ["إنشاء جديد"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["تقدير الوقت المتبقي"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["الإصدار الحالي"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['غير مسموح ان ينتهي اسم الملف بـ "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["إذا اخترت الاحتفاظ بالنسختين فسيتم إلحاق رقم عداد آخر اسم الملف الوارد."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["اسم ملف غير صحيح"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["تاريخ آخر تعديل غير معروف"] }, "New": { "msgid": "New", "msgstr": ["جديد"] }, "New filename": { "msgid": "New filename", "msgstr": ["اسم ملف جديد"] }, "New version": { "msgid": "New version", "msgstr": ["نسخة جديدة"] }, "paused": { "msgid": "paused", "msgstr": ["مُجمَّد"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["معاينة الصورة"] }, "Rename": { "msgid": "Rename", "msgstr": ["تغيير التسمية"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["حدِّد كل صناديق الخيارات"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["حدِّد كل الملفات الموجودة"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["حدِّد كل الملفات الجديدة"] }, "Skip": { "msgid": "Skip", "msgstr": ["تخطِّي"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["تخطَّ {count} ملف", "تخطَّ {count} ملف", "تخطَّ {count} ملف", "تخطَّ {count} ملف", "تخطَّ {count} ملف", "تخطَّ {count} ملف"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["حجم غير معلوم"] }, "Upload": { "msgid": "Upload", "msgstr": ["رفع الملفات"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["رفع ملفات"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["رفع مجلدات"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["الرفع من جهاز "] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["تمّ إلغاء عملية رفع الملفات"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["تمّ تجاوز الرفع"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['رفع "{folder}" تمّ تجاوزه'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["تقدُّم الرفع "] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["عند تحديد مجلد وارد، أي ملفات متعارضة بداخله ستتم الكتابة فوقها."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["عند تحديد مجلد وارد، ستتم كتابة المحتوى في المجلد الموجود و سيتم تنفيذ حل التعارض بشكل تعاوُدي."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["أيُّ الملفات ترغب في الإبقاء عليها؟"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["يمكنك إمّا تغيير اسم الملف، أو تجاوزه، أو إلغاء العملية برُمَّتها."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["يجب أن تختار نسخة واحدة على الأقل من كل ملف للاستمرار."] } } } } }, { "locale": "ast", "json": { "charset": "utf-8", "headers": { "Last-Translator": "enolp <enolp@softastur.org>, 2023", "Language-Team": "Asturian (https://app.transifex.com/nextcloud/teams/64236/ast/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ast", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nenolp <enolp@softastur.org>, 2023\n" }, "msgstr": ["Last-Translator: enolp <enolp@softastur.org>, 2023\nLanguage-Team: Asturian (https://app.transifex.com/nextcloud/teams/64236/ast/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ast\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} ficheru en coflictu", "{count} ficheros en coflictu"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} ficheru en coflictu en {dirname}", "{count} ficheros en coflictu en {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["Queden {seconds} segundos"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["Tiempu que queda: {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["queden unos segundos"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Encaboxar les xubes"] }, "Continue": { "msgid": "Continue", "msgstr": ["Siguir"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["estimando'l tiempu que falta"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Versión esistente"] }, "If you select both versions, the copied file will have a number added to its name.": { "msgid": "If you select both versions, the copied file will have a number added to its name.", "msgstr": ["Si seleiciones dambes versiones, el ficheru copiáu va tener un númberu amestáu al so nome."] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["La data de la última modificación ye desconocida"] }, "New": { "msgid": "New", "msgstr": ["Nuevu"] }, "New version": { "msgid": "New version", "msgstr": ["Versión nueva"] }, "paused": { "msgid": "paused", "msgstr": ["en posa"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Previsualizar la imaxe"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Marcar toles caxelles"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Seleicionar tolos ficheros esistentes"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Seleicionar tolos ficheros nuevos"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Saltar esti ficheru", "Saltar {count} ficheros"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Tamañu desconocíu"] }, "Upload cancelled": { "msgid": "Upload cancelled", "msgstr": ["Encaboxóse la xuba"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Xubir ficheros"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Xuba en cursu"] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["¿Qué ficheros quies caltener?"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Tienes de seleicionar polo menos una versión de cada ficheru pa siguir."] } } } } }, { "locale": "az", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Rashad Aliyev <microphprashad@gmail.com>, 2023", "Language-Team": "Azerbaijani (https://app.transifex.com/nextcloud/teams/64236/az/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "az", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nRashad Aliyev <microphprashad@gmail.com>, 2023\n" }, "msgstr": ["Last-Translator: Rashad Aliyev <microphprashad@gmail.com>, 2023\nLanguage-Team: Azerbaijani (https://app.transifex.com/nextcloud/teams/64236/az/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: az\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} saniyə qalıb"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["{time} qalıb"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["bir neçə saniyə qalıb"] }, "Add": { "msgid": "Add", "msgstr": ["Əlavə et"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Yükləməni imtina et"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["Təxmini qalan vaxt"] }, "paused": { "msgid": "paused", "msgstr": ["pauzadadır"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Faylları yüklə"] } } } } }, { "locale": "be", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Belarusian (https://www.transifex.com/nextcloud/teams/64236/be/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "be", "Plural-Forms": "nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Belarusian (https://www.transifex.com/nextcloud/teams/64236/be/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: be\nPlural-Forms: nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "bg", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Bulgarian (Bulgaria) (https://www.transifex.com/nextcloud/teams/64236/bg_BG/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "bg_BG", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Bulgarian (Bulgaria) (https://www.transifex.com/nextcloud/teams/64236/bg_BG/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: bg_BG\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "bn_BD", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Bengali (Bangladesh) (https://www.transifex.com/nextcloud/teams/64236/bn_BD/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "bn_BD", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Bengali (Bangladesh) (https://www.transifex.com/nextcloud/teams/64236/bn_BD/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: bn_BD\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "br", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Breton (https://www.transifex.com/nextcloud/teams/64236/br/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "br", "Plural-Forms": "nplurals=5; plural=((n%10 == 1) && (n%100 != 11) && (n%100 !=71) && (n%100 !=91) ? 0 :(n%10 == 2) && (n%100 != 12) && (n%100 !=72) && (n%100 !=92) ? 1 :(n%10 ==3 || n%10==4 || n%10==9) && (n%100 < 10 || n% 100 > 19) && (n%100 < 70 || n%100 > 79) && (n%100 < 90 || n%100 > 99) ? 2 :(n != 0 && n % 1000000 == 0) ? 3 : 4);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Breton (https://www.transifex.com/nextcloud/teams/64236/br/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: br\nPlural-Forms: nplurals=5; plural=((n%10 == 1) && (n%100 != 11) && (n%100 !=71) && (n%100 !=91) ? 0 :(n%10 == 2) && (n%100 != 12) && (n%100 !=72) && (n%100 !=92) ? 1 :(n%10 ==3 || n%10==4 || n%10==9) && (n%100 < 10 || n% 100 > 19) && (n%100 < 70 || n%100 > 79) && (n%100 < 90 || n%100 > 99) ? 2 :(n != 0 && n % 1000000 == 0) ? 3 : 4);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "bs", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Bosnian (https://www.transifex.com/nextcloud/teams/64236/bs/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "bs", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Bosnian (https://www.transifex.com/nextcloud/teams/64236/bs/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: bs\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "ca", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Toni Hermoso Pulido <toniher@softcatala.cat>, 2022", "Language-Team": "Catalan (https://www.transifex.com/nextcloud/teams/64236/ca/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ca", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nMarc Riera <marcriera@softcatala.org>, 2022\nToni Hermoso Pulido <toniher@softcatala.cat>, 2022\n" }, "msgstr": ["Last-Translator: Toni Hermoso Pulido <toniher@softcatala.cat>, 2022\nLanguage-Team: Catalan (https://www.transifex.com/nextcloud/teams/64236/ca/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ca\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["Queden {seconds} segons"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["Queden {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["Queden uns segons"] }, "Add": { "msgid": "Add", "msgstr": ["Afegeix"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Cancel·la les pujades"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["S'està estimant el temps restant"] }, "paused": { "msgid": "paused", "msgstr": ["En pausa"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Puja els fitxers"] } } } } }, { "locale": "cs", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Pavel Borecki <pavel.borecki@gmail.com>, 2024", "Language-Team": "Czech (Czech Republic) (https://app.transifex.com/nextcloud/teams/64236/cs_CZ/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "cs_CZ", "Plural-Forms": "nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nMichal Šmahel <ceskyDJ@seznam.cz>, 2024\nMartin Hankovec, 2024\nAppukonrad <appukonrad@gmail.com>, 2024\nPavel Borecki <pavel.borecki@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Pavel Borecki <pavel.borecki@gmail.com>, 2024\nLanguage-Team: Czech (Czech Republic) (https://app.transifex.com/nextcloud/teams/64236/cs_CZ/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cs_CZ\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ["„{segment}“ není povoleno použít jako název souboru či složky."] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ["„{segment}“ není povoleného typu souboru."] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ["„{segment}“ není povoleno použít v rámci názvu souboru či složky."] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} kolize souborů", "{count} kolize souborů", "{count} kolizí souborů", "{count} kolize souborů"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} kolize souboru v {dirname}", "{count} kolize souboru v {dirname}", "{count} kolizí souborů v {dirname}", "{count} kolize souboru v {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["zbývá {seconds}"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["zbývá {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["zbývá několik sekund"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Zrušit"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Zrušit celou operaci"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Zrušit nahrávání"] }, "Continue": { "msgid": "Continue", "msgstr": ["Pokračovat"] }, "Create new": { "msgid": "Create new", "msgstr": ["Vytvořit nový"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["odhaduje se zbývající čas"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Existující verze"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ["Názvy souborů nemohou končit na „{segment}“."] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Pokud vyberete obě verze, příchozí soubor bude mít ke jménu přidánu číslici."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Neplatný název souboru"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Neznámé datum poslední úpravy"] }, "New": { "msgid": "New", "msgstr": ["Nové"] }, "New filename": { "msgid": "New filename", "msgstr": ["Nový název souboru"] }, "New version": { "msgid": "New version", "msgstr": ["Nová verze"] }, "paused": { "msgid": "paused", "msgstr": ["pozastaveno"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Náhled obrázku"] }, "Rename": { "msgid": "Rename", "msgstr": ["Přejmenovat"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Označit všechny zaškrtávací kolonky"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Vybrat veškeré stávající soubory"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Vybrat veškeré nové soubory"] }, "Skip": { "msgid": "Skip", "msgstr": ["Přeskočit"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Přeskočit tento soubor", "Přeskočit {count} soubory", "Přeskočit {count} souborů", "Přeskočit {count} soubory"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Neznámá velikost"] }, "Upload": { "msgid": "Upload", "msgstr": ["Nahrát"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Nahrát soubory"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Nahrát složky"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Nahrát ze zařízení"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Nahrávání bylo zrušeno"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Nahrání bylo přeskočeno"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ["Nahrání „{folder}“ bylo přeskočeno"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Postup v nahrávání"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Po výběru příchozí složky budou rovněž přepsány všechny v ní obsažené konfliktní soubory"] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Když je vybrána příchozí složka, obsah je zapsán do existující složky a je provedeno rekurzivní řešení kolizí."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Které soubory si přejete ponechat?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Soubor je možné buď přejmenovat, přeskočit nebo celou operaci zrušit."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Aby bylo možné pokračovat, je třeba vybrat alespoň jednu verzi od každého souboru."] } } } } }, { "locale": "cy_GB", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Welsh (United Kingdom) (https://www.transifex.com/nextcloud/teams/64236/cy_GB/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "cy_GB", "Plural-Forms": "nplurals=4; plural=(n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Welsh (United Kingdom) (https://www.transifex.com/nextcloud/teams/64236/cy_GB/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: cy_GB\nPlural-Forms: nplurals=4; plural=(n==1) ? 0 : (n==2) ? 1 : (n != 8 && n != 11) ? 2 : 3;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "da", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Martin Bonde <Martin@maboni.dk>, 2024", "Language-Team": "Danish (https://app.transifex.com/nextcloud/teams/64236/da/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "da", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nRasmus Rosendahl-Kaa, 2024\nMartin Bonde <Martin@maboni.dk>, 2024\n" }, "msgstr": ["Last-Translator: Martin Bonde <Martin@maboni.dk>, 2024\nLanguage-Team: Danish (https://app.transifex.com/nextcloud/teams/64236/da/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: da\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" er et forbudt fil- eller mappenavn.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" er en forbudt filtype.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" er ikke tilladt i et fil- eller mappenavn.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} fil konflikt", "{count} filer i konflikt"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} fil konflikt i {dirname}", "{count} filer i konflikt i {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{sekunder} sekunder tilbage"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} tilbage"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["et par sekunder tilbage"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Annuller"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Annuller hele handlingen"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Annuller uploads"] }, "Continue": { "msgid": "Continue", "msgstr": ["Fortsæt"] }, "Create new": { "msgid": "Create new", "msgstr": ["Opret ny"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["estimering af resterende tid"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Eksisterende version"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Filnavne må ikke slutte med "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Hvis du vælger begge versioner, vil den indkommende fil have et nummer tilføjet til sit navn."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Ugyldigt filnavn"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Sidste modifikationsdato ukendt"] }, "New": { "msgid": "New", "msgstr": ["Ny"] }, "New filename": { "msgid": "New filename", "msgstr": ["Nyt filnavn"] }, "New version": { "msgid": "New version", "msgstr": ["Ny version"] }, "paused": { "msgid": "paused", "msgstr": ["pauset"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Forhåndsvisning af billede"] }, "Rename": { "msgid": "Rename", "msgstr": ["Omdøb"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Vælg alle felter"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Vælg alle eksisterende filer"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Vælg alle nye filer"] }, "Skip": { "msgid": "Skip", "msgstr": ["Spring over"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Spring denne fil over", "Spring {count} filer over"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Ukendt størrelse"] }, "Upload": { "msgid": "Upload", "msgstr": ["Upload"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Upload filer"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Upload mapper"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Upload fra enhed"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Upload er blevet annulleret"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Upload er blevet sprunget over"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Upload af "{folder}" er blevet sprunget over'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Upload fremskridt"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Når en indgående mappe er valgt, vil alle modstridende filer i den også blive overskrevet."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Når en indkommende mappe er valgt, vil dens indhold blive skrevet ind i den eksisterende mappe og en rekursiv konfliktløsning udføres."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Hvilke filer ønsker du at beholde?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Du kan enten omdøbe filen, springe denne fil over eller annullere hele handlingen."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Du skal vælge mindst én version af hver fil for at fortsætte."] } } } } }, { "locale": "de", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Andy Scherzinger <info@andy-scherzinger.de>, 2024", "Language-Team": "German (https://app.transifex.com/nextcloud/teams/64236/de/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "de", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nMario Siegmann <mario_siegmann@web.de>, 2024\nMartin Wilichowski, 2024\nAndy Scherzinger <info@andy-scherzinger.de>, 2024\n" }, "msgstr": ["Last-Translator: Andy Scherzinger <info@andy-scherzinger.de>, 2024\nLanguage-Team: German (https://app.transifex.com/nextcloud/teams/64236/de/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: de\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" ist ein verbotener Datei- oder Ordnername.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" ist ein verbotener Dateityp.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" ist in einem Datei- oder Ordnernamen nicht zulässig.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} Datei-Konflikt", "{count} Datei-Konflikte"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} Datei-Konflikt in {dirname}", "{count} Datei-Konflikte in {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} Sekunden verbleiben"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} verbleibend"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["ein paar Sekunden verbleiben"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Abbrechen"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Den gesamten Vorgang abbrechen"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Hochladen abbrechen"] }, "Continue": { "msgid": "Continue", "msgstr": ["Fortsetzen"] }, "Create new": { "msgid": "Create new", "msgstr": ["Neu erstellen"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["Geschätzte verbleibende Zeit"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Vorhandene Version"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Dateinamen dürfen nicht mit "{segment}" enden.'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Wenn du beide Versionen auswählst, wird der eingehenden Datei eine Nummer zum Namen hinzugefügt."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Ungültiger Dateiname"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Datum der letzten Änderung unbekannt"] }, "New": { "msgid": "New", "msgstr": ["Neu"] }, "New filename": { "msgid": "New filename", "msgstr": ["Neuer Dateiname"] }, "New version": { "msgid": "New version", "msgstr": ["Neue Version"] }, "paused": { "msgid": "paused", "msgstr": ["Pausiert"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Vorschaubild"] }, "Rename": { "msgid": "Rename", "msgstr": ["Umbenennen"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Alle Kontrollkästchen aktivieren"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Alle vorhandenen Dateien auswählen"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Alle neuen Dateien auswählen"] }, "Skip": { "msgid": "Skip", "msgstr": ["Überspringen"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Diese Datei überspringen", "{count} Dateien überspringen"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Unbekannte Größe"] }, "Upload": { "msgid": "Upload", "msgstr": ["Hochladen"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Dateien hochladen"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Ordner hochladen"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Vom Gerät hochladen"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Das Hochladen wurde abgebrochen"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Das Hochladen wurde übersprungen"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Das Hochladen von "{folder}" wurde übersprungen'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Fortschritt beim Hochladen"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Wenn ein eingehender Ordner ausgewählt wird, werden alle darin enthaltenen Konfliktdateien ebenfalls überschrieben."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Bei Auswahl eines eingehenden Ordners wird der Inhalt in den vorhandenen Ordner geschrieben und eine rekursive Konfliktlösung durchgeführt."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Welche Dateien möchtest du behalten?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Du kannst die Datei entweder umbenennen, diese Datei überspringen oder den gesamten Vorgang abbrechen."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Du musst mindestens eine Version jeder Datei auswählen, um fortzufahren."] } } } } }, { "locale": "de_DE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Mark Ziegler <mark.ziegler@rakekniven.de>, 2024", "Language-Team": "German (Germany) (https://app.transifex.com/nextcloud/teams/64236/de_DE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "de_DE", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nMario Siegmann <mario_siegmann@web.de>, 2024\nMark Ziegler <mark.ziegler@rakekniven.de>, 2024\n" }, "msgstr": ["Last-Translator: Mark Ziegler <mark.ziegler@rakekniven.de>, 2024\nLanguage-Team: German (Germany) (https://app.transifex.com/nextcloud/teams/64236/de_DE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: de_DE\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" ist ein verbotener Datei- oder Ordnername.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" ist ein verbotener Dateityp.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" ist in einem Datei- oder Ordnernamen nicht zulässig.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} Datei-Konflikt", "{count} Datei-Konflikte"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} Datei-Konflikt in {dirname}", "{count} Datei-Konflikte in {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} Sekunden verbleiben"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} verbleibend"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["ein paar Sekunden verbleiben"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Abbrechen"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Den gesamten Vorgang abbrechen"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Hochladen abbrechen"] }, "Continue": { "msgid": "Continue", "msgstr": ["Fortsetzen"] }, "Create new": { "msgid": "Create new", "msgstr": ["Neu erstellen"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["Berechne verbleibende Zeit"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Vorhandene Version"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Dateinamen dürfen nicht mit "{segment}" enden.'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Wenn Sie beide Versionen auswählen, wird der eingehenden Datei eine Nummer zum Namen hinzugefügt."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Ungültiger Dateiname"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Datum der letzten Änderung unbekannt"] }, "New": { "msgid": "New", "msgstr": ["Neu"] }, "New filename": { "msgid": "New filename", "msgstr": ["Neuer Dateiname"] }, "New version": { "msgid": "New version", "msgstr": ["Neue Version"] }, "paused": { "msgid": "paused", "msgstr": ["Pausiert"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Vorschaubild"] }, "Rename": { "msgid": "Rename", "msgstr": ["Umbenennen"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Alle Kontrollkästchen aktivieren"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Alle vorhandenen Dateien auswählen"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Alle neuen Dateien auswählen"] }, "Skip": { "msgid": "Skip", "msgstr": ["Überspringen"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["{count} Datei überspringen", "{count} Dateien überspringen"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Unbekannte Größe"] }, "Upload": { "msgid": "Upload", "msgstr": ["Hochladen"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Dateien hochladen"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Ordner hochladen"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Vom Gerät hochladen"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Das Hochladen wurde abgebrochen"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Das Hochladen wurde übersprungen"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Das Hochladen von "{folder}" wurde übersprungen'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Fortschritt beim Hochladen"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Wenn ein eingehender Ordner ausgewählt wird, werden alle darin enthaltenen Konfliktdateien ebenfalls überschrieben."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Bei Auswahl eines eingehenden Ordners wird der Inhalt in den vorhandenen Ordner geschrieben und eine rekursive Konfliktlösung durchgeführt."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Welche Dateien möchten Sie behalten?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Sie können die Datei entweder umbenennen, diese Datei überspringen oder den gesamten Vorgang abbrechen."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Sie müssen mindestens eine Version jeder Datei auswählen, um fortzufahren."] } } } } }, { "locale": "el", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Nik Pap, 2022", "Language-Team": "Greek (https://www.transifex.com/nextcloud/teams/64236/el/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "el", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nNik Pap, 2022\n" }, "msgstr": ["Last-Translator: Nik Pap, 2022\nLanguage-Team: Greek (https://www.transifex.com/nextcloud/teams/64236/el/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: el\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["απομένουν {seconds} δευτερόλεπτα"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["απομένουν {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["απομένουν λίγα δευτερόλεπτα"] }, "Add": { "msgid": "Add", "msgstr": ["Προσθήκη"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Ακύρωση μεταφορτώσεων"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["εκτίμηση του χρόνου που απομένει"] }, "paused": { "msgid": "paused", "msgstr": ["σε παύση"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Μεταφόρτωση αρχείων"] } } } } }, { "locale": "en_GB", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Andi Chandler <andi@gowling.com>, 2024", "Language-Team": "English (United Kingdom) (https://app.transifex.com/nextcloud/teams/64236/en_GB/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "en_GB", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nAndi Chandler <andi@gowling.com>, 2024\n" }, "msgstr": ["Last-Translator: Andi Chandler <andi@gowling.com>, 2024\nLanguage-Team: English (United Kingdom) (https://app.transifex.com/nextcloud/teams/64236/en_GB/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: en_GB\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" is a forbidden file or folder name.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" is a forbidden file type.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" is not allowed inside a file or folder name.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} file conflict", "{count} files conflict"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} file conflict in {dirname}", "{count} file conflicts in {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} seconds left"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} left"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["a few seconds left"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Cancel"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Cancel the entire operation"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Cancel uploads"] }, "Continue": { "msgid": "Continue", "msgstr": ["Continue"] }, "Create new": { "msgid": "Create new", "msgstr": ["Create new"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["estimating time left"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Existing version"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Filenames must not end with "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["If you select both versions, the incoming file will have a number added to its name."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Invalid filename"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Last modified date unknown"] }, "New": { "msgid": "New", "msgstr": ["New"] }, "New filename": { "msgid": "New filename", "msgstr": ["New filename"] }, "New version": { "msgid": "New version", "msgstr": ["New version"] }, "paused": { "msgid": "paused", "msgstr": ["paused"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Preview image"] }, "Rename": { "msgid": "Rename", "msgstr": ["Rename"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Select all checkboxes"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Select all existing files"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Select all new files"] }, "Skip": { "msgid": "Skip", "msgstr": ["Skip"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Skip this file", "Skip {count} files"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Unknown size"] }, "Upload": { "msgid": "Upload", "msgstr": ["Upload"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Upload files"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Upload folders"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Upload from device"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Upload has been cancelled"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Upload has been skipped"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Upload of "{folder}" has been skipped'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Upload progress"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["When an incoming folder is selected, any conflicting files within it will also be overwritten."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Which files do you want to keep?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["You can either rename the file, skip this file or cancel the whole operation."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["You need to select at least one version of each file to continue."] } } } } }, { "locale": "eo", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Esperanto (https://www.transifex.com/nextcloud/teams/64236/eo/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "eo", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Esperanto (https://www.transifex.com/nextcloud/teams/64236/eo/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: eo\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Julio C. Ortega, 2024", "Language-Team": "Spanish (https://app.transifex.com/nextcloud/teams/64236/es/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nFranciscoFJ <dev-ooo@satel-sa.com>, 2024\nJulio C. Ortega, 2024\n" }, "msgstr": ["Last-Translator: Julio C. Ortega, 2024\nLanguage-Team: Spanish (https://app.transifex.com/nextcloud/teams/64236/es/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{filename}" contains invalid characters, how do you want to continue?': { "msgid": '"{filename}" contains invalid characters, how do you want to continue?', "msgstr": ['"{filename}" contiene caracteres inválidos, ¿cómo desea continuar?'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} conflicto de archivo", "{count} conflictos de archivo", "{count} conflictos de archivo"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} conflicto de archivo en {dirname}", "{count} conflictos de archivo en {dirname}", "{count} conflictos de archivo en {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} segundos restantes"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} restante"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["quedan unos segundos"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Cancelar"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Cancelar toda la operación"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Cancelar subidas"] }, "Continue": { "msgid": "Continue", "msgstr": ["Continuar"] }, "Create new": { "msgid": "Create new", "msgstr": ["Crear nuevo"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["estimando tiempo restante"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Versión existente"] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Si selecciona ambas versionas, el archivo entrante le será agregado un número a su nombre."] }, "Invalid file name": { "msgid": "Invalid file name", "msgstr": ["Nombre de archivo inválido"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Última fecha de modificación desconocida"] }, "New": { "msgid": "New", "msgstr": ["Nuevo"] }, "New version": { "msgid": "New version", "msgstr": ["Nueva versión"] }, "paused": { "msgid": "paused", "msgstr": ["pausado"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Previsualizar imagen"] }, "Rename": { "msgid": "Rename", "msgstr": ["Renombrar"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Seleccionar todas las casillas de verificación"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Seleccionar todos los archivos existentes"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Seleccionar todos los archivos nuevos"] }, "Skip": { "msgid": "Skip", "msgstr": ["Saltar"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Saltar este archivo", "Saltar {count} archivos", "Saltar {count} archivos"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Tamaño desconocido"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Subir archivos"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Subir carpetas"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Subir desde dispositivo"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["La subida ha sido cancelada"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Progreso de la subida"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Cuando una carpeta entrante es seleccionada, cualquier de los archivos en conflictos también serán sobre-escritos."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Cuando una carpeta entrante es seleccionada, el contenido es escrito en la carpeta existente y se realizará una resolución de conflictos recursiva."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["¿Qué archivos desea conservar?"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Debe seleccionar al menos una versión de cada archivo para continuar."] } } } } }, { "locale": "es_419", "json": { "charset": "utf-8", "headers": { "Last-Translator": "ALEJANDRO CASTRO, 2022", "Language-Team": "Spanish (Latin America) (https://www.transifex.com/nextcloud/teams/64236/es_419/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_419", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nALEJANDRO CASTRO, 2022\n" }, "msgstr": ["Last-Translator: ALEJANDRO CASTRO, 2022\nLanguage-Team: Spanish (Latin America) (https://www.transifex.com/nextcloud/teams/64236/es_419/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_419\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} segundos restantes"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["{tiempo} restante"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["quedan pocos segundos"] }, "Add": { "msgid": "Add", "msgstr": ["agregar"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Cancelar subidas"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["estimando tiempo restante"] }, "paused": { "msgid": "paused", "msgstr": ["pausado"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Subir archivos"] } } } } }, { "locale": "es_AR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Matías Campo Hoet <matiascampo@gmail.com>, 2024", "Language-Team": "Spanish (Argentina) (https://app.transifex.com/nextcloud/teams/64236/es_AR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_AR", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nMatías Campo Hoet <matiascampo@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Matías Campo Hoet <matiascampo@gmail.com>, 2024\nLanguage-Team: Spanish (Argentina) (https://app.transifex.com/nextcloud/teams/64236/es_AR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_AR\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{filename}" contains invalid characters, how do you want to continue?': { "msgid": '"{filename}" contains invalid characters, how do you want to continue?', "msgstr": ['"{filename}" contiene caracteres inválidos, ¿cómo desea continuar?'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} conflicto de archivo", "{count} conflictos de archivo", "{count} conflictos de archivo"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} conflicto de archivo en {dirname}", "{count} conflictos de archivo en {dirname}", "{count} conflictos de archivo en {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} segundos restantes"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} restante"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["quedan unos segundos"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Cancelar"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Cancelar toda la operación"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Cancelar subidas"] }, "Continue": { "msgid": "Continue", "msgstr": ["Continuar"] }, "Create new": { "msgid": "Create new", "msgstr": ["Crear nuevo"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["estimando tiempo restante"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Versión existente"] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Si selecciona ambas versionas, se agregará un número al nombre del archivo entrante."] }, "Invalid file name": { "msgid": "Invalid file name", "msgstr": ["Nombre de archivo inválido"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Fecha de última modificación desconocida"] }, "New": { "msgid": "New", "msgstr": ["Nuevo"] }, "New version": { "msgid": "New version", "msgstr": ["Nueva versión"] }, "paused": { "msgid": "paused", "msgstr": ["pausado"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Vista previa de imagen"] }, "Rename": { "msgid": "Rename", "msgstr": ["Renombrar"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Seleccionar todas las casillas de verificación"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Seleccionar todos los archivos existentes"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Seleccionar todos los archivos nuevos"] }, "Skip": { "msgid": "Skip", "msgstr": ["Omitir"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Omitir este archivo", "Omitir {count} archivos", "Omitir {count} archivos"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Tamaño desconocido"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Cargar archivos"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Cargar carpetas"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Cargar desde dispositivo"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Carga cancelada"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Progreso de la carga"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Cuando una carpeta entrante es seleccionada, cualquier archivo en conflicto dentro de la misma también serán sobreescritos."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Cuando una carpeta entrante es seleccionada, el contenido se escribe en la carpeta existente y se realiza una resolución de conflictos recursiva."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["¿Qué archivos desea conservar?"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Debe seleccionar al menos una versión de cada archivo para continuar."] } } } } }, { "locale": "es_CL", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Chile) (https://www.transifex.com/nextcloud/teams/64236/es_CL/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_CL", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Chile) (https://www.transifex.com/nextcloud/teams/64236/es_CL/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_CL\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_CO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Colombia) (https://www.transifex.com/nextcloud/teams/64236/es_CO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_CO", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Colombia) (https://www.transifex.com/nextcloud/teams/64236/es_CO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_CO\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_CR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Costa Rica) (https://www.transifex.com/nextcloud/teams/64236/es_CR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_CR", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Costa Rica) (https://www.transifex.com/nextcloud/teams/64236/es_CR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_CR\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_DO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Dominican Republic) (https://www.transifex.com/nextcloud/teams/64236/es_DO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_DO", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Dominican Republic) (https://www.transifex.com/nextcloud/teams/64236/es_DO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_DO\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_EC", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Ecuador) (https://www.transifex.com/nextcloud/teams/64236/es_EC/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_EC", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Ecuador) (https://www.transifex.com/nextcloud/teams/64236/es_EC/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_EC\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_GT", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Guatemala) (https://www.transifex.com/nextcloud/teams/64236/es_GT/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_GT", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Guatemala) (https://www.transifex.com/nextcloud/teams/64236/es_GT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_GT\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_HN", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Honduras) (https://www.transifex.com/nextcloud/teams/64236/es_HN/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_HN", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Honduras) (https://www.transifex.com/nextcloud/teams/64236/es_HN/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_HN\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_MX", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Jehu Marcos Herrera Puentes, 2024", "Language-Team": "Spanish (Mexico) (https://app.transifex.com/nextcloud/teams/64236/es_MX/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_MX", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nJehu Marcos Herrera Puentes, 2024\n" }, "msgstr": ["Last-Translator: Jehu Marcos Herrera Puentes, 2024\nLanguage-Team: Spanish (Mexico) (https://app.transifex.com/nextcloud/teams/64236/es_MX/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_MX\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{filename}" contains invalid characters, how do you want to continue?': { "msgid": '"{filename}" contains invalid characters, how do you want to continue?', "msgstr": ['"{filename}" contiene caracteres inválidos, ¿Cómo desea continuar?'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} conflicto de archivo", "{count} conflictos de archivo", "{count} archivos en conflicto"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} archivo en conflicto en {dirname}", "{count} archivos en conflicto en {dirname}", "{count} archivo en conflicto en {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} segundos restantes"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{tiempo} restante"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["quedan pocos segundos"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Cancelar"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Cancelar toda la operación"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Cancelar subidas"] }, "Continue": { "msgid": "Continue", "msgstr": ["Continuar"] }, "Create new": { "msgid": "Create new", "msgstr": ["Crear nuevo"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["estimando tiempo restante"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Versión existente"] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Si selecciona ambas versionas, se agregará un número al nombre del archivo entrante."] }, "Invalid file name": { "msgid": "Invalid file name", "msgstr": ["Nombre de archivo inválido"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Fecha de última modificación desconocida"] }, "New": { "msgid": "New", "msgstr": ["Nuevo"] }, "New version": { "msgid": "New version", "msgstr": ["Nueva versión"] }, "paused": { "msgid": "paused", "msgstr": ["en pausa"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Previsualizar imagen"] }, "Rename": { "msgid": "Rename", "msgstr": ["Renombrar"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Seleccionar todas las casillas de verificación"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Seleccionar todos los archivos existentes"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Seleccionar todos los archivos nuevos"] }, "Skip": { "msgid": "Skip", "msgstr": ["Omitir"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Omitir este archivo", "Omitir {count} archivos", "Omitir {count} archivos"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Tamaño desconocido"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Subir archivos"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Subir carpetas"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Subir desde dispositivo"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["La subida ha sido cancelada"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Progreso de la subida"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Cuando una carpeta entrante es seleccionada, cualquier archivo en conflicto dentro de la misma también será sobrescrito."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Cuando una carpeta entrante es seleccionada, el contenido se escribe en la carpeta existente y se realiza una resolución de conflictos recursiva."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["¿Cuáles archivos desea conservar?"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Debe seleccionar al menos una versión de cada archivo para continuar."] } } } } }, { "locale": "es_NI", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Nicaragua) (https://www.transifex.com/nextcloud/teams/64236/es_NI/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_NI", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Nicaragua) (https://www.transifex.com/nextcloud/teams/64236/es_NI/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_NI\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_PA", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Panama) (https://www.transifex.com/nextcloud/teams/64236/es_PA/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PA", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Panama) (https://www.transifex.com/nextcloud/teams/64236/es_PA/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PA\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_PE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Peru) (https://www.transifex.com/nextcloud/teams/64236/es_PE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PE", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Peru) (https://www.transifex.com/nextcloud/teams/64236/es_PE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PE\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_PR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Puerto Rico) (https://www.transifex.com/nextcloud/teams/64236/es_PR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PR", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Puerto Rico) (https://www.transifex.com/nextcloud/teams/64236/es_PR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PR\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_PY", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Paraguay) (https://www.transifex.com/nextcloud/teams/64236/es_PY/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_PY", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Paraguay) (https://www.transifex.com/nextcloud/teams/64236/es_PY/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_PY\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_SV", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (El Salvador) (https://www.transifex.com/nextcloud/teams/64236/es_SV/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_SV", "Plural-Forms": "nplurals=2; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (El Salvador) (https://www.transifex.com/nextcloud/teams/64236/es_SV/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_SV\nPlural-Forms: nplurals=2; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "es_UY", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Spanish (Uruguay) (https://www.transifex.com/nextcloud/teams/64236/es_UY/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "es_UY", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Spanish (Uruguay) (https://www.transifex.com/nextcloud/teams/64236/es_UY/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: es_UY\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "et_EE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Taavo Roos, 2023", "Language-Team": "Estonian (Estonia) (https://app.transifex.com/nextcloud/teams/64236/et_EE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "et_EE", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nMait R, 2022\nTaavo Roos, 2023\n" }, "msgstr": ["Last-Translator: Taavo Roos, 2023\nLanguage-Team: Estonian (Estonia) (https://app.transifex.com/nextcloud/teams/64236/et_EE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: et_EE\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} jäänud sekundid"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["{time} aega jäänud"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["jäänud mõni sekund"] }, "Add": { "msgid": "Add", "msgstr": ["Lisa"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Tühista üleslaadimine"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["hinnanguline järelejäänud aeg"] }, "paused": { "msgid": "paused", "msgstr": ["pausil"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Lae failid üles"] } } } } }, { "locale": "eu", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Unai Tolosa Pontesta <utolosa002@gmail.com>, 2022", "Language-Team": "Basque (https://www.transifex.com/nextcloud/teams/64236/eu/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "eu", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nUnai Tolosa Pontesta <utolosa002@gmail.com>, 2022\n" }, "msgstr": ["Last-Translator: Unai Tolosa Pontesta <utolosa002@gmail.com>, 2022\nLanguage-Team: Basque (https://www.transifex.com/nextcloud/teams/64236/eu/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: eu\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} segundo geratzen dira"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["{time} geratzen da"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["segundo batzuk geratzen dira"] }, "Add": { "msgid": "Add", "msgstr": ["Gehitu"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Ezeztatu igoerak"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["kalkulatutako geratzen den denbora"] }, "paused": { "msgid": "paused", "msgstr": ["geldituta"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Igo fitxategiak"] } } } } }, { "locale": "fa", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Fatemeh Komeily, 2023", "Language-Team": "Persian (https://app.transifex.com/nextcloud/teams/64236/fa/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fa", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nFatemeh Komeily, 2023\n" }, "msgstr": ["Last-Translator: Fatemeh Komeily, 2023\nLanguage-Team: Persian (https://app.transifex.com/nextcloud/teams/64236/fa/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fa\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["ثانیه های باقی مانده"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["باقی مانده"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["چند ثانیه مانده"] }, "Add": { "msgid": "Add", "msgstr": ["اضافه کردن"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["کنسل کردن فایل های اپلود شده"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["تخمین زمان باقی مانده"] }, "paused": { "msgid": "paused", "msgstr": ["مکث کردن"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["بارگذاری فایل ها"] } } } } }, { "locale": "fi", "json": { "charset": "utf-8", "headers": { "Last-Translator": "teemue, 2024", "Language-Team": "Finnish (Finland) (https://app.transifex.com/nextcloud/teams/64236/fi_FI/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fi_FI", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nJiri Grönroos <jiri.gronroos@iki.fi>, 2024\nthingumy, 2024\nteemue, 2024\n" }, "msgstr": ["Last-Translator: teemue, 2024\nLanguage-Team: Finnish (Finland) (https://app.transifex.com/nextcloud/teams/64236/fi_FI/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fi_FI\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" on kielletty tiedoston tai hakemiston nimi.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" on kielletty tiedostotyyppi.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" ei ole sallittu tiedoston tai hakemiston nimessä.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} tiedoston ristiriita", "{count} tiedoston ristiriita"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} tiedoston ristiriita kansiossa {dirname}", "{count} tiedoston ristiriita kansiossa {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} sekuntia jäljellä"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} jäljellä"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["muutama sekunti jäljellä"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Peruuta"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Peruuta koko toimenpide"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Peruuta lähetykset"] }, "Continue": { "msgid": "Continue", "msgstr": ["Jatka"] }, "Create new": { "msgid": "Create new", "msgstr": ["Luo uusi"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["arvioidaan jäljellä olevaa aikaa"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Olemassa oleva versio"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Tiedoston nimi ei saa päättyä "{segment}"'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Jos valitset molemmat versiot, saapuvan tiedoston nimeen lisätään numero."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Kielletty/väärä tiedoston nimi"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Viimeisin muokkauspäivä on tuntematon"] }, "New": { "msgid": "New", "msgstr": ["Uusi"] }, "New filename": { "msgid": "New filename", "msgstr": ["Uusi tiedostonimi"] }, "New version": { "msgid": "New version", "msgstr": ["Uusi versio"] }, "paused": { "msgid": "paused", "msgstr": ["keskeytetty"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Esikatsele kuva"] }, "Rename": { "msgid": "Rename", "msgstr": ["Nimeä uudelleen"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Valitse kaikki valintaruudut"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Valitse kaikki olemassa olevat tiedostot"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Valitse kaikki uudet tiedostot"] }, "Skip": { "msgid": "Skip", "msgstr": ["Ohita"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Ohita tämä tiedosto", "Ohita {count} tiedostoa"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Tuntematon koko"] }, "Upload": { "msgid": "Upload", "msgstr": ["Lähetä"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Lähetä tiedostoja"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Lähetä kansioita"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Lähetä laitteelta"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Lähetys on peruttu"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Lähetys on ohitettu"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Hakemiston "{folder}" lähetys on ohitettu'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Lähetyksen edistyminen"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Valittuasi saapuvien kansion, kaikki ristiriitaiset tiedostot kansiossa ylikirjoitetaan."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Valittuasi saapuvien kansion, sisältö kirjoitetaan olemassaolevaan kansioon ja suoritetaan rekursiivinen ristiriitojen poisto."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Mitkä tiedostot haluat säilyttää?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Voit joko nimetä tiedoston uudelleen, ohittaa tämän tiedoston tai peruuttaa koko toiminnon."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Sinun täytyy valita vähintään yksi versio jokaisesta tiedostosta jatkaaksesi."] } } } } }, { "locale": "fo", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Faroese (https://www.transifex.com/nextcloud/teams/64236/fo/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fo", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Faroese (https://www.transifex.com/nextcloud/teams/64236/fo/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fo\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "fr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Arnaud Cazenave, 2024", "Language-Team": "French (https://app.transifex.com/nextcloud/teams/64236/fr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "fr", "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nBenoit Pruneau, 2024\njed boulahya, 2024\nJérôme HERBINET, 2024\nArnaud Cazenave, 2024\n" }, "msgstr": ["Last-Translator: Arnaud Cazenave, 2024\nLanguage-Team: French (https://app.transifex.com/nextcloud/teams/64236/fr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: fr\nPlural-Forms: nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" est un nom de fichier ou de dossier interdit.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" est un type de fichier interdit.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": [`"{segment}" n'est pas autorisé dans le nom d'un fichier ou d'un dossier.`] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} fichier en conflit", "{count} fichiers en conflit", "{count} fichiers en conflit"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} fichier en conflit dans {dirname}", "{count} fichiers en conflit dans {dirname}", "{count} fichiers en conflit dans {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} secondes restantes"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} restant"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["quelques secondes restantes"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Annuler"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Annuler l'opération entière"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Annuler les téléversements"] }, "Continue": { "msgid": "Continue", "msgstr": ["Continuer"] }, "Create new": { "msgid": "Create new", "msgstr": ["Créer un nouveau"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["estimation du temps restant"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Version existante"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Le nom des fichiers ne doit pas finir par "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Si vous sélectionnez les deux versions, le nouveau fichier aura un nombre ajouté à son nom."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Nom de fichier invalide"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Date de la dernière modification est inconnue"] }, "New": { "msgid": "New", "msgstr": ["Nouveau"] }, "New filename": { "msgid": "New filename", "msgstr": ["Nouveau nom de fichier"] }, "New version": { "msgid": "New version", "msgstr": ["Nouvelle version"] }, "paused": { "msgid": "paused", "msgstr": ["en pause"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Aperçu de l'image"] }, "Rename": { "msgid": "Rename", "msgstr": ["Renommer"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Sélectionner toutes les cases à cocher"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Sélectionner tous les fichiers existants"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Sélectionner tous les nouveaux fichiers"] }, "Skip": { "msgid": "Skip", "msgstr": ["Ignorer"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Ignorer ce fichier", "Ignorer {count} fichiers", "Ignorer {count} fichiers"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Taille inconnue"] }, "Upload": { "msgid": "Upload", "msgstr": ["Téléverser"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Téléverser des fichiers"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Téléverser des dossiers"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Téléverser depuis l'appareil"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Le téléversement a été annulé"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Le téléversement a été ignoré"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Le téléversement de "{folder}" a été ignoré'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Progression du téléversement"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Lorsqu'un dossier entrant est sélectionné, tous les fichiers en conflit qu'il contient seront également écrasés."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Lorsqu'un dossier entrant est sélectionné, le contenu est ajouté dans le dossier existant et une résolution récursive des conflits est effectuée."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Quels fichiers souhaitez-vous conserver ?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Vous pouvez soit renommer le fichier, soit ignorer le fichier soit annuler toute l'opération."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Vous devez sélectionner au moins une version de chaque fichier pour continuer."] } } } } }, { "locale": "ga", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Aindriú Mac Giolla Eoin, 2024", "Language-Team": "Irish (https://app.transifex.com/nextcloud/teams/64236/ga/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ga", "Plural-Forms": "nplurals=5; plural=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nAindriú Mac Giolla Eoin, 2024\n" }, "msgstr": ["Last-Translator: Aindriú Mac Giolla Eoin, 2024\nLanguage-Team: Irish (https://app.transifex.com/nextcloud/teams/64236/ga/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ga\nPlural-Forms: nplurals=5; plural=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['Is ainm toirmiscthe comhaid nó fillteáin é "{segment}".'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['Is cineál comhaid toirmiscthe é "{segment}".'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": [`Ní cheadaítear "{segment}" taobh istigh d'ainm comhaid nó fillteáin.`] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} coimhlint comhaid", "{count} coimhlintí comhaid", "{count} coimhlintí comhaid", "{count} coimhlintí comhaid", "{count} coimhlintí comhaid"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} coimhlint comhaid i {dirname}", "{count} coimhlintí comhaid i {dirname}", "{count} coimhlintí comhaid i {dirname}", "{count} coimhlintí comhaid i {dirname}", "{count} coimhlintí comhaid i {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} soicind fágtha"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} fágtha"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["cúpla soicind fágtha"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Cealaigh"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Cealaigh an oibríocht iomlán"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Cealaigh uaslódálacha"] }, "Continue": { "msgid": "Continue", "msgstr": ["Leanúint ar aghaidh"] }, "Create new": { "msgid": "Create new", "msgstr": ["Cruthaigh nua"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["ag déanamh meastachán ar an am atá fágtha"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Leagan láithreach "] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Níor cheart go gcríochnaíonn comhaid chomhad le "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Má roghnaíonn tú an dá leagan, cuirfear uimhir leis an ainm a thagann isteach."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Ainm comhaid neamhbhailí"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Dáta modhnaithe is déanaí anaithnid"] }, "New": { "msgid": "New", "msgstr": ["Nua"] }, "New filename": { "msgid": "New filename", "msgstr": ["Ainm comhaid nua"] }, "New version": { "msgid": "New version", "msgstr": ["Leagan nua"] }, "paused": { "msgid": "paused", "msgstr": ["sos"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Íomhá réamhamharc"] }, "Rename": { "msgid": "Rename", "msgstr": ["Athainmnigh"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Roghnaigh gach ticbhosca"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Roghnaigh gach comhad atá ann cheana féin"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Roghnaigh gach comhad nua"] }, "Skip": { "msgid": "Skip", "msgstr": ["Scipeáil"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Léim an comhad seo", "Léim ar {count} comhad", "Léim ar {count} comhad", "Léim ar {count} comhad", "Léim ar {count} comhad"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Méid anaithnid"] }, "Upload": { "msgid": "Upload", "msgstr": ["Uaslódáil"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Uaslódáil comhaid"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Uaslódáil fillteáin"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Íosluchtaigh ó ghléas"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Cuireadh an t-uaslódáil ar ceal"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Léiríodh an uaslódáil"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Léiríodh an uaslódáil "{folder}".'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Uaslódáil dul chun cinn"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Nuair a roghnaítear fillteán isteach, déanfar aon chomhad contrártha laistigh de a fhorscríobh freisin."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Nuair a roghnaítear fillteán isteach, scríobhtar an t-ábhar isteach san fhillteán atá ann cheana agus déantar réiteach coinbhleachta athchúrsach."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Cé na comhaid ar mhaith leat a choinneáil?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Is féidir leat an comhad a athainmniú, scipeáil an comhad seo nó an oibríocht iomlán a chealú."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Ní mór duit leagan amháin ar a laghad de gach comhad a roghnú chun leanúint ar aghaidh."] } } } } }, { "locale": "gd", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Gaelic, Scottish (https://www.transifex.com/nextcloud/teams/64236/gd/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "gd", "Plural-Forms": "nplurals=4; plural=(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Gaelic, Scottish (https://www.transifex.com/nextcloud/teams/64236/gd/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: gd\nPlural-Forms: nplurals=4; plural=(n==1 || n==11) ? 0 : (n==2 || n==12) ? 1 : (n > 2 && n < 20) ? 2 : 3;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "gl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Miguel Anxo Bouzada <mbouzada@gmail.com>, 2024", "Language-Team": "Galician (https://app.transifex.com/nextcloud/teams/64236/gl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "gl", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nMiguel Anxo Bouzada <mbouzada@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Miguel Anxo Bouzada <mbouzada@gmail.com>, 2024\nLanguage-Team: Galician (https://app.transifex.com/nextcloud/teams/64236/gl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: gl\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ["«{segment}» é un nome vedado para un ficheiro ou cartafol."] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ["«{segment}» é un tipo de ficheiro vedado."] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ["«{segment}» non está permitido dentro dun nome de ficheiro ou cartafol."] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} conflito de ficheiros", "{count} conflitos de ficheiros"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} conflito de ficheiros en {dirname}", "{count} conflitos de ficheiros en {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["faltan {seconds} segundos"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["falta {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["faltan uns segundos"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Cancelar"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Cancela toda a operación"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Cancelar envíos"] }, "Continue": { "msgid": "Continue", "msgstr": ["Continuar"] }, "Create new": { "msgid": "Create new", "msgstr": ["Crear un novo"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["calculando canto tempo falta"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Versión existente"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ["Os nomes de ficheiros non deben rematar con «{segment}»."] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Se selecciona ambas as versións, o ficheiro entrante terá un número engadido ao seu nome."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["O nome de ficheiro non é válido"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Data da última modificación descoñecida"] }, "New": { "msgid": "New", "msgstr": ["Nova"] }, "New filename": { "msgid": "New filename", "msgstr": ["Novo nome de ficheiro"] }, "New version": { "msgid": "New version", "msgstr": ["Nova versión"] }, "paused": { "msgid": "paused", "msgstr": ["detido"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Vista previa da imaxe"] }, "Rename": { "msgid": "Rename", "msgstr": ["Renomear"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Marcar todas as caixas de selección"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Seleccionar todos os ficheiros existentes"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Seleccionar todos os ficheiros novos"] }, "Skip": { "msgid": "Skip", "msgstr": ["Omitir"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Omita este ficheiro", "Omitir {count} ficheiros"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Tamaño descoñecido"] }, "Upload": { "msgid": "Upload", "msgstr": ["Enviar"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Enviar ficheiros"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Enviar cartafoles"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Enviar dende o dispositivo"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["O envío foi cancelado"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["O envío foi omitido"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ["O envío de «{folder}» foi omitido"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Progreso do envío"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Cando se selecciona un cartafol entrante, tamén se sobrescribirán os ficheiros en conflito dentro del."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Cando se selecciona un cartafol entrante, o contido escríbese no cartafol existente e lévase a cabo unha resolución recursiva de conflitos."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Que ficheiros quere conservar?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Pode cambiar o nome do ficheiro, omitir este ficheiro ou cancelar toda a operación."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Debe seleccionar polo menos unha versión de cada ficheiro para continuar."] } } } } }, { "locale": "he", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Hebrew (https://www.transifex.com/nextcloud/teams/64236/he/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "he", "Plural-Forms": "nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Hebrew (https://www.transifex.com/nextcloud/teams/64236/he/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: he\nPlural-Forms: nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "hi_IN", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Hindi (India) (https://www.transifex.com/nextcloud/teams/64236/hi_IN/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hi_IN", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Hindi (India) (https://www.transifex.com/nextcloud/teams/64236/hi_IN/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hi_IN\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "hr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Croatian (https://www.transifex.com/nextcloud/teams/64236/hr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hr", "Plural-Forms": "nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Croatian (https://www.transifex.com/nextcloud/teams/64236/hr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hr\nPlural-Forms: nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "hsb", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Upper Sorbian (https://www.transifex.com/nextcloud/teams/64236/hsb/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hsb", "Plural-Forms": "nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Upper Sorbian (https://www.transifex.com/nextcloud/teams/64236/hsb/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hsb\nPlural-Forms: nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "hu", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Gyuris Gellért <jobel@ujevangelizacio.hu>, 2024", "Language-Team": "Hungarian (Hungary) (https://app.transifex.com/nextcloud/teams/64236/hu_HU/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hu_HU", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nGyuris Gellért <jobel@ujevangelizacio.hu>, 2024\n" }, "msgstr": ["Last-Translator: Gyuris Gellért <jobel@ujevangelizacio.hu>, 2024\nLanguage-Team: Hungarian (Hungary) (https://app.transifex.com/nextcloud/teams/64236/hu_HU/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hu_HU\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['Tiltott fájl- vagy mappanév: „{segment}".'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['Tiltott fájltípus: „{segment}".'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['Nem megengedett egy fájl- vagy mappanévben: „{segment}".'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count}fájlt érintő konfliktus", "{count} fájlt érintő konfliktus"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} fájlt érintő konfliktus a mappában: {dirname}", "{count}fájlt érintő konfliktus a mappában: {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{} másodperc van hátra"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} van hátra"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["pár másodperc van hátra"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Mégse"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Teljes művelet megszakítása"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Feltöltések megszakítása"] }, "Continue": { "msgid": "Continue", "msgstr": ["Tovább"] }, "Create new": { "msgid": "Create new", "msgstr": ["Új létrehozása"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["hátralévő idő becslése"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Jelenlegi változat"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ["Fájlnevek nem végződhetnek erre: „{segment}”."] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Ha mindkét verziót kiválasztja, a bejövő fájl neve egy számmal egészül ki."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Érvénytelen fájlnév"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Utolsó módosítás dátuma ismeretlen"] }, "New": { "msgid": "New", "msgstr": ["Új"] }, "New filename": { "msgid": "New filename", "msgstr": ["Új fájlnév"] }, "New version": { "msgid": "New version", "msgstr": ["Új verzió"] }, "paused": { "msgid": "paused", "msgstr": ["szüneteltetve"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Kép előnézete"] }, "Rename": { "msgid": "Rename", "msgstr": ["Átnevezés"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Minden jelölőnégyzet kijelölése"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Minden jelenlegi fájl kijelölése"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Minden új fájl kijelölése"] }, "Skip": { "msgid": "Skip", "msgstr": ["Kihagyás"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Ezen fájl kihagyása", "{count}fájl kihagyása"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Ismeretlen méret"] }, "Upload": { "msgid": "Upload", "msgstr": ["Feltöltés"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Fájlok feltöltése"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Mappák feltöltése"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Feltöltés eszközről"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Feltöltés meg lett szakítva"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Feltöltés át lett ugorva"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ["„{folder}” feltöltése át lett ugorva"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Feltöltési folyamat"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Ha egy bejövő mappa van kiválasztva, a mappában lévő ütköző fájlok is felülírásra kerülnek."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Ha egy bejövő mappa van kiválasztva, a tartalom a meglévő mappába íródik és rekurzív konfliktusfeloldás történik."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Mely fájlokat kívánja megtartani?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Átnevezheti a fájlt, kihagyhatja ezt a fájlt, vagy törölheti az egész műveletet."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["A folytatáshoz minden fájlból legalább egy verziót ki kell választani."] } } } } }, { "locale": "hy", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Armenian (https://www.transifex.com/nextcloud/teams/64236/hy/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "hy", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Armenian (https://www.transifex.com/nextcloud/teams/64236/hy/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: hy\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "ia", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Interlingua (https://www.transifex.com/nextcloud/teams/64236/ia/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ia", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Interlingua (https://www.transifex.com/nextcloud/teams/64236/ia/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ia\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "id", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Linerly <linerly@proton.me>, 2023", "Language-Team": "Indonesian (https://app.transifex.com/nextcloud/teams/64236/id/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "id", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nEmpty Slot Filler, 2023\nLinerly <linerly@proton.me>, 2023\n" }, "msgstr": ["Last-Translator: Linerly <linerly@proton.me>, 2023\nLanguage-Team: Indonesian (https://app.transifex.com/nextcloud/teams/64236/id/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: id\nPlural-Forms: nplurals=1; plural=0;\n"] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} berkas berkonflik"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} berkas berkonflik dalam {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} detik tersisa"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} tersisa"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["tinggal sebentar lagi"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Batalkan unggahan"] }, "Continue": { "msgid": "Continue", "msgstr": ["Lanjutkan"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["memperkirakan waktu yang tersisa"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Versi yang ada"] }, "If you select both versions, the copied file will have a number added to its name.": { "msgid": "If you select both versions, the copied file will have a number added to its name.", "msgstr": ["Jika Anda memilih kedua versi, nama berkas yang disalin akan ditambahi angka."] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Tanggal perubahan terakhir tidak diketahui"] }, "New": { "msgid": "New", "msgstr": ["Baru"] }, "New version": { "msgid": "New version", "msgstr": ["Versi baru"] }, "paused": { "msgid": "paused", "msgstr": ["dijeda"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Gambar pratinjau"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Pilih semua kotak centang"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Pilih semua berkas yang ada"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Pilih semua berkas baru"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Lewati {count} berkas"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Ukuran tidak diketahui"] }, "Upload cancelled": { "msgid": "Upload cancelled", "msgstr": ["Unggahan dibatalkan"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Unggah berkas"] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Berkas mana yang Anda ingin tetap simpan?"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Anda harus memilih setidaknya satu versi dari masing-masing berkas untuk melanjutkan."] } } } } }, { "locale": "ig", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Igbo (https://www.transifex.com/nextcloud/teams/64236/ig/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ig", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Igbo (https://www.transifex.com/nextcloud/teams/64236/ig/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ig\nPlural-Forms: nplurals=1; plural=0;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "is", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Sveinn í Felli <sv1@fellsnet.is>, 2023", "Language-Team": "Icelandic (https://app.transifex.com/nextcloud/teams/64236/is/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "is", "Plural-Forms": "nplurals=2; plural=(n % 10 != 1 || n % 100 == 11);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nSveinn í Felli <sv1@fellsnet.is>, 2023\n" }, "msgstr": ["Last-Translator: Sveinn í Felli <sv1@fellsnet.is>, 2023\nLanguage-Team: Icelandic (https://app.transifex.com/nextcloud/teams/64236/is/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: is\nPlural-Forms: nplurals=2; plural=(n % 10 != 1 || n % 100 == 11);\n"] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} árekstur skráa", "{count} árekstrar skráa"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} árekstur skráa í {dirname}", "{count} árekstrar skráa í {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} sekúndur eftir"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} eftir"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["nokkrar sekúndur eftir"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Hætta við innsendingar"] }, "Continue": { "msgid": "Continue", "msgstr": ["Halda áfram"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["áætla tíma sem eftir er"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Fyrirliggjandi útgáfa"] }, "If you select both versions, the copied file will have a number added to its name.": { "msgid": "If you select both versions, the copied file will have a number added to its name.", "msgstr": ["Ef þú velur báðar útgáfur, þá mun verða bætt tölustaf aftan við heiti afrituðu skrárinnar."] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Síðasta breytingadagsetning er óþekkt"] }, "New": { "msgid": "New", "msgstr": ["Nýtt"] }, "New version": { "msgid": "New version", "msgstr": ["Ný útgáfa"] }, "paused": { "msgid": "paused", "msgstr": ["í bið"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Forskoðun myndar"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Velja gátreiti"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Velja allar fyrirliggjandi skrár"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Velja allar nýjar skrár"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Sleppa þessari skrá", "Sleppa {count} skrám"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Óþekkt stærð"] }, "Upload cancelled": { "msgid": "Upload cancelled", "msgstr": ["Hætt við innsendingu"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Senda inn skrár"] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Hvaða skrám vilt þú vilt halda eftir?"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Þú verður að velja að minnsta kosti eina útgáfu af hverri skrá til að halda áfram."] } } } } }, { "locale": "it", "json": { "charset": "utf-8", "headers": { "Last-Translator": "albanobattistella <albanobattistella@gmail.com>, 2024", "Language-Team": "Italian (https://app.transifex.com/nextcloud/teams/64236/it/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "it", "Plural-Forms": "nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nFrancesco Sercia, 2024\nalbanobattistella <albanobattistella@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: albanobattistella <albanobattistella@gmail.com>, 2024\nLanguage-Team: Italian (https://app.transifex.com/nextcloud/teams/64236/it/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: it\nPlural-Forms: nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" è un nome di file o cartella proibito.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}"è un tipo di file proibito.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": [`"{segment}" non è consentito all'interno di un nome di file o cartella.`] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} file in conflitto", "{count} file in conflitto", "{count} file in conflitto"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} file in conflitto in {dirname}", "{count} file in conflitto in {dirname}", "{count} file in conflitto in {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} secondi rimanenti "] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} rimanente"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["alcuni secondi rimanenti"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Annulla"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Annulla l'intera operazione"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Annulla i caricamenti"] }, "Continue": { "msgid": "Continue", "msgstr": ["Continua"] }, "Create new": { "msgid": "Create new", "msgstr": ["Crea nuovo"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["calcolo il tempo rimanente"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Versione esistente"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['I nomi dei file non devono terminare con "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Se selezioni entrambe le versioni, nel nome del file copiato verrà aggiunto un numero "] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Nome file non valido"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Ultima modifica sconosciuta"] }, "New": { "msgid": "New", "msgstr": ["Nuovo"] }, "New filename": { "msgid": "New filename", "msgstr": ["Nuovo nome file"] }, "New version": { "msgid": "New version", "msgstr": ["Nuova versione"] }, "paused": { "msgid": "paused", "msgstr": ["pausa"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Anteprima immagine"] }, "Rename": { "msgid": "Rename", "msgstr": ["Rinomina"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Seleziona tutte le caselle"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Seleziona tutti i file esistenti"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Seleziona tutti i nuovi file"] }, "Skip": { "msgid": "Skip", "msgstr": ["Salta"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Salta questo file", "Salta {count} file", "Salta {count} file"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Dimensione sconosciuta"] }, "Upload": { "msgid": "Upload", "msgstr": ["Caricamento"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Carica i file"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Carica cartelle"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Carica dal dispositivo"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Caricamento annullato"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Il caricamento è stato saltato"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Il caricamento di "{folder}" è stato saltato'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Progresso del caricamento"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Quando si seleziona una cartella in arrivo, anche tutti i file in conflitto al suo interno verranno sovrascritti."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Quando si seleziona una cartella in arrivo, il contenuto viene scritto nella cartella esistente e viene eseguita una risoluzione ricorsiva dei conflitti."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Quali file vuoi mantenere?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["È possibile rinominare il file, ignorarlo o annullare l'intera operazione."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Devi selezionare almeno una versione di ogni file per continuare"] } } } } }, { "locale": "ja", "json": { "charset": "utf-8", "headers": { "Last-Translator": "kshimohata, 2024", "Language-Team": "Japanese (Japan) (https://app.transifex.com/nextcloud/teams/64236/ja_JP/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ja_JP", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nkojima.imamura, 2024\nTakafumi AKAMATSU, 2024\ndevi, 2024\nkshimohata, 2024\n" }, "msgstr": ["Last-Translator: kshimohata, 2024\nLanguage-Team: Japanese (Japan) (https://app.transifex.com/nextcloud/teams/64236/ja_JP/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ja_JP\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" は禁止されているファイルまたはフォルダ名です。'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" は禁止されているファイルタイプです。'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['ファイルまたはフォルダ名に "{segment}" を含めることはできません。'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} ファイル数の競合"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{dirname} で {count} 個のファイルが競合しています"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["残り {seconds} 秒"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["残り {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["残り数秒"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["キャンセル"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["すべての操作をキャンセルする"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["アップロードをキャンセル"] }, "Continue": { "msgid": "Continue", "msgstr": ["続ける"] }, "Create new": { "msgid": "Create new", "msgstr": ["新規作成"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["概算残り時間"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["既存バージョン"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['ファイル名の末尾に "{segment}" を付けることはできません。'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["両方のバージョンを選択した場合、受信ファイルの名前に数字が追加されます。"] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["無効なファイル名"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["最終更新日不明"] }, "New": { "msgid": "New", "msgstr": ["新規作成"] }, "New filename": { "msgid": "New filename", "msgstr": ["新しいファイル名"] }, "New version": { "msgid": "New version", "msgstr": ["新しいバージョン"] }, "paused": { "msgid": "paused", "msgstr": ["一時停止中"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["プレビュー画像"] }, "Rename": { "msgid": "Rename", "msgstr": ["名前を変更"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["すべて選択"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["すべての既存ファイルを選択"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["すべての新規ファイルを選択"] }, "Skip": { "msgid": "Skip", "msgstr": ["スキップ"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["{count} 個のファイルをスキップする"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["サイズ不明"] }, "Upload": { "msgid": "Upload", "msgstr": ["アップロード"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["ファイルをアップロード"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["フォルダのアップロード"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["デバイスからのアップロード"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["アップロードはキャンセルされました"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["アップロードがスキップされました"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['"{folder}" のアップロードがスキップされました'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["アップロード進行状況"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["受信フォルダが選択されると、その中の競合するファイルもすべて上書きされます。"] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["受信フォルダが選択されると、その内容は既存のフォルダに書き込まれ、再帰的な競合解決が行われます。"] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["どのファイルを保持しますか？"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["ファイル名を変更するか、このファイルをスキップするか、操作全体をキャンセルすることができます。"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["続行するには、各ファイルの少なくとも1つのバージョンを選択する必要があります。"] } } } } }, { "locale": "ka", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Georgian (https://www.transifex.com/nextcloud/teams/64236/ka/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ka", "Plural-Forms": "nplurals=2; plural=(n!=1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Georgian (https://www.transifex.com/nextcloud/teams/64236/ka/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ka\nPlural-Forms: nplurals=2; plural=(n!=1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "ka_GE", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Georgian (Georgia) (https://www.transifex.com/nextcloud/teams/64236/ka_GE/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ka_GE", "Plural-Forms": "nplurals=2; plural=(n!=1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Georgian (Georgia) (https://www.transifex.com/nextcloud/teams/64236/ka_GE/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ka_GE\nPlural-Forms: nplurals=2; plural=(n!=1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "kab", "json": { "charset": "utf-8", "headers": { "Last-Translator": "ZiriSut, 2023", "Language-Team": "Kabyle (https://app.transifex.com/nextcloud/teams/64236/kab/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "kab", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nZiriSut, 2023\n" }, "msgstr": ["Last-Translator: ZiriSut, 2023\nLanguage-Team: Kabyle (https://app.transifex.com/nextcloud/teams/64236/kab/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: kab\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} tesdatin i d-yeqqimen"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["{time} i d-yeqqimen"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["qqiment-d kra n tesdatin kan"] }, "Add": { "msgid": "Add", "msgstr": ["Rnu"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Sefsex asali"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["asizel n wakud i d-yeqqimen"] }, "paused": { "msgid": "paused", "msgstr": ["yeḥbes"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Sali-d ifuyla"] } } } } }, { "locale": "kk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Kazakh (https://www.transifex.com/nextcloud/teams/64236/kk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "kk", "Plural-Forms": "nplurals=2; plural=(n!=1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Kazakh (https://www.transifex.com/nextcloud/teams/64236/kk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: kk\nPlural-Forms: nplurals=2; plural=(n!=1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "km", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Khmer (https://www.transifex.com/nextcloud/teams/64236/km/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "km", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Khmer (https://www.transifex.com/nextcloud/teams/64236/km/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: km\nPlural-Forms: nplurals=1; plural=0;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "kn", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Kannada (https://www.transifex.com/nextcloud/teams/64236/kn/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "kn", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Kannada (https://www.transifex.com/nextcloud/teams/64236/kn/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: kn\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "ko", "json": { "charset": "utf-8", "headers": { "Last-Translator": "이상오, 2024", "Language-Team": "Korean (https://app.transifex.com/nextcloud/teams/64236/ko/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ko", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\n이상오, 2024\n" }, "msgstr": ["Last-Translator: 이상오, 2024\nLanguage-Team: Korean (https://app.transifex.com/nextcloud/teams/64236/ko/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ko\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}"(은)는 금지된 파일 및 폴더 이름입니다.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}"(은)는 금지된 파일 형식입니다.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['파일이나 폴더 이름에 "{segment}"(을)를 사용할 수 없습니다.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count}개의 파일이 충돌함"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{dirname}에서 {count}개의 파일이 충돌함"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds}초 남음"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} 남음"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["곧 완료"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["취소"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["전체 작업을 취소"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["업로드 취소"] }, "Continue": { "msgid": "Continue", "msgstr": ["확인"] }, "Create new": { "msgid": "Create new", "msgstr": ["새로 만들기"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["남은 시간 계산"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["현재 버전"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['파일 이름은 "{segment}"(으)로 끝나야 합니다.'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["두 파일을 모두 선택하면, 들어오는 파일의 이름에 번호가 추가됩니다."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["잘못된 파일 이름"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["최근 수정일 알 수 없음"] }, "New": { "msgid": "New", "msgstr": ["새로 만들기"] }, "New filename": { "msgid": "New filename", "msgstr": ["새 파일 이름"] }, "New version": { "msgid": "New version", "msgstr": ["새 버전"] }, "paused": { "msgid": "paused", "msgstr": ["일시정지됨"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["미리보기 이미지"] }, "Rename": { "msgid": "Rename", "msgstr": ["이름 바꾸기"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["모든 체크박스 선택"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["기존 파일을 모두 선택"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["새로운 파일을 모두 선택"] }, "Skip": { "msgid": "Skip", "msgstr": ["건너뛰기"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["{count}개의 파일 넘기기"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["크기를 알 수 없음"] }, "Upload": { "msgid": "Upload", "msgstr": ["업로드"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["파일 업로드"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["폴더 업로드"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["장치에서 업로드"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["업로드가 취소되었습니다."] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["업로드를 건너뛰었습니다."] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['"{folder}" 업로드를 건너뛰었습니다.'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["업로드 진행도"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["들어오는 폴더를 선택했다면, 충돌하는 내부 파일들은 덮어쓰기 됩니다."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["들어오는 폴더를 선택했다면 내용물이 그 기존 폴더 안에 작성되고, 전체적으로 충돌 해결을 수행합니다."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["어떤 파일을 보존하시겠습니까?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["파일 이름을 바꾸거나, 이 파일을 건너뛰거나 모든 작업을 취소할 수 있습니다."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["계속하기 위해서는 한 파일에 최소 하나의 버전을 선택해야 합니다."] } } } } }, { "locale": "la", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Latin (https://www.transifex.com/nextcloud/teams/64236/la/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "la", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Latin (https://www.transifex.com/nextcloud/teams/64236/la/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: la\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "lb", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Luxembourgish (https://www.transifex.com/nextcloud/teams/64236/lb/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lb", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Luxembourgish (https://www.transifex.com/nextcloud/teams/64236/lb/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lb\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "lo", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Lao (https://www.transifex.com/nextcloud/teams/64236/lo/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lo", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Lao (https://www.transifex.com/nextcloud/teams/64236/lo/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lo\nPlural-Forms: nplurals=1; plural=0;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "lt_LT", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Lithuanian (Lithuania) (https://www.transifex.com/nextcloud/teams/64236/lt_LT/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lt_LT", "Plural-Forms": "nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Lithuanian (Lithuania) (https://www.transifex.com/nextcloud/teams/64236/lt_LT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lt_LT\nPlural-Forms: nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "lv", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Latvian (https://www.transifex.com/nextcloud/teams/64236/lv/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "lv", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Latvian (https://www.transifex.com/nextcloud/teams/64236/lv/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: lv\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "mk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Сашко Тодоров <sasetodorov@gmail.com>, 2022", "Language-Team": "Macedonian (https://www.transifex.com/nextcloud/teams/64236/mk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "mk", "Plural-Forms": "nplurals=2; plural=(n % 10 == 1 && n % 100 != 11) ? 0 : 1;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nСашко Тодоров <sasetodorov@gmail.com>, 2022\n" }, "msgstr": ["Last-Translator: Сашко Тодоров <sasetodorov@gmail.com>, 2022\nLanguage-Team: Macedonian (https://www.transifex.com/nextcloud/teams/64236/mk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mk\nPlural-Forms: nplurals=2; plural=(n % 10 == 1 && n % 100 != 11) ? 0 : 1;\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["преостануваат {seconds} секунди"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["преостанува {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["уште неколку секунди"] }, "Add": { "msgid": "Add", "msgstr": ["Додади"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Прекини прикачување"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["приближно преостанато време"] }, "paused": { "msgid": "paused", "msgstr": ["паузирано"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Прикачување датотеки"] } } } } }, { "locale": "mn", "json": { "charset": "utf-8", "headers": { "Last-Translator": "BATKHUYAG Ganbold, 2023", "Language-Team": "Mongolian (https://app.transifex.com/nextcloud/teams/64236/mn/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "mn", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nBATKHUYAG Ganbold, 2023\n" }, "msgstr": ["Last-Translator: BATKHUYAG Ganbold, 2023\nLanguage-Team: Mongolian (https://app.transifex.com/nextcloud/teams/64236/mn/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mn\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} секунд үлдсэн"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["{time} үлдсэн"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["хэдхэн секунд үлдсэн"] }, "Add": { "msgid": "Add", "msgstr": ["Нэмэх"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Илгээлтийг цуцлах"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["Үлдсэн хугацааг тооцоолж байна"] }, "paused": { "msgid": "paused", "msgstr": ["түр зогсоосон"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Файл илгээх"] } } } } }, { "locale": "mr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Marathi (https://www.transifex.com/nextcloud/teams/64236/mr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "mr", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Marathi (https://www.transifex.com/nextcloud/teams/64236/mr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: mr\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "ms_MY", "json": { "charset": "utf-8", "headers": { "Last-Translator": "DT Navy, 2024", "Language-Team": "Malay (Malaysia) (https://app.transifex.com/nextcloud/teams/64236/ms_MY/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ms_MY", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nDT Navy, 2024\n" }, "msgstr": ["Last-Translator: DT Navy, 2024\nLanguage-Team: Malay (Malaysia) (https://app.transifex.com/nextcloud/teams/64236/ms_MY/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ms_MY\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" adalah fail dan nama folder yang dilarang'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" adalah jenis fail yang dilarang'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" adalah tidak dibenarkan dalam nama fail atau folder'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} files bertindih"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} fail bertindih dalam {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} saat tinggal"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} tinggal"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["beberapa saat lagi"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["batal"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Batal keseluruhan operasi"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["batal muat naik"] }, "Continue": { "msgid": "Continue", "msgstr": ["teruskan"] }, "Create new": { "msgid": "Create new", "msgstr": ["Buat baharu"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["jangkaan masa tinggal"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["versi sedia ada"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Nama fail tidak boleh berakhir dengan "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Jika dua versi dipilih, fail yang masuk akan ditambah bilangan pada namanya."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Nama fail tidak sah"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Tarikh terakhir diubah suai tidak diketahui"] }, "New": { "msgid": "New", "msgstr": ["Baru"] }, "New filename": { "msgid": "New filename", "msgstr": ["Nama fail baharu"] }, "New version": { "msgid": "New version", "msgstr": ["Versi baharu"] }, "paused": { "msgid": "paused", "msgstr": ["Jeda"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Pratonton gambar"] }, "Rename": { "msgid": "Rename", "msgstr": ["Menamakan semula"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Pilih semua kotak pilihan"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Pilih semua fail yang wujud"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["pilih semua fail baharu"] }, "Skip": { "msgid": "Skip", "msgstr": ["Langkau"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Langkau fail {count}"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Saiz tidak diketahui"] }, "Upload": { "msgid": "Upload", "msgstr": ["Muat naik"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Muat naik fail"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Muat naik folder"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Muat naik dari peranti"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Muat naik telah dibatalkan"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Muat naik telah dilangkau"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Muat naik "{folder}" telah dilangkau'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Kemajuan muat naik"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Apabila folder masuk dipilih, sebarang fail bertindih akan ditulis semula"] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Apabila folder masuk dipilih, kandungan ditulis ke dalam folder sedia ada dan penyelesaian konflik rekursif dilakukan."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Fail yang mana ingin disimpan?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["And boleh menamakan semula fail, langkau fail tersebut atau membatalkan keseluruhan operasi"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Anda perlu memilih sekurangnya satu versi setiap fail untuk teruskan"] } } } } }, { "locale": "my", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Burmese (https://www.transifex.com/nextcloud/teams/64236/my/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "my", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Burmese (https://www.transifex.com/nextcloud/teams/64236/my/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: my\nPlural-Forms: nplurals=1; plural=0;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "nb", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Roger Knutsen, 2024", "Language-Team": "Norwegian Bokmål (Norway) (https://app.transifex.com/nextcloud/teams/64236/nb_NO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "nb_NO", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nRoger Knutsen, 2024\n" }, "msgstr": ["Last-Translator: Roger Knutsen, 2024\nLanguage-Team: Norwegian Bokmål (Norway) (https://app.transifex.com/nextcloud/teams/64236/nb_NO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nb_NO\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" er et forbudt fil- eller mappenavn.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" er en forbudt filtype.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" er ikke tillatt i et fil- eller mappenavn.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} file conflict", "{count} filkonflikter"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} file conflict in {dirname}", "{count} filkonflikter i {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} sekunder igjen"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} igjen"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["noen få sekunder igjen"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Avbryt"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Avbryt hele operasjonen"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Avbryt opplastninger"] }, "Continue": { "msgid": "Continue", "msgstr": ["Fortsett"] }, "Create new": { "msgid": "Create new", "msgstr": ["Opprett ny"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["Estimerer tid igjen"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Gjeldende versjon"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Filnavn må ikke slutte med "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Hvis du velger begge versjonene, vil den innkommende filen ha et nummer lagt til navnet."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Ugyldig filnavn"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Siste gang redigert ukjent"] }, "New": { "msgid": "New", "msgstr": ["Ny"] }, "New filename": { "msgid": "New filename", "msgstr": ["Nytt filnavn"] }, "New version": { "msgid": "New version", "msgstr": ["Ny versjon"] }, "paused": { "msgid": "paused", "msgstr": ["pauset"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Forhåndsvis bilde"] }, "Rename": { "msgid": "Rename", "msgstr": ["Omdøp"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Velg alle"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Velg alle eksisterende filer"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Velg alle nye filer"] }, "Skip": { "msgid": "Skip", "msgstr": ["Hopp over"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Skip this file", "Hopp over {count} filer"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Ukjent størrelse"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Last opp filer"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Last opp mapper"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Last opp fra enhet"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Opplastingen er kansellert"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Opplastingen er hoppet over"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Opplasting av "{folder}" er hoppet over'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Fremdrift, opplasting"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Når en innkommende mappe velges, blir eventuelle motstridende filer i den også overskrevet."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Når en innkommende mappe velges, skrives innholdet inn i den eksisterende mappen, og en rekursiv konfliktløsning utføres."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Hvilke filer vil du beholde?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Du kan enten gi nytt navn til filen, hoppe over denne filen eller avbryte hele operasjonen."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Du må velge minst en versjon av hver fil for å fortsette."] } } } } }, { "locale": "ne", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Nepali (https://www.transifex.com/nextcloud/teams/64236/ne/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ne", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Nepali (https://www.transifex.com/nextcloud/teams/64236/ne/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ne\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "nl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Rico <rico-schwab@hotmail.com>, 2023", "Language-Team": "Dutch (https://app.transifex.com/nextcloud/teams/64236/nl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "nl", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nRico <rico-schwab@hotmail.com>, 2023\n" }, "msgstr": ["Last-Translator: Rico <rico-schwab@hotmail.com>, 2023\nLanguage-Team: Dutch (https://app.transifex.com/nextcloud/teams/64236/nl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nl\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["Nog {seconds} seconden"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["{seconds} over"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["Nog een paar seconden"] }, "Add": { "msgid": "Add", "msgstr": ["Voeg toe"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Uploads annuleren"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["Schatting van de resterende tijd"] }, "paused": { "msgid": "paused", "msgstr": ["Gepauzeerd"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Upload bestanden"] } } } } }, { "locale": "nn_NO", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Norwegian Nynorsk (Norway) (https://www.transifex.com/nextcloud/teams/64236/nn_NO/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "nn_NO", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Norwegian Nynorsk (Norway) (https://www.transifex.com/nextcloud/teams/64236/nn_NO/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: nn_NO\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "oc", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Occitan (post 1500) (https://www.transifex.com/nextcloud/teams/64236/oc/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "oc", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Occitan (post 1500) (https://www.transifex.com/nextcloud/teams/64236/oc/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: oc\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "pl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Piotr Strębski <strebski@gmail.com>, 2024", "Language-Team": "Polish (https://app.transifex.com/nextcloud/teams/64236/pl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "pl", "Plural-Forms": "nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nPiotr Strębski <strebski@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Piotr Strębski <strebski@gmail.com>, 2024\nLanguage-Team: Polish (https://app.transifex.com/nextcloud/teams/64236/pl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pl\nPlural-Forms: nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ["„{segment}” to zabroniona nazwa pliku lub folderu."] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ["„{segment}” jest zabronionym typem pliku."] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ["Znak „{segment}” nie jest dozwolony w nazwie pliku lub folderu."] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["konflikt 1 pliku", "{count} konfliktów plików", "{count} konfliktów plików", "{count} konfliktów plików"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} konfliktowy plik w {dirname}", "{count} konfliktowych plików w {dirname}", "{count} konfliktowych plików w {dirname}", "{count} konfliktowych plików w {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["Pozostało {seconds} sekund"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["Pozostało {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["Pozostało kilka sekund"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Anuluj"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Anuluj całą operację"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Anuluj wysyłanie"] }, "Continue": { "msgid": "Continue", "msgstr": ["Kontynuuj"] }, "Create new": { "msgid": "Create new", "msgstr": ["Utwórz nowe"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["Szacowanie pozostałego czasu"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Istniejąca wersja"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ["Nazwy plików nie mogą kończyć się na „{segment}”."] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Jeśli wybierzesz obie wersje, do nazwy pliku przychodzącego zostanie dodany numer."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Nieprawidłowa nazwa pliku"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Nieznana data ostatniej modyfikacji"] }, "New": { "msgid": "New", "msgstr": ["Nowy"] }, "New filename": { "msgid": "New filename", "msgstr": ["Nowa nazwa pliku"] }, "New version": { "msgid": "New version", "msgstr": ["Nowa wersja"] }, "paused": { "msgid": "paused", "msgstr": ["Wstrzymane"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Podgląd obrazu"] }, "Rename": { "msgid": "Rename", "msgstr": ["Zmiana nazwy"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Zaznacz wszystkie pola wyboru"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Zaznacz wszystkie istniejące pliki"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Zaznacz wszystkie nowe pliki"] }, "Skip": { "msgid": "Skip", "msgstr": ["Pomiń"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Pomiń 1 plik", "Pomiń {count} plików", "Pomiń {count} plików", "Pomiń {count} plików"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Nieznany rozmiar"] }, "Upload": { "msgid": "Upload", "msgstr": ["Prześlij"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Wyślij pliki"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Prześlij foldery"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Prześlij z urządzenia"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Przesyłanie zostało anulowane"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Przesyłanie zostało pominięte"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ["Przesyłanie „{folder}” zostało pominięte"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Postęp wysyłania"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Po wybraniu folderu przychodzącego wszelkie znajdujące się w nim pliki powodujące konflikt również zostaną nadpisane."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Po wybraniu folderu przychodzącego zawartość jest zapisywana w istniejącym folderze i przeprowadzane jest rekursywne rozwiązywanie konfliktów."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Które pliki chcesz zachować?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Możesz zmienić nazwę pliku, pominąć ten plik lub anulować całą operację."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Aby kontynuować, musisz wybrać co najmniej jedną wersję każdego pliku."] } } } } }, { "locale": "ps", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Pashto (https://www.transifex.com/nextcloud/teams/64236/ps/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ps", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Pashto (https://www.transifex.com/nextcloud/teams/64236/ps/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ps\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "pt_BR", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Paulo Schopf, 2024", "Language-Team": "Portuguese (Brazil) (https://app.transifex.com/nextcloud/teams/64236/pt_BR/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "pt_BR", "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nLeonardo Colman Lopes <leonardo.dev@colman.com.br>, 2024\nRodrigo Sottomaior Macedo <sottomaiormacedotec@sottomaiormacedo.tech>, 2024\nPaulo Schopf, 2024\n" }, "msgstr": ["Last-Translator: Paulo Schopf, 2024\nLanguage-Team: Portuguese (Brazil) (https://app.transifex.com/nextcloud/teams/64236/pt_BR/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pt_BR\nPlural-Forms: nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" é um nome de arquivo ou pasta proibido.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" é um tipo de arquivo proibido.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" não é permitido dentro de um nome de arquivo ou pasta.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} arquivos em conflito", "{count} arquivos em conflito", "{count} arquivos em conflito"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} conflitos de arquivo em {dirname}", "{count} conflitos de arquivo em {dirname}", "{count} conflitos de arquivo em {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} segundos restantes"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} restante"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["alguns segundos restantes"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Cancelar"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Cancelar a operação inteira"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Cancelar uploads"] }, "Continue": { "msgid": "Continue", "msgstr": ["Continuar"] }, "Create new": { "msgid": "Create new", "msgstr": ["Criar novo"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["estimando tempo restante"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Versão existente"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Os nomes dos arquivos não devem terminar com "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Se você selecionar ambas as versões, o arquivo recebido terá um número adicionado ao seu nome."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Nome de arquivo inválido"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Data da última modificação desconhecida"] }, "New": { "msgid": "New", "msgstr": ["Novo"] }, "New filename": { "msgid": "New filename", "msgstr": ["Novo nome de arquivo"] }, "New version": { "msgid": "New version", "msgstr": ["Nova versão"] }, "paused": { "msgid": "paused", "msgstr": ["pausado"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Visualizar imagem"] }, "Rename": { "msgid": "Rename", "msgstr": ["Renomear"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Marque todas as caixas de seleção"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Selecione todos os arquivos existentes"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Selecione todos os novos arquivos"] }, "Skip": { "msgid": "Skip", "msgstr": ["Pular"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Ignorar {count} arquivos", "Ignorar {count} arquivos", "Ignorar {count} arquivos"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Tamanho desconhecido"] }, "Upload": { "msgid": "Upload", "msgstr": ["Enviar"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Enviar arquivos"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Enviar pastas"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Carregar do dispositivo"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["O upload foi cancelado"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["O upload foi pulado"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['O upload de "{folder}" foi ignorado'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Envio em progresso"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Quando uma pasta é selecionada, quaisquer arquivos dentro dela também serão sobrescritos."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Quando uma pasta de entrada é selecionada, o conteúdo é gravado na pasta existente e uma resolução de conflito recursiva é executada."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Quais arquivos você deseja manter?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Você pode renomear o arquivo, pular este arquivo ou cancelar toda a operação."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Você precisa selecionar pelo menos uma versão de cada arquivo para continuar."] } } } } }, { "locale": "pt_PT", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Manuela Silva <mmsrs@sky.com>, 2022", "Language-Team": "Portuguese (Portugal) (https://www.transifex.com/nextcloud/teams/64236/pt_PT/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "pt_PT", "Plural-Forms": "nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nManuela Silva <mmsrs@sky.com>, 2022\n" }, "msgstr": ["Last-Translator: Manuela Silva <mmsrs@sky.com>, 2022\nLanguage-Team: Portuguese (Portugal) (https://www.transifex.com/nextcloud/teams/64236/pt_PT/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: pt_PT\nPlural-Forms: nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["faltam {seconds} segundo(s)"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["faltam {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["faltam uns segundos"] }, "Add": { "msgid": "Add", "msgstr": ["Adicionar"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Cancelar envios"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["tempo em falta estimado"] }, "paused": { "msgid": "paused", "msgstr": ["pausado"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Enviar ficheiros"] } } } } }, { "locale": "ro", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Mădălin Vasiliu <contact@madalinvasiliu.com>, 2022", "Language-Team": "Romanian (https://www.transifex.com/nextcloud/teams/64236/ro/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ro", "Plural-Forms": "nplurals=3; plural=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nMădălin Vasiliu <contact@madalinvasiliu.com>, 2022\n" }, "msgstr": ["Last-Translator: Mădălin Vasiliu <contact@madalinvasiliu.com>, 2022\nLanguage-Team: Romanian (https://www.transifex.com/nextcloud/teams/64236/ro/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ro\nPlural-Forms: nplurals=3; plural=(n==1?0:(((n%100>19)||((n%100==0)&&(n!=0)))?2:1));\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} secunde rămase"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["{time} rămas"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["câteva secunde rămase"] }, "Add": { "msgid": "Add", "msgstr": ["Adaugă"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Anulați încărcările"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["estimarea timpului rămas"] }, "paused": { "msgid": "paused", "msgstr": ["pus pe pauză"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Încarcă fișiere"] } } } } }, { "locale": "ru", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Александр, 2024", "Language-Team": "Russian (https://app.transifex.com/nextcloud/teams/64236/ru/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ru", "Plural-Forms": "nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nВлад, 2024\nAlex <fedotov22091982@gmail.com>, 2024\nRoman Stepanov, 2024\nMaksim Sukharev, 2024\nАлександр, 2024\n" }, "msgstr": ["Last-Translator: Александр, 2024\nLanguage-Team: Russian (https://app.transifex.com/nextcloud/teams/64236/ru/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ru\nPlural-Forms: nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ["«{segment}» — это запрещенное имя файла или папки."] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ["«{segment}» — это запрещенный тип файла."] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ["«{segment}» не допускается в имени файла или папки."] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["конфликт {count} файла", "конфликт {count} файлов", "конфликт {count} файлов", "конфликт {count} файлов"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["конфликт {count} файла в «{dirname}»", "конфликт {count} файлов в «{dirname}»", "конфликт {count} файлов в «{dirname}»", "конфликт {count} файлов в «{dirname}»"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["осталось {seconds} секунд"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["осталось {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["осталось несколько секунд"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Отменить"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Отменить операцию целиком"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Отменить загрузки"] }, "Continue": { "msgid": "Continue", "msgstr": ["Продолжить"] }, "Create new": { "msgid": "Create new", "msgstr": ["Создать новое"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["оценка оставшегося времени"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Текущая версия"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ["Имена файлов не должны заканчиваться на «{segment}»"] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Если вы выберете обе версии, к имени входящего файла будет добавлен номер."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Неверное имя файла"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Дата последнего изменения неизвестна"] }, "New": { "msgid": "New", "msgstr": ["Новый"] }, "New filename": { "msgid": "New filename", "msgstr": ["Новое имя файла"] }, "New version": { "msgid": "New version", "msgstr": ["Новая версия"] }, "paused": { "msgid": "paused", "msgstr": ["приостановлено"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Предварительный просмотр"] }, "Rename": { "msgid": "Rename", "msgstr": ["Переименовать"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Выбрать все"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Выбрать все существующие файлы"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Выбрать все новые файлы"] }, "Skip": { "msgid": "Skip", "msgstr": ["Пропустить"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Пропустить файл", "Пропустить {count} файла", "Пропустить {count} файлов", "Пропустить {count} файлов"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Неизвестный размер"] }, "Upload": { "msgid": "Upload", "msgstr": ["Загрузить"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Загрузить файлы"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Загрузить папки"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Загрузить с устройства"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Загрузка была отменена"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Загрузка была пропущена"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ["Загрузка «{folder}» была пропущена"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Прогресс загрузки"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Когда выбрана входящая папка, все конфликтующие файлы в ней также будут перезаписаны."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Когда выбрана входящая папка, содержимое записывается в существующую папку и выполняется рекурсивное разрешение конфликтов."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Какие файлы вы хотите сохранить?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Вы можете переименовать файл, пропустить этот файл или отменить всю операцию."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Для продолжения вам нужно выбрать по крайней мере одну версию каждого файла."] } } } } }, { "locale": "sc", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Sardinian (https://www.transifex.com/nextcloud/teams/64236/sc/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sc", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Sardinian (https://www.transifex.com/nextcloud/teams/64236/sc/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sc\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "si", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Sinhala (https://www.transifex.com/nextcloud/teams/64236/si/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "si", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Sinhala (https://www.transifex.com/nextcloud/teams/64236/si/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: si\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "sk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Tomas Rusnak <linkermail@gmail.com>, 2024", "Language-Team": "Slovak (Slovakia) (https://app.transifex.com/nextcloud/teams/64236/sk_SK/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sk_SK", "Plural-Forms": "nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJozef Gaal <preklady@mayday.sk>, 2024\nTomas Rusnak <linkermail@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Tomas Rusnak <linkermail@gmail.com>, 2024\nLanguage-Team: Slovak (Slovakia) (https://app.transifex.com/nextcloud/teams/64236/sk_SK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sk_SK\nPlural-Forms: nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ["„{segment}“ je zakázaný názov súboru alebo priečinka."] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" je zákazaný typ súboru.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}“ je zakázané v názve súboru alebo adresára.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} súbor má konflikt", "{count} súbory majú konflikt", "{count} súborov má konflikt", "{count} súborov má konflikt"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} súborový konflikt v {dirname}", "{count} súborové konflikty v {dirname}", "{count} súborových konfliktov v {dirname}", "{count} súborových konfliktov v {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} sekúnd zostáva"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} zostáva"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["zostáva niekoľko sekúnd"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Zrušiť"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Zrušiť celú operáciu"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Zrušiť nahrávanie"] }, "Continue": { "msgid": "Continue", "msgstr": ["Pokračovať"] }, "Create new": { "msgid": "Create new", "msgstr": ["Vytvoriť nové"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["odhadovanie zostávajúceho času"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Existujúca verzia"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Názvy súborov nesmú končiť znakom "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Ak vyberiete obe verzie, k názvu prichádzajúceho súboru sa pridá číslo."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Neplatný názov súboru"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Dátum poslednej úpravy neznámy"] }, "New": { "msgid": "New", "msgstr": ["Nový"] }, "New filename": { "msgid": "New filename", "msgstr": ["Nový názov súboru"] }, "New version": { "msgid": "New version", "msgstr": ["Nová verzia"] }, "paused": { "msgid": "paused", "msgstr": ["pozastavené"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Náhľad obrázka"] }, "Rename": { "msgid": "Rename", "msgstr": ["Premenovať"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Označiť všetky výberové políčka"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Vybrať všetky existujúce súbory"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Vybrať všetky nové súbory"] }, "Skip": { "msgid": "Skip", "msgstr": ["Preskočiť"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Preskočiť tento súbor", "Preskočiť {count} súbory", "Preskočiť {count} súborov", "Preskočiť {count} súborov"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Neznáma veľkosť"] }, "Upload": { "msgid": "Upload", "msgstr": ["Nahrať"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Nahrať súbory"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Nahrať priečinky"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Nahrať zo zariadenia"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Nahrávanie bolo zrušené"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Nahrávanie bolo preskočené"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Nahrávanie "{folder}" bolo preskočené'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Priebeh nahrávania"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Keď je vybraný prichádzajúci priečinok, prepíšu sa aj všetky konfliktné súbory v ňom."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Po výbere prichádzajúceho priečinka sa obsah zapíše do existujúceho priečinka a vykoná sa rekurzívne riešenie konfliktov."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Ktoré súbory chcete ponechať?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Súbor môžete premenovať, preskočiť alebo zrušiť celú operáciu."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Ak chcete pokračovať, musíte vybrať aspoň jednu verziu každého súboru."] } } } } }, { "locale": "sl", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Simon Bogina, 2024", "Language-Team": "Slovenian (https://app.transifex.com/nextcloud/teams/64236/sl/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sl", "Plural-Forms": "nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nJan Kraljič <jan.kraljic@patware.eu>, 2024\nSimon Bogina, 2024\n" }, "msgstr": ["Last-Translator: Simon Bogina, 2024\nLanguage-Team: Slovenian (https://app.transifex.com/nextcloud/teams/64236/sl/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sl\nPlural-Forms: nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" je prepovedano ime datoteka ali mape.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" je prepovedan tip datoteke.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" ni dovoljeno v imenu datoteke ali mape.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["1{count} datoteka je v konfliktu", "1{count} datoteki sta v konfiktu", "1{count} datotek je v konfliktu", "{count} datotek je v konfliktu"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} datoteka je v konfiktu v {dirname}", "{count} datoteki sta v konfiktu v {dirname}", "{count} datotek je v konfiktu v {dirname}", "{count} konfliktov datotek v {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["še {seconds} sekund"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["še {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["še nekaj sekund"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Prekliči"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Prekliči celotni postopek"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Prekliči pošiljanje"] }, "Continue": { "msgid": "Continue", "msgstr": ["Nadaljuj"] }, "Create new": { "msgid": "Create new", "msgstr": ["Ustvari nov"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["ocenjujem čas do konca"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Obstoječa različica"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Imena datotek se ne smejo končati s "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Če izberete obe različici, bo imenu dohodne datoteke na koncu dodana številka."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Nepravilno ime datoteke"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Datum zadnje spremembe neznan"] }, "New": { "msgid": "New", "msgstr": ["Nov"] }, "New filename": { "msgid": "New filename", "msgstr": ["Novo ime datoteke"] }, "New version": { "msgid": "New version", "msgstr": ["Nova različica"] }, "paused": { "msgid": "paused", "msgstr": ["v premoru"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Predogled slike"] }, "Rename": { "msgid": "Rename", "msgstr": ["Preimenuj"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Izberi vsa potrditvena polja"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Označi vse obstoječe datoteke"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Označi vse nove datoteke"] }, "Skip": { "msgid": "Skip", "msgstr": ["Preskoči"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Preskoči  datoteko", "Preskoči {count} datoteki", "Preskoči {count} datotek", "Preskoči {count} datotek"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Neznana velikost"] }, "Upload": { "msgid": "Upload", "msgstr": ["Naloži"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Naloži datoteke"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Naloži mape"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Naloži iz naprave"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Nalaganje je bilo preklicano"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Nalaganje je bilo preskočeno"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Nalaganje "{folder}" je bilo preskočeno'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Napredek nalaganja"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Ko je izbrana dohodna mapa, bodo vse datototeke v konfliktu znotraj nje prepisane."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Ko je izbrana dohodna mapa, je vsebina vpisana v obstoječo mapo in je izvedeno rekurzivno reševanje konfliktov."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Katere datoteke želite obdržati?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Datoteko lahko preimenujete, preskočite ali prekličete celo operacijo."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Izbrati morate vsaj eno različico vsake datoteke da nadaljujete."] } } } } }, { "locale": "sq", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Albanian (https://www.transifex.com/nextcloud/teams/64236/sq/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sq", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Albanian (https://www.transifex.com/nextcloud/teams/64236/sq/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sq\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "sr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Иван Пешић, 2024", "Language-Team": "Serbian (https://app.transifex.com/nextcloud/teams/64236/sr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sr", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nИван Пешић, 2024\n" }, "msgstr": ["Last-Translator: Иван Пешић, 2024\nLanguage-Team: Serbian (https://app.transifex.com/nextcloud/teams/64236/sr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sr\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ["„{segment}” је забрањено име фајла или фолдера."] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ["„{segment}” је забрањен тип фајла."] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ["„{segment}” није дозвољено унутар имена фајла или фолдера."] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} фајл конфликт", "{count} фајл конфликта", "{count} фајл конфликта"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} фајл конфликт у {dirname}", "{count} фајл конфликта у {dirname}", "{count} фајл конфликта у {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["преостало је {seconds} секунди"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} преостало"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["преостало је неколико секунди"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Откажи"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Отказује комплетну операцију"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Обустави отпремања"] }, "Continue": { "msgid": "Continue", "msgstr": ["Настави"] }, "Create new": { "msgid": "Create new", "msgstr": ["Креирај ново"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["процена преосталог времена"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Постојећа верзија"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ["Имена фајлова не смеју да се завршавају на „{segment}”."] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Ако изаберете обе верзије, на име долазног фајла ће се додати број."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Неисправно име фајла"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Није познат датум последње измене"] }, "New": { "msgid": "New", "msgstr": ["Ново"] }, "New filename": { "msgid": "New filename", "msgstr": ["Ново име фајла"] }, "New version": { "msgid": "New version", "msgstr": ["Нова верзија"] }, "paused": { "msgid": "paused", "msgstr": ["паузирано"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Слика прегледа"] }, "Rename": { "msgid": "Rename", "msgstr": ["Промени име"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Штиклирај сва поља за штиклирање"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Изабери све постојеће фајлове"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Изабери све нове фајлове"] }, "Skip": { "msgid": "Skip", "msgstr": ["Прескочи"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Прескочи овај фајл", "Прескочи {count} фајла", "Прескочи {count} фајлова"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Непозната величина"] }, "Upload": { "msgid": "Upload", "msgstr": ["Отпреми"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Отпреми фајлове"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Отпреми фолдере"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Отпреми са уређаја"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Отпремање је отказано"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Отпремање је прескочено"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ["Отпремање „{folder}”је прескочено"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Напредак отпремања"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Када се изабере долазни фолдер, сва имена фајлова са конфликтом унутар њега ће се такође преписати."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Када се изабере долазни фолдер, садржај се уписује у постојећи фолдер и извршава се рекурзивно разрешавање конфликата."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Које фајлове желите да задржите?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Можете или да промените име фајлу, прескочите овај фајл или откажете комплетну операцију."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Морате да изаберете барем једну верзију сваког фајла да наставите."] } } } } }, { "locale": "sr@latin", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Serbian (Latin) (https://www.transifex.com/nextcloud/teams/64236/sr@latin/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sr@latin", "Plural-Forms": "nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Serbian (Latin) (https://www.transifex.com/nextcloud/teams/64236/sr@latin/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sr@latin\nPlural-Forms: nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "sv", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Magnus Höglund, 2024", "Language-Team": "Swedish (https://app.transifex.com/nextcloud/teams/64236/sv/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sv", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nMagnus Höglund, 2024\n" }, "msgstr": ["Last-Translator: Magnus Höglund, 2024\nLanguage-Team: Swedish (https://app.transifex.com/nextcloud/teams/64236/sv/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sv\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" är ett förbjudet fil- eller mappnamn.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" är en förbjuden filtyp.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" är inte tillåtet i ett fil- eller mappnamn.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} filkonflikt", "{count} filkonflikter"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} filkonflikt i {dirname}", "{count} filkonflikter i {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} sekunder kvarstår"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} kvarstår"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["några sekunder kvar"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Avbryt"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Avbryt hela operationen"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Avbryt uppladdningar"] }, "Continue": { "msgid": "Continue", "msgstr": ["Fortsätt"] }, "Create new": { "msgid": "Create new", "msgstr": ["Skapa ny"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["uppskattar kvarstående tid"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Nuvarande version"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Filnamn får inte sluta med "{segment}".'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Om du väljer båda versionerna kommer den inkommande filen att läggas till ett nummer i namnet."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Ogiltigt filnamn"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Senaste ändringsdatum okänt"] }, "New": { "msgid": "New", "msgstr": ["Ny"] }, "New filename": { "msgid": "New filename", "msgstr": ["Nytt filnamn"] }, "New version": { "msgid": "New version", "msgstr": ["Ny version"] }, "paused": { "msgid": "paused", "msgstr": ["pausad"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Förhandsgranska bild"] }, "Rename": { "msgid": "Rename", "msgstr": ["Byt namn"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Markera alla kryssrutor"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Välj alla befintliga filer"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Välj alla nya filer"] }, "Skip": { "msgid": "Skip", "msgstr": ["Hoppa över"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Hoppa över denna fil", "Hoppa över {count} filer"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Okänd storlek"] }, "Upload": { "msgid": "Upload", "msgstr": ["Ladda upp"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Ladda upp filer"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Ladda upp mappar"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Ladda upp från enhet"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Uppladdningen har avbrutits"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Uppladdningen har hoppats över"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Uppladdningen av "{folder}" har hoppats över'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Uppladdningsförlopp"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["När en inkommande mapp väljs skrivs även alla konfliktande filer i den över."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["När en inkommande mapp väljs skrivs innehållet in i den befintliga mappen och en rekursiv konfliktlösning utförs."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Vilka filer vill du behålla?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Du kan antingen byta namn på filen, hoppa över den här filen eller avbryta hela operationen."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Du måste välja minst en version av varje fil för att fortsätta."] } } } } }, { "locale": "sw", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Swahili (https://www.transifex.com/nextcloud/teams/64236/sw/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "sw", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Swahili (https://www.transifex.com/nextcloud/teams/64236/sw/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: sw\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "ta", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Tamil (https://www.transifex.com/nextcloud/teams/64236/ta/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ta", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Tamil (https://www.transifex.com/nextcloud/teams/64236/ta/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ta\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "th", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Phongpanot Phairat <ppnplus@protonmail.com>, 2022", "Language-Team": "Thai (Thailand) (https://www.transifex.com/nextcloud/teams/64236/th_TH/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "th_TH", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nPhongpanot Phairat <ppnplus@protonmail.com>, 2022\n" }, "msgstr": ["Last-Translator: Phongpanot Phairat <ppnplus@protonmail.com>, 2022\nLanguage-Team: Thai (Thailand) (https://www.transifex.com/nextcloud/teams/64236/th_TH/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: th_TH\nPlural-Forms: nplurals=1; plural=0;\n"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["เหลืออีก {seconds} วินาที"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "time has the format 00:00:00" }, "msgstr": ["เหลืออีก {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["เหลืออีกไม่กี่วินาที"] }, "Add": { "msgid": "Add", "msgstr": ["เพิ่ม"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["ยกเลิกการอัปโหลด"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["กำลังคำนวณเวลาที่เหลือ"] }, "paused": { "msgid": "paused", "msgstr": ["หยุดชั่วคราว"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["อัปโหลดไฟล์"] } } } } }, { "locale": "tk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Turkmen (https://www.transifex.com/nextcloud/teams/64236/tk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "tk", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Turkmen (https://www.transifex.com/nextcloud/teams/64236/tk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: tk\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "tr", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Kaya Zeren <kayazeren@gmail.com>, 2024", "Language-Team": "Turkish (https://app.transifex.com/nextcloud/teams/64236/tr/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "tr", "Plural-Forms": "nplurals=2; plural=(n > 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nKaya Zeren <kayazeren@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: Kaya Zeren <kayazeren@gmail.com>, 2024\nLanguage-Team: Turkish (https://app.transifex.com/nextcloud/teams/64236/tr/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: tr\nPlural-Forms: nplurals=2; plural=(n > 1);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" dosya ya da klasör adına izin verilmiyor.'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" dosya türüne izin verilmiyor.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['Bir dosya ya da klasör adında "{segment}" ifadesine izin verilmiyor.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} dosya çakışması var", "{count} dosya çakışması var"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{dirname} klasöründe {count} dosya çakışması var", "{dirname} klasöründe {count} dosya çakışması var"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["{seconds} saniye kaldı"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["{time} kaldı"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["bir kaç saniye kaldı"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["İptal"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Tüm işlemi iptal et"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Yüklemeleri iptal et"] }, "Continue": { "msgid": "Continue", "msgstr": ["İlerle"] }, "Create new": { "msgid": "Create new", "msgstr": ["Yeni ekle"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["öngörülen kalan süre"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Var olan sürüm"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['Dosya adları "{segment}" ile bitmemeli.'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["İki sürümü de seçerseniz, gelen dosyanın adına bir sayı eklenir."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Dosya adı geçersiz"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Son değiştirilme tarihi bilinmiyor"] }, "New": { "msgid": "New", "msgstr": ["Yeni"] }, "New filename": { "msgid": "New filename", "msgstr": ["Yeni dosya adı"] }, "New version": { "msgid": "New version", "msgstr": ["Yeni sürüm"] }, "paused": { "msgid": "paused", "msgstr": ["duraklatıldı"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Görsel ön izlemesi"] }, "Rename": { "msgid": "Rename", "msgstr": ["Yeniden adlandır"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Tüm kutuları işaretle"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Tüm var olan dosyaları seç"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Tüm yeni dosyaları seç"] }, "Skip": { "msgid": "Skip", "msgstr": ["Atla"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Bu dosyayı atla", "{count} dosyayı atla"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Boyut bilinmiyor"] }, "Upload": { "msgid": "Upload", "msgstr": ["Yükle"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Dosyaları yükle"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Klasörleri yükle"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Aygıttan yükle"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Yükleme iptal edildi"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Yükleme atlandı"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['"{folder}" klasörünün yüklenmesi atlandı'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Yükleme ilerlemesi"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Bir gelen klasör seçildiğinde, içindeki çakışan dosyaların da üzerine yazılır."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Bir gelen klasörü seçildiğinde içerik var olan klasöre yazılır ve yinelemeli bir çakışma çözümü uygulanır."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Hangi dosyaları tutmak istiyorsunuz?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Dosya adını değiştirebilir, bu dosyayı atlayabilir ya da tüm işlemi iptal edebilirsiniz."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["İlerlemek için her dosyanın en az bir sürümünü seçmelisiniz."] } } } } }, { "locale": "ug", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Uyghur (https://www.transifex.com/nextcloud/teams/64236/ug/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ug", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Uyghur (https://www.transifex.com/nextcloud/teams/64236/ug/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ug\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "uk", "json": { "charset": "utf-8", "headers": { "Last-Translator": "O St <oleksiy.stasevych@gmail.com>, 2024", "Language-Team": "Ukrainian (https://app.transifex.com/nextcloud/teams/64236/uk/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "uk", "Plural-Forms": "nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nO St <oleksiy.stasevych@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: O St <oleksiy.stasevych@gmail.com>, 2024\nLanguage-Team: Ukrainian (https://app.transifex.com/nextcloud/teams/64236/uk/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: uk\nPlural-Forms: nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": [`"{segment}" не є  дозволеним ім'ям файлу або каталогу.`] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" не є дозволеним типом файлу.'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" не дозволене сполучення символів в назві файлу або каталогу.'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} конфліктний файл", "{count} конфліктних файли", "{count} конфліктних файлів", "{count} конфліктних файлів"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} конфліктний файл у каталозі {dirname}", "{count} конфліктних файли у каталозі {dirname}", "{count} конфліктних файлів у каталозі {dirname}", "{count} конфліктних файлів у каталозі {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["Залишилося {seconds} секунд"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["Залишилося {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["залишилося кілька секунд"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["Скасувати"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["Скасувати операцію повністю"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Скасувати завантаження"] }, "Continue": { "msgid": "Continue", "msgstr": ["Продовжити"] }, "Create new": { "msgid": "Create new", "msgstr": ["Створити новий"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["оцінка часу, що залишився"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Присутня версія"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": [`Ім'я файлів не можуть закінчуватися на "{segment}".`] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["Якщо буде вибрано обидві версії, до імени вхідного файлу було додано цифру."] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["Недійсне ім'я файлу"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Дата останньої зміни невідома"] }, "New": { "msgid": "New", "msgstr": ["Нове"] }, "New filename": { "msgid": "New filename", "msgstr": ["Нове ім'я файлу"] }, "New version": { "msgid": "New version", "msgstr": ["Нова версія"] }, "paused": { "msgid": "paused", "msgstr": ["призупинено"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Попередній перегляд"] }, "Rename": { "msgid": "Rename", "msgstr": ["Перейменувати"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Вибрати все"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Вибрати усі присутні файли"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Вибрати усі нові файли"] }, "Skip": { "msgid": "Skip", "msgstr": ["Пропустити"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Пропустити файл", "Пропустити {count} файли", "Пропустити {count} файлів", "Пропустити {count} файлів"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Невідомий розмір"] }, "Upload": { "msgid": "Upload", "msgstr": ["Завантажити"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Завантажити файли"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["Завантажити каталоги"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["Завантажити з пристрою"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["Завантаження скасовано"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["Завантаження пропущено"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['Завантаження "{folder}" пропущено'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Поступ завантаження"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["Усі конфліктні файли у вибраному каталозі призначення буде перезаписано поверх."] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["Якщо буде вибрано вхідний каталог, вміст буде записано до наявного каталогу та вирішено конфлікти у відповідних файлах каталогу та підкаталогів."] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Які файли залишити?"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["Ви можете або перейменувати цей файл, пропустити або скасувати дію з файлом."] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Для продовження потрібно вибрати принаймні одну версію для кожного файлу."] } } } } }, { "locale": "ur_PK", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Urdu (Pakistan) (https://www.transifex.com/nextcloud/teams/64236/ur_PK/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "ur_PK", "Plural-Forms": "nplurals=2; plural=(n != 1);" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Urdu (Pakistan) (https://www.transifex.com/nextcloud/teams/64236/ur_PK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: ur_PK\nPlural-Forms: nplurals=2; plural=(n != 1);\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "uz", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Transifex Bot <>, 2022", "Language-Team": "Uzbek (https://www.transifex.com/nextcloud/teams/64236/uz/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "uz", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nTransifex Bot <>, 2022\n" }, "msgstr": ["Last-Translator: Transifex Bot <>, 2022\nLanguage-Team: Uzbek (https://www.transifex.com/nextcloud/teams/64236/uz/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: uz\nPlural-Forms: nplurals=1; plural=0;\n"] }, "{estimate} seconds left": { "msgid": "{estimate} seconds left", "msgstr": [""] }, "{hours} hours and {minutes} minutes left": { "msgid": "{hours} hours and {minutes} minutes left", "msgstr": [""] }, "{minutes} minutes left": { "msgid": "{minutes} minutes left", "msgstr": [""] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": [""] }, "Add": { "msgid": "Add", "msgstr": [""] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": [""] }, "estimating time left": { "msgid": "estimating time left", "msgstr": [""] }, "paused": { "msgid": "paused", "msgstr": [""] } } } } }, { "locale": "vi", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Tung DangQuang, 2023", "Language-Team": "Vietnamese (https://app.transifex.com/nextcloud/teams/64236/vi/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "vi", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJohn Molakvoæ <skjnldsv@protonmail.com>, 2023\nTung DangQuang, 2023\n" }, "msgstr": ["Last-Translator: Tung DangQuang, 2023\nLanguage-Team: Vietnamese (https://app.transifex.com/nextcloud/teams/64236/vi/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: vi\nPlural-Forms: nplurals=1; plural=0;\n"] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} Tập tin xung đột"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{count} tập tin lỗi trong {dirname}"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["Còn {second} giây"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["Còn lại {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["Còn lại một vài giây"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["Huỷ tải lên"] }, "Continue": { "msgid": "Continue", "msgstr": ["Tiếp Tục"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["Thời gian còn lại dự kiến"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["Phiên Bản Hiện Tại"] }, "If you select both versions, the copied file will have a number added to its name.": { "msgid": "If you select both versions, the copied file will have a number added to its name.", "msgstr": ["Nếu bạn chọn cả hai phiên bản, tệp được sao chép sẽ có thêm một số vào tên của nó."] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["Ngày sửa dổi lần cuối không xác định"] }, "New": { "msgid": "New", "msgstr": ["Tạo Mới"] }, "New version": { "msgid": "New version", "msgstr": ["Phiên Bản Mới"] }, "paused": { "msgid": "paused", "msgstr": ["đã tạm dừng"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["Xem Trước Ảnh"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["Chọn tất cả hộp checkbox"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["Chọn tất cả các tập tin có sẵn"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["Chọn tất cả các tập tin mới"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["Bỏ Qua {count} tập tin"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["Không rõ dung lượng"] }, "Upload cancelled": { "msgid": "Upload cancelled", "msgstr": ["Dừng Tải Lên"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["Tập tin tải lên"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["Đang Tải Lên"] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["Bạn muốn giữ tập tin nào?"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["Bạn cần chọn ít nhất một phiên bản tập tin mới có thể tiếp tục"] } } } } }, { "locale": "zh_CN", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Gloryandel, 2024", "Language-Team": "Chinese (China) (https://app.transifex.com/nextcloud/teams/64236/zh_CN/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zh_CN", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nGloryandel, 2024\n" }, "msgstr": ["Last-Translator: Gloryandel, 2024\nLanguage-Team: Chinese (China) (https://app.transifex.com/nextcloud/teams/64236/zh_CN/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_CN\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" 是被禁止的文件名或文件夹名。'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" 是被禁止的文件类型。'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" 不允许包含在文件名或文件夹名中。'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count}文件冲突"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["在{dirname}目录下有{count}个文件冲突"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["剩余 {seconds} 秒"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["剩余 {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["还剩几秒"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["取消"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["取消整个操作"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["取消上传"] }, "Continue": { "msgid": "Continue", "msgstr": ["继续"] }, "Create new": { "msgid": "Create new", "msgstr": ["新建"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["估计剩余时间"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["服务端版本"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['文件名不得以 "{segment}" 结尾。'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["如果同时选择两个版本，则上传文件的名称中将添加一个数字。"] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["无效文件名"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["文件最后修改日期未知"] }, "New": { "msgid": "New", "msgstr": ["新建"] }, "New filename": { "msgid": "New filename", "msgstr": ["新文件名"] }, "New version": { "msgid": "New version", "msgstr": ["上传版本"] }, "paused": { "msgid": "paused", "msgstr": ["已暂停"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["图片预览"] }, "Rename": { "msgid": "Rename", "msgstr": ["重命名"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["选择所有的选择框"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["保留所有服务端版本"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["保留所有上传版本"] }, "Skip": { "msgid": "Skip", "msgstr": ["跳过"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["跳过{count}个文件"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["文件大小未知"] }, "Upload": { "msgid": "Upload", "msgstr": ["上传"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["上传文件"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["上传文件夹"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["从设备上传"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["上传已取消"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["上传已跳过"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['已跳过上传"{folder}"'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["上传进度"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["当选择上传文件夹时，其中任何冲突的文件也都会被覆盖。"] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["选择上传文件夹后，内容将写入现有文件夹，并递归执行冲突解决。"] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["你要保留哪些文件？"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["您可以重命名文件、跳过此文件或取消整个操作。"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["每个文件至少选择保留一个版本"] } } } } }, { "locale": "zh_HK", "json": { "charset": "utf-8", "headers": { "Last-Translator": "Café Tango, 2024", "Language-Team": "Chinese (Hong Kong) (https://app.transifex.com/nextcloud/teams/64236/zh_HK/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zh_HK", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\nCafé Tango, 2024\n" }, "msgstr": ["Last-Translator: Café Tango, 2024\nLanguage-Team: Chinese (Hong Kong) (https://app.transifex.com/nextcloud/teams/64236/zh_HK/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_HK\nPlural-Forms: nplurals=1; plural=0;\n"] }, '"{segment}" is a forbidden file or folder name.': { "msgid": '"{segment}" is a forbidden file or folder name.', "msgstr": ['"{segment}" 是禁止使用的檔案或資料夾名稱。'] }, '"{segment}" is a forbidden file type.': { "msgid": '"{segment}" is a forbidden file type.', "msgstr": ['"{segment}" 是禁止使用的檔案類型。'] }, '"{segment}" is not allowed inside a file or folder name.': { "msgid": '"{segment}" is not allowed inside a file or folder name.', "msgstr": ['"{segment}" 不允許出現在檔案或資料夾名稱中。'] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} 個檔案衝突"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{dirname} 中有 {count} 個檔案衝突"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["剩餘 {seconds} 秒"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["剩餘 {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["還剩幾秒"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["取消"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["取消整個操作"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["取消上傳"] }, "Continue": { "msgid": "Continue", "msgstr": ["繼續"] }, "Create new": { "msgid": "Create new", "msgstr": ["創建新"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["估計剩餘時間"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["既有版本"] }, 'Filenames must not end with "{segment}".': { "msgid": 'Filenames must not end with "{segment}".', "msgstr": ['檔案名不得以 "{segment}" 結尾。'] }, "If you select both versions, the incoming file will have a number added to its name.": { "msgid": "If you select both versions, the incoming file will have a number added to its name.", "msgstr": ["若您選取兩個版本，傳入檔案的名稱將會新增編號。"] }, "Invalid filename": { "msgid": "Invalid filename", "msgstr": ["無效的檔案名"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["最後修改日期不詳"] }, "New": { "msgid": "New", "msgstr": ["新增"] }, "New filename": { "msgid": "New filename", "msgstr": ["新檔案名"] }, "New version": { "msgid": "New version", "msgstr": ["新版本 "] }, "paused": { "msgid": "paused", "msgstr": ["已暫停"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["預覽圖片"] }, "Rename": { "msgid": "Rename", "msgstr": ["重新命名"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["選取所有核取方塊"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["選取所有既有檔案"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["選取所有新檔案"] }, "Skip": { "msgid": "Skip", "msgstr": ["跳過"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["略過 {count} 個檔案"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["大小不詳"] }, "Upload": { "msgid": "Upload", "msgstr": ["上傳"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["上傳檔案"] }, "Upload folders": { "msgid": "Upload folders", "msgstr": ["上傳資料夾"] }, "Upload from device": { "msgid": "Upload from device", "msgstr": ["從裝置上傳"] }, "Upload has been cancelled": { "msgid": "Upload has been cancelled", "msgstr": ["上傳已被取消"] }, "Upload has been skipped": { "msgid": "Upload has been skipped", "msgstr": ["上傳已被跳過"] }, 'Upload of "{folder}" has been skipped': { "msgid": 'Upload of "{folder}" has been skipped', "msgstr": ['"{folder}" 的上傳已被跳過'] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["上傳進度"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["選取傳入資料夾後，其中任何的衝突檔案都會被覆寫。"] }, "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.": { "msgid": "When an incoming folder is selected, the content is written into the existing folder and a recursive conflict resolution is performed.", "msgstr": ["選擇傳入資料夾後，內容將寫入現有資料夾並執行遞歸衝突解決。"] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["您想保留哪些檔案？"] }, "You can either rename the file, skip this file or cancel the whole operation.": { "msgid": "You can either rename the file, skip this file or cancel the whole operation.", "msgstr": ["您可以選擇重新命名檔案、跳過此檔案或取消整個操作。"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["您必須為每個檔案都至少選取一個版本以繼續。"] } } } } }, { "locale": "zh_TW", "json": { "charset": "utf-8", "headers": { "Last-Translator": "黃柏諺 <s8321414@gmail.com>, 2024", "Language-Team": "Chinese (Taiwan) (https://app.transifex.com/nextcloud/teams/64236/zh_TW/)", "Content-Type": "text/plain; charset=UTF-8", "Language": "zh_TW", "Plural-Forms": "nplurals=1; plural=0;" }, "translations": { "": { "": { "msgid": "", "comments": { "translator": "\nTranslators:\nJoas Schilling, 2024\n黃柏諺 <s8321414@gmail.com>, 2024\n" }, "msgstr": ["Last-Translator: 黃柏諺 <s8321414@gmail.com>, 2024\nLanguage-Team: Chinese (Taiwan) (https://app.transifex.com/nextcloud/teams/64236/zh_TW/)\nContent-Type: text/plain; charset=UTF-8\nLanguage: zh_TW\nPlural-Forms: nplurals=1; plural=0;\n"] }, "{count} file conflict": { "msgid": "{count} file conflict", "msgid_plural": "{count} files conflict", "msgstr": ["{count} 個檔案衝突"] }, "{count} file conflict in {dirname}": { "msgid": "{count} file conflict in {dirname}", "msgid_plural": "{count} file conflicts in {dirname}", "msgstr": ["{dirname} 中有 {count} 個檔案衝突"] }, "{seconds} seconds left": { "msgid": "{seconds} seconds left", "msgstr": ["剩餘 {seconds} 秒"] }, "{time} left": { "msgid": "{time} left", "comments": { "extracted": "TRANSLATORS time has the format 00:00:00" }, "msgstr": ["剩餘 {time}"] }, "a few seconds left": { "msgid": "a few seconds left", "msgstr": ["還剩幾秒"] }, "Cancel": { "msgid": "Cancel", "msgstr": ["取消"] }, "Cancel the entire operation": { "msgid": "Cancel the entire operation", "msgstr": ["取消整個操作"] }, "Cancel uploads": { "msgid": "Cancel uploads", "msgstr": ["取消上傳"] }, "Continue": { "msgid": "Continue", "msgstr": ["繼續"] }, "estimating time left": { "msgid": "estimating time left", "msgstr": ["估計剩餘時間"] }, "Existing version": { "msgid": "Existing version", "msgstr": ["既有版本"] }, "If you select both versions, the copied file will have a number added to its name.": { "msgid": "If you select both versions, the copied file will have a number added to its name.", "msgstr": ["若您選取兩個版本，複製的檔案的名稱將會新增編號。"] }, "Last modified date unknown": { "msgid": "Last modified date unknown", "msgstr": ["最後修改日期未知"] }, "New": { "msgid": "New", "msgstr": ["新增"] }, "New version": { "msgid": "New version", "msgstr": ["新版本"] }, "paused": { "msgid": "paused", "msgstr": ["已暫停"] }, "Preview image": { "msgid": "Preview image", "msgstr": ["預覽圖片"] }, "Select all checkboxes": { "msgid": "Select all checkboxes", "msgstr": ["選取所有核取方塊"] }, "Select all existing files": { "msgid": "Select all existing files", "msgstr": ["選取所有既有檔案"] }, "Select all new files": { "msgid": "Select all new files", "msgstr": ["選取所有新檔案"] }, "Skip this file": { "msgid": "Skip this file", "msgid_plural": "Skip {count} files", "msgstr": ["略過 {count} 檔案"] }, "Unknown size": { "msgid": "Unknown size", "msgstr": ["未知大小"] }, "Upload cancelled": { "msgid": "Upload cancelled", "msgstr": ["已取消上傳"] }, "Upload files": { "msgid": "Upload files", "msgstr": ["上傳檔案"] }, "Upload progress": { "msgid": "Upload progress", "msgstr": ["上傳進度"] }, "When an incoming folder is selected, any conflicting files within it will also be overwritten.": { "msgid": "When an incoming folder is selected, any conflicting files within it will also be overwritten.", "msgstr": ["選取傳入資料夾後，其中任何的衝突檔案都會被覆寫。"] }, "Which files do you want to keep?": { "msgid": "Which files do you want to keep?", "msgstr": ["您想保留哪些檔案？"] }, "You need to select at least one version of each file to continue.": { "msgid": "You need to select at least one version of each file to continue.", "msgstr": ["您必須為每個檔案都至少選取一個版本以繼續。"] } } } } }].map((data) => gtBuilder.addTranslation(data.locale, data.json));
const gt = gtBuilder.build();
const n = gt.ngettext.bind(gt);
const t = gt.gettext.bind(gt);
var Status = /* @__PURE__ */ ((Status2) => {
  Status2[Status2["IDLE"] = 0] = "IDLE";
  Status2[Status2["UPLOADING"] = 1] = "UPLOADING";
  Status2[Status2["PAUSED"] = 2] = "PAUSED";
  return Status2;
})(Status || {});
class Uploader {
  // Initialized via setter in the constructor
  _destinationFolder;
  _isPublic;
  _customHeaders;
  // Global upload queue
  _uploadQueue = [];
  _jobQueue = new p_queue__WEBPACK_IMPORTED_MODULE_23__["default"]({
    // Maximum number of concurrent uploads
    // @ts-expect-error TS2339 Object has no defined properties
    concurrency: (0,_nextcloud_capabilities__WEBPACK_IMPORTED_MODULE_6__.getCapabilities)().files?.chunked_upload?.max_parallel_count ?? 5
  });
  _queueSize = 0;
  _queueProgress = 0;
  _queueStatus = 0;
  _notifiers = [];
  /**
   * Initialize uploader
   *
   * @param {boolean} isPublic are we in public mode ?
   * @param {Folder} destinationFolder the context folder to operate, relative to the root folder
   */
  constructor(isPublic = false, destinationFolder) {
    this._isPublic = isPublic;
    this._customHeaders = {};
    if (!destinationFolder) {
      const source = `${_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.davRemoteURL}${_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.davRootPath}`;
      let owner;
      if (isPublic) {
        owner = "anonymous";
      } else {
        const user = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)()?.uid;
        if (!user) {
          throw new Error("User is not logged in");
        }
        owner = user;
      }
      destinationFolder = new _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.Folder({
        id: 0,
        owner,
        permissions: _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.Permission.ALL,
        root: _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.davRootPath,
        source
      });
    }
    this.destination = destinationFolder;
    logger.debug("Upload workspace initialized", {
      destination: this.destination,
      root: this.root,
      isPublic,
      maxChunksSize: getMaxChunksSize()
    });
  }
  /**
   * Get the upload destination path relative to the root folder
   */
  get destination() {
    return this._destinationFolder;
  }
  /**
   * Set the upload destination path relative to the root folder
   */
  set destination(folder) {
    if (!folder || folder.type !== _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.FileType.Folder || !folder.source) {
      throw new Error("Invalid destination folder");
    }
    logger.debug("Destination set", { folder });
    this._destinationFolder = folder;
  }
  /**
   * Get the root folder
   */
  get root() {
    return this._destinationFolder.source;
  }
  /**
   * Get registered custom headers for uploads
   */
  get customHeaders() {
    return structuredClone(this._customHeaders);
  }
  /**
   * Set a custom header
   * @param name The header to set
   * @param value The string value
   */
  setCustomHeader(name, value = "") {
    this._customHeaders[name] = value;
  }
  /**
   * Unset a custom header
   * @param name The header to unset
   */
  deleteCustomerHeader(name) {
    delete this._customHeaders[name];
  }
  /**
   * Get the upload queue
   */
  get queue() {
    return this._uploadQueue;
  }
  reset() {
    if (this._uploadQueue.length === 0 && this._jobQueue.size === 0) {
      return;
    }
    this._uploadQueue.splice(0, this._uploadQueue.length);
    this._jobQueue.clear();
    this._queueSize = 0;
    this._queueProgress = 0;
    this._queueStatus = 0;
    logger.debug("Uploader state reset");
  }
  /**
   * Pause any ongoing upload(s)
   */
  pause() {
    this._jobQueue.pause();
    this._queueStatus = 2;
  }
  /**
   * Resume any pending upload(s)
   */
  start() {
    this._jobQueue.start();
    this._queueStatus = 1;
    this.updateStats();
  }
  /**
   * Get the upload queue stats
   */
  get info() {
    return {
      size: this._queueSize,
      progress: this._queueProgress,
      status: this._queueStatus
    };
  }
  updateStats() {
    const size = this._uploadQueue.map((upload2) => upload2.size).reduce((partialSum, a) => partialSum + a, 0);
    const uploaded = this._uploadQueue.map((upload2) => upload2.uploaded).reduce((partialSum, a) => partialSum + a, 0);
    this._queueSize = size;
    this._queueProgress = uploaded;
    if (this._queueStatus === 2) {
      return;
    }
    this._queueStatus = this._jobQueue.size > 0 ? 1 : 0;
  }
  addNotifier(notifier) {
    this._notifiers.push(notifier);
  }
  /**
   * Notify listeners of the upload completion
   * @param upload The upload that finished
   */
  _notifyAll(upload2) {
    for (const notifier of this._notifiers) {
      try {
        notifier(upload2);
      } catch (error) {
        logger.warn("Error in upload notifier", { error, source: upload2.source });
      }
    }
  }
  /**
   * Uploads multiple files or folders while preserving the relative path (if available)
   * @param {string} destination The destination path relative to the root folder. e.g. /foo/bar (a file "a.txt" will be uploaded then to "/foo/bar/a.txt")
   * @param {Array<File|FileSystemEntry>} files The files and/or folders to upload
   * @param {Function} callback Callback that receives the nodes in the current folder and the current path to allow resolving conflicts, all nodes that are returned will be uploaded (if a folder does not exist it will be created)
   * @return Cancelable promise that resolves to an array of uploads
   *
   * @example
   * ```ts
   * // For example this is from handling the onchange event of an input[type=file]
   * async handleFiles(files: File[]) {
   *   this.uploads = await this.uploader.batchUpload('uploads', files, this.handleConflicts)
   * }
   *
   * async handleConflicts(nodes: File[], currentPath: string) {
   *   const conflicts = getConflicts(nodes, this.fetchContent(currentPath))
   *   if (conflicts.length === 0) {
   *     // No conflicts so upload all
   *     return nodes
   *   } else {
   *     // Open the conflict picker to resolve conflicts
   *     try {
   *       const { selected, renamed } = await openConflictPicker(currentPath, conflicts, this.fetchContent(currentPath), { recursive: true })
   *       return [...selected, ...renamed]
   *     } catch (e) {
   *       return false
   *     }
   *   }
   * }
   * ```
   */
  batchUpload(destination, files, callback) {
    if (!callback) {
      callback = async (files2) => files2;
    }
    return new p_cancelable__WEBPACK_IMPORTED_MODULE_8__["default"](async (resolve, reject, onCancel) => {
      const rootFolder = new Directory("");
      await rootFolder.addChildren(files);
      const target = `${this.root.replace(/\/$/, "")}/${destination.replace(/^\//, "")}`;
      const upload2 = new Upload(target, false, 0, rootFolder);
      upload2.status = Status$1.UPLOADING;
      this._uploadQueue.push(upload2);
      logger.debug("Starting new batch upload", { target });
      try {
        const client = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.davGetClient)(this.root, this._customHeaders);
        const promise = this.uploadDirectory(destination, rootFolder, callback, client);
        onCancel(() => promise.cancel());
        const uploads = await promise;
        upload2.status = Status$1.FINISHED;
        resolve(uploads);
      } catch (error) {
        logger.error("Error in batch upload", { error });
        upload2.status = Status$1.FAILED;
        reject(t("Upload has been cancelled"));
      } finally {
        this._notifyAll(upload2);
        this.updateStats();
      }
    });
  }
  /**
   * Helper to create a directory wrapped inside an Upload class
   * @param destination Destination where to create the directory
   * @param directory The directory to create
   * @param client The cached WebDAV client
   */
  createDirectory(destination, directory, client) {
    const folderPath = (0,path__WEBPACK_IMPORTED_MODULE_5__.normalize)(`${destination}/${directory.name}`).replace(/\/$/, "");
    const rootPath = `${this.root.replace(/\/$/, "")}/${folderPath.replace(/^\//, "")}`;
    if (!directory.name) {
      throw new Error("Can not create empty directory");
    }
    const currentUpload = new Upload(rootPath, false, 0, directory);
    this._uploadQueue.push(currentUpload);
    return new p_cancelable__WEBPACK_IMPORTED_MODULE_8__["default"](async (resolve, reject, onCancel) => {
      const abort = new AbortController();
      onCancel(() => abort.abort());
      currentUpload.signal.addEventListener("abort", () => reject(t("Upload has been cancelled")));
      await this._jobQueue.add(async () => {
        currentUpload.status = Status$1.UPLOADING;
        try {
          await client.createDirectory(folderPath, { signal: abort.signal });
          resolve(currentUpload);
        } catch (error) {
          if (error && typeof error === "object" && "status" in error && error.status === 405) {
            currentUpload.status = Status$1.FINISHED;
            logger.debug("Directory already exists, writing into it", { directory: directory.name });
          } else {
            currentUpload.status = Status$1.FAILED;
            reject(error);
          }
        } finally {
          this._notifyAll(currentUpload);
          this.updateStats();
        }
      });
    });
  }
  // Helper for uploading directories (recursively)
  uploadDirectory(destination, directory, callback, client) {
    const folderPath = (0,path__WEBPACK_IMPORTED_MODULE_5__.normalize)(`${destination}/${directory.name}`).replace(/\/$/, "");
    return new p_cancelable__WEBPACK_IMPORTED_MODULE_8__["default"](async (resolve, reject, onCancel) => {
      const abort = new AbortController();
      onCancel(() => abort.abort());
      const selectedForUpload = await callback(directory.children, folderPath);
      if (selectedForUpload === false) {
        logger.debug("Upload canceled by user", { directory });
        reject(t("Upload has been cancelled"));
        return;
      } else if (selectedForUpload.length === 0 && directory.children.length > 0) {
        logger.debug("Skipping directory, as all files were skipped by user", { directory });
        resolve([]);
        return;
      }
      const directories = [];
      const uploads = [];
      abort.signal.addEventListener("abort", () => {
        directories.forEach((upload2) => upload2.cancel());
        uploads.forEach((upload2) => upload2.cancel());
      });
      logger.debug("Start directory upload", { directory });
      try {
        if (directory.name) {
          uploads.push(this.createDirectory(destination, directory, client));
          await uploads.at(-1);
        }
        for (const node of selectedForUpload) {
          if (node instanceof Directory) {
            directories.push(this.uploadDirectory(folderPath, node, callback, client));
          } else {
            uploads.push(this.upload(`${folderPath}/${node.name}`, node));
          }
        }
        const resolvedUploads = await Promise.all(uploads);
        const resolvedDirectoryUploads = await Promise.all(directories);
        resolve([resolvedUploads, ...resolvedDirectoryUploads].flat());
      } catch (e) {
        abort.abort(e);
        reject(e);
      }
    });
  }
  /**
   * Upload a file to the given path
   * @param {string} destination the destination path relative to the root folder. e.g. /foo/bar.txt
   * @param {File|FileSystemFileEntry} fileHandle the file to upload
   * @param {string} root the root folder to upload to
   * @param retries number of retries
   */
  upload(destination, fileHandle, root, retries = 5) {
    root = root || this.root;
    const destinationPath = `${root.replace(/\/$/, "")}/${destination.replace(/^\//, "")}`;
    const { origin } = new URL(destinationPath);
    const encodedDestinationFile = origin + (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.encodePath)(destinationPath.slice(origin.length));
    logger.debug(`Uploading ${fileHandle.name} to ${encodedDestinationFile}`);
    const promise = new p_cancelable__WEBPACK_IMPORTED_MODULE_8__["default"](async (resolve, reject, onCancel) => {
      if (isFileSystemFileEntry(fileHandle)) {
        fileHandle = await new Promise((resolve2) => fileHandle.file(resolve2, reject));
      }
      const file = fileHandle;
      const maxChunkSize = getMaxChunksSize("size" in file ? file.size : void 0);
      const disabledChunkUpload = this._isPublic || maxChunkSize === 0 || "size" in file && file.size < maxChunkSize;
      const upload2 = new Upload(destinationPath, !disabledChunkUpload, file.size, file);
      this._uploadQueue.push(upload2);
      this.updateStats();
      onCancel(upload2.cancel);
      if (!disabledChunkUpload) {
        logger.debug("Initializing chunked upload", { file, upload: upload2 });
        const tempUrl = await initChunkWorkspace(encodedDestinationFile, retries);
        const chunksQueue = [];
        for (let chunk = 0; chunk < upload2.chunks; chunk++) {
          const bufferStart = chunk * maxChunkSize;
          const bufferEnd = Math.min(bufferStart + maxChunkSize, upload2.size);
          const blob = () => getChunk(file, bufferStart, maxChunkSize);
          const request = () => {
            return uploadData(
              `${tempUrl}/${chunk + 1}`,
              blob,
              upload2.signal,
              () => this.updateStats(),
              encodedDestinationFile,
              {
                ...this._customHeaders,
                "X-OC-Mtime": Math.floor(file.lastModified / 1e3),
                "OC-Total-Length": file.size,
                "Content-Type": "application/octet-stream"
              },
              retries
            ).then(() => {
              upload2.uploaded = upload2.uploaded + maxChunkSize;
            }).catch((error) => {
              if (error?.response?.status === 507) {
                logger.error("Upload failed, not enough space on the server or quota exceeded. Cancelling the remaining chunks", { error, upload: upload2 });
                upload2.cancel();
                upload2.status = Status$1.FAILED;
                throw error;
              }
              if (!(0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_7__.isCancel)(error)) {
                logger.error(`Chunk ${chunk + 1} ${bufferStart} - ${bufferEnd} uploading failed`, { error, upload: upload2 });
                upload2.cancel();
                upload2.status = Status$1.FAILED;
              }
              throw error;
            });
          };
          chunksQueue.push(this._jobQueue.add(request));
        }
        try {
          await Promise.all(chunksQueue);
          this.updateStats();
          upload2.response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_7__["default"].request({
            method: "MOVE",
            url: `${tempUrl}/.file`,
            headers: {
              ...this._customHeaders,
              "X-OC-Mtime": Math.floor(file.lastModified / 1e3),
              "OC-Total-Length": file.size,
              Destination: encodedDestinationFile
            }
          });
          this.updateStats();
          upload2.status = Status$1.FINISHED;
          logger.debug(`Successfully uploaded ${file.name}`, { file, upload: upload2 });
          resolve(upload2);
        } catch (error) {
          if (!(0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_7__.isCancel)(error)) {
            upload2.status = Status$1.FAILED;
            reject("Failed assembling the chunks together");
          } else {
            upload2.status = Status$1.FAILED;
            reject(t("Upload has been cancelled"));
          }
          _nextcloud_axios__WEBPACK_IMPORTED_MODULE_7__["default"].request({
            method: "DELETE",
            url: `${tempUrl}`
          });
        }
        this._notifyAll(upload2);
      } else {
        logger.debug("Initializing regular upload", { file, upload: upload2 });
        const blob = await getChunk(file, 0, upload2.size);
        const request = async () => {
          try {
            upload2.response = await uploadData(
              encodedDestinationFile,
              blob,
              upload2.signal,
              (event) => {
                upload2.uploaded = upload2.uploaded + event.bytes;
                this.updateStats();
              },
              void 0,
              {
                ...this._customHeaders,
                "X-OC-Mtime": Math.floor(file.lastModified / 1e3),
                "Content-Type": file.type
              }
            );
            upload2.uploaded = upload2.size;
            this.updateStats();
            logger.debug(`Successfully uploaded ${file.name}`, { file, upload: upload2 });
            resolve(upload2);
          } catch (error) {
            if ((0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_7__.isCancel)(error)) {
              upload2.status = Status$1.FAILED;
              reject(t("Upload has been cancelled"));
              return;
            }
            if (error?.response) {
              upload2.response = error.response;
            }
            upload2.status = Status$1.FAILED;
            logger.error(`Failed uploading ${file.name}`, { error, file, upload: upload2 });
            reject("Failed uploading the file");
          }
          this._notifyAll(upload2);
        };
        this._jobQueue.add(request);
        this.updateStats();
      }
      this._jobQueue.onIdle().then(() => this.reset());
      return upload2;
    });
    return promise;
  }
}
function normalizeComponent(scriptExports, render6, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render6) {
    options.render = render6;
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
const _sfc_main$4 = {
  name: "CancelIcon",
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
var _sfc_render$4 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon cancel-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$4 = [];
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  null
);
const IconCancel = __component__$4.exports;
const _sfc_main$3 = {
  name: "FolderUploadIcon",
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
var _sfc_render$3 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon folder-upload-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H10L12,6H20M10.75,13H14V17H16V13H19.25L15,8.75" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  null
);
const IconFolderUpload = __component__$3.exports;
const _sfc_main$2 = {
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
var _sfc_render$2 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon plus-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  null
);
const IconPlus = __component__$2.exports;
const _sfc_main$1 = {
  name: "UploadIcon",
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
var _sfc_render$1 = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("span", _vm._b({ staticClass: "material-design-icon upload-icon", attrs: { "aria-hidden": _vm.title ? null : "true", "aria-label": _vm.title, "role": "img" }, on: { "click": function($event) {
    return _vm.$emit("click", $event);
  } } }, "span", _vm.$attrs, false), [_c("svg", { staticClass: "material-design-icon__svg", attrs: { "fill": _vm.fillColor, "width": _vm.size, "height": _vm.size, "viewBox": "0 0 24 24" } }, [_c("path", { attrs: { "d": "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" } }, [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()])])]);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  null
);
const IconUpload = __component__$1.exports;
function showInvalidFilenameDialog(error) {
  const InvalidFilenameDialog = (0,vue__WEBPACK_IMPORTED_MODULE_24__.defineAsyncComponent)(() => __webpack_require__.e(/*! import() */ "node_modules_nextcloud_upload_dist_chunks_InvalidFilenameDialog-CQ6TfYs0_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./InvalidFilenameDialog-CQ6TfYs0.mjs */ "./node_modules/@nextcloud/upload/dist/chunks/InvalidFilenameDialog-CQ6TfYs0.mjs")));
  const { promise, reject, resolve } = Promise.withResolvers();
  (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_22__.spawnDialog)(
    InvalidFilenameDialog,
    {
      error,
      validateFilename: _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.validateFilename
    },
    (...rest) => {
      const [{ skip, rename }] = rest;
      if (skip) {
        resolve(false);
      } else if (rename) {
        resolve(rename);
      } else {
        reject();
      }
    }
  );
  return promise;
}
function hasConflict(files, content) {
  return getConflicts(files, content).length > 0;
}
function getConflicts(files, content) {
  const contentNames = content.map((node) => node.basename);
  const conflicts = files.filter((node) => {
    const name = "basename" in node ? node.basename : node.name;
    return contentNames.indexOf(name) !== -1;
  });
  return conflicts;
}
function uploadConflictHandler(contentsCallback) {
  return async (nodes, path) => {
    try {
      const content = await contentsCallback(path).catch(() => []);
      const conflicts = getConflicts(nodes, content);
      if (conflicts.length > 0) {
        const { selected, renamed } = await openConflictPicker(path, conflicts, content, { recursive: true });
        nodes = [...selected, ...renamed];
      }
      const filesToUpload = [];
      for (const file of nodes) {
        try {
          (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.validateFilename)(file.name);
          filesToUpload.push(file);
        } catch (error) {
          if (!(error instanceof _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.InvalidFilenameError)) {
            logger.error(`Unexpected error while validating ${file.name}`, { error });
            throw error;
          }
          let newName = await showInvalidFilenameDialog(error);
          if (newName !== false) {
            newName = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.getUniqueName)(newName, nodes.map((node) => node.name));
            Object.defineProperty(file, "name", { value: newName });
            filesToUpload.push(file);
          }
        }
      }
      if (filesToUpload.length === 0 && nodes.length > 0) {
        const folder = (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.basename)(path);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_22__.showInfo)(
          folder ? t('Upload of "{folder}" has been skipped', { folder }) : t("Upload has been skipped")
        );
      }
      return filesToUpload;
    } catch (error) {
      logger.debug("Upload has been cancelled", { error });
      (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_22__.showWarning)(t("Upload has been cancelled"));
      return false;
    }
  };
}
const _sfc_main = (0,vue__WEBPACK_IMPORTED_MODULE_24__.defineComponent)({
  name: "UploadPicker",
  components: {
    IconCancel,
    IconFolderUpload,
    IconPlus,
    IconUpload,
    NcActionButton: _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_15__["default"],
    NcActionCaption: _nextcloud_vue_dist_Components_NcActionCaption_js__WEBPACK_IMPORTED_MODULE_16__["default"],
    NcActionSeparator: _nextcloud_vue_dist_Components_NcActionSeparator_js__WEBPACK_IMPORTED_MODULE_17__["default"],
    NcActions: _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_18__["default"],
    NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_19__["default"],
    NcIconSvgWrapper: _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_20__["default"],
    NcProgressBar: _nextcloud_vue_dist_Components_NcProgressBar_js__WEBPACK_IMPORTED_MODULE_21__["default"]
  },
  props: {
    accept: {
      type: Array,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Allow to disable the "new"-menu for this UploadPicker instance
     */
    noMenu: {
      type: Boolean,
      default: false
    },
    destination: {
      type: _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.Folder,
      default: void 0
    },
    allowFolders: {
      type: Boolean,
      default: false
    },
    /**
     * List of file present in the destination folder
     * It is also possible to provide a function that takes a relative path to the current directory and returns the content of it
     * Note: If a function is passed it should return the current base directory when no path or an empty is passed
     */
    content: {
      type: [Array, Function],
      default: () => []
    },
    /**
     * Overwrite forbidden characters (by default the capabilities of the server are used)
     * @deprecated Deprecated and will be removed in the next major version
     */
    forbiddenCharacters: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {
      t,
      // non reactive data / properties
      progressTimeId: `nc-uploader-progress-${Math.random().toString(36).slice(7)}`
    };
  },
  data() {
    return {
      eta: null,
      openedMenu: false,
      timeLeft: "",
      newFileMenuEntries: [],
      uploadManager: getUploader()
    };
  },
  computed: {
    menuEntriesUpload() {
      return this.newFileMenuEntries.filter((entry) => entry.category === _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.NewMenuEntryCategory.UploadFromDevice);
    },
    menuEntriesNew() {
      return this.newFileMenuEntries.filter((entry) => entry.category === _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.NewMenuEntryCategory.CreateNew);
    },
    menuEntriesOther() {
      return this.newFileMenuEntries.filter((entry) => entry.category === _nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.NewMenuEntryCategory.Other);
    },
    /**
     * Check whether the current browser supports uploading directories
     * Hint: This does not check if the current connection supports this, as some browsers require a secure context!
     */
    canUploadFolders() {
      return this.allowFolders && "webkitdirectory" in document.createElement("input");
    },
    totalQueueSize() {
      return this.uploadManager.info?.size || 0;
    },
    uploadedQueueSize() {
      return this.uploadManager.info?.progress || 0;
    },
    progress() {
      return Math.round(this.uploadedQueueSize / this.totalQueueSize * 100) || 0;
    },
    queue() {
      return this.uploadManager.queue;
    },
    hasFailure() {
      return this.queue?.filter((upload2) => upload2.status === Status$1.FAILED).length !== 0;
    },
    isUploading() {
      return this.queue?.length > 0;
    },
    isAssembling() {
      return this.queue?.filter((upload2) => upload2.status === Status$1.ASSEMBLING).length !== 0;
    },
    isPaused() {
      return this.uploadManager.info?.status === Status.PAUSED;
    },
    buttonLabel() {
      return this.noMenu ? t("Upload") : t("New");
    },
    // Hide the button text if we're uploading
    buttonName() {
      if (this.isUploading) {
        return void 0;
      }
      return this.buttonLabel;
    },
    haveMenu() {
      return !((this.noMenu || this.newFileMenuEntries.length === 0) && !this.canUploadFolders);
    }
  },
  watch: {
    allowFolders: {
      immediate: true,
      handler() {
        if (typeof this.content !== "function" && this.allowFolders) {
          logger.error("[UploadPicker] Setting `allowFolders` is only allowed if `content` is a function");
        }
      }
    },
    destination(destination) {
      this.setDestination(destination);
    },
    totalQueueSize(size) {
      this.eta = simple_eta__WEBPACK_IMPORTED_MODULE_14__({ min: 0, max: size });
      this.updateStatus();
    },
    uploadedQueueSize(size) {
      this.eta?.report?.(size);
      this.updateStatus();
    },
    isPaused(isPaused) {
      if (isPaused) {
        this.$emit("paused", this.queue);
      } else {
        this.$emit("resumed", this.queue);
      }
    }
  },
  beforeMount() {
    if (this.destination) {
      this.setDestination(this.destination);
    }
    this.uploadManager.addNotifier(this.onUploadCompletion);
    (0,_nextcloud_vue_dist_Composables_useHotKey_js__WEBPACK_IMPORTED_MODULE_13__.useHotKey)("u", this.onKeyDown, {
      stop: true,
      prevent: true,
      shift: true
    });
    (0,_nextcloud_vue_dist_Composables_useHotKey_js__WEBPACK_IMPORTED_MODULE_13__.useHotKey)("Escape", this.onKeyDown, {
      stop: true,
      prevent: true
    });
    logger.debug("UploadPicker initialised");
  },
  methods: {
    /**
     * Handle clicking a new-menu entry
     * @param entry The entry that was clicked
     */
    async onClick(entry) {
      entry.handler(
        this.destination,
        await this.getContent().catch(() => [])
      );
    },
    /**
     * Trigger file picker
     * @param uploadFolders Upload folders
     */
    onTriggerPick(uploadFolders = false) {
      const input = this.$refs.input;
      if (this.canUploadFolders) {
        input.webkitdirectory = uploadFolders;
      }
      this.$nextTick(() => input.click());
    },
    /**
     * Helper for backwards compatibility that queries the content of the current directory
     * @param path The current path
     */
    async getContent(path) {
      return Array.isArray(this.content) ? this.content : await this.content(path);
    },
    /**
     * Start uploading
     */
    onPick() {
      const input = this.$refs.input;
      const files = input.files ? Array.from(input.files) : [];
      this.uploadManager.batchUpload("", files, uploadConflictHandler(this.getContent)).catch((error) => logger.debug("Error while uploading", { error })).finally(() => this.resetForm());
    },
    resetForm() {
      const form = this.$refs.form;
      form?.reset();
    },
    /**
     * Cancel ongoing queue
     */
    onCancel() {
      this.uploadManager.queue.forEach((upload2) => {
        upload2.cancel();
      });
      this.resetForm();
    },
    updateStatus() {
      if (this.isPaused) {
        this.timeLeft = t("paused");
        return;
      }
      const estimate = Math.round(this.eta.estimate());
      if (estimate === Infinity) {
        this.timeLeft = t("estimating time left");
        return;
      }
      if (estimate < 10) {
        this.timeLeft = t("a few seconds left");
        return;
      }
      if (estimate > 60) {
        const date = /* @__PURE__ */ new Date(0);
        date.setSeconds(estimate);
        const time = date.toISOString().slice(11, 11 + 8);
        this.timeLeft = t("{time} left", { time });
        return;
      }
      this.timeLeft = t("{seconds} seconds left", { seconds: estimate });
    },
    setDestination(destination) {
      if (!this.destination) {
        logger.debug("Invalid destination");
        return;
      }
      this.uploadManager.destination = destination;
      this.newFileMenuEntries = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_3__.getNewFileMenuEntries)(destination);
    },
    onUploadCompletion(upload2) {
      if (upload2.status === Status$1.FAILED) {
        this.$emit("failed", upload2);
      } else {
        this.$emit("uploaded", upload2);
      }
    },
    onKeyDown(event) {
      if (event.key === "u") {
        if (this.haveMenu) {
          this.openedMenu = true;
          return;
        }
        this.onTriggerPick();
      }
      if (event.key === "Escape" && this.openedMenu) {
        this.openedMenu = false;
      }
    }
  }
});
var _sfc_render = function render5() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _vm.destination ? _c("form", { ref: "form", staticClass: "upload-picker", class: { "upload-picker--uploading": _vm.isUploading, "upload-picker--paused": _vm.isPaused }, attrs: { "data-cy-upload-picker": "" } }, [!_vm.haveMenu ? _c("NcButton", { attrs: { "disabled": _vm.disabled, "data-cy-upload-picker-add": "", "data-cy-upload-picker-menu-entry": "upload-file", "type": "secondary" }, on: { "click": function($event) {
    return _vm.onTriggerPick();
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("IconPlus", { attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 1991456921) }, [_vm._v(" " + _vm._s(_vm.buttonName) + " ")]) : _c("NcActions", { attrs: { "aria-label": _vm.buttonLabel, "menu-name": _vm.buttonName, "open": _vm.openedMenu, "type": "secondary" }, on: { "update:open": function($event) {
    _vm.openedMenu = $event;
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("IconPlus", { attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 1991456921) }, [_c("NcActionCaption", { attrs: { "name": _vm.t("Upload from device") } }), _c("NcActionButton", { attrs: { "data-cy-upload-picker-add": "", "data-cy-upload-picker-menu-entry": "upload-file", "close-after-click": true }, on: { "click": function($event) {
    return _vm.onTriggerPick();
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("IconUpload", { attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 337456192) }, [_vm._v(" " + _vm._s(_vm.t("Upload files")) + " ")]), _vm.canUploadFolders ? _c("NcActionButton", { attrs: { "close-after-click": "", "data-cy-upload-picker-add-folders": "", "data-cy-upload-picker-menu-entry": "upload-folder" }, on: { "click": function($event) {
    return _vm.onTriggerPick(true);
  } }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("IconFolderUpload", { staticStyle: { "color": "var(--color-primary-element)" }, attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 1037549157) }, [_vm._v(" " + _vm._s(_vm.t("Upload folders")) + " ")]) : _vm._e(), !_vm.noMenu ? _vm._l(_vm.menuEntriesUpload, function(entry) {
    return _c("NcActionButton", { key: entry.id, staticClass: "upload-picker__menu-entry", attrs: { "icon": entry.iconClass, "close-after-click": true, "data-cy-upload-picker-menu-entry": entry.id }, on: { "click": function($event) {
      return _vm.onClick(entry);
    } }, scopedSlots: _vm._u([entry.iconSvgInline ? { key: "icon", fn: function() {
      return [_c("NcIconSvgWrapper", { attrs: { "svg": entry.iconSvgInline } })];
    }, proxy: true } : null], null, true) }, [_vm._v(" " + _vm._s(entry.displayName) + " ")]);
  }) : _vm._e(), !_vm.noMenu && _vm.menuEntriesNew.length > 0 ? [_c("NcActionSeparator"), _c("NcActionCaption", { attrs: { "name": _vm.t("Create new") } }), _vm._l(_vm.menuEntriesNew, function(entry) {
    return _c("NcActionButton", { key: entry.id, staticClass: "upload-picker__menu-entry", attrs: { "icon": entry.iconClass, "close-after-click": true, "data-cy-upload-picker-menu-entry": entry.id }, on: { "click": function($event) {
      return _vm.onClick(entry);
    } }, scopedSlots: _vm._u([entry.iconSvgInline ? { key: "icon", fn: function() {
      return [_c("NcIconSvgWrapper", { attrs: { "svg": entry.iconSvgInline } })];
    }, proxy: true } : null], null, true) }, [_vm._v(" " + _vm._s(entry.displayName) + " ")]);
  })] : _vm._e(), !_vm.noMenu && _vm.menuEntriesOther.length > 0 ? [_c("NcActionSeparator"), _vm._l(_vm.menuEntriesOther, function(entry) {
    return _c("NcActionButton", { key: entry.id, staticClass: "upload-picker__menu-entry", attrs: { "icon": entry.iconClass, "close-after-click": true, "data-cy-upload-picker-menu-entry": entry.id }, on: { "click": function($event) {
      return _vm.onClick(entry);
    } }, scopedSlots: _vm._u([entry.iconSvgInline ? { key: "icon", fn: function() {
      return [_c("NcIconSvgWrapper", { attrs: { "svg": entry.iconSvgInline } })];
    }, proxy: true } : null], null, true) }, [_vm._v(" " + _vm._s(entry.displayName) + " ")]);
  })] : _vm._e()], 2), _c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.isUploading, expression: "isUploading" }], staticClass: "upload-picker__progress" }, [_c("NcProgressBar", { attrs: { "aria-label": _vm.t("Upload progress"), "aria-describedby": _vm.progressTimeId, "error": _vm.hasFailure, "value": _vm.progress, "size": "medium" } }), _c("p", { attrs: { "id": _vm.progressTimeId } }, [_vm._v(" " + _vm._s(_vm.timeLeft) + " ")])], 1), _vm.isUploading ? _c("NcButton", { staticClass: "upload-picker__cancel", attrs: { "type": "tertiary", "aria-label": _vm.t("Cancel uploads"), "data-cy-upload-picker-cancel": "" }, on: { "click": _vm.onCancel }, scopedSlots: _vm._u([{ key: "icon", fn: function() {
    return [_c("IconCancel", { attrs: { "size": 20 } })];
  }, proxy: true }], null, false, 3076329829) }) : _vm._e(), _c("input", { ref: "input", staticClass: "hidden-visually", attrs: { "accept": _vm.accept?.join?.(", "), "multiple": _vm.multiple, "data-cy-upload-picker-input": "", "type": "file" }, on: { "change": _vm.onPick } })], 1) : _vm._e();
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "e69e222f"
);
const UploadPicker = __component__.exports;
function getUploader(isPublic = (0,_nextcloud_sharing_public__WEBPACK_IMPORTED_MODULE_1__.isPublicShare)(), forceRecreate = false) {
  if (forceRecreate || window._nc_uploader === void 0) {
    window._nc_uploader = new Uploader(isPublic);
  }
  return window._nc_uploader;
}
function upload(destinationPath, file) {
  const uploader = getUploader();
  uploader.upload(destinationPath, file);
  return uploader;
}
async function openConflictPicker(dirname, conflicts, content, options) {
  const ConflictPicker = (0,vue__WEBPACK_IMPORTED_MODULE_24__.defineAsyncComponent)(() => Promise.all(/*! import() */[__webpack_require__.e("core-common"), __webpack_require__.e("node_modules_nextcloud_upload_dist_chunks_ConflictPicker-NXkHfBMv_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ConflictPicker-NXkHfBMv.mjs */ "./node_modules/@nextcloud/upload/dist/chunks/ConflictPicker-NXkHfBMv.mjs")));
  return new Promise((resolve, reject) => {
    const picker = new vue__WEBPACK_IMPORTED_MODULE_24__["default"]({
      name: "ConflictPickerRoot",
      render: (h) => h(ConflictPicker, {
        props: {
          dirname,
          conflicts,
          content,
          recursiveUpload: options?.recursive === true
        },
        on: {
          submit(results) {
            resolve(results);
            picker.$destroy();
            picker.$el?.parentNode?.removeChild(picker.$el);
          },
          cancel(error) {
            reject(error ?? new Error("Canceled"));
            picker.$destroy();
            picker.$el?.parentNode?.removeChild(picker.$el);
          }
        }
      })
    });
    picker.$mount();
    document.body.appendChild(picker.$el);
  });
}



/***/ }),

/***/ "./node_modules/@nextcloud/upload/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@nextcloud/upload/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Upload: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   UploadPicker: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.U),
/* harmony export */   UploadStatus: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   Uploader: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.f),
/* harmony export */   UploaderStatus: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   getConflicts: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   getUploader: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   hasConflict: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   openConflictPicker: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.o),
/* harmony export */   upload: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.u),
/* harmony export */   uploadConflictHandler: () => (/* reexport safe */ _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__.d)
/* harmony export */ });
/* harmony import */ var _nextcloud_sharing_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/sharing/public */ "./node_modules/@nextcloud/sharing/dist/public.mjs");
/* harmony import */ var _chunks_index_DUD0fqDs_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunks/index-DUD0fqDs.mjs */ "./node_modules/@nextcloud/upload/dist/chunks/index-DUD0fqDs.mjs");






/***/ }),

/***/ "./node_modules/@nextcloud/upload/node_modules/eventemitter3/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@nextcloud/upload/node_modules/eventemitter3/index.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
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

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/@nextcloud/upload/node_modules/eventemitter3/index.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@nextcloud/upload/node_modules/eventemitter3/index.mjs ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventEmitter: () => (/* reexport default export from named module */ _index_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@nextcloud/upload/node_modules/eventemitter3/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/@nextcloud/upload/node_modules/p-queue/dist/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@nextcloud/upload/node_modules/p-queue/dist/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PQueue)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/@nextcloud/upload/node_modules/eventemitter3/index.mjs");
/* harmony import */ var p_timeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-timeout */ "./node_modules/@nextcloud/upload/node_modules/p-timeout/index.js");
/* harmony import */ var _priority_queue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priority-queue.js */ "./node_modules/@nextcloud/upload/node_modules/p-queue/dist/priority-queue.js");



/**
Promise queue with concurrency control.
*/
class PQueue extends eventemitter3__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
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
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        options = {
            carryoverConcurrencyCount: false,
            intervalCap: Number.POSITIVE_INFINITY,
            interval: 0,
            concurrency: Number.POSITIVE_INFINITY,
            autoStart: true,
            queueClass: _priority_queue_js__WEBPACK_IMPORTED_MODULE_2__["default"],
            ...options,
        };
        if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
            throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${options.intervalCap?.toString() ?? ''}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) {
            throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${options.interval?.toString() ?? ''}\` (${typeof options.interval})`);
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
        this.emit('next');
    }
    #onResumeInterval() {
        this.#onInterval();
        this.#initializeIntervalIfNeeded();
        this.#timeoutId = undefined;
    }
    get #isIntervalPaused() {
        const now = Date.now();
        if (this.#intervalId === undefined) {
            const delay = this.#intervalEnd - now;
            if (delay < 0) {
                // Act as the interval was done
                // We don't need to resume it here because it will be resumed on line 160
                this.#intervalCount = (this.#carryoverConcurrencyCount) ? this.#pending : 0;
            }
            else {
                // Act as the interval is pending
                if (this.#timeoutId === undefined) {
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
            // We can clear the interval ("pause")
            // Because we can redo it later ("resume")
            if (this.#intervalId) {
                clearInterval(this.#intervalId);
            }
            this.#intervalId = undefined;
            this.emit('empty');
            if (this.#pending === 0) {
                this.emit('idle');
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
                this.emit('active');
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
        if (this.#isIntervalIgnored || this.#intervalId !== undefined) {
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
            this.#intervalId = undefined;
        }
        this.#intervalCount = this.#carryoverConcurrencyCount ? this.#pending : 0;
        this.#processQueue();
    }
    /**
    Executes all queued functions until it reaches the limit.
    */
    #processQueue() {
        // eslint-disable-next-line no-empty
        while (this.#tryToStartAnother()) { }
    }
    get concurrency() {
        return this.#concurrency;
    }
    set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === 'number' && newConcurrency >= 1)) {
            throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        this.#concurrency = newConcurrency;
        this.#processQueue();
    }
    async #throwOnAbort(signal) {
        return new Promise((_resolve, reject) => {
            signal.addEventListener('abort', () => {
                reject(signal.reason);
            }, { once: true });
        });
    }
    async add(function_, options = {}) {
        options = {
            timeout: this.timeout,
            throwOnTimeout: this.#throwOnTimeout,
            ...options,
        };
        return new Promise((resolve, reject) => {
            this.#queue.enqueue(async () => {
                this.#pending++;
                this.#intervalCount++;
                try {
                    options.signal?.throwIfAborted();
                    let operation = function_({ signal: options.signal });
                    if (options.timeout) {
                        operation = (0,p_timeout__WEBPACK_IMPORTED_MODULE_1__["default"])(Promise.resolve(operation), { milliseconds: options.timeout });
                    }
                    if (options.signal) {
                        operation = Promise.race([operation, this.#throwOnAbort(options.signal)]);
                    }
                    const result = await operation;
                    resolve(result);
                    this.emit('completed', result);
                }
                catch (error) {
                    if (error instanceof p_timeout__WEBPACK_IMPORTED_MODULE_1__.TimeoutError && !options.throwOnTimeout) {
                        resolve();
                        return;
                    }
                    reject(error);
                    this.emit('error', error);
                }
                finally {
                    this.#next();
                }
            }, options);
            this.emit('add');
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
        // Instantly resolve if the queue is empty
        if (this.#queue.size === 0) {
            return;
        }
        await this.#onEvent('empty');
    }
    /**
    @returns A promise that settles when the queue size is less than the given limit: `queue.size < limit`.

    If you want to avoid having the queue grow beyond a certain size you can `await queue.onSizeLessThan()` before adding a new item.

    Note that this only limits the number of items waiting to start. There could still be up to `concurrency` jobs already running that this call does not include in its calculation.
    */
    async onSizeLessThan(limit) {
        // Instantly resolve if the queue is empty.
        if (this.#queue.size < limit) {
            return;
        }
        await this.#onEvent('next', () => this.#queue.size < limit);
    }
    /**
    The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

    @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
    */
    async onIdle() {
        // Instantly resolve if none pending and if nothing else is queued
        if (this.#pending === 0 && this.#queue.size === 0) {
            return;
        }
        await this.#onEvent('idle');
    }
    async #onEvent(event, filter) {
        return new Promise(resolve => {
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
        // eslint-disable-next-line unicorn/no-array-callback-reference
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


/***/ }),

/***/ "./node_modules/@nextcloud/upload/node_modules/p-queue/dist/lower-bound.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/upload/node_modules/p-queue/dist/lower-bound.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ lowerBound)
/* harmony export */ });
// Port of lower_bound from https://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comparator) {
    let first = 0;
    let count = array.length;
    while (count > 0) {
        const step = Math.trunc(count / 2);
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
            first = ++it;
            count -= step + 1;
        }
        else {
            count = step;
        }
    }
    return first;
}


/***/ }),

/***/ "./node_modules/@nextcloud/upload/node_modules/p-queue/dist/priority-queue.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@nextcloud/upload/node_modules/p-queue/dist/priority-queue.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PriorityQueue)
/* harmony export */ });
/* harmony import */ var _lower_bound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lower-bound.js */ "./node_modules/@nextcloud/upload/node_modules/p-queue/dist/lower-bound.js");

class PriorityQueue {
    #queue = [];
    enqueue(run, options) {
        options = {
            priority: 0,
            ...options,
        };
        const element = {
            priority: options.priority,
            run,
        };
        if (this.size && this.#queue[this.size - 1].priority >= options.priority) {
            this.#queue.push(element);
            return;
        }
        const index = (0,_lower_bound_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.#queue, element, (a, b) => b.priority - a.priority);
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


/***/ }),

/***/ "./node_modules/@nextcloud/upload/node_modules/p-timeout/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@nextcloud/upload/node_modules/p-timeout/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortError: () => (/* binding */ AbortError),
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   "default": () => (/* binding */ pTimeout)
/* harmony export */ });
class TimeoutError extends Error {
	constructor(message) {
		super(message);
		this.name = 'TimeoutError';
	}
}

/**
An error to be thrown when the request is aborted by AbortController.
DOMException is thrown instead of this Error when DOMException is available.
*/
class AbortError extends Error {
	constructor(message) {
		super();
		this.name = 'AbortError';
		this.message = message;
	}
}

/**
TODO: Remove AbortError and just throw DOMException when targeting Node 18.
*/
const getDOMException = errorMessage => globalThis.DOMException === undefined
	? new AbortError(errorMessage)
	: new DOMException(errorMessage);

/**
TODO: Remove below function and just 'reject(signal.reason)' when targeting Node 18.
*/
const getAbortedReason = signal => {
	const reason = signal.reason === undefined
		? getDOMException('This operation was aborted.')
		: signal.reason;

	return reason instanceof Error ? reason : getDOMException(reason);
};

function pTimeout(promise, options) {
	const {
		milliseconds,
		fallback,
		message,
		customTimers = {setTimeout, clearTimeout},
	} = options;

	let timer;

	const wrappedPromise = new Promise((resolve, reject) => {
		if (typeof milliseconds !== 'number' || Math.sign(milliseconds) !== 1) {
			throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${milliseconds}\``);
		}

		if (options.signal) {
			const {signal} = options;
			if (signal.aborted) {
				reject(getAbortedReason(signal));
			}

			signal.addEventListener('abort', () => {
				reject(getAbortedReason(signal));
			});
		}

		if (milliseconds === Number.POSITIVE_INFINITY) {
			promise.then(resolve, reject);
			return;
		}

		// We create the error outside of `setTimeout` to preserve the stack trace.
		const timeoutError = new TimeoutError();

		timer = customTimers.setTimeout.call(undefined, () => {
			if (fallback) {
				try {
					resolve(fallback());
				} catch (error) {
					reject(error);
				}

				return;
			}

			if (typeof promise.cancel === 'function') {
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
		customTimers.clearTimeout.call(undefined, timer);
		timer = undefined;
	};

	return cancelablePromise;
}


/***/ }),

/***/ "./node_modules/axios-retry/dist/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/axios-retry/dist/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_OPTIONS: () => (/* binding */ DEFAULT_OPTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   exponentialDelay: () => (/* binding */ exponentialDelay),
/* harmony export */   isIdempotentRequestError: () => (/* binding */ isIdempotentRequestError),
/* harmony export */   isNetworkError: () => (/* binding */ isNetworkError),
/* harmony export */   isNetworkOrIdempotentRequestError: () => (/* binding */ isNetworkOrIdempotentRequestError),
/* harmony export */   isRetryableError: () => (/* binding */ isRetryableError),
/* harmony export */   isSafeRequestError: () => (/* binding */ isSafeRequestError),
/* harmony export */   linearDelay: () => (/* binding */ linearDelay),
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   retryAfter: () => (/* binding */ retryAfter)
/* harmony export */ });
/* harmony import */ var is_retry_allowed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-retry-allowed */ "./node_modules/is-retry-allowed/index.js");

const namespace = 'axios-retry';
function isNetworkError(error) {
    const CODE_EXCLUDE_LIST = ['ERR_CANCELED', 'ECONNABORTED'];
    if (error.response) {
        return false;
    }
    if (!error.code) {
        return false;
    }
    // Prevents retrying timed out & cancelled requests
    if (CODE_EXCLUDE_LIST.includes(error.code)) {
        return false;
    }
    // Prevents retrying unsafe errors
    return is_retry_allowed__WEBPACK_IMPORTED_MODULE_0__(error);
}
const SAFE_HTTP_METHODS = ['get', 'head', 'options'];
const IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete']);
function isRetryableError(error) {
    return (error.code !== 'ECONNABORTED' &&
        (!error.response ||
            error.response.status === 429 ||
            (error.response.status >= 500 && error.response.status <= 599)));
}
function isSafeRequestError(error) {
    if (!error.config?.method) {
        // Cannot determine if the request can be retried
        return false;
    }
    return isRetryableError(error) && SAFE_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
function isIdempotentRequestError(error) {
    if (!error.config?.method) {
        // Cannot determine if the request can be retried
        return false;
    }
    return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
function isNetworkOrIdempotentRequestError(error) {
    return isNetworkError(error) || isIdempotentRequestError(error);
}
function retryAfter(error = undefined) {
    const retryAfterHeader = error?.response?.headers['retry-after'];
    if (!retryAfterHeader) {
        return 0;
    }
    // if the retry after header is a number, convert it to milliseconds
    let retryAfterMs = (Number(retryAfterHeader) || 0) * 1000;
    // If the retry after header is a date, get the number of milliseconds until that date
    if (retryAfterMs === 0) {
        retryAfterMs = (new Date(retryAfterHeader).valueOf() || 0) - Date.now();
    }
    return Math.max(0, retryAfterMs);
}
function noDelay(_retryNumber = 0, error = undefined) {
    return Math.max(0, retryAfter(error));
}
function exponentialDelay(retryNumber = 0, error = undefined, delayFactor = 100) {
    const calculatedDelay = 2 ** retryNumber * delayFactor;
    const delay = Math.max(calculatedDelay, retryAfter(error));
    const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
    return delay + randomSum;
}
/**
 * Linear delay
 * @param {number | undefined} delayFactor - delay factor in milliseconds (default: 100)
 * @returns {function} (retryNumber: number, error: AxiosError | undefined) => number
 */
function linearDelay(delayFactor = 100) {
    return (retryNumber = 0, error = undefined) => {
        const delay = retryNumber * delayFactor;
        return Math.max(delay, retryAfter(error));
    };
}
const DEFAULT_OPTIONS = {
    retries: 3,
    retryCondition: isNetworkOrIdempotentRequestError,
    retryDelay: noDelay,
    shouldResetTimeout: false,
    onRetry: () => { },
    onMaxRetryTimesExceeded: () => { },
    validateResponse: null
};
function getRequestOptions(config, defaultOptions) {
    return { ...DEFAULT_OPTIONS, ...defaultOptions, ...config[namespace] };
}
function setCurrentState(config, defaultOptions, resetLastRequestTime = false) {
    const currentState = getRequestOptions(config, defaultOptions || {});
    currentState.retryCount = currentState.retryCount || 0;
    if (!currentState.lastRequestTime || resetLastRequestTime) {
        currentState.lastRequestTime = Date.now();
    }
    config[namespace] = currentState;
    return currentState;
}
function fixConfig(axiosInstance, config) {
    // @ts-ignore
    if (axiosInstance.defaults.agent === config.agent) {
        // @ts-ignore
        delete config.agent;
    }
    if (axiosInstance.defaults.httpAgent === config.httpAgent) {
        delete config.httpAgent;
    }
    if (axiosInstance.defaults.httpsAgent === config.httpsAgent) {
        delete config.httpsAgent;
    }
}
async function shouldRetry(currentState, error) {
    const { retries, retryCondition } = currentState;
    const shouldRetryOrPromise = (currentState.retryCount || 0) < retries && retryCondition(error);
    // This could be a promise
    if (typeof shouldRetryOrPromise === 'object') {
        try {
            const shouldRetryPromiseResult = await shouldRetryOrPromise;
            // keep return true unless shouldRetryPromiseResult return false for compatibility
            return shouldRetryPromiseResult !== false;
        }
        catch (_err) {
            return false;
        }
    }
    return shouldRetryOrPromise;
}
async function handleRetry(axiosInstance, currentState, error, config) {
    currentState.retryCount += 1;
    const { retryDelay, shouldResetTimeout, onRetry } = currentState;
    const delay = retryDelay(currentState.retryCount, error);
    // Axios fails merging this configuration to the default configuration because it has an issue
    // with circular structures: https://github.com/mzabriskie/axios/issues/370
    fixConfig(axiosInstance, config);
    if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
        const lastRequestDuration = Date.now() - currentState.lastRequestTime;
        const timeout = config.timeout - lastRequestDuration - delay;
        if (timeout <= 0) {
            return Promise.reject(error);
        }
        config.timeout = timeout;
    }
    config.transformRequest = [(data) => data];
    await onRetry(currentState.retryCount, error, config);
    if (config.signal?.aborted) {
        return Promise.resolve(axiosInstance(config));
    }
    return new Promise((resolve) => {
        const abortListener = () => {
            clearTimeout(timeout);
            resolve(axiosInstance(config));
        };
        const timeout = setTimeout(() => {
            resolve(axiosInstance(config));
            if (config.signal?.removeEventListener) {
                config.signal.removeEventListener('abort', abortListener);
            }
        }, delay);
        if (config.signal?.addEventListener) {
            config.signal.addEventListener('abort', abortListener, { once: true });
        }
    });
}
async function handleMaxRetryTimesExceeded(currentState, error) {
    if (currentState.retryCount >= currentState.retries)
        await currentState.onMaxRetryTimesExceeded(error, currentState.retryCount);
}
const axiosRetry = (axiosInstance, defaultOptions) => {
    const requestInterceptorId = axiosInstance.interceptors.request.use((config) => {
        setCurrentState(config, defaultOptions, true);
        if (config[namespace]?.validateResponse) {
            // by setting this, all HTTP responses will be go through the error interceptor first
            config.validateStatus = () => false;
        }
        return config;
    });
    const responseInterceptorId = axiosInstance.interceptors.response.use(null, async (error) => {
        const { config } = error;
        // If we have no information to retry the request
        if (!config) {
            return Promise.reject(error);
        }
        const currentState = setCurrentState(config, defaultOptions);
        if (error.response && currentState.validateResponse?.(error.response)) {
            // no issue with response
            return error.response;
        }
        if (await shouldRetry(currentState, error)) {
            return handleRetry(axiosInstance, currentState, error, config);
        }
        await handleMaxRetryTimesExceeded(currentState, error);
        return Promise.reject(error);
    });
    return { requestInterceptorId, responseInterceptorId };
};
// Compatibility with CommonJS
axiosRetry.isNetworkError = isNetworkError;
axiosRetry.isSafeRequestError = isSafeRequestError;
axiosRetry.isIdempotentRequestError = isIdempotentRequestError;
axiosRetry.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
axiosRetry.exponentialDelay = exponentialDelay;
axiosRetry.linearDelay = linearDelay;
axiosRetry.isRetryableError = isRetryableError;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosRetry);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActions.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActions.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionSeparator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionSeparator.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionSeparator.mjs");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  __name: 'FileListFilter',
  props: {
    isActive: {
      type: Boolean,
      required: true
    },
    filterName: {
      type: String,
      required: true
    }
  },
  emits: ["reset-filter"],
  setup(__props) {
    return {
      __sfc: true,
      t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.t,
      NcActions: _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      NcActionButton: _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      NcActionSeparator: _nextcloud_vue_dist_Components_NcActionSeparator_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcIconSvgWrapper.js */ "./node_modules/@nextcloud/vue/dist/Components/NcIconSvgWrapper.mjs");
/* harmony import */ var _FileListFilter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileListFilter.vue */ "./apps/files/src/components/FileListFilter/FileListFilter.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  components: {
    FileListFilter: _FileListFilter_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcActionButton: _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcIconSvgWrapper: _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    timePresets: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      // icons used in template
      mdiCalendarRange: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiCalendarRange
    };
  },
  data() {
    return {
      selectedOption: null,
      timeRangeEnd: null,
      timeRangeStart: null
    };
  },
  computed: {
    /**
     * Is the filter currently active
     */
    isActive() {
      return this.selectedOption !== null;
    },
    currentPreset() {
      return this.timePresets.find(_ref => {
        let {
          id
        } = _ref;
        return id === this.selectedOption;
      }) ?? null;
    }
  },
  watch: {
    selectedOption() {
      if (this.selectedOption === null) {
        this.$emit('update:preset');
      } else {
        const preset = this.currentPreset;
        this.$emit('update:preset', preset);
      }
    }
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate,
    resetFilter() {
      this.selectedOption = null;
      this.timeRangeEnd = null;
      this.timeRangeStart = null;
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcIconSvgWrapper.js */ "./node_modules/@nextcloud/vue/dist/Components/NcIconSvgWrapper.mjs");
/* harmony import */ var _FileListFilter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileListFilter.vue */ "./apps/files/src/components/FileListFilter/FileListFilter.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_4__.defineComponent)({
  name: 'FileListFilterType',
  components: {
    FileListFilter: _FileListFilter_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    NcActionButton: _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    NcIconSvgWrapper: _nextcloud_vue_dist_Components_NcIconSvgWrapper_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    presets: {
      type: Array,
      default: () => []
    },
    typePresets: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      mdiFile: _mdi_js__WEBPACK_IMPORTED_MODULE_5__.mdiFile,
      t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate
    };
  },
  data() {
    return {
      selectedOptions: []
    };
  },
  computed: {
    isActive() {
      return this.selectedOptions.length > 0;
    }
  },
  watch: {
    /** Reset selected options if property is changed */
    presets() {
      this.selectedOptions = this.presets ?? [];
    },
    selectedOptions(newValue, oldValue) {
      if (this.selectedOptions.length === 0) {
        if (oldValue.length !== 0) {
          this.$emit('update:presets');
        }
      } else {
        this.$emit('update:presets', this.selectedOptions);
      }
    }
  },
  mounted() {
    this.selectedOptions = this.presets ?? [];
  },
  methods: {
    resetFilter() {
      this.selectedOptions = [];
    },
    /**
     * Toggle option from selected option
     * @param option The option to toggle
     */
    toggleOption(option) {
      const idx = this.selectedOptions.indexOf(option);
      if (idx !== -1) {
        this.selectedOptions.splice(idx, 1);
      } else {
        this.selectedOptions.push(option);
      }
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/files */ "./node_modules/@nextcloud/files/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_filenameValidity_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/filenameValidity.ts */ "./apps/files/src/utils/filenameValidity.ts");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcDialog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcDialog.js */ "./node_modules/@nextcloud/vue/dist/Components/NcDialog.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTextField.mjs");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_7__.defineComponent)({
  __name: 'NewNodeDialog',
  props: {
    /**
     * The name to be used by default
     */
    defaultName: {
      type: String,
      default: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'New folder')
    },
    /**
     * Other files that are in the current directory
     */
    otherNames: {
      type: Array,
      default: () => []
    },
    /**
     * Open state of the dialog
     */
    open: {
      type: Boolean,
      default: true
    },
    /**
     * Dialog name
     */
    name: {
      type: String,
      default: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Create new folder')
    },
    /**
     * Input label
     */
    label: {
      type: String,
      default: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'Folder name')
    }
  },
  emits: ["close"],
  setup(__props, _ref) {
    let {
      emit
    } = _ref;
    const props = __props;
    const localDefaultName = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)(props.defaultName);
    const nameInput = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)();
    const formElement = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)();
    const validity = (0,vue__WEBPACK_IMPORTED_MODULE_7__.ref)('');
    /**
     * Focus the filename input field
     */
    function focusInput() {
      (0,vue__WEBPACK_IMPORTED_MODULE_7__.nextTick)(() => {
        // get the input element
        const input = nameInput.value?.$el.querySelector('input');
        if (!props.open || !input) {
          return;
        }
        // length of the basename
        const length = localDefaultName.value.length - (0,path__WEBPACK_IMPORTED_MODULE_2__.extname)(localDefaultName.value).length;
        // focus the input
        input.focus();
        // and set the selection to the basename (name without extension)
        input.setSelectionRange(0, length);
      });
    }
    /**
     * Trigger submit on the form
     */
    function submit() {
      formElement.value?.requestSubmit();
    }
    // Reset local name on props change
    (0,vue__WEBPACK_IMPORTED_MODULE_7__.watch)(() => [props.defaultName, props.otherNames], () => {
      localDefaultName.value = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.getUniqueName)(props.defaultName, props.otherNames).trim();
    });
    // Validate the local name
    (0,vue__WEBPACK_IMPORTED_MODULE_7__.watchEffect)(() => {
      if (props.otherNames.includes(localDefaultName.value.trim())) {
        validity.value = (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t)('files', 'This name is already in use.');
      } else {
        validity.value = (0,_utils_filenameValidity_ts__WEBPACK_IMPORTED_MODULE_3__.getFilenameValidity)(localDefaultName.value.trim());
      }
      const input = nameInput.value?.$el.querySelector('input');
      if (input) {
        input.setCustomValidity(validity.value);
        input.reportValidity();
      }
    });
    // Ensure the input is focussed even if the dialog is already mounted but not open
    (0,vue__WEBPACK_IMPORTED_MODULE_7__.watch)(() => props.open, () => {
      (0,vue__WEBPACK_IMPORTED_MODULE_7__.nextTick)(() => {
        focusInput();
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_7__.onMounted)(() => {
      // on mounted lets use the unique name
      localDefaultName.value = (0,_nextcloud_files__WEBPACK_IMPORTED_MODULE_0__.getUniqueName)(localDefaultName.value, props.otherNames).trim();
      (0,vue__WEBPACK_IMPORTED_MODULE_7__.nextTick)(() => focusInput());
    });
    return {
      __sfc: true,
      props,
      emit,
      localDefaultName,
      nameInput,
      formElement,
      validity,
      focusInput,
      submit,
      t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_1__.t,
      NcButton: _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      NcDialog: _nextcloud_vue_dist_Components_NcDialog_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      NcTextField: _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=template&id=5c291778&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=template&id=5c291778&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c(_setup.NcActions, {
    attrs: {
      "force-menu": "",
      type: _vm.isActive ? "secondary" : "tertiary",
      "menu-name": _vm.filterName
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_vm._t("icon")];
      },
      proxy: true
    }], null, true)
  }, [_vm._v(" "), _vm._t("default"), _vm._v(" "), _vm.isActive ? [_c(_setup.NcActionSeparator), _vm._v(" "), _c(_setup.NcActionButton, {
    staticClass: "files-list-filter__clear-button",
    attrs: {
      "close-after-click": ""
    },
    on: {
      click: function ($event) {
        return _vm.$emit("reset-filter");
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_setup.t("files", "Clear filter")) + "\n\t\t")])] : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=template&id=f47dfc3e&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=template&id=f47dfc3e&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("FileListFilter", {
    attrs: {
      "is-active": _vm.isActive,
      "filter-name": _vm.t("files", "Modified")
    },
    on: {
      "reset-filter": _vm.resetFilter
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("NcIconSvgWrapper", {
          attrs: {
            path: _vm.mdiCalendarRange
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._l(_vm.timePresets, function (preset) {
    return _c("NcActionButton", {
      key: preset.id,
      attrs: {
        type: "radio",
        "close-after-click": "",
        "model-value": _vm.selectedOption,
        value: preset.id
      },
      on: {
        "update:modelValue": function ($event) {
          _vm.selectedOption = $event;
        },
        "update:model-value": function ($event) {
          _vm.selectedOption = $event;
        }
      }
    }, [_vm._v("\n\t\t" + _vm._s(preset.label) + "\n\t")]);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=template&id=6c0e6dd2":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=template&id=6c0e6dd2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("FileListFilter", {
    staticClass: "file-list-filter-type",
    attrs: {
      "is-active": _vm.isActive,
      "filter-name": _vm.t("files", "Type")
    },
    on: {
      "reset-filter": _vm.resetFilter
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("NcIconSvgWrapper", {
          attrs: {
            path: _vm.mdiFile
          }
        })];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._l(_vm.typePresets, function (fileType) {
    return _c("NcActionButton", {
      key: fileType.id,
      attrs: {
        type: "checkbox",
        "model-value": _vm.selectedOptions.includes(fileType)
      },
      on: {
        click: function ($event) {
          return _vm.toggleOption(fileType);
        }
      },
      scopedSlots: _vm._u([{
        key: "icon",
        fn: function () {
          return [_c("NcIconSvgWrapper", {
            attrs: {
              svg: fileType.icon
            }
          })];
        },
        proxy: true
      }], null, true)
    }, [_vm._v("\n\t\t" + _vm._s(fileType.label) + "\n\t")]);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=template&id=e6b9c05a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=template&id=e6b9c05a&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c(_setup.NcDialog, {
    attrs: {
      "data-cy-files-new-node-dialog": "",
      name: _vm.name,
      open: _vm.open,
      "close-on-click-outside": "",
      "out-transition": ""
    },
    on: {
      "update:open": function ($event) {
        return _setup.emit("close", null);
      }
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function () {
        return [_c(_setup.NcButton, {
          attrs: {
            "data-cy-files-new-node-dialog-submit": "",
            type: "primary",
            disabled: _setup.validity !== ""
          },
          on: {
            click: _setup.submit
          }
        }, [_vm._v("\n\t\t\t" + _vm._s(_setup.t("files", "Create")) + "\n\t\t")])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("form", {
    ref: "formElement",
    staticClass: "new-node-dialog__form",
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _setup.emit("close", _setup.localDefaultName);
      }
    }
  }, [_c(_setup.NcTextField, {
    ref: "nameInput",
    attrs: {
      "data-cy-files-new-node-dialog-input": "",
      error: _setup.validity !== "",
      "helper-text": _setup.validity,
      label: _vm.label,
      value: _setup.localDefaultName
    },
    on: {
      "update:value": function ($event) {
        _setup.localDefaultName = $event;
      }
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/upload/dist/assets/index-CdLjHZZ_.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@nextcloud/upload/dist/assets/index-CdLjHZZ_.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.upload-picker[data-v-e69e222f] {
  display: inline-flex;
  align-items: center;
  height: var(--default-clickable-area);
}
.upload-picker__progress[data-v-e69e222f] {
  width: 200px;
  max-width: 0;
  transition: max-width var(--animation-quick) ease-in-out;
  margin-top: 8px;
}
.upload-picker__progress p[data-v-e69e222f] {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.upload-picker--uploading .upload-picker__progress[data-v-e69e222f] {
  max-width: 200px;
  margin-right: 20px;
  margin-left: 8px;
}
.upload-picker--paused .upload-picker__progress[data-v-e69e222f] {
  animation: breathing-e69e222f 3s ease-out infinite normal;
}
@keyframes breathing-e69e222f {
0% {
    opacity: 0.5;
}
25% {
    opacity: 1;
}
60% {
    opacity: 0.5;
}
100% {
    opacity: 0.5;
}
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.files-list-filter-time__clear-button[data-v-f47dfc3e] .action-button__text {
  color: var(--color-error-text);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.files-list-filter__clear-button[data-v-5c291778] .action-button__text {
	color: var(--color-error-text);
}
[data-v-5c291778] .button-vue {
	font-weight: normal !important;
*[data-v-5c291778] {
		font-weight: normal !important;
}
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.file-list-filter-type {
	max-width: 220px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.new-node-dialog__form[data-v-e6b9c05a] {
	/* Ensure the dialog does not jump when there is a validity error */
	min-height: calc(2 * var(--default-clickable-area));
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/is-retry-allowed/index.js":
/*!************************************************!*\
  !*** ./node_modules/is-retry-allowed/index.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


const denyList = new Set([
	'ENOTFOUND',
	'ENETUNREACH',

	// SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
	'UNABLE_TO_GET_ISSUER_CERT',
	'UNABLE_TO_GET_CRL',
	'UNABLE_TO_DECRYPT_CERT_SIGNATURE',
	'UNABLE_TO_DECRYPT_CRL_SIGNATURE',
	'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY',
	'CERT_SIGNATURE_FAILURE',
	'CRL_SIGNATURE_FAILURE',
	'CERT_NOT_YET_VALID',
	'CERT_HAS_EXPIRED',
	'CRL_NOT_YET_VALID',
	'CRL_HAS_EXPIRED',
	'ERROR_IN_CERT_NOT_BEFORE_FIELD',
	'ERROR_IN_CERT_NOT_AFTER_FIELD',
	'ERROR_IN_CRL_LAST_UPDATE_FIELD',
	'ERROR_IN_CRL_NEXT_UPDATE_FIELD',
	'OUT_OF_MEM',
	'DEPTH_ZERO_SELF_SIGNED_CERT',
	'SELF_SIGNED_CERT_IN_CHAIN',
	'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
	'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
	'CERT_CHAIN_TOO_LONG',
	'CERT_REVOKED',
	'INVALID_CA',
	'PATH_LENGTH_EXCEEDED',
	'INVALID_PURPOSE',
	'CERT_UNTRUSTED',
	'CERT_REJECTED',
	'HOSTNAME_MISMATCH'
]);

// TODO: Use `error?.code` when targeting Node.js 14
module.exports = error => !denyList.has(error && error.code);


/***/ }),

/***/ "./node_modules/p-cancelable/index.js":
/*!********************************************!*\
  !*** ./node_modules/p-cancelable/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelError: () => (/* binding */ CancelError),
/* harmony export */   "default": () => (/* binding */ PCancelable)
/* harmony export */ });
class CancelError extends Error {
	constructor(reason) {
		super(reason || 'Promise was canceled');
		this.name = 'CancelError';
	}

	get isCanceled() {
		return true;
	}
}

const promiseState = Object.freeze({
	pending: Symbol('pending'),
	canceled: Symbol('canceled'),
	resolved: Symbol('resolved'),
	rejected: Symbol('rejected'),
});

class PCancelable {
	static fn(userFunction) {
		return (...arguments_) => new PCancelable((resolve, reject, onCancel) => {
			arguments_.push(onCancel);
			userFunction(...arguments_).then(resolve, reject);
		});
	}

	#cancelHandlers = [];
	#rejectOnCancel = true;
	#state = promiseState.pending;
	#promise;
	#reject;

	constructor(executor) {
		this.#promise = new Promise((resolve, reject) => {
			this.#reject = reject;

			const onResolve = value => {
				if (this.#state !== promiseState.canceled || !onCancel.shouldReject) {
					resolve(value);
					this.#setState(promiseState.resolved);
				}
			};

			const onReject = error => {
				if (this.#state !== promiseState.canceled || !onCancel.shouldReject) {
					reject(error);
					this.#setState(promiseState.rejected);
				}
			};

			const onCancel = handler => {
				if (this.#state !== promiseState.pending) {
					throw new Error(`The \`onCancel\` handler was attached after the promise ${this.#state.description}.`);
				}

				this.#cancelHandlers.push(handler);
			};

			Object.defineProperties(onCancel, {
				shouldReject: {
					get: () => this.#rejectOnCancel,
					set: boolean => {
						this.#rejectOnCancel = boolean;
					},
				},
			});

			executor(onResolve, onReject, onCancel);
		});
	}

	// eslint-disable-next-line unicorn/no-thenable
	then(onFulfilled, onRejected) {
		return this.#promise.then(onFulfilled, onRejected);
	}

	catch(onRejected) {
		return this.#promise.catch(onRejected);
	}

	finally(onFinally) {
		return this.#promise.finally(onFinally);
	}

	cancel(reason) {
		if (this.#state !== promiseState.pending) {
			return;
		}

		this.#setState(promiseState.canceled);

		if (this.#cancelHandlers.length > 0) {
			try {
				for (const handler of this.#cancelHandlers) {
					handler();
				}
			} catch (error) {
				this.#reject(error);
				return;
			}
		}

		if (this.#rejectOnCancel) {
			this.#reject(new CancelError(reason));
		}
	}

	get isCanceled() {
		return this.#state === promiseState.canceled;
	}

	#setState(state) {
		if (this.#state === promiseState.pending) {
			this.#state = state;
		}
	}
}

Object.setPrototypeOf(PCancelable.prototype, Promise.prototype);


/***/ }),

/***/ "./node_modules/simple-eta/index.js":
/*!******************************************!*\
  !*** ./node_modules/simple-eta/index.js ***!
  \******************************************/
/***/ ((module) => {

// @flow

/*::
type Options = {
  max?: number,
  min?: number,
  historyTimeConstant?: number,
  autostart?: boolean,
  ignoreSameProgress?: boolean,
}
*/

function makeLowPassFilter(RC/*: number*/) {
  return function (previousOutput, input, dt) {
    const alpha = dt / (dt + RC);
    return previousOutput + alpha * (input - previousOutput);
  }
}

function def/*:: <T>*/(x/*: ?T*/, d/*: T*/)/*: T*/ {
  return (x === undefined || x === null) ? d : x;
}

function makeEta(options/*::?: Options */) {
  options = options || {};
  var max = def(options.max, 1);
  var min = def(options.min, 0);
  var autostart = def(options.autostart, true);
  var ignoreSameProgress = def(options.ignoreSameProgress, false);

  var rate/*: number | null */ = null;
  var lastTimestamp/*: number | null */ = null;
  var lastProgress/*: number | null */ = null;

  var filter = makeLowPassFilter(def(options.historyTimeConstant, 2.5));

  function start() {
    report(min);
  }

  function reset() {
    rate = null;
    lastTimestamp = null;
    lastProgress = null;
    if (autostart) {
      start();
    }
  }

  function report(progress /*: number */, timestamp/*::?: number */) {
    if (typeof timestamp !== 'number') {
      timestamp = Date.now();
    }

    if (lastTimestamp === timestamp) { return; }
    if (ignoreSameProgress && lastProgress === progress) { return; }

    if (lastTimestamp === null || lastProgress === null) {
      lastProgress = progress;
      lastTimestamp = timestamp;
      return;
    }

    var deltaProgress = progress - lastProgress;
    var deltaTimestamp = 0.001 * (timestamp - lastTimestamp);
    var currentRate = deltaProgress / deltaTimestamp;

    rate = rate === null
      ? currentRate
      : filter(rate, currentRate, deltaTimestamp);
    lastProgress = progress;
    lastTimestamp = timestamp;
  }

  function estimate(timestamp/*::?: number*/) {
    if (lastProgress === null) { return Infinity; }
    if (lastProgress >= max) { return 0; }
    if (rate === null) { return Infinity; }

    var estimatedTime = (max - lastProgress) / rate;
    if (typeof timestamp === 'number' && typeof lastTimestamp === 'number') {
      estimatedTime -= (timestamp - lastTimestamp) * 0.001;
    }
    return Math.max(0, estimatedTime);
  }

  function getRate() {
    return rate === null ? 0 : rate;
  }

  return {
    start: start,
    reset: reset,
    report: report,
    estimate: estimate,
    rate: getRate,
  }
}

module.exports = makeEta;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_style_index_0_id_f47dfc3e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterModified.vue?vue&type=style&index=0&id=f47dfc3e&scoped=true&lang=scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_style_index_0_id_f47dfc3e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_style_index_0_id_f47dfc3e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_style_index_0_id_f47dfc3e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterModified_vue_vue_type_style_index_0_id_f47dfc3e_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_style_index_0_id_5c291778_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilter.vue?vue&type=style&index=0&id=5c291778&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_style_index_0_id_5c291778_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_style_index_0_id_5c291778_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_style_index_0_id_5c291778_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilter_vue_vue_type_style_index_0_id_5c291778_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_style_index_0_id_6c0e6dd2_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/FileListFilter/FileListFilterType.vue?vue&type=style&index=0&id=6c0e6dd2&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_style_index_0_id_6c0e6dd2_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_style_index_0_id_6c0e6dd2_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_style_index_0_id_6c0e6dd2_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FileListFilterType_vue_vue_type_style_index_0_id_6c0e6dd2_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_style_index_0_id_e6b9c05a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files/src/components/NewNodeDialog.vue?vue&type=style&index=0&id=e6b9c05a&scoped=true&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_style_index_0_id_e6b9c05a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_style_index_0_id_e6b9c05a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_style_index_0_id_e6b9c05a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewNodeDialog_vue_vue_type_style_index_0_id_e6b9c05a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "-" + chunkId + ".js?v=" + {"node_modules_nextcloud_dialogs_dist_chunks_index-D5FJasts_mjs":"08b958f56528298001fd","node_modules_nextcloud_upload_dist_chunks_InvalidFilenameDialog-CQ6TfYs0_mjs":"60da9e021c352a9809d3","node_modules_nextcloud_upload_dist_chunks_ConflictPicker-NXkHfBMv_mjs":"27db286870210f99d54d","apps_files_src_views_TemplatePicker_vue-data_image_svg_xml_3c_21--_20-_20SPDX-FileCopyrightTe-15ea2e":"1d18c6f8e216c51ca8d6","data_image_svg_xml_3c_21--_20-_20SPDX-FileCopyrightText_202020_20Google_20Inc_20-_20SPDX-Lice-84639e":"330887213eeef7d8365f"}[chunkId] + "";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "nextcloud:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"files-init": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/files/src/init.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=files-init.js.map?v=426383f29c6567110573