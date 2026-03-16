function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var constructMaximumBinaryTree = function(nums) {
    const construct = (nums, left, right) => {
        if (left > right) {
            return null;
        }
        let best = left;
        for (let i = left + 1; i <= right; ++i) {
            if (nums[i] > nums[best]) {
                best = i;
            }
        }
        const node = new TreeNode(nums[best]);
        node.left = construct(nums, left, best - 1);
        node.right = construct(nums, best + 1, right);
        return node;
    }
    return construct(nums, 0, nums.length - 1);
};


const nums = [3,2,1,6,0,5]
const result = constructMaximumBinaryTree(nums);
console.log(result);