"use strict";


// Regular functions in JavaScript are defined using the `function` keyword.
// They can be either function declarations or expressions.
// Regular functions have their own `this` context, which is determined 
// by how they are called.

// Arrow functions were introduced in ES6.
// They are defined using the `=>` syntax.
// Arrow functions do not have their own `this` context.
// Instead, they capture `this` from the surrounding code (lexical scope).
// They are useful to preserve the `this` value from the outer context, 
// such as when defining methods in objects or working with callbacks.

// Context and value
// They are often used interchangeably in the context of the `this` keyword but
// have nuances:
// - Context refers to the object or scope to which `this` is dynamically bound.
// - Value refers to the specific value `this` holds in a given execution context
//   (every function).



// Regular vs Arrow Function Examples
if(false){
    // Below is dangerous because `var firstName` would make `this.firstName` 
    // in the arrow function point to the global `firstName` (Matilda).
    // var firstName = "Matilda";


    // This is an object literal, but everything here is in the global scope.
    const jonas = {
        firstName: "Jonas",
        year: 1991,
        calcAge: function(){
            console.log(this);                              // `this` = jonas object
        },

        greet: () => console.log(`Hey ${this.firstName}`),  
        // `this` = undefined because arrow functions don't have their own `this`.
        // They inherit `this` from the surrounding scope, which in this case is 
        // the global scope (window), not the jonas object.

        wave: function(){                                   
            console.log(`Wave ${this.firstName}`)           // `this` = jonas object
        }
    }  

    jonas.greet();                  // undefined because `this.firstName`
    console.log(this.firstName);    // undefined because when you try to access
                                    // a property on an object that doesn't
                                    // exist, you get undefined
    jonas.wave();
}


if(false){
    const jonas = {
        firstName: "Jonas",
        year: 1991,
        calcAge: function(){
            console.log(this);
            const self = this;                                          // Pre-ES6 workaround for `this` in inner fn
            
            // Functions below are all within calcAge()
            // They are not object functions

            // Regular function inside method
            const isMillenial = function(){
                // Logs false because `this` is undefined (strict mode).
                console.log(`isMillenial: ${this.year >= 1981 && this.year <= 1996}`);      
                console.log(`isMillenial: ${this.year}`);                                   // undefined
            }
            
            if(false)
                isMillenial();  // Will give an error because `this` within isMillenial is
                                // undefined as it is a regular function call within calcAge
                                // even though it happens inside of a method.
            

            // Workaround using `self`
            const isMillenialSelf = function(){
                // Logs true because `self` is correctly referencing `jonas.year`.
                console.log(`isMillenialSelf: ${self.year >= 1981 && self.year <= 1996}`);  
                console.log(`isMillenialSelf: ${self.year}`);                               // 1991
            }
            isMillenialSelf();


            // Using arrow function (no need for `self`)
            // They get the parent scope which is calcAge() for isMillenial3()
            const isMillenial3 = () =>{
                // Logs true, arrow function inherits `this` from calcAge().
                console.log(`isMillenial3: ${this.year >= 1981 && this.year <= 1996}`);
                console.log(`isMillenial3: ${this.year}`);                                  // 1991
            }
            isMillenial3();
        },
    }

    jonas.calcAge();
}


if(false){
    // Arguments keyword in regular functions
    const addExpression = function(a ,b) {
        console.log(arguments);
        return a + b;
    }
    addExpression(2, 5);            // Logs array with 2, 5
    addExpression(1,2,3);           // Logs array with 1, 2, 3


    // Arrow functions do not have `arguments` keyword.
    // The `arguments` object is only available in regular functions.
    // However, it's less important now due to modern rest parameters.
    var addArrow = (a, b) =>{ 
        console.log(arguments);     // Undefined, as arrow functions lack arguments
        return a + b;
    }
    addArrow(2, 5);                 // No `arguments` log, only performs addition
}