"use strict";



// Boolean Coercion in JavaScript

// JavaScript coerces values to boolean in various contexts, such as in 
// conditional statements (if, while, etc.). Certain values are considered 
// "falsy" and are coerced to `false`, while others are "truthy" and coerced 
// to `true`

// Examples of "falsy" values, which are coerced to `false`:
if(false){
    console.log(`Boolean(undefined): ${Boolean(undefined)}`);
    console.log(`Boolean(null): ${Boolean(null)}`);
    console.log(`Boolean(""): ${Boolean("")}`);
}


if(false){
    // Variables without assigned values are `undefined`, which is also a 
    // falsy value
    var a;

    // In an `if` statement, JavaScript attempts to coerce the value inside 
    // the parentheses to a boolean

    // `a` is `undefined` so it gets coerced to `false` and the else block 
    // is executed
    if(a){
        console.log(`a --> Something is there`);
    } else {
        console.log(`a --> Something is not there`);
    }
}


if(false){
    console.log(`Boolean(0): ${Boolean(0)}`);
    // Output: false
}


// The number 0 is a falsy value, even though it is a valid number. 0 is not
// necessarily "lack of existence," but JavaScript still treats it as falsy 
// in conditionals
if(false){
    var b = 0;
    
    // 0 is falsy and is coerced to `false` so the else block is executed
    if(b){
        console.log(`b --> Something is there`);
    } else {
        console.log(`b --> Something is not there`);
    }
}



// Fixing Falsy Behavior for Valid Values Like 0

// In cases where you expect 0 to be a valid value, you can use logical 
// operators to refine your conditional logic. Here, we use `b === 0` to
// explicitly check if `b` is 0, and if so, we treat it as a valid value

// The `||` (OR) operator has lower precedence than `===`, so `b === 0` 
// is evaluated first
if(false){
    var b = 0;

    // `b === 0` returns true
    if(b || b === 0){
        console.log(`b --> Something is there`);
    } else {
        console.log(`b --> Something is not there`);
    }
}