"use strict";


//This function accepts a promise as an argument and logs its resolved value
//to the console
function logToConsole(somePromise){
    somePromise.then(value => console.log(`${value}`));
}


//Create a promise and pass this promise to the logToConsole function
//The promise is resolved with the value 'Hello'
const somePromise = new Promise(
    (resolve, reject) => resolve('Hello')
);
logToConsole(somePromise);



//Example of passing a non-promise value to logToConsole
//Uncommenting the following line will throw an error because logToConsole
//expects a promise, not a string

//const value = 'string';
//logToConsole(value);



//Promise.resolve
//Creates a promise that is resolved with the given value
//If the value is already a promise, Promise.resolve returns it unchanged
//This is useful for wrapping non-promise values in a promise
const promisifiedValue = Promise.resolve(value);
logToConsole(promisifiedValue);


//Promise.reject
//Creates a promise that is rejected with the given reason
//You can pass any value as the reason, but it is recommended to use Error
//objects for better error handling
const rejectedValue = Promise.reject(value);
logToConsole(rejectedValue);

const rejectedValueError = Promise.reject(new Error('an error'));
logToConsole(rejectedValueError);


//Promise.resolve(value): 
//Wraps a value in a resolved promise. If the value is already a promise, it 
//returns that promise

//Promise.reject(reason): 
//Creates a rejected promise with a given reason. Using an Error object as the reason 
//is recommended for better error handling

//Error Handling: 
//The logToConsole function demonstrates how promises are handled. Non-promise values
//will result in errors if passed to functions expecting promises