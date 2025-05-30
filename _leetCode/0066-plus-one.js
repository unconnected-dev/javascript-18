// Plus One
// https://leetcode.com/problems/plus-one/description/

const caseDigits_1 = [1,2,3];
const caseDigits_2 = [4,3,2,1];
const caseDigits_3 = [9];
const caseDigits_4 = [9,9];

if(false){
    var plusOne = function(digits) {
        let rrDigits = digits.slice().reverse();
        let carry = false;

        for (let i = 0; i < rrDigits.length; i++) {
            if (rrDigits[i] < 9) {
                rrDigits[i] += 1;
                carry = false;
                break;
            } else {
                rrDigits[i] = 0;
                carry = true;
            }
        }

        if (carry === true) {
            rrDigits.push(1);
        }

        return rrDigits.reverse();
    };
}

if(false){
    var plusOne = function(digits) {

        const digitsLength = digits.length;

        for (let i = digitsLength - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i] += 1;
                return digits;
            } else {
                digits[i] = 0;
            }
        }

        return [1].concat(digits); 
    };
}


if(true){
    var plusOne = function(digits) {

        let reverseDigits = digits.slice().reverse();
        const digitsLength = digits.length;
        let carryOne = false;
        let i = 0;
    
        while (i < digitsLength) {
            if (reverseDigits[i] < 9) {
                reverseDigits[i] += 1;
                carryOne = false;
                break;
            } else {
                reverseDigits[i] = 0;
                carryOne = true;
            }
            i += 1;
        }
    
        if (carryOne === true) {
            reverseDigits.push(1);
        }
    
        return reverseDigits.reverse();
    };
}

console.log(`${plusOne(caseDigits_1)}`);
console.log(`${plusOne(caseDigits_2)}`);
console.log(`${plusOne(caseDigits_3)}`);
console.log(`${plusOne(caseDigits_4)}`);