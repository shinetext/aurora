/**
 * Helper code for navbar behavior.
 */
$(document).ready(function() {

  $('#mobile-menu-button').click(toggleMobileMenu);
  $('#mobile-menu-button-close').click(toggleMobileMenu);

  function toggleMobileMenu() {
    $('body').toggleClass('mobile-menu-open');
    $('#mobile-menu').toggleClass('-open');
  }

});