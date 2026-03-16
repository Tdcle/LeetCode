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

var trimBST = function(root, low, high) {
    let newRoot = root;
    if(!root) return null;
    const dfs = (node) => {
        if(!node) return null;
        if(node.val < low) return dfs(node.right);
        else if(node.val > high) return dfs(node.left);
        else {
            node.left = dfs(node.left);
            node.right = dfs(node.right);
            return node;
        }
    }
    return dfs(root);
};

const input = [1,0,2]
const root = buildTree(input);
const result = trimBST(root, 1, 2);
console.log(result);