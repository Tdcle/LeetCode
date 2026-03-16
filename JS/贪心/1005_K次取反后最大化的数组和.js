// var largestSumAfterKNegations = function(nums, k) {
//     nums.sort((a, b) => a - b)
//     let sum = 0, i = 0
//     for(let ii=0; ii<nums.length; ii++){
//       if(nums[ii] < 0 && k > 0){
//         nums[ii] = -nums[ii]
//         k--
//         sum += nums[ii]
//         i = ii+1
//       }
//     }
//     if( k%2 === 0){
//         for(let j=i; j<nums.length; j++){
//           sum+=nums[j]
//         }
//         return sum
//     }
//     else if(i !== nums.length) {
//       if(nums[i] >= nums[i-1]){
//         sum -= 2*nums[i-1]
//         for(let j=i; j<nums.length; j++){
//           sum+=nums[j]
//         }
//         return sum
//       }
//       else {
//         sum -= nums[i]
//         for(let j=i+1; j<nums.length; j++){
//           sum+=nums[j]
//         }
//         return sum
//       }
//     }
//     else{
//       nums.sort((a, b) => a - b)
//       sum -= 2*nums[0]
//     }
//     return sum
// };
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b) => Math.abs(b) - Math.abs(a))
    for(let i = 0 ;i < nums.length; i++){
        if(nums[i] < 0 && k > 0){
            nums[i] = - nums[i];
            k--;
        }
    }
    // 若k还大于0,则寻找最小的数进行不断取反
    while( k > 0 ){
        nums[nums.length-1] = - nums[nums.length-1]
        k--;
    }
    // 使用箭头函数的隐式返回值时，需使用简写省略花括号，否则要在 a + b 前加上 return
    return nums.reduce((a, b) => a + b)
};

// 版本二 (优化: 一次遍历)
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a)); // 排序
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0 && k-- > 0) { // 负数取反（k 数量足够时）
            nums[i] = -nums[i];
        }
        sum += nums[i]; // 求和
    }
    if(k % 2 > 0) { // k 有多余的（k若消耗完则应为 -1）
        sum -= 2 * nums[nums.length - 1]; // 减去两倍的最小值（因为之前加过一次）
    }
    return sum;
};
console.log(largestSumAfterKNegations([-8,3,-5,-3,-5,-2], 6))