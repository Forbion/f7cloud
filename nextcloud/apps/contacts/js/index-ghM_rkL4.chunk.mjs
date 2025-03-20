/*! third party licenses: js/vendor.LICENSE.txt */
const appName = "contacts";
const appVersion = "7.1.0-dev.0";
function encodePath(path) {
  if (!path) {
    return path;
  }
  return path.split("/").map(encodeURIComponent).join("/");
}
export {
  encodePath as e
};
//# sourceMappingURL=index-ghM_rkL4.chunk.mjs.map
