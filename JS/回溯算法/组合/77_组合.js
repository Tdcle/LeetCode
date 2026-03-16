var combine = function(n, k) {
    let result = [];
    const find = (arr, now) => {
        if(arr.length === k)    {
            result.push(arr)
            return
        }
        for(let i=now; i<=n; i++){
            let newArr = [...arr]
            newArr.push(i)
            find(newArr, i+1)
        }
    }
    for(let i=1; i<=n-k+1; i++){
        find([i], i+1)
    }
    return result
};

console.log(combine(8, 3)); // 输出: [[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]