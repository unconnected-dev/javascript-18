"use strict";


// Function Constructors
// In JavaScript, function constructors allow us to create objects in a way
// that's similar to how classes are used in other languages like Java.
// For instance: var john = new Person();

// This is an alternative to creating objects using object literals.

function Person(firstname, lastname) {
    console.log(`Person: ${this}`);

    this.firstname = firstname;
    this.lastname = lastname;

    console.log(`This function is invoked`);

    // Returning an object manually will prevent the automatic return of the
    // new object created by the constructor.

    // The below line would block the automatic return of the `Person` object
    // and return this object instead.
    // return { greeting: `I got in the way` };
}



// `new` was introduced to make JavaScript more familiar to developers coming
// from Java or similar languages. It creates a new instance of an object based
// on a constructor function.

// How the `new` Operator Works:
// 1. When `new` is used, an empty object is created automatically.
// 2. The constructor function is invoked.
// 3. The `this` keyword inside the function points to the new object.
// 4. If the function doesn't explicitly return an object, the new object is 
//    returned by default.

var john = new Person("John", "Doe");
console.log(`john: ${john.firstname}`);

// Creating another object using the `Person` constructor
// Each invocation of `new Person` creates a new, distinct object.
var jane = new Person("Jane", "Doe");
console.log(`jane: ${jane.firstname}`);


// Function constructors are just regular functions that are used to construct
// new objects. When called with the `new` operator, the `this` variable inside
// the function points to a new empty object, which is returned by default.