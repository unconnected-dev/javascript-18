"use strict";


//Declaring calculateSquare function
//This function takes a number and a callback function as arguments
//It simulates an asynchronous operation by using setTimeout to delay
//the execution
function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            //If the argument is not a number, an error is passed to the callback
            callback(new Error('Argument of type number is expected'));
            return;
        }

        const result = number * number;
        //If the operation is successful, the result is passed to the callback
        callback(null, result);
    }, 1000);   //1 second delay to simulate asynchronous behavior
}


//The following block illustrates that there is not a delay of 1 second 
//between logging each number. The code just waits for 1 second and then
//logs all numbers at once.
if(false){

    //The reason all results are logged at once after 1 second is because 
    //each call to calculateSquare starts its own timer, and none of these 
    //timers block the others

    //All 3 lines of code are processed immediately without delay, and the 
    //callbacks are scheduled to execute after 1 second from their respective
    //start times
    calculateSquare(1, function(error, result){
        console.log(result);
    });
    calculateSquare(2, function(error, result){
        console.log(result);
    });
    calculateSquare(3, function(error, result){
        console.log(result);
    });
}


//Invoking calculateSquare function for numbers from 1 to 6 sequentially (one after another)
//This is an example of "callback hell" or "pyramid of doom"
if(true){

    //This code runs the calculateSquare function in a nested manner, meaning each 
    //subsequent operation only begins after the previous one completes
    //This creates a deeply nested structure, which is hard to read, maintain, and debug
    calculateSquare(1, function (error, result) {
        console.log(result);
        calculateSquare(2, function (error, result) {
            console.log(result);
            calculateSquare(3, function (error, result) {
                console.log(result);
                calculateSquare(4, function (error, result) {
                    console.log(result);
                    calculateSquare(5, function (error, result) {
                        console.log(result);
                        calculateSquare(6, function (error, result) {
                                console.log(result);
                        });
                    });
                });
            });
        });
    });
}