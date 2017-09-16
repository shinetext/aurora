/**
 * Handle form submit on campaigns and partners pages.
 */

/**
 * Submit alpha users
 * Checks if a users phone number follows the USA format and then submits that
 * form. Else prompt the user to try again with a valid number
 */
var submitAlpha = function(event) {
  var formData = $('#alpha-signup')
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
  // Return early if alpha phone number doesn't match US phone number format
  if (!validatePhoneNumber(formData.phone)) {
    event.preventDefault();
    // Change background color of input fields and label colors to notify user
    // of required changes
    $('#alpha-signup input[type=tel]:first').css('background-color', '#EF5350');
    $(
      '#alpha-signup > div.AlphaSignUpForm > div:nth-child(2) > div > label'
    ).css('color', '#333');
    $(
      '#alpha-signup > div.AlphaSignUpForm > div:nth-child(2) > div > span'
    ).css('color', '#333');
    return;
  } else if (formData['friends[0][first_name]']) {
    // If the form has any beta numbers attached check if all numbers are valid
    if (!validateAllBetaNumbers(formData.phone)) {
      event.preventDefault();
      return;
    }
  }
  return;
};

/*
 * Check if a phone number is a valid US number
 * Returns a clean number free of all non numeric values
 */
function validatePhoneNumber(phoneNumber) {
  var validNumber = false;
  var resultNumber = phoneNumber.replace(/[\W_+a-zA-Z]+/g, '');

  return resultNumber.length === 10
    ? resultNumber
    : resultNumber[0] == 1 && resultNumber.length === 11 ? resultNumber : false;
}

/*
 * Checks if an array phone numbers are valid US numbers
 * Alert users of by changing the color of the input field
 */
function validateAllBetaNumbers(alphaNumber) {
  var validBetas = true;
  $('.BetaSignUpForm input[type=tel]').each(function() {
    if (
      !validatePhoneNumber(
        this.value || duplicateNumber(this.value, alphaNumber)
      )
    ) {
      $(this).css('background-color', '#EF5350');
      $(this).parent().find('label').css('color', '#333');
      $(this).parent().find('span').css('color', '#333');
      validBetas = false;
    }
  });
  return validBetas;
}

/*
 * Checks if a referred/beta phone number is the same as the referrer/alpha user &
 * returns false if numbers match
 */
function duplicateNumber(betaPhoneNumber, alphaPhoneNumber) {
  return betaPhoneNumber === alphaPhoneNumber;
}

$('#alpha-signup').submit(submitAlpha);
