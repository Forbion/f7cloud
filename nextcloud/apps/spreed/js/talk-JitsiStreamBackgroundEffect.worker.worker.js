/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/utils/media/effects/virtual-background/vendor/models/selfie_segmentation_landscape.tflite":
/*!*******************************************************************************************************!*\
  !*** ./src/utils/media/effects/virtual-background/vendor/models/selfie_segmentation_landscape.tflite ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "selfie_segmentation_landscape.tflite?v=42d35e9379e4c500a3d3";

/***/ }),

/***/ "./src/utils/media/effects/virtual-background/vendor/tflite/tflite-simd.js":
/*!*********************************************************************************!*\
  !*** ./src/utils/media/effects/virtual-background/vendor/tflite/tflite-simd.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __filename = "/index.js";
var __dirname = "/";
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
var createTFLiteSIMDModule = (function() {
  var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
  if (true) _scriptDir = _scriptDir || __filename;
  return (function(createTFLiteSIMDModule2) {
    createTFLiteSIMDModule2 = createTFLiteSIMDModule2 || {};
    var Module = typeof createTFLiteSIMDModule2 !== "undefined" ? createTFLiteSIMDModule2 : {};
    var readyPromiseResolve, readyPromiseReject;
    Module["ready"] = new Promise(function(resolve, reject) {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    var moduleOverrides = {};
    var key;
    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = function(status, toThrow) {
      throw toThrow;
    };
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readAsync, readBinary, setWindowTitle;
    var nodeFS;
    var nodePath;
    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = (__webpack_require__(/*! path */ "./node_modules/path-browserify/index.js").dirname)(scriptDirectory) + "/";
      } else {
        scriptDirectory = __dirname + "/";
      }
      read_ = function shell_read(filename, binary) {
        if (!nodeFS) nodeFS = __webpack_require__(/*! fs */ "?5b1c");
        if (!nodePath) nodePath = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
        filename = nodePath["normalize"](filename);
        return nodeFS["readFileSync"](filename, binary ? null : "utf8");
      };
      readBinary = function readBinary2(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        assert(ret.buffer);
        return ret;
      };
      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/");
      }
      arguments_ = process["argv"].slice(2);
      process["on"]("uncaughtException", function(ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", abort);
      quit_ = function(status) {
        process["exit"](status);
      };
      Module["inspect"] = function() {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          return read(f);
        };
      }
      readBinary = function readBinary2(f) {
        var data;
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };
      if (typeof scriptArgs != "undefined") {
        arguments_ = scriptArgs;
      } else if (typeof arguments != "undefined") {
        arguments_ = arguments;
      }
      if (typeof quit === "function") {
        quit_ = function(status) {
          quit(status);
        };
      }
      if (typeof print !== "undefined") {
        if (typeof console === "undefined") console = {};
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document !== "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }
      {
        read_ = function(url) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function(url) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = function(url, onload, onerror) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = function() {
            if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
              onload(xhr.response);
              return;
            }
            onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
      setWindowTitle = function(title) {
        document.title = title;
      };
    } else {
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }
    moduleOverrides = null;
    if (Module["arguments"]) arguments_ = Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    if (Module["quit"]) quit_ = Module["quit"];
    var wasmBinary;
    if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
    var noExitRuntime;
    if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
    if (typeof WebAssembly !== "object") {
      abort("no native wasm support detected");
    }
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(heap, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
      if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(heap.subarray(idx, endPtr));
      } else {
        var str = "";
        while (idx < endPtr) {
          var u0 = heap[idx++];
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }
          var u1 = heap[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }
          var u2 = heap[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }
    function writeAsciiToMemory(str, buffer2, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull) HEAP8[buffer2 >> 0] = 0;
    }
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }
      return x;
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }
    var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    var wasmTable;
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    __ATINIT__.push({ func: function() {
      ___wasm_call_ctors();
    } });
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }
    function exitRuntime() {
      runtimeExited = true;
    }
    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
      what += "";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    function hasPrefix(str, prefix) {
      return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return hasPrefix(filename, dataURIPrefix);
    }
    var fileURIPrefix = "file://";
    function isFileURI(filename) {
      return hasPrefix(filename, fileURIPrefix);
    }
    var wasmBinaryFile = "tflite-simd.wasm";
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }
    function getBinary(file) {
      try {
        if (file == wasmBinaryFile && wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(file);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (err2) {
        abort(err2);
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch === "function" && !isFileURI(wasmBinaryFile)) {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            if (!response["ok"]) {
              throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
            }
            return response["arrayBuffer"]();
          }).catch(function() {
            return getBinary(wasmBinaryFile);
          });
        } else {
          if (readAsync) {
            return new Promise(function(resolve, reject) {
              readAsync(wasmBinaryFile, function(response) {
                resolve(new Uint8Array(response));
              }, reject);
            });
          }
        }
      }
      return Promise.resolve().then(function() {
        return getBinary(wasmBinaryFile);
      });
    }
    function createWasm() {
      var info = { "a": asmLibraryArg };
      function receiveInstance(instance, module2) {
        var exports3 = instance.exports;
        Module["asm"] = exports3;
        wasmMemory = Module["asm"]["q"];
        updateGlobalBufferAndViews(wasmMemory.buffer);
        wasmTable = Module["asm"]["D"];
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      function receiveInstantiatedSource(output) {
        receiveInstance(output["instance"]);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(receiver, function(reason) {
          err("failed to asynchronously prepare wasm: " + reason);
          abort(reason);
        });
      }
      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && typeof fetch === "function") {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiatedSource, function(reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              return instantiateArrayBuffer(receiveInstantiatedSource);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiatedSource);
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports2 = Module["instantiateWasm"](info, receiveInstance);
          return exports2;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          return false;
        }
      }
      instantiateAsync().catch(readyPromiseReject);
      return {};
    }
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
          callback(Module);
          continue;
        }
        var func = callback.func;
        if (typeof func === "number") {
          if (callback.arg === void 0) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === void 0 ? null : callback.arg);
        }
      }
    }
    function _abort() {
      abort();
    }
    var _emscripten_get_now;
    if (ENVIRONMENT_IS_NODE) {
      _emscripten_get_now = function() {
        var t = process["hrtime"]();
        return t[0] * 1e3 + t[1] / 1e6;
      };
    } else if (typeof dateNow !== "undefined") {
      _emscripten_get_now = dateNow;
    } else _emscripten_get_now = function() {
      return performance.now();
    };
    var _emscripten_get_now_is_monotonic = true;
    function setErrNo(value) {
      HEAP32[___errno_location() >> 2] = value;
      return value;
    }
    function _clock_gettime(clk_id, tp) {
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[tp >> 2] = now / 1e3 | 0;
      HEAP32[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
      return 0;
    }
    function _dlopen(filename, flag) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }
    function _dlsym(handle, symbol) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }
    function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        return false;
      }
      var minHeapSize = 16777216;
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    }
    function _emscripten_thread_sleep(msecs) {
      var start = _emscripten_get_now();
      while (_emscripten_get_now() - start < msecs) {
      }
    }
    var ENV = {};
    function getExecutableName() {
      return thisProgram || "./this.program";
    }
    function getEnvStrings() {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + "=" + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
    var SYSCALLS = { mappings: {}, buffers: [null, [], []], printChar: function(stream, curr) {
      var buffer2 = SYSCALLS.buffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
        buffer2.length = 0;
      } else {
        buffer2.push(curr);
      }
    }, varargs: void 0, get: function() {
      SYSCALLS.varargs += 4;
      var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
      return ret;
    }, getStr: function(ptr) {
      var ret = UTF8ToString(ptr);
      return ret;
    }, get64: function(low, high) {
      return low;
    } };
    function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[penviron_buf_size >> 2] = bufSize;
      return 0;
    }
    function _exit(status) {
      exit(status);
    }
    function _fd_close(fd) {
      return 0;
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov + i * 8 >> 2];
        var len = HEAP32[iov + (i * 8 + 4) >> 2];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
        }
        num += len;
      }
      HEAP32[pnum >> 2] = num;
      return 0;
    }
    function _pthread_create() {
      return 6;
    }
    function _pthread_join() {
      return 28;
    }
    function _sysconf(name) {
      switch (name) {
        case 30:
          return 16384;
        case 85:
          var maxHeapSize = 2147483648;
          return maxHeapSize / 16384;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
        case 80:
        case 81:
        case 79:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0:
          return 2097152;
        case 3:
          return 65536;
        case 28:
          return 32768;
        case 44:
          return 32767;
        case 75:
          return 16384;
        case 39:
          return 1e3;
        case 89:
          return 700;
        case 71:
          return 256;
        case 40:
          return 255;
        case 2:
          return 100;
        case 180:
          return 64;
        case 25:
          return 20;
        case 5:
          return 16;
        case 6:
          return 6;
        case 73:
          return 4;
        case 84: {
          if (typeof navigator === "object") return navigator["hardwareConcurrency"] || 1;
          return 1;
        }
      }
      setErrNo(28);
      return -1;
    }
    var asmLibraryArg = { "a": _abort, "n": _clock_gettime, "i": _dlopen, "e": _dlsym, "l": _emscripten_memcpy_big, "m": _emscripten_resize_heap, "o": _emscripten_thread_sleep, "p": _environ_get, "g": _environ_sizes_get, "j": _exit, "h": _fd_close, "k": _fd_seek, "c": _fd_write, "d": _pthread_create, "f": _pthread_join, "b": _sysconf };
    var asm = createWasm();
    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
      return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["r"]).apply(null, arguments);
    };
    var _getModelBufferMemoryOffset = Module["_getModelBufferMemoryOffset"] = function() {
      return (_getModelBufferMemoryOffset = Module["_getModelBufferMemoryOffset"] = Module["asm"]["s"]).apply(null, arguments);
    };
    var _getInputMemoryOffset = Module["_getInputMemoryOffset"] = function() {
      return (_getInputMemoryOffset = Module["_getInputMemoryOffset"] = Module["asm"]["t"]).apply(null, arguments);
    };
    var _getInputHeight = Module["_getInputHeight"] = function() {
      return (_getInputHeight = Module["_getInputHeight"] = Module["asm"]["u"]).apply(null, arguments);
    };
    var _getInputWidth = Module["_getInputWidth"] = function() {
      return (_getInputWidth = Module["_getInputWidth"] = Module["asm"]["v"]).apply(null, arguments);
    };
    var _getInputChannelCount = Module["_getInputChannelCount"] = function() {
      return (_getInputChannelCount = Module["_getInputChannelCount"] = Module["asm"]["w"]).apply(null, arguments);
    };
    var _getOutputMemoryOffset = Module["_getOutputMemoryOffset"] = function() {
      return (_getOutputMemoryOffset = Module["_getOutputMemoryOffset"] = Module["asm"]["x"]).apply(null, arguments);
    };
    var _getOutputHeight = Module["_getOutputHeight"] = function() {
      return (_getOutputHeight = Module["_getOutputHeight"] = Module["asm"]["y"]).apply(null, arguments);
    };
    var _getOutputWidth = Module["_getOutputWidth"] = function() {
      return (_getOutputWidth = Module["_getOutputWidth"] = Module["asm"]["z"]).apply(null, arguments);
    };
    var _getOutputChannelCount = Module["_getOutputChannelCount"] = function() {
      return (_getOutputChannelCount = Module["_getOutputChannelCount"] = Module["asm"]["A"]).apply(null, arguments);
    };
    var _loadModel = Module["_loadModel"] = function() {
      return (_loadModel = Module["_loadModel"] = Module["asm"]["B"]).apply(null, arguments);
    };
    var _runInference = Module["_runInference"] = function() {
      return (_runInference = Module["_runInference"] = Module["asm"]["C"]).apply(null, arguments);
    };
    var ___errno_location = Module["___errno_location"] = function() {
      return (___errno_location = Module["___errno_location"] = Module["asm"]["E"]).apply(null, arguments);
    };
    var calledRun;
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };
    function run(args) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        preMain();
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
          setTimeout(function() {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    Module["run"] = run;
    function exit(status, implicit) {
      if (implicit && noExitRuntime && status === 0) {
        return;
      }
      if (noExitRuntime) {
      } else {
        EXITSTATUS = status;
        exitRuntime();
        if (Module["onExit"]) Module["onExit"](status);
        ABORT = true;
      }
      quit_(status, new ExitStatus(status));
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    noExitRuntime = true;
    run();
    return createTFLiteSIMDModule2.ready;
  });
})();
if (true)
  module.exports = createTFLiteSIMDModule;
