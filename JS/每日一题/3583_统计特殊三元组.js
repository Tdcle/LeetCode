/**
 * 题解（一次遍历 + 计数表，O(n)）：
 * 思路：
 *  - 先统计每个数字在整个数组中出现的次数 numCnt（右侧初始计数）
 *  - 维护一个遍历到当前位置为止的计数表 numPartialCnt（左侧计数）
 *  - 遍历数组当前元素 v：
 *      target = v * 2
 *      lCnt = 左侧已经出现的 target 的数量（numPartialCnt[target]）
 *      更新左侧计数：numPartialCnt[v]++
 *      rCnt = 右侧还剩下的 target 的数量 = numCnt[target] - numPartialCnt[target]
 *      对当前 v，能组成的三元组数为 lCnt * rCnt
 */
var specialTriplets = function(nums) {
    const MOD = 1e9 + 7;
    const numCnt = new Map();        // 全局计数（右侧初始计数）
    const numPartialCnt = new Map(); // 遍历时的左侧计数

    // 先统计每个数在数组中出现的总次数
    for (const v of nums) {
        numCnt.set(v, (numCnt.get(v) ?? 0) + 1);
    }

    let ans = 0;
    // 从左向右遍历，把当前位置视为中间元素 v
    for (const v of nums) {
        const target = v * 2;
        // 左侧已有的 target 个数（可能为 undefined，则用 0）
        const lCnt = numPartialCnt.get(target) ?? 0;

        // 把当前 v 加入左侧计数（因为当前位置作为中间元素之后，v 变为左侧元素）
        numPartialCnt.set(v, (numPartialCnt.get(v) ?? 0) + 1);

        // 右侧剩余的 target 个数 = 全局总数 - 已经进入左侧的 target 个数
        const rCnt = (numCnt.get(target) ?? 0) - (numPartialCnt.get(target) ?? 0);

        ans = (ans + (lCnt * rCnt) % MOD) % MOD;
    }
    return ans;
};

console.log(specialTriplets([0,1,0,0]))