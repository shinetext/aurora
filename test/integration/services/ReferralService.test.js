'use strict';

const assert = require('assert');

describe('ReferralService', () => {

  describe('#getNextLevel(0)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(0);
      assert.equal(actual.message, 'Invite 10 more friends to get a Shine sticker!');
      assert.equal(actual.count, 10);
      assert.equal(actual.reward, 'Shine sticker');
    })
  })

  describe('#getNextLevel(9)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(9);
      assert.equal(actual.message, 'Invite 1 more friend to get a Shine sticker!');
      assert.equal(actual.count, 10);
      assert.equal(actual.reward, 'Shine sticker');
    })
  })

  describe('#getNextLevel(10)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(10);
      assert.equal(actual.message, 'Invite 20 more friends to get a Shine tote!');
      assert.equal(actual.count, 30);
      assert.equal(actual.reward, 'Shine tote');
    })
  })

  describe('#getNextLevel(30)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(30);
      assert.equal(actual.message, 'Invite 20 more friends to get a Shine t-shirt!');
      assert.equal(actual.count, 50);
      assert.equal(actual.reward, 'Shine t-shirt');
    })
  })

  describe('#getNextLevel(50)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(50);
      assert.equal(actual.message, 'Invite 50 more friends to get a Shine hoodie!');
      assert.equal(actual.count, 100);
      assert.equal(actual.reward, 'Shine hoodie');
    })
  })

  describe('#getNextLevel(100)', () => {
    it('should return a blank message', () => {
      const actual = ReferralService.getNextLevel(100);
      assert.equal(actual.message, '');
      assert.equal(actual.count, undefined);
      assert.equal(actual.reward, '');
    })
  })

})