function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function buildList(arr) {
    if (arr.length === 0) {
        return null;
    }
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

var swapPairs = function (head) {
    // 创建一个空节点
    let ret = new ListNode(0, head), temp = ret;
    // 如果需要交换
    while (temp.next && temp.next.next) {
        // 存下要交换的两个节点
        let cur = temp.next.next, pre = temp.next;
        // 前节点连接到后面
        pre.next = cur.next;
        // 后节点连接到前节点
        cur.next = pre;
        // 把后节点连接到上一次处理后的链表后面
        temp.next = cur;
        // 重新记录已处理链表最后一个节点的位置
        temp = pre;
    }
    return ret.next;
};

input = [1,2,3,4]
head = buildList(input)
console.log(swapPairs(head))