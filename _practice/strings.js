'use strict';

// General String Practice

const aString = `just some text to play with`;

if(false){
    function capitalizeWords(str){
        return str.toLowerCase()
                .split(' ')
                .map(word => word[0].toUpperCase() + word.slice(1))
                .join(' ');
    }

    const res = capitalizeWords(aString);
    console.log(`res: ${res}`);
}

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