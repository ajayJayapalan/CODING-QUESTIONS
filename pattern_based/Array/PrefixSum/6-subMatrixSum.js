const buildMatrixPrefixSum = (matrix = []) => {
  const cLength = matrix.length;
  const rLength = matrix[0].length;

  const prefixMatrix = new Array(cLength)
    .fill(0)
    .map(() => new Array(rLength).fill(0));
  for (let i = 0; i < cLength; i++) {
    for (let j = 0; j < rLength; j++) {
      let sum = matrix[i][j];
      if (j > 0) {
        sum += prefixMatrix[i][j - 1];
      }
      if (i > 0) {
        sum += prefixMatrix[i - 1][j];
      }
      if (j > 0 && i > 0) {
        sum -= prefixMatrix[i - 1][j - 1];
      }
      prefixMatrix[i][j] = sum;
    }
  }

  return prefixMatrix;
};

const subMatrixSum = (matrix, r1, c1, r2, c2) => {
  const prefixMatrix = buildMatrixPrefixSum(matrix);
  let fullMatrixSum = prefixMatrix[c2][r2];
  if (c1 > 0) {
    fullMatrixSum -= prefixMatrix[c1 - 1][r2];
  }
  if (r1 > 0) {
    fullMatrixSum -= prefixMatrix[c2][r1 - 1];
  }

  if (c1 > 0 && r1 > 0) {
    fullMatrixSum += prefixMatrix[c1 - 1][r1 - 1];
  }

  return fullMatrixSum;
};

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];

// const prefixMatrix = buildMatrixPrefixSum(matrix);
const res = subMatrixSum(matrix, 1, 1, 4, 4);

console.log(res);
