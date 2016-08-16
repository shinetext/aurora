'use strict';

$(document).ready(function() {

  if (typeof promotedUrl === 'undefined') { return; }

  // Helpers for managing the skrollr lib
  var skrollrInitialized = false;
  var skrollrIsMobile = false;
  var skrollrInstance;

  $.get({
    url: promotedUrl,
    data: null,
    dataType: 'json',
    success: function(data) {
      if (! data || data.length === 0) { return; }

      var MAX_PROMOTED_ARTICLES = 6;
      var articleData;
      var renderedHtml;
      var template;
      var i;

      template = $('#article-preview-template').html();

      for (i = 0; i < MAX_PROMOTED_ARTICLES && i < data.length; i++) {
        // Extract data and prep for rendering
        articleData = {
          article: {
            photo: data[i].headerPhoto.file.url + '?w=640',
            title: data[i].title['en-US'],
            urlPath: data[i].urlPath,
          },
          author: {
            name: data[i].author.name,
            photo: data[i].author.picture.file.url + '?fit=thumb&w=100&h=100',
          },
        };

        // Render template with data
        renderedHtml = ejs.render(template, articleData, {delimiter: '?'});

        // Add content to the page
        $('#promoted-articles-results').append(renderedHtml).children(':last').hide().fadeIn(500);
      }

      // Now that articles are in place, can enable the parallax scrolling
      refreshSkrollr();
    },
  });

  /**
   * Initialize/refresh skrollr for when parallax elements get added to the DOM.
   */
  function refreshSkrollr() {
    if (! skrollrInitialized) {
      skrollrInitialized = true;

      skrollrInstance = skrollr.init();
      if (skrollrInstance.isMobile()) {
        skrollrIsMobile = true;
        skrollrInstance.destroy();
      }
    }
    else if (! skrollrIsMobile) {
      skrollrInstance.refresh();
    }
  }

});