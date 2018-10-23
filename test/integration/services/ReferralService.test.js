'use strict';

const assert = require('assert');

describe('ReferralService', () => {
  describe('#getNextLevel(0)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(0);
      assert.equal(actual.count, 5);
      assert.equal(actual.reward, 'Shine Squad Invitation');
    });
  });

  describe('#getNextLevel(5)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(5);
      assert.equal(actual.count, 10);
      assert.equal(actual.reward, 'Shine Sticker');
    });
  });

  describe('#getNextLevel(9)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(9);
      assert.equal(actual.count, 10);
      assert.equal(actual.reward, 'Shine Sticker');
    });
  });

  describe('#getNextLevel(10)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(10);
      assert.equal(actual.count, 20);
      assert.equal(actual.reward, 'Shine T-shirt');
    });
  });

  describe('#getNextLevel(20)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(20);
      assert.equal(actual.count, 30);
      assert.equal(actual.reward, 'Shine Journal');
    });
  });

  describe('#getNextLevel(30)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(30);
      assert.equal(actual.count, 50);
      assert.equal(actual.reward, 'Shine Water Bottle');
    });
  });

  describe('#getNextLevel(50)', () => {
    it('should return info on the next reward', () => {
      const actual = ReferralService.getNextLevel(50);
      assert.equal(actual.count, 100);
      assert.equal(actual.reward, 'Shine Hoodie');
    });
  });

  describe('#getNextLevel(500)', () => {
    it('should return a blank message', () => {
      const actual = ReferralService.getNextLevel(500);
      assert.equal(actual.message, '');
      assert.equal(actual.count, undefined);
      assert.equal(actual.reward, '');
    });
  });
});
