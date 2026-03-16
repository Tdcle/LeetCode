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

var pathSum = function(root, targetSum) {
    let res = []
    if(!root)   return []
    const dfs = (node, sum, path) => {
        if(!node)   return
        sum += node.val
        path.push(node.val)
        if(sum === targetSum && !node.left && !node.right){
            res.push(path)
        }
        dfs(node.left, sum, [...path])
        dfs(node.right, sum, [...path])
    }
    dfs(root, 0, [])
    return res
};

const input = [5,4,8,11,null,13,4,7,2,null,null,5,1]
const root = buildTree(input);
const result = pathSum(root, 22);
console.log(result);
