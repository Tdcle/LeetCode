from typing import List


class Solution:
    def separateSquares(self, squares: List[List[int]]) -> float:
        total_area = 0
        events = []

        for sq in squares:
            y, l = sq[1], sq[2]
            total_area += l * l
            events.append((y, l, 1))
            events.append((y + l, l, -1))

        # 按y坐标排序
        events.sort(key=lambda x: x[0])

        covered_width = 0.0  # 当前扫描线下所有底边之和
        curr_area = 0.0  # 当前累计面积
        prev_height = 0.0  # 前一个扫描线的高度

        for y, l, delta in events:
            diff = y - prev_height
            # 两条扫描线之间新增的面积
            area = covered_width * diff
            # 如果加上这部分面积超过总面积的一半
            if 2 * (curr_area + area) >= total_area:
                return prev_height + (total_area - 2 * curr_area) / (2 * covered_width)
            # 更新宽度：开始事件加宽度，结束事件减宽度
            covered_width += delta * l
            curr_area += area
            prev_height = y

        return 0.0



print(Solution().separateSquares([[0,0,2],[1,1,1]]))