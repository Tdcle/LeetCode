var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let res = 0
    while(left < right){
        if(height[left] <= height[right]){
            res = Math.max(res, height[left] * (right-left))
            left++
        }
        else{
            res = Math.max(res, height[right] * (right-left))
            right--
        }
    }
    return res
};
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1