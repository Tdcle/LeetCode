from typing import List
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}
        ans = []
        for str in strs:
            sorted_s = ''.join(sorted(str))
            if sorted_s in map:
                map[sorted_s].append(str)
            else:
                map[sorted_s] = [str]
        for key,values in map.items():
            ans.append(values)
        return ans

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(Solution().groupAnagrams(strs))