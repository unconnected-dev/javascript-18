"use strict";



// Mutate:    To change or modify something
// Immutable: Something that cannot be changed


// Primitives and References in JavaScript:

// When dealing with primitive values (like numbers, strings, etc.), variables
// store the actual value in memory
var a = 1;


// If a variable pointing to a primitive is copied to another variable, a new
// copy of that value is made in a different location in memory. This is 
// called "pass by value"
var b = a;

// Mutating `a` does not affect `b` because they reference different locations 
// in memory


// Objects behave differently. When you assign an object to a variable, the 
// variable stores a reference (address) to the object's location in memory, 
// not the object itself
var c = {};


// When assigning one object reference to another variable, both variables 
// point to the same object in memory. This is called "pass by reference"
var d = c;



// Example of "pass by reference" (with objects):
var x = { greeting: `hi` };
var y = x;  // `y` references the same object as `x`

// Mutating the object through `x`
x.greeting = `Hello`;
console.log(`x.greeting: ${x.greeting}`);
console.log(`y.greeting: ${y.greeting}`);



// Pass by reference when passing objects as function arguments:
function changeGeeting(obj){

    // Mutates the original object
    obj.greeting = `Hola`;  
}

// Passes `x` (and `y`, as they reference the same object) to the function
changeGeeting(x);
console.log(`x.greeting: ${x.greeting}`);
console.log(`y.greeting: ${y.greeting}`);


// Creating a new object with the `=` operator sets up a new memory space 
// (new address). `y` is now pointing to a different object than `x`
y = { greeting: `howdy` };
console.log(`x.greeting: ${x.greeting}`);
console.log(`y.greeting: ${y.greeting}`);