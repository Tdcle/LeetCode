var permute = function(nums) {
    let result = [];
    let path = [];
    function backtracking(used) {
        if(path.length === nums.length) { // 如果路径长度等于数组长度，说明找到一个完整的排列
            result.push([...path]);
            return;
        }
        for(let i=0; i<nums.length; i++) {
            if(used[i]) continue; // 如果当前元素已经被使用过，则跳过
            path.push(nums[i]); // 将当前元素加入路径
            used[i] = true; // 标记当前元素已经被使用
            backtracking(used); // 继续回溯，处理下一个元素
            path.pop(); // 回溯，移除当前元素
            used[i] = false; // 恢复当前元素的使用状态
        }
    }
    backtracking(new Array(nums.length).fill(false)); // 初始化used数组，标记所有元素未被使用
    return result;
};
console.log(permute([1,2,3])); // 输出: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]