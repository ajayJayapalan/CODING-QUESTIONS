const singleElment = (arr) => {
  const n = arr.length;
  if (n === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);

    if (arr[mid - 1] !== arr[mid] && arr[mid] !== arr[mid + 1]) {
      return arr[mid];
    }

    if (
      mid % 2 === 0 &&
      arr[mid] === arr[mid + 1] &&
      mid % 2 === 1 &&
      arr[mid - 1] === arr[mid]
    ) {
    } else {
      if (arr[mid] === arr[mid + 1]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
};

console.log(singleElment([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]));
