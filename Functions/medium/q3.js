function replace(arr, oldValue, newValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldValue) {
      arr[i] = newValue;
    }
  }
  console.log(arr);
}
replace([1, 5, 3, 5, 6, 8], 5, 10);
