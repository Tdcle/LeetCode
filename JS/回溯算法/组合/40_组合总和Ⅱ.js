var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b); // 先排序
    let result = [];
    const backtrack = (arr, sum, start) => {
        if (sum === target) {
            result.push([...arr]);
            return;
        }
        if (sum > target) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            // 跳过同层重复元素
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            arr.push(candidates[i]);
            backtrack(arr, sum + candidates[i], i + 1); // i+1 保证每个数字只用一次
            arr.pop();
        }
    };
    backtrack([], 0, 0);
    return result;
};
console.log(combinationSum2([10,1,2,7,6,1,5], 8)); // [[1,1,6],[1,2,5],[1,7],[2,6]]