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
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0;
    if(!root) return count;
    function dfs(sumList, node){
        sumList.push(0)
        for(let i=0; i<sumList.length; i++){
            sumList[i] += node.val
            if(sumList[i] === targetSum) count++
        }
        if(node.left) dfs(sumList, node.left)
        if(node.right) dfs(sumList, node.right)
        sumList.pop()
        for(let i=0; i<sumList.length; i++){
            sumList[i] -= node.val
        }
    }
    dfs([], root);
    return count;
};
let input = buildTree([10,5,-3,3,2,null,11,3,-2,null,1]);
console.log(pathSum(input, 8));