'use strict';

module.exports = {
  /**
   * Helper function to get the base URL.
   *
   * @param {object} req Express request object
   * @return {string}
   */
  getBaseUrl: req => {
    let isSecure = ConnectionService.isSecure(req);
    let protocol = 'http';
    if (isSecure) {
      protocol = 'https';
    }

    let baseUrl = `${protocol}://${req.host}`;
    // HACK: If we've got a secure connection, assuming that we're in a deployed
    // production environment where we don't need to add on the port number
    if (req.port && !isSecure) {
      baseUrl += `:${req.port}`;
    }

    return baseUrl;
  },

  /**
   * Helper function to determine if a request is secure or not.
   *
   * @param {object} req Express request object
   * @return {boolean}
   */
  isSecure: req => {
    // A handful of different ways to check if the request is secure
    // The 'x-forwarded-proto' is specific to Heroku deployments
    const sec =
      (req.connection && req.connection.encrypted) ||
      req.secure ||
      (req.headers && req.headers['x-forwarded-proto'] === 'https');

    return sec ? true : false;
  },
};
