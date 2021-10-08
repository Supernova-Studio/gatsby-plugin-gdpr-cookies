var _require = require('../helper'),
    validGTMTrackingId = _require.validGTMTrackingId,
    isEnabled = _require.isEnabled; // TODO: tag manager does track automatically when adding it to the dom


exports.addGoogleTagManager = function (_ref, environmentParamStr) {
  var trackingId = _ref.trackingId,
      dataLayerName = _ref.dataLayerName;
  return new Promise(function (resolve, reject) {
    if (window.gatsbyPluginGDPRCookiesGoogleTagManagerAdded) return resolve(true);
    /* eslint-disable */

    !function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl + environmentParamStr;
      f.parentNode.insertBefore(j, f);
    }(window, document, 'script', dataLayerName, trackingId);
    /* eslint-enable */

    var iframe = document.createElement('iframe');
    iframe.key = 'gatsby-plugin-gdpr-cookies-google-tagmanager-iframe';
    iframe.src = "https://www.googletagmanager.com/ns.html?id=" + trackingId + environmentParamStr;
    iframe.height = 0;
    iframe.width = 0;
    iframe.style = "display: none; visibility: hidden";
    document.body.insertBefore(iframe, document.body.firstChild);
    window.gatsbyPluginGDPRCookiesGoogleTagManagerAdded = true;
    resolve(true);
  });
};

exports.initializeGoogleTagManager = function (options) {// console.log('initing tag manager');
  // if (
  //   !window.gatsbyPluginGDPRCookiesGoogleTagManagerInitialized &&
  //   isEnabled(options) &&
  //   validGTMTrackingId(options)
  // ) {
  //   window.dataLayer = window.dataLayer || [];
  //   window.gtag = function(){window.dataLayer.push(arguments);}
  //   window.gtag('js', new Date())
  //
  //   let gaAnonymize = options.anonymize
  //   let gaAllowAdFeatures = options.allowAdFeatures
  //   gaAnonymize = gaAnonymize !== undefined ? gaAnonymize : true
  //   gaAllowAdFeatures = gaAllowAdFeatures !== undefined ? gaAllowAdFeatures : true
  //
  //   window.gtag('config', options.trackingId, {
  //     'anonymize_ip': gaAnonymize,
  //     'allow_google_signals': gaAllowAdFeatures
  //   })
  // }
};

exports.trackGoogleTagManager = function (options, location) {// console.log('tracking tag manager');
  // if (
  //   isEnabled(options) &&
  //   validGTMTrackingId(options) &&
  //   typeof window.gtag === "function"
  // ) {
  //   const pagePath = location ? location.pathname + location.search + location.hash : undefined
  //   window.gtag(`event`, `page_view`, { page_path: pagePath })
  // }
  // setTimeout(() => {
  //   const data = options.dataLayerName
  //     ? window[options.dataLayerName]
  //     : window.dataLayer
  //
  //   if (typeof data === `object`) {
  //     const eventName = options.routeChangeEvent || `gatsbyRouteChange`
  //     data.push({ event: eventName })
  //   }
  // }, 50)
};