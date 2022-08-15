// Add a new first item to an array
// unshift() method to add, at index 0
const fruits = ['Banana', 'Mango'];
const newLength = fruits.unshift('Strawberry');
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3



// Remove a single item by index
//  splice() method to remove the string "Banana" from the fruits array
const fruits2 = ['Strawberry', 'Banana', 'Mango'];
const start = fruits.indexOf('Banana');
const deleteCount = 1;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Strawberry", "Mango"]
console.log(removedItems);
// ["Banana"]


// Remove multiple items by index
//  splice() method to remove the strings 
const fruits3 = ['Apple', 'Banana', 'Strawberry', 'Mango'];
const start1 = 1;
const deleteCount2 = 2;
const removedItems1 = fruits.splice(start, deleteCount);
console.log(fruits3);
// ["Apple", "Mango"]
console.log(removedItems);
// ["Banana", "Strawberry"]


// Replace multiple items in an array
//  splice() method to replace the last 2 items in the fruits array with new items
const fruits4 = ['Apple', 'Banana', 'Strawberry'];
const start2 = -2;
const deleteCount3 = 2;
const removedItems3 = fruits.splice(start, deleteCount, 'Mango', 'Cherry');
console.log(fruits4);
// ["Apple", "Mango", "Cherry"]
console.log(removedItems3);
// ["Banana", "Strawberry


// Iterate over an array
// uses a for...of loop to iterate over the fruits array, logging each item to the console

const fruits5 = ['Strawberry', 'Mango', 'Cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}
// Sr
// Mango
// Cherry

// Call a function on each element in an array
// forEach() method to call a function on each element in the fruits array
const fruits6 = ['Strawberry', 'Mango', 'Cherry'];
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
// Strawberry 0
// Mango 1
// Cherry 2



// Merge multiple arrays together
//  concat() method to merge the fruits array with a moreFruits array

const fruits7 = ['Mango', 'Banana', 'Strawberry'];
const moreFruits = ['Mango', 'Cherry'];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);
// ["Mango", "Banana", "Strawberry", "Mango", "Cherry"]

// The 'fruits' array remains unchanged.
console.log(fruits7);
// ["Apple", "Banana", "Strawberry"]

// The 'moreFruits' array also remains unchanged.
console.log(moreFruits);
// ["Mango", "Cherry"]