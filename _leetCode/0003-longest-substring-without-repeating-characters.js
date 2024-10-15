// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

const caseS_1 = "abcabcbb";
const caseS_2 = "bbbbb";
const caseS_3 = "pwwkew";
const caseS_4 = " ";
const caseS_5 = "dvdf";

// Increment along with 2 pointers.
if(false){
    var lengthOfLongestSubstring = function(s) {
        if(s.length === 0){
            return 0;
        }

        let i = 0;
        let j = 0;
        const mySet = new Set();
        let res = 0;

        while(j < s.length){
            if(!mySet.has(s[j])){
                mySet.add(s[j]);
                j += 1;
                res = Math.max(res, j - i);
            } else {
                while(s[i] !== s[j]){
                    mySet.delete(s[i]);
                    i += 1;
                }

                mySet.delete(s[i]);
                i += 1;
            }
        }

        return res;
    };
}

// Go through each character then create new substring as needed.
if(false){
    var lengthOfLongestSubstring = function(s) {
        if(s.length == 0){
            return 0;
        }

        let res = 0;
        let curr = "";

        for(k in s){
            const c = s[k];
            if(curr.indexOf(c) === -1){
                curr += c;
            } else {
                curr = curr.slice(curr.indexOf(c) + 1) + c;
            }

            if(curr.length > res){
                res = curr.length;
            }
        }

        return res;
    };
}

// Sliding window counter
// Moves left to right
// Slower than other solutions
if(true){
    var lengthOfLongestSubstring = function(s) {
        let counter = {};
        let left = 0, maxLength = 0;

        for(let right = 0; right < s.length; right++){
            let val = s.charAt(right);
            counter[val] = (counter[val] || 0) + 1;

            if(counter[val] > 1){
                while(left < right && counter[val] > 1){
                    counter[s.charAt(left)] -= 1;
                    left += 1;
                }
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    };
}

console.log(`${lengthOfLongestSubstring(caseS_1)}`);
console.log(`${lengthOfLongestSubstring(caseS_2)}`);
console.log(`${lengthOfLongestSubstring(caseS_3)}`);
console.log(`${lengthOfLongestSubstring(caseS_4)}`);
console.log(`${lengthOfLongestSubstring(caseS_5)}`);