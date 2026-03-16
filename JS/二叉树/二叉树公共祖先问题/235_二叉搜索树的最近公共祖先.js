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

var lowestCommonAncestor = function(root, p, q) {
    if(p > q) [p, q] = [q, p];
    const dfs = (node) => {
        if(!node) return null;
        if(node.val >= p && node.val <= q) return node;
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(root);
};

const input = [2,1]
const root = buildTree(input);
const result = lowestCommonAncestor(root, 2, 1);
console.log(result);