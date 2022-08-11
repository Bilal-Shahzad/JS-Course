// Increment — x++ or ++x

// Increment — x++ or ++x

// the ++/ —- operators can be used before or after the operand

// Increment
let a = 1;
a++;
++a;
// Decrement
let b = 1;
b--;
--b;


// Increment
let c = 1;
console.log(c++);    // 1
console.log(c);      // 2
// Decrement
let d = 1;
console.log(d--);    // 1
console.log(d);      // 0


//first log out the value of a, or b, neither has changed. That’s because the original value of the operand is being returned prior to the operand being changed. The next time the operator is used, we get the result of the +1, or -1.

// Using ++/-- Before the Operand

// Increment
let e = 1;
console.log(++e);    // 2
console.log(e);      // 2
// Decrement
let f = 1;
console.log(--f);    // 0
console.log(f);      // 0