function minDate(d1,d2){
    let date1 = new Date(d1).getDate();
    let date2 = new Date(d2).getDate();

    if(date1<date2){
        console.log( `${d1} is less than ${d2}`);
    }else if(date1>date2){
        console.log( `${d1} is greater than ${d2}`);
    }else{
        console.log("Both are same");
    }
}
minDate('06/25/2021', '01/21/2021')