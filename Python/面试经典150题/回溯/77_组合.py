from typing import List
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        ans = []
        def dfs(now, num):
            if len(now) == k:
                ans.append(now)
                return
            for i in range(num, n+1):
                dfs(now + [i], i+1)
        dfs([],1)
        return ans

print(Solution().combine(4,2))

