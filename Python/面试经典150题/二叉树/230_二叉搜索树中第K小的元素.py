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
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        cnt = 0
        ans = None
        def inorder_search(node):
            nonlocal cnt, ans
            if not node or ans is not None:
                return
            inorder_search(node.left)
            cnt+=1
            if cnt == k:
                ans = node.val
                return
            inorder_search(node.right)

        inorder_search(root)
        return ans


if __name__ == "__main__":
    root = build_tree([3,1,4,None,2])
    print(Solution().kthSmallest(root, 1))