function maxNumber(n1,n2,...n){

    let max = n1;

    if(n2>max){
        max = n2;
    }

    for(let i = 0; i<n.length; i++){
        if(n[i]>max){
            max = n[i];
        }
    }
    console.log(max);
}

maxNumber(3,5);
maxNumber(3,5,9,1);