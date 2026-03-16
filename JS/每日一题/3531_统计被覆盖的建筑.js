var countCoveredBuildings = function(n, buildings) {
    let l= new Array(n).fill(Infinity)
    let r= new Array(n).fill(0)
    let u= new Array(n).fill(0)
    let d= new Array(n).fill(Infinity)
    for(let [x,y] of buildings){
        l[y-1] = Math.min(l[y-1], x)
        r[y-1] = Math.max(r[y-1], x)
        u[x-1] = Math.max(u[x-1], y)
        d[x-1] = Math.min(d[x-1], y)
    }
    let res = 0
    for(let [x,y] of buildings){
        if(x > l[y-1] && x< r[y-1] && y > d[x-1] && y < u[x-1]){
            res++
        }
    }
    return res
};

console.log(countCoveredBuildings(3, [[1,1],[1,2],[2,1],[2,2]]))