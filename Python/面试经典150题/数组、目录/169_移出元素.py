from typing import List
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        map = {}
        for i in nums:
            if i not in map:
                map[i] = 1
            else:
                map[i] += 1
            if map[i] > len(nums) / 2:
                return i

nums = [2,2,1,1,1,2,2]
print(Solution().majorityElement(nums))