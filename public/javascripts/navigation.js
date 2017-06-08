/**
 * Created by Joker on 11/01/2017.
 */

// code that should be taken care of right away

window.onresize = function resize(event) {
    getNavSelectionsVisible();
};

// Listen for scroll changes
window.onscroll = function() {
    getNavSelectionsVisible();

    // Get the div element div
    var divId = document.getElementById("home");
    var navBarId = document.getElementById("main-nav");

    //Value of the end of the div like
    var divEnd = divId.offsetHeight-navBarId.offsetHeight;

    navBarId.classList.toggle("nav-bar-live", divEnd <= window.scrollY );

    document.getElementById("sticky-footer").classList.toggle("hidden", divEnd >= window.scrollY+(screen.height/2) );
};

window.onload = function init(){
    document.getElementById("to-top").onclick = function() {
        scrollIt(0,300);
    };

    // the code to be called when the dom has loaded
    // #document has its nodes
    document.getElementById("continue-button").onclick = function() {
        scrollToSection("about");
    };

    document.getElementById("about-nav").onclick = function() {
        scrollToSection("about");
    };

    document.getElementById("projects-nav").onclick = function() {
        scrollToSection("projects");
    };

    document.getElementById("connect-nav").onclick = function() {
        scrollToSection("connect");
    };
};

function getNavSelectionsVisible() {
    getNavSectionVisible("about");
    getNavSectionVisible("projects");
    getNavSectionVisible("connect");
}

function getNavSectionVisible(navName) {
    // Get the div element div
    var divId = document.getElementById(navName);

    // Get how far from the top of the page it is
    var top = divId.offsetTop;

    // Get how far the bottom of the div is from the page
    var bottom = top + divId.offsetHeight;

    // Get the window y, which is half way down the page
    var scrollY = window.scrollY+(screen.height/2);

    // Check if the y scroll
    document.getElementById(navName+"-nav").classList.toggle("active", top <= scrollY && bottom >= scrollY);
}

function scrollToSection(navName) {
    var divId = document.getElementById(navName);
    var navBarId = document.getElementById("main-nav");
    var scrollY = divId.offsetTop - navBarId.offsetHeight;
    // window.scrollTo(window.scrollX,scrollY);
    scrollIt(scrollY,300);
    // Scroll to a certain element
}