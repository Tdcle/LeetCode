var maxLevelSum = function(root) {
    let len = root.length
    let maxSum = root[0], l=0, r=0, num=0, level=1, ans=1
    while(r<=len-1){
        let sum = 0, num=0
        for(let i=l; i<=r; i++){
            if(root[i]!==null){
                sum += root[i]
                num++
            }
        }
        if(sum > maxSum){
            maxSum = sum
            ans = level
        }
        level++
        num*=2
        l = r+1
        r += num
    }
    if(r>=len) return ans
    let sum=0
    for(let i=r+1; i<len; i++){
        if(root[i]!==null)
            sum += root[i]
    }
    if(sum > maxSum){
        maxSum = sum
        ans = level
    }
    return ans
};

console.log(maxLevelSum([989,null,10250,98693,-89388,null,null,null,-32127])) // 2