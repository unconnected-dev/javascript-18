"use strict";


// Expression:
// An expression is a unit of code that produces a value. It can be a part of
// a larger statement and doesn't necessarily need to be assigned to a variable.


if(false){
    var a;


    // Examples of expressions that return values:
    // Assignment operator `=` assigns the value 3 to `a` (expression result 
    // is 3)
    a = 3;

    // Addition `1 + 2` is an expression that evaluates to 3
    1 + 2;

    // Object literal: Creating and assigning an object to `a` is also an 
    // expression
    a = { greeting: `Hi` }


    // Statement:
    // A statement performs an action but does not return a value
    // `a === 3` is an expression inside the `if` statement
    if(a === 3){}
}


// In JavaScript, functions are objects, allowing us to have both function 
// statements and function expressions, providing powerful flexibility.


// Function Statement:
// This is a function declaration or statement. It is hoisted, meaning you 
// can call `greet()` before its definition
greet();
function greet(){
    console.log(`Hi`);
}


// Function Expression:
// A function expression creates a function object on the fly, and assigns 
// it to a variable. The function has no name (anonymous), but can be 
// referenced via the variable `anonymousGreet`.

// You cannot call a function expression before it's defined, as only the 
// variable is hoisted, not the function itself
var anonymousGreet = function(){
    console.log(`Hi`);
}

// Invoke the function expression using the variable name
anonymousGreet();



// Key difference between function statements and expressions:
//  - Function statements are hoisted, meaning they can be called before 
//    their declaration
//  - Function expressions are not hoisted; only the variable is hoisted, 
//    and it's initialized as `undefined` during the creation phase

// Example: Passing a function as an argument to another function
function log(a){
    console.log(`a: ${a}`);
    // If `a` is a function, you can invoke it
    a();
}

// log(3);
// log("hello");
// log({greeting: `Hi`});


// You can also create a function on the fly (a function expression) and 
// pass it as an argument
log(function(){
    console.log(`hi`);
});