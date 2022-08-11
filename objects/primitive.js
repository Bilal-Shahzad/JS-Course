let greeting = "Hi, everybody!!!";
let shout = greeting.toUpperCase(); //where did toUpperCase come from?
// greeting variable, which stores a primitive value in the form of text, seems to have access to the toUpperCase method.

// Type	- What it does
// Array-	helps store, retrieve, and manipulate a collection of data
// Boolean-	acts as a wrapper around the boolean primitive; still very much in love with true and false
// Date-	allows you to more easily represent and work with dates
// Function-	allows you to invoke some code among other esoteric things
// Math-	the nerdy one in the group that helps you better work with numbers
// Number-	acts as a wrapper around the number primitive
// RegExp-	provides a lot of functionality for matching patterns in text
// String-	acts as a wrapper around the string primitive

let primitiveText = "Homer Simpson";
let name = new String("Homer Simpson");
// The String in this case isn't just any normal word. It represents what is known as a constructor function whose sole purpose is to be used for creating objects.

// All literal values like text, numbers, and booleans are kept as primitives if they are declared and/or used as such. Only when they need to are they converted to their respective Object forms. To ensure our app continues to keep a low memory footprint, these converted objects are quickly discarded