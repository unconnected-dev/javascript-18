// Two Sum
// https://leetcode.com/problems/two-sum/description/

const caseNums_1 = [2,7,11,15]
const caseTarget_1 = 9

const caseNums_2 = [3,2,4]
const caseTarget_2 = 6

const caseNums_3 = [3,3]
const caseTarget_3 = 6

// Stores numbers inside an object literal as it loops through once
// Checks against that object literal for the second number that adds up to the target
if(false){
    function twoSum(nums, target){
        const storedIndicies = {};

        for(let key = 0; key < nums.length; key++){
            let num = nums[key];
            let targetMinsNum = target - num;

            if(targetMinsNum in storedIndicies){
                return [key, storedIndicies[targetMinsNum]];
            } else {
                storedIndicies[num] = key;
            }
        }
    }
}

// Stores numbers inside a map
// Maps preserve insertion order whether keys are strings, numbers or any other data type
// Object literals maintain insertion order for string and symbol keys but numeric keys
// may be ordered differently
if(false){
    function twoSum(nums, target){
        const storedIndicies = new Map();

        for(let key = 0; key < nums.length; key++){
            const num = nums[key];
            const targetMinsNum = target - num;

            if(storedIndicies.has(targetMinsNum)){
                return [key, storedIndicies.get(targetMinsNum)];
            } else {
                storedIndicies.set(num, key);
            }
        }
    }
}

// Double loops through the nums array
if(true){
    function twoSum(nums, target){
        const n = nums.length;
        for(let i = 0; i < n; i++){
            for(let j = i + 1; j < n; j++){
                if(nums[i] + nums[j] === target){
                    return [i, j];
                }
            }
        }
    }
}

console.log(`${twoSum(caseNums_1, caseTarget_1)}`);
console.log(`${twoSum(caseNums_2, caseTarget_2)}`);
console.log(`${twoSum(caseNums_3, caseTarget_3)}`);