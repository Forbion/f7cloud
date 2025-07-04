/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@nextcloud/browser-storage/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/dist/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clearAll = clearAll;
exports.clearNonPersistent = clearNonPersistent;
exports.getBuilder = getBuilder;
var _storagebuilder = _interopRequireDefault(__webpack_require__(/*! ./storagebuilder */ "./node_modules/@nextcloud/browser-storage/dist/storagebuilder.js"));
var _scopedstorage = _interopRequireDefault(__webpack_require__(/*! ./scopedstorage */ "./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Get the storage builder for an app
 * @param appId App ID to scope storage
 */
function getBuilder(appId) {
  return new _storagebuilder.default(appId);
}

/**
 * Clear values from storage
 * @param storage The storage to clear
 * @param pred Callback to check if value should be cleared
 */
function clearStorage(storage, pred) {
  Object.keys(storage).filter(k => pred ? pred(k) : true).map(storage.removeItem.bind(storage));
}

/**
 * Clear all values from all storages
 */
function clearAll() {
  const storages = [window.sessionStorage, window.localStorage];
  storages.map(s => clearStorage(s));
}

/**
 * Clear ony non persistent values
 */
function clearNonPersistent() {
  const storages = [window.sessionStorage, window.localStorage];
  storages.map(s => clearStorage(s, k => !k.startsWith(_scopedstorage.default.GLOBAL_SCOPE_PERSISTENT)));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class ScopedStorage {
  constructor(scope, wrapped, persistent) {
    _defineProperty(this, "scope", void 0);
    _defineProperty(this, "wrapped", void 0);
    this.scope = "".concat(persistent ? ScopedStorage.GLOBAL_SCOPE_PERSISTENT : ScopedStorage.GLOBAL_SCOPE_VOLATILE, "_").concat(btoa(scope), "_");
    this.wrapped = wrapped;
  }
  scopeKey(key) {
    return "".concat(this.scope).concat(key);
  }
  setItem(key, value) {
    this.wrapped.setItem(this.scopeKey(key), value);
  }
  getItem(key) {
    return this.wrapped.getItem(this.scopeKey(key));
  }
  removeItem(key) {
    this.wrapped.removeItem(this.scopeKey(key));
  }
  clear() {
    Object.keys(this.wrapped).filter(key => key.startsWith(this.scope)).map(this.wrapped.removeItem.bind(this.wrapped));
  }
}
exports["default"] = ScopedStorage;
_defineProperty(ScopedStorage, "GLOBAL_SCOPE_VOLATILE", 'nextcloud_vol');
_defineProperty(ScopedStorage, "GLOBAL_SCOPE_PERSISTENT", 'nextcloud_per');
//# sourceMappingURL=scopedstorage.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/browser-storage/dist/storagebuilder.js":
/*!************************************************************************!*\
  !*** ./node_modules/@nextcloud/browser-storage/dist/storagebuilder.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _scopedstorage = _interopRequireDefault(__webpack_require__(/*! ./scopedstorage */ "./node_modules/@nextcloud/browser-storage/dist/scopedstorage.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class StorageBuilder {
  constructor(appId) {
    _defineProperty(this, "appId", void 0);
    _defineProperty(this, "persisted", false);
    _defineProperty(this, "clearedOnLogout", false);
    this.appId = appId;
  }
  persist() {
    let persist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.persisted = persist;
    return this;
  }
  clearOnLogout() {
    let clear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.clearedOnLogout = clear;
    return this;
  }
  build() {
    return new _scopedstorage.default(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
exports["default"] = StorageBuilder;
//# sourceMappingURL=storagebuilder.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/classes/semver.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/classes/semver.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(/*! ../internal/constants */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/constants.js")
const { safeRe: re, safeSrc: src, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/re.js")

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/parse-options.js")
const { compareIdentifiers } = __webpack_require__(/*! ../internal/identifiers */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
        version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('build compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier, identifierBase) {
    if (release.startsWith('pre')) {
      if (!identifier && identifierBase === false) {
        throw new Error('invalid increment argument: identifier is empty')
      }
      // Avoid an invalid semver results
      if (identifier) {
        const r = new RegExp(`^${this.options.loose ? src[t.PRERELEASELOOSE] : src[t.PRERELEASE]}$`)
        const match = `-${identifier}`.match(r)
        if (!match || match[1] !== identifier) {
          throw new Error(`invalid identifier: ${identifier}`)
        }
      }
    }

    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier, identifierBase)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier, identifierBase)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier, identifierBase)
        this.inc('pre', identifier, identifierBase)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier, identifierBase)
        }
        this.inc('pre', identifier, identifierBase)
        break
      case 'release':
        if (this.prerelease.length === 0) {
          throw new Error(`version ${this.raw} is not a prerelease`)
        }
        this.prerelease.length = 0
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre': {
        const base = Number(identifierBase) ? 1 : 0

        if (this.prerelease.length === 0) {
          this.prerelease = [base]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            if (identifier === this.prerelease.join('.') && identifierBase === false) {
              throw new Error('invalid increment argument: identifier already exists')
            }
            this.prerelease.push(base)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          let prerelease = [identifier, base]
          if (identifierBase === false) {
            prerelease = [identifier]
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease
            }
          } else {
            this.prerelease = prerelease
          }
        }
        break
      }
      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.raw = this.format()
    if (this.build.length) {
      this.raw += `+${this.build.join('.')}`
    }
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/major.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/functions/major.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/@nextcloud/event-bus/node_modules/semver/classes/semver.js")
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/parse.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/functions/parse.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/@nextcloud/event-bus/node_modules/semver/classes/semver.js")
const parse = (version, options, throwErrors = false) => {
  if (version instanceof SemVer) {
    return version
  }
  try {
    return new SemVer(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
}

module.exports = parse


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/valid.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/functions/valid.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__(/*! ./parse */ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/parse.js")
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/constants.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/internal/constants.js ***!
  \*************************************************************************************/
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6

const RELEASE_TYPES = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease',
]

module.exports = {
  MAX_LENGTH,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 0b001,
  FLAG_LOOSE: 0b010,
}


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/debug.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/internal/debug.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js");
const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/identifiers.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/internal/identifiers.js ***!
  \***************************************************************************************/
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers,
}


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/parse-options.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/internal/parse-options.js ***!
  \*****************************************************************************************/
/***/ ((module) => {

// parse out just the options we care about
const looseOption = Object.freeze({ loose: true })
const emptyOpts = Object.freeze({ })
const parseOptions = options => {
  if (!options) {
    return emptyOpts
  }

  if (typeof options !== 'object') {
    return looseOption
  }

  return options
}
module.exports = parseOptions


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/re.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/node_modules/semver/internal/re.js ***!
  \******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

const {
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_LENGTH,
} = __webpack_require__(/*! ./constants */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/constants.js")
const debug = __webpack_require__(/*! ./debug */ "./node_modules/@nextcloud/event-bus/node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const safeRe = exports.safeRe = []
const src = exports.src = []
const safeSrc = exports.safeSrc = []
const t = exports.t = {}
let R = 0

const LETTERDASHNUMBER = '[a-zA-Z0-9-]'

// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
  ['\\s', 1],
  ['\\d', MAX_LENGTH],
  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH],
]

const makeSafeRegex = (value) => {
  for (const [token, max] of safeRegexReplacements) {
    value = value
      .split(`${token}*`).join(`${token}{0,${max}}`)
      .split(`${token}+`).join(`${token}{1,${max}}`)
  }
  return value
}

const createToken = (name, value, isGlobal) => {
  const safe = makeSafeRegex(value)
  const index = R++
  debug(name, index, value)
  t[name] = index
  src[index] = value
  safeSrc[index] = safe
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
  safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '\\d+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`)

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`)

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`)
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`)
createToken('COERCEFULL', src[t.COERCEPLAIN] +
              `(?:${src[t.PRERELEASE]})?` +
              `(?:${src[t.BUILD]})?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)
createToken('COERCERTLFULL', src[t.COERCEFULL], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$')


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./css/calendar.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./css/calendar.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*!
 * SPDX-FileCopyrightText: 2016 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.app-calendar .datepicker-button-section,
.app-calendar .today-button-section,
.app-calendar .view-button-section {
  display: flex;
}
.app-calendar .datepicker-button-section .button,
.app-calendar .today-button-section .button,
.app-calendar .view-button-section .button {
  border-radius: 0;
  font-weight: normal;
  margin: 0 0 var(--default-grid-baseline) 0;
  flex-grow: 1;
}
.app-calendar .datepicker-button-section .button:first-child:not(:only-of-type),
.app-calendar .today-button-section .button:first-child:not(:only-of-type),
.app-calendar .view-button-section .button:first-child:not(:only-of-type) {
  border-radius: var(--border-radius-element) 0 0 var(--border-radius-element);
}
.app-calendar .datepicker-button-section .button:last-child:not(:only-of-type),
.app-calendar .today-button-section .button:last-child:not(:only-of-type),
.app-calendar .view-button-section .button:last-child:not(:only-of-type) {
  border-radius: 0 var(--border-radius-element) var(--border-radius-element) 0;
}
.app-calendar .datepicker-button-section .button:not(:only-of-type):not(:first-child):not(:last-child),
.app-calendar .today-button-section .button:not(:only-of-type):not(:first-child):not(:last-child),
.app-calendar .view-button-section .button:not(:only-of-type):not(:first-child):not(:last-child) {
  border-radius: 0;
}
.app-calendar .datepicker-button-section .button:only-child,
.app-calendar .today-button-section .button:only-child,
.app-calendar .view-button-section .button:only-child {
  border-radius: var(--border-radius-element);
}
.app-calendar .datepicker-button-section .button:hover,
.app-calendar .datepicker-button-section .button:focus,
.app-calendar .datepicker-button-section .button.active,
.app-calendar .today-button-section .button:hover,
.app-calendar .today-button-section .button:focus,
.app-calendar .today-button-section .button.active,
.app-calendar .view-button-section .button:hover,
.app-calendar .view-button-section .button:focus,
.app-calendar .view-button-section .button.active {
  z-index: 50;
}
.app-calendar .datepicker-button-section__datepicker-label {
  flex-grow: 4 !important;
  text-align: center;
}
.app-calendar .datepicker-button-section__datepicker {
  margin-left: 26px;
  margin-top: 48px;
  position: absolute !important;
  width: 0 !important;
}
.app-calendar .datepicker-button-section__datepicker .mx-input-wrapper {
  display: none !important;
}
.app-calendar .datepicker-button-section__left, .app-calendar .datepicker-button-section__right {
  background-size: 10px;
  flex-grow: 0 !important;
  width: 34px;
  padding: 0 6px !important;
}
.app-calendar .datepicker-button-section__left {
  border-radius: var(--border-radius-element) 0 0 var(--border-radius-element) !important;
}
.app-calendar .datepicker-button-section__right {
  border-radius: 0 var(--border-radius-element) var(--border-radius-element) 0 !important;
}
.app-calendar .app-navigation__body {
  overflow-y: unset !important;
}
.app-calendar .app-navigation__body .app-navigation-header {
  padding: calc(var(--default-grid-baseline, 4px) * 2);
}
.app-calendar .new-event-today-view-section {
  display: flex;
}
.app-calendar .new-event-today-view-section .button {
  margin: 0 var(--default-grid-baseline) 0 0;
}
.app-calendar .new-event-today-view-section .new-event {
  flex-grow: 5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.app-calendar .new-event-today-view-section .today {
  flex-grow: 1;
  font-weight: normal !important;
}
.app-calendar .app-navigation-toggle {
  background-color: var(--color-main-background) !important;
  border: 1px solid var(--color-background-dark) !important;
}
.app-calendar .app-navigation button.icon-share {
  opacity: 0.3 !important;
}
.app-calendar .app-navigation button.icon-shared,
.app-calendar .app-navigation button.icon-public {
  opacity: 0.7 !important;
}
.app-calendar .app-navigation button.icon-share:active,
.app-calendar .app-navigation button.icon-share:focus,
.app-calendar .app-navigation button.icon-share:hover,
.app-calendar .app-navigation button.icon-shared:active,
.app-calendar .app-navigation button.icon-shared:focus,
.app-calendar .app-navigation button.icon-shared:hover,
.app-calendar .app-navigation button.icon-public:active,
.app-calendar .app-navigation button.icon-public:focus,
.app-calendar .app-navigation button.icon-public:hover {
  opacity: 1 !important;
}
.app-calendar .app-navigation #calendars-list {
  display: block !important;
}
.app-calendar .app-navigation li.app-navigation-loading-placeholder-entry div.icon.icon-loading {
  min-height: 44px;
}
.app-calendar .app-navigation .app-navigation-entry-wrapper.deleted .app-navigation-entry__name {
  text-decoration: line-through;
}
.app-calendar .app-navigation .app-navigation-entry-wrapper.open-sharing {
  box-shadow: inset 4px 0 var(--color-primary-element) !important;
  margin-left: -6px;
  padding-left: 6px;
}
.app-calendar .app-navigation .app-navigation-entry-wrapper.disabled .app-navigation-entry__name {
  color: var(--color-text-lighter) !important;
}
.app-calendar .app-navigation .app-navigation-entry-wrapper .app-navigation-entry__children .app-navigation-entry {
  padding-left: 0 !important;
}
.app-calendar .app-navigation .app-navigation-entry-wrapper .app-navigation-entry__children .app-navigation-entry .avatar {
  width: 32px;
  height: 32px;
  background-color: var(--color-border-dark);
  background-size: 16px;
}
.app-calendar .app-navigation .app-navigation-entry-wrapper .app-navigation-entry__children .app-navigation-entry .avatar.published {
  background-color: var(--color-primary-element);
  color: white;
}
.app-calendar .app-navigation .app-navigation-entry__multiselect {
  padding: 0 8px;
}
.app-calendar .app-navigation .app-navigation-entry__multiselect .multiselect {
  width: 100%;
  border-radius: var(--border-radius-large);
}
.app-calendar .app-navigation .app-navigation-entry__multiselect .multiselect__content-wrapper {
  z-index: 200 !important;
}
.app-calendar .app-navigation .app-navigation-entry__utils .action-checkbox__label {
  padding-right: 0 !important;
}
.app-calendar .app-navigation .app-navigation-entry__utils .action-checkbox__label::before {
  margin: 0 4px 0 !important;
}
.app-calendar .app-navigation .app-navigation-entry-new-calendar .app-navigation-entry__name {
  color: var(--color-text-maxcontrast) !important;
}
.app-calendar .app-navigation .app-navigation-entry-new-calendar:hover .app-navigation-entry__name, .app-calendar .app-navigation .app-navigation-entry-new-calendar--open .app-navigation-entry__name {
  color: var(--color-text-light) !important;
}
.app-calendar .app-navigation .app-navigation-entry-new-calendar .action-item:not(.action-item--open) .action-item__menutoggle:not(:hover):not(:focus):not(:active) {
  opacity: 0.5;
}
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section div.multiselect {
  width: calc(100% - 14px);
  max-width: none;
  z-index: 105;
}
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .oneline {
  white-space: nowrap;
  position: relative;
}
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList {
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList > li {
  height: 44px;
  white-space: normal;
  display: inline-flex;
  align-items: center;
  position: relative;
}
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList > li .username {
  padding: 0 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList > li > .sharingOptionsGroup {
  margin-left: auto;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList > li > .sharingOptionsGroup > a:hover,
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList > li > .sharingOptionsGroup > a:focus,
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList > li > .sharingOptionsGroup > .share-menu > a:hover,
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList > li > .sharingOptionsGroup > .share-menu > a:focus {
  box-shadow: none !important;
  opacity: 1 !important;
}
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList > li > .sharingOptionsGroup > .icon:not(.hidden),
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList > li > .sharingOptionsGroup > .share-menu .icon:not(.hidden) {
  padding: 14px;
  height: 44px;
  width: 44px;
  opacity: 0.5;
  display: block;
  cursor: pointer;
}
.app-calendar .app-navigation ul > li.app-navigation-entry-wrapper div.sharing-section .shareWithList > li > .sharingOptionsGroup > .share-menu {
  position: relative;
  display: block;
}
.app-calendar .app-navigation ul .appointment-config-list .app-navigation-caption {
  margin-top: 22px;
}
.app-calendar .app-navigation ul .appointment-config-list .app-navigation-entry-link,
.app-calendar .app-navigation ul .appointment-config-list .app-navigation-entry-link * {
  cursor: default;
}

/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.app-calendar .app-sidebar .editor-invitee-list-empty-message,
.app-calendar .app-sidebar .editor-reminders-list-empty-message,
.app-calendar .app-sidebar .editor-invitee-list-no-email-configured-message,
.event-popover .event-popover__inner .editor-invitee-list-empty-message,
.event-popover .event-popover__inner .editor-reminders-list-empty-message,
.event-popover .event-popover__inner .editor-invitee-list-no-email-configured-message {
  margin-top: 20px;
}
.app-calendar .app-sidebar .editor-invitee-list-empty-message__icon,
.app-calendar .app-sidebar .editor-reminders-list-empty-message__icon,
.app-calendar .app-sidebar .editor-invitee-list-no-email-configured-message__icon,
.event-popover .event-popover__inner .editor-invitee-list-empty-message__icon,
.event-popover .event-popover__inner .editor-reminders-list-empty-message__icon,
.event-popover .event-popover__inner .editor-invitee-list-no-email-configured-message__icon {
  background-size: 50px;
  height: 50px;
  width: 50px;
  margin: 0 auto;
  opacity: 0.5;
}
.app-calendar .app-sidebar .editor-invitee-list-empty-message__caption,
.app-calendar .app-sidebar .editor-reminders-list-empty-message__caption,
.app-calendar .app-sidebar .editor-invitee-list-no-email-configured-message__caption,
.event-popover .event-popover__inner .editor-invitee-list-empty-message__caption,
.event-popover .event-popover__inner .editor-reminders-list-empty-message__caption,
.event-popover .event-popover__inner .editor-invitee-list-no-email-configured-message__caption {
  margin-top: 8px;
  text-align: center;
  color: var(--color-text-lighter);
}
.app-calendar .app-sidebar .editor-invitee-list-no-email-configured-message__icon,
.event-popover .event-popover__inner .editor-invitee-list-no-email-configured-message__icon {
  font-size: 50px;
  line-height: 1em;
  user-select: none;
}
.app-calendar .app-sidebar__header,
.event-popover .event-popover__inner__header {
  display: flex;
  width: 100%;
}
.app-calendar .app-sidebar .editor-reminders-list-new-button,
.event-popover .event-popover__inner .editor-reminders-list-new-button {
  width: 100%;
  background-position-x: 8px;
}
.app-calendar .app-sidebar .app-sidebar-header__action,
.event-popover .event-popover__inner .app-sidebar-header__action {
  margin-top: 0 !important;
  max-height: none !important;
  flex-wrap: wrap;
}
.app-calendar .app-sidebar .app-sidebar-header__action div,
.event-popover .event-popover__inner .app-sidebar-header__action div {
  flex-shrink: 0;
}
.app-calendar .app-sidebar .app-sidebar-header__desc,
.event-popover .event-popover__inner .app-sidebar-header__desc {
  height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
}
.app-calendar .app-sidebar .app-sidebar-header__desc .app-sidebar-header__menu,
.event-popover .event-popover__inner .app-sidebar-header__desc .app-sidebar-header__menu {
  z-index: 1;
}
.app-calendar .app-sidebar .app-sidebar-header__description,
.event-popover .event-popover__inner .app-sidebar-header__description {
  flex-direction: column;
  padding-top: 5px;
}
.app-calendar .app-sidebar .app-sidebar-tab,
.event-popover .event-popover__inner .app-sidebar-tab {
  overflow: unset !important;
  max-height: unset !important;
  height: auto !important;
}
.app-calendar .app-sidebar .app-sidebar-tab__buttons,
.event-popover .event-popover__inner .app-sidebar-tab__buttons {
  position: fixed;
  bottom: var(--body-container-margin);
  z-index: 2;
  width: calc(27vw - 11px);
  min-width: 289px;
  max-width: 489px;
  background-color: var(--color-main-background);
  border-radius: 0 0 var(--body-container-radius) 0;
  padding: 0 8px 6px 0;
}
.app-calendar .app-sidebar .app-sidebar-tab__buttons button,
.event-popover .event-popover__inner .app-sidebar-tab__buttons button {
  width: 100%;
  height: 44px;
}
.app-calendar .app-sidebar .app-sidebar-tab__content,
.event-popover .event-popover__inner .app-sidebar-tab__content {
  margin-bottom: 120px;
}
.app-calendar .app-sidebar .app-sidebar-tabs .empty-content,
.event-popover .event-popover__inner .app-sidebar-tabs .empty-content {
  height: 100vh;
  padding: 0 20px;
}
.app-calendar .app-sidebar .property-title-time-picker-loading-placeholder,
.event-popover .event-popover__inner .property-title-time-picker-loading-placeholder {
  width: 100%;
}
.app-calendar .app-sidebar .property-title-time-picker-loading-placeholder__icon,
.event-popover .event-popover__inner .property-title-time-picker-loading-placeholder__icon {
  margin: 0 auto;
  height: 62px;
  width: 62px;
  background-size: 62px;
}
.app-calendar .app-sidebar .app-sidebar__loading-indicator,
.event-popover .event-popover__inner .app-sidebar__loading-indicator {
  width: 100%;
  margin-top: 20vh;
}
.app-calendar .app-sidebar .app-sidebar__loading-indicator__icon,
.event-popover .event-popover__inner .app-sidebar__loading-indicator__icon {
  margin: 0 auto;
  height: 44px;
  width: 44px;
  background-size: 44px;
}
.app-calendar .app-sidebar .repeat-option-set,
.event-popover .event-popover__inner .repeat-option-set {
  flex-wrap: nowrap;
  align-items: baseline;
}
.app-calendar .app-sidebar .repeat-option-set .repeat-option-set__repeat,
.event-popover .event-popover__inner .repeat-option-set .repeat-option-set__repeat {
  flex-wrap: nowrap;
  gap: 10px;
}
.app-calendar .app-sidebar .repeat-option-set .repeat-option-set__repeat-field,
.event-popover .event-popover__inner .repeat-option-set .repeat-option-set__repeat-field {
  flex: 1 1 150px;
  min-width: 150px;
}
.app-calendar .app-sidebar .repeat-option-set .repeat-option-set__end-repeat,
.event-popover .event-popover__inner .repeat-option-set .repeat-option-set__end-repeat {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}
.app-calendar .app-sidebar .repeat-option-set .repeat-option-set__end-repeat .repeat-option-set__end-repeat-field,
.event-popover .event-popover__inner .repeat-option-set .repeat-option-set__end-repeat .repeat-option-set__end-repeat-field {
  flex: 1 1 150px;
  min-width: 350px;
}
.app-calendar .app-sidebar .repeat-option-set .repeat-option-set-section:not(:first-of-type),
.event-popover .event-popover__inner .repeat-option-set .repeat-option-set-section:not(:first-of-type) {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: calc(var(--default-grid-baseline) * 2);
}
.app-calendar .app-sidebar .repeat-option-set .repeat-option-set-section--on-the-select,
.event-popover .event-popover__inner .repeat-option-set .repeat-option-set-section--on-the-select {
  display: flex;
}
.app-calendar .app-sidebar .repeat-option-set .repeat-option-set-section--on-the-select .v-select,
.event-popover .event-popover__inner .repeat-option-set .repeat-option-set-section--on-the-select .v-select {
  width: 100%;
  min-width: 100px !important;
}
.app-calendar .app-sidebar .repeat-option-set .repeat-option-set-section__title,
.event-popover .event-popover__inner .repeat-option-set .repeat-option-set-section__title {
  list-style: none;
}
.app-calendar .app-sidebar .repeat-option-set .repeat-option-set-section__grid,
.event-popover .event-popover__inner .repeat-option-set .repeat-option-set-section__grid {
  display: grid;
  grid-gap: 0;
}
.app-calendar .app-sidebar .repeat-option-set .repeat-option-set-section__grid .repeat-option-set-section-grid-item,
.event-popover .event-popover__inner .repeat-option-set .repeat-option-set-section__grid .repeat-option-set-section-grid-item {
  padding: 5px;
  width: 100%;
  border: 1px solid var(--color-border-dark);
  text-align: center;
  margin: 0;
  border-radius: 0;
}
.app-calendar .app-sidebar .repeat-option-set--weekly .repeat-option-set-section__grid, .app-calendar .app-sidebar .repeat-option-set--monthly .repeat-option-set-section__grid,
.event-popover .event-popover__inner .repeat-option-set--weekly .repeat-option-set-section__grid,
.event-popover .event-popover__inner .repeat-option-set--monthly .repeat-option-set-section__grid {
  grid-template-columns: repeat(7, auto);
}
.app-calendar .app-sidebar .repeat-option-set--yearly .repeat-option-set-section__grid,
.event-popover .event-popover__inner .repeat-option-set--yearly .repeat-option-set-section__grid {
  grid-template-columns: repeat(7, auto);
}
.app-calendar .app-sidebar .repeat-option-set--interval-freq,
.event-popover .event-popover__inner .repeat-option-set--interval-freq {
  display: flex;
}
.app-calendar .app-sidebar .repeat-option-set--interval-freq .multiselect,
.event-popover .event-popover__inner .repeat-option-set--interval-freq .multiselect {
  min-width: 100px;
  width: 25%;
}
.app-calendar .app-sidebar .repeat-option-set--end,
.event-popover .event-popover__inner .repeat-option-set--end {
  margin-top: 10px;
}
.app-calendar .app-sidebar .repeat-option-set--end .repeat-option-end,
.event-popover .event-popover__inner .repeat-option-set--end .repeat-option-end {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.app-calendar .app-sidebar .repeat-option-set--end .repeat-option-end__label, .app-calendar .app-sidebar .repeat-option-set--end .repeat-option-end__end-type-select, .app-calendar .app-sidebar .repeat-option-set--end .repeat-option-end__until, .app-calendar .app-sidebar .repeat-option-set--end .repeat-option-end__count,
.event-popover .event-popover__inner .repeat-option-set--end .repeat-option-end__label,
.event-popover .event-popover__inner .repeat-option-set--end .repeat-option-end__end-type-select,
.event-popover .event-popover__inner .repeat-option-set--end .repeat-option-end__until,
.event-popover .event-popover__inner .repeat-option-set--end .repeat-option-end__count {
  flex: 1 1 auto;
  min-width: 0;
  margin-right: 10px;
}
.app-calendar .app-sidebar .repeat-option-set--end .repeat-option-end__label,
.event-popover .event-popover__inner .repeat-option-set--end .repeat-option-end__label {
  display: block;
  min-width: 60px;
}
.app-calendar .app-sidebar .repeat-option-set--end .repeat-option-end__end-type-select,
.event-popover .event-popover__inner .repeat-option-set--end .repeat-option-end__end-type-select {
  min-width: 90px;
  width: 100%;
}
.app-calendar .app-sidebar .repeat-option-set--end .repeat-option-end__until,
.event-popover .event-popover__inner .repeat-option-set--end .repeat-option-end__until {
  min-width: 90px;
  width: 100%;
  display: inline-block;
}
.app-calendar .app-sidebar .repeat-option-set--end .repeat-option-end__count,
.event-popover .event-popover__inner .repeat-option-set--end .repeat-option-end__count {
  min-width: 90px;
  width: 100%;
}
.app-calendar .app-sidebar .repeat-option-set .end-repeat-container .end-repeat-dropdown,
.app-calendar .app-sidebar .repeat-option-set .end-repeat-container .end-repeat-date,
.event-popover .event-popover__inner .repeat-option-set .end-repeat-container .end-repeat-dropdown,
.event-popover .event-popover__inner .repeat-option-set .end-repeat-container .end-repeat-date {
  flex: 0 1 auto;
  min-width: 150px;
  width: auto;
}
.app-calendar .app-sidebar .repeat-option-set__label,
.event-popover .event-popover__inner .repeat-option-set__label {
  margin-right: auto;
}
.app-calendar .app-sidebar .repeat-option-warning,
.event-popover .event-popover__inner .repeat-option-warning {
  text-align: center;
}
.app-calendar .app-sidebar .property-title-time-picker,
.event-popover .event-popover__inner .property-title-time-picker {
  width: 100%;
}
.app-calendar .app-sidebar .property-title-time-picker--readonly,
.event-popover .event-popover__inner .property-title-time-picker--readonly {
  display: flex;
  align-items: flex-start;
}
.app-calendar .app-sidebar .property-title-time-picker--readonly > *:not([align-self=center]),
.event-popover .event-popover__inner .property-title-time-picker--readonly > *:not([align-self=center]) {
  align-self: flex-start !important;
}
.app-calendar .app-sidebar .property-title-time-picker__icon,
.event-popover .event-popover__inner .property-title-time-picker__icon {
  width: 34px;
  height: 34px;
  margin-left: -5px;
  margin-right: 5px;
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers, .app-calendar .app-sidebar .property-title-time-picker__all-day,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers,
.event-popover .event-popover__inner .property-title-time-picker__all-day {
  display: flex;
  align-items: center;
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers {
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers .mx-datepicker,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers .mx-datepicker {
  flex: 1 auto;
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers .mx-datepicker .mx-input-append,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers .mx-datepicker .mx-input-append {
  background-color: transparent !important;
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers--readonly,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers--readonly {
  justify-content: start;
  margin-top: var(--default-grid-baseline);
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper {
  display: flex;
  align-items: center;
  padding-left: 8px !important;
  background-color: var(--color-main-background);
  color: var(--color-main-text);
  outline: none;
  gap: var(--default-grid-baseline);
  margin-bottom: var(--default-grid-baseline);
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper--start-date,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper--start-date {
  padding: 0;
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper--end-date,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper--end-date {
  padding: 0;
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper__icon,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper__icon {
  margin-left: 8px;
  height: 16px;
  width: 16px;
  opacity: 0.3;
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper__icon--highlighted,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper__icon--highlighted {
  opacity: 0.7;
}
.app-calendar .app-sidebar .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper__icon:focus, .app-calendar .app-sidebar .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper__icon:hover,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper__icon:focus,
.event-popover .event-popover__inner .property-title-time-picker__time-pickers--readonly .property-title-time-picker-read-only-wrapper__icon:hover {
  opacity: 1;
}
.app-calendar .app-sidebar .property-title-time-picker__all-day,
.event-popover .event-popover__inner .property-title-time-picker__all-day {
  padding-left: 3px;
  margin-top: 5px;
}
.app-calendar .app-sidebar .property-title-time-picker__all-day .checkbox-radio-switch__label,
.event-popover .event-popover__inner .property-title-time-picker__all-day .checkbox-radio-switch__label {
  min-height: 32px;
}
.app-calendar .app-sidebar .property-title-time-picker .datetime-picker-inline-icon,
.event-popover .event-popover__inner .property-title-time-picker .datetime-picker-inline-icon {
  margin-top: 17px;
  opacity: 0.3;
  border: none;
  background-color: transparent;
  border-radius: 0;
  padding: 6px !important;
}
.app-calendar .app-sidebar .property-title-time-picker .datetime-picker-inline-icon--highlighted,
.event-popover .event-popover__inner .property-title-time-picker .datetime-picker-inline-icon--highlighted {
  opacity: 0.7;
}
.app-calendar .app-sidebar .property-title-time-picker .datetime-picker-inline-icon:focus, .app-calendar .app-sidebar .property-title-time-picker .datetime-picker-inline-icon:hover,
.event-popover .event-popover__inner .property-title-time-picker .datetime-picker-inline-icon:focus,
.event-popover .event-popover__inner .property-title-time-picker .datetime-picker-inline-icon:hover {
  opacity: 1;
}
.app-calendar .app-sidebar .property-alarm-list,
.event-popover .event-popover__inner .property-alarm-list {
  width: 100%;
}
.app-calendar .app-sidebar .property-alarm-item,
.event-popover .event-popover__inner .property-alarm-item {
  display: flex;
  align-items: center;
  min-height: 44px;
}
.app-calendar .app-sidebar .property-alarm-item .v-select,
.event-popover .event-popover__inner .property-alarm-item .v-select {
  margin: 0;
}
.app-calendar .app-sidebar .property-alarm-item .vs__dropdown-toggle,
.event-popover .event-popover__inner .property-alarm-item .vs__dropdown-toggle {
  width: 200px;
}
.app-calendar .app-sidebar .property-alarm-item__icon,
.event-popover .event-popover__inner .property-alarm-item__icon {
  align-self: flex-start;
}
.app-calendar .app-sidebar .property-alarm-item__icon--hidden,
.event-popover .event-popover__inner .property-alarm-item__icon--hidden {
  visibility: hidden;
}
.app-calendar .app-sidebar .property-alarm-item__icon .icon,
.event-popover .event-popover__inner .property-alarm-item__icon .icon {
  width: 34px;
  height: 44px;
  margin-left: -5px;
  margin-right: 5px;
}
.app-calendar .app-sidebar .property-alarm-item__label,
.event-popover .event-popover__inner .property-alarm-item__label {
  padding: 0 7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  align-self: center;
}
.app-calendar .app-sidebar .property-alarm-item__options,
.event-popover .event-popover__inner .property-alarm-item__options {
  margin-left: auto;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.app-calendar .app-sidebar .property-alarm-item__edit,
.event-popover .event-popover__inner .property-alarm-item__edit {
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
  padding-right: 8px;
}
.app-calendar .app-sidebar .property-alarm-item__edit input[type=number],
.event-popover .event-popover__inner .property-alarm-item__edit input[type=number] {
  width: 4em;
}
.app-calendar .app-sidebar .property-alarm-item__edit .multiselect,
.event-popover .event-popover__inner .property-alarm-item__edit .multiselect {
  flex: 1 auto;
  height: 34px;
  min-width: 0;
}
.app-calendar .app-sidebar .property-alarm-item__edit .mx-datepicker,
.event-popover .event-popover__inner .property-alarm-item__edit .mx-datepicker {
  flex: 1 auto;
}
.app-calendar .app-sidebar .property-alarm-item__edit--all-day,
.event-popover .event-popover__inner .property-alarm-item__edit--all-day {
  flex-wrap: wrap;
  margin-bottom: 5px;
  gap: 0 5px;
}
.app-calendar .app-sidebar .property-alarm-item__edit--all-day__distance, .app-calendar .app-sidebar .property-alarm-item__edit--all-day__time,
.event-popover .event-popover__inner .property-alarm-item__edit--all-day__distance,
.event-popover .event-popover__inner .property-alarm-item__edit--all-day__time {
  display: flex;
  flex: 1;
  align-items: center;
}
.app-calendar .app-sidebar .property-alarm-item__edit--all-day__distance .multiselect,
.event-popover .event-popover__inner .property-alarm-item__edit--all-day__distance .multiselect {
  width: 6em;
}
.app-calendar .app-sidebar .property-alarm-item__edit--all-day__time__before-at-label,
.event-popover .event-popover__inner .property-alarm-item__edit--all-day__time__before-at-label {
  flex: 0 0 auto;
  margin-right: 5px;
}
.app-calendar .app-sidebar .property-alarm-item__edit--all-day__time .mx-datepicker,
.event-popover .event-popover__inner .property-alarm-item__edit--all-day__time .mx-datepicker {
  width: 7em;
}
.app-calendar .app-sidebar .property-alarm-item__edit--absolute .mx-datepicker,
.event-popover .event-popover__inner .property-alarm-item__edit--absolute .mx-datepicker {
  width: unset;
}
.app-calendar .app-sidebar .property-repeat,
.event-popover .event-popover__inner .property-repeat {
  width: 100%;
}
.app-calendar .app-sidebar .property-repeat__summary,
.event-popover .event-popover__inner .property-repeat__summary {
  display: flex;
  align-items: center;
}
.app-calendar .app-sidebar .property-repeat__summary__icon,
.event-popover .event-popover__inner .property-repeat__summary__icon {
  width: 34px;
  height: 34px;
  margin-left: -5px;
  margin-right: 5px;
}
.app-calendar .app-sidebar .property-repeat__summary__content,
.event-popover .event-popover__inner .property-repeat__summary__content {
  flex: 1 auto;
  padding: 8px 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.app-calendar .app-sidebar .property-repeat__options,
.event-popover .event-popover__inner .property-repeat__options {
  margin-bottom: 5px;
}
.app-calendar .app-sidebar .resource-list-item,
.app-calendar .app-sidebar .invitees-list-item,
.event-popover .event-popover__inner .resource-list-item,
.event-popover .event-popover__inner .invitees-list-item {
  display: flex;
  align-items: center;
  min-height: 44px;
}
.app-calendar .app-sidebar .resource-list-item__displayname,
.app-calendar .app-sidebar .invitees-list-item__displayname,
.event-popover .event-popover__inner .resource-list-item__displayname,
.event-popover .event-popover__inner .invitees-list-item__displayname {
  margin-left: 8px;
}
.app-calendar .app-sidebar .resource-list-item__actions,
.app-calendar .app-sidebar .invitees-list-item__actions,
.event-popover .event-popover__inner .resource-list-item__actions,
.event-popover .event-popover__inner .invitees-list-item__actions {
  margin-left: auto;
}
.app-calendar .app-sidebar .resource-list-item__organizer-hint,
.app-calendar .app-sidebar .invitees-list-item__organizer-hint,
.event-popover .event-popover__inner .resource-list-item__organizer-hint,
.event-popover .event-popover__inner .invitees-list-item__organizer-hint {
  color: var(--color-text-maxcontrast);
  font-weight: 300;
  margin-left: 5px;
}
.app-calendar .app-sidebar .resource-search__capacity,
.event-popover .event-popover__inner .resource-search__capacity {
  display: flex;
  align-items: center;
}
.app-calendar .app-sidebar .resource-search__capacity__actions,
.event-popover .event-popover__inner .resource-search__capacity__actions {
  margin-left: 5px;
}
.app-calendar .app-sidebar .avatar-participation-status,
.event-popover .event-popover__inner .avatar-participation-status {
  position: relative;
  height: 38px;
  width: 38px;
}
.app-calendar .app-sidebar .avatar-participation-status__indicator,
.event-popover .event-popover__inner .avatar-participation-status__indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  background-size: 10px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
}
.app-calendar .app-sidebar .avatar-participation-status__indicator.accepted,
.event-popover .event-popover__inner .avatar-participation-status__indicator.accepted {
  background-color: #2fb130;
}
.app-calendar .app-sidebar .avatar-participation-status__indicator.declined,
.event-popover .event-popover__inner .avatar-participation-status__indicator.declined {
  background-color: #ff0000;
}
.app-calendar .app-sidebar .avatar-participation-status__indicator.tentative,
.event-popover .event-popover__inner .avatar-participation-status__indicator.tentative {
  background-color: #ffa704;
}
.app-calendar .app-sidebar .avatar-participation-status__indicator.delegated, .app-calendar .app-sidebar .avatar-participation-status__indicator.no-response,
.event-popover .event-popover__inner .avatar-participation-status__indicator.delegated,
.event-popover .event-popover__inner .avatar-participation-status__indicator.no-response {
  background-color: grey;
}
.app-calendar .app-sidebar .property-text,
.app-calendar .app-sidebar .property-select,
.app-calendar .app-sidebar .property-color,
.app-calendar .app-sidebar .property-select-multiple,
.app-calendar .app-sidebar .property-title,
.app-calendar .app-sidebar .resource-capacity,
.app-calendar .app-sidebar .resource-room-type,
.event-popover .event-popover__inner .property-text,
.event-popover .event-popover__inner .property-select,
.event-popover .event-popover__inner .property-color,
.event-popover .event-popover__inner .property-select-multiple,
.event-popover .event-popover__inner .property-title,
.event-popover .event-popover__inner .resource-capacity,
.event-popover .event-popover__inner .resource-room-type {
  display: flex;
  width: 100%;
  align-items: flex-start;
}
.app-calendar .app-sidebar .property-text__icon, .app-calendar .app-sidebar .property-text__info,
.app-calendar .app-sidebar .property-select__icon,
.app-calendar .app-sidebar .property-select__info,
.app-calendar .app-sidebar .property-color__icon,
.app-calendar .app-sidebar .property-color__info,
.app-calendar .app-sidebar .property-select-multiple__icon,
.app-calendar .app-sidebar .property-select-multiple__info,
.app-calendar .app-sidebar .property-title__icon,
.app-calendar .app-sidebar .property-title__info,
.app-calendar .app-sidebar .resource-capacity__icon,
.app-calendar .app-sidebar .resource-capacity__info,
.app-calendar .app-sidebar .resource-room-type__icon,
.app-calendar .app-sidebar .resource-room-type__info,
.event-popover .event-popover__inner .property-text__icon,
.event-popover .event-popover__inner .property-text__info,
.event-popover .event-popover__inner .property-select__icon,
.event-popover .event-popover__inner .property-select__info,
.event-popover .event-popover__inner .property-color__icon,
.event-popover .event-popover__inner .property-color__info,
.event-popover .event-popover__inner .property-select-multiple__icon,
.event-popover .event-popover__inner .property-select-multiple__info,
.event-popover .event-popover__inner .property-title__icon,
.event-popover .event-popover__inner .property-title__info,
.event-popover .event-popover__inner .resource-capacity__icon,
.event-popover .event-popover__inner .resource-capacity__info,
.event-popover .event-popover__inner .resource-room-type__icon,
.event-popover .event-popover__inner .resource-room-type__info {
  height: 34px;
  width: 34px;
}
.app-calendar .app-sidebar .property-text__icon--hidden,
.app-calendar .app-sidebar .property-select__icon--hidden,
.app-calendar .app-sidebar .property-color__icon--hidden,
.app-calendar .app-sidebar .property-select-multiple__icon--hidden,
.app-calendar .app-sidebar .property-title__icon--hidden,
.app-calendar .app-sidebar .resource-capacity__icon--hidden,
.app-calendar .app-sidebar .resource-room-type__icon--hidden,
.event-popover .event-popover__inner .property-text__icon--hidden,
.event-popover .event-popover__inner .property-select__icon--hidden,
.event-popover .event-popover__inner .property-color__icon--hidden,
.event-popover .event-popover__inner .property-select-multiple__icon--hidden,
.event-popover .event-popover__inner .property-title__icon--hidden,
.event-popover .event-popover__inner .resource-capacity__icon--hidden,
.event-popover .event-popover__inner .resource-room-type__icon--hidden {
  visibility: hidden;
}
.app-calendar .app-sidebar .property-text__info,
.app-calendar .app-sidebar .property-select__info,
.app-calendar .app-sidebar .property-color__info,
.app-calendar .app-sidebar .property-select-multiple__info,
.app-calendar .app-sidebar .property-title__info,
.app-calendar .app-sidebar .resource-capacity__info,
.app-calendar .app-sidebar .resource-room-type__info,
.event-popover .event-popover__inner .property-text__info,
.event-popover .event-popover__inner .property-select__info,
.event-popover .event-popover__inner .property-color__info,
.event-popover .event-popover__inner .property-select-multiple__info,
.event-popover .event-popover__inner .property-title__info,
.event-popover .event-popover__inner .resource-capacity__info,
.event-popover .event-popover__inner .resource-room-type__info {
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  opacity: 0.5;
}
.app-calendar .app-sidebar .property-text__info:hover,
.app-calendar .app-sidebar .property-select__info:hover,
.app-calendar .app-sidebar .property-color__info:hover,
.app-calendar .app-sidebar .property-select-multiple__info:hover,
.app-calendar .app-sidebar .property-title__info:hover,
.app-calendar .app-sidebar .resource-capacity__info:hover,
.app-calendar .app-sidebar .resource-room-type__info:hover,
.event-popover .event-popover__inner .property-text__info:hover,
.event-popover .event-popover__inner .property-select__info:hover,
.event-popover .event-popover__inner .property-color__info:hover,
.event-popover .event-popover__inner .property-select-multiple__info:hover,
.event-popover .event-popover__inner .property-title__info:hover,
.event-popover .event-popover__inner .resource-capacity__info:hover,
.event-popover .event-popover__inner .resource-room-type__info:hover {
  opacity: 1;
}
.app-calendar .app-sidebar .property-text__icon,
.app-calendar .app-sidebar .property-select__icon,
.app-calendar .app-sidebar .property-color__icon,
.app-calendar .app-sidebar .property-select-multiple__icon,
.app-calendar .app-sidebar .property-title__icon,
.app-calendar .app-sidebar .resource-capacity__icon,
.app-calendar .app-sidebar .resource-room-type__icon,
.event-popover .event-popover__inner .property-text__icon,
.event-popover .event-popover__inner .property-select__icon,
.event-popover .event-popover__inner .property-color__icon,
.event-popover .event-popover__inner .property-select-multiple__icon,
.event-popover .event-popover__inner .property-title__icon,
.event-popover .event-popover__inner .resource-capacity__icon,
.event-popover .event-popover__inner .resource-room-type__icon {
  flex-shrink: 0;
  margin-left: -5px;
  margin-right: 5px;
}
.app-calendar .app-sidebar .property-text__input,
.app-calendar .app-sidebar .property-select__input,
.app-calendar .app-sidebar .property-color__input,
.app-calendar .app-sidebar .property-select-multiple__input,
.app-calendar .app-sidebar .property-title__input,
.app-calendar .app-sidebar .resource-capacity__input,
.app-calendar .app-sidebar .resource-room-type__input,
.event-popover .event-popover__inner .property-text__input,
.event-popover .event-popover__inner .property-select__input,
.event-popover .event-popover__inner .property-color__input,
.event-popover .event-popover__inner .property-select-multiple__input,
.event-popover .event-popover__inner .property-title__input,
.event-popover .event-popover__inner .resource-capacity__input,
.event-popover .event-popover__inner .resource-room-type__input {
  flex-grow: 2;
}
.app-calendar .app-sidebar .property-text__input textarea,
.app-calendar .app-sidebar .property-text__input input,
.app-calendar .app-sidebar .property-text__input div.v-select,
.app-calendar .app-sidebar .property-select__input textarea,
.app-calendar .app-sidebar .property-select__input input,
.app-calendar .app-sidebar .property-select__input div.v-select,
.app-calendar .app-sidebar .property-color__input textarea,
.app-calendar .app-sidebar .property-color__input input,
.app-calendar .app-sidebar .property-color__input div.v-select,
.app-calendar .app-sidebar .property-select-multiple__input textarea,
.app-calendar .app-sidebar .property-select-multiple__input input,
.app-calendar .app-sidebar .property-select-multiple__input div.v-select,
.app-calendar .app-sidebar .property-title__input textarea,
.app-calendar .app-sidebar .property-title__input input,
.app-calendar .app-sidebar .property-title__input div.v-select,
.app-calendar .app-sidebar .resource-capacity__input textarea,
.app-calendar .app-sidebar .resource-capacity__input input,
.app-calendar .app-sidebar .resource-capacity__input div.v-select,
.app-calendar .app-sidebar .resource-room-type__input textarea,
.app-calendar .app-sidebar .resource-room-type__input input,
.app-calendar .app-sidebar .resource-room-type__input div.v-select,
.event-popover .event-popover__inner .property-text__input textarea,
.event-popover .event-popover__inner .property-text__input input,
.event-popover .event-popover__inner .property-text__input div.v-select,
.event-popover .event-popover__inner .property-select__input textarea,
.event-popover .event-popover__inner .property-select__input input,
.event-popover .event-popover__inner .property-select__input div.v-select,
.event-popover .event-popover__inner .property-color__input textarea,
.event-popover .event-popover__inner .property-color__input input,
.event-popover .event-popover__inner .property-color__input div.v-select,
.event-popover .event-popover__inner .property-select-multiple__input textarea,
.event-popover .event-popover__inner .property-select-multiple__input input,
.event-popover .event-popover__inner .property-select-multiple__input div.v-select,
.event-popover .event-popover__inner .property-title__input textarea,
.event-popover .event-popover__inner .property-title__input input,
.event-popover .event-popover__inner .property-title__input div.v-select,
.event-popover .event-popover__inner .resource-capacity__input textarea,
.event-popover .event-popover__inner .resource-capacity__input input,
.event-popover .event-popover__inner .resource-capacity__input div.v-select,
.event-popover .event-popover__inner .resource-room-type__input textarea,
.event-popover .event-popover__inner .resource-room-type__input input,
.event-popover .event-popover__inner .resource-room-type__input div.v-select {
  width: 100%;
}
.app-calendar .app-sidebar .property-text__input textarea,
.app-calendar .app-sidebar .property-select__input textarea,
.app-calendar .app-sidebar .property-color__input textarea,
.app-calendar .app-sidebar .property-select-multiple__input textarea,
.app-calendar .app-sidebar .property-title__input textarea,
.app-calendar .app-sidebar .resource-capacity__input textarea,
.app-calendar .app-sidebar .resource-room-type__input textarea,
.event-popover .event-popover__inner .property-text__input textarea,
.event-popover .event-popover__inner .property-select__input textarea,
.event-popover .event-popover__inner .property-color__input textarea,
.event-popover .event-popover__inner .property-select-multiple__input textarea,
.event-popover .event-popover__inner .property-title__input textarea,
.event-popover .event-popover__inner .resource-capacity__input textarea,
.event-popover .event-popover__inner .resource-room-type__input textarea {
  max-height: 120px;
  vertical-align: top;
  margin: 0;
}
.app-calendar .app-sidebar .property-text__input--readonly div,
.app-calendar .app-sidebar .property-select__input--readonly div,
.app-calendar .app-sidebar .property-color__input--readonly div,
.app-calendar .app-sidebar .property-select-multiple__input--readonly div,
.app-calendar .app-sidebar .property-title__input--readonly div,
.app-calendar .app-sidebar .resource-capacity__input--readonly div,
.app-calendar .app-sidebar .resource-room-type__input--readonly div,
.event-popover .event-popover__inner .property-text__input--readonly div,
.event-popover .event-popover__inner .property-select__input--readonly div,
.event-popover .event-popover__inner .property-color__input--readonly div,
.event-popover .event-popover__inner .property-select-multiple__input--readonly div,
.event-popover .event-popover__inner .property-title__input--readonly div,
.event-popover .event-popover__inner .resource-capacity__input--readonly div,
.event-popover .event-popover__inner .resource-room-type__input--readonly div {
  width: calc(100% - 8px); /* for typical (thin) scrollbar size */
  white-space: pre-line;
  padding: 8px 7px;
  background-color: var(--color-main-background);
  color: var(--color-main-text);
  outline: none;
  overflow-y: scroll;
  word-break: break-word; /* allows breaking on long URLs */
  max-height: 30vh;
}
.app-calendar .app-sidebar .property-text__input--readonly-calendar-picker div.calendar-picker-option,
.app-calendar .app-sidebar .property-select__input--readonly-calendar-picker div.calendar-picker-option,
.app-calendar .app-sidebar .property-color__input--readonly-calendar-picker div.calendar-picker-option,
.app-calendar .app-sidebar .property-select-multiple__input--readonly-calendar-picker div.calendar-picker-option,
.app-calendar .app-sidebar .property-title__input--readonly-calendar-picker div.calendar-picker-option,
.app-calendar .app-sidebar .resource-capacity__input--readonly-calendar-picker div.calendar-picker-option,
.app-calendar .app-sidebar .resource-room-type__input--readonly-calendar-picker div.calendar-picker-option,
.event-popover .event-popover__inner .property-text__input--readonly-calendar-picker div.calendar-picker-option,
.event-popover .event-popover__inner .property-select__input--readonly-calendar-picker div.calendar-picker-option,
.event-popover .event-popover__inner .property-color__input--readonly-calendar-picker div.calendar-picker-option,
.event-popover .event-popover__inner .property-select-multiple__input--readonly-calendar-picker div.calendar-picker-option,
.event-popover .event-popover__inner .property-title__input--readonly-calendar-picker div.calendar-picker-option,
.event-popover .event-popover__inner .resource-capacity__input--readonly-calendar-picker div.calendar-picker-option,
.event-popover .event-popover__inner .resource-room-type__input--readonly-calendar-picker div.calendar-picker-option {
  padding: 8px 7px;
}
.app-calendar .app-sidebar .property-text,
.app-calendar .app-sidebar .property-select,
.app-calendar .app-sidebar .property-color,
.app-calendar .app-sidebar .property-select-multiple,
.app-calendar .app-sidebar .property-title,
.app-calendar .app-sidebar .property-repeat,
.app-calendar .app-sidebar .resource-capacity,
.app-calendar .app-sidebar .resource-room-type,
.event-popover .event-popover__inner .property-text,
.event-popover .event-popover__inner .property-select,
.event-popover .event-popover__inner .property-color,
.event-popover .event-popover__inner .property-select-multiple,
.event-popover .event-popover__inner .property-title,
.event-popover .event-popover__inner .property-repeat,
.event-popover .event-popover__inner .resource-capacity,
.event-popover .event-popover__inner .resource-room-type {
  margin-bottom: 5px;
}
.app-calendar .app-sidebar .property-text--readonly,
.app-calendar .app-sidebar .property-select--readonly,
.app-calendar .app-sidebar .property-color--readonly,
.app-calendar .app-sidebar .property-select-multiple--readonly,
.app-calendar .app-sidebar .property-title--readonly,
.app-calendar .app-sidebar .property-repeat--readonly,
.app-calendar .app-sidebar .resource-capacity--readonly,
.app-calendar .app-sidebar .resource-room-type--readonly,
.event-popover .event-popover__inner .property-text--readonly,
.event-popover .event-popover__inner .property-select--readonly,
.event-popover .event-popover__inner .property-color--readonly,
.event-popover .event-popover__inner .property-select-multiple--readonly,
.event-popover .event-popover__inner .property-title--readonly,
.event-popover .event-popover__inner .property-repeat--readonly,
.event-popover .event-popover__inner .resource-capacity--readonly,
.event-popover .event-popover__inner .resource-room-type--readonly {
  margin-bottom: 0;
  align-content: center;
}
.app-calendar .app-sidebar .property-text--readonly > *:not([align-self=flex-start]),
.app-calendar .app-sidebar .property-select--readonly > *:not([align-self=flex-start]),
.app-calendar .app-sidebar .property-color--readonly > *:not([align-self=flex-start]),
.app-calendar .app-sidebar .property-select-multiple--readonly > *:not([align-self=flex-start]),
.app-calendar .app-sidebar .property-title--readonly > *:not([align-self=flex-start]),
.app-calendar .app-sidebar .property-repeat--readonly > *:not([align-self=flex-start]),
.app-calendar .app-sidebar .resource-capacity--readonly > *:not([align-self=flex-start]),
.app-calendar .app-sidebar .resource-room-type--readonly > *:not([align-self=flex-start]),
.event-popover .event-popover__inner .property-text--readonly > *:not([align-self=flex-start]),
.event-popover .event-popover__inner .property-select--readonly > *:not([align-self=flex-start]),
.event-popover .event-popover__inner .property-color--readonly > *:not([align-self=flex-start]),
.event-popover .event-popover__inner .property-select-multiple--readonly > *:not([align-self=flex-start]),
.event-popover .event-popover__inner .property-title--readonly > *:not([align-self=flex-start]),
.event-popover .event-popover__inner .property-repeat--readonly > *:not([align-self=flex-start]),
.event-popover .event-popover__inner .resource-capacity--readonly > *:not([align-self=flex-start]),
.event-popover .event-popover__inner .resource-room-type--readonly > *:not([align-self=flex-start]) {
  align-self: center !important;
}
.app-calendar .app-sidebar .property-select,
.app-calendar .app-sidebar .property-select-multiple,
.event-popover .event-popover__inner .property-select,
.event-popover .event-popover__inner .property-select-multiple {
  align-items: center;
}
.app-calendar .app-sidebar .property-select .v-select,
.app-calendar .app-sidebar .property-select-multiple .v-select,
.event-popover .event-popover__inner .property-select .v-select,
.event-popover .event-popover__inner .property-select-multiple .v-select {
  min-width: unset !important;
}
.app-calendar .app-sidebar .property-color__input,
.event-popover .event-popover__inner .property-color__input {
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
}
.app-calendar .app-sidebar .property-color__input--readonly,
.event-popover .event-popover__inner .property-color__input--readonly {
  margin: 3px 0 3px 7px;
}
.app-calendar .app-sidebar .property-color__color-preview,
.event-popover .event-popover__inner .property-color__color-preview {
  width: var(--default-clickable-area) !important;
  height: var(--default-clickable-area) !important;
  border-radius: var(--default-clickable-area);
}
.app-calendar .app-sidebar .property-text__icon,
.event-popover .event-popover__inner .property-text__icon {
  height: unset;
  align-self: flex-start;
  padding-top: 12px;
}
.app-calendar .app-sidebar .property-text--readonly .property-text__icon,
.event-popover .event-popover__inner .property-text--readonly .property-text__icon {
  padding-top: 0;
}
.app-calendar .app-sidebar .property-text__input--readonly,
.event-popover .event-popover__inner .property-text__input--readonly {
  line-height: 1;
  padding-top: calc(var(--default-line-height) / 2 - 0.5lh);
}
.app-calendar .app-sidebar .property-text__input textarea,
.event-popover .event-popover__inner .property-text__input textarea {
  resize: none;
}
.app-calendar .app-sidebar .property-select-multiple .property-select-multiple__input.property-select-multiple__input--readonly,
.event-popover .event-popover__inner .property-select-multiple .property-select-multiple__input.property-select-multiple__input--readonly {
  width: 100%;
}
.app-calendar .app-sidebar .property-select-multiple .property-select-multiple__input.property-select-multiple__input--readonly .property-select-multiple-colored-tag-wrapper,
.event-popover .event-popover__inner .property-select-multiple .property-select-multiple__input.property-select-multiple__input--readonly .property-select-multiple-colored-tag-wrapper {
  align-items: center;
  overflow: hidden;
  max-width: 100%;
  position: relative;
  padding: 3px 5px;
}
.app-calendar .app-sidebar .property-select-multiple .property-select-multiple__input.property-select-multiple__input--readonly .property-select-multiple-colored-tag-wrapper .multiselect__tag,
.event-popover .event-popover__inner .property-select-multiple .property-select-multiple__input.property-select-multiple__input--readonly .property-select-multiple-colored-tag-wrapper .multiselect__tag {
  line-height: 20px;
  padding: 1px 5px;
  background-image: none;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  max-width: fit-content;
  margin: 3px;
}
.app-calendar .app-sidebar .property-title__input, .app-calendar .app-sidebar .property-title input,
.event-popover .event-popover__inner .property-title__input,
.event-popover .event-popover__inner .property-title input {
  font-weight: bold;
}
.app-calendar .app-sidebar .property-title__input__rtl, .app-calendar .app-sidebar .property-title input__rtl,
.event-popover .event-popover__inner .property-title__input__rtl,
.event-popover .event-popover__inner .property-title input__rtl {
  text-align: right;
}
.app-calendar .app-sidebar .property-title__input--readonly,
.event-popover .event-popover__inner .property-title__input--readonly {
  font-size: 18px;
}
.app-calendar .app-sidebar .property-title input,
.app-calendar .app-sidebar .property-title-time-picker input,
.event-popover .event-popover__inner .property-title input,
.event-popover .event-popover__inner .property-title-time-picker input {
  margin: 0;
}
.app-calendar .app-sidebar .resource-room-type,
.event-popover .event-popover__inner .resource-room-type {
  margin-bottom: 5px;
}

.event-popover .event-popover__inner .event-popover__response-buttons {
  margin-top: 8px;
  margin-bottom: 0;
}
.event-popover .event-popover__inner .property-text__icon,
.event-popover .event-popover__inner .property-title-time-picker__icon {
  margin: 0 !important;
}

.timezone-popover-wrapper .popover__inner {
  padding: 20px;
}
.timezone-popover-wrapper__title {
  margin-bottom: 8px;
}
.timezone-popover-wrapper__timezone-select {
  min-width: 200px;
}

.warning-text {
  padding: 5px;
}

.event-popover .v-popper__inner {
  overflow: unset !important;
}
.event-popover .event-popover__inner {
  text-align: left;
  max-width: 480px;
  width: 480px;
  padding: 5px 10px 10px 10px;
}
.event-popover .event-popover__inner .empty-content {
  margin-top: 0 !important;
  padding: 50px 0;
}
.event-popover .event-popover__inner .property-title-time-picker:not(.property-title-time-picker--readonly) {
  margin-bottom: 12px;
}
.event-popover .event-popover__inner .event-popover__invitees .avatar-participation-status__text {
  bottom: 22px;
}
.event-popover .event-popover__inner .event-popover__buttons {
  margin-top: 8px;
}
.event-popover .event-popover__inner .event-popover__top-actions {
  display: flex;
  gap: var(--default-grid-baseline);
  position: absolute !important;
  top: var(--default-grid-baseline) !important;
  z-index: 100 !important;
  opacity: 0.7 !important;
  border-radius: 22px !important;
  align-items: center;
  inset-inline-end: var(--default-grid-baseline) !important;
}
.event-popover .event-popover__inner .event-popover__top-actions .action-item.action-item--single {
  width: 44px !important;
  height: 44px !important;
}
.event-popover .event-popover__inner .popover-loading-indicator {
  width: 100%;
}
.event-popover .event-popover__inner .popover-loading-indicator__icon {
  margin: 0 auto;
  height: 62px;
  width: 62px;
  background-size: 62px;
}
.event-popover[x-out-of-boundaries] {
  margin-top: 75px;
}

.event-popover[x-placement^=bottom] .popover__arrow {
  border-bottom-color: var(--color-background-dark);
}

.calendar-picker-option {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.calendar-picker-option__color-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  margin-right: 8px;
  flex-basis: 12px;
  flex-shrink: 0;
}
.calendar-picker-option__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
}
.calendar-picker-option__avatar {
  flex-basis: 18px;
  flex-shrink: 0;
}

.property-select-multiple-colored-tag {
  width: 100%;
  display: flex;
  align-items: center;
}
.property-select-multiple-colored-tag__color-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  margin-right: 8px;
  flex-shrink: 0;
}
.property-select-multiple-colored-tag .icon {
  margin-left: 4px;
  scale: 0.8;
}

.resource-list-button-group,
.invitees-list-button-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.resource-list-button-group:not(:empty),
.invitees-list-button-group:not(:empty) {
  margin-top: 20px;
}

.vs__dropdown-option span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.resource-search-list-item,
.invitees-search-list-item {
  display: flex;
  align-items: center;
  width: 100%;
  text-align: start;
  padding-inline-end: 32px;
}
.resource-search-list-item__label,
.invitees-search-list-item__label {
  width: 100%;
  padding: 0 8px;
}
.resource-search-list-item__label__availability,
.invitees-search-list-item__label__availability {
  color: var(--color-text-maxcontrast);
}
.resource-search-list-item__label div,
.invitees-search-list-item__label div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.resource-search-list-item__label div:nth-child(1),
.invitees-search-list-item__label div:nth-child(1) {
  color: var(--color-main-text);
}
.resource-search-list-item__label div:nth-child(2),
.invitees-search-list-item__label div:nth-child(2) {
  color: var(--color-text-lighter);
  line-height: 1;
}

.resource-search__multiselect,
.invitees-search__multiselect {
  width: 100%;
}

/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
#app-settings .settings-fieldset-interior-item {
  padding: 5px 0;
}
#app-settings .settings-fieldset-interior-item .action-checkbox {
  line-height: unset !important;
  white-space: unset !important;
}
#app-settings .settings-fieldset-interior-item .action-checkbox__label::before {
  margin: 0 6px 3px 3px !important;
  flex-shrink: 0;
}
#app-settings .settings-fieldset-interior-item .action-button {
  min-height: unset !important;
}
#app-settings .settings-fieldset-interior-item .action-button__icon {
  margin: 0 6px 3px 3px !important;
  height: 14px !important;
  width: 14px !important;
  background-position: unset !important;
}
#app-settings .settings-fieldset-interior-item .action-button__longtext {
  width: unset !important;
  padding: 0 !important;
}
#app-settings .settings-fieldset-interior-item--slotDuration, #app-settings .settings-fieldset-interior-item--defaultReminder {
  display: table;
}
#app-settings .settings-fieldset-interior-item--slotDuration label, #app-settings .settings-fieldset-interior-item--defaultReminder label {
  display: block;
}
#app-settings .settings-fieldset-interior-item--slotDuration .multiselect, #app-settings .settings-fieldset-interior-item--defaultReminder .multiselect {
  display: block;
}
#app-settings .settings-fieldset-interior-item--timezone, #app-settings .settings-fieldset-interior-item--default-calendar {
  width: 100%;
}
#app-settings .settings-fieldset-interior-item--timezone .multiselect, #app-settings .settings-fieldset-interior-item--default-calendar .multiselect {
  width: 100%;
}

@media screen and (max-width: 800px) {
  .shortcut-overview-modal .modal-container .shortcut-section {
    width: 100%;
  }
}
/*!
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.appointment-config-modal {
  padding: 2vw;
}
.appointment-config-modal__form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.appointment-config-modal__form fieldset {
  padding: 20px 0;
}
.appointment-config-modal__form fieldset header {
  font-size: 16px;
  margin-bottom: 3px;
}
.appointment-config-modal__form .availability-select, .appointment-config-modal__form .calendar-select {
  display: flex;
  flex-direction: column;
}
.appointment-config-modal__form__row--wrapped {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 50px;
}
.appointment-config-modal__form__row--wrapped > div {
  flex: 1 200px;
}
.appointment-config-modal__form__row--local {
  display: flex;
  flex-direction: column;
}
.appointment-config-modal__form__row + .appointment-config-modal__form__row {
  margin-top: 10px;
}
.appointment-config-modal__form .multiselect__tags {
  height: unset !important;
  margin: 0 !important;
}
.appointment-config-modal__submit-button {
  margin-top: 20px;
}

.app-config-modal-confirmation .empty-content {
  margin-top: 0 !important;
  margin-bottom: 20px;
}
.app-config-modal-confirmation__buttons {
  display: flex;
  justify-content: center;
  gap: 0 10px;
}

/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.modal--scheduler {
  position: relative;
}
.modal--scheduler .fc-bgevent {
  opacity: 0.8;
}
.modal--scheduler .blocking-event-free-busy {
  border-color: var(--color-primary-element);
  border-style: solid;
  border-left-width: 2px;
  border-right-width: 2px;
  background-color: transparent !important;
  opacity: 0.7 !important;
  z-index: 2;
}
.modal--scheduler .blocking-event-free-busy.blocking-event-free-busy--first-row {
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  border-top-width: 2px;
}
.modal--scheduler .blocking-event-free-busy.blocking-event-free-busy--last-row {
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  border-bottom-width: 2px;
}
.modal--scheduler .loading-indicator {
  width: 100%;
  position: absolute;
  top: 0;
  height: 50px;
  margin-top: 75px;
}

.freebusy-caption {
  margin-top: 10px;
}
.freebusy-caption__calendar-user-types, .freebusy-caption__colors {
  width: 50%;
  display: flex;
}
.freebusy-caption__colors {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.freebusy-caption__colors .freebusy-caption-item {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
.freebusy-caption__colors .freebusy-caption-item__color {
  height: 1em;
  width: 2em;
  display: block;
  border: 1px solid var(--color-border-dark);
  opacity: 0.8;
}
.freebusy-caption__colors .freebusy-caption-item__label {
  margin-left: 5px;
}

/*!
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/** Override some FullCalendar CSS vars: */
.fc {
  --fc-small-font-size: 0.875em;
  --fc-page-bg-color: var(--color-main-background) !important;
  --fc-neutral-bg-color: var(--color-background-dark) !important;
  --fc-neutral-text-color: var(--color-text-lighter) !important;
  --fc-border-color: var(--color-border) !important;
  --fc-daygrid-event-dot-width: 10px !important;
  --fc-event-bg-color: var(--color-primary-element);
  --fc-event-border-color: var(--color-primary-element-text);
  --fc-event-text-color: var(--color-primary-element-text);
  --fc-event-selected-overlay-color: var(--color-box-shadow);
  --fc-event-resizer-thickness: 8px;
  --fc-event-resizer-dot-total-width: 8px;
  --fc-event-resizer-dot-border-width: 1px;
  --fc-non-business-color: var(--color-background-dark);
  --fc-bg-event-color: var(--color-primary-element);
  --fc-bg-event-opacity: 0.3;
  --fc-highlight-color: rgba(188, 232, 241, 0.3);
  --fc-today-bg-color: var(--color-main-background) !important;
  --fc-now-indicator-color: red;
  --fc-list-event-hover-bg-color: var(--color-background-hover) !important;
}

.fc {
  font-family: var(--font-face) !important;
}

.fc-timegrid-axis-frame,
.fc-timegrid-slot-label,
.fc-col-header-cell a {
  color: var(--color-text-lighter) !important;
}

.fc .fc-timegrid-slot-minor {
  border-top-style: none !important;
}

.fc-daygrid-day-top {
  justify-content: center;
}

.fc-state-highlight.fc-day-number,
.fc tbody tr,
.fc tbody tr:hover,
.fc tbody tr:focus {
  background: inherit !important;
}

.fc-day-today.fc-col-header-cell a, .fc-day-today.fc-col-header-cell span {
  padding: 2px 6px;
  font-weight: bold;
  background-color: var(--color-primary-element);
  color: var(--color-primary-element-text) !important;
  border-radius: var(--border-radius-small);
}
.fc-day-today .fc-event {
  box-shadow: 0px 0px 0px 1px var(--color-primary-element-light) !important;
  margin-top: 0px;
}
.fc-day-today .fc-daygrid-day-top .fc-daygrid-day-number {
  margin: 4px;
  width: 24px;
  height: 24px;
  text-align: center;
  font-weight: bold !important;
  padding: 0 !important;
  background: var(--color-primary-element);
  color: var(--color-primary-element-text);
  border-radius: var(--border-radius-small);
}

.fc-list-table td {
  white-space: normal;
  word-break: break-word;
}

.fc .fc-list-sticky .fc-list-day > * {
  z-index: 1;
}

.fc-list-table .fc-list-day-cushion {
  padding-left: calc(var(--default-clickable-area) + var(--default-grid-baseline) * 2);
}

.fc-timeGridWeek-view .fc-col-header-cell.fc-day-today,
.fc-timeGridWeek-view .fc-daygrid-day.fc-day-today,
.fc-timeGridWeek-view .fc-timegrid-col.fc-day-today,
.fc-dayGridMonth-view .fc-col-header-cell.fc-day-today,
.fc-dayGridMonth-view .fc-daygrid-day.fc-day-today,
.fc-dayGridMonth-view .fc-timegrid-col.fc-day-today {
  background-color: var(--color-primary-element-light) !important;
}

.fc-daygrid-day.fc-day.fc-day-other,
.fc .fc-daygrid-day.fc-day-today.fc-day-other {
  background-color: var(--color-background-dark) !important;
  border: 1px solid var(--color-background-darker);
}
.fc-daygrid-day.fc-day.fc-day-other .fc-daygrid-day-top,
.fc .fc-daygrid-day.fc-day-today.fc-day-other .fc-daygrid-day-top {
  opacity: 0.6;
}

.fc-event {
  padding-left: 3px;
  border-width: 2px;
}
.fc-event.fc-event-nc-task-completed, .fc-event.fc-event-nc-tentative, .fc-event.fc-event-past, .fc-event.fc-event-nc-cancelled {
  opacity: 0.5;
}
.fc-event.fc-event-nc-task-completed .fc-event-title,
.fc-event.fc-event-nc-task-completed .fc-list-event-title, .fc-event.fc-event-nc-cancelled .fc-event-title,
.fc-event.fc-event-nc-cancelled .fc-list-event-title {
  text-decoration: line-through !important;
}
.fc-event .fc-event-title {
  text-overflow: ellipsis;
  font-weight: 700;
}
.fc-event .fc-event-nc-alarms .icon-event-reminder {
  background-color: inherit;
  background-position: right;
  position: absolute;
  top: 0;
  right: 0;
}
.fc-event .fc-event-nc-alarms .icon-event-reminder--light {
  background-image: var(--icon-calendar-reminder-fffffe);
}
.fc-event .fc-event-nc-alarms .icon-event-reminder--dark {
  background-image: var(--icon-calendar-reminder-000001);
}
.fc-event .fc-event-title-container {
  display: flex;
  align-content: center;
}
.fc-event .fc-event-title-container .fc-event-title-checkbox {
  margin: 4px 4px 0 0;
  line-height: 1;
}
.fc-event .fc-list-event-checkbox {
  margin: 2px 4px 0 -2px;
  line-height: 1;
}
.fc-event .fc-daygrid-event-checkbox {
  margin: 2px 4px 0 4px;
  line-height: 1;
}
.fc-event .fc-list-event-location span,
.fc-event .fc-list-event-description span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  max-width: 25vw;
}
.fc-event svg {
  margin-right: 2px;
}
@media only screen and (max-width: 767px) {
  .fc-event .fc-list-event-location,
  .fc-event .fc-list-event-description {
    display: none;
  }
}

.fc-list-empty .fc-list-empty-cushion {
  display: none;
}
.fc-list-empty .empty-content {
  margin-top: 0 !important;
}

.fc-col-header-cell {
  word-break: break-word;
  white-space: normal;
}

.fc-timeGridWeek-view .fc-daygrid-more-link {
  word-break: break-all;
  white-space: normal;
}
.fc-timeGridWeek-view .fc-event-main {
  flex-wrap: wrap;
}

.fc-timegrid-col-events {
  margin: 0 !important;
}

.fc-v-event.fc-timegrid-event-short {
  min-height: 2em;
}
.fc-v-event .fc-event-title {
  white-space: initial;
}

.fc-dayGridMonth-view .fc-daygrid-more-link {
  word-break: break-word;
  white-space: normal;
}
.fc-dayGridMonth-view .fc-daygrid-day-frame {
  min-height: 150px !important;
}

.fc-daygrid-day-events {
  position: relative !important;
}

.fc-col-header-cell {
  padding-top: 10px !important;
}

.fc-timegrid-axis-cushion {
  margin-top: 44px;
}

.fc-timegrid-axis.fc-scrollgrid-shrink {
  height: 65px;
}

.fc-timegrid-event-harness, .fc-timegrid-event {
  margin-bottom: 0;
}

.fc-timeGridDay-view .fc-event, .fc-timeGridWeek-view .fc-event {
  margin-right: 1vw;
}
.fc-timeGridDay-view .fc-event-mirror, .fc-timeGridWeek-view .fc-event-mirror {
  border: none !important;
}
.fc-timeGridDay-view .fc-highlight, .fc-timeGridWeek-view .fc-highlight {
  background: none !important;
}

.fc-timeGridDay-view .fc-event {
  margin-right: 2vw;
}

/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.toast-calendar-multiline {
  white-space: pre-wrap;
}

.content.app-calendar > div.app-content {
  overflow-x: hidden;
}

.app-navigation-spacer {
  list-style-type: none;
}

/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.import-modal .modal-container {
  padding: 24px !important;
  min-width: 50%;
  overflow: visible !important;
}
.import-modal .modal-container .import-modal__title,
.import-modal .modal-container .import-modal__subtitle {
  text-align: center;
}
.import-modal .modal-container .import-modal__actions {
  display: flex;
  gap: 5px;
}
.import-modal .modal-container .import-modal-file-item {
  display: flex;
  padding-top: 10px;
}
.import-modal .modal-container .import-modal-file-item--header {
  font-weight: bold;
}
.import-modal .modal-container .import-modal-file-item__filename {
  flex: 2 1 0;
}
.import-modal .modal-container .import-modal-file-item__calendar-select {
  flex: 1 1 0;
}

/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
@media print {
  .app-navigation {
    display: none;
  }
}
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
#emptycontent-container #emptycontent {
  color: #a9a9a9 !important;
}

.content.app-calendar.app-calendar-public-embedded {
  flex-direction: column;
}
.content.app-calendar.app-calendar-public-embedded #embed-header {
  height: 50px;
  width: 100%;
  padding: calc(var(--default-grid-baseline) * 2);
  box-sizing: border-box;
  background-color: var(--color-main-background);
  border-bottom: 1px solid var(--color-border);
  overflow: visible;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content.app-calendar.app-calendar-public-embedded #embed-header .embed-header__date-section,
.content.app-calendar.app-calendar-public-embedded #embed-header .embed-header__share-section {
  display: flex;
  gap: 5px;
}
.content.app-calendar.app-calendar-public-embedded #embed-header .view-button-section .button {
  min-width: 75px;
}
.content.app-calendar.app-calendar-public-embedded #embed-header .datepicker-button-section__datepicker-label {
  min-width: 150px;
}
.content.app-calendar.app-calendar-public-embedded #embed-header .datepicker-button-section button,
.content.app-calendar.app-calendar-public-embedded #embed-header .today-button-section button,
.content.app-calendar.app-calendar-public-embedded #embed-header .view-button-section button {
  margin: 0;
}
.content.app-calendar.app-calendar-public-embedded .app-content {
  flex-basis: auto;
}