else // removed by dead control flow
{}


/***/ }),

/***/ "./src/utils/media/effects/virtual-background/vendor/tflite/tflite-simd.wasm":
/*!***********************************************************************************!*\
  !*** ./src/utils/media/effects/virtual-background/vendor/tflite/tflite-simd.wasm ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "tflite-simd.wasm?v=2424013c64ebd6da057f";

/***/ }),

/***/ "./src/utils/media/effects/virtual-background/vendor/tflite/tflite.js":
/*!****************************************************************************!*\
  !*** ./src/utils/media/effects/virtual-background/vendor/tflite/tflite.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __filename = "/index.js";
var __dirname = "/";
/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
var createTFLiteModule = (function() {
  var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
  if (true) _scriptDir = _scriptDir || __filename;
  return (function(createTFLiteModule2) {
    createTFLiteModule2 = createTFLiteModule2 || {};
    var Module = typeof createTFLiteModule2 !== "undefined" ? createTFLiteModule2 : {};
    var readyPromiseResolve, readyPromiseReject;
    Module["ready"] = new Promise(function(resolve, reject) {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    var moduleOverrides = {};
    var key;
    for (key in Module) {
      if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key];
      }
    }
    var arguments_ = [];
    var thisProgram = "./this.program";
    var quit_ = function(status, toThrow) {
      throw toThrow;
    };
    var ENVIRONMENT_IS_WEB = false;
    var ENVIRONMENT_IS_WORKER = false;
    var ENVIRONMENT_IS_NODE = false;
    var ENVIRONMENT_IS_SHELL = false;
    ENVIRONMENT_IS_WEB = typeof window === "object";
    ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
    ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
    ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var read_, readAsync, readBinary, setWindowTitle;
    var nodeFS;
    var nodePath;
    if (ENVIRONMENT_IS_NODE) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = (__webpack_require__(/*! path */ "./node_modules/path-browserify/index.js").dirname)(scriptDirectory) + "/";
      } else {
        scriptDirectory = __dirname + "/";
      }
      read_ = function shell_read(filename, binary) {
        if (!nodeFS) nodeFS = __webpack_require__(/*! fs */ "?5b1c");
        if (!nodePath) nodePath = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
        filename = nodePath["normalize"](filename);
        return nodeFS["readFileSync"](filename, binary ? null : "utf8");
      };
      readBinary = function readBinary2(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
          ret = new Uint8Array(ret);
        }
        assert(ret.buffer);
        return ret;
      };
      if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/");
      }
      arguments_ = process["argv"].slice(2);
      process["on"]("uncaughtException", function(ex) {
        if (!(ex instanceof ExitStatus)) {
          throw ex;
        }
      });
      process["on"]("unhandledRejection", abort);
      quit_ = function(status) {
        process["exit"](status);
      };
      Module["inspect"] = function() {
        return "[Emscripten Module object]";
      };
    } else if (ENVIRONMENT_IS_SHELL) {
      if (typeof read != "undefined") {
        read_ = function shell_read(f) {
          return read(f);
        };
      }
      readBinary = function readBinary2(f) {
        var data;
        if (typeof readbuffer === "function") {
          return new Uint8Array(readbuffer(f));
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data;
      };
      if (typeof scriptArgs != "undefined") {
        arguments_ = scriptArgs;
      } else if (typeof arguments != "undefined") {
        arguments_ = arguments;
      }
      if (typeof quit === "function") {
        quit_ = function(status) {
          quit(status);
        };
      }
      if (typeof print !== "undefined") {
        if (typeof console === "undefined") console = {};
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document !== "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptDir) {
        scriptDirectory = _scriptDir;
      }
      if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
      } else {
        scriptDirectory = "";
      }
      {
        read_ = function(url) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.send(null);
          return xhr.responseText;
        };
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = function(url) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = function(url, onload, onerror) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = "arraybuffer";
          xhr.onload = function() {
            if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
              onload(xhr.response);
              return;
            }
            onerror();
          };
          xhr.onerror = onerror;
          xhr.send(null);
        };
      }
      setWindowTitle = function(title) {
        document.title = title;
      };
    } else {
    }
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.warn.bind(console);
    for (key in moduleOverrides) {
      if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key];
      }
    }
    moduleOverrides = null;
    if (Module["arguments"]) arguments_ = Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    if (Module["quit"]) quit_ = Module["quit"];
    var wasmBinary;
    if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
    var noExitRuntime;
    if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];
    if (typeof WebAssembly !== "object") {
      abort("no native wasm support detected");
    }
    var wasmMemory;
    var ABORT = false;
    var EXITSTATUS;
    function assert(condition, text) {
      if (!condition) {
        abort("Assertion failed: " + text);
      }
    }
    var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : void 0;
    function UTF8ArrayToString(heap, idx, maxBytesToRead) {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
      if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(heap.subarray(idx, endPtr));
      } else {
        var str = "";
        while (idx < endPtr) {
          var u0 = heap[idx++];
          if (!(u0 & 128)) {
            str += String.fromCharCode(u0);
            continue;
          }
          var u1 = heap[idx++] & 63;
          if ((u0 & 224) == 192) {
            str += String.fromCharCode((u0 & 31) << 6 | u1);
            continue;
          }
          var u2 = heap[idx++] & 63;
          if ((u0 & 240) == 224) {
            u0 = (u0 & 15) << 12 | u1 << 6 | u2;
          } else {
            u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
          }
          if (u0 < 65536) {
            str += String.fromCharCode(u0);
          } else {
            var ch = u0 - 65536;
            str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
          }
        }
      }
      return str;
    }
    function UTF8ToString(ptr, maxBytesToRead) {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    }
    function writeAsciiToMemory(str, buffer2, dontAddNull) {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
      }
      if (!dontAddNull) HEAP8[buffer2 >> 0] = 0;
    }
    function alignUp(x, multiple) {
      if (x % multiple > 0) {
        x += multiple - x % multiple;
      }
      return x;
    }
    var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateGlobalBufferAndViews(buf) {
      buffer = buf;
      Module["HEAP8"] = HEAP8 = new Int8Array(buf);
      Module["HEAP16"] = HEAP16 = new Int16Array(buf);
      Module["HEAP32"] = HEAP32 = new Int32Array(buf);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
    }
    var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
    var wasmTable;
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATMAIN__ = [];
    var __ATPOSTRUN__ = [];
    var runtimeInitialized = false;
    var runtimeExited = false;
    __ATINIT__.push({ func: function() {
      ___wasm_call_ctors();
    } });
    function preRun() {
      if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
          addOnPreRun(Module["preRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = true;
      callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }
    function exitRuntime() {
      runtimeExited = true;
    }
    function postRun() {
      if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
          addOnPostRun(Module["postRun"].shift());
        }
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var runDependencyWatcher = null;
    var dependenciesFulfilled = null;
    function addRunDependency(id) {
      runDependencies++;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
    }
    function removeRunDependency(id) {
      runDependencies--;
      if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies);
      }
      if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
        }
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    Module["preloadedImages"] = {};
    Module["preloadedAudios"] = {};
    function abort(what) {
      if (Module["onAbort"]) {
        Module["onAbort"](what);
      }
      what += "";
      err(what);
      ABORT = true;
      EXITSTATUS = 1;
      what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    function hasPrefix(str, prefix) {
      return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    function isDataURI(filename) {
      return hasPrefix(filename, dataURIPrefix);
    }
    var fileURIPrefix = "file://";
    function isFileURI(filename) {
      return hasPrefix(filename, fileURIPrefix);
    }
    var wasmBinaryFile = "tflite.wasm";
    if (!isDataURI(wasmBinaryFile)) {
      wasmBinaryFile = locateFile(wasmBinaryFile);
    }
    function getBinary(file) {
      try {
        if (file == wasmBinaryFile && wasmBinary) {
          return new Uint8Array(wasmBinary);
        }
        if (readBinary) {
          return readBinary(file);
        } else {
          throw "both async and sync fetching of the wasm failed";
        }
      } catch (err2) {
        abort(err2);
      }
    }
    function getBinaryPromise() {
      if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
        if (typeof fetch === "function" && !isFileURI(wasmBinaryFile)) {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            if (!response["ok"]) {
              throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
            }
            return response["arrayBuffer"]();
          }).catch(function() {
            return getBinary(wasmBinaryFile);
          });
        } else {
          if (readAsync) {
            return new Promise(function(resolve, reject) {
              readAsync(wasmBinaryFile, function(response) {
                resolve(new Uint8Array(response));
              }, reject);
            });
          }
        }
      }
      return Promise.resolve().then(function() {
        return getBinary(wasmBinaryFile);
      });
    }
    function createWasm() {
      var info = { "a": asmLibraryArg };
      function receiveInstance(instance, module2) {
        var exports3 = instance.exports;
        Module["asm"] = exports3;
        wasmMemory = Module["asm"]["q"];
        updateGlobalBufferAndViews(wasmMemory.buffer);
        wasmTable = Module["asm"]["D"];
        removeRunDependency("wasm-instantiate");
      }
      addRunDependency("wasm-instantiate");
      function receiveInstantiatedSource(output) {
        receiveInstance(output["instance"]);
      }
      function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
          return WebAssembly.instantiate(binary, info);
        }).then(receiver, function(reason) {
          err("failed to asynchronously prepare wasm: " + reason);
          abort(reason);
        });
      }
      function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && !isFileURI(wasmBinaryFile) && typeof fetch === "function") {
          return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
            var result = WebAssembly.instantiateStreaming(response, info);
            return result.then(receiveInstantiatedSource, function(reason) {
              err("wasm streaming compile failed: " + reason);
              err("falling back to ArrayBuffer instantiation");
              return instantiateArrayBuffer(receiveInstantiatedSource);
            });
          });
        } else {
          return instantiateArrayBuffer(receiveInstantiatedSource);
        }
      }
      if (Module["instantiateWasm"]) {
        try {
          var exports2 = Module["instantiateWasm"](info, receiveInstance);
          return exports2;
        } catch (e) {
          err("Module.instantiateWasm callback failed with error: " + e);
          return false;
        }
      }
      instantiateAsync().catch(readyPromiseReject);
      return {};
    }
    function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
          callback(Module);
          continue;
        }
        var func = callback.func;
        if (typeof func === "number") {
          if (callback.arg === void 0) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === void 0 ? null : callback.arg);
        }
      }
    }
    function _abort() {
      abort();
    }
    var _emscripten_get_now;
    if (ENVIRONMENT_IS_NODE) {
      _emscripten_get_now = function() {
        var t = process["hrtime"]();
        return t[0] * 1e3 + t[1] / 1e6;
      };
    } else if (typeof dateNow !== "undefined") {
      _emscripten_get_now = dateNow;
    } else _emscripten_get_now = function() {
      return performance.now();
    };
    var _emscripten_get_now_is_monotonic = true;
    function setErrNo(value) {
      HEAP32[___errno_location() >> 2] = value;
      return value;
    }
    function _clock_gettime(clk_id, tp) {
      var now;
      if (clk_id === 0) {
        now = Date.now();
      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
        now = _emscripten_get_now();
      } else {
        setErrNo(28);
        return -1;
      }
      HEAP32[tp >> 2] = now / 1e3 | 0;
      HEAP32[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
      return 0;
    }
    function _dlopen(filename, flag) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }
    function _dlsym(handle, symbol) {
      abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
    }
    function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }
    function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
    function emscripten_realloc_buffer(size) {
      try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1;
      } catch (e) {
      }
    }
    function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      var oldSize = _emscripten_get_heap_size();
      var maxHeapSize = 2147483648;
      if (requestedSize > maxHeapSize) {
        return false;
      }
      var minHeapSize = 16777216;
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
        var replacement = emscripten_realloc_buffer(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    }
    function _emscripten_thread_sleep(msecs) {
      var start = _emscripten_get_now();
      while (_emscripten_get_now() - start < msecs) {
      }
    }
    var ENV = {};
    function getExecutableName() {
      return thisProgram || "./this.program";
    }
    function getEnvStrings() {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
        for (var x in ENV) {
          env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(x + "=" + env[x]);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    }
    var SYSCALLS = { mappings: {}, buffers: [null, [], []], printChar: function(stream, curr) {
      var buffer2 = SYSCALLS.buffers[stream];
      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
        buffer2.length = 0;
      } else {
        buffer2.push(curr);
      }
    }, varargs: void 0, get: function() {
      SYSCALLS.varargs += 4;
      var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
      return ret;
    }, getStr: function(ptr) {
      var ret = UTF8ToString(ptr);
      return ret;
    }, get64: function(low, high) {
      return low;
    } };
    function _environ_get(__environ, environ_buf) {
      var bufSize = 0;
      getEnvStrings().forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    }
    function _environ_sizes_get(penviron_count, penviron_buf_size) {
      var strings = getEnvStrings();
      HEAP32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach(function(string) {
        bufSize += string.length + 1;
      });
      HEAP32[penviron_buf_size >> 2] = bufSize;
      return 0;
    }
    function _exit(status) {
      exit(status);
    }
    function _fd_close(fd) {
      return 0;
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    }
    function _fd_write(fd, iov, iovcnt, pnum) {
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov + i * 8 >> 2];
        var len = HEAP32[iov + (i * 8 + 4) >> 2];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
        }
        num += len;
      }
      HEAP32[pnum >> 2] = num;
      return 0;
    }
    function _pthread_create() {
      return 6;
    }
    function _pthread_join() {
      return 28;
    }
    function _sysconf(name) {
      switch (name) {
        case 30:
          return 16384;
        case 85:
          var maxHeapSize = 2147483648;
          return maxHeapSize / 16384;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
        case 80:
        case 81:
        case 79:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0:
          return 2097152;
        case 3:
          return 65536;
        case 28:
          return 32768;
        case 44:
          return 32767;
        case 75:
          return 16384;
        case 39:
          return 1e3;
        case 89:
          return 700;
        case 71:
          return 256;
        case 40:
          return 255;
        case 2:
          return 100;
        case 180:
          return 64;
        case 25:
          return 20;
        case 5:
          return 16;
        case 6:
          return 6;
        case 73:
          return 4;
        case 84: {
          if (typeof navigator === "object") return navigator["hardwareConcurrency"] || 1;
          return 1;
        }
      }
      setErrNo(28);
      return -1;
    }
    var asmLibraryArg = { "a": _abort, "n": _clock_gettime, "i": _dlopen, "e": _dlsym, "l": _emscripten_memcpy_big, "m": _emscripten_resize_heap, "o": _emscripten_thread_sleep, "p": _environ_get, "g": _environ_sizes_get, "j": _exit, "h": _fd_close, "k": _fd_seek, "c": _fd_write, "d": _pthread_create, "f": _pthread_join, "b": _sysconf };
    var asm = createWasm();
    var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
      return (___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["r"]).apply(null, arguments);
    };
    var _getModelBufferMemoryOffset = Module["_getModelBufferMemoryOffset"] = function() {
      return (_getModelBufferMemoryOffset = Module["_getModelBufferMemoryOffset"] = Module["asm"]["s"]).apply(null, arguments);
    };
    var _getInputMemoryOffset = Module["_getInputMemoryOffset"] = function() {
      return (_getInputMemoryOffset = Module["_getInputMemoryOffset"] = Module["asm"]["t"]).apply(null, arguments);
    };
    var _getInputHeight = Module["_getInputHeight"] = function() {
      return (_getInputHeight = Module["_getInputHeight"] = Module["asm"]["u"]).apply(null, arguments);
    };
    var _getInputWidth = Module["_getInputWidth"] = function() {
      return (_getInputWidth = Module["_getInputWidth"] = Module["asm"]["v"]).apply(null, arguments);
    };
    var _getInputChannelCount = Module["_getInputChannelCount"] = function() {
      return (_getInputChannelCount = Module["_getInputChannelCount"] = Module["asm"]["w"]).apply(null, arguments);
    };
    var _getOutputMemoryOffset = Module["_getOutputMemoryOffset"] = function() {
      return (_getOutputMemoryOffset = Module["_getOutputMemoryOffset"] = Module["asm"]["x"]).apply(null, arguments);
    };
    var _getOutputHeight = Module["_getOutputHeight"] = function() {
      return (_getOutputHeight = Module["_getOutputHeight"] = Module["asm"]["y"]).apply(null, arguments);
    };
    var _getOutputWidth = Module["_getOutputWidth"] = function() {
      return (_getOutputWidth = Module["_getOutputWidth"] = Module["asm"]["z"]).apply(null, arguments);
    };
    var _getOutputChannelCount = Module["_getOutputChannelCount"] = function() {
      return (_getOutputChannelCount = Module["_getOutputChannelCount"] = Module["asm"]["A"]).apply(null, arguments);
    };
    var _loadModel = Module["_loadModel"] = function() {
      return (_loadModel = Module["_loadModel"] = Module["asm"]["B"]).apply(null, arguments);
    };
    var _runInference = Module["_runInference"] = function() {
      return (_runInference = Module["_runInference"] = Module["asm"]["C"]).apply(null, arguments);
    };
    var ___errno_location = Module["___errno_location"] = function() {
      return (___errno_location = Module["___errno_location"] = Module["asm"]["E"]).apply(null, arguments);
    };
    var calledRun;
    function ExitStatus(status) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + status + ")";
      this.status = status;
    }
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };
    function run(args) {
      args = args || arguments_;
      if (runDependencies > 0) {
        return;
      }
      preRun();
      if (runDependencies > 0) {
        return;
      }
      function doRun() {
        if (calledRun) return;
        calledRun = true;
        Module["calledRun"] = true;
        if (ABORT) return;
        initRuntime();
        preMain();
        readyPromiseResolve(Module);
        if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
          setTimeout(function() {
            Module["setStatus"]("");
          }, 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    Module["run"] = run;
    function exit(status, implicit) {
      if (implicit && noExitRuntime && status === 0) {
        return;
      }
      if (noExitRuntime) {
      } else {
        EXITSTATUS = status;
        exitRuntime();
        if (Module["onExit"]) Module["onExit"](status);
        ABORT = true;
      }
      quit_(status, new ExitStatus(status));
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    noExitRuntime = true;
    run();
    return createTFLiteModule2.ready;
  });
})();
if (true)
  module.exports = createTFLiteModule;
