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

if(false){
    var isPalindrome = function(x) {
        const numString = String(x);
        return numString === numString.split('').reverse().join('');
    };
}

// Two pointers
if(true){
    var isPalindrome = function(x) {
        const numString = String(x);
        let left = 0, right = numString.length - 1;

        while (left < right){
            if(numString[left] !== numString[right]){
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}

console.log(`${isPalindrome(caseNum_1)}`);
console.log(`${isPalindrome(caseNum_2)}`);
console.log(`${isPalindrome(caseNum_3)}`);