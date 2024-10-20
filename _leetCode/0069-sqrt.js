// Sqrt
// https://leetcode.com/problems/sqrtx/description/

const caseX_1 = 4
const caseX_2 = 8

if(true){
    var mySqrt = function(x) {
        let res = x;
        while(res*res > x){
            res = Math.floor(Math.floor(res + x/res)/2)
        }
        return res;
    };
}

console.log(`${mySqrt(caseX_1)}`);
console.log(`${mySqrt(caseX_2)}`);