class Solution:
    def numSteps(self, s: str) -> int:
        l = len(s)
        ans = 0
        while s != '1':
            if s[l-1] == '0':
                s = s[:l-1]
                l = l - 1
                ans+=1
            else:
                s = s[:l-1]
                l = l - 1
                # 将字符串转换为列表以便修改
                s_list = list(s)
                # 从尾到头遍历
                for i in range(l - 1, -1, -1):
                    if s_list[i] == '0':
                        s_list[i] = '1'
                        break
                    else:
                        s_list[i] = '0'
                        if i == 0:
                            s_list.insert(0, '1')
                            l = l + 1
                            break
                # 转换回字符串
                s = ''.join(s_list)
                ans+=2
        return ans

s="1101"
print(Solution().numSteps(s))