/**
 * Autoreload config
 *
 * For more info, see: https://www.npmjs.com/package/sails-hook-autoreload
 */
module.exports.autoreload = {
  active: true,
  usePolling: false,
  dirs: [
    "api/models",
    "api/controllers",
    "api/services",
    "config/locales"
  ],
  ignored: [
    // Ignore all files with .ts extension
    "**.ts"
  ]
};