var reverseStr = function(s, k) {
    let pre = 0
    const sArr = s.split('') // 新增：将字符串转为数组
    const reverse = (l, r) => {
        while(l < r){
            [sArr[l], sArr[r]] = [sArr[r], sArr[l]] // 修改：操作数组而非字符串
            l++
            r--
        }
    }
    while(pre+k < s.length){
        reverse(pre, pre+k-1)
        pre += 2*k
    }
    if(pre < sArr.length){ // 修改：使用数组长度
        reverse(pre, sArr.length-1)
    }
    return sArr.join('') // 修改：将数组转回字符串
};

s = "abcdefg", k = 2
console.log(reverseStr(s, k))