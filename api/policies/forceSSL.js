'use strict';

/**
 * Redirect insecure connections to https.
 */
module.exports = (req, res, next) => {
  // Don't attempt to redirect connections to https if:
  //   - This is a production environment
  //   - Tee DISABLE_FORCE_SSL environment variable is set to "true"
  //   - The connection is already deemed secure
  if (
    process.env.NODE_ENV !== 'production' ||
    process.env.DISABLE_FORCE_SSL === 'true' ||
    ConnectionService.isSecure(req)
  ) {
    next();
  } else {
    res.redirect(301, 'https://' + req.headers.host + req.url);
  }
};
