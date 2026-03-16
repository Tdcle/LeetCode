var countPermutations = function(complexity) {
    for(let i=1; i<complexity.length; i++){
        if(complexity[i] <= complexity[0]){
            return 0;
        }
    }
    let res = 1;
    const MOD = 1e9 + 7;
    for(let i=2; i<complexity.length; i++){
        res = (res * i) % MOD;
    }
    return res;
};