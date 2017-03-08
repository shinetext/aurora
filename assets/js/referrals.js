/**
 * Handle request to fetch a user's referral info.
 */
var getReferralInfo = function(event) {
  var target = $(event.target);
  var inputId = target.attr('data-for') || 'get-referral-phone';
  var phoneInput = $('#' + inputId).val();

  var errorId = target.attr('data-error') || 'invalid-number-error';
  var errorElement = $('#' + errorId)

  // @todo phone validation?
  var phone = phoneInput.replace(/\D+/g, '');
  if (phone.length < 10) {
    errorElement.show();
    return;
  }
  else {
    errorElement.hide();
  }

  var url = '/referrals/' + phone;
  window.location.href = url;
};

$('.get-referral-info-btn').click(getReferralInfo);
$('.get-referral-phone').keypress(function(event) {
  // User presses Enter key
  if (event.which === 13) {
    getReferralInfo(event);
  }
});