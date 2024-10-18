"use strict";


// `undefined` in JavaScript
// `undefined` is a special value in JavaScript that indicates a variable has been
// declared but has not yet been assigned a value. This is the default value for 
// uninitialized variables

var a;
// Logs `undefined` because `a` is declared but not initialized
console.log(`a: ${a}`);


// `undefined` is also a keyword in JavaScript, meaning it’s a reserved word and
// cannot be used as a variable name
if (a === undefined) {

    // This condition will be true since `a` is not initialized
    console.log(`a is undefined`);
}
else {
    console.log(`a is defined`);
}


// Important distinction:
// If a variable has been declared (e.g., with `var`, `let`, or `const`) but not 
// initialized, it will be `undefined`. However, if a variable has never been 
// declared in the code, trying to access it will throw a `ReferenceError`.

// Example:
if (false) {
    // This would throw a `ReferenceError` because `b` is not declared
    console.log(`b: ${b}`);
}



// `undefined` vs. "empty" or "nonexistent":
// - `undefined` is a value that occupies memory space, meaning the variable 
//   exists but hasn't been assigned a specific value.
// - It’s a built-in, default state for variables that are declared but not 
//   yet initialized by the programmer.


// Best Practice: Avoid explicitly setting a variable to `undefined`
// - It's better to let `undefined` represent the state where the programmer
//   hasn't set a value yet.
// - Use `null` instead if you need to explicitly set an "empty" value.


let c = undefined;  // This is generally discouraged as it can cause confusion