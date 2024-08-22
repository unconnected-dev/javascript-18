"use strict";


//This is promiseAll from scratch
//This function mimics the behavior of Promise.all by resolving an array of promises
const promiseAll = (arrayOfPromises) =>{
    
    //If the array is empty, resolve immediately with an empty array
    if(arrayOfPromises.length === 0){
        return Promise.resolve([]);
    }

    const promiseValues = [];       //Array to store resolved values

    let settledPromisesCount = 0;   //Counter to track how many promises have settled

    
    //Return a new promise that resolves when all input promises have settled
    return new Promise((resolve, reject) =>{

        arrayOfPromises.forEach((promise, index) => {

            // If an item is not a promise, convert it to a resolved promise
            if(promise instanceof Promise === false){
                promise = Promise.resolve(promise);
            }

            //Handle each promise's resolution
            promise.then((result) => {
                settledPromisesCount += 1;      
                promiseValues[index] = result;  

                //When all promises are settled, resolve the main promise with the array of values
                if(settledPromisesCount === arrayOfPromises.length){
                    resolve(promiseValues);
                }
            }).catch(reason => {
                //If any promise is rejected, reject the main promise immediately with the reason
                reject(reason);
            });
        });
    });
}


//Example function that returns a promise resolving to 1 after 1 second
const getOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    });
}

//Example function that returns a promise resolving to 2 after 2 seconds
const getTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000);
    });
}

//Example function that returns a promise resolving to 3 after 3 seconds
const getThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 3000);
    });
}

//Example function that returns a promise which gets rejected immediately
const getRejected = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('error message')), 1);
    });
}



//Example usage: All promises resolve successfully. 
//The resulting array will be [2, 1, 3], respecting the order of promises
if(false){
    promiseAll([getTwo(), getOne(), getThree()])
        .then(values => {
            console.log(`${values}`);
        });
}


//Example usage: If any promise is rejected, the main promise is rejected immediately
//This example will log the rejection reason 'error message' without waiting for others to resolve
if(false){
    promiseAll([getTwo(), getRejected(), getThree()])
    .then(values => {
        console.log(`${values}`);
    })
    .catch(reason =>{
        console.log(`${reason}`);
    });
}


//Example usage: Even if the array contains non-promise values, they are converted to 
//resolved promises and processed
if(true){
    promiseAll([1,"string", false])
        .then(values => console.log(values));//Logs: [1, "string", false]
}