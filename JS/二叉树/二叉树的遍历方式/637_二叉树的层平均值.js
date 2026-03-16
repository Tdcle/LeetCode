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

var averageOfLevels = function(root) {
    let q = [], res = []
    if(root)    q.push(root)
    while(q.length){
        let sum = 0
        len = q.length
        for(let i=0; i<len; i++){
            let now = q.shift()
            sum += now.val
            if(now.left)    q.push(now.left)
            if(now.right)   q.push(now.right)
        }
        res.push(sum / len)
    }
    return res
};

let input = [3,9,20,null,null,15,7]
const root = buildTree(input)
const result = averageOfLevels(root);
console.log(result);