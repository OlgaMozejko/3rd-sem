"use strict";

//loader

window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});



// booking + spin the wheel

import SpaService from "./spa-service.js";
import MenuService from "./menu-service.js";
import BookingService from "./booking.js";
import SpinTheWheel from "./spinningwheel.js";
import About from "./about.js";

let _spaService = new SpaService("home");
let _menuService = new MenuService();
let _bookingService = new BookingService();
let _spinTheWheel = new SpinTheWheel();
let _about = new About();
let _selectedUserId = "";
let _selectedImgFile = "";

window.selectBooking = function (value) {
  _bookingService._selectBooking(value);
};

window.closeBooking = function (value) {
  _bookingService._closeBooking(value);
};

window.nextBooking = function (value) {
  _bookingService._nextBooking(value);
};

window.openBooking = function (value) {
  _bookingService._openBooking(value);
};

window.closeSpin = function () {
  _spinTheWheel._closeSpin();
};
window.openSpin = function () {
  _spinTheWheel._openSpin();
};

window.pageChange = function () {
  _spaService.pageChange();
};

window.readFoods = function () {
  _menuService.readFoods();
};

window.appendFoods = function () {
  _menuService.appendFoods();
};

window.appendDrinks = function () {
  _menuService.appendDrinks();
};

window.seeFood = function () {
  _menuService.seeFood();
};

window.seeDrinks = function () {
  _menuService.seeDrinks();
};

window.appendFavourites = function () {
  _menuService.appendFavourites();
};

//nav

document.getElementById("navbtn").addEventListener("click", function () {
  if (document.getElementById("navi").style.width == "100%") {
    return close();
  }
  return open();
});

document.getElementById("navlink").addEventListener("click", function () {
  if (document.getElementById("navi").style.width == "100%") {
    return close();
  }
});

window.open = function () {
  document.getElementById("navi").style.width = "100%";
  document.getElementById("line1").style.transform =
    "rotate(50deg) translate(0.5em)";
  document.getElementById("line2").style.transform =
    "rotate(-50deg) translate(0.4em)";
};

window.close = function () {
  document.getElementById("navi").style.width = "0%";
  document.getElementById("line1").style.transform =
    "rotate(0deg) translate(0em)";
  document.getElementById("line2").style.transform =
    "rotate(0deg) translate(0em)";
};

// scroll functions

window.topFunction = function () {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
};

var scrollPosition = window.scrollY;
var cover = document.getElementsByClassName("cover")[0];
var logo = document.getElementsByClassName("small-logo")[0];
var leaf1 = document.getElementsByClassName("leaf1")[0];
var leaf2 = document.getElementsByClassName("leaf2")[0];
var leaf3 = document.getElementsByClassName("leaf3")[0];
var leaf4 = document.getElementsByClassName("leaf4")[0];
var leaf5 = document.getElementsByClassName("leaf5")[0];
var leaf6 = document.getElementsByClassName("leaf6")[0];
var leaf7 = document.getElementsByClassName("leaf7")[0];
var leaf8 = document.getElementsByClassName("leaf8")[0];
var leaf9 = document.getElementsByClassName("leaf9")[0];
var flower1 = document.getElementsByClassName("leaf10")[0];
var flower2 = document.getElementsByClassName("leaf11")[0];
var banner = document.getElementsByClassName("ad-banner")[0];

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  if (scrollPosition >= 1) {
    cover.classList.add("cover-close");
    leaf1.classList.add("flowers-img-small");
    leaf2.classList.add("flowers-img-small");
    leaf3.classList.add("flowers-img-small");
    leaf4.classList.add("flowers-img-small");
    leaf5.classList.add("flowers-img-small");
    leaf6.classList.add("flowers-img-small");
    leaf7.classList.add("flowers-img-small");
    leaf8.classList.add("flowers-img-small");
    leaf9.classList.add("flowers-img-small");
    flower1.classList.add("flowers-img-small3");
    flower2.classList.add("flowers-img-small2");
    logo.classList.add("small-logo-animate");
    banner.classList.remove("ad-banner-visible");
  } else {
    cover.classList.remove("cover-close");
    leaf1.classList.remove("flowers-img-small");
    leaf2.classList.remove("flowers-img-small");
    leaf3.classList.remove("flowers-img-small");
    leaf4.classList.remove("flowers-img-small");
    leaf5.classList.remove("flowers-img-small");
    leaf6.classList.remove("flowers-img-small");
    leaf7.classList.remove("flowers-img-small");
    leaf8.classList.remove("flowers-img-small");
    leaf9.classList.remove("flowers-img-small");
    flower1.classList.remove("flowers-img-small3");
    flower2.classList.remove("flowers-img-small2");
    logo.classList.remove("small-logo-animate");
    banner.classList.add("ad-banner-visible");
  }
});

// photos
//scrolling toturial by WebMadeWell
//found on https://codepen.io/webmadewell/pen/bKyemQ

$(window).on("load resize scroll", function () {
  $(".static-box").each(function () {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var rightPosition = windowTop - elementTop;
    $(this).find(".move-pic").css({ right: rightPosition });
  });
});

$(window).on("load resize scroll", function () {
  $(".static-box2").each(function () {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
    $(this).find(".move-pic2").css({ left: leftPosition });
  });
});

$(window).on("load resize scroll", function () {
  $(".static-box3").each(function () {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var rightPosition = windowTop - elementTop;
    $(this).find(".move-pic3").css({ right: rightPosition });
  });
});

$(window).on("load resize scroll", function () {
  $(".static-box4").each(function () {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
    $(this).find(".move-pic4").css({ left: leftPosition });
  });
});

$(window).on("load resize scroll", function () {
  $(".static-box5").each(function () {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var rightPosition = windowTop - elementTop;
    $(this).find(".move-pic5").css({ right: rightPosition });
  });
});

$(window).on("load resize scroll", function () {
  $(".static-box6").each(function () {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var rightPosition = windowTop - elementTop;
    $(this).find(".move-pic6").css({ right: rightPosition });
  });
});

$(window).on("load resize scroll", function () {
  $(".static-box7").each(function () {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
    $(this).find(".move-pic7").css({ left: leftPosition });
  });
});
