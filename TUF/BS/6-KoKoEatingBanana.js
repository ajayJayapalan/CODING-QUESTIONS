const linearKokoEating = (nums = [], hour) => {
  let mostBanana = Math.max(...nums);

  for (let i = 1; i <= mostBanana; i++) {
    let totalHourTookByIhour = 0;
    for (let num of nums) {
      totalHourTookByIhour += Math.ceil(num / i);
    }
    if (totalHourTookByIhour <= hour) {
      return i;
    }
  }

  return -1;
};

const BSkokoEating = (nums = [], hour) => {
  let mostBanana = Math.max(...nums);

  let left = 1;
  let right = mostBanana;

  let ans = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let totalHourTookByIhour = 0;
    for (let num of nums) {
      totalHourTookByIhour += Math.ceil(num / mid);
    }

    if (totalHourTookByIhour > h) {
      left = mid + 1;
    } else {
      ans = Math.min(ans, mid);
      right = mid - 1;
    }
  }

  return ans;
};
