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
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        flag, deep = False, 0
        queue = [root]
        ans = []
        while len(queue):
            n = len(queue)
            ans.append([])
            for i in range(n):
                node = queue[0]
                queue[:] = queue[1:]
                ans[deep].append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            if flag:
                ans[deep][:] = ans[deep][::-1]
            flag = not flag
            deep += 1
        return ans



if __name__ == "__main__":
    root = build_tree([1,2,3,4,None,None,5])
    print(Solution().zigzagLevelOrder(root))