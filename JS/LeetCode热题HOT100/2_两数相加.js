function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0)
    let p1 = l1, p2 = l2, p3 = l3
    let sum = 0, t = 0
    while(p1 || p2 || t){
        const v1 = p1 ? p1.val : 0
        const v2 = p2 ? p2.val : 0
        sum = v1 + v2 + t
        t = Math.floor(sum / 10)
        p3.next = new ListNode(sum%10)
        if(p1) p1 = p1.next
        if(p2) p2 = p2.next
        p3 = p3.next
    }
    return l3.next
};