// Remove Element
// https://leetcode.com/problems/remove-element/description/

const caseNums_1 = [3,2,2,3];
const caseVal_1 = 3;

const caseNums_2 = [0,1,2,2,3,0,4,2];
const caseVal_2 = 2;

// Removes by splicing out the element
// Doesn't complete the question due to it wanting to keep the array size
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

// Doesn't complete the question due to it wanting to keep the array size
if(false){
    var removeElement = function(nums, val) {

        while(nums.includes(val)){
            nums.splice(nums.indexOf(val), 1);
        }

        return nums.length;
    };
}

// Question requires in-place not a new array
// Return the number of elements in nums not equal to val
// Tracks elements equal to val via i and replaces with n
if(false){
    var removeElement = function(nums, val){
        let i = 0;
        for(n of nums){
            if(n !== val){
                nums[i] = n;
                i++;
            }
        }
        
        return i;
    };
}

if(true){
    var removeElement = function(nums, val){
        let left = 0, right = nums.length - 1;

        while(left <= right){
            if(nums[left] === val){
                [nums[left], nums[right]] = [nums[right], nums[left]];
                right--; 
            } else {
                left++;
            }
        }

        return left;
    };
}

console.log(`${removeElement(caseNums_1, caseVal_1)}`);
console.log(`${removeElement(caseNums_2, caseVal_2)}`);