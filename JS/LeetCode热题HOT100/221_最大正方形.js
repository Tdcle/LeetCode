var maximalSquare = function(matrix) {
    let maxSide = 0;
    let dp = Array.from({length: matrix.length}, () => Array(matrix[0].length).fill(0))
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j] === "1"){
                if(i===0 || j===0){
                    dp[i][j] = 1
                }else{
                    dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1

                }
                if(maxSide < dp[i][j]) maxSide = dp[i][j]
            }else{
                dp[i][j] = 0
            }
        }
    }
    return maxSide * maxSide;
};
console.log(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])) // 4