var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0)
    let index = new Array(temperatures.length).fill(0)
    for(let i=0; i<temperatures.length; i++){
        index[i] = i
    }
    let stack = []
    stack.push([temperatures[0],0])
    for(let i=1; i<temperatures.length; i++){
        while(stack.length && temperatures[i]>stack[stack.length-1][0]){
            result[stack[stack.length-1][1]] = i - stack[stack.length-1][1]
            stack.pop()
        }
        stack.push([temperatures[i],i])
    }
    return result
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))