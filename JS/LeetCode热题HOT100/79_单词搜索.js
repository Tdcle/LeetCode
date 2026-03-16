var exist = function(board, word) {
    let m = board.length, n = board[0].length;
    let visited = Array.from({length: m}, () => Array(n).fill(false));
    function dfs(i, j, k) {
        if (board[i][j] !== word[k]) return false;
        if (k === word.length - 1) return true;
        visited[i][j] = true;
        let dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        for (let [dx, dy] of dirs) {
            let ni = i + dx, nj = j + dy;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[ni][nj]) {
                if (dfs(ni, nj, k + 1)) return true;
            }
        }
        visited[i][j] = false;
        return false;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));    // true