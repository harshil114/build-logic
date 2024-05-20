function maximum(num1,num2,num3){

    if(num1>num2 && num1>num3){
        console.log("num1 is max");
    }
    else if(num2>num1 && num2>num3){
        console.log("num2 is max");
    }    
    else{
        console.log("num3 is max");
    }
}
maximum(8,23,7)