"use strict";


//Use Promise.allSettled when you don't mind if one or more of your promises fail
//and you want to get the result of each promise regardless of success or failure

//Use `Promise.all` when the failure of one promise means you want to treat the 
//whole operation as failed


//Declare 3 functions that imitate an API call to different dealers
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);//Resolves with 8000 after 3 seconds
    });
}

function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Not suitable car')), 2000);//Rejects with an error after 2 seconds
    });
}

function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 4000);//Resolves with 10000 after 4 seconds
    });
}



//Regular `Promise.all` method:
//If one promise fails, the entire `Promise.all` fails, but using `.catch` allows 
//capturing and handling each promise's error individually
if(false){
    Promise.all([
        askFirstDealer().catch(error => { return error }),
        askSecondDealer().catch(error => { return error }),
        askThirdDealer().catch(error => { return error }),
    ])
    .then(prices => console.log(`${prices}`))
    .catch(reason => console.log(`${error}`));
}



//`Promise.allSettled` works like `Promise.all` with `.catch` handling, but it 
//returns a promise that always resolves. The resulting promise from `allSettled` 
//is always fulfilled, never rejected.

//Each item in the resulting array is an object with two properties:
//  - `status` ("fulfilled" or "rejected") and `value` or `reason` 
//    depending on whether the promise was resolved or rejected
if(true){
    Promise.allSettled([
        askFirstDealer(),
        askSecondDealer(),
        askThirdDealer(),
    ])
    .then(data => console.log(`${data}`));//Logs the array of results
}


//Promise.allSettled: 
//  - Always returns a promise that resolves regardless of whether the input 
//    promises succeed or fail. The result is an array of objects, each 
//    representing the outcome of an individual promise

//Promise.all vs. Promise.allSettled: 
//  - Use Promise.all when you need all promises to succeed for the operation 
//    to be considered successful. Use Promise.allSettled when you want to know 
//    the result of each promise regardless of success or failure

//Handling Promise Results: 
//  - In Promise.allSettled, each result object contains a status field and either 
//    a value (for fulfilled promises) or reason (for rejected promises)