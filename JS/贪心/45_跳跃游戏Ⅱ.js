var jump = function(nums) {
    if(nums.length === 1) return 0
    function isFinish(index, maxStep, step){
        if(index >= nums.length-1 || nums[index]+index >= nums.length-1) return step+1
        maxStep = 0
        let newIndex = index
        for(let j=1; j<=nums[index]; j++){
            if(nums[index+j]+j >= maxStep) {
                newIndex = index+j
                maxStep = nums[index+j] + j
            }
        }
        maxStep = maxStep - (newIndex - index)
        return isFinish(newIndex, maxStep, step+1)
    }
    return isFinish(0, nums[0], 0)
};
console.log(jump([2,3,1,1,4]))