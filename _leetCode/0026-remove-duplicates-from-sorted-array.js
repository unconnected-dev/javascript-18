// Remove Duplicates From Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

const caseNums_1 = [1,1,2];
const caseNums_2 = [0,0,1,1,1,2,2,3,3,4];

// Removes duplicates with a set
// This is not a correct solution though
if(true){
    var removeDuplicates = function(nums) {

        const aSet = new Set(nums);
        nums.length = 0;
        
        for (const num of aSet) {
            nums.push(num);
        }
        
        return nums;
    };
}

// Remove duplicates by checking the next value over
if(false){
    var removeDuplicates = function(nums) {
        let i = 0;
    
        while (i + 1 < nums.length) {
            if (nums[i] === nums[i + 1]) {
                nums.splice(i, 1); 
            } else {
                i++; 
            }
        }
    
        return nums.length;
    };
}

console.log(`${removeDuplicates(caseNums_1)}`);
console.log(`${removeDuplicates(caseNums_2)}`);