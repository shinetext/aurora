$('.my-referrals-page #invite-friends').click(function() {
  // Get the phone number from the url path
  var phone;
  var path = window.location.pathname.split('/');
  if (path.length > 0) {
    phone = path[path.length - 1];
  }

  if (! phone) {
    return onErrorInviteFriends();
  }

  // Show the progress icon
  $('#invite-friends-progress').css('display', 'inline-block');

  var data = {
    phone: phone,
    invitePhone1: $('#invite-phone-1').val(),
    invitePhone2: $('#invite-phone-2').val(),
    invitePhone3: $('#invite-phone-3').val(),
  };

  // Send to our POST handler to process and send the invites
  $.post('/sms-invite', data)
    .done(onSuccessInviteFriends)
    .fail(onErrorInviteFriends);
});

function onSuccessInviteFriends(data) {
  $('#invite-friends-progress').hide();
  $('#invite-friends-error').hide();
  $('#invite-friends-success').show();
}

function onErrorInviteFriends(err) {
  $('#invite-friends-progress').hide();
  $('#invite-friends-error').show();
  $('#invite-friends-success').hide();

  console.error('There was an error sending referral invites.', err);
}