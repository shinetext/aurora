/**
 * Controller for handling custom view logic for the web.
 */

'use strict';

var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));

module.exports = {

  ////////////////////////////// Redirects ///////////////////////////////////

  /**
   * Redirect to the advice page.
   */
  advice: (req, res) => {
    return res.redirect(301, sails.config.globals.adviceBaseUrl);
  },

  /**
   * Articles are hosted on a separate subdomain, but in case people mis-share
   * a link and don't specify the subdomain, we can try to fix that here.
   */
  articlesRedirect: (req, res) => {
    return res.redirect(301, `${sails.config.globals.adviceBaseUrl}${req.url}`);
  },

  /**
   * Redirect to the Daily Shine homepage.
   */
  daily: (req, res) => {
    return res.redirect(301, sails.config.globals.dailyShineBaseUrl);
  },

  /**
   * Redirect to the Shinevisor page.
   */
  talk: (req, res) => {
    return res.redirect(301, sails.config.globals.talkBaseUrl);
  },

  ////////////////////////////////////////////////////////////////////////////

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
      adviceBaseUrl: sails.config.globals.adviceBaseUrl,
      referredByCode: req.query.r,
      view: 'homepage',
    };

    return res.view('homepage', locals);
  },

  /**
   * Display the user's referral info .
   */
  myReferral: function(req, res) {
    let referralRequest = {
      method: 'GET',
      uri: sails.config.globals.photonApiUrl + '/referral/' + req.params.phone,
      json: true
    };

    request.getAsync(referralRequest)
      .then(function(response) {
        let locals = {
          title: 'My Referrals | Shine',
          metaDescription: "The Shine Squad is a supportive community of people who lift others up and motivate others to be their best. Be the first to get updates from the Shine team and have a community to brag about your wins and lean on when you're not feeling so hot",
          layout: 'layouts/subpage-fullwidth.layout',
          hideFooterCta: true,
          shareUrls: {},
        };

        if (response.statusCode === 200) {
          locals.referralInfo = response.body;
          locals.referralInfo.nextLevel = ReferralService.getNextLevel(response.body.referralCount);

          // @todo Not sure if this is should be the final solution for handling this
          if (locals.referralInfo.nextLevel.reward === 'Shine sticker') {
            locals.referralInfo.rewardImage = 'reward-image-1';
          }
          else if (locals.referralInfo.nextLevel.reward === 'Shine tote') {
            locals.referralInfo.rewardImage = 'reward-image-2';
          }
          else if (locals.referralInfo.nextLevel.reward === 'Shine t-shirt') {
            locals.referralInfo.rewardImage = 'reward-image-3';
          }
          else if (locals.referralInfo.nextLevel.reward === 'Shine hoodie') {
            locals.referralInfo.rewardImage = 'reward-image-4';
          }

          // Create the share URLs
          const shareBody = `Sign up with me to get Shine! A daily text to help you feel your best every morning.`;
          const shareTitle = `Sign up for Shine!`;
          const shareUrl = `http://www.shinetext.com?r=${response.body.referralCode}`;

          locals.shareUrls.email = `mailto:?subject=${shareTitle}&body=${shareBody} ${shareUrl}`;
          locals.shareUrls.facebook = `http://www.facebook.com/sharer/sharer.php?u=${shareUrl}&title=${shareTitle}&description=${shareBody}`;
          locals.shareUrls.sms = `sms:?&body=${shareBody} ${shareUrl}`;
          locals.shareUrls.twitter = `http://twitter.com/intent/tweet?url=${shareUrl}&text=${shareBody}&via=ShineText`;
        }

        return res.view('my-referrals', locals);
      })
      .catch(function(err) {
        sails.log.error(err);
        return res.view(500);
      });
  },

};
