// Roman To Integer
// https://leetcode.com/problems/roman-to-integer/description/

const caseString_1 = "III";
const caseString_2 = "LVIII";
const caseString_3 = "MCMXCIV";

if(false){
    var romanToInt = function(s) {
        const numerals = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        };

        const stringArr = s.split('');

        let res = 0;
        for(let i = 0; i < stringArr.length; i++){
            const c = numerals[stringArr[i]];

            if(i + 1 < stringArr.length && c < numerals[stringArr[i + 1]]){
                res -= c;
            } else {
                res += c;
            }
        }

        return res;
    };
}

if(false){
    var romanToInt = function(s) {
        const numerals = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        };

        s = s.replace("IV", "IIII").replace("IX", "VIIII");
        s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
        s = s.replace("CD", "CCCC").replace("CM", "DCCCC");

        let res = 0;
        for(let c of s){
            res += numerals[c];
        }

        return res;
    };
}

if(true){
    var romanToInt = function(s) {
        const numerals = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
            "IV" : -2,
            "IX" : -2,
            "XL" : -20,
            "XC" : -20,
            "CD" : -200,
            "CM" : -200
        };

        let res = 0;
        for(let [numeral, val] of Object.entries(numerals)){
            if(s.includes(numeral)){
                res += val * (s.split(numeral).length - 1);
            }
        }

        return res;
    }
}

console.log(`${romanToInt(caseString_1)}`);
console.log(`${romanToInt(caseString_2)}`);
console.log(`${romanToInt(caseString_3)}`);