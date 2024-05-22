const inputField = document.querySelector(".input");
const button = document.querySelector(".button");
const output = document.querySelector(".error-msg");

function showMessage(msg,color){
    output.innerText = msg;
    output.style.color = color;
}

function checkPassword(){
    const password =inputField.value;  

    if(password.length < 10){
        showMessage("Invalid Password",'red');
    }else{
        showMessage("Success",'green');
    }
}

button.addEventListener("click",checkPassword);