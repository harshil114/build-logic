const ram = {
    nameOf : 'ram',
    age : 25,
    yuga : 'treta'
}

const krishna = {
    nameOf : 'krishna',
    age : 31,
    yuga : 'dwapar'
}

function maxAge(p1,p2){
    if(p1.age>p2.age){
        console.log("Ram is older");
    }else{
        console.log("Krishna is older");
    }
}
maxAge(ram,krishna);