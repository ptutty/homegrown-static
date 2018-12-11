

/* loads snippet of HTML from central location - use for frequently repeated content */
var Partials =  (function ($, window) {
  // public methods
  return {
      // add promo partial to page when called
      getPromo: function(path) {
        $(function() {
          var test = window.location.pathname.split('/');
          var current_url = '/' + test[1] + '/' + test[2];
          $( "div#promo-container" ).load( current_url  + path + " .scs-side-nav-promo" );
        });
      },
  }
} (jQuery , window) );



(function ($) {

  $(function() {

    // h1 fudge
    var h1_text = $(".id7-page-title > h1").text().trim();
    $(".scs-content-main-block > h2").eq(0).replaceWith("<h1>" + h1_text +  "</h1>");

    // adds parent topic link
    if ( $("div.scs-navigation-side-menu-topic").length === 1 ) {
      // get the parent topic based on sitebuilder top nav
      var topic = $(".next-secondary a");
      var topic_href = topic.attr('href');
      var topic_title = topic.html();
      var topic_nav_link = "<a href='" + topic_href + "'>" + topic_title + "</a>";
      var topic_nav = "<h3 class='sub-heading'>Explore the topic</h3><ul><li>" + topic_nav_link + "</li></ul><div class='divider--thin'> </div>";
      $("div.scs-navigation-side-menu-topic").prepend(topic_nav);
    }
  });
} (jQuery) );
