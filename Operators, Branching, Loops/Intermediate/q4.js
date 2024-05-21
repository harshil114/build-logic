function fibonacci(n) {
  let num1 = 0;
  let num2 = 1;
  let sum;

  if(n<0){
    console.log("invalid number");
  }

  if(n>=0){
    console.log(num1);
  }
  if(n>=1){
    console.log(num2);
  }

  for (let i = 2; i <= n; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    console.log(sum);
  }
}
fibonacci(5);

