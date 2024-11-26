// Single Number
// https://leetcode.com/problems/single-number/description/

const caseNums_1 = [2,2,1];
const caseNums_2 = [4,1,2,1,2];
const caseNums_3 = [1];
const caseNums_4 = [-1];
const caseNums_5 = [-1,-1,-2];
const caseNums_6 = [1,3,1,-1,3];

if(true){
    var singleNumber = function(nums) {
    
        let myDict = {};
    
        for (let n of nums) {
            if (myDict.hasOwnProperty(n)) {
                myDict[n] = 1;
            } else {
                myDict[n] = 0;
            }
        }
    
        for (let key in myDict) {
            if (myDict[key] === 0) {
                return parseInt(key);
            }
        }
    };
}

console.log(`${singleNumber(caseNums_1)}`);
console.log(`${singleNumber(caseNums_2)}`);
console.log(`${singleNumber(caseNums_3)}`);
console.log(`${singleNumber(caseNums_4)}`);
console.log(`${singleNumber(caseNums_5)}`);
console.log(`${singleNumber(caseNums_6)}`);