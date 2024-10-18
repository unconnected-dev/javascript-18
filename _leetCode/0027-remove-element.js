// Remove Element
// https://leetcode.com/problems/remove-element/description/

const caseNums_1 = [3,2,2,3];
const caseVal_1 = 3;

const caseNums_2 = [0,1,2,2,3,0,4,2];
const caseVal_2 = 2;

// Removes by splicing out the element
if(false){
    var removeElement = function(nums, val) {
        let i = 0;

        while(i < nums.length){
            if(nums[i] === val){
                nums.splice(i ,1);
                continue;
            }
            i += 1;
        }

        return nums;
    };
}

if(true){
    var removeElement = function(nums, val) {

        while(nums.includes(val)){
            nums.splice(nums.indexOf(val), 1);
        }

        return nums.length;
    };
}

console.log(`${removeElement(caseNums_1, caseVal_1)}`);
console.log(`${removeElement(caseNums_2, caseVal_2)}`);