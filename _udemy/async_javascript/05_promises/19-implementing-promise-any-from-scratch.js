"use strict";


//This is a custom implementation of `Promise.any` from scratch. `Promise.any` takes 
//an array of promises and returns a single promise that resolves as soon as any one 
//of the promises in the array resolves

//If the input array is empty, `Promise.any` returns a rejected promise 
//with an `AggregateError` indicating that all promises were rejected
const promiseAny = (arrayOfPromises) => {

    if (arrayOfPromises.length === 0) {
        //If no promises are provided, return a rejected promise with an `AggregateError`
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
    }

    const promiseRejections = [];//Array to store rejection reasons

    let rejectedPromisesCount = 0;

    return new Promise((resolve, reject) => {

        //Iterate over each promise in the array
        arrayOfPromises.forEach((promise, index) => {

            //If the item is not a promise, convert it to one using `Promise.resolve`
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }

            //If a promise resolves, resolve the main promise with its value
            promise.then(value => {
				resolve(value);
            })

            //If a promise is rejected, store the rejection reason
            .catch(reason => {
				rejectedPromisesCount += 1;
                promiseRejections[index] = reason;
                
                //If all promises are rejected, reject the main promise with an `AggregateError`
                if (rejectedPromisesCount === arrayOfPromises.length) {
					reject(new AggregateError(promiseRejections, 'All promises were rejected'));
                }
            });
        });
    });
}