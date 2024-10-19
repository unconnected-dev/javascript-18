"use strict";


// Functions Accepting Callback Functions

// This function removes spaces from a string and converts it to lowercase.
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

// This function capitalizes the first word of a string and returns it
// alongside the rest of the words unchanged.
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}


// Higher-Order Function
// This function takes a string and a callback function (fn), logs the name of
// the callback, and executes it with the string.
const transformer = function(str, fn) {
    console.log(`${fn.name}`);                      // Log the name of the callback function
    return fn(str);                                 // Call the provided function with the string
}

// Example usage of the transformer function
const a = 'This is a sentence';
console.log(`${transformer(a, oneWord)}`);          // Output: thisisasentence
console.log(`${transformer(a, upperFirstWord)}`);   // Output: This is a sentence

// JavaScript uses callbacks frequently
// Example of a simple callback function
const high5 = function() {
    console.log(`High five...`);
}

// Add a click event listener to the document body
// The addEventListener method is a higher-order function that takes high5 as a
// callback function to execute on click.
document.body.addEventListener('click', high5);

// Example of using high5 as a callback with forEach
['Jonas', 'Martha', 'Adam'].forEach(high5);         // Calls high5 for each name



// Why Use Callbacks?
// Callbacks make it easier to split code into smaller, manageable parts. They
// allow for abstractions, meaning we can hide implementation details.
// For example, the transformer function does not concern itself with how the
// string is transformed; it simply requires a function that performs the
// transformation.