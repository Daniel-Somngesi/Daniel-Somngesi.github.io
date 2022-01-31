

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

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

