const searchRotatedArray = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === k) return true;

    if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
      low++;
      high--;
      continue;
    }

    if (arr[low] <= arr[mid]) {
      if (k >= arr[low] && k <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (k >= arr[mid] && k <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return false;
};

console.log(searchRotatedArray([]));
