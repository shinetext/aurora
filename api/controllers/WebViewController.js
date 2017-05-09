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

  careers: (req, res) => {
    return res.redirect(301, '/jobs');
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
      headerImage: 'images/confirmation-header.gif',
      hideFooterCta: true,
      firstName: req.query.firstName ? req.query.firstName : '',
      fromReferral: req.query.referral ? true : false,
      phone: req.query.phone ? req.query.phone : '',
      query: req.query,
      referralCode: req.query.referralCode ? req.query.referralCode : '',
      shareUrls: this.makeShareUrls(req.query.referralCode),
    };

    return res.view('confirmation', locals);
  },

  /**
   * Display the homepage view.
   */
  home: function(req, res) {
    let locals = {
      adviceBaseUrl: sails.config.globals.adviceBaseUrl,
      referredByCode: req.query.r,
      utmSource: req.query.utm_source,
      utmMedium: req.query.utm_medium,
      view: 'homepage',
    };

    return res.view('homepage', locals);
  },

  /**
   * Display the user's referral info .
   */
  myReferral: function(req, res) {
    const _this = this;
    Promise.coroutine(function* () {
      let referralRequest = {
        method: 'GET',
        uri: sails.config.globals.photonApiUrl + '/referral/' + req.params.phone,
        json: true
      };

      try {
        const response = yield request.getAsync(referralRequest);

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
          else if (locals.referralInfo.nextLevel.reward === 'Shine call-out') {
            locals.referralInfo.rewardImage = 'reward-image-4';
          }
          else if (locals.referralInfo.nextLevel.reward === 'Shine hoodie') {
            locals.referralInfo.rewardImage = 'reward-image-5';
          }
          else if (locals.referralInfo.nextLevel.reward === 'Shine leggings') {
            locals.referralInfo.rewardImage = 'reward-image-6';
          }
          else {
            locals.referralInfo.rewardImage = 'reward-image-6';
          }

          // Create the share URLs
          locals.shareUrls = _this.makeShareUrls(response.body.referralCode);
        }

        return res.view('my-referrals', locals);
      }
      catch(err) {
        sails.log.error(err);
        return res.view(500);
      }
    })();
  },

  /**
   * View for setting SMS settings. Typically shown immediately after a
   * sign up and before the confirmation page.
   */
  smsSettings: function(req, res) {
    let locals = {
      user: {
        firstName: req.query.firstName,
        phone: req.query.phone,
        referralCode: req.query.referralCode,
      },
      layout: 'layouts/subpage-fullwidth.layout',
      hideFooterCta: true,
    };

    return res.view('sms-settings', locals);
  },

  /**
   * Helper function to make social share URLs.
   *
   * @param referralCode {string}
   * @return {object}
   */
  makeShareUrls: function(referralCode) {
    const shareBody = `Sign up with me to get Shine! A daily text for your self-care and joy.`;
    const shareTitle = `Sign up for Shine!`;
    const shareUrl = `http://www.shinetext.com?r=${referralCode}`;

    return {
      email: `mailto:?subject=${shareTitle}&body=${shareBody} ${shareUrl}`,
      facebook: `http://www.facebook.com/sharer/sharer.php?u=${shareUrl}&title=${shareTitle}&description=${shareBody}`,
      sms: `sms:?&body=${shareBody} ${shareUrl}`,
      twitter: `http://twitter.com/intent/tweet?url=${shareUrl}&text=${shareBody}&via=ShineText`,
    };
  }

};
