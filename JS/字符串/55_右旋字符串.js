const rl = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
var rotateString = function() {
    let input = []
    rl.on("line", function (line) {
       input.push(line.trim())
    })
    rl.on("close", function () {
        let k = parseInt(input[0])
        let s = input[1]
        console.log(s.slice(-k) + s.slice(0, -k))
    })
}
rotateString()