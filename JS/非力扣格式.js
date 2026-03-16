const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim())
})

rl.on('close', () => {
    let count = 0
    while (count < lines.length) {
        let n = parseInt(lines[count])
        for (let i = count+1; i <= n+count; i++){
            const [a, b] = lines[i].split(' ').map(Number)
            console.log(a + b)
        }
        count += n
    }
    
})