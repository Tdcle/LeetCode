// 深度搜索
var maxDepth = function(root) {
    let res = 0
    const dfs = (n, l) => {
        if(!n) return
        if(!n.left && !n.right) res = Math.max(res,l)
        dfs(n.left, l+1)
        dfs(n.right, l+1)
    }
    dfs(root, 1)
    return res
};
// 层序遍历
var maxDepth = function(root) {
    let res = 0, q = []
    if(root)    q.push(root)
    while(q.length){
        let len = q.length
        res++
        for(let i=0; i<len; i++){
            let node = q.shift()
            if(node.left)   q.push(node.left)
            if(node.right)  q.push(node.right)
        }
    }
    return res
};