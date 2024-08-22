"use strict";


//Promise states can only be changed from "pending" to either "fulfilled" 
//or "rejected". Once a promise is fulfilled or rejected, it becomes 
//settled, and its state cannot be changed again

//Fulfilled and rejected are final states


//This promise will be resolved with the value 'value'
//After the first resolve() call, any further attempts to change the 
//state (via resolve or reject) are ignored
const myPromiseResolved = new Promise(function (resolve, reject){
    
    //This resolve call transitions the promise from "pending" to "fulfilled"
    //with the value 'value'
    resolve('value');

    //This resolve call is ignored because the promise is already fulfilled
    resolve('value2');

    //This reject call is also ignored because the promise has already been 
    //fulfilled and cannot transition to "rejected"
    reject('reason');
});


//The promise is already resolved with 'value', so it will show as fulfilled
console.log(myPromiseResolved);



//This promise will be rejected with the reason 'reason'
//Similar to the previous example, once the promise is rejected, any further
//attempts to change its state are ignored
const myPromiseRejected = new Promise(function (resolve, reject){
    
    //This reject call transitions the promise from "pending" to "rejected"
    //with the reason 'reason'
    reject('reason');

    //These resolve calls are ignored because the promise is already rejected
    resolve('value');
    resolve('value2');
});


//The promise is already rejected with 'reason', so it will show as rejected
console.log(myPromiseRejected);