// Integer To Roman
// https://leetcode.com/problems/integer-to-roman/description/

const caseNum_1 = 3;
const caseNum_2 = 58;
const caseNum_3 = 1994;

if(false){
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

if(true){
    var intToRoman = function(num) {
        let res = "";

        while (num > 0) {
            if (num >= 1000) {
                res += "M";
                num -= 1000;
            } else if (num >= 900) {
                res += "CM";
                num -= 900;
            } else if (num >= 500) {
                res += "D";
                num -= 500;
            } else if (num >= 400) {
                res += "CD";
                num -= 400;
            } else if (num >= 100) {
                res += "C";
                num -= 100;
            } else if (num >= 90) {
                res += "XC";
                num -= 90;
            } else if (num >= 50) {
                res += "L";
                num -= 50;
            } else if (num >= 40) {
                res += "XL";
                num -= 40;
            } else if (num >= 10) {
                res += "X";
                num -= 10;
            } else if (num >= 9) {
                res += "IX";
                num -= 9;
            } else if (num >= 5) {
                res += "V";
                num -= 5;
            } else if (num >= 4) {
                res += "IV";
                num -= 4;
            } else if (num >= 1) {
                res += "I";
                num -= 1;
            }
        }

        return res;
    };
}

console.log(`${intToRoman(caseNum_1)}`);
console.log(`${intToRoman(caseNum_2)}`);
console.log(`${intToRoman(caseNum_3)}`);