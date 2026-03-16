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
var removeNthFromEnd = function(head, n) {
    let newHead = new ListNode(0, head);
    let first = head
    let second = newHead
    for(let i=0; i<n; i++){
        first = first.next
    }
    while(first){
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return newHead.next
};



input = [1,2,3,4,5]
head = buildList(input)
console.log(removeNthFromEnd(head, 2))