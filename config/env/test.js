/**
 * Test environment settings.
 */

module.exports = {
  globals: {
    // Base URL for advice content
    adviceBaseUrl: process.env.ADVICE_BASE_URL,

    // URLs to JSON arrays of article content
    adviceJsonPromotedUrl: process.env.ADVICE_JSON_PROMOTED_URL,
    adviceJsonAllUrl: process.env.ADVICE_JSON_ALL_URL,

    // The Mobile Commons URL to send join requests to
    mcJoinUrl: 'http://localhost:1337/mc-join',

    // The Photon API URL
    photonApiUrl: 'http://localhost:1338',
  },
};