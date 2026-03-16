var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=>b-a)
    let ans = 0
    for(let i=0;i<k;i++){
        ans += (happiness[i]-i) > 0 ? (happiness[i]-i) : 0
    }
    return ans
};

console.log(maximumHappinessSum([1,2,3], 2)); // 4