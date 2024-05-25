function triangle(side1,side2,side3){

    let totalOfSide = side1+side2+side3;    

    if(totalOfSide === 180){
        if(side1 === side2 && side1 == side3 && side2===side3){
            console.log("Equilateral triangle");
        }else if(side1 === side2 || side1 === side3 || side2 === side1 || side2 === side3 || side3 === side1 || side3 === side2){
            console.log("Isosceles Triangle");
        }else if(side1 !== side2 && side1 !== side3 || side2!==side1 && side2!==side3 || side3!==side1 && side3 !== side2){
            console.log("Scalene Triangle");
        }       
    }    
    else{
        console.log("This value not forms any triangle");
    }  
}
triangle(60,90,30)