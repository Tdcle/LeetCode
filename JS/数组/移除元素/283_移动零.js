var moveZeroes = function(nums) {
    let nums_0 = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            nums_0 ++
            continue
        }else{
            nums[i-nums_0] = nums[i]
            if(nums_0 !== 0)
                nums[i] = 0
        }
    }
};

nums = [0,1,0,3,12]
console.log(moveZeroes(nums))