class Solution:
    def isPalindrome(self, s: str) -> bool:
        s.lower()
        s_cleaned = ''.join(char.lower() for char in s if char.isalnum())
        left, right = 0, len(s_cleaned) - 1
        while left <= right:
            if s_cleaned[left] != s_cleaned[right]:
                return False
            left += 1
            right -= 1
        return True

s = "A man, a plan, a canal: Panama"
print(Solution().isPalindrome(s))

