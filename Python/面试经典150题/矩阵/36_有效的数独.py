from typing import List
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        map_row = [[] for i in range(9)]
        map_col = [[] for i in range(9)]
        map_box = [[[] for i in range(3)] for i in range(3)]
        for i in range(9):
            for j in range(9):
                if board[i][j] != '.':
                    if board[i][j] in map_row[i] or board[i][j] in map_col[j] or board[i][j] in map_box[i//3][j//3]:
                        return False
                    else:
                        map_row[i].append(board[i][j])
                        map_col[j].append(board[i][j])
                        map_box[i//3][j//3].append(board[i][j])
        return True

board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

print(Solution().isValidSudoku(board))


