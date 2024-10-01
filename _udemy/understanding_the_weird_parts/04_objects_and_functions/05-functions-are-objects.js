"use strict";



//First-Class Functions in JavaScript
//In JavaScript, functions are treated as first-class citizens. This means
//functions are objects, and you can do anything with them that you can do
//with other objects, such as:
//  - Assign them to variables
//  - Pass them as arguments to other functions
//  - Return them from other functions
//  - Create them dynamically


//Functions are a special type of object.
//In addition to executing code, they can have properties and methods attached
//to them, just like any other object

//Properties of a function:
//  - Name property: A function can have a name, but it isn't required 
//    (anonymous functions have no name)
//  - Code property: The actual code inside the function is stored in a 
//    property, which is invokable


//The code inside the function is just one property of the function object. The
//function itself is a full object, with potential for other properties


function greet(){
    console.log(`Hi`);
}

//Adding a custom property to the function object:
greet.language = `english`;


//Outputs the function's code (since functions are objects):
console.log(`greet: ${greet}`); 

//Accessing the custom property added to the function:
console.log(`greet.language: ${greet.language}`);