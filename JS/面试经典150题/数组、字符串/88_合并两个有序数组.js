var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1, index2 = n -1
    let mergeIndex = m + n - 1
    while(index2 >= 0){
        nums1[mergeIndex] = nums1[index1]>nums2[index2] ? nums1[index1--] : nums2[index2--]
        mergeIndex--
    }
    return nums1
};