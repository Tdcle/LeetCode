var levelOrder = function(root) {
    let q = [], res = []
    if(root)   q.push(root)
    while(q.length){
        let len = q.length
        res.push([])
        for(let i=0; i<len; i++){
            let node = q.shift()
            res[res.length-1].push(node.val)
            for(let cnode of node.children){
                q.push(cnode)
            }
        }
    }
    return res
};