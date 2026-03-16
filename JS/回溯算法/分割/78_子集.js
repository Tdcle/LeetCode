var subsets = function(nums) {
    let result = [];
    let path = [];
    function backtracking(startIndex) {
        result.push(Array.from(path)); // 将当前路径加入结果集
        for (let i = startIndex;i<nums.length; i++) {
            path.push(nums[i]); // 将当前元素加入路径
            backtracking(i + 1); // 继续回溯，处理下一个元素
            path.pop(); // 回溯，移除当前元素
        }
    }
    backtracking(0); // 从第0个元素开始回溯
    return result;
};

console.log(subsets([1,2,3])); // 输出: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]