var removeDuplicates = function(nums) {
    let gap = 0, count=0
    for(let i=1; i<nums.length; i++){
        if(nums[i] === nums[i-1]){
            count++
            if(count > 1)
                gap += 1
            nums[i - gap] = nums[i]
        }
        else{
            nums[i - gap] = nums[i]
            count = 0
        }
    }
    return nums.length - gap
};

nums = [1,1,1,1,2,2,3]
console.log(removeDuplicates(nums));
console.log(nums);