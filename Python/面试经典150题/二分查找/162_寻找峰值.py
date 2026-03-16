from typing import List
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        n = len(nums)
        l, r = 0, n-1
        while l < r:
            mid = l + int((r-l) >> 1)
            if nums[mid] > nums[mid+1]:
                r = mid
            else:
                l = mid+1
        return l

print(Solution().findPeakElement([1,2,1,3,5,6,4]))
