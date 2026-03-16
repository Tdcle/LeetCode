from typing import List
class Solution:
    def jump(self, nums: List[int]) -> int:
        index, ans = 0, 0
        while index < len(nums)-1:
            if nums[index] == 0:
                return False
            elif index+nums[index] >= len(nums)-1:
                return ans+1
            far = 0
            for i in range(nums[index]):
                if index+i+1 > len(nums)-1:
                    break
                step = nums[index+i+1] + i
                if nums[index+i+1] + i + 1 > far:
                    far =  step
                    next_index = index+i+1
            index = next_index
            ans += 1
        return ans

nums = [2,3,1,1,4]
print(Solution().jump(nums))