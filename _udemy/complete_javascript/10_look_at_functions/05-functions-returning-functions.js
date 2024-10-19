"use strict";


// Functions Can Return Functions

// Functions in JavaScript can return other functions. This is a powerful 
// feature that allows for the creation of higher-order functions and 
// closures. A function that returns another function is useful for 
// encapsulating behavior and creating specialized functions based on 
// certain parameters.

// Example of a Higher-Order Function
// The 'greet' function is a higher-order function that takes a greeting 
// string as an argument and returns a new function that takes a name 
// as an argument. This returned function will print a greeting message 
// when called.

if (false) {
    const greet = function(greeting) {
        // The inner function uses the 'greeting' variable from its parent
        // scope, demonstrating closure.
        return function(name) {
            console.log(`${greeting} ${name}`);
        };
    }

    // Create a greeter function for the greeting "Hey"
    const greeter = greet(`Hey`);
    greeter(`Bob`);    
    greeter(`Jonas`); 

    // This creates a greeter that immediately greets "John" with "Hello".
    const greeter2 = greet(`Hello`)(`John`);

    // This immediately greets "Bob" with "Hola".
    greet(`Hola`)(`Bob`);
}


// Arrow Function Example
// Arrow functions provide a more concise syntax for writing functions. The 
// 'arrowGreet' function is similar to 'greet', but uses arrow function syntax
// for brevity.

if (true) {
    const arrowGreet = (greeting) => {
        // The inner arrow function also closes over the 'greeting' variable.
        return (name) => {
            console.log(`${greeting} ${name}`);
        }
    }

    // Create a greeter function for the greeting "Hi there"
    const greeter = arrowGreet(`Hi there`);
    greeter(`Bob`);

    // A shorter way to define the function using implicit return
    const shorterGreet = greeting => name => console.log(`${greeting} ${name}`);
    const greeter2 = shorterGreet(`...`);
    greeter2(`John`); 
}


// In summary, functions that return functions allow us to create customized
// behavior and encapsulate functionality. This capability is essential in
// functional programming and helps in creating cleaner and more maintainable
// code by promoting abstraction and reusability.