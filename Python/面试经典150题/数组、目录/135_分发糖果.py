from typing import List


class Solution:
    def candy(self, ratings: List[int]) -> int:
        n = len(ratings)
        # 创建 [rating, index] 的配对列表
        arr = []
        for i in range(n):
            arr.append([ratings[i], i])

        # 按 rating 大小排序
        arr.sort()  # 这就是你要的排序方法！

        # 初始化糖果数组
        candies = [1] * n

        # 按排序后的顺序分配糖果
        for rating, i in arr:
            # 检查左邻居
            if i > 0 and ratings[i] > ratings[i - 1]:
                candies[i] = max(candies[i], candies[i - 1] + 1)
            # 检查右邻居
            if i < n - 1 and ratings[i] > ratings[i + 1]:
                candies[i] = max(candies[i], candies[i + 1] + 1)

        return sum(candies)


# 测试
ratings = [1, 2, 2]
print(Solution().candy(ratings))
