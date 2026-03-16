var countNegatives = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let ans = 0;
    let i = 0, j = n-1;
    while(i < m){
        if(j < 0){
            ans += (m - i) * n;
            break;
        }
        if(grid[i][j] < 0){
            j--
        }else{
            ans += n-1 - j
            i++
        }
    }
    return ans
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])); // 8