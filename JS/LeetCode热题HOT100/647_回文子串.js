var countSubstrings = function(s) {
    let count = 0;
    const extend = (c1, c2) => {
        let l = 0
        while(c1-l>=0 && c2+l< s.length && s[c1-l]===s[c2+l]){
            count++;
            l++;
        }
    }
    for(let i=0; i<s.length; i++) {
        // 以 s[i] 为中心的奇数回文串
        extend(i, i);
        // 以 s[i] 和 s[i+1] 为中心的偶数回文串
        extend(i, i+1);
    }
    return count;
};
console.log(countSubstrings("abc")); // 3
console.log(countSubstrings("aaa")); // 6