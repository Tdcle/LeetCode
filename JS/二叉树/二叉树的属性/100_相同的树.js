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

var isSameTree = function(p, q) {
    let flag = true
    const dfs = (p, q) => {
        if(!flag || (!p && !q)) return
        if((!p && q) || (p && !q) || p.val!==q.val){
            flag = false
            return
        }else{
            dfs(p.left, q.left)
            dfs(p.right, q.right)
        }
    }
    dfs(p, q)
    return flag
};

let P = [1,2,3], Q=[1,2,3]
const p = buildTree(P), q = buildTree(Q)
const result = isSameTree(p, q);
console.log(result);