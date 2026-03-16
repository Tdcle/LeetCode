from typing import List
class Solution:
    def findMin(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        l, r = 0, n-1
        while l <= r:
            mid = l + int((r-l) >> 1)
            if nums[mid] < nums[mid-1]:
                return nums[mid]
            if nums[mid] > nums[-1]:
                l = mid + 1
            else:
                r = mid - 1
        return l

print(Solution().findMin([3,4,1]))