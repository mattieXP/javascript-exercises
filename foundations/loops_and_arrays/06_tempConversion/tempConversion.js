// Fahrenheit to Celsius : c = (f - 32) / 1.8
// Celsius to Fahrenheit : f = c * 1.8 + 32 

const convertToCelsius = function(f) {
  let celsius = (f - 32) / 1.8;
  let celsiusRounded = Math.round(celsius * 10)/ 10;
  return celsiusRounded ;
};

const convertToFahrenheit = function(c) {

  let fahrenheit = c * 1.8 + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
