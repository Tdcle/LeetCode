from typing import Optional

# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random



class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None

        # 哈希表：原节点 -> 新节点
        mapping = {}

        # 第一次遍历：创建所有新节点，建立映射关系
        current = head
        while current:
            mapping[current] = Node(current.val)
            current = current.next

        # 第二次遍历：设置新节点的 next 和 random 指针
        current = head
        while current:
            new_node = mapping[current]
            new_node.next = mapping.get(current.next)
            new_node.random = mapping.get(current.random)
            current = current.next

        return mapping[head]
