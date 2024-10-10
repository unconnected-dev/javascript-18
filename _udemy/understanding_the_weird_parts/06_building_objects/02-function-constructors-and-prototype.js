"use strict";



// Setting the Prototype

// Whenever you create a function in JavaScript, it has special properties and 
// methods, such as `name` and `code`. Functions that are intended to be used 
// as constructors come with a property called `prototype`.

// Important distinction:
// The `prototype` property on a function is NOT the prototype of the function 
// itself. Instead, it is the prototype of any objects created when you use 
// the function as a constructor with the `new` keyword.


function Person(firstname, lastname) {
    console.log(`Person: ${this}`);

    this.firstname = firstname;
    this.lastname = lastname;

    console.log(`This function is invoked`);
}

// `Person.prototype` starts as an empty object, but we can attach methods to 
// it. Here, we add a method that will be shared by all objects created using 
// this constructor.
Person.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastname}`;
}


// How the `new` keyword works with function constructors:
// 1. The `new` keyword creates an empty object.
// 2. It sets the `__proto__` of that empty object to the `prototype` property 
//    of the constructor function.
// 3. Any objects created with this function (using `new`) will have access to 
//    both the properties defined inside the constructor and the methods 
//    defined on its prototype.

var john = new Person("John", "Doe");
console.log(`john: ${john.firstname}`);

var jane = new Person("Jane", "Doe");
console.log(`jane: ${jane.firstname}`);

// You can check the `__proto__` of the created object, which points to the 
// constructor's `prototype` object.
console.log(`john proto: ${john.__proto__}`);

// Calling the method defined on the prototype
console.log(`jane.getFullName(): ${jane.getFullName()}`);

// You can also dynamically add more methods to the prototype later.
Person.prototype.getFormalFullName = function() {
    return `Le ${this.firstname} ${this.lastname}`;
}

console.log(`john.getFormalFullName(): ${john.getFormalFullName()}`);



// Functions in JavaScript are objects, and they consume memory. If you add a 
// method inside the constructor, that method will be copied into each instance 
// of the object, leading to memory inefficiency. If you had 1000 objects, each 
// would have its own copy of the same method, which wastes memory. 

// By adding methods to the prototype, you ensure that all objects created 
// with the constructor can access these methods without duplicating them 
// for each instance. This approach saves memory because the method is stored 
// in one place, not repeated in every object.

// Adding methods to the prototype ensures that all objects share a single 
// instance of the method, reducing memory usage. When a method is  called,
// JavaScript will look for it along the prototype chain.



// Function constructors are regular function objects. If you forget to use 
// the `new` keyword when calling a constructor, the function will still 
// execute, but `this` will refer to the global object (or `undefined` in 
// strict mode). This can lead to errors when trying to access properties 
// or methods, as the returned object won't have them.


// Convention:
// To visually indicate that a function is intended to be used as a 
// constructor, it is common to capitalize the first letter of the function 
// name.