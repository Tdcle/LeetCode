import collections
from typing import List
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        indeg = [0] * numCourses
        map = collections.defaultdict(list)
        ans = []
        for require in prerequisites:
            map[require[1]].append(require[0])
            indeg[require[0]] += 1

        queue = collections.deque()
        for i in range(numCourses):
            if indeg[i] == 0:
                queue.append(i)
        while queue:
            now = queue.popleft()
            ans.append(now)
            for i in map[now]:
                indeg[i] -= 1
                if indeg[i] == 0:
                    queue.append(i)
        if len(ans) != numCourses:
            return []
        return ans

numCourses = 3
prerequisites = [[1,0],[1,2],[0,1]]
print(Solution().findOrder(numCourses, prerequisites))