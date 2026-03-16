var longestPalindrome = function(s) {
    function expandAroundCenter(left, right) {
        while(left>=0 && right<s.length && s[left] === s[right]){
            left--
            right++
        }
        return right - left - 1
    }
    let l = 0, r = 0, maxLen = 0
    for(let i=0; i<s.length; i++){
        let len1 = expandAroundCenter(i, i)
        let len2 = expandAroundCenter(i, i+1)
        if(maxLen < len1 && len1 > len2){
            l = i - (len1-1)/2
            r = i + (len1-1)/2
            maxLen = len1
        }
        if(maxLen < len2 && len2 > len1){
            l = i - (len2-2)/2
            r = i + 1 + (len2-2)/2
            maxLen = len2
        }
    }
    return s.substring(l, r+1)
};
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"