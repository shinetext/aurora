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
    let url = 'https://secure.mcommons.com/profiles/join';
    let data = {
      'opt_in_path[]': optInPath,
      'person[first_name]': req.body.first_name,
      'person[phone]': req.body.phone,
      'person[email]': req.body.email,
      'person[send_gifs]': typeof req.body.send_gifs === 'undefined' ? 'no' : 'yes'
    };
    let redirectUrl = '/confirmation?phone=' + req.body.phone + '&first_name='
      + req.body.first_name;

    // Make the Mobile Commons submission
    request.postAsync(url, {form: data})
      .then(function(response) {
        // Separately make a request to Photon
        // @todo consider sending this to a queue instead in case Photon is unavailable
        photonSignup();

        return res.redirect(redirectUrl);
      })
      .catch(function(err) {
        sails.log.error(err);
        return res.view(500);
      });

    //
    // Makes the signup submission to Photon.
    //
    function photonSignup() {
      let photonUrl = process.env.PHOTON_URL || 'http://localhost:1338';
      let photonRequest = {
        method: 'POST',
        uri: photonUrl + '/signup',
        json: true,
        body: {
          firstName: req.body.first_name,
          phone: req.body.phone,
          email: req.body.email,
          // @todo referredByCode
          // @todo sendGifs?
        }
      };

      request.post(photonRequest, function(err, response, body) {
        if (err) {
          sails.log.error(err);
        }
      });
    } // end photonSignup()

  },

  /**
   * Receives a friend referral request and forwards it onto Mobile Commons.
   *
   * POST /refer
   */
  refer: function(req, res) {
    let optInPath = 'OP4B1A27AC508266A1F4373419CE1BE391';
    let friendsOptInPath = 'OPE8B3F738CF07CE0C3AFA3F45A5E155ED';
    let url = 'https://secure.mcommons.com/profiles/join';
    let data = {
      'opt_in_path[]': optInPath,
      'person[first_name]': req.body.first_name,
      'person[phone]': req.body.phone,
      'friends_opt_in_path': friendsOptInPath,
    };
    let redirectUrl = '/confirmation?phone=' + req.body.phone + '&first_name='
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