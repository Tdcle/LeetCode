/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let ans = 0
    for(let num of set) {
        if(!set.has(num-1)){
            let curLen = 1
            while(set.has(num+1)){
                curLen++
                num++
            }
            ans = Math.max(ans, curLen)
        }
    }
    return ans
};
console.log(longestConsecutive([100,4,200,1,3,2])) // 4 // [1,2,3,4]
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) // 9 [0,1,2,3,4,5,6,7,8]
// 128. 最长连续序列