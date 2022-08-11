// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// shows three ways to create new array

// 'fruits' array created using array literal notation.
const fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2


// 'fruits' array created using the Array() constructor.
const fruits2 = new Array('Apple', 'Banana');
console.log(fruits2.length);
// 2

// 'fruits' array created using String.prototype.split().
const fruits3 = 'Apple, Banana'.split(', ');
console.log(fruits3.length);
2


//  join() method to create a string from the fruits array
const fruits4 = ['Apple', 'Banana'];
const fruitsString = fruits4.join(', ');
console.log(fruitsString);
// "Apple, Banana"


// uses the indexOf() method to find the index of the string "Banana" in the fruits array.
const fruits5 = ['Apple', 'Banana'];
console.log(fruits5.indexOf('Banana'));
// 1

// uses the push() method to append a new string to the fruits array.
const fruits6 = ['Apple', 'Banana'];
const newLength = fruits6.push('Orange');
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3

// uses the pop() method to remove the last item from the fruits array.
const fruits7 = ['Apple', 'Banana', 'Orange'];
const removedItem = fruits7.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange

