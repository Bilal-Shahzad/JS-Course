// An array can hold many values under a single name, and you can access the values by referring to an index number.

const array_name = [item1, item2, ...];      

// declare array with const

const cars = ["Saab", "Volvo", "BMW"];
// or
const cars = [
    "Saab",
    "Volvo",
    "BMW"
  ];


// You can also create an array, and then provide the elements:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

// Ex: creates an Array, and assigns values to it:
const cars = new Array("Saab", "Volvo", "BMW");


// Changing an Array Element
// This statement changes the value of the first element in cars
cars[0] = "Opel";

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";