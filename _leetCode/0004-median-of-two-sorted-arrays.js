// Median Of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

const caseNums1_1 = [1,3];
const caseNums2_1 = [2];

const caseNums1_2 = [1,2];
const caseNums2_2 = [3,4];

const caseNums1_3 = [0,0,0,0,0];
const caseNums2_3 = [-1,0,0,0,0,0,1];

if(true){
    var findMedianSortedArrays = function(nums1, nums2) {
        const nums3 = nums1.concat(nums2).sort((a, b) => a - b);
        const length = nums3.length;

        if (length % 2 !== 0) {
            return nums3[Math.floor(length / 2)];                       // If odd, return the middle element
        } else {
            return (nums3[length / 2] + nums3[length / 2 - 1]) / 2;     // If even, return the average of two middle elements
        }
    };
}

console.log(`${findMedianSortedArrays(caseNums1_1, caseNums2_1)}`);
console.log(`${findMedianSortedArrays(caseNums1_2, caseNums2_2)}`);
console.log(`${findMedianSortedArrays(caseNums1_3, caseNums2_3)}`);