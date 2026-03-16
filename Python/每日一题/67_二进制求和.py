class Solution:
    def addBinary(self, a: str, b: str) -> str:
        ans = []
        a = a[::-1]
        b = b[::-1]

        n = max(len(a), len(b))
        carry = 0
        for i in range(n):
            carry += int(a[i]) if i < len(a) else 0
            carry += int(b[i]) if i < len(b) else 0
            ans.append(str(carry % 2))
            carry //= 2
            # carry = carry //2

        if carry:
            ans.append('1')

        return ''.join(ans)[::-1]


a = '11'
b = '1'
print(Solution().addBinary(a,b))
