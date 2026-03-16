from typing import List
class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums[:] = sorted(nums)
        res = []
        for i in range(len(nums)-2):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            left = i+1
            right = len(nums)-1
            target = -nums[i]
            while left < right:
                if nums[left] + nums[right] == target:
                    res.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left-1]:
                        left += 1
                    while left < right and nums[right] == nums[right+1]:
                        right -= 1
                elif nums[left] + nums[right] < target:
                    left += 1
                else:
                    right -= 1
        return res


nums = [1,2,0,1,0,0,0,0]
print(Solution().threeSum(nums))