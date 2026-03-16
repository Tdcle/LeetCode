var reverseList = function(head) {
    let l1 = null
    let now = head
    while(now){
        // 存下一个节点
        let temp = now.next
        // 指向前一个节点
        now.next = l1
        // 前一个节点后移
        l1 = now
        // 当前节点后移
        now = temp
    }
    return l1
};