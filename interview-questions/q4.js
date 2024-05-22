const input = document.querySelector(".input");
const buttonH1 = document.querySelector(".button-h1");
const buttonH2 = document.querySelector(".button-h2");
const buttonH3 = document.querySelector(".button-h3");
const output = document.querySelector(".show-text");
const output2 = document.querySelector("#show-text-change");
const showBtn = document.querySelector(".show-btn");

function showText() {
  output.innerText = input.value;
}

function toHeader(tag) {
  const newHead = document.createElement(tag);
  const newContent = document.createTextNode(input.value);
  newHead.appendChild(newContent);
  const currentDiv = document.getElementById("show-text-change");
  document.body.insertBefore(newHead, currentDiv);
}

function funBtnH1() {
  toHeader("h1");
}

function funBtnH2() {
  toHeader("h2");
}

function funBtnH3() {
  toHeader("h3");
}

showBtn.addEventListener("click", showText);
buttonH1.addEventListener("click", funBtnH1);
buttonH2.addEventListener("click", funBtnH2);
buttonH3.addEventListener("click", funBtnH3);