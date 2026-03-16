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

var convertBST = function(root) {
    let sum = [], total = 0
    const dfs = (node) => {
        if(!node) return
        dfs(node.left)
        total += node.val
        sum.push(total)
        dfs(node.right)
    }
    dfs(root)
    sum = sum.reverse()
    const dfs2 = (node) => {
        if(!node) return
        dfs2(node.left)
        node.val = total - sum.pop() + node.val
        dfs2(node.right)
    }
    dfs2(root)
    return root
};

const input = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
const root = buildTree(input);
const result = convertBST(root);
console.log(result);