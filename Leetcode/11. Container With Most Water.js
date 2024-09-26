/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0
    let r = height.length - 1
    let max = 0
    while(l < r) {
        const capacity = (r - l) * Math.min(height[l], height[r])
        if (capacity > max) max = capacity
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return max
};