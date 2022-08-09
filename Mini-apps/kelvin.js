// Temperature in kelvin stored in variable kelvin
var kelvinTemp = 301;
// 301 is the temperature for the day in the story 
 
// temperature in celsius stored in variable celsius
var celsiusTemp = kelvinTemp - 273.15;
// subtract it from the kevlintemp variable, it will result in celsius temp
 
// convert celsius to fahrenheit stored in variable fahrenheit
var fahrenheitTemp = celsiusTemp * (9/5) + 32;
// round the number 
 
// round the value of fahrenheit down and assign to fahrenheit
fahrenheitTemp = Math.floor(fahrenheitTemp);
 
// use string concatenation to leave a message
// "The temperature is fahrenheit degrees Fahrenheit.
console.log('The temperature is ' + fahrenheitTemp + ' degrees Fahrenheit.');