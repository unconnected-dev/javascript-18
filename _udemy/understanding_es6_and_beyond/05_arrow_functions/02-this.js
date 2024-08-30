"use strict";


//The `this` Keyword in JavaScript

//Understanding `this`:
// - `this` is a special keyword in JavaScript that refers to the object from
//   which the function was called
// - The value of `this` is determined by how a function is invoked, not by how
//   or where it was defined


//Note: The key thing is this is an object, like below being obj
//If a regular function is called like test(), there is no parent. before it
//Which would be the value of `this`
let obj = {
    method: function() {
        console.log(this);                      //`this` is `obj`
        
        function test(){
            console.log(`testcall: ${this}`);   //`this` is `obj`
        }

        test();
    }
};
obj.method();                                   //Logs: obj



let me = {
    firstname: "Tony",

    //Method using `this`
    greet: function(){

        //Inside a method, `this` refers to the object the method was called on
        console.log(this); //Outputs: the `me` object

        //New Execution Context:
        //Every time a function is invoked, a new execution context is created,
        //which includes a new `this` keyword

        //Regular function inside a method
        //Since `logMe` is not attached to an object (not a method of an object),
        //`this` inside it defaults to the global object in non-strict mode or
        //`undefined` in strict mode.
        let logMe = function() {
            console.log(this); // In strict mode, `this` is `undefined`.
        }
        logMe();


        
        //Common Pattern to Preserve `this`:
        //To work around the issue of `this` being `undefined` inside inner functions,
        //developers often use a pattern where they save the value of `this` into another
        //variable, often named `self` or `that`
        let self = this;
        let logMe2 = function() {
            //Outputs: the `me` object, because `self` holds the reference to `this` from
            //the outer function
            console.log(self);
        }
        logMe2();
    },

    
    //Method using an arrow function
    greet2: function() {

        //Outputs: the `me` object
        console.log(this);

        //Arrow Functions and `this`:
        //Arrow functions do not have their own `this`. Instead, they inherit `this` from
        //their lexical scope, which is the `this` value of the enclosing function
        let logMe = () => {
            
            //Outputs: the `me` object, same as the `this` in `greet2`
            console.log(this); 
        }
        logMe();
    }
}

me.greet();
me.greet2();



//Key Concepts:
// - Method Invocation: 
//   When a function is called as a method of an object, `this` refers to the object itself
//   Example: `me.greet();` logs `me` because `greet` is called on the `me` object.

// - Function Invocation: 
//   When a function is invoked without an object, `this` in that function defaults to the global
//   object in non-strict mode or `undefined` in strict mode
//   Example: `logMe();` inside `greet` logs `undefined` in strict mode because it's not a method
//   of any object
// - Lexical `this` in Arrow Functions: Arrow functions do not bind their own `this`. Instead, they
//   capture `this` from the lexical context where the arrow function is defined
//   Example: `logMe` in `greet2` logs `me` because it inherits `this` from `greet2`'s context.


//Practical Tips:
// - Avoiding `this` Issues with Arrow Functions: Use arrow functions for callbacks or nested functions
///  where you want to retain the `this` value from the surrounding context
// - Common Workarounds: If you need to access the outer `this` in a regular function, you can store
//   `this` in a variable (`self`) and reference that variable within the function



//The this keyword:
// - Refers to the object that is executing the current function
// - Its value is determined by how a function is called, not where it is defined

//In Method Calls:
// - When a method is called on an object, this refers to that object

//In Regular Functions:
// - In non-strict mode, this refers to the global object
// - In strict mode ("use strict";), this is undefined in regular functions

//Arrow Functions:
// - Do not have their own this
// - Inherit this from the surrounding lexical context, making them particularly useful for nested
//   functions or callbacks where you want to keep the outer this

//Common Pitfall:
// - When using inner functions within methods, this may not behave as expected, leading to undefined
//   in strict mode or pointing to the global object in non-strict mode
// - Solutions include using arrow functions or saving the value of this in a variable (self)