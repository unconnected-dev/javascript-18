"use strict";



// Syntax Parsers
// A syntax parser reads your code, checks its validity, and interprets what 
// you're trying to achieve. As it processes your code character by character, 
// it expects certain patterns and can sometimes make assumptions or changes. 
// This process helps ensure that code runs as intended, but it may also 
// introduce unexpected behavior

// Automatic Semicolon Insertion (ASI)
// In JavaScript, semicolons are optional. The syntax parser tries to be 
// helpful by automatically inserting semicolons where it thinks they belong, 
// especially after line breaks. This can cause issues, as it may insert 
// semicolons where you don’t want them, leading to bugs

function getPerson(){

    // The parser adds a semicolon after `return` due to the line break, causing
    // the function to return `undefined`
    // return 
    // {
    //     name: `tony`
    // };


    // To avoid this, place the opening brace on the same line as `return`
    return {
        name: `tony`
    }
}
console.log(`getPerson(): ${getPerson()}`);


// Whitespace
// Whitespace includes invisible characters like spaces, tabs, and carriage 
// returns (newlines). It helps structure and format your code, making it more 
// readable


// The syntax parser ignores excess whitespace, so you can use it liberally 
// for readability
var 
    // First name of the person
    firstName, 

    // Last name of the person
    lastName;


// You can structure your code with comments and whitespace to improve clarity 
// without affecting functionality
var person = {

    // The person's first name
    firstname: `john`,

    // The person's last name
    lastname: `doe`
}
console.log(`person: ${person}`);