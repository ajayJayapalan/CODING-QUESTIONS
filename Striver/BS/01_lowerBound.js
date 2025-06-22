// brute force
const lowerBound = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= x) {
      return i;
    }
  }

  return arr.length;
};

const lowerBound2 = (arr, x) => {
  let index = null;

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (x === arr[mid]) {
      index = mid;
      break;
    } else if (x < arr[mid]) {
      index = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return index;
};

console.log(lowerBound([3, 5, 8, 15, 19], 9));
console.log(lowerBound2([3, 5, 8, 15, 19], 9));
