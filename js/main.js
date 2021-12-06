"use strict";

import SpaService from "./spa-service.js";
import MenuService from "./menu-service.js";
import BookingService from "./booking.js";

let _spaService = new SpaService("home");
let _menuService = new MenuService();
let _bookingService = new BookingService();
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
