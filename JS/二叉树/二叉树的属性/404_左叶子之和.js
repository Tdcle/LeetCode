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

var sumOfLeftLeaves = function(root) {
    let res = 0
    const TFS = (isLeft, node) => {
        if(!node)   return
        if(isLeft && !node.left && !node.right)
            res += node.val
        TFS(true, node.left)
        TFS(false, node.right)
    }
    TFS(false, root)
    return res
};

const input = [3,9,20,null,null,15,7]
const root = buildTree(input);
const result = sumOfLeftLeaves(root);
console.log(result);