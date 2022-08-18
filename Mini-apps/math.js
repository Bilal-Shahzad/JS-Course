var bill = Math.random()
console.log(bill)
// gives a random non whole number below 1 

var nill = Math.random() * 3
console.log(nill)
// gives random number in between 0 and 3 

var rill = Math.random(Math.random() * 3)
console.log(rill)


var randomBodyParts = ['Stomach', 'Legs', 'Face', 'Back'];
console.log(randomBodyParts)
var randomBodyPart = randomBodyParts [Math.floor()]
console.log(randomBodyPart)
//undefined 

var randomBodyPartss = ['Stomach', 'Legs', 'Face', 'Back'];
var randomBodyPartz = randomBodyPartss[Math.floor(Math.random() * 4)];
console.log(randomBodyPartz)

function getRandomInt(max) {
 return Math.floor(Math.random() * max);
}
  
console.log(getRandomInt(3));
// 0, 1 or 2
  
console.log(getRandomInt(1));
// 0
  

console.log(Math.random());
//0 to <1


// The Math.floor() function returns the largest integer less than or equal to a given number.
console.log(Math.floor(5.95));
//5

console.log(Math.floor(5.05));
//5

console.log(Math.floor(5));
//5

console.log(Math.floor(-5.05));
//-6

