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

var isValidBST = function(root) {
    if(!root)   return true
    const dfs = (node, up, down) => {
        if(!node)   return true
        if(node.val >= up || node.val <= down)    return false
        return dfs(node.left, node.val, down) && dfs(node.right, up, node.val)
    }
    return dfs(root, Infinity, -Infinity)
};

const input = [4,2,7,1,3]
const root = buildTree(input);
const result = isValidBST(root);
console.log(result);