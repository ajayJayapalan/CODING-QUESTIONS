const nCr = (n, r) => {
  let nProd = 1;
  let rProd = 1;

  for (let i = 0; i < r; i++) {
    nProd = nProd * (n - i);
    rProd = rProd * (r - i);
  }

  return nProd / rProd;
};

const pascalTriangleElement = (r, c) => {
  return nCr(r - 1, c - 1);
};

const pascalTriangleRow = (r) => {
  r = r - 1;
  c = 1;
  const row = [];

  row.push(1);

  let upProd = 1;
  let btmProd = 1;

  for (let i = 0; i < r; i++) {
    upProd = upProd * (r - i);
    btmProd = btmProd * (i + 1);
    row.push(upProd / btmProd);
  }
  return row;
};

const pascalTriangle = (n) => {
  const triangle = [];

  for (let i = 1; i <= n; i++) {
    const row = pascalTriangleRow(i);
    triangle.push(row);
  }

  return triangle;
};

console.log(pascalTriangleElement(5, 2));
console.log(pascalTriangleRow(6));
console.log(pascalTriangle(6));
