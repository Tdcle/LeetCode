var nextGreaterElements = function(nums) {
    let result = Array(nums.length).fill(-1)
    let stack = []
    for(let i=0; i<nums.length; i++){
        while(stack.length && nums[i]>nums[stack[stack.length-1]]){
            result[stack[stack.length-1]] = nums[i]
            stack.pop()
        }
        stack.push(i)
    }
    for(let i=0; i<=stack[0]; i++){
        while(stack.length && nums[i]>nums[stack[stack.length-1]]){
            result[stack[stack.length-1]] = nums[i]
            stack.pop()
        }
    }
    return result
};
console.log(nextGreaterElements([1,2,3,4,3]));