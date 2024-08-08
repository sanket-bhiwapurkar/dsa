class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        result = []
        for i, n in enumerate(nums):
            diff = target - n
            remaining_nums = nums[i + 1:]
            if diff in remaining_nums:
                return [i, remaining_nums.index(diff) + i + 1]
        return result