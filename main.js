const header = document.getElementById("site-header"),
      logo = document.getElementById("wistaf-logo");

let lastKnownScrollPosition = 0,
    ticking = false,
    scrollSinceLast = 0;

// The problem seems to be with the class and size reassignments -- header and logo. The console log statements are working, so need to figure out why the style properties aren't showing up as changed. Could height be overridign maxheight/
    
function resizeHeader(scrollSinceLast) {
    if (scrollSinceLast > 0) {
        console.log("shrinking the header yo");
        header.classList.add("shrunk");
        logo.classList.remove("full-size");
        logo.classList.add("minimized"); 
    } else if (window.scrollY < 5)  {
        header.classList.remove("shrunk");
        logo.classList.remove("minimized");
        logo.classList.add("full-size");
        console.log("make the header bigger")
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

// This next function isn't working.
// window.scroll is a function that ctually scrolls the page i thinik. 
/*
window.scroll = () => {
    scrolling = true;
};

setInterval(() => {
    if (scrolling) {
        console.log('scrolling');
        scrolling = false;
        resizeHeader();
    }
},300);*/