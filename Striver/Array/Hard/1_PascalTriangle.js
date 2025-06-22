const dp = new Map();

// O(n^2)
const pascalTriangleElement = (r, c) => {
  if (c === 0 || r === c) return 1;
  if (c < 0 || c > r) return 0;

  const key = `${r},${c}`;
  if (dp.has(key)) return dp.get(key);

  let result =
    pascalTriangleElement(r - 1, c - 1) + pascalTriangleElement(r - 1, c);
  dp.set(key, result);
  return result;
};

// O (n^3)
const pascalTriangleRow = (r) => {
  let row = [];
  for (let i = 0; i < r; i++) {
    row.push(pascalTriangleElement(r - 1, i));
  }
  return row;
};

// O (n^4)
const pascalTriangleMatrix = (r) => {
  let matrix = [];
  for (let i = 1; i <= r; i++) {
    let row = pascalTriangleRow(i);
    matrix.push(row);
  }
  return matrix;
};

console.log(pascalTriangleElement(4, 3));
console.log(pascalTriangleRow(5));
console.log(pascalTriangleMatrix(5));
console.log(dp);
