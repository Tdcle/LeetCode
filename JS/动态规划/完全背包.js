const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
readline.on('line', (line) => {
    input.push(line.trim());
});

readline.on('close', () => {
    // 第一行解析 n 和 v
    const [n, bagweight] = input[0].split(' ').map(Number);
    
    /// 剩余 n 行解析重量和价值
    const weight = [];
    const value = [];
    for (let i = 1; i <= n; i++) {
        const [wi, vi] = input[i].split(' ').map(Number);
        weight.push(wi);
        value.push(vi);
    }

    let dp = Array.from({ length: n }, () => Array(bagweight + 1).fill(0));

    for (let j = weight[0]; j <= bagweight; j++) {
        dp[0][j] = dp[0][j-weight[0]] + value[0];
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= bagweight; j++) {
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weight[i]] + value[i]);
            }
        }
    }

    console.log(dp[n - 1][bagweight]);
});
