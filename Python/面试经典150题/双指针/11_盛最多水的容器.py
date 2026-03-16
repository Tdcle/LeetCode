from typing import List
class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        ans = min(height[left], height[right]) * (right - left)
        while left < right:
            if height[left] < height[right]:
                left += 1
                if height[left] > height[left - 1]:
                    ans = max(ans, min(height[left], height[right]) * (right - left))
            else:
                right -= 1
                if height[right] > height[right + 1]:
                    ans = max(ans, min(height[left], height[right]) * (right - left))
        return ans

height = [1,8,6,2,5,4,8,3,7]
print(Solution().maxArea(height))
