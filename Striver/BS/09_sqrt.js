const sqrt = (n) => {
  let low = 0;
  let high = n;

  let ans = -Infinity;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const val = mid * mid;

    if (val <= n) {
      ans = Math.max(ans, mid);
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};

console.log(sqrt(24));
