"use strict";


//You cannot use 'await' inside a regular JavaScript function
//The 'await' keyword is only valid in async functions and the top-level bodies of modules
if(false){
    
    //The following would throw an error because 'await' is not allowed in a regular function:
    // function test (){
    

    //To use 'await', the function must be marked as 'async'
    async function test (){
        const val = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(42), 2000);
        });
        
        console.log(`${val}`);
    }
    
    test();
}


//'await' keyword doesn't work in top-level code in older versions of Node.js
//'await' is only valid in async functions and the top-level bodies of ES modules
if(true){
    function getSpecificNumber() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(42), 2000);
        });
    }
    
    //The following code would throw a SyntaxError in environments where top-level 
    //'await' is not supported:
    // const specificNumber = await getSpecificNumber();
    // console.log(`${specificNumber}`);


    // A workaround in such environments is to wrap the code in an immediately 
    //invoked async function
    // (async function(){
    //     const specificNumber = await getSpecificNumber();
    //     console.log(`${specificNumber}`);
    // })();

    //However, this is not ideal as it requires an additional function wrapper


    //Instead, you can enable top-level 'await' by making your file an ES module (.mjs)
    //In Node.js, you can do this by changing the file extension to '.mjs' or by 
    //adding "type": "module" in the package.json
    //This requires Node.js version 14.8.0 or later to support top-level 'await' directly

    //Example with top-level await in a module:
    // const specificNumber = await getSpecificNumber();
    // console.log(`${specificNumber}`);
}



//await in Regular Functions:
// - The await keyword is only valid inside async functions. If you try to use await inside
//   a regular (non-async) function, it will throw an error

// Top-Level await:
// - Top-level await allows you to use the await keyword outside of async functions, directly
//   in the body of a module
// - This feature is particularly useful in scripts where you want to await Promises without 
//   needing to wrap the code in an async function

//Node.js and Top-Level await:
// - In older versions of Node.js, top-level await is not supported. To use await, you must 
//   either use an async function or run your code in an environment that supports top-level await
// - Starting with Node.js 14.8.0, you can use top-level await in ES modules. You can make a file
//   an ES module by changing its extension to .mjs or by setting "type": "module" in the package.json

//Workarounds:
// - If top-level await is not supported, you can create an immediately invoked async function (IIFE) 
//   to use await within it
// - However, using top-level await directly in ES modules is generally more readable and eliminates 
//   the need for extra function wrappers