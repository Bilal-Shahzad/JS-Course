// Function parameters are listed inside the parentheses () in the function definition.
// Lets you group a series of statements together to perform a specifc task
// Function arguments are the values received by the function when it is invoked.

// EX

function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }


//   Function Return
// When JavaScript reaches a return statement, the function will stop executing.

let x = myFunction(4, 3);  // Function is called, return value will end up in x
function myFunction(a, b) 
console.log(myFunction) 
return a * b;  // Function returns the product of a and b

// function is the key word like car, its a keyword reserved word function letting JavaScript interpreter know we are creaating a function
// morningGreeting is the function name (it is optional) often verbs or phrases
// praramters are in parantheses 
// curly braces are the functionn body, what needs to run
// no semi after the brackets
function morningGreeting(){
    return 'Good morning, its time to get up';
}
// calling or invoking the function, body code block of the function vetween the two curly braces is not executed when the function but when invoked
morningGreeting(); //'Good morning, it is tiem to get up 
