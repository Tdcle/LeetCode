class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []
        path_list = path.split('/')
        for p in path_list:
            if not p or p == '.':
                continue
            elif p == '..':
                if len(stack) > 0:
                    stack.pop()
            else:
                stack.append(p)
        ans = '/' + '/'.join(stack)
        return ans

path = "/../"
print(Solution().simplifyPath((path)))