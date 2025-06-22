function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  const leftSortedArr = quickSort(left);
  const rightSortedArr = quickSort(right);

  return leftSortedArr.concat([pivot]).concat(rightSortedArr);
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = quickSort(array);
console.log(`Original array: ${array}`);
console.log(`Sorted array: ${sortedArray}`);
