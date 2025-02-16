var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onRouteUpdate = exports.onClientEntry = void 0;

var _defaultOptions = require("./default-options");

var _index = require("./index");

var _merge = _interopRequireDefault(require("lodash/merge"));

// init
var onClientEntry = function onClientEntry(_, pluginOptions) {
  if (pluginOptions === void 0) {
    pluginOptions = {};
  }

  window.gatsbyPluginGDPRCookiesGoogleAnalyticsAdded = false;
  window.gatsbyPluginGDPRCookiesGoogleTagManagerAdded = false;
  window.gatsbyPluginGDPRCookiesFacebookPixelAdded = false;
  window.gatsbyPluginGDPRCookiesTikTokPixelAdded = false;
  window.gatsbyPluginGDPRCookiesHotjarAdded = false;
  window.gatsbyPluginGDPRCookiesGoogleAnalyticsInitialized = false;
  window.gatsbyPluginGDPRCookiesGoogleTagManagerInitialized = false;
  window.gatsbyPluginGDPRCookiesFacebookPixelInitialized = false;
  window.gatsbyPluginGDPRCookiesTikTokPixelInitialized = false;
  window.gatsbyPluginGDPRCookiesHotjarInitialized = false; // google tag manager setup

  var _pluginOptions = pluginOptions,
      googleTagManager = _pluginOptions.googleTagManager;

  if (googleTagManager && googleTagManager.defaultDataLayer) {
    googleTagManager.defaultDataLayer = {
      type: typeof googleTagManager.defaultDataLayer,
      value: googleTagManager.defaultDataLayer
    };

    if (googleTagManager.defaultDataLayer.type === "function") {
      googleTagManager.defaultDataLayer.value = googleTagManager.defaultDataLayer.value.toString();
    }
  }

  var options = (0, _merge.default)(_defaultOptions.defaultOptions, pluginOptions);
  window.gatsbyPluginGDPRCookiesOptions = options;
}; // track


exports.onClientEntry = onClientEntry;

var onRouteUpdate = function onRouteUpdate(_ref) {
  var location = _ref.location;
  (0, _index.initializeAndTrack)(location);
};

exports.onRouteUpdate = onRouteUpdate;