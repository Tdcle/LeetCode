class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        map = set()
        left, right = 0, 0
        Len = 0
        s_list = list(s)
        while right < len(s_list):
            if s_list[right] not in map:
                map.add(s_list[right])
                Len = max(Len, right-left + 1)
            else:
                while s_list[left] != s_list[right]:
                    map.remove(s_list[left])
                    left += 1
                left += 1
            right += 1
        return Len

s = "abcabcbb"
print(Solution().lengthOfLongestSubstring(s))