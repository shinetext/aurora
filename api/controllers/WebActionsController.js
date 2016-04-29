/**
 * Controller for handling custom actions from the web.
 */

'use strict';

var request = require('request');

module.exports = {

  /**
   * Receives a join request and forwards it onto Mobile Commons.
   *
   * POST /join
   */
  join: function(req, res) {
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

    request.post(url, {form: data}, function(err, response, body) {
      if (err) {
        return res.view(500);
      }

      return res.redirect(redirectUrl);
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