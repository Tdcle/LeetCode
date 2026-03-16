var groupAnagrams = function(strs) {
    let ans = []
    let map = new Map()
    for(let str of strs){
        let s = str.split("").sort().join("")
        if(map.has(s)){
            ans[map.get(s)].push(str) 
        }else{
            map.set(s, ans.length)
            ans.push([str])
        }
    }
    return ans
};