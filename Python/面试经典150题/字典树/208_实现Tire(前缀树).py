class Trie:

    def __init__(self):
        self.map = {}
    def insert(self, word: str) -> None:
        word_list = list(word)
        start = self.map
        for str in word_list:
            if str in start:
                start = start[str]
            else:
                if str not in start:
                    start[str] = {}
                start = start[str]
        start['#'] = {}

    def search(self, word: str) -> bool:
        word_list = list(word)
        start = self.map
        for str in word_list:
            if str in start:
                start = start[str]
            else:
                return False
        if '#' in start:
            return True
        else:
            return False

    def startsWith(self, prefix: str) -> bool:
        word_list = list(prefix)
        start = self.map
        for str in word_list:
            if str in start:
                start = start[str]
            else:
                return False
        return True

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert("word")
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)

obj = Trie()
obj.insert("apple")
print(obj.search("apple"))
print(obj.search("app"))
obj.insert("app")
print(obj.search("app"))