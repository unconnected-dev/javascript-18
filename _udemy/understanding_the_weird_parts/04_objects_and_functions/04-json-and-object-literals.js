"use strict";



//JavaScript Object Notation (JSON)
//JSON is inspired by JavaScript's object literal syntax but is used for data
//interchange between systems


var objectLiteral = {
    firstname: `Mary`,
    isAProgrammer: true
}

console.log(`objectLiteral: ${objectLiteral}`);


//Differences between JSON and object literals:
//  - Property names in JSON must be wrapped in double quotes (""), whereas
//    in object literals, it's optional
//  - JSON is a subset of JavaScript object literal syntax, meaning all valid
//    JSON is valid object literal syntax, but not all object literal syntax 
//    is valid JSON

//Example of JSON:
// {
//     "firstname": "Mary",
//     "isAProgrammer": true
// }



//JSON and JavaScript:
//JSON isn't a part of JavaScript, but since JSON is so widely used and 
//JavaScript works well with it, JavaScript includes built-in functionality
//for converting between JSON and objects

//Converting an object to JSON:
//JSON.stringify() turns an object into a JSON string, useful for sending 
//data to a server or saving it
console.log(JSON.stringify(objectLiteral));  


// Converting JSON back to an object:
// JSON.parse() turns a JSON string back into a JavaScript object, useful
//when receiving data from a server
var jsonValue = JSON.parse(`{"firstname": "Mary", "isAProgrammer": true}`);
console.log(`jsonValue: ${jsonValue}`);