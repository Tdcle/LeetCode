from typing import List
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        p_s = 0
        p_t = 0
        len_s = len(s)
        len_t = len(t)
        while p_s<len_s and p_t<len_t:
            if s[p_s] == t[p_t]:
                p_s += 1
                p_t += 1
            else:
                p_t += 1
        return p_s == len_s

s = "abc"
t = "ahbgdc"
print(Solution().isSubsequence(s, t))

