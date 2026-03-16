class Solution:
    def addBinary(self, a: str, b: str) -> str:
        n1 = len(a)
        n2 = len(b)
        k = 0
        ans = ''
        for i in range(max(n1, n2)):
            if i >= n1:
                now = ord(b[n2-i-1]) - ord('0') + k
                k =  int(now / 2)
                ans += str(now % 2)
                continue
            if i >= n2:
                now = ord(a[n1-i-1]) - ord('0') + k
                k = int(now / 2)
                ans += str(now % 2)
                continue
            now = ord(a[n1-i-1]) - ord('0') + ord(b[n2-i-1]) - ord('0') + k
            k = int(now / 2)
            ans += str(now % 2)
        if k:
            ans += str(k)
        ans = ans[::-1]
        return ans

print(Solution().addBinary('11','1'))