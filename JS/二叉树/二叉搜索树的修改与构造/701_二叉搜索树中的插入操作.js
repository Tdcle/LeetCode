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


var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)
    const dfs = (node) => {
        if(node.val>val){
            if(node.left){
                dfs(node.left)
            }else{
                node.left = new TreeNode(val)
            }
        }else{
            if(node.right){
                dfs(node.right)
            }else{
                node.right = new TreeNode(val)
            }
        }
    }
    dfs(root)
    return root
};

const input = [4,2,7,1,3]
const root = buildTree(input);
const result = insertIntoBST(root, 5);
console.log(result);