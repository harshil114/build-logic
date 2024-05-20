function minimum(num1,num2,num3){
    if(num1< num2 && num1 < num3){
        console.log("Num1 is minimum "+num1);
    }else if(num2<num1 && num2<num3){
        console.log("Num2 is minimum "+num2);
    }else{
        console.log("Num3 is minimum "+num3);
    }
}

minimum(35,29,46);