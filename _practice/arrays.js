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

if(true){
    const a = [1,3,5,7,9];
    const b = [2,4,6,8,10];

    const res = [];

    let c = 0, d = 0;

    while(c < a.length || d < b.length){

        if(c < a.length && a[c] < b[d]){
            res.push(a[c]);
            c++;
        } else if(d < b.length){
            res.push(b[d]);
            d++;
        }
    }
    console.log(`${res}`);
}

if(false){
    const an_array = [`bob`, `tom`, `jim`];
    an_array.forEach((name) => {
        console.log(`${name}`);
    });
}

if(false){
    // destructuring arrays
    const names = [`tom`, `bob`, `jim`];
    const [tom, bob, jim] = names;

    console.log(`${tom}, ${bob}, ${jim}`);
}

if(false){

    // default values
    function test(a=1,b=2,c=3){
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
    }

    test(undefined, undefined, 3);
}

if(false){
    const digits = [0,1,2,3,4,5,6,7,8,9];
    //spreading an array
    function spreaded(a, b, c){
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
    }
    spreaded(...digits);
}

if(false){
    // get even numbers from array and push into another
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

if(false){
    const str = "abcdefghijklm";
    
    str.split('').forEach(c => {
        console.log(`${c}`);
    });
}

if(false){
    const str = "abcdefghijklm";
    const arr = str.split('');

    let left = 0, right = arr.length;

    while(left <= right){
        // Need to use destructuring
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    console.log(`${arr}`);
}