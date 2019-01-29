/* Topic section with multi part steps that show/hide */

var d = {};
d.hideText = "Hide";
d.showText = "Show";
var showAllPanels = false;
var panelArray  = [];


jQuery( document ).ready(function($) {

  // toogle panels previously open before page refresh
  getStoredPanelArray();

  /* toogle all step details */
  $(".js-step-controls-button").on("click", function() {

    // show hide all panels
    var $allpanels = $(".scs-c-step-nav__steps").find(".js-panel")
    $allpanels.toggleClass("js-hidden", showAllPanels);
    showAllPanels = !showAllPanels;

    // change button text
    $(this).html(showAllPanels ? "Hide All" : "Show All").end();
    $(".js-toggle-link").html(showAllPanels ? d.hideText : d.showText);

    // add/remove all ID's to the array for save state
    $allpanels.each(function( index ) {
        addPanelToArray( $(this).attr('id') );
    });

  });


  /* toggle each step detail */
  $(".js-toggle-panel").click(function() {
      var e = $(this).parent("li.js-step");
      var $details = e.find(".js-panel");

      // add clicked panel ID to localStorage
      addPanelToArray( $details.attr('id') );

      if ( $details.hasClass("js-hidden") ) {
          $details.toggleClass("js-hidden");
          e.find(".js-toggle-link").html("hide");
      } else {
         $details.toggleClass("js-hidden");
         e.find(".js-toggle-link").html("show");
      }

  });

});


/* save state of panels in array and then local storage */
function addPanelToArray(panel) {
  let index = panelArray.indexOf(panel);
    if (index >= 0) { // panel is already present remove it ..
        panelArray.splice(index, 1);
    } else { // add to array
        panelArray.push(panel);
    }
    console.log( panelArray );
    // update local storage
    localStorage.setItem("panels", JSON.stringify(panelArray));
}

/* get saved panel state in local storage */
function getStoredPanelArray() {
  let previouslyopenpanels =  JSON.parse(localStorage.getItem("panels"));
  if ( previouslyopenpanels  === null ) {
    panelArray  = [];
  } else {
    panelArray  = previouslyopenpanels;

    // iterate over array and show panels previously left open
    panelArray.forEach(function(element) {
      $panel = jQuery(".scs-c-step-nav__steps").find("#" + element);
      $panel.toggleClass("js-hidden");
      $panel.parent(".scs-c-step-nav__step").find(".js-toggle-link").html("hide");

      // change button text
      showAllPanels = !showAllPanels;
      jQuery(".js-step-controls-button").html(showAllPanels ? "Hide All" : "Show All").end();


    });
  }
}
