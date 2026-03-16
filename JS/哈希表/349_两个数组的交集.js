var intersection = function(nums1, nums2) {
    let set = new Set()
    for(let num of nums1){
        set.add(num)
    }
    let ans = new Set()
    for(let num of nums2){
        if(set.has(num)){
            ans.add(num)
        }
    }
    return Array.from(ans)
};