else // removed by dead control flow
{}


/***/ }),

/***/ "./src/utils/media/effects/virtual-background/vendor/tflite/tflite.wasm":
/*!******************************************************************************!*\
  !*** ./src/utils/media/effects/virtual-background/vendor/tflite/tflite.wasm ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "tflite.wasm?v=21c7be5f89f7b4bae55b";

/***/ }),

/***/ "?5b1c":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/apps/talk/js/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************************************************************************!*\
  !*** ./src/utils/media/effects/virtual-background/JitsiStreamBackgroundEffect.worker.js ***!
  \******************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vendor_models_selfie_segmentation_landscape_tflite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/models/selfie_segmentation_landscape.tflite */ "./src/utils/media/effects/virtual-background/vendor/models/selfie_segmentation_landscape.tflite");
/* harmony import */ var _vendor_tflite_tflite_simd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/tflite/tflite-simd.js */ "./src/utils/media/effects/virtual-background/vendor/tflite/tflite-simd.js");
/* harmony import */ var _vendor_tflite_tflite_simd_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_tflite_tflite_simd_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_tflite_tflite_simd_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/tflite/tflite-simd.wasm */ "./src/utils/media/effects/virtual-background/vendor/tflite/tflite-simd.wasm");
/* harmony import */ var _vendor_tflite_tflite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor/tflite/tflite.js */ "./src/utils/media/effects/virtual-background/vendor/tflite/tflite.js");
/* harmony import */ var _vendor_tflite_tflite_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_tflite_tflite_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vendor_tflite_tflite_wasm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/tflite/tflite.wasm */ "./src/utils/media/effects/virtual-background/vendor/tflite/tflite.wasm");
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */






