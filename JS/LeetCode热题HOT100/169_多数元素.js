var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0]
    let map = new Map()
    for(let num of nums){
        if(map.has(num)){
            map.set(num, map.get(num)+1)
            if(map.get(num) > nums.length/2) return num
        }else{
            map.set(num, 1)
        }
    }
};

nums = [3,3,2]
console.log(majorityElement(nums))