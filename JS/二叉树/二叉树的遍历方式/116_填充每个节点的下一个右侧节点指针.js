var connect = function(root) {
    let ans = root, q = []
    if (root) q.push(root)
    let pre = root
    while(q.length){
        const size = q.length
        pre.next = null
        for (let i = 0; i < size; i++){
            const node = q.shift()
            if(i !== 0){
                pre.next = node
            }
            pre = node
            if(node.left)   q.push(node.left)
            if(node.right) q.push(node.right)
        }
    }
    return ans
};
