"use strict";



//Prototype
// All objects in JavaScript have a `prototype` property. This property is a
// reference to another object, often called `__proto__`.

// The `prototype` is the source from which objects can inherit properties 
// and methods. When an object tries to access a property or method and can't
// find it, JavaScript will look in the object's `prototype` (its `__proto__`).

//Prototype Chain
// A prototype can also have its own prototype, forming a chain. This is called
// the prototype chain. Prototype chaining allows objects to share properties 
// and methods, rather than duplicating them.

// It's hidden in the sense that we don't call `obj.__proto__.method`. Instead,
// we just call `obj.method`, and JavaScript will look up the  prototype chain 
// if the method isn't found on the object itself.

// Objects can share prototypes (inherited behavior) using this chain.



var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function(){
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
// JavaScript goes down the prototype chain to find `getFullName`.
console.log(`john.getFullName(): ${john.getFullName()}`);
// It finds `firstname` directly on `john`, so no need to go down the chain.
console.log(`john.firstname: ${john.firstname}`);

var jane = {
    firstname: "Jane"
};
jane.__proto__ = person;
// This finds Jane's `firstname`, but defaults to `lastname` from the prototype.
console.log(`jane.getFullname(): ${jane.getFullName()}`);



// Everything is an object (or primitive) 
var a = {};
var b = function(){};
var c = [];

// These log the `__proto__` of each base object type (Object, Function, Array).
console.log(`a: ${a.__proto__}`);
console.log(`b: ${b.__proto__}`);
console.log(`c: ${c.__proto__}`);

// The logs will give the base object prototypes, which are at the bottom of
// their prototype chains. Each base prototype comes with built-in properties 
// and methods.

// Object {} is the root of all objects; it's the absolute base of the prototype 
// chain in JavaScript.