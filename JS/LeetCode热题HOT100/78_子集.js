var subsets = function(nums) {
    let res = [];
    function backtrack(i, path) {
        if(i === nums.length) {
            res.push([...path]);
            return;
        }
        backtrack(i + 1, path);
        path.push(nums[i]);
        backtrack(i + 1, path);
        path.pop();
    }
    backtrack(0, []);
    return res;
};
console.log(subsets([1,2,3,4,5]));