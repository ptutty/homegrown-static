
var careersApp =  (function ($, window) {

  // private methods and vars
  var pageType = null;

  function init() {

    if (pageType === 1) { // content page
      contentPageSetup();
      getTopic();
    } else if (pageType === 2) { // guide page
      getTopic();
    } else if (pageType === 3) { // topic page
      topicPageSetup();
    } else if (pageType === 0) { // homepage
    } else {
      console.log("page type not set");
    }
  };


  function getTopic() {
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
    });
  };


  function contentPageSetup() {
    //h1 hack
    $(function() {
      var h1_text = $(".id7-page-title > h1").text().trim();
      $(".scs-content-main-block > h2").eq(0).replaceWith("<h1>" + h1_text +  "</h1>");
    });
  }

  function topicPageSetup() {
    //h1 hack
    $(function() {
      var h1_text = $(".id7-page-title > h1").text().trim();
      $("h2.topic-title").replaceWith("<h1>" + h1_text +  "</h1>");
    });
  }


 // public methods
  return {
      pageTypeSet: function(value) {
        pageType = value;
        init();
      },
      /* GET PROMO - loads snippet of HTML from  target location, use for frequently repeated content */
      getPromo: function(targetPagePath) {
        const targetHTMLelement = "div.scs-side-nav-promo"; // loads only specificied HTML fragment of target page:
        const destinationHTMLelement = "div#promo-container";   // load this into following container
        $(function() {
          // some input parsing and error handling
          if (targetPagePath.includes("services/careers") === true) {
            console.error("paths to partials should be relative to your site eg '/partials/blah' ");
            return error;
          }
          if (targetPagePath.charAt(0) === "/" ) {
            targetPagePath.substr(1);
          }
          // construct the path
          var currentfullpath = window.location.pathname.split('/');
          var toplevel = '/' + currentfullpath[1] + '/' + currentfullpath[2] + '/';
          $target = $( destinationHTMLelement );
          var finalTargetPath = toplevel  + targetPagePath;
          if ($target.length === 1) {
            $target.load( finalTargetPath + " " + targetHTMLelement, function(response, status, xhr) {
              if ( status == "error" ) {
                console.log( "promo load was unsuccessful: " + xhr.status + " check the path to the partial is correct");
              } else {
                console.log( "promo load was performed successfully" );
              }
            });
          } else {
            console.error("you need a div with id promo-container in div.scs-sidenav-promo!")
          }
        });
      },
  }
} (jQuery , window) );
