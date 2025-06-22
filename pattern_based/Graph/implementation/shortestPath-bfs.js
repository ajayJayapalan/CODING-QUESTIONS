function shortestPath(graph, start, end) {
  const visited = new Set();
  const queue = [[start, "" + start, 0]];

  // bfs
  while (queue.length) {
    const [node, path, count] = queue.shift();
    if (!node) continue;
    if (node === end) return { path, count };

    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node] || []) {
        queue.push([neighbor, path + "->" + neighbor, count + 1]);
      }
    }
  }

  return -1;
}

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: ["F"],
  E: ["F"],
  F: [],
};

console.log(shortestPath(graph, "A", "F"));
