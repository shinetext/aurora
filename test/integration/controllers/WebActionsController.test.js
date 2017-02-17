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
    })
  })

})