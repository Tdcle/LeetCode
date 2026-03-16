var twoSum = function(nums, target) {
    const map = []
    for(let i=0; i<nums.length; i++){
        index = map.indexOf(target - nums[i])
        if(index!=-1){
            return [index,i]
        }else{
            map.push(nums[i])
        }
    }
};


nums = [3,2,4]
ans = twoSum(nums,6)
console.log(ans)