/**
 * Controller for handling custom view logic for the web.
 */

'use strict';

var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));

module.exports = {

  /**
   * Display /advice view.
   */
  advice: (req, res) => {
    let locals = {
      title: 'Get Advice | Shine',
    };

    const adviceReq = {
      method: 'GET',
      uri: sails.config.globals.adviceJsonAllUrl,
      json: true,
    };

    request.getAsync(adviceReq)
      .then((response) => {
        if (response && response.body) {
          locals.advice = response.body;
        }

        return res.view('advice', locals);
      })
      .catch((err) => {
        sails.log.error(err);
        return res.view(500, locals);
      });
  },

  /**
   * Display /confirmation view and pass along any query params.
   */
  confirmation: function(req, res) {
    let locals = {
      title: 'Confirmed! | Shine',
      layout: 'layouts/subpageCustomHeader.layout',
      firstName: req.query.firstName ? req.query.firstName : '',
      phone: req.query.phone ? req.query.phone : '',
      query: req.query,
      referralCode: req.query.referralCode ? req.query.referralCode : ''
    };

    locals.headerImage = "images/confirmation-header.gif";
    if (req.query.referral) {
      locals.headerText = "Thanks for sharing!";
      locals.bodyText = "Got more friends who would appreciate Shine? Spread some more motiv-affirmation!";
    }
    else {
      locals.headerText = "You're all signed up!";
      locals.bodyText = "You're now signed up for Shine. Your daily texts will start on the next business day. Spread the motiv-affirmation and share with friends!";
    }

    return res.view('confirmation', locals);
  },

  /**
   * Display the homepage view.
   */
  home: function(req, res) {
    let locals = {
      referredByCode: req.query.r
    };

    const adviceReq = {
      method: 'GET',
      uri: sails.config.globals.adviceJsonPromotedUrl,
      json: true,
    };

    request.getAsync(adviceReq)
      .then((response) => {
        if (response && response.body) {
          locals.advice = response.body;
        }

        return res.view('homepage', locals);
      })
      .catch((err) => {
        sails.log.error(err);
        return res.view('homepage', locals);
      });
  },

  /**
   * Display the user's referral info .
   */
  myReferral: function(req, res) {
    let locals = {
      title: 'My Referrals | Shine',
      layout: 'layouts/subpage.layout',
    };

    let referralRequest = {
      method: 'GET',
      uri: sails.config.globals.photonApiUrl + '/referral/' + req.params.phone,
      json: true
    };

    request.getAsync(referralRequest)
      .then(function(response) {
        if (response.statusCode === 200) {
          locals.referralInfo = response.body;
          locals.referralInfo.nextLevelTeaser = ReferralService.getNextLevelTeaser(response.body.referralCount);
        }

        return res.view('my-referrals', locals);
      })
      .catch(function(err) {
        sails.log.error(err);
        return res.view(500);
      });
  },

};
