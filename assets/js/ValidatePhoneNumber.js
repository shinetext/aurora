// 'use strict';
// /**
//  * Function used to validate phone numbers
//  * Ignores all non numberic values and returns false if the beta number is the same
//  * as the alpha number
//  * Will also return false if the number is less than or greater than 10 digits long.
//  * The only exception to this rule is if a number is 11 digits long and the first digit
//  * is a 1
//  */
//
// module.exports = function(betaPhoneNumber, alphaPhoneNumber) {
//   let validNumber = false;
//   let resultNumber = betaPhoneNumber.replace(/[\W_+a-zA-Z]+/g, '');
//   if (resultNumber === alphaPhoneNumber) {
//     return false;
//   }
//   return resultNumber.length === 10
//     ? resultNumber
//     : resultNumber[0] == 1 && resultNumber.length === 11 ? resultNumber : false;
// };
