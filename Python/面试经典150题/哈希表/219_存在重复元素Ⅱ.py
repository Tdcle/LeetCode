from typing import List
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        windows = set()
        left, right = 0, 0
        while right < len(nums):
            if right - left > k:
                windows.remove(nums[left])
                left += 1
            windows.add(nums[right])
            right +=1
            if len(windows) != right - left:
                return True
        return False



nums = [1,2,3,1,2,3]
k = 2
print(Solution().containsNearbyDuplicate(nums, k))