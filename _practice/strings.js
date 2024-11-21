'use strict';

// General String Practice

const aString = `just some text to play with`;

if(false){
    function reverseStr(str){
        return str.split('').reverse().join('');
    }

    const res = reverseStr(aString);
    console.log(`res: ${res}`);
}

if(false){
    // Basic split
    const [a, b, ...c] = aString.split(' ');

    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`c: ${c}`);
}