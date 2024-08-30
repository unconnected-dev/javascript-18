"use strict";



//Returning values with arrow functions

//Basic Syntax for Returning Values:
//Arrow functions can return values similarly to regular functions
let add = (a, b) => {
    return a + b;
}


//Implicit Return with Arrow Functions:
//When there is only one expression after the arrow (=>), the result of that expression is
//returned automatically without needing an explicit return statement
//This is called "implicit return" and is just syntactic sugar to make the code more concise
let add2 = (a, b) => a + b;


// Example with a single parameter and implicit return:
let sqr = (x) => x * x;


//Single Parameter Without Parentheses:
//If the arrow function takes only one parameter, the parentheses around the parameter 
//can be omitted
let sqr2 = x => x * x;



//Arrow function vs regular function:
let greet = function(firstname, lastName){
    return `Hi ${firstname} ${lastName}`;
}

//The same function as an arrow function:
let greet2 = (firstname, lastName) => {
    return `Hi ${firstname} ${lastName}`;
}

//Arrow function with a single parameter:
let greet3 = (firstname) => {
    return `Hi ${firstname}`;
}

//Single parameter arrow function with implicit return:
let greet4 = firstname => `Hi ${firstname}`;



//Note: You cannot declare a variable directly within the body of an arrow function in this manner:
// let a = () => let b = 3; // This is not allowed