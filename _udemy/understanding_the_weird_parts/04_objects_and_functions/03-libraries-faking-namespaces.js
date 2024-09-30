"use strict";



//Namespace
//A namespace is a container for variables and functions, typically used to 
//avoid naming collisions by keeping variables and functions with the same 
//name separate


//`greet` will be overwritten
var greet = `Hello`;
var greet = `Hola!`;

console.log(`greet: ${greet}`);


//To avoid name collisions, we can create objects to act as namespaces. These
//objects can hold properties and methods, keeping variables isolated and 
//preventing them from overwriting each other
var english = {};
var spanish = {};

english.greet = `Hello`;
spanish.greet = `Hola`;

console.log(`english: ${english.greet}`);
console.log(`spanish: ${spanish.greet}`); 



//Error Scenario: If we try to access or assign properties to undefined, it
//will cause an error. The code below will throw an error because 
//'greetings' is undefined.

//Error: Cannot set property 'greet2' of undefined.
//english.greetings.greet2 = 'Hello'; 


//Before adding nested properties, ensure that the parent property exists
english.greetings = {};            
english.greetings.greet = 'Hello';  


//Using object literals to avoid errors and create nested structures directly:
var english_ojbect_literal = {
    greetings: {
        basic: `Hello`
    }
}