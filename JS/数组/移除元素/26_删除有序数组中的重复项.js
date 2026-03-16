var removeDuplicates = function(nums) {
    let map = new Map()
    let k = 0
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            continue
        }else{
            nums[k] = nums[i]
            map.set(nums[i],1)
            k++
        }
    }
    return k
};

nums = [3,2,2,3]
console.log(removeDuplicates(nums))