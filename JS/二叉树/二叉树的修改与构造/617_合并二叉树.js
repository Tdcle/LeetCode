function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// 构建二叉树的辅助函数
function buildTree(arr) {
    if (arr.length === 0) return null;
    const nodes = arr.map(val => val!== null? new TreeNode(val) : null);
    let i = 0, j = 1;
    while (j < arr.length) {
        if (nodes[i]!== null) {
            nodes[i].left = nodes[j];
            j++;
            if (j < arr.length) {
                nodes[i].right = nodes[j];
                j++;
            }
        }
        i++;
    }
    return nodes[0];
}

var mergeTrees = function(root1, root2) {
    let root = new TreeNode()
    const dfs = (r, r1, r2) => {
        if(!r1 && !r2)  return null
        if(!r1){
           return r2
        } 
        if(!r2){
           return r1
        }
        r.val = r1.val + r2.val
        r.left = new TreeNode
        r.right = new TreeNode
        r.left = dfs(r.left, r1.left, r2.left)
        r.right = dfs(r.right, r1.right, r2.right)
        return r
    }
    root = dfs(root, root1, root2)
    return root
};