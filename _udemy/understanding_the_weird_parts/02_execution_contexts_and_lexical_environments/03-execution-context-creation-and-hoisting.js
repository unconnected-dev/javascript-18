"use strict";



// The Execution Context: Creation and 'Hoisting'

// In most programming languages, the following lines would not work because
// you are calling a function before it is declared, and accessing a variable
// before it is initialized. However, in JavaScript, the function still runs,
// and the variable `a` is accessible, although it will have an undefined value
// (if declared with `var`).

b();                    // This works even though `b` is declared later due to hoisting
console.log(`a: ${a}`); // `a` exists, but its value is `undefined` due to hoisting

var a = 'Hello World';

function b() {
    console.log(`Called b`);
}

b();                  // Invokes the function again after it's declared
console.log(`a: ${a}`);  // Now logs 'Hello World' since `a` has been initialized



// The phenomenon where functions and variables are accessible before their 
// declaration in the code is called 'hoisting'. However, hoisting behaves 
// differently for `var`, `let`, and `const`. Using `let` or `const` would 
// throw a reference error if accessed before declaration.
if (false) {

    // This would throw a ReferenceError, as `c` is not declared
    console.log(c);
}



// Hoisting
// Hoisting refers to the process where variable and function declarations are 
// moved to the top of their containing scope (global or function scope) during 
// the creation phase of the execution context. However, only declarations are 
// hoisted, not initializations (variables are not assigned).



// Execution Context Creation Phase:
// When JavaScript code is executed, the execution context is created in two 
// phases:

// Creation Phase:
// - Creates the global object (`window` in browsers, `global` in Node.js)
// - Sets up the special `this` keyword
// - Defines the outer environment (the global context in the case of global 
//   code)

// - During this phase, the JavaScript engine scans the code and sets up memory 
//   space for variables and functions
// - Variables declared with `var` are hoisted and initialized with the value 
//   `undefined`
// - Functions are hoisted in their entirety, meaning the function code is 
//   already available during this phase


// Example of hoisting:
// - The variable `a` is declared but not initialized until the execution phase. 
//   Hence, it's `undefined` when first accessed.
// - The function `b`, on the other hand, is fully hoisted and available for use 
//   even before it's defined in the code.



// Execution Phase:
// - In the execution phase, the code runs line by line.
// - Assignments, such as `a = "Hello World"`, happen in this phase.
// - The engine starts executing the code using the memory space set up during 
//   the creation phase.
// - Variables and functions can now be used and will hold their assigned values.



// Example of variable hoisting with `var`:
if (false) {
    // Logs `undefined` because `d` is hoisted but not yet assigned
    console.log(`${d}`);        
    var d = 'assigning a value';
    // Logs 'assigning a value' because `d` has now been initialized
    console.log(`${d}`);        
}



// Differences with `let` and `const`:
// - Variables declared with `let` and `const` are hoisted but not initialized 
//   until the line of code where they are declared.
// - Accessing them before declaration results in a ReferenceError 
//   (the "temporal dead zone").

// Example:
if (false) {
    // Uncaught ReferenceError: Cannot access 'e' before initialization
    console.log(e); 
    let e = 'This would cause an error';
}



// Why relying on hoisting can be problematic:
// - Hoisting can cause confusion when code behaves unexpectedly.
// - Best practice: Always declare variables and functions before using them to 
//   avoid unintended behavior.