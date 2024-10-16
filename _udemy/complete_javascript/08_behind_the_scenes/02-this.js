'use strict';


// The `this` keyword refers to the execution context of a function and 
// depends on how a function is called, not where it is defined.

// `this` Keyword
// - Special variable created for every execution context (function).
// - It points to the "owner" of the function where `this` is used.
// - `this` is NOT static; it depends on how the function is called. 
//   Its value is only assigned when the function is executed.

// How `this` behaves in different contexts:
// - Method:                `this` = <Object that called the method>
// - Simple function call:  `this` = `undefined` (in strict mode) || `window` (in non-strict mode)
// - Arrow function:        `this` = <this of surrounding context (lexical scope)>
// - Event listener:        `this` = <DOM element the handler is attached to>


// Examples of `this`
if(false){
    console.log(this);                      //Window object
}

if(false){
    const calcAge = function(year){
        console.log(2037 - year);
        console.log(this);                  // undefined (strict mode), otherwise it would be window
    }
    calcAge(1985);
}

if(false){
    const calcAgeArrow = (year) =>{
        console.log(2037 - year);
        console.log(this);                  // Window due to parent function/scope which is 
    }                                       // window in global scope
    calcAgeArrow(1985);
}

if(false){
    const jonas = {
        year: 1991,
        calcAge: function(){
            console.log(2037 - this.year);
            console.log(this);              // The object calling the method
        }
    }
    jonas.calcAge();                        // `this` = jonas


    const matilda = {
        year: 2017
    }
    matilda.calcAge = jonas.calcAge;        // Method borrowing
    matilda.calcAge();                      // `this` = matilda


    // Method borrowing, is passed by reference and not copied.
    // If it was a copy, the result should be false because two identical 
    // objects (including functions) are not equal unless they are the exact
    // same object if it is a reference, then they should be equal.
    console.log(jonas.calcAge === matilda.calcAge);

    // Loses biding to jonas
    const f = jonas.calcAge;
    // f();                                 // `this` = undefined (strict mode)
                                            // otherwise it would be `window`            
    console.log(`f: ${f}`);
}

// Even inside nested functions or block scopes, `this` remains `undefined`
// (strict mode), or `window` otherwise.
if(true){
    checkDepth();
    function checkDepth(){
        if(true){
            let callMe = function(){
                console.log(this); 
            }
            callMe();                       // `this` = undefined
        }
    }
}