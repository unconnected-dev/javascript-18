'use strict';


const flight = 'LM234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284
};

// You should not typically change the parameters of a function
const checkIn = function(flightNumber, passengerObject){
    flightNumber = 'LM999';
    passengerObject.name = `Mr. ${passengerObject.name}`;

    if(passengerObject.passport ===24739479284){
        console.log(`Checked in`);
    } else {
        console.log(`Wrong passport`);
    }
}

// This illustrates that objects are being passed by reference
// primitives are being passed by value
if(false){
    checkIn(flight, jonas);
    console.log(`flight: ${flight}`);
    console.log(`jonas: ${jonas.name}`);
}

// This furher illustrates the object is being passed by reference
// the passport number in the `jonas` object is being changed
const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000); 
}
newPassport(jonas);

console.log(`jonas: ${jonas.passport}`);

// passing by value
// passing by reference

//javascript does not have passing by reference, only passing by value
//though it looks like it is passing by reference

//when an object reference is passed, it is the value of the memory address
//we pass a reference to the function, not by reference
//this is an important distinction