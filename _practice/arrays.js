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