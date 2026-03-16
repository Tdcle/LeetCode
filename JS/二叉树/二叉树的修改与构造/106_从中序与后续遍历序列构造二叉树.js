function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var buildTree = function(inorder, postorder) {
    const root = new TreeNode()
    const dfs = (node, inorder, postorder) => {
        node.val = postorder[postorder.length - 1]
        let index = inorder.indexOf(node.val)
        let l_inorder = inorder.slice(0,index)
        let r_inorder = inorder.slice(index+1)
        let l_postorder = postorder.slice(0,index)
        let r_postorder = postorder.slice(index,postorder.length -1)
        if(!l_inorder.length && !r_inorder.length)   return
        if(l_inorder.length){
            node.left = new TreeNode()
            dfs(node.left, l_inorder, l_postorder)
        }
        if(r_inorder.length){
            node.right = new TreeNode()
            dfs(node.right, r_inorder, r_postorder)
        }
    }
    dfs(root ,inorder, postorder)
    return root
};

const inorder = [4,2,5,1,3,6]
const postorder = [4,5,2,6,3,1]
const root = buildTree(inorder, postorder);



// 简洁
// var buildTree = function(inorder, postorder) {
//     if (!inorder.length) return null;
//     const rootVal = postorder.pop(); // 从后序遍历的数组中获取中间节点的值， 即数组最后一个值
//     let rootIndex = inorder.indexOf(rootVal); // 获取中间节点在中序遍历中的下标
//     const root = new TreeNode(rootVal); // 创建中间节点
//     root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex)); // 创建左节点
//     root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex)); // 创建右节点
//     return root;
// };