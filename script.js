jQuery(document).ready(function() {

  jQuery(window).load(function() {
      $(".loader").fadeOut(25000);
  });

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
var dt = new Date();
document.getElementById('date-time').innerHTML = dt.getFullYear();

