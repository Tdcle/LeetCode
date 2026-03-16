var evalRPN = function(tokens) {
    let stack = []
    let bag = ['+', '-', '*', '/']
    for(let token of tokens){
        if(stack.length > 1 && bag.includes(token)){
                var num2 = Number(stack.pop()),num1 = Number(stack.pop())
            }
        switch(token){
            case '+':
                stack.push(num1 + num2)
                break
            case '-':
                stack.push(num1 - num2)
                break
            case '*':
                stack.push(num1 * num2)
                break
            case '/':
                stack.push(Math.trunc(num1 / num2))
                break
            default:
                stack.push(token)
        }
    }
    return Number(stack[0])
};

tokens = ["4","-2","/","2","-3","-","-"]
console.log(evalRPN(tokens))