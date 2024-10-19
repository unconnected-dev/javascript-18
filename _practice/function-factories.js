"use strict";

// General Function Factories Practice

// A closure is a feature in JavaScript where a function retains access to its
// lexical scope (the scope in which it was created) even after that function
// has executed. This allows the inner function to remember and access
// variables from its outer function's scope.

// A function factory is a function that creates and returns other functions.
// It often uses closures to retain access to variables from its outer
// function, enabling the returned functions to have their own context or
// behavior based on the parameters passed to the factory.

// Basic multiplier factory
if(false){
    function createMultiplier(multiplier){
        let m = multiplier;

        return function(n){
            return m * n;
        };
    }

    const double = createMultiplier(2);
    const triple = createMultiplier(3);

    console.log(`${double(10)}`);
    console.log(`${triple(10)}`);
}


if(false){
    function createGreeting(greeting){
        return function(name){
            return `${greeting``} ${name}`;
        };
    }

    const spanish = createGreeting(`Hola`);
    const english = createGreeting(`Hello`);

    console.log(`${spanish(`Bob`)}`);
    console.log(`${english(`Bob`)}`);
}


if(false){
    function createLogger(prefix){
        return function(message){
            console.log(`[${prefix}] ${message}`);
        };
    }

    const infoLogger = createLogger(`INFO`);
    const errorLogger = createLogger(`ERROR`);

    infoLogger(`This is some information`);
    errorLogger(`This is some error!`);
}