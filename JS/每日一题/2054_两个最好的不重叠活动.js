var maxTwoEvents = function(events) {
    const evs = [];
    for (const event of events) {
        evs.push({ts: event[0], op: 0, val: event[2]});
        evs.push({ts: event[1], op: 1, val: event[2]});
    }
    
    evs.sort((a, b) => {
        if (a.ts !== b.ts) {
            return a.ts - b.ts;
        }
        return a.op - b.op;
    });
    
    let ans = 0, bestFirst = 0;
    for (const ev of evs) {
        if (ev.op === 0) {
            ans = Math.max(ans, ev.val + bestFirst);
        } else {
            bestFirst = Math.max(bestFirst, ev.val);
        }
    }
    return ans;
};

console.log(maxTwoEvents([[1,3,2],[4,5,2],[2,4,3]])); // 5