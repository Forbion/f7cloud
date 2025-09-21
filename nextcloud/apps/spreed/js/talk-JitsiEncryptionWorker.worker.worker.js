/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/e2ee/JitsiEncryptionWorkerContext.js":
/*!********************************************************!*\
  !*** ./src/utils/e2ee/JitsiEncryptionWorkerContext.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _crypto_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto-utils.js */ "./src/utils/e2ee/crypto-utils.js");

const KEYRING_SIZE = 16;
const UNENCRYPTED_BYTES = {
  key: 10,
  delta: 3,
  undefined: 1
  // frame.type is not set on audio
};
const ENCRYPTION_ALGORITHM = "AES-GCM";
const IV_LENGTH = 12;
const RATCHET_WINDOW_SIZE = 8;
class Context {
  /**
   * @param {Object} options
   */
  constructor({ sharedKey = false } = {}) {
    this._cryptoKeyRing = new Array(KEYRING_SIZE);
    this._currentKeyIndex = -1;
    this._sendCounts = /* @__PURE__ */ new Map();
    this._sharedKey = sharedKey;
  }
  /**
   * Derives the different subkeys and starts using them for encryption or
   * decryption.
   * @param {Uint8Array|false} key bytes. Pass false to disable.
   * @param {Number} keyIndex
   */
  async setKey(key, keyIndex = -1) {
    let newKey = false;
    if (key) {
      if (this._sharedKey) {
        newKey = key;
      } else {
        const material = await (0,_crypto_utils_js__WEBPACK_IMPORTED_MODULE_0__.importKey)(key);
        newKey = await (0,_crypto_utils_js__WEBPACK_IMPORTED_MODULE_0__.deriveKeys)(material);
      }
    }
    this._setKeys(newKey, keyIndex);
  }
  /**
   * Sets a set of keys and resets the sendCount.
   * decryption.
   * @param {Object} keys set of keys.
   * @param {Number} keyIndex optional
   * @private
   */
  _setKeys(keys, keyIndex = -1) {
    if (keyIndex >= 0) {
      this._currentKeyIndex = keyIndex % this._cryptoKeyRing.length;
    }
    this._cryptoKeyRing[this._currentKeyIndex] = keys;
    this._sendCount = BigInt(0);
  }
  /**
   * Function that will be injected in a stream and will encrypt the given encoded frames.
   *
   * @param {RTCEncodedVideoFrame|RTCEncodedAudioFrame} encodedFrame - Encoded video frame.
   * @param {TransformStreamDefaultController} controller - TransportStreamController.
   *
   * The VP8 payload descriptor described in
   * https://tools.ietf.org/html/rfc7741#section-4.2
   * is part of the RTP packet and not part of the frame and is not controllable by us.
   * This is fine as the SFU keeps having access to it for routing.
   *
   * The encrypted frame is formed as follows:
   * 1) Leave the first (10, 3, 1) bytes unencrypted, depending on the frame type and kind.
   * 2) Form the GCM IV for the frame as described above.
   * 3) Encrypt the rest of the frame using AES-GCM.
   * 4) Allocate space for the encrypted frame.
   * 5) Copy the unencrypted bytes to the start of the encrypted frame.
   * 6) Append the ciphertext to the encrypted frame.
   * 7) Append the IV.
   * 8) Append a single byte for the key identifier.
   * 9) Enqueue the encrypted frame for sending.
   */
  encodeFunction(encodedFrame, controller) {
    const keyIndex = this._currentKeyIndex;
    if (this._cryptoKeyRing[keyIndex]) {
      const iv = this._makeIV(encodedFrame.getMetadata().synchronizationSource, encodedFrame.timestamp);
      const frameHeader = new Uint8Array(encodedFrame.data, 0, UNENCRYPTED_BYTES[encodedFrame.type]);
      const frameTrailer = new Uint8Array(2);
      frameTrailer[0] = IV_LENGTH;
      frameTrailer[1] = keyIndex;
      return crypto.subtle.encrypt({
        name: ENCRYPTION_ALGORITHM,
        iv,
        additionalData: new Uint8Array(encodedFrame.data, 0, frameHeader.byteLength)
      }, this._cryptoKeyRing[keyIndex].encryptionKey, new Uint8Array(
        encodedFrame.data,
        UNENCRYPTED_BYTES[encodedFrame.type]
      )).then((cipherText) => {
        const newData = new ArrayBuffer(frameHeader.byteLength + cipherText.byteLength + iv.byteLength + frameTrailer.byteLength);
        const newUint8 = new Uint8Array(newData);
        newUint8.set(frameHeader);
        newUint8.set(new Uint8Array(cipherText), frameHeader.byteLength);
        newUint8.set(new Uint8Array(iv), frameHeader.byteLength + cipherText.byteLength);
        newUint8.set(
          frameTrailer,
          frameHeader.byteLength + cipherText.byteLength + iv.byteLength
        );
        encodedFrame.data = newData;
        return controller.enqueue(encodedFrame);
      }, (e) => {
        console.error(e);
      });
    }
    controller.enqueue(encodedFrame);
  }
  /**
   * Function that will be injected in a stream and will decrypt the given encoded frames.
   *
   * @param {RTCEncodedVideoFrame|RTCEncodedAudioFrame} encodedFrame - Encoded video frame.
   * @param {TransformStreamDefaultController} controller - TransportStreamController.
   */
  async decodeFunction(encodedFrame, controller) {
    const data = new Uint8Array(encodedFrame.data);
    const keyIndex = data[encodedFrame.data.byteLength - 1];
    if (this._cryptoKeyRing[keyIndex]) {
      const decodedFrame = await this._decryptFrame(
        encodedFrame,
        keyIndex
      );
      if (decodedFrame) {
        controller.enqueue(decodedFrame);
      }
    }
  }
  /**
   * Function that will decrypt the given encoded frame. If the decryption fails, it will
   * ratchet the key for up to RATCHET_WINDOW_SIZE times.
   *
   * @param {RTCEncodedVideoFrame|RTCEncodedAudioFrame} encodedFrame - Encoded video frame.
   * @param {number} keyIndex - the index of the decryption data in _cryptoKeyRing array.
   * @param {number} ratchetCount - the number of retries after ratcheting the key.
   * @returns {Promise<RTCEncodedVideoFrame|RTCEncodedAudioFrame>} - The decrypted frame.
   * @private
   */
  async _decryptFrame(encodedFrame, keyIndex, initialKey = void 0, ratchetCount = 0) {
    const { encryptionKey } = this._cryptoKeyRing[keyIndex];
    let { material } = this._cryptoKeyRing[keyIndex];
    try {
      const frameHeader = new Uint8Array(encodedFrame.data, 0, UNENCRYPTED_BYTES[encodedFrame.type]);
      const frameTrailer = new Uint8Array(encodedFrame.data, encodedFrame.data.byteLength - 2, 2);
      const ivLength = frameTrailer[0];
      const iv = new Uint8Array(
        encodedFrame.data,
        encodedFrame.data.byteLength - ivLength - frameTrailer.byteLength,
        ivLength
      );
      const cipherTextStart = frameHeader.byteLength;
      const cipherTextLength = encodedFrame.data.byteLength - (frameHeader.byteLength + ivLength + frameTrailer.byteLength);
      const plainText = await crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv,
          additionalData: new Uint8Array(encodedFrame.data, 0, frameHeader.byteLength)
        },
        encryptionKey,
        new Uint8Array(encodedFrame.data, cipherTextStart, cipherTextLength)
      );
      const newData = new ArrayBuffer(frameHeader.byteLength + plainText.byteLength);
      const newUint8 = new Uint8Array(newData);
      newUint8.set(new Uint8Array(encodedFrame.data, 0, frameHeader.byteLength));
      newUint8.set(new Uint8Array(plainText), frameHeader.byteLength);
      encodedFrame.data = newData;
      return encodedFrame;
    } catch (error) {
      if (this._sharedKey) {
        return;
      }
      if (ratchetCount < RATCHET_WINDOW_SIZE) {
        const currentKey = this._cryptoKeyRing[this._currentKeyIndex];
        material = await (0,_crypto_utils_js__WEBPACK_IMPORTED_MODULE_0__.importKey)(await (0,_crypto_utils_js__WEBPACK_IMPORTED_MODULE_0__.ratchet)(material));
        const newKey = await (0,_crypto_utils_js__WEBPACK_IMPORTED_MODULE_0__.deriveKeys)(material);
        this._setKeys(newKey);
        return await this._decryptFrame(
          encodedFrame,
          keyIndex,
          initialKey || currentKey,
          ratchetCount + 1
        );
      }
      this._setKeys(initialKey);
    }
  }
  /**
   * Construct the IV used for AES-GCM and sent (in plain) with the packet similar to
   * https://tools.ietf.org/html/rfc7714#section-8.1
   * It concatenates
   * - the 32 bit synchronization source (SSRC) given on the encoded frame,
   * - the 32 bit rtp timestamp given on the encoded frame,
   * - a send counter that is specific to the SSRC. Starts at a random number.
   * The send counter is essentially the pictureId but we currently have to implement this ourselves.
   * There is no XOR with a salt. Note that this IV leaks the SSRC to the receiver but since this is
   * randomly generated and SFUs may not rewrite this is considered acceptable.
   * The SSRC is used to allow demultiplexing multiple streams with the same key, as described in
   *   https://tools.ietf.org/html/rfc3711#section-4.1.1
   * The RTP timestamp is 32 bits and advances by the codec clock rate (90khz for video, 48khz for
   * opus audio) every second. For video it rolls over roughly every 13 hours.
   * The send counter will advance at the frame rate (30fps for video, 50fps for 20ms opus audio)
   * every second. It will take a long time to roll over.
   *
   * See also https://developer.mozilla.org/en-US/docs/Web/API/AesGcmParams
   */
  _makeIV(synchronizationSource, timestamp) {
    const iv = new ArrayBuffer(IV_LENGTH);
    const ivView = new DataView(iv);
    if (!this._sendCounts.has(synchronizationSource)) {
      this._sendCounts.set(synchronizationSource, Math.floor(Math.random() * 65535));
    }
    const sendCount = this._sendCounts.get(synchronizationSource);
    ivView.setUint32(0, synchronizationSource);
    ivView.setUint32(4, timestamp);
    ivView.setUint32(8, sendCount % 65535);
    this._sendCounts.set(synchronizationSource, sendCount + 1);
    return iv;
  }
}


