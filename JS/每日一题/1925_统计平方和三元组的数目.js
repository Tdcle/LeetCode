var countTriples = function(n) {
    let ans = 0;
    for(let i = 4; i<n; i++){
        for(let j = 2; j<i; j++){
            let k = Math.sqrt(i*i + j*j);
            if(k>n) break;
            if(k%1 === 0){
                ans+=2;
            }
        }
    }
    return ans;
};

console.log(countTriples(250))