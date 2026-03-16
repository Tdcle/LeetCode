var Trie = function() {
    this.children = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.children;
    for(let char of word){
        if(!node[char]){
            node[char] = {};
        }
        node = node[char];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const node = this.searchPrefix(word);
    return node !== false && node.isEnd === true;
};

Trie.prototype.searchPrefix = function(prefix) {
    let node = this.children;
    for (const ch of prefix) {
        if (!node[ch]) {
            return false;
        }
        node = node[ch];
    }
    return node
}

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.searchPrefix(prefix) !== false;
};

word = "apple"
prefix = "app"
var obj = new Trie()
obj.insert(word)
var param_2 = obj.search(word)
var param_3 = obj.startsWith(prefix)
console.log(param_2, param_3)