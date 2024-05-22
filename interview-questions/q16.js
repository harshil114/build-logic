const ram = {
    name : "ram",
    power : 2500,
    yuga : "treta" 
}

const krishna = {
    name : "krishna",
    power : 2325,
    yuga : 'dwapar'
}

function morePower(p1,p2){
    if(p1.power>p2.power){
        console.log("Shri Ram has more power");
    }else{
        console.log("Shri Krishna has more power");
    }
}

morePower(ram,krishna);