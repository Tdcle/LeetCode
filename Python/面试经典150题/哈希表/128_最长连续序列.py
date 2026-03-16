from typing import List
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        nums_set = set(nums)
        nums_list = list(nums_set)
        nums_sort = sorted(nums_list)
        ans = 0
        now = 1
        for i in range(1, len(nums_sort)):
            if nums_sort[i] == nums_sort[i-1]+1:
                now += 1
            else:
                ans = max(ans,now)
                now = 1
        return max(ans,now)

nums = [100,4,200,1,3,2]
print(Solution().longestConsecutive(nums))