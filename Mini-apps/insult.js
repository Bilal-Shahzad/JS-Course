// assigning body parts 
var randomBodyParts = ['Stomach', 'Legs', 'Face', 'Back'];
console.log(randomBodyParts)

// givinng adjectives 
var randomAdjectives = ['Trash', 'Terrible', 'Stupid', 'Dumb'];
console.log(randomAdjectives)

// ramdom words
var randomWords = ['Helmet', 'Fan', 'Laptop', 'Pillow', 'Bag'];
console.log(randomWords)

// Times 4 because there are 4 elements in the array 
// choose a random item from `randomBodyParts` array and assign to `randomBodyPart`
// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
console.log(randomBodyPart)

// random item for adjectives
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
console.log(randomAdjective)

// random item from randomWords
var randomWord = randomWords[Math.floor(Math.random() * 5)];
console.log(randomWord)

console.log("Your " + randomBodyPart + " is like a " 
+ randomAdjective + " " + randomWord + "!!!");

