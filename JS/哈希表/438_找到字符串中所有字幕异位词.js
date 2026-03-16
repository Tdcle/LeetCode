var findAnagrams = function(s, p) {
    let arrp = new Array(26).fill(0)
    for(let str of p){
        arrp[str.charCodeAt() - 'a'.charCodeAt()]++
    }
    let l = p.length
    let arrs = new Array(26).fill(0)
    let ans = []
    for(let i = 0; i+l <= s.length; i++){
        if(i===0){
            for(let j = 0; j<l; j++){
                arrs[s[j].charCodeAt() - 'a'.charCodeAt()]++
            }
            if(arrs.toString() === arrp.toString()){
                ans.push(0)
            }
            pre = s[0]
        }else{
            arrs[s[i-1].charCodeAt() - 'a'.charCodeAt()]--
            arrs[s[i+l-1].charCodeAt() - 'a'.charCodeAt()]++
            if(arrs.join('') === arrp.join('')){
                ans.push(i)
            }
        }
    }
    return ans
};

s = "cbaebabacd"
p = "abc"
console.log(findAnagrams(s, p))