"use strict";


// Public Static Fields in JavaScript

//Static Fields and Methods:
// - Static fields (or properties) and methods belong to the class itself, not to 
//   instances of the class
// - They are called on the class directly, rather than on instances of the class
// - Static members are often used for utility functions, constants, or data that
//   is shared across all instances of the class


//This defines a new class named `Person`
class Person{
    //Public instance field
    firstName;

    //Constructor to initialize the instance
    constructor(name){
        this.firstName = name;
    }

    //Method accessible to all instances of `Person`
    greet(){
        return `Hello, ${this.firstName}`;
    }


    //Public Static Field:
    // - Declared using the `static` keyword
    // - This field is associated with the class itself, not with any instance
    static residence = "Earth";


    //Public Static Method:
    // - Like static fields, static methods are also associated with the class itself
    // - They can be called without creating an instance of the class
    static goodMorning(){
        return "Good morning";
    }
}

let me = new Person();


//Accessing Static Fields and Methods:
// - Static fields and methods are accessed directly on the class, not on instances
// - Attempting to access them through an instance will result in an error


console.log(me.__proto__);          //Outputs the prototype object of `me`, which is `Person.prototype`
// console.log(me.goodMorning());   //Error: `goodMorning` is not a function (because it's static and not on the instance)

console.log(Person.residence);      //Outputs: "Earth" (accessed directly from the class)
console.log(Person.goodMorning());  //Outputs: "Good morning" (accessed directly from the class)



//Static Fields:
// - A static field is defined using the static keyword within a class
// - Static fields are shared among all instances of the class, but they are not 
//   tied to any specific instance
// - These fields are accessed directly on the class itself, rather than on the
//   instances

//Static Methods:
// - Similar to static fields, static methods are also defined using the static
//   keyword
// - These methods can be called directly on the class without needing to create
//   an instance
// - Static methods are often used for utility functions that don't depend on 
//   instance-specific data

//Accessing Static Members:
// - Static members (fields and methods) are accessed using the class name
//   (e.g., Person.residence or Person.goodMorning())
// - They cannot be accessed directly through instances of the class
//   (e.g., me.residence would result in an error)

//Use Cases:
// - Static fields are ideal for defining constants or shared data that is common
//   to all instances
// - Static methods are useful for utility functions or operations that are related
//   to the class but not tied to any particular instance