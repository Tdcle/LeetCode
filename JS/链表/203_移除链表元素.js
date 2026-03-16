function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeElements = function(head, val) {
    const newhead = new ListNode(0, head)
    let cur = newhead
    while(cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next
            continue
        }
        cur = cur.next
    }
    return newhead.next
};

