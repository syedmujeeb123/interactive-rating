"use strict";
const submitBtn = document.querySelector(".btn-submit");
const cardContainer = document.querySelector(".card-container");
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const submit = document.querySelector(".submit");
const btns = document.querySelectorAll(".btns");
const thanksContainer = document.querySelector(".thanks-container");
const numDisplay = document.querySelector(".num-display");

let button1Clicked = false;
let button2Clicked = false;
let button3Clicked = false;
let button4Clicked = false;
let button5Clicked = false;
let buttons = false;

btn1.addEventListener("click", () => {
  button1Clicked = true;
  buttons = true;
});

btn2.addEventListener("click", () => {
  button2Clicked = true;
  buttons = true;
});

btn3.addEventListener("click", () => {
  button3Clicked = true;
  buttons = true;
});
btn4.addEventListener("click", () => {
  button4Clicked = true;
  buttons = true;
});
btn5.addEventListener("click", () => {
  button5Clicked = true;
  buttons = true;
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (button1Clicked === true) {
    cardContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
  }
  if (button2Clicked === true) {
    cardContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
  }
  if (button3Clicked === true) {
    cardContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
  }
  if (button4Clicked === true) {
    cardContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
  }
  if (button5Clicked === true) {
    cardContainer.classList.add("hidden");
    thanksContainer.classList.remove("hidden");
  }
  if (buttons === false) {
    alert(
      `
          Kindly select the rating 😇
          `
    );
  }
});

btns.forEach((rating) => {
  rating.addEventListener("click", () => {
    const storedRating = rating.textContent;
    numDisplay.textContent = storedRating;
  });
});
