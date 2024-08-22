"use strict";


// A Promise is an object representing the eventual completion or failure 
//of an asynchronous operation

//The Promise constructor is used to create a new Promise object
//It requires an executor function, which is executed immediately when 
//the promise is created

//The executor function receives two arguments: 
// - resolve: a function to call when the operation completes successfully
// - reject: a function to call when the operation fails or encounters an error
const myPromise = new Promise(function(resolve, reject){
   
    //This line calls resolve with a value, signaling that the promise is 
    //fulfilled successfully 
    resolve('value'); 

    //The following line, if uncommented, would call reject with a reason,
    //signaling that the promise is rejected (failed)
    // reject('reason');
});


//Log the promise object to the console
//At this point, the promise is already resolved with the value 'value', but
//logging it directly shows it as a Promise object
console.log(`${myPromise}`);