const input = document.querySelector(".input");
const button = document.querySelector(".button");
const output = document.querySelector(".output");

function evenOdd(){
    if(input.value % 2===0){
        output.innerText = "Even";
    }else{
        output.innerText = "odd";
    }
}
button.addEventListener("click",evenOdd);