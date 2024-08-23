"use strict";


//This is a custom implementation of `Promise.race` from scratch. The `promiseRace` 
//function takes an array of promises as input and returns a new promise
const promiseRace = (arrayOfPromises) => {

    if (arrayOfPromises.length === 0) {
        //Return a promise that neither resolves nor rejects if no promises are provided
        return new Promise((resolve, reject) => {});
    }

    return new Promise((resolve, reject) => {
        
        //Iterate through each promise in the array
        arrayOfPromises.forEach(promise => {

            //If the item is not already a promise, convert it to one 
            //using `Promise.resolve`
            if (promise instanceof Promise === false) {
                promise = Promise.resolve(promise);
            }
            
            //Resolve the race with the first promise that resolves
            promise.then(value => {
                resolve(value);
            });

            //Reject the race with the first promise that rejects
            promise.catch(reason => {
                reject(reason);
            });
        });
    });
}