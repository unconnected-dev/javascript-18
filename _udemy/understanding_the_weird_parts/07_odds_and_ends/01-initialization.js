"use strict";



// Initialization
// Arrays of objects like below can be used for testing purposes, prior to
// connecting an API for fetching real JSON data. It helps simulate working
// with a lot of data during development.
var people = [
    {
        // The John object
        firstname: "John",
        lastname: "Doe",
        addresses: [
            "111 Main St",
            "222 Third St"
        ]
    },
    {
        // The Jane object
        firstname: "Jane",
        lastname: "Doe",
        addresses: [
            "333 Main St",
            "444 Fifth St"
        ],
        // Jane has a custom greet method.
        greet: function() {
            return "Hello";
        }
    }
];
console.log(`people: ${people}`);
