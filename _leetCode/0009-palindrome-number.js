// Palindrome Number
// https://leetcode.com/problems/palindrome-number/description/

const caseNum_1 = 121;
const caseNum_2 = -121;
const caseNum_3 = 10;

if(false){
    var isPalindrome = function(x) {
        const numString = String(x);
        const numStringReversed = numString.split('').reverse().join('');
        return numString === numStringReversed;
    };
}

if(true){
    var isPalindrome = function(x) {
        const numString = String(x);
        return numString === numString.split('').reverse().join('');
    };
}

console.log(`${isPalindrome(caseNum_1)}`);
console.log(`${isPalindrome(caseNum_2)}`);
console.log(`${isPalindrome(caseNum_3)}`);