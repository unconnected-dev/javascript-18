"use strict";



// JavaScript Functions: Special Methods for Controlling `this`

// In JavaScript, functions have access to several special methods:
//  1. `call()`
//  2. `apply()`
//  3. `bind()`
// These methods primarily deal with setting the context of `this` within 
// functions.


var person = {
    firstname: 'john',
    lastname: 'doe',
    getFullName: function() {
        var fullname = `${this.firstname} ${this.lastname}`;
        return fullname;
    }
};


// A standalone function that attempts to log the full name
// This will fail because `this` points to the global object, not `person`
if(false){
    var log = function() {
        console.log(`Logged: ${this.getFullName()}`); 
    };
}


// Function that logs the full name and additional arguments
var logName = function(lang1, lang2) {
    // Correct context depends on how the function is invoked
    console.log(`Logged: ${this.getFullName()}`);  
    console.log(`Arguments: ${lang1}, ${lang2}`);
    console.log(`---------------`);
};//.bind(person) // This would have also bound the object



// Binding the `person` object to `logName`
// This creates a new function with `this` set to `person`
// The new function is essentially a copy
var logPersonName = logName.bind(person);
logPersonName('en');

// Using `call` to invoke `logName` with `person` as `this`
// Unlike bind, which creates a copy of the function, `call` executes the
// function immediately with the specified context
logName.call(person, 'en', 'es'); 

// Using `apply`, which also executes immediately but expects parameters 
// as an array
logName.apply(person, ['en', 'es']); 



// Example using an anonymous function with `apply`
(
    function(lang1, lang2) {
        console.log(`Logged: ${this.getFullName()}`);
        console.log(`Arguments: ${lang1}, ${lang2}`);
        console.log(`---------------`);
    }
).apply(person, ['es', 'en']);



// Function Borrowing
// You can borrow methods from other objects as long as they have similar 
// property names.This allows the function to work as intended
var person2 = {
    firstname: 'jane',
    lastname: 'doe'
};

// Borrowing the `getFullName` method from `person` for `person2`
console.log(`person.getFullName.apply(person2): ${person.getFullName.apply(person2)}`);
console.log(`person.getFullName(): ${person.getFullName()}`); 



// Function Currying
// Currying allows you to create a copy of a function with preset parameters.
// With call and apply, passing parameters just passes them as normal arguments
function multiply(a, b) {
    return a * b;
}

// Create a new function with the first parameter fixed to 2
var multiplyByTwo = multiply.bind(this, 2);
console.log(`${multiplyByTwo(3)}`);


// Explanation of Currying:
// - Currying is useful for creating specialized functions from general ones,
//   particularly in mathematical or configuration scenarios.
// - In this case, the function `multiplyByTwo` is a specialized version 
//   of `multiply`, always multiplying its second argument by 2.