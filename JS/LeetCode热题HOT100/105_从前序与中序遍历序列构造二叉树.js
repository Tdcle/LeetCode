function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var buildTree = function(preorder, inorder) {
    const root = new TreeNode()
    const dfs = (node, preorder, inorder) => {
        node.val = preorder[0]
        let index = inorder.indexOf(node.val)
        let l_inorder = inorder.slice(0,index)
        let r_inorder = inorder.slice(index+1)
        let l_preorder = preorder.slice(1,index+1)
        let r_preorder = preorder.slice(index+1,preorder.length)
        if(!l_inorder.length && !r_inorder.length)   return
        if(l_inorder.length){
            node.left = new TreeNode()
            dfs(node.left, l_preorder, l_inorder)
        }
        if(r_inorder.length){
            node.right = new TreeNode()
            dfs(node.right, r_preorder, r_inorder)
        }
    }
    dfs(root ,preorder, inorder)
    return root
};

const inorder = [9,3,15,20,7]
const preorder = [3,9,20,15,7]
const root = buildTree(preorder, inorder);