var reverseWords = function(s) {
    let arr = s.split(' ').filter(item => item !== '')
    let left = 0, right = arr.length - 1
    while(left < right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
    return arr.join(' ')
};

s = "the  sky is blue"
console.log(reverseWords(s))


// var reverseWords = function(s) {
//     return s.trim().split(/\s+/).reverse().join(' ');
// };

// \s 表示匹配任何空白字符，包括：
// 空格
// 制表符 (Tab)
// 换行符
// 回车符
// 等其他空白字符

// + 表示匹配前面的模式一次或多次