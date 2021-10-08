const {
  validGATrackingId,
  validGTMTrackingId,
  validFbPixelId,
  validTikTokPixelId,
  validHotjarId,
  isEnabled
} = require('../helper')

const {
  addGoogleAnalytics,
  initializeGoogleAnalytics,
  trackGoogleAnalytics
} = require('./google-analytics')

const {
  addGoogleTagManager,
  initializeGoogleTagManager,
  trackGoogleTagManager
} = require('./google-tag-manager')

const {
  addFacebookPixel,
  initializeFacebookPixel,
  trackFacebookPixel
} = require('./facebook')

const {
  addTikTokPixel,
  initializeTikTokPixel,
  trackTikTokPixel
} = require('./tiktok')

const {
  addHotjar,
  initializeHotjar,
  trackHotjar
} = require('./hotjar')

exports.initializeAndTrackGoogleAnalytics = (options, location) => {
  if (
    isEnabled(options) &&
    validGATrackingId(options)
  ) {
    addGoogleAnalytics(options).then((status) => {
      if (status) {
        initializeGoogleAnalytics(options)
        trackGoogleAnalytics(options, location)
      }
    })
  }
}

exports.initializeAndTrackGoogleTagManager = (options, location) => {
  if (
    isEnabled(options) &&
    validGTMTrackingId(options)
  ) {
    let environmentParamStr = ``
    if (options.gtmAuth && options.gtmPreview) {
      environmentParamStr = `&gtm_auth=${options.gtmAuth}&gtm_preview=${options.gtmPreview}&gtm_cookies_win=x`
    }

    addGoogleTagManager(options, environmentParamStr).then((status) => {
      if (status) {
        initializeGoogleTagManager(options)
        trackGoogleTagManager(options, location)
      }
    })
  }
}

exports.initializeAndTrackFacebookPixel = (options) => {
  if (
    isEnabled(options) &&
    validFbPixelId(options)
  ) {
    addFacebookPixel().then((status) => {
      if (status) {
        initializeFacebookPixel(options)
        trackFacebookPixel(options)
      }
    })
  }
}

exports.initializeAndTrackTikTokPixel = (options) => {
  if (
    isEnabled(options) &&
    validTikTokPixelId(options)
  ) {
    addTikTokPixel().then((status) => {
      if (status) {
        initializeTikTokPixel(options)
        trackTikTokPixel(options)
      }
    })
  }
}

exports.initializeAndTrackHotjar = (options) => {
  if (
    isEnabled(options) &&
    validHotjarId(options)
  ) {
    addHotjar(options).then((status) => {
      if (status) {
        initializeHotjar(options)
        trackHotjar(options)
      }
    })
  }
}
