/**
 * Controller for handling custom view logic for the web.
 */

'use strict';

import Promise from 'bluebird';
import request from 'request';
import PartnerService from '../services/PartnerService';
import CampaignService from '../services/CampaignService';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SplashPage from '../../views/components/splashpage/SplashPage';
import AndroidSignUp from '../../views/components/AndroidSignUp';
import AppPage from '../../views/components/app-page/AppPage';
import PartnerApp from '../../views/components/PartnerApp';
import CampaignApp from '../../views/components/campaigns/CampaignApp';
import CampaignReferral from '../../views/components/campaigns/CampaignReferral';
Promise.promisifyAll(request);

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

  nod: (req, res) => {
    return res.redirect(301, '/p/nod');
  },

  jobs: (req, res) => {
    return res.redirect(302, `${sails.config.globals.jobsRedirectUrl}`);
  },

  /**
   * Redirect to the Daily Shine homepage.
   */
  daily: (req, res) => {
    return res.redirect(301, sails.config.globals.dailyShineBaseUrl);
  },

  ////////////////////////////////////////////////////////////////////////////

  squad: (req, res) => {
    let locals = {
      title: 'Squad | Shine',
      metaDescription:
        "The Shine Squad is a supportive community of people who lift others up and motivate others to be their best. Be the first to get updates from the Shine team and have a community to brag about your wins and lean on when you're not feeling so hot",
      layout: 'layouts/subpage-fullwidth.layout',
      hideFooterCta: true,
      adviceBaseUrl: sails.config.globals.adviceBaseUrl,
    };
    return res.view('squad', locals);
  },

  /**
   * Display /confirmation view and pass along any query params.
   */
  confirmation: function(req, res) {
    let headerImage, headerText, bodyCopy;
    if (req.query.partner) {
      const partnerConfirmation = PartnerService.getPartner(req.query.partner)
        .confirmation;
      headerImage = partnerConfirmation.imageUrl;
      headerText = partnerConfirmation.copy;
    } else if (req.query.campaign) {
      const campaignConfirmation = CampaignService.getCampaign(
        req.query.campaign.toLowerCase()
      ).confirmation;
      headerImage = campaignConfirmation.imageUrl;
      headerText = campaignConfirmation.header;
      bodyCopy = campaignConfirmation.copy;
    } else {
      headerImage = 'images/confirmation-header-happy-dance.gif';
      headerText = req.query.referral
        ? `Thanks for sharing!`
        : `You're all signed up!`;
    }

    let locals = {
      title: 'Confirmed! | Shine',
      layout: 'layouts/subpageCustomHeader.layout',
      headerText: headerText,
      headerImage: headerImage,
      bodyCopy: bodyCopy ? bodyCopy : '',
      hideFooterCta: true,
      firstName: req.query.firstName ? req.query.firstName : '',
      fromReferral: req.query.referral ? true : false,
      fromPartner: req.query.partner ? true : false,
      fromCampaign: req.query.campaign ? true : false,
      fromAndroidSignUp: req.query.signup === 'android' ? true : false,
      phone: req.query.phone ? req.query.phone : '',
      query: req.query,
      referralCode: req.query.referralCode ? req.query.referralCode : '',
      shareUrls: this.makeShareUrls(req.query.referralCode, 'Confirmation'),
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
      utmCampaign: req.query.utm_campaign,
      utmContent: req.query.utm_content,
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
    Promise.coroutine(function*() {
      let referralRequest = {
        method: 'GET',
        uri:
          sails.config.globals.photonApiUrl + '/referral/' + req.params.phone,
        json: true,
      };

      try {
        const response = yield request.getAsync(referralRequest);

        let locals = {
          title: 'My Referrals | Shine',
          metaDescription:
            "The Shine Squad is a supportive community of people who lift others up and motivate others to be their best. Be the first to get updates from the Shine team and have a community to brag about your wins and lean on when you're not feeling so hot",
          layout: 'layouts/subpage-fullwidth.layout',
          hideFooterCta: true,
          shareUrls: {},
        };

        if (response.statusCode === 200) {
          locals.referralInfo = response.body;
          locals.referralInfo.nextLevel = ReferralService.getNextLevel(
            response.body.referralCount
          );

          // @todo Not sure if this is should be the final solution for handling this
          if (locals.referralInfo.nextLevel.reward === 'Shine sticker') {
            locals.referralInfo.rewardImage = 'reward-image-1';
          } else if (locals.referralInfo.nextLevel.reward === 'Shine tote') {
            locals.referralInfo.rewardImage = 'reward-image-2';
          } else if (locals.referralInfo.nextLevel.reward === 'Shine t-shirt') {
            locals.referralInfo.rewardImage = 'reward-image-3';
          } else if (
            locals.referralInfo.nextLevel.reward === 'Shine call-out'
          ) {
            locals.referralInfo.rewardImage = 'reward-image-4';
          } else if (locals.referralInfo.nextLevel.reward === 'Shine hoodie') {
            locals.referralInfo.rewardImage = 'reward-image-5';
          } else if (
            locals.referralInfo.nextLevel.reward === 'Shine leggings'
          ) {
            locals.referralInfo.rewardImage = 'reward-image-6';
          } else {
            locals.referralInfo.rewardImage = 'reward-image-6';
          }

          // Create the share URLs
          locals.shareUrls = _this.makeShareUrls(
            response.body.referralCode,
            'ReferralPage'
          );
        }

        return res.view('my-referrals', locals);
      } catch (err) {
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
   * View for partner/influencer microsite
   *
   */
  partners: function(req, res) {
    try {
      const partnerName = req.params.partner.toLowerCase();
      const partner = PartnerService.getPartner(partnerName);
      const partnerComponentMarkup = ReactDOMServer.renderToString(
        <PartnerApp {...partner} partnerId={partnerName} />
      );
      const locals = {
        layout: 'layouts/subpage-fullwidth.layout',
        partnerComponent: partnerComponentMarkup,
        hideFooterCta: true,
      };
      return res.view('partner-signup', locals);
    } catch (err) {
      sails.log.error(err);
      return res.view(404);
    }
  },

  /**
   * View for android interest email signup
   *
   */
  androidSignUp: function(req, res) {
    try {
      const androidSignUpComponentMarkup = ReactDOMServer.renderToString(
        <AndroidSignUp />
      );
      const locals = {
        layout: 'layouts/subpage-fullwidth-no-header.layout',
        androidSignUpComponent: androidSignUpComponentMarkup,
        hideFooterCta: true,
      };
      return res.view('android-signup', locals);
    } catch (err) {
      sails.log.error(err);
      return res.view(404);
    }
  },

  /**
   * View for mobile app splash
   *
   */
  splash: function(req, res) {
    try {
      const splashComponentMarkup = ReactDOMServer.renderToString(
        <SplashPage />
      );
      const locals = {
        layout: 'layouts/subpage-fullwidth-no-header.layout',
        splashComponent: splashComponentMarkup,
        hideFooterCta: false,
      };
      return res.view('splash-page', locals);
    } catch (err) {
      sails.log.error(err);
      return res.view(404);
    }
  },

  /**
   * View for mobile app splash
   *
   */
  app: function(req, res) {
    try {
      const appPageComponentMarkup = ReactDOMServer.renderToString(<AppPage />);
      const locals = {
        layout: 'layouts/subpage-fullwidth-no-header.layout',
        appPageComponent: appPageComponentMarkup,
        hideFooterCta: true,
      };
      return res.view('app-page', locals);
    } catch (err) {
      sails.log.error(err);
      return res.view(404);
    }
  },

  /**
   * View for campaign/influencer microsite
   *
   */
  campaigns: function(req, res) {
    try {
      let campaignName = req.params.campaign.toLowerCase();
      const campaign = CampaignService.getCampaign(campaignName);
      const campaignComponentMarkup = ReactDOMServer.renderToString(
        <CampaignApp {...campaign} campaignId={campaignName} />
      );
      const locals = {
        layout: 'layouts/subpage-fullwidth.layout',
        campaignComponent: campaignComponentMarkup,
        hideFooterCta: true,
      };
      return res.view('campaign', locals);
    } catch (err) {
      sails.log.error(err);
      return res.view(404);
    }
  },

  /**
   * View for campaign referrals component
   *
   */
  campaignReferral: function(req, res) {
    try {
      let campaignName = req.params.campaign.toLowerCase();
      const campaign = CampaignService.getCampaign(campaignName);
      const campaignComponentMarkup = ReactDOMServer.renderToString(
        <CampaignReferral
          {...campaign}
          campaignId={campaignName}
          referrerInfo={req.query}
          betasOnly={true}
        />
      );
      const locals = {
        layout: 'layouts/subpage-fullwidth.layout',
        campaignComponent: campaignComponentMarkup,
        hideFooterCta: true,
      };
      return res.view('campaign', locals);
    } catch (err) {
      sails.log.error(err);
      return res.view(404);
    }
  },

  /**
   * Helper function to make social share URLs.
   *
   * @param referralCode {string}
   * @return {object}
   */
  makeShareUrls: function(referralCode, campaign) {
    const shareBody = `Sign up with me to get Shine! A daily text for your self-care and joy.`;
    const shareTitle = `Sign up for Shine!`;
    const shareUrl = `https://www.shinetext.com?r=${referralCode}%26utm_source=Shine`;

    // Add UTM campaign if one is available
    const facebookShareUrl = `${shareUrl}%26utm_medium=SocialShareFacebook${
      campaign ? '%26utm_campaign=' + campaign : ''
    }`;
    const twitterShareUrl = `${shareUrl}%26utm_source=Shine%26utm_medium=SocialShareTwitter${
      campaign ? '%26utm_campaign=' + campaign : ''
    }`;
    const smsShareUrl = `${shareUrl}%26utm_source=Shine%26utm_medium=SocialShareSMS${
      campaign ? '%26utm_campaign=' + campaign : ''
    }`;
    const emailShareUrl = `${shareUrl}%26utm_source=Shine%26utm_medium=SocialShareEmail${
      campaign ? '%26utm_campaign=' + campaign : ''
    }`;

    const twitterShareBody =
      'A text that sends you daily self-care advice? Yes, please. Join me %26 sign up for Shine! %23ShineOn';
    const smsShareBody =
      'Hey! I just signed up for Shine %26 thought you would love this - Shine sends a free, daily motivational text message to make your morning better. Sign up with my link here:';
    const emailShareTitle = "Thought you'd like this!";
    const emailShareBody =
      'Hey! Thought you would love this - Shine sends a free, daily motivational text message to make your morning better. Sign up with my link here: ';

    return {
      email: `mailto:?subject=${shareTitle}&body=${shareBody} ${emailShareUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${facebookShareUrl}&title=${shareTitle}&description=${shareBody}`,
      sms: `sms:?&body=${smsShareBody} ${emailShareUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${twitterShareUrl}&text=${twitterShareBody}&via=ShineText`,
    };
  },
};
