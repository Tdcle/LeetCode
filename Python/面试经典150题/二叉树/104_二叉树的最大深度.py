from typing import Optional
from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
# DFS
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))

# BFS
# class Solution:
#     def maxDepth(self, root: Optional[TreeNode]) -> int:
#         if not root:
#             return 0
#         queue = deque([root])
#         depth = 0
#         while queue:
#             level_size = len(queue)  # 当前层的节点数
#             for _ in range(level_size):
#                 node = queue.popleft()
#                 if node.left:
#                     queue.append(node.left)
#                 if node.right:
#                     queue.append(node.right)
#             depth += 1  # 每遍历完一层，深度 +1
#         return depth

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


if __name__ == "__main__":
    solution = Solution()

    test_cases = [
        ([3, 9, 20, None, None, 15, 7], 3),
        ([1, None, 2], 2),
        ([], 0),
        ([1], 1),
        ([1, 2, 3, 4, 5, None, None, 6, 7], 4),
        ([1, 2, 3, 4, 5, 6, 7], 3),
    ]

    for i, (tree_data, expected_depth) in enumerate(test_cases):
        root = build_tree(tree_data)
        result = solution.maxDepth(root)
        status = "✓" if result == expected_depth else "✗"
        print(f"测试用例 {i + 1}: {status}")
        print(f"  输入：{tree_data}")
        print(f"  期望深度：{expected_depth}, 实际深度：{result}")
        print()
