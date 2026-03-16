var restoreIpAddresses = function(s) {
    if (s.length < 4 || s.length > 12) return []; // IP地址长度限制
    if (!/^\d+$/.test(s)) return []; // 只允许数字字符
    let result = []
    // 检查IP段是否合法
    const isValid = (str) => {
        if (str.length === 0 || str.length > 3) return false;
        if (str.length > 1 && str[0] === '0') return false; // 不能以0开头
        const num = parseInt(str);
        return num >= 0 && num <= 255; // 数字必须在0到255之间
    };
    const dfs = (arr, start, count, now_len) => {
        if (count > 4 || start > s.length) return; // 超过4段或字符串结束
        if (now_len + 3*(4-count) < s.length) {
            return; // 剩余长度不足以填满剩余段
        }
        if (count === 4 && start === s.length) {
            result.push(arr.join('.'));
            return;
        }
        for(let i=1; i<=3; i++) {
            let segment = s.slice(start, start + i);
            if(isValid(segment)) {
                arr.push(segment);
                dfs(arr, start + i, count + 1, now_len + i);
                arr.pop(); // 回溯
            }
        }
    }
    dfs([], 0, 0, 0);
    return result;
};

console.log(restoreIpAddresses("25525511135"))
