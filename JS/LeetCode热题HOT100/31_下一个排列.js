var nextPermutation = function(nums) {
    let pos = -1
    for(let i=nums.length-1; i>0; i--){
        if(nums[i] > nums[i-1]) {
            pos = i-1
            break
        }
    }
    if(pos === -1) {
        nums.reverse()
        return nums
    }
    let flag = false
    for(let i=nums.length-1; i>(pos + nums.length-1)/2; i--){
        let j = nums.length -1 - i
        if(nums[i]>nums[pos] && !flag){
            let t = nums[i]
            nums[i] = nums[pos]
            nums[pos] = t
            flag = true
        }
        if(nums[pos+j+1]>nums[pos] && !flag && nums[pos+j+2] <= nums[pos]){
            let t = nums[pos]
            nums[pos] = nums[pos+j+1]
            nums[pos+j+1] = t
            flag = true
        }
        let temp = nums[i]
        nums[i] = nums[pos+j+1]
        nums[pos+j+1] = temp
    }
    return nums
};
console.log(nextPermutation([1,2,3])) // [1,3,2]
console.log(nextPermutation([3,2,1])) // [1,2,3]
console.log(nextPermutation([1,1,5])) // [1,5,1]
console.log(nextPermutation([1])) // [1]
console.log(nextPermutation([1,3,2])) // [2,1,3]
console.log(nextPermutation([2,3,1])) // [3,1,2]
console.log(nextPermutation([5,4,7,5,3,2])) // [5,5,2,3,4,7]
