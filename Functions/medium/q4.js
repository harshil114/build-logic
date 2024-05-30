function takeArray(arr1,arr2){
    function concatArray(){
        let finalArray = arr1.concat(arr2);
        console.log(finalArray);
    }
    return concatArray;
}
let displayArray = takeArray([1,3,5],[2,4,6]);
displayArray();