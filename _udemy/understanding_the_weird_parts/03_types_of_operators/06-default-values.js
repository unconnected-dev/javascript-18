"use strict";



//Function Parameter Handling in JavaScript

function greet(name){
    console.log(`Hello ${name}`);
}

if(false){
    greet(`Tony`);
    //Output: `Hello Tony
}


//In JavaScript, functions are flexible with arguments. If no argument is passed
//the function does not throw an error like in many other languages. Instead,
//the parameter `name` is implicitly set to `undefined`
if(false){
    greet();
    //Output: `Hello undefined`
}



//Using Default Values with Logical OR (||)

//The `||` operator in JavaScript returns the first "truthy" value it encounters
//If the first operand is falsy (e.g., `undefined`, `null`, `0`, `""`), it 
//returns the second operand. This makes it useful for setting default values 
//in functions

function greet2(name){
    name = name || `<Your name here>`;
    console.log(`Hello ${name}`);
}

if(false){
    greet2();
    //Output: Hello <Your name here>
}

if(false){
    greet2('Tony');
    //Output: Hello Tony
}



if(false){
    console.log(`"hi" || "hello": ${"hi" || "hello"}`);
    //Output: hi
}

if(false){
    console.log(`0 || 1: ${0 || 1}`);
    //Output: 1
}

if(false){
    console.log(`"" || "hello": ${"" || "hello"}`);
    //Output: hello
}