var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    for(let str of magazine){
        map.set(str, map.has(str)? map.get(str)+1 : 1)
    }
    for(let str of ransomNote){
        if(map.has(str)){
            if(map.get(str) > 0){
                map.set(str, map.get(str) - 1) 
            } else {
                return false
            }
        } else {
            return false
        }
    }
    return true
};