'use strict';

//first class functions

//javascript treasts functions as first class citizens
//this means that functions are simply values
//functions are just another `type` of object

//higher order functions
//a function that receives another function as an argument, 
//that returns a new function, or both
//this is only possible because of first class functions


//first class functions is a feature that a progrmaming language has
//or doesn't have. it just means all functions are values
//they are more of a concept

//higher order functions are a practice

const greet = () => console.log(`Hey, Jonas`);
btnClose.addEventListener('click', greet);
//addEventListener is the higher order function
//greet is a callback function


function count(){
    let counter = 0;
    return function(){

    };
}
//count is the higher order function
//the anonymous function is the returned function