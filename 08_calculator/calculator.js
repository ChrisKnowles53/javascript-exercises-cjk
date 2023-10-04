// let aNumber = aNumber;
// let numberOne = numberOne;
// let numberTwo = numberTwo;

const add = function (numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function (numberOne, numberTwo) {
  return numberOne - numberTwo;
};

// computes the sum of an empty array
// the input is an array and need to sum its contents be it; empty, 1 number, 2 numbers or any length
const sum = function (array) {
  return array.reduce((sumTotal, current) => sumTotal + current, 0);
};

console.log(sum([1, 2, 3, 4]));

// think about many numbers refactor this to work with many numbers
const multiply = function (numberOne, numberTwo) {
  return numberOne * numberTwo;
};

const multiplyArray = function (array) {
  return array.reduce((product, currentNumber) => product * currentNumber, 0);
};
console.log(multiplyArray([1, 2, 3, 4]));

// raises one number to the power of another number
const power = function (numberOne, numberTwo) {
  return Math.pow(numberOne, numberTwo);
};

// computes the factorial of a number
// the factorial of a number is the product of all positive integers less than or equal to that number
const factorial = function (aNumber) {
  let answer = 1;
  for (let i = 1; i <= aNumber; i++) {
    answer *= i;
  }
  return answer;
};

factorial(3);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
