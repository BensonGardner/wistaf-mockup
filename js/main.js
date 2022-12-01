const header = document.getElementById("site-header"),
      logo = document.getElementById("wistaf-logo");

let lastKnownScrollPosition = 0,
    ticking = false,
    scrollSinceLast = 0;

//If possible, please add a short transition to the logo resizing
function resizeHeader(scrollSinceLast) {
    if (scrollSinceLast > 0) {
        header.classList.add("shrunk");    
        logo.classList.add("shrunk");
        logo.classList.remove("full-size");
        console.log(logo);
    } else if (window.scrollY < 5)  {
        header.classList.remove("shrunk");
        logo.classList.add("full-size");
        logo.classList.remove("shrunk");
        console.log(logo);
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
      scrlBtnHover = document.querySelector("#scrl-btn:hover"),
      leftNav = document.querySelector("#left-nav");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrlBtn.style.opacity = "1";
  } else {
    scrlBtn.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document. It would be nice to make this smoother, but doing that requires some fancy footwork that wasn't necessary for this mockup
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  scrlBtn.blur();
}
