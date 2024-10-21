// 3Sum
// https://leetcode.com/problems/3sum/description/

const caseNums_1 = [-1,0,1,2,-1,-4];
const caseNums_2 = [0,1,1];
const caseNums_3 = [0,0,0];
const caseNums_4 = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0];

if(true){
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

console.log(`${threeSum(caseNums_1)}`);
console.log(`${threeSum(caseNums_2)}`);
console.log(`${threeSum(caseNums_3)}`);
console.log(`${threeSum(caseNums_4)}`);