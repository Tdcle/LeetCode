var removeDuplicates = function(s) {
    let stack = []
    for(let str of s){
        if(!stack.length)   stack.push(str)
        else if(str === stack[stack.length-1])  stack.pop()
        else stack.push(str)
    }
    return stack.join('')
};

s = "abbaca"
console.log(removeDuplicates(s))