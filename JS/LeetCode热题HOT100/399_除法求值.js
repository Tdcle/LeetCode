var calcEquation = function(equations, values, queries) {
    let graph = new Map();
    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        let val = values[i];
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push([b, val]);
        graph.get(b).push([a, 1 / val]);
    }

    function dfs(start, end, visited) {
        if (!graph.has(start) || !graph.has(end)) return -1;
        if (start === end) return 1;
        visited.add(start);
        for (let [next, val] of graph.get(start)) {
            if (visited.has(next)) continue;
            let res = dfs(next, end, visited);
            if (res !== -1) return res * val;
        }
        return -1;
    }

    let ans = [];
    for (let [start, end] of queries) {
        ans.push(dfs(start, end, new Set()));
    }
    return ans;
};

console.log(calcEquation([["a","b"],["b","c"]],[2.0,3.0],[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]));