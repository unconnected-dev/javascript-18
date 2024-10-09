"use strict";



// Extending Classes and Prototypical Inheritance in JavaScript

// Prototypical Inheritance:
// - JavaScript is a prototype-based language, meaning that objects inherit
//   properties and methods from other objects via the prototype chain.
// - Every object has an internal link (`[[Prototype]]`, accessed via 
//   `__proto__`) to another object, from which it can inherit properties and
//   methods.

// `extends` Keyword:
// - The `extends` keyword in JavaScript is used to create a class that is a
//   child of another class.
// - When one class extends another, it inherits all the properties and methods
//   from the parent class, forming a prototype chain between the two classes.



// This defines a new class named `Person`.
class Person{
    // Public instance field.
    firstName;

    // Constructor to initialize the instance.
    constructor(name){
        this.firstName = name;
    }

    // Method accessible to all instances of `Person`.
    greet(){
        return `Hello, ${this.firstName}`;
    }
}


// Extending the Prototype Chain:
// - The `Tony` class extends the `Person` class, meaning that `Tony` inherits
//   all properties and methods from `Person`.
// - The `Tony` class can also define its own methods or override inherited 
//   ones.
class Tony extends Person{

    // A method specific to the `Tony` class.
    meet(){
        return "Nice to meet you";
    }
}

// Creating Instances and Inheritance:
let me = new Tony("Tony");

console.log(`${me.meet()}`);   // method from `Tony` class
console.log(`${me.greet()}`);  // inherited method from `Person` class



// Prototype Chain Analysis:
console.log(me.__proto__);                                  // Outputs: Tony's prototype
console.log(me.__proto__ === Tony.prototype);               // true: `me`'s prototype is `Tony.prototype`
console.log(me.__proto__.__proto__);                        // Outputs: Person's prototype (inherited from `Person`)
console.log(Tony.prototype.__proto__ === Person.prototype); // true: `Tony`'s prototype is linked to `Person`'s prototype
console.log(Tony.__proto__);                                // Outputs: `Function.prototype` (all functions derive from Function)


let me2 = new Person("Anthony");
console.log(`${me2.greet()}`);
// The following line will throw an error because `meet` is not defined in 
// `Person`.
// Error: `me2.meet is not a function`
// console.log(`${me2.meet()}`); 



// Subclassing Built-in Objects:
// - You can also extend built-in JavaScript objects like `Number`, `Array`, 
//   etc.
// - This allows you to add custom methods to these objects while retaining 
//   their default behavior.
class myNumber extends Number {

    // A method specific to `myNumber` that adds 1 to the number.
    addOne(){
        return this + 1;
    }
}

let num = new myNumber(3.053);
console.log(num.toFixed(1));  // Outputs: "3.1" (inherited from `Number` class)
console.log(num.addOne());    // Outputs: 4.053 (custom method in `myNumber` class)


// Prototypical Inheritance Recap:
// - Objects inherit from other objects through the prototype chain, which 
//   allows for shared properties and methods without duplicating code.
// - The `extends` keyword creates a subclass, linking the child's prototype to
//   the parent's prototype, enabling inheritance of properties and methods.
// - Custom methods can be added to subclasses, enhancing or extending the 
//   functionality of the parent class.



// Prototypical Inheritance:
// - Objects inherit properties and methods through a prototype chain.
// - Every object has a __proto__ property that points to its prototype, and 
//   this chain continues up until it reaches Object.prototype.

// extends Keyword:
// - The extends keyword is used to create a subclass, inheriting properties 
//   and methods from a parent class.
// - Subclasses can also define their own methods or override those of the 
//   parent class.

// Inheritance Hierarchy:
// - When a subclass (e.g., Tony) extends a parent class (e.g., Person), the 
//   prototype of the subclass is linked to the prototype of the parent class.
// - This linkage enables instances of the subclass to access methods and 
//   properties defined in the parent class.

// Subclassing Built-in Objects:
// - JavaScript allows you to extend built-in objects like Number, Array, etc.,
//   enabling you to add or customize methods while retaining the default 
//   behavior of these objects.