/***/ }),

/***/ "./src/utils/e2ee/crypto-utils.js":
/*!****************************************!*\
  !*** ./src/utils/e2ee/crypto-utils.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deriveKeys: () => (/* binding */ deriveKeys),
/* harmony export */   importKey: () => (/* binding */ importKey),
/* harmony export */   ratchet: () => (/* binding */ ratchet)
/* harmony export */ });
async function deriveKeys(material) {
  const info = new ArrayBuffer();
  const textEncoder = new TextEncoder();
  const encryptionKey = await crypto.subtle.deriveKey({
    name: "HKDF",
    salt: textEncoder.encode("TalkFrameEncryptionKey"),
    hash: "SHA-256",
    info
  }, material, {
    name: "AES-GCM",
    length: 128
  }, false, ["encrypt", "decrypt"]);
  return {
    material,
    encryptionKey
  };
}
async function ratchet(material) {
  const textEncoder = new TextEncoder();
  return crypto.subtle.deriveBits({
    name: "HKDF",
    salt: textEncoder.encode("TalkFrameRatchetKey"),
    hash: "SHA-256",
    info: new ArrayBuffer()
  }, material, 256);
}
async function importKey(keyBytes) {
  return crypto.subtle.importKey("raw", keyBytes, "HKDF", false, ["deriveBits", "deriveKey"]);
}


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
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ./src/utils/e2ee/JitsiEncryptionWorker.worker.js ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JitsiEncryptionWorkerContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JitsiEncryptionWorkerContext.js */ "./src/utils/e2ee/JitsiEncryptionWorkerContext.js");
/**
 * SPDX-FileCopyrightText: 2020 Jitsi team at 8x8 and the community.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Based on code from https://github.com/jitsi/jitsi-meet
 */

