"use strict";


//You can't access the value of a promise directly using something like
//myPromise.value. This is because PromiseStatus and PromiseValue are internal
//properties of the promise. These internal properties are not exposed to the
//outside world, meaning they can't be accessed directly

//Instead, to interact with the resolved value or rejection reason of a promise, 
//you need to use the promise methods such as .then() for fulfilled promises and
//.catch() for rejected promises

//The functions provided to .then() and .catch() are called when the promise is
//fulfilled or rejected, respectively. These functions are often referred to as
//onFulfilled (for .then) and onRejected (for .catch)



//This promise immediately resolves with the value 'Hello world'
const myPromise = new Promise(function (resolve, reject) {
    resolve('Hello world');
});



//The .then() method is used to handle the promise's resolved value. The function
//provided to .then() (the onFulfilled function) is called asynchronously after
//the promise is fulfilled
myPromise.then(value => {
    console.log('This is inside onFulfilled function');
    console.log(`${value}`);
});


//This line is executed immediately after the promise is created, before the
//onFulfilled function inside .then() is executed. This demonstrates that .then()
//handlers are called asynchronously, meaning they are placed in the event queue 
//and executed only after all synchronous code in the current call stack has completed.
console.log('This is written after myPromise.then');