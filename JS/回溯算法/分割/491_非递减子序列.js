var findSubsequences = function(nums) {
    let result = [];
    let path = [];
    function backtracking(startIndex) {
        if (path.length > 1) { // 如果路径长度大于1，才加入结果集
            result.push([...path]);
        }
        let layerSet = []; // 用于存储当前层的元素，避免同层重复
        for(let i=startIndex; i<nums.length; i++) {
            // 如果当前元素小于路径的最后一个元素，或者当前元素已经在当前层被使用过，则跳过
            if((path.length > 0 && nums[i] < path[path.length - 1]) || layerSet[nums[i] + 100]) continue;
            layerSet[nums[i] + 100] = true; // 标记当前元素已经被使用
            path.push(nums[i]); // 将当前元素加入路径
            backtracking(i + 1); // 继续回溯，处理下一个元素
            path.pop(); // 回溯，移除当前元素
        }
    }
    backtracking(0); // 从第0个元素开始回溯
    return result
};
console.log(findSubsequences([4,6,4,7,7])); // 输出: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
