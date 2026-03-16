from typing import List
# class Solution:
#     def rotate(self, nums: List[int], k: int) -> None:
#         """
#         Do not return anything, modify nums in-place instead.
#         """
#         n = len(nums)
#         k = k % n
#         nums[:] = nums[n-k:] + nums[:n-k]

# 数组翻转
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k = k % n

        # def reverse(start: int, end: int) -> None:
        #     """翻转数组指定范围的元素"""
        #     while start < end:
        #         nums[start], nums[end] = nums[end], nums[start]
        #         start += 1
        #         end -= 1
        #
        # # 三步翻转法
        # reverse(0, n - 1)
        # reverse(0, k - 1)
        # reverse(k, n - 1)

        # 或者使用索引赋值
        nums[:] = nums[::-1]  # 整体翻转
        nums[:k] = nums[:k][::-1]  # 前k个元素翻转
        nums[k:] = nums[k:][::-1]

nums = [1,2,3,4,5,6,7]
Solution().rotate(nums, 3)