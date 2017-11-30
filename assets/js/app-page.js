'use strict';
$(document).ready(function() {
  // Helpers for managing the skrollr lib
  var skrollrInitialized = false;
  var skrollrIsMobile = false;
  var skrollrInstance;

  // Initialize scrollify function
  var scrollifyDesktop = function() {
    $.scrollify({
      section: '.scrollify-section',
      easing: 'easeOutExpo',
      scrollSpeed: 1100,
      offset: 0,
      scrollbars: true,
      standardScrollElements: '.desktop-footer',
      setHeights: false,
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
    var video = $('#video-2');
    $('source', video).attr('src', '/images/app-page/vid-app-3.mp4');
    video.load();
    scrollifyDesktop();
    refreshSkrollr();
  } else {
    var video = $('#video');
    $('source', video).attr('src', '/images/app-page/vid-app-2.mp4');
    video.load();
  }

  function refreshSkrollr() {
    if (!skrollrInitialized) {
      skrollrInitialized = true;

      skrollrInstance = skrollr.init();
      if (skrollrInstance.isMobile()) {
        skrollrIsMobile = true;
        skrollrInstance.destroy();
      }
    } else if (!skrollrIsMobile) {
      skrollrInstance.refresh();
    }
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
