"use strict";


//Async functions always return a promise
//Regardless of what you return inside the async function, it will always 
//be wrapped in a Promise

//If you return a non-promise value from an async function, JavaScript will
//automatically wrap it into a promise
if(false){
    
    //This function returns a string 'Hello World'. Since it's an async function
    //JavaScript automatically wraps this string in a Promise
    async function f() {
        return 'Hello World';
    }

    //Here, f() returns a Promise, even though we returned a string inside the function
    console.log(f() instanceof Promise === true);
}



//If you return a promise from an async function, JavaScript will not make any 
//transformations on it
if(false){

    //This function returns a Promise that resolves to true after 5 seconds.
    //Since the return value is already a Promise, JavaScript returns it as-is 
    //without wrapping it again.
    async function f() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(true), 5000);
        });
    }

    //Here, f() returns the same Promise that was created inside the function
    console.log(f() instanceof Promise === true);
}



//You can also return a rejected promise from an async function
if(true){

    //This function returns a rejected Promise with the value 404
    //Rejected promises are typically used to represent errors
    async function f() {
        return Promise.reject(404);
    }

    //Here, f() returns a Promise that is already rejected
    console.log(f());
}


//Promise Wrapping: 
// - An async function always returns a Promise. If you return a non-Promise value
//   it will be automatically wrapped in a Promise

//Direct Promise Return: 
// - If you return an already created Promise, JavaScript will return it without any 
//   modification

//Rejected Promises: 
// - You can explicitly return a rejected Promise from an async function, which can 
//   be useful for handling errors in asynchronous code