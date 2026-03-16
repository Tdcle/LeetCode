var solveSudoku = function(board) {
    function isValid(row, col, num) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] == num) return false; // 行
            if (board[i][col] == num) return false; // 列
            // 3x3方格
            let boxRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
            let boxCol = Math.floor(col / 3) * 3 + i % 3;
            if (board[boxRow][boxCol] == num) return false;
        }
        return true;
    }

    function backtrack() {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    for (let num = 1; num <= 9; num++) {
                        let c = num.toString();
                        if (isValid(row, col, c)) {
                            board[row][col] = c;
                            if (backtrack()) return true;
                            board[row][col] = '.';
                        }
                    }
                    return false; // 当前格子无解，回溯
                }
            }
        }
        return true; // 全部填完
    }
    backtrack();
    return board;
};

board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
console.log(solveSudoku(board));