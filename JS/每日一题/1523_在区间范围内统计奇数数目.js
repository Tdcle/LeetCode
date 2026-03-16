var countOdds = function(low, high) {
    if(low % 2 === 0){
        return Math.ceil((high - low) / 2);
    }
    else{
        return Math.ceil((high - low + 1) / 2);
    }
};
console.log(countOdds(3,7))