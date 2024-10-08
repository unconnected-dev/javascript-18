"use strict";



// Interpolation with Template Strings

// Interpolation is the process of embedding or inserting variables or 
// expressions into a string. 
// Template strings (or template literals) in JavaScript make interpolation 
// straightforward, allowing you to inject values directly into a string 
// without the need for concatenation.

// This is different from concatenation, which involves joining strings 
// together using the `+` operator.



// Example of Concatenation:
const firstName = "Tony";
const lastName = "Alicea";
// Using `+` to concatenate strings
const fullName = `Hello, ` + firstName + `\n` + lastName; 
console.log(fullName);


// Example of Interpolation:
// Injecting variables and expressions directly
if(false){
    const fullName2 = `Hello, ${firstName} ${lastName}: ${3 + 7}`; 
    console.log(fullName2);
}

// `${}` is used to embed variables or expressions within a template string.
// In the example above, `firstName`, `lastName`, and the expression `3 + 7` 
// are interpolated within the string.



// Tagged Templates and Advanced Interpolation:
// Tagged template literals are a special kind of function call where the 
// template literal (the string enclosed by backticks ``) is passed directly to
// the function without requiring commas to separate arguments.

// The first argument to the function (in this case, strings) is an array of 
// literal strings. These are the portions of the template that are not 
// interpolated—i.e., the text between ${} placeholders.

//After the strings array, each of the interpolated values (${firstName} and 
// ${lastName} in your case) is passed as a separate argument to the function.


// - Tagged templates allow you to perform more advanced operations during 
//   interpolation.
// - A tagged template is a function call where the function receives the 
//   literal strings and interpolated values as arguments.

function greet(strings, firstname, lastname){
    // Logs the array of strings: ["Hello, ", " ", "", ". You used your "]
    console.log(strings);
    // Logs the interpolated `firstName` value: "Tony"
    console.log(firstname);
    // Logs the interpolated `lastName` value: "Alicea"
    console.log(lastname);

    // Determine the "type" of first name for the example:
    let firstNameType = firstname === "Tony" ? "short" : "long";

    // Return a new string that includes some custom text based on the 
    // provided arguments:
    return `${strings[0]}${firstname}${strings[1]}${strings[2]}. You used your ${firstNameType} name`
}

// Tagged Template Example:
// - The `greet` function is called with the template literal.
// - The first argument (`strings`) is an array of the literal strings split 
//   by the interpolated values.
// - The subsequent arguments (`firstName`, `lastName`) are the values being 
//   interpolated.
const greeting = greet`Hello, ${firstName} ${lastName}`;
console.log(greeting);



// Interpolation:
// - Allows you to insert variables and expressions directly into a string 
//   using `${}` within template literals.
// - More concise and readable compared to traditional concatenation.

// Tagged Templates:
// - A more advanced form of template strings where you can process and 
//   manipulate the interpolated values and literal strings.
// - The tagged function receives an array of the literal parts of the 
//   template string and the interpolated values as arguments.

// Difference from Concatenation:
// - Concatenation joins strings together using the `+` operator, while 
//   interpolation embeds values directly within a template string.