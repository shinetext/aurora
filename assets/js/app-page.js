'use strict';
$(document).ready(function() {
  // Initialize scrollify function
  var scrollifyDesktop = function() {
    $.scrollify({
      section: '.scrollify-section',
      easing: 'easeOutExpo',
      scrollSpeed: 1000,
      offset: 0,
      scrollbars: true,
      interstitialSection: '.social-and-footer-nav',
      standardScrollElements: ' .social-and-footer-nav',
      setHeights: true,
      overflowScroll: true,
      updateHash: false,
      touchScroll: true,
      before: function(idx, section) {},
      after: function(idx, section) {},
      afterResize: function() {},
      afterRender: function() {},
    });
  };

  // Check if screen is a desktop or ipad and if page has loaded scrollify script
  // load video specific to that view
  if ($(window).width() > 768 && $(location)[0].pathname === '/app') {
    scrollifyDesktop();
  } else {
    var video = $('#video');
    $('source', video).attr('src', '/images/app-page/vid-app-5.mp4');
    video.load();
  }

  // Toggle play on mobile view
  $('#video').on('click', function(e) {
    var video = $('#video').get(0);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // Toggle play on desktop view
  $('#video-2').on('click', function(e) {
    var video = $('#video-2').get(0);
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
