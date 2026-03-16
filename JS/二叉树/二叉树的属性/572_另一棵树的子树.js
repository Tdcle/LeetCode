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

var isSubtree = function(root, subRoot) {
    let flag = false
    const dfs = (node) => {
        if(flag)   return
        if(!node)   return
        if(node.val === subRoot.val){
            let isSame = isSameTree(node, subRoot)
            flag = isSame
            dfs(node.left)
            dfs(node.right)
        }else{
            dfs(node.left)
            dfs(node.right)
        }
    }
    dfs(root)
    return flag
};

let P = [3,4,5,1,2], Q=[4,1,2]
const root = buildTree(P), subRoot = buildTree(Q)
const result = isSubtree(root, subRoot);
console.log(result); 