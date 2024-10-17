// Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/description/

const caseStrs_1 = ["flower","flow","flight"];
const caseStrs_2 = ["dog","racecar","car"];

if(true){
    var longestCommonPrefix = function(strs) {
        let res = strs[0];

        for(let word of strs){
            while(!word.startsWith(res)){
                res = res.slice(0, -1);
            }

            if(res.length === 0){
                break;
            }
        }

        return res;
    };
}

console.log(`${longestCommonPrefix(caseStrs_1)}`);
console.log(`${longestCommonPrefix(caseStrs_2)}`);