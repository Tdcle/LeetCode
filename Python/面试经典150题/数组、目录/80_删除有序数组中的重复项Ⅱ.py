from typing import List
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        index, pre = 1, 0
        for i in range(1, len(nums)):
            if nums[i] != nums[i-1]:
                nums[index] = nums[i]
                index += 1
                pre = 0
            else:
                pre += 1
                if pre == 1:
                    nums[index] = nums[i]
                    index += 1
        return index

nums = [0,0,1,1,1,1,2,3,3]
print(Solution().removeDuplicates(nums))