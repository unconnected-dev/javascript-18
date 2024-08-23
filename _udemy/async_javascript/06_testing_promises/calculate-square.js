"use strict";


//'npx mocha' to run tests

//The calculateSquare function is an asynchronous function that takes a single argument:
// - number: The input value to be squared

// This function returns a promise that:
// - Resolves with the square of the input number after a delay of 1 second
// - Rejects with an error if the input is not of type 'number'

function calculateSquare(number) {
    
    //Create a new Promise that will either resolve with the square of the number
    //or reject with an error if the input is not a number
    const promise = new Promise((resolve, reject) => {
        //Simulate a delay of 1 second using setTimeout
        setTimeout(function () {
            //Check if the input is a number
            if (typeof number !== 'number') {
                //If the input is not a number, reject the promise with an Error
                return reject(new Error('Argument of type number is expected'));
            }

            const result = number * number;

            resolve(result);

        }, 1000);

    });

    return promise;
}

export default calculateSquare;