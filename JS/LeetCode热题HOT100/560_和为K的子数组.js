var subarraySum = function(nums, k) {
    const mp = new Map();
    mp.set(0, 1);
    let count = 0, pre = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) {
            count += mp.get(pre - k);
        }
        if (mp.has(pre)) {
            mp.set(pre, mp.get(pre) + 1);
        } else {
            mp.set(pre, 1);
        }
    }
    return count;
};

console.log(subarraySum([1,1,1], 2)) // 2
console.log(subarraySum([1,2,3], 3)) // 2
console.log(subarraySum([1], 0)) // 0
console.log(subarraySum([1,-1,0], 0)) // 3