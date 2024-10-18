"use strict";


// An array is a collection that can hold multiple values, even of different 
// types
var arr = [1, 2, 3];
console.log(`arr[1]: ${arr[1]}`);


// In many languages, arrays typically store values of the same type. 
// However, in JavaScript, arrays can store a mix of different data types, 
// including numbers, booleans, strings, objects, and even functions. This 
// flexibility allows you to store a variety of data, but it also means you 
// need to be aware of the array's contents and how they're used

var arr2 = [
    1,                                      // Number
    false,                                  // Boolean
    "test",                                 // String
    {                                       // Object
        name: `bob`
    },
    function(name){                         // Function
        var greeting = `Hello`;
        console.log(`greeting name: ${greeting} ${name}`);
    }
];

    
// Accessing and displaying different elements from the array
console.log(`arr2[0]: ${arr2[0]}`);
console.log(`arr2[1]: ${arr2[1]}`);
console.log(`arr2[2]: ${arr2[2]}`);
console.log(`arr2[3]: ${arr2[3]}`);
console.log(`arr2[3].name: ${arr2[3].name}`);
console.log(`arr2[4]: ${arr2[4]}`);
arr2[4](`ted`);