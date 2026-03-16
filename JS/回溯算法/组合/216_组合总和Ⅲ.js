var combinationSum3 = function(k, n) {
    let result = [];
    const find = (arr, now) => {
        if(arr.length === k && arr.reduce((a, b) => a + b) === n)    {
            result.push(arr)
            return
        }
        for(let i=now; i<=9; i++){
            let newArr = [...arr]
            newArr.push(i)
            find(newArr, i+1)
        }
    }
    for(let i=1; i<=9; i++){
        find([i], i+1)
    }
    return result
};

console.log(combinationSum3(3, 9)); // 输出: [[1,2,4]]