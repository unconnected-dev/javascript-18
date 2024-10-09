"use strict";


// Template Strings (Template Literals)

// Template strings (or template literals) are a feature in ES6 that provides 
// an easier and more readable way to work with strings, especially when 
// dealing with multi-line strings or embedding variables and expressions 
// within strings.


// Example using traditional string concatenation:
function greet(firstName, lastName){
    // This method uses concatenation and newline characters (\n) to create 
    // a multi-line string.
    return 'Hi ' + firstName + ' \n' + lastName;
}

console.log(greet("Elon", "Musk"));


// With template strings, the same functionality is more concise and 
// readable:
function greetWithTemplate(firstName, lastName) {
    // Template strings use backticks (`) instead of single or double quotes.
    // You can directly insert variables and expressions inside the string 
    // using `${}` syntax.
    return `Hi ${firstName} ${lastName}`;
}

console.log(greetWithTemplate("Elon", "Musk"));



// Key Features of Template Strings:

// Multi-line Strings:
// - Template strings allow for easy creation of multi-line strings without 
//   the need for concatenation or newline characters.
const fullName = "Tony\nAlicea"; // Traditional multi-line string using \n
const fullName2 = `Tony
Alicea`; // Multi-line string using template literals (backticks)


// Expression Interpolation:
// - You can embed variables or expressions directly within the string using 
//   `${}` syntax.
const firstName = "Tony";
const lastName = "Alicea";
const greeting = `Hello, ${firstName} ${lastName}!`; // Embeds the variables 
                                                     // within the string.
console.log(greeting);



// No Need for String Concatenation:
// - Template literals eliminate the need for string concatenation with the 
//   `+` operator, making code cleaner and easier to read.


// Supports Any JavaScript Expression:
// - Inside `${}`, you can include any valid JavaScript expression, not just 
//   variables.
const a = 5;
const b = 10;
console.log(`The sum of a and b is ${a + b}.`);



// Multi-line Strings:
// - Template literals allow for easier creation of multi-line strings 
//   without needing special characters like \n.

// Expression Interpolation:
// - You can embed variables or any valid JavaScript expressions directly 
//   within a template string using ${}.

// No Concatenation Needed: 
// - Template literals make your code cleaner by eliminating the need for 
//   string concatenation with the `+` operator.

// Any JavaScript Expression: 
// - Template literals support embedding any valid JavaScript expression 
//   inside ${}, making them very flexible.