#body-public input#initial-state-calendar-is_embed ~ header#header {
  display: none;
}
#body-public .app-calendar-public + footer {
  border-radius: 0 0 var(--border-radius-large) var(--border-radius-large);
}
#body-public .app-calendar-public .app-content {
  height: calc(100% - 65px) !important;
}

/*!
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
.property-text__input--linkify {
  flex-basis: min-content;
}

.linkify-links {
  border: 2px solid var(--color-border-maxcontrast);
  border-radius: var(--border-radius-large);
  cursor: text;
  width: 100% !important;
  box-sizing: border-box;
  padding: 12px;
  white-space: pre-line;
  overflow: auto;
  line-height: normal;
  word-break: break-word;
  display: inline-block;
  vertical-align: top;
  max-height: 16em;
  max-height: calc(100vh - 500px);
}
.linkify-links a.linkified {
  text-decoration: underline;
  margin: 0;
}
.linkify-links a.linkified::after {
  content: " ↗";
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/escape-html/index.js":
/*!*******************************************!*\
  !*** ./node_modules/escape-html/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


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

/***/ "./css/calendar.scss":
/*!***************************!*\
  !*** ./css/calendar.scss ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./calendar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-2.use[3]!./css/calendar.scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("301f1732", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/@nextcloud/auth/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/@nextcloud/auth/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCSPNonce: () => (/* binding */ getCSPNonce),
