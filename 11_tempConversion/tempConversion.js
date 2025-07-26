const convertToCelsius = function(x) {
  const ret = ((x - 32) * 5/9) * 10 / 10;
   return +ret.toFixed(1);
  
};

const convertToFahrenheit = function(x) {
  const ret = ((x * 9/5) + 32) * 10 / 10;
  return +ret.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
