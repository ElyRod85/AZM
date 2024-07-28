// Back to top button
mybutton = document.getElementById("backButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*
// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});

// Disable text copying
document.addEventListener('copy', function(event) {
    event.preventDefault();
});
*/
