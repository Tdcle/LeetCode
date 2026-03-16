var isAnagram = function(s, t) {
    if (s.length !== t.length)  return false
    let map = new Map()
    for(let str of s){
        map.set(str, map.has(str) ? map.get(str)+1 : 1)
    }
    for(let str of t){
        if(map.has(str)){
            if(map.get(str) > 0){
                map.set(str, map.get(str) - 1)
            }else{
                return false
            }
        }else{
            return false
        }
    }
    return true
};
