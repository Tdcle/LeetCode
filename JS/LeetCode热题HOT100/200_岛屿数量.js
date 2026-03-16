var numIslands = function(grid) {
    let map = Array.from({length: grid.length}, () => Array(grid[0].length).fill(0))
    let res = 0
    let queue = []
    const bfs = (queue) => {
        let node = queue.shift()
        let x = node[0], y = node[1]
        // 下
        if(x<grid.length-1 && grid[x+1][y]=='1' && map[x+1][y]==0){
            queue.push([x+1,y])
            map[x+1][y] = 1
        }
        // 右
        if(y<grid[0].length-1 && grid[x][y+1]=='1' && map[x][y+1]==0){
            queue.push([x,y+1])
            map[x][y+1] = 1
        }
        // 上
        if(x>0 && grid[x-1][y]=='1' && map[x-1][y]==0){
            queue.push([x-1,y])
            map[x-1][y] = 1
        }
        // 左
        if(y>0 && grid[x][y-1]=='1' && map[x][y-1]==0){
            queue.push([x,y-1])
            map[x][y-1] = 1
        }
        if(queue.length>0) bfs(queue)
    }
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] == '1' && map[i][j] == 0){
                queue.push([i,j])
                map[i][j] = 1
                bfs(queue)
                res++
            }
        }
    }
    return res
};
console.log(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]))