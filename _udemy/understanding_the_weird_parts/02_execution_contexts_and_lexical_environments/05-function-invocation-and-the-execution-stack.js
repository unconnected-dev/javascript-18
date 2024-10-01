"use strict";



// Single-threaded
// JavaScript is single-threaded, meaning it can only execute one command at a time.
// From our perspective, JavaScript behaves as single-threaded, even though the 
// browser can handle other tasks (like rendering).
// However, JavaScript itself executes synchronously in a single-threaded manner.


// Synchronous
// Code execution happens one line at a time and in the order it's written.
// This means that in JavaScript, only one thing is happening at any given moment.
// Asynchronous operations (like callbacks, promises, or async/await) exist but 
// will be covered later.


// Invocation
// Invocation refers to "running" or "calling" a function.
// In JavaScript, functions are invoked by using parentheses `()`.


function b() {}

function a() {
    // Invokes function `b` inside function `a`
    b(); 
}

// Example of invocation
// Invokes function `a`, which then invokes `b`
a();  



// Execution Context and the Call Stack
// - Whenever a function is invoked, a new execution context is created.
// - The execution context contains the function's local variables, the value
//   of `this`, and references to any outer scope.
// - These execution contexts are managed by the call stack 
//   (also known as the execution stack).


// The Call Stack
// - The call stack keeps track of the order in which functions are invoked.
// - Whichever execution context is on top of the stack is the one currently 
//   running.
// - When a function is called, a new execution context is created and pushed
//   onto the stack.

// - Once a function finishes executing, its execution context is popped off 
//   the stack.
// - The program then resumes with the previous execution context that was
//   next on the stack.