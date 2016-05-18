/**
 * Handle request to fetch a user's referral info.
 */
var getReferralInfo = function() {
  var phone = $('#get-referral-phone').val();

  // @todo phone validation?
  if (phone.length === 0) {
    return;
  }

  // Show loading icon
  $('#referral-loading-icon').show();

  var url = '/referral/' + phone;
  var onSuccess = function(data) {
    var referralUrl;

    // Display the referral info section
    $('#referral-info').show(400);
    $('#referral-not-found').hide();

    // Display results to the frontend
    $('#referral-count').html(data.referralCount);
    referralUrl = 'http://www.shinetext.com/?r=' + data.referralCode;
    $('#referral-url').html(referralUrl);
    $('#referral-url').attr('href', referralUrl);

    $('#referral-loading-icon').hide();
  };
  var onError = function(data) {
    $('#referral-info').hide();
    $('#referral-not-found').show(400);
    $('#referral-loading-icon').hide();
  };

  var request = {
    url: url,
    type: 'get',
    success: onSuccess,
    error: onError
  };

  $.ajax(request);
};

$('#get-referral-info-btn').click(getReferralInfo);
$('#get-referral-phone').keypress(function(event) {
  // User presses Enter key
  if (event.which === 13) {
    getReferralInfo();
  }
});