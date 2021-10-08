Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = void 0;
var defaultOptions = {
  environments: ["production"],
  googleAnalytics: {
    cookieName: "gatsby-gdpr-google-analytics",
    skipCookieCheck: false,
    anonymize: true,
    allowAdFeatures: false
  },
  googleTagManager: {
    always: false,
    cookieName: "gatsby-gdpr-google-tagmanager",
    skipCookieCheck: false,
    dataLayerName: "dataLayer",
    routeChangeEvent: "gatsbyRouteChange"
  },
  facebookPixel: {
    cookieName: "gatsby-gdpr-facebook-pixel",
    skipCookieCheck: false
  },
  tikTokPixel: {
    cookieName: "gatsby-gdpr-tiktok-pixel",
    skipCookieCheck: false
  },
  hotjar: {
    cookieName: "gatsby-gdpr-hotjar",
    skipCookieCheck: false
  }
};
exports.defaultOptions = defaultOptions;