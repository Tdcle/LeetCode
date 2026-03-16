var sortedSquares = function(nums) {
    pos = nums.length
    for(let i=0; i<nums.length; i++){
        if(nums[i]>=0){
            pos = i
            break
        }
    }
    let ans = []
    let left = pos-1
    let right = pos
    while(true){
        if(right === nums.length){
            for(let i=left; i>=0; i--){
                ans.push(nums[i]*nums[i])
            }
            break
        }else if(left === -1){
            for(let i=right; i<nums.length; i++){
                ans.push(nums[i]*nums[i])
            }
            break
        }else{
            if(nums[left]+nums[right]>=0){
                ans.push(nums[left]*nums[left])
                left--
            }else{
                ans.push(nums[right]*nums[right])
                right++
            }
        }
    }
    return ans
};

nums = [-1]
console.log(sortedSquares(nums))