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

var rightSideView = function(root) {
    let q = [], res = [], temp = []
    if(root)    q.push(root)
    while(q.length){
        let node = q.shift()
        if(node.left)   temp.push(node.left)
        if(node.right)  temp.push(node.right)
        // 队列为空，到达一层的最右端
        if(!q.length){
            res.push(node.val)
            q.push(...temp)
            temp = []
        }
    }
    return res
};

let input = [1,2,3,null,5,null,4]
const root = buildTree(input)
const result = rightSideView(root);
console.log(result);