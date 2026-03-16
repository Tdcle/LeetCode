var numMagicSquaresInside = function(grid) {
    if(grid.length < 3 || grid[0].length < 3) return 0
    let row = new Array(grid.length).fill(0).map(() => new Array(grid[0].length-2).fill(0))
    let col = new Array(grid.length-2).fill(0).map(() => new Array(grid[0].length).fill(0))
    let ans = 0
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(j<grid[0].length-2)
                row[i][j] = grid[i][j] + grid[i][j+1] + grid[i][j+2];
            if(i<grid.length-2)
                col[i][j] = grid[i][j] + grid[i+1][j] + grid[i+2][j];
            if(i>1 && j>1){
                let l = grid[i][j] + grid[i-1][j-1] + grid[i-2][j-2];
                let r = grid[i][j-2] + grid[i-1][j-1] + grid[i-2][j];
                if(l === r){
                    let sum = l;
                    if(row[i-2][j-2]===sum && row[i-1][j-2]===sum && row[i][j-2]===sum &&
                       col[i-2][j-2]===sum && col[i-2][j-1]===sum && col[i-2][j]===sum){
                        let set = new Set(), maxNum = -Infinity;
                        for(let x=i-2; x<=i; x++){
                            for(let y=j-2; y<=j; y++){
                                maxNum = Math.max(maxNum, grid[x][y])
                                set.add(grid[x][y])
                            }
                        }
                        if(set.size === 9 && !set.has(0) && maxNum <=9){
                            ans++
                        }
                    }
                }
            }
        }
    }
    return ans
};

console.log(numMagicSquaresInside([[4,3,8,4],[9,5,1,9],[2,7,6,2]])) // 1