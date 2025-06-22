const cocoEatingbanana = (arr, totalHour) => {
  const max = Math.max(...arr);

  const findHour = (bananaPerHour) => {
    let totalHour = 0;
    for (let pile of arr) {
      totalHour += Math.ceil(pile / bananaPerHour);
    }
    return totalHour;
  };

  console.log({ max });

  for (let bananaPerHour = 1; bananaPerHour <= max; bananaPerHour++) {
    const _totalHour = findHour(bananaPerHour);
    if (_totalHour <= totalHour) {
      return bananaPerHour;
    }
  }

  return -1;
};

const cocoEatingbanana2 = (arr, totalHour) => {
  let low = 1;
  let high = Math.max(...arr);

  let minimumHour = Infinity;

  const findHour = (bananaPerHour) => {
    let totalHour = 0;
    for (let pile of arr) {
      totalHour += Math.ceil(pile / bananaPerHour);
    }
    return totalHour;
  };

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    const _totalhour = findHour(mid);
    if (_totalhour <= totalHour) {
      minimumHour = Math.min(minimumHour, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return minimumHour;
};

console.log(cocoEatingbanana([7, 15, 6, 3], 8));
console.log(cocoEatingbanana2([7, 15, 6, 3], 8));
