// 先填满第一行后，每次搜索两个方向，前进步数相同，然后步数减一，继续搜索两个方向，以此类推步数为0
var generateMatrix = function(n) {
    let ans = new Array(n).fill().map(() => Array(n).fill(0))
    let now = 0, t = 0
    x = [0, 1, 0, -1]
    y = [1, 0, -1, 0]
    let x_now = 0, y_now = n-1
    for(let i=0; i<n; i++)  ans[0][i] = ++now
    for(let i=1; i<n; i++){
        for(let j=0; j<2; j++){
            t = (t+1) % 4       // 计算方向
            for(let k=0; k<n-i; k++){
                x_now += x[t]
                y_now += y[t]
                ans[x_now][y_now] = ++now
            }
        }
    }
    return ans
}
console.log(generateMatrix(10))

// 还可用模拟
// 模拟矩阵的生成。按照要求，初始位置设为矩阵的左上角，初始方向设为向右。若下一步的位置超出矩阵边界，或者是之前访问过的位置，则顺时针旋转，进入下一个方向。如此反复直至填入 n² 个元素。

// 记 matrix 为生成的矩阵，其初始元素设为 0。由于填入的元素均为正数，我们可以判断当前位置的元素值，若不为 0，则说明已经访问过此位置。
