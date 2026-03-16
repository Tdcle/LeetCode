function canFinish(numCourses, prerequisites) {
    const edges = new Map();
    const indeg = new Array(numCourses).fill(0);

    // 构建邻接表和入度数组
    for (const info of prerequisites) {
        const [course, prerequisite] = info;
        if (!edges.has(prerequisite)) {
            edges.set(prerequisite, []);
        }
        edges.get(prerequisite).push(course);
        indeg[course]++;
    }

    // 将入度为 0 的节点加入队列
    const queue = [];
    for (let u = 0; u < numCourses; u++) {
        if (indeg[u] === 0) {
            queue.push(u);
        }
    }

    let visited = 0;

    // 进行拓扑排序
    while (queue.length > 0) {
        visited++;
        const u = queue.shift();
        if (edges.has(u)) {
            for (const v of edges.get(u)) {
                indeg[v]--;
                if (indeg[v] === 0) {
                    queue.push(v);
                }
            }
        }
    }

    return visited === numCourses;
}