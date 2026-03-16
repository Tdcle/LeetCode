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
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        res = float('inf')
        pre = None

        def inorder_search(node):
            nonlocal res, pre
            if not node:
                return

            inorder_search(node.left)

            if pre is not None:
                res = min(res, node.val - pre)
            pre = node.val

            inorder_search(node.right)

        inorder_search(root)
        return res


if __name__ == "__main__":
    root = build_tree([4,2,6,1,3])
    print(Solution().getMinimumDifference(root))