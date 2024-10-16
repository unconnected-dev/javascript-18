"use strict";

// Types
if (false) {
    // Variables don't hold data types; the values do.
    let aString = "A test string";
    let aNumber = 0;
    let aBoolean = true;

    console.log(typeof aString);    // "string"
    console.log(typeof aNumber);    // "number"
    console.log(typeof aBoolean);   // "boolean"

    // Dynamic typing: The type is assigned at runtime based on the value.
    aNumber = "dynamic typing";
    console.log(typeof aNumber);    // "string"
}


// Types Extended
if (false) {
    // undefined: Unique as both type and value.
    let undefinedVariable;
    console.log(undefinedVariable);         // undefined
    console.log(typeof undefinedVariable);  // "undefined"

    // null: Type is "object" due to a historical bug.
    console.log(typeof null);               // "object"

    // NaN (Not a Number): Is of type number but represents an invalid number.
    console.log(typeof NaN);                // "number"
}


// Operators
if (false) {
    // Power operator ** (5^5)
    console.log(5 ** 5); // 3125

    // Arithmetic operators: - + * / **

    // Assignment operators
    let x = 0;
    x++;       // Increment
    x--;       // Decrement
    x += 10;   // x = x + 10
    x -= 5;    // x = x - 5
    x *= 10;   // x = x * 10
    x /= 5;    // x = x / 5
    x **= 2;   // x = x ** 2
}


// Template Literals
if (false) {
    // Template literals allow for multi-line strings and embedded expressions.
    let myName = "Paul";
    let aStringLiteral = `I'm ${myName}`;
    console.log(aStringLiteral);

    console.log(`A multi
    line
    string`);
}


if (false) {
    // Console logs display different colors for different types.
    console.log(1, "1");    // Number and string in different colors
    console.log("1");       // String in white (dark mode)
}


// Type Conversion and Coercion
if (false) {
    // Type conversion (explicit) vs coercion (implicit).
    
    // Conversion examples
    // Manually converts a value from one type to another.
    const aYear = '1985';
    console.log(Number(aYear), aYear);  // 1985, '1985'
    console.log(aYear + 10);            // Concatenation (coercion)
    console.log(Number(aYear) + 10);    // 1995

    console.log(String(1), 1);          // '1', 1

    // Coercion examples
    // When JavaScript automatically converts a value from one type to another
    // during operations without the programmer explicitly specifying it.
    console.log("I am " + 37 + " years old."); // String coercion

    // Not all operators convert to string
    console.log("23" - "5" - 1);        // 17 (number)
    console.log("2" * "2");             // 4 (number)
    console.log("10" / "5");            // 2 (number)

    let aVariable = "1" + 1;            // "11" (string)
    aVariable--;                        // "10" (number)
    console.log(typeof aVariable);      // "number"
}


// Truthy and Falsy Values
if (false) {
    // Five falsy values: 0, "", undefined, null, NaN
    console.log(Boolean(0), Boolean(""), Boolean(undefined), Boolean(null), Boolean(NaN));
    console.log(Boolean(1), Boolean("abc"), Boolean({})); // All truthy values

    // Implicit conversion in if statements
    const money = 0;
    if (money) {
        console.log("You have money");
    } else {
        console.log("You don't have money");
    }

    // Height variable example
    // let height;
    // if (height) console.log("this");
    // else console.log("that"); // height is undefined, "that"
}


// Equality Operators
if (false) {
    // ===: strict equality (no type coercion)
    // ==: loose equality (with type coercion)
    // Avoid using loose equality to prevent unexpected behavior.
    console.log(18 === 18);      // true
    console.log(18 === "18");    // false
    console.log(18 === 19);      // false
    console.log(18 == 18);       // true
    console.log(18 == "18");     // true
    console.log(18 == 19);       // false

    // More info: 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality
}


// Switch Statement Example
if (false) {
    const aNum = 0;
    console.log("Switch test");
    switch (aNum) {
        case 0:
            console.log("0");
            // break; // Uncomment to prevent fall-through
        case 1:
            console.log("1");
            break;

        case 2:
            console.log("2");
            break;

        case 3:
            console.log("3");
            break;
    }
}