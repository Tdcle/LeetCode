class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        map = {
            ')': '(',
            '}': '{',
            ']': '['
        }
        for str in s:
            if len(stack) == 0:
                stack.append(str)
                continue
            if str in [']','}',')'] and map[str] == stack[-1]:
                stack.pop()
            else:
                stack.append(str)
        return len(stack) == 0

s = "([])"
print(Solution().isValid(s))