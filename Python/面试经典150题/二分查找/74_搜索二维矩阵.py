from typing import List

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        l1, r1 = 0, m-1
        target_row = m-1
        while l1<=r1:
            mid = l1+int((r1-l1) >> 1)
            if matrix[mid][0] > target:
                r1 = mid - 1
            else:
                target_row = mid
                l1 = mid + 1
        l2, r2 = 0, n-1
        while l2<=r2:
            mid = l2+int((r2-l2) >> 1)
            if matrix[target_row][mid] == target:
                return True
            elif matrix[target_row][mid] > target:
                r2 = mid - 1
            else:
                l2 = mid + 1
        return False

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
print(Solution().searchMatrix(matrix, 8))