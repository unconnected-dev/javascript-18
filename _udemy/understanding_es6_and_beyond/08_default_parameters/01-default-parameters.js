"use strict";



//Default Parameters in JavaScript

//If a parameter does not receive a value (i.e., no argument is provided), 
//the JavaScript engine will set its value to `undefined` by default


//If a parameter has the value `undefined`, before the function body is 
//executed, that parameter will be set to the default value specified in
//the function definition
function greet(fname='Tony', lname='Alicea'){
    return `Hi ${fname} ${lname}`;
}

let greeting1 = greet();                        
console.log(`${greeting1}`);                    //Output: Hi Tony Alicea

let greeting2 = greet("Anthony");               
console.log(`${greeting2}`);                    //Output: Hi Anthony Alicea



//`null` is not the same as `undefined`. If `null` is passed, the parameter
//will take the value `null`, not the default

let greeting3 = greet(null, "P. Alicea");       
console.log(`${greeting3}`);                    //Output: Hi null P. Alicea



//If `undefined` is explicitly passed as an argument, the default value will
//be applied

let greeting4 = greet(undefined, "P. Alicea");  
console.log(`${greeting4}`);                    //Output: Hi Tony P. Alicea



//Default Parameters with Functions

//You can also set default values for function parameters, including other
//functions. In the following example, `phrase` is a function that uses `fname`
//and `lname` in its output
function greet2(fname='Tony', lname='Alicea', phrase=()=>{return `Hello ${fname} ${lname}`}){
    return phrase();
}


let greeting5 = greet2("Anthony");              
console.log(`${greeting5}`);                    //Output: Hello Anthony Alicea



//Parameter Order and Function Execution

//The order of parameters in the function definition can affect how default
//values are applied. In this example, the `phrase` function can access both 
//fname` and `lname` even though `lname` comes after `phrase`
function greet3(fname='Tony', phrase=()=>{return `Hello ${fname} ${lname}`}, lname='Alicea'){
    return phrase();
}

let greeting6 = greet3();
console.log(`${greeting6}`);                    // Output: Hello Tony Alicea



//You cannot access parameters before their initialization. In `greet4`, if
//you try to use `lname` in a string literal before it has been initialized,
//it will result in an error
if(false){
    function greet4(fname='Tony', phrase=`Hello ${fname} ${lname}`, lname='Alicea'){
        return phrase();
    }

    let greeting7 = greet4();
    console.log(`${greeting7}`);
}

//The key difference between `greet3` and `greet4` is that in `greet3`, `phrase`
//is a function, and the function only runs after all parameters have been initialized.
//In `greet4`, `phrase` is a string literal that tries to use `lname` immediately, 
//but `lname` has not been initialized yet, causing an error

//This highlights that when using parameters as part of default values, the order of
//parameters matters if they are used before being initialized