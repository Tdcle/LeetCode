from typing import List

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        def partition(left, right):
            # 选择最右边的元素作为基准
            pivot = nums[right]
            store_index = left

            # 将比 pivot 大的元素移到左边
            for i in range(left, right):
                if nums[i] > pivot:
                    nums[store_index], nums[i] = nums[i], nums[store_index]
                    store_index += 1

            # 将 pivot 放到正确的位置
            nums[store_index], nums[right] = nums[right], nums[store_index]
            return store_index

        def quick_select(left, right, k_smallest):
            if left >= right:
                return nums[left]

            # 分区，返回 pivot 的位置
            pivot_index = partition(left, right)

            # 根据 pivot 的位置决定在哪个区间继续查找
            if pivot_index == k_smallest:
                return nums[pivot_index]
            elif pivot_index > k_smallest:
                return quick_select(left, pivot_index - 1, k_smallest)
            else:
                return quick_select(pivot_index + 1, right, k_smallest)

        # 第 k 个最大元素等于第 (len(nums) - k) 个最小元素（从 0 开始）
        return quick_select(0, len(nums) - 1, k - 1)


# 测试示例
print(Solution().findKthLargest([3, 2, 1, 5, 6, 4], 2))  # 输出：5
print(Solution().findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))  # 输出：4
