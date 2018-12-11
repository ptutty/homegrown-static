/*
Contructs the 'explore the topic link' that appears on all content pages.
Only creates the link if the script can find the following html on the pages:

div.scs-navigation-side-menu-topic

*/

(function ($) {


  $(function() { // this is document ready as of jquery v3.0

    // is this a content page rather than home page or topic page?
    if ( $("div.scs-navigation-side-menu-topic").length === 1 ) {

      // get the parent topic based on sitebuilder top nav
      var topic = $(".next-secondary a");
      var topic_href = topic.attr('href');
      var topic_title = topic.html();

      // construct html

      var topic_nav_link = "<a href='" + topic_href + "'>" + topic_title + "</a>";
      var topic_nav = "<h3 class='sub-heading'>Explore the topic</h3><ul><li>" + topic_nav_link + "</li></ul><div class='divider--thin'> </div>";

      // add html to page
      $("div.scs-navigation-side-menu-topic").prepend(topic_nav);
    }

  });

} (jQuery) );
