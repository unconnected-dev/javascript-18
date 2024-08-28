"use strict";


// Constructor and Prototypes in JavaScript

//Constructor Function:
// - The `constructor` is a special method in a class that is called when a new 
//   instance of the class is created
// - It is used to initialize the instance with properties and to set up any 
//   required state.
// - The `constructor` method is automatically called when you use the `new` 
//   keyword to create an instance of the class

class Person{
    //A public instance field `firstName` is defined.
    firstName;

    //The `constructor` method initializes new instances of the `Person` class
    constructor(name){
        //Assigns the provided name to the `firstName` property of the instance
        this.firstName = name;
    }
}


//Creating instances of the `Person` class
let me = new Person("Tony");
let me2 = new Person("Anthony");

console.log(`${me}`);
console.log(`${me2}`);



//Prototype:
// - Every JavaScript function (including classes) has a `prototype` property
// - The `prototype` is an object that is shared among all instances of a class
//   or constructor function
// - Methods defined on the `prototype` are accessible to all instances, enabling
//   efficient sharing of methods and properties

//Prototype Chain:
// - When an object is created from a class, it internally links to the class's 
//   `prototype` object
// - This link forms the prototype chain, where if a property or method is not 
//   found on the instance itself, JavaScript looks up the chain to the prototype


console.log(me.__proto__);              // Outputs the `Person` class's prototype object
console.log(Person.prototype);          // Outputs the same prototype object
console.log(me.__proto__ === Person.prototype);  // Outputs: true (They are the same object)
console.log(me2.__proto__ === Person.prototype); // Outputs: true (All instances share the same prototype)


//Accessing the Prototype:
// - The `__proto__` property of an instance is a reference to the prototype object
//   from which the instance is derived
// - The `Person.prototype` is the actual prototype object shared by all instances
//   of `Person`
// - The comparison `me.__proto__ === Person.prototype` returns `true`, confirming
//   that `me` is linked to the `Person` prototype

//Prototype Inheritance:
// - Objects in JavaScript inherit properties and methods from their prototype
// - If a method or property is not found directly on an object, JavaScript will 
//   search up the prototype chain
// - This allows for shared functionality between instances without duplicating
//   code in each instance



//Constructor Function:
// - The constructor method is a special method used for initializing new objects
//   created from a class
// - It is called automatically when you create an instance using the `new` keyword

//Prototype:
// - Every function (including classes) has a prototype property, which is an object
//   that contains methods and properties shared by all instances of that class
// - Instances of the class link to this prototype object through their __proto__ property

//Prototype Chain:
// - If a property or method is not found on an instance itself, JavaScript will search
//   for it up the prototype chain, starting from the object's __proto__ and moving up

//Efficiency:
// - The use of prototypes allows JavaScript to share methods and properties across
//   instances, reducing memory usage and promoting code reuse