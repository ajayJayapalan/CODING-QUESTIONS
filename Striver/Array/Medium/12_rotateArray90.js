const rotateArray90 = (arr) => {
  let n = arr.length;
  let m = arr[0].length;

  let rotatedArray = [];

  for (let j = 0; j < m; j++) {
    let row = [];
    for (let i = n - 1; i >= 0; i--) {
      row.push(arr[i][j]);
    }
    rotatedArray.push(row);
  }

  return rotatedArray;
};

const transpose = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr[0].length; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }
  return arr;
};

const reverseRows = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < Math.floor(arr[0].length / 2); j++) {
      let k = arr[0].length - 1 - i;
      [arr[i][j], arr[i][k]] = [arr[i][k], arr[i][j]];
    }
  }

  return arr;
};

//  const rotateArray90 = arr => {
//   const trans = transpose(arr);
//   let rev = reverseRows(trans);
//   return rev;
//  }

console.log(
  reverseRows(
    transpose([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  )
);

const output = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];
