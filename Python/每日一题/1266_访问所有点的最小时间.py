from typing import List

class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        ans = 0
        prev = points[0]
        for point in points[1:]:
            step = max(abs(point[0] - prev[0]), abs(point[1] - prev[1]))
            prev = point
            ans += step
        return ans

print(Solution().minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))