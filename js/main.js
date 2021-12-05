"use strict";

import SpaService from "./spa-service.js";
import MenuService from "./menu-service.js";
import BookingService from "./booking.js";

let _spaService = new SpaService("home");
let _menuService = new MenuService();
let _bookingService = new BookingService();
let _selectedUserId = "";
let _selectedImgFile = "";

window.pageChange = function () {
    _spaService.pageChange();
}

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





