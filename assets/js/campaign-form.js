/**
 * Handle form submit on campaigns and partners pages.
 */

/**
 * Submit alpha users
 * Checks if a users phone number follows the USA format and then submits that
 * form. Else prompt the user to try again with a valid number
 */
var submitAlpha = function(event) {
  let formData = $('#alpha-signup')
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
  if (!validatePhoneNumber(formData.phone)) {
    event.preventDefault();
    $('.AlphaSignUpForm').append(
      "<p style='color:red;' >Looks like this input is not ok FIX it Now Or else</p>"
    );
  } else if(formData["friends[0][first_name]"]) {
    // if the form has any beta numbers attached check if all numbers are valid
    validateAllBetaNumbers(formData)
  } else {
    return true;
  }
};

/**
 * Submit beta users
 * Checks if a beta phone numbera follow the USA format and then checks all
 * beta numbers against the alpha's phone number. If all checks pass submit form
 * else prompt the user to try again with valid phone numbers
 */
var submitBeta = function(event) {
  event.preventDefault();
  let formData = $('#beta-signup').serializeArray().reduce(function(obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});
  // Validate all referred numbers
  validateAllBetaNumbers(formData.phone);
};

// Helper Functions

function validatePhoneNumber(betaPhoneNumber) {
  let validNumber = false;
  let resultNumber = betaPhoneNumber.replace(/[\W_+a-zA-Z]+/g, '');

  return resultNumber.length === 10
    ? resultNumber
    : resultNumber[0] == 1 && resultNumber.length === 11 ? resultNumber : false;
}

function validateAllBetaNumbers(alphaNumber) {
  $('#beta-signup input[type=tel]').each(function() {
    !validatePhoneNumber(this.value) ||
    !duplicateNumber(this.value, alphaNumber)
      ? $(this).css('background-color', 'red')
      : null;
  });
}

function duplicateNumber(betaPhoneNumber, alphaPhoneNumber) {
  if (betaPhoneNumber === alphaPhoneNumber) {
    return false;
  }
  return true;
}

$('#alpha-signup').submit(submitAlpha);
$('#beta-signup').submit(submitBeta);
