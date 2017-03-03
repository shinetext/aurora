/**
 * Controller for handling custom actions from the web.
 */

'use strict';

var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));
const Mixpanel = require('mixpanel');
let mixpanel;
if (process.env.MIXPANEL_TOKEN) {
  mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN);
}
const ReferralCodes = require('@jonuy/referral-codes');

module.exports = {

  /**
   * Mobile Commons opt-in path to send on sign up.
   * https://secure.mcommons.com/campaigns/147689/opt_in_paths/222196
   */
  MOBILE_COMMONS_OPTIN: 'OPB1AA249928CF5621FE3CA64715CB1B44',

  /**
   * Mobile Commons SMS sent to people who are sending a referral invite.
   * @todo
   */
  MOBILE_COMMONS_INVITE_ALPHA_OPTIN: '@TODO INVITE ALPHA OPTIN',

  /**
   * Mobile Commons SMS sent to people who are receiving a referral invite.
   * @todo
   */
  MOBILE_COMMONS_INVITE_BETA_OPTIN: '@TODO INVITE BETA OPTIN',

  /**
   * Prepares a the POST data for the Mobile Commons submission.
   *
   * @param req {object}
   * @return {object}
   */
  createMobileCommonsRequest: function(req) {
    return {
      form: {
        'opt_in_path[]': this.MOBILE_COMMONS_OPTIN,
        'person[first_name]': req.body.first_name,
        'person[phone]': req.body.phone,
        'person[email]': req.body.email,
        'person[send_gifs]': typeof req.body.send_gifs === 'undefined' ? 'no' : 'yes',
        'person[referral_code]': ReferralCodes.encode(req.body.phone),
      }
    };
  },

  /**
   * Receives a join request and forwards it onto Mobile Commons.
   *
   * POST /join
   */
  join: function(req, res) {
    let redirectUrl = '/confirmation?phone=' + req.body.phone + '&firstName='
      + req.body.first_name;

    let photonRequest = {
      method: 'POST',
      uri: sails.config.globals.photonApiUrl + '/signup',
      json: true,
      body: {
        firstName: req.body.first_name,
        phone: req.body.phone,
        email: req.body.email,
        referredByCode: req.body.referredByCode,
        // @todo sendGifs?
      }
    };

    // Flag indicating the subscription to Mobile Commons was successful
    let mcSubscribeSuccessful = false;

    // Make the Mobile Commons submission
    request.postAsync(sails.config.globals.mcJoinUrl, this.createMobileCommonsRequest(req))
      .then(function(response) {
        // Mobile Commons responds with a 500 error code for numbers from
        // countries that are not supported by the account.
        if (response.statusCode == 500) {
          throw new ErrorMobileCommonsJoin(response.body);
        }
        else if (response.statusCode !== 200) {
          throw new Error();
        }

        mcSubscribeSuccessful = true;

        // Post the signup to Photon too
        return request.postAsync(photonRequest);
      })
      .then(function(response) {
        let referralCode = '';
        if (response.body && typeof response.body.referralCode === 'string') {
          referralCode = response.body.referralCode;
        }

        // Adds as a subscriber to MailChimp if we have an email
        if (typeof req.body.email === 'string' && req.body.email.length > 0) {
          // @todo Implement additional email validation?
          // @todo Not currently handling failed API calls
          const mailchimpRequest = {
            method: 'POST',
            uri: `${sails.config.globals.mailchimpApiUrl}/lists/${sails.config.globals.mailchimpListId}/members`,
            json: true,
            auth: {
              user: sails.config.globals.mailchimpApiAuthUser,
              pass: sails.config.globals.mailchimpApiAuthPass,
            },
            body: {
              email_address: req.body.email,
              status: 'subscribed',
              merge_fields: {
                FNAME: req.body.first_name,
                PHONE: req.body.phone,
                REFERRAL: referralCode,
              },
            },
          };

          request.postAsync(mailchimpRequest)
            .then((response) => {
              if (! response || ! response.body) {
                sails.log.error('Invalid response received from MailChimp subscribe call.');
              }
              else {
                sails.log.info('Successful MailChimp subscribe');
                sails.log.info(`  id: ${response.body.id}`);
                sails.log.info(`  unique_email_id: ${response.body.unique_email_id}`);
              }
            })
            .catch((err) => {
              sails.log.error(err);
            });
        }

        // If available, attach the referralCode to the redirect URL
        if (referralCode.length > 0) {
          redirectUrl += '&referralCode=' + response.body.referralCode;

          // Track sign up and identify with the referral code
          mixpanel.track('Sign Up', {
            distinct_id: referralCode,
            platform: 'sms',
            source: 'web',
          });
        }

        return res.redirect(redirectUrl);
      })
      .catch(ErrorMobileCommonsJoin, function(err) {
        sails.log.error(err);
        return res.redirect('try-messenger');
      })
      .catch(function(err) {
        sails.log.error(err);

        // Even on error, display the confirmation screen if at least the Mobile
        // Commons subscription was successful.
        if (mcSubscribeSuccessful) {
          return res.redirect(redirectUrl);
        }
        else {
          return res.redirect(500);
        }
      });

  },

  /**
   * Helper to create the request for sending Mobile Commons referral invites.
   *
   * @param req {object}
   * @return {object || false}
   */
  createMobileCommonsReferralRequest: function(req) {
    let data = {
      form: {
        'opt_in_path[]': this.MOBILE_COMMONS_INVITE_ALPHA_OPTIN,
        'person[phone]': req.body.phone,
        'friends_opt_in_path': this.MOBILE_COMMONS_INVITE_BETA_OPTIN,
      },
    };

    let numFriends = 0;
    const friends = [req.body.invitePhone1, req.body.invitePhone2, req.body.invitePhone3];
    for (const friend of friends) {
      if (friend) {
        data.form[`friends[${numFriends}]`] = friend;
        numFriends++;
      }
    }

    if (numFriends === 0) {
      return false;
    }
    else {
      return data;
    }
  },

  /**
   * Uses Mobile Commons to send an SMS invite to friends.
   *
   * POST /sms-invite
   */
  smsInvite: function(req, res) {
    const data = this.createMobileCommonsReferralRequest(req);

    if (! data) {
      return res.json(400, {status: 'No referral phone numbers provided'});
    }

    request.postAsync(sails.config.globals.mcJoinUrl, mcRequest)
      .then(response => {
        if (response.statusCode === 200) {
          return res.json(200, {status: 'ok'});
        }
        else {
          return res.json(response.statusCode, {
            error: 'Error sending referral invites',
          });
        }
      })
      .catch(err => {
        sails.log.error(err);
        return res.json(500, {
          error: 'Error sending referral invites',
        });
      });
  },

};

/**
 * Custom error from a Mobile Commons join request.
 */
class ErrorMobileCommonsJoin extends Error {
  constructor(message) {
    super(message);
  }
}