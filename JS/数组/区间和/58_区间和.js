// js读取控制台输入
const readline = require('readline');

// 创建一个 readline 接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prefixSum() {
    let inputLines = []
    rl.on('line', (line) => {
        inputLines.push(line.trim())
    })
    rl.on('close', () => {
        const n = parseInt(inputLines[0])
        let sum = new Array(n)
        sum[0] = parseInt(inputLines[1])
        for(let i=1; i<n; i++){
            let value = parseInt(inputLines[i+1])
            sum[i] = sum[i-1] + value
        }
        for(let i=n+1; i<inputLines.length; i++){
            let [left, right] = inputLines[i].split(' ').map(Number)
            if(left === 0){
                console.log(sum[right])
            }else{
                console.log(sum[right]-sum[left-1])
            }
        }
    })
}
prefixSum()