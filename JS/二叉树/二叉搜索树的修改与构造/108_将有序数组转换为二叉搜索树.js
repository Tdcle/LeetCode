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

var sortedArrayToBST = function(nums) {
    let l = nums.length
    if(l === 0) return null
    const dfs = (node, left, right) => {
        if(left > right) return null
        const mid = Math.floor((left + right) / 2)
        node = new TreeNode(nums[mid])
        node.left = dfs(node.left, left, mid - 1)
        node.right = dfs(node.right, mid + 1, right)
        return node
    }
    return dfs(null, 0, l - 1)
};

const input = [-10,-3,0,5,9]
const result = sortedArrayToBST(input);
console.log(result);