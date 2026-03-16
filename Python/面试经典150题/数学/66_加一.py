from typing import List
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        n = len(digits)
        a = digits[-1] + 1
        digits[-1] = a % 10
        carry = int(a / 10)
        i = 2
        while carry:
            if i > n:
                digits.insert(0,1)
                break
            else:
                a = digits[-i] + 1
                digits[-i] = a % 10
                carry = int(a / 10)
            i+=1
        return digits

print(Solution().plusOne([9,9]))