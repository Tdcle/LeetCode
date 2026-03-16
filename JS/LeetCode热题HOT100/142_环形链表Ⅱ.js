var detectCycle = function(head) {
    let map = new Map()
    let cur = head
    while(cur){
        if (map.has(cur)) {
            return cur 
        }else {
            map.set(cur, 1)
            cur = cur.next
        }
    }
    return null
};