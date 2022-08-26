// variables declared ouside of a function are global variables, inside are local

var scope = 'public'
function checkScope(){
    var scope = 'private';
    return scope;
}
scope; // 'public'
checkScope(); //'private


//Variables declared inside a { } block cannot be accessed from outside the block:
{
    let x = 2;
  }
  // x can NOT be used here

//   Variables declared with the var keyword can NOT have block scope.
var x = 2;
}
// x CAN be used here


// Local Scope
// code here can NOT use carName

function myFunction() {
    let carName = "Honda";
    // code here CAN use carName
  }
  // code here can NOT use carName


//   Function Scope
// Each function creates a new scope.
// Variables defined inside a function are not visible from outside the function
// can be var let and const all have it 
function myFunction() {
    var carName2 = "Toyota";   // Function Scope
  }

//   Global JavaScript Variables
let carName3 = "Nissan";
// code here can use carName
function myFunction() {
// code here can also use carName
}
