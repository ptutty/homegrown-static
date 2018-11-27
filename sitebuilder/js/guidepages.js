
/*

We use the sitebuilder content list template to build a table of content page for each guide on the parent page.
We then use the JS code below to recreated and style this table of contents on each of the child pages

Example:

How to write a CV (parent)
---- Target your CV (child)
---- format your CV (child)

Each child page has sitebuilder pagination turned on to navifate between subpages

*/

var guideBuilder = (function() {
  var fullURL = window.location.href;
  var fullpath = window.location.pathname;
  // just in case a trialing slash has been added to url ...
  if ( fullpath.endsWith('/') ) {
    fullpath = fullpath.slice(0, -1);
    fullURL = fullURL.slice(0, -1);
  }
  const currentpath = fullpath.split("/").pop();
  const parentpath = fullpath.replace(currentpath,'');
  const parentsnippet = "table.tableOfContentsTable"; // this is the table sitebuilder generates
  const childtarget = "#guide_content_list"; // where to load snippet from parent




  /* methods */

  // get the nav
  var getParentNav = function() {
    jQuery(childtarget).load( parentpath + " " + parentsnippet, function(data){
      styleNav();
    });
  }

  // style active nav links
  var styleNav = function() {
    jQuery("table.tableOfContentsTable > tbody > tr > td  a").each(function() {
        if ( jQuery(this).attr('href') == fullURL )  {
          jQuery(this).addClass('active');
        }
        jQuery(this).parent().prepend("<span class='guide-bullets'></span>");
    });
  }


  var pagination = function() {
        jQuery("ul.pager").appendTo("nav.scs-guide-pagination");
        var $next = jQuery("ul.pager > li.next");
        var $previous = jQuery("ul.pager > li.previous");
        extractTitle($next ,"next");
        extractTitle($previous , "previous");

        // extract page title from button title if button in not disabled
          function extractTitle($button, direction) {
            if ( $button.hasClass('disabled') ) {
              $button.remove();
              return;
            }

            var title;
            if (direction == "next" ) {
              title = jQuery("ul.pager > li.next > a").attr('title');
              jQuery("ul.pager > li.next > a").html("<strong>Next</strong></br>" + split(title));
            } else {
              title = jQuery("ul.pager > li.previous > a").attr('title');
              jQuery("ul.pager > li.previous > a").html("<strong>Previous</strong></br>" + split(title));
            }

              function split(title) {
                var fpart = title.split('‘');
                var lpart = fpart[1].split('’');
                return lpart[0];
              }
          }
  }


  return {
    buildNav: getParentNav,
    buildPagination: pagination
  }

})();


jQuery( document ).ready(function($) {

    guideBuilder.buildNav();
    guideBuilder.buildPagination();

    var h1_text = $("title").text().split(':')[0];
    jQuery("h2.guide-topic-title").replaceWith("<h1 class='guide-topic-title'>" + h1_text +  "</h1>");
});
