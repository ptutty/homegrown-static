/* SHOW/HIDE ALL - toggle all steps details */
var d = {};
d.hideText = "Hide";
d.showText = "Show";
var showAllPanels = false;


jQuery( document ).ready(function($) {

  /* toogle panels previously open before page refresh */
  getStoredPanelArray();

  // find each item in the array by its ID
  // remove js-hidden class



  /* toogle all step details */
  $(".js-step-controls-button").on("click", function() {
    $(".scs-c-step-nav__steps").find(".js-panel").toggleClass("js-hidden", showAllPanels);
    showAllPanels = !showAllPanels;
    $(this).html(showAllPanels ? "Hide All" : "Show All").end();
    $(".js-toggle-link").html(showAllPanels ? d.hideText : d.showText);
  });


  /* toggle each step detail */
  $(".js-toggle-panel").click(function() {
      var e = $(this).parent("li.js-step");


      var $details = e.find(".js-panel");
      console.log( $details.attr('id') );


      if ( $details.hasClass("js-hidden") ) {
          $details.toggleClass("js-hidden");
          e.find(".js-toggle-link").html("hide");
      } else {
         $details.toggleClass("js-hidden");
         e.find(".js-toggle-link").html("show");
      }
      // add clicked panel ID to localStorage

  });

});



var panelArray  = [];
/* save state of panels in array and then local storage */
function addPanelToArray(panel) {
  let index = panelArray.indexOf(panel);
    if (index >= 0) { // panel is already present remove it ..
        panelArray.splice(index, 1);
    } else { // add to array
        panelArray.push(panel);
    }

    // update local storage
    localStorage.setItem("panels", JSON.stringify(panelArray));
}

/* get saved panel state in local storage */
function getStoredPanelArray() {
  panelArray = JSON.parse(localStorage.getItem("panels"));
  console.log( panelArray );
}
