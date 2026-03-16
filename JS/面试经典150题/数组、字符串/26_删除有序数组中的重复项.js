// var removeDuplicates = function(nums) {
//     let map = new Map()
//     let k = 0
//     for(let i=0; i<nums.length; i++){
//         if(map.has(nums[i])){
//             continue
//         }else{
//             nums[k] = nums[i]
//             map.set(nums[i],1)
//             k++
//         }
//     }
//     return k
// };

var removeDuplicates = function(nums) {
    let gap = 0
    for(let i=1; i<nums.length; i++){
        if(nums[i] === nums[i-1]){
            gap += 1
            continue
        }
        else{
            nums[i - gap] = nums[i]
        }
    }
    return nums.length - gap
};