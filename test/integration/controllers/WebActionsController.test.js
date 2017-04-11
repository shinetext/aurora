const assert = require('assert');
const WebActionsController = require('../../../api/controllers/WebActionsController');

describe('WebActionsController', () => {

  describe('#createMobileCommonsRequest', () => {
    it('should return the POST object for a Mobile Commons sign up', () => {
      const mockRequest = {
        body: {
          first_name: 'TEST_FNAME',
          phone: '+1 (301) 555-0101',
          email: 'TEST@EXAMPLE.COM',
        }
      };

      const data = WebActionsController.createMobileCommonsRequest(mockRequest);
      assert.equal(typeof data, 'object');
      assert.equal(typeof data.form, 'object');
      assert.equal(data.form['opt_in_path[]'], WebActionsController.MOBILE_COMMONS_OPTIN);
      assert.equal(data.form['person[first_name]'], mockRequest.body.first_name);
      assert.equal(data.form['person[phone]'], mockRequest.body.phone);
      assert.equal(data.form['person[email]'], mockRequest.body.email);
      assert.equal(data.form['person[send_gifs]'], 'no');
      assert.equal(data.form['person[referral_code]'], 'qGl0G4r');

      // Mobile Commons will only save the date portion of the string, so that's
      // all we'll test for here.
      assert.equal(convertToDate(data.form['person[date_signed_up]']), convertToDate((new Date()).toISOString()));
      function convertToDate(date) {
        return date.substr(0, date.indexOf('T'));
      }
    })
  })

  describe('#createMobileCommonsReferralRequest', () => {
    it('should return false when no phone numbers are provided', () => {
      const mockRequest = {
        body: {
          phone: '3015550100',
          invitePhone1: null,
          invitePhone2: '',
          invitePhone3: undefined,
        }
      };

      const data = WebActionsController.createMobileCommonsReferralRequest(mockRequest);
      assert.equal(data, false);
    })

    it('should handle building the request for 1 friend referral', () => {
      const mockRequest = {
        body: {
          phone: '3015550100',
          invitePhone1: '3015550101',
          invitePhone2: '',
          invitePhone3: undefined,
        }
      };

      const data = WebActionsController.createMobileCommonsReferralRequest(mockRequest);
      assert.equal(typeof data, 'object');
      assert.equal(typeof data.form, 'object');
      assert.equal(data.form['opt_in_path[]'], WebActionsController.MOBILE_COMMONS_INVITE_ALPHA_OPTIN);
      assert.equal(data.form['friends_opt_in_path'], WebActionsController.MOBILE_COMMONS_INVITE_BETA_OPTIN);
      assert.equal(data.form['friends[0]'], mockRequest.body.invitePhone1);
      assert.equal(data.form['friends[1]'], undefined);
      assert.equal(data.form['friends[2]'], undefined);
      assert.equal(data.form['friends[0][referral_code]'], 'qGl0G4r');
    })

    it('should handle building the request for 2 friend referrals', () => {
      const mockRequest = {
        body: {
          phone: '3015550100',
          invitePhone1: '3015550101',
          invitePhone2: '',
          invitePhone3: '3015550103',
        }
      };

      const data = WebActionsController.createMobileCommonsReferralRequest(mockRequest);
      assert.equal(typeof data, 'object');
      assert.equal(typeof data.form, 'object');
      assert.equal(data.form['opt_in_path[]'], WebActionsController.MOBILE_COMMONS_INVITE_ALPHA_OPTIN);
      assert.equal(data.form['friends_opt_in_path'], WebActionsController.MOBILE_COMMONS_INVITE_BETA_OPTIN);
      assert.equal(data.form['friends[0]'], mockRequest.body.invitePhone1);
      assert.equal(data.form['friends[1]'], mockRequest.body.invitePhone3);
      assert.equal(data.form['friends[2]'], undefined);
      assert.equal(data.form['friends[0][referral_code]'], 'qGl0G4r');
      assert.equal(data.form['friends[1][referral_code]'], '8WgrW5A');
    })

    it('should handle building the request for 3 friend referral', () => {
      const mockRequest = {
        body: {
          phone: '3015550100',
          invitePhone1: '3015550101',
          invitePhone2: '3015550102',
          invitePhone3: '3015550103',
        }
      };

      const data = WebActionsController.createMobileCommonsReferralRequest(mockRequest);
      assert.equal(typeof data, 'object');
      assert.equal(typeof data.form, 'object');
      assert.equal(data.form['opt_in_path[]'], WebActionsController.MOBILE_COMMONS_INVITE_ALPHA_OPTIN);
      assert.equal(data.form['friends_opt_in_path'], WebActionsController.MOBILE_COMMONS_INVITE_BETA_OPTIN);
      assert.equal(data.form['friends[0]'], mockRequest.body.invitePhone1);
      assert.equal(data.form['friends[1]'], mockRequest.body.invitePhone2);
      assert.equal(data.form['friends[2]'], mockRequest.body.invitePhone3);
      assert.equal(data.form['friends[0][referral_code]'], 'qGl0G4r');
      assert.equal(data.form['friends[1][referral_code]'], 'XZgVZpl');
      assert.equal(data.form['friends[2][referral_code]'], '8WgrW5A');
    })
  })

})