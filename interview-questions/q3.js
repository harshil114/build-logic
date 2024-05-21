const input = document.querySelector(".input");
const button1 = document.querySelector(".button-plus");
const button2 = document.querySelector(".button-minus");

function buttonOne(){
    input.style.fontSize = "18px";
}
function buttonTwo(){
    input.style.fontSize = "16px"
}

button1.addEventListener("click",buttonOne);
button2.addEventListener("click",buttonTwo);