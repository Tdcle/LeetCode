from typing import List
import collections
class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        total = len(board) ** 2
        nums = [0]
        for i in range(len(board)):
            row = board[len(board) - 1 - i]
            if i % 2:
                row.reverse()
            nums.extend(row)
        cost_so_far = [float('inf')] * (total + 1)
        cost_so_far[1] = 0
        frontier = collections.deque()
        frontier.append(1)
        while frontier:
            n = frontier.popleft()
            cost = cost_so_far[n]
            if n == total:
                return cost
            for m in range(n + 1, min(total, n + 6) + 1):
                if nums[m] != -1:
                    m = nums[m]
                if cost_so_far[m] > cost + 1:
                    frontier.append(m)
                    cost_so_far[m] = cost + 1
        return -1