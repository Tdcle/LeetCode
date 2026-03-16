var maxDepth = function(root) {
    let res = 0, q = []
    if(root)    q.push(root)
    while(q.length){
        let len = q.length
        res++
        for(let i=0; i<len; i++){
            let node = q.shift()
            if(node.children){
                for(let child of node.children){
                   q.push(child)
                }
            }
            
        }
    }
    return res
};