// Higher Order Functions
// Functions that take functions or return functions or both

if(true){
    function callMe(n){
        console.log(`Call me ${n}`);
    }

    function iAm(n){
        console.log(`I am ${n}`);
    }

    function caller(fn, name){
        return fn(name);
    }

    let name = `Ishmael`;
    caller(callMe, name);
    name = `Iron Man`;
    caller(iAm, name);
}

// Simple math operations
if(false){
    function add(a, b){
        return a + b;
    }

    function subtract(a, b){
        return a - b;
    }

    function multiply(a, b){
        return a * b;
    }

    function divide(a, b){
        return a / b;
    }

    function mathOperation(fn, a, b){
        console.log(`${fn.name}`);
        return fn(a, b);
    }

    console.log(`${mathOperation(add, 5, 10)}`);
    console.log(`${mathOperation(subtract, 5, 10)}`);
    console.log(`${mathOperation(divide, 5, 10)}`);
    console.log(`${mathOperation(multiply, 5, 10)}`);
}

// String operations
if(false){
    function upperCase(str){
        return str.split('').map(c => c.toUpperCase()).join('');
    }

    function lowerCase(str){
        return str.split('').map(c => c.toLowerCase()).join('');
    }

    function countVowelsLong(str){
        const arr = ['a','e','i','o','u'];
        let res = 0;
        for(let i = 0; i < str.length -1; i++){
            if(arr.includes(str[i])){
                res++;
            }
        }
        
        return `Vowel Count: ${res}`;
    }

    function countVowelsShort(str){
        const arr = ['a','e','i','o','u'];
        const res = str.split('').filter(char => arr.includes(char)).length;
        return `Vowel Count: ${res}`;
    }

    function stringOperation(fn, str){
        return fn(str);
    }

    const testString = `This is a test string.`;
    console.log(`${stringOperation(upperCase, testString)}`);
    console.log(`${stringOperation(lowerCase, testString)}`);
    console.log(`${stringOperation(countVowelsLong, testString)}`);
    console.log(`${stringOperation(countVowelsShort, testString)}`);
}

// Simple filters
if(false){
    function isEven(n){
        return n%2 === 0;
    }

    function isPrime(n){
        if (n <= 1)
            return false;

        for(let i = 2; i < n; i++){
            if(n%i === 0 && n !== i){
                return false;
            }
        }

        return true;
    }

    function filterArr(fn, list){
        return list.filter(fn); 
    }

    const numberArr = [1,2,3,4,5,6,7,8,9,10]
    console.log(`${filterArr(isEven, numberArr)}`);
    console.log(`${filterArr(isPrime, numberArr)}`);
}

// Mapping
if(false){{
    const users = [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
        { name: "Charlie", email: "charlie@example.com" }
    ];
    
    const emails = users.map(user => user.email);
    console.log(`emails: ${emails}`);
    
    const names = users.map(user => user.name);
    console.log(`names: ${names}`);
}}


// Pipeline
if(false){
    const trim = (str) => str.trim();
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const removeSpecialChars = (str) => str.replace(/[^a-zA-Z0-9 ]/g, '');
    
    function applyTransformations(transformations, data) {
        return transformations.reduce((result, transformation) => transformation(result), data);
    }
    
    const name = "   john@doe!   ";
    const cleanedName = applyTransformations([trim, removeSpecialChars, capitalize], name);
    
    console.log(cleanedName); 
}