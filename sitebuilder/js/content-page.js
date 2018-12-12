/*
Contructs the 'explore the topic link' that appears on all content pages.
*/

(function ($) {

  $(function() {
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

    // h1 hack
    $(function() {
      var h1_text = $(".id7-page-title > h1").text().trim();
      $(".scs-content-main-block > h2").eq(0).replaceWith("<h1>" + h1_text +  "</h1>");
    });

    
  });
} (jQuery) );
