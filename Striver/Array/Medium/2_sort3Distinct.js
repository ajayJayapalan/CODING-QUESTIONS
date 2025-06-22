const sortThreeDistinct = (arr) => {
  let left = 0;
  let mid = 0;
  let right = arr.length - 1;

  while (mid <= right) {
    if (arr[mid] === 0) {
      [arr[left], arr[mid]] = [arr[mid], arr[left]];
      left++;
      mid++;
    } else if (arr[mid] === 2) {
      [arr[right], arr[mid]] = [arr[mid], arr[right]];
      right--;
    } else if (arr[mid] === 1) {
      mid++;
    }
  }

  return arr;
};
