var minSubArrayLen = function(target, nums) {
    let left = 0,ans = Infinity
    let sum = 0
    for(let i=0; i<nums.length; i++){
        sum+=nums[i]
        if(sum >= target){
            while(sum - nums[left] >= target){
                sum -= nums[left]
                left ++
            }
            ans = Math.min(i-left+1, ans)
        }
    }
    return ans === Infinity ? 0 : ans
};

nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(7, nums))