var pyramidTransition = function(bottom, allowed) {
    let allowedMap = new Map()
    for(let string of allowed){
        let key = string.slice(0,2)
        let val = string[2]
        allowedMap.has(key) ? allowedMap.get(key).push(val) : allowedMap.set(key, [val])
    }
    function DFS(bottom){
        if(bottom.length === 1) return true
        let nextLevelLIst = []
        for(let i=0; i<bottom.length-1; i++){
            let key = bottom.slice(i, i+2)
            if(!allowedMap.has(key)) return false
            let vals = allowedMap.get(key)
            nextLevelLIst.push(vals)
        }
        function backtrack(index, path){
            if(index === nextLevelLIst.length){
                return DFS(path)
            }
            for(let c of nextLevelLIst[index]){
                if(backtrack(index+1, path + c)) return true
            }
            return false
        }
        return backtrack(0, '')
    }
    return DFS(bottom)
};

console.log(pyramidTransition("AAAA", ["AAB","AAC","BCD","BBE","DEF"]));