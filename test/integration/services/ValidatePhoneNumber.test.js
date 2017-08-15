'use strict';
const validatePhoneNumber = require('../../../api/services/ValidatePhoneNumber');
const assert = require('assert');

describe('Validate Phone Numbers', () => {
  // Function used to generate random phone number
  function genRandomNumber() {
    let number = Math.random().toString().slice(2, 12);
    return number;
  }

  describe('Well formed numbers', () => {
    let numbers = [];
    for (let i = 0; i <= 3; i++) {
      let randomNumber = genRandomNumber();
      i === 0 && Math.random() > 0.5
        ? numbers.push('1' + randomNumber)
        : numbers.push(randomNumber);
    }

    it(`should return true if the number: ${numbers[0]} is valid`, () => {
      assert.notEqual(validatePhoneNumber(numbers[0]), false);
    });
    it(`should return true if the number: ${numbers[1]} is valid`, () => {
      assert.notEqual(validatePhoneNumber(numbers[1]), false);
    });
    it(`should return true if the number: ${numbers[2]} is valid`, () => {
      assert.notEqual(validatePhoneNumber(numbers[2]), false);
    });
    it(`should return true if the number: ${numbers[3]} is valid`, () => {
      assert.notEqual(validatePhoneNumber(numbers[3]), false);
    });
  });

  describe('Un - Well formed numbers', () => {
    // TODO
  });
});
