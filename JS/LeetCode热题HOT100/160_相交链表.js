var getIntersectionNode = function(headA, headB) {
    let map = new Map()
    let h1 = headA
    let h2 = headB
    while(h1) {
        map.set(h1, 1)
        h1 = h1.next
    }
    while(h2) {
        if (map.has(h2)) {
            return h2
        }
        h2 = h2.next
    }
    return null
};