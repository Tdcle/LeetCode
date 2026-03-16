from typing import List
# class Solution:
#     def canJump(self, nums: List[int]) -> bool:
#         index = 0
#         while index < len(nums)-1:
#             if nums[index] == 0:
#                 return False
#             far = 0
#             for i in range(nums[index]):
#                 if index+i+1 > len(nums)-1:
#                     break
#                 step = nums[index+i+1] + i
#                 if nums[index+i+1] + i + 1 > far:
#                     far =  step
#                     next_index = index+i+1
#             index = next_index
#         return True

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        n, rightmost = len(nums), 0
        for i in range(n):
            if i <= rightmost:
                rightmost = max(rightmost, i + nums[i])
                if rightmost >= n - 1:
                    return True
        return False


nums = [2,0]
print(Solution().canJump(nums))



