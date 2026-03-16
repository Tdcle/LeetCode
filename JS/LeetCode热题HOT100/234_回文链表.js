function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var isPalindrome = function(head) {
    let arr = []
    while(head){
        arr.push(head.val)
        head=head.next
    }
    for(let i = 0; i<arr.length/2; i++){
        if(arr[i]!=arr[arr.length-i-1]) return false
    }
    return true
};

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(1)
console.log(isPalindrome(head))