"use strict";


// Outer Environment
// Every execution context has a reference to its outer environment. The outer
// environment is the lexical environment where the function was defined in the
// code. This reference helps the function access variables that are not defined 
// inside its own scope.

// In the case of function `b`, its outer environment is the global execution 
// context. Similarly, function `a` also has the global execution context as its
// outer environment.


  
// Lexical Environment
// The lexical environment refers to where the function is written in the code.
// For example, functions `a` and `b` are written at the top level, in the global
// environment. This means their outer environment is the global scope.

// If a function cannot find a variable in its own scope, it will look at the 
// outer reference (i.e., the next higher scope) to find that variable. This 
// process continues up the scope chain until the variable is found or the global
// environment is reached. This behavior depends on where the function is lexically 
// defined, not where it's called.

  
// Scope Chain
// The scope chain is a chain of outer references, where each execution context is 
// linked to its outer environment, allowing access to variables from higher scopes.


if (false) {

    // `b` will search for `myVar` in its own scope, then in the global scope
    function b() {
        console.log(`myVar: ${myVar}`);
    }
    
    // Calls `b`, which checks for `myVar` in its outer environment (the global scope)
    function a() {
        // `myVar` is local to `a`
        var myVar = 2;
        
        b();
    }

    // Global `myVar`
    var myVar = 1;

    // Outputs `1` because `b()` looks for `myVar` in the global scope, 
    // not inside `a`
    a();
}



// Lexical Scoping and Nested Functions
// If function `b` is defined inside function `a`, its outer environment changes.
// Now, `b` will look for variables in `a`'s scope before going to the global
// scope
if (true) {
    function a() {

        // `myVar` is local to `a`
        var myVar = 2;

        // Calls `b`, which has access to `a`'s scope
        b();
        
        function b() {
            console.log(`b(): ${myVar}`);
        }
    }

    var myVar = 1;

    // Outputs `2` because `b()` is now inside `a()` and finds `myVar = 2` 
    // in `a`'s scope
    a();

    // The following would cause an error if true, because `b` is 
    // now inside `a`, and cannot be called from the global scope
    if (false) {
        // Error: `b` is not defined in the global scope
        b();  
    }
}


// Scope
// Scope determines where a variable is accessible in your code and whether it 
// refers to the same variable or a new copy. Functions have their own local scope
// and variables declared inside a function are not accessible outside of it.



// Block Scoping with `let` and `const`
// Variables declared with `let` and `const` have block scope, meaning they are 
// only accessible within the block (e.g., `{}`) they are declared in.
// `let` and `const` are not hoisted to the top of their block like `var`, so 
// they cannot be accessed before their declaration.



// Temporal Dead Zone (TDZ)
// During the execution phase, variables declared with `let` and `const` are 
// placed in memory but are not initialized. They remain in a "temporal dead zone"
// until the line of code that declares the variable is executed. This means you
// cannot use the variable before its declaration line is reached.