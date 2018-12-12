

/* loads snippet of HTML from central location - use for frequently repeated content

requires targetpath as argument

Partials.getProm("/partials/righthand-promo-widgets/careers-drop-in");
*/


var Partials =  (function ($, window) {


  const targetHTMLelement = "div.scs-side-nav-promo"; // loads only specificied HTML fragment of target page:
  const destinationHTMLelement = "div#promo-container";   // load this into following container

  return {
      getPromo: function(targetPagePath) {
        $(function() {

          if (targetPagePath.includes("services/careers") === true) {
            console.error("paths to partials should be relative to your site eg '/partials/blah' ");
            return error;
          }

          if (targetPagePath.charAt(0) === "/" ) {
            targetPagePath.substr(1);
          }

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
