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
    function f(...args){
        let total = 0;
        for(const arg of args){
            total += arg;
        }

        console.log(`${total}`);
    }

    const [a, b, c = 1, d = 1] = [2, 3];
    f(a,b,c,d);
}

if(false){
    function joinUp(...items){
        for(const item of items){
            console.log(`${item}`);
        }
    }

    const items = [`a`,`b`,`c`];
    // Rest
    joinUp(...items, `d`,`e`);
}

if(false){
    // Destructure
    const anArray = [1,2,3,4,5,6];
    const [a,b,c, ...d] = anArray
    console.log(`${a}, ${b}, ${c}`);
    console.log(`${d}`);
}

if(false){
    // Spread operator to combine arrays
    const a = [1,2,3,4];
    const b = [5,6,7,8];
    const c = [...a, ...b];

    console.log(`c: ${c}`);
}

if(false){
    const names = [`bob`, `tim`, `pam`, `len`];

    // rest syntax
    function test(a, b, ...c){
        console.log(`a: ${a}`);
        console.log(`b: ${b}`);
        console.log(`c: ${c}`);
    }

    test(...names);
}

if(false){
    // Spread operator creates a new array
    // not a reference to the old array
    const aArr = [1,2,3,4,5];
    const bArr = [...aArr];

    aArr[0] = 0;
    console.log(`aArr: ${aArr}`);
    console.log(`bArr: ${bArr}`);
}

if(false){
    // Spreading an array
    const items = [`apple`, `pear`, `pineapple`];

    function spreadItems(a, b, c){
        console.log(`a: ${a}`);
        console.log(`b: ${b}`);
        console.log(`c: ${c}`);
    }

    spreadItems(...items);
}

if(false){
    // Destructuring nested array
    const nestedArray = [1,2,[3,4]];
    const [,,[arr]] = nestedArray;
    console.log(`${arr}`);
}

if(false){
    // Destructuring nested array
    let anArray = [1,2,3,4,5,[6,7,[8,9]],[10]]

    let [,,,,five,[six,seven],[ten]] = anArray;
    console.log(`${ten}`);
}

if(false){
    // Merging two sorted arrays
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
    // Destructuring arrays
    const names = [`tom`, `bob`, `jim`];
    const [tom, bob, jim] = names;

    console.log(`${tom}, ${bob}, ${jim}`);
}

if(false){

    // Default values
    function test(a=1,b=2,c=3){
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
    }

    test(undefined, undefined, 3);
}

if(false){
    const digits = [0,1,2,3,4,5,6,7,8,9];
    // Spreading an array
    function spreaded(a, b, c){
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
    }
    spreaded(...digits);
}

if(false){
    // Get even numbers from array and push into another
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
        // Reverse will affect the whole object
        console.log(`${digits.reverse()}`);
        console.log(`${digits}`);
    }

    // Slice creates a shallow copy of a portion of the array
    if(false){
        // Slice from the 2 position of the array onwards
        console.log(`${digits.slice(2)}`);

        // Slice from the 2 position up to 4 position but not including it
        console.log(`${digits.slice(2, 4)}`);
    }
    
    if(true){
        // Slice the last 2 elements of the array
        console.log(`${digits.slice(-2)}`);
    }
}

if(false){
    const digits = [0,1,2,3,4,5,6,7,8,9];

    // indexOf will just get the same number in this
    // Using slice then selecting the first number in that array
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