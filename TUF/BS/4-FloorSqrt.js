const floorSqrt = (n) => {
  let left = 0;
  let right = n;
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let prod = mid * mid;

    if (prod > n) {
      right = mid - 1;
    } else {
      ans = Math.max(ans, mid);
      left = mid + 1;
    }
  }

  return ans;
};

const res = floorSqrt(28);
console.log(res);