// Worker for E2EE/Insertable streams.



const contexts = new Map() // Map participant id => context

let sharedContext

/**
 * Retrieves the participant {@code Context}, creating it if necessary.
 *
 * @param {string} participantId - The participant whose context we need.
 * @returns {Object} The context.
 */
function getParticipantContext(participantId) {
	if (sharedContext) {
		return sharedContext
	}

	if (!contexts.has(participantId)) {
		contexts.set(participantId, new _JitsiEncryptionWorkerContext_js__WEBPACK_IMPORTED_MODULE_0__.Context())
	}

	return contexts.get(participantId)
}

/**
 * Sets an encode / decode transform.
 *
 * @param {Object} context - The participant context where the transform will be applied.
 * @param {string} operation - Encode / decode.
 * @param {Object} readableStream - Readable stream part.
 * @param {Object} writableStream - Writable stream part.
 */
function handleTransform(context, operation, readableStream, writableStream) {
	if (operation === 'encode' || operation === 'decode') {
		const transformFn = operation === 'encode' ? context.encodeFunction : context.decodeFunction
		const transformStream = new TransformStream({
			transform: transformFn.bind(context),
		})

		readableStream
			.pipeThrough(transformStream)
			.pipeTo(writableStream)
	} else {
		console.error(`Invalid operation: ${operation}`)
	}
}

onmessage = async (event) => {
	const { operation } = event.data

	if (operation === 'initialize') {
		const { sharedKey } = event.data

		if (sharedKey) {
			sharedContext = new _JitsiEncryptionWorkerContext_js__WEBPACK_IMPORTED_MODULE_0__.Context({ sharedKey })
		}
	} else if (operation === 'encode' || operation === 'decode') {
		const { readableStream, writableStream, participantId } = event.data
		const context = getParticipantContext(participantId)

		handleTransform(context, operation, readableStream, writableStream)
	} else if (operation === 'setKey') {
		const { participantId, key, keyIndex } = event.data
		const context = getParticipantContext(participantId)

		if (key) {
			context.setKey(key, keyIndex)
		} else {
			context.setKey(false, keyIndex)
		}
	} else if (operation === 'cleanup') {
		const { participantId } = event.data

		contexts.delete(participantId)
	} else if (operation === 'cleanupAll') {
		contexts.clear()
	} else {
		console.error('e2ee worker', operation)
	}
}

// Operations using RTCRtpScriptTransform.
if (self.RTCTransformEvent) {
	self.onrtctransform = (event) => {
		const transformer = event.transformer
		const { operation, participantId } = transformer.options
		const context = getParticipantContext(participantId)

		handleTransform(context, operation, transformer.readable, transformer.writable)
	}
}

/******/ })()
;
//# sourceMappingURL=talk-JitsiEncryptionWorker.worker.worker.js.map?v=eefe07c7d06f02b82c0a