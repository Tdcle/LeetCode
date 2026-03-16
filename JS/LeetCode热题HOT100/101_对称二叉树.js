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

var isSymmetric = function(root) {
    left = root.left
    right = root.right
    flag = true
    if(!left && !right) return flag
    if(!left || !right) return false
    const dfs = (l, r) => {
        if(l.val !== r.val) flag = false
        if(l.left && r.right){
            dfs(l.left, r.right)
        }else if(!l.left && !r.right){
            
        }else{
            flag = false
        }
        if(l.right && r.left){
            dfs(l.right, r.left)
        }else if(!l.right && !r.left){
            
        }else{
            flag = false
        }
    }
    dfs(left, right)
    return flag
};

const input = [9,-42,-42,null,76,76,null,null,13,null,13]
const root = buildTree(input);
const result = isSymmetric(root);
console.log(result);