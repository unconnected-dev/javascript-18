"use strict";



// When a function is invoked, a new execution context is created. Each 
// execution context has a variable environment, a reference to the outer 
// environment, the `this` keyword, and an `arguments` object

// `this` points to different objects depending on how the function is 
// invoked (e.g., global object, object that owns the method, etc.)

// JavaScript provides an `arguments` object within every function. This 
// contains a list of all parameters passed to the function, even if not 
// explicitly defined in the function signature

// The `arguments` object:
//  - It allows access to all arguments passed to a function
//  - It is "array-like" but not a true array. It lacks most array methods 
//    (like `push` or `map`)
//  - It may become deprecated in favor of the modern `...spread` operator, 
//    which provides similar functionality more cleanly

// Even though no arguments are passed when greet() is invoked, the parameters
// are hoisted and set to `undefined`
function greet(firstname, lastname, language){

    // `arguments` acts like an array but isn't a true array
    console.log(`arguments: ${arguments}`);

    // Checking if no arguments were passed
    if(arguments.length <= 0){
        console.log(`missing parameters`);
    }
    
    console.log(`------------------------------`);
    
    
    // Defaulting parameters if they're not passed
    // Using the `||` operator, we can assign default values
    firstname = firstname || `nofirstname`
    lastname = lastname || `nolastname`
    language = language || `spanish`
    
    console.log(`firstname: ${firstname}`);
    console.log(`lastname: ${lastname}`);
    console.log(`language: ${language}`);
    
    console.log(`******************************`)
}

// Testing the greet function with different numbers of arguments
if(false){
    greet();
    greet(`bob`);
    greet(`john`, `doe`);
    greet(`john`, `doe`, `english`);
}



// Function Overloading
// In some programming languages, function overloading allows you to define 
// multiple functions with the same name but with different numbers or types 
// of parameters. In JavaScript, functions are objects, so true overloading 
// is not possible. Each function definition with the same name will overwrite 
// the previous one
function greet3(fname, lname, lang){
    
    // Default language if not provided
    lang = lang || `en`;

    // Function behaves differently based on the language
    if (lang === `en`){
        console.log(`Hello ${fname} ${lname}`);
    }
    if (lang === `es`){
        console.log(`Hola ${fname} ${lname}`);
    }
}

// Usage examples of greet3 function
if(false){
    greet3(`john`, `doe`, `en`);
    greet3(`john`, `doe`, `es`);
}


// To simulate function overloading, a common pattern is to define different 
// functions with specific names for different behaviors. This provides clarity
// and avoids overwriting

function greetEnglish(fname, lname){
    // Always greets in English
    greet3(fname, lname, `en`);
}

function greetSpanish(fname, lname){
    // Always greets in Spanish
    greet3(fname, lname, `es`);
}


// Calling the specialized greeting functions
if(false){
    greetEnglish(`john`, `doe`);
    greetSpanish(`john`, `doe`);
}