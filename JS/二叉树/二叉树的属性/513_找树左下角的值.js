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

var findBottomLeftValue = function(root) {
    let q = [], leftVal = root.val
    if(root)    q.push(root)
    while(q.length){
        let len = q.length
        for(let i=0; i<len; i++){
            let node = q.shift()
            if(!i)  leftVal = node.val
            if(node.left)   q.push(node.left)
            if(node.right)  q.push(node.right)
        }
    }
    return leftVal
};

const input = [1,2,3,4,null,5,6,null,null,7]
const root = buildTree(input);
const result = findBottomLeftValue(root);
console.log(result);


// DFS使用前序遍历
// var findBottomLeftValue = function(root) {
//     //首先考虑递归遍历 前序遍历 找到最大深度的叶子节点即可
//     let maxPath = 0, resNode = null;
//     // 1. 确定递归函数的函数参数
//     const dfsTree = function(node, curPath) {
//     // 2. 确定递归函数终止条件
//         if(node.left === null && node.right === null) {
//             if(curPath > maxPath) {
//             maxPath = curPath;
//             resNode = node.val;
//             }
//         }
//         node.left && dfsTree(node.left, curPath+1);
//         node.right && dfsTree(node.right, curPath+1);
//     }
//     dfsTree(root,1);
//     return resNode;
// };