const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((acc, element) => {
    return acc += element;
  },0)
};

const multiply = function(arr) {
  return arr.reduce((acc, element) => {
    return acc *= element;
  },1)
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(a) {
  let result = 1;
	while (a > 0){
    result *= a;
    a--;
  }
  return result;
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
