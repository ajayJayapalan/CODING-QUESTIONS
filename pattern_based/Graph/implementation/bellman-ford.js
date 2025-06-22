const bellmanFord = (source, graph = [], verticesSize) => {
  let dist = new Array(verticesSize).fill(Infinity);
  dist[source] = 0;

  const sweep = () => {
    let isRelaxed = false;
    for (let node of graph) {
      const [u, v, w] = node;

      let newDist = dist[u] + w;
      if (dist[u] !== Infinity && newDist < dist[v]) {
        isRelaxed = true;
        dist[v] = newDist;
      }
    }
    return isRelaxed;
  };

  let sweepCount = 0;
  while (sweepCount < verticesSize - 1) {
    const isRelaxed = sweep();
    sweepCount++;
    if (!isRelaxed) break;
  }

  if (sweepCount == verticesSize - 1) {
    const isRelaxed = sweep();
    if (isRelaxed) return "Cycle exist";
  }

  return dist;
};

const bellmanFord2 = (source, graph = [], verticesSize) => {
  let dist = new Array(verticesSize).fill(Infinity);
  dist[source] = 0;

  const sweep = () => {
    let isRelaxed = false;
    for (let [u, v, w] of graph) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        isRelaxed = true;
      }
    }
    return isRelaxed;
  };

  // Step 1: Relax all edges V - 1 times
  for (let i = 0; i < verticesSize - 1; i++) {
    if (!sweep()) break; // Early stop if no update
  }

  // Step 2: Check for negative weight cycle
  if (sweep()) {
    return "Cycle exist";
  }

  return dist;
};

console.log(
  bellmanFord(
    0,
    [
      [0, 1, 1],
      [1, 2, -1],
      [2, 3, -1],
      [3, 1, -1],
    ],
    4
  )
);
