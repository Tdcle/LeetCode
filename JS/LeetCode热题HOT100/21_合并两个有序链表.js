function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function createList(arr) {
    let head = new ListNode(arr[0])
    let cur = head
    for(let i = 1; i<arr.length; i++){
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
    return head
}
var mergeTwoLists = function(list1, list2) {
    let p1 = list1,p2 = list2
    let res = new ListNode()
    let dummy = res
    while(p1 && p2){
        if(p1.val <= p2.val){
            res.next = p1
            p1 = p1.next
        }
        else{
            res.next = p2
            p2 = p2.next
        }
        res = res.next
    }
    if(p1) res.next = p1
    if(p2) res.next = p2
    return dummy.next
};
l1 = [1,2,4]
l2 = [1,3,4]
list1 = createList(l1)
list2 = createList(l2)
res = mergeTwoLists(list1, list2)
console.log(res)