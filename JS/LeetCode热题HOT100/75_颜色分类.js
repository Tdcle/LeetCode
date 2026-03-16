var sortColors = function(nums) {
    let pos1 = 0, pos2 = nums.length-1
    let i = 0
    while(i<=pos2){
        if(nums[i] === 0){
            [nums[i], nums[pos1]] = [nums[pos1], nums[i]];
            pos1++;
            i++;
        }
        else if(nums[i] === 2){
            [nums[i], nums[pos2]] = [nums[pos2], nums[i]];
            pos2--;
        }else{
            i++;
        }
    }
    return nums;
};
console.log(sortColors([2,0,1]));