// var wiggleMaxLength = function(nums) {
//   if( nums.length <= 1 ) return nums.length
//   let result = 2
//   let flag = 1
//   if(nums[1]-nums[0]>0) flag = 1
//   else if(nums[1]-nums[0]<0) flag = -1
//   else {
//     result = 1
//     flag = 0
//   }
//   for(let i=2; i<nums.length; i++) {
//     if(flag === 1){
//       if(nums[i] < nums[i-1]){
//         result++
//         flag = -1
//       }
//     }else if(flag === -1){
//       if(nums[i] > nums[i-1]){
//         result++
//         flag = 1
//       }
//     }else if(flag === 0){
//       if(nums[i] !== nums[i-1]){
//         result++
//         flag = nums[i] > nums[i-1] ? 1 : -1
//       }
//     }
//   }
//   return result
// };

var wiggleMaxLength = function(nums) {
    if (nums.length === 1) return 1;
    // 考虑前i个数，当第i个值作为峰谷时的情况（则第i-1是峰顶）
    let down = 1;
    // 考虑前i个数，当第i个值作为峰顶时的情况（则第i-1是峰谷）
    let up = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            down = Math.max(up + 1, down);
        }
        if (nums[i] > nums[i - 1]) {
            up = Math.max(down + 1, up)
        }
    }
    return Math.max(down, up);
};

nums=[1,1,7,4,9,2,5]
console.log(wiggleMaxLength(nums))