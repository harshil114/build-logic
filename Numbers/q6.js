let cp = 3125; 
let sp = 1125;
function profitLoss(){    
    if(sp>cp){
        return true ;
    }else{
        return false;
    }
}

if(profitLoss(cp,sp)){
    let profitAmnt = sp-cp
    console.log(`profit is ${profitAmnt}`);
}else{
    let lossAmnt = cp-sp
    console.log(`Loss is ${lossAmnt}`);
}