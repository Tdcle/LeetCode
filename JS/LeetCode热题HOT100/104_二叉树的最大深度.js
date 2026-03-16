function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var maxDepth = function(root) {
    let deep = 0
    const dfs = (node,now_deep) => {
        if (!node) return
        if (!node.left && !node.right){
            deep = Math.max(deep,now_deep)
        }
        dfs(node.left, now_deep + 1)
        dfs(node.right, now_deep + 1)
    }
    dfs(root, 1)
};