/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),
/* harmony export */   getGuestNickname: () => (/* binding */ getGuestNickname),
/* harmony export */   getGuestUser: () => (/* binding */ getGuestUser),
/* harmony export */   getRequestToken: () => (/* binding */ getRequestToken),
/* harmony export */   onRequestTokenUpdate: () => (/* binding */ onRequestTokenUpdate),
/* harmony export */   setGuestNickname: () => (/* binding */ setGuestNickname)
/* harmony export */ });
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/browser-storage */ "./node_modules/@nextcloud/browser-storage/dist/index.js");


let token;
const observers = [];
function getRequestToken() {
  if (token === void 0) {
    token = document.head.dataset.requesttoken ?? null;
  }
  return token;
}
function onRequestTokenUpdate(observer) {
  observers.push(observer);
}
(0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)("csrf-token-update", (e) => {
  token = e.token;
  observers.forEach((observer) => {
    try {
      observer(token);
    } catch (e2) {
      console.error("Error updating CSRF token observer", e2);
    }
  });
});
function getCSPNonce() {
  const meta = document?.querySelector('meta[name="csp-nonce"]');
  if (!meta) {
    const token2 = getRequestToken();
    return token2 ? btoa(token2) : void 0;
  }
  return meta.nonce;
}
const browserStorage = (0,_nextcloud_browser_storage__WEBPACK_IMPORTED_MODULE_1__.getBuilder)("public").persist().build();
class GuestUser {
  _displayName;
  uid;
  isAdmin;
  constructor() {
    if (!browserStorage.getItem("guestUid")) {
      browserStorage.setItem("guestUid", self.crypto.randomUUID());
    }
    this._displayName = browserStorage.getItem("guestNickname") || "";
    this.uid = browserStorage.getItem("guestUid") || self.crypto.randomUUID();
    this.isAdmin = false;
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.subscribe)("user:info:changed", (guest) => {
      this._displayName = guest.displayName;
      browserStorage.setItem("guestNickname", guest.displayName || "");
    });
  }
  get displayName() {
    return this._displayName;
  }
  set displayName(displayName) {
    this._displayName = displayName;
    browserStorage.setItem("guestNickname", displayName);
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_0__.emit)("user:info:changed", this);
  }
}
let currentUser$1;
function getGuestUser() {
  if (!currentUser$1) {
    currentUser$1 = new GuestUser();
  }
  return currentUser$1;
}
function getGuestNickname() {
  return getGuestUser()?.displayName || null;
}
function setGuestNickname(nickname) {
  if (!nickname || nickname.trim().length === 0) {
    throw new Error("Nickname cannot be empty");
  }
  getGuestUser().displayName = nickname;
}
let currentUser;
const getAttribute = (el, attribute) => {
  if (el) {
    return el.getAttribute(attribute);
  }
  return null;
};
function getCurrentUser() {
  if (currentUser !== void 0) {
    return currentUser;
  }
  const head = document?.getElementsByTagName("head")[0];
  if (!head) {
    return null;
  }
  const uid = getAttribute(head, "data-user");
  if (uid === null) {
    currentUser = null;
    return currentUser;
  }
  currentUser = {
    uid,
    displayName: getAttribute(head, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  };
  return currentUser;
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@nextcloud/event-bus/dist/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@nextcloud/event-bus/dist/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProxyBus: () => (/* binding */ ProxyBus),
/* harmony export */   SimpleBus: () => (/* binding */ SimpleBus),
/* harmony export */   emit: () => (/* binding */ emit),
/* harmony export */   subscribe: () => (/* binding */ subscribe),
/* harmony export */   unsubscribe: () => (/* binding */ unsubscribe)
/* harmony export */ });
/* harmony import */ var semver_functions_valid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semver/functions/valid.js */ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/valid.js");
/* harmony import */ var semver_functions_major_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semver/functions/major.js */ "./node_modules/@nextcloud/event-bus/node_modules/semver/functions/major.js");


