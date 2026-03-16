var leastInterval = function(tasks, n) {
    let map = new Array(26).fill(0)
    for(let task of tasks) {
        map[task.charCodeAt(0)-'A'.charCodeAt(0)]++
    }
    map.sort((a,b) => b-a)
    let minTime = (map[0]-1) * (n+1) + 1
    for(let i = 1; i<25; i++){
        if(map[i] === map[0])  minTime++
    }
    return Math.max(minTime, tasks.length)
};
console.log(leastInterval(["A","A","A","B","B","B"], 2));