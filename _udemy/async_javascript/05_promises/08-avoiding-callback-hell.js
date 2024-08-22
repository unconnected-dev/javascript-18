"use strict";


//Function that returns a Promise
//The calculateSquare function computes the square of a number after a delay
//It returns a Promise that either resolves with the result or rejects with an error
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


//Example of using Promises to avoid callback hell
//In this example, we perform a sequence of asynchronous operations using Promises
//Each operation waits for the previous one to complete before proceeding

//The indentation is a lot easier to read than the callback hell example shown in
//03_callbacks/callback-hell.js
calculateSquare(1)

    .then(value => {
        //First .then() block
        console.log(`${value}`);//Logs: 1

        //Return a new promise from the .then() block
        //This allows chaining to wait for this new promise to resolve before continuing
        return calculateSquare(2);
    })

    .then(value => {
        //Second .then() block
        console.log(`${value}`);//Logs: 4
        return calculateSquare(3);
    })

    .then(value => {
        //Third .then() block
        console.log(`${value}`);
        return calculateSquare(4);//Logs: 9
    })

    .then(value => {
        //Fourth .then() block
        console.log(`${value}`);//Logs: 16
        return calculateSquare(5);
    });