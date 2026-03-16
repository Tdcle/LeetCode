from typing import List


class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        if not board or not board[0]:
            return

        m, n = len(board), len(board[0])
        direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]

        def dfs(i, j):
            """从边界的'O'开始 DFS，标记所有相连的'O'为'#'"""
            if i < 0 or i >= m or j < 0 or j >= n or board[i][j] != 'O':
                return

            board[i][j] = '#'
            for x, y in direction:
                dfs(i + x, j + y)

        for i in range(m):
            for j in range(n):
                if board[i][j] == 'O' and (i == 0 or i == m - 1 or j == 0 or j == n - 1):
                    dfs(i, j)

        for i in range(m):
            for j in range(n):
                if board[i][j] == 'O':
                    board[i][j] = 'X'
                elif board[i][j] == '#':
                    board[i][j] = 'O'


board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Solution().solve(board)
print(board)
