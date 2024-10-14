"use strict";


// Function that takes another function as a parameter (callback pattern)
// Demonstrates how a function can be passed and executed as a callback.
if (false) {
    function runThis(otherFn) {
        console.log(`Running...`);
        otherFn(); // Execute the passed function (callback)
    }

    // Example usage of callback pattern
    runThis(function () {
        console.log(`Function 1...`);
    });

    runThis(function () {
        console.log(`Function 2...`);
    });
}



// Promise example
// Promises provide a standardized way to handle asynchronous operations and 
// events. A promise represents a value that may be available now, in the 
// future, or never.

// Breakdown of how a basic promise works (excluding error handling).
if (false) {
    const PENDING = 0;
    const FULFILLED = 1;
    const REJECTED = 2;

    // Custom implementation of a promise
    function CustomPromise(executor) {
        let state = PENDING;    // Initial state is pending
        let value = null;       // Holds the eventual resolved or rejected value
        let handlers = [];      // Array to store success handlers (for .then)
        let catches = [];       // Array to store error handlers (for .catch)


        // Resolve function (called by the executor)
        function resolve(result) {
            // Promise is 'one and done', meaning it can only change state once.
            if (state !== PENDING) return;

            state = FULFILLED;
            value = result;
            // Call all success handlers with the resolved value
            handlers.forEach((h) => h(value));
        }

        // Reject function (called by the executor)
        function reject(err) {
            if (state !== PENDING) return;

            state = REJECTED;
            value = err;
            // Call all error handlers with the rejection reason
            catches.forEach((c) => c(err));
        }

        // Register a success handler via .then
        this.then = function (callback) {
            if (state === FULFILLED) {
                // If already fulfilled, run the callback immediately
                callback(value);
            } else {
                // If pending, queue the handler for later
                handlers.push(callback);
            }
        };

        // Run the executor function and pass in the resolve/reject functions
        executor(resolve, reject);
    }

    // Example usage of CustomPromise
    const doWork = (res, rej) => {
        setTimeout(() => {
            res(`Hello World`);
        }, 1000); // Simulates an async task with setTimeout
    };

    let someText = new CustomPromise(doWork);

    // Register handlers using .then to execute after promise resolves
    someText.then((val) => {
        console.log(`1: ${val}`);
    });

    someText.then((val) => {
        console.log(`2: ${val}`);
    });

    // Handlers added after resolution are executed immediately
    setTimeout(() => {
        someText.then((val) => {
            console.log(`3: ${val}`);
        });
    }, 3000);
}



// Example using native JavaScript Promise
// This demonstrates how to avoid callback nesting by using promise chaining.
if (true) {
    const doWork = (resolve, reject) => {
        setTimeout(() => { resolve(`Hello World`) }, 1000);
    };

    const doOtherWork = (resolve, reject) => {
        setTimeout(() => { resolve(`How are you?`) }, 3000);
    };

    let someText = new Promise(doWork);


    // Optional: using chaining to avoid nesting of callbacks
    if (false) {
        let someOtherText = someText.then((val) => {
            console.log(`1: ${val}`);

            // .then returns a new promise, enabling chaining
            return `How are you??`;
        });

        someOtherText.then((val) => {
            console.log(`2: ${val}`);
        });
    }


    if (false) {
        // This shows how .then chaining works with promises.
        someText
            .then((val) => {
                console.log(`1: ${val}`);
                return `How are you???`;    // Return value gets passed to next .then
            })
            .then((val) => {
                console.log(`2: ${val}`);   // Logs the return from the previous .then
            });
    }


    if (false) {
        // Chain promises to handle multiple async operations in sequence
        someText
            .then((val) => {
                console.log(`1: ${val}`);
                // Return a new promise from another async task
                return new Promise(doOtherWork);
            })
            .then((val) => {
                console.log(`2: ${val}`);
            });
    }
}


// A somewhat real-world example of using fetch API with Promises
if (false) {
    fetch("video.json")
        .then(response => response.json())              // Parse response as JSON
        .then(data => console.log(`data: ${data}`));    // Handle the parsed data
}


// Thennable object: an object with a .then method that behaves like a promise
if (false) {
    somePromise
        .then((val) => {
            return anotherPromise;
        })
        .then((val) => {
            return custom_object_not_a_promise; // This is a thennable object
        })
        .then((val) => {
            return yetAnotherPromise;
        });
}



// Using async/await for more readable asynchronous code
// Async/await is syntactic sugar for promises, making code more linear and easier to follow.
if (true) {
    const doWork = (resolve, reject) => {
        setTimeout(() => { resolve(`Hello World`) }, 1000);
    };

    const doOtherWork = (resolve, reject) => {
        setTimeout(() => { resolve(`How are you?`) }, 1000);
    };

    // Async function that awaits the result of multiple promises in sequence
    async function doAllTheWork() {
        const someText = new Promise(doWork);       // Initiates the first async task
        const text1 = await someText;               // Waits for the first promise to resolve
        console.log(`1: ${text1}`);

        const otherText = new Promise(doOtherWork); // Initiates the second async task
        const text2 = await otherText;              // Waits for the second promise to resolve
        console.log(`2: ${text2}`);
    }

    doAllTheWork();         // Calls the async function
    console.log(`Done`);    // This will log immediately as doAllTheWork is async
}