

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
var loader1 = document.getElementById("preloader1");
var loader2 = document.getElementById("preloader2");
var loader3 = document.getElementById("preloader3");

window.addEventListener("load", function(){
    loader.style.display = "none";
    loader1.style.display = "none";
    loader2.style.display = "none";
    loader3.style.display = "none";
})



