"use strict";



// Demonstrating `typeof` operator in JavaScript


// This is a primitive number (lowercase `n`), not the object `Number`
var a = 3;
console.log(`a: ${typeof a}`); 

var b = "Hello";
console.log(`b: ${typeof b}`); 

var c = {};
console.log(`c: ${typeof c}`); 


// Arrays are also objects in JavaScript
var d = [];
// This will return `object` since arrays are technically objects
console.log(`d: ${typeof d}`); 

// To properly check if `d` is an array, use the following method:
// `.call()` invokes the method, and sets `d` as the target for `this`.
console.log(Object.prototype.toString.call(d));



// Function constructor example
function Person(name) {
    this.name = name;
}

var e = new Person("Jane");
console.log(`e: ${typeof e}`);

// The `instanceof` operator checks if `e` is an instance of `Person`
// It verifies if `e`'s prototype chain includes `Person.prototype`
console.log(`${e instanceof Person}`);



// Checking undefined and null

// `undefined` type
console.log(`undefined: ${typeof undefined}`); 


// JavaScript has a known bug: `typeof null` returns "object".
// This behavior exists for historical reasons and can't be changed now.
console.log(`null: ${typeof null}`);


// Functions have their own `typeof` result, which returns `function`
var z = function() {};
console.log(`z: ${typeof z}`);