var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b) // 先排序，方便去重
    let result = [];
    let path = [];
    function backtracking(startIndex) {
        result.push([...path])
        for(let i=startIndex; i<nums.length; i++) {
            // 去重逻辑：如果当前元素和前一个元素相同，且前一个元素没有被选中，则跳过当前元素
            if(i == startIndex || nums[i] != nums[i-1]) {
                path.push(nums[i])
                backtracking(i+1)
                path.pop()
            }
        }
    }
    backtracking(0)
    return result
};

console.log(subsetsWithDup([1,2,2]));