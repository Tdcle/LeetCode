//定义输入输出接口
const rl = require("readline").createInterface({ 
    input: process.stdin,
    output: process.stdout 
});

var replaceNumbers = function() {
    let s = ""
    rl.on("line", function (line) {
        s = line.trim()
    });
    rl.on("close", function () {
        let t = "number", res = ""
        for(let str of s){
            if(str.match(/[0-9]/)){
                res += t
            }else{
                res += str
            }
        }
        console.log(res)
    });
}
replaceNumbers()