const userInput = document.querySelector("#numberInput");
const button = document.querySelector("#btn");
const output = document.querySelector("#result");

function calculateSum(){
    let n = Number(userInput.value);
    let sum = 0;

    for(let i = 0; i<=n; i++){
        sum = sum + i;
    }
   output.innerText = "Sum = "+sum;
}

button.addEventListener("click",calculateSum);