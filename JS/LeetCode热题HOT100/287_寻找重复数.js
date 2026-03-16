// 二分
// 我们定义 cnt[i] 表示 nums 数组中小于等于 i 的数有多少个，假设我们重复的数是 target，
// 那么 [1,target−1]里的所有数满足 cnt[i]≤i，[target,n] 里的所有数满足 cnt[i]>i，具有单调性。

var findDuplicate = function(nums) {
    const n = nums.length;
    let l = 1, r = n - 1, ans = -1;
    while (l <= r) {
        let mid = (l + r) >> 1;
        let cnt = 0;
        for (let i = 0; i < n; ++i) {
            cnt += nums[i] <= mid;
        }
        if (cnt <= mid) {
            l = mid + 1;
        } else {
            r = mid - 1;
            ans = mid;
        }
    }
    return ans;
};

// // 快慢指针
// 我们对 nums 数组建图，每个位置 i 连一条 i→nums[i] 的边。
// 由于存在的重复的数字 target，因此 target 这个位置一定有起码两条指向它的边，
// 因此整张图一定存在环，且我们要找到的 target 就是这个环的入口，那么整个问题就等价于 142. 环形链表 II。

var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    // 第一阶段找到相遇点
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    // 第二阶段找环的入口
    slow = 0;
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};


console.log(findDuplicate([1,3,4,2,2])) // 2
console.log(findDuplicate([3,1,3,4,2])) // 3