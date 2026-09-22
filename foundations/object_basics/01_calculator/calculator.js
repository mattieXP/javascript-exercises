const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	const totalSum = array.reduce(function(currentNumber, nextNumber ) {
    return currentNumber += nextNumber;
  }, 0);
  return totalSum;
};

const multiply = function(array) {
  const total = array.reduce((currentNumber, nextNumber) => {
    return currentNumber *= nextNumber;
  }, 1);
  return total;
};

const power = function(a,b) {
	return a ** b;
}

const factorial = function(a) {
  let array = [];
  for (let i = 1; i <= a; i++) {
    array.unshift(i);
 }
 const fact = array.reduce((total, number) => {
    return total * number;
 }, 1);
 return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
