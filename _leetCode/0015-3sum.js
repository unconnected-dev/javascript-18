// 3Sum
// https://leetcode.com/problems/3sum/description/

const caseNums_1 = [-1,0,1,2,-1,-4];
const caseNums_2 = [0,1,1];
const caseNums_3 = [0,0,0];
const caseNums_4 = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0];

if(false){
    var threeSum = function(nums) {
        let i = 0;
        nums.sort((a, b) => a - b);

        if(nums.length <= 2){
            return [];
        }

        const res = {};

        while(i <= nums.length - 2){
            let startVal = nums[i];
            let left = i + 1;
            let right = nums.length - 1;

            while(left < right){
                let total = nums[left] + nums[right];

                if(startVal + total === 0){
                    res[`${startVal}_${nums[left]}_${nums[right]}`] = [startVal, nums[left], nums[right]];
                    left++;
                } else if(startVal + total < 0){
                    left++;
                } else if(startVal + total > 0){
                    right--;
                }

                if (((startVal + nums[left]) > nums[right]) || (startVal === 0 && nums[left] === 0 && nums[right] === 0)) {
                    if (left < right && startVal + nums[left] + nums[right] === 0) {
                        res[`${startVal}_${nums[left]}_${nums[right]}`] = [startVal, nums[left], nums[right]];
                    }
                    break;
                }
            }

            i++;
        }
        
        return Object.values(res);
    };
}

if(true){
    var threeSum = function(nums) {
        nums = nums.sort((a, b) => a - b);
        const l = nums.length;
    
        if (l <= 2) {
            return [];
        }
    
        const res = [];
    
        // Loop iterates over nums, -2 to ensure there are at least two more
        // elements after the current nums[i]
        for (let i = 0; i < l - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                // Skip duplicate elements to avoid duplicate triplets
                continue;
            }
    
            let left = i + 1;
            let right = l - 1;
    
            // This while loop checks if the sum of nums[i], nums[left] and nums[right] is zero
            while (left < right) {
                const total = nums[i] + nums[left] + nums[right];
                if (total === 0) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
    
                    // Move past duplicates
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (total < 0) {
                    left++; 
                } else {
                    right--;
                }
            }
        }
    
        return res;
    };
}

console.log(`${threeSum(caseNums_1)}`);
console.log(`${threeSum(caseNums_2)}`);
console.log(`${threeSum(caseNums_3)}`);
console.log(`${threeSum(caseNums_4)}`);