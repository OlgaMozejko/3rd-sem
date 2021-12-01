"use strict";

var scrollPosition = window.scrollY;
var cover = document.getElementsByClassName("cover")[0];

window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY;

    if (scrollPosition >= 1) {
        cover.classList.add("cover-close");
    } else {
        cover.classList.remove("cover-close");
    }
});