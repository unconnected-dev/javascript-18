"use strict";


//Original function
//The original version of the function simply capitalizes the first letter of 
//a given string. It returns the result directly and does not handle any errors
//or asynchronous operations
if(false){
    function capitalize(test){
        return text[0].toUpperCase() + text.substr(1);
    }
}


//The original function is straightforward, but it has limitations:
// - It does not handle errors (e.g., if the input is not a string)
// - It is synchronous, so it cannot be used in scenarios where asynchronous
//   processing might be needed



//Function rewritten as a Promise
//The function has been modified to return a Promise. This allows for better
//error handling and makes the function more flexible for use in asynchronous workflows
function capitalizePromise(text){
    return new Promise(function(resolve, reject){
        
        //Check if the input is a string
        //If not, reject the promise with an error message
        if(typeof text !== 'string'){
            return reject(new Error('Argument must be a string'));
        }

        //If the input is valid, capitalize the first letter of the string
        const result = text[0].toUpperCase() + text.substr(1);
        
        //Resolve the promise with the capitalized string
        return resolve(result);
    })
}


//Example of using the promise-based function
//Here, we invoke the capitalizePromise function with a valid string ('test')
capitalizePromise('test')
    .then(
        value => {
            //The function inside .then() is called when the promise is resolved successfully
            console.log(`${value}`);//Logs: Test
        },
        error => {
            //The function inside .then() is called with an error if the promise is rejected
            console.log(`${error}`);
        });