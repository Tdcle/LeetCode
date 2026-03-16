var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>a[1]-b[1])
    let res = 0, now = 0
    for(let i=1; i<intervals.length; i++){
        if(intervals[i][0]<intervals[now][1]){
            res++
        }
        else{
            now = i
        }
    }
    return res
};
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // 1