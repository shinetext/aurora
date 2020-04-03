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
import PartnerApp from '../../views/components/PartnerApp';
import CampaignApp from '../../views/components/campaigns/CampaignApp';
import CampaignReferral from '../../views/components/campaigns/CampaignReferral';
Promise.promisifyAll(request);

/**
 * Parses the query object and returns a string that we'll use to pass on the
 * values through the redirect.
 *
 * @param {object} query
 * @return {string}
 */
function compileQueryToString(query) {
  let result = '';
  if (query && Object.entries(query).length > 0) {
    result += '?';
    result += Object.entries(query)
      .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
      .join('&');
  }

  return result;
}

/**
 * Helper method for a 301 redirect that includes passing on any url queries.
 *
 * @param {string} url
 * @param {object} req
 * @param {object} res
 * @return res.redirect()
 */
function redirectWithQueries(path, req, res) {
  return res.redirect(301, `${path}${compileQueryToString(req.query)}`);
}

module.exports = {
  ////////////////////////////// Redirects ///////////////////////////////////
  /**
   * Redirect to the advice page.
   */
  advice: (req, res) => {
    return redirectWithQueries(sails.config.globals.adviceBaseUrl, req, res);
  },

  /**
   * Redirect to the homepage now that Android has launched.
   */
  androidSignUp: function(req, res) {
    return redirectWithQueries('/', req, res);
  },

  /**
   * Redirect to the Shine Premium (web conversion) landing page.
   */
  app: function(req, res) {
    return redirectWithQueries(
      sails.config.globals.premiumShineBaseUrl,
      req,
      res
    );
  },

  /**
   * Articles are hosted on a separate subdomain, but in case people mis-share
   * a link and don't specify the subdomain, we can try to fix that here.
   */
  articlesRedirect: (req, res) => {
    return redirectWithQueries(
      `${sails.config.globals.adviceBaseUrl}${req.url}`,
      req,
      res
    );
  },

  allraise: (req, res) => {
    return redirectWithQueries(
      `https://premium.shinetext.com/promo/allraise`,
      req,
      res
    );
  },

  bumble: (req, res) => {
    return redirectWithQueries(
      `https://mailchi.mp/shinetext.com/bumble`,
      req,
      res
    );
  },

  careers: (req, res) => {
    return redirectWithQueries('/jobs', req, res);
  },

  dreamforce: (req, res) => {
    return redirectWithQueries(
      `https://premium.shinetext.com/promo/dreamforce`,
      req,
      res
    );
  },

  faq: (req, res) => {
    return redirectWithQueries(
      `https://shinetext.zendesk.com/hc/en-us`,
      req,
      res
    );
  },

  gift: (req, res) => {
    return redirectWithQueries(
      `${sails.config.globals.premiumShineBaseUrl}/gift`,
      req,
      res
    );
  },

  mentalhealthbreak: (req, res) => {
    return redirectWithQueries(
      `https://www.nationalmentalhealthbreak.com`,
      req,
      res
    );
  },

  nod: (req, res) => {
    return redirectWithQueries(`/p/nod`, req, res);
  },

  quiz: (req, res) =>
    redirectWithQueries(
      `https://premium.shinetext.com/promo/shine-self-care-day`,
      req,
      res
    ),

  jobs: (req, res) => {
    return redirectWithQueries(sails.config.globals.jobsRedirectUrl, req, res);
  },

  /**
   * Redirect to the Daily Shine homepage.
   */
  daily: (req, res) => {
    return redirectWithQueries(
      sails.config.globals.dailyShineBaseUrl,
      req,
      res
    );
  },

  /**
   * Redirect to specific promo page
   */
  promoRedirect: (req, res) => {
    const promoId = req.url.split('/')[1];
    const utmSourceVeritone = 'utm_source=Veritone_One';
    const utmMedium = 'utm_medium=podcast';
    const utmSourcePartner = 'utm_source=Partner';
    const podcastDirectories = {
      awesome: `sortaawesome?${utmSourceVeritone}&${utmMedium}&utm_campaign=Sorta_Awesome`,
      boost: `dailyboost-2020?utm_source=DailyBoost&utm_medium=podcast&utm_campaign=April2020`,
      dateme: `dateme?${utmSourceVeritone}&${utmMedium}&utm_campaign=Why_Wont_You_Date_Me`,
      dst: `dietstartstomorrow?${utmSourceVeritone}&${utmMedium}&utm_campaign=Diet_Starts_Tomorrow`,
      feelbetter: `feelbetter?${utmSourceVeritone}&${utmMedium}&utm_campaign=Feel_Better_Live_More`,
      feelgood: `feelgood?${utmSourceVeritone}&${utmMedium}&utm_campaign=Feel_Good`,
      forever35: `forever35?${utmSourceVeritone}&${utmMedium}&utm_campaign=Forever35`,
      friendzone: `friendzone?${utmSourceVeritone}&${utmMedium}&utm_campaign=Friend_Zone`,
      glowingup: `glowingup?${utmSourceVeritone}&${utmMedium}&utm_campaign=Glowing_Up`,
      happier: `happierwithgretchenrubin?${utmSourceVeritone}&${utmMedium}&utm_campaign=Happier_with_Gretchen_Rubin`,
      happiness: `scienceofhappiness?${utmSourceVeritone}&${utmMedium}&utm_campaign=Science_of_Happiness`,
      heygirl: `heygirl?${utmSourceVeritone}&${utmMedium}&utm_campaign=Heygirl`,
      hollywood: `happierinhollywood?${utmSourceVeritone}&${utmMedium}&utm_campaign=Happier_in_Hollywood`,
      hurdle: `hurdle?${utmSourcePartner}&${utmMedium}&utm_campaign=Hurdle`,
      jvn: `gettingcuriouswithjvn?${utmSourceVeritone}&${utmMedium}&utm_campaign=JVN`,
      ladygang: `ladygang?${utmSourceVeritone}&${utmMedium}&utm_campaign=LadyGang`,
      molls: `plzadvise?${utmSourceVeritone}&${utmMedium}&utm_campaign=Plz_Advise`,
      mortified: `mortified?${utmSourceVeritone}&${utmMedium}&utm_campaign=Mortified`,
      selfie: `selfie?${utmSourceVeritone}&${utmMedium}&utm_campaign=Selfie`,
      simple: `simple?${utmSourceVeritone}&${utmMedium}&utm_campaign=Simple`,
      sisters: `satellitesisters?${utmSourceVeritone}&${utmMedium}&utm_campaign=Satellite_Sisters`,
      smalldoses: `smalldoses?${utmSourceVeritone}&${utmMedium}&utm_campaign=Small_Doses`,
      who: `whoweekly?${utmSourceVeritone}&${utmMedium}&utm_campaign=Who_Weekly`,
      zigzag: `zigzag?${utmSourceVeritone}&${utmMedium}&utm_campaign=Zigzag`,
      spotify: `spotify?utm_source=spotify&utm_medium=podcast&utm_campaign=Feb2020`,
      podcast: `podcast?utm_source=Shine&utm_medium=podcast&utm_campaign=Podcast_CTA`,
    };

    Promise.coroutine(function*() {
      let isPromo = false;
      const contentfulReq = {
        method: 'GET',
        uri: `https://cdn.contentful.com/spaces/${process.env.PROD_CONTENTFUL_WEBAPP_SPACE_ID}/entries?access_token=${process.env.PROD_CONTENTFUL_WEBAPP_ACCESS_TOKEN}&fields.promoId=${promoId}&content_type=promoConfig`,
        json: true,
      };

      try {
        const response = yield request.getAsync(contentfulReq);
        if (response.body.total > 0) {
          isPromo = true;
        }
      } catch (error) {
        console.log('error: ', error);
        isPromo = false;
      }
      // If the promotion configuration exists on contenful or in podcast directory redirect users to premium shinetext
      // else send users to 404 page.
      if (isPromo) {
        return res.redirect(
          301,
          `${sails.config.globals.premiumShineBaseUrl}/promo/${promoId}`
        );
      } else if (podcastDirectories[promoId]) {
        return res.redirect(
          301,
          `${sails.config.globals.premiumShineBaseUrl}/promo/${podcastDirectories[promoId]}`
        );
      } else {
        return res.view(404);
      }
    })();
  },

  squad: (req, res) => {
    return redirectWithQueries(
      `https://join.shinetext.com/promo/shine-squad`,
      req,
      res
    );
  },

  virusanxiety: (req, res) => {
    return redirectWithQueries(`https://virusanxiety.com`, req, res);
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
      if (req.query.signup === 'android') {
        headerText = `You’re all signed up—stay tuned!`;
      } else {
        headerText = req.query.referral
          ? `Thanks for sharing!`
          : `You're all signed up!`;
      }
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
      hideFooterCta: true,
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
          metaDescription: `The Shine Squad is our brand ambassador community. It’s a supportive, global, *judgment-free* group of people,
            helping each other through life’s highs, lows, and confusing “mehs” across work, relationships, mental health,
            and beyond. It’s the sounding board you never knew you needed.`,
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
          if (
            locals.referralInfo.nextLevel.reward === 'Shine Squad Invitation'
          ) {
            locals.referralInfo.rewardImage = 'reward-image-4';
          } else if (locals.referralInfo.nextLevel.reward === 'Shine Sticker') {
            locals.referralInfo.rewardImage = 'reward-image-1';
          } else if (locals.referralInfo.nextLevel.reward === 'Shine T-shirt') {
            locals.referralInfo.rewardImage = 'reward-image-3';
          } else if (locals.referralInfo.nextLevel.reward === 'Shine Journal') {
            locals.referralInfo.rewardImage = 'reward-image-9';
          } else if (
            locals.referralInfo.nextLevel.reward === 'Shine Water Bottle'
          ) {
            locals.referralInfo.rewardImage = 'reward-image-7';
          } else {
            locals.referralInfo.rewardImage = 'reward-image-5';
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
