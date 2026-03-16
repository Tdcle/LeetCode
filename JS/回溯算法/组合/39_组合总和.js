var combinationSum = function(candidates, target) {
    let result = [];
    const find = (arr, sum, now) => {
        if(sum === target)    {
            result.push(arr)
            return
        }
        if(sum > target)    {
            return
        }
        for(let i=now; i<candidates.length; i++){
            let newArr = [...arr]
            newArr.push(candidates[i])
            find(newArr, sum+candidates[i], i)
        }
    }
    find([], 0, 0)
    return result
};
console.log(combinationSum([2,3,6,7], 7));