const models = {
	modelLandscape: _vendor_models_selfie_segmentation_landscape_tflite__WEBPACK_IMPORTED_MODULE_0__.split('/').pop(),
}

self.compiled = false

self.onmessage = (e) => {
	const message = e.data.message
	switch (message) {
	case 'makeTFLite':
		self.segmentationPixelCount = e.data.segmentationPixelCount
		makeTFLite(e.data.simd)
		break
	case 'resizeSource':
		if (!self.compiled) return
		resizeSource(e.data.imageData, e.data.frameId)
		break
	case 'runInference':
		runInference()
		break
	default:
		console.error('JitsiStreamBackgroundEffect.worker: Message unknown.')
		console.error(message)
		break
	}
}

/**
 * @param {boolean} isSimd whether WebAssembly SIMD is available or not
 */
async function makeTFLite(isSimd) {
	try {
		switch (isSimd) {
		case true:
			self.wasmUrl = _vendor_tflite_tflite_simd_wasm__WEBPACK_IMPORTED_MODULE_2__.split('/').pop()
			self.tflite = await _vendor_tflite_tflite_simd_js__WEBPACK_IMPORTED_MODULE_1___default()({ locateFile: (path) => { return self.wasmUrl } })
			break
		case false:
			self.wasmUrl = _vendor_tflite_tflite_wasm__WEBPACK_IMPORTED_MODULE_4__.split('/').pop()
			self.tflite = await _vendor_tflite_tflite_js__WEBPACK_IMPORTED_MODULE_3___default()({ locateFile: (path) => { return self.wasmUrl } })
			break
		default:
			return
		}
		self.modelBufferOffset = self.tflite._getModelBufferMemoryOffset()
		self.modelResponse = await fetch(models.modelLandscape)

		if (!self.modelResponse.ok) {
			throw new Error('Failed to download tflite model!')
		}
		self.model = await self.modelResponse.arrayBuffer()

		self.tflite.HEAPU8.set(new Uint8Array(self.model), self.modelBufferOffset)

		await self.tflite._loadModel(self.model.byteLength)

		// Even if the wrong tflite file is downloaded (for example, if an HTML
		// error is downloaded instead of the file) loading the model will
		// succeed. However, if the model does not have certain values it could
		// be assumed that the model failed to load.
		if (!self.tflite._getInputWidth() || !self.tflite._getInputHeight()
			|| !self.tflite._getOutputWidth() || !self.tflite._getOutputHeight()) {
			throw new Error('Failed to load tflite model!')
		}

		self.compiled = true

		self.postMessage({ message: 'loaded' })

	} catch (error) {
		console.error(error)
		console.error('JitsiStreamBackgroundEffect.worker: tflite compilation failed. The web server may not be properly configured to send wasm and/or tflite files.')

		self.postMessage({ message: 'loadFailed' })
	}
}

