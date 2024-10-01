"use strict";



// Function Statements vs Function Expressions

//Function Statement
//A function statement is hoisted, meaning it is available in memory before
//the execution phase
function greet(name){
    console.log(`Hello ${name}`);
}
//The function is in memory and needs to be invoked
greet(`john`);


//Function Expression
//A function expression is not hoisted. The function is created during the
//execution phase. It creates a function object on the fly, which can be 
//invoked via the variable pointing to it. This is sometimes referred to as
//a "function literal"
var greetVar = function(name){
    console.log(`Hello ${name}`);
}
greetVar(`john`);



//Immediately Invoked Function Expressions (IIFE)
//All functions in JavaScript are objects that contain a code property 
//(the function body) which can be invoked. In some cases, we can invoke a
//function immediately after it’s created

//Example of IIFE: The function is immediately invoked after its definition
var greeting = function(name){
    console.log(`Hello ${name}`);
}(`bob`);


//In this case, `greeting2` will be a string, not a function, because the IIFE
//returns a string
var greeting2 = function(name){
    return `Hello ${name}`;
}(`tony`);
console.log(`greeting2: ${greeting2}`);

//The line below would cause an error because `greeting2` is now a string, not 
//a function
if(false){
    console.log(greeting2()); 
}



//Incorrect Syntax Example
//The following causes an error because the syntax parser expects a function 
//statement when it encounters the `function` keyword
// function(name) {
//     return `Hello ${name}`;
// }


//To create a function expression that executes immediately, wrap it in 
//parentheses. Anything inside `()` is treated as an expression, so the 
//function is treated as a function expression, not a function statement.
//This is also an IIFE (Immediately Invoked Function Expression)
(function(name){
        // return `Hello ${name}`;
        console.log(`Hello ${name}`);
}(`robert`));
//You can invoke inside or outside the parentheses



//IIFE Example for Code Isolation
//One of the main uses of IIFEs is to create a separate scope, ensuring that
//variables defined inside the IIFE don’t leak into the global scope
(function(name){
    var greeting = `Hello`
    console.log(`${greeting} ${name}`);
}(`robert`));


//How IIFEs Work
//When the code is run, the global execution context is created. When the 
//syntax parser encounters the IIFE, it creates the function expression, 
//immediately invokes it, and creates a new execution context for it.
//Inside the IIFE, variables (like `greeting`) are isolated in their own
//execution context, preventing any interference with the global scope or other
//code. This makes IIFEs useful for creating isolated code blocks that don’t 
//accidentally modify or collide with variables in other parts of the code


//IIFE with Global Variable Access
//While IIFEs isolate variables from the global scope, you can intentionally 
//pass global variables to them as arguments
(function(global, name){
    var greeting = `Hello`;

    //Modifying a global variable
    global.greeting = `Bonjour`;
    console.log(`${greeting} ${name}`);
}(window, `robert`));
console.log(`greeting: ${greeting}`);