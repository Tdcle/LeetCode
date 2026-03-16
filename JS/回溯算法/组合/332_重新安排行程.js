// var findItinerary = function(tickets) {
//     let map = new Map();
//     for (let [from, to] of tickets) {
//         if (!map.has(from)) map.set(from, []);
//         map.get(from).push(to);
//     }
//     for (let key of map.keys()) {
//         map.get(key).sort(); // 按字典序排序
//     }
//     let result = [];
//     let path = ["JFK"];
//     function backtracking(start) {
//         if (path.length === tickets.length + 1) {
//             result = [...path];
//             return true; // 找到一个合法行程，直接返回
//         }
//         if (!map.has(start)) return false;
//         let destList = map.get(start);
//         for (let i = 0; i < destList.length; i++) {
//             let city = destList[i];
//             destList.splice(i, 1); // 删除当前目的地
//             path.push(city);
//             if (backtracking(city)) return true; // 找到就直接返回
//             path.pop();
//             destList.splice(i, 0, city); // 恢复当前目的地
//         }
//         return false;
//     }
//     backtracking("JFK");
//     return result;
// };

// 欧拉路径
// 题目已经表明这是一个欧拉图，并且给出了起始点
const findItinerary = (tickets) => {
  const res = [];
  const map = {};
  
  for (const ticket of tickets) { // 建表
    const [from, to] = ticket;
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }
  for (const city in map) {
    map[city].sort();
  }

  const dfs = (node) => { // 当前城市
    const nextNodes = map[node]; // 当前城市的邻接城市
    while (nextNodes && nextNodes.length) { // 遍历，一次迭代设置一个递归分支
      const next = nextNodes.shift(); // 获取并移除第一项，字母小的城市
      dfs(next);                      // 向下递归
    }                 
    // 当前城市没有下一站，就把他加到res里，递归开始向上返回，选过的城市一个个推入res 
    res.unshift(node); 
  };

  dfs('JFK'); // 起点城市
  return res;
};



tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","JFK"],["ATL","AAA"],["AAA","ATL"],["ATL","BBB"],["BBB","ATL"],["ATL","CCC"],["CCC","ATL"],["ATL","DDD"],["DDD","ATL"],["ATL","EEE"],["EEE","ATL"],["ATL","FFF"],["FFF","ATL"],["ATL","GGG"],["GGG","ATL"],["ATL","HHH"],["HHH","ATL"],["ATL","III"],["III","ATL"],["ATL","JJJ"],["JJJ","ATL"],["ATL","KKK"],["KKK","ATL"],["ATL","LLL"],["LLL","ATL"],["ATL","MMM"],["MMM","ATL"],["ATL","NNN"],["NNN","ATL"]]
console.log(findItinerary(tickets));
// 输出: ["JFK","MUC","LHR","SFO","SJC"]