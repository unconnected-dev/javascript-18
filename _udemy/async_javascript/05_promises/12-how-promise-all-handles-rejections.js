"use strict";


//Declare 3 functions which imitate the Dealer API
function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);//Resolves after 3 seconds
    });
}

function askSecondDealer() {
    return new Promise((resolve, reject) => {
    	setTimeout(() => reject('Not suitable car'), 5000);//Rejects after 5 seconds
    });
}

function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 4000);//Resolves after 4 seconds
    });
}


//Example of Promise.all handling rejections
//The promise returned by Promise.all will be rejected with a reason
//If any of the promises in the array rejects, Promise.all will immediately reject with that reason
if(false){
    Promise.all([
        askFirstDealer(), 
        askSecondDealer(), 
        askThirdDealer()
    ])
        .then(prices => {
            console.log(prices);//Will not execute if any promise rejects
        })
        .catch(error => {
            console.log(error);//Logs the reason from the first rejected promise
        });
}



//Handling rejections individually using .catch() on each promise
//This ensures that individual rejections do not cause Promise.all to fail
//Instead, each promise will be resolved with its error or value
Promise.all([
    
    //Each promise is caught to handle errors individually
    //Errors are returned as resolved values
    askFirstDealer().catch(error => { return error }),
    askSecondDealer().catch(error => { return error }),
    askThirdDealer().catch(error => { return error }),

    //Including a promise that is rejected immediately
    //This will cause Promise.all to reject immediately
    //Uncomment the following line to see the effect
    //Promise.reject('rejected for some reason')

])
    .then(prices => {
        console.log(prices);//Logs: an array with all resolved values or errors
    });


//Handling Rejections with Promise.all:
//  - Immediate Rejection: Promise.all will reject immediately if any of the promises in the 
//    array reject. The rejection reason of Promise.all will be the reason from the first promise
//    that rejected

//Abandoning Other Results:
//  - Once a promise in the Promise.all array rejects, all other promises are abandoned, and the 
//    entire Promise.all promise is rejected


//Handling Individual Promise Rejections:
//  - Using .catch(): By attaching .catch() to each individual promise, errors can be handled 
//    separately, and each promise resolves with either its result or an error

//Resolved Values or Errors: 
//  - This approach ensures that Promise.all resolves with an array containing either resolved 
//    values or errors, preventing the entire promise from rejecting due to individual rejections