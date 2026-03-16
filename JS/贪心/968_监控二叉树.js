var minCameraCover = function (root) {
    let result = 0
    // 0 无覆盖
    // 1 有摄像头
    // 2 有覆盖
    function traversal(cur) {
        if (cur === null) {
            return 2
        }
        let left = traversal(cur.left)
        let right = traversal(cur.right)

        if (left === 2 && right === 2) {
            return 0
        }
        if (left === 0 || right === 0) {
            result++
            return 1
        }
        if (left === 1 || right === 1) {
            return 2
        }
        return -1
    }
    if (traversal(root) === 0) {
        result++
    }
    return result
};

console.log(minCameraCover([0, 0, null, 0, 0]))