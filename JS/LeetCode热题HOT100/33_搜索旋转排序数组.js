var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    function dfs(l, r){
        if(l > r) return -1;
        let mid = Math.floor((l + r) / 2);
        let resL = -1, resR = -1;
        if(nums[mid] === target)  return mid;
        if(nums[mid] > target) {
            resL = dfs(l, mid - 1);
            if(nums[l] <= nums[mid] && nums[mid] >= nums[r]) {
                resR = dfs(mid + 1, r);
            }
        }
        else {
            resR = dfs(mid + 1, r);
            if(nums[mid] <= nums[r] && nums[mid] <= nums[l]) {
                resL = dfs(l, mid - 1);
            }
        }
        if(resL !== undefined && resL !== -1) return resL;
        if(resR !== undefined && resR !== -1) return resR;
        return -1;
    }
    return dfs(l, r);
};
console.log(search([4,5,6,7,0,1,2], 0)) // 4
console.log(search([4,5,6,7,0,1,2], 3)) // -1
console.log(search([1], 0)) // -1
console.log(search([5,1,3], 5)) // 0
console.log(search([1,3], 3)) // 1
console.log(search([4,5,6,7,8,1,2,3], 8)) // 4