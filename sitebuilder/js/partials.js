

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
