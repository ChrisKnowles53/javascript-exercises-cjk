// accepts all pistive integer
// accepts string number e.g "five"
// retunrs the corresponding fibanaci number
// fibanacci is the sum of the 2 preceeding number 0,1,1,2,3,5,7,10

const fibonacci = function (input) {
  console.log(input);
  const numberInput = parseInt(`"${input}"`, 10);

  if (numberInput < 0) {
    return "please use a number greater than 1";
  } else {
    let fibonacciArray = [0, 1];
    for (let i = 2; i <= numberInput; i++) {
      fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
    }
    return fibonacciArray[numberInput];
  }
};

console.log(fibonacci("four"));

// Do not edit below this line
module.exports = fibonacci;
