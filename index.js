var _require = require('./services'),
    initializeAndTrackGoogleAnalytics = _require.initializeAndTrackGoogleAnalytics,
    initializeAndTrackGoogleTagManager = _require.initializeAndTrackGoogleTagManager,
    initializeAndTrackFacebookPixel = _require.initializeAndTrackFacebookPixel,
    initializeAndTrackTikTokPixel = _require.initializeAndTrackTikTokPixel,
    initializeAndTrackHotjar = _require.initializeAndTrackHotjar;

var _require2 = require('./helper'),
    isEnvironmentValid = _require2.isEnvironmentValid;

exports.initializeAndTrack = function (location) {
  var options = window.gatsbyPluginGDPRCookiesOptions;

  if (isEnvironmentValid(options.environments)) {
    if (location === undefined || location === null) {
      console.error('Please provide a reach router location to the initializeAndTrack function.');
    } else {
      initializeAndTrackGoogleAnalytics(options.googleAnalytics, location);
      initializeAndTrackGoogleTagManager(options.googleTagManager, location);
      initializeAndTrackFacebookPixel(options.facebookPixel);
      initializeAndTrackTikTokPixel(options.tikTokPixel);
      initializeAndTrackHotjar(options.hotjar);
    }
  }
};