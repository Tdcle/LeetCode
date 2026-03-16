var findMedianSortedArrays = function(nums1, nums2) {
    let l1 = nums1.length, l2 = nums2.length
    let mid = Math.floor((l1+l2-1)/2)
    let index = 0, i1=0, i2=0, now = 0
    while(index<=mid){
        if(i1 == l1){
            now = nums2[i2]
            i2++
            index++
            continue
        }
        if(i2 == l2){
            now = nums1[i1]
            i1++
            index++
            continue
        }
        if(nums1[i1]<nums2[i2]){
            now = nums1[i1]
            i1++
        }
        else{
            now = nums2[i2]
            i2++
        }
        index++
    }
    if((l1+l2)%2 === 0){
        let t = 0
        if(i1 == l1){
            t = nums2[i2]
        }
        else if(i2 == l2){
            t = nums1[i1]
        }else{
            t = Math.min(nums1[i1], nums2[i2])
        }
        return (now+t)/2
    }
    else{
        return now
    }
};