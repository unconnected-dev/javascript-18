"use strict";



// Closures and Callbacks

// A closure is a function that retains access to its lexical scope, even
// when the function is executed outside that scope.

// Example of a closure with a callback
function sayHiLater() {
    var greeting = 'Hi';

    // setTimeout is a built-in function that executes a function after
    // a specified delay. Here, an anonymous function (callback) is 
    // passed as the first argument. This function will have access 
    // to the `greeting` variable due to closure.
    setTimeout(function() {

        // Logs 'Hi' after 1 second.
        console.log(`${greeting}`); 
    }, 1000);
}
sayHiLater(); 



// Callback Function
// A callback is a function that is passed as an argument to another 
// function, to be executed after the completion of that function.
// Essentially, when the outer function finishes its execution, it 
// "calls back" to the callback function provided.

// Example of a function that accepts a callback
function tellMeWhenDone(callback) {
    // Simulating some asynchronous operation
    var a = 1000; // Example value
    var b = 2000; // Example value

    // After completing the code, the callback is invoked.
    callback();
}

// Invoking `tellMeWhenDone` and passing a callback function
tellMeWhenDone(function() {
    console.log(`I am done!`);
});

// You can pass different callback functions to the same function
tellMeWhenDone(function() {
    console.log(`All done`); 
});


// Explanation of Callbacks:
// - Callbacks are particularly useful in asynchronous programming,
//   allowing you to execute code only after certain tasks are 
//   completed. They help manage the flow of asynchronous operations, 
//   ensuring that code that depends on the completion of another task 
//   is executed at the right time.

// Benefits of using Callbacks:
// 1. Asynchronous Control: Callbacks enable the execution of code 
//    after asynchronous operations.
// 2. Modularity: You can create reusable functions that accept 
//    callbacks, making your code more modular and easier to maintain.
// 3. Separation of Concerns: Callbacks allow you to separate the
//    code that does work from the code that handles the results, 
//    improving readability and organization.