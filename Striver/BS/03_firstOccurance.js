const firstOccurance = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;
  let ans = null;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (x === arr[mid]) {
      ans = mid;
      high = mid - 1;
    } else if (x < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};

console.log(firstOccurance([3, 4, 13, 13, 13, 20, 40], 13));
