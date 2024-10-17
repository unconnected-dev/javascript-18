// Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/description/

const caseStrs_1 = ["flower","flow","flight"];
const caseStrs_2 = ["dog","racecar","car"];

if(false){
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

if(true){
    var longestCommonPrefix = function(strs) {
        if (strs.length === 0) return "";

        const min_ = strs.reduce((a, b) => a < b ? a : b);
        const max_ = strs.reduce((a, b) => a > b ? a : b);
        
        for(let i = 0; i < min_.length; i++){
            if(min_[i] !== max_[i]){
                return min_.slice(0, i);
            }
        }

        return min_;
    };
}

console.log(`${longestCommonPrefix(caseStrs_1)}`);
console.log(`${longestCommonPrefix(caseStrs_2)}`);