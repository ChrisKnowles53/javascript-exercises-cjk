// my original way
const palindromesOriginal = function (input) {
  let splitInput = input.split("");
  let reversingInput = splitInput.reverse();
  let reversedInput = reversingInput.join("");

  if (input === reversedInput) return true;
  else {
    return false;
  }
};

console.log(palindromesOriginal("racecar"));

// the way Odin are teaching
const palindromesOdin = function (input) {
  return input.split("").reverse().join("") === input;
};
console.log(palindromesOdin("racecar"));

//Davds feedback

const palindromesDavid = function (input) {
  const reversedInput = input.split("").reverse().join("");
  return reversedInput === input;
};
console.log(palindromesDavid("racecar"));

// Do not edit below this line
module.exports = palindromes;