class ProxyBus {
  bus;
  constructor(bus2) {
    if (typeof bus2.getVersion !== "function" || !semver_functions_valid_js__WEBPACK_IMPORTED_MODULE_0__(bus2.getVersion())) {
      console.warn("Proxying an event bus with an unknown or invalid version");
    } else if (semver_functions_major_js__WEBPACK_IMPORTED_MODULE_1__(bus2.getVersion()) !== semver_functions_major_js__WEBPACK_IMPORTED_MODULE_1__(this.getVersion())) {
      console.warn(
        "Proxying an event bus of version " + bus2.getVersion() + " with " + this.getVersion()
      );
    }
    this.bus = bus2;
  }
  getVersion() {
    return "3.3.2";
  }
  subscribe(name, handler) {
    this.bus.subscribe(name, handler);
  }
  unsubscribe(name, handler) {
    this.bus.unsubscribe(name, handler);
  }
  emit(name, ...event) {
    this.bus.emit(name, ...event);
  }
}
class SimpleBus {
  handlers = /* @__PURE__ */ new Map();
  getVersion() {
    return "3.3.2";
  }
  subscribe(name, handler) {
    this.handlers.set(
      name,
      (this.handlers.get(name) || []).concat(
        handler
      )
    );
  }
  unsubscribe(name, handler) {
    this.handlers.set(
      name,
      (this.handlers.get(name) || []).filter((h) => h !== handler)
    );
  }
  emit(name, ...event) {
    const handlers = this.handlers.get(name) || [];
    handlers.forEach((h) => {
      try {
        ;
        h(event[0]);
      } catch (e) {
        console.error("could not invoke event listener", e);
      }
    });
  }
}
let bus = null;
function getBus() {
  if (bus !== null) {
    return bus;
  }
  if (typeof window === "undefined") {
    return new Proxy({}, {
      get: () => {
        return () => console.error(
          "Window not available, EventBus can not be established!"
        );
      }
    });
  }
  if (window.OC?._eventBus && typeof window._nc_event_bus === "undefined") {
    console.warn(
      "found old event bus instance at OC._eventBus. Update your version!"
    );
    window._nc_event_bus = window.OC._eventBus;
  }
  if (typeof window?._nc_event_bus !== "undefined") {
    bus = new ProxyBus(window._nc_event_bus);
  } else {
    bus = window._nc_event_bus = new SimpleBus();
  }
  return bus;
}
function subscribe(name, handler) {
  getBus().subscribe(name, handler);
}
function unsubscribe(name, handler) {
  getBus().unsubscribe(name, handler);
}
function emit(name, ...event) {
  getBus().emit(name, ...event);
}



