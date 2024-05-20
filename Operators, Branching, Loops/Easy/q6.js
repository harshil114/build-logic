const input = document.querySelector(".input");
const button = document.querySelector(".button");
const output = document.querySelector(".output");
const monthWith31Days = ["january","march","may","july","august","october","december"];

function checkMonth(){
    const month = input.value.toLowerCase();
    if(input.value === ""){
        output.innerText = "Please enter a month";
    }else if(monthWith31Days.includes(month)){
         output.innerText = `Yes, ${input.value} have 31 days`;
    }else{
        output.innerText = `No, ${input.value} not have 31 days`;
    }  
}
button.addEventListener("click",checkMonth)