var partitionLabels = function(s) {
    let arr = {}
    for(let i=0; i<s.length; i++){
        if(arr[s[i]] === undefined){
            arr[s[i]] = [i,i]
        }else{
            arr[s[i]][1] = i
        }
    }
    let newArr = Object.values(arr)
    newArr.sort((a,b)=>{
        if(a[0]===b[0]){
            return a[1]-b[1]
        }
        else{
            return a[0]-b[0]
        }
    })
    let res=[],start=newArr[0][0], end=newArr[0][1]
    for(let i=1; i<newArr.length; i++){
        if(newArr[i][0]>end){
            res.push(end-start+1)
            start = newArr[i][0]
            end = newArr[i][1]
        }else{
            end = Math.max(end, newArr[i][1])
        }
    }
    res.push(end-start+1)
    return res
};
console.log(partitionLabels("ababcbacadefegdehijhklij"))