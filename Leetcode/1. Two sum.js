var twoSum = function(nums, target) {
    let result = []
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] !== undefined) {
            return [i, hash[nums[i]]]
        } else {
            hash[target - nums[i]] = i
        }
    }
};