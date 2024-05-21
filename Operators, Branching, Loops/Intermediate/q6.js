const inputNumber = document.querySelector(".input-number");
const button = document.querySelector(".button");
const output = document.querySelector(".output");

function isPrime(){
    const number = Number(inputNumber.value);

if(number == 1){
    output.innerText =`${number} is not a prime number`;
}else if(number < 0){
    output.innerText ="Number should be Positive";
}else{

    let isPrime = true;
    for(i=2;i<number;i++){
        if(number%i===0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        output.innerText = `${number} is a prime number`;
    }else{
        output.innerText = `${number} is not a prime number`;
    }
}    
}
button.addEventListener("click",isPrime);