var maxProfit = function(prices) {
    let profit = 0
    let now = prices[0]
    if(prices.length <= 1) return 0
    for(let i=1; i<prices.length; i++){
        if(prices[i] > prices[i-1])  continue
        profit += prices[i-1] - now
        now = prices[i]
    }
    profit += prices[prices.length-1]-now
    return profit
};
prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))