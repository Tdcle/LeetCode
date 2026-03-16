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

var hasPathSum = function(root, targetSum) {
    if(!root)   return false
    const dfs = (node, sum) => {
        if(!node)   return false
        sum += node.val
        if(sum === targetSum && !node.left && !node.right)   return true
        return dfs(node.left, sum) || dfs(node.right, sum)
    }
    return dfs(root,0)
};

const input = [-2,null,-3]
const root = buildTree(input);
const result = hasPathSum(root, -5);
console.log(result);
