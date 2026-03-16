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

var largestValues = function(root) {
    let ans = []
    if (!root) return ans
    let q = [root]
    while(q.length){
        const size = q.length
        let max = -Infinity
        for (let i = 1; i <= size; i++){
            const node = q.shift()
            max = Math.max(max, node.val)
            if(node.left)   q.push(node.left)
            if(node.right) q.push(node.right)
        }
        ans.push(max)
    }
    return ans
};

const input = [1,3,2,5,3,null,9]
const root = buildTree(input);
const result = largestValues(root);
console.log(result);