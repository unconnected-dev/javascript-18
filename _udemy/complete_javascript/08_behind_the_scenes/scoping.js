'use strict';


//Scoping
//Scope of a variable
//Refers to the region of code where a certain variable can be accessed
//In JavaScript you have: Global scope, function scope, block scope
//let and const are block-scoped (enclosed by {})
//var end up in the closest function scope


//Lexical scoping
//Scope is controlled by placement of functions and blocks in the code
//Variables declared in an outer scope are accessible witihin inner scopes but not vice-versa
//This is defined by the structure of the code, where functions and blocks are nested within each other


//Scope vs variable environment
//Scope refers to the space in which a certain variable is declared 
//In the case of functions, the scope and variable environment are typically the same
//The variable environment in case of functions refers to the collection of variables
//that are accessible within the function


//Scope chain
//The scope chain is the variable environment of an execution context plus parent scopes
//It is formed by the hierarchy of nested functions and blocks in the code
//The order of function calls is not relevant to the scope chain
//Instead it's determined by the lexical structure of the code
//When a variable is not in the current scope, the engine looks up in the scope chain until it finds
//the variable it's looking for. This is called variable lookup


if(false){
    //Global scope
    const globalVariable = 'I am in the global scope';
    
    // console.log(innerVariable);                                      //This is not accessible
                                                                        //innerVariable has not been defined

    function outerFunction() {
        //Outer function scope
        const outerVariable = 'I am in the outer function scope';
        
        function innerFunction() {
            //Inner function scope
            const innerVariable = 'I am in the inner function scope';
            
            console.log(globalVariable);                                //Accessible
            console.log(outerVariable);                                 //Accessible
            console.log(innerVariable);                                 //Accessible
        }
        
        innerFunction();                                                //Call innerFunction
        
        // console.log(innerVariable);                                  //This is not accessible
                                                                        //innerVariable would be marked for garbage collection
    }

    outerFunction();                                                    //Call outerFunction
}


if(false){
    const myName = 'Jonas';
    
    function first(){
        const age = 30;
    
        //contains block scope
        if(age >= 30){
            const decade = 3;                                           //belongs to the if block scope
            var millenial = true;                                       //belongs to the function first() scope
                                                                        //because it is a var and breaks the if block scope
        }
        
        function second(){
            const job = 'teacher';
            console.log(`${myName} is a ${age}-old ${job}`);
            console.log(`${millenial}`);                               //can get millenial due to var breaking block scope
            // console.log(`${decade}`);                               //cannot get decade due to block scope of const
        }
        second();
    }
    first();
}
                

if(false){
    function calcAge(birthYear){
        const age = 2037 - birthYear;
        console.log(`firstName: ${firstName}`);

        function printAge(){
            let output = `You are ${age}, born in ${birthYear}`;
            console.log(`output: ${output}`);

            if(birthYear >= 1981 && birthYear <= 1996){
                const firstName = 'Steven';                                 //JavaScript did not use the scope chain for 
                                                                            //variable lookup to find firstName as Jonas

                var millenial = true;                                       //var breaks blocks scope so it is function scoped
                const str = `Oh, and you're a millenial, ${firstName}`;     //block scoped to the if
                console.log(`str: ${str}`);

                function add(a, b){
                    return a + b;
                }

                output = 'NEW OUTPUT';                                      //Goes up the scope chain
            }

            console.log(`millenial: ${millenial}`);                         //function scoped because it is var
            // console.log(str);                                            //block scoped because it is const
            // console.log(add(2, 3));                                      //this proves functions are block scoped while in strict mode
                                                                            //but it will run if strict mode is off
            console.log(`output: ${output}`);
        }
        printAge();
        return age;
    }

    const firstName = 'Jonas';
    calcAge(1991);
}