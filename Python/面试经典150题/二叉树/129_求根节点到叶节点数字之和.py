from typing import Optional, List
from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def build_tree(level_order):
    """
    根据层序遍历数组构建二叉树
    :param level_order: List[int or None], 例如 [3,9,20,null,null,15,7]
    :return: TreeNode 或 None
    """
    if not level_order or level_order[0] is None:
        return None

    root = TreeNode(level_order[0])
    queue = deque([root])
    index = 1

    while queue and index < len(level_order):
        node = queue.popleft()

        if index < len(level_order) and level_order[index] is not None:
            node.left = TreeNode(level_order[index])
            queue.append(node.left)
        index += 1

        if index < len(level_order) and level_order[index] is not None:
            node.right = TreeNode(level_order[index])
            queue.append(node.right)
        index += 1

    return root



class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def my_sum(node, val):
            val = val * 10 + node.val
            if not node.left and not node.right:
                return val
            if node.left and node.right:
                return my_sum(node.left, val) + my_sum(node.right, val)
            if node.left and not node.right:
                return my_sum(node.left, val)
            if not node.left and node.right:
                return my_sum(node.right, val)
        return my_sum(root, 0)

if __name__ == "__main__":
    root = build_tree([1,2,3])
    print(Solution().sumNumbers(root))