"use strict";


//Function that returns a Promise
//The calculateSquare function takes a number and returns a Promise
//It resolves with the square of the number or rejects with an error if
//the input is not a number
function calculateSquare(number) {
    const promise = new Promise((resolve, reject) => {

        setTimeout(function () {

            if (typeof number !== 'number'){
                return reject(new Error('Argument of type number is expected'));
            }

            const result = number * number;

            resolve(result);

        }, 1000);

    });

    return promise;
}


//Chaining Promises Example
if(false){
    calculateSquare(1)
        .then(value => {
            //First .then() block
            //Logs the result of calculateSquare(1), which is 1
            console.log(`${value}`);
            
            //Return a value that will be passed to the next .then() block
            return 'my return value';
        })

        //value2 is coming from the return value of the unfullfilled 
        //function from the previous then method, it would be undefined
        //if there was nothing being returned
        .then(value2 => {

            //Second .then() block
            //Logs the value returned from the previous .then(), which 
            //is 'my return value'
            console.log(`${value2}`);
        });
}


//Throwing an Error from a .then() Block
if(false){
    calculateSquare(1)
        .then(value => {
            console.log(`${value}`);

            //Throwing an error inside .then() block. This error will be caught 
            //by the second function in the next .then() block
            throw new Error('error');
        })

        .then(value2 => {
            //This block is skipped because an error was thrown in the previous .then()
            console.log(`${value2}`);
        }, reason =>{
            //This block handles the error thrown in the previous .then()
            console.log(`error happened: ${reason}`);
        });
}


//Returning a New Promise from a .then() Block
if(false){
    calculateSquare(1)
        .then(value => {
            console.log(`${value}`);

            //Returning a new promise from a .then() block
            //This allows for chaining multiple asynchronous operations
            return calculateSquare(2);
        })

        .then(value2 => {
            console.log(`${value2}`);
        }, reason =>{
            console.log(`error happened: ${reason}`);
        });
}


//Handling Errors in Chained Promises
if(true){
    calculateSquare(1)
        .then(value => {
            console.log(`${value}`);
            
            //Attempting to calculate the square of a string
            //This will cause an error that will be caught in the next .then() block
            return calculateSquare('a string');
        })
        
        .then(value2 => {
            //This block is skipped because the previous calculateSquare call will reject
            console.log(`${value2}`);
        }, reason =>{
            //This block handles the error caused by passing a string instead of a number
            console.log(`error happened: ${reason}`);
        });
}