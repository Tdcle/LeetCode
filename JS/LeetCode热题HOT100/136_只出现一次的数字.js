var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0]
    let map = new Map()
    for(let i=0; i<nums.length; i++){
        num = nums[i]
        if(map.has(num)){
            map.set(num, map.get(num)+1)
        }else{
            map.set(num, 1)
        }
    }
    for(let [key, value] of map){
        if(value === 1) return key
    }
};

let nums = [1]
console.log(singleNumber(nums))