const dijkstra = (graph, start) => {
  const distance = {};
  const visited = new Set();
  for (let node in graph) {
    distance[node] = -1;
  }
  distance[start] = 0;

  const queue = [[start, 0]];

  while (queue.length) {
    queue.sort((a, b) => a[1] - b[1]);
    const [node, dist] = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);

      for (let [neighbor, current] of graph[node]) {
        let newDist = current + dist;
        if (distance[neighbor] === -1 || newDist < distance[neighbor]) {
          distance[neighbor] = newDist;
          queue.push([neighbor, newDist]);
        }
      }
    }
  }

  return distance;
};

const graph = {
  A: [
    ["B", 2],
    ["C", 5],
  ],
  B: [
    ["C", 1],
    ["D", 4],
  ],
  C: [["D", 2]],
  D: [],
};

console.log(dijkstra(graph, "A"));
