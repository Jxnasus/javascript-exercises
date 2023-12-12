const add = function(a, b) {
	const result = a + b;
  return result;
};

const subtract = function(a, b) {
	const result = a - b;
  return result;
};

const sum = function(numbers) {
	let summe = 0;
  for (let i = 0; i < numbers.length; i++) {
    summe = summe + numbers[i];
  }
  return summe;
};

const multiply = function(numbers) {
let produkt = 1;
for (let i = 0; i < numbers.length; i++) {
  produkt = produkt * numbers[i];
}
return produkt;
};

const power = function(a, b) {
	let result = 1;
  for (let i = 0; i < b; i++) {
    result = result * a;
  }
  return result;
  
};
//5! = 5 * 4 * 3 * 2 * 1
const factorial = function(number) {
	let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i
    console.log(result);
  }
  return result;
};

const max = function(numbers) {
  let 
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
  max
};
