from typing import Optional
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        if not head or left == right:
            return head

        dummy = ListNode(0)
        dummy.next = head
        pre = dummy

        # 找到 left 位置的前一个节点
        for _ in range(left - 1):
            pre = pre.next

        # 从 left 到 right 进行反转
        current = pre.next
        for _ in range(right - left):
            next_node = current.next
            current.next = next_node.next
            next_node.next = pre.next
            pre.next = next_node

        return dummy.next


# ========== 测试代码 ==========
def create_linked_list(arr):
    """根据数组创建链表"""
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head


def linked_list_to_array(head):
    """将链表转换为数组"""
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result


def reverse_between(head_array, left, right, expected):
    """测试函数"""
    solution = Solution()
    head = create_linked_list(head_array)
    result = solution.reverseBetween(head, left, right)
    result_array = linked_list_to_array(result)

    status = "✅" if result_array == expected else "❌"
    print(f"{status} 输入：{head_array}, left={left}, right={right}")
    print(f"   输出：{result_array}")
    print(f"   预期：{expected}")
    print()
    return result_array == expected


if __name__ == "__main__":
    print("=" * 60)
    print("反转链表 II 测试用例")
    print("=" * 60)
    print()

    # 测试用例 1: 基本案例
    print("测试 1: 基本案例")
    reverse_between([1, 2, 3, 4, 5], 2, 4, [1, 4, 3, 2, 5])

    # 测试用例 2: 反转整个链表
    print("测试 2: 反转整个链表")
    reverse_between([1, 2, 3, 4, 5], 1, 5, [5, 4, 3, 2, 1])

    # 测试用例 3: 只反转一个节点（left == right）
    print("测试 3: 只反转一个节点")
    reverse_between([1, 2, 3, 4, 5], 3, 3, [1, 2, 3, 4, 5])

    # 测试用例 4: 反转前部分
    print("测试 4: 反转前部分")
    reverse_between([1, 2, 3, 4, 5], 1, 3, [3, 2, 1, 4, 5])

    # 测试用例 5: 反转后部分
    print("测试 5: 反转后部分")
    reverse_between([1, 2, 3, 4, 5], 3, 5, [1, 2, 5, 4, 3])

    # 测试用例 6: 只有两个节点
    print("测试 6: 只有两个节点")
    reverse_between([1, 2], 1, 2, [2, 1])

    # 测试用例 7: 单个节点
    print("测试 7: 单个节点")
    reverse_between([1], 1, 1, [1])

    # 测试用例 8: 空链表
    print("测试 8: 空链表")
    reverse_between([], 1, 1, [])

    # 测试用例 9: 反转最后两个节点
    print("测试 9: 反转最后两个节点")
    reverse_between([1, 2, 3, 4, 5], 4, 5, [1, 2, 3, 5, 4])

    # 测试用例 10: 长链表
    print("测试 10: 长链表")
    reverse_between([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 8, [1, 2, 8, 7, 6, 5, 4, 3, 9, 10])

    print("=" * 60)
    print("所有测试完成！")
    print("=" * 60)