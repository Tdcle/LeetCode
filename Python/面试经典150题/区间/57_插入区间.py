from typing import List
# class Solution:
#     def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
#         if len(intervals) == 0:
#             return [newInterval]
#         ans = []
#         start, end = -1, -1
#         for i in range(len(intervals)):
#             if i>0 and intervals[i-1][1] < newInterval[0] and intervals[i][0] > newInterval[1]:
#                 ans.append(newInterval)
#                 start = -2
#             if not(intervals[i][1] < newInterval[0] or intervals[i][0] > newInterval[1]):
#                 if start < 0:
#                     start = i
#                     end = i
#                     continue
#                 else:
#                     end = i
#             else:
#                 if start >= 0:
#                     ans.append([min(newInterval[0],intervals[start][0]),max(newInterval[1],intervals[end][1])])
#                     start = -2
#                 ans.append(intervals[i])
#         if start == -1:
#             if newInterval[0] > intervals[-1][1]:
#                 ans.append(newInterval)
#             else:
#                 ans.insert(0, newInterval)
#         elif start >= 0:
#             ans.append([min(newInterval[0], intervals[start][0]), max(newInterval[1], intervals[end][1])])
#         return ans

class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        left, right = newInterval
        placed = False
        ans = list()
        for li, ri in intervals:
            if li > right:
                # 在插入区间的右侧且无交集
                if not placed:
                    ans.append([left, right])
                    placed = True
                ans.append([li, ri])
            elif ri < left:
                # 在插入区间的左侧且无交集
                ans.append([li, ri])
            else:
                # 与插入区间有交集，计算它们的并集
                left = min(left, li)
                right = max(right, ri)

        if not placed:
            ans.append([left, right])
        return ans


intervals = [[3,5],[12,15]]
newInterval = [6,6]
print(Solution().insert(intervals,newInterval))