/***/ }),

/***/ "./node_modules/@nextcloud/l10n/dist/chunks/translation-DUYoTdjY.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@nextcloud/l10n/dist/chunks/translation-DUYoTdjY.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getLanguage),
/* harmony export */   b: () => (/* binding */ getLocale),
/* harmony export */   c: () => (/* binding */ translatePlural),
/* harmony export */   d: () => (/* binding */ getPlural),
/* harmony export */   g: () => (/* binding */ getCanonicalLocale),
/* harmony export */   i: () => (/* binding */ isRTL),
/* harmony export */   l: () => (/* binding */ loadTranslations),
/* harmony export */   r: () => (/* binding */ register),
/* harmony export */   t: () => (/* binding */ translate),
/* harmony export */   u: () => (/* binding */ unregister)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.es.mjs");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");



/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
const environmentLocale = Intl.DateTimeFormat().resolvedOptions().locale;
function getLocale() {
  return document.documentElement.dataset.locale || environmentLocale.replaceAll(/-/g, "_");
}
function getCanonicalLocale() {
  return getLocale().replaceAll(/_/g, "-");
}
function getLanguage() {
  return document.documentElement.lang || navigator.language;
}
function isRTL(language) {
  const languageCode = language || getLanguage();
  const rtlLanguages = [
    /* eslint-disable no-multi-spaces */
    "ae",
    // Avestan
    "ar",
    // 'العربية', Arabic
    "arc",
    // Aramaic
    "arz",
    // 'مصرى', Egyptian
    "bcc",
    // 'بلوچی مکرانی', Southern Balochi
    "bqi",
    // 'بختياري', Bakthiari
    "ckb",
    // 'Soranî / کوردی', Sorani
    "dv",
    // Dhivehi
    "fa",
    // 'فارسی', Persian
    "glk",
    // 'گیلکی', Gilaki
    "ha",
    // 'هَوُسَ', Hausa
    "he",
    // 'עברית', Hebrew
    "khw",
    // 'کھوار', Khowar
    "ks",
    // 'कॉशुर / کٲشُر', Kashmiri
    "ku",
    // 'Kurdî / كوردی', Kurdish
    "mzn",
    // 'مازِرونی', Mazanderani
    "nqo",
    // 'ߒߞߏ', N’Ko
    "pnb",
    // 'پنجابی', Western Punjabi
    "ps",
    // 'پښتو', Pashto,
    "sd",
    // 'سنڌي', Sindhi
    "ug",
    // 'Uyghurche / ئۇيغۇرچە', Uyghur
    "ur",
    // 'اردو', Urdu
    "ur-PK",
    // 'اردو', Urdu (nextcloud BCP47 variant)
    "uz-AF",
    // 'اوزبیکی', Uzbek Afghan
    "yi"
    // 'ייִדיש', Yiddish
    /* eslint-enable no-multi-spaces */
  ];
  return rtlLanguages.includes(languageCode);
}
/*!
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function hasAppTranslations(appId) {
  return window._oc_l10n_registry_translations?.[appId] !== void 0 && window._oc_l10n_registry_plural_functions?.[appId] !== void 0;
}
function registerAppTranslations(appId, translations, pluralFunction) {
  if (appId === "__proto__" || appId === "constructor" || appId === "prototype") {
    throw new Error("Invalid appId");
  }
  window._oc_l10n_registry_translations = Object.assign(
    window._oc_l10n_registry_translations || {},
    {
      [appId]: Object.assign(window._oc_l10n_registry_translations?.[appId] || {}, translations)
    }
  );
  window._oc_l10n_registry_plural_functions = Object.assign(
    window._oc_l10n_registry_plural_functions || {},
    {
      [appId]: pluralFunction
    }
  );
}
function unregisterAppTranslations(appId) {
  delete window._oc_l10n_registry_translations?.[appId];
  delete window._oc_l10n_registry_plural_functions?.[appId];
}
function getAppTranslations(appId) {
  return {
    translations: window._oc_l10n_registry_translations?.[appId] ?? {},
    pluralFunction: window._oc_l10n_registry_plural_functions?.[appId] ?? ((number) => number)
  };
}
/*!
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function translate(app, text, placeholdersOrNumber, optionsOrNumber, options) {
  const vars = typeof placeholdersOrNumber === "object" ? placeholdersOrNumber : void 0;
  const number = typeof optionsOrNumber === "number" ? optionsOrNumber : typeof placeholdersOrNumber === "number" ? placeholdersOrNumber : void 0;
  const allOptions = {
    // defaults
    escape: true,
    sanitize: true,
    // overwrite with user config
    ...typeof options === "object" ? options : typeof optionsOrNumber === "object" ? optionsOrNumber : {}
  };
  const identity = (value) => value;
  const optSanitize = allOptions.sanitize ? dompurify__WEBPACK_IMPORTED_MODULE_1__["default"].sanitize : identity;
  const optEscape = allOptions.escape ? escape_html__WEBPACK_IMPORTED_MODULE_2__ : identity;
  const isValidReplacement = (value) => typeof value === "string" || typeof value === "number";
  const _build = (text2, vars2, number2) => {
    return text2.replace(/%n/g, "" + number2).replace(/{([^{}]*)}/g, (match, key) => {
      if (vars2 === void 0 || !(key in vars2)) {
        return optEscape(match);
      }
      const replacement = vars2[key];
      if (isValidReplacement(replacement)) {
        return optEscape(`${replacement}`);
      } else if (typeof replacement === "object" && isValidReplacement(replacement.value)) {
        const escape = replacement.escape !== false ? escape_html__WEBPACK_IMPORTED_MODULE_2__ : identity;
        return escape(`${replacement.value}`);
      } else {
        return optEscape(match);
      }
    });
  };
  const bundle = options?.bundle ?? getAppTranslations(app);
  let translation = bundle.translations[text] || text;
  translation = Array.isArray(translation) ? translation[0] : translation;
  if (typeof vars === "object" || number !== void 0) {
    return optSanitize(_build(
      translation,
      vars,
      number
    ));
  } else {
    return optSanitize(translation);
  }
}
function translatePlural(app, textSingular, textPlural, number, vars, options) {
  const identifier = "_" + textSingular + "_::_" + textPlural + "_";
  const bundle = options?.bundle ?? getAppTranslations(app);
  const value = bundle.translations[identifier];
  if (typeof value !== "undefined") {
    const translation = value;
    if (Array.isArray(translation)) {
      const plural = bundle.pluralFunction(number);
      return translate(app, translation[plural], vars, number, options);
    }
  }
  if (number === 1) {
    return translate(app, textSingular, vars, number, options);
  } else {
    return translate(app, textPlural, vars, number, options);
  }
}
async function loadTranslations(appName, callback) {
  if (hasAppTranslations(appName) || getLanguage() === "en") {
    const bundle = getAppTranslations(appName);
    callback?.(bundle);
    return bundle;
  }
  let response;
  try {
    const url = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateFilePath)(appName, "l10n", getLanguage() + ".json");
    response = await fetch(url);
  } catch (error) {
    throw new Error("Network error");
  }
  if (response.ok) {
    try {
      const bundle = await response.json();
      if (typeof bundle.translations === "object") {
        register(appName, bundle.translations);
        callback?.(bundle);
        return bundle;
      }
    } catch (error) {
    }
    throw new Error("Invalid content of translation bundle");
  } else {
    throw new Error(response.statusText);
  }
}
function register(appName, bundle) {
  registerAppTranslations(appName, bundle, getPlural);
}
function unregister(appName) {
  return unregisterAppTranslations(appName);
}
function getPlural(number, language = getLanguage()) {
  if (language === "pt-BR") {
    language = "xbr";
  }
  if (language.length > 3) {
    language = language.substring(0, language.lastIndexOf("-"));
  }
  switch (language) {
    case "az":
    case "bo":
    case "dz":
    case "id":
    case "ja":
    case "jv":
    case "ka":
    case "km":
    case "kn":
    case "ko":
    case "ms":
    case "th":
    case "tr":
    case "vi":
    case "zh":
      return 0;
    case "af":
    case "bn":
    case "bg":
    case "ca":
    case "da":
    case "de":
    case "el":
    case "en":
    case "eo":
    case "es":
    case "et":
    case "eu":
    case "fa":
    case "fi":
    case "fo":
    case "fur":
    case "fy":
    case "gl":
    case "gu":
    case "ha":
    case "he":
    case "hu":
    case "is":
    case "it":
    case "ku":
    case "lb":
    case "ml":
    case "mn":
    case "mr":
    case "nah":
    case "nb":
    case "ne":
    case "nl":
    case "nn":
    case "no":
    case "oc":
    case "om":
    case "or":
    case "pa":
    case "pap":
    case "ps":
    case "pt":
    case "so":
    case "sq":
    case "sv":
    case "sw":
    case "ta":
    case "te":
    case "tk":
    case "ur":
    case "zu":
      return number === 1 ? 0 : 1;
    case "am":
    case "bh":
    case "fil":
    case "fr":
    case "gun":
    case "hi":
    case "hy":
    case "ln":
    case "mg":
    case "nso":
    case "xbr":
    case "ti":
    case "wa":
      return number === 0 || number === 1 ? 0 : 1;
    case "be":
    case "bs":
    case "hr":
    case "ru":
    case "sh":
    case "sr":
    case "uk":
      return number % 10 === 1 && number % 100 !== 11 ? 0 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) ? 1 : 2;
    case "cs":
    case "sk":
      return number === 1 ? 0 : number >= 2 && number <= 4 ? 1 : 2;
    case "ga":
      return number === 1 ? 0 : number === 2 ? 1 : 2;
    case "lt":
      return number % 10 === 1 && number % 100 !== 11 ? 0 : number % 10 >= 2 && (number % 100 < 10 || number % 100 >= 20) ? 1 : 2;
    case "sl":
      return number % 100 === 1 ? 0 : number % 100 === 2 ? 1 : number % 100 === 3 || number % 100 === 4 ? 2 : 3;
    case "mk":
      return number % 10 === 1 ? 0 : 1;
    case "mt":
      return number === 1 ? 0 : number === 0 || number % 100 > 1 && number % 100 < 11 ? 1 : number % 100 > 10 && number % 100 < 20 ? 2 : 3;
    case "lv":
      return number === 0 ? 0 : number % 10 === 1 && number % 100 !== 11 ? 1 : 2;
    case "pl":
      return number === 1 ? 0 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 12 || number % 100 > 14) ? 1 : 2;
    case "cy":
      return number === 1 ? 0 : number === 2 ? 1 : number === 8 || number === 11 ? 2 : 3;
    case "ro":
      return number === 1 ? 0 : number === 0 || number % 100 > 0 && number % 100 < 20 ? 1 : 2;
    case "ar":
      return number === 0 ? 0 : number === 1 ? 1 : number === 2 ? 2 : number % 100 >= 3 && number % 100 <= 10 ? 3 : number % 100 >= 11 && number % 100 <= 99 ? 4 : 5;
    default:
      return 0;
  }
}

//# sourceMappingURL=translation-DUYoTdjY.mjs.map


/***/ }),

