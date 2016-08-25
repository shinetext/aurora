/**
 * Controller for handling custom actions from the web.
 */

'use strict';

var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));

module.exports = {

  /**
   * Receives a join request and forwards it onto Mobile Commons.
   *
   * POST /join
   */
  join: function(req, res) {

    // Data for Mobile Commons submission
    let optInPath = 'OP4B1A27AC508266A1F4373419CE1BE391';
    let url = sails.config.globals.mcJoinUrl;

    let data = {
      'opt_in_path[]': optInPath,
      'person[first_name]': req.body.first_name,
      'person[phone]': req.body.phone,
      'person[email]': req.body.email,
      'person[send_gifs]': typeof req.body.send_gifs === 'undefined' ? 'no' : 'yes'
    };

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
    request.postAsync(url, {form: data})
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
   * Receives a friend referral request and forwards it onto Mobile Commons.
   *
   * POST /refer
   */
  refer: function(req, res) {
    let optInPath = 'OP4B1A27AC508266A1F4373419CE1BE391';
    let friendsOptInPath = 'OPE8B3F738CF07CE0C3AFA3F45A5E155ED';
    let url = sails.config.globals.mcJoinUrl;

    let data = {
      'opt_in_path[]': optInPath,
      'person[first_name]': req.body.first_name,
      'person[phone]': req.body.phone,
      'friends_opt_in_path': friendsOptInPath,
    };
    let redirectUrl = '/confirmation?phone=' + req.body.phone + '&firstName='
      + req.body.first_name + '&referral=true';

    // Add in the referred friend #s. :\
    let validFriends = [];
    for (let i = 0; i < req.body.friends.length; i++) {
      if (req.body.friends[i].length > 0) {
        validFriends[validFriends.length] = req.body.friends[i];
      }
    }

    if (validFriends.length == 1) {
      data['friends[]'] = validFriends[0];
    }
    else if (validFriends.length > 1) {
      for (let i = 0; i < validFriends.length; i++) {
        data['friends['+i+']'] = validFriends[i];
      }
    }

    request.post(url, {form: data}, function(err, response, body) {
      if (err) {
        return res.view(500);
      }

      return res.redirect(redirectUrl);
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