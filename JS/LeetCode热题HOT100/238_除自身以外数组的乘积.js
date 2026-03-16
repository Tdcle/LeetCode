var productExceptSelf = function(nums) {
    let t = 1, zeroCont = 0
    for(let i of nums) {
        if(i !== 0) t *= i
        else zeroCont++
    }
    let res = Array(nums.length).fill(0)
    for(let i = 0; i < nums.length; i++) {
        if(zeroCont > 1) res[i] = 0
        else if(zeroCont === 1) {
            if(nums[i] === 0) res[i] = t
            else res[i] = 0
        } else {
            res[i] = t / nums[i]
        }
    }
    return res
};
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // [0,0,9,0,0]