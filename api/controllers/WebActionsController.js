/**
 * Controller for handling custom actions from the web.
 */

'use strict';

var Promise = require('bluebird');
var request = Promise.promisifyAll(require('request'));

module.exports = {

  /**
   * Forwards the referral request onto Photon.
   *
   * GET /referral/:phone
   */
  getReferralInfo: function(req, res) {
    var referralRequest = {
      method: 'GET',
      uri: sails.config.globals.photonApiUrl + '/referral/' + req.params.phone,
      json: true
    };

    request.getAsync(referralRequest)
      .then(function(response) {
        if (response.statusCode === 200) {
          return res.json(response.body);
        }
        else {
          return res.json(response.statusCode, response.body);
        }
      })
      .catch(function(err) {
        sails.log.error(err);
        return res.json(500, {});
      });
  },

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
        if (response.statusCode !== 200) {
          throw new Error();
        }

        mcSubscribeSuccessful = true;

        // Post the signup to Photon too
        return request.postAsync(photonRequest);
      })
      .then(function(response) {
        // If available, attach the referralCode to the redirect URL
        if (response.body && typeof response.body.referralCode === 'string') {
          redirectUrl += '&referralCode=' + response.body.referralCode;
        }

        return res.redirect(redirectUrl);
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