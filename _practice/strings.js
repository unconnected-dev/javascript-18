'use strict';

// General String Practice

const aString = `just some text to play with`;

if(false){
    // Basic split
    const [a, b, ...c] = aString.split(' ');

    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`c: ${c}`);
}