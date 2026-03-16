var fourSum = function(nums, target) {
    const res = []
    let len = nums.length
    nums.sort((a, b) => a - b)
    for(let i=0; i<len-3; i++){
        if(i>0 && nums[i] === nums[i-1]) continue
        for(let j = i+1; j<len-2; j++){
            if(j>i+1 && nums[j] === nums[j-1]) continue
            let l = j+1, r = len-1
            while(l < r){
                let sum = nums[i] + nums[j] + nums[l] + nums[r]
                if(sum < target) l++
                else if(sum > target) r--
                else {
                    res.push([nums[i], nums[j], nums[l], nums[r]])
                    while(nums[l+1] === nums[l] && l<r) l++
                    while(nums[r+1] === nums[r] && l<r) r--
                    l++
                    r--
                }
            }
        }
    }
    return res
};

nums = [1,0,-1,0,-2,2]
target = 0
console.log(fourSum(nums, target))