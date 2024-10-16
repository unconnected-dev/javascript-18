"use strict";


// Hoisting in JavaScript allows variable declarations to be accessible before 
// they are actually defined. It lifts the declarations to the top of their 
// scope during the compilation phase, creating a new property in the 
// Variable Environment Object for each declared variable. 

// The main goal of hoisting is to allow function declarations to be accessible 
// before they are defined. However, hoisting for variables (using `var`) 
// is a byproduct of this behavior. 

// The Temporal Dead Zone (TDZ) refers to the period from the start of a 
// variable's scope until it is declared. Accessing the variable in this zone 
// results in a ReferenceError.


// Hoisting Example: Variables
if (false) {
    console.log(me);        // `var` declarations are hoisted, defaulting to undefined
    console.log(job);       // `let` is hoisted but uninitialized, causing a ReferenceError
    console.log(year);      // `const` is hoisted but uninitialized, causing a ReferenceError

    var me = "pal";     
    let job = "teacher";  
    const year = 1991;     
}


// Hoisting Example: Functions
if (false) {
    console.log(addDecl(1, 2));         // Works as expected due to function hoisting

    // console.log(addUnd(1, 2));       // ReferenceError: `addUnd` is undefined due to hoisting
                                        // Only the declaration is hoisted, not the initialization

    console.log(addExpr(1, 2));         // ReferenceError: `addExpr` is uninitialized (TDZ)
    console.log(addArrow(1, 2));        // ReferenceError: `addArrow` is uninitialized (TDZ)

    function addDecl(a, b) {
        return a + b;                   // Function declaration is hoisted fully
    }

    var addUnd = function (a, b) {
        return a + b;                   // Function expression is hoisted, but uninitialized
    }

    const addExpr = function (a, b) {
        return a + b;                   // Function expression is uninitialized (TDZ)
    }

    const addArrow = (a, b) => a + b;   // Arrow function is uninitialized (TDZ)
}


// Examples of Dangerous Hoisting
if (false) {
    if (!numProducts) {                 // `numProducts` is hoisted and defaults to undefined
        deleteShoppingCart();           // This will execute since the condition is true
    }

    var numProducts = 10;               // Declaring numProducts after its usage

    function deleteShoppingCart() {
        console.log("All products deleted!"); 
    }

    // Global namespace pollution occurs when variables declared with `var` 
    // outside any function become properties of the global object. This can 
    // lead to unintentional overwriting of global variables and conflicts 
    // between scripts.

    var x = 1;                        // `x` is accessible on the global object
    let y = 2;                        // `let` does not create properties on the global object
    const z = 3;                      // `const` also does not create properties on the global object

    console.log(x === window.x);     // true, `x` is a property of the global object
    console.log(y === window.y);     // false, `y` is not a property of the global object
    console.log(z === window.z);     // false, `z` is not a property of the global object
}