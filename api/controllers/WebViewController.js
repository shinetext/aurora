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
      query: req.query
    };

    return res.view('confirmation', locals);
  },

};