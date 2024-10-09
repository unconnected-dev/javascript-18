"use strict";


// Public Instance Fields in JavaScript

// Public:
// - In the context of classes, a public field is directly accessible from both
//   inside and outside the object.
// - Public fields can be read or modified by any code, whether it is part of 
//   the object's methods or external to the object.

// Field:
// - A field in JavaScript is a property that is created using the field syntax
//   directly within a class.
// - Fields are similar to properties, but the term "field" specifically refers
//   to properties defined inside a class using the new syntax.
// - Fields can be initialized with a value directly within the class 
//   definition, as opposed to within the constructor function.

// Public Instance Fields:
// - Public instance fields are properties that are created on each instance of
//   the class.
// - Unlike traditional properties, which are usually initialized in the 
//   constructor, public instance fields can be defined and initialized 
//   directly in the class body.


// Differences Between Fields and Properties:
// - The terms "field" and "property" are often used interchangeably, but in 
//   modern JavaScript, a "field" typically refers to a property defined using
//   the class field syntax.
// - Properties are usually initialized in the constructor, while fields can be
//   initialized directly within the class body, outside the constructor.



// This defines a new class named `Person`
class Person{
    
    // Defining a public instance field:
    // This field is publicly accessible, meaning it can be accessed or 
    // modified from outside the class.
    firstName = "Tony";

    // You can define multiple public instance fields.
    lastName = "Alicea";

    // Constructor method for initializing instances:
    constructor(age) {
        // Properties initialized in the constructor.
        this.age = age; 
    }

    // A method that accesses public instance fields.
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
}


// Creating an instance of the `Person` class:
let me = new Person(30);
console.log(me.firstName); // Outputs: "Tony" (accessing the public instance field)
console.log(me.greet());   // Outputs: "Hello, my name is Tony Alicea and I am 30 years old."


// Modifying a public instance field:
me.firstName = "Elon";
console.log(me.greet());   // Outputs: "Hello, my name is Elon Alicea and I am 30 years old."



// Using `new` with Classes:
// - The `new` keyword is required to create an instance of a class.
// - Without `new`, attempting to invoke the class constructor will result in 
//   an error.

// Uncommenting the following line would throw 
// TypeError: Class constructor Person cannot be invoked without 'new'
// Person(); 



// Public Instance Fields:
// - Public fields in a class are directly accessible properties that can be 
//   read or modified from inside or outside the object.
// - They are defined directly within the class body and are initialized on 
//   each instance of the class.

// Field vs. Property:
// - While the terms "field" and "property" are often used interchangeably, 
//   fields specifically refer to properties defined using the class field 
//   syntax.

// new Keyword:
// - The new keyword is required to create an instance of a class. Without new,
//   the class constructor cannot be invoked.