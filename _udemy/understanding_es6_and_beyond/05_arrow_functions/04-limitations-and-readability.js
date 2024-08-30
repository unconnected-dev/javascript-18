"use strict";



//Limitations and readability of arrow functions

//Readability Considerations:

//Arrow functions can make code more concise, but this brevity can sometimes reduce readability.
//When functions become more complex or heavily nested, arrow functions may obscure the logic.

//This is a very compact way to express three nested functions
//However, its conciseness makes it harder to read and understand at a glance
let longExpression = x => y => z => z ? y : x;

//This version is more verbose but clearer
//The function's structure and logic are easier to follow, making it more readable, especially
//for those unfamiliar with arrow functions
let longExpression2 = function(x){
    return function(y){
        return function(z){
            return z ? y : x;
        }
    }
}

let result1 = longExpression("Tony")("Bob")(true);
let result2 = longExpression2("Tony")("Bob")(true);
console.log(result1)



//Limitations of Arrow Functions:
let me = {
    firstName: "Tom",

    //Regular method using `function` keyword
    greet: function(){
        console.log(`regular: ${this.firstName}`);

        //`this` refers to the `me` object
        console.log(this);
    },
    greet2: () => {
        console.log(`arrow: ${this.firstName}`);
         
        //`this` does not refer to the `me` object, but to the global object (or undefined in strict mode)
         console.log(this);
    }
}

me.greet();
me.greet2();


//`this` Binding: 
// - In a regular function, `this` is determined by how the function is called 
// - In an arrow function, `this` is lexically bound, meaning it uses `this`
//   from the surrounding code at the time the arrow function is created 
// - As a result, arrow functions are not suitable as methods in objects when
//   you need `this` to refer to the object itself



//Arrow Functions in Classes:

//Using an arrow function in a class constructor:
class Person{
    constructor(fname){
        this.firstName = fname;
    
        //Arrow function defined within the constructor
        this.greet = () => {
            console.log(`person: ${this.firstName}`);
        }
    }
}

let me2 = new Person("Tony");
me2.greet();


//Memory Usage: 
// - Defining methods like `greet` inside the constructor using an arrow function
//   means each instance of `Person` gets its own copy of `greet` 
// - This can lead to increased memory usage compared to defining the method on
//   the prototype, where all instances share the same method

//Prototype Chain:
// - Methods defined using arrow functions in the constructor do not go on the
//  prototype but are instead directly on the instance 
// - This breaks the typical JavaScript pattern where methods are shared across
//   instances via the prototype



// - Arrow functions are concise but can reduce readability, especially in complex
//   or nested cases
// - Arrow functions do not bind their own `this`, making them unsuitable for object
//   methods where `this` should refer to the object
// - Arrow functions are more suitable for callbacks or functions where you want to
//   preserve the `this` context from the outer scope
// - Be cautious when using arrow functions in classes, as they increase memory usage
//   and break the traditional prototype chain
