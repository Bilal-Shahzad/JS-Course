// An IIFE, Immediately Invoked Function Expression, is a JavaScript function that runs as soon as it is defined
(function () {
    // …
  })();
  
  (() => {
    // …
  })();
  
  (async () => {
    // …
  })();


// Avoid polluting the global namespace
// using IIFE in this case is better than using a function declaration or a function expression
(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.


// Execute an async function
// An async IIFE allows you to use await and for-await
// The await operator is used to wait for a Promise. It can only be used inside an async function within  JavaScript cod
// The Promise object represents the eventual completion or failure of a function
const getFileStream = async (url) => { 
    // implementation
  };
  
  (async () => {
    const stream = await getFileStream('https://google.com/path/file.ext');
    for await (const chunk of stream) {
      console.log({ chunk });
    }
  })();


// The module pattern
// Use IIFE to create private and public variables and methods
const makeWithdraw = (balance) => ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log('I will do bad things with your money');
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return 'Insufficient money';
      },
    };
  })(balance);
  const firstAccount = makeWithdraw(100);   
  console.log(firstAccount.balance);       
  console.log(firstAccount.withdraw(20));   
  console.log(firstAccount.withdraw(30));  
  console.log(firstAccount.doBadThings);    
  const secondAccount = makeWithdraw(20);   
  console.log(secondAccount.withdraw(30));  
  console.log(secondAccount.withdraw(20));  


