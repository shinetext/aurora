/**
 * Test environment settings.
 */

module.exports = {
  globals: {
    // Base URL for advice content
    adviceBaseUrl: process.env.ADVICE_BASE_URL,

    // The Mobile Commons URL to send join requests to
    mcJoinUrl: 'http://localhost:1337/mc-join',

    // The Photon API URL
    photonApiUrl: 'http://localhost:1338',
  },
};