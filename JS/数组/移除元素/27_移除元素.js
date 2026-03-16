var removeElement = function(nums, val) {
    let gap = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] === val){
            gap += 1
            continue
        }else{
            nums[i-gap] = nums[i]
        }
    }
    return nums.length - gap
};

nums = [3,2,2,3]
console.log(removeElement(nums, 3))