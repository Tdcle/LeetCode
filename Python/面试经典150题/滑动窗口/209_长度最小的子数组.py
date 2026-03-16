from typing import List
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        n = len(nums)
        left, right = 0, 0
        ans = n + 1
        sum = 0
        while right < n:
            sum += nums[right]
            while sum >= target:
                ans = min(ans, right - left + 1)
                sum -= nums[left]
                left += 1
            right += 1
        return ans if ans != n + 1 else 0

target = 7
nums = [2,3,1,2,4,3]
print(Solution().minSubArrayLen(target, nums))