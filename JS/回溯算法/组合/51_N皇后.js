var solveNQueens = function(n) {
    let results = [];
    // 初始化长度为n的数组，对于每个数组，初始化长度为n，填充为‘.’的数组，完成二维数组初始化
    // let board = Array.from({length: n}, () => Array(n).fill('.')); // 初始化棋盘
    let board = new Array(n).fill().map(() => new Array(n).fill('.')); // 初始化棋盘
    let cols = Array(n).fill(false);               // 列状态
    let diagonals1 = Array(2 * n - 1).fill(false); // 主对角线
    let diagonals2 = Array(2 * n - 1).fill(false); // 副对角线
    function backtracking(row){
        if(row === n+1) {
            // map是遍历，r表示取出board的每一行，进行拼接
            results.push(board.map(r => r.join('')))
            return
        }
        for(let col = 0; col<n; col++) {
            if(cols[col] || diagonals1[row-col+n-1] || diagonals2[row+col]) continue; // 检查列和对角线是否被占用
            board[row-1][col] = 'Q'; // 放置皇后
            cols[col] = true; // 标记列状态
            diagonals1[row-col+n-1] = true; // 标记主对角
            diagonals2[row+col] = true; // 标记副对角线
            backtracking(row+1)
            board[row-1][col] = '.'; // 回溯，移除皇后
            cols[col] = false; // 恢复列状态
            diagonals1[row-col+n-1] = false; // 恢复主对角线状态
            diagonals2[row+col] = false; // 恢复副对角线
        }
    }
    backtracking(1);
    return results;
};

console.log(solveNQueens(6)); // 输出所有可能的N皇后解