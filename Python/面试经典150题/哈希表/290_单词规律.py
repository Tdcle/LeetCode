class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        p_to_s = {}
        s_to_p = {}
        s_list = s.split(' ')
        if len(pattern) != len(s_list):
            return False
        for i in range (len(pattern)):
            if pattern[i] in p_to_s:
                if p_to_s[pattern[i]] != s_list[i]:
                    return False
            else:
                if s_list[i] in s_to_p:
                    return False
                p_to_s[pattern[i]] = s_list[i]
                s_to_p[s_list[i]] = pattern[i]
        return True