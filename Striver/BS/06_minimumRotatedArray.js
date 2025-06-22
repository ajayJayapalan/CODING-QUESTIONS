const minimumRotatedArray = (arr) => {
  let low = 0;
  let high = arr.length - 1;

  let min = Infinity;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    min = Math.min(min, arr[mid]);

    if (arr[low] > arr[mid]) {
      high = mid - 1;
    } else if (arr[high] < arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return min;
};

console.log(minimumRotatedArray([2, 3, 1]));
