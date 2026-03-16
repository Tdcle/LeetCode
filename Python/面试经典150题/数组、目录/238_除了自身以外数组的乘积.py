from typing import List
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        before = [1] * len(nums)
        after = [1] * len(nums)
        for i in range(1, len(nums)):
            before[i] = before[i-1] * nums[i-1]
            after[-i-1] = after[-i] * nums[-i]
        ans = [1] * len(nums)
        ans[0] = after[0]
        ans[-1] = before[-1]
        for i in range(1, len(nums)-1):
            ans[i] = before[i] * after[i]
        return ans

nums = [1,2,3,4]
print(Solution().productExceptSelf(nums))