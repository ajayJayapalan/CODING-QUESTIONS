const moveZerosToEnd = (arr) => {
  let k = 0;
  for (let i = 0; i < arr.length - k; i++) {
    if (arr[i] === 0) {
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr[arr.length - 1] = 0;
      k++;
      i--;
    }
  }
  return arr;
};

const arr = [1, 0, 2, 3, 0, 0, 5, 2, 0, 11];
const output = moveZerosToEnd(arr);
console.log({ output });
