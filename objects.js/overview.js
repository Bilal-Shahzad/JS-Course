// In real life, a car is an object.
// A car has properties like weight and color, and methods like start and stop

// This code assigns a simple value (Honda) to a variable named car
let car = "Honda";
console.log(car)
// This code assigns many values (Fiat, 500, white) to a variable named car
const vehicle = {type:"Fiat", model:"500", color:"white"};

// Object Definition
// You define (and create) a JavaScript object with an object literal
const person = {firstName:"Bilal", lastName:"Shahzad", age:20, eyeColor:"brown"};

// The name:values pairs in JavaScript objects are called properties
// Property Property Value 
// firstName	John
// lastName	Doe
// age	50
// eyeColor	blue

// can access object properties in two ways
objectName.propertyName
objectName["propertyName"]

//EX1
person.lastName;
// EX2 
person["lastName"];

const person = {
    firstName: "Bilal",
    lastName: "Shahzad",
    Age: 20,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
//this refers to the person object
//which object depends on how this is being used or called
//this keyword refers to different objects depending on how it is used

// Accessing Object Methods
objectName.methodName()

name = person.fullName();