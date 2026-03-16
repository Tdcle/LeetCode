/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxDp = Array(nums.length).fill(0)
    let minDp = Array(nums.length).fill(0)
    maxDp[0] = nums[0]
    minDp[0] = nums[0]
    for(let i=1; i<nums.length; i++){
        maxDp[i] = Math.max(maxDp[i-1]*nums[i], minDp[i-1]*nums[i], nums[i])
        minDp[i] = Math.min(minDp[i-1]*nums[i], maxDp[i-1]*nums[i], nums[i])
    }
    return Math.max(...maxDp)
};
console.log(maxProduct([2,3,-2,4])); // 6