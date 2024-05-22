const textData = document.querySelector(".text");
const button = document.querySelector(".button");


function hideText(){
    textData.style.display = 'none'
}
button.addEventListener("click",hideText);