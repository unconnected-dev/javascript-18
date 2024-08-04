"use strict";

//A callback is any function that is passed as an argument to another
//function, and then invoked from within that function

//Using callbacks is very common in JavaScript. A lot of JavaScript
//libraries use callbacks


//Pros & Cons
//Callbacks are simple, being just functions
//They are popular

//They are hard to read / figure out the order of execution
//There is callback hell



//Callback example
if(false){
    function print(number){
        console.log(`${number}`)
    }

    const numbers = [1,2,3,4];

    //print is not invoked but will be in as each number is cycled through
    numbers.forEach(print);
}


//Async example
//Hello world shows before This is a callback
//This is because setTimeout put the callback function on the task queue
//and the task queue starts executing after the callstack is empty
if(false){
    function test(callback){
        // setTimeout(() => callback(), 0);

        //Without setTimeout, callback is added to the callstack instead of the task queue
        //so it executes synchronously
        callback();
    }

    test(() => console.log(`This is a callback...`));

    console.log(`Hello world...`);
}


//Don't do the version below
//try, catch has problems with async due to 
//try catch blocks going on to the callstack but async
//going on to the task queue
if(false){
    function calculateSquare(number, callback){
        setTimeout(function(){

            if(typeof number !== 'number'){
                throw new Error('Argument of type number is expected!');
            }

            const result = number * number;
            callback(result);
        }, 1000);
    }

    try{
        calculateSquare('bad argument', function(result){
            console.log(result);
        });
    }
    catch (error){
        console.log('Caught error: ' + String(error))
    }
}


//This is preferable for handling callbacks, there is a different method
//for handling promises
if(true){
    function calculateSquare(number, callback){
        setTimeout(() => {
            
            if(typeof number !== 'number'){
                callback(new Error('Argument of type number is expected!'));
                return;
            }

            const result = number * number;
            callback(null, result);
        }, 1000);
    }

    calculateSquare('bad argument', function(error, result){
        if(error !== null){
            console.log('Caught error: ' + String(error));
        }
        console.log(result);
        
    });
}