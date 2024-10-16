// Reverse Integer
// https://leetcode.com/problems/reverse-integer/description/

const caseX_1 = 123;
const caseX_2 = -123;
const caseX_3 = 120;

if(false){
    var reverse = function(x) {
        let newX = 0;

        if(x >= 0){
            // In JavaScript, strings do not have a native reverse() method.
            // This is because strings are immutable in JavaScript. You can
            // access individual characters in a string using array-style
            // indexing (e.g., str[0] to get the first character of the 
            // string). However, this only allows you to read characters
            // from the string, not modify them. 
            newX = parseInt(String(x).split('').reverse().join(''));   
        } else {
            // Reverse digits for negative number
            newX = -parseInt(String(x).slice(1).split('').reverse().join(''));  
        }

        return (newX > 2147483647 || newX < -2147483647) ? 0 : newX;
    };  
}

if(false){
    var reverse = function(x) {
        let newX = x >= 0 
            ? parseInt(String(x).split('').reverse().join(''))
            : -parseInt(String(x).slice(1).split('').reverse().join(''));
        
        return (newX > 2147483647 || newX < -2147483647) ? 0 : newX;
    }
}

if(true){
    var reverse = function(x) {
        let res = parseInt(String(Math.abs(x)).split('').reverse().join(''));
        res = x < 0 ? -res : res;
        return res >= -2147483648 && res <= 2147483647 ? res : 0;
    };
}

console.log(`${reverse(caseX_1)}`);
console.log(`${reverse(caseX_2)}`);
console.log(`${reverse(caseX_3)}`);