/**
 * @param {ImageData} imageData the image data from the canvas
 * @param {number} frameId the ID of the frame that the image data belongs to
 */
function resizeSource(imageData, frameId) {
	const inputMemoryOffset = self.tflite._getInputMemoryOffset() / 4
	for (let i = 0; i < self.segmentationPixelCount; i++) {
		self.tflite.HEAPF32[inputMemoryOffset + (i * 3)] = imageData.data[i * 4] / 255
		self.tflite.HEAPF32[inputMemoryOffset + (i * 3) + 1] = imageData.data[(i * 4) + 1] / 255
		self.tflite.HEAPF32[inputMemoryOffset + (i * 3) + 2] = imageData.data[(i * 4) + 2] / 255
	}
	runInference(frameId)
}

/**
 * @param {number} frameId the ID of the frame that the image data belongs to
 */
function runInference(frameId) {
	self.tflite._runInference()
	const outputMemoryOffset = self.tflite._getOutputMemoryOffset() / 4
	const segmentationMaskData = []
	// All consts in Worker in obj array.
	for (let i = 0; i < self.segmentationPixelCount; i++) {

		const person = self.tflite.HEAPF32[outputMemoryOffset + i]

		segmentationMaskData.push({
			person,
		})
	}
	self.postMessage({ message: 'inferenceRun', segmentationResult: segmentationMaskData, frameId })
}

// This is needed to make the linter happy, but even if nothing is actually
// exported the worker is loaded as expected.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);

})();

/******/ })()
;
//# sourceMappingURL=talk-JitsiStreamBackgroundEffect.worker.worker.js.map?v=8f8b81869d9ed7c4f1f8