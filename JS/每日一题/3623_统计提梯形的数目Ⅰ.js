var countTrapezoids = function(points) {
    const mod = 1000000007n;
    let mapy = new Map();
    for(let p of points){
        mapy.has(p[1]) ? mapy.set(p[1], mapy.get(p[1]) + 1) : mapy.set(p[1], 1);
    }
    let arr = [];
    for(let v of mapy.values()){
        if(v >= 2){
            arr.push(v);
        }
    }
    let ans = 0n;
    let sum = 0n;
    let edge = 0n
    for(let p of arr){
        edge = (BigInt(p) * BigInt(p - 1)) / 2n;
        ans = (ans + edge * sum) % mod;
        sum = (sum + edge) % mod;
    }
    return Number(ans);
};

console.log(countTrapezoids([[1,0],[2,0],[3,0],[2,2],[3,2]]))

