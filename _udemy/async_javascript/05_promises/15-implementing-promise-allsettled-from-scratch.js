"use strict";


//This is a custom implementation of `Promise.allSettled` from scratch
//It is a demonstration of how `Promise.allSettled` works internally,
//allowing you to understand the underlying logic.


//Define the `promiseAllSettled` function that accepts an array of promises
const promiseAllSettled = (arrayOfPromises) => {

    //If the input array is empty, immediately resolve with an empty array
    if (arrayOfPromises.length === 0) {
        return Promise.resolve([]);
    }

    const promiseValues = [];//Array to store the results of each promise.

    let settledPromisesCount = 0;//Counter to track how many promises have settled (either fulfilled or rejected)


    // Return a new promise that will resolve once all promises in the input array are settled
    return new Promise((resolve, reject) => {

        arrayOfPromises.forEach((promise, index) => {

            //Ensure each item in the array is treated as a promise
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }

            //Handle the case where the promise is fulfilled
            promise.then((result) => {
                settledPromisesCount += 1;
                
                //Store the result with a status of 'fulfilled'
                promiseValues[index] = {
                    status: 'fulfilled',
                    value: result,
                };

                //If all promises have settled, resolve the final promise with the results
                if (settledPromisesCount === arrayOfPromises.length) {
                    resolve(promiseValues);
                } 
            })

            //Handle the case where the promise is rejected
            .catch((reason) => {
                settledPromisesCount += 1;

                //Store the reason for rejection with a status of 'rejected'
                promiseValues[index] = {
                    status: 'rejected',
                    reason: reason,
                };
                
                //If all promises have settled, resolve the final promise with the results
                if (settledPromisesCount === arrayOfPromises.length) {
                    resolve(promiseValues);
                }
            });
        });
    });
}