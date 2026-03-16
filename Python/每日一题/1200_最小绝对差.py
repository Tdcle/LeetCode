class Solution:
    def minimumAbsDifference(self, arr):
        arr.sort()
        map = {}
        Min = float('inf')
        for i in range(len(arr)-1):
            diff = arr[i+1]-arr[i]
            if diff not in map:
                map[diff] = []
            map[diff].append([arr[i], arr[i+1]])
            Min = min(Min, diff)
        return map[Min]


arr = [4,2,1,3]
print(Solution().minimumAbsDifference(arr))