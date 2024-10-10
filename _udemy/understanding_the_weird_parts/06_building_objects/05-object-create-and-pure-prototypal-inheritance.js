"use strict";



// Polyfill
// A polyfill is code that adds a feature which the JavaScript engine may not 
// support. Older browsers might lack certain modern features, so we can 
// check if a feature is missing and provide a fallback function.

// Polyfill example for Object.create
// If the browser already has Object.create, this polyfill will be skipped.
if (!Object.create) {
    Object.create = function(o) {
        // The polyfill only accepts one argument, so we throw an error if more 
        // than one argument is provided.
        if (arguments.length > 1) {
            throw new Error(
                'Object.create implementation only accepts the first parameter.'
            );
        }
        // Create a temporary constructor function F to simulate Object.create.
        function F() {}
        F.prototype = o;
        // Return a new instance of F with the prototype set to the passed object.
        return new F();
    };
}


// Object literal
// This is an object literal that will be used as a prototype for other objects.
var person = {
    firstname: "Default",
    lastname: "Default",
    greet: function() {
        return `Hi ${this.firstname} ${this.lastname}`;
    }
};

// Creates an empty object with the person object set as its __proto__.
// This effectively creates an inheritance chain where `john` inherits from 
// `person`.
var john = Object.create(person);
console.log(`john: ${john}`); // Logs the john object

// Since john's prototype is set to person, calling greet() will look up the 
// prototype chain to find the greet method.
console.log(`john.greet(): ${john.greet()}`);

// Now we assign new properties to john, which override the default values 
// inherited from person.
john.firstname = "John";
john.lastname = "Doe";

// The greet method now uses john's own properties instead of the defaults from
// the person object.
console.log(`john.greet(): ${john.greet()}`);