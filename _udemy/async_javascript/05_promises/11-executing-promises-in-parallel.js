"use strict";


//Declare 3 functions that simulate API calls to different dealers
function askFirstDealer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);//Resolves after 3 seconds with a value of 8000
    });
}

function askSecondDealer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12000), 5000);//Resolves after 5 seconds with a value of 12000
    });
}

function askThirdDealer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);//Resolves after 8 seconds with a value of 10000
    });
}



//Invoke these 3 functions in parallel
//Promise.all executes multiple promises in parallel. It takes an array (or any iterable) of 
//promises as an argument and returns a single promise that resolves when all the promises in
//the array are resolved
Promise.all([
    askFirstDealer(),
    askSecondDealer(),
    askThirdDealer()
])
.then(prices => {
    console.log(`${prices}`);//Logs an array of results from all promises
});



//Example with non-promise values
//Promise.all resolves instantly with an array of values if the input array contains no 
//promises. The result is an array of the input values. Even an empty array will resolve

//This will resolve instantly and before the previous promise
Promise.all([1,'string',true]).then(values => console.log(`${values}`));//Logs: [1, 'string', true]


//Parallel Execution of Promises:
//  - Purpose: Promise.all allows you to execute multiple promises concurrently, rather than sequentially
//  - Input: Accepts an array or any iterable of promises
//  - Result: Returns a single promise that resolves when all promises in the array have resolved. If any
//    promise in the array rejects, the returned promise is rejected

//Handling Non-Promise Values:
//  - Immediate Resolution: If Promise.all is given an array containing non-promise values, it resolves 
//    immediately with an array of these values. This is useful for cases where you need to ensure 
//    consistency in handling inputs

//Error Handling:
//  - Rejection Handling: If any promise in the array rejects, the Promise.all promise is rejected with 
//    the reason of the first promise that was rejected. Handling errors in parallel promises requires 
//    additional error handling mechanisms, such as using .catch() or handling rejections within the 
//    .then() chain