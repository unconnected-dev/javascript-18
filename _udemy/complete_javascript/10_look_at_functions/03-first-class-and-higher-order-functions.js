"use strict";


// First-Class Functions

// In JavaScript, functions are treated as first-class citizens. This means
// that functions can be assigned to variables, passed as arguments to other
// functions, and returned from functions. Essentially, functions are just
// another type of object.

// Not all programming languages support first-class functions. For instance,
// in C, functions cannot be treated as first-class citizens because they
// cannot be passed around like variables. Similarly, Java only introduced
// first-class functions with lambda expressions in Java 8. First-class
// functions are a key feature of functional programming languages such as
// JavaScript, Python, and Ruby.


// Higher-Order Functions

// A higher-order function is defined as a function that:
//  - Accepts another function as an argument,
//  - Returns a new function, or
//  - Does both.
// This concept is only made possible due to the first-class nature of
// functions.


// It's important to note that the concept of first-class functions is a
// feature of a programming language. It indicates that all functions can be
// treated as values. This is more of a theoretical concept, while higher-order
// functions are a practical application of that concept.


const greet = () => console.log(`Hey, Jonas`);

// The btnClose element is expected to exist in the DOM.
// The addEventListener method is a higher-order function that takes a callback
// function (in this case, 'greet') to be executed when the 'click' event
// occurs on btnClose.
btnClose.addEventListener('click', greet);


// Example of a Higher-Order Function
function count() {
    let counter = 0;

    // Return an anonymous function that can increment the counter.
    return function() {
        // Increment the counter and return the new value.
        counter++; 
        return counter;
    };
}

// In this example, 'count' is the higher-order function, and the anonymous
// function returned by 'count' is a closure that retains access to the
// 'counter' variable.