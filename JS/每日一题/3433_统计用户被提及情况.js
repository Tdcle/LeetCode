var countMentions = function(numberOfUsers, events) {
    let ans = new Array(numberOfUsers).fill(0);
    let state = new Array(numberOfUsers).fill(true);    //用户状态，true为在线，false为离线
    let queue = [];     //下线队列
    events.sort((a, b) => {
        if(Number(a[1]) !== Number(b[1])){
            return Number(a[1]) - Number(b[1])
        }
        else{
            return a[0] === "OFFLINE" ? -1 : 1
        }
    })
    for(let ev of events){
        while(queue.length && (queue[0][1] + 60) <= Number(ev[1])){
            let id = queue.shift()[0]
            state[id] = true
        }
        if(ev[0] === "OFFLINE"){
            let id = Number(ev[2])
            state[id] = false
            queue.push([id, Number(ev[1])])
        }
        else{
            let mentions = ev[2]
            if(mentions === "HERE"){
                for(let i = 0; i < numberOfUsers; i++){
                    if(state[i]){
                        ans[i] += 1
                    }
                }
            }else if(mentions === "ALL"){
                ans = ans.map(val => val + 1)
            }else{
                let ids = mentions.split(" ")
                for(let id of ids){
                    ans[Number(id.slice(2))] += 1
                }
            }
        }
    }
    return ans;
};

console.log(countMentions(3, [["MESSAGE","2","HERE"],["OFFLINE","2","1"],["OFFLINE","1","0"],["MESSAGE","61","HERE"]]))