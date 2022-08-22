// toCelsius refers to the function object, and toCelsius() refers to the function result.

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  document.getElementById("demo").innerHTML = toCelsius;

  console.log(toCelsius)

//   Functions Used as Variable Values
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

// You can use the function directly, as a variable value:

let text = "The temperature is " + toCelsius(77) + " Celsius";