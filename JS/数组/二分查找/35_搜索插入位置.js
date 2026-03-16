var searchInsert = function(nums, target) {
    let mid, left = 0, right = nums.length - 1;
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    if(nums[mid] > target)  return mid
    return mid + 1;
};

nums = [1,3,5,6]
console.log(searchInsert(nums,7))