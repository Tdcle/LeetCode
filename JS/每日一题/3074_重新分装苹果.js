var minimumBoxes = function(apple, capacity) {
    let totalApples = apple.reduce((sum, val) => sum+val, 0)
    capacity.sort((a,b) => b-a)
    let ans = 0
    for(let cap of capacity){
        if(totalApples <= 0)
            break
        totalApples -= cap
        ans++
    }
    return ans
};

console.log(minimumBoxes([5,5,5], [2,4,2,7]));