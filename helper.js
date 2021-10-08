exports.validGATrackingId = function (options) {
  return options.trackingId && options.trackingId.trim() !== "";
};

exports.validGTMTrackingId = function (options) {
  return options.trackingId && options.trackingId.trim() !== "";
};

exports.validFbPixelId = function (options) {
  return options.pixelId && options.pixelId.trim() !== "";
};

exports.validTikTokPixelId = function (options) {
  return options.pixelId && options.pixelId.trim() !== "";
};

exports.validHotjarId = function (options) {
  return options.hjid && options.hjid.trim() !== "" && options.hjsv && options.hjsv.trim() !== "";
};

exports.getCookie = function (name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
};

exports.isEnabled = function (options) {
  return options.skipCookieCheck || exports.getCookie(options.cookieName) === "true";
};

exports.isEnvironmentValid = function (environments) {
  var currentEnvironment = process.env.ENV || process.env.NODE_ENV || "development";
  return environments.includes(currentEnvironment);
};