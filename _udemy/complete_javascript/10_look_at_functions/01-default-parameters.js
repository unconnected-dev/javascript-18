"use strict";


const bookings = [];

// ES6: Default Parameters
// This function creates a booking for a flight with optional parameters.
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    
    // ES5: Old way of setting default parameters
    // This is how default parameters were traditionally handled in ES5.
    if(false){
        numPassengers = numPassengers || 1; // Set default to 1 if falsy
        price = price || 199;               // Set default price if falsy
    }
    
    // Create a booking object with provided parameters
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    
    console.log(`${booking}`);
    
    bookings.push(booking);
}

// Create a booking with flight number only (default parameters used)
createBooking('LH123');

// Create a booking with specified number of passengers and price
createBooking('LH123', 2, 800);

// You can include calculations in the default parameters
// Note: This only applies to parameters declared prior.
createBooking('LH123', 2); // Uses default price calculation
createBooking('LH123', 5); // Uses default price calculation

// The following function definition would not work properly
// because it does not know about numPassengers when calculating price.
if(false){
    const createBooking = function(flightNum, price = 199 * numPassengers, numPassengers = 1) {}
}

// You cannot skip past a parameter
if(false){
    // This will set numPassengers to 1000 instead of price.
    createBooking('LH123', 1000);
}

// Instead, you can explicitly pass undefined to skip a parameter
if(false){
    // This allows price to take the default value while numPassengers is set.
    createBooking('LH123', undefined, 1000);
}