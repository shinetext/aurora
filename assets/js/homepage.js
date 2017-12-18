'use strict';

$(document).ready(function() {
  if (typeof promotedUrl === 'undefined') {
    return;
  }

  // Helpers for managing the skrollr lib
  var skrollrInitialized = false;
  var skrollrIsMobile = false;
  var skrollrInstance;

  refreshSkrollr();

  $.get({
    url: promotedUrl,
    data: null,
    dataType: 'json',
    success: function(data) {
      if (!data || data.length === 0) {
        return;
      }

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
            category: data[i].category,
            photo: data[i].headerPhoto.fields.file.url + '?w=640',
            title: data[i].title,
            slug: data[i].slug,
          },
          author: {
            name: data[i].author.fields.name,
            photo: data[i].author.fields.picture.fields.file.url +
              '?fit=thumb&w=100&h=100',
          },
        };

        // Render template with data
        renderedHtml = ejs.render(template, articleData, { delimiter: '?' });

        // Add content to the page
        $('#promoted-articles-results')
          .append(renderedHtml)
          .children(':last')
          .hide()
          .fadeIn(500);
      }

      // Now that articles are in place, can enable the parallax scrolling
      refreshSkrollr();
    },
  });

  /**
   * Initialize/refresh skrollr for when parallax elements get added to the DOM.
   */
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


  // Lightbox
  $(".lightBox").on("click", function(){
    $(".backDrop").animate({"opacity": ".70"}, 500);
    $(".box").animate({"opacity": "1.0"}, 500);
    $(".backDrop, .box").css("display", "block");
    $(".largeImage")[0].currentTime = 0;
    $(".largeImage")[0].play()
  });

  $(".close, .backDrop").on("click", function(){
    closeBox();
  });

  function closeBox(){
    $(".backDrop, .box").animate({"opacity": "0"}, 500, function(){
    $(".backDrop, .box").css("display", "none");
    $(".largeImage")[0].pause()
    });
  }
});
