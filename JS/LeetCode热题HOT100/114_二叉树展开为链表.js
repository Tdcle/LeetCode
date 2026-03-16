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

var flatten = function(root) {
    let curr = root;
    while (curr !== null) {
        if (curr.left !== null) {
            const next = curr.left;
            let predecessor = next;
            while (predecessor.right !== null) {
                predecessor = predecessor.right;
            }
            predecessor.right = curr.right;
            curr.left = null;
            curr.right = next;
        }
        curr = curr.right;
    }
};

const input = [1,2,5,3,4,null,6];
const root = buildTree(input);
const result = flatten(root);
console.log(result);