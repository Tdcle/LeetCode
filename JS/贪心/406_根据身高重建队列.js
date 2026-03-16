var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if(a[0]===b[0]){
            return a[1]-b[1]
        }
        else{
            return b[0]-a[0]
        }
    })
    let res = []
    for(let i=0; i<people.length; i++){
        // .splice用于插入、删除或替换数组元素。
        // array.splice(start, deleteCount, item1, item2, ...)
        // start：开始操作的索引。
        // deleteCount：要删除的元素个数。
        // item1, item2, ...：要插入的新元素（可选）。
        res.splice(people[i][1], 0, people[i])
    }
    return res
};
console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]))