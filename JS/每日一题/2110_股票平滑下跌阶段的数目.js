var getDescentPeriods = function(prices) {
    let ans = 0
    let start = 0, end = 1
    for(end=1; end<prices.length; end++){
        if(prices[end]-prices[end-1] == -1){
            ans+= end - start
        }else{
            start = end
        }
    }
    return ans + prices.length;
};

console.log(getDescentPeriods([3,2,1,4])); // 7