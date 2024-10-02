"use strict";



// Dynamic Typing
// In JavaScript, variables are dynamically typed, meaning you don't explicitly
// declare the type of data a variable holds. The JavaScript engine determines 
// the variable type at runtime, based on the value assigned to it.

// This allows a variable to hold different types of values at different times
// during code execution.

if (false) {
    var isNew = true;  // Initially holds a boolean
    isNew = 'Yup!';    // Now holds a string
    isNew = 1;         // Now holds a number
}


// JavaScript handles this flexibility due to its dynamic nature.

// Static Typing (Contrast with JavaScript)
// In statically typed languages (e.g., Java or C#), you must declare the type 
// of a variable explicitly, and the type cannot change.

    // Example in a statically typed language (Java/C#):
    // This would cause a type error as
    // 'isNew' is declared as a boolean, but assigned a string.

    // bool isNew = 'Hello';  

// JavaScript avoids such errors due to its dynamic typing.



// Primitive Types
// Primitive types are basic data types in JavaScript that represent a single 
// value and are not objects. They are immutable, meaning their value cannot be 
// changed once created (although you can reassign variables to new values).

// The five main primitive types in JavaScript:
//  1. undefined
//  2. null
//  3. boolean
//  4. number
//  5. string

// Additionally, ES6 (ECMAScript 2015) introduced a new primitive type:
//  6. symbol


// Primitive types vs. Objects
// Primitive values hold only one value at a time.
// Objects, on the other hand, are collections of key-value pairs and can hold 
// more complex data.



// Undefined
// `undefined` represents the absence of a value. It is the default value 
// assigned to variables that are declared but not yet initialized.

// `undefined` is automatically assigned by the JavaScript engine when a 
// variable is declared without a value.
if (false) {
    let myVar;
    console.log(`myVar: ${myVar}`);
}


// Null
// `null` is an explicit assignment to indicate the intentional absence of a 
// value. It's useful when you want to reset a variable or signal that the 
// variable has no value.

// `null` is different from `undefined` in that it is explicitly set by the 
// developer, whereas `undefined` is set by JavaScript itself. Use `null` when 
// you want to intentionally denote "no value".
if (false) {
    let anotherVar = null;
    console.log(`anotherVar: ${anotherVar}`);
}


// Boolean
// A `boolean` is a logical value that can either be `true` or `false`. They are 
// often used in conditions and logical expressions to control the flow of code.
let isUserLoggedIn = false;



// Number
// Unlike many programming languages, JavaScript does not have separate types 
// for integers and floating-point numbers; it uses the `number` type for both.
let myNumber = 42;
let myFloat = 3.14;

// JavaScript's `number` type is a floating-point type, meaning that even if 
// you're working with integers, calculations may produce unexpected results 
// due to how floating-point arithmetic works.
if (false) {
    console.log(`0.1 + 0.2: ${0.1 + 0.2}`);
    // Output: 0.30000000000000004
}



// String
// A `string` is a sequence of characters used to represent text.
// Both single (`'`) and double (`"`) quotes can be used to define strings in 
// JavaScript, but they must match (you can't mix them).
let myString = "Hello, World!";
let anotherString = 'Hello again!';



// Symbol (introduced in ES6)
// A `symbol` is a unique and immutable primitive value, often used as keys for 
// object properties to avoid naming conflicts.
if (false) {
    let mySymbol = Symbol('description');
    console.log(`mySymbol: ${mySymbol}`);
}

// Symbols are unique, even if they have the same description.
if (false) {
    let symbol1 = Symbol('mySymbol');
    let symbol2 = Symbol('mySymbol');
    console.log(`symbol1 === symbol2: ${symbol1 === symbol2}`);
    // Output: false (each Symbol is unique)
}