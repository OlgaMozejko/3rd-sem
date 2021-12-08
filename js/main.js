"use strict";

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

window.closeSpin = function () {
  _spinTheWheel._closeSpin();
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

// scroll

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

// photos

window.addEventListener("load resize scroll", function () {
  document.getElementByClassName("static-box").each(function () {
    let windowTop = window.scrollTop();
    let elementTop = this.offset().top;
    let leftPosition = windowTop - elementTop;
    this.find(".move-pic").css({ left: leftPosition });
  });
});
