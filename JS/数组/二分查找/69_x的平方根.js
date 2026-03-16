var mySqrt = function(x) {
    let left = 0, right = x;
    while (left <= right) {
        // 防止加法溢出
        let mid = left + ((right - left) >> 1);
        if (mid*mid > x) {
            right = mid - 1;
        } else if (mid*mid < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return left - 1
};

console.log(mySqrt(3))