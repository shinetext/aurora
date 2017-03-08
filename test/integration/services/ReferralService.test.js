'use strict';

const assert = require('assert');

describe('ReferralService', () => {

  describe('#getNextLevel(0)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(0);
      assert.equal(actual.count, 10);
      assert.equal(actual.reward, 'Shine sticker');
    })
  })

  describe('#getNextLevel(9)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(9);
      assert.equal(actual.count, 10);
      assert.equal(actual.reward, 'Shine sticker');
    })
  })

  describe('#getNextLevel(10)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(10);
      assert.equal(actual.count, 20);
      assert.equal(actual.reward, 'Shine tote');
    })
  })

  describe('#getNextLevel(20)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(20);
      assert.equal(actual.count, 30);
      assert.equal(actual.reward, 'Shine t-shirt');
    })
  })

  describe('#getNextLevel(30)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(30);
      assert.equal(actual.count, 50);
      assert.equal(actual.reward, 'Shine call-out');
    })
  })

  describe('#getNextLevel(50)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(50);
      assert.equal(actual.count, 100);
      assert.equal(actual.reward, 'Shine hoodie');
    })
  })

  describe('#getNextLevel(100)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(100);
      assert.equal(actual.count, 500);
      assert.equal(actual.reward, 'Shine leggings');
    })
  })

  describe('#getNextLevel(500)', () => {
    it('should return a blank message', () => {
      const actual = ReferralService.getNextLevel(500);
      assert.equal(actual.message, '');
      assert.equal(actual.count, undefined);
      assert.equal(actual.reward, '');
    })
  })

})