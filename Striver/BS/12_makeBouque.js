const makeBouquets = (arr, m, k) => {
  const maxDay = Math.max(...arr);

  let low = 1;
  let high = maxDay;

  let minDay = Infinity;

  const getBouquetCount = (day) => {
    let count = 0;
    let bouquetCount = 0;

    for (let roseBloomDay of arr) {
      if (roseBloomDay <= day) {
        count++;
      } else {
        count = 0;
      }
      if (count === k) {
        bouquetCount++;
        count = 0;
      }
    }

    return bouquetCount;
  };

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    const count = getBouquetCount(mid);
    if (count >= m) {
      minDay = Math.min(minDay, mid);

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return minDay;
};

console.log(makeBouquets([7, 7, 7, 7, 13, 11, 12, 7], 2, 3));
