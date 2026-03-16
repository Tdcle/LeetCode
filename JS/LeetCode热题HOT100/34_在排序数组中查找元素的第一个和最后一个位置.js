var searchRange = function(nums, target) {
    const searchLeft = (nums, target) => {
        let left = 0, right = nums.length - 1
        let leftBorder = -2
        while(left <= right){
            let middle = left + ((right - left) >> 1)
            if(nums[middle]>=target){
                right = middle - 1
                leftBorder = right
            }else{
                left = middle + 1
            }
        }
        return leftBorder
    }
    const searchRight = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let rightBorder = -2; // 记录一下rightBorder没有被赋值的情况
        while (left <= right) {
            let middle = left + ((right - left) >> 1);
            if (nums[middle] > target) {
                right = middle - 1;
            } else { // 寻找右边界，nums[middle] == target的时候更新left
                left = middle + 1;
                rightBorder = left;
            }
        }
        return rightBorder;
    }
    let leftBorder = searchLeft(nums, target);
    let rightBorder = searchRight(nums, target);
    if(leftBorder === -2 || rightBorder === -2) return [-1,-1];
    if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
    return [-1, -1];
};