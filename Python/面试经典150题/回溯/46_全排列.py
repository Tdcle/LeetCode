from typing import List
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        ans = []
        l = len(nums)
        def dfs(now, map):
            if len(now) == l:
                ans.append(now[:])
                return
            for i in range(l):
                if  map[i] == 0:
                    now.append(nums[i])
                    map[i] = 1
                    dfs(now, map)
                    now.pop()
                    map[i] = 0
        dfs([],[0]*l)
        return ans

nums = [1,2,3]
print(Solution().permute(nums))