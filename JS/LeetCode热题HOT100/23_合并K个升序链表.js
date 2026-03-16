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

var mergeKLists = function(lists) {
    let minP = 0,minV = Infinity;
    let res = new ListNode()
    let flag = true
    const dummyHead = res
    while(flag){
        flag = false
        for(let i=0; i<lists.length; i++){
            if(lists[i] === null) continue
            if(lists[i].val < minV){
                minV = lists[i].val
                minP = i
                flag = true
            }
        }
        if(flag){
            res.next = lists[minP]
            res = res.next
            lists[minP] = lists[minP].next
            minV = Infinity
            minP = 0
        }
    }
    return dummyHead.next
};

// 优先队列
var mergeKLists = function(lists) {
    const pq = new MinPriorityQueue(node => node.val);
    for (const head of lists) {
        if (head) {
            pq.enqueue(head); // 把所有非空链表的头节点入堆
        }
    }

    const dummy = new ListNode(); // 哨兵节点，作为合并后链表头节点的前一个节点
    let cur = dummy;
    while (!pq.isEmpty()) { // 循环直到堆为空
        const node = pq.dequeue(); // 剩余节点中的最小节点
        if (node.next) { // 下一个节点不为空
            pq.enqueue(node.next); // 下一个节点有可能是最小节点，入堆
        }
        cur.next = node; // 把 node 添加到新链表的末尾
        cur = cur.next; // 准备合并下一个节点
    }
    return dummy.next; // 哨兵节点的下一个节点就是新链表的头节点
};


input = [[1,4,5],[1,3,4],[2,6]]
list1 = buildList(input[0])
list2 = buildList(input[1])
list3 = buildList(input[2])
lists = [list1, list2, list3]
console.log(mergeKLists(lists))