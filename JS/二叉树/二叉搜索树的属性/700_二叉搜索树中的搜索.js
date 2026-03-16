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

var searchBST = function(root, val) {
    let res = new TreeNode()
    let flag = false
    const dfs = (node) => {
        if(!node || flag)  return
        if(node.val === val) {
            flag = true
            res = node
            return
        }else if(node.val > val){
            dfs(node.left)
        }else {
            dfs(node.right)
        }
    }
    dfs(root)
    if(flag)    return res
    else return null
};

const input = [4,2,7,1,3]
const root = buildTree(input);
const result = searchBST(root);
console.log(result);