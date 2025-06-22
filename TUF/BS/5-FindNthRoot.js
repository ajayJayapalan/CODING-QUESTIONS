const findNthRoot = (n, m) => {
  let left = 0;
  let right = m;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let pow = Math.pow(n, mid);

    if (pow === m) {
      return mid;
    } else if (pow > m) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

const res = findNthRoot(4, 69);
console.log(res);
