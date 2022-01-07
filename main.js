const header = document.getElementById("site-header"),
      logo = document.getElementById("wistaf-logo");

let lastKnownScrollPosition = 0,
    ticking = false,
    scrollSinceLast = 0;

// The problem seems to be with the class and size reassignments -- header and logo. The console log statements are working, so need to figure out why the style properties aren't showing up as changed. Could height be overridign maxheight/
    
function resizeHeader(scrollSinceLast) {
    if (scrollSinceLast > 0) {
        header.classList.add("shrunk");
        logo.classList.remove("full-size");
        logo.classList.add("minimized"); 
    } else if (window.scrollY < 5)  {
        header.classList.remove("shrunk");
        logo.classList.remove("minimized");
        logo.classList.add("full-size");
    }
}

document.addEventListener('scroll', function(e) {
    scrollSinceLast = window.scrollY - lastKnownScrollPosition; 
    lastKnownScrollPosition = window.scrollY;
    
    if (!ticking) {
    window.requestAnimationFrame(function() {
      resizeHeader(scrollSinceLast);
      ticking = false;
    });
        
    ticking = true;
  }
});

// I patterned the scroll button code below on some example code at W3 schools.

const scrlBtn = document.querySelector("#scrl-btn"),
      leftNav = document.querySelector("#left-nav"),
      leftNavEmptyStatus = Boolean(leftNav.childNodes.length);

//Adjust position when left-nav is empty
document.addEventListener("DOMContentLoaded", function(){
    if (!leftNavEmptyStatus) {
        scrlBtn.style.left = "60px";    
    }
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrlBtn.style.opacity = "1";
  } else {
    scrlBtn.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
