const setMatrixZero1 = (arr) => {
  let n = arr.length; // row
  let m = arr[0].length; // col

  const markRow = (i) => {
    for (let k = 0; k < m; k++) {
      if (arr[i][k] !== 0) {
        arr[i][k] = -1;
      }
    }
  };

  const markColumn = (j) => {
    for (let k = 0; k < n; k++) {
      if (arr[k][j] !== 0) {
        arr[k][j] = -1;
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        markRow(i);
        markColumn(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === -1) {
        arr[i][j] = 0;
      }
    }
  }

  return arr;
};

const setMatrixZero = (arr) => {
  let n = arr.length;
  let m = arr[0].length;

  let rowIndex = new Array(n).fill(0); // 0 : false, 1 : true
  let colIndex = new Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        rowIndex[i] = 1;
        colIndex[j] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) {
        rowIndex[i] = 1;
        colIndex[j] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (rowIndex[i]) {
      for (let k = 0; k < m; k++) {
        arr[i][k] = 0;
      }
    }
  }
  for (let j = 0; j < m; j++) {
    if (colIndex[j]) {
      for (let k = 0; k < n; k++) {
        arr[k][j] = 0;
      }
    }
  }

  return arr;
};

console.log(
  setMatrixZero([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
