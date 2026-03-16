var totalFruit = function(fruits) {
    let now = 0, left = 0, type = 0, ans = 0
    let map = new Map()
    for(let i=0; i<fruits.length; i++){
        if(type<2){
            if(map.has(fruits[i])){
                map.set(fruits[i], map.get(fruits[i]) + 1)
            }else{
                map.set(fruits[i], 1)
                type++
            }
            now++
            ans = Math.max(ans, now)
        }else{
            if(map.has(fruits[i])){
                now++
                ans = Math.max(ans, now)
                map.set(fruits[i], map.get(fruits[i]) + 1)
            }else{
                map.set(fruits[i], 1)
                now++
                for(let j = left; j<i; j++){
                    map.set(fruits[j], map.get(fruits[j]) - 1)
                    now--
                    if(map.get(fruits[j]) === 0){
                        map.delete(fruits[j])
                        left = j + 1
                        break
                    }
                }
            }
        }
    }
    return ans
};

fruits = [1,0,3,4,3]
console.log(totalFruit(fruits))