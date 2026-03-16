from typing import Optional
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or k == 0:
            return head

        # 先计算链表长度，并找到尾节点
        n = 1
        tail = head
        while tail.next:
            tail = tail.next
            n += 1

        # 计算实际需要移动的步数
        k = k % n
        if k == 0:
            return head

        # 找到新的头节点位置
        current = head
        for _ in range(n - k - 1):
            current = current.next

        # 断开并重新连接
        new_head = current.next
        current.next = None
        tail.next = head

        return new_head


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


def check_result(head_array, k, expected, description):
    """验证旋转链表的结果"""
    solution = Solution()
    head = create_linked_list(head_array)
    result = solution.rotateRight(head, k)
    result_array = linked_list_to_array(result)

    status = "✅" if result_array == expected else "❌"
    print(f"{status} {description}")
    print(f"   输入：{head_array}, k={k}")
    print(f"   输出：{result_array}")
    print(f"   预期：{expected}")
    print()
    return result_array == expected


if __name__ == "__main__":
    print("=" * 60)
    print("旋转链表测试用例")
    print("=" * 60)
    print()

    # 测试用例 1: 基本案例
    check_result([1, 2, 3, 4, 5], 2, [4, 5, 1, 2, 3], "向右旋转 2 位")

    # 测试用例 2: 旋转整个链表长度
    check_result([1, 2, 3, 4, 5], 5, [1, 2, 3, 4, 5], "旋转 5 位（等于链表长度）")

    # 测试用例 3: 旋转 0 位
    check_result([1, 2, 3, 4, 5], 0, [1, 2, 3, 4, 5], "旋转 0 位")

    # 测试用例 4: 旋转超过链表长度
    check_result([1, 2, 3, 4, 5], 7, [4, 5, 1, 2, 3], "旋转 7 位（超过长度）")

    # 测试用例 5: 只有一个节点
    check_result([1], 1, [1], "只有一个节点")

    # 测试用例 6: 两个节点
    check_result([1, 2], 1, [2, 1], "两个节点旋转 1 位")

    # 测试用例 7: 空链表
    check_result([], 1, [], "空链表")

    # 测试用例 8: 旋转 1 位
    check_result([1, 2, 3, 4, 5], 1, [5, 1, 2, 3, 4], "旋转 1 位")

    # 测试用例 9: 大数旋转
    check_result([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, [6, 7, 8, 9, 10, 1, 2, 3, 4, 5], "10 个节点旋转 15 位")

    # 测试用例 10: 旋转 3 位
    check_result([0, 1, 2], 4, [2, 0, 1], "3 个节点旋转 4 位")

    print("=" * 60)
    print("所有测试完成！")
    print("=" * 60)