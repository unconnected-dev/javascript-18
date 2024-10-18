'use strict';

//functions accepting callback functions

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//higher order function
const transformer = function(str, fn){
    console.log(`${fn.name}`);
    return fn(str);
}

const a = 'This is a sentence';
console.log(`${transformer(a, oneWord)}`);
console.log(`${transformer(a, upperFirstWord)}`);


//JavaScript uses callbacks all the time
const high5 = function(){
    console.log(`High five...`);
}
document.body.addEventListener('click', high5);
//addEventListener is the higher order function
//high5 is the callback function


['Jonas', 'Martha', 'Adam'].forEach(high5);


//why callbacks?
//it makes it easier to split code up
//callback functions allow for abstractions

//meaning we can hide some detail
//for example the transformer function does not care about
//hw the string is transformed, all it wants to do is transofmr
// a string