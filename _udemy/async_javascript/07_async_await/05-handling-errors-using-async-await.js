"use strict";


//Example 1: Handling errors with try-catch inside an async function
if(false){
    async function f(){
        try{
            //The 'await' keyword is used to wait for the Promise returned by fetch to resolve
            const response = await fetch("https://some-host.com/wrong-url");
        }
        catch(e){
            //If the Promise is rejected (e.g., due to a network error or invalid URL), 
            //the error is caught here, and the catch block is executed
            console.log(`some error: ${e}`);
        }
    }

    f();
}


//Example 2: Handling errors using .catch() on the returned Promise
if(true){
    async function f(){
        //This async function attempts to fetch from an invalid URL
        const response = await fetch("https://some-host.com/wrong-url");
    }

    //Calls the async function and attaches a .catch() handler to handle any errors
    //Since async functions always return a Promise, you can use .catch() to handle errors
    f().catch(e => console.log(`another error: ${e}`));
}



//Async Functions:
// - An async function always returns a Promise. The await keyword can only be used inside 
//   an async function
// - The await keyword pauses the execution of the async function and waits for the Promise
//   to resolve or reject

//Error Handling with try-catch:
// - Inside an async function, you can use try-catch blocks to handle errors that occur when 
//   awaiting a Promise
// - If the awaited Promise rejects, the code inside the catch block will be executed, allowing
//   you to handle the error gracefully

//Error Handling with .catch():
// - Since an async function returns a Promise, you can handle errors by chaining a .catch() 
//   method to the function call
// - This approach is useful when you want to keep the error handling logic outside the async 
//   function or when dealing with multiple async functions