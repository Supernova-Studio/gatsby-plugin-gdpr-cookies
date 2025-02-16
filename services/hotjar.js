var _require = require('../helper'),
    validHotjarId = _require.validHotjarId,
    isEnabled = _require.isEnabled;

exports.addHotjar = function (options) {
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesHotjarAdded) return resolve(true);
    /* eslint-disable */

    !function (h, o, t, j, a, r) {
      h.hj = h.hj || function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };

      h._hjSettings = {
        hjid: options.hjid,
        hjsv: options.hjsv
      };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    }(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    /* eslint-enable */

    window.gatsbyPluginGDPRCookiesHotjarAdded = true;
    resolve(true);
  });
};

exports.initializeHotjar = function (options) {
  if (!window.gatsbyPluginGDPRCookiesHotjarInitialized && isEnabled(options) && validHotjarId(options)) {
    window.gatsbyPluginGDPRCookiesHotjarInitialized = true;
  }
};

exports.trackHotjar = function (options) {// this is supposed to so nothing
};