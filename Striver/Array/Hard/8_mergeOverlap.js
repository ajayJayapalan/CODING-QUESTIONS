const mergerOverlap = (arr, k) => {
  const mergedArr = [];
  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < arr.length; i++) {
    const start = arr[i][0];
    let end = arr[i][1];

    if (mergedArr.length && end <= mergedArr.at(-1)[1]) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (end >= arr[j][0]) {
        end = arr[j][1];
      } else {
        break;
      }
    }
    mergedArr.push([start, end]);
  }

  return mergedArr;
};

const mergeOverlap2 = (arr) => {
  const mergedArr = [];

  arr.sort((a, b) => a[0] - b[0]);

  let i = 0;
  while (i < arr.length) {
    const start = arr[i][0];
    let end = arr[i][1];
    if (mergedArr.length && end <= mergedArr.at(-1)[1]) {
      i++;
      continue;
    }

    if (start <= mergedArr.at(-1)?.[1]) {
      mergedArr.at(-1)[1] = end;
    } else {
      mergedArr.push([start, end]);
    }
    i++;
  }

  return mergedArr;
};

console.log(
  mergerOverlap([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  mergeOverlap2([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
