/**
 * Handle request to fetch a user's referral info.
 */
var getReferralInfo = function() {
  var phoneInput = $('#get-referral-phone').val();

  // @todo phone validation?
  var phone = phoneInput.replace(/\D+/g, '');
  if (phone.length < 10) {
    $('#invalid-number-error').show();
    return;
  }
  else {
    $('#invalid-number-error').hide();
  }

  var url = '/referrals/' + phone;
  window.location.href = url;
};

$('#get-referral-info-btn').click(getReferralInfo);
$('#get-referral-phone').keypress(function(event) {
  // User presses Enter key
  if (event.which === 13) {
    getReferralInfo();
  }
});