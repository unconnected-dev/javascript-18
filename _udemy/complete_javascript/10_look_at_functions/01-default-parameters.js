'use strict';


const bookings = [];

// ES6
// Default parameters
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    
    // ES5 
    // Old way of setting default parameters
    if(false){
        numPassengers = numPassengers || 1;
        price = price || 199;
    }
    
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    
    console.log(`${booking}`);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);

// You can include calculations in the default parameters
// Only for parameters declared prior
createBooking('LH123', 2);
createBooking('LH123', 5);

// The following line would not work
// Because it does not know about numPassengers
if(false){
    const createBooking = function(flightNum, price = 199 * numPassengers, numPassengers = 1) {}
}

// You cannot skip past a parameter
if(false){
    // This will set numPassengers to 1000
    // Not price to 1000
    createBooking('LH123', 1000);
}

// Instead we can use undefined
if(false){
    createBooking('LH123', undefined, 1000);
}