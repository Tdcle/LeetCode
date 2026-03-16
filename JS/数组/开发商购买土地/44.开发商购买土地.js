const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function func(){
    let inputLines = []
    rl.on('line', (line) => {
        inputLines.push(line.trim())
    })
    rl.on('close', () => {
        // split分割后是字符串，.map(Number)可以转化为数字
        let [n, m] = inputLines[0].split(" ").map(Number)
        let c = new Array(n).fill(0)
        let r = new Array(m).fill(0)
        let arr = new Array(n)
        let sum = 0, min = Infinity
        for(let s=0; s<n; s++){
            arr[s] = inputLines[s+1].split(" ").map(Number)
        }
        //每一行的和
        for(let i=0; i<n; i++){
            for(let j=0; j<m; j++){
                c[i] += arr[i][j]
                sum += arr[i][j]
            }
        }
        //每一列的和
        for (let i=0; i<n; i++) {
            for (let j=0; j<m; j++) {
                r[j] += arr[i][j]
            }
        }
        let sum1 = 0; sum2 = 0
        //横向切割
        for (let i = 0; i < n; i++) {
            sum1 += c[i]
            min = min < Math.abs(sum - 2 * sum1) ? min : Math.abs(sum - 2 * sum1)
        }
        //纵向切割
        for (let j = 0; j < m; j++) {
            sum2 += r[j]
            min = min < Math.abs(sum - 2 * sum2) ? min : Math.abs(sum - 2 * sum2)
        }
        console.log(min);
    })
}

func()