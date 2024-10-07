"use strict";



// Lexical Environment vs. Variable Environment

// A Lexical Environment is a structure that holds identifier-variable mappings 
// (where the identifier is the variable name). It consists of two components: 
// - the environment record (which stores the actual variable bindings)
// - a reference to the outer environment (which allows for lexical scoping)

// The Variable Environment is similar to the Lexical Environment but is 
// specifically used for function scopes. For block-scoped variables (`let` and 
// `const`), these are stored in the Lexical Environment, while `var` variables 
// are stored in the Variable Environment.


// Example: Block Scoping with `let` and Lexical Environment
let firstName = "Tony";

// This is not allowed because `firstName` is already declared in this scope
// let firstName = "Andrew"; 

// This is a block and is valid JavaScript
{
    // This is allowed because it's a different Lexical Environment (a new 
    // block scope)
    let firstName = "Andrew";

    // This will show `Andrew` as the `firstName` here refers to the variable 
    // in the current block's Lexical Environment
    console.log(`${firstName}`);
}

// This will show `Tony` as the `firstName` here refers to the variable in 
// the outer Lexical Environment
console.log(`${firstName}`);



// Example: Temporal Dead Zone (TDZ) and Block Scoping Quirks

// A block is defined by curly braces
{
    // The `secondName` variable is in the Temporal Dead Zone (TDZ) from the 
    // start of the block until its initialization. Accessing it before 
    // initialization will throw a ReferenceError.

    // Uncommenting the following line would result in an error:
    // ReferenceError: Cannot access 'secondName' before initialization
    // console.log(`${secondName}`); 

    // `secondName` is now declared and initialized
    let secondName = "Dave";

    // This will output `Dave` because `secondName` has now been initialized
    console.log(`${secondName}`);
}



// Example: Block Scoping in `switch` Statements

// Declaring two `let` variables with the same name in the same block scope 
// is not allowed. You can wrap each case in its own block (curly braces) 
// to create a new Lexical Environment, allowing the same variable name in 
// different cases.

// Note: In each `case` block, `lastName` is declared in a separate Lexical 
// Environment, which means it won't conflict with other `lastName` 
// declarations in different blocks
switch (firstName) {
    case "Tony": {
        let lastName = "Alicea";
        console.log(`Last Name in Tony case: ${lastName}`);
        break;
    }
        
    case "Anthony": {
        let lastName = "P. Alicea";
        console.log(`Last Name in Anthony case: ${lastName}`);
        break;
    }
}



// Example: Block Scoping in Loops and Lexical Declarations

let person = { firstnames: ["Tony", "Anthony"] };
let person2 = person;

// If you try to access `person` before its initialization in the loop, it 
// would throw an error. This is because the `let` declaration within the 
// loop creates a new block-scoped variable named `person`, which shadows 
// the outer `person` variable within the loop's scope.

// person.firstnames is trying to access `person` in the loop
// for (let person of person.firstnames) {

// The correct approach is to use `person2` in the loop, as shown below:
for (let person of person2.firstnames) {
    console.log(`${person}`);
}

// - In the loop above, `let person` creates a new block-scoped variable 
//   `person` for each iteration. This new `person` shadows the outer 
//   `person` variable, so `person` inside the loop refers to each name 
//   in `firstnames`.
// - If you remove `let` from the loop declaration, it will refer to the 
//   outer `person` variable, which may cause confusion or errors.


// Example: What happens if you remove `let` in the loop declaration?

// If you remove `let` in the `for...of` loop, like this:
// for (person of person2.firstnames) { ... }

// The following would happen:
// - The `person` variable inside the loop would refer to the outer 
//   `person` variable, effectively overwriting it during each iteration.
// - The loop would replace the `person` object with each name from 
//   `firstnames`.
// - As a result, after the loop, `person` would no longer be an object 
//   but the last name in the array.

// Without `let` in the loop, this would print "Anthony" instead of 
// the original object
console.log(`${person}`);



// Lexical Environment: 
// - A structure that contains variable bindings and references to outer 
//   environments, enabling lexical scoping.

// Variable Environment: 
// - Specifically related to function scope, holding var bindings.

// Block Scoping: 
// - Variables declared with let and const are block-scoped, meaning they 
//   are only accessible within the block they are defined in.

// Temporal Dead Zone (TDZ): 
// - The time between entering the block and the actual initialization of 
//   let and const variables. Accessing these variables during the TDZ 
//   results in a ReferenceError.

// Switch Case Scoping: 
// - Each case in a switch statement can have its own block scope to avoid 
//   variable name conflicts.

// Block Scoping in Loops:
// - The let declaration inside the for...of loop creates a new block-scoped 
//   variable for each iteration. This variable shadows any outer variable 
//   with the same name.
// - If let is removed, the loop would modify the outer variable directly, 
//   which can lead to unexpected behavior.

// Variable Shadowing:
// - When a variable is declared inside a block or loop with the same name 
//   as an outer variable, the inner declaration shadows the outer one 
//   within that scope.