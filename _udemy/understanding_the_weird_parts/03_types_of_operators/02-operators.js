"use strict";


// Operator
// An operator in JavaScript is a special function, but it is written using a 
// different syntax. Operators typically take two operands (parameters) and 
// return one result.
if (false) {
    var a = 3 + 4;
    console.log(`a: ${a}`);
}

// Infix Notation
// JavaScript uses infix notation, meaning the operator sits between the two 
// operands.

// Other notations:
//   Prefix notation: + 3 4  (operator comes before the operands)
//   Postfix notation: 3 4 + (operator comes after the operands)

// Infix notation is more readable and is the standard in most programming 
// languages.



// Operators as Functions
// Operators are essentially shorthand for built-in functions that perform 
// specific tasks. These "operator functions" are provided by the JavaScript 
// engine and perform operations like addition, subtraction, etc.



// Operator Precedence
// Precedence determines which operator is evaluated first in an expression 
// with multiple operators. Operators with higher precedence are evaluated 
// before operators with lower precedence.
// For example, multiplication (*) has higher precedence than addition (+).
if (false) {
    var b = 3 + 4 * 5;
    console.log(`b: ${b}`);
    // Output: 23, because 4 * 5 is evaluated first, then 3 + 20.
}



// Associativity
// Associativity defines the order in which operators of the same precedence 
// level are evaluated. It can be either:
//   Left-to-right (left associativity)
//   Right-to-left (right associativity).

// Multiplication (*) and addition (+) both have left-to-right associativity.
// Assignment (=) has right-to-left associativity.

// In cases where operators have the same precedence, associativity determines 
// the order.

var x = 1;
var y = 3;
var z = 4;

// This is evaluated as y = z, then x = y, which means all variables end up 
// with the value of 4.
if (false) {
    x = y = z;
    console.log(`x, y, z: ${x}, ${y}, ${z}`);
}

// Explanation:
//   1. `y = z` is evaluated first, so y becomes 4.
//   2. Then `x = y` is evaluated, so x also becomes 4.
//   Because of right-to-left associativity, assignments cascade from right to 
//   left.