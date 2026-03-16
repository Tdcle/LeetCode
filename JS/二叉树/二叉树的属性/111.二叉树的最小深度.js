var minDepth = function(root) {
    if(!root) return 0
    const q = [[root,1]]
    while(q.length){
        const [n,l] = q.shift()
        if(!n.left&&!n.right) return l
        if(n.left) q.push([n.left,l+1])
        if(n.right) q.push([n.right,l+1])
    }
};


var minDepth = function(root) {
    let res = 0, q = [], flag = false
    if(root)    q.push(root)
    while(q.length){
        let len = q.length
        res++
        for(let i=0; i<len; i++){
            let node = q.shift()
            if(node.left)  q.push(node.left)
            if(node.right)  q.push(node.right)
            if(!node.left && !node.right){
                flag = true
                break
            }
        }
        if(flag)    break
    }
    return res
};