from typing import List
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0:
            return []
        a, b = 0, 0
        ans = []
        while b < len(nums) - 1:
            b = b+1
            if nums[b]-nums[b-1] != 1:
                if b == a+1:
                    ans.append(f"{nums[a]}")
                else:
                    ans.append(f"{nums[a]}->{nums[b-1]}")
                a = b
        if a == b:
            ans.append(f"{nums[a]}")
        else:
            ans.append(f"{nums[a]}->{nums[b]}")
        return ans

nums = []
print(Solution().summaryRanges(nums))