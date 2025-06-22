const printPath = (matrix) => {
  const solutions = [];

  const rowLen = matrix.length;
  const colLen = matrix[0].length;

  const direction = [
    [1, 0],
    [0, 1],
  ];

  const isLeftOrRightPossibe = (i, j) => {
    if (i > rowLen - 1 || j > colLen - 1) {
      return false;
    }
    return true;
  };

  const backtrack = (i, j, path) => {
    if (i === 0 && j === 0) {
      path.push(matrix[i][j]);
    }

    if (i === rowLen - 1 && j === colLen - 1) {
      solutions.push(JSON.parse(JSON.stringify(path)));
      return;
    }

    for (let [rowDir, colDir] of direction) {
      i += rowDir;
      j += colDir;
      if (isLeftOrRightPossibe(i, j)) {
        path.push(matrix[i][j]);
        backtrack(i, j, path);
        path.pop();
      }
      i -= rowDir;
      j -= colDir;
    }
  };

  backtrack(0, 0, []);

  return solutions;
};

console.log(
  printPath([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
