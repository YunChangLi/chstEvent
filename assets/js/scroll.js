window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("wrap").className = "topflow";
    document.getElementById("header").className = "hide";
  } else {
    document.getElementById("wrap").className = "";
    document.getElementById("header").className = "";
  }
}