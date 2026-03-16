from typing import List
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        ans = []
        l = len(candidates)
        def dfs(arr, now, pos):
            if now == target:
                ans.append(arr[:])
                return
            if now > target:
                return
            for i in range(pos,l):
                arr.append(candidates[i])
                now += candidates[i]
                dfs(arr, now, i)
                arr.pop()
                now -= candidates[i]
        dfs([],0,0)
        return ans

print(Solution().combinationSum([2,3,6,7],7))