var maxSlidingWindow = function(nums, k) {
    const deque = []; // 双端队列，存储元素的索引
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // 移除队列中不在窗口范围内的元素
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // 移除队列中所有比当前元素小的元素（保持队列递减）
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // 将当前元素的索引加入队列
        deque.push(i);

        // 当窗口大小达到 k 时，将当前窗口的最大值加入结果
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};

// 示例
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k)); // 输出: [3, 3, 5, 5, 6, 7]