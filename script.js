"use strict";

const orderWindow = document.getElementById("popup");
const body = document.querySelector("body");

function showPopup() {
  orderWindow.style.setProperty("display", "block");
  body.style.setProperty("overflow-y", "hidden");
}

function hidePopup() {
  orderWindow.style.setProperty("display", "none");
  body.style.setProperty("overflow-y", "visible");
}
