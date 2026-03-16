var prefixesDivBy5 = function(nums) {
    let res = []
    let now = nums[0]
    res.push(now%5===0)
    for(let i=1;i<nums.length;i++){
        now = ((now<<1) + nums[i])%5
        res.push(now===0)
    }
    return res
};

console.log(prefixesDivBy5([1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1])); // [true,false,false]