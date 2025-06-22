const smallestDivisor = (arr, limit) => {
  const max = Math.max(...arr);

  let low = 1;
  let high = max;

  let smDivisor = Infinity;

  const getSum = (divisor) => {
    let sum = 0;

    for (let num of arr) {
      sum += Math.ceil(num / divisor);
    }
    return sum;
  };

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    const sum = getSum(mid);

    if (sum <= limit) {
      smDivisor = Math.min(smDivisor, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return smDivisor;
};

console.log(smallestDivisor([8, 4, 2, 3], 10));
