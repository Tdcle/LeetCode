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
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not inorder:
            return None
        res = TreeNode(postorder[-1])
        index = {element: i for i,element in enumerate(inorder)}
        idx = index[postorder[-1]]
        res.left = self.buildTree(inorder[0: idx], postorder[0: idx])
        res.right = self.buildTree(inorder[idx + 1:], postorder[idx:-1])
        return res

if __name__ == "__main__":
    inorder = [9,3,15,20,7]
    postorder = [9, 15, 7, 20, 3]
    print(Solution().buildTree(inorder, postorder))