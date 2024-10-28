'use strict';

//General Array Practice
const bigNumberArray = generateBigNumberArray();

function generateBigNumberArray(){
    const arr = [];
    for(let i = 0; i < 500; i++){
        arr.push(i);
    }
    return arr;
}

if(false){
    function getEvens(arr){
        const evenArr = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i]%2 === 0){
                evenArr.push(arr[i]);
            }
        }
        return evenArr;
    }

    console.log(`${getEvens(bigNumberArray)}`);
}

if(false){
    const digits = [0,1,2,3,4,5,6,7,8,9];

    if(false){
        // reverse will affect the whole object
        console.log(`${digits.reverse()}`);
        console.log(`${digits}`);
    }

    // slice creates a shallow copy of a portion of the array
    if(false){
        // slice from the 2 position of the array onwards
        console.log(`${digits.slice(2)}`);

        // slice from the 2 position up to 4 position but not including it
        console.log(`${digits.slice(2, 4)}`);
    }
    
    if(true){
        // slice the last 2 elements of the array
        console.log(`${digits.slice(-2)}`);
    }
}

if(false){
    const digits = [0,1,2,3,4,5,6,7,8,9];

    // indexOf will just get the same number in this
    // using slice then selecting the first number in that array
    for(let i = 0; i < digits.length; i++){
        console.log(`${digits.indexOf(i)}... ${digits.slice(i)[0]}`);
    }
}