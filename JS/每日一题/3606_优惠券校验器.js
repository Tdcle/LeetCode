var validateCoupons = function(code, businessLine, isActive) {
    let tickets = code.map((c, i) => [c, businessLine[i], isActive[i]])
    tickets.sort((a, b) => {
        if(a[1] === b[1])   return a[0] < b[0] ? -1 : 1
        else   return a[1].localeCompare(b[1])
    })
    let res = []
    function isvalid(line){
        if(line === "electronics" || line === "grocery" || line === "restaurant" || line === "pharmacy"){
            return true
        }
        return false
    }
    for(let ticket of tickets){
        let [c, line, active] = ticket
        if(c.length == 0 || !active || !isvalid(line) || /[^a-zA-Z0-9_]/.test(c)){
            continue
        }else{
            res.push(c)
        }
    }
    return res;
};

console.log(validateCoupons(["MI","b_"], ["pharmacy","pharmacy"], [true,true]));