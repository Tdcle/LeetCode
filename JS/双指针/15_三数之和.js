var threeSum = function(nums) {
    const res = []
    let len = nums.length
    nums.sort((a, b) => a - b)
    for(let i=0; i<len-2; i++){
        if(nums[i]>0)   break
        let now = nums[i], l = i+1, r = len-1
        if(now === nums[i-1]) continue
        while(l < r){
            let lnum = nums[l], rnum = nums[r]
            let sum = now + lnum + rnum
            if(sum < 0) l++
            else if(sum > 0) r--
            else {
                res.push([now, lnum, rnum])
                while(nums[l+1] === lnum && l<r) l++
                while(nums[r+1] === rnum && l<r) r--
                l++
                r--
            }
        }
    }
    return res
};

nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))