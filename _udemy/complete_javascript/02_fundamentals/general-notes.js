"use strict";

// Functions
if (false) {
    // Functions in JavaScript are first-class values, meaning they can be 
    // assigned to variables, passed as arguments, and returned from other 
    // functions. Function declarations can be invoked before their definition 
    // due to hoisting, where the function is moved to the top during 
    // compilation.

    // Function Declaration
    console.log(calcAgeOne(1981));          // Calling the function before it is defined
    function calcAgeOne(birthYear) {
        return 2037 - birthYear;            
    }
    console.log(calcAgeOne);                // Logs the function definition


    // Anonymous Function
    // An anonymous function is a function without a name, often assigned to a 
    // variable. Function expressions must be defined before they are called, 
    // otherwise it results in an error.
    // console.log(calcAgeTwo(1985));       // This will cause an error because 
    // calcAgeTwo is not defined yet.
    const calcAgeTwo = function (birthYear) {
        return 2037 - birthYear;            
    };
    console.log(calcAgeTwo(1983));          // Calling the function after definition


    // Note:
    // calcAgeTwo stores a function, and calcAgeTwo() is the function call.
    console.log(`nocall: ${calcAgeTwo}`);   // Logs the function code
    console.log(`call: ${calcAgeTwo()}`);   // Logs the result of the function call


    // Arrow Functions
    // Arrow functions are syntactically concise and do not have their own 
    // `this` context. They allow for implicit return when there is a single 
    // expression.
    const calcAgeThree = birthYear => 2037 - birthYear; 
    console.log(calcAgeThree(1982));        // Calls the arrow function
}


// Passing Parameters
if (false) {
    // Single Parameter
    const yearsUntilRetirement1 = birthYear => {
        const age = 2037 - birthYear;           
        const retirement = 65 - age;            
        return retirement;                      
    };
    console.log(yearsUntilRetirement1(1982));   


    // Multiple Parameters
    const yearsUntilRetirement2 = (birthYear, firstName) => {
        const age = 2037 - birthYear; 
        const retirement = 65 - age;   
        return `${firstName} is ${age} years old and retires in ${retirement} 
                years`; 
    };
    console.log(yearsUntilRetirement2(1982, "Dan"));
}


// Dot vs Bracket Notation
if (false) {
    // Dot notation cannot use variables to access properties, while bracket 
    // notation can. Both notations have high precedence.
    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
    const danObject = {
        firstName: "Dan",
        lastName: "Smith",
        age: 37,
        friends: ["Frank", "Bob", "Bill"],
        aFunction: function (currentYear) {
            return currentYear - this.age; 
        },
        getSummary: function () {
            return `${this.firstName} is ${this.age} years old`;
        }
    };

    console.log(danObject.aFunction(2023));         // Call method using dot notation
    console.log(danObject[`aFunction`](2023));      // Call method using bracket notation
    console.log(danObject.getSummary());            // Call method

    let nameKey = "Name";                           // Variable to demonstrate bracket notation

    console.log(danObject);                         // Log the entire object
    console.log(danObject.firstName);               // Access property using dot notation
    console.log(danObject[`first${nameKey}`]);      // Access property using bracket notation with a variable

    console.log(`${danObject.firstName} has ${danObject.friends.length} friends, and his best friend is ${danObject.friends[0]}`);

    // Adding new properties to an object
    danObject.newProperty = 1;                      // Using dot notation
    danObject["anotherProperty"] = 2;               // Using bracket notation
    console.log(danObject);                         // Log the modified object
}


// Continue Statement
if (false) {
    let danArray = [
        "Dan",
        "Smith",
        37
    ];

    // The continue statement skips the current iteration and proceeds to the 
    // next iteration of the loop.
    for (let i = 0; i < danArray.length; i++) {
        if (typeof danArray[i] === "string") continue; // Skip strings

        console.log("printing: " + danArray[i]);        
    }
}