"use strict";


//Function that returns a Promise
//The calculateSquare function computes the square of a number after a delay
//It returns a Promise that either resolves with the result or rejects with an error
function calculateSquare(number) {
    const promise = new Promise((resolve, reject) => {

        setTimeout(function () {

            if (typeof number !== 'number'){
                return reject(new Error('Argument of type number is expected'));
            }

            const result = number * number;

            resolve(result);

        }, 1000);

    });

    return promise;
}


//Handling Promise Rejections
//Example with manual error handling using .then()
if(false){
    calculateSquare(1)
        .then(value => {
            console.log(`${value}`);//Logs the result of the first promise

            //Example of throwing an error to demonstrate rejection handling
            // throw new Error('something went wrong');

            return calculateSquare(2);//Returns a new promise
        })

        .then(value =>{

            //This error does not get caught in this block
            //You need to catch it in another .then() or .catch()
            throw new Error('something went wrong');
            console.log(`${value}`);//This line will not execute if an error is thrown

        }, reason => {
            //This will only handle errors from the previous promise chain
            console.log(`error: ${reason}`);
        })

        //This .then() is used to handle errors specifically
        .then(undefined, reason => {
            //Handles errors thrown in any previous .then() blocks
            console.log(`error: ${reason}`);
        });
}


//Example using .catch() for centralized error handling
if(true){
    calculateSquare(1)
        .then(value => {
            console.log(`${value}`);//Logs the result of the first promise
            return calculateSquare(2);//Returns a new promise
        })

        //Promises in .then() become rejected in two cases if there is an 
        //Error thrown or the return value is a rejected promise
        .then(value =>{
            //this usage of Error does not get caught
            // throw new Error('something went wrong');

            //instead of throwing an Error a rejected promise should be
            //sent and catch would be ok

            
            //Demonstrates handling an error by rejecting the promise
            //Instead of throwing an error, a rejected promise is returned
            return new Promise((resolve, reject) => {
                reject(new Error('something went wrong, rejected'));
            });

            console.log(`${value}`);//This line will not execute if the promise is rejected

        }, reason => {
            //Handles errors from the previous promise chain, if there is any
            console.log(`error: ${reason}`);
        })

        //.catch() removes the need for the first variable to be set to undefined as in the
        //previous example
        
        //Centralized error handling using .catch()
        .catch(reason => {
            //.catch() catches any errors thrown or rejected promises in the chain
            console.log(`error: ${reason}`);
        });
}

//Promise Rejection Handling:
//  - Rejection: A Promise can be rejected either by calling reject() or by throwing an error within a .then() block
//  - Error Propagation: Errors can be propagated through the promise chain. If an error is thrown in a .then() block,
//    it must be caught by a subsequent .then() with an error handler or by .catch()

//Handling Errors in .then():
//  - Error in .then(): If an error is thrown or if a promise returned from .then() is rejected, it needs to be handled 
//    in another .then() or .catch() block
//  - Specific Error Handling: You can provide an error handler as the second argument to .then(), which will handle 
//    errors thrown in the preceding .then() blocks

//Using .catch() for Error Handling:
//  - Centralized Error Handling: .catch() can be used to handle errors from any part of the promise chain. It simplifies
//    error handling by catching errors from preceding promises or rejected promises
//  - Syntax: .catch() is a cleaner way to handle errors compared to providing an error handler in every .then() block. It
//    helps avoid deeply nested error handlers