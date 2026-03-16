const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
        if(s[i] !== s[j]) return false;
    }
    return true;
}

var partition = function(s) {
    const res = [], path = [], len = s.length;
    function backtracking(startIndex) {
        // 字符串全部分割完，直接将当前路径加入结果集
        if(startIndex >= len) {
            res.push(Array.from(path));
            return;
        }
        for(let i = startIndex; i < len; i++) {
            // 不是回文串则跳过
            if(!isPalindrome(s, startIndex, i)) continue;
            // 将当前回文串加入路径
            path.push(s.slice(startIndex, i + 1));
            // 继续回溯，处理下一个字符
            backtracking(i + 1);
            // 回溯，移除当前回文串
            path.pop();
        }
    }
    backtracking(0);
    return res;
};

console.log(partition("aab")); // [["a","a","b"],["aa","b"]]