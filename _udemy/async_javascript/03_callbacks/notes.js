"use strict";


//A callback is any function that is passed as an argument to another
//function, and then invoked from within that function

//Using callbacks is very common in JavaScript. A lot of JavaScript
//libraries and functions (like event listeners, timers, and array methods) 
//use callbacks


//Pros & Cons
// - Callbacks are simple and flexible because they are just functions
// - They are widely used and supported in JavaScript, making them a 
//   fundamental concept in the language

// - Callbacks can be hard to read, especially when dealing with multiple
//   nested callbacks (leading to "callback hell")
// - Figuring out the order of execution can be challenging, particularly 
//   in asynchronous operations



//Callback example
//This example demonstrates a simple synchronous callback
if(false){
    function print(number){
        console.log(`${number}`);
    }

    const numbers = [1,2,3,4];

    //The print function is not invoked immediately, but will be invoked as 
    //each number is cycled through by forEach

    //print is passed as a callback to forEach, and forEach calls print 
    //for each element in the array
    numbers.forEach(print);
}


//Async example
//This example demonstrates how asynchronous callbacks work
//"Hello world" shows before "This is a callback" because setTimeout puts
//the callback function on the task queue, which only starts executing after
//the call stack is empty (i.e., all synchronous code has been executed)
if(false){
    function test(callback){

        //With setTimeout, the callback is added to the task queue and will 
        //execute asynchronously
        // setTimeout(() => callback(), 0);
        
        //Without setTimeout, the callback is executed synchronously as it 
        //is added directly to the call stack
        callback();
    }

    test(() => console.log(`This is a callback...`));//The callback function to be executed

    //This line executes first because the callback is deferred to the task queue
    console.log(`Hello world...`); 
}


//Don't do the version below
//This example shows a common pitfall when using callbacks with asynchronous
//operations

//The error inside the setTimeout callback won't be caught by the try-catch
//block because the callback is executed asynchronously after the try-catch 
//block has already completed
//This illustrates the challenge of using try-catch with asynchronous code
if(false){
    function calculateSquare(number, callback){
        setTimeout(function(){

            if(typeof number !== 'number'){
                throw new Error('Argument of type number is expected!');
            }

            const result = number * number;
            callback(result);//The callback is executed after a delay
        }, 1000);
    }

    try{
        calculateSquare('bad argument', function(result){
            console.log(result);
        });
    }
    catch (error){
        //This catch block won't catch the error thrown inside the setTimeout callback
        console.log('Caught error: ' + String(error));
    }
}


//This example demonstrates the best practice for handling errors in callbacks
//especially in asynchronous code

//In this approach, instead of throwing an error directly in the asynchronous code, 
//the error is passed to the callback as the first argument. This is a common pattern
//in Node.js and other JavaScript environments
//The callback function checks if an error was passed and handles it appropriately, 
//which makes it safer and more predictable when dealing with asynchronous code
if(true){
    function calculateSquare(number, callback){
        setTimeout(() => {
            
            if(typeof number !== 'number'){
                callback(new Error('Argument of type number is expected!'));//Pass the error to the callback
                return;
            }

            const result = number * number;
            callback(null, result);//No error, so the first argument is null
        }, 1000);
    }


    calculateSquare('bad argument', function(error, result){
        if(error !== null){
            console.log('Caught error: ' + String(error));//Properly handling the error from the callback
        }
        console.log(result);//This will be undefined in case of an error
    });
}