var permuteUnique = function(nums) {
    let result = [];
    let path = [];
    nums.sort((a,b)=> a-b)
    function backtracking(used){
        if(path.length === nums.length) {
            result.push([...path])
            return
        }
        let now = []
        for(let i=0; i<nums.length; i++) {
            if(used[i]) continue
            if(i>0 && nums[i] === now[now.length-1]) continue
            now.push(nums[i]) // 记录当前层使用过的元素，避免同层重复
            path.push(nums[i])
            used[i] = true
            backtracking(used)
            path.pop()
            used[i] = false
        }
    }
    backtracking(new Array(nums.length).fill(false))
    return result
};
console.log(permuteUnique([1,1,2]));