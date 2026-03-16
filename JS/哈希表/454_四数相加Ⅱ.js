var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map1 = new Map()
    let map2 = new Map()
    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            let sum = nums1[i] + nums2[j]
            map1.set(sum, map1.has(sum) ? map1.get(sum) + 1 : 1)
        } 
    }
    for(let i = 0; i < nums3.length; i++) {
        for(let j = 0; j < nums4.length; j++) {
            let sum = nums3[i] + nums4[j]
            map2.set(sum, map2.has(sum)? map2.get(sum) + 1 : 1)
        } 
    }
    let res = 0
    for(let key of map1.keys()) {
        if(map2.has(-key)) {
            res += map1.get(key) * map2.get(-key)
        }
    }
    return res
};