/***/ "./node_modules/@nextcloud/l10n/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/@nextcloud/l10n/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelativeTime: () => (/* binding */ formatRelativeTime),
/* harmony export */   getCanonicalLocale: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   getDayNames: () => (/* binding */ getDayNames),
/* harmony export */   getDayNamesMin: () => (/* binding */ getDayNamesMin),
/* harmony export */   getDayNamesShort: () => (/* binding */ getDayNamesShort),
/* harmony export */   getFirstDay: () => (/* binding */ getFirstDay),
/* harmony export */   getLanguage: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   getLocale: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   getMonthNames: () => (/* binding */ getMonthNames),
/* harmony export */   getMonthNamesShort: () => (/* binding */ getMonthNamesShort),
/* harmony export */   getPlural: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   isRTL: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   loadTranslations: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   n: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   register: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   t: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   translate: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   translatePlural: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   unregister: () => (/* reexport safe */ _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/translation-DUYoTdjY.mjs */ "./node_modules/@nextcloud/l10n/dist/chunks/translation-DUYoTdjY.mjs");


/*!
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function getFirstDay() {
  if (typeof window.firstDay !== "undefined") {
    return window.firstDay;
  }
  const intl = new Intl.Locale((0,_chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.g)());
  const weekInfo = intl.getWeekInfo?.() ?? intl.weekInfo;
  if (weekInfo) {
    return weekInfo.firstDay % 7;
  }
  return 1;
}
function getDayNames() {
  if (typeof window.dayNames !== "undefined") {
    return window.dayNames;
  }
  const locale = (0,_chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return [
    (/* @__PURE__ */ new Date("1970-01-04T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "long" }),
    (/* @__PURE__ */ new Date("1970-01-05T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "long" }),
    (/* @__PURE__ */ new Date("1970-01-06T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "long" }),
    (/* @__PURE__ */ new Date("1970-01-07T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "long" }),
    (/* @__PURE__ */ new Date("1970-01-08T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "long" }),
    (/* @__PURE__ */ new Date("1970-01-09T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "long" }),
    (/* @__PURE__ */ new Date("1970-01-10T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "long" })
  ];
}
function getDayNamesShort() {
  if (typeof window.dayNamesShort !== "undefined") {
    return window.dayNamesShort;
  }
  const locale = (0,_chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return [
    (/* @__PURE__ */ new Date("1970-01-04T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "short" }),
    (/* @__PURE__ */ new Date("1970-01-05T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "short" }),
    (/* @__PURE__ */ new Date("1970-01-06T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "short" }),
    (/* @__PURE__ */ new Date("1970-01-07T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "short" }),
    (/* @__PURE__ */ new Date("1970-01-08T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "short" }),
    (/* @__PURE__ */ new Date("1970-01-09T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "short" }),
    (/* @__PURE__ */ new Date("1970-01-10T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "short" })
  ];
}
function getDayNamesMin() {
  if (typeof window.dayNamesMin !== "undefined") {
    return window.dayNamesMin;
  }
  const locale = (0,_chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return [
    (/* @__PURE__ */ new Date("1970-01-04T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "narrow" }),
    (/* @__PURE__ */ new Date("1970-01-05T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "narrow" }),
    (/* @__PURE__ */ new Date("1970-01-06T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "narrow" }),
    (/* @__PURE__ */ new Date("1970-01-07T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "narrow" }),
    (/* @__PURE__ */ new Date("1970-01-08T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "narrow" }),
    (/* @__PURE__ */ new Date("1970-01-09T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "narrow" }),
    (/* @__PURE__ */ new Date("1970-01-10T00:00:00.000Z")).toLocaleDateString(locale, { weekday: "narrow" })
  ];
}
function getMonthNames() {
  if (typeof window.monthNames !== "undefined") {
    return window.monthNames;
  }
  const locale = (0,_chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return [
    (/* @__PURE__ */ new Date("1970-01-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-02-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-03-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-04-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-05-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-06-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-07-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-08-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-09-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-10-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-11-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" }),
    (/* @__PURE__ */ new Date("1970-12-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "long" })
  ];
}
function getMonthNamesShort() {
  if (typeof window.monthNamesShort !== "undefined") {
    return window.monthNamesShort;
  }
  const locale = (0,_chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return [
    (/* @__PURE__ */ new Date("1970-01-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-02-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-03-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-04-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-05-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-06-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-07-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-08-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-09-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-10-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-11-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" }),
    (/* @__PURE__ */ new Date("1970-12-01T00:00:00.000Z")).toLocaleDateString(locale, { month: "short" })
  ];
}
/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
function formatRelativeTime(timestamp = Date.now(), opts = {}) {
  const options = {
    ignoreSeconds: false,
    language: (0,_chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.a)(),
    relativeTime: "long",
    ...opts
  };
  const date = new Date(timestamp);
  const formatter = new Intl.RelativeTimeFormat([options.language, (0,_chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()], { numeric: "auto", style: options.relativeTime });
  const diff = date.getTime() - Date.now();
  const seconds = diff / 1e3;
  if (Math.abs(seconds) < 59.5) {
    return options.ignoreSeconds || formatter.format(Math.round(seconds), "second");
  }
  const minutes = seconds / 60;
  if (Math.abs(minutes) <= 59) {
    return formatter.format(Math.round(minutes), "minute");
  }
  const hours = minutes / 60;
  if (Math.abs(hours) < 23.5) {
    return formatter.format(Math.round(hours), "hour");
  }
  const days = hours / 24;
  if (Math.abs(days) < 6.5) {
    return formatter.format(Math.round(days), "day");
  }
  if (Math.abs(days) < 27.5) {
    const weeks = days / 7;
    return formatter.format(Math.round(weeks), "week");
  }
  const months = days / 30;
  const format = Math.abs(months) < 11 ? { month: options.relativeTime, day: "numeric" } : { year: options.relativeTime === "narrow" ? "2-digit" : "numeric", month: options.relativeTime };
  const dateTimeFormatter = new Intl.DateTimeFormat([options.language, (0,_chunks_translation_DUYoTdjY_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()], format);
  return dateTimeFormatter.format(date);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@nextcloud/router/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@nextcloud/router/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateFilePath: () => (/* binding */ d),
/* harmony export */   generateOcsUrl: () => (/* binding */ v),
/* harmony export */   generateRemoteUrl: () => (/* binding */ U),
/* harmony export */   generateUrl: () => (/* binding */ _),
/* harmony export */   getAppRootUrl: () => (/* binding */ b),
/* harmony export */   getBaseUrl: () => (/* binding */ w),
/* harmony export */   getRootUrl: () => (/* binding */ f),
/* harmony export */   imagePath: () => (/* binding */ h),
/* harmony export */   linkTo: () => (/* binding */ R)
/* harmony export */ });
const R = (n, e) => d(n, "", e), g = (n) => "/remote.php/" + n, U = (n, e) => {
  var o;
  return ((o = e == null ? void 0 : e.baseURL) != null ? o : w()) + g(n);
}, v = (n, e, o) => {
  var c;
  const i = Object.assign({
    ocsVersion: 2
  }, o || {}).ocsVersion === 1 ? 1 : 2;
  return ((c = o == null ? void 0 : o.baseURL) != null ? c : w()) + "/ocs/v" + i + ".php" + u(n, e, o);
}, u = (n, e, o) => {
  const c = Object.assign({
    escape: !0
  }, o || {}), r = function(i, s) {
    return s = s || {}, i.replace(
      /{([^{}]*)}/g,
      function(l, t) {
        const a = s[t];
        return c.escape ? encodeURIComponent(typeof a == "string" || typeof a == "number" ? a.toString() : l) : typeof a == "string" || typeof a == "number" ? a.toString() : l;
      }
    );
  };
  return n.charAt(0) !== "/" && (n = "/" + n), r(n, e || {});
}, _ = (n, e, o) => {
  var c, r, i;
  const s = Object.assign({
    noRewrite: !1
  }, o || {}), l = (c = o == null ? void 0 : o.baseURL) != null ? c : f();
  return ((i = (r = window == null ? void 0 : window.OC) == null ? void 0 : r.config) == null ? void 0 : i.modRewriteWorking) === !0 && !s.noRewrite ? l + u(n, e, o) : l + "/index.php" + u(n, e, o);
}, h = (n, e) => e.includes(".") ? d(n, "img", e) : d(n, "img", "".concat(e, ".svg")), d = (n, e, o) => {
  var c, r, i;
  const s = (i = (r = (c = window == null ? void 0 : window.OC) == null ? void 0 : c.coreApps) == null ? void 0 : r.includes(n)) != null ? i : !1, l = o.slice(-3) === "php";
  let t = f();
  return l && !s ? (t += "/index.php/apps/".concat(n), e && (t += "/".concat(encodeURI(e))), o !== "index.php" && (t += "/".concat(o))) : !l && !s ? (t = b(n), e && (t += "/".concat(e, "/")), t.at(-1) !== "/" && (t += "/"), t += o) : ((n === "settings" || n === "core" || n === "search") && e === "ajax" && (t += "/index.php"), n && (t += "/".concat(n)), e && (t += "/".concat(e)), t += "/".concat(o)), t;
}, w = () => window.location.protocol + "//" + window.location.host + f();
function f() {
  let n = window._oc_webroot;
  if (typeof n > "u") {
    n = location.pathname;
    const e = n.indexOf("/index.php/");
    if (e !== -1)
      n = n.slice(0, e);
    else {
      const o = n.indexOf("/", 1);
      n = n.slice(0, o > 0 ? o : void 0);
    }
  }
  return n;
}
function b(n) {
  var e, o;
  return (o = ((e = window._oc_appswebroots) != null ? e : {})[n]) != null ? o : "";
}



/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Functions/registerReference.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Functions/registerReference.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NcCustomPickerRenderResult: () => (/* reexport safe */ _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   destroyCustomPickerElement: () => (/* reexport safe */ _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   destroyWidget: () => (/* reexport safe */ _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   getCustomPickerElementSize: () => (/* reexport safe */ _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   isCustomPickerElementRegistered: () => (/* reexport safe */ _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   isWidgetRegistered: () => (/* reexport safe */ _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   registerCustomPickerElement: () => (/* reexport safe */ _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   registerWidget: () => (/* reexport safe */ _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   renderCustomPickerElement: () => (/* reexport safe */ _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   renderWidget: () => (/* reexport safe */ _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _chunks_index_56SXuvlv_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/index-56SXuvlv.mjs */ "./node_modules/@nextcloud/vue/dist/chunks/index-56SXuvlv.mjs");


//# sourceMappingURL=registerReference.mjs.map


/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/chunks/index-56SXuvlv.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/chunks/index-56SXuvlv.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ NcCustomPickerRenderResult),
/* harmony export */   a: () => (/* binding */ renderWidget),
/* harmony export */   b: () => (/* binding */ registerCustomPickerElement),
/* harmony export */   c: () => (/* binding */ renderCustomPickerElement),
/* harmony export */   d: () => (/* binding */ isCustomPickerElementRegistered),
/* harmony export */   e: () => (/* binding */ destroyWidget),
/* harmony export */   f: () => (/* binding */ hasFullWidth),
/* harmony export */   g: () => (/* binding */ destroyCustomPickerElement),
/* harmony export */   h: () => (/* binding */ hasInteractiveView),
/* harmony export */   i: () => (/* binding */ isWidgetRegistered),
/* harmony export */   j: () => (/* binding */ getCustomPickerElementSize),
/* harmony export */   r: () => (/* binding */ registerWidget)
/* harmony export */ });
if (!window._vue_richtext_widgets) {
  window._vue_richtext_widgets = {};
}
const isWidgetRegistered = (id) => {
  return !!window._vue_richtext_widgets[id];
};
const hasInteractiveView = (id) => {
  return !!window._vue_richtext_widgets[id]?.hasInteractiveView;
};
const hasFullWidth = (id) => {
  return !!window._vue_richtext_widgets[id]?.fullWidth;
};
const registerWidget = (id, callback, onDestroy = (el) => {
}, props) => {
  const propsWithDefaults = {
    hasInteractiveView: true,
    fullWidth: false,
    ...props
  };
  if (window._vue_richtext_widgets[id]) {
    console.error("Widget for id " + id + " already registered");
    return;
  }
  window._vue_richtext_widgets[id] = {
    id,
    callback,
    onDestroy,
    ...propsWithDefaults
  };
};
const renderWidget = (el, { richObjectType, richObject, accessible, interactive }) => {
  if (richObjectType === "open-graph") {
    return;
  }
  if (!window._vue_richtext_widgets[richObjectType]) {
    console.error("Widget for rich object type " + richObjectType + " not registered");
    return;
  }
  window._vue_richtext_widgets[richObjectType].callback(el, { richObjectType, richObject, accessible, interactive });
};
const destroyWidget = (richObjectType, el) => {
  if (richObjectType === "open-graph") {
    return;
  }
  if (!window._vue_richtext_widgets[richObjectType]) {
    return;
  }
  window._vue_richtext_widgets[richObjectType].onDestroy(el);
};
window._registerWidget = (id, callback, onDestroy, props) => {
  registerWidget(id, callback, onDestroy, props);
};
if (!window._vue_richtext_custom_picker_elements) {
  window._vue_richtext_custom_picker_elements = {};
}
class NcCustomPickerRenderResult {
  /**
   * @param {HTMLElement} element The HTML element
   * @param {object} object The object
   */
  constructor(element, object) {
    this.element = element;
    this.object = object;
  }
}
const isCustomPickerElementRegistered = (id) => {
  return !!window._vue_richtext_custom_picker_elements[id];
};
const getCustomPickerElementSize = (id) => {
  const size = window._vue_richtext_custom_picker_elements[id]?.size;
  if (["small", "normal", "large", "full"].includes(size)) {
    return size;
  }
  return null;
};
const registerCustomPickerElement = (id, callback, onDestroy = (el) => {
}, size = "large") => {
  if (window._vue_richtext_custom_picker_elements[id]) {
    console.error("Custom reference picker element for id " + id + " already registered");
    return;
  }
  window._vue_richtext_custom_picker_elements[id] = {
    id,
    callback,
    onDestroy,
    size
  };
};
const renderCustomPickerElement = (el, { providerId, accessible }) => {
  if (!window._vue_richtext_custom_picker_elements[providerId]) {
    console.error("Custom reference picker element for reference provider ID " + providerId + " not registered");
    return;
  }
  return window._vue_richtext_custom_picker_elements[providerId].callback(el, { providerId, accessible });
};
const destroyCustomPickerElement = (providerId, el, renderResult) => {
  if (!window._vue_richtext_custom_picker_elements[providerId]) {
    return;
  }
  window._vue_richtext_custom_picker_elements[providerId].onDestroy(el, renderResult);
};
window._registerCustomPickerElement = registerCustomPickerElement;

//# sourceMappingURL=index-56SXuvlv.mjs.map


/***/ }),

/***/ "./node_modules/dompurify/dist/purify.es.mjs":
/*!***************************************************!*\
  !*** ./node_modules/dompurify/dist/purify.es.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ purify)
/* harmony export */ });
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */

const {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
let {
  freeze,
  seal,
  create
} = Object; // eslint-disable-line import/no-mutable-exports
let {
  apply,
  construct
} = typeof Reflect !== 'undefined' && Reflect;
if (!freeze) {
  freeze = function freeze(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal(x) {
    return x;
  };
}
if (!apply) {
  apply = function apply(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!construct) {
  construct = function construct(Func, args) {
    return new Func(...args);
  };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const arraySplice = unapply(Array.prototype.splice);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
/**
 * Creates a new function that calls the given function with a specified thisArg and arguments.
 *
 * @param func - The function to be wrapped and called.
 * @returns A new function that calls the given function with a specified thisArg and arguments.
 */
function unapply(func) {
  return function (thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
/**
 * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
 *
 * @param func - The constructor function to be wrapped and called.
 * @returns A new function that constructs an instance of the given constructor function with the provided arguments.
 */
function unconstruct(func) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
/**
 * Add properties to a lookup table
 *
 * @param set - The set to which elements will be added.
 * @param array - The array containing elements to be added to the set.
 * @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
 * @returns The modified set with added elements.
 */
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    // Make 'in' and truthy checks like Boolean(set.constructor)
    // independent of any properties defined on Object.prototype.
    // Prevent prototype setters from intercepting set as a this value.
    setPrototypeOf(set, null);
  }
  let l = array.length;
  while (l--) {
    let element = array[l];
    if (typeof element === 'string') {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        // Config presets (e.g. tags.js, attrs.js) are immutable.
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
/**
 * Clean up an array to harden against CSPP
 *
 * @param array - The array to be cleaned.
 * @returns The cleaned version of the array
 */
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array, index);
    if (!isPropertyExist) {
      array[index] = null;
    }
  }
  return array;
}
/**
 * Shallow clone an object
 *
 * @param object - The object to be cloned.
 * @returns A new object that copies the original.
 */
function clone(object) {
  const newObject = create(null);
  for (const [property, value] of entries(object)) {
    const isPropertyExist = objectHasOwnProperty(object, property);
    if (isPropertyExist) {
      if (Array.isArray(value)) {
        newObject[property] = cleanArray(value);
      } else if (value && typeof value === 'object' && value.constructor === Object) {
        newObject[property] = clone(value);
      } else {
        newObject[property] = value;
      }
    }
  }
  return newObject;
}
/**
 * This method automatically checks if the prop is function or getter and behaves accordingly.
 *
 * @param object - The object to look up the getter function in its prototype chain.
 * @param prop - The property name for which to find the getter function.
 * @returns The getter function found in the prototype chain or a fallback function.
 */
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === 'function') {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}

const html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);
const svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
const svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);
// List of SVG elements that are disallowed by default.
// We still need to know them so that we can do namespace
// checks properly in case one wants to add them to
// allow-list.
const svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
const mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'mprescripts']);
// Similarly to SVG, we want to know all MathML elements,
// even those that we disallow by default.
const mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
const text = freeze(['#text']);

const html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'popover', 'popovertarget', 'popovertargetaction', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'wrap', 'xmlns', 'slot']);
const svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'amplitude', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'exponent', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'slope', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'tablevalues', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
const mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
const xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

// eslint-disable-next-line unicorn/better-regex
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm); // eslint-disable-line unicorn/better-regex
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/); // eslint-disable-line no-useless-escape
const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);

var EXPRESSIONS = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ARIA_ATTR: ARIA_ATTR,
  ATTR_WHITESPACE: ATTR_WHITESPACE,
  CUSTOM_ELEMENT: CUSTOM_ELEMENT,
  DATA_ATTR: DATA_ATTR,
  DOCTYPE_NAME: DOCTYPE_NAME,
  ERB_EXPR: ERB_EXPR,
  IS_ALLOWED_URI: IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
  MUSTACHE_EXPR: MUSTACHE_EXPR,
  TMPLIT_EXPR: TMPLIT_EXPR
});

/* eslint-disable @typescript-eslint/indent */
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
const NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12 // Deprecated
};
const getGlobal = function getGlobal() {
  return typeof window === 'undefined' ? null : window;
};
/**
 * Creates a no-op policy for internal use only.
 * Don't export this function outside this module!
 * @param trustedTypes The policy factory.
 * @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
 * @return The policy created (or null, if Trusted Types
 * are not supported or creating the policy failed).
 */
const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
    return null;
  }
  // Allow the callers to control the unique policy name
  // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
  // Policy creation with duplicate names throws in Trusted Types.
  let suffix = null;
  const ATTR_NAME = 'data-tt-policy-suffix';
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html) {
        return html;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_) {
    // Policy creation failed (most likely another DOMPurify script has
    // already run). Skip creating the policy, as this will only cause errors
    // if TT are enforced.
    console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
    return null;
  }
};
const _createHooksMap = function _createHooksMap() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function createDOMPurify() {
  let window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
  const DOMPurify = root => createDOMPurify(root);
  DOMPurify.version = '3.2.6';
  DOMPurify.removed = [];
  if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
    // Not running in a browser, provide a factory function
    // so that you can pass your own Window
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let {
    document
  } = window;
  const originalDocument = document;
  const currentScript = originalDocument.currentScript;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node,
    Element,
    NodeFilter,
    NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
  const remove = lookupGetter(ElementPrototype, 'remove');
  const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
  const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
  const getParentNode = lookupGetter(ElementPrototype, 'parentNode');
  // As per issue #47, the web-components registry is inherited by a
  // new document created via createHTMLDocument. As per the spec
  // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
  // a new empty registry is used when creating a template contents owner
  // document, so we use that as our parent document to ensure nothing
  // is inherited.
  if (typeof HTMLTemplateElement === 'function') {
    const template = document.createElement('template');
    if (template.content && template.content.ownerDocument) {
      document = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = '';
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document;
  const {
    importNode
  } = originalDocument;
  let hooks = _createHooksMap();
  /**
   * Expose whether this browser supports running the full DOMPurify.
   */
  DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
  const {
    MUSTACHE_EXPR,
    ERB_EXPR,
    TMPLIT_EXPR,
    DATA_ATTR,
    ARIA_ATTR,
    IS_SCRIPT_OR_DATA,
    ATTR_WHITESPACE,
    CUSTOM_ELEMENT
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */
  /* allowed element names */
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  /* Allowed attribute names */
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  /*
   * Configure how DOMPurify should handle custom elements and their attributes as well as customized built-in elements.
   * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
   * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
   * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
   */
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
  let FORBID_TAGS = null;
  /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
  let FORBID_ATTR = null;
  /* Decide if ARIA attributes are okay */
  let ALLOW_ARIA_ATTR = true;
  /* Decide if custom data attributes are okay */
  let ALLOW_DATA_ATTR = true;
  /* Decide if unknown protocols are okay */
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  /* Decide if self-closing tags in attributes are allowed.
   * Usually removed due to a mXSS issue in jQuery 3.0 */
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */
  let SAFE_FOR_TEMPLATES = false;
  /* Output should be safe even for XML used within HTML and alike.
   * This means, DOMPurify removes comments when containing risky content.
   */
  let SAFE_FOR_XML = true;
  /* Decide if document with <html>... should be returned */
  let WHOLE_DOCUMENT = false;
  /* Track whether config is already set on this instance of DOMPurify. */
  let SET_CONFIG = false;
  /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */
  let FORCE_BODY = false;
  /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
   * string (or a TrustedHTML object if Trusted Types are supported).
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */
  let RETURN_DOM = false;
  /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
   * string  (or a TrustedHTML object if Trusted Types are supported) */
  let RETURN_DOM_FRAGMENT = false;
  /* Try to return a Trusted Type object instead of a string, return a string in
   * case Trusted Types are not supported  */
  let RETURN_TRUSTED_TYPE = false;
  /* Output should be free from DOM clobbering attacks?
   * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
   */
  let SANITIZE_DOM = true;
  /* Achieve full DOM Clobbering protection by isolating the namespace of named
   * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
   *
   * HTML/DOM spec rules that enable DOM Clobbering:
   *   - Named Access on Window (§7.3.3)
   *   - DOM Tree Accessors (§3.1.5)
   *   - Form Element Parent-Child Relations (§4.10.3)
   *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
   *   - HTMLCollection (§4.2.10.2)
   *
   * Namespace isolation is implemented by prefixing `id` and `name` attributes
   * with a constant string, i.e., `user-content-`
   */
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
  /* Keep element content when removing element? */
  let KEEP_CONTENT = true;
  /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */
  let IN_PLACE = false;
  /* Allow usage of profiles like html, svg and mathMl */
  let USE_PROFILES = {};
  /* Tags to ignore content of when KEEP_CONTENT is true */
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
  /* Tags that are safe for data: URIs */
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
  /* Attributes safe for values like "javascript:" */
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
  const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
  const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
  /* Document namespace */
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  /* Allowed XHTML+XML namespaces */
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
  let HTML_INTEGRATION_POINTS = addToSet({}, ['annotation-xml']);
  // Certain elements are allowed in both SVG and HTML
  // namespace. We need to specify them explicitly
  // so that they don't get erroneously deleted from
  // HTML namespace.
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
  /* Parsing of strict XHTML documents */
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
  const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
  let transformCaseFunc = null;
  /* Keep a reference to config to pass to hooks */
  let CONFIG = null;
  /* Ideally, do not touch anything below this line */
  /* ______________________________________________ */
  const formElement = document.createElement('form');
  const isRegexOrFunction = function isRegexOrFunction(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  /**
   * _parseConfig
   *
   * @param cfg optional config literal
   */
  // eslint-disable-next-line complexity
  const _parseConfig = function _parseConfig() {
    let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    /* Shield configuration object from tampering */
    if (!cfg || typeof cfg !== 'object') {
      cfg = {};
    }
    /* Shield configuration object from prototype pollution */
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE =
    // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
    transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
    /* Set configuration parameters */
    ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
    FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
    USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
    RETURN_DOM = cfg.RETURN_DOM || false; // Default false
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
    FORCE_BODY = cfg.FORCE_BODY || false; // Default false
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
    IN_PLACE = cfg.IN_PLACE || false; // Default false
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
    HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    /* Parse profile info */
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    /* Merge configuration parameters */
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    /* Add #text in case KEEP_CONTENT is set to true */
    if (KEEP_CONTENT) {
      ALLOWED_TAGS['#text'] = true;
    }
    /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
    }
    /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ['tbody']);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      // Overwrite existing TrustedTypes policy.
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      // Sign local variables required by `sanitize`.
      emptyHTML = trustedTypesPolicy.createHTML('');
    } else {
      // Uninitialized policy, attempt to initialize the internal dompurify policy.
      if (trustedTypesPolicy === undefined) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      // If creating the internal policy succeeded sign internal variables.
      if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
        emptyHTML = trustedTypesPolicy.createHTML('');
      }
    }
    // Prevent further manipulation of configuration.
    // Not available in IE8, Safari 5, etc.
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  /* Keep track of all possible SVG and MathML tags
   * so that we can perform the namespace checks
   * correctly. */
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  /**
   * @param element a DOM element whose namespace is being checked
   * @returns Return false if the element has a
   *  namespace that a spec-compliant parser would never
   *  return. Return true otherwise.
   */
  const _checkValidNamespace = function _checkValidNamespace(element) {
    let parent = getParentNode(element);
    // In JSDOM, if we're inside shadow DOM, then parentNode
    // can be null. We just simulate parent in this case.
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: 'template'
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      // The only way to switch from HTML namespace to SVG
      // is via <svg>. If it happens via any other tag, then
      // it should be killed.
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === 'svg';
      }
      // The only way to switch from MathML to SVG is via`
      // svg if parent is either <annotation-xml> or MathML
      // text integration points.
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      // We only allow elements that are defined in SVG
      // spec. All others are disallowed in SVG namespace.
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      // The only way to switch from HTML namespace to MathML
      // is via <math>. If it happens via any other tag, then
      // it should be killed.
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === 'math';
      }
      // The only way to switch from SVG to MathML is via
      // <math> and HTML integration points
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
      }
      // We only allow elements that are defined in MathML
      // spec. All others are disallowed in MathML namespace.
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      // The only way to switch from SVG to HTML is via
      // HTML integration points, and from MathML to HTML
      // is via MathML text integration points
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      // We disallow tags that are specific for MathML
      // or SVG and should never appear in HTML namespace
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    // For XHTML and XML documents that support custom namespaces
    if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    // The code should never reach this place (this means
    // that the element somehow got namespace that is not
    // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
    // Return false just in case.
    return false;
  };
  /**
   * _forceRemove
   *
   * @param node a DOM node
   */
  const _forceRemove = function _forceRemove(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      // eslint-disable-next-line unicorn/prefer-dom-node-remove
      getParentNode(node).removeChild(node);
    } catch (_) {
      remove(node);
    }
  };
  /**
   * _removeAttribute
   *
   * @param name an Attribute name
   * @param element a DOM node
   */
  const _removeAttribute = function _removeAttribute(name, element) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: element
      });
    }
    element.removeAttribute(name);
    // We void attribute values for unremovable "is" attributes
    if (name === 'is') {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_) {}
      } else {
        try {
          element.setAttribute(name, '');
        } catch (_) {}
      }
    }
  };
  /**
   * _initDocument
   *
   * @param dirty - a string of dirty markup
   * @return a DOM, filled with the dirty markup
   */
  const _initDocument = function _initDocument(dirty) {
    /* Create a HTML document */
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = '<remove></remove>' + dirty;
    } else {
      /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
      // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    /*
     * Use the DOMParser API by default, fallback later if needs be
     * DOMParser not work for svg when has multiple root element.
     */
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {}
    }
    /* Use createHTMLDocument in case DOMParser is not available */
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, 'template', null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_) {
        // Syntax error if dirtyPayload is invalid xml
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    /* Work on whole document or just its body */
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  /**
   * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
   *
   * @param root The root element or node to start traversing on.
   * @return The created NodeIterator
   */
  const _createNodeIterator = function _createNodeIterator(root) {
    return createNodeIterator.call(root.ownerDocument || root, root,
    // eslint-disable-next-line no-bitwise
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
  };
  /**
   * _isClobbered
   *
   * @param element element to check for clobbering attacks
   * @return true if clobbered, false if safe
   */
  const _isClobbered = function _isClobbered(element) {
    return element instanceof HTMLFormElement && (typeof element.nodeName !== 'string' || typeof element.textContent !== 'string' || typeof element.removeChild !== 'function' || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== 'function' || typeof element.setAttribute !== 'function' || typeof element.namespaceURI !== 'string' || typeof element.insertBefore !== 'function' || typeof element.hasChildNodes !== 'function');
  };
  /**
   * Checks whether the given object is a DOM node.
   *
   * @param value object to check whether it's a DOM node
   * @return true is object is a DOM node
   */
  const _isNode = function _isNode(value) {
    return typeof Node === 'function' && value instanceof Node;
  };
  function _executeHooks(hooks, currentNode, data) {
    arrayForEach(hooks, hook => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   * @param currentNode to check for permission to exist
   * @return true if node was killed, false if left alive
   */
  const _sanitizeElements = function _sanitizeElements(currentNode) {
    let content = null;
    /* Execute a hook if present */
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    /* Check if element is clobbered or can clobber */
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    /* Now let's check the element's type and name */
    const tagName = transformCaseFunc(currentNode.nodeName);
    /* Execute a hook if present */
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    /* Detect mXSS attempts abusing namespace confusion */
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    /* Remove any occurrence of processing instructions */
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    /* Remove any kind of possibly harmful comments */
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
      _forceRemove(currentNode);
      return true;
    }
    /* Remove element if anything forbids its presence */
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      /* Check if we have a custom element to handle */
      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
          return false;
        }
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
          return false;
        }
      }
      /* Keep content except for bad-listed elements */
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i = childCount - 1; i >= 0; --i) {
            const childClone = cloneNode(childNodes[i], true);
            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
            parentNode.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    /* Check whether element has a valid namespace */
    if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    /* Make sure that older browsers don't get fallback-tag mXSS */
    if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    /* Sanitize element content to be template-safe */
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      /* Get the element's text content */
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
        content = stringReplace(content, expr, ' ');
      });
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    /* Execute a hook if present */
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return false;
  };
  /**
   * _isValidAttribute
   *
   * @param lcTag Lowercase tag name of containing element.
   * @param lcName Lowercase attribute name.
   * @param value Attribute value.
   * @return Returns true if `value` is valid, otherwise false.
   */
  // eslint-disable-next-line complexity
  const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
    /* Make sure attribute cannot clobber */
    if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
      return false;
    }
    /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
      // First condition does a very basic check if a) it's basically a valid custom element tagname AND
      // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
      // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
      _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) ||
      // Alternative, second condition checks if it's an `is`-attribute, AND
      // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
      lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
        return false;
      }
      /* Check value is safe. First, is attr inert? If so, is safe */
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if (value) {
      return false;
    } else ;
    return true;
  };
  /**
   * _isBasicCustomElement
   * checks if at least one dash is included in tagName, and it's not the first char
   * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
   *
   * @param tagName name of the tag of the node to sanitize
   * @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
   */
  const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
    return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT);
  };
  /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param currentNode to sanitize
   */
  const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
    /* Execute a hook if present */
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    const {
      attributes
    } = currentNode;
    /* Check if we have attributes; if not we might have a text node */
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    const hookEvent = {
      attrName: '',
      attrValue: '',
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: undefined
    };
    let l = attributes.length;
    /* Go backwards over all attributes; safely remove bad ones */
    while (l--) {
      const attr = attributes[l];
      const {
        name,
        namespaceURI,
        value: attrValue
      } = attr;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === 'value' ? initValue : stringTrim(initValue);
      /* Execute a hook if present */
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      /* Full DOM Clobbering protection via namespace isolation,
       * Prefix id and name attributes with `user-content-`
       */
      if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
        // Remove the attribute with this value
        _removeAttribute(name, currentNode);
        // Prefix the value and later re-create the attribute with the sanitized value
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      /* Work around a security issue with comments inside attributes */
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      /* Did the hooks approve of the attribute? */
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      /* Did the hooks approve of the attribute? */
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode);
        continue;
      }
      /* Work around a security issue in jQuery 3.0 */
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      /* Sanitize attribute content to be template-safe */
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          value = stringReplace(value, expr, ' ');
        });
      }
      /* Is `value` valid for this attribute? */
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      /* Handle attributes that require Trusted Types */
      if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
        if (namespaceURI) ; else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case 'TrustedHTML':
              {
                value = trustedTypesPolicy.createHTML(value);
                break;
              }
            case 'TrustedScriptURL':
              {
                value = trustedTypesPolicy.createScriptURL(value);
                break;
              }
          }
        }
      }
      /* Handle invalid data-* attribute set by try-catching it */
      if (value !== initValue) {
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_) {
          _removeAttribute(name, currentNode);
        }
      }
    }
    /* Execute a hook if present */
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
  };
  /**
   * _sanitizeShadowDOM
   *
   * @param fragment to iterate over recursively
   */
  const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    /* Execute a hook if present */
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      /* Execute a hook if present */
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      /* Sanitize tags and elements */
      _sanitizeElements(shadowNode);
      /* Check attributes next */
      _sanitizeAttributes(shadowNode);
      /* Deep shadow DOM detected */
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(shadowNode.content);
      }
    }
    /* Execute a hook if present */
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  // eslint-disable-next-line complexity
  DOMPurify.sanitize = function (dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = '<!-->';
    }
    /* Stringify, in case dirty is an object */
    if (typeof dirty !== 'string' && !_isNode(dirty)) {
      if (typeof dirty.toString === 'function') {
        dirty = dirty.toString();
        if (typeof dirty !== 'string') {
          throw typeErrorCreate('dirty is not a string, aborting');
        }
      } else {
        throw typeErrorCreate('toString is not a function');
      }
    }
    /* Return dirty HTML if DOMPurify cannot run */
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    /* Assign config vars */
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    /* Clean up removed elements */
    DOMPurify.removed = [];
    /* Check if dirty is correctly typed for IN_PLACE */
    if (typeof dirty === 'string') {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      /* Do some early pre-sanitization to avoid unsafe root nodes */
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
        }
      }
    } else if (dirty instanceof Node) {
      /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */
      body = _initDocument('<!---->');
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === 'BODY') {
        /* Node is already a body, use as is */
        body = importedNode;
      } else if (importedNode.nodeName === 'HTML') {
        body = importedNode;
      } else {
        // eslint-disable-next-line unicorn/prefer-dom-node-append
        body.appendChild(importedNode);
      }
    } else {
      /* Exit directly if we have nothing to do */
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
      // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf('<') === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      /* Initialize the document to work on */
      body = _initDocument(dirty);
      /* Check we have a DOM node from the data */
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
      }
    }
    /* Remove first element node (ours) if FORCE_BODY is set */
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    /* Get node iterator */
    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
    /* Now start iterating over the created document */
    while (currentNode = nodeIterator.nextNode()) {
      /* Sanitize tags and elements */
      _sanitizeElements(currentNode);
      /* Check attributes next */
      _sanitizeAttributes(currentNode);
      /* Shadow DOM detected, sanitize it */
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
    }
    /* If we sanitized `dirty` in-place, return it. */
    if (IN_PLACE) {
      return dirty;
    }
    /* Return sanitized string or DOM */
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        /*
          AdoptNode() is not used because internal state is not reset
          (e.g. the past names map of a HTMLFormElement), this is safe
          in theory but we would rather not risk another attack vector.
          The state that is cloned by importNode() is explicitly defined
          by the specs.
        */
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    /* Serialize doctype if allowed */
    if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
    }
    /* Sanitize final string template-safe */
    if (SAFE_FOR_TEMPLATES) {
      arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
        serializedHTML = stringReplace(serializedHTML, expr, ' ');
      });
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function () {
    let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function () {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function (tag, attr, value) {
    /* Initialize shared config vars if necessary. */
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function (entryPoint, hookFunction) {
    if (typeof hookFunction !== 'function') {
      return;
    }
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function (entryPoint, hookFunction) {
    if (hookFunction !== undefined) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? undefined : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function (entryPoint) {
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function () {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify = createDOMPurify();


//# sourceMappingURL=purify.es.mjs.map


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
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 			return "calendar-" + chunkId + ".js?v=" + {"vendors-node_modules_vue_dist_vue_runtime_esm_js":"7e3171593bdc0f62040b","vendors-node_modules_webdav_dist_web_index_js":"9b89a6618bf0421c4ce0","vendors-node_modules_pinia_dist_pinia_mjs":"574fed92c139b8d8e3da","vendors-node_modules_lodash__assignValue_js-node_modules_lodash__baseFor_js-node_modules_loda-3a84ab":"4b90806b95a53d11a684","vendors-node_modules_jstz_index_js-node_modules_lodash_pick_js-node_modules_lodash_sortBy_js--616961":"63d838027ef704321af3","vendors-node_modules_autosize_dist_autosize_esm_js-node_modules_lodash_lodash_js-node_modules-d07fd2":"9bcb3645843312c065e2","src_utils_moment_js-src_components_Editor_FreeBusy_FreeBusy_vue":"e0447630c7df5cef01c1","src_views_Calendar_vue-data_image_svg_xml_3c_21--_20-_20SPDX-FileCopyrightText_202020_20Googl-1e2145":"e4ee7a71a522922c1b85","vendors-node_modules_rehype-highlight_index_js":"8502cd414719ef4282de","node_modules_nextcloud_dialogs_dist_chunks_index-BC-7VPxC_mjs":"271a85e0b6bfc0128e12","vendors-node_modules_nextcloud_files_dist_index_mjs-node_modules_nextcloud_vue_dist_Component-c57add":"9d0228e54bf3a0bfcb72","node_modules_nextcloud_dialogs_dist_chunks_PublicAuthPrompt-BSFsDqYB_mjs":"f3d8459a8bb7377fc136","public-calendar-subscription-picker":"e2a389b3b03bbf3848b4","vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-582c96":"ce1bed825f57dd1d117a","node_modules_moment_locale_sync_recursive_":"4bc2c39c5e0ff182c2e3","vendors-node_modules_nextcloud_dialogs_dist_chunks_FilePicker-CsU6FfAP_mjs":"8e7ad8332379588b6708"}[chunkId] + "";
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
/******/ 		var dataWebpackPrefix = "calendar:";
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
/******/ 		__webpack_require__.p = "/apps/calendar/js/";
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
/******/ 			"reference": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
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
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcalendar"] = self["webpackChunkcalendar"] || [];
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/reference.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_vue_dist_Functions_registerReference_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Functions/registerReference.js */ "./node_modules/@nextcloud/vue/dist/Functions/registerReference.mjs");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _css_calendar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/calendar.scss */ "./css/calendar.scss");
/* harmony import */ var _css_calendar_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_calendar_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */





__webpack_require__.nc = btoa((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getRequestToken)()); // eslint-disable-line
__webpack_require__.p = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.linkTo)('calendar', 'js/'); // eslint-disable-line

(0,_nextcloud_vue_dist_Functions_registerReference_js__WEBPACK_IMPORTED_MODULE_0__.registerWidget)('calendar_widget', async (el, _ref) => {
  let {
    richObjectType,
    richObject,
    accessible,
    interactive
  } = _ref;
  const {
    default: Vue
  } = await __webpack_require__.e(/*! import() */ "vendors-node_modules_vue_dist_vue_runtime_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"));
  const {
    default: Calendar
  } = await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_webdav_dist_web_index_js"), __webpack_require__.e("vendors-node_modules_pinia_dist_pinia_mjs"), __webpack_require__.e("vendors-node_modules_vue_dist_vue_runtime_esm_js"), __webpack_require__.e("vendors-node_modules_lodash__assignValue_js-node_modules_lodash__baseFor_js-node_modules_loda-3a84ab"), __webpack_require__.e("vendors-node_modules_jstz_index_js-node_modules_lodash_pick_js-node_modules_lodash_sortBy_js--616961"), __webpack_require__.e("vendors-node_modules_autosize_dist_autosize_esm_js-node_modules_lodash_lodash_js-node_modules-d07fd2"), __webpack_require__.e("src_utils_moment_js-src_components_Editor_FreeBusy_FreeBusy_vue"), __webpack_require__.e("src_views_Calendar_vue-data_image_svg_xml_3c_21--_20-_20SPDX-FileCopyrightText_202020_20Googl-1e2145")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/Calendar.vue */ "./src/views/Calendar.vue"));
  const {
    createPinia,
    PiniaVuePlugin
  } = await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pinia_dist_pinia_mjs"), __webpack_require__.e("vendors-node_modules_vue_dist_vue_runtime_esm_js")]).then(__webpack_require__.bind(__webpack_require__, /*! pinia */ "./node_modules/pinia/dist/pinia.mjs"));
  Vue.use(PiniaVuePlugin);
  const pinia = createPinia();
  Vue.prototype.$t = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translate;
  Vue.prototype.$n = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_3__.translatePlural;
  Vue.mixin({
    methods: {
      t,
      n
    }
  });
  const Widget = Vue.extend(Calendar);
  const vueElement = new Widget({
    pinia,
    propsData: {
      isWidget: true,
      isPublic: richObject.isPublic,
      referenceToken: richObject?.token,
      url: richObject.url
    }
  }).$mount(el);
  return new _nextcloud_vue_dist_Functions_registerReference_js__WEBPACK_IMPORTED_MODULE_0__.NcCustomPickerRenderResult(vueElement.$el, vueElement);
}, (el, renderResult) => {
  renderResult.object.$destroy();
}, true);
})();

/******/ })()
;
//# sourceMappingURL=calendar-reference.js.map?v=1b97b9fc8e5172f572b5