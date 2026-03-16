// var canJump = function(nums) {
//     function isFinish(index, maxStep){
//         if(index >= nums.length-1 || nums[index]+index >= nums.length-1) return true
//         maxStep = 0
//         let newIndex = index
//         for(let j=1; j<=nums[index]; j++){
//             if(nums[index+j]+j >= maxStep) {
//                 newIndex = index+j
//                 maxStep = nums[index+j] + j
//             }
//         }
//         maxStep = maxStep - (newIndex - index)
//         if(maxStep === 0 && index < nums.length-1) return false
//         return isFinish(newIndex, maxStep)
//     }
//     return isFinish(0, nums[0])
// };
var canJump = function(nums) {
    if(nums.length === 1) return true
    let cover = 0
    for(let i = 0; i <= cover; i++) {
        cover = Math.max(cover, i + nums[i])
        if(cover >= nums.length - 1) {
            return true
        }
    }
    return false
};
let nums = [1,1,2,2,0,1,1]
console.log(canJump(nums))