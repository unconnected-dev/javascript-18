"use strict";



//Execution Context (Global)

//Global Context:
//The default execution context that is created when the JavaScript engine starts
//executing code. It is not inside any function or block; hence, it's referred to
//as the "global" context

//The base execution context in JavaScript is the global execution context. It is 
//accessible everywhere in your code, and it is the first context that is created 
//when your script starts

//The global execution context creates two key things:
// - A global object (`window` in browsers, or `global` in Node.js)
// - A special keyword, `this`, which refers to the global object in the global context

//These are automatically created by the JavaScript engine when the global execution 
//context is initialized


//In the global context, `this` refers to the global object
console.log(`'this' value: ${this}`);
console.log(this);


//In browsers, `window` is the global object. Each browser tab runs in its own execution
//context. If the code is run in a Node.js environment, `this` would refer to the Node.js
//global object instead of `window`
console.log(window);


//Variable declared in the global context
var a = 'Hello World';

//Function declared in the global context
function b(){}


//Variables and functions declared outside of other functions are automatically attached 
//to the global object. They become properties of the global object 
//(e.g., `window.a` or `window.b` in a browser)

console.log(window);        //The global object (window in browsers)
console.log(`${a}`);        //Logs the value of variable `a`
console.log(`${window.a}`); //Logs the value of `a` via the global object


//Each time JavaScript code is executed, an execution context is created. The global execution
//context does not have an outer environment, meaning there is nothing above it. For functions,
//an execution context is created when they are invoked