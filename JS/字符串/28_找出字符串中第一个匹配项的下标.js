var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    // 构建next数组
    const getNext = (needle) => {
        let next = [0];  // next[0]必然为0
        let prefix = 0;  // 前缀末尾索引
        for (let i = 1; i < needle.length; i++) {
            // 前缀末尾和当前位置不匹配，需要回退
            while (prefix > 0 && needle[prefix] !== needle[i]) {
                prefix = next[prefix - 1];
            }
            // 前缀末尾和当前位置匹配，前缀长度加1
            if (needle[prefix] === needle[i]) {
                prefix++;
            }
            next[i] = prefix;
        }
        return next;
    }
    const next = getNext(needle);
    let j = 0;  // needle的索引
    // 开始匹配
    for (let i = 0; i < haystack.length; i++) {
        // 不匹配时，回退到最长相等前后缀的位置
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }
        // 当前字符匹配成功
        if (haystack[i] === needle[j]) {
            j++;
        }
        // 完全匹配成功
        if (j === needle.length) {
            return i - needle.length + 1;
        }
    }
    return -1;
};

haystack = "sadbutsad", needle = "sad"
console.log(strStr(haystack, needle))