const floydWarshall = (graph = [], vLength = 0) => {
  let matrix = new Array(vLength)
    .fill(null)
    .map(() => new Array(vLength).fill(null).map(() => [Infinity, null]));
  for (let item of graph) {
    const [u, v, w] = item;
    matrix[u][v] = [w, u].concat();
  }

  for (let i = 0; i < vLength; i++) {
    matrix[i][i] = [0, null];
  }

  const iterate = (index) => {
    for (let i = 0; i < vLength; i++) {
      for (let j = 0; j < vLength; j++) {
        if (i === 0 && j === 0) continue;
        if (i === index || j === index) continue;

        let current = matrix[i][j];
        let via = matrix[i][index];
        let to = matrix[index][j];

        let newDist = via[0] + to[0];
        if (newDist < current[0]) {
          matrix[i][j] = [newDist, index];
        }
      }
    }
  };

  for (let i = 0; i < vLength; i++) {
    iterate(i);
  }

  return matrix;
};

const graph = [
  [0, 1, 2],
  [0, 3, 3],
  [1, 0, 3],
  [1, 2, 2],
  [2, 3, 4],
  [3, 1, 6],
  [3, 0, -2],
];

console.log(floydWarshall(graph, 4));
