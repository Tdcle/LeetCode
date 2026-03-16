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


# class Solution:
#     def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
#
#         def myBuildTree(preorder_left: int, preorder_right: int, inorder_left: int, inorder_right: int):
#             if preorder_left > preorder_right:
#                 return None
#             # 前序遍历中的第一个节点就是根节点
#             preorder_root = preorder_left
#             # 在中序遍历中定位根节点
#             inorder_root = index[preorder[preorder_root]]
#
#             # 先把根节点建立出来
#             root = TreeNode(preorder[preorder_root])
#             # 得到左子树中的节点数目
#             size_left_subtree = inorder_root - inorder_left
#             # 递归地构造左子树，并连接到根节点
#             # 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
#             root.left = myBuildTree(preorder_left + 1, preorder_left + size_left_subtree, inorder_left,
#                                     inorder_root - 1)
#             # 递归地构造右子树，并连接到根节点
#             # 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
#             root.right = myBuildTree(preorder_left + size_left_subtree + 1, preorder_right, inorder_root + 1,
#                                      inorder_right)
#             return root
#
#         n = len(preorder)
#         # 构造哈希映射，帮助我们快速定位根节点
#         index = {element: i for i, element in enumerate(inorder)}
#         return myBuildTree(0, n - 1, 0, n - 1)


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder:
            return None

        res = TreeNode(preorder[0])
        # idx = inorder.index(preorder[0])
        index = {element: i for i,element in enumerate(inorder)}
        idx = index[preorder[0]]
        res.left = self.buildTree(preorder[1: idx + 1], inorder[0: idx])
        res.right = self.buildTree(preorder[idx + 1:], inorder[idx + 1:])

        return res

if __name__ == "__main__":
    preorder = [3,9,20,15,7]
    inorder = [9, 3, 15, 20, 7]
    print(Solution().buildTree(preorder, inorder))