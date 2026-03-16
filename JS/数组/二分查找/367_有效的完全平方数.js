var isPerfectSquare = function(num) {
    let left = 0, right = num;
    while (left <= right) {
        // 防止加法溢出
        let mid = left + ((right - left) >> 1);
        if (mid*mid > num) {
            right = mid - 1;
        } else if (mid*mid < num) {
            left = mid + 1;
        } else {
            return true;
        }
    }
    return false
};

console.log(isPerfectSquare(2))
