const peekElement = (arr) => {
  const n = arr.length;

  if (n === 1) return arr[0];
  if (arr[0] > arr[1]) return arr[0];
  if (arr[n - 1] > arr[n - 2]) return arr[n - 1];

  let low = 1;
  let high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;

    if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

console.log(peekElement([1, 2, 1, 3, 5, 6, 4]));
