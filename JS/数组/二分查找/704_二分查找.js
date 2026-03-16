var search = function(nums, target) {
    let mid, left = 0, right = nums.length - 1;
    while (left <= right) {
        // 防止加法溢出
        mid = left + ((right - left) >> 1);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};
nums = [-1,0,3,5,9,12]
console.log(search(nums, 2))