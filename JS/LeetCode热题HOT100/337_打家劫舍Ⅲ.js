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

// var rob = function(root) {
//     let stack = []
//     stack.push(root)
//     let i=0
//     while(true) {
//         if(i>=stack.length) break
//         let node = stack[i++]
//         if(node.left) stack.push(node.left)
//         if(node.right) stack.push(node.right)
//     }
//     stack = stack.reverse()
    
//     let dp = new Array(stack.length).fill(0)
//     for(let i=0; i<stack.length; i++){
//         node = stack[i]
//         let l=0, r=0;
//         let ll=0, lr=0, rl=0, rr=0;
//         if(node.left) {
//             l = node.left.val
//             if(node.left.left) {
//                 ll = node.left.left.val
//             }
//             if(node.left.right) {
//                 lr = node.left.right.val
//             }
//         }
//         if(node.right) {
//             r = node.right.val
//             if(node.right.left) {
//                 rl = node.right.left.val
//             }
//             if(node.right.right) {
//                 rr = node.right.right.val
//             }
//         }
//         dp[i] = Math.max((l+r), (node.val+ll+lr+rl+rr))
//     }
//     return dp[dp.length-1]
// };
// console.log(rob(buildTree([4,1,null,2,null,3])));

var rob = function(root) {
    function dfs(node) {
        if (!node) return [0, 0];
        let left = dfs(node.left);
        let right = dfs(node.right);
        // 不偷当前节点：左右孩子可偷可不偷，取最大
        let notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        // 偷当前节点：左右孩子都不能偷
        let rob = node.val + left[0] + right[0];
        return [notRob, rob];
    }
    let res = dfs(root);
    return Math.max(res[0], res[1]);
};

// 测试
console.log(rob(buildTree([4,1,null,2,null,3])));