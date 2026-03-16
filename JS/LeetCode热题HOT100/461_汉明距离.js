var hammingDistance = function(x, y) {
    const ten_to_two = (num) => {
        let ans = [];
        let b = num;
        while (num >= 2) {
            let a = num % 2;
            // 使用 Math.floor 对除法结果向下取整
            b = num = Math.floor(num / 2);
            ans.push(a);
        }
        ans.push(b);
        return ans
    };
    let x_t = ten_to_two(x)
    let y_t = ten_to_two(y)
    let len = 0
    if(x_t.length > y_t.length){
        len = x_t.length
        t = x_t.length - y_t.length
        for(let i=0; i< t; i++){
            y_t.push(0)
        }
    }else{
        len = y_t.length
        t = y_t.length - x_t.length
        for(let i=0; i< t; i++){
            x_t.push(0)
        }
    }
    let cnt = 0
    for(let i=0; i<len; i++){
        if(x_t[i]!==y_t[i]){
            cnt++
        }
    }
    return cnt
};


// 题解
// var hammingDistance = function(x, y) {
//     let s = x ^ y, ret = 0;
//     while (s != 0) {
//         ret += s & 1;
//         s >>= 1;
//     }
//     return ret;
// };

// var hammingDistance = function(x, y) {
//     let s = x ^ y, ret = 0;
//     while (s != 0) {
//         s &= s - 1;
//         ret++;
//     }
//     return ret;
// };


console.log(hammingDistance(1, 4))