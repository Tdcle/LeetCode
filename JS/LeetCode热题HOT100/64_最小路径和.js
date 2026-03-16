var minPathSum = function(grid) {
    let dp = Array.from({length: grid.length}, () => Array(grid[0].length).fill(0))
    dp[0][0] = grid[0][0]
    for(let i = 0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(i === 0 && j === 0) continue
            if(i === 0) {
                dp[i][j] = dp[i][j-1] + grid[i][j]
                continue
            }
            if(j === 0) {
                dp[i][j] = dp[i-1][j] + grid[i][j]
                continue
            }
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
        }
    }
    return dp[grid.length-1][grid[0].length-1]
};
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])) // 7