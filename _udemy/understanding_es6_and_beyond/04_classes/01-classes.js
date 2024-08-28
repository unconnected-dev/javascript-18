"use strict";


// Classes in JavaScript

//Introduction to Classes:
// - A class in JavaScript is a blueprint for creating objects with shared 
//   properties and methods
// - Classes provide a structured way to create objects, often mimicking the
//   class-based structures found in other languages like C# or Java
// - However, unlike in those languages, classes in JavaScript are essentially
//   syntactic sugar over the existing prototype-based inheritance model

//Classes in Other Languages:
// - In languages like C# or Java, classes are fundamental constructs used to 
//   define new types with properties, methods, and inheritance
// - In JavaScript, classes serve a similar purpose but do not introduce new 
//   features. Instead, they provide a more convenient and familiar syntax for
//   working with objects and prototypes

//Syntactic Sugar:
// - The term "syntactic sugar" refers to a feature that makes code easier to 
//   read and write, but doesn't add new functionality to the language
// - JavaScript classes are syntactic sugar over the prototype-based inheritance 
//   system that has always existed in the language
// - Under the hood, a class in JavaScript is still just a special kind of function
//   that sets up the prototype chain in a more intuitive way



//This defines a new class named `Person`
class Person{
    
    //By default, it includes a constructor method, which can be used to 
    //initialize new instances of the class
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //Methods can be added to the class
    //They will be available on all instances of the class
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }
}


//Classes Are Functions:
// - When you define a class in JavaScript, you're actually creating a special 
//   kind of function
// - The `typeof` operator applied to a class will return "function"
let p = class {

    //This is an anonymous class expression assigned to the variable `p`
    constructor(name) {
        this.name = name;
    }
}


//Demonstrating that `p` is indeed a function
console.log(typeof p); //Outputs: "function"


//Class Internals:
// - When you create a class, JavaScript creates a function object
// - A special internal flag, `isClassConstructor`, is set to `true`, which differentiates
//   class constructors from regular functions
// - This flag helps ensure that class constructors cannot be called without the `new` 
//   keyword, which would otherwise result in an error


//Using the `logClass` function to log the class itself
function logClass(c){
    console.log(`${c}`);
}

logClass(p);//Outputs the class definition

logClass(class{
    //This logs an anonymous class expression
});



//Classes in JavaScript:
// - Classes are syntactic sugar for creating objects using the prototype-based inheritance model

//Comparison to Other Languages:
// - Unlike in languages like C# or Java, where classes are central to creating types, JavaScript
//   classes are just another way to create objects

//Classes as Functions:
// - Internally, a class in JavaScript is just a special kind of function. The typeof operator 
//   returns "function" when applied to a class

//Syntactic Sugar:
// - JavaScript classes don’t add new functionality; they simply provide a more intuitive and 
//   readable way to work with objects and inheritance