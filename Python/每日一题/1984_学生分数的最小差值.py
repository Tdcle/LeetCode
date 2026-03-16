class Solution:
    def minimumDifference(self, nums, k: int) -> int:
        nums.sort()
        length = len(nums)
        Min = 100000
        for l in range(0, length - k + 1, 1):
            now = nums[l+k-1] - nums[l]
            Min = min(Min, now)
        return int(Min)



nums=[9,4,1,7]
print(Solution().minimumDifference(nums, 2))