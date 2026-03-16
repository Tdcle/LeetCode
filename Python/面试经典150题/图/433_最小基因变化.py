from typing import List
class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        if startGene == endGene:
            return 0

        def diffOne(a,b):
            return sum(x != y for x,y in zip(a,b)) == 1

        m = len(bank)
        adj = [[] for _ in range(m)]
        endIndex = -1
        for i,s in enumerate(bank):
            if s == endGene:
                endIndex = i
            for j in range(i+1, m):
                if diffOne(s, bank[j]):
                    adj[i].append(j)
                    adj[j].append(i)
        if endIndex == -1:
            return -1

        q = [i for i,s in enumerate(bank) if diffOne(s, startGene)]
        vis = set(q)
        step = 1
        while q:
            tmp = q
            q = []
            for index in tmp:
                if index == endIndex:
                    return step
                else:
                    for next in adj[index]:
                        if next not in vis:
                            vis.add(next)
                            q.append(next)
            step += 1
        return -1


start = "AACCGGTT"
end = "AAACGGTA"
bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
print(Solution().minMutation(start, end, bank))