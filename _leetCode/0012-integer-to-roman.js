// Integer To Roman
// https://leetcode.com/problems/integer-to-roman/description/

const caseNum_1 = 3
const caseNum_2 = 58
const caseNum_3 = 1994

if(true){
    var intToRoman = function(num) {
        m = [
            [1000, "M"],
            [900, "CM"],
            [500, "D"],
            [400, "CD"],
            [100, "C"],
            [90, "XC"],
            [50, "L"],
            [40, "XL"],
            [10, "X"],
            [9, "IX"],
            [5, "V"],
            [4, "IV"],
            [1, "I"]
        ];

        res = ``;

        for(let [dn, str] of m){
            while (num / dn >= 1){
                res += str;
                num -= dn;
            }
        }

        return res;
    };
}

console.log(`${intToRoman(caseNum_1)}`);
console.log(`${intToRoman(caseNum_2)}`);
console.log(`${intToRoman(caseNum_3)}`);