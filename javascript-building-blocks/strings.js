// JavaScript strings are for storing and manipulating text
// A JavaScript string is zero or more characters written inside quotes
// EX
let text = "John Doe";

// You can use single or double quotes
// EX
let carName1 = "Honda";  // Double quotes
let carName2 = 'Honda';  // Single quotes

// You can use quotes inside a string as long as they don't match the quotes surrounding the string
let answer1 = "It's alright";
let answer2 = "He is called 'Bill'";
let answer3 = 'He is called "Bill"';

// To find the length of a string use the built-in length property
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;


//Escape Character
// Because strings must be written within quotes JavaScript will misunderstand this string
// EX 
let text = "We are the so-called "Vikings" from the north.";

// The backslash (\) escape turns special characters into string characters
//EX
let text = "We are the so-called \"Vikings\" from the north.";
// The sequence \'  inserts a single quote in a string

// "\\""  inserts a backslash in a string
let text = "The character \\ is called backslash.";

