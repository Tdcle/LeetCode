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

var invertTree = function(root) {
    let reverse_tree = root
    const dfs = (node) => {
        if(!node)   return
        let temp = node.left
        node.left = node.right
        node.right = temp
        dfs(node.left)
        dfs(node.right)
    }
    dfs(reverse_tree)
    return reverse_tree
};

const input = [4,2,7,1,3,6,9];
const root = buildTree(input);
const result = invertTree(root);
console.log(result);