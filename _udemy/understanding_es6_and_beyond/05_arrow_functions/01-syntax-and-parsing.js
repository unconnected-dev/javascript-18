"use strict";


// Arrow Function Expressions in JavaScript

// Basic Syntax:
// - Arrow functions provide a concise way to write function expressions.
// - They are always anonymous and do not have their own `this`, `arguments`,
//   `super`, or `new.target`.

// Arrow Functions and `this` Context:
// - Unlike regular functions, arrow functions do not have their own `this`.
// - They inherit `this` from the enclosing lexical context, which is the
//   function or object within which the arrow function is defined.



let add = function(a, b){
    return a + b;
}

// Using arrow function syntax.
let add2 = (a, b) => {
    return a + b;
}

// Concise Body Syntax:
// - If the function body contains a single expression, you can omit the braces
//   `{}` and the `return` keyword.
// - The expression will be implicitly returned.
let add3 = (a, b) => a + b;



// Arrow Functions are Anonymous:
// - Arrow functions do not have their own name; they are anonymous by nature.
// - They are often used where functions are passed as arguments or assigned
//   to variables.
let greet = function(firstname, lastname){
    return `Hi ${firstname} ${lastname}}`;
}

// Arrow function equivalent
let greet2 = (firstName, lastName) => `Hi ${firstName} ${lastName}`;

console.log(greet2("Tony", "Alicea"));



// Self-Executing Arrow Functions:
// - Arrow functions can be immediately invoked just like regular functions.
// - This is useful in situations where you need to execute a function
//   immediately after it's defined.
console.log((() => { return 1 })());



// Key Differences Between Arrow Functions and Regular Functions:
// - No `this` Binding: Arrow functions inherit `this` from their surrounding
//   context. Regular functions have their own `this` which depends on how the 
//   function is called.
// - No `arguments` Object: Arrow functions do not have an `arguments` object. 
//   Instead, you would use rest parameters (...args) if you need to access 
//   arguments.
// - Cannot be used as Constructors: Arrow functions cannot be used with `new`
//   to create instances, unlike regular functions.
// - Cannot have a `prototype` property: Since arrow functions are not 
//   constructible, they do not have a `prototype` property.



// Arrow Functions:
// - Arrow functions are a more concise way to write function expressions in 
//   JavaScript.
// - They are anonymous, meaning they do not have their own name.
// - The syntax is shorter and often more readable, especially for simple
//   functions.

// Lexical `this`:
// - One of the most important features of arrow functions is that they do not 
//   have their own `this` context.
// - Instead, they inherit `this` from the surrounding (lexical) scope. This is 
//   particularly useful in situations where using the this keyword inside a 
//   regular function would refer to an unexpected context.

// Implicit Returns:
// - If an arrow function has a single expression in its body, you can omit the 
//   braces {} and the return keyword.
// - This makes the function even more concise.

// Use Cases:
// - Arrow functions are commonly used in scenarios where you would normally 
//   use a function expression, such as in callbacks or as arguments to 
//   functions like map, filter, or reduce.

// Limitations:
// - Arrow functions cannot be used as constructors; you cannot use new with 
//   them.
// - They also lack their own arguments object and must rely on the surrounding
//   context's arguments or use rest parameters.