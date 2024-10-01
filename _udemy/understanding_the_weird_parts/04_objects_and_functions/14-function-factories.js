"use strict";



//Function Factories
//A function factory is a function that creates and returns other functions.
//The returned function often relies on the variables from the outer 
//function’s scope, creating a closure


//The `makeGreeting` function returns a new function that uses the `language`
//parameter trapped in the closure
function makeGreeting(language){

    return function(firstname, lastname){
        //The inner function behaves differently based on the `language` value
        if(language === `en`){
            console.log(`Hello ${firstname} ${lastname}`);
        }

        if(language === `es`){
            console.log(`Hola ${firstname} ${lastname}`);
        }
    }
}


//Creating new greeting functions by calling `makeGreeting` with different 
//language parameters. These two functions are created in separate execution 
//contexts and have their own unique closures, meaning they "remember" the 
//value of `language` from when they were created
var greetEnglish = makeGreeting(`en`);
var greetSpanish = makeGreeting(`es`);


//Both `greetEnglish` and `greetSpanish` have their own lexical environments:
//  - `greetEnglish` remembers `language = 'en'`
//  - `greetSpanish` remembers `language = 'es'`
greetEnglish(`john`, `doe`);
greetSpanish(`john`, `doe`);



//Why Function Factories and Closures are Useful:
//  - Code Reusability: Instead of writing separate greeting functions for 
//    different languages, we can generate them dynamically using a function
//    factory
//  - Closures: The returned functions "close over" their lexical environment,
//    allowing them to remember the value of `language` even after 
//    `makeGreeting` has finished executing
//  - Dynamic Function Creation**: We can create customized functions on the 
//    fly based on different input parameters