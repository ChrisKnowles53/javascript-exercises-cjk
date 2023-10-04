// accepts all pistive integer
// accepts string number e.g "five"
// retunrs the corresponding fibanaci number
// fibanacci is the sum of the 2 preceeding number 0,1,1,2,3,5,7,10

const fibonacci = function (input) {
  if (input < 0) {
    return "please use a number greater than 1";
  } else {
    let fibonacciArray = [0, 1];
    for (let i = 2; i <= input; i++) {
      fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
    }
    return fibonacciArray[input];
  }
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
