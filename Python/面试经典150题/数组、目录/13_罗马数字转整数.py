from typing import List
# class Solution:
#     def romanToInt(self, s: str) -> int:
#         n=len(s)
#         s_list = list(s)
#         map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
#         index = 0
#         ans = 0
#         while index <= n-1:
#             if index == n-1:
#                 ans += map[s_list[index]]
#                 break
#             if s_list[index] == 'I' and s_list[index+1] == 'V':
#                 ans += 4
#                 index += 2
#             elif s_list[index] == 'I' and s_list[index+1] == 'X':
#                 ans += 9
#                 index += 2
#             elif s_list[index] == 'X' and s_list[index+1] == 'L':
#                 ans += 40
#                 index += 2
#             elif s_list[index] == 'X' and s_list[index+1] == 'C':
#                 ans += 90
#                 index += 2
#             elif s_list[index] == 'C' and s_list[index+1] == 'D':
#                 ans += 400
#                 index += 2
#             elif s_list[index] == 'C' and s_list[index+1] == 'M':
#                 ans += 900
#                 index += 2
#             else:
#                 ans += map[s_list[index]]
#                 index += 1
#         return ans

class Solution:
    def romanToInt(self, s: str) -> int:
        n=len(s)
        s_list = list(s)
        ans = 0
        map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
        for i in range(n):
            value = map[s_list[i]]
            if i < n-1 and value < map[s_list[i+1]]:
                ans -= value
            else:
                ans += value
        return ans


s="III"
print(Solution().romanToInt(s))