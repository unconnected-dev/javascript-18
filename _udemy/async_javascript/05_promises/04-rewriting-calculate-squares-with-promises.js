"use strict";


//Original version of the function using callbacks
//The original function uses a callback pattern to handle the asynchronous
//operation of calculating a square. In this pattern, the callback function 
//is called either with an error (if the input is invalid) or with the result
if(false){
    function calculateSquare(number, callback){
        setTimeout(function(){
            if(typeof number !== 'number'){
                callback(new Error('Argument of type number is expected'));
                return;
            }

            const result = number * number;
            callback(null, result);

        }, 1000);
    }
}


//The above callback-based approach works but can lead to less readable code,
//especially with more complex operations. Using Promises can make the code
//easier to read and maintain, especially as complexity increases


//Function rewritten with Promises
//This version of the function replaces the callback pattern with a
//Promise-based pattern. The function now returns a Promise, allowing the 
//caller to use .then() and .catch() for handling the result
function calculateSquare(number){

    //Create a new Promise object
    //The executor function passed to the Promise constructor takes
    //two parameters: resolve and reject
    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){

            //Check if the input is a number
            //If not, reject the promise with an Error
            if(typeof number !== 'number'){
                return reject(new Error('Argument of type number is expected'));
            }
    
            //If the input is valid, calculate the square
            const result = number * number;
            
            //Resolve the promise with the result
            resolve(result);
    
        }, 1000);
    });

    return promise;
}



//Example of invoking the function with correct arguments
//The function is called with a valid number (4)
//.then() is used to handle the resolved value or the rejection error
calculateSquare(4)
    .then(
        value => {
            //This function is called when the promise is resolved successfully
            console.log(`${value}`);//Logs: 16
        },
        error => {
            //This function is called if the promise is rejected
            console.log(`${error}`);
        });


        
//Example of invoking the function with incorrect arguments
//The function is called with an invalid argument (a string instead of a number)
//.then() is used again, but this time the error handler will be executed.
calculateSquare('test string')
    .then(
        value => {
            //This function would be called if the promise resolves successfully
            console.log(`${value}`);
        },
        error => {
            //This function is called because the promise is rejected
            console.log(`${error}`);//Logs: Error: Argument of type number is expected
        });