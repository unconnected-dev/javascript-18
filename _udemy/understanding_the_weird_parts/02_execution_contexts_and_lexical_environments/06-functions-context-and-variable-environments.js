"use strict";



// Variable Environment
// The variable environment refers to the place where variables are stored 
// in memory. It defines how variables relate to each other within different 
// scopes and contexts.


function b() {

    // Declared inside function `b` and is scoped to the execution context of `b`
    var myVar;  

    // Logs `undefined` because `myVar` is declared but not initialized
    console.log(`b() ${myVar}`);  
}

function a() {

    // This `myVar` is local to the function `a`, separate from `myVar` in 
    // `b` or the global scope
    var myVar = 2;  

    // Invokes function `b`, creating a new execution context for `b`
    b();  

    // Logs `2` because this refers to the `myVar` inside function `a`
    console.log(`a() ${myVar}`);  
}


if (true) {
    var myVar = 1;  
    console.log(`${myVar}`);  
    a();  
    console.log(`${myVar}`);  
}

// The log order:
// - `1`: Logs the global `myVar` before calling `a()`
// - `undefined`: Logs the `myVar` inside `b()` which is declared but not 
//   initialized
// - `2`: Logs the `myVar` inside `a()` which is locally assigned the value `2`
// - `1`: Logs the global `myVar` again after `a()` has finished executing



// Scope and Variable Environment:
// - Each variable belongs to its own scope, which is defined by where the 
//   variable is declared.
// - In JavaScript, every function creates its own execution context and 
//   scope when invoked.
// - Variables declared inside a function (with `var`, `let`, or `const`) are 
//   local to that function's scope.
// - The same variable name can exist in different scopes and each scope 
//   will have its own independent variable.