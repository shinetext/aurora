/**
 * Sails-hook-babel configuration
 * (sails.config.babel)
 *
 * Custom config for SailsJS hook to activate ES6/7 Javascript code for your whole sails app
 *
 */

module.exports.babel = {
  polyfill: true,
  presets: [
    [ "env", {
      "targets": {
        "node": "current"
      },
      "debug": true
    }],
    ["react"]
  ],
  plugins: [
    ["babel-plugin-transform-builtin-extend", {
        "globals": ["Error", "Array"]
    }]
  ]
};
