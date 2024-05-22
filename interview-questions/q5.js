const textInput = document.querySelector(".input");
const showTextChange = document.querySelector("#show-text-change");
const buttonRed = document.querySelector(".button-red");
const buttonGreen = document.querySelector(".button-green");
const buttonBlue = document.querySelector(".button-blue");

function  changeColor(colors){
    showTextChange.style.color = colors;
    showTextChange.innerText = textInput.value;

}

function colorRed(){
    changeColor('red')
}

function colorGreen(){
    changeColor('green');
}

function colorBlue(){
    changeColor('blue');
}

buttonRed.addEventListener("click",colorRed);
buttonGreen.addEventListener("click",colorGreen);
buttonBlue.addEventListener("click",colorBlue);
