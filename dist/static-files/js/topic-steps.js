





/* SHOW/HIDE ALL - toggle all steps details */
var d = {};
d.hideText = "Hide";
d.showText = "Show";
var showAllPanels = false;

/* toogle all step details */
$(".js-step-controls-button").on("click", function() {
  $(".scs-c-step-nav__steps").find(".js-panel").toggleClass("js-hidden", showAllPanels);
  showAllPanels = !showAllPanels;
  $(this).html(showAllPanels ? "Hide All" : "Show All").end();
  $(".js-toggle-link").html(showAllPanels ? d.hideText : d.showText);
});


/* toggle step details */
$(".js-toggle-panel").click(function() {
    var e = $(this).parent("li.js-step");
    var $details = e.find(".js-panel");
    if ( $details.hasClass("js-hidden") ) {
        $details.toggleClass("js-hidden");
        e.find(".js-toggle-link").html("hide");
    } else {
       $details.toggleClass("js-hidden");
       e.find(".js-toggle-link").html("show");
    }
});
