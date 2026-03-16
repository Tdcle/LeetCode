var findMinArrowShots = function(points) {
    points.sort((a,b)=>a[1]-b[1])
    let res = 1, now = 0
    for(let i=1; i<points.length; i++){
        if(points[i][0] <= points[now][1])    continue
        else{
            res++
            now = i
        }
    }
    return res
};
console.log(findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]))