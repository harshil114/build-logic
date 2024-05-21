const inputNumber1 = document.querySelector(".input-number1");
const inputNumber2 = document.querySelector(".input-number2");
const addButton = document.querySelector(".button-add");
const subButton = document.querySelector(".button-sub");
const mulButton = document.querySelector(".button-mul");
const divButton = document.querySelector(".button-div");
const output = document.querySelector(".output");

function addNumber() {
  const number1 = Number(inputNumber1.value);
  const number2 = Number(inputNumber2.value);
  const sum = number1 + number2;
  output.innerText = "Addition is: " + sum;
}

function subNumber() {
  const number1 = Number(inputNumber1.value);
  const number2 = Number(inputNumber2.value);
  const sum = number1 - number2;
  output.innerText = "Substraction is: " + sum;
}
function mulNumber() {
  const number1 = Number(inputNumber1.value);
  const number2 = Number(inputNumber2.value);
  const sum = number1 * number2;
  output.innerText = "Multiplication is: " + sum;
}
function divNumber() {
  const number1 = Number(inputNumber1.value);
  const number2 = Number(inputNumber2.value);
  const sum = number1 / number2;
  output.innerText = "Division is: " + sum.toFixed(2);
}
addButton.addEventListener("click", addNumber);
subButton.addEventListener("click", subNumber);
mulButton.addEventListener("click", mulNumber);
divButton.addEventListener("click", divNumber);