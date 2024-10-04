"use strict";



// Reflection in JavaScript
// Reflection allows an object to inspect itself, listing and even changing
// its properties and methods.

// This concept is useful for dynamically interacting with objects, such as
// checking their attributes or methods at runtime.


var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`;
    }
};

var john = {
    firstname: "John",
    lastname: "Doe"
};

// Don't do this in a real application, this is just for demonstration.
// Setting `__proto__` manually is bad for performance.
john.__proto__ = person;


// `for...in` loop: Iterates over all enumerable properties of `john`, 
// including those inherited from its prototype.
for (var prop in john) {

    // `hasOwnProperty`: Ensures only the object's own properties (not inherited
    // ones from the prototype chain) are processed.
    if (john.hasOwnProperty(prop)) {
        console.log(`prop: ${prop} - ${john[prop]}`);
    }
}