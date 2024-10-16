// Container With Most Water
// https://leetcode.com/problems/container-with-most-water/description/

const caseHeight_1 = [1,8,6,2,5,4,8,3,7];
const caseHeight_2 = [1,1];

if(true){
    var maxArea = function(height) {
        let left = 0, right = height.length - 1, area = 0;

        while (left < right){
            area = Math.max(area, (right - left) * Math.min(height[left], height[right]));

            if (height[left] < height[right]){
                left++;
            } else {
                right--;
            }
        }

        return area;
    };
}

console.log(`${maxArea(caseHeight_1)}`);
console.log(`${maxArea(caseHeight_2)}`);