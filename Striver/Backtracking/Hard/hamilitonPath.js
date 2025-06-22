const hamilitonCycle = (adjMatrix) => {
  const solutions = [];
  const len = adjMatrix.length;

  const backtrack = (i, path = []) => {
    if (path.length === len + 1) {
      if (path.at(-1) === 0) {
        solutions.push(path.slice());
      }
      return;
    }

    for (let c = 0; c < len; c++) {
      const item = adjMatrix[i][c];
      if (item && (!path.includes(i) || i === 0)) {
        path.push(i);
        backtrack(c, path);
        path.pop();
        if (i === 0) {
          break;
        }
      }
    }
  };

  backtrack(0, []);

  return solutions;
};

console.log(
  hamilitonCycle([
    [0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 1, 1, 1, 0],
    // [0, 1, 0, 1, 0],
    // [1, 0, 1, 1, 1],
    // [0, 1, 0, 0, 1],
    // [1, 1, 0, 0, 0],
    // [0, 1, 1, 0, 0],
  ])
);
