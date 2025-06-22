// linear
const smallestDivisorThreshold1 = (nums = [], limit) => {
  let max = Math.max(...nums);

  for (let i = 1; i <= max; i++) {
    let sum = 0;
    for (let num of nums) {
      sum += Math.ceil(num / i);
    }
    if (sum <= limit) {
      return i;
    }
  }

  return -1;
};

// bineary search
const smallestDivisorThreshold2 = (nums = [], limit) => {
  let max = Math.max(...nums);

  let left = 1;
  let right = max;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let sum = 0;
    for (let num of nums) {
      sum += Math.ceil(num / mid);
    }

    if (sum > limit) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};
