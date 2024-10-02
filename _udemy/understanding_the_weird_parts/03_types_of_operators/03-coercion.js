"use strict";


// Coercion
// Coercion is the process of converting a value from one data type to another.
// This happens frequently in JavaScript because it is dynamically typed, meaning
// variables can hold values of any type without explicit declarations.


// Both values are strings, so JavaScript concatenates them.
var a = 'hello' + 'world';
console.log(`a: ${a}`);

// Here JavaScript coerces the number 1 into a string and then concatenates it 
// with '2'. This results in the string being '12', not the number 3.
var b = 1 + '2';
console.log(`b: ${b}`);



// JavaScript automatically performs type coercion when it encounters mixed types 
// in operations.

// JavaScript’s dynamic typing means it doesn’t throw errors in such cases, unlike
// statically typed languages (like Java or C#) where type mismatches would cause
// errors.

// This is why JavaScript tends to convert values to what it thinks the 
// programmer intended.

// However, this implicit coercion can sometimes lead to unexpected results, so 
// it’s important to be aware of when and how coercion occurs.