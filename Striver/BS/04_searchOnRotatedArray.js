const searchOnRotatedArray = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === k) return mid;

    if (arr[low] <= arr[mid]) {
      if (k >= arr[low] && k < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (k > arr[mid] && k <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};

console.log(searchOnRotatedArray([7, 8, 9, 1, 2, 3, 4, 5, 6], 8));
