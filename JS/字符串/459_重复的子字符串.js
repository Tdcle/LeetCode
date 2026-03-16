var repeatedSubstringPattern = function(s) {
    arr = s.split("")
    const getNext = (arr) => {
        let next = [0];  // next[0]必然为0
        let prefix = 0;  // 前缀末尾索引
        for (let i = 1; i < arr.length; i++) {
            // 前缀末尾和当前位置不匹配，需要回退
            while (prefix > 0 && arr[prefix] !== arr[i]) {
                prefix = next[prefix - 1];
            }
            // 前缀末尾和当前位置匹配，前缀长度加1
            if (arr[prefix] === arr[i]) {
                prefix++;
            }
            next[i] = prefix;
        }
        return next;
    }
    const next = getNext(arr);
    zeronum = 0
    for(let num of next){
        if(num === 0){
            zeronum++
        }
    }
    if(next[next.length - 1] !== 0 && next.length % (next.length - next[next.length - 1]) === 0){
        return true
    }
    return false
};