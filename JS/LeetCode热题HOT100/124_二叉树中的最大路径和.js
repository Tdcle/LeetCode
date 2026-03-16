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

var maxPathSum = function(root) {
    let res = -Infinity
    let stack = [], stack2 = []
    stack2.push(root)
    while(stack2.length){
        let node = stack2.pop()
        stack.push(node)
        if(node.left) stack2.push(node.left)
        if(node.right) stack2.push(node.right)
    }
    while(stack.length){
        let node = stack.pop()
        let left = node.left ? Math.max(0, node.left.val) : 0
        let right = node.right ? Math.max(0, node.right.val) : 0
        res = Math.max(res, left + right + node.val)
        node.val = Math.max(left, right) + node.val
    }
    return res
};
// 更好的做法用递归
var maxPathSum = function(root) {
    let ans = -Infinity;
    function dfs(node) {
        if (node === null) {
            return 0; // 没有节点，和为 0
        }
        const lVal = dfs(node.left); // 左子树最大链和
        const rVal = dfs(node.right); // 右子树最大链和
        ans = Math.max(ans, lVal + rVal + node.val); // 两条链拼成路径
        return Math.max(Math.max(lVal, rVal) + node.val, 0); // 当前子树最大链和（注意这里和 0 取最大值了）
    }
    dfs(root);
    return ans;
};


const input = [-10,9,20,null,null,15,7]
const root = buildTree(input);
const result = maxPathSum(root);
console.log(result);