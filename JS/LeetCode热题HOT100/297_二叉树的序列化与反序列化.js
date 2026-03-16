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

var serialize = function(root) {
    let res = []
    let queue = [root]
    while(queue.length){
        let node = queue.shift()
        if(node === null){
            res.push(null)
            continue
        } 
        else res.push(node.val)
        if(node.left) queue.push(node.left)
        else queue.push(null)
        if(node.right) queue.push(node.right)
        else queue.push(null)
    }
    for(let i=res.length-1; i>=0; i--){
        if(res[i] === null) res.pop()
        else break
    }
    return res.join(',')
};

var deserialize = function(data) {
    let arr = data.split(',')
    if(arr[0] === '') return null
    for(let i=0; i<arr.length; i++){
        if(arr[i] === '') arr[i] = null
        else arr[i] = Number(arr[i])
    }
    let root = buildTree(arr)
    return root
};
input = [1,2,3,null,null,4,5]
const root = buildTree(input);
const str = serialize(root);
const result = deserialize(str);
console.log(result);