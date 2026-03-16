var bestClosingTime = function(customers) {
    let n = customers.length;
    let Ysum = 0, Nsum = 0;
    for(let c of customers) {
        if(c === 'Y') Ysum++;
        else Nsum++;
    }
    let Ycount = 0, Ncount = 0;
    let minDY = Ysum, nowDY = Infinity, res = 0
    for(let i=0; i<n; i++){
        if(customers[i] === 'Y'){
            Ycount++;
        }
        else{
            Ncount++;
        }
        nowDY = Ysum - Ycount + Ncount
        if(nowDY < minDY){
            minDY = nowDY;
            res = i + 1;
        }
    }
    return res;
};

console.log(bestClosingTime("NNNN"));