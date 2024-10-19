"use strict";


const flight = 'LM234';             // Flight number as a constant string
const jonas = {
    name: 'Jonas Schmedtmann',      // Passenger's name
    passport: 24739479284           // Passenger's passport number
};


// Function to check in a passenger
// Note: Modifying function parameters directly is not typical.
const checkIn = function(flightNumber, passengerObject) {
    flightNumber = 'LM999';                                 // This change does not affect the outer variable
    passengerObject.name = `Mr. ${passengerObject.name}`;   // Modify the name

    // Check if the passport number matches
    if (passengerObject.passport === 24739479284) {
        console.log(`Checked in`);                          // Successful check-in message
    } else {
        console.log(`Wrong passport`);                      // Error message for wrong passport
    }
}

// This illustrates that objects are passed by reference, while primitives are passed by value.
// The `flight` variable is a primitive (string) and will not change.
if (false) {
    checkIn(flight, jonas);                                 // Passes the flight number and the `jonas` object
    console.log(`flight: ${flight}`);                       // Original flight number remains unchanged
    console.log(`jonas: ${jonas.name}`);                    // Name gets updated to "Mr. Jonas Schmedtmann"
}

// Further illustrates that the object is passed by reference.
// The `passport` number in the `jonas` object will be changed by the function.
const newPassport = function(person) {
    // Generate a new random passport number
    person.passport = Math.trunc(Math.random() * 1000000000); 
}

// Invoke the function to change Jonas's passport
newPassport(jonas);

// Log the updated passport number
console.log(`jonas: ${jonas.passport}`);


// Passing by value vs. passing by reference:
// JavaScript does not have true "passing by reference" semantics.
// Instead, it passes the value of the memory address for objects.
// We are passing a reference to the object, not the object itself.
// This distinction is important to understand in JavaScript's behavior.