var _require = require('../helper'),
    validGATrackingId = _require.validGATrackingId,
    validGTMTrackingId = _require.validGTMTrackingId,
    validFbPixelId = _require.validFbPixelId,
    validTikTokPixelId = _require.validTikTokPixelId,
    validHotjarId = _require.validHotjarId,
    isEnabled = _require.isEnabled;

var _require2 = require('./google-analytics'),
    addGoogleAnalytics = _require2.addGoogleAnalytics,
    initializeGoogleAnalytics = _require2.initializeGoogleAnalytics,
    trackGoogleAnalytics = _require2.trackGoogleAnalytics;

var _require3 = require('./google-tag-manager'),
    addGoogleTagManager = _require3.addGoogleTagManager,
    initializeGoogleTagManager = _require3.initializeGoogleTagManager,
    trackGoogleTagManager = _require3.trackGoogleTagManager;

var _require4 = require('./facebook'),
    addFacebookPixel = _require4.addFacebookPixel,
    initializeFacebookPixel = _require4.initializeFacebookPixel,
    trackFacebookPixel = _require4.trackFacebookPixel;

var _require5 = require('./tiktok'),
    addTikTokPixel = _require5.addTikTokPixel,
    initializeTikTokPixel = _require5.initializeTikTokPixel,
    trackTikTokPixel = _require5.trackTikTokPixel;

var _require6 = require('./hotjar'),
    addHotjar = _require6.addHotjar,
    initializeHotjar = _require6.initializeHotjar,
    trackHotjar = _require6.trackHotjar;

exports.initializeAndTrackGoogleAnalytics = function (options, location) {
  if (isEnabled(options) && validGATrackingId(options)) {
    addGoogleAnalytics(options).then(function (status) {
      if (status) {
        initializeGoogleAnalytics(options);
        trackGoogleAnalytics(options, location);
      }
    });
  }
};

exports.initializeAndTrackGoogleTagManager = function (options, location) {
  if (isEnabled(options) && validGTMTrackingId(options)) {
    var environmentParamStr = "";

    if (options.gtmAuth && options.gtmPreview) {
      environmentParamStr = "&gtm_auth=" + options.gtmAuth + "&gtm_preview=" + options.gtmPreview + "&gtm_cookies_win=x";
    }

    addGoogleTagManager(options, environmentParamStr).then(function (status) {
      if (status) {
        initializeGoogleTagManager(options);
        trackGoogleTagManager(options, location);
      }
    });
  }
};

exports.initializeAndTrackFacebookPixel = function (options) {
  if (isEnabled(options) && validFbPixelId(options)) {
    addFacebookPixel().then(function (status) {
      if (status) {
        initializeFacebookPixel(options);
        trackFacebookPixel(options);
      }
    });
  }
};

exports.initializeAndTrackTikTokPixel = function (options) {
  if (isEnabled(options) && validTikTokPixelId(options)) {
    addTikTokPixel().then(function (status) {
      if (status) {
        initializeTikTokPixel(options);
        trackTikTokPixel(options);
      }
    });
  }
};

exports.initializeAndTrackHotjar = function (options) {
  if (isEnabled(options) && validHotjarId(options)) {
    addHotjar(options).then(function (status) {
      if (status) {
        initializeHotjar(options);
        trackHotjar(options);
      }
    });
  }
};