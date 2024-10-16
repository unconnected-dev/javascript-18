'use strict';


// Scoping
// Scope refers to the area of code where a variable is accessible.
// JavaScript has: Global scope, function scope, block scope.
// `let` and `const` are block-scoped (limited to {}). 
// `var` is function-scoped and ignores block scope (limited to the closest
// function).


// Lexical Scoping
// Scope is determined by the structure of the code (how blocks and functions
// are nested). Variables declared in an outer scope are accessible in inner
// scopes, but not vice-versa. Lexical scoping is static; it depends on code
// placement, not function calls.


// Scope vs Variable Environment
// Scope: the space where a variable is declared (e.g., global, function, or
// block).
// Variable Environment: the set of variables accessible in a function's
// execution context.
// For functions, the variable environment and scope often coincide.


// Scope Chain
// The scope chain is the link between the current scope and all parent scopes.
// It's created by the lexical nesting of blocks and functions. When a variable
// isn't found in the current scope, JavaScript looks up the scope chain. This
// is known as "variable lookup" and stops when the variable is found or no
// more scopes exist.



if(false){
    // Global scope
    const globalVariable = 'I am in the global scope';
    
    // console.log(innerVariable);                                      // Not accessible, not defined in global scop

    function outerFunction() {
        // Outer function scope
        const outerVariable = 'I am in the outer function scope';
        
        function innerFunction() {
            // Inner function scope
            const innerVariable = 'I am in the inner function scope';
            
            console.log(globalVariable);                                // Accessible (global)
            console.log(outerVariable);                                 // Accessible (outer function)
            console.log(innerVariable);                                 // Accessible (inner function)
        }
        
        innerFunction();                                                // Call innerFunction
        
        // console.log(innerVariable);                                  // Not accessible, limited to inner scope
    }

    outerFunction();                                                    // Call outerFunction
}


if(false){
    const myName = 'Jonas';
    
    function first(){
        const age = 30;
    
        //contains block scope
        if(age >= 30){
            const decade = 3;                                           // Block-scoped (inside `if`)
            var millenial = true;                                       // Function-scoped, `var` ignores block scope
        }
        
        function second(){
            const job = 'teacher';
            console.log(`${myName} is a ${age}-old ${job}`);            // Accessible
            console.log(`${millenial}`);                                // Accessible, function-scoped by `var`
            // console.log(`${decade}`);                                // Not accessible, block-scoped by `const`
        }
        second();
    }
    first();
}
                

if(false){
    function calcAge(birthYear){
        const age = 2037 - birthYear;
        console.log(`firstName: ${firstName}`);                             // Variable lookup via scope chain

        function printAge(){
            let output = `You are ${age}, born in ${birthYear}`;
            console.log(`output: ${output}`);

            if(birthYear >= 1981 && birthYear <= 1996){
                const firstName = 'Steven';                                 // Shadowing the outer `firstName`
                                                                            // JavaScript did not use the scope chain for 
                                                                            // variable lookup to find firstName as Jonas

                var millenial = true;                                       // var breaks blocks scope so it is function scoped
                const str = `Oh, and you're a millenial, ${firstName}`;     // Block-scoped
                console.log(`str: ${str}`);

                function add(a, b){
                    return a + b;
                }

                output = 'NEW OUTPUT';                                      // Updates the outer `output` variable
            }

            console.log(`millenial: ${millenial}`);                         // Accessible (function-scoped by `var`)
            // console.log(str);                                            // Not accessible (block-scoped by `const`)
            // console.log(add(2, 3));                                      // Block-scoped in strict mode (error)
                                                                            // but it will run if strict mode is off
            console.log(`output: ${output}`);
        }
        printAge();
        return age;
    }

    const firstName = 'Jonas';
    calcAge(1991);
}