"use strict";



//Symbols in JavaScript

//The Problem with Overwriting Methods:
//Consider a scenario where code unintentionally overwrites existing methods 
//or properties due to name collisions.


//Example: Someone else's code
class Person {
    firstName = "Tony";

    greet(){
        return `Hi, ${this.firstName}`;
    }
}

let tony = new Person();

//This method could overwrite the original `greet` method directly on the object
//tony.greet = function() { ... };

// You can also overwrite the method on the prototype, affecting all instances
tony.__proto__.greet = function(){
    return `Hello ${this.firstName}`;
}

console.log(tony.greet());



//Introduction to Symbols:
//A symbol is a unique, immutable primitive value. The uniqueness of symbols helps
//to avoid conflicts that can occur when properties share the same name
//In JavaScript, a symbol is a primitive data type, just like a string or number

//Symbols are useful for creating unique property keys that cannot be accidentally
//overwritten

const grt = Symbol("greet");    //Creating a symbol named "greet"
const grt2 = Symbol("greet");   //Another symbol with the same description

console.log(grt === grt2);      //false - Symbols are always unique, even if they have the same description

const fname = Symbol("fname");



//Using Symbols in a Class:
class Person2 {

    //Using symbols to define private properties and methods
    [fname] = "Brad";                   //This property is keyed by the unique symbol `fname`

    [grt]() {                           //This method is keyed by the unique symbol `grt`
        return `Hi, ${this[fname]}`;
    }
}

let tony2 = new Person2();

//Demonstrating that symbols provide unique property keys
const fname2 = Symbol("fname");

//This does not overwrite the original `fname` property
tony2[fname2] = "Anthony";              

//Attempting to override `greet` method on the prototype using symbols
tony2.__proto__.greet = function(){
    return `Proto Hello ${this[fname]}`;
}

console.log(tony2.greet()); //Undefined, because there is no `greet` method without using the symbol
console.log(tony2[grt]());  //Output: Hi, Brad



//Advantages of Symbols:
// - Symbols ensure that properties are unique, reducing the risk of accidental
//   overwriting or collisions
// - Symbols make your code more robust by avoiding "magic strings"—strings that
//   have a special meaning or usage in your program

//Global Symbols:
//Global symbols can be created using `Symbol.for`. These symbols are registered
//in a global symbol registry, meaning they can be accessed across different parts
//of the program
const HAIR_STRAIGHT = Symbol.for("Straight");
const HAIR_CURLY = Symbol.for("Curly");
const HAIR_WAVY = Symbol.for("Wavy");

//Retrieving a symbol from the global registry
let curly = Symbol.for("Curly");

//true - Both refer to the same global symbol
console.log(curly === HAIR_CURLY);          

//Retrieving the key associated with a symbol from the global registry
console.log(Symbol.keyFor(HAIR_CURLY));//Output: Curly


//Well-Known Symbols:
//JavaScript has several built-in symbols that the engine uses for specific tasks
//These are known as "well-known symbols." 
//For example:
// - `Symbol.iterator`: Used to define the default iterator for an object
// - `Symbol.toStringTag`: Used to create a custom string description of an object
//   when `toString` is called



//Symbols: 
// - Unique, immutable primitive values that are ideal for creating unique property keys

//Avoiding Overwrites:
// - Symbols help prevent accidental method/property overwriting

//Global Symbols:
// - Symbols can be shared across different parts of a program using Symbol.for, stored in a global registry

//Well-Known Symbols:
// - Built-in symbols that the JavaScript engine uses for specific operations