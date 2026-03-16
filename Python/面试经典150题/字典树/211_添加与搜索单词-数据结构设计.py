class WordDictionary:

    def __init__(self):
        self.map = {}
    def addWord(self, word: str) -> None:
        start = self.map
        for str in word:
            if str in start:
                start = start[str]
            else:
                if str not in start:
                    start[str] = {}
                start = start[str]
        start['#'] = {}
    def search(self, word: str) -> bool:
        start = self.map
        l = len(word)
        def dfs(now, deep):
            if deep == l:
                if '#' in now:
                    return True
                else:
                    return False
            ans = False
            if word[deep] == '.':
                for key in now:
                    ans = ans or dfs(now[key],deep+1)
            else:
                if word[deep] in now:
                    ans = dfs(now[word[deep]],deep+1)
            return ans
        return dfs(start, 0)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)

obj = WordDictionary()
obj.addWord("bad")
obj.addWord("dad")
obj.addWord("mad")
print(obj.search("pad"))
print(obj.search("bad"))
print(obj.search(".ad"))
print(obj.search("b.."))
