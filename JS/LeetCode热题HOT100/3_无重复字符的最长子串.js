var lengthOfLongestSubstring = function(s) {
    let pos = 0
    let present = []
    max_sub_len = 0
    while(pos<s.length){
        now = s[pos]
        index = present.indexOf(now)
        if(index == -1){
            present.push(now)
            max_sub_len = Math.max(max_sub_len,present.length)
        }else{
            present = present.slice(index + 1)
            present.push(now)
        }
        pos += 1
    }
    return max_sub_len
};

ans = lengthOfLongestSubstring("pwwkew")
console.log(ans)