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

var findMode = function(root) {
    let map = new Map()
    let pre = root.val, cnt = 0
    const dfs = (node) => {
        if(!node)   return
        dfs(node.left)
        if(pre === -1)  pre = node.val
        else{
            if(node.val === pre)    cnt++
            else{
                if(map.has(cnt))    map.get(cnt).push(pre)
                else{
                    let arr = [pre]
                    map.set(cnt, arr)
                }
                pre = node.val
                cnt = 1
            }
        }
        dfs(node.right)
    }
    dfs(root)
    if(map.has(cnt))    map.get(cnt).push(pre)
    else{
        let arr = [pre]
        map.set(cnt, arr)
    }
    const maxCount = Math.max(...map.keys());
    return map.get(maxCount); // 返回出现次数最多的值
};

const input = [1,null,2,2]
const root = buildTree(input);
const result = findMode(root);
console.log(result);