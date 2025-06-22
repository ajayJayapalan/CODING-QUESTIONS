const power = (n, m) => {
  let ans = 1;
  let i = n;
  while (i !== 0) {
    ans *= m;
    i--;
  }

  return ans;
};

const nthRoot = (n, m) => {
  if (m === 0) return 0;
  if (m === 1) return 1;
  if (n === 0) return 1;
  if (n === 1) return m;

  let low = 0;
  high = m;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const val = power(n, mid);

    if (val === m) {
      return mid;
    }

    if (val < m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

const nthRoot2 = (n, m) => {
  for (let i = 1; i < m; i++) {
    const nthPowerofi = power(n, i);
    if (nthPowerofi === m) return i;
    if (nthPowerofi > m) break;
  }

  return -1;
};

const nthRoot3 = (n, m) => {
  let ans = m;
  let i = 0;

  while (i < n) {
    ans *= 1 / n;
    i++;
  }

  return ans > 1 ? ans : -1;
};

console.log(nthRoot(4, 625));
console.log(nthRoot2(4, 625));
console.log(nthRoot3(4, 625));
