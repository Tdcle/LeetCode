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

var diameterOfBinaryTree = function(root) {
    ans = 0
    const bfs = (node,ld,rd) => {
        if(!node)   return -1
        ld = bfs(node.left, ld, rd) + 1
        rd = bfs(node.right, rd, rd) + 1
        ans = Math.max(ans,ld + rd)
        return Math.max(ld,rd)
    }
    bfs(root, 0)
    return ans
};

const input = [4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]
// const input = [5,2,null,4,3,1]
const root = buildTree(input);
const result = diameterOfBinaryTree(root);
console.log(result);
