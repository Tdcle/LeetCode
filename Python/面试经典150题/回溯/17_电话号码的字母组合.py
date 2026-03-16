from typing import List
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        map = {
            '2': ['a','b','c'],
            '3': ['d','e','f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z']
        }
        ans = []
        l = len(digits)
        def dfs(now, pos):
            if pos >= l:
                ans.append(now)
                return
            for next in map[digits[pos]]:
                dfs(now+next, pos+1)
        dfs('', 0)
        return ans

print(Solution().letterCombinations('23'))
