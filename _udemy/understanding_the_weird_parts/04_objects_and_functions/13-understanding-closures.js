"use strict";



// Closures in JavaScript
// A closure is created when a function returns another function that 
// "remembers" the variables from its outer (parent) scope, even after the 
// outer function has finished executing
function greet(whattosay){
    return function(name){
        console.log(`${whattosay} ${name}`);
    }
}

// `greet('Hi')` returns the inner function, which is then immediately invoked 
// with 'Tony'
greet(`Hi`)(`Tony`);


// A variable can store the returned function (closure) for later invocation
var a = greet(`Hello`);
a(`Bob`);


// How does the inner function know the value of `whattosay`?
//  - It's possible due to closures. When the outer `greet` function returns,
//    its execution context is popped off the stack, but the inner function 
//    still holds a reference to the `whattosay` variable through the closure

// Normally, when an execution context is removed, its variables are 
// garbage-collected. However, closures allow the inner function to "close over"
// and retain access to the outer function's variables, even after the outer
// function has finished executing. This behavior is known as a closure



// Example: Closures in loops

// Function that creates and returns an array of functions
function buildFunctions(){
    var arr = [];

    // Loop that creates functions and pushes them into an array
    for(var i = 0; i < 3; i++){
        arr.push(
            function(){
                console.log(`i: ${i}`);
            }
        );
    }
    return arr;
}


// This will output `3` three times, even though `i` was `0`, `1`, and `2` 
// during the loop. This happens because each function created inside the loop
// forms a closure around the variable `i`. By the time the functions are 
// invoked (after the loop), the value of `i` is `3`, and all functions share 
// the same reference to `i`
if(false){
    var fs = buildFunctions();
    fs[0]();
    fs[1]();
    fs[2]();
}


// To understand this better:
//  - The `console.log(i)` inside each function refers to the same `i` in the
//    parent scope
//  - The loop completes and sets `i = 3`, so when the functions are finally 
//    invoked, they all log the value of `i` as `3`



// Solving the issue: Preserving the value of `i` during each iteration

// We can use `let` to fix the issue. In ES6, `let` creates block-scoped 
// variables. This means a new `j` is created for each iteration of the loop,
// so each function will close over a unique copy of `j`
function buildFunctions2(){
    var arr = [];

    for(var i = 0; i < 3; i++){

        // `let` creates a new block-scoped variable `j` for each iteration
        let j = i;
        arr.push(
            function(){
                console.log(`${j}`);
            }
        );
    }
    return arr;
}


// Now each function will remember the correct value of `i` (stored in `j`) 
// when they were created
if(false){
    var fs2 = buildFunctions2();
    fs2[0]();
    fs2[1]();
    fs2[2]();
}



// Alternatively, using an IIFE (Immediately Invoked Function Expression) can
// achieve the same result. Each function will capture the value of `i` at the 
// time of creation by invoking an IIFE
function buildFunctions3() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(i) {            // IIFE captures the value of `i`
                return function() {
                    console.log(`i: ${i}`);
                };
            })(i)                     // IIFE is invoked with the current value of `i`
        );
    }
    return arr;
}

if(false){
    var fs3 = buildFunctions3();
    fs3[0]();
    fs3[1]();
    fs3[2]();
}