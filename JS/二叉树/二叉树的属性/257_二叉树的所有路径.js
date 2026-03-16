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

var binaryTreePaths = function(root) {
    let res = []
    const dfs = (path, node) => {
        if(!node)   return
        if(!node.left && !node.right){
            res.push(path + String(node.val))
            return
        }
        path += String(node.val) + "->"
        dfs(path, node.left)
        dfs(path, node.right)
    }
    dfs("", root)
    return res
};

const input = [1,2,3,null,5]
const root = buildTree(input);
const result = binaryTreePaths(root);
console.log(result);