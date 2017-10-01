'use strict';

/**
 * Redirect insecure connections to https.
 */
module.exports = (req, res, next) => {
  if (
    process.env.NODE_ENV !== 'production' ||
    ConnectionService.isSecure(req)
  ) {
    next();
  } else {
    res.redirect(301, 'https://' + req.headers.host + req.url);
  }
};
