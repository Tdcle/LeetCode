var climbStairs = function(n) {
    let ans = new Array(n)
    ans[0] = 1
    if(n === 1) return ans[0]
    ans[1] = 2
    for(let i=2; i<n; i++){
        ans[i] = ans[i-1] + ans[i-2]
    }
    return ans[n-1]
};
console.log(climbStairs(3))