// Median Of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

const caseNums1_1 = [1,3];
const caseNums2_1 = [2];

const caseNums1_2 = [1,2];
const caseNums2_2 = [3,4];

const caseNums1_3 = [0,0,0,0,0];
const caseNums2_3 = [-1,0,0,0,0,0,1];

// Basic solution but not O(log (m+n))
// O((m + n) log (m + n))
if(false){
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

// Not O(log (m+n))
// O(m + n)
if(false){
    var findMedianSortedArrays = function(nums1, nums2) {
        const nums3 = [];
        const n1_l = nums1.length, n2_l = nums2.length;
        let n1 = 0, n2 = 0;
        const length = n1_l + n2_l;

        for(let i = 0; i < length; i++){
            if(n2 >= n2_l || (n1 < n1_l && nums1[n1] <= nums2[n2])){
                nums3.push(nums1[n1]);
                n1++;
            } else {
                nums3.push(nums2[n2]);
                n2++;
            }
        }

        if (length % 2 !== 0) {
            return nums3[Math.floor(length / 2)];                       // If odd, return the middle element
        } else {
            return (nums3[length / 2] + nums3[length / 2 - 1]) / 2;     // If even, return the average of two middle elements
        }
    };
}

// Not O(log (m+n))
// O(m + n)
if(false){
    var findMedianSortedArrays = function(nums1, nums2) {
        const n1_l = nums1.length, n2_l = nums2.length;
        const length = n1_l + n2_l;
        const nums3 = new Array(Math.floor(length / 2) + 1);            // Initialize nums3 with the required length
        const n3_l = nums3.length;
        let i = 0, n1 = 0, n2 = 0;

        for(i; i < n3_l; i++){
            if(n2 >= n2_l || (n1 < n1_l && nums1[n1] <= nums2[n2])){
                nums3[i] = nums1[n1];
                n1++;
            } else {
                nums3[i] = nums2[n2];
                n2++;
            }
        }
        
        if (length % 2 !== 0) {
            return nums3[n3_l -1];
        } else {
            return (nums3[n3_l - 1] + nums3[n3_l - 2]) / 2;
        }
    };
}

// Looking for overlapping partitions between the two arrays.
// O(log(min(m, n)))
if(true){
    var findMedianSortedArrays = function(nums1, nums2) {
        // Ensure nums1 is the smaller array for binary search efficiency
        if(nums1.length > nums2.length){
            [nums1, nums2] = [nums2, nums1];
        }

        const n1_l = nums1.length, n2_l = nums2.length;
        
        // Set up binary search range
        // Start of the smaller array and its end
        let low = 0, high = n1_l;

        // Continue binary search until the range is valid
        while(low <= high){
            // Partition index for nums1
            const part1 = Math.floor((low + high) / 2);
            // Partition index for nums2 calculated based on part1
            const part2 = Math.floor((n1_l + n2_l + 1) / 2) - part1;


            // Handle edge cases for partitions
            const left1 = part1 === 0 ? -Infinity : nums1[part1 - 1];   // Element of left partition of nums1
            const right1 = part1 === n1_l ? Infinity : nums1[part1];    // Element of right partition of nums1

            const left2 = part2 === 0 ? -Infinity : nums2[part2 - 1];   // Element of left partition of nums2
            const right2 = part2 === n2_l ? Infinity : nums2[part2];    // Element of right partition of nums2


            // Check if found the correct partition
            if(left1 <= right2 && left2 <= right1){

                if ((n1_l + n2_l) % 2 === 0) {
                    // If even, return the average of the max of lefts and min of rights
                    return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
                } else {
                    // If odd, return the max of left partition
                    return Math.max(left1, left2);
                }
            } else if (left1 > right2) {
                // We are too far on the right side for part1. Go left.
                // Move the high index left to decrease part1
                high = part1 - 1;
            } else {
                // We are too far on the left side for part1. Go right.
                // Move the low index right to increase part1
                low = part1 + 1;
            } 
        }
    };
}

console.log(`${findMedianSortedArrays(caseNums1_1, caseNums2_1)}`);
console.log(`${findMedianSortedArrays(caseNums1_2, caseNums2_2)}`);
console.log(`${findMedianSortedArrays(caseNums1_3, caseNums2_3)}`);