/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }

  globals: {
    // URLs to JSON arrays of article content
    adviceJsonPromotedUrl: process.env.ADVICE_JSON_PROMOTED_URL,
    adviceJsonAllUrl: process.env.ADVICE_JSON_ALL_URL,

    // The Mobile Commons URL to send join requests to
    mcJoinUrl: 'http://localhost:1337/mc-join',

    // The Photon API URL
    photonApiUrl: process.env.PHOTON_API_URL || 'http://localhost:1338',
  },

};
