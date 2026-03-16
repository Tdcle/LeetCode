var canCompleteCircuit = function(gas, cost) {
    let arr = new Array(gas.length).fill(0)
    for(let i=0; i< gas.length; i++){
      arr[i] = gas[i] - cost[i]
    }
    for(let i = 0; i<arr.length; i++){
      if(arr[i] < 0) continue
      let now = 0,flag=1
      for(let j=i; j<arr.length; j++){
        now += arr[j]
        if(now < 0){
          flag = 0
          break
        }
      }
      if(!flag) continue
      for(let j=0; j<=i; j++){
        now += arr[j]
        if(now < 0){
          flag = 0
          break
        }
      }
      if(flag) return i
      else continue
    }
    return -1
};

// var canCompleteCircuit = function(gas, cost) {
//     let curSum = 0
//     let min = Infinity
//     for(let i = 0; i < gas.length; i++) {
//         let rest = gas[i] - cost[i]
//         curSum += rest
//         if(curSum < min) {
//             min = curSum
//         }
//     }
//     if(curSum < 0) return -1   //1.总油量 小于 总消耗量
//     if(min >= 0) return 0      //2. 说明油箱里油没断过
//                                //3. 从后向前，看哪个节点能这个负数填平，能把这个负数填平的节点就是出发节点
//     for(let i = gas.length -1; i >= 0; i--) {
//         let rest = gas[i] - cost[i]
//         min += rest
//         if(min >= 0) {
//             return i
//         }
//     }
//     return -1
// }

var canCompleteCircuit = function(gas, cost) {
    const gasLen = gas.length
    let start = 0
    let curSum = 0
    let totalSum = 0

    for(let i = 0; i < gasLen; i++) {
        curSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]
        // 总油量如果够，且只有唯一解，因为必然从curSum>0的节点出发的，所以curSum如果小于0，说明这一段都不可用，从下一节点从新开始
        if(curSum < 0) {
            curSum = 0
            start = i + 1
        }
    }
    // 总油量不够
    if(totalSum < 0) return -1

    return start
};

console.log(canCompleteCircuit([2,3,4], [3,4,3]))