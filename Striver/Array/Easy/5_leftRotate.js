const leftRotate = (arr, d) => {
  for (let i = 0; i < d; i++) {
    let firstEl = arr[0];
    let lastElIndex = arr.length - 1;
    for (let j = 0; j < lastElIndex; j++) {
      arr[j] = arr[j + 1];
    }
    arr[lastElIndex] = firstEl;
  }

  return arr;
};

const input = [1, 2, 3, 4, 5, 6, 7];
const k = 4;
const output = leftRotate(input, k);
console.log(output);
