var trap = function(height) {
    let array = []
    for(let i=0; i<height.length; i++){
        for(let j=0; j<height[i]; j++){
            if(array[j]){
                array[j].push(i)
            }
            else{
                array[j] = [i]
            }
        }
    }
    let result = 0
    for(let i=0; i<array.length; i++){
        if(array[i].length>1){
            result += array[i][array[i].length-1] - array[i][0] - (array[i].length - 1)
        }
    }
    return result
};

//暴力解法
var trap = function(height) {
    const len = height.length;
    let sum = 0;
    for(let i = 0; i < len; i++){
        // 第一个柱子和最后一个柱子不接雨水
        if(i == 0 || i == len - 1) continue;
        let rHeight = height[i]; // 记录右边柱子的最高高度
        let lHeight = height[i]; // 记录左边柱子的最高高度
        for(let r = i + 1; r < len; r++){
            if(height[r] > rHeight) rHeight = height[r];
        }
        for(let l = i - 1; l >= 0; l--){
            if(height[l] > lHeight) lHeight = height[l];
        }
        let h = Math.min(lHeight, rHeight) - height[i];
        if(h > 0) sum += h;
    }
    return sum;
};

//双指针
var trap = function(height) {
    const len = height.length;
    if(len <= 2) return 0;
    const maxLeft = new Array(len).fill(0);
    const maxRight = new Array(len).fill(0);
    // 记录每个柱子左边柱子最大高度
    maxLeft[0] = height[0];
    for(let i = 1; i < len; i++){
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
    }
    // 记录每个柱子右边柱子最大高度
    maxRight[len - 1] = height[len - 1];
    for(let i = len - 2; i >= 0; i--){
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    // 求和
    let sum = 0;
    for(let i = 0; i < len; i++){
        let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
        if(count > 0) sum += count;
    }
    return sum;
};

//单调栈 js数组作为栈
var trap = function(height) {
    const len = height.length;
    if(len <= 2) return 0; // 可以不加
    const st = [];// 存着下标，计算的时候用下标对应的柱子高度
    st.push(0);
    let sum = 0;
    for(let i = 1; i < len; i++){
        if(height[i] < height[st[st.length - 1]]){ // 情况一
            st.push(i);
        }
        if (height[i] == height[st[st.length - 1]]) {  // 情况二
            st.pop(); // 其实这一句可以不加，效果是一样的，但处理相同的情况的思路却变了。
            st.push(i);
        } else { // 情况三
            while (st.length !== 0 && height[i] > height[st[st.length - 1]]) { // 注意这里是while
                let mid = st[st.length - 1];
                st.pop();
                if (st.length !== 0) {
                    let h = Math.min(height[st[st.length - 1]], height[i]) - height[mid];
                    let w = i - st[st.length - 1] - 1; // 注意减一，只求中间宽度
                    sum += h * w;
                }
            }
            st.push(i);
        }
    }
    return sum;
};

//单调栈 简洁版本 只处理情况三
var trap = function(height) {
    const len = height.length;
    if(len <= 2) return 0; // 可以不加
    const st = [];// 存着下标，计算的时候用下标对应的柱子高度
    st.push(0);
    let sum = 0;
    for(let i = 1; i < len; i++){ // 只处理的情况三，其实是把情况一和情况二融合了
        while (st.length !== 0 && height[i] > height[st[st.length - 1]]) { // 注意这里是while
            let mid = st[st.length - 1];
            st.pop();
            if (st.length !== 0) {
                let h = Math.min(height[st[st.length - 1]], height[i]) - height[mid];
                let w = i - st[st.length - 1] - 1; // 注意减一，只求中间宽度
                sum += h * w;
            }
        }
        st.push(i);
    }
    return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6