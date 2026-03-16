var quickSelect = function(nums, left, right, k) {
    // 递归终止条件：当只剩一个元素时
    if(left === right) return nums[k];
    // 选择一个枢轴（pivot），这里选的是第一个元素
    const pivot = nums[left];
    let i = left - 1, j = right + 1;
    // 快排式分区，调整数组，使得：
    // 所有 < pivot 的元素在左边
    // 所有 > pivot 的元素在右边
    // 注意这里是“荷兰国旗划分法”的经典做法
    while(i < j){
        // 从左往右找：找到第一个 ≥ pivot 的元素
        do{
            i++;
        }while(nums[i] < pivot);
        // 从右往左找：找到第一个 ≤ pivot 的元素
        do{
            j--;
        }while(nums[j] > pivot);
        // 如果 i 和 j 没有交叉，就交换它们
        if(i < j){
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    // 此时 j 是分区点：左边都是 <= x，右边是 >= x
    // 根据 k 与 j 的关系，决定往哪一边递归
    if(k <= j){
        // 第 k 小在左半部分
        return quickSelect(nums, left, j, k);
    } else {
        // 第 k 小在右半部分
        return quickSelect(nums, j + 1, right, k);
    }
}

var findKthLargest = function(nums, k) {
    const n = nums.length;
    return quickSelect(nums, 0, n - 1, n - k);
};

console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
