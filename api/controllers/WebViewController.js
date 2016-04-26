/**
 * Controller for handling custom view logic for the web.
 */

'use strict';

module.exports = {

  /**
   * Display /confirmation view and pass along any query params.
   */
  confirmation: function(req, res) {
    let locals = {
      title: 'Woo! | Shine',
      layout: 'layouts/subpageCustomHeader.layout',
      firstName: req.query.first_name ? req.query.first_name : '',
      phone: req.query.phone ? req.query.phone : '',
      query: req.query
    };

    if (req.query.referral) {
      locals.headerText = "You're a rockstar! Thanks for sharing.";
      locals.bodyText = "Got more friends who would appreciate Shine? Spread some more motiv-affirmation!";
    }
    else {
      locals.headerText = "You're signed up!";
      locals.bodyText = "You're now signed up for Shine. Your daily texts will start on the next business day. Spread the motiv-affirmation and share with friends!";
    }

    return res.view('confirmation', locals);
  },

};
