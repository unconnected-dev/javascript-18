"use strict";


//'npx mocha' to run tests

//The calculateSquare function is an asynchronous function that takes two arguments
// - number: the input value to be squared
// - callback: a callback function that will be executed after the calculation is complete
function calculateSquare(number, callback){

    //setTimeout is used to simulate an asynchronous operation
    //The function inside setTimeout will execute after 1 second
    setTimeout(function(){


        //Check if the provided number is not of type 'number'
        //If it's not, the callback is invoked with an Error object as the first argument
        //The error message explains that a number was expected as the input
        if(typeof number !== 'number'){
            callback(new Error('Argument of type number is expected'));
            return;//Return early to prevent further execution in case of an error
        }

        //Calculate the square of the number
        const result = number * number;

        //Invoke the callback function with 'null' as the first argument 
        //(indicating no error), and the result as the second argument
        callback(null, result);

    }, 1000);
}

//Export the calculateSquare function so it can be imported and used in other files
export default calculateSquare;