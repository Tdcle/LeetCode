var isHappy = function(n) {
    let set = new Set()
    set.add(n)
    while(n !== 1){
        let sum = 0
        while(n){
            let yu = n % 10
            sum += yu * yu
            n = Math.floor(n / 10) 
        }
        if(set.has(sum)){
            return false 
        }else{
            set.add(sum)
        }
        n = sum
    }
    return true
};

console.log(isHappy(19))


// 使用 “快慢指针” 思想，找出循环：“快指针” 每次走两步，“慢指针” 每次走一步，当二者相等时，即为一个循环周期。此时，判断是不是因为 1 引起的循环，是的话就是快乐数，否则不是快乐数。
// 注意：此题不建议用集合记录每次的计算结果来判断是否进入循环，因为这个集合可能大到无法存储；另外，也不建议使用递归，同理，如果递归层次较深，会直接导致调用栈崩溃。不要因为这个题目给出的整数是 int 型而投机取巧。
