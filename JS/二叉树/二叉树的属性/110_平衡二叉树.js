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

var isBalanced = function(root) {
    let flag = true
    var dfs = (node, deep) => {
        if(!node || !flag)   return deep
        let left = dfs(node.left, deep + 1)
        let right = dfs(node.right, deep + 1)
        if(Math.abs(left - right) > 1)  flag = false
        return Math.max(left, right)
    }
    dfs(root, 0)
    return flag
};

const input = [1,2,2,3,3,null,null,4,4]
const root = buildTree(input);
const result = isBalanced(root);
console.log(result);