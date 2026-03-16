from typing import List
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        Min = float('inf')
        ans = 0
        for price in prices:
            Min = min(Min, price)
            ans = max(ans, price - Min)
        return ans

prices=[7,1,5,3,6,4]
print(Solution().maxProfit(prices))