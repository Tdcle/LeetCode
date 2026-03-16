var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    let map = new Map();
    for(let num of nums1){
        map.set(num, map.has(num)? map.get(num)+1 : 1)
    }
    let ans = []
    for (let num of nums2){
       if(map.has(num)){
           map.set(num, map.get(num) - 1)
           if(map.get(num) === 0) map.delete(num)
           ans.push(num)
       }
    }
    return ans
};