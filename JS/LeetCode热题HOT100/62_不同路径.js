var uniquePaths = function(m, n) {
    // 使用Array.from正确初始化二维数组
    let map = Array.from(Array(m), () => Array(n).fill(0))
    map[0][0] = 1
    for(let i=0 ;i<m; i++){
      for(let j=0; j<n; j++){
        if(i>0) map[i][j] += map[i-1][j]
        if(j>0) map[i][j] += map[i][j-1]
      }
    }
    return map[m-1][n-1]
};
console.log(uniquePaths(3,7)) // 28