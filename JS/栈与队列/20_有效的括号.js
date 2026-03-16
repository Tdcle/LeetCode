var isValid = function(s) {
    let map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])
    let stack = []
    for(let str of s){
        if(map.has(str)){
            if(!stack.length || stack[stack.length-1] !== map.get(str)){
                return false
            }
            stack.pop()
        }else{
            stack.push(str)
        }
    }
    return !stack.length
};

s = "()"
console.log(isValid(s))