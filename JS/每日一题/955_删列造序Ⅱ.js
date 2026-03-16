// 返回需要删除的列数，使得删除这些列后 strs 按字典序（非降序）排列
// 例如：保证 strs[0] <= strs[1] <= ... <= strs[n-1]
var minDeletionSize = function(strs) {
    // n: 字符串数量，m: 每个字符串的长度（列数）
    let n = strs.length;
    if (n <= 1) return 0; // 单行或空，不需要删除任何列
    let m = strs[0].length;

    // ans: 需要删除的列数
    let ans = 0;

    // `sorted[i]` 表示第 i 行与第 i+1 行之间的相对顺序已经通过之前的列确定（即 strs[i] < strs[i+1]），
    // 一旦确定则后续列不需要再比较这对相邻行 —— 这是实现字典序判断的关键优化。
    let sorted = new Array(n - 1).fill(false);

    // 逐列检查，贪心选择：只有当当前列导致某一尚未确定的相邻对出现下降时才删除该列
    for (let col = 0; col < m; col++){
        // 标记当前列是否需要删除
        let deleteCol = false;

        // 1) 检查是否存在尚未确定的相邻对在此列出现 strs[i][col] > strs[i+1][col]
        //    如果存在，就必须删除该列（ans++），然后跳过将该列作为排序依据的处理
        for (let i = 0; i < n - 1; i++){
            if (!sorted[i] && strs[i][col] > strs[i+1][col]){
                deleteCol = true;
                break;
            }
        }
        if (deleteCol){
            ans++;
            continue;
        }

        // 2) 若当前列不会导致下降，则对于所有尚未确定的相邻对，
        //    若 strs[i][col] < strs[i+1][col]，则这对相邻行的顺序被确定为正确，标记为已确定
        for (let i = 0; i < n - 1; i++){
            if (!sorted[i] && strs[i][col] < strs[i+1][col]){
                sorted[i] = true;
            }
        }

        // 若所有相邻对都已确定，则无需再检查后续列
        if (sorted.every(v => v)) break;
    }
    return ans;
};


console.log(minDeletionSize(["ca","bb","ac"])); // 1