/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    left = 1
    for (right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[right - 1]) {
            nums[left] = nums[right]
            left++
        }
    }
    return left
};