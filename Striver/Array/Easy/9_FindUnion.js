function findUnion(arr1, arr2) {
  let union = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    const peek = union.at(-1);
    if (arr1[i] < arr2[j]) {
      if (peek !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else {
      if (peek !== arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < arr1.length) {
    const peek = union.at(-1);
    if (peek !== arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }
  while (j < arr2.length) {
    const peek = union.at(-1);
    if (peek !== arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }

  return union;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

const union = findUnion(arr2, arr1);

console.log("Union of arr1 and arr2 is:");
console